I have implemented a custom approach to log user activities and store them in a database. In this approach, I utilize migration to create the necessary table structure in the database. The model folder represents the table in the form of a model file. Additionally, I have a helper folder that contains a useractivity file, which handles the logic for creating records in the database. Finally, within the controller folder, there is an index file that appends values to the respective columns of the table.