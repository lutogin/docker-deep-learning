#!/bin/bash
set -e

mongo <<EOF
use $MONGO_INITDB_DATABASE
profiles = db.getSiblingDB('ku-profiles')
profiles.createUser({
  user:  '$MONGO_USERNAME',
  pwd: '$MONGO_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: 'ku-profiles'
  }]
})

users = db.getSiblingDB('ku-users')
users.createUser({
  user:  '$MONGO_USERNAME',
  pwd: '$MONGO_PASSWORD',
  roles: [{
    role: 'readWrite',
    db: 'ku-users'
  }]
})
EOF
