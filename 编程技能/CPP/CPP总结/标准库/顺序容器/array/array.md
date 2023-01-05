# 一. 简介

## 1. 使用准备

```c++
#include <array>
using std::array;
using std::swap;
using std::get;
```



## 2. 性能

- 访问：支持快速随机访问，复杂度为常数 $O(1)$
- 插入和删除：不支持插入和删除元素，只能为某个元素赋值
- 查找：无序的数组平均为 $O(n)$，有序数组根据算法的不同的不同



# 二. array类

## 1. 类定义

```c++
template<
	class T,
	std::size_t N
> struct array;
```

**模板形参**：

- `T`：成员的类型
- `N`：数组的大小



## 2. 成员类型

| 成员类型                 | 定义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `value_type`             | 实例化时提供的元素类型`T`                                    |
| `size_type`              | 标识数组大小的类型，无符号整数类型，一般为`std::size_t`      |
| `difference_type`        | 表示数组元素指针差值的类型，有符号整数类型，一般为`std::ptrdiff_t` |
| `reference`              | 数组元素引用类型                                             |
| `const_reference`        | 数组元素的常量引用类型                                       |
| `pointer`                | 数组元素指针类型                                             |
| `const_pointer`          | 指向常量数组元素的指针类型                                   |
| `iterator`               | 指向`value_type`的迭代器                                     |
| `const_iterator`         | 指向`value_type`的常量迭代器                                 |
| `reverse_iterator`       | 指向`value_type`的反向迭代器                                 |
| `const_reverse_iterator` | 指向`value_type`的常量反向迭代器                             |



## 3. 成员函数

### 1）基础函数

| 函数       | 注解                                                         |
| ---------- | ------------------------------------------------------------ |
| (构造函数) | 遵循**聚合初始化**的规则初始化 `array`（注意默认初始化可以导致非类的 `T` 的不确定值） |
| (析构函数) | 销毁 `array` 的每个元素                                      |
| operator=  | 以来自另一 `array` 的每个元素重写 `array` 的对应元素         |



### 2）元素访问

| 函数                                                         | 注解                             |
| ------------------------------------------------------------ | -------------------------------- |
| [at](https://zh.cppreference.com/w/cpp/container/array/at)   | 访问指定的元素，同时进行越界检查 |
| [operator[]](https://zh.cppreference.com/w/cpp/container/array/operator_at) | 访问指定的元素                   |
| [front](https://zh.cppreference.com/w/cpp/container/array/front) | 访问第一个元素                   |
| [back](https://zh.cppreference.com/w/cpp/container/array/back) | 访问最后一个元素                 |
| [data](https://zh.cppreference.com/w/cpp/container/array/data) | 直接访问底层数组                 |



### 3）迭代器

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [begin<br />cbegin](https://zh.cppreference.com/w/cpp/container/array/begin) | 返回指向起始的迭代器     |
| [end<br />cend](https://zh.cppreference.com/w/cpp/container/array/end) | 返回指向末尾的迭代器     |
| [rbegin<br />crbegin](https://zh.cppreference.com/w/cpp/container/array/rbegin) | 返回指向起始的逆向迭代器 |
| [rend<br />crend](https://zh.cppreference.com/w/cpp/container/array/rend) | 返回指向末尾的逆向迭代器 |

> **迭代器失效**：
>
> 按照规则，指向 `array` 的迭代器在 `array` 的生存期间决不非法化。然而要注意，在 swap 时，迭代器将继续指向同一 `array` 的元素，并将改变元素的值。



### 4）容量

| 函数                                                         | 注解                   |
| ------------------------------------------------------------ | ---------------------- |
| [empty](https://zh.cppreference.com/w/cpp/container/array/empty) | 检查容器是否为空       |
| [size](https://zh.cppreference.com/w/cpp/container/array/size) | 返回容纳的元素数       |
| [max_size](https://zh.cppreference.com/w/cpp/container/array/max_size) | 返回可容纳的最大元素数 |



### 5）操作

| 函数                                                         | 注解             |
| ------------------------------------------------------------ | ---------------- |
| [fill](https://zh.cppreference.com/w/cpp/container/array/fill) | 以指定值填充容器 |
| [swap](https://zh.cppreference.com/w/cpp/container/array/swap) | 交换内容         |



## 4. 非成员函数

| 函数                                                         | 注解                          |
| ------------------------------------------------------------ | ----------------------------- |
| [operator==<br />operator!=<br />operator\<<br />operator\<=<br />operator\><br />operator\>=](https://zh.cppreference.com/w/cpp/container/array/operator_cmp) | 按照字典顺序比较 array 中的值 |
| [std::get](https://zh.cppreference.com/w/cpp/container/array/get) | 访问 `array` 的一个元素       |
| [std::swap](https://zh.cppreference.com/w/cpp/container/array/swap2) | 特化 std::swap 算法           |



# 三. 辅助类

| 类                                                           | 注解                    |
| ------------------------------------------------------------ | ----------------------- |
| [std::tuple_size](https://zh.cppreference.com/w/cpp/container/array/tuple_size) | 获得 `array` 的大小     |
| [std::tuple_element](https://zh.cppreference.com/w/cpp/container/array/tuple_element) | 获得 `array` 元素的类型 |

