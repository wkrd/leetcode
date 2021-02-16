function specialArray(nums: number[]): number {
  for (let x = 1; x < nums.length + 1; x++) {
    let c = 0

    for (let n of nums) {
      if (n >= x) c++
    }

    if (c === x) return x
  }

  return -1
}

//console.log(specialArray([0, 4, 3, 0, 4]))
console.log(specialArray([3, 5]))

export {}
