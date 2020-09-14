class MovingAverage {
  constructor(private size: number) {}

  private buffer: number[] = []
  private sum: number = 0

  next(val: number): number {
    this.buffer.push(val)
    this.sum += val

    if (this.buffer.length > this.size) {
      const removed = this.buffer.shift()!
      this.sum -= removed
    }

    return this.sum / this.buffer.length
  }
}

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */

const n = new MovingAverage(2)

console.log(n.next(10))
console.log(n.next(20))
console.log(n.next(30))
console.log(n.next(30))
