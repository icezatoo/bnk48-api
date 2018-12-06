FROM mongo

COPY init.json /init.json
CMD mongoimport --host mongodb --db bnk-db --collection member --type json --file /init.json --jsonArray