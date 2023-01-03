# 一. 简介

## 1. 使用准备

```c++
#include <list>
using std::list;
using std::swap;
```



## 2. 性能

- 访问：不支持随机访问，只支持双向顺序访问。时间复杂度为 $O(n)$，$n$ 为访问的元素离访问开始端的位置。
- 插入和移除元素：常数 $O(1)$



# 二. list类

## 1. 类定义

```c++
template<
	class T,
	class Allocator = std::allocator<T>
> class list;
```

**模板形参**：

- `T`：元素的类型
- `Allocator`：用于获取/释放内存及构造/析构内存中元素的分配器



## 2. 成员类型

| 成员类型                 | 定义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `value_type`             | 实例化时提供的元素类型`T`                                    |
| `allocator_type`         | 实例化时提供的分配器类型`Allocator`                          |
| `size_type`              | 标识`list`大小的类型，通常是无符号整数类型（通常是`std::size_t`） |
| `difference_type`        | 标识`list`元素指针差值的类型，通常是有符号整数类型（通常是`std::ptrdiff_t`） |
| `reference`              | `list`元素引用类型：`value_type&`                            |
| `const_reference`        | `list`元素的常量引用类型：`const value_type&`                |
| `pointer`                | `list`元素的指针类型：`std::allocator_traits<Allocator>::pointer` |
| `const_pointer`          | 指向`list`常量元素的指针类型：`std::allocator_traits<Allocator>::const_pointer` |
| `iterator`               | 指向`value_type`的迭代器                                     |
| `const_iterator`         | 指向`value_type`的常量迭代器                                 |
| `reverse_iterator`       | 指向`value_type`的反向迭代器                                 |
| `const_reverse_iterator` | 指向`value_type`的常量反向迭代器                             |



## 3. 成员函数

### 1）基础函数

| 函数                                                         | 注解             |
| ------------------------------------------------------------ | ---------------- |
| [(构造函数)](https://zh.cppreference.com/w/cpp/container/list/list) | 构造 `list`      |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/list/~list) | 析构 `list`      |
| [operator=](https://zh.cppreference.com/w/cpp/container/list/operator%3D) | 赋值给容器       |
| [assign](https://zh.cppreference.com/w/cpp/container/list/assign) | 将值赋给容器     |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/list/get_allocator) | 返回相关的分配器 |



### 2）元素访问

| 函数                                                         | 注解             |
| ------------------------------------------------------------ | ---------------- |
| [front](https://zh.cppreference.com/w/cpp/container/list/front) | 访问第一个元素   |
| [back](https://zh.cppreference.com/w/cpp/container/list/back) | 访问最后一个元素 |



### 3）迭代器

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [begin<br />cbegin](https://zh.cppreference.com/w/cpp/container/list/begin) | 返回指向起始的迭代器     |
| [end<br />cend](https://zh.cppreference.com/w/cpp/container/list/end) | 返回指向末尾的迭代器     |
| [rbegin<br />crbegin](https://zh.cppreference.com/w/cpp/container/list/rbegin) | 返回指向起始的逆向迭代器 |
| [rend<br />crend](https://zh.cppreference.com/w/cpp/container/list/rend) | 返回指向末尾的逆向迭代器 |

> **迭代器失效**：
>
> 在 list 内或在数个 list 间添加、移除和移动元素不会使迭代器或引用失效。迭代器只有在对应元素被删除时才会失效。



### 4）容量

| 函数                                                         | 注解                   |
| ------------------------------------------------------------ | ---------------------- |
| [empty](https://zh.cppreference.com/w/cpp/container/list/empty) | 检查容器是否为空       |
| [size](https://zh.cppreference.com/w/cpp/container/list/size) | 返回容纳的元素数       |
| [max_size](https://zh.cppreference.com/w/cpp/container/list/max_size) | 返回可容纳的最大元素数 |



### 5）修改器

| 函数                                                         | 注解                       |
| ------------------------------------------------------------ | -------------------------- |
| [clear](https://zh.cppreference.com/w/cpp/container/list/clear) | 清除内容                   |
| [insert](https://zh.cppreference.com/w/cpp/container/list/insert) | 插入元素                   |
| [emplace](https://zh.cppreference.com/w/cpp/container/list/emplace) | 原位构造元素               |
| [erase](https://zh.cppreference.com/w/cpp/container/list/erase) | 擦除元素                   |
| [push_back](https://zh.cppreference.com/w/cpp/container/list/push_back) | 将元素添加到容器末尾       |
| [emplace_back](https://zh.cppreference.com/w/cpp/container/list/emplace_back) | 在容器末尾就地构造元素     |
| [pop_back](https://zh.cppreference.com/w/cpp/container/list/pop_back) | 移除末元素                 |
| [push_front](https://zh.cppreference.com/w/cpp/container/list/push_front) | 插入元素到容器起始         |
| [emplace_front](https://zh.cppreference.com/w/cpp/container/list/emplace_front) | 在容器头部原位构造元素     |
| [pop_front](https://zh.cppreference.com/w/cpp/container/list/pop_front) | 移除首元素                 |
| [resize](https://zh.cppreference.com/w/cpp/container/list/resize) | 改变容器中可存储元素的个数 |
| [swap](https://zh.cppreference.com/w/cpp/container/list/swap) | 交换内容                   |



### 6）操作

| 函数                                                         | 注解                         |
| ------------------------------------------------------------ | ---------------------------- |
| [merge](https://zh.cppreference.com/w/cpp/container/list/merge) | 合并二个已排序列表           |
| [splice](https://zh.cppreference.com/w/cpp/container/list/splice) | 从另一个`list`中移动元素     |
| [remove<br />remove_if](https://zh.cppreference.com/w/cpp/container/list/remove) | 移除满足特定标准的元素       |
| [reverse](https://zh.cppreference.com/w/cpp/container/list/reverse) | 将该链表的所有元素的顺序反转 |
| [unique](https://zh.cppreference.com/w/cpp/container/list/unique) | 删除连续的重复元素           |
| [sort](https://zh.cppreference.com/w/cpp/container/list/sort) | 对元素进行排序               |



## 4. 非成员函数

| 函数                                                         | 注解                         |
| ------------------------------------------------------------ | ---------------------------- |
| [operator==<br />operator!=<br />operator\<<br />operator\<=<br />operator\><br />operator>=](https://zh.cppreference.com/w/cpp/container/list/operator_cmp) | 按照字典顺序比较 list 中的值 |
| [std::swap](https://zh.cppreference.com/w/cpp/container/list/swap2) | 特化 std::swap 算法          |

