node container:
- need run npm install , add to container (fix: nodedemon not found)

mongo container
- create volume: docker volume create mongodbdata
- login: mongo localhost:27017/admin -u root -p password
