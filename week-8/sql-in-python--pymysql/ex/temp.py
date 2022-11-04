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
def get_heaviest_pokimon():
    try:
        with connection.cursor() as cusor:
            query = "select max(weight) from Pokemon;"
            cusor.execute(query)
            retrun cusor.fetchall()
    except:
        print("error")
    