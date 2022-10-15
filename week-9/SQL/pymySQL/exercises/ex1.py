import pymysql 

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)

with connection.cursor() as corsur:
    q = """CREATE TABLE categories(
        name VARCHAR(20) PRIMARY KEY
        );"""
    corsur.execute(q)
    result = corsur.fetchall()
    print("done...")

with connection.cursor() as corsur:
    q = """CREATE TABLE products(
        id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        category VARCHAR(20),
        quantity INT,
        FOREIGN KEY(category) REFERENCES categories(name)
        );"""
    corsur.execute(q)
    result = corsur.fetchall()
    print("done...")

