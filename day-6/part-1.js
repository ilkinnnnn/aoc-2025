import * as fs from "fs"

const input1 = fs.readFileSync("input.txt", "utf-8")
const input2 = `
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `.trimStart()

const lines = input1.split("\n")

const grid = Array(lines.length)

for (let i = 0; i < lines.length - 1; i++) {
    grid[i] = lines[i]
        .trim()
        .split(/ +/)
        .map((x) => {
            return Number(x)
        })
}

grid[grid.length - 1] = lines[lines.length - 1].trim().split(/ +/g)

let sum = 0
for (let colI = 0; colI < grid[0].length; colI++) {
    if (grid[grid.length - 1][colI] == "+") {
        let res = 0
        for (let rowI = 0; rowI < grid.length - 1; rowI++) {
            res += grid[rowI][colI]
        }
        sum += res
    }

    if (grid[grid.length - 1][colI] == "*") {
        let res = 1
        for (let rowI = 0; rowI < grid.length - 1; rowI++) {
            res *= grid[rowI][colI]
        }
        sum += res
    }
}
console.log(sum)
