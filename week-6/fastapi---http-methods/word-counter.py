from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import Body


app = FastAPI()

id_counter = 1
word_counter = {}



@app.get("/words")
def get_words():
    return word_counter


@app.get("/word/{new_word}")
def get_new_word(new_word):
    return {"count" : word_counter.get(new_word, 0)}


@app.post("/word")
async def add_word(request: Request):
    new_word = await request.json()
    word = new_word["word"]
    add_single_word(word)
    return {"text" : f"Added {word}, currentCount: {word_counter[word]}"}


@app.post("/sentence")
async def add_sentence(request: Request):
    new_sentence = await request.json()
    new_sentence = new_sentence["sentence"]
    numNewWords = 0
    numOldWords = 0
    for word in new_sentence.split():
        # numOldWords += 1 if does_exist(word) else numNewWords += 1
        if does_exist(word):
            numOldWords += 1
        else:
            numNewWords += 1
        add_single_word(word)
    return {"text" : f"Added {numNewWords} words, {numOldWords} already existed, currentCount: -1"}




@app.delete("/word")
async def add_sentence(request: Request):
    delete_word = await request.json()
    delete_word = delete_word["word"]
    if " " in delete_word:
        return "Handle with only one word"
    elif not does_exist(delete_word):
        return f"{delete_word} does exist"
    else:
        delete(delete_word)
        return f"{delete_word} deleted successfully"


def does_exist(word):
    # return True if word_counter.get(word) == None else return False
    if word_counter.get(word):
        return True
    else:
        return False


def delete(word):
    if word_counter.pop(word, None) == None:
        return True
    else:
        False

def add_single_word(word):
    word_counter[word] = word_counter.get(word, 0) + 1

    
if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
