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

category = "Vegetables"
try:
    with connection.cursor() as corsur:
        q=f"""INSERT INTO categories (name) VALUES 
            ("Vegetables"),
            ("MEAT"),
            ("Buisnes"),
            ("Rides"); """
        corsur.execute(q)
        connection.commit()
        result = corsur.fetchall()
except:
    print("Error1")
    
    
try:
    with connection.cursor() as corsur:
        q=f"""INSERT INTO products (id, name,category,quantity) VALUES 
            (null, "carrot", "Vegetables", 5);"""
        corsur.execute(q)
        connection.commit()
        result = corsur.fetchall()
        
except:
    print("Error2")
    
with connection.cursor() as corsur:
    q=f"""SELECT * 
        FROM products;"""
    
    corsur.execute(q)
    result = corsur.fetchall()
    print(result)