## 浏览器兼容性

- 插件使用注意加载顺序，比如will-change应在autoprefixer前加载，这样就可以完整的添加浏览器前缀。
- IE8不支持rgba()、opacity
- IE8仅支持一个冒号: ,不支持:: 伪元素
- IE8不支持rem

## 压缩和优化css
- postcss-import（处理import）
- css-mqpacker（处理媒体查询）
- cssnano（压缩和优化） 可配置calc小数精度，是否优化字体权重等。。

## Precss
- 类似Sass之类的预处理器，提供几乎所有预处理器用户期望的功能
- 嵌套 类比Sass
- 变量 $main-color: red; （分号不可少！！）
- 条件 @if @else
- 循环 @for; @each;
- 混合宏 @define-mixin; @mixin
- 扩展 @define-extend name; @extend name;



## 实用插件列表
- precss 相当于很多插件的结合，可以使用sass语法，条件判断　循环　变量等, 以及import 
- cssnano 压缩和美化，删除注释
- cssnext css未来的语法

- postcss-crip 定义速记方式
```
.crip-demo{
    w:100px;
    pos:absolute;
    p:0;
    m:0;
}
```
=> 
```
.crip-demo{
    width:100px;
    position:absolute;
    padding:0;
    margin:0;
}
```

- postcss-alias 自定义属性缩写，目的与postcss-crip类似

```
@alias{
    my-width: width;
    my-position: position;
    my-border: border;
}
.alias-test{
    my-width: 100px;
    my-position: absolute;
    my-border: 1px solid red;
}
```

=> 
```
.alias-test{
    width: 100px;
    position: absolute;
    border: 1px solid red;
}
```