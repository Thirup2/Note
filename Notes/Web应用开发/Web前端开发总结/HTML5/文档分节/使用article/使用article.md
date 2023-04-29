# 一. article元素

`article`元素代表HTML文档中一段独立成篇的内容，从理论上讲，可以独立于页面其余内容发布或使用（例如通过RSS）。这不是说作者必须单独发布它，而是说判断是否使用了该元素时要以独立性为依据。一篇新文章和博文条目都是这方面的典型例子。

## 1. 元素信息

| 元素    | 元素类型 | 允许具有的父元素                                             | 局部属性 | 内容              | 标签用法           |
| ------- | -------- | ------------------------------------------------------------ | -------- | ----------------- | ------------------ |
| article | 流       | 任何可以包含流元素的元素<br />但该元素不能是address元素的后代元素 | 无       | style元素和流内容 | 开始标签和结束标签 |

| 是否为HTML5新增 | 在HTML5中的变化 | 习惯样式                                            |
| --------------- | --------------- | --------------------------------------------------- |
| 是              | 无              | <pre><code>article { display: block; }</code></pre> |

## 2. 使用元素

```html
<article>
    <header>
        <hgroup>
            <h1 id="fruitsilike">Fruits I Like</h1>
            <h2>How I Learned to Love Citrus</h2>
        </hgroup>
    </header>
    I like apples and oranges.
    <section>
        <h1 id="morefruit">Additional fruits</h1>
        I also like bananas, mangoes, cherries, apricots, plums, peaches and grapes.
        <section>
            <h1>More information</h1>
            You cna see other fruits I like <a href="fruitlist.html">here</a>
        </section>
    </section>
    <footer>
        <nav>
            More Information:
            <a href="http://fruit.org">Learn More About Fruit</a>
        </nav>
    </footer>
</article>
```

其渲染效果如下：

<article>
    <header>
        <hgroup>
            <h1 id="fruitsilike">Fruits I Like</h1>
            <h2>How I Learned to Love Citrus</h2>
        </hgroup>
    </header>
    I like apples and oranges.
    <section>
        <h1 id="morefruit">Additional fruits</h1>
        I also like bananas, mangoes, cherries, apricots, plums, peaches and grapes.
        <section>
            <h1>More information</h1>
            You cna see other fruits I like <a href="fruitlist.html">here</a>
        </section>
    </section>
    <footer>
        <nav>
            More Information:
            <a href="http://fruit.org">Learn More About Fruit</a>
        </nav>
    </footer>
</article>