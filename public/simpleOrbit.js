const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")

canvas.width = 500
canvas.height = 250

const iconSize = 40;

const orbitWidth = canvas.width / 2 - iconSize

const centerX = canvas.width / 2
const centerY = canvas.height / 2

const tailPartsCount = 30;
const tailPartLength = 100;
const tailStartWidth = 10;
const tailEndWidth = 0

export const clamp = (min, max, value) => {
  if (value < min) return min
  if (value > max) return max
  return value
}

export const clamp01 = value => {
  return clamp(0, 1, value)
}

export const lerp = (a, b, t) => {
  return a + (b - a) * clamp01(t)
}

const createAndLoadImage = (url) => {
  const image = new Image()

  image.src = url

  return image
}

const orbits = [
  [
    {
      text: "csharp",
      image: createAndLoadImage("/src/imgs/orbitIcons/csharp.webp")
    },
    {
      text: "unity",
      image: createAndLoadImage("/src/imgs/orbitIcons/unity.webp")
    },
    {
      text: "javascript",
      image: createAndLoadImage("/src/imgs/orbitIcons/javascript.webp")
    },
    {
      text: "typescript",
      image: createAndLoadImage("/src/imgs/orbitIcons/typescript.webp")
    },
    {
      text: "nodejs",
      image: createAndLoadImage("/src/imgs/orbitIcons/nodejs.webp")
    },
    {
      text: "react",
      image: createAndLoadImage("/src/imgs/orbitIcons/react.webp")
    },
    {
      text: "redux",
      image: createAndLoadImage("/src/imgs/orbitIcons/redux.webp")
    },
    {
      text: "graphql",
      image: createAndLoadImage("/src/imgs/orbitIcons/graphql.webp")
    },
    {
      text: "threejs",
      image: createAndLoadImage("/src/imgs/orbitIcons/threejs.webp")
    }
  ]
]

const getOrbitPosition = (index, count, time, sizeX, sizeY, centerX, centerY) => {
  return [
    Math.sin(time + index / count * Math.PI * 2) * sizeX + centerX,
    Math.cos(time + index / count * Math.PI * 2) * sizeY + centerY
  ]
}

const render = (time) => {
  const slowTime = time / 7000

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // ctx.fillStyle = "rgba(0,255,0,0.25)"
  // ctx.fillRect(0, 0, canvas.width, canvas.height)

  for (let i = 0; i < orbits.length; i++) {
    const orbit = orbits[i]

    ctx.strokeStyle = "rgba(255,255,255,0.25)"
    ctx.save()
    ctx.translate(centerX, centerY)
    ctx.scale(1, 0.25)
    ctx.beginPath()
    ctx.arc(0, 0, orbitWidth, 0, Math.PI * 2)
    ctx.stroke()
    ctx.restore()

    for (let k = 0; k < orbit.length; k++) {
      const item = orbit[k]

      for (let z = 0; z < tailPartsCount; z++) {
        const [renderX, renderY] = getOrbitPosition(k, orbit.length, slowTime - z / tailPartLength, orbitWidth, orbitWidth / 4, centerX, centerY)
        const [nextRenderX, nextRenderY] = getOrbitPosition(k, orbit.length, slowTime - (z + 1) / tailPartLength, orbitWidth, orbitWidth / 4, centerX, centerY)

        ctx.strokeStyle = "rgba(255,255,255,0.1)"
        ctx.beginPath()
        ctx.moveTo(renderX, renderY)
        ctx.lineTo(nextRenderX, nextRenderY)
        ctx.lineWidth = lerp(tailStartWidth, tailEndWidth, z / tailPartsCount)
        ctx.stroke()
      }

      const [renderX, renderY] = getOrbitPosition(k, orbit.length, slowTime, orbitWidth, orbitWidth / 4, centerX, centerY)

      ctx.drawImage(item.image, 0, 0, item.image.width, item.image.height, renderX - iconSize / 2, renderY - iconSize / 2, iconSize, iconSize)
    }
  }

  window.requestAnimationFrame(render)
}

window.requestAnimationFrame(render)
