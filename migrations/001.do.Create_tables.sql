CREATE TABLE folders (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  folder_name TEXT NOT NULL
);

CREATE TABLE notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  note_name TEXT NOT NULL,
  content TEXT,
  folder_id INTEGER REFERENCES folders (id),
  date_created TIMESTAMP NOT NULL DEFAULT now()
);