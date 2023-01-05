import{_ as s,c as a,o as n,a as e}from"./app.f5bc1ce4.js";const D=JSON.parse('{"title":"guide set","description":"","frontmatter":{},"headers":[{"level":2,"title":"基本用法","slug":"基本用法","link":"#基本用法","children":[]},{"level":2,"title":"Set 实例的属性和方法","slug":"set-实例的属性和方法","link":"#set-实例的属性和方法","children":[{"level":3,"title":"语法:","slug":"语法","link":"#语法","children":[]},{"level":3,"title":"参数","slug":"参数","link":"#参数","children":[]},{"level":3,"title":"返回值","slug":"返回值","link":"#返回值","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]}]},{"level":2,"title":"遍历操作","slug":"遍历操作","link":"#遍历操作","children":[]},{"level":2,"title":"语法","slug":"语法-1","link":"#语法-1","children":[]},{"level":2,"title":"含义和基本用法","slug":"含义和基本用法","link":"#含义和基本用法","children":[]}],"relativePath":"guide.md"}'),l={name:"guide.md"},p=e(`<h1 id="guide-set" tabindex="-1">guide set <a class="header-anchor" href="#guide-set" aria-hidden="true">#</a></h1><h2 id="基本用法" tabindex="-1">基本用法 <a class="header-anchor" href="#基本用法" aria-hidden="true">#</a></h2><blockquote><p>ES6 提供了新的数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。</p></blockquote><p><code>set</code>本身是一个构造函数，用来生成 Set 数据结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const s = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">[2, 3, 5, 4, 5, 2, 2].forEach(x =&gt; s.add(x));</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let i of s) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(i);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// 2 3 5 4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码通过 add()方法向 Set 结构加入成员，结果表明 Set 结构不会添加重复的值。</p><p>Set 函数可以接受一个数组（或者具有 iterable 接口的其他数据结构）作为参数，用来初始化。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 例一</span></span>
<span class="line"><span style="color:#A6ACCD;">const set = new Set([1, 2, 3, 4, 4]);</span></span>
<span class="line"><span style="color:#A6ACCD;">[...set]</span></span>
<span class="line"><span style="color:#A6ACCD;">// [1, 2, 3, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 例二</span></span>
<span class="line"><span style="color:#A6ACCD;">const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);</span></span>
<span class="line"><span style="color:#A6ACCD;">items.size // 5</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 例三</span></span>
<span class="line"><span style="color:#A6ACCD;">const set = new Set(document.querySelectorAll(&#39;div&#39;));</span></span>
<span class="line"><span style="color:#A6ACCD;">set.size // 56</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 类似于</span></span>
<span class="line"><span style="color:#A6ACCD;">const set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span></span>
<span class="line"><span style="color:#A6ACCD;"> .querySelectorAll(&#39;div&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;"> .forEach(div =&gt; set.add(div));</span></span>
<span class="line"><span style="color:#A6ACCD;">set.size // 56</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码中，例一和例二都是 Set 函数接受数组作为参数，例三是接受类似数组的对象作为参数。</p><p>使用 set 数组去重:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = [1,2,3,4,5,5,4,2,6,7,8,9]</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...new Set(arr)])</span></span>
<span class="line"><span style="color:#A6ACCD;">//[ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>使用 set 字符去重:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let str = &#39;hello world!  JavaScript!&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log([...new Set(str)].join(&#39;&#39;))</span></span>
<span class="line"><span style="color:#A6ACCD;">//helo wrd!JavScipt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>向 Set 加入值的时候，不会发生类型转换，所以 5 和&quot;5&quot;是两个不同的值。Set 内部判断两个值是否不同，使用的算法叫做“Same-value-zero equality”，它类似于精确相等运算符（===）,<strong>==主要的区别是向 Set 加入值时认为 NaN 等于自身，而精确相等运算符认为 NaN 不等于自身。==</strong></p></blockquote><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;">let a = NaN;</span></span>
<span class="line"><span style="color:#A6ACCD;">let b = NaN;</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.add(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">set // Set {NaN}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>另外，两个对象总是不相等的。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.add({});</span></span>
<span class="line"><span style="color:#A6ACCD;">set.size // 1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">set.add({});</span></span>
<span class="line"><span style="color:#A6ACCD;">set.size // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码表示，由于两个空对象不相等，所以它们被视为两个值。</p><h2 id="set-实例的属性和方法" tabindex="-1">Set 实例的属性和方法 <a class="header-anchor" href="#set-实例的属性和方法" aria-hidden="true">#</a></h2><p>Set 结构的实例有以下属性。</p><ul><li><code>Set.prototype.constructor</code>：构造函数，默认就是 Set 函数。</li><li><code>Set.prototype.size</code>：返回 Set 实例的成员总数。</li></ul><p>Set 实例的方法分为两大类：操作方法（用于操作数据）和遍历方法（用于遍历成员）。下面先介绍四个操作方法。</p><ul><li><code>Set.prototype.add(value)</code>：添加某个值，返回 Set 结构本身。</li><li><code>Set.prototype.delete(value)</code>：删除某个值，返回一个布尔值，表示删除是否成功。</li><li><code>Set.prototype.has(value)</code>：返回一个布尔值，表示该值是否为 Set 的成员。</li><li><code>Set.prototype.clear()</code>：清除所有成员，没有返回值。</li></ul><p>上面这些属性和方法的实例如下。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">s.add(1).add(2).add(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">// 注意2被加入了两次</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">s.size // 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">s.has(1) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">s.has(2) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">s.has(3) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">s.delete(2);</span></span>
<span class="line"><span style="color:#A6ACCD;">s.has(2) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>下面是一个对比，看看在判断是否包括一个键上面，Object 结构和 Set 结构的写法不同。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// 对象的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">const properties = {</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;width&#39;: 1,</span></span>
<span class="line"><span style="color:#A6ACCD;">  &#39;height&#39;: 1</span></span>
<span class="line"><span style="color:#A6ACCD;">};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (properties[someName]) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // do something</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Set的写法</span></span>
<span class="line"><span style="color:#A6ACCD;">const properties = new Set();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">properties.add(&#39;width&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">properties.add(&#39;height&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">if (properties.has(someName)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  // do something</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>Array.from 方法可以将 Set 结构转为数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const items = new Set([1, 2, 3, 4, 5]);</span></span>
<span class="line"><span style="color:#A6ACCD;">const array = Array.from(items);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这就提供了去除数组重复成员的另一种方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function dedupe(array) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Array.from(new Set(array));</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">dedupe([1, 1, 2, 3]) // [1, 2, 3]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><blockquote><p>Array.from 知识扩展</p></blockquote><p>Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。</p><h3 id="语法" tabindex="-1">语法: <a class="header-anchor" href="#语法" aria-hidden="true">#</a></h3><p><code>Array.from(arrayLike[, mapFn[, thisArg]])</code></p><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-hidden="true">#</a></h3><p><code>arrayLike</code></p><p>想要转换成数组的伪数组对象或可迭代对象。</p><p><code>mapFn</code> 可选</p><p>如果指定了该参数，新数组中的每个元素会执行该回调函数。</p><p><code>thisArg</code> 可选</p><p>可选参数，执行回调函数 mapFn 时 this 对象。</p><h3 id="返回值" tabindex="-1">返回值 <a class="header-anchor" href="#返回值" aria-hidden="true">#</a></h3><p>一个新的<code>数组</code>实例。</p><h3 id="示例" tabindex="-1">示例 <a class="header-anchor" href="#示例" aria-hidden="true">#</a></h3><p>从 String 生成数组</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Array.from(&#39;foo&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [ &quot;f&quot;, &quot;o&quot;, &quot;o&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>从 Set 生成数组</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const set = new Set([&#39;foo&#39;, &#39;bar&#39;, &#39;baz&#39;, &#39;foo&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(set);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [ &quot;foo&quot;, &quot;bar&quot;, &quot;baz&quot; ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>从 Map 生成数组</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const map = new Map([[1, 2], [2, 4], [4, 8]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(map);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [[1, 2], [2, 4], [4, 8]]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const mapper = new Map([[&#39;1&#39;, &#39;a&#39;], [&#39;2&#39;, &#39;b&#39;]]);</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(mapper.values());</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&#39;a&#39;, &#39;b&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from(mapper.keys());</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&#39;1&#39;, &#39;2&#39;];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>从类数组对象（arguments）生成数组</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">function f() {</span></span>
<span class="line"><span style="color:#A6ACCD;">  return Array.from(arguments);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">f(1, 2, 3);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// [ 1, 2, 3 ]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>在 Array.from 中使用箭头函数</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">// Using an arrow function as the map function to</span></span>
<span class="line"><span style="color:#A6ACCD;">// manipulate the elements</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from([1, 2, 3], x =&gt; x + x);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [2, 4, 6]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// Generate a sequence of numbers</span></span>
<span class="line"><span style="color:#A6ACCD;">// Since the array is initialized with \`undefined\` on each position,</span></span>
<span class="line"><span style="color:#A6ACCD;">// the value of \`v\` below will be \`undefined\`</span></span>
<span class="line"><span style="color:#A6ACCD;">Array.from({length: 5}, (v, i) =&gt; i);</span></span>
<span class="line"><span style="color:#A6ACCD;">// [0, 1, 2, 3, 4]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="遍历操作" tabindex="-1">遍历操作 <a class="header-anchor" href="#遍历操作" aria-hidden="true">#</a></h2><p>Set 结构的实例有四个遍历方法，可以用于遍历成员。</p><ul><li><code>Set.prototype.keys()</code>：返回键名的遍历器</li><li><code>Set.prototype.values()</code>:返回键值的遍历器</li><li><code>Set.prototype.entries()</code>：返回键值对的遍历器</li><li><code>Set.prototype.forEach()</code>：使用回调函数遍历每个成员</li></ul><p>需要特别指出的是，Set 的遍历顺序就是插入顺序。这个特性有时非常有用，比如使用 Set 保存一个回调函数列表，调用时就能保证按照添加顺序调用。</p><p>（1）<code>keys()</code>，<code>values()</code>，<code>entries()</code></p><p><code>keys</code>方法、<code>values</code>方法、<code>entries</code>方法返回的都是遍历器对象（详见《Iterator 对象》一章）。由于 Set 结构没有键名，只有键值（或者说键名和键值是同一个值），所以 keys 方法和 values 方法的行为完全一致。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let item of set.keys()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// red</span></span>
<span class="line"><span style="color:#A6ACCD;">// green</span></span>
<span class="line"><span style="color:#A6ACCD;">// blue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let item of set.values()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// red</span></span>
<span class="line"><span style="color:#A6ACCD;">// green</span></span>
<span class="line"><span style="color:#A6ACCD;">// blue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let item of set.entries()) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(item);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&quot;red&quot;, &quot;red&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&quot;green&quot;, &quot;green&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&quot;blue&quot;, &quot;blue&quot;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码中，<code>entries</code>方法返回的遍历器，同时包括键名和键值，所以每次输出一个数组，它的两个成员完全相等。</p><p><code>Set</code>结构的实例默认可遍历，它的默认遍历器生成函数就是它的<code>values</code>方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">Set.prototype[Symbol.iterator] === Set.prototype.values</span></span>
<span class="line"><span style="color:#A6ACCD;">// true</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>这意味着，可以省略 values 方法，直接用 for...of 循环遍历 Set。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">for (let x of set) {</span></span>
<span class="line"><span style="color:#A6ACCD;">  console.log(x);</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">// red</span></span>
<span class="line"><span style="color:#A6ACCD;">// green</span></span>
<span class="line"><span style="color:#A6ACCD;">// blue</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>（2）<code>forEach()</code></p><p><code>Set</code>结构的实例与数组一样，也拥有<code>forEach</code>方法，用于对每个成员执行某种操作，没有返回值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([1, 4, 9]);</span></span>
<span class="line"><span style="color:#A6ACCD;">set.forEach((value, key) =&gt; console.log(key + &#39; : &#39; + value))</span></span>
<span class="line"><span style="color:#A6ACCD;">// 1 : 1</span></span>
<span class="line"><span style="color:#A6ACCD;">// 4 : 4</span></span>
<span class="line"><span style="color:#A6ACCD;">// 9 : 9</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码说明，<code>forEach</code>方法的参数就是一个处理函数。该函数的参数与数组的<code>forEach</code>一致，依次为键值、键名、集合本身（上例省略了该参数）。这里需要注意，Set 结构的键名就是键值（两者是同一个值），因此第一个参数与第二个参数的值永远都是一样的。</p><p>另外，<code>forEach</code>方法还可以有第二个参数，表示绑定处理函数内部的 this 对象。</p><p>（3）遍历的应用</p><p>扩展运算符（<code>...</code>）内部使用<code>for...of</code>循环，所以也可以用于 <code>Set</code> 结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]);</span></span>
<span class="line"><span style="color:#A6ACCD;">let arr = [...set];</span></span>
<span class="line"><span style="color:#A6ACCD;">// [&#39;red&#39;, &#39;green&#39;, &#39;blue&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>扩展运算符和 Set 结构相结合，就可以去除数组的重复成员。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let arr = [3, 5, 2, 2, 5, 5];</span></span>
<span class="line"><span style="color:#A6ACCD;">let unique = [...new Set(arr)];</span></span>
<span class="line"><span style="color:#A6ACCD;">// [3, 5, 2]</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>而且，数组的<code>map</code>和<code>filter</code>方法也可以间接用于 Set 了。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set1 = new Set([1, 2, 3])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set2 = new Set([...set1].map(function (item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return item * 2</span></span>
<span class="line"><span style="color:#A6ACCD;">}))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set2)//Set { 2, 4, 6 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set3 = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let set4 = new Set([...set3].filter(function (item) {</span></span>
<span class="line"><span style="color:#A6ACCD;">    return item % 2 == 0</span></span>
<span class="line"><span style="color:#A6ACCD;">}))</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set4)//Set { 2, 4, 6, 8, 10 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>因此使用 Set 可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">let set1 = new Set([1,2,3])</span></span>
<span class="line"><span style="color:#A6ACCD;">let set2 = new Set([4,3,2])</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 并集</span></span>
<span class="line"><span style="color:#A6ACCD;">let union = new Set([...set1,...set2])</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(union)//Set { 1, 2, 3, 4 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 交集</span></span>
<span class="line"><span style="color:#A6ACCD;">let intersect = new Set([...set1].filter(item =&gt; set2.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(intersect)//Set { 2, 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">// 差集</span></span>
<span class="line"><span style="color:#A6ACCD;">let difference1 = new Set([...set1].filter(item =&gt; !set2.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">let difference2 = new Set([...set2].filter(item =&gt; !set1.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">let difference = new Set([...difference1,...difference2])</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(difference)//Set { 1, 4 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>封装:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight has-diff"><code><span class="line"><span style="color:#A6ACCD;">function aggregate(set1, set2,type){</span></span>
<span class="line"><span style="color:#A6ACCD;">    switch(type){</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;intersect&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new Set([...set1].filter(item =&gt; set2.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        case &#39;difference&#39;:</span></span>
<span class="line"><span style="color:#A6ACCD;">            let difference1 = new Set([...set1].filter(item =&gt; !set2.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            let difference2 = new Set([...set2].filter(item =&gt; !set1.has(item)))</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new Set([...difference1, ...difference2])</span></span>
<span class="line"><span style="color:#A6ACCD;">            break</span></span>
<span class="line"><span style="color:#A6ACCD;">        default:</span></span>
<span class="line"><span style="color:#A6ACCD;">            return new Set([...set1, ...set2])</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>如果想在遍历操作中，同步改变原来的 Set 结构，目前没有直接的方法，但有两种变通方法。一种是利用原 Set 结构映射出一个新的结构，然后赋值给原来的 Set 结构；另一种是利用 Array.from 方法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let set = new Set([1,2,3])</span></span>
<span class="line"><span style="color:#A6ACCD;">set = new Set([...set].map(item =&gt; item*2))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set)// Set { 2, 4, 6 }</span></span>
<span class="line"><span style="color:#A6ACCD;">set = new Set(Array.from(set,val =&gt; val* 2))</span></span>
<span class="line"><span style="color:#A6ACCD;">console.log(set)// Set { 4, 8, 12 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h1 id="weakset" tabindex="-1">WeakSet <a class="header-anchor" href="#weakset" aria-hidden="true">#</a></h1><p>WeakSet 结构与 Set 类似，也是不重复的值的集合。但是，它与 Set 有两个区别。</p><p>首先，WeakSet 的成员只能是对象，而不能是其他类型的值。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const ws = new WeakSet();</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.add(1)</span></span>
<span class="line"><span style="color:#A6ACCD;">// TypeError: Invalid value used in weak set</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.add(Symbol())</span></span>
<span class="line"><span style="color:#A6ACCD;">// TypeError: invalid value used in weak set</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="语法-1" tabindex="-1">语法 <a class="header-anchor" href="#语法-1" aria-hidden="true">#</a></h2><p>WeakSet 是一个构造函数，可以使用 new 命令，创建 WeakSet 数据结构。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const ws = new WeakSet();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>作为构造函数，WeakSet 可以接受一个数组或类似数组的对象作为参数。（实际上，任何具有 Iterable 接口的对象，都可以作为 WeakSet 的参数。）该数组的所有成员，都会自动成为 WeakSet 实例对象的成员。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const a = [[1, 2], [3, 4]];</span></span>
<span class="line"><span style="color:#A6ACCD;">const ws = new WeakSet(a);</span></span>
<span class="line"><span style="color:#A6ACCD;">// WeakSet {[1, 2], [3, 4]}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码中，a是一个数组，它有两个成员，也都是数组。将a作为 WeakSet 构造函数的参数，a的成员会自动成为 WeakSet 的成员。</p><p>注意，是a数组的成员成为 WeakSet 的成员，而不是a数组本身。这意味着，数组的成员只能是对象。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const b = [3, 4];</span></span>
<span class="line"><span style="color:#A6ACCD;">const ws = new WeakSet(b);</span></span>
<span class="line"><span style="color:#A6ACCD;">// Uncaught TypeError: Invalid value used in weak set(…)</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码中，数组b的成员不是对象，加入 WeakSet 就会报错。</p><p>WeakSet 结构有以下三个方法。</p><ul><li><p><code>WeakSet.prototype.add(value)</code>：向 WeakSet 实例添加一个新成员。</p></li><li><p><code>WeakSet.prototype.delete(value)</code>：清除 WeakSet 实例的指定成员。</p></li><li><p><code>WeakSet.prototype.has(value)</code>：返回一个布尔值，表示某个值是否在 WeakSet 实例之中。</p></li></ul><p>下面是一个例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const ws = new WeakSet();</span></span>
<span class="line"><span style="color:#A6ACCD;">const obj = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">const foo = {};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ws.add(window);</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.add(obj);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ws.has(window); // true</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.has(foo);    // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ws.delete(window);</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.has(window);    // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>WeakSet 没有size属性，没有办法遍历它的成员。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">ws.size // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">ws.forEach // undefined</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">ws.forEach(function(item){ console.log(&#39;WeakSet has &#39; + item)})</span></span>
<span class="line"><span style="color:#A6ACCD;">// TypeError: undefined is not a function</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码试图获取size和forEach属性，结果都不能成功。</p><p>WeakSet 不能遍历，是因为成员都是弱引用，随时可能消失，遍历机制无法保证成员的存在，很可能刚刚遍历结束，成员就取不到了。WeakSet 的一个用处，是储存 DOM 节点，而不用担心这些节点从文档移除时，会引发内存泄漏。</p><p>下面是 WeakSet 的另一个例子。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const foos = new WeakSet()</span></span>
<span class="line"><span style="color:#A6ACCD;">class Foo {</span></span>
<span class="line"><span style="color:#A6ACCD;">  constructor() {</span></span>
<span class="line"><span style="color:#A6ACCD;">    foos.add(this)</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">  method () {</span></span>
<span class="line"><span style="color:#A6ACCD;">    if (!foos.has(this)) {</span></span>
<span class="line"><span style="color:#A6ACCD;">      throw new TypeError(&#39;Foo.prototype.method 只能在Foo的实例上调用！&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">  }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码保证了Foo的实例方法，只能在Foo的实例上调用。这里使用 WeakSet 的好处是，foos对实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑foos，也不会出现内存泄漏。</p><h1 id="map" tabindex="-1">Map <a class="header-anchor" href="#map" aria-hidden="true">#</a></h1><h2 id="含义和基本用法" tabindex="-1">含义和基本用法 <a class="header-anchor" href="#含义和基本用法" aria-hidden="true">#</a></h2><p>JavaScript 的对象（Object），本质上是键值对的集合（Hash 结构），但是传统上只能用字符串当作键。这给它的使用带来了很大的限制。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const data = {};</span></span>
<span class="line"><span style="color:#A6ACCD;">const element = document.getElementById(&#39;myDiv&#39;);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">data[element] = &#39;metadata&#39;;</span></span>
<span class="line"><span style="color:#A6ACCD;">data[&#39;[object HTMLDivElement]&#39;] // &quot;metadata&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码原意是将一个 DOM 节点作为对象data的键，但是由于对象只接受字符串作为键名，所以element被自动转为字符串<code>[object HTMLDivElement]</code>。</p><p>为了解决这个问题，ES6 提供了 Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，<code>Object 结构提供了“字符串—值”的对应</code>，<code>Map 结构提供了“值—值”的对应</code>，是一种更完善的 Hash 结构实现。如果你需要“键值对”的数据结构，Map 比 Object 更合适。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const m = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;">const o = {p: &#39;Hello World&#39;};</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m.set(o, &#39;content&#39;)</span></span>
<span class="line"><span style="color:#A6ACCD;">m.get(o) // &quot;content&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m.has(o) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">m.delete(o) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">m.has(o) // false</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码使用 <code>Map</code> 结构的<code>set</code>方法，将对象<code>o</code>当作<code>m</code>的一个键，然后又使用<code>get</code>方法读取这个键，接着使用<code>delete</code>方法删除了这个键。</p><p>上面的例子展示了如何向 Map 添加成员。作为构造函数，Map 也可以接受一个数组作为参数。该数组的成员是一个个表示键值对的数组。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const map = new Map([</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;name&#39;, &#39;张三&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;title&#39;, &#39;Author&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">]);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">map.size // 2</span></span>
<span class="line"><span style="color:#A6ACCD;">map.has(&#39;name&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">map.get(&#39;name&#39;) // &quot;张三&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">map.has(&#39;title&#39;) // true</span></span>
<span class="line"><span style="color:#A6ACCD;">map.get(&#39;title&#39;) // &quot;Author&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>上面代码在新建 Map 实例时，就指定了两个键name和title。</p><p>Map构造函数接受数组作为参数，实际上执行的是下面的算法。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">const items = [</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;name&#39;, &#39;张三&#39;],</span></span>
<span class="line"><span style="color:#A6ACCD;">  [&#39;title&#39;, &#39;Author&#39;]</span></span>
<span class="line"><span style="color:#A6ACCD;">];</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">const map = new Map();</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">items.forEach(</span></span>
<span class="line"><span style="color:#A6ACCD;">  ([key, value]) =&gt; map.set(key, value)</span></span>
<span class="line"><span style="color:#A6ACCD;">);</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>事实上，不仅仅是数组，任何具有 Iterator 接口、且每个成员都是一个<code>双元素</code>的数组的数据结构（详见《Iterator》一章）都可以当作Map构造函数的参数。这就是说，Set和Map都可以用来生成新的 Map。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-palenight"><code><span class="line"><span style="color:#A6ACCD;">let item = new Set([</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;foo&#39;,1],</span></span>
<span class="line"><span style="color:#A6ACCD;">    [&#39;bar&#39;,2]</span></span>
<span class="line"><span style="color:#A6ACCD;">])</span></span>
<span class="line"><span style="color:#A6ACCD;">let m = new Map(item)//Map { &#39;foo&#39; =&gt; 1, &#39;bar&#39; =&gt; 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;">m.get(&#39;foo&#39;)//1</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">let m2 = new Map(m)//Map { &#39;foo&#39; =&gt; 1, &#39;bar&#39; =&gt; 2 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">m.set(&#39;baz&#39;, 3)//Map { &#39;foo&#39; =&gt; 1, &#39;bar&#39; =&gt; 2, &#39;baz&#39; =&gt; 3 }</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,124),o=[p];function t(c,i,r,C,A,d){return n(),a("div",null,o)}const u=s(l,[["render",t]]);export{D as __pageData,u as default};
