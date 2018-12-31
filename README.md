This project was api node with express

## Setup is Project

```
docker compose up -d

or

make start
```

### `Run is Project`

```
make run
```

### `Run is test project`

```
yarn test
```

## Structure

```
database :  mongodb
middlewares  : express , morgan
ODM  : mongoose
test : jest
```

## Router

member

```
## get all member

localhost:3000/api/member


# Query
- q  ### english_first_name or nickname


## get member pagination

localhost:3000/api/member/pagination

# Query
- page
- limt


## get member By id

localhost:3000/api/member/:id
```

Runs the server in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000)
