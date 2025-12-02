import * as fs from 'fs'

const content = fs.readFileSync("input.txt", 'utf-8')
const intervals = content.split(",").map(x => {
    const nums = x.split('-')
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
    [38593856, 38593862]
]

let sum = 0
for (let interval of intervals) {
    for (let i = interval[0]; i <= interval[1]; i ++) {
        if (isInvalid(i)) {
            sum += i
        }
    }
}
console.log(sum)


function isInvalid(num) {
    const digits = []
    while (num >= 1) {
        digits.push(num % 10)
        num = Math.floor(num / 10)
    }
    if ((digits.length % 2) != 0) return false


    for (let i = 0; i < digits.length / 2; i ++) {
        if (digits[i] != digits[digits.length / 2 + i]) return false
    }
    return true
}

