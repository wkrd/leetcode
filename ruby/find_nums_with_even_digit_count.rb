# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
  even_count = 0
  nums.each do |num|
    digits = 0
    loop do
      digits += 1
      num = num / 10
      break if num == 0
    end
    even_count += 1 if digits % 2 == 0
  end
  even_count
end

# @param {Integer[]} nums
# @return {Integer}
def find_numbers(nums)
  nums.count { |num| (Math.log10(num).to_i + 1) % 2 == 0 }
end
