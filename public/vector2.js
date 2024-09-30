export default class vector2 {
  constructor(x, y) {
      if(x != null && y == null){
          this.y = x.y
          this.x = x.x
      }else{
          this.x = x || 0
          this.y = y || 0
      }
  }

  add = (x, y) => {
      if (y == null && x != null) {
          y = x.y
          x = x.x
      }

      return new vector2(this.x + x, this.y + y)
  }
  minus = (x, y) => {
      if (y == null && x != null) {
          y = x.y
          x = x.x
      }

      return new vector2(this.x - x, this.y - y)
  }
  multiply = (factor) => {
      return new vector2(this.x * factor, this.y * factor)
  }
  magnitude = () => {
      return Math.sqrt((this.x * this.x) + (this.y * this.y))
  }
  normalized = () => {
      const length = this.magnitude()
      return new vector2(this.x / length, this.y / length)
  }
  static manhattanDistance = (x1, y1, x2, y2) => {
      return Math.abs(x1 - x2) + Math.abs(y1 - y2)
  }
  manhattanDistance = (otherVector) => {
      return vector2.manhattanDistance(this.x, this.y, otherVector.x, otherVector.y)
  }
  static distance = (x1, y1, x2, y2) => {
      return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))
  }
  distance = (otherVector) => {
      return vector2.distance(this.x, this.y, otherVector.x, otherVector.y)
  }
  toAngle = () => {
      let angle = Math.atan2(this.x, this.y) / Math.PI * 180

      if (angle > 180) angle -= 360
      if (angle < -180) angle += 360

      return angle
  }
  static fromAngle = (angle) => {
      if (angle > 180) angle -= 360
      if (angle < -180) angle += 360

      return new vector2(Math.sin(angle * Math.PI / 180), Math.cos(angle * Math.PI / 180))
  }
  copy = () => {
      return new vector2(this.x, this.y)
  }
equals = otherVector => {
  return this.x == otherVector.x && this.y == otherVector.y
}
}