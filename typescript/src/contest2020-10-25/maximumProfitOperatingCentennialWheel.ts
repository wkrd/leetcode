function minOperationsMaxProfit(
  customers: number[],
  boardingCost: number,
  runningCost: number
): number {
  let profit = 0
  let maxProfit = 0
  let maxProfitRotations = 0
  let waiting = 0

  for (let i = 0; i < customers.length; i++) {
    const c = customers[i]
    waiting += c
    // console.log('wait', waiting)

    const boarding = Math.min(4, waiting)
    waiting -= boarding
    profit = profit + (boardingCost * boarding - runningCost)
    // console.log(profit)

    if (profit > maxProfit) {
      maxProfit = profit
      maxProfitRotations = i + 1
    }
  }
  while (waiting > 0) {
    const boarding = Math.min(4, waiting)
    waiting -= boarding
    profit = profit + (boardingCost * boarding - runningCost)
    // console.log(profit)

    if (profit > maxProfit) {
      maxProfit = profit
      maxProfitRotations++
    }
  }

  if (maxProfit === 0) return -1
  return maxProfitRotations
}

// console.log('3=' + minOperationsMaxProfit([8, 3], 5, 6))

console.log('7=' + minOperationsMaxProfit([10, 9, 6], 6, 4))
