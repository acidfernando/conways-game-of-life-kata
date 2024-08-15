import { describe, expect, it } from "vitest"
import { GameOfLife } from "./GameOfLife.js"

describe("GameOfLife", () => {
  describe("toString", () => {
    it("prints a dead game with black", () => {
      const game = GameOfLife.from([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])

      const string = game.toString()

      expect(string).toBe("◼️◼️◼️\n◼️◼️◼️\n◼️◼️◼️")
    })

    it("prints all cells alive game with white", () => {
      const game = GameOfLife.from([
        [true, true, true],
        [true, true, true],
        [true, true, true],
      ])

      const string = game.toString()

      expect(string).toBe("◽️◽️◽️\n◽️◽️◽️\n◽️◽️◽️")
    })

    it("prints mixed cells alive game with their respective colors", () => {
      const game = GameOfLife.from([
        [false, true, true],
        [true, false, true],
        [true, true, false],
      ])

      const string = game.toString()

      expect(string).toBe("◼️◽️◽️\n◽️◼️◽️\n◽️◽️◼️")
    })
  })

  //   Any live cell with fewer than two live neighbours dies, as if caused by under-population.
  //   Any live cell with two or three live neighbours lives on to the next generation.
  //   Any live cell with more than three live neighbours dies, as if by overcrowding.
  //   Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.

  describe("nextGeneration", () => {
    it("an lonely cell dies due to under-population", () => {
      const lonelyCellGame = GameOfLife.from([
        [false, false, false],
        [false, true, false],
        [false, false, false],
      ])

      lonelyCellGame.nextGeneration()

      const expectedGame = GameOfLife.from([
        [false, false, false],
        [false, false, false],
        [false, false, false],
      ])

      expect(lonelyCellGame).toEqual(expectedGame)
    })
  })
})
