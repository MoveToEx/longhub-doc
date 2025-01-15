---
title: Tag
---

::: tip
Read [Schema](schema.html) first if you haven't read it.
:::

# Endpoints

[[toc]]

## GET `/api/post/tag`

Response type:  

```typescript
type TagsResponse = (Tag & {
    count: number;
})[];
```

## GET `/api/post/tag/[name]`

Route parameters:

|  Name  |      Description       |
| :----: | :--------------------: |
| `name` | Tag name to search for |

Query parameters:

|   Name   |           Description            |
| :------: | :------------------------------: |
| `limit`  | Maximum count of posts to return |
| `offset` |      Count of posts to skip      |

Response type:

```typescript
type TaggedPostResponse = {
    count: number;
    data: Post[];
};
```