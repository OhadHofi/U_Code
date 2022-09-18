import imp
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import store

app = FastAPI()
if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000,reload=True)


@app.get('/sanity')
def root():
    return "Server is up and running smoothly"


@app.get('/cat')
def root():
    return FileResponse('exercises\static\cat.jpeg')


@app.get('/laughter')
def root():
    return FileResponse('exercises\static\Funny-Laugh-C1-www.fesliyanstudios.com.mp3')


@app.get('/price/{name}')
def get_price_by_name(name):
    for furniture in store.store:
        if furniture["name"] == name:
            return {"price" : furniture["price"]}
    
    return {"price" : None}


@app.get('/buy/{furniture_name}')
def buy_furniture(furniture_name):
    for furniture in store.store:
        if furniture["name"] == furniture_name:
            if furniture["inventory"] > 0:
                furniture["inventory"] -= 1
                return {"item" : furniture["name"], "inventory" : furniture["inventory"], "price" : furniture["priceZ"]}
            else:
                return "Out of stock"
    return "Item not in stock"


@app.get('/sale')
def sale(admin):
    if admin == "true":
        for furniture in store.store:
            if furniture["inventory"] > 10:
                furniture["price"] *= 0.5
    return store.store