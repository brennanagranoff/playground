select
    number,
    id,
    order_date :: DATE
from
    orders
where
    status = 'awaiting_shipment'
    AND store_id IN(22, 7)
ORDER BY
    order_date ASC