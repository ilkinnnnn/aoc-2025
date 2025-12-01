import * as fs from "fs"

const content = fs.readFileSync("input.txt", "utf-8")

const rotations = content.split("\n").map((r) => {
    return { dir: r[0], count: Number(r.slice(1, r.length)) }
})

let res = 0
let curr = 50

for (const rot of rotations) {
    if (rot.dir == "L") {
        curr -= rot.count
        while (curr < 0) curr += 100
    } else if (rot.dir == "R") {
        curr += rot.count
        while (curr > 99) curr -= 100
    }

    if (curr == 0) res++
}
console.log(res)
