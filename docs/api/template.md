---
title: Template API
---

:::tip
Current template API looks dumb. We're planning on a refactor.  
There may be breaking changes to these endpoints in the future.
:::

# Endpoints

[[toc]]

## CRUD

### GET /api/template/\[name\]

Get metadata of the specified template.  

Route parameters: 

| Field  |          Desc.          |
| :----: | :---------------------: |
| `name` | Specified template name |

Status codes:
- `200 OK` if nothing goes wrong.
- `404 Not Found` if there's no template associated with the given name.

:::details Example

Request:  

```http
GET https://longhub.top/api/template/default
```

Response:  

```json
{
    "imageURL": "https://img.longhub.top/templates/default.jpg",
    "name": "default",
    "offsetX": 0,
    "offsetY": 204,
    "rectHeight": 80,
    "rectWidth": 300,
    "style": null,
    "image": "default.jpg",
    "createdAt": "2023-12-11T08:36:18.565Z"
}
```
:::

:::tip
Under construction
:::