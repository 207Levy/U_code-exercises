from fastapi import FastAPI, Request
import uvicorn

app = FastAPI()
id_counter = 1
wonders = [
    {
        "ID": 1,
        "name": "The Great Pyramid",
        "location": "Giza"
    }
]


@app.get('/')
def root():
    return {"message": "Server is up and running"}


@app.get("/wonder/{id}")
def get_wonder_by_id(id):
    matches = [w for w in wonders if w["ID"] == int(id)]
    print(matches)
    if len(matches) > 0:
        return matches[0]
    return "didn't find this id...."

@app.put('/wonders/{id}')
async def create_wonder(request: Request):
    new_wonder = await request.json()
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    print(new_wonder)
    return "Created"


@app.post('/wonders', status_code=201)
async def create_wonder(request: Request):
    new_wonder = await request.json()
    global id_counter
    id_counter += 1
    new_wonder["ID"] = id_counter
    wonders.append(new_wonder)
    print(new_wonder)
    return "Created"

if __name__ == "__main__":
    uvicorn.run("server:app", host="0.0.0.0", port=8000, reload=True)
