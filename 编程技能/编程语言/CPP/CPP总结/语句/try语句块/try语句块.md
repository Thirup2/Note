# 一. 简介

`try`语句块用于处理程序中可能发生的异常，其由一个`try`语句以及一个或多个`catch`子句组成。

在`try`语句中，包含程序主内容和一些`throw`表达式，这些`throw`表达式用于抛出异常，其抛出的异常由一套**异常类**(exception class)定义；`try`语句后的`catch`子句用于捕获在`try`语句中由`throw`表达式抛出的异常，`catch`子句内部包括当捕获到该异常之后执行的代码，称为**异常处理代码**(exception handler)



# 二. 标准异常

## 1. 异常类

C++标准库定义了一组类，用于报告标准库函数遇到的问题。这些异常类也可以在用户编写的程序中使用，它们分别定义在4个头文件中：

- `exception`：定义了最通用的异常类`exception`。它只报告异常的发生，不提供任何额外信息

- `stdexcept`：定义了几种常用的异常类，详细信息如下表：

  | 异常类             | 异常内容                                       |
  | ------------------ | ---------------------------------------------- |
  | `exception`        | 最常见的问题                                   |
  | `runtime_error`    | 只有在运行时才能检测出的问题                   |
  | `range_error`      | 运行时错误：生成的结果超出了有意义的值域范围   |
  | `overflow_error`   | 运行时错误：计算上溢                           |
  | `underflow_error`  | 运行时错误：计算下溢                           |
  | `logic_error`      | 程序逻辑错误                                   |
  | `domain_error`     | 逻辑错误：参数对应的结果值不存在               |
  | `invalid_argument` | 逻辑错误：无效参数                             |
  | `length_error`     | 逻辑错误：试图创建一个超出该类型最大长度的对象 |
  | `out_of_range`     | 逻辑错误：使用一个超出有效范围的值             |

- `new`：定义了`bad_alloc`异常类型

- `type_info`：定义了`bad_cast`异常类型

## 2. 操作

### 1）初始化

- 对于`exception`、`bad_alloc`、`bad_cast`这三种异常类型，只能以默认初始化的方式初始化，不允许为这些对象提供初始值
- 对于其他的异常类型，应该使用`string`对象或C风格字符串初始化这些类型的对象，且不允许使用默认初始化的方式。在创建此类对象时提供的字符串初始值用于描述异常相关的信息

### 2）what成员函数

- 操作：返回一个指向C风格字符串的`const char *`，该字符串的目的是提供关于异常的一些文本信息
- 返回值：
  1. 对于`exception`、`bad_alloc`、`bad_cast`这三种异常类型，`what`成员函数返回的内容由编译器决定
  2. 对于其他的异常类型，`what`成员函数返回的内容即初始化使用的字符串初始值



# 三. throw表达式

## 1. 语法

```c++
throw error_type(<initial value>);
```

- `error_type`：异常类型
- `initial value`：若`error_type`是需要提供初始值的异常类型，则用`initial value`作为初始值

## 2. 控制流

在复杂系统中，在一个`try`语句块中调用的函数或许也包含了一个`try`语句块，以此类推。

当异常被抛出时，即遇到`throw`表达式时，首先搜索抛出该异常的函数。如果没有找到匹配的`catch`子句，终止该函数，并在调用该函数的函数中继续寻找。如果还是没有找到匹配的`catch`子句，这个新的函数也被终止，继续搜索调用它的函数。以此类推，沿着程序的执行路径逐层回退，直到找到适当类型的`catch`子句为止。

如果最终还是没能找到任何匹配的`catch`子句，程序转到名为**terminate**的标准库函数。该函数的行为与系统有关，一般情况下，执行该函数将导致程序非正常退出。

**注意**：对于没有任何`try`语句块定义的异常，系统也会调用`terminate`函数并终止当前程序的执行。



# 四. try语句块

## 1. 语法

```c++
try {
    program-statements
} catch (exception-declaration) {
    handler-statements
} catch (exception-declaration) {
    handler-statements
} //...
```

- `try`：该语句块中是程序正常要执行的内容，里面包含了一些`throw`表达式
- `catch`：这些语句块用于捕获`throw`表达式抛出的异常，正常情况下不会运行，当捕获到异常时才进入该`catch`子句运行
- `exception-declaration`：**异常声明**，即按`异常类 异常对象`的形式

## 2. 控制流

程序首先执行`try`语句块的内容，若没遇到`throw`表达式，则跳过所有的`catch`子句；当遇到`throw`表达式后，按照`throw`表达式的机制匹配`catch`子句，当遇到匹配的`catch`子句后，执行该`catch`子句的`exception-declaration`，该语句创建一个异常对象，若`throw`表达式后提供了初始值，则用该初始值初始化这个创建的对象，然后进入该`catch`子句，执行该`catch`子句中代码块的内容。



# 五. 实例

## 1. 代码

```c++
Sales_item item1, item2;
while (cin >> item1 >> item2) {
    try {
        if (item1.isbn () != item2.isbn())
            throw runtime_error("Data must refer to same ISBN");
        cout << item1 + item2 << endl;
    } catch (runtime_error err) {
        cout << err.what()
             << "\nTry Again? Enter y or n" << endl;
        char c;
        cint >> c;
        if (!cin || c == 'n')
            break;
    }
}
```

## 2. 输出

当抛出异常后程序的输出如下：

```
Data must refer to same ISBN
Try Again? Enter y or n
```

