import * as fs from "fs"

const content = fs.readFileSync("input.txt", "utf-8")
const intervals = content.split(",").map((x) => {
    const nums = x.split("-")
    return [Number(nums[0]), Number(nums[1])]
})

const intervals2 = [
    [11, 22],
    [95, 115],
    [998, 1012],
    [1188511880, 1188511890],
    [222220, 222224],
    [1698522, 1698528],
    [446443, 446449],
    [38593856, 38593862],
    [565653, 565659],
    [824824821, 824824827],
    [2121212118, 2121212124],
]

let sum = 0
for (let interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i++) {
        if (isInvalid(i)) {
            sum += i
        }
    }
}
console.log(sum)

function isInvalid(num) {
    const snum = String(num)

    outer: for (let nCharSeq = 1; nCharSeq <= snum.length / 2; nCharSeq++) {
        if (snum.length % nCharSeq != 0) continue

        for (let seqI = 0; seqI < snum.length / nCharSeq - 1; seqI++) {
            for (let i = 0; i < nCharSeq; i++) {
                if (
                    snum[seqI * nCharSeq + i] != snum[(seqI + 1) * nCharSeq + i]
                ) {
                    continue outer
                }
            }
        }
        return true
    }
    return false
}
