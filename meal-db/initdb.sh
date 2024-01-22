#!/bin/bash

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" -d "$POSTGRES_DB" <<-EOSQL
    CREATE SCHEMA IF NOT EXISTS public;
    CREATE TABLE public.meal (
        id SERIAL PRIMARY KEY,
        mealId TEXT NOT NULL,
        quantity INTEGER NOT NULL,
        unit_price FLOAT NOT NULL
    );
    CREATE ROLE noadmin NOLOGIN;
    CREATE ROLE admin NOINHERIT LOGIN PASSWORD '$POSTGRES_PASSWORD';
    GRANT noadmin TO admin;
EOSQL
