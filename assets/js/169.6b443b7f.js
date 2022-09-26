(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{455:function(s,t,a){"use strict";a.r(t);var n=a(13),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"基本使用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本使用"}},[s._v("#")]),s._v(" 基本使用")]),s._v(" "),t("p",[s._v("Webpack 是一个"),t("strong",[s._v("静态资源打包工具")]),s._v("。")]),s._v(" "),t("p",[s._v("它会以一个或多个文件作为打包的入口，将我们整个项目所有文件编译组合成一个或多个文件输出出去。")]),s._v(" "),t("p",[s._v("输出的文件就是编译好的文件，就可以在浏览器段运行了。")]),s._v(" "),t("p",[s._v("我们将 "),t("code",[s._v("Webpack")]),s._v(" 输出的文件叫做 "),t("code",[s._v("bundle。")])]),s._v(" "),t("h2",{attrs:{id:"功能介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[s._v("#")]),s._v(" 功能介绍")]),s._v(" "),t("p",[s._v("Webpack 本身功能是有限的:")]),s._v(" "),t("ul",[t("li",[s._v("开发模式：仅能编译 JS 中的 "),t("code",[s._v("ES Module")]),s._v(" 语法")]),s._v(" "),t("li",[s._v("生产模式：能编译 JS 中的 "),t("code",[s._v("ES Module")]),s._v(" 语法，还能压缩 JS 代码 ## 开始使用")])]),s._v(" "),t("h3",{attrs:{id:"_1-资源目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-资源目录"}},[s._v("#")]),s._v(" 1. 资源目录")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("webpack_code ## 项目根目录（所有指令必须在这个目录运行）\n└── src ## 项目源码目录\n├── js ## js 文件目录\n│ ├── count.js\n│ └── sum.js\n└── main.js ## 项目主文件\n")])])]),t("h3",{attrs:{id:"_2-创建文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建文件"}},[s._v("#")]),s._v(" 2. 创建文件")]),s._v(" "),t("ul",[t("li",[s._v("count.js")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("x"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" y")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" x "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" y"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("sum.js")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("...")]),s._v("args")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" args"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("reduce")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("p"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" c")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" c"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])])]),t("ul",[t("li",[s._v("main.js")])]),s._v(" "),t("div",{staticClass:"language-js extra-class"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" count "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./js/count"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" sum "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"./js/sum"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\nconsole"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("log")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sum")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("4")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),t("h3",{attrs:{id:"_3-下载依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-下载依赖"}},[s._v("#")]),s._v(" 3. 下载依赖")]),s._v(" "),t("p",[s._v("打开终端，来到项目根目录。运行以下指令：")]),s._v(" "),t("p",[s._v("初始化 "),t("code",[s._v("package.json")])]),s._v(" "),t("p",[t("code",[s._v("npm init -y")]),s._v("\n此时会生成一个基础的 package.json 文件。")]),s._v(" "),t("p",[s._v("需要注意的是 package.json 中 name 字段不能叫做 webpack, 否则下一步会报错")]),s._v(" "),t("p",[s._v("下载依赖")]),s._v(" "),t("p",[t("code",[s._v("npm i webpack webpack-cli -D")])]),s._v(" "),t("h3",{attrs:{id:"_4-启用-webpack"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-启用-webpack"}},[s._v("#")]),s._v(" 4. 启用 Webpack")]),s._v(" "),t("p",[s._v("开发模式")]),s._v(" "),t("p",[t("code",[s._v("npx webpack ./src/main.js --mode=development")]),s._v("\n生产模式")]),s._v(" "),t("p",[t("code",[s._v("npx webpack ./src/main.js --mode=production")]),s._v("\nnpx webpack: 是用来运行本地安装 Webpack 包的。")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("./src/main.js: 指定 Webpack 从 main.js 文件开始打包，不但会打包 main.js，还会将其依赖也一起打包进来。")])]),s._v(" "),t("li",[t("p",[s._v("--mode=xxx：指定模式（环境）。")])])]),s._v(" "),t("h3",{attrs:{id:"_5-观察输出文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-观察输出文件"}},[s._v("#")]),s._v(" 5. 观察输出文件")]),s._v(" "),t("p",[s._v("默认 "),t("strong",[s._v("Webpack")]),s._v(" 会将文件打包输出到 dist 目录下，我们查看 dist 目录下文件情况就好了")]),s._v(" "),t("h2",{attrs:{id:"小结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#小结"}},[s._v("#")]),s._v(" 小结")]),s._v(" "),t("p",[t("strong",[s._v("Webpack")]),s._v(" 本身功能比较少，只能处理 js 资源，一旦遇到 css 等其他资源就会报错。")]),s._v(" "),t("p",[s._v("所以我们学习 Webpack，就是主要学习如何处理其他资源。")])])}),[],!1,null,null,null);t.default=e.exports}}]);