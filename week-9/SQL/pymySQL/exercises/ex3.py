from unicodedata import category
import pymysql 

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

id = 6

with connection.cursor() as corsur:
    q=f"""SELECT name
        FROM products
        WHERE id = {id};"""
    
    corsur.execute(q)
    result = corsur.fetchall()
    print(result)
