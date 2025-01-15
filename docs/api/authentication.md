---
title: Authentication
description: How to prove your identity
---

::: tip
Endpoints do not require authentication unless explicitly specified.
:::

# Authentication

There are two ways to authenticate on LONG Hub: Access key and login session.  

If you are accessing an endpoint that requires authentication but no valid credential is available (i.e. you are not logged in and your access key is invalid), the server will respond with `401 Unauthorized`.  
If your credential is valid, but the associated account doesn't have permission required by the operation, the server will respond with `403 Forbidden`.  

## Access key

Access key is a randomly generated string consisting of only letters, digits, and underlines, and can be used to authenticate user.  

You can view your access key on account page.  
When making requests, add `X-Access-Key` in request header to authenticate.  

For example:

```http{3}
PUT /api/post/[id]
Content-Type: application/json
X-Access-Key: <KEY>

...
```

or with [Python](https://www.python.org/):

```py{7}
from aiohttp import ClientSession
from asyncio import run

async def main():
    async with ClientSession() as session:
        async with session.get('https://longhub.top/api/account', headers={
            'X-Access-Key': '<KEY>'
        }) as response:
            print(await response.read())

run(main())
```

With invalid access key, the server responds with a `401 Unauthorized`.  

::: warning
Treat your access key as you would do to your password.  
If you encounter a compromise, reset your access key on your account page or use the [`GET /api/account/reset-key`](account.html#get-api-account-reset-key) endpoint. This will immediately invalidate your current access key.
:::

## Cookies

LONG Hub stores session data in a cookie named `nmsl_cookie`. 

Sessions on LONG Hub are stateless, which means sessions cannot be manipulated by the server if not in request context. All the session data is encrypted, signed, and saved to the cookie named `nmsl_cookie`.  
To log out, simply clear the cookie named `nmsl_cookie`.

The [`POST` /api/account/login](account.html#post-api-account-login) endpoint will leave session data in `nmsl_cookie` if the credential is valid.
