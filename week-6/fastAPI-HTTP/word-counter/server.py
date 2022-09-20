from fastapi import FastAPI, Request

app = FastAPI()

words_DATA = {}


async def delete_word(request: Request):
    delete_word = await request.json()
    delete_words = new_word.split(" ")
    deleted_count = 0
    for word in delete_words:
        word_object = words_DATA.get(word)
        if word_object is None:
            return f"{word} does not exist!"
        del words_DATA[word]
        return f"{word} Deleted :)"


async def update_word(request: Request):
    new_word = await request.json()
    new_words = new_word.split(" ")
    new_count = 0
    for word in new_words:
        word_object = words_DATA.get(word)
        if word_object is None:
            words_DATA[word] = 1
            return "Added to words data"
        words_DATA[word] += 1
        return words_DATA[word]


@app.get("/sanity/{sentece}")
def count_and_check_history(sentence):
    words = sentence.split(" ")
    for word in words:
        word_object = words_DATA.get(word)
        if word_object is None:
            return {"Count": 0}
        words_DATA[word] += 1
        return words_DATA[word]


@app.get("/wordCounter/{word}")
def count_and_check_history(sentence):
    words = sentence.split(" ")
    for word in words:
        word_object = words_DATA.get(word)
        if word_object is None:
            return {"Count": 0}
        return words_DATA[word]


@app.post('/wordCounter/', status_code=201)
async def update(request: Request):
    update_word(request)


@app.post('/sentence/', status_code=201)
async def update(request: Request):
    update_word(request)


@app.delete('/delete/', status_code=201)
async def delete(request: Request):
    delete_word(request)
