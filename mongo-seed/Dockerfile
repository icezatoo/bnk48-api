FROM mongo
ENV HOST_DB mongodb
COPY init.json /init.json
CMD mongoimport --host $HOST_DB --db bnk-db --collection member --type json --file /init.json --jsonArray