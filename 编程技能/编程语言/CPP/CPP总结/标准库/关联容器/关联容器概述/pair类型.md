# 一. 类型简介

`pair`类型定义在头文件`utility`中。一个`pair`类型保存两个数据成员。

类似容器，`pair`是一个用来生成特定类型的模板。当创建一个`pair`时，我们必须提供两个类型名，`pair`的数据成员将具有对应的类型。

两个类型不要求一样：

```c++
pair<string, string> anon;
pair<string, size_t> word_count;
pair<string, vector<int>> line;
```

`pair`的默认构造函数对数据成员进行值初始化。

我们也可以为每个成员提供初始化器：

```c++
pair<string, string> author{"James", "Joyce"};
```



# 二. 数据成员

和其他标准库类型不同，`pair`的数据成员是`public`的。两个成员分别命名为`first`和`second`。

如：

```c++
cout << w.first << " occurs " << w.second
     << ((w.second > 1) ? " times" : " time") << endl;
```



# 三. 操作

| 操作                        | 描述                                                         |
| --------------------------- | ------------------------------------------------------------ |
| `pair<T1, T2> p`            | `p`是一个`pair`，两个类型分别为`T1`和`T2`的成员都进行了值初始化 |
| `pair<T1, T2> p(v1, v2)`    | `p`是一个成员类型为`T1`和`T2`的`pair`；<br />`first`和`second`成员分别用`v1`和`v2`进行初始化 |
| `pair<T1, T2> p = {v1, v2}` | 等价于`p(v1, v2)`                                            |
| `make_pair(v1, v2)`         | 返回一个用`v1`和`v2`初始化的`pair`。`pair`的类型从`v1`和`v2`的类型推断出来 |
| `p.first`                   | 返回`p`的名为`first`的数据成员                               |
| `p.second`                  | 返回`p`的名为`second`的数据成员                              |
| `<`、`<=`、`>`、`>=`        | 关系运算符按字典序定义：<br />当`p1.first < p2.first`或`!(p2.first < p1.first) && p1.second < p2.second`成立时，`p1 < p2`为`true`<br />关系运算符利用元素的`<`运算符来实现 |
| `p1 == p2`<br />`p1 != p2`  | 当`first`和`second`成员分别相等时，两个`pair`相等。<br />相等性利用元素的`==`运算符实现 |