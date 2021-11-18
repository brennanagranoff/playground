SELECT
	t1.date, COALESCE(t1.sales_2020,0) as sales_2020, coalesce(t2.sales_2021,0) as sales_2021
FROM
	(
	SELECT
		round( SUM ( amount_paid ) :: NUMERIC, 2 ) AS sales_2020,
		to_char( create_date :: TIMESTAMP, 'MM-DD' ) AS DATE 
	FROM
		orders 
	WHERE
		date_part( 'year', create_date :: TIMESTAMP ) = 2020 
		AND store_id = 7 
	GROUP BY
	DATE 
	
) t1
LEFT JOIN (
	SELECT
	round( SUM ( amount_paid ) :: NUMERIC, 2 ) as sales_2021,
	to_char(create_date::timestamp,'MM-DD') as date
FROM
	orders 
WHERE
	date_part('year', create_date::timestamp) = 2021
	AND store_id = 7 
GROUP BY date) t2 on t1.date = t2.date