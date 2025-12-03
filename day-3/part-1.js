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
    let fd = 0
    let sd = 0

    for (let i = 0; i < line.length; i++) {
        let digit = Number(line[i])
        if (i != line.length - 1 && digit > fd) {
            fd = digit
            sd = 0
            continue
        }

        if (digit > sd) sd = digit
    }
    res += fd * 10 + sd
}

console.log(res)
