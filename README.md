# Sequelize Student API
This API allows you to perform CRUD operations on a database of students!

## Endpoints
The following section provides information on the available endpoints for this API.

### Create a Student

**Method**: ```POST```

**Endpoint**: ```/api/students```

**Description**: This endpoint creates a new student with the provided information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Get All Students

**Method**: GET

**Endpoint**: ```/api/students```

**Description**: This endpoint retrieves all the students stored in the database.

Response:
```
[
  {
    "id": integer,
    "name": "string",
    "age": integer,
    "breed": "string",
    "createdAt": "timestamp",
    "updatedAt": "timestamp"
  },
]
```

### Update a Student

**Method**: ```PUT```

**Endpoint**: ```/api/students/:id```

**Description**: This endpoint updates the student with the specified id using the information in the request body.

Request Body:
```
{
  "name": "string",
  "age": integer,
  "breed": "string"
}
```

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```

### Delete a Student

**Method**: ```DELETE```

**Endpoint**: ```/api/students/:id```

**Description**: This endpoint deletes the student with the specified id from the database.

Response:
```
{
  "id": integer,
  "name": "string",
  "age": integer,
  "breed": "string",
  "createdAt": "timestamp",
  "updatedAt": "timestamp"
}
```