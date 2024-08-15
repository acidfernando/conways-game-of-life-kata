export class Board {
  static from(state: boolean[][]) {
    return new Board(state)
  }

  private constructor(private state: boolean[][]) {}

  getCellAt(CoordinateY: number, CoordinateX: number): boolean {
    const row = this.getRow(CoordinateY)
    return row[CoordinateX] ?? false
  }

  private getRow(CoordinateY: number) {
    return this.state[CoordinateY] ?? []
  }

  setValue(CoordinateY: number, CoordinateX: number, value: boolean) {
    this.state[CoordinateY][CoordinateX] = value
  }

  clone() {
    return new Board(structuredClone(this.state))
  }

  getNeighbours(CoordinateY: number, CoordinateX: number) {
    return [
      this.getCellAt(CoordinateY - 1, CoordinateX - 1),
      this.getCellAt(CoordinateY - 1, CoordinateX),
      this.getCellAt(CoordinateY - 1, CoordinateX + 1),
      this.getCellAt(CoordinateY, CoordinateX - 1),
      this.getCellAt(CoordinateY, CoordinateX + 1),
      this.getCellAt(CoordinateY + 1, CoordinateX - 1),
      this.getCellAt(CoordinateY + 1, CoordinateX),
      this.getCellAt(CoordinateY + 1, CoordinateX + 1),
    ]
  }

  toString() {
    return this.state
      .map((cells) => cells.map((cell) => (cell ? "◽️" : "◼️")))
      .map((val) => val.join(""))
      .join("\n")
  }
}
