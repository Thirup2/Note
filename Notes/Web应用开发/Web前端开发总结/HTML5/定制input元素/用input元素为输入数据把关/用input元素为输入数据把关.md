# 一. 总览

`input`还有很多`type`的取值，一些值可以对用户输入的数据类型提出更具体的要求，下表概括了这些`type`属性值

| 属性             | 说明                                            | 是否为HTML5新增 |
| ---------------- | ----------------------------------------------- | --------------- |
| `checkbox`       | 将输入限制为在一个 “是/否” 二态复选框中进行选择 | 否              |
| `color`          | 只能输入颜色信息                                | 是              |
| `date`           | 只能输入日期                                    | 是              |
| `datetime`       | 只能输入带时区信息的世界时（包括日期和时间）    | 是              |
| `datetime-local` | 只能输入不带时区信息的世界时（包括日期和时间）  | 是              |
| `email`          | 只能输入规范的电子邮箱地址                      | 是              |
| `month`          | 只能输入年和月                                  | 是              |
| `number`         | 只能输入整数或浮点数                            | 是              |
| `radio`          | 将输入限制为在一组固定选项中进行选择            | 否              |
| `range`          | 只能输入指定范围内的数值                        | 是              |
| `tel`            | 只能输入规范的电话号码                          | 是              |
| `time`           | 只能输入时间信息                                | 是              |
| `week`           | 只能输入年及星期信息                            | 是              |
| `url`            | 只能输入完全限定的 URL                          | 是              |

这一系列类型的`input`元素中有些能用明显的时觉信号告诉用户对输入或选择的数据有什么限制；而像`email`型和`url`型等其他类型`input`元素则只能依靠输入检查功能



# 二. type="number"

`type`属性设置为`number`的`input`元素生成的输入框只接受数值。有些浏览器还会在旁边显示上调和下调数值的箭头形小按钮。

下面是`number`为`type`值的额外属性：

| 属性       | 说明                                                         | 是否为HTML5新增 |
| ---------- | ------------------------------------------------------------ | --------------- |
| `list`     | 指定为文本框提供建议值的`datalist`元素。其值为`datalist`元素的`id`值 | 是              |
| `min`      | 设定可接受的最小值（也是下调按钮（如果有的话）的下限）以便进行输入验证 | 是              |
| `max`      | 设定可接受的最大值（也是上调按钮（如果有的话）的上限）以便进行输入验证 | 是              |
| `readonly` | 用来将文本框设置为只读以阻止用户编辑其内容                   | 否              |
| `required` | 表明用户必须输入一个值，否则无法通过输入验证                 | 是              |
| `step`     | 指定上下调节数值的步长                                       | 是              |
| `value`    | 指定元素的初始值                                             | 否              |

下面的代码演示了该`input`元素的用法：

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
	<p>
		<label for="price">
			$ per unit in your area:
			<input type="number" step="1" min="0" max="100" value="1" id="price" name="price"/>
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
			Fruit: <input value="Apples" id="fave" name="fave"/>
		</label>
	</p>
	<p>
		<label for="price">
			$ per unit in your area:
			<input type="number" step="1" min="0" max="100" value="1" id="price" name="price"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****



# 三. type="range"

获取数值的另一种方法是使用`range`型`input`元素。用户只能用它事先规定的范围内选择一个数值。`range`型`input`元素支持的属性和`number`型相同，但二者在浏览器中的显示结果不同。

下面的代码示范了`range`型`input`元素的用法：

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
	<p>
		<label for="price">
			$ per unit in your area: 1
			<input type="range" step="1" min="0" max="100" value="1" id="price" name="price"/>100
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
			Fruit: <input value="Apples" id="fave" name="fave"/>
		</label>
	</p>
	<p>
		<label for="price">
			$ per unit in your area: 1
			<input type="range" step="1" min="0" max="100" value="1" id="price" name="price"/>100
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****



# 四. type="checkbox"

`checkbox`型`input`元素会生成供用户选择是或否的复选框。这种类型的`input`元素支持的额外属性如下表所示：

