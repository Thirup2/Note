# 一. disabled 属性

如果不想让用户再某个`input`元素中输入数据，可以禁用它。

要禁用`input`元素，需要设置其`disabled`属性，这是一个布尔属性，其用法如下：

```html
<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input disabled id="name" name="name"/></label>
	</p>
	<button>Submit Vote</button>
</form>
```

上述代码的渲染效果如下：

<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input disabled id="name" name="name"/></label>
	</p>
	<button>Submit Vote</button>
</form>