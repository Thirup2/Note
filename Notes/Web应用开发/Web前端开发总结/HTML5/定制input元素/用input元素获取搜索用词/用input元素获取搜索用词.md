# 一. type="search"

`search`型`input`元素会生成一个单行文本框，供用户输入搜索用词。

这种`input`元素实际上什么事都不做。它既不会对用户输入的数据作出限制，也没有诸如搜索本页或借助用户的默认搜索引擎进行搜索这样的功能。这类`input`元素支持的额外属性和`text`型`input`元素相同。

下面的代码示范了该元素的用法：

```html
<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input value="Adam" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="password">
			Password: <input type="password" placeholder="Min 6 characters" id="password" name="password"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Favorite Fruit: <input type="text" id="fave" name="fave"/>
		</label>
	</p>
	<p>
		<label for="search">
			Search: <input type="search" id="search" name="search"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>
```

其渲染效果如下：

****

<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input value="Adam" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="password">
			Password: <input type="password" placeholder="Min 6 characters" id="password" name="password"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Favorite Fruit: <input type="text" id="fave" name="fave"/>
		</label>
	</p>
	<p>
		<label for="search">
			Search: <input type="search" id="search" name="search"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****

浏览器可以设法用这种文本框的外观表明它是用来获取搜索用词的。Chrome 的做法是先显示一个标准的文本框，一旦用户在其中输入了内容，就再显示一个取消图标。