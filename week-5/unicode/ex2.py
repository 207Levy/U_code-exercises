def encode(s):
    return " ".join([str(ord(ch)) for ch in s])

print(encode("Hello"))    # "72 101 108 108 111" 