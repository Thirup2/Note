import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '面向基础',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        本网站包含了所有计算机基础相关的内容，从编程语言开始，到数据结构、计算机系统、计算机网络以及数据库、编译原理等内容都可以在本站找到。
      </>
    ),
  },
  {
    title: '知识体系',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        本站每一个笔记都是一整个知识体系，并非仅仅只是对某些特定内容的讨论。所以你可以将本站当作一个包含许多知识手册的网站来进行浏览。
      </>
    ),
  },
  {
    title: '应用开发',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        除了大部分都是面向基础的笔记之外，还有一部分是各类应用程序开发相关的笔记，如 Web 前端应用、Linux 应用、Windows 应用等。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
