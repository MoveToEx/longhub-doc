---
title: API Schemas
---

This page describes some common object types shared by all api endpoints.  

Note that some endpoints may have respective extra fields. Refer to their document for details.

# Types

## Rating

```typescript
type Rating = 'none' | 'moderate' | 'violent';
```

## User

```typescript
type User = {
    id: number;
    name: string;
}
```

## Tag

```typescript
type Tag = {
    id: number;
    name: string;
}
```

## Post

```typescript
{
    id: string;             // UUID v4
    text: string;
    rating: Rating;
    image: string;          // id + extension
    imagePath: string;      // Server side storage path. Will be removed
    imageURL: string;       // Full URL
    imageHash: string;      // A 64-char 01 string
    createdAt: string;      // ISO formatted creation date (YYYY-MM-DDThh:mm:ss.mmmZ)
    updatedAt: string;      // ISO formatted last update date
    uploaderId: number;     // uploader.id. May be null for legacy posts
    tags?: Tag[];           // Tags. Will be undefined in some routes
    uploader?: User;        // Uploader. May be null for legacy posts
}
```

Note that due to limitations of Prisma, some unnecessary fields cannot be omitted from the result. These fields will be removed once the omitApi of Prisma becomes generally available.