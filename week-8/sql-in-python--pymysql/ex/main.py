import pymysql

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

if connection.open:
    print("the connection is opened")


# create categories table:

try:
    with connection.cursor() as cusor:
        query = "CREATE TABLE categories(id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, name VARCHAR(20));"
        cusor.execute(query)
        connection.commit()
except:
    print("error")
