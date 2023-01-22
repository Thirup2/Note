# 一. 简介

**HTTP** 协议即**超文本传输协议**（HyperText Transfer Protocol, HTTP），主要应用于 Web 应用中。

HTTP 由两个程序实现：

1. 客户程序
2. 服务器程序

**Web 页面**（Web page）是由对象组成的。一个**对象**（object）只是一个文件，如一个 HTML 文件、一个 JPEG 图形、一个 Java 小程序或一个视频片段这样的文件，且它们可通过一个 URL 地址寻址。**Web 浏览器**（Web browser）实现了 HTTP 的客户端，**Web 服务器**（Web server）实现了 HTTP 的服务器端，它用于存储 Web 对象，每个对象由 URL 寻址。

HTTP 定义了 Web 客户向 Web 服务器请求 Web 页面的方式，以及服务器向客户传送 Web 页面的方式。当用户请求一个 Web 页面时，浏览器向服务器发出对该页面中所包含对象的 HTTP 请求报文，服务器接收到请求并用包含这些对象的 HTTP 响应报文进行响应。