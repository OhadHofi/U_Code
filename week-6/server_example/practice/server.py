import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import requests


app = FastAPI()
if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)


@app.get('/')
def root():
    return FileResponse('./static/download.jpeg')

@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message":"Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name, age):
    return {"message":"Hi there {}".format(name) + age}


app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/book/{name}")
async def get_book(name):
    print('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    res = requests.get('https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()


