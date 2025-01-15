"use strict";(self.webpackChunklonghub_doc=self.webpackChunklonghub_doc||[]).push([[134],{534:(e,t,a)=>{a.r(t),a.d(t,{comp:()=>r,data:()=>c});var n=a(854);const s=(0,n.Lk)("div",{class:"custom-container tip"},[(0,n.Lk)("p",{class:"custom-container-title"},"TIP"),(0,n.Lk)("p",null,[(0,n.eW)("Current template API looks dumb. We're planning on a refactor."),(0,n.Lk)("br"),(0,n.eW)(" There may be breaking changes to these endpoints in the future.")])],-1),p=(0,n.Lk)("h1",{id:"endpoints",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#endpoints"},[(0,n.Lk)("span",null,"Endpoints")])],-1),l={class:"table-of-contents"},o=(0,n.Fv)('<h2 id="crud" tabindex="-1"><a class="header-anchor" href="#crud"><span>CRUD</span></a></h2><h3 id="get-api-template-name" tabindex="-1"><a class="header-anchor" href="#get-api-template-name"><span>GET /api/template/[name]</span></a></h3><p>Get metadata of the specified template.</p><p>Route parameters:</p><table><thead><tr><th style="text-align:center;">Field</th><th style="text-align:center;">Desc.</th></tr></thead><tbody><tr><td style="text-align:center;"><code>name</code></td><td style="text-align:center;">Specified template name</td></tr></tbody></table><p>Status codes:</p><ul><li><code>200 OK</code> if nothing goes wrong.</li><li><code>404 Not Found</code> if there&#39;s no template associated with the given name.</li></ul><details class="custom-container details"><summary>Example</summary><p>Request:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>GET https://longhub.top/api/template/default\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Response:</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">&quot;imageURL&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://img.longhub.top/templates/default.jpg&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;offsetX&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;offsetY&quot;</span><span class="token operator">:</span> <span class="token number">204</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rectHeight&quot;</span><span class="token operator">:</span> <span class="token number">80</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;rectWidth&quot;</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;style&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;image&quot;</span><span class="token operator">:</span> <span class="token string">&quot;default.jpg&quot;</span><span class="token punctuation">,</span>\n    <span class="token property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2023-12-11T08:36:18.565Z&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Under construction</p></div>',9),i={},r=(0,a(209).A)(i,[["render",function(e,t){const a=(0,n.g2)("router-link");return(0,n.uX)(),(0,n.CE)("div",null,[s,p,(0,n.Lk)("nav",l,[(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.bF)(a,{to:"#crud"},{default:(0,n.k6)((()=>[(0,n.eW)("CRUD")])),_:1}),(0,n.Lk)("ul",null,[(0,n.Lk)("li",null,[(0,n.bF)(a,{to:"#get-api-template-name"},{default:(0,n.k6)((()=>[(0,n.eW)("GET /api/template/[name]")])),_:1})])])])])]),o])}]]),c=JSON.parse('{"path":"/api/template.html","title":"Template API","lang":"en-US","frontmatter":{"title":"Template API"},"headers":[{"level":2,"title":"CRUD","slug":"crud","link":"#crud","children":[{"level":3,"title":"GET /api/template/[name]","slug":"get-api-template-name","link":"#get-api-template-name","children":[]}]}],"git":{"updatedTime":1715002316000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":1}]},"filePathRelative":"api/template.md"}')}}]);