# 一. type="password"

`type`属性值设置为`password`的`input`元素用于输入密码。用户输入的字符在这种文本框中显示为 * 之类的掩饰字符。

当`type`属性值设置为`password`时，`input`可以使用如下的额外属性，这些属性`text`型`input`也有，而且用法相同，故不多介绍。

| 属性          | 说明                                         | 是否为HTML5新增 |
| ------------- | -------------------------------------------- | --------------- |
| `maxlength`   | 设定用户可以在文本框中输入的字符的最大数目   | 否              |
| `pattern`     | 指定一个用于输入验证的正则表达式             | 是              |
| `placeholder` | 指定关于所需数据类型的提示                   | 是              |
| `readonly`    | 用来将文本框设为只读以阻止用户编辑其内容     | 否              |
| `required`    | 表明用户必须输入一个值，否则无法通过输入验证 | 是              |
| `size`        | 通过指定文本框中可见的字符数目设定其宽度     | 否              |
| `value`       | 设置文本框的初始值                           | 否              |

以下代码示范了`password`型`input`元素的用法：

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
			Fruit: <input value="Apples" id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
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
			Fruit: <input value="Apples" id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>

****

在使用`password`型`input`时，用户输入的内容只是显示为掩饰字符，而不是被替换为掩饰字符。提交表单时，服务器收到的是明文密码。