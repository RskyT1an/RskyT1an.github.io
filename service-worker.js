if(!self.define){let e,i={};const a=(a,r)=>(a=new URL(a+".js",r).href,i[a]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=i,document.head.appendChild(e)}else e=a,importScripts(a),i()})).then((()=>{let e=i[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(r,d)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(i[o])return;let c={};const b=e=>a(e,o),n={module:{uri:o},exports:c,require:b};i[o]=Promise.all(r.map((e=>n[e]||b(e)))).then((e=>(d(...e),c)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/03/06/hello-world/index.html",revision:"da8eae85d39d743b4b8cdae8cf34447a"},{url:"2023/03/06/MarkDown-0/index.html",revision:"35635b381ea89010d7bb45ea6712d955"},{url:"2023/03/06/MarkDown-01/index.html",revision:"3f8cbdadc67c2ea6e1aa52b3e8585c43"},{url:"2023/03/06/MarkDown-02/index.html",revision:"1be3f709547799c56ed5caaab321b00b"},{url:"2023/03/06/MarkDown-03/index.html",revision:"ca70f9316a80a5828df29ad38f83a86b"},{url:"2023/03/06/Vue-01/index.html",revision:"ba2db39905bf7dd6bdca3d264435dcfc"},{url:"2023/03/06/Vue-02/index.html",revision:"b0625860a8b57b364b951eee8db2b3d8"},{url:"2023/03/06/Vue-03/index.html",revision:"39aef82c5fec1e305245a2bcb858bf82"},{url:"about/index.html",revision:"3c09e9077c51ec642f1f56a0e8c14bd2"},{url:"archives/2023/03/index.html",revision:"dedd7d3286b1890f39e0d2a90ca22f12"},{url:"archives/2023/index.html",revision:"dea114c08472b5c003f0ef884c535e77"},{url:"archives/index.html",revision:"19a97aa60ca42fb71ae40c00240b1691"},{url:"categories/index.html",revision:"63a44346daabce7efb3a8840f9c8e6bf"},{url:"categories/Markdown/index.html",revision:"e595b86c6ffb68334ebba0046269da20"},{url:"categories/前端/index.html",revision:"f2c6c63de52181acc9a7d2baccb5e932"},{url:"categories/前端/Vue/index.html",revision:"24ef33aff5df9e55d685d52bb105bad7"},{url:"css/index.css",revision:"78f9b02a93f86991bd75bb445728c221"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"234a247c182a999fd4cc5ac2710bc35f"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"photo/hz/index.html",revision:"3b765bcc6418f355790f114badc30525"},{url:"photo/Img/0-1.jpg",revision:"2130efb32a7225e8a2d0604f2e0c5a8f"},{url:"photo/Img/0-10.jpg",revision:"c1cc053962a68483604b470ad9e227e8"},{url:"photo/Img/0-2.jpg",revision:"82a0b7c1305fe024ed43cf21650403f8"},{url:"photo/Img/0-3.jpg",revision:"e4f9ca859f3ca12dd776b14182cdfb10"},{url:"photo/Img/0-4.jpg",revision:"45fa96c45ccafd58644f32d73e3c30aa"},{url:"photo/Img/0-5.jpg",revision:"da832a3809b02acf8a3ad7589908b36b"},{url:"photo/Img/0-6.jpg",revision:"694be3ccb14da3a51eafdfb6e9653964"},{url:"photo/Img/0-7.jpg",revision:"416bb75af8d7c0020b3ca809b108b240"},{url:"photo/Img/0-8.jpg",revision:"19a924b608990a2b150fd50ad8185e96"},{url:"photo/Img/0-9.png",revision:"8061388dde87ea85cfba324206848d71"},{url:"photo/Img/1-14.jpg",revision:"1012e49cd5382bffed72e47a1af298ac"},{url:"photo/Img/1-2.jpg",revision:"5a16098962090e0318ed1772606d133e"},{url:"photo/Img/1-8.jpg",revision:"de69a7de5c8b3ab1c4651420d52ac60a"},{url:"photo/Img/2-1.jpg",revision:"4413a9bb167eb437e72ba3d074c30ae0"},{url:"photo/Img/2-10.jpg",revision:"8e83afa530bbbc848e27391d30a6bf79"},{url:"photo/Img/2-11.jpg",revision:"8321aa164890e7e58c895b601e34b1a4"},{url:"photo/Img/2-2.jpg",revision:"cbe56042065803b3a529bcb1776b2404"},{url:"photo/Img/2-3.jpg",revision:"51f92866d50f38323a4f6fa2b2ef6019"},{url:"photo/Img/2-4.jpg",revision:"e15b9dac3367be0c5052c661f4eb0f25"},{url:"photo/Img/2-5.jpg",revision:"48398ee5cb87c89bd18f6881796ee44d"},{url:"photo/Img/2-6.jpg",revision:"87e03699edf68a699f4a4c8368ceeffb"},{url:"photo/Img/2-7.jpg",revision:"fd15f673b3b12712428460bb1ad1860c"},{url:"photo/Img/2-8.jpg",revision:"b8f3b97983ec9b4115013db0b630a3f0"},{url:"photo/Img/2-9.jpg",revision:"e117e75ae2ab95cbfd195d3be5b9c6ee"},{url:"photo/index.html",revision:"94edd672eb190d7607da44508e9ef640"},{url:"photo/szg/index.html",revision:"686b7a77657c9edb6ee1d6d5b43a380d"},{url:"tags/index.html",revision:"2c3edf70c3a95b1d795bfbc94ece5f5e"},{url:"tags/Vue/index.html",revision:"f5305807a508389ab2ab5de044ea87a5"},{url:"tags/前端/index.html",revision:"d2d9ab8ed3d10382eee955f2fbaece8d"},{url:"tags/模型/index.html",revision:"11a9373d36e78b5b39fcbf428641afc3"},{url:"tags/语法/index.html",revision:"7e9a15344fec2b52dacea9f2f0bd0b51"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
