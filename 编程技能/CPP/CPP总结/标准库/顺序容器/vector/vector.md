# 一. 简介

## 1. 使用准备

```c++
#include <vector>       // vector类头文件
using std::vector;      // vector类型说明符
using std::swap;        // swap函数
```



## 2. 性能

- 随机访问：常数$O(1)$
- 在末尾插入或移除元素：均摊常数$O(1)$
- 插入或移除元素：与到 vector 结尾的距离成线性$O(n)$



# 二. vector类

## 1. 类定义

```c++
template<
	class T,
	class Allocator = std::allocator<T>
> class vector;
```

**模板形参**：

- `T`：实例化的元素类型
- `Allocator`：用于获取/释放内存及构造/析构内存中元素的分配器。



## 2. 成员类型

| 成员类型                 | 定义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `value_type`             | `T`（模板形参提供的类型）：表征实例化后的`vector`元素类型    |
| `allocator_type`         | `Allocator_type`（模板形参提供的分配器类型）                 |
| `size_type`              | 无符号整数类型（通常是`std::size_t`）：表征元素个数          |
| `difference_type`        | 有符号整数类型（通常是`std::ptrdiff_t`）：指向`vector<T>`类型指针或迭代器的差值类型 |
| `reference`              | `value_type&`：元素的引用类型                                |
| `const_reference`        | `const value_type&`：元素的常量引用类型                      |
| `pointer`                | `std::allocator_traits<Allocator>::pointer`：指向`value_type`的指针类型 |
| `const_pointer`          | `std::allocator_traits<Allocator>::const_pointer`：指向`const value_type`的指针类型 |
| `iterator`               | 指向`value_type`的迭代器类型                                 |
| `const_iterator`         | 指向`const value_type`的迭代器类型                           |
| `reverse_iterator`       | `std::reverse_iterator<iterator>`                            |
| `const_reverse_iterator` | `std::reverse_iterator<const_iterator>`                      |



## 3. 成员函数

### 1）基础函数

| 函数                                                         | 注解             |
| ------------------------------------------------------------ | ---------------- |
| [(构造函数)](https://zh.cppreference.com/w/cpp/container/vector/vector) | 构造`vector`     |
| [(析构函数)](https://zh.cppreference.com/w/cpp/container/vector/%7Evector) | 析构`vector`     |
| [operator=](https://zh.cppreference.com/w/cpp/container/vector/operator%3D) | 赋值给容器       |
| [assign](https://zh.cppreference.com/w/cpp/container/vector/assign) | 将值赋给容器     |
| [get_allocator](https://zh.cppreference.com/w/cpp/container/vector/get_allocator) | 返回相关的分配器 |



### 2）元素访问

| 函数                                                         | 注解                             |
| ------------------------------------------------------------ | -------------------------------- |
| [at](https://zh.cppreference.com/w/cpp/container/vector/at)  | 访问指定的元素，同时进行越界检查 |
| [operator[]](https://zh.cppreference.com/w/cpp/container/vector/operator_at) | 访问指定的元素                   |
| [front](https://zh.cppreference.com/w/cpp/container/vector/front) | 访问第一个元素                   |
| [back](https://zh.cppreference.com/w/cpp/container/vector/back) | 访问最后一个元素                 |
| [data](https://zh.cppreference.com/w/cpp/container/vector/data) | 直接访问底层数组                 |



### 3）迭代器

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [begin、cbegin](https://zh.cppreference.com/w/cpp/container/vector/begin) | 返回指向起始的迭代器     |
| [end、cend](https://zh.cppreference.com/w/cpp/container/vector/end) | 返回指向末尾的迭代器     |
| [rbegin、crbegin](https://zh.cppreference.com/w/cpp/container/vector/rbegin) | 返回指向起始的逆向迭代器 |
| [rend、crend](https://zh.cppreference.com/w/cpp/container/vector/rend) | 返回指向末尾的逆向迭代器 |



### 4）容量

| 函数                                                         | 注解                               |
| ------------------------------------------------------------ | ---------------------------------- |
| [empty](https://zh.cppreference.com/w/cpp/container/vector/empty) | 检查容器是否为空                   |
| [size](https://zh.cppreference.com/w/cpp/container/vector/size) | 返回容纳的元素数                   |
| [max_size](https://zh.cppreference.com/w/cpp/container/vector/max_size) | 返回可容纳的最大元素数             |
| [reserve](https://zh.cppreference.com/w/cpp/container/vector/reserve) | 预留存储空间                       |
| [capacity](https://zh.cppreference.com/w/cpp/container/vector/capacity) | 返回当前存储空间能够容纳的元素数   |
| [shrink_to_fit](https://zh.cppreference.com/w/cpp/container/vector/shrink_to_fit) | 通过释放未使用的内存减少内存的使用 |



### 5）修改器

| 函数                                                         | 注解                       |
| ------------------------------------------------------------ | -------------------------- |
| [clear](https://zh.cppreference.com/w/cpp/container/vector/clear) | 清除内容                   |
| [insert](https://zh.cppreference.com/w/cpp/container/vector/insert) | 插入元素                   |
| [emplace](https://zh.cppreference.com/w/cpp/container/vector/emplace) | 原位构造元素               |
| [erase](https://zh.cppreference.com/w/cpp/container/vector/erase) | 擦除元素                   |
| [push_back](https://zh.cppreference.com/w/cpp/container/vector/push_back) | 将元素添加到容器末尾       |
| [emplace_back](https://zh.cppreference.com/w/cpp/container/vector/emplace_back) | 在容器末尾就地构造元素     |
| [pop_back](https://zh.cppreference.com/w/cpp/container/vector/pop_back) | 移除末元素                 |
| [resize](https://zh.cppreference.com/w/cpp/container/vector/resize) | 改变容器中可存储元素的个数 |
| [swap](https://zh.cppreference.com/w/cpp/container/vector/swap) | 交换内容                   |



## 4. 非成员函数

| 函数                                                         | 注解                           |
| ------------------------------------------------------------ | ------------------------------ |
| [operator==<br />operator!=<br />operator\<<br />operator\<=<br />operator\><br />operator\>=](https://zh.cppreference.com/w/cpp/container/vector/operator_cmp) | 按照字典顺序比较 vector 中的值 |
| [std::swap](https://zh.cppreference.com/w/cpp/container/vector/swap2) | 特化`std::swap`算法            |
