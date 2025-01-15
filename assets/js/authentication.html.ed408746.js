"use strict";(self.webpackChunklonghub_doc=self.webpackChunklonghub_doc||[]).push([[248],{222:(n,e,s)=>{s.r(e),s.d(e,{comp:()=>m,data:()=>b});var a=s(854);const t=(0,a.Fv)('<div class="custom-container tip"><p class="custom-container-title">TIP</p><p>Endpoints do not require authentication unless explicitly specified.</p></div><h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h1><p>There are two ways to authenticate on LONG Hub: Access key and login session.</p><p>If you are accessing an endpoint that requires authentication but no valid credential is available (i.e. you are not logged in and your access key is invalid), the server will respond with <code>401 Unauthorized</code>.<br> If your credential is valid, but the associated account doesn&#39;t have permission required by the operation, the server will respond with <code>403 Forbidden</code>.</p><h2 id="access-key" tabindex="-1"><a class="header-anchor" href="#access-key"><span>Access key</span></a></h2><p>Access key is a randomly generated string consisting of only letters, digits, and underlines, and can be used to authenticate user.</p><p>You can view your access key on account page.<br> When making requests, add <code>X-Access-Key</code> in request header to authenticate.</p><p>For example:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>PUT /api/post/[id]\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token header"><span class="token header-name keyword">X-Access-Key</span><span class="token punctuation">:</span> <span class="token header-value">&lt;KEY&gt;</span></span>\n<span class="token application-json">\n...\n</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',9),i={href:"https://www.python.org/",target:"_blank",rel:"noopener noreferrer"},o=(0,a.Fv)('<div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code><span class="token keyword">from</span> aiohttp <span class="token keyword">import</span> ClientSession\n<span class="token keyword">from</span> asyncio <span class="token keyword">import</span> run\n\n<span class="token keyword">async</span> <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">async</span> <span class="token keyword">with</span> ClientSession<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">as</span> session<span class="token punctuation">:</span>\n        <span class="token keyword">async</span> <span class="token keyword">with</span> session<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">&#39;https://longhub.top/api/account&#39;</span><span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span>\n            <span class="token string">&#39;X-Access-Key&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;&lt;KEY&gt;&#39;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token keyword">as</span> response<span class="token punctuation">:</span>\n            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token keyword">await</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\nrun<span class="token punctuation">(</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n</code></pre><div class="highlight-lines"><br><br><br><br><br><br><div class="highlight-line"> </div><br><br><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With invalid access key, the server responds with a <code>401 Unauthorized</code>.</p>',2),c={class:"custom-container warning"},l=(0,a.Lk)("p",{class:"custom-container-title"},"WARNING",-1),p=(0,a.Lk)("br",null,null,-1),r=(0,a.Lk)("code",null,"GET /api/account/reset-key",-1),d=(0,a.Lk)("h2",{id:"cookies",tabindex:"-1"},[(0,a.Lk)("a",{class:"header-anchor",href:"#cookies"},[(0,a.Lk)("span",null,"Cookies")])],-1),u=(0,a.Lk)("p",null,[(0,a.eW)("LONG Hub stores session data in a cookie named "),(0,a.Lk)("code",null,"nmsl_cookie"),(0,a.eW)(".")],-1),k=(0,a.Lk)("p",null,[(0,a.eW)("Sessions on LONG Hub are stateless, which means sessions cannot be manipulated by the server if not in request context. All the session data is encrypted, signed, and saved to the cookie named "),(0,a.Lk)("code",null,"nmsl_cookie"),(0,a.eW)("."),(0,a.Lk)("br"),(0,a.eW)(" To log out, simply clear the cookie named "),(0,a.Lk)("code",null,"nmsl_cookie"),(0,a.eW)(".")],-1),h=(0,a.Lk)("code",null,"POST",-1),v=(0,a.Lk)("code",null,"nmsl_cookie",-1),y={},m=(0,s(209).A)(y,[["render",function(n,e){const s=(0,a.g2)("ExternalLinkIcon"),y=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t,(0,a.Lk)("p",null,[(0,a.eW)("or with "),(0,a.Lk)("a",i,[(0,a.eW)("Python"),(0,a.bF)(s)]),(0,a.eW)(":")]),o,(0,a.Lk)("div",c,[l,(0,a.Lk)("p",null,[(0,a.eW)("Treat your access key as you would do to your password."),p,(0,a.eW)(" If you encounter a compromise, reset your access key on your account page or use the "),(0,a.bF)(y,{to:"/api/account.html#get-api-account-reset-key"},{default:(0,a.k6)((()=>[r])),_:1}),(0,a.eW)(" endpoint. This will immediately invalidate your current access key.")])]),d,u,k,(0,a.Lk)("p",null,[(0,a.eW)("The "),(0,a.bF)(y,{to:"/api/account.html#post-api-account-login"},{default:(0,a.k6)((()=>[h,(0,a.eW)(" /api/account/login")])),_:1}),(0,a.eW)(" endpoint will leave session data in "),v,(0,a.eW)(" if the credential is valid.")])])}]]),b=JSON.parse('{"path":"/api/authentication.html","title":"Authentication","lang":"en-US","frontmatter":{"title":"Authentication","description":"How to prove your identity"},"headers":[{"level":2,"title":"Access key","slug":"access-key","link":"#access-key","children":[]},{"level":2,"title":"Cookies","slug":"cookies","link":"#cookies","children":[]}],"git":{"updatedTime":1736901516000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":3}]},"filePathRelative":"api/authentication.md"}')}}]);