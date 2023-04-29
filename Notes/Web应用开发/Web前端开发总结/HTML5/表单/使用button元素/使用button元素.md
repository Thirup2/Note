`button`代表一个按钮，这个按钮可能有不同的含义，这些不同的操作模式通过具有三种值的`type`属性设定，具体如下表所示：

| 值     | 说明                     |
| ------ | ------------------------ |
| submit | 表示按钮的用途是提交表单 |
| reset  | 表示按钮的用途是重置表单 |
| button | 表示按钮没有具体语义     |

下面将逐一说明上述三个属性值及其代表的功能

# 一. type="submit"

如果将`button`元素的`type`属性设置为`submit`，那么按下该按钮会提交包含它的表单。这是未设置`type`属性的`button`元素的默认行为。采用这种方法使用该元素时，它还有额外的一些属性可用，如下表所示：

| 额外属性         | 说明                                                         |
| ---------------- | ------------------------------------------------------------ |
| `form`           | 指定按钮关联的表单                                           |
| `formaction`     | 覆盖`form`元素的`action`属性，另行指定表单将要提交到的 URL   |
| `formenctype`    | 覆盖`form`元素的`enctype`属性，另行指定表单的编码方式        |
| `formmethod`     | 覆盖`form`元素的`method`属性                                 |
| `formtarget`     | 覆盖`form`元素的`target`属性                                 |
| `formnovalidate` | 覆盖`form`元素的`novalidate`属性，表明是否应执行客户端数据有效性检查 |

这些属性主要是用来覆盖或补充`form`元素上的设置，指定表单提交的 URL、使用的 HTTP 方法、编码方式、表单反馈信息的显示地点，以及控制客户端数据检查。它们是 HTML5 中新增的属性。

使用案例如下：

```html
<form>
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
	</p>
	<button type="submit" formaction="http://titan:8080/form" formmethod="post">Submit Vote</button>
</form>
```

其渲染效果如下：

****

<form>
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
	</p>
	<button type="submit" formaction="http://titan:8080/form" formmethod="post">Submit Vote</button>
</form>

****

该例子未设置`form`元素的`action`和`method`属性，转而通过设置`button`元素的`formaction`和`formmethod`属性来达到同样的目的。



# 二. type="reset"

如果将`button`元素的`type`属性设置为`reset`，那么按下按钮会将表单中所有`input`元素重置为初始状态。

这样使用该元素时，没有额外的属性可用。

一个使用该`type`的案例如下：

```html
<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
	</p>
    <button type="submit">Submit Vote</button>
	<button type="reset">Reset</button>
</form>
```

其渲染效果如下：

****

<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
	</p>
    <button type="submit">Submit Vote</button>
	<button type="reset">Reset</button>
</form>

****



# 三. type="button"

如果将`button`元素的`type`属性设置为`button`，那么该`button`元素就仅仅是一个按钮。它没有特别的含义，在按下时也不会做任何事情。

下面就是一个使用该属性值的一个案例：

```html
<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
    </p>
	<button type="submit">Submit Vote</button>
	<button type="reset">Reset</button>
	<button type="button">Do <strong>NOT</strong> press this button</button>
</form>
```

其渲染效果如下：

****

<form method="post" action="http://titan:8080/form">
	<p>
	<label for="fave">Fruit: <input autofocus id="fave" name="fave"/></label>
	</p>
	<p>
	<label for="name">Name: <input id="name" name="name"/></label>
    </p>
	<button type="submit">Submit Vote</button>
	<button type="reset">Reset</button>
	<button type="button">Do <strong>NOT</strong> press this button</button>
</form>

****

这样使用该元素看起来似乎没有什么意义，但实际上，在按下按钮时可以用 JavaScript 执行一些操作，通过这种方法即可用`button`元素实现自定义的行为。