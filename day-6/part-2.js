import * as fs from "fs"

const input1 = fs.readFileSync("input.txt", "utf-8")
const input2 = `
123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `.trimStart()

const lines = input1.split("\n")

for (let line of lines) {
    if (line.length != lines[0].length) {
        console.log("no")
    }
}

let colCurr = lines[0].length - 1

let sum = 0
let nums = []
while (colCurr >= 0) {
    let num = 0
    let power = 0
    for (let rowI = lines.length - 2; rowI >= 0; rowI--) {
        if (lines[rowI][colCurr] != " ") {
            num += Number(lines[rowI][colCurr]) * 10 ** power
            power++
        }
    }
    if (num != 0) {
        nums.push(num)
    }
    power = 0

    switch (lines[lines.length - 1][colCurr]) {
        case "+":
            sum += nums.reduce((acc, c) => acc + c, 0)
            nums = []
            break
        case "*":
            sum += nums.reduce((acc, c) => acc * c, 1)
            nums = []
            break
    }
    colCurr--
}
console.log(sum)
