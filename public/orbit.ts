import { exit } from "process";

type Orbit = {
  orbitSize: number;
  timeModifier: number;
  items: OrbitItem[];
  outerOrbits?: Orbit[];
}

type OrbitItem = {
  text: string;
  image: HTMLImageElement;
  orbit?: Orbit;
}

const canvas = document.querySelector("canvas")
if (!canvas) {
  exit();
}
const ctx = canvas.getContext("2d")
if (!ctx) {
  exit();
}

canvas.width = 600
canvas.height = 600

const iconSize = 10;

const orbitSize = 200

const getOrbitPosition = (index, count, time, size, centerX, centerY) => {
  return [
    Math.sin(time + index / count * Math.PI * 2) * size + centerX,
    Math.cos(time + index / count * Math.PI * 2) * size + centerY
  ]
}

const createAndLoadImage = (url: string) => {
  const image = new Image()

  image.src = "http://www.placeholder.co/400"

  return image
}

const orbitData: Orbit = {
  orbitSize: 100,
  timeModifier: 1,
  items: [
    {
      text: "",
      image: createAndLoadImage(""),
      orbit: {
        orbitSize: 0,
        timeModifier: 1,
        items: [
          {
            text: "c#",
            image: createAndLoadImage(""),
            orbit: {
              orbitSize: 10,
              timeModifier: 1,
              items: [
                {
                  text: "unity",
                  image: createAndLoadImage("")
                }
              ]
            }
          }
        ]
      }
    },
    {
      text: "",
      image: createAndLoadImage(""),
      orbit: {
        orbitSize: 10,
        timeModifier: 1,
        items: [
          {
            text: "js",
            image: createAndLoadImage("")
          },
          {
            text: "ts",
            image: createAndLoadImage("")
          }
        ],
        outerOrbits: [
          {
            orbitSize: 40,
            timeModifier: 1,
            items: [
              {
                text: "nodejs",
                image: createAndLoadImage("")
              },
              {
                text: "react",
                image: createAndLoadImage(""),
                orbit: {
                  orbitSize: 10,
                  timeModifier: 1,
                  items: [
                    {
                      text: "redux",
                      image: createAndLoadImage("")
                    },
                    {
                      text: "graphql",
                      image: createAndLoadImage("")
                    }
                  ]
                }
              }
            ]
          },
          {
            orbitSize: 100,
            timeModifier: 1,
            items: [
              {
                text: "threejs",
                image: createAndLoadImage("")
              }
            ]
          }
        ]
      }
    }
  ]
}

const mainItems = [
  ["js", "ts"],
  "c#"
]

const render = (time) => {
  const slowTime = time / 2000

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  ctx.fillStyle = "rgba(0,255,0,0.25)"
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < mainItems.length; i++) {
    const mainItem = mainItems[i]

    const [renderX, renderY] = getOrbitPosition(
      i,
      mainItems.length,
      slowTime,
      orbitSize / 2,
      canvas.width / 2,
      canvas.height / 2
    )

    if (i == 0) {
      for (let k = 0; k < mainItem.length; k++) {
        const [subRenderX, subRenderY] = getOrbitPosition(
          k,
          mainItem.length,
          -slowTime,
          10,
          renderX,
          renderY
        )

        ctx.fillStyle = "blue"
        ctx.fillRect(subRenderX - iconSize / 2, subRenderY - iconSize / 2, iconSize, iconSize)
      }

      for (let k = 0; k < mainItem.length; k++) {
        const [subRenderX, subRenderY] = getOrbitPosition(
          k,
          mainItem.length,
          slowTime * 1.25,
          60,
          renderX,
          renderY
        )

        ctx.fillStyle = "purple"
        ctx.fillRect(subRenderX - iconSize / 2, subRenderY - iconSize / 2, iconSize, iconSize)
      }
    } else {
      ctx.fillStyle = "red"
      ctx.fillRect(renderX - iconSize / 2, renderY - iconSize / 2, iconSize, iconSize)
    }

    ctx.fillStyle = "white"
    ctx.fillText(mainItem as any, renderX, renderY)
  }

  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)
