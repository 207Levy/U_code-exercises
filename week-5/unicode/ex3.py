def get_word_value(word):
    sum = 0
    for ch in word:
        sum += (ord(ch) - 96)
    return sum


print(get_word_value("day"))    # 4 + 1 + 25 = 30 