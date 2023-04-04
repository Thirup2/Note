# 一. string流特有的操作

我们只能对`stringstream`、`istringstream`、`ostringstream`类型的对象（以及宽字符版本）调用下面的操作，但不能对其他 IO 类型调用这些操作（`sstream`表示一个 string  流，`strm`表示一个 string 流对象）：

| 操作              | 描述                                                         |
| ----------------- | ------------------------------------------------------------ |
| `sstream strm`    | `strm`是一个未绑定的 string 流对象                           |
| `sstream strm(s)` | `strm`是一个 string 流对象，并保存`s`的一个拷贝<br />`s`是一个`string`类型的对象。<br />此构造函数是`explicit`的，即不允许隐式类型转换 |
| `strm.str()`      | 返回`strm`所保存的`string`的拷贝                             |
| `strm.str(s)`     | 将`s`拷贝到`strm`中，`s`是一个`string`类型对象。<br />返回`void` |

****

可以将一个 string IO 对象就当作一个`string`对象。

当我们需要使用`istringstream`时，我们需要先将一个包含了某些内容的`string`对象拷贝给这个`istringstream`对象，然后从这个`istringstream`对象将内容写入到`>>`运算符右侧的对象中。

> 一般来说，我们可以只使用`string`类型就能完成这一步，但需要我们自己去实现一些功能，如将字符串转换为整数，浮点数等函数，这可能会比较复杂，但使用 string 流就比较简单。

而当我们使用`ostringstream`时，**不用给`ostringstream`对象拷贝`string`对象**，然后将各种数据写入到`ostringstream`中，我们可以直接调用`str()`输出`ostringstream`的内容，也可以将其拷贝给一个需要的`string`对象。

>  和输入流相同，string 输出流的许多功能也可以自己实现，但是也是可能比较复杂，如将一个整型变量的值写入到`string`对象中等等



# 二. 使用istringstream

最典型的一个使用`istringstream`的情况就是：我们需要一次读取一行文本，然后处理行内的每个单词。

假定有一个文件，列出了一些人和他们的电话号码。某些人只有一个号码，而另一些人则有多个，每个人的名字和电话号码都保证在一行内，另外名字保证有且只有第一个是人的名字。

这个输入文件看起来如下：

```
morgan 2015552368 862550123
drew 9735550130
lee 6095550132 2015550175 8005550000
```

我们的任务是将每个人的名字和所有的电话号码通过结构整合起来，并将所有人的信息放在一个`vector`中。

****

首先我们需要一个类来记录每个人的信息：

```c++
struct PersonInfo
{
    string name;
    vector<string> phones;
};
```

****

然后就是处理程序，首先它应该创建一个`PersonInfo`的`vector`，然后是每次读入一行，再处理这一行中每个单词，接着再处理下一行，具体的代码如下：

```c++
string line, word;
vector<PersonInfo> people;

while (getline(cin, line)) {
    PersonInfo info;
    istringstream record(line);
    record >> info.name;
    while (record >> word)
        info.phones.push_back(word);
    people.push_back(info);
}
```



# 三. 使用ostringstream

当我们逐步构造输出，希望最后一起打印时，或是返回一个逐步构造出来的`string`对象时，`ostringstream`是很有用的。

同上例，我们希望在将电话号码保存到结构中前，先检验号码并改变其格式。对于无效的号码，我们不将其写入，而是打印一条包含人名和无效号码的错误信息；而对于有效的号码，我们首先要将其格式化，然后再写入。

代码如下：

```c++
for (const auto &entry : people) {
    ostringstream formatted, badNums;
    for (const auto &nums : entry.phones) {
        if (!valid(nums)) {
            badNums << " " << nums;
        } else
            formatted << " " << format(nums);
    }
    if (badNums.str().empty())
        os << entry.name << " "
           << formatted.str() << endl;
    else
        cerr << "input error: " << entry.name
             << " invalid number(s) " << badNums.str() << endl;
}
```

