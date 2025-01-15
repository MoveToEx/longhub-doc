---
title: Post API
---

::: tip
Read [Schema](schema.html) first if you haven't read it.
:::

# Endpoints

[[toc]]

## CRUD

### GET `/api/post/`

Query parameters:

|   Name   |        Description        |
| :------: | :-----------------------: |
| `offset` |   Skips first % results   |
| `limit`  | Returns % results at most |

Response type:

```typescript
type PostResponse = {
    count: number;      // Total posts
    data: Post[];       // Requested data
};
```

::: details Example
Request:
```http
GET https://longhub.top/api/post?limit=1&offset=2
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "count": 1987,
  "data": [
    {
        "id": "7b702e5e-a0c1-4e47-8375-5c0666db761b",
        "text": "",
        "image": "7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
        "imageURL": "https://r2.longhub.top/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
        "imageHash": "1111111111011001111111111000011111111111000001101111111101111010",
        "rating": "none",
        "createdAt": "2024-05-04T04:06:29.000Z",
        "updatedAt": "2024-05-04T04:06:29.000Z",
        "uploaderId": 1,
        "tags": [
            {
                "id": 1,
                "name": "notext"
            },
            {
                "id": 6,
                "name": "monochrome"
            },
            {
                "id": 9,
                "name": "meaningless"
            },
            {
                "id": 82,
                "name": "mirrored"
            }
        ],
        "uploader": {
            "id": 1,
            "name": "MoveToEx"
        }
    }
  ]
}
```
:::

### GET `/api/post/[id]`

Get a specific post.

Route parameters:

| Name  |      Desc.       |
| :---: | :--------------: |
| `id`  | Post ID to query |

Response type: `Post`

::: details Example
Request:
```http
GET https://longhub.top/api/post/7b702e5e-a0c1-4e47-8375-5c0666db761b
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "id": "7b702e5e-a0c1-4e47-8375-5c0666db761b",
    "text": "",
    "image": "7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
    "imageURL": "https://r2.longhub.top/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
    "imageHash": "1111111111011001111111111000011111111111000001101111111101111010",
    "rating": "none",
    "createdAt": "2024-05-04T04:06:29.000Z",
    "updatedAt": "2024-05-04T04:06:29.000Z",
    "uploaderId": 1,
    "tags": [
        {
            "id": 1,
            "name": "notext"
        },
        {
            "id": 6,
            "name": "monochrome"
        },
        {
            "id": 9,
            "name": "meaningless"
        },
        {
            "id": 82,
            "name": "mirrored"
        }
    ],
    "uploader": {
        "id": 1,
        "name": "MoveToEx"
    }
}
```
:::


### POST `/api/post/`

Creates a new post.

Requires create new post permission.

Accepts: `multipart/form-data`

| Form Field |    Content Type    |                       Description                       |
| :--------: | :----------------: | :-----------------------------------------------------: |
|  `image`   |     `image/*`      |          Image file. Must be less than 4 MiB.           |
| `metadata` | `application/json` |    Metadata of the new post. See below for details.     |
|  `force`   |    `text/plain`    | Whether to ignore similar images. (0 for no, 1 for yes) |

The `image` file does not require a valid file name. Its file extension will be inferred from its `Content-Type` header.

Metadata schema:

```typescript
type Metadata = {
    text?: string;
    tags?: string[];
    rating?: Rating;
};
```

The following defaults will be used if a field is not present in the metadata:

```typescript
const DefaultMetadata = {
    text: '',
    tags: [],
    rating: 'none'
};
```

New tags will be created if non-existing tag names are found.  

Status codes:
- `201 Created` if creation succeeds.
- `400 Bad Request` if request body does not correspond to schema.
- `409 Conflict` if similar images (hash difference less than 4 bits) are found. 

Response type:

```typescript
type PostUploadResponse = Omit<Post, 'uploader'> & {
    uploader: Self
};
type PostConflictResponse = Pick<Post, 'image' | 'imageURL' | 'id' | 'imageHash'>[];
```

:::details Example

Request:
```http
POST https://longhub.top/api/post
Content-Type: multipart/form-data; boundary=NMSL
X-Access-Key: <KEY>

--NMSL
Content-Disposition: form-data; name="image"; filename="image.jpg"
Content-Type: image/jpeg

< ./image.jpg
--NMSL
Content-Disposition: form-data; name="metadata"
Content-Type: application/json

{
    "text": "nmsl",
    "rating": "none",
    "tags": [
        "monochrome"
    ]
}
--NMSL
Content-Disposition: form-data; name="force"
Content-Type: text/plain

0
--NMSL--
```

