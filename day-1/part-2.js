import * as fs from "fs"

const content = fs.readFileSync("input.txt", "utf-8")

const rotations = content.split("\n").map((r) => {
    return { dir: r[0], count: Number(r.slice(1, r.length)) }
})

let res = 0
let curr = 50

const rotationss = [
    {
        dir: "L",
        count: 68,
    },
    {
        dir: "L",
        count: 30,
    },
    {
        dir: "R",
        count: 48,
    },
    {
        dir: "L",
        count: 5,
    },
    {
        dir: "R",
        count: 60,
    },
    {
        dir: "L",
        count: 55,
    },
    {
        dir: "L",
        count: 1,
    },
    {
        dir: "L",
        count: 99,
    },
    {
        dir: "R",
        count: 14,
    },
    {
        dir: "L",
        count: 82,
    },
]

for (const rot of rotationss) {
    res += Math.floor(rot.count / 100)
    const count = rot.count % 100

    if (rot.dir == "L") {  
        curr -= count
        if (curr < 0) {
            if (curr + count != 0) res++
            curr += 100
        }
        if (curr == 0) res++
    } else if (rot.dir == "R") {
        curr += count
        if (curr > 99) {
            curr -= 100
            res ++
        }
    }

}
console.log(res)
