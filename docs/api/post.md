---
title: Post API
---

::: tip
Read [Schema](schema.html) first if you haven't read it.
:::

# Endpoints

[[toc]]

## CRUD

### `GET` /api/post/

No permission required.  

Query parameters:

|   Name   |        Description        |
| :------: | :-----------------------: |
| `offset` |   Skips first % results   |
| `limit`  | Returns % results at most |

Response type:

```typescript
{
    count: number;      // Total posts
    data: Post[];       // Requested data
}
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
      "imageHash": "1111111111011001111111111000011111111111000001101111111101111010",
      "aggr": 0,
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
      },
      "imageURL": "https://img.longhub.top/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
      "imagePath": "/opt/longhub/media/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg"
    }
  ]
}
```
:::

### `GET` /api/post/\[id\]

Get a specific post.

Route parameters:

| Name  |      Desc.       |
| :---: | :--------------: |
| `id`  | Post ID to query |

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
    "imageHash": "1111111111011001111111111000011111111111000001101111111101111010",
    "aggr": 0,
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
    },
    "imageURL": "https://img.longhub.top/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg",
    "imagePath": "/opt/longhub/media/posts/7b702e5e-a0c1-4e47-8375-5c0666db761b.jpg"
}
```
:::


### `POST` /api/post/

Creates a new post.

Requires create new post permission.

Accepts: `multipart/form-data`

|   Field    |                          Desc.                          |
| :--------: | :-----------------------------------------------------: |
|  `image`   |          Image file. Must be less than 4 MiB.           |
| `metadata` |           JSON string. See below for details.           |
|  `force`   | Whether to ignore similar images. (0 for no, 1 for yes) |

Metadata schema:

```typescript
{
    text: string;
    tags: string[];
    aggr: number;
}
```

New tags will be created if non-existing tag names are found.  

Status codes:
- `200 OK` if insertion succeeds.
- `400 Bad Request` if request body does not correspond to schema.
- `409 Conflict` if similar images (hash diff < 8bits) are found. 

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
    "aggr": 0.5,
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
    "imageURL": "https://img.longhub.top/posts/494784be-70a8-4236-8879-67c229644d98.jpg",
    "id": "494784be-70a8-4236-8879-67c229644d98",
    "text": "nmsl",
    "aggr": 0.5,
    "imageHash": "1100001111000010010010100000101001101101011010001011011100101001",
    "image": "494784be-70a8-4236-8879-67c229644d98.jpg",
    "updatedAt": "2024-02-09T01:07:23.642Z",
    "createdAt": "2024-02-09T01:07:23.638Z",
    "uploaderId": 1
}
```

Response when conflicts:

```http
HTTP/1.1 409 Conflict
content-type: application/json

[
    {
        "imageURL": "https://img.longhub.top/posts/494784be-70a8-4236-8879-67c229644d98.jpg",
        "id": "494784be-70a8-4236-8879-67c229644d98",
        "imageHash": "1100001111000010010010100000101001101101011010001011011100101001",
        "image": "494784be-70a8-4236-8879-67c229644d98.jpg"
    }
]
```
:::

### `PUT` /api/post/\[id\]

Modifies metadata of a post.
Requires edit post permission.

Accepts: `application/json`

Request body schema:

```typescript
{
    text?: string;
    tags?: string[];
    aggr?: number;
}
```

Fields not present in request body will remain unchanged.

Status codes:
- `200 OK` if the post has been successfully modified.
- `400 Bad Request` if the given metadata is illegal.
- `404 Not Found` if the desinated post does not exist.

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
  "aggr": 0,
  "createdAt": "2024-03-28T14:21:46.000Z",
  "updatedAt": "2024-03-28T14:21:46.000Z",
  "uploaderId": 1,
  "imageURL": "https://img.longhub.top/posts/bdf5394e-bbb9-4412-988c-3566ee14fbe2.png",
  "imagePath": "/opt/longhub/media/posts/bdf5394e-bbb9-4412-988c-3566ee14fbe2.png"
}

