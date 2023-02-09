# 一. 简介

## 1. 使用准备

```c++
#include <string>       // string类头文件
using std::string;      // string类型声明符，字符为char类型
#include <cctype>       // char类型字符处理函数
using std::wstring;     // wstring类型，字符为wchar_t类型
#include <cwctype>      // wchar_t类型字符处理函数
using std::u16string;   // u16string类型，字符为char16_t类型
using std::u32string;   // u32string类型，字符为char32_t类型
// 各个非成员函数
using std::swap;
using std::getline;
using std::stoi;
using std::stol;
using std::stoll;
using std::stoul;
using std::stoull;
using std::stof;
using std::stod;
using std::stold;
using std::to_string;
using std::to_wstring;
```

> **注意**：`basic_string`也是类模板，需要提供实例化参数，但是与其他容器类型不同的是，`basic_string`可实例化的类型是固定的，因为字符的类型是固定的，所以通常是选择合适的字符集对应的已有实例化类型来处理字符串，而不是从`basic_string`开始创建实例化类型。



## 2. 性能

- 访问：支持快速随机访问，复杂度为常数 $O(1)$
- 插入或删除元素：在末尾插入和删除都很方便，与`vector`容器类似



# 二. basic_string类

## 1. 类定义

```c++
template<
	class CharT,
	class Traits = std::char_traits<CharT>,
	class Allocator = std::allocator<CharT>
> class basic_string;
```

**模板形参**：

- `charT`：字符类型
- `Traits`：指定字符类型上操作的特性类
- `Allocator`：用于分配内部存储的分配器类型

**已定义类**：

| 类型             | 定义                          |
| ---------------- | ----------------------------- |
| `std::string`    | `std::basic_string<char>`     |
| `std:wstring`    | `std::basic_string<wchar_t>`  |
| `std::u16string` | `std::basic_string<char16_t>` |
| `std::u32string` | `std::basic_string<char32_t>` |



## 2. 成员类型

| 成员类型                 | 定义                                                         |
| ------------------------ | ------------------------------------------------------------ |
| `traits_type`            | 实例化时提供的特性类`Traits`                                 |
| `value_type`             | 实例化时提供的字符类型`charT`                                |
| `allocator_type`         | 实例化时提供的分配器类型`Allocator`                          |
| `size_type`              | 用于标识字符串长度的类型：`std::allocator_traits<Allocator>::size_type` |
| `difference_type`        | 用于标识字符串元素指针的差值类型：`std::allocator_traits<Allocator>::difference_type` |
| `reference`              | 字符串元素的引用类型：`value_type&`                          |
| `const_reference`        | 字符串元素的常量引用类型：`const value_type&`                |
| `pointer`                | 指向字符串元素的指针类型                                     |
| `const_pointer`          | 指向常量字符串元素的指针类型                                 |
| `iterator`               | 指向`value_type`的迭代器                                     |
| `const_iterator`         | 指向`value_type`的常量迭代器                                 |
| `reverse_iterator`       | 指向`value_type`的反向迭代器                                 |
| `const_reverse_iterator` | 指向`value_type`的常量反向迭代器                             |



## 3. 成员函数

### 1）基础函数

