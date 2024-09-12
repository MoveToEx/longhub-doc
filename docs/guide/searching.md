---
title: Searching
---

# Searching

Currently, the following selector segment syntaxes are supported:  

- `<text>` Search for images that has %text as a part of its text.
- `+<tag>` Search for images that has %tag in its tags.
- `-<tag>` Exclude images tagged with %tag from search result.
- `@<id>` Search for images with id. Wildcard(*) is supported.
- `uploader:<username>`: Search for posts uploaded by %username.
- `rating:<rating>`: Search for posts rated as %rating. Can be `n` for `none`, `m` for moderate and `v` for violent.

Note: `<var>` means `var` is a mandatory field.

Search result will update when new segment is entered.

Multiple segments are concatenated by a logical AND operator.  

For example, to search for all posts that are tagged with `nmsl` but not tagged with `wcnm`, and contains `我` as a part of its text:

```
+nmsl -wcnm 我
```