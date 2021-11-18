SELECT AVG
	( amount_paid ) AS aov,
	AVG ( T.total_quantity ) AS average_items,
	AVG ( amount_paid ) / AVG ( T.total_quantity ) AS average_price_item 
FROM
	orders
	INNER JOIN ( SELECT order_id, SUM ( quantity ) AS total_quantity FROM order_items GROUP BY order_id ) T ON T.order_id = orders.ID 
WHERE
	orders.store_id = 7 
	AND create_date :: DATE > '08-01-2021'