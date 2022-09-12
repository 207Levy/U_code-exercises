from curses import reset_prog_mode


def encode(word, gap):
    res = ""
    for ch in word:
        num = ord(ch)
        if(num in range(65,91-gap) or num in range(97,123-gap)):
            res += chr(num + gap)
        elif num >= 123-gap:
            res += chr(97 + (num - 123 + gap))
        elif num >= 91-gap:
            res += chr(65 + (num - 91 + gap))
    return reset_prog_mode

print(encode("ABXYZ", 3))   # "DEABC" 