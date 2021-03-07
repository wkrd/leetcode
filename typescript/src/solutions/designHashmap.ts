class KeyVal {
  constructor(public readonly key: number, public readonly val: number) {}
}

type Buckets = (KeyVal | null)[][]

class MyHashMap {
  private buckets: Buckets = new Array(64)
  private capacity = 64
  private count = 0

  constructor() {
    for (let i = 0; i < this.buckets.length; i++) {
      this.buckets[i] = []
    }
  }

  private upsert(newItem: KeyVal) {
    const slot = newItem.key % this.capacity

    const bucket = this.buckets[slot]

    for (let i = 0; i < bucket.length; i++) {
      const item = bucket[i]
      if (item?.key === newItem.key) {
        bucket[i] = newItem
        return
      }
    }
    bucket.push(newItem)
  }

  private static rebalance(buckets: Buckets, newCapacity: number): Buckets {
    const newBuckets: Buckets = new Array(newCapacity)
    for (let i = 0; i < newBuckets.length; i++) {
      newBuckets[i] = []
    }

    for (const bucket of buckets) {
      for (const item of bucket) {
        if (item) newBuckets[item.key % newCapacity].push(item)
      }
    }
    return newBuckets
  }

  put(key: number, value: number): void {
    this.upsert(new KeyVal(key, value))

    this.count = this.count + 1

    const loadFactor = (1.0 * this.count) / this.capacity

    if (loadFactor >= 0.75) {
      this.capacity = this.capacity * 2
      this.buckets = MyHashMap.rebalance(this.buckets, this.capacity)
    }
  }

  get(key: number): number {
    const slot = key % this.capacity

    for (const item of this.buckets[slot]) {
      if (item?.key === key) return item.val
    }

    return -1
  }

  remove(key: number): void {
    const slot = key % this.capacity
    const bucket = this.buckets[slot]

    for (let i = 0; i < bucket.length; i++) {
      const item = bucket[i]
      if (item?.key === key) {
        delete bucket[i]
        return
      }
    }
  }
}

export { MyHashMap }
