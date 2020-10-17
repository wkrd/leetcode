class TwoSum {
  private numbers = new Map<number, number>()

  add(number: number): void {
    this.numbers.set(number, (this.numbers.get(number) ?? 0) + 1)
  }

  find(value: number): boolean {
    for (let [n, c] of this.numbers.entries()) {
      let complement = value - n
      if (n === complement) {
        if (c >= 2) {
          return true
        }
      } else if (this.numbers.has(complement)) {
        return true
      }
    }

    return false
  }
}

/**
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */

const twoSum = new TwoSum()
twoSum.add(0)
console.log(twoSum.find(0))
twoSum.add(5)
console.log(twoSum.find(5))

export {}
