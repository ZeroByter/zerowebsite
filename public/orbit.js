const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 700
canvas.height = 700

const iconSize = 40;

const getOrbitPosition = (index, count, time, size, centerX, centerY) => {
  return [
    Math.sin(time + index / count * Math.PI * 2) * size + centerX,
    Math.cos(time + index / count * Math.PI * 2) * size + centerY
  ]
}

const createAndLoadImage = (url) => {
  const image = new Image()

  image.src = url

  return image
}

const orbitData = {
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
            image: createAndLoadImage("/src/imgs/orbitIcons/csharp.webp"),
            orbit: {
              orbitSize: 50,
              timeModifier: -1,
              items: [
                {
                  text: "unity",
                  image: createAndLoadImage("/src/imgs/orbitIcons/unity.webp"),
                }
              ]
            }
          }
        ]
      }
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
            image: createAndLoadImage("/src/imgs/orbitIcons/javascript.webp"),
          },
          {
            text: "ts",
            image: createAndLoadImage("/src/imgs/orbitIcons/typescript.webp"),
          }
        ],
        outerOrbits: [
          {
            orbitSize: 135,
            timeModifier: -1.5,
            items: [
              {
                text: "nodejs",
                image: createAndLoadImage("/src/imgs/orbitIcons/nodejs.webp"),
              },
              {
                text: "react",
                image: createAndLoadImage("/src/imgs/orbitIcons/react.webp"),
                orbit: {
                  orbitSize: 50,
                  timeModifier: -1,
                  items: [
                    {
                      text: "redux",
                      image: createAndLoadImage("/src/imgs/orbitIcons/redux.webp"),
                    },
                    {
                      text: "graphql",
                      image: createAndLoadImage("/src/imgs/orbitIcons/graphql.webp"),
                    },
                    {
                      text: "threejs",
                      image: createAndLoadImage("/src/imgs/orbitIcons/threejs.webp"),
                    }
                  ]
                }
              }
            ]
          }
        ]
      }
    }
  ]
}

/**
 * 
 * @param {CanvasRenderingContext2D} ctx 
 * @param {*} time 
 * @param {*} centerX 
 * @param {*} centerY 
 * @param {*} orbitData 
 */
const renderOrbit = (ctx, time, centerX, centerY, orbitData) => {
  ctx.strokeStyle = "rgba(255,255,255,0.25)"
  ctx.beginPath()
  ctx.arc(centerX, centerY, orbitData.orbitSize, 0, Math.PI * 2)
  ctx.stroke()

  if (orbitData.outerOrbits) {
    for (const orbit of orbitData.outerOrbits) {
      renderOrbit(ctx, time, centerX, centerY, orbit)
    }
  }

  for (let i = 0; i < orbitData.items.length; i++) {
    const item = orbitData.items[i]

    const [renderX, renderY] = getOrbitPosition(
      i,
      orbitData.items.length,
      time * orbitData.timeModifier,
      orbitData.orbitSize,
      centerX, centerY
    )

    if (item.orbit) {
      renderOrbit(ctx, time, renderX, renderY, item.orbit)
    }

    if (item.text) {
      // ctx.strokeStyle = "blue"
      // ctx.beginPath()
      // ctx.moveTo(renderX, renderY)
      // ctx.lineTo(centerX, centerY)
      // ctx.stroke()

      ctx.drawImage(item.image, 0, 0, item.image.width, item.image.height, renderX - iconSize / 2, renderY - iconSize / 2, iconSize, iconSize)

      // ctx.fillStyle = `red`
      // ctx.fillRect(renderX - iconSize / 2, renderY - iconSize / 2, iconSize, iconSize)

      // ctx.fillStyle = "white"
      // ctx.fillText(item.text, renderX, renderY)
    }
  }
}

const render = (time) => {
  const slowTime = time / 7000

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // ctx.fillStyle = "rgba(0,255,0,0.25)"
  // ctx.fillRect(0, 0, canvas.width, canvas.height)

  renderOrbit(ctx, slowTime, canvas.width / 2, canvas.height / 2, orbitData)

  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)
