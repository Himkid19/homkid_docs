import{_ as y}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as p,c,d as o,a as e,F as b,h as f,f as s,b as u,n as M,g as w,i as d,j as t,k as h,e as B,o as m,t as x}from"./app-DyPemVjh.js";const A={__name:"page.html",setup(g,{expose:r}){r();const a={MyComponent:d({setup(){const i=h("Hello world!"),l=n=>{i.value=n.target.value};return()=>[t("p",[t("span","输入: "),t("input",{value:i.value,onInput:l})]),t("p",[t("span","输出: "),i.value])]}}),defineComponent:d,h:t,ref:h};return Object.defineProperty(a,"__isScriptSetup",{enumerable:!1,value:!0}),a}},C=e("p",null,[e("code",null,"more"),u(" 注释之前的内容被视为文章摘要。")],-1),F=B(`<h2 id="页面标题" tabindex="-1"><a class="header-anchor" href="#页面标题"><span>页面标题</span></a></h2><p>The first H1 title in Markdown will be regarded as page title.</p><p>Markdown 中的第一个 H1 标题会被视为页面标题。</p><p>你可以在 Markdown 的 Frontmatter 中设置页面标题。</p><div class="language-md line-numbers-mode" data-highlighter="shiki" data-ext="md" data-title="md" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">title</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">页面标题</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">---</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="页面信息" tabindex="-1"><a class="header-anchor" href="#页面信息"><span>页面信息</span></a></h2><p>你可以在 Markdown 的 Frontmatter 中设置页面信息。</p><ul><li>作者设置为 Ms.Hope。</li><li>写作日期为 2020 年 1 月 1 日</li><li>分类为 “使用指南”</li><li>标签为 “页面配置” 和 “使用指南”</li></ul><h2 id="页面内容" tabindex="-1"><a class="header-anchor" href="#页面内容"><span>页面内容</span></a></h2><p>你可以自由在这里书写你的 Markdown。</p><div class="hint-container tip"><p class="hint-container-title">图片引入</p><ul><li>你可以将图片和 Markdown 文件放置在一起使用相对路径进行引用。</li><li>对于 <code>.vuepress/public</code> 文件夹的图片，请使用绝对链接 <code>/</code> 进行引用。</li></ul></div><h2 id="组件" tabindex="-1"><a class="header-anchor" href="#组件"><span>组件</span></a></h2><p>每个 Markdown 页面都会被转换为一个 Vue 组件，这意味着你可以在 Markdown 中使用 Vue 语法：</p><p>2</p>`,14),T=e("p",null,"你也可以创建并引入你自己的组件。",-1),V=e("hr",null,null,-1),H=e("p",null,"主题包含一些有用的组件。这里是一些例子:",-1),N=e("p",null,"一个卡片:",-1);function P(g,r,k,a,i,l){const n=p("Badge"),_=p("VPCard");return m(),c("div",null,[C,o(" more "),F,o(" markdownlint-disable MD033 "),e("ul",null,[(m(),c(b,null,f(3,v=>e("li",null,x(v),1)),64))]),o(" markdownlint-enable MD033 "),T,s(a.MyComponent),V,H,e("ul",null,[e("li",null,[e("p",null,[u("文字结尾应该有深蓝色的 徽章文字 徽章。 "),s(n,{text:"徽章文字",color:"#242378"})])]),e("li",null,[N,s(_,M(w({title:"Mr.Hope",desc:"Where there is light, there is hope",logo:"https://mister-hope.com/logo.svg",link:"https://mister-hope.com",background:"rgba(253, 230, 138, 0.15)"})),null,16)])])])}const S=y(A,[["render",P],["__file","page.html.vue"]]),Z=JSON.parse('{"path":"/zh/demo/page.html","title":"页面配置","lang":"zh-CN","frontmatter":{"title":"页面配置","cover":"/assets/images/cover1.jpg","icon":"file","order":3,"author":"Ms.Hope","date":"2020-01-01T00:00:00.000Z","category":["使用指南"],"tag":["页面配置","使用指南"],"sticky":true,"star":true,"footer":"这是测试显示的页脚","copyright":"无版权","description":"more 注释之前的内容被视为文章摘要。","head":[["link",{"rel":"alternate","hreflang":"en-us","href":"https://mister-hope.github.io/demo/page.html"}],["meta",{"property":"og:url","content":"https://mister-hope.github.io/zh/demo/page.html"}],["meta",{"property":"og:site_name","content":"博客演示"}],["meta",{"property":"og:title","content":"页面配置"}],["meta",{"property":"og:description","content":"more 注释之前的内容被视为文章摘要。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://mister-hope.github.io/assets/images/cover1.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:locale:alternate","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-08-04T07:35:49.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:src","content":"https://mister-hope.github.io/assets/images/cover1.jpg"}],["meta",{"name":"twitter:image:alt","content":"页面配置"}],["meta",{"property":"article:author","content":"Ms.Hope"}],["meta",{"property":"article:tag","content":"页面配置"}],["meta",{"property":"article:tag","content":"使用指南"}],["meta",{"property":"article:published_time","content":"2020-01-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-04T07:35:49.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"页面配置\\",\\"image\\":[\\"https://mister-hope.github.io/assets/images/cover1.jpg\\"],\\"datePublished\\":\\"2020-01-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-04T07:35:49.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Ms.Hope\\"}]}"]]},"headers":[{"level":2,"title":"页面标题","slug":"页面标题","link":"#页面标题","children":[]},{"level":2,"title":"页面信息","slug":"页面信息","link":"#页面信息","children":[]},{"level":2,"title":"页面内容","slug":"页面内容","link":"#页面内容","children":[]},{"level":2,"title":"组件","slug":"组件","link":"#组件","children":[]}],"git":{"createdTime":1722756949000,"updatedTime":1722756949000,"contributors":[{"name":"acer","email":"419832308@qq.com","commits":1}]},"readingTime":{"minutes":1.76,"words":529},"filePathRelative":"zh/demo/page.md","localizedDate":"2020年1月1日","excerpt":"<p><code>more</code> 注释之前的内容被视为文章摘要。</p>\\n","autoDesc":true}');export{S as comp,Z as data};
