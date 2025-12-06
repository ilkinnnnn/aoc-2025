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


ranges.sort((a, b) => a[0] - b[0])


let count = -1
const window = [0, 0]

for (let range of ranges) {
    if (range[0] > window[1]) {
        count += window[1] - window[0] + 1
        window[0] = range[0]
        window[1] = range[1]
    } else {
        window[1] = Math.max(range[1], window[1])
    }
}
count += window[1] - window[0] + 1
console.log(count)