| 属性       | 说明                                                    | 是否为HTML5新增 |
| ---------- | ------------------------------------------------------- | --------------- |
| `checked`  | 设置了该属性的复选框刚显示出来时或重置表单后呈勾选状态  | 否              |
| `required` | 表示用户必须勾选该复选框，否则无法通过输入验证          | 是              |
| `value`    | 设定在复选框呈勾选状态时提交给服务器的数据值。默认为 on | 否              |

下面的代码示范了`checkbox`型`input`元素的用法：

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
	<p>
		<label for="veggie">
			Are you vegetarian: <input type="checkbox" id="veggie" name="veggie"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>
```

其渲染效果如下所示：

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
	<p>
		<label for="veggie">
			Are you vegetarian: <input type="checkbox" id="veggie" name="veggie"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****

`checkbox`型`input`元素的不足之处在于：提交表单时，只有处于勾选状态的复选框的数据值会发送给服务器。



# 五. type="radio"

`radio`型`input`元素可以用来生成一组单选按钮，供用户从一批固定的选项中作出选择。它适合于可用有效数据不多的情况。

下表介绍了这种类型的`input`元素支持的额外属性：

| 属性       | 说明                                                       | 是否为HTML5新增 |
| ---------- | ---------------------------------------------------------- | --------------- |
| `checked`  | 设置了该属性的单选按钮刚显示出来时或重置表单后呈选定状态   | 否              |
| `required` | 表示用户必须在一组单选按钮中选择一个，否则无法通过输入验证 | 是              |
| `value`    | 设定在单选按钮呈选定状态时提交给服务器的数据值             | 否              |

每一个`radio`型`input`元素代表着提供给用户的一个选项。要生成一组互斥的选项，只需要将所有相关`input`元素的`name`属性设置为同一个值即可。

下面的代码示范了这个做法：

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
	<fieldset>
		<legend>Vote for your favorite fruit</legend>
		<label for="apples">
			<input type="radio" checked value="Apples" id="apples" name="fave"/>
			Apples
		</label>
		<label for="oranges">
			<input type="radio" value="Oranges" id="oranges" name="fave"/>
			Oranges
		</label>
		<label for="cherries">
			<input type="radio" value="Cherries" id="cherries" name="fave"/>
			Cherries
		</label>
	</fieldset>
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
	<fieldset>
		<legend>Vote for your favorite fruit</legend>
		<label for="apples">
			<input type="radio" checked value="Apples" id="apples" name="fave"/>
			Apples
		</label>
		<label for="oranges">
			<input type="radio" value="Oranges" id="oranges" name="fave"/>
			Oranges
		</label>
		<label for="cherries">
			<input type="radio" value="Cherries" id="cherries" name="fave"/>
			Cherries
		</label>
	</fieldset>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****



# 六. type="email"、"tel"、"url"

`type`属性值设置为`email`、`tel`和`url`的`input`元素能接受的输入数据分别为有效的电子邮箱地址、电话号码和 URL。

这三种`input`元素均支持下表所示的额外属性：

| 属性          | 说明                                                         | 是否为HTML5新增 |
| ------------- | ------------------------------------------------------------ | --------------- |
| `list`        | 指定为文本框提供建议值的`datalist`元素，其值为`datalist`元素的`id`值 | 是              |
| `maxlength`   | 设定用户能够在文本框中输入的字符的最大数目                   | 否              |
| `pattern`     | 指定一个用于输入验证的正则表达式                             | 是              |
| `placeholder` | 指定关于所需数据类型的提示                                   | 是              |
| `readonly`    | 用来将文本框设为只读以阻止用户编辑其内容                     | 否              |
| `required`    | 表示用户必须提供一个值，否则无法通过输入验证                 | 是              |
| `size`        | 通过指定文本框中可见的字符数目设定其宽度                     | 否              |
| `value`       | 指定元素的初始值。对于`email`型`input`元素，其值可能是单个邮箱地址，也可能是以逗号分隔的多个邮箱地址 | 否              |

下面的代码示范了这三种类型的`input`元素的用法：

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
		<label for="email">
			Email: <input type="email" placeholder="user@domain.com" id="email" name="email"/>
		</label>
	</p>
	<p>
		<label for="tel">
			Tel: <input type="tel" placeholder="(XXX)-XXX-XXXX" id="tel" name="tel"/>
		</label>
	</p>
	<p>
		<label for="url">
			Your homepage: <input type="url" id="url" name="url"/>
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
		<label for="email">
			Email: <input type="email" placeholder="user@domain.com" id="email" name="email"/>
		</label>
	</p>
	<p>
		<label for="tel">
			Tel: <input type="tel" placeholder="(XXX)-XXX-XXXX" id="tel" name="tel"/>
		</label>
	</p>
	<p>
		<label for="url">
			Your homepage: <input type="url" id="url" name="url"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****

这三种`input`元素都显示为普通文本框的样子，它们只有在提交表单的时候才会检查用户输入的数据。

对于`email`，所有主流浏览器都支持该元素，并能正确识别有效的电子邮箱地址。

而`url`则时灵时不灵。有些浏览器会在用户输入的值前加上一个`http://`了事；有些浏览器会要求用户输入一个以`http://`开头的值，但不会检查后面的部分；还有一些浏览器把用户输入的任何值都拿去提交。

