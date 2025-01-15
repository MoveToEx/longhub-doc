---
title: API Schema
---

# API Schema

This page describes some common attributes shared by all endpoints.  

Note that these types describe the fundamental items of responses. You should refer to the endpoint document for the exact response schema.  
Also, some endpoints in the document are described with [Typescript utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) and [Typescript everyday types](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html), like `Pick<T, K>` and `{...} & {...}`. It is suggested that you get familiar with them first.

## Types


```typescript
type Rating = 'none' | 'moderate' | 'violent';

type User = {
    id: number;
    name: string;
}

type Self = User & {          // User object of yourself
    createdAt: string;
    permission: number;
    passwordHash: string;
    accessKey: string;
}

type Tag = {
    id: number;
    name: string;
}

type Post = {
    id: string;             // UUID
    text: string;
    rating: Rating;
    image: string;          // id + extension
    imageURL: string;       // Full URL
    imageHash: string;      // A 64-char 01 string
    createdAt: string;      // ISO formatted creation date (YYYY-MM-DDThh:mm:ss.mmmZ)
    updatedAt: string;      // ISO formatted last update date
    uploaderId: number;     // `uploader.id`. May be null for legacy posts
    tags?: Tag[];
    uploader?: User;        // Uploader. May be null for legacy posts
}
```

The `Self` object is used in place of `User` when applies on yourself, e.g. in the response of a successful `POST /api/account/login` request or a `POST /api/post` request.

## Validation

LONG Hub uses [zod](https://zod.dev/) to prevent ill-formed request from causing server side errors. In some endpoints that require json as request body (like `PUT /api/post/[id]`), your request is checked against the schema described in their respective pages.  
Upon invalid request body, the server will return a `400 Bad Request` and an array of validation errors as response body. For example:

```http
POST https://longhub.top/api/post/search
Content-Type: application/json

[
    {
        "type": "text",
        "op": "contains",
        "value": 3
    }
]
```

Will result in the following response:
```http
HTTP/1.1 400 Bad Request
Content-Type: application/json

[
    {
        "code": "invalid_type",
        "expected": "string",
        "received": "number",
        "path": [
            0,
            "value"
        ],
        "message": "Expected string, received number"
    }
]
```
