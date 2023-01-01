# 一. 简介

## 1. 使用准备

```c++
#include <deque>
using std::deque;
using std::swap;
```



## 2. 性能

- 随机访问：常数 $O(1)$
- 在结尾或起始插入或移除元素：常数 $O(1)$
- 插入或移除元素：线性  $O(n)$



# 二. deque类

## 1. 类定义

```c++
template<
	class T,
	class Allocator = std::allocator<T>
> class deque;
```

**模板形参**：

- `T`：实例化的元素类型
- `Allocator`：用于获取/释放内存及构造/析构内存中元素的分配器。



## 2. 成员类型

| 成员类型                 | 定义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `value_type`             | 实例化时提供的类型`T`                                        |
| `allocator_type`         | 实例化时默认或提供的`Allocator`                              |
| `size_type`              | 标记容器长度所用的类型（通常是`std::size_t`，无符号整数类型） |
| `difference_type`        | 标记指向容器元素的指针的差值的类型（通常是`std::ptrdiff_t`，有符号整数类型） |
| `reference`              | 对容器元素的引用类型：`value_type&`                          |
| `const_reference`        | 对容器元素的常量引用类型：`const value_type&`                |
| `pointer`                | 对容器元素的指针类型：`std::allocator_traits<Allocator>::pointer` |
| `const_pointer`          | 指向常量容器元素的指针类型：`std::allocator_traits<Allocator>::const_pointer` |
| `iterator`               | `deque`的迭代器类型                                          |
| `const_iterator`         | `deque`的常量迭代器类型                                      |
| `reverse_iterator`       | `deque`的反向迭代器类型                                      |
| `const_reverse_iterator` | `deque`的常量反向迭代器类型                                  |



## 3. 成员函数

### 1）基础函数

| 函数                                                         | 注解             |
| ------------------------------------------------------------ | ---------------- |
| [(构造函数)](https://zh.cppreference.com/w/cpp/container/deque/deque) | 构造`deque`      |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/deque/~deque) | 析构`deque`      |
| [operator=](https://zh.cppreference.com/w/cpp/container/deque/operator%3D) | 赋值给容器       |
| [assign](https://zh.cppreference.com/w/cpp/container/deque/assign) | 将值赋给容器     |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/deque/get_allocator) | 返回相关的分配器 |



### 2）元素访问

| 函数                                                         | 注解                             |
| ------------------------------------------------------------ | -------------------------------- |
| [at](https://zh.cppreference.com/w/cpp/container/deque/at)   | 访问指定的元素，同时进行越界检查 |
| [operator[]](https://zh.cppreference.com/w/cpp/container/deque/operator_at) | 访问指定的元素                   |
| [front](https://zh.cppreference.com/w/cpp/container/deque/front) | 访问第一个元素                   |
| [back](https://zh.cppreference.com/w/cpp/container/deque/back) | 访问最后一个元素                 |



### 3）迭代器

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [begin<br />cbegin](https://zh.cppreference.com/w/cpp/container/deque/begin) | 返回指向起始的迭代器     |
| [end<br />cend](https://zh.cppreference.com/w/cpp/container/deque/end) | 返回指向末尾的迭代器     |
| [rbegin<br />crbegin](https://zh.cppreference.com/w/cpp/container/deque/rbegin) | 返回指向起始的逆向迭代器 |
| [rend<br />crend](https://zh.cppreference.com/w/cpp/container/deque/rend) | 返回指向末尾的逆向迭代器 |

> **迭代器失效**：
>
> | 操作                                                         | 失效                                                         |
> | ------------------------------------------------------------ | ------------------------------------------------------------ |
> | 所有只读操作                                                 | 决不                                                         |
> | `swap`、`std::swap`                                          | 尾后迭代器可能失效                                           |
> | `shrink_to_fit`、`clear`、`insert`、`emplace`、<br />`push_front`、`push_back`、`emplace_front`、`emplace_back` | 始终                                                         |
> | `erase`                                                      | 如果在起始擦除——只有被擦除元素<br />如果在末尾擦除——只有被擦除元素和尾后迭代器<br />否则——所有迭代器（包括尾后迭代器） |
> | `resize`                                                     | 如果新尺寸小于旧尺寸——只有被擦除元素和尾后迭代器<br />如果新尺寸大于旧尺寸——所有迭代器<br />否则——无 |
> | `pop_front`                                                  | 只有被擦除元素                                               |
> | `pop_back`                                                   | 只有被擦除元素和尾后迭代器                                   |
>
> **注**：
>
> - 从`deque`任意一端插入时，`insert`和`emplace`不会使引用实效
> - `push_front`、`push_back`、`emplace_front`、`emplace_back`不会使任何到`deque`元素的引用失效
> - 从`deque`的任意一端删除时，`erase`、`pop_front`和`pop_back`不会使到未擦除元素的引用失效
> - 以较小的尺寸调用`resize`不会使任何到未擦除元素的引用失效
> - 以较大的尺寸调用`resize`不会使任何到`deque`元素的引用失效



### 4）容量

| 函数                                                         | 注解                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [empty](https://zh.cppreference.com/w/cpp/container/deque/empty) | 检查容器是否为空                   |
| [size](https://zh.cppreference.com/w/cpp/container/deque/size) | 返回容纳的元素数                   |
| [max_size](https://zh.cppreference.com/w/cpp/container/deque/max_size) | 返回可容纳的最大元素数             |
| [shrink_to_fit](https://zh.cppreference.com/w/cpp/container/deque/shrink_to_fit) | 通过释放未使用的内存减少内存的使用 |



### 5）修改器

| 函数                                                         | 注解                       |
| ------------------------------------------------------------ | -------------------------- |
| [clear](https://zh.cppreference.com/w/cpp/container/deque/clear) | 清除内容                   |
| [insert](https://zh.cppreference.com/w/cpp/container/deque/insert) | 插入元素                   |
| [emplace](https://zh.cppreference.com/w/cpp/container/deque/emplace) | 原位构造元素               |
| [erase](https://zh.cppreference.com/w/cpp/container/deque/erase) | 擦除元素                   |
| [push_back](https://zh.cppreference.com/w/cpp/container/deque/push_back) | 将元素添加到容器末尾       |
| [emplace_back](https://zh.cppreference.com/w/cpp/container/deque/emplace_back) | 在容器末尾就地构造元素     |
| [pop_back](https://zh.cppreference.com/w/cpp/container/deque/pop_back) | 移除末元素                 |
| [push_front](https://zh.cppreference.com/w/cpp/container/deque/push_front) | 插入元素到容器起始         |
| [emplace_front](https://zh.cppreference.com/w/cpp/container/deque/emplace_front) | 在容器头部原位构造元素     |
| [pop_front](https://zh.cppreference.com/w/cpp/container/deque/pop_front) | 移除首元素                 |
| [resize](https://zh.cppreference.com/w/cpp/container/deque/resize) | 改变容器中可存储元素的个数 |
| [swap](https://zh.cppreference.com/w/cpp/container/deque/swap) | 交换内容                   |



## 4. 非成员函数

| 函数                                                         | 注解                          |
| ------------------------------------------------------------ | ----------------------------- |
| [operator==<br />operator!=<br />operator\<<br />operator\<=<br />operator\><br />operator>=](https://zh.cppreference.com/w/cpp/container/deque/operator_cmp) | 按照字典顺序比较 deque 中的值 |
| [std::swap](https://zh.cppreference.com/w/cpp/container/deque/swap2) | 特化`std::swap`算法           |

