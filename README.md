# Bumble Pet
A full stack mobile application that's like Bumble - but for animal shelter pets who need adoption.

**Deployed Site: View on your mobile device!!** https://bumble-pet.herokuapp.com/


## Project Presentation

Click slide below to view presentation details.

<a href="Bumble-Pet.pdf"><img src="bumblescreenshot.png" width="75%" height="75%"></a>



## Build Tools

**Front End:** EJS, Google Materialize

**API to get Pet data:** Petfinder API

**Routes:** Express.js

**SQL queries:** Knex.js

**Back End Database:** PostgreSQL

**Middleware:** Express-Session, bCrypt, morgan, body-parser


## Project Start Commands

Knex make database migration: ```knex migrate:make migrationname```

Knex database migration: ```knex migrate:latest``` or ```knex migrate:rollback```

Knex database seed: ```knex seed:run```

PostgreSQL database: ```psql bumblepet```

List database tables: ```\dt```
Query database table: ```select * from tablename;```
Exit out of database: ```\q```

Start Server: ```nodemon```


## Application Screenshots

Home

<img src="/public/b1.png" alt="alt text" width="50%" height="40%">


Search

<img src="/public/b2.png" alt="alt text" width="50%" height="40%">


Search Results

<img src="/public/b3.png" alt="alt text" width="50%" height="40%">


Search Results Details

<img src="/public/b4.png" alt="alt text" width="50%" height="40%">
