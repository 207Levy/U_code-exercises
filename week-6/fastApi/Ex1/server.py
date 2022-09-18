from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
import uvicorn
import requests
app = FastAPI()
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/sanity")
def sanity():
    return "Server is up and running smoothly..."


@app.get('/pic/{number}')
def root(number):
    return FileResponse(f'./static/images/{number}.jpg')


if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
