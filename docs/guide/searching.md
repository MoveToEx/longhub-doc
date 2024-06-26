---
title: Searching
---

# Searching

Currently, the following selector segment syntaxes are supported:  

- `text` Search for images that has %text as a part of its text.
- `+tag` Search for images that has %tag in its tags.
- `-tag` Exclude images tagged with %tag from search result.
- `@id` Search for images with id. Wildcard(*) is supported.
- `<aggr`,`>aggr`,`<=aggr`,`>=aggr`,`=aggr` Search for images with given range of aggressiveness.

Search result will update when new segment is entered.

Multiple segments are concatenated by a logical AND operator.  

For example, to search for all posts that are tagged with `nmsl` but not tagged with `wcnm`, and contains `我` as a part of its text:

```
+nmsl -wcnm 我
```