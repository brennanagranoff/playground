SELECT
	event_name,
	request_parameters ->> 'x-amz-copy-source' AS from_path,
	concat ( request_parameters ->> 'key', '/', request_parameters ->> 'bucketName' ) AS final_path,
	event_time AT TIME ZONE'PST' AS TIMESTAMP 
FROM
	logs 
WHERE
	request_parameters ->> 'bucketName' IN ( 'hoopswagg.approved', 'hoopswagg.printing' ) 
	AND error_code IS NULL 
	AND event_name IN ( 'CopyObject', 'DeleteObject', 'CompleteMultipartUpload', 'PutObject' ) 
ORDER BY
TIMESTAMP DESC