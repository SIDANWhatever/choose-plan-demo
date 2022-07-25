#!bin/bash
# Program:
# This program helps start the full stack demo

# Building database
cd server
docker run --name plans-demo -p 3306:3306 -e MYSQL_ROOT_PASSWORD=my-secret-pw -d mysql:latest

sleep 5
docker exec -it plans-demo bash -c "mysql -uroot -pmy-secret-pw -e \"CREATE DATABASE Plans\""

sleep 5

# Building server
docker build -t chooseplanserver .
docker run --name api -p 3001:4000 -d chooseplanserver

sleep 5
# Building sample plans
curl -X POST http://localhost:3001/plans \
   -H 'Content-Type: application/json' \
   -d '{"name": "Standard Plan","general": true,"specialist":false,  "physiotherapy": false,"feePerMonth": 0}'

curl -X POST http://localhost:3001/plans \
   -H 'Content-Type: application/json' \
   -d '{"name": "Premium Plan","general": true,"specialist":true,  "physiotherapy": true,"feePerMonth": 388}'

# Starting the client
cd ../client
npm install
npm run start