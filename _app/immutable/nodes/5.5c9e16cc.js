import{s as o,n as t}from"../chunks/scheduler.6c3506a3.js";import{S as r,i as h,g as l,h as p,x as d,k as c,a as m,f as u}from"../chunks/index.3c056825.js";function f(i){let a,s=`<a class="navlink" href="about">Go back</a> <h1>jasima Linku (the
		<a href="https://linku.la/jasima/data.json">mirror / database</a>)</h1> <p>The database is a kind of &quot;public interface&quot;, where the data from the
		<a href="about/nimi">sheet</a> is republished in a readily accessible json format. It can be imported
		by anyone for their own needs.</p> <p>To import the database on your website, use this in a javascript file:</p> <p><code>const bundle = JSON.parse(Get(&quot;https://linku.la/jasima/data.json&quot;))</code></p> <p>Note that any changes made in the <a href="about/nimi">sheet</a> will be automatically propagated
		to the database!</p>`;return{c(){a=l("div"),a.innerHTML=s,this.h()},l(e){a=p(e,"DIV",{class:!0,"data-svelte-h":!0}),d(a)!=="svelte-1943ji9"&&(a.innerHTML=s),this.h()},h(){c(a,"class","page_width_limiter")},m(e,n){m(e,a,n)},p:t,i:t,o:t,d(e){e&&u(a)}}}class j extends r{constructor(a){super(),h(this,a,null,f,o,{})}}export{j as component};
