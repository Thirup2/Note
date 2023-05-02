# 一. iframe 元素

`iframe`元素允许我们在现有的 HTML 文档中嵌入另一张文档。

## 1. 元素信息

| 元素   | 元素类型 | 允许具有的父元素         | 局部属性                                            | 内容     | 标签用法           |
| ------ | -------- | ------------------------ | --------------------------------------------------- | -------- | ------------------ |
| iframe | 短语     | 任何可包含短语内容的元素 | src、srcdoc、name、width、height、sandbox、seamless | 字符数据 | 开始标签和结束标签 |

| 是否为HTML5新增 | 在HTML5中的变化                                              | 习惯样式                                                     |
| --------------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 否              | sandbox 和 seamless 属性是 HTML5 新增的。<br />longdesc、align、allowtransparency、frameborder、marginheight、marginwidth 和 scrolling 属性已被废弃 | <pre><code>iframe {<br />    border: 2px inset;<br />}</code></pre> |

## 2. 使用元素

下面的代码展示了`iframe`元素的用法：

```html
<header>
	<h1>Things I like</h1>
	<nav>
		<ul>
			<li>
				<a href="fruits.html" target="myframe">Fruits I Like</a>
			</li>
			<li>
				<a href="activities.html" target="myframe">Activities I Like</a>
			</li>
		</ul>
	</nav>
</header>
<iframe name="myframe" width="300" height="100" src="fruits.html">
</iframe>
```

其渲染效果如下：

****

<header>
	<h1>Things I like</h1>
	<nav>
		<ul>
			<li>
				<a href="/HTML5/嵌入内容/嵌入另一张HTML文档/html/fruits.html" target="myframe">Fruits I Like</a>
			</li>
			<li>
				<a href="/HTML5/嵌入内容/嵌入另一张HTML文档/html/activities.html" target="myframe">Activities I Like</a>
			</li>
		</ul>
	</nav>
</header>
<iframe name="myframe" width="300" height="100" src="/HTML5/嵌入内容/嵌入另一张HTML文档/html/fruits.html">
</iframe>


****

在这个例子里，创建了一个`name`属性为`myframe`的`iframe`。这样就创建了一个名为`myframe`的浏览上下文。然后我们就可以把这个浏览上下文与其他元素的`target`属性结合使用。如上例中的`a`元素。

`width`和`height`属性指定了像素尺寸。`src`属性指定了`iframe`一开始应该载入并显示的 URL，而`scrdoc`属性让你可以定义一张用于内嵌显示的 HTML 文档。

另外，HTML5 引入了两个新的`iframe`元素属性。第一个是`seamless`，它指示浏览器把`iframe`的内容显示得像主 HTML 文档的一个整体组成部分。从图中可以看出，默认情况下会有一个边框，如果内容比`width`和`height`属性所指定的尺寸要大，还会出现一个滚动条。

第二个属性是`sandbox`，它对 HTML 文档进行限制。应用这个属性时如果不附带任何值，下面这些元素就会被禁用：

- 脚本
- 表单
- 插件
- 指向其他浏览器上下文的链接

而`sandbox`属性的值，就表示内嵌的 HTML 文档需要开启的功能，具体如下：

| 值                     | 说明                                                         |
| ---------------------- | ------------------------------------------------------------ |
| `allow-forms`          | 启用表单                                                     |
| `allow-scripts`        | 启用脚本                                                     |
| `allow-top-navigation` | 允许链接指向顶层的浏览上下文，这样就能用另一个文档替换当前整个文档，或者创建新的标签和窗口 |
| `allow-same-origin`    | 允许`iframe`里的内容被视为与文档其余部分拥有同一个来源       |

