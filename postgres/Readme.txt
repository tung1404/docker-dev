# https://gist.github.com/spalladino/6d981f7b33f6e0afe6bb
Backup your databases

docker exec -t postgres_db_1 pg_dumpall -c -U postgres > dump.sql

Restore your databases

cat dump.sql | docker exec -i postgres_db_1 psql -U postgres

# windows
https://gist.github.com/spalladino/6d981f7b33f6e0afe6bb#gistcomment-2021334

docker exec CONTAINER /usr/bin/mysqldump -u root --password=root -r DATABASE | Set-Content backup.sql

# 
##
# https://gist.github.com/jgillman/8191d6f587ffc7207a88e987e034b675
## Assumes the database container is named 'db'

DOCKER_DB_NAME="$(docker-compose ps -q db)"
DB_HOSTNAME=db
DB_USER=postgres
LOCAL_DUMP_PATH="path/to/local.dump"

docker-compose up -d db
docker exec -i "${DOCKER_DB_NAME}" pg_restore -C --clean --no-acl --no-owner -U "${DB_USER}" -d "${DB_HOSTNAME}" < "${LOCAL_DUMP_PATH}"
docker-compose stop db

### https://stackoverflow.com/a/31971697

The cp command can be used for that. For example:

docker cp foo.txt mycontainer:/foo.txt
docker cp mycontainer:/foo.txt foo.txt