require_relative "calculator"
puts "Enter a first number --"
first_number = gets.chomp

puts "Enter a second number --"
second_number = gets.chomp

puts "Enter an operator --"
operator = gets.chomp

puts calculate(first_number, second_number, operator)
