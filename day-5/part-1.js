import * as fs from "fs"

const input1 = fs.readFileSync("input.txt", "utf-8").split("\n\n")

const input2 = `
3-5
10-14
16-20
12-18

1
5
8
11
17
32`
    .trim()
    .split("\n\n")

const input = input1

const ranges = input[0]
    .split("\n")
    .map((r) => r.split("-").map((n) => Number(n)))

const ids = input[1].split("\n").map((x) => Number(x))

let res = 0
for (let id of ids) {
    for (let range of ranges) {
        if (id >= range[0] && id <= range[1]) {
            res++
            break
        }
    }
}
console.log(res)
