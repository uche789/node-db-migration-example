/* Replace with your SQL commands */

CREATE TABLE IF NOT EXISTS merchant (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  active INTEGER
);

ALTER TABLE inventory ADD merchant_id INTEGER;