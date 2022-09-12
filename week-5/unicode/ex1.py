def to_upper(s):
    return "".join([chr(ord(ch) - 32) if ord(ch) in range(97, 123) else ch for ch in s ])

print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change) 