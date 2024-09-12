---
title: Authentication
description: How to prove your identity
---

# Authentication


There are two ways to authenticate on LONG Hub: Access key and login session.  

If you are accessing an endpoint that requires authentication but you are not logged in, or have provided invalid credential(access key), the server will respond with `401 Unauthorized`.  
If your credential is valid, but the associated account doesn't have permission required by an operation, the server will respond with `403 Forbidden`.  

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

With invalid access key, the server responds with a `401 Unauthorized`.  

::: warning
Treat your access key as you would do your password.  
If you encounter a compromise, reset your access key at account page.
:::

## Login session

This is also the way you get authenticated when using web client of LONG Hub.  
Although web client uses the Server Actions of Next.js, they all identify users by cookies.  

Refer to [`POST` /api/account/login](account.html#post-api-account-login) for more details.

Sessions on LONG Hub are stateless, which means sessions cannot be directly manipulated on the server. All the session data is encrypted, signed, and saved to the cookie named `nmsl_cookie`.  
To log out, simply clear the cookie named `nmsl_cookie`.
