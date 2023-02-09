# 一. 定义

**constexpr函数**是指能用于常量表达式的函数。定义`constexpr`函数的方法与其他函数类似，但是要遵循几项约定：

- 函数的返回类型及所有形参的类型都得是字面值类型
- 函数体中必须有且只有一条`return`语句



# 二. 使用constexpr函数

## 1. 使用方法

如：

```c++
constexpr int new_sz()
{
    return 42;
}

constexpr int foo = new_sz();
```

## 2. 注意

- `constexpr`函数被隐式地指定为内联函数
- 允许`constexpr`函数的返回值并非一个常量，当`constexpr`函数的参数是常量表达式时，它的返回值也是常量表达式；反之则不然。
- `constexpr`函数可以多次定义，因为编译器要想展开函数就会在当前文件搜索函数的定义，它的多个定义必须完全一致。