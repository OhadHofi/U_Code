closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

#1:
#3

#2:
closet["shirts"]["white"]

#3:
closet["pants"]["shorts"]["flamingo-pink"]

#4:
closet["pants"]["jeans"]["organic"] = 7

#5:
closet["pants"]["jeans"]["denim"] -= 4

# 6:
pink_shorts = closet["pants"]["shorts"]["flamingo-pink"]
pink_shirts = closet["shirts"]["flamingo-pink"]

if pink_shirts > pink_shorts:
    print("top")
else:
    print("bottom")