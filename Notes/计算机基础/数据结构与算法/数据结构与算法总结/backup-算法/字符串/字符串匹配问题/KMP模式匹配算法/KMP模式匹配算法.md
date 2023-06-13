# 一. 问题分析

在朴素的模式匹配算法中，我们是一个一个字符进行比较的，但是很显然，这个方法在一些情况下会浪费很多时间。

比如待匹配字符串中每一个字符两两互不相同，但在匹配的时候只有最后一个与主串不匹配，根据实际情况即可判断待匹配字符串应该可以直接把第一个字符串和主串中上一次最后一个不匹配的字符处对齐，然后开始比较，然而朴素的模式匹配算法并非如此。

基于此，我们再来分析KMP算法的原理。

对于待匹配字符串中所有字符都两两互不相同的情况，这是最简单的情况，每一次比较到不匹配位置时，直接将待匹配字符串的第一个字符移动到该位置即可。

而对于待匹配字符串中有一部分子串相同的情况，则需要根据情况考虑。若比较到相同部分之前在某字符处不匹配，则与上一种情况相同；若比较到相同部分之后在某处匹配不匹配，那么应该将待匹配字符串的前面的相同部分移动到主串中的第二个相同部分处，且这一部分相同字符不用再比较。

总的来说，我们可以根据已比较的待匹配字符串的字符个数来决定下一次待匹配字符串相对于主串的位置和子串从第几个字符开始匹配，而这两个位置取决于待匹配字符串的前后缀的相似度，也就是说，我们在需要查找字符串前，先对要查找的字符串做一个分析，这样可以大大减少我们查找的难度，提高查找的速度。我们用一个数组保存下一次应该跳转的位置信息，下标为不匹配字符在待匹配字符串中的位置，值为下一次开始匹配的位置，其函数定义如下：
$$
next[j]=\begin{cases}
0,&当\ j=1\ 时\\
Max\{k|1<k<j,\ 且'P_1\dots P_{k-1}'='P_{j-k+1}\dots P_{j-1}'\},&当此集合不为空时\\
1,&其他情况
\end{cases}
$$


# 二. 代码描述

- 推导`next`数组

  ```c
  void get_next(CSTRING string, size_char *next)
  {
      size_char i, k;
      i = 1;
      k = 0;
      next[1] = 0;
      while (i < string[0]) {
          if (k == 0 || string[i] == string[k]) {
              ++i;
              ++k;
              next[i] = k;
          } else {
              k = next[k];
          }
      }
  }
  ```

- 字符串匹配

  ```c
  size_char Index(CSTRING string, CSTRING substring, size_char pos)
  {
      if (StringEmpty(substring)) {
          return -1;
      }
      size_char i = pos;
      size_char j = 1;
      size_char next[MAXSIZE];
      get_next(substring, next);
      while (i <= string[0] && j <= substring[0]) {
          if (j == 0 || string[i] == substring[j]) {
              ++i;
              ++j;
          } else {
              j = next[j];
          }
      }
      if (j > substring[0]) {
          return i - substring[0];
      } else {
          return -2;
      }
  }
  ```

