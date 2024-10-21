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

const iconSize = 45;

const tailPartsCount = 30;
const tailPartLength = 100;
const tailStartWidth = 10;
const tailEndWidth = 0;

const createAndLoadImage = (url: string) => {
  const image = new Image();

  image.src = url;

  return image;
};

const clamp = (min: number, max: number, value: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

const clamp01 = (value: number) => {
  return clamp(0, 1, value);
};

const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * clamp01(t);
};

const orbits = [
  [
    {
      text: "csharp",
      image: createAndLoadImage(csharp),
    },
    {
      text: "unity",
      image: createAndLoadImage(unity),
    },
    {
      text: "javascript",
      image: createAndLoadImage(javascript),
    },
    {
      text: "typescript",
      image: createAndLoadImage(typescript),
    },
    {
      text: "nodejs",
      image: createAndLoadImage(nodejs),
    },
    {
      text: "react",
      image: createAndLoadImage(react),
    },
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
];

const getOrbitPosition = (
  index: number,
  count: number,
  time: number,
  sizeX: number,
  sizeY: number,
  centerX: number,
  centerY: number
) => {
  return [
    Math.sin(time + (index / count) * Math.PI * 2) * sizeX + centerX,
    Math.cos(time + (index / count) * Math.PI * 2) * sizeY + centerY,
  ];
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

    canvas.width = 500;
    canvas.height = 150;

    const render = (time: number) => {
      const orbitWidth = canvas.width / 2 - iconSize;

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      const slowTime = time / 7000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // ctx.fillStyle = "rgba(0,255,0,0.25)"
      // ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < orbits.length; i++) {
        const orbit = orbits[i];

        ctx.strokeStyle = "rgba(255,255,255,0.25)";
        ctx.save();
        ctx.translate(centerX, centerY);
        ctx.scale(1, 0.25);
        ctx.beginPath();
        ctx.arc(0, 0, orbitWidth, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();

        for (let k = 0; k < orbit.length; k++) {
          const item = orbit[k];

          for (let z = 0; z < tailPartsCount; z++) {
            const [renderX, renderY] = getOrbitPosition(
              k,
              orbit.length,
              slowTime - z / tailPartLength,
              orbitWidth,
              orbitWidth / 4,
              centerX,
              centerY
            );
            const [nextRenderX, nextRenderY] = getOrbitPosition(
              k,
              orbit.length,
              slowTime - (z + 1) / tailPartLength,
              orbitWidth,
              orbitWidth / 4,
              centerX,
              centerY
            );

            ctx.strokeStyle = "rgba(255,255,255,0.1)";
            ctx.beginPath();
            ctx.moveTo(renderX, renderY);
            ctx.lineTo(nextRenderX, nextRenderY);
            ctx.lineWidth = lerp(
              tailStartWidth,
              tailEndWidth,
              z / tailPartsCount
            );
            ctx.stroke();
          }

          const [renderX, renderY] = getOrbitPosition(
            k,
            orbit.length,
            slowTime,
            orbitWidth,
            orbitWidth / 4,
            centerX,
            centerY
          );

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
        }
      }

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
