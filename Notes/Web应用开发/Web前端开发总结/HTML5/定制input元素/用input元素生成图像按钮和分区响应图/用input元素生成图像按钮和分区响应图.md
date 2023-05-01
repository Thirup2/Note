# 一. type="image"

`image`型`input`元素生成的按钮显示为一幅图像，点击它可以提交表单。这种类型的`input`元素支持的额外属性如下表所示：

| 属性             | 说明                                                         | 是否为HTML5新增 |
| ---------------- | ------------------------------------------------------------ | --------------- |
| `alt`            | 提供元素的说明文字。                                         | 否              |
| `formaction`     | 等价于`button`元素的同名属性                                 | 是              |
| `formenctype`    | 等价于`button`元素的同名属性                                 | 是              |
| `formmethod`     | 等价于`button`元素的同名属性                                 | 是              |
| `formtarget`     | 等价于`button`元素的同名属性                                 | 是              |
| `formnovalidate` | 等价于`button`元素的同名属性                                 | 是              |
| `height`         | 以像素为单位设置图像的高度（不设置这个属性的话图像将以其本身的高度显示） | 否              |
| `src`            | 指定要显示的图像的 URL                                       | 否              |
| `width`          | 以像素为单位设置图像的宽度（不设置这个属性的话图像将以其本身的宽度显示） | 否              |

下面的代码示范了`image`型`input`元素的用法：

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
	<input type="image" src="accept.png" name="submit"/>
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
	<input type="image" src="HTML5/定制input元素/用input元素生成图像按钮和分区响应图/images/accept.png" name="submit"/>
</form>

****

如果点击这个按钮，就会使用其设定好的操作将其内容发送到服务器，同时还有两个值也会被发送到服务器，分别是点击位置相对于图片的坐标，在后端我们还可以根据用户点击的位置设置不同的行为。

