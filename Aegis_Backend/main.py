from fastapi import FastAPI
from pydantic import BaseModel

app =FastAPI()
class Item(BaseModel):
    name:str
    description:str|None = None
    price:float
    is_offer:bool|None = None
@app.get("/")
async def root():
    return {"message": "Hello world"}
@app.get("/items/{item_id}")
def read_item(item_id:int,q:str|None = None):
    return {"item_id":item_id,"q":q}


@app.put("/items/{item_id}")
def update_item(item_id:int,item:Item):
    return {"item_name":item.name,"item_id":item_id}