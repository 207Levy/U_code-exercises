USE sql_intro;


-- INSERT INTO transaction (item_purchased, amount, customer_id, company_id)
-- VALUES("The Everlasting Wind", 2, 1711, 32);

-- INSERT INTO customer (id, name, city, gender)
-- VALUES(1000, "Byron Trunks", "Corinth", 3);

-- INSERT INTO company(id, name, industry, employees)
-- VALUES(10, "Twitch", "Entertainment", 800);

-- INSERT INTO transaction (item_purchased, amount, customer_id, company_id)
-- VALUES("The Everlasting Wind", 2, 1000, 10);

SELECT 
    item_purchased, amount, 
    customer.name AS cust_name, -- aliasing
    company.name AS comp_name
FROM 
    transaction, 
    customer, 
    company
WHERE 
    transaction.customer_id = customer.id AND
    transaction.company_id = company.id;