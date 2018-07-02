class CoordinatePlane {
  constructor(config = { width: 10, height: 10 }) {
    this.width = config.width
    this.height = config.height
    this.plane = []
    for (var row = 0; row < this.height; row++) {
      this.plane.push(new Array(10).fill(" ", 0, 10))
    }
    console.log(this.plane)
  }

  render = () => {
    let rendered = "";
    for (var y = 0; y < this.plane.length; y++) {
      rendered += this.plane[y].join("") + "\n";
    }
    return rendered;
  }
}
