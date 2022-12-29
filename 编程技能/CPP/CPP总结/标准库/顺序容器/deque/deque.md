# 一. 简介

## 1. 使用准备

```c++
#include <deque>
using std::deque;
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