| 函数                                                         | 注解                                 |
| ------------------------------------------------------------ | ------------------------------------ |
| [(构造函数)](https://zh.cppreference.com/w/cpp/string/basic_string/basic_string) | 构造 `basic_string`                  |
| (析构函数)                                                   | 销毁字符串，若使用内部存储则解分配它 |
| [operator=](https://zh.cppreference.com/w/cpp/string/basic_string/operator%3D) | 为字符串赋值                         |
| [assign](https://zh.cppreference.com/w/cpp/string/basic_string/assign) | 赋值字符给字符串                     |
| [get_allocator](https://zh.cppreference.com/w/cpp/string/basic_string/get_allocator) | 返回关联的分配器                     |



### 2）元素访问

| 函数                                                         | 注解                                  |
| ------------------------------------------------------------ | ------------------------------------- |
| [at](https://zh.cppreference.com/w/cpp/string/basic_string/at) | 访问指定字符，有边界检查              |
| [operator[]](https://zh.cppreference.com/w/cpp/string/basic_string/operator_at) | 访问指定字符                          |
| [front](https://zh.cppreference.com/w/cpp/string/basic_string/front) | 访问首字符                            |
| [back](https://zh.cppreference.com/w/cpp/string/basic_string/back) | 访问最后的字符                        |
| [data](https://zh.cppreference.com/w/cpp/string/basic_string/data) | 返回指向字符串首字符的指针            |
| [c_str](https://zh.cppreference.com/w/cpp/string/basic_string/c_str) | 返回字符串的不可修改的 C 字符数组版本 |



### 3）迭代器

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [begin<br />cbegin](https://zh.cppreference.com/w/cpp/string/basic_string/begin) | 返回指向起始的迭代器     |
| [end<br />cend](https://zh.cppreference.com/w/cpp/string/basic_string/end) | 返回指向末尾的迭代器     |
| [rbegin<br />crbegin](https://zh.cppreference.com/w/cpp/string/basic_string/rbegin) | 返回指向起始的逆向迭代器 |
| [rend<br />crend](https://zh.cppreference.com/w/cpp/string/basic_string/rend) | 返回指向末尾的逆向迭代器 |



### 4）容量

| 函数                                                         | 注解                                       |
| ------------------------------------------------------------ | ------------------------------------------ |
| [empty](https://zh.cppreference.com/w/cpp/string/basic_string/empty) | 检查字符串是否为空                         |
| [size<br />length](https://zh.cppreference.com/w/cpp/string/basic_string/size) | 返回字符数                                 |
| [max_size](https://zh.cppreference.com/w/cpp/string/basic_string/max_size) | 返回字符数的最大值                         |
| [reserve](https://zh.cppreference.com/w/cpp/string/basic_string/reserve) | 保留存储                                   |
| [capacity](https://zh.cppreference.com/w/cpp/string/basic_string/capacity) | 返回当前对象分配的存储空间能保存的字符数量 |
| [shrink_to_fit](https://zh.cppreference.com/w/cpp/string/basic_string/shrink_to_fit) | 通过释放不使用内存减少内存使用             |



### 5）操作

| 函数                                                         | 注解                 |
| ------------------------------------------------------------ | -------------------- |
| [clear](https://zh.cppreference.com/w/cpp/string/basic_string/clear) | 清除内容             |
| [insert](https://zh.cppreference.com/w/cpp/string/basic_string/insert) | 插入字符             |
| [erase](https://zh.cppreference.com/w/cpp/string/basic_string/erase) | 移除字符             |
| [push_back](https://zh.cppreference.com/w/cpp/string/basic_string/push_back) | 后附字符到结尾       |
| [pop_back](https://zh.cppreference.com/w/cpp/string/basic_string/pop_back) | 移除末尾字符         |
| [append](https://zh.cppreference.com/w/cpp/string/basic_string/append) | 后附字符到结尾       |
| [operator+=](https://zh.cppreference.com/w/cpp/string/basic_string/operator%2B%3D) | 后附字符到结尾       |
| [compare](https://zh.cppreference.com/w/cpp/string/basic_string/compare) | 比较二个字符串       |
| [replace](https://zh.cppreference.com/w/cpp/string/basic_string/replace) | 替换字符串的指定部分 |
| [substr](https://zh.cppreference.com/w/cpp/string/basic_string/substr) | 返回子串             |
| [copy](https://zh.cppreference.com/w/cpp/string/basic_string/copy) | 复制字符             |
| [resize](https://zh.cppreference.com/w/cpp/string/basic_string/resize) | 更改存储的字符数     |
| [swap](https://zh.cppreference.com/w/cpp/string/basic_string/swap) | 交换内容             |



### 6）查找

| 函数                                                         | 注解                   |
| ------------------------------------------------------------ | ---------------------- |
| [find](https://zh.cppreference.com/w/cpp/string/basic_string/find) | 于字符串中寻找字符     |
| [rfind](https://zh.cppreference.com/w/cpp/string/basic_string/rfind) | 寻找子串的最后一次出现 |
| [find_first_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_first_of) | 寻找字符的首次出现     |
| [find_first_not_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_first_not_of) | 寻找字符的首次缺失     |
| [find_last_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_last_of) | 寻找字符的最后一次出现 |
| [find_last_not_of](https://zh.cppreference.com/w/cpp/string/basic_string/find_last_not_of) | 寻找字符的最后一次缺失 |



### 7）常量

| 函数                                                         | 注解                     |
| ------------------------------------------------------------ | ------------------------ |
| [npos](https://zh.cppreference.com/w/cpp/string/basic_string/npos) | 特殊值。准确含义依赖语境 |



## 4. 非成员函数

### 1）基本函数

| 函数                                                         | 注解                                   |
| ------------------------------------------------------------ | -------------------------------------- |
| [operator+](https://zh.cppreference.com/w/cpp/string/basic_string/operator%2B) | 连接两个字符串或者一个字符串和一个字符 |
| [operator==<br />operator!=<br />operator\<<br />operator<=<br />operator\><br />operator\>=](https://zh.cppreference.com/w/cpp/string/basic_string/operator_cmp) | 以字典序比较两个字符串                 |
| [std::swap](https://zh.cppreference.com/w/cpp/string/basic_string/swap2) | 特化 std::swap 算法                    |



### 2）输入/输出

| 函数                                                         | 注解                      |
| ------------------------------------------------------------ | ------------------------- |
| [operator\<\<<br />operator\>\>](https://zh.cppreference.com/w/cpp/string/basic_string/operator_ltltgtgt) | 执行字符串的流输入与输出  |
| [getline](https://zh.cppreference.com/w/cpp/string/basic_string/getline) | 从 I/O 流读取数据到字符串 |



### 3）数值转换

| 函数                                                         | 注解                         |
| ------------------------------------------------------------ | ---------------------------- |
| [stoi<br />stol<br />stoll](https://zh.cppreference.com/w/cpp/string/basic_string/stol) | 转换字符串为有符号整数       |
| [stoul<br />stoull](https://zh.cppreference.com/w/cpp/string/basic_string/stoul) | 转换字符串为无符号整数       |
| [stof<br />stod<br />stold](https://zh.cppreference.com/w/cpp/string/basic_string/stof) | 转换字符串为浮点值           |
| [to_string](https://zh.cppreference.com/w/cpp/string/basic_string/to_string) | 转换整数或浮点值为 `string`  |
| [to_wstring](https://zh.cppreference.com/w/cpp/string/basic_string/to_wstring) | 转换整数或浮点值为 `wstring` |



# 三. 辅助类

| 类                                                           | 注解              |
| ------------------------------------------------------------ | ----------------- |
| [std::hash](https://zh.cppreference.com/w/cpp/string/basic_string/hash) | string 的散列支持 |

