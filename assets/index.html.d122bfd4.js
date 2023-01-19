import{_ as c,o as u,c as d,a as n,b as s,d as a,w as e,e as p,r as i}from"./app.285994b9.js";const m={},v=n("h1",{id:"introduction",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#introduction","aria-hidden":"true"},"#"),s(" Introduction")],-1),h=n("p",null,[s("Get started with BootstrapVueNext and Bootstrap "),n("code",null,"v5"),s(", the world\u2019s most popular framework for building responsive, mobile-first sites")],-1),b={class:"custom-container danger"},k=n("p",{class:"custom-container-title"},"NOT PRODUCTION READY",-1),g=n("strong",null,"alpha version",-1),f={href:"https://github.com/bootstrap-vue/bootstrap-vue-next/issues",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/bootstrap-vue/bootstrap-vue-next/pulls",target:"_blank",rel:"noopener noreferrer"},y=n("h2",{id:"why-bootstrapvuenext",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#why-bootstrapvuenext","aria-hidden":"true"},"#"),s(" Why BootstrapVueNext?")],-1),x={href:"https://bootstrap-vue.org/",target:"_blank",rel:"noopener noreferrer"},w=n("h2",{id:"contribute-and-support-\u{1F64C}",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#contribute-and-support-\u{1F64C}","aria-hidden":"true"},"#"),s(" Contribute and Support \u{1F64C}")],-1),j=n("p",null,[s("This project is still in "),n("strong",null,"alpha version"),s(" so there is a lot of work to do. If you want to contribute you can:")],-1),N={href:"https://github.com/bootstrap-vue/bootstrap-vue-next/issues",target:"_blank",rel:"noopener noreferrer"},B={href:"https://github.com/bootstrap-vue/bootstrap-vue-next/pulls",target:"_blank",rel:"noopener noreferrer"},V={href:"https://github.com/bootstrap-vue/bootstrap-vue-next/blob/main/CONTRIBUTING.md",target:"_blank",rel:"noopener noreferrer"},I=p('<h2 id="install" tabindex="-1"><a class="header-anchor" href="#install" aria-hidden="true">#</a> Install</h2><h3 id="installation-vue-js" tabindex="-1"><a class="header-anchor" href="#installation-vue-js" aria-hidden="true">#</a> Installation - Vue.js</h3><h4 id="preferred-installation" tabindex="-1"><a class="header-anchor" href="#preferred-installation" aria-hidden="true">#</a> Preferred Installation</h4>',3),C={href:"https://github.com/antfu/unplugin-vue-components",target:"_blank",rel:"noopener noreferrer"},T=n("li",null,[n("code",null,"unplugin-vue-components"),s(" may have the side effect feature of also automatically importing "),n("em",null,"your"),s(" components for ease of use. If you are uncomfortable with this, you may prefer the "),n("a",{href:"#legacy-installation"},[n("strong",null,"legacy")]),s(" installation without automatic tree-shaking")],-1),A=n("p",null,[s("Install the necessary packages for "),n("code",null,"BootstrapVueNext"),s(":")],-1),P=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-next @popperjs/core

`),n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(" unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-next @popperjs/core

`),n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i bootstrap bootstrap-vue-next @popperjs/core

`),n("span",{class:"token function"},"npm"),s(" i unplugin-vue-components "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=p(`<p>The following is an example of a basic <code>vite.config.js/ts</code>. All you need to do is add <strong>Components</strong> to the Vite <strong>plugins</strong> option, with the additional imports:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// vite.config.js/ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vite&#39;</span>
<span class="token keyword">import</span> vue <span class="token keyword">from</span> <span class="token string">&#39;@vitejs/plugin-vue&#39;</span>
<span class="token keyword">import</span> Components <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/vite&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> BootstrapVueNextResolver <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;unplugin-vue-components/resolvers&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  plugins<span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token function">vue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">Components</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
      resolvers<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">BootstrapVueNextResolver</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span><span class="token punctuation">)</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Finally, in your <code>main.js/ts</code> import the CSS:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.js/ts</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap-vue-next/dist/bootstrap-vue-next.css&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="typescript-features" tabindex="-1"><a class="header-anchor" href="#typescript-features" aria-hidden="true">#</a> Typescript Features</h5><p>If using TypeScript you will want to add <code>components.d.ts</code> to the <code>include</code> array in your tsconfig.json:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token comment">// tsconfig.json</span>
<span class="token punctuation">{</span>
  <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;components.d.ts&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="legacy-installation" tabindex="-1"><a class="header-anchor" href="#legacy-installation" aria-hidden="true">#</a> Legacy Installation</h4><ul><li>This is the old installation method. It is recommended to use the <a href="#preferred-installation"><strong>preferred</strong></a> installation as it will automatically remove unused components, resulting in a lower bundle size. You can, however, still use this installation method. Note, the preferred installation automatically treeshakes all components, both installation methods should have the same final dist size</li></ul><p>Install the necessary packages for <code>bootstrap-vue-next</code>:</p>`,10),G=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-next @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),L=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(` bootstrap bootstrap-vue-next @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),M=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(` i bootstrap bootstrap-vue-next @popperjs/core
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),O=p(`<p>Then, add to your <code>main.js/ts</code>:</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// main.js/ts</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">&#39;./App.vue&#39;</span> <span class="token comment">// Can be a different place</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> BootstrapVueNext <span class="token keyword">from</span> <span class="token string">&#39;bootstrap-vue-next&#39;</span>

<span class="token comment">// Optional, since every component imports their Bootstrap functionality</span>
<span class="token comment">// the following line is not necessary</span>
<span class="token comment">// import &#39;bootstrap&#39;</span>

<span class="token keyword">import</span> <span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span>
<span class="token keyword">import</span> <span class="token string">&#39;bootstrap-vue-next/dist/bootstrap-vue-next.css&#39;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>BootstrapVueNext<span class="token punctuation">)</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">&#39;#app&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="installation-nuxt-js-3" tabindex="-1"><a class="header-anchor" href="#installation-nuxt-js-3" aria-hidden="true">#</a> Installation - Nuxt.js 3</h3><p><strong>Nuxt is not officially supported</strong>. Various Bootstrap JavaScript elements contain references to &#39;Document&#39; and &#39;Window&#39;, which will cause breaking issues during server-side rendering. bootstrap-vue-next is currently working on a fix for this. Full Nuxt 3 compatibility is expected before a v1.0 release</p><p>As with the Vue.js installation</p><p>In your Nuxt3 application, install the necessary packages for <code>bootstrap-vue-next</code></p>`,6),S=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"pnpm"),s(),n("span",{class:"token function"},"add"),s(" bootstrap bootstrap-vue-next @popperjs/core "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),Y=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"yarn"),s(),n("span",{class:"token function"},"add"),s(" bootstrap bootstrap-vue-next @popperjs/core "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),E=n("div",{class:"language-bash ext-sh line-numbers-mode"},[n("pre",{class:"language-bash"},[n("code",null,[n("span",{class:"token function"},"npm"),s(" i bootstrap bootstrap-vue-next @popperjs/core "),n("span",{class:"token parameter variable"},"-D"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"})])],-1),W=p(`<p>Open your <code>nuxt.config.js/ts</code> file and configure your application to use <code>bootstrap-vue-next</code>. The components will be imported automatically as needed</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">// nuxt.config.js/ts</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> defineNuxtConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;nuxt3&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineNuxtConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  modules<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bootstrap-vue-next/nuxt&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  css<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;bootstrap/dist/css/bootstrap.css&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Enjoy it in your app without import.</p><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BButton</span> <span class="token attr-name">variant</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>primary<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>Test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BButton</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="comparison-with-bootstrapvue" tabindex="-1"><a class="header-anchor" href="#comparison-with-bootstrapvue" aria-hidden="true">#</a> Comparison with BootstrapVue</h2><p>BootstrapVue is the parent project for which this is based on. We consider BootstrapVue as the best implementation of Bootstrap <code>v4</code>. We strive for a full compatibility list for BootstrapVue. However, due to the nature of the rewrite, some features may be missing or changed. If anyone has spotted a missing compatibility feature, we request that you submit a GitHub issue.</p>`,6),z=n("em",null,"not",-1);function F(H,U){const o=i("ExternalLinkIcon"),t=i("CodeGroupItem"),l=i("CodeGroup"),r=i("RouterLink");return u(),d("div",null,[v,h,n("div",b,[k,n("p",null,[s("This project is still in "),g,s(". There is a lot of work to do, if you want to contribute you can use it and submit an "),n("a",f,[s("issue"),a(o)]),s(" or even better, a "),n("a",_,[s("pull request"),a(o)]),s(" \u{1F604}")])]),y,n("p",null,[s("BootstrapVueNext is an attempt to have the "),n("a",x,[s("BootstrapVue"),a(o)]),s(" components in Vue3, Bootstrap 5, and typescript. Another goal is to have the components written in a simple and readable way for a better developer experience")]),w,j,n("ul",null,[n("li",null,[s("submit an "),n("a",N,[s("issue"),a(o)])]),n("li",null,[s("or better, a "),n("a",B,[s("pull request"),a(o)])])]),n("p",null,[s("Read our "),n("a",V,[s("Contribution Guide"),a(o)]),s(" on how to start helping")]),I,n("ul",null,[n("li",null,[s("BootstrapVueNext recommends using "),n("a",C,[s("unplugin-vue-components"),a(o)]),s(" for automatic tree-shaking. The following installation method is recommended")]),T]),A,a(l,null,{default:e(()=>[a(t,{title:"PNPM",active:""},{default:e(()=>[P]),_:1}),a(t,{title:"YARN"},{default:e(()=>[R]),_:1}),a(t,{title:"NPM"},{default:e(()=>[q]),_:1})]),_:1}),D,a(l,null,{default:e(()=>[a(t,{title:"PNPM",active:""},{default:e(()=>[G]),_:1}),a(t,{title:"YARN"},{default:e(()=>[L]),_:1}),a(t,{title:"NPM"},{default:e(()=>[M]),_:1})]),_:1}),O,a(l,null,{default:e(()=>[a(t,{title:"PNPM",active:""},{default:e(()=>[S]),_:1}),a(t,{title:"YARN"},{default:e(()=>[Y]),_:1}),a(t,{title:"NPM"},{default:e(()=>[E]),_:1})]),_:1}),W,n("p",null,[s("You can view the planned compatibility list in the following "),a(r,{to:"/reference/parityList.html"},{default:e(()=>[s("section")]),_:1}),s(". It is "),z,s(" a migration guide, which will be finalized upon v1.0.0")])])}var K=c(m,[["render",F],["__file","index.html.vue"]]);export{K as default};