Response when succeeds:

```http
HTTP/1.1 200 OK
content-type: application/json

{
    "id": "494784be-70a8-4236-8879-67c229644d98",
    "text": "nmsl",
    "image": "494784be-70a8-4236-8879-67c229644d98.jpg",
    "imageURL": "https://r2.longhub.top/posts/494784be-70a8-4236-8879-67c229644d98.jpg",
    "imageHash": "1100001111000010010010100000101001101101011010001011011100101001",
    "aggr": 0,
    "rating": "none",
    "createdAt": "2024-02-09T01:07:23.642Z",
    "updatedAt": "2024-02-09T01:07:23.642Z",
    "uploaderId": 1,
    "tags": [
        {
            "id": 6,
            "name": "monochrome"
        }
    ],
    "uploader": {
        "id": 1,
        "email": null,
        "name": "MoveToEx",
        "permission": 65310,
        "accessKey": "<OMITTED>",
        "passwordHash": "<OMITTED>",
        "createdAt": "2024-02-05T05:31:19.000Z"
    }
}
```

Response when conflicts:

```http
HTTP/1.1 409 Conflict
content-type: application/json

[
    {
        "imageURL": "https://r2.longhub.top/posts/494784be-70a8-4236-8879-67c229644d98.jpg",
        "id": "494784be-70a8-4236-8879-67c229644d98",
        "imageHash": "1100001111000010010010100000101001101101011010001011011100101001",
        "image": "494784be-70a8-4236-8879-67c229644d98.jpg"
    }
]
```
:::

### PUT `/api/post/[id]`

Modifies metadata of a post.  
Requires edit post permission.
Accepts: `application/json`

Request body schema:

```typescript
type UpdateSchema = {
    text?: string;
    tags?: string[];
    rating?: Rating;
}
```
Fields not present in request body will remain unchanged.

Status codes:
- `200 OK` if the post has been successfully modified.
- `400 Bad Request` if the given metadata is illegal.
- `404 Not Found` if the desinated post does not exist.

Response type: `Post`

:::details Example
Modify post `bdf5394e-bbb9-4412-988c-3566ee14fbe2`, set text to `wcnm` and leave other fields unchanged:
```http
PUT https://longhub.top/api/post/bdf5394e-bbb9-4412-988c-3566ee14fbe2
X-Access-Key: <KEY>
Content-Type: application/json

{
    "text": "wcnm"
}
```

Response:
```http
HTTP/1.1 200 OK
content-type: application/json

{
    "id": "bdf5394e-bbb9-4412-988c-3566ee14fbe2",
    "text": "wcnm",
    "image": "bdf5394e-bbb9-4412-988c-3566ee14fbe2.png",
    "imageHash": "1000000000111001011011101011110010001100111101100110010111000101",
    "imageURL": "https://r2.longhub.top/posts/bdf5394e-bbb9-4412-988c-3566ee14fbe2.png",
    "rating": "none",
    "createdAt": "2024-03-28T14:21:46.000Z",
    "updatedAt": "2024-03-28T14:21:46.000Z",
    "uploaderId": 1,
    "tags": []
}

```
:::

### DELETE `/api/post/[id]`

Deletes a post.

Requires delete post permission.

Route parameters:

| Name  |       Desc.       |
| :---: | :---------------: |
| `id`  | Post ID to delete |

Response: `204 No Content`

::: details Example
Request:
```http
DELETE https://longhub.top/api/post/7b702e5e-a0c1-4e47-8375-5c0666db761b
X-Access-Key: <OMITTED>
```

Response:
```http
HTTP/1.1 204 No Content
```
:::

## Search

### POST `/api/post/search`

Accepts: `application/json`

Query parameters:

|   Name   |        Description        |
| :------: | :-----------------------: |
| `offset` |   Skips first % results   |
| `limit`  | Returns % results at most |


Request body schema:

```typescript
type Selector = {
    type: string;                   // Selector type. See below for details
    op?: string | undefined;        // Operation applied to the selector
    value?: string | undefined;     // Right operand of the expression
};
type Order = {
    key: 'createdAt' | 'uploaderId' | 'id',
    direction?: 'asc' | 'desc'
};
type SearchRequest = {
    filter?: Selector[];
    order?: Order[];
};
```

Response type:

