# 675 Database Setup Instructions
So as we all should know now, the dataset we procured from Kaggle is in Sqlite. We're using MySql. This is okay though, because we now have all the data in the form of CSV's. This is how we'll set up the Database locally:<br>
<br>
1. Connect to your MySql server using Workbench and create a new schema titled `675_database` or something along those lines.
2. Double click your new schema and click File>Open SQL Script and select `create_tables.sql`.
3. Run each of the table creation queries and ensure that the tables were created successfully.
4. Expand the `Tables` dropdown and right click on one of your tables then select `Table Data Import Wizard`
5. In the input of this new window, select the corresponding `csv` file. <br>
-> i.e. Right click `Country`, select `Table Data Import Wizard`, select `Country.csv`
6. Repeat this for each of your tables. <br>
-> NOTE: The `Match` and `Player` data is incredibly long (26000 and 11000 rows respectively), feel free to use the `Shortened` csv files which only have 1000 rows. 
