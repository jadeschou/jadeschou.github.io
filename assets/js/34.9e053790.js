(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{312:function(a,t,s){"use strict";s.r(t);var r=s(13),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"ajax-和-jsonp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-和-jsonp"}},[a._v("#")]),a._v(" ajax 和 jsonp ？")]),a._v(" "),t("p",[a._v("ajax 和 jsonp 的区别：\n相同点：都是请求一个 url\n不同点：ajax 的核心是通过 xmlHttpRequest 获取内容\njsonp 的核心则是动态添加 script 标签来调用服务器 提供的 js 脚本。")]),a._v(" "),t("h2",{attrs:{id:"ajax-执行流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-执行流程"}},[a._v("#")]),a._v(" ajax 执行流程？")]),a._v(" "),t("ol",[t("li",[a._v("创建 XMLHttpRequest 对象,也就是创建一个异步调用对象")]),a._v(" "),t("li",[a._v("创建一个新的 HTTP 请求,并指定该 HTTP 请求的方法、URL 及验证信息")]),a._v(" "),t("li",[a._v("设置响应 HTTP 请求状态变化的函数")]),a._v(" "),t("li",[a._v("发送 HTTP 请求")]),a._v(" "),t("li",[a._v("获取异步调用返回的数据")]),a._v(" "),t("li",[a._v("使用 JavaScript 和 DOM 实现局部刷新")])]),a._v(" "),t("h2",{attrs:{id:"xhr-对象-status-readystate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#xhr-对象-status-readystate"}},[a._v("#")]),a._v(" xhr 对象 status ? readystate?")]),a._v(" "),t("p",[a._v("status 是 XMLHttpRequest 对象的一个属性，表示响应的 HTTP 状态码。\nreadyState 是 XMLHttpRequest 对象的一个属性，用来标识当前 XMLHttpRequest 对象处于什么状态。")]),a._v(" "),t("h2",{attrs:{id:"ajax-是什么"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-是什么"}},[a._v("#")]),a._v(" ajax 是什么?")]),a._v(" "),t("p",[a._v("异步 javascript 和 XML，是指一种创建交互式网页应用的网页开发技术。通过后台与服务器进行少量数据交换，AJAX 可以使网页实现异步更新。这意味着可以在不重新加载整个网页的情况下，对网页的某部分进行更新。")]),a._v(" "),t("h2",{attrs:{id:"ajax-请求方式有几种-8-种"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-请求方式有几种-8-种"}},[a._v("#")]),a._v(" ajax 请求方式有几种（8 种）？")]),a._v(" "),t("p",[a._v("1）$.get(url,[data],[callback])\n2）$.getJSON(url,[data],[callback])\n3）$.post(url,[data],[callback],[type])\n4）$.ajax(opiton)\n5）$.getScript( url, [callback] )\n6）jquery 对象.load( url, [data], [callback] )\n7）serialize() 与 serializeArray()")]),a._v(" "),t("h2",{attrs:{id:"ajax-中-get-和-post-有什么区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-中-get-和-post-有什么区别"}},[a._v("#")]),a._v(" ajax 中 get 和 post 有什么区别?")]),a._v(" "),t("p",[a._v("get 和 post 都是数据提交的方式。\nget 的数据是通过网址问号后边拼接的字符串进行传递的。post 是通过一个 HTTP 包体进行传递数据的。\nget 的传输量是有限制的，post 是没有限制的。\nget 的安全性可能没有 post 高，所以我们一般用 get 来获取数据，post 一般用来修改数据。")]),a._v(" "),t("h2",{attrs:{id:"ajax-的缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ajax-的缺点"}},[a._v("#")]),a._v(" ajax 的缺点")]),a._v(" "),t("p",[a._v("1、ajax 不支持浏览器 back 按钮。\n2、安全问题 AJAX 暴露了与服务器交互的细节。\n3、对搜索引擎的支持比较弱。\n4、破坏了程序的异常机制。\n5、不容易调试")]),a._v(" "),t("h2",{attrs:{id:"如何确保-ajax-或连接不走缓存路径"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#如何确保-ajax-或连接不走缓存路径"}},[a._v("#")]),a._v(" 如何确保 ajax 或连接不走缓存路径")]),a._v(" "),t("p",[a._v("在 Ajax 中使用 Get 请求数据不会有页面缓存的问题，而使用 POST 请求可是有时候页面会缓存我们提交的信息，导致我们发送的异步请求不能正确的返回我们想要的数据")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("$.post(url,data ,ranNum:Math.random()} ,function(data){}）\n")])])]),t("p",[a._v("ranNum : 这个是防止缓存的核心，每次发起请求都会用 Math.random()方法生成一个随机的数字，这样子就会刷新 url 缓存")]),a._v(" "),t("h2",{attrs:{id:"jsonp-原理-缺点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jsonp-原理-缺点"}},[a._v("#")]),a._v(" jsonp 原理？ 缺点?")]),a._v(" "),t("p",[a._v("工作原理：使用 script 标签实现跨域访问，可在 url 中指定回调函数，获取 JSON 数据并在指定的回调函数中执行 jquery 实现 jsop。")]),a._v(" "),t("p",[a._v("缺点：只支持 GET 方式的 jsonp 实现，是一种脚本注入行为存在一定的安全隐患。如果返回的数据格式有问题或者返回失败了，并不会报错。")]),a._v(" "),t("h2",{attrs:{id:"除了-jsonp-还有什么跨域方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#除了-jsonp-还有什么跨域方式"}},[a._v("#")]),a._v(" 除了 jsonp 还有什么跨域方式")]),a._v(" "),t("p",[a._v("javascript 跨域有两种情况：\n1、基于同一父域的子域之间，如：http://a.c.com和http://b.c.com\n2、基于不同的父域之间，如：http://www.a.com和http://www.b.com\n3、端口的不同，如：http://www.a.com:8080和http://www.a.com:8088\n4、协议不同，如：http://www.a.com和https://www.a.com")]),a._v(" "),t("p",[a._v("对于情况 3 和 4，需要通过后台 proxy 来解决，具体方式如下：\na、在发起方的域下创建 proxy 程序\nb、发起方的 js 调用本域下的 proxy 程序\nc、proxy 将请求发送给接收方并获取相应数据\nd、proxy 将获得的数据返回给发起方的 js")]),a._v(" "),t("p",[a._v("代码和 ajax 调用一致，其实这种方式就是通过 ajax 进行调用的\n而情况 1 和 2 除了通过后台 proxy 这种方式外，还可以有多种办法来解决：\n1、document.domain+iframe（只能解决情况 1）：\na、在发起方页面和接收方页面设置 document.domain，并将值设为父域的主域名(window.location.hostname)\nb、在发起方页面创建一个隐藏的 iframe，iframe 的源是接收方页面\nc、根据浏览器的不同，通过 iframe.contentDocument || iframe.contentWindow.document 来获得接收方页面的内容\nd、通过获得的接收方页面的内容来与接收方进行交互\n这种方法有个缺点，就是当一个域被攻击时，另一个域会有安全漏洞出现。")]),a._v(" "),t("h2",{attrs:{id:"readystate-0-4"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#readystate-0-4"}},[a._v("#")]),a._v(" readystate 0~4")]),a._v(" "),t("p",[a._v("0：未初始化状态：此时，已经创建了一个 XMLHttpRequest 对象\n1： 准备发送状态：此时，已经调用了 XMLHttpRequest 对象的 open 方法，并且 XMLHttpRequest 对象已经准备好将一个请求发送到服务器端\n2：已经发送状态：此时，已经通过 send 方法把一个请求发送到服务器端，但是还没有收到一个响应\n3：正在接收状态：此时，已经接收到 HTTP 响应头部信息，但是消息体部分还没有完全接收到\n4：完成响应状态：此时，已经完成了 HTTP 响应的接收 46.说出几个 http 协议状态码?")]),a._v(" "),t("h2",{attrs:{id:"_200-201-302-304-400-404-500"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_200-201-302-304-400-404-500"}},[a._v("#")]),a._v(" 200, 201, 302, 304, 400, 404, 500")]),a._v(" "),t("p",[a._v("200：请求成功\n201：请求成功并且服务器创建了新的资源\n302：服务器目前从不同位置的网页响应请求，但请求者应继续使用原有位置来响应以后的请求。\n304：自从上次请求后，请求的网页未修改过。服务器返回此响应时，不会返回网页内容。\n400：服务器不理解请求的语法。\n404：请求的资源（网页等）不存在\n500： 内部服务器错误")]),a._v(" "),t("h2",{attrs:{id:"数据持久化技术-ajax-简述-ajax-流程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数据持久化技术-ajax-简述-ajax-流程"}},[a._v("#")]),a._v(" 数据持久化技术(ajax)?简述 ajax 流程")]),a._v(" "),t("p",[a._v("1)客户端产生 js 的事件 2)创建 XMLHttpRequest 对象 3)对 XMLHttpRequest 进行配置 4)通过 AJAX 引擎发送异步请求 5)服务器端接收请求并且处理请求，返回 html 或者 xml 内容\n6)XML 调用一个 callback()处理响应回来的内容 7)页面局部刷新")])])}),[],!1,null,null,null);t.default=e.exports}}]);