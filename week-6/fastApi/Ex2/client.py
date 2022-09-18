from msilib.schema import tables
import requests

def getFurniture(name):
    price = requests.get(f"http://localhost:8000/store/{name}")
    return price;

def buyFurniture(name):
    price = requests.get(f"http://localhost:8000/buy/{name}")
    return price;

print("Price of table = " + str(buyFurniture("table").json()))