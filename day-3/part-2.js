import * as fs from "fs"

const lines = fs.readFileSync("input.txt", "utf-8").split("\n")

const lines2 = `
987654321111111
811111111111119
234234234234278
818181911112111
`
    .trim()
    .split("\n")

let res = 0

for (let line of lines) {
    let result = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    console.assert(result.length == 12)

    outer: for (let i = 0; i < line.length; i++) {
        const digit = Number(line[i])
        for (let j = 0; j < 12; j++) {
            if (11 - j + i < line.length && digit > result[j]) {
                result[j] = digit
                clean(result, j)
                continue outer
            }
        }
    }

    let sum = 0
    for (let i = 0; i < 12; i++) {
        sum += result[i] * 10 ** (11 - i)
    }
    res += sum
}

console.log(res)

function clean(result, after) {
    for (let i = after + 1; i < result.length; i++) {
        result[i] = 0
    }
}
