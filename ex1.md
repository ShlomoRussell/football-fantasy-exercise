## Add user controller
### Model
<<<<<<< HEAD
=======
- `id`
>>>>>>> ed0ef2ba2be1e93f47692b8f665ffcaef115f382
- `first`
- `last`
- `email`
- `password`
- `playerIds[]`

### CRUD
#### Create user
`post` verb. receives in body `first`,`last`,`email`,`password`, `playerIds` empty array.

#### Get user
`get/:id` verb. receives user object.
