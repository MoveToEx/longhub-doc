---
title: API Schemas
---

# Response types

## User

```typescript
{
    id: number;
    name: string;
    accessKey: string;      // Only for /api/account endpoint
    passwordHash: string;   // ^
}
```

## Tag

```typescript
{
    id: number;
    name: string;
    count?: number;         // Only for /api/tag endpoint
}
```

## Post

```typescript
{
    id: string;             // UUID v4
    text: string;
    aggr: number;           // [0.0, 10.0] step 0.5
    image: string;          // Only filename + extension, e.g. xxx-xxx.png
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

