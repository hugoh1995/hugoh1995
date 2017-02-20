def calculate(first_number, second_number, operator)
  # compute and return result
  # first_number.send(operator, second_number)
  result = 0
  if operator == "-"
    result = first_number - second_number
  end
  return result
end


# def calculate(op)
#   1254.send(op, 34)
# end

# puts calculate(:+)
