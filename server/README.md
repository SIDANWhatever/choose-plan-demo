# Getting Started with Full Stack Demo - Frontend

Please follow below's instruction on building the frontend demo locally

## 1. Starting mysql image with credentials set as default

```
docker run --name some-mysql -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:tag
```

## 2. Building docker image for backend server

```
docker build -t chooseplanserver .
```

## 3. Starting the backend server with docker

```
docker run --name api -p 3001:4000 -d chooseplanserver
```

# API Endpoints

### [Get] Get all plans `/plans`

```
curl -X GET http://localhost:3001/plans
```

### [Get] Get specific plan `/plans/{id}`

```
curl -X GET http://localhost:3001/plans/1
```

### [Post] Create a plan

```
curl -X POST http://localhost:3001/plans \
   -H 'Content-Type: application/json' \
   -d '{"name": "Premium Plan","general": true,"specialist":true,  "physiotherapy": true,"feePerMonth": 388}'
```

## Note

For full demo experience, please also start the frontend server as suggested [here](https://github.com/SIDANWhatever/choose-plan-demo/blob/main/client/README.md)
