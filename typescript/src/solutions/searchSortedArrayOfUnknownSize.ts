/**
 * class ArrayReader {
 *		// This is the ArrayReader's API interface.
 *		// You should not implement it, or speculate about its implementation
 *		get(index: number): number {};
 *  };
 */

const OUT_OF_BOUNDS = 2147483647

function search(reader: ArrayReader, target: number): number {
  let l = 0
  let r = 10000

  while (l <= r) {
    let mid = (l + r) >> 1

    let v = reader.get(mid)

    if (v === OUT_OF_BOUNDS) {
      r = mid - 1
    } else if (v === target) {
      return mid
    } else if (reader.get(mid) > target) {
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
