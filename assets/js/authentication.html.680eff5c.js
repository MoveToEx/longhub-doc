"use strict";(self.webpackChunklonghub_doc=self.webpackChunklonghub_doc||[]).push([[248],{927:(e,s,n)=>{n.r(s),n.d(s,{comp:()=>l,data:()=>r});var a=n(854);const t=(0,a.Fv)('<h1 id="authentication" tabindex="-1"><a class="header-anchor" href="#authentication"><span>Authentication</span></a></h1><p>There are two ways to authenticate on LONG Hub: Access key and login session.</p><p>If you are accessing an endpoint that requires authentication but you are not logged in, or have provided invalid credential(access key), the server will respond with <code>401 Unauthorized</code>.<br> If your credential is valid, but the associated account doesn&#39;t have permission required by an operation, the server will respond with <code>403 Forbidden</code>.</p><h2 id="access-key" tabindex="-1"><a class="header-anchor" href="#access-key"><span>Access key</span></a></h2><p>Access key is a randomly generated string consisting of only letters, digits, and underlines, and can be used to authenticate user.</p><p>You can view your access key on account page.<br> When making requests, add <code>X-Access-Key</code> in request header to authenticate.</p><p>For example:</p><div class="language-http line-numbers-mode" data-ext="http" data-title="http"><pre class="language-http"><code>PUT /api/post/[id]\n<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>\n<span class="token header"><span class="token header-name keyword">X-Access-Key</span><span class="token punctuation">:</span> <span class="token header-value">&lt;KEY&gt;</span></span>\n<span class="token application-json">\n<span class="token operator">...</span>\n</span></code></pre><div class="highlight-lines"><br><br><div class="highlight-line"> </div><br><br></div><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>With invalid access key, the server responds with a <code>401 Unauthorized</code>.</p><div class="custom-container warning"><p class="custom-container-title">WARNING</p><p>Treat your access key as you would do your password.<br> If you encounter a compromise, reset your access key at account page.</p></div><h2 id="login-session" tabindex="-1"><a class="header-anchor" href="#login-session"><span>Login session</span></a></h2><p>This is also the way you get authenticated when using web client of LONG Hub.<br> Although web client uses the Server Actions of Next.js, they all identify users by cookies.</p>',12),i=(0,a.Lk)("code",null,"POST",-1),o=(0,a.Lk)("p",null,[(0,a.eW)("Sessions on LONG Hub are stateless, which means sessions cannot be directly manipulated on the server. All the session data is encrypted, signed, and saved to the cookie named "),(0,a.Lk)("code",null,"nmsl_cookie"),(0,a.eW)("."),(0,a.Lk)("br"),(0,a.eW)(" To log out, simply clear the cookie named "),(0,a.Lk)("code",null,"nmsl_cookie"),(0,a.eW)(".")],-1),c={},l=(0,n(209).A)(c,[["render",function(e,s){const n=(0,a.g2)("RouteLink");return(0,a.uX)(),(0,a.CE)("div",null,[t,(0,a.Lk)("p",null,[(0,a.eW)("Refer to "),(0,a.bF)(n,{to:"/api/account.html#post-account-login"},{default:(0,a.k6)((()=>[i,(0,a.eW)(" /account/login")])),_:1}),(0,a.eW)(" for more details.")]),o])}]]),r=JSON.parse('{"path":"/api/authentication.html","title":"Authentication","lang":"en-US","frontmatter":{"title":"Authentication","description":"How to prove your identity"},"headers":[{"level":2,"title":"Access key","slug":"access-key","link":"#access-key","children":[]},{"level":2,"title":"Login session","slug":"login-session","link":"#login-session","children":[]}],"git":{"updatedTime":1715002316000,"contributors":[{"name":"MoveToEx","email":"39954725+MoveToEx@users.noreply.github.com","commits":1}]},"filePathRelative":"api/authentication.md"}')}}]);