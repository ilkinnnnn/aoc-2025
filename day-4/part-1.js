import * as fs from "fs"

const grid1 = fs
    .readFileSync("input.txt", "utf-8")
    .split("\n")
    .map((x) => x.split(""))

const grid2 = `
..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.`
    .trim()
    .split("\n")
    .map((x) => x.split(""))

const grid = grid1

let count = 0
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        if (check(i, j, grid)) count++
    }
}
console.log(count)

function check(i, j, grid) {
    if (grid[i][j] != "@") return false

    let pc = 0
    for (let r = i - 1; r <= i + 1; r++) {
        for (let c = j - 1; c <= j + 1; c++) {
            if (i == r && j == c) continue

            if (grid[r] !== undefined && grid[r][c] == "@") {
                pc++
            }
        }
    }

    return pc < 4
}