```
:::

### `DELETE` /api/post/\[id\]

Deletes a post.

Requires delete post permission.

Route parameters:

| Name  |       Desc.       |
| :---: | :---------------: |
| `id`  | Post ID to delete |

Returns a single `"ok"` when succeeds.

::: details Example
Request:
```http
DELETE https://longhub.top/api/post/7b702e5e-a0c1-4e47-8375-5c0666db761b
X-Access-Key: 7GuleLzyd2hI4EIESC425SJXI_GZJ_PcScQgn_kCjCU
```

Response:
```http
HTTP/1.1 200 OK
content-type: application/json

"ok"
```
:::

## Search

### `POST` /api/post/search

Accepts: `application/json`

Query parameters:

|   Name   |        Description        |
| :------: | :-----------------------: |
| `offset` |   Skips first % results   |
| `limit`  | Returns % results at most |


Request body schema:

```typescript
interface Selector {
    type: 'text' | 'id' | 'tag' | 'aggr';
                            // The type of the selector, also the post field that this constraint is applied to.
    op?: string;            // See below for explainatory expressions.
    value: string | number; // Right operand of the operation.
};

type RequetSchema = Selector[];
```

Response schema:

```typescript
{
    count: number;
    data: Post[];
}
```

#### Text selector

```typescript
interface TextSelector extends Selector {
    type: 'text';
    op: 'contains' | 'not_contains';
    value: string;
}
```

Operators:
- `contains`: `post.text.contains(value)`
- `not_contains`: `!post.text.contains(value)`

#### ID selector

```typescript
interface IDSelector extends Selector {
    type: 'id';
    op: 'contains';
    value: string;
}
```

Operators:
- `contains`: `post.id.contains(value)`

#### Tag selector

```typescript
interface TagSelector extends Selector {
    type: 'tag';
    op: 'include' | 'exclude';
    value: string;
}
```

Operators: 
- `include`: `post.tags.some(tag => tag.name == value)`
- `exclude`: `post.tags.all(tag => tag.name != value)`


#### Aggr selector

```typescript
interface AggrSelector extends Selector {
    type: 'aggr';
    op: 'gt' | 'gte' | 'ge' | 'lt' | 'lte' | 'le' | 'eq' | 'ne';
    value: number;
}
```

Operators:
- `gt`: `post.aggr > value`
- `ge`, `geq`: `post.aggr >= value`
- `lt`: `post.agggr < value`
- `le`, `leq`: `post.aggr <= value`
- `eq`: `post.aggr == value`
- `ne`: `post.aggr != value`

:::details Example
Search for posts that are tagged with `monochrome`, with an aggressiveness less than 6, limited to 1 result:

```http
POST https://longhub.top/api/post/search?limit=1
Content-Type: application/json

[
    {
        "type": "tag",
        "op": "include",
        "value": "monochrome"
    },
    {
        "type": "aggr",
        "op": "lt",
        "value": 6
    }
]
```

Response:
```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "count": 831,
  "data": [
    {
      "id": "00059cd3-c340-40e8-927b-301ad116bf18",
      "text": "你这打mai的傻逼",
      "image": "00059cd3-c340-40e8-927b-301ad116bf18.jpg",
      "imageHash": "0011111000010111001100001101101010010000111110000001011010100001",
      "aggr": 3,
      "createdAt": "2023-12-29T13:45:24.000Z",
      "updatedAt": "2024-02-05T05:22:49.000Z",
      "uploaderId": null,
      "uploader": null,
      "imageURL": "https://img.longhub.top/posts/00059cd3-c340-40e8-927b-301ad116bf18.jpg",
      "imagePath": "/opt/longhub/media/posts/00059cd3-c340-40e8-927b-301ad116bf18.jpg"
    }
  ]
}
```
:::

### `POST` /api/post/similar

Search for similar images.

Accepts: `multipart/form-data`

Request body:

|  Field  |        Desc.         |
| :-----: | :------------------: |
| `image` | Image file to search |

Response schema:

```typescript
interface SimilarPost {
    id: string;
    image: string;
    imageURL: string;
    diff: number;
};

type ResponseSchema = {
    hash: string;   // A 64-char 01 string.
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
            "imageURL": "https://img.longhub.top/posts/fb852b83-71c7-4fb0-ab50-7e5eef044965.jpg",
            "diff": 0
        }
    ]
}
```
:::