# 一. 简介

使用`<sstream>`头文件需要用到其中的三个已定义类型：

- `istringstream`：从`string`读取数据
- `ostringstream`：向`string`写入数据
- `stringstream`：既可从`string`读数据也可向`string`写数据

从操作上来说，在标准IO中能使用的操作在`string`IO中同样能使用，另外还有一些特殊的`string`IO特有的操作：

下表列出了这些特殊的操作，其中`sstream`是一个`string`IO类型，`strm`是一个`string`IO对象，`s`是一个`string`对象：

| 操作               | 效果                                                         |
| ------------------ | ------------------------------------------------------------ |
| `sstream strm;`    | `strm`是一个未绑定的`stringstream`对象                       |
| `sstream strm(s);` | `strm`是一个`stringstream`对象，保存`s`的一个拷贝。此构造函数是`explicit`的 |
| `strm.str()`       | 返回`strm`所保存的`string`的拷贝                             |
| `strm.str(s)`      | 将`s`拷贝到`strm`中。返回`void`                              |

使用`string`作为IO对象和使用文件作为IO对象有些区别，但在原理上都是相同的：文件IO是将一个文件作为输入输出源，然后使用一般输入输出操作来读写文件IO；而`string`IO则是将一个`string`作为一个输入输出源，然后使用一般输入输出操作来读写`string`IO。总的来说，我们所作的事情就是从一个文件或者`string`对象中获取数据或是向一个文件或`string`对象中写入数据。

# 二. 使用`istringstream`

## 1. 表示数据

假设我们需要处理的数据如下，每一行都是一个人名和不定个数的电话号码：

```
morgan 2015552368 8625550123
drew 9735550130
lee 6095550132 2015550175 8005550000
```

于是首先定一个简单的类来表示数据：

```c++
struct PersonInfo
{
    string name;
    vector<string> phones;
};
```



## 2. 数据处理

使用`istringstream`的数据处理方法可以如下：

```c++
string line, word;				// 分别保存来自输入的一行和单词
vector<PersonInfo> people;		// 保存来自输入的所有记录
while (getline(cin, line)) {
    PersonInfo info;			  // 保存当前记录
    istringstream record(line);   // 用当前行初始化istringstream对象
    record >> info.name;		  // 读取record中的第一个单词，保存为名字
    while (record >> word) {	  // 读取record中名字之后的所有号码，保存
        info.phones.push_back(word);
    }
    // 完成读取一行然后用从该行读取相应内容填充info的内容
    people.push_back(info);	   // 将当前info添加到people中
}
```



# 三. 使用`ostringstream`

在上一节例子中，我们读取并保存了以人为单位的电话信息，现在的任务是将其写入到一个新的文件中，但是由于输入中存在无电话人以及在构建文件时我们希望能够改变一下格式，所以输出的条件如下：

- 对于无效的号码，不输出到新文件中，而是打印一条包含人名和无效号码的错误信息，验证号码的函数假定为`valid`
- 每一条信息都需要改变格式，改变格式的函数假定为`format`

代码如下：

```c++
for (const auto &entry : people) {
    ostringstream formatted, badNums;			// 创建了两个ostringstream对象
    for (const auto &nums : entry.phones) {
        if (!valid(nums)) {
            badNums << " " << nums;			  // 向其中一个ostringstream对象写入信息，需要注意的是看似只保存了一个坏数，实际上保存了当前人的所有坏数
        } else {
            formatted << " " << format(nums);	// 将所有有效的号码格式化后写入到另一个ostringstream对象中
        }
    }
    if (badNums.str().empty())				   // 先调用string IO的成员函数str得到对应的string，但后调用string的成员函数empty查询是否为空
        os << entry.name << " " << formatted.str() << endl;
    else
        cerr << "input error: " << entry.name << " invalid number(s) " << badNums.str() << endl;
}
```



# 四. 注意

看过上面两个例子之后，我们就可以很轻松的发现一点：**string IO 可以看作一个`string`类型的对象**，它不像文件IO一样必须要有实际的文件存在才行，`string IO`并不需要实际的`string`对象，因为即使是创建时提供的`string`对象，它也只是进行了一个拷贝而已，在后续对该`string`IO的写入或读取过程中，用于初始化的`string`对象并没有发生改变。

另外，如果`ostringstream`对象有初始值，输入操作仍然将从第一个字符开始填充，如果此处有值，将被替代。