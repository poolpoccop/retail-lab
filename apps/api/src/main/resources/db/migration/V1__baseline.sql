-- Technical baseline. Domain tables will be introduced in later migrations.
CREATE TABLE retail_lab_schema_version (
    id INTEGER PRIMARY KEY,
    description VARCHAR(100) NOT NULL
);

INSERT INTO retail_lab_schema_version (id, description)
VALUES (1, 'initial technical baseline');