```typescript
type SearchReseponse = {
    count: number;
    data: Post[];
};
```

#### Filtering

The `filter` field specifies the condition applied on the posts. An empty `filter` array will cause a schema validation error.  
Each item of `filter` must be of the following type:

```typescript
type Selector = {
    type: 'text';
    op: 'contains' | 'not_contains';
    value: string;
} | {
    type: 'id';
    op: 'contains';
    value: string;
} | {
    type: 'tag';
    op: 'include' | 'exclude';
    value: string;
} | {
    type: 'rating';
    value: Rating;
} | {
    type: 'createdAt' | 'updatedAt';
    op: 'gt' | 'gte' | 'ge' | 'lt' | 'lte' | 'le' | 'eq' | 'ne';
    value: `${number}-${number}-${number}`;     // *1
} | {
    type: 'system';
    op: 'untagged' | 'disowned';                // *2
}
```

Note:
1. The `value` field of date selector must be either of form `YYYY-MM-DD` or of form `YYYY-MM-DDTHH:mm:SSZ`, and must be a valid date. Otherwise a validation error will be returned. **Timezone offsets are not allowed (like `2020-01-01T00:00:00+02:00`)**  
2. `disowned` operator matches posts that do not have an owner. This type of posts do exist because in early stages of LONG Hub there was no users and uploading was done without authentication.

#### Ordering

The `order` specifies the order of the response.  

Each item of `order` must be of the following type:

```typescript
type Order = {
    key: 'createdAt' | 'uploaderId' | 'id',
    direction?: 'asc' | 'desc'
};
```

The `direction` field of an item will default to `asc` if not specified.
The `order` field will default to the following value if not specified:  

```json
[
    {
        "key": "id",
        "direction": "asc"
    }
]
```

:::details Example
Search for posts that are tagged with `monochrome`, rated as moderate, limited to 1 result, and sort by creation date in ascending order:

```http
POST https://longhub.top/api/post/search?limit=1
Content-Type: application/json

{
    "filter": [
        {
            "type": "tag",
            "op": "include",
            "value": "monochrome"
        },
        {
            "type": "rating",
            "value": "moderate"
        }
    ],
    "order": [
        {
            "key": "createdAt",
            "direction": "asc"
        }
    ]
}
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
    "count": 402,
    "data": [
        {
            "id": "00059cd3-c340-40e8-927b-301ad116bf18",
            "text": "你这打mai的傻逼",
            "image": "00059cd3-c340-40e8-927b-301ad116bf18.jpg",
            "imageURL": "https://r2.longhub.top/posts/00059cd3-c340-40e8-927b-301ad116bf18.jpg",
            "imageHash": "0011111000010111001100001101101010010000111110000001011010100001",
            "aggr": 3,
            "rating": "moderate",
            "createdAt": "2023-12-29T13:45:24.000Z",
            "updatedAt": "2024-02-05T05:22:49.000Z",
            "uploaderId": null,
            "tags": [
                {
                    "id": 6,
                    "name": "monochrome"
                },
                {
                    "id": 7,
                    "name": "mug"
                },
                {
                    "id": 8,
                    "name": "maimai"
                }
            ],
            "uploader": null
        }
    ]
}
```
:::

### POST `/api/post/similar`

Search for similar images.

Accepts: `multipart/form-data`

Request body:

|  Field  |        Desc.         |
| :-----: | :------------------: |
| `image` | Image file to search |

Response schema:

```typescript
type SimilarPost = {
    id: string;
    image: string;
    imageURL: string;
    diff: number;       // Number of bits that are different from the request image
};

type ResponseSchema = {
    hash: string;   // The hash of the incoming image
    similar: SimilarPost[];
}
```

:::details Example
Request:

```http
POST https://longhub.top/api/post/similar
Content-Type: multipart/form-data; boundary=NMSL

--NMSL
Content-Disposition: form-data; name="image"; filename="image.png"
Content-Type: image/png

< ./image.png
--NMSL--
```

Response:  

```json
{
    "hash": "1100001111000010010010100000101001101101011010001011011100101001",
    "similar": [
        {
            "id": "fb852b83-71c7-4fb0-ab50-7e5eef044965",
            "image": "fb852b83-71c7-4fb0-ab50-7e5eef044965.jpg",
            "imageURL": "https://r2.longhub.top/posts/fb852b83-71c7-4fb0-ab50-7e5eef044965.jpg",
            "diff": 0
        }
    ]
}
```
:::