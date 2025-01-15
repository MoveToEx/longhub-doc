"use strict";(self.webpackChunklonghub_doc=self.webpackChunklonghub_doc||[]).push([[470],{417:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>I,data:()=>v});var i=a(854);const n={class:"table-of-contents"},o=(0,i.Lk)("h2",{id:"technical",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#technical"},[(0,i.Lk)("span",null,"Technical")])],-1),l=(0,i.Lk)("h4",{id:"why-cannot-i-copy-an-entire-gif",tabindex:"-1"},[(0,i.Lk)("a",{class:"header-anchor",href:"#why-cannot-i-copy-an-entire-gif"},[(0,i.Lk)("span",null,"Why cannot I copy an entire GIF?")])],-1),r={href:"https://developer.mozilla.org/en-US/docs/Web/API/Clipboard_API",target:"_blank",rel:"noopener noreferrer"},s=(0,i.Lk)("code",null,"text/plain",-1),h=(0,i.Lk)("code",null,"text/html",-1),d=(0,i.Lk)("code",null,"image/png",-1),c={href:"https://developer.mozilla.org/en-US/docs/Web/API/ClipboardItem/supports_static",target:"_blank",rel:"noopener noreferrer"},p=(0,i.Lk)("code",null,"ClipboardItem.supports()",-1),u=(0,i.Lk)("br",null,null,-1),g=(0,i.Fv)('<h4 id="why-some-gifs-become-unanimated-after-uploading" tabindex="-1"><a class="header-anchor" href="#why-some-gifs-become-unanimated-after-uploading"><span>Why some GIFs become unanimated after uploading?</span></a></h4><p>It&#39;s been tested that some software cannot correctly pass file types when dragging files from inside. In this case, the browser will not receive the correct file format.</p><p>Currently there&#39;s no way of solving this. We suggest saving the image to gif files and dragging the file from your system explorer.</p><p>You can view the MIME type of your images below the rating input. Check this if you&#39;re unsure about the exact file type you&#39;re about to upload.</p><h4 id="is-it-possible-to-change-the-image-of-a-post" tabindex="-1"><a class="header-anchor" href="#is-it-possible-to-change-the-image-of-a-post"><span>Is it possible to change the image of a post?</span></a></h4><p>No. A post cannot have its image updated. To achieve similar goals you need to delete the post and create a new post with the same metadata.</p><h2 id="content" tabindex="-1"><a class="header-anchor" href="#content"><span>Content</span></a></h2><h3 id="image-eligibility" tabindex="-1"><a class="header-anchor" href="#image-eligibility"><span>Image eligibility</span></a></h3><h4 id="how-to-decide-which-duplicate-shall-be-deleted" tabindex="-1"><a class="header-anchor" href="#how-to-decide-which-duplicate-shall-be-deleted"><span>How to decide which duplicate shall be deleted?</span></a></h4><p>In brief, the one with lower quality and more content unrelated to LONG is tend to be deleted.</p><ul><li>For images that have no apparent differences in content, resolution and definition, one that looks better is likely to be kept. For example, ones with more natural saturation or hue.</li><li>For images that have the same content, but differ in resolution and definition (see below), the one that minimizes resolution and maximizez definition will be kept.</li><li>For images obtained by cropping a portion out of a larger image, the larger one will be kept.</li><li>For static images taken from a frame of a GIF, the GIF will be kept, except for when the static image is modified to a proper extent.</li></ul><h4 id="should-i-upload-images-not-directly-containing-long-faces" tabindex="-1"><a class="header-anchor" href="#should-i-upload-images-not-directly-containing-long-faces"><span>Should I upload images not directly containing LONG faces?</span></a></h4><p>It depends. Images that do not directly contain LONG faces but satisfy any of the conditions below can still be considered eligible for upload:</p>',13),f=(0,i.Lk)("li",null,"Belongs to an existing variant series.",-1),m={href:"https://longhub.top/post/89d4b854-5ff1-48ae-bec7-ea6aff29923d",target:"_blank",rel:"noopener noreferrer"},b={href:"https://longhub.top/post/bd9acd7a-7d44-4623-bebf-b3294da30a3e",target:"_blank",rel:"noopener noreferrer"},k={href:"https://longhub.top/post/4b8266cc-7b1e-408f-b3c3-6dc6f92cd7dd",target:"_blank",rel:"noopener noreferrer"},y=(0,i.Lk)("p",null,'Here, "directly" containing LONG faces refers to that the image contains at least a part of a LONG face that is sufficient for a user to recognize.',-1),L=(0,i.Lk)("p",null,[(0,i.eW)("For images satisfying condition 1 and 2, add a "),(0,i.Lk)("code",null,"longless"),(0,i.eW)(" tag when uploading.")],-1),w={},I=(0,a(209).A)(w,[["render",function(e,t){const a=(0,i.g2)("router-link"),w=(0,i.g2)("ExternalLinkIcon");return(0,i.uX)(),(0,i.CE)("div",null,[(0,i.Lk)("nav",n,[(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"#technical"},{default:(0,i.k6)((()=>[(0,i.eW)("Technical")])),_:1})]),(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"#content"},{default:(0,i.k6)((()=>[(0,i.eW)("Content")])),_:1}),(0,i.Lk)("ul",null,[(0,i.Lk)("li",null,[(0,i.bF)(a,{to:"#image-eligibility"},{default:(0,i.k6)((()=>[(0,i.eW)("Image eligibility")])),_:1})])])])])]),o,l,(0,i.Lk)("p",null,[(0,i.eW)("Due to the limitation of Async Clipboard API, the only formats available via browser "),(0,i.Lk)("a",r,[(0,i.eW)("clipboard api"),(0,i.bF)(w)]),(0,i.eW)(" are "),s,(0,i.eW)(", "),h,(0,i.eW)(" and "),d,(0,i.eW)(". (see "),(0,i.Lk)("a",c,[p,(0,i.bF)(w)]),(0,i.eW)(")"),u,(0,i.eW)(" This limitation helps improve security by forbidding some files that may be harmful to system, but also makes it impossible to copy other formats.")]),g,(0,i.Lk)("ol",null,[f,(0,i.Lk)("li",null,[(0,i.eW)("Mimics LONG faces with other elements (like a "),(0,i.Lk)("a",m,[(0,i.eW)("socket"),(0,i.bF)(w)]),(0,i.eW)(").")]),(0,i.Lk)("li",null,[(0,i.eW)("Is obtained by passing a LONG image through some sort of transformation, usually somewhat related to AI. (like the "),(0,i.Lk)("a",b,[(0,i.eW)("output image"),(0,i.bF)(w)]),(0,i.eW)(" after feeding LONG face into a Stable Diffusion img2img, or an "),(0,i.Lk)("a",k,[(0,i.eW)("AI upscaled image"),(0,i.bF)(w)]),(0,i.eW)(")")])]),y,L])}]]),v=JSON.parse('{"path":"/faq/","title":"FAQ","lang":"en-US","frontmatter":{"title":"FAQ"},"headers":[{"level":2,"title":"Technical","slug":"technical","link":"#technical","children":[]},{"level":2,"title":"Content","slug":"content","link":"#content","children":[{"level":3,"title":"Image eligibility","slug":"image-eligibility","link":"#image-eligibility","children":[]}]}],"git":{"updatedTime":1736901516000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":4}]},"filePathRelative":"faq/index.md"}')},772:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>o,data:()=>l});var i=a(854);const n={},o=(0,a(209).A)(n,[["render",function(e,t){return(0,i.uX)(),(0,i.CE)("div")}]]),l=JSON.parse('{"path":"/","title":"LONG Doc","lang":"en-US","frontmatter":{"home":true,"title":"LONG Doc","heroImage":"/images/logo.png","actions":[{"text":"Main site","link":"https://longhub.top","type":"secondary"}],"features":[{"title":"Metadata-based Search","details":"Find images that suit your needs within seconds."},{"title":"API Support","details":"Integrate LONG Hub into your own app."},{"title":"Templates","details":"Generate your own images from a blank template."}],"footer":"MIT Licensed | Copyright © LONG Team"},"headers":[],"git":{"updatedTime":1715006510000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":2}]},"filePathRelative":"README.md"}')}}]);