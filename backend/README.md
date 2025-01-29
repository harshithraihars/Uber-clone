# User Registration Endpoint

## Endpoint
`POST /user/register`

## Description
This endpoint is used to register a new user. It validates the input data, hashes the password, creates a new user in the database, and returns a JSON response with the user details and an authentication token.

## Request Body
The request body should be a JSON object with the following fields:
- `firstName` (string, required): The first name of the user. Must be at least 3 characters long.
- `lastName` (string, optional): The last name of the user. Must be at least 3 characters long.
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john.doe@example.com",
  "password": "password123"
}

# User Login Endpoint

## Endpoint
`POST /user/login`

## Description
This endpoint is used to log in an existing user. It validates the input data, checks the user's credentials, and returns a JSON response with the user details and an authentication token.

## Request Body
The request body should be a JSON object with the following fields:
- `email` (string, required): The email address of the user. Must be a valid email format.
- `password` (string, required): The password for the user. Must be at least 6 characters long.

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

## Response
### Success (200)
If the login is successful, the server will respond with a status code of 200 and a JSON object containing the user details and an authentication token.

Example:
```json
{
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "firstName": "John",
    "lastName": "Doe",
    "email": "john.doe@example.com"
  },
  "token":
    "asdkjfgshfskjfhsgdsjdsgd........"
}


# Get User Profile

## Endpoint
`GET /user/profile`

## Description
Gets the authenticated user's profile information. Protected route that requires authentication.

## Authentication
Requires JWT token in either:
- Authorization header: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

## Responses

### Success Response (200 OK)
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "firstName": "John",
  "lastName": "Doe", 
  "email": "john@example.com"
}

# Protected Routes

## Authentication Required
All protected routes require authentication via:
- Bearer Token: `Authorization: Bearer <token>`
- Cookie: `token=<token>`

## User Profile
`GET /user/profile`

### Description
Get authenticated user's profile information.

### Success Response (200 OK)
```json
{
  "_id": "60d0fe4f5311236168a109ca",
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com"
}