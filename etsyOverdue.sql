WITH overdue_orders as(
	SELECT
		orders.ID AS order_id,
		orders.order_date AS order_date,
		as order_date orders.NUMBER AS order_number,
		orders.status AS order_status,
		orders.customer_email AS email,
		orders.store_id AS store_id,
		orders.order_date AS order_date,
		orders.priority AS priority,
		order_items.ID AS order_item_id,
		order_items.has_render_options AS has_render_options,
		order_items.sku AS sku,
		order_items.quantity AS quantity,
		order_items.render_options AS render_options,
		order_items.render_id AS render_id,
		order_items.product_name AS product_name
	FROM
		orders
		INNER JOIN order_items ON orders."id" = order_items.order_id
	WHERE
		orders.store_id = 7
		AND order_items.has_render_options IS NOT TRUE
		AND orders.status = 'awaiting_shipment'
		AND orders.order_date < CURRENT_DATE - INTERVAL '5' DAY
)
SELECT
	order_id,
	order_date
from
	overdue_orders
GROUP BY
	order_id