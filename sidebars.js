/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // // 编程语言
  // C_Language: [{
  //   type: 'autogenerated',
  //   dirName: '计算机基础/编程语言/C_Language',
  // }],
  CPP_Language: [{
    type: 'autogenerated',
    dirName: '计算机基础/编程语言/C++',
  }],

  // 数据结构与算法
  DSA_in_C: [{
    type: 'autogenerated',
    dirName: '计算机基础/数据结构与算法/DSA-C语言实现',
  }],

  // Web应用
  Web_Basic: [{
    type: 'autogenerated',
    dirName: 'Web应用开发/Web基础',
  }],
};

module.exports = sidebars;