而对于`tel`，浏览器的支持则是最差的。



# 七. 用 input 元素获取时间和日期

HTML5 中增加了一些`input`元素的新类型，供用户输入日期和时间。下表介绍了这些类型的`input`元素：

| type属性值       | 说明                                   | 示例                       |
| ---------------- | -------------------------------------- | -------------------------- |
| `datetime`       | 获取世界时日期和时间，包括时区信息     | `2011-07-19T16:49:39.491Z` |
| `datetime-local` | 获取本地日期和时间（不含时区信息）     | `2011-07-19T16:49:39.419`  |
| `date`           | 获取本地日期（不含时间和时区信息）     | `2011-07-20`               |
| `month`          | 获取年月信息（不含日、时间和时区信息） | `2011-08`                  |
| `time`           | 获取时间                               | `17:49:44.746`             |
| `week`           | 获取当前星期                           | `2011-W30`                 |

上表所包含类型的`input`元素都具有下面的额外属性：

| 属性       | 说明                                                         | 是否为HTML5新增 |
| ---------- | ------------------------------------------------------------ | --------------- |
| `list`     | 指定为文本框提供建议值的`datalist`元素，其值为`datalist`元素的`id`值 | 是              |
| `min`      | 设定可接受的最小值（也是下调按钮（如果有的话）的下限）以便进行输入验证 | 是              |
| `max`      | 设定可接受的最大值（也是上调按钮（如果有的话）的上限）以便进行输入验证 | 是              |
| `readonly` | 用来将文本框设为只读以阻止用户编辑内容                       | 否              |
| `required` | 表示用户必须提供一个值，否则无法通过输入验证。               | 是              |
| `step`     | 指定上下调节值的步长                                         | 是              |
| `value`    | 指定元素的初始值                                             | 否              |

日期和时间是出了名的难缠的问题。规范中的日期格式来自时间戳规定得非常严格的 RFC 3339。这与实际使用中的（也是用户料想的）许多地方性日期格式大相径庭。例如，很少有人会知道`datetime`格式中的 T 表示时间段的开始，以及其中的 Z 表示 Zulu 时区。

下面的代码示范了`date`型`input`元素的用法：

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
	<p>
		<label for="lastbuy">
			When did you last buy: <input type="date" id="lastbuy" name="lastbuy"/>
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
			Fruit: <input value="Apples" id="fave" name="fave"/>
		</label>
	</p>
	<p>
		<label for="lastbuy">
			When did you last buy: <input type="date" id="lastbuy" name="lastbuy"/>
		</label>
	</p>
	<input type="submit" value="Submit Vote"/>
</form>

****