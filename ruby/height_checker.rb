#!/bin/env ruby

# frozen_string_literal: true

# @param {Integer[]} heights
# @return {Integer}
def height_checker(heights)
  heights.zip(heights.sort).count { |a, b| a != b }
end

puts '5 = ' + height_checker([1, 1, 4, 2, 1, 3]).to_s
puts '5 = ' + height_checker([5, 1, 2, 3, 4]).to_s
puts '0 = ' + height_checker([1, 2, 3, 4, 5]).to_s
