# 一. type="submit"、type="reset"、type="button"

将`input`元素的`type`属性设置为`submit`、`reset`和`button`会生成类似`button`元素那样的按钮。

下表中概括了这三种类型的`input`元素：

| type属性值 | 说明                     | 可用的额外属性                                               |
| ---------- | ------------------------ | ------------------------------------------------------------ |
| `submit`   | 生成用来提交表单的按钮   | `formaction`、`formenctype`、`formmethod`、`formtarget`和`formnovalidate` |
| `reset`    | 生成用来重置表单的按钮   | 无                                                           |
| `button`   | 生成不执行任何操作的按钮 | 无                                                           |

`submit`型的`input`元素可用的额外属性与`button`元素的同名属性用法相同。`reset`和`button`型`input`元素没有定义任何额外的属性。

上述三类`input`元素生成的按钮上的说明文字均来自它们的`value`属性值，如下面的代码所示：

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
	<input type="submit" value="Submit Vote"/>
	<input type="reset" value="Reset Form"/>
	<input type="button" value="My Button"/>
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
	<input type="submit" value="Submit Vote"/>
	<input type="reset" value="Reset Form"/>
	<input type="button" value="My Button"/>
</form>

****