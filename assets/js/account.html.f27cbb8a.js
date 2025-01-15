"use strict";(self.webpackChunklonghub_doc=self.webpackChunklonghub_doc||[]).push([[17],{103:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>r,data:()=>u});var e=a(854);const t={class:"custom-container tip"},p=(0,e.Lk)("p",{class:"custom-container-title"},"TIP",-1),o=(0,e.Lk)("h1",{id:"endpoints",tabindex:"-1"},[(0,e.Lk)("a",{class:"header-anchor",href:"#endpoints"},[(0,e.Lk)("span",null,"Endpoints")])],-1),i={class:"table-of-contents"},l=(0,e.Fv)('<h2 id="post-api-account-login" tabindex="-1"><a class="header-anchor" href="#post-api-account-login"><span>POST <code>/api/account/login</code></span></a></h2><p>Authenticates user.</p><p>Accepts: <code>application/json</code></p><p>Request body:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LoginRequest</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    username<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span>\n    password<span class="token operator">:</span> <span class="token builtin">string</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">LoginResponse</span> <span class="token operator">=</span> Self<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Status codes &amp; response types:</p><ul><li><code>200 OK</code> if login succeeds. Will return a <code>User</code> as response.</li><li><code>401 Unauthorized</code> if credential is invalid. Will return a <code>string</code> as response.</li></ul><details class="custom-container details"><summary>Example</summary><p>Request:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>POST https://longhub.top/api/account/login\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token application-json">\n<span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;username&quot;</span><span class="token operator">:</span> <span class="token string">&quot;wcnm&quot;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;password&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;PASSWORD&gt;&quot;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response when succeeds:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token header"><span class="token header-name keyword">set-cookie</span><span class="token punctuation">:</span> <span class="token header-value">nmsl_cookie=&lt;omitted&gt;; Path=/; Expires=Fri, 05 Jul 2024 08:22:01 GMT; Max-Age=5183940; Secure; HttpOnly; SameSite=lax</span></span>\n<span class="token application-json">\n<span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MoveToEx&quot;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;accessKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;...&quot;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Response when fails:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">401</span> <span class="token reason-phrase string">Unauthorized</span></span>\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token application-json">\n<span class="token string">&quot;invalid email/password&quot;</span>\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="get-api-account" tabindex="-1"><a class="header-anchor" href="#get-api-account"><span>GET <code>/api/account</code></span></a></h2><p>Gets account information.</p><p>No parameters.</p><p>Requires authentication.</p><p>Response type:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">AccountResponse</span> <span class="token operator">=</span> Self<span class="token punctuation">;</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><details class="custom-container details"><summary>Example</summary><p>Request:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>POST https://longhub.top/api/account/\n<span class="token header"><span class="token header-name keyword">Cookie</span><span class="token punctuation">:</span> <span class="token header-value">&lt;omitted&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token application-json">\n<span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;email&quot;</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MoveToEx&quot;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;permission&quot;</span><span class="token operator">:</span> <span class="token number">65310</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;accessKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;omitted&gt;&quot;</span><span class="token punctuation">,</span>\n    <span class="token string-property property">&quot;createdAt&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2024-02-05T05:31:19.000Z&quot;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="get-api-account-reset-key" tabindex="-1"><a class="header-anchor" href="#get-api-account-reset-key"><span>GET <code>/api/account/reset-key</code></span></a></h2><p>Resets access key of current account.</p><p>No parameters.</p><p>Requires authentication.</p><p>Response:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">ResetResponse</span> <span class="token operator">=</span> <span class="token punctuation">{</span>\n    accessKey<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>Example</summary><p>Request:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>GET https://longhub.top/api/account/reset-key\n<span class="token header"><span class="token header-name keyword">X-Access-Key</span><span class="token punctuation">:</span> <span class="token header-value">&lt;omitted&gt;</span></span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Response:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code><span class="token response-status"><span class="token http-version property">HTTP/1.1</span> <span class="token status-code number">200</span> <span class="token reason-phrase string">OK</span></span>\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token application-json">\n<span class="token punctuation">{</span>\n    <span class="token string-property property">&quot;accessKey&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&lt;omitted&gt;&quot;</span>\n<span class="token punctuation">}</span>\n</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>',24),c={},r=(0,a(209).A)(c,[["render",function(s,n){const a=(0,e.g2)("RouteLink"),c=(0,e.g2)("router-link");return(0,e.uX)(),(0,e.CE)("div",null,[(0,e.Lk)("div",t,[p,(0,e.Lk)("p",null,[(0,e.eW)("Read "),(0,e.bF)(a,{to:"/api/schema.html"},{default:(0,e.k6)((()=>[(0,e.eW)("Schema")])),_:1}),(0,e.eW)(" first if you haven't read it.")])]),o,(0,e.Lk)("nav",i,[(0,e.Lk)("ul",null,[(0,e.Lk)("li",null,[(0,e.bF)(c,{to:"#post-api-account-login"},{default:(0,e.k6)((()=>[(0,e.eW)("POST /api/account/login")])),_:1})]),(0,e.Lk)("li",null,[(0,e.bF)(c,{to:"#get-api-account"},{default:(0,e.k6)((()=>[(0,e.eW)("GET /api/account")])),_:1})]),(0,e.Lk)("li",null,[(0,e.bF)(c,{to:"#get-api-account-reset-key"},{default:(0,e.k6)((()=>[(0,e.eW)("GET /api/account/reset-key")])),_:1})])])]),l])}]]),u=JSON.parse('{"path":"/api/account.html","title":"Account API","lang":"en-US","frontmatter":{"title":"Account API"},"headers":[{"level":2,"title":"POST /api/account/login","slug":"post-api-account-login","link":"#post-api-account-login","children":[]},{"level":2,"title":"GET /api/account","slug":"get-api-account","link":"#get-api-account","children":[]},{"level":2,"title":"GET /api/account/reset-key","slug":"get-api-account-reset-key","link":"#get-api-account-reset-key","children":[]}],"git":{"updatedTime":1736901516000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":3}]},"filePathRelative":"api/account.md"}')}}]);