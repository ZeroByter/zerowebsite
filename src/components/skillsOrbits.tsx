"use client";

import { FC, useEffect, useRef } from "react";
import css from "./skillsOrbit.module.scss";

import csharp from "../imgs/orbitIcons/csharp.webp";
import unity from "../imgs/orbitIcons/unity.webp";
import javascript from "../imgs/orbitIcons/javascript.webp";
import typescript from "../imgs/orbitIcons/typescript.webp";
import nodejs from "../imgs/orbitIcons/nodejs.webp";
import react from "../imgs/orbitIcons/react.webp";
import redux from "../imgs/orbitIcons/redux.webp";
import graphql from "../imgs/orbitIcons/graphql.webp";
import threejs from "../imgs/orbitIcons/threejs.webp";

const iconSize = 40;

const getOrbitPosition = (
  index: number,
  count: number,
  time: number,
  size: number,
  centerX: number,
  centerY: number
) => {
  return [
    Math.sin(time + (index / count) * Math.PI * 2) * size + centerX,
    Math.cos(time + (index / count) * Math.PI * 2) * size + centerY,
  ];
};

const createAndLoadImage = (url: string) => {
  const image = new Image();

  image.src = url;

  return image;
};

type Orbit = {
  orbitSize: number;
  timeModifier: number;
  items: OrbitItem[];
  outerOrbits?: Orbit[];
};

type OrbitItem = {
  text: string;
  image: HTMLImageElement | null;
  orbit?: Orbit;
};

const orbitData: Orbit = {
  orbitSize: 140,
  timeModifier: 1,
  items: [
    {
      text: "",
      image: null,
      orbit: {
        orbitSize: 0,
        timeModifier: 0,
        items: [
          {
            text: "c#",
            image: createAndLoadImage(csharp),
            orbit: {
              orbitSize: 50,
              timeModifier: -1,
              items: [
                {
                  text: "unity",
                  image: createAndLoadImage(unity),
                },
              ],
            },
          },
        ],
      },
    },
    {
      text: "",
      image: null,
      orbit: {
        orbitSize: 35,
        timeModifier: 2,
        items: [
          {
            text: "js",
            image: createAndLoadImage(javascript),
          },
          {
            text: "ts",
            image: createAndLoadImage(typescript),
          },
        ],
        outerOrbits: [
          {
            orbitSize: 135,
            timeModifier: -1.5,
            items: [
              {
                text: "react",
                image: createAndLoadImage(react),
                orbit: {
                  orbitSize: 50,
                  timeModifier: -1,
                  items: [
                    {
                      text: "redux",
                      image: createAndLoadImage(redux),
                    },
                    {
                      text: "graphql",
                      image: createAndLoadImage(graphql),
                    },
                    {
                      text: "threejs",
                      image: createAndLoadImage(threejs),
                    },
                  ],
                },
              },
              {
                text: "nodejs",
                image: createAndLoadImage(nodejs),
              },
            ],
          },
        ],
      },
    },
  ],
};

const renderOrbit = (
  ctx: CanvasRenderingContext2D,
  time: number,
  centerX: number,
  centerY: number,
  orbitData: Orbit
) => {
  ctx.strokeStyle = "rgba(255,255,255,0.25)";
  ctx.beginPath();
  ctx.arc(centerX, centerY, orbitData.orbitSize, 0, Math.PI * 2);
  ctx.stroke();

  if (orbitData.outerOrbits) {
    for (const orbit of orbitData.outerOrbits) {
      renderOrbit(ctx, time, centerX, centerY, orbit);
    }
  }

  for (let i = 0; i < orbitData.items.length; i++) {
    const item = orbitData.items[i];

    const [renderX, renderY] = getOrbitPosition(
      i,
      orbitData.items.length,
      time * orbitData.timeModifier,
      orbitData.orbitSize,
      centerX,
      centerY
    );

    if (item.orbit) {
      renderOrbit(ctx, time, renderX, renderY, item.orbit);
    }

    if (item.image && item.image.complete) {
      // ctx.strokeStyle = "blue"
      // ctx.beginPath()
      // ctx.moveTo(renderX, renderY)
      // ctx.lineTo(centerX, centerY)
      // ctx.stroke()
      ctx.drawImage(
        item.image,
        0,
        0,
        item.image.width,
        item.image.height,
        renderX - iconSize / 2,
        renderY - iconSize / 2,
        iconSize,
        iconSize
      );
      // ctx.fillStyle = `red`
      // ctx.fillRect(renderX - iconSize / 2, renderY - iconSize / 2, iconSize, iconSize)
      // ctx.fillStyle = "white"
      // ctx.fillText(item.text, renderX, renderY)
    }
  }
};

const SkillsOrbit: FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const requestFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      window.cancelAnimationFrame(requestFrameRef.current);
      return;
    }

    const ctx = canvas.getContext("2d");

    if (!ctx) {
      window.cancelAnimationFrame(requestFrameRef.current);
      return;
    }

    canvas.width = 700;
    canvas.height = 600;

    const render = (time: number) => {
      const slowTime = time / 7000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      renderOrbit(
        ctx,
        slowTime,
        canvas.width / 2,
        canvas.height / 2,
        orbitData
      );

      requestFrameRef.current = window.requestAnimationFrame(render);
    };

    requestFrameRef.current = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(requestFrameRef.current);
    };
  }, []);

  return <canvas className={css.container} ref={canvasRef}></canvas>;
};

export default SkillsOrbit;
