SELECT
    batches.output_file_key,
    files.file_name
FROM
    files
    LEFT JOIN batches ON batches.ID = files.batch_id
WHERE
    files.batch_id IS NOT NULL
    AND file_name IS NOT NULL