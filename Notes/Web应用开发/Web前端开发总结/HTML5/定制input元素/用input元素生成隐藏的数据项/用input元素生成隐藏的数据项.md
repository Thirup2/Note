# 一. type="hidden"

有时设计者会希望使用一些用户看不到或不能编辑的数据项，但又要求提交表单时也能将其发送给服务器。

如 Web 应用程序让用户查看并编辑一些数据库记录时，往往需要用一种简便易行的方法将主键保存在网页上以便知道用户编辑的是哪条记录，但是又不想让用户看到它。

将`input`元素的`type`设置为`hidden`可以用来达到这个目的，下面的代码示范了这种`input`元素的用法：

```html
<form method="post" action="http://titan:8080/form">
	<input type="hidden" name="recordID" value="1234"/>
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
	<input type="submit" value="Submit Vote"/>
</form>
```

其渲染效果如下：

****

<form method="post" action="http://titan:8080/form">
	<input type="hidden" name="recordID" value="1234"/>
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
	<input type="submit" value="Submit Vote"/>
</form>

****

可以看到，我们设置为`hidden`的`input`元素并不会在页面上显示出来。但是它的内容会发送给服务器。