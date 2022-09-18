from operator import le
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import requests
from store import store
app = FastAPI()


@app.get("/sanity")
def sanity():
    return "Server is up and running smoothly..."


@app.get("/store/{name}")
def get_stored(name):
    return [x.get("price") for x in store if x.get("name") == name][0]


@app.get("/buy/{name}")
def get_stored(name):

    item = [x for x in store if x["name"] == name]
    if (len(item) > 0):
        item = item[0]
    else:
        return "No Item!"

    if (item["inventory"] > 0):
        item["inventory"] -= 1
        return item
    else:
        return "inventory is 0..."


@app.get("/sale")
def discount_furnitures(admin=False):
    if (admin):
        for item in store:
            if item["inventory"] > 10:
                item["price"] /= 2
        return store


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
