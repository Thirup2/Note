# 一. autofocus 属性

我们可以让表单显示出来的时候自动聚焦于某个`input`元素。这样用户就能直接在其中输入数据而不必再手动选择它。`autofocus`属性的用途就是指定这种元素。

代码如下所示：

```html
<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p><label for="name">Name: <input id="name" name="name"/></label></p>
	<button>Submit Vote</button>
</form>
```

其渲染效果如下：

<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p><label for="name">Name: <input id="name" name="name"/></label></p>
	<button>Submit Vote</button>
</form>