db.createUser({
  user: 'api-challenge',
  pwd: 'api-challenge',
  roles: [
    {
      role: 'readWrite',
      db: 'api-challenge'
    }
  ]
})
