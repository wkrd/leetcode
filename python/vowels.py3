
class Solution:
    def removeVowels(self, S: str) -> str:
        ret = ""
        vowels = { 'a','e','i','o','u' }
        for c in S:
            if c not in vowels:
              ret += c
        return ret

print (   Solution().removeVowels("abcdef") )
