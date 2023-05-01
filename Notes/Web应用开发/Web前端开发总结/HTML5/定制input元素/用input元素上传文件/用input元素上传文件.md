# 一. type="file"

最后一种`input`元素类型是`file`型，它可以在提交表单时将文件上传到服务器。该类型的`input`元素支持的额外属性如下表所示：

| 属性       | 说明                                             | 是否为HTML5新增 |
| ---------- | ------------------------------------------------ | --------------- |
| `accept`   | 指定接受的 MIME 类型                             | 否              |
| `multiple` | 设置这个属性的`input`元素可一次上传多个文件      | 是              |
| `required` | 表明用户必须为其提供一个值，否则无法通过输入验证 | 是              |

下面的代码示范了`file`型`input`元素的用法：

```html
<form method="post" action="http://titan:8080/form" enctype="multipart/form-data">
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
	<p>
		<input type="file" name="filedata"/>
	</p>
	<input type="submit" value="Submit"/>
</form>
```

其渲染效果如下所示：

****

<form method="post" action="http://titan:8080/form" enctype="multipart/form-data">
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
	<p>
		<input type="file" name="filedata"/>
	</p>
	<input type="submit" value="Submit"/>
</form>

****

需要注意的是，当表单编码类型为`multipart/form-data`的时候才能上传文件。