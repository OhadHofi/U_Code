import requests

def get_furniture_price(furniture_name):
    price = requests.get(f"http://localhost:8000/price/{furniture_name}")
    return price.json()
    

def buy_furniture(furniture_name):
    return requests.get(f"http://localhost:8000/buy/{furniture_name}").json()
    
    
print(get_furniture_price("chair"))
res = buy_furniture("chair")
print(f"Congratulations, you've just bought {res['item']} for {res['price']}. There are {res['inventory']} left now in the store.")
