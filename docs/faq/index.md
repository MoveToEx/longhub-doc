---
title: FAQ
---

## Technical

#### Why cannot I copy an entire GIF?

Due to the limitation of Async Clipboard API, the only format available via browser clipboard api is `text/plain`, `text/html` and `image/png`.  
This limitation helps improve security by forbidding some files that may be harmful to system, but also makes it impossible to copy other formats.  
Chrome added custom format in Chrome 108 which allows for custom clipboard format by adding a `web` prefix, but this is only used for internal communication of a single application and does not lift the limitation when it comes to inter-application paste.

#### Why some GIFs become unanimated after uploading?

It's been tested that some software, like Tencent QQ, cannot correctly pass file types when dragging files from inside. In this case, browsers will receive an `image/png` as MIME type for GIFs dragged from them.

Currently there's no way of solving this. We suggest saving the image to gif files and dragging the file from your system explorer.

#### Is it possible to change the image of a post?

No. A post cannot have its image updated. To achieve similar goals you need to delete the post and create a new post with the same metadata.

#### Is there any limitation on things like tags?

All the limitations are described below:
- `/post/search` endpoint (including Search page) requires total selector count to be not greater than 24.
- 

## Content-wise

#### How to decide which duplicate shall be deleted?

- For images that have no apparent differences in content, resolution and definition, one that looks better is likely to be kept. For example, ones with more natural saturation or hue.
- For images that have the same content, but differ in resolution and definition (see below), the one that minimizes resolution and maximizez definition will be kept.
- For images obtained by cropping a portion out of a larger image, the larger one will be kept.
- For static images taken from a frame of a GIF, the GIF will be kept, except for when the static image is modified to a proper extent.

Note:
- Here, *resolution* refers to the total pixels an image contains, and *definition* refers to how clear this image is. For example, doubling the size of an image by stretching will only increase its resolution, but not its definition. Images with low definition tend to appear blurry or are filled with pixel blocks of the same color.

#### Should I upload images not directly containing LONG faces?

Yes. Images that do not directly contain LONG faces but satisfy any of the conditions below can still be considered eligible for upload:
1. Belongs to an existing variant series.
2. Mimics LONG faces with other elements (like a [socket](https://longhub.top/post/89d4b854-5ff1-48ae-bec7-ea6aff29923d)).
3. Is obtained by passing a LONG image through a certain kind of filter that transforms the whole image into another image that looks alike, usually somewhat related to AI. (like the [output image](https://longhub.top/post/bd9acd7a-7d44-4623-bebf-b3294da30a3e) after feeding LONG face into a Stable Diffusion img2img, or an [AI upscaled image](https://longhub.top/post/4b8266cc-7b1e-408f-b3c3-6dc6f92cd7dd))

Here, "directly" containing LONG faces refers to that the image contains at least a part of a LONG face that is sufficient for a user to recognize it as a part of LONG face.

For images satisfying condition 1 and 2, please add a `longless` tag when uploading.
