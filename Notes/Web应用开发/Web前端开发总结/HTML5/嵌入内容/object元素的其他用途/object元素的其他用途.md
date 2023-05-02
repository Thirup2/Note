# 一. 嵌入图像

如下面的代码所示：

```html
<object data="triathlon.png" type="image/png">
</object>
```

其渲染效果如下：

****

<object data="HTML5/嵌入内容/object元素的其他用途/images/triathlon.png" type="image/png">
</object>


****



# 二. 创建分区响应图

如下面的代码所示：

```html
<map name="mymap">
<area href="swimpage.html" shape="rect" coords="3,5,68,62" alt="Swimming"/>
<area href="cyclepage.html" shape="rect" coords="70,5,130,62" alt="Running"/>
<area href="otherpage.html" shape="default" alt="default"/>
</map>
<object data="triathlon.png" type="image/png" usemap="#mymap">
</object>
```

其渲染效果如下：

****

<object data="HTML5/嵌入内容/object元素的其他用途/images/triathlon.png" type="image/png" usemap="#mymap">
</object>
<map name="mymap">
<area href="swimpage.html" shape="rect" coords="3,5,68,62" alt="Swimming"/>
<area href="cyclepage.html" shape="rect" coords="70,5,130,62" alt="Running"/>
<area href="otherpage.html" shape="default" alt="default"/>
</map>


****

需要注意的是并不是所有的浏览器都支持用`object`元素创建客户端分区响应图。如果你看到这篇文章发现上面的代码并没有其作用，可以尝试换一个浏览器试试。



# 三. 作为浏览上下文环境

可以用`object`元素来将一张HTML文档迁入到另一张文档中，就像使用`iframe`元素一样。如果应用`name`属性，就会创建一个浏览上下文，可以结合一些元素（比如`a`和`form`）的`target`属性使用。

下面的代码展示了具体做法：

```html
<header>
	<h1>Things I like</h1>
	<nav>
		<ul>
			<li>
				<a href="fruits.html" target="frame">Fruits I Like</a>
			</li>
			<li>
				<a href="activities.html" target="frame">Activities I Like</a>
			</li>
		</ul>
	</nav>
</header>
<object type="text/html" name="frame" width="300" height="100">
</object>
```

其渲染效果如下：

****

<header>
	<h1>Things I like</h1>
	<nav>
		<ul>
			<li>
				<a href="HTML5/嵌入内容/object元素的其他用途/html/fruits.html" target="frame">Fruits I Like</a>
			</li>
			<li>
				<a href="HTML5/嵌入内容/object元素的其他用途/html/activities.html" target="frame">Activities I Like</a>
			</li>
		</ul>
	</nav>
</header>
<object type="text/html" name="frame" width="300" height="100">
</object>

****

同样，这个功能也并非浏览器普遍支持。