-- Paste your answers for each question in the appropriate spot below. (Keep the number headings)
-- #1
SELECT *
FROM students
WHERE firstname LIKE 'J%' AND id > 3;

-- #2
SELECT s.firstname, s.lastname
FROM students s
JOIN assignments a ON s.id = a.student_id
WHERE a.title = 'Geography Quiz' AND a.score > 90;

