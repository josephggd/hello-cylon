--Considerable amount of planning should go into the database structure
--After reaching PRODUCTION/STAGING, it becomes more difficult to change the database structure
--For example, if we intended to order to_do_items by their creation date,
--we would have to change the database structure to include a column for creation date
CREATE TABLE to_do_list (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description VARCHAR(255) NOT NULL
);