# 一. 简介

一个`unique_ptr` “拥有” 它所指向的对象。与`shared_ptr`不同，某个时刻只能有一个`unique_ptr`指向一个给定对象。当`unique_ptr`被销毁时，它所指向的对象也被销毁。

使用一个`unique_ptr`时，它会实现以下两点：

- 构造时传入托管对象的指针，析构时`delete`对象
- 禁用赋值函数

实际上`unique_ptr`类比`shared_ptr`好理解得多。它就可以看做一个和被托管对象指针相同类型的指针，但是它禁用赋值函数，也就是说我们不能拷贝或赋值`unique_ptr`，每一时刻只能有一个`unique_ptr`指向被托管对象，当`unique_ptr`被析构时，被托管对象的内存被释放。

`unique_ptr`的这两个特性保证了它和`shared_ptr`一样的对内存的正确管理，但是，在使用时，我们仍然需要注意和`shared_ptr`相同的一点：**如果将一个普通指针指向的对象交给了 unique_ptr 托管，那么就不要再使用普通指针管理这块内存**。例如，我们的代码仍然允许将两个相同的指针用来初始化两个不同的`unique_ptr`，但是这样就违背了`unique_ptr`的意图，并且在最后销毁这些`unique_ptr`的时候，会导致对一块内存的多次`delete`，将产生错误。



# 二. 操作

| 操作                                                  | 描述                                                         |
| ----------------------------------------------------- | ------------------------------------------------------------ |
| `unique_ptr<T> u1`<br />`unique_ptr<T, D> u2`         | 空`unique_ptr`，可以指向类型为`T`的对象。<br />`u1`会使用`delete`来释放它的指针；<br />`u2`会使用一个类型为`D`的可调用对象来释放它的指针 |
| `unique_ptr<T, D> u(d)`                               | 空`unique_ptr`，指向类型为`T`的对象，用类型为`D`的对象`d`代替`delete` |
| `p`                                                   | 将`p`用作一个条件判断，若`p`指向一个对象，则为`true`         |
| `*p`                                                  | 解引用`p`，获得它指向的对象                                  |
| `p->mem`                                              | 等价于`(*p).mem`                                             |
| `p.get()`                                             | 返回`p`中保存的指针。要小心使用，若智能指针释放了其对象，返回的指针所指向的对象也就消失了 |
| `swap(p, q)`<br />`p.swap(q)`                         | 交换`p`和`q`中的指针                                         |
| `u = nullptr`                                         | 释放`u`指向的对象，将`u`置为空                               |
| `u.release()`                                         | `u`放弃对指针的控制权，返回指针，并将 `u`置为空              |
| `u.reset()`<br />`u.reset(q)`<br />`u.reset(nullptr)` | 释放`u`指向的对象<br />如果提供了内置指针`q`，令`u`指向这个对象；否则将`u`置为空 |

## 1. 构造

与`shared_ptr`不同，没有类似`make_shared`的标准库函数返回一个`unique_ptr`。当我们定义一个`unique_ptr`时，需要将其绑定到一个`new`返回的指针上。类似`shared_ptr`，初始化`unique_ptr`必须采用直接初始化形式：

```c++
unique_ptr<double> p1;
unique_ptr<int> p2(new int(42));
```

由于一个`unique_ptr`拥有它指向的对象，因此`unique_ptr`**不支持普通的拷贝或赋值操作**：

```c++
unique_ptr<string> p1(new string("Stegosaurus"));
unique_ptr<string> p2(p1);			// 错误：unique_ptr 不支持拷贝
unique_ptr<string> p3;
p3 = p2;					// 错误：unique_ptr 不支持赋值
```



## 2. 改变 unique_ptr

虽然我们不能拷贝或赋值`unique_ptr`，但可以通过调用`release`或`reset`将指针的所有权从一个（非`const`）`unique_ptr`转移给另一个`unique_ptr`：

```c++
unique_ptr<string> p2(p1.release());
```

注意`release`操作会将`p1`置为空，但和`p1 = nullptr`、`p1.reset()`和`p1.reset(nullptr)`不同，它不会释放被托管的指针，而是放弃对该指针的控制权，即在此操作后，我们又只能用普通指针的方式来管理这块内存，也就是说，如果我们不用指针接受`p1.release()`的返回值，且没有其他方法访问这块内存的话，那么这块内存将永远得不到释放。当然，我们也可以像上面的代码一样，直接将`p1.release()`用来初始化另一个`unique_ptr`或`shared_ptr`，继续对其进行智能管理。



## 3. 拷贝和赋值的例外

不能拷贝和赋值`unique_ptr`的规则有一个例外：**我们可以拷贝或赋值一个将要被销毁的 unique_ptr**。

也就是说，我们可以传递一个`unique_ptr`参数以及返回一个`unique_ptr`，因为它们都将在传递或返回操作完成后被销毁。



## 4. 兼容 auto_ptr

`auto_ptr`是标准库中`unique_ptr`的前身，它具有`unique_ptr`的部分特性，但不是全部。特别是，我们不能再容器中保存`auto_ptr`，也不能从函数中返回`auto_ptr`。

虽然`auto_ptr`仍是标准库的一部分，但编写程序时应该使用`unique_ptr`



## 5. 向 unique_ptr 传递删除器

类似`shared_ptr`，`unique_ptr`默认情况下使用`delete`释放它指向的对象。与`shared_ptr`一样，我们可以重载一个`unique_ptr`中默认的删除器。

重载一个`unique_ptr`中的删除器会影响到`unique_ptr`类型以及如何构造（或`reset`）该类型的对象。与重载关联容器的比较操作类似，我们必须在尖括号中`unique_ptr`指向类型之后提供删除器类型。在创建或`reset`一个这种`unique_ptr`类型的对象时，必须提供一个指定类型的可调用对象（删除器）：

```c++
unique_ptr<objT, delT> p(new objT, fcn);
```

