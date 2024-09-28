"use client";

import { FC, useEffect, useRef } from "react";
import css from "./mainLogo.module.scss";

const RENDER_TEXT = `
000000  000000  00000   000000  00000   0    0  000000  000000  00000 
    00  00      00  00  00  00  00  00  00  00    00    00      00  00
  00    0000    0000    00  00  0000     0000     00    0000    0000  
00      00      00  00  00  00  00  00    00      00    00      00  00
000000  000000  00   0  000000  00000     00      00    000000  00  00
`;
const RENDER_TEXT_LINES = RENDER_TEXT.split("\n");

// const SHINY_TEXT_LETTERS = "ZZZZZZ  EEEEEE  RRRRRR  OOOOOO  BBBBBB  YYYYYY  TTTTTT  EEEEEE  RRRRRR"

const CHAR_HEIGHT = 10;
const CHAR_WIDTH = 5;

const TEXT_WIDTH = RENDER_TEXT_LINES[1].length;
const TEXT_HEIGHT = RENDER_TEXT_LINES.length - 2;

export const clamp = (min: number, max: number, value: number) => {
  if (value < min) return min;
  if (value > max) return max;
  return value;
};

export const clamp01 = (value: number) => {
  return clamp(0, 1, value);
};

const repeat = (t: number, length: number) => {
  return clamp(0, length, t - Math.floor(t / length) * length);
};

const lerpAngle = (a: number, b: number, t: number) => {
  let delta = repeat(b - a, 360);
  if (delta > 180) {
    delta -= 360;
  }
  return a + delta * clamp01(t);
};

export const lerp = (a: number, b: number, t: number) => {
  return a + (b - a) * clamp01(t);
};

const MainLogo: FC = () => {
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

    canvas.width = TEXT_WIDTH * CHAR_WIDTH;
    canvas.height = TEXT_HEIGHT * CHAR_HEIGHT;

    const render = (time: number) => {
      const slowTime = time / 20;
      // const animationsCount = Math.floor(slowTime / TEXT_WIDTH)
      const animationIndex = 0; //animationsCount % 3

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${CHAR_HEIGHT}px monospace`;

      for (let y = 0; y < RENDER_TEXT_LINES.length; y++) {
        const line = RENDER_TEXT_LINES[y];

        for (let x = 0; x < line.length; x++) {
          const char = line[x];

          if (char !== "0") {
            continue;
          }

          let shinyIndex = Math.floor(slowTime % TEXT_WIDTH) === x - y;
          let shiny1Index = Math.floor(slowTime % TEXT_WIDTH) === x - 1 - y;

          let renderChar = "0";
          // if (animationIndex <= 1) {
          //   renderChar = shinyIndex || shiny1Index ? SHINY_TEXT_LETTERS[x] : '#'
          // }

          let renderColor = "gray";
          if (animationIndex === 0) {
            //0: final shiny wave
            const waveDistance = Math.abs(
              Math.floor((slowTime % (TEXT_WIDTH + 25)) - 20) - (x - y)
            );

            renderColor = `hsl(0deg 0% ${lerp(100, 50, waveDistance / 6)}%)`;
          } else if (animationIndex === 1) {
            //0: left to right white shiny
            renderColor = shinyIndex || shiny1Index ? `white` : "gray";
          } else if (animationIndex === 2) {
            //1: left to right random colors
            if (shinyIndex || shiny1Index) {
              renderColor = `hsl(${Math.random() * 360}deg 100% 50%)`;
            }
            //3: sine wave
            const sineDistance =
              (Math.sin(x / 10 + slowTime / 5) * TEXT_HEIGHT) / 2 +
              TEXT_HEIGHT / 2 -
              y;

            //white sine wave
            // renderColor = `hsl(0deg 0% ${lerp(100, 50, Math.abs(sineDistance) / 3)}%)`

            //rainbow sine wave
            const sineLerp = lerp(1, 0, Math.abs(sineDistance) / 4);
            const lerpH = lerpAngle(
              0,
              (x / TEXT_WIDTH) * 360 - slowTime * 10,
              sineLerp
            );
            const lerpS = lerp(0, 100, sineLerp);
            const lerpL = lerp(75, 50, sineLerp);
            renderColor = `hsl(${lerpH}deg ${lerpS}% ${lerpL}%)`;
          }

          ctx.fillStyle = renderColor;
          ctx.fillText(renderChar, x * CHAR_WIDTH, y * CHAR_HEIGHT);
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

export default MainLogo;
