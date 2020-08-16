package main

import "fmt"

// Stack implementation from: https://www.educative.io/edpresso/how-to-implement-a-stack-in-golang
type Stack []int

// IsEmpty - check if stack is empty
func (s *Stack) IsEmpty() bool {
	return len(*s) == 0
}

// Push - push a new value onto the stack
func (s *Stack) Push(i int) {
	*s = append(*s, i)
}

// Pop - Remove and return top element of stack. Return false if stack is empty.
func (s *Stack) Pop() (int, bool) {
	if s.IsEmpty() {
		return 0, false
	} else {
		index := len(*s) - 1   // Get the index of the top most element.
		element := (*s)[index] // Index into the slice and obtain the element.
		*s = (*s)[:index]      // Remove it from the stack by slicing it off.
		return element, true
	}
}

func findPermutation(s string) []int {
	var stack Stack
	var ret []int

	i := 1
	for _, char := range s {
		stack.Push(i)

		if char == 'I' {
			for !stack.IsEmpty() {
				val, _ := stack.Pop()
				ret = append(ret, val)
			}

		}
		i++
	}
	stack.Push(i)
	for !stack.IsEmpty() {
		val, _ := stack.Pop()
		ret = append(ret, val)
	}

	return ret
}

func main() {
	fmt.Print("Expected [3 2 1 4 6 5 7]: ")
	fmt.Println(findPermutation("DDIIDI"))

	fmt.Print("Expected [1 3 2 4 5]: ")
	fmt.Println(findPermutation("IDID"))
}
