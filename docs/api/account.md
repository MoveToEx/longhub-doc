---
title: Account API
---

::: tip
Read [Schema](schema.html) first if you haven't read it.
:::

# Endpoints

[[toc]]

## `POST` /account/login

Authenticates user.

Accepts: `application/json`

Request body:

```typescript
{
    username: string,
    password: string
}
```

Response:  

```typescript
type ResponseSchema = User | string;
```

Status codes & response types:
- `200 OK` if login succeeds. Will return a `User` as response.
- `401 Unauthorized` if credential is invalid. Will return a `string` as response.  

:::details Example
Request:

```http
POST https://longhub.top/api/account/login
Content-Type: application/json

{
    "username": "wcnm",
    "password": "<PASSWORD>"
}
```

Response when succeeds:

```http
HTTP/1.1 200 OK
Content-Type: application/json
set-cookie: nmsl_cookie=<omitted>; Path=/; Expires=Fri, 05 Jul 2024 08:22:01 GMT; Max-Age=5183940; Secure; HttpOnly; SameSite=lax

{
  "id": 1,
  "name": "MoveToEx",
  "email": null,
  "accessKey": "..."
}
```

Response when fails:

```http
HTTP/1.1 401 Unauthorized
Content-Type: application/json

"invalid email/password"
```
:::

## `GET` /account

Gets account information.

No parameters.

Requires authentication.

:::details Example
Request:

```http
POST https://longhub.top/api/account/
Cookie: <omitted>
```

Response:

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "email": null,
  "name": "MoveToEx",
  "permission": 65310,
  "accessKey": "<omitted>",
  "createdAt": "2024-02-05T05:31:19.000Z"
}
```
:::


## `POST` /account/reset-key

Resets access key of current account.

No parameters.

Requires authentication.

Response:

```typescript
{
    accessKey: string;      // New access key
}
```

:::details Example
Request:
```http
POST https://longhub.top/api/account/reset-key
X-Access-Key: <omitted>
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "accessKey": "<omitted>"
}
```
:::