# """
# This is the ImmutableListNode's API interface.
# You should not implement it, or speculate about its implementation.
# """
# class ImmutableListNode:
#     def printValue(self) -> None: # print the value of this node.
#     def getNext(self) -> 'ImmutableListNode': # return the next node.

# Space: O(n)  # TODO: some trick to reduce space
# Time: O(n) 
class Solution:
    def printLinkedListInReverse(self, head: 'ImmutableListNode') -> None:
        def helper(node: 'ImmutableListNode'):
          if node is None: return

          next = node.getNext()
          if next is not None:
            helper(node.getNext())

          node.printValue()

        helper(head)
