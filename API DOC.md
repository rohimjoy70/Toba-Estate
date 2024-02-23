Sure! Here are the API docs for the project:

# Toba Real Estate API

## Description

This API provides a backend for a real estate website. It allows users to sign up, log in, and create listings. It also allows users to view, edit, and delete their own listings.

## Table of Contents

- [User Routes](#user-routes)
- [Listing Routes](#listing-routes)
- [Authentication](#authentication)
- [Testing](#testing)

## User Routes

### POST /api/users/register

Registers a new user.

**Body**

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "password"
}
```

**Response**

```json
{
  "user": {
    "_id": "5fc999999999999999999999",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "__v": 0
  },
  "token": "jwt.token.here"
}
```

### POST /api/users/login

Logs in an existing user.

**Body**

```json
{
  "email": "johndoe@example.com",
  "password": "password"
}
```

**Response**

```json
{
  "user": {
    "_id": "5fc999999999999999999999",
    "name": "John Doe",
    "email": "johndoe@example.com",
    "__v": 0
  },
  "token": "jwt.token.here"
}
```

## Listing Routes

### GET /api/listings

Gets all listings.

**Response**

```json
[
  {
    "_id": "5fc999999999999999999999",
    "title": "My Awesome House",
    "description": "This is a great house for sale!",
    "price": 1234567,
    "address": "123 Main St, Anytown, CA 12345",
    "image": "https://example.com/my-awesome-house.jpg",
    "user": "5fc999999999999999999999",
    "__v": 0
  }
]
```

### GET /api/listings/:id

Gets a specific listing.

**Response**

```json
{
  "_id": "5fc999999999999999999999",
  "title": "My Awesome House",
  "description": "This is a great house for sale!",
  "price": 1234567,
  "address": "123 Main St, Anytown, CA 12345",
  "image": "https://example.com/my-awesome-house.jpg",
  "user": "5fc999999999999999999999",
  "__v": 0
}
```

### POST /api/listings

Creates a new listing.

**Body**

```json
{
  "title": "My Awesome House",
  "description": "This is a great house for sale!",
  "price": 1234567,
  "address": "123 Main St, Anytown, CA 12345",
  "image": "https://example.com/my-awesome-house.jpg"
}
```

**Response**

```json
{
  "_id": "5fc999999999999999999999",
  "title": "My Awesome House",
  "description": "This is a great house for sale!",
  "price": 1234567,
  "address": "123 Main St, Anytown, CA 12345",
  "image": "https://example.com/my-awesome-house.jpg",
  "user": "5fc999999999999999999999",
  "__v": 0
}
```

### PUT /api/listings/:id

Edits a specific listing.

**Body**

```json
{
  "title": "My Awesome House",
  "description": "This is a great house for sale!",
  "price": 1234567,
  "address": "123 Main St, Anytown, CA 12345",
  "image": "https://example.com/my-awesome-house.jpg"
}
```

**Response**

```json
{
  "_id": "5fc999999999999999999999",
  "title": "My Awesome House",
  "description": "This is a great house for sale!",
  "price": 1234567,
  "address": "123 Main St, Anytown, CA 12345",
  "image": "https://example.com/my-awesome-house.jpg",
  "user": "5fc999999999999999999999",
  "__v": 0
}
```

### DELETE /api/listings/:id

Deletes a specific listing.

**Response**

```json
{
  "message": "Listing deleted"
}
```

## Authentication

All routes that require authentication require a valid JWT token to be included in the `Authorization` header. The token should be formatted as `Bearer <token>`.

## Testing

To test the API, you can use any tool that supports making HTTP requests, such as Postman or curl. You will need to obtain a JWT token from the `/api/users/login` route in order to authenticate requests.

Here is an example of how to use curl to make a GET request to get all listings:

```bash
curl --location --request GET 'http://localhost:5000/api/listings' \
--header 'Authorization: Bearer <jwt.token.here>'
```

Replace `<jwt.token.here>` with the actual JWT token that you obtained from the login route.