from fastapi import FastAPI
import uvicorn

app = FastAPI()

@app.get("/profile")
async def main():
    return {"name": "John Smith"}

if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, log_level="info")