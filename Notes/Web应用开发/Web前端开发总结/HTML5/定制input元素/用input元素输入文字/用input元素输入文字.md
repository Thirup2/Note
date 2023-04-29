# 一. type="text"

`type`属性设置为`text`的`input`元素在浏览器中显示为一个单行文本框。这是未设置`type`属性情况下的默认形式。

以下是当`type`属性设置为`text`时，可使用的各种属性：

| 属性          | 说明                                                         | 是否为HTML5新增 |
| ------------- | ------------------------------------------------------------ | --------------- |
| `dirname`     | 指定元素内容文字方向的名称                                   | 是              |
| `list`        | 指定为文本框提供建议值的 datalist 元素，其值为 datalist 元素的 id 值 | 是              |
| `maxlength`   | 设定用户可以在文本框中输入的字符的最大数目                   | 否              |
| `pattern`     | 指定一个用于输入验证的正则表达式                             | 是              |
| `placeholder` | 指定关于所需数据类型的提示                                   | 是              |
| `readonly`    | 用来将文本框设为只读以阻止用户编辑其内容                     | 否              |
| `required`    | 表明用户必须输入一个值，否则无法通过输入验证                 | 是              |
| `size`        | 通过指定文本框中可见的字符数目设定其宽度                     | 否              |
| `value`       | 设置文本框的初始值                                           | 否              |



## 1. 设定元素大小

有两个属性能够对文本框的大小产生影响。`maxlength`属性设定了用户能够输入的字符的最大数目，`size`属性则设定了文本框能够显式的字符数目。二者的紫府书目均以正整数表示。

使用案例如下：

```html
<form method="post" action="http://titan:8080/form">
    <p>
	<label for="name">
	Name: <input maxlength="10" id="name" name="name"/>
	</label>
	</p>
	<p>
	<label for="city">
	City: <input size="10" id="city" name="city"/>
	</label>
	</p>
	<p>
	<label for="fave">
	Fruit: <input size="10" maxlength="10" id="fave" name="fave"/>
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
	Name: <input maxlength="10" id="name" name="name"/>
	</label>
	</p>
	<p>
	<label for="city">
	City: <input size="10" id="city" name="city"/>
	</label>
	</p>
	<p>
	<label for="fave">
	Fruit: <input size="10" maxlength="10" id="fave" name="fave"/>
	</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>

****

在第一个`input`元素中只限制了最多能够输入的字符数，第二个`input`元素只限制了文本框的显示长度，第三个`input`元素对两者都进行了限制。



## 2. 设置初始值和占位式提示

设计者可以用`value`属性为文本框设置一个默认值，这个值默认输入在`input`文本框中。

也可以使用`placeholder`属性设置一段提示文字，告诉用户应该输入什么类型的数据，但是并不是已经输入在`input`文本框中的内容。

具体的用例如下所示：

```html
<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input placeholder="Your name" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input placeholder="Where you live" id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input value="Apple" id="fave" name="fave"/>
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
			Name: <input placeholder="Your name" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input placeholder="Where you live" id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input value="Apple" id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>

****

可以看到上面的例子中`placeholder`和`value`两个属性的区别。

如果需要用户输入数据，而且想提示用户应该输入什么样的数据，那就应该使用`placeholder`属性。如果想提供一个默认值——不管是因为用户之前提供过该信息，还是因为这是一个可能会被接受的常见选择，那就应该使用`value`属性。



## 3. datalist 元素

可以将`input`元素的`list`属性设置为一个`datalist`元素的`id`属性值，这样用户在文本框中输入数据时只需从后一元素提供的一批选项中进行选择就行了。

| 元素     | 元素类型 | 允许具有的父元素           | 局部属性 | 内容                  | 标签用法           |
| -------- | -------- | -------------------------- | -------- | --------------------- | ------------------ |
| datalist | 短语     | 任何可以包含短语元素的元素 | 无       | option 元素和短语内容 | 开始标签和结束标签 |

| 是否为HTML5新增 | 在HTML5中的变化 | 习惯样式 |
| --------------- | --------------- | -------- |
| 是              | 无              | 无       |



## 4. option 元素

`datalist`元素是 HTML5 中新增的，它可以用来提供一批值，以便帮助用户输入需要的数据。不同类型的`input`元素使用`datalist`元素的方式略有差异。对于`text`型的`input`元素，`datalist`元素提供的值以自动补全建议值的方式呈现。提供给用户选择的值各用一个`option`元素指定

| 元素   | 元素类型 | 允许具有的父元素           | 局部属性                           | 内容     | 标签用法                                 |
| ------ | -------- | -------------------------- | ---------------------------------- | -------- | ---------------------------------------- |
| option | 无       | datalist、select、optgroup | disabled、selected、label 和 value | 字符数据 | 虚元素形式，或开始标签与结束标签一起使用 |

| 是否为HTML5新增 | 在HTML5中的变化 | 习惯样式 |
| --------------- | --------------- | -------- |
| 否              | 无              | 无       |



## 5. 使用数据列表

结合`datalist`元素和`option`元素可以为文本框提供一批值作为可选列表，使用方法如下所示：

```html
<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input placeholder="Your name" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input placeholder="Where you live" id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input list="fruitlist" id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>
<datalist id="fruitlist">
	<option value="Apples" label="Lovely Apples"/>
	<option value="Oranges">Refreshing Oranges</option>
	<option value="Cherries"/>
</datalist>
```

其渲染效果如下所示：

****

<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input placeholder="Your name" id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input placeholder="Where you live" id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input list="fruitlist" id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>
<datalist id="fruitlist">
	<option value="Apples" label="Lovely Apples"/>
	<option value="Oranges">Refreshing Oranges</option>
	<option value="Cherries"/>
</datalist>

****

包含在`datalist`元素中的每一个`option`元素都代表一个供用户选择的值。其`value`属性值在该元素代表的选项被选中时就是`input`元素所用的数据值。显示在选择列表中的未必是`option`元素的`value`属性值，还可以是另行设定的一条说明信息。它可以用`label`属性设置，也可以作为`option`元素的内容设置。



## 6. 生成只读或被禁用的文本框

`readonly`和`disabled`属性都可以用来生成用户不能编辑的文本框，其结果的外观不同。

一个使用示例如下：

```html
<form method="post" action="http://titan:8080/form">
	<p>
		<label for="name">
			Name: <input value="Adam" disabled id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input value="Boston" readonly id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input id="fave" name="fave"/>
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
			Name: <input value="Adam" disabled id="name" name="name"/>
		</label>
	</p>
	<p>
		<label for="city">
			City: <input value="Boston" readonly id="city" name="city"/>
		</label>
	</p>
	<p>
		<label for="fave">
			Fruit: <input id="fave" name="fave"/>
		</label>
	</p>
	<button type="submit">Submit Vote</button>
</form>

****

可以看到，通过`readonly`禁用的输入框并不会影响其外观。

另外，设置为`disabled`的元素的数据不会被提交到服务器，而设置为`readonly`的元素的数据将会被提交到服务器。



## 7. 指定文字方向数据的名称

通过设置`dirname`属性，可以将用户输入文字的方向数据发送给服务器，该属性的值就是方向数据项的名称。