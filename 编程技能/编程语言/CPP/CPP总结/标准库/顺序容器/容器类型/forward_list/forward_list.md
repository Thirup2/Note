# 一. 简介

## 1. 使用准备

```c++
#include <forward_list>
using std::forward_list;
using std::swap;
```



## 2. 性能

- 访问：不支持随机访问，只支持单向顺序访问。时间复杂度为 $O(n)$ ，$n$ 为访问元素离访问起始端的距离
- 插入与删除：常数 $O(1)$



# 二. forward_list类

## 1. 类定义

```c++
template<
	class T,
	class Allocator = std::allocator<T>
> class forward_list;
```

**模板形参**：

- `T`：元素的类型
- `Allocator`：用于获取/释放内存及构造/析构内存中元素的分配器



## 2. 成员类型

| 成员类型          | 定义                                                         |
| ----------------- | ------------------------------------------------------------ |
| `value_type`      | 实例化时提供的元素类型`T`                                    |
| `allocator_type`  | 实例化时提供的分配器类型`Allocator`                          |
| `size_type`       | 标识`forward_list`大小的类型，无符号整数类型（通常是`std::size_t`） |
| `difference_type` | 标识`forward_list`元素指针的差值类型，有符号整数类型（通常是`std::ptrdiff_t`） |
| `reference`       | `forward_list`元素的引用类型：`value_type&`                  |
| `const_reference` | `forward_list`元素的常量引用类型：`const value_type&`        |
| `pointer`         | 指向`forward_list`元素的指针类型                             |
| `const_pointer`   | 指向`forward_list`常量元素的指针类型                         |
| `iterator`        | 指向`value_type`的迭代器                                     |
| `const_iterator`  | 指向`value_type`的常量迭代器                                 |



## 3. 成员函数

### 1）基础函数

| 函数                                                         | 注解                |
| ------------------------------------------------------------ | ------------------- |
| [(构造函数)](https://zh.cppreference.com/w/cpp/container/forward_list/forward_list) | 构造 `forward_list` |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/forward_list/~forward_list) | 析构 `forward_list` |
| [operator=](https://zh.cppreference.com/w/cpp/container/forward_list/operator%3D) | 赋值给容器          |
| [assign](https://zh.cppreference.com/w/cpp/container/forward_list/assign) | 将值赋给容器        |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/forward_list/get_allocator) | 返回相关的分配器    |



### 2）元素访问

| 函数                                                         | 注解           |
| ------------------------------------------------------------ | -------------- |
| [front](https://zh.cppreference.com/w/cpp/container/forward_list/front) | 访问第一个元素 |



### 3）迭代器

| 函数                                                         | 注解                         |
| ------------------------------------------------------------ | ---------------------------- |
| [before_begin<br />cbefore_begin](https://zh.cppreference.com/w/cpp/container/forward_list/before_begin) | 返回指向第一个元素之前迭代器 |
| [begin<br />cbegin](https://zh.cppreference.com/w/cpp/container/forward_list/begin) | 返回指向起始的迭代器         |
| [end<br />cend](https://zh.cppreference.com/w/cpp/container/forward_list/end) | 返回指向末尾的迭代器         |



### 4）容量

| 函数                                                         | 注解                   |
| ------------------------------------------------------------ | ---------------------- |
| [empty](https://zh.cppreference.com/w/cpp/container/forward_list/empty) | 检查容器是否为空       |
| [max_size](https://zh.cppreference.com/w/cpp/container/forward_list/max_size) | 返回可容纳的最大元素数 |



### 5）修改器

| 函数                                                         | 注解                       |
| ------------------------------------------------------------ | -------------------------- |
| [clear](https://zh.cppreference.com/w/cpp/container/forward_list/clear) | 清除内容                   |
| [insert_after](https://zh.cppreference.com/w/cpp/container/forward_list/insert_after) | 在某个元素后插入新元素     |
| [emplace_after](https://zh.cppreference.com/w/cpp/container/forward_list/emplace_after) | 在元素后原位构造元素       |
| [erase_after](https://zh.cppreference.com/w/cpp/container/forward_list/erase_after) | 擦除元素后的元素           |
| [push_front](https://zh.cppreference.com/w/cpp/container/forward_list/push_front) | 插入元素到容器起始         |
| [emplace_front](https://zh.cppreference.com/w/cpp/container/forward_list/emplace_front) | 在容器头部原位构造元素     |
| [pop_front](https://zh.cppreference.com/w/cpp/container/forward_list/pop_front) | 移除首元素                 |
| [resize](https://zh.cppreference.com/w/cpp/container/forward_list/resize) | 改变容器中可存储元素的个数 |
| [swap](https://zh.cppreference.com/w/cpp/container/forward_list/swap) | 交换内容                   |



### 6）操作

| 函数                                                         | 注解                           |
| ------------------------------------------------------------ | ------------------------------ |
| [merge](https://zh.cppreference.com/w/cpp/container/forward_list/merge) | 合并二个已排序列表             |
| [splice_after](https://zh.cppreference.com/w/cpp/container/forward_list/splice_after) | 从另一 `forward_list` 移动元素 |
| [remove<br />remove_if](https://zh.cppreference.com/w/cpp/container/forward_list/remove) | 移除满足特定标准的元素         |
| [reverse](https://zh.cppreference.com/w/cpp/container/forward_list/reverse) | 将该链表的所有元素的顺序反转   |
| [unique](https://zh.cppreference.com/w/cpp/container/forward_list/unique) | 删除连续的重复元素             |
| [sort](https://zh.cppreference.com/w/cpp/container/forward_list/sort) | 对元素进行排序                 |



## 4. 非成员函数

| 函数                                                         | 注解                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [operator==<br />operator!=<br />operator\<<br />operator\<=<br />operator\><br />operator>=](https://zh.cppreference.com/w/cpp/container/forward_list/operator_cmp) | 按照字典顺序比较 forward_list 中的值 |
| [std::swap](https://zh.cppreference.com/w/cpp/container/forward_list/swap2) | 特化 std::swap 算法                  |

