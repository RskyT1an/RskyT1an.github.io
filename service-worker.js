if(!self.define){let e,i={};const r=(r,o)=>(r=new URL(r+".js",o).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(o,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let d={};const b=e=>r(e,c),f={module:{uri:c},exports:d,require:b};i[c]=Promise.all(o.map((e=>f[e]||b(e)))).then((e=>(a(...e),d)))}}define(["./workbox-f2efd100"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"2023/03/06/hello-world/index.html",revision:"76930f5ac722239071237789c4ddf520"},{url:"2023/03/06/MarkDown-0/index.html",revision:"1bfc6a50d5ae4d8e7e056fe0dfc26ac7"},{url:"2023/03/06/MarkDown-01/index.html",revision:"c5ce5b2769f281322fabb7e200904843"},{url:"2023/03/06/MarkDown-02/index.html",revision:"70ff15f3aad24b30e4d9a234dfe42af1"},{url:"2023/03/06/MarkDown-03/index.html",revision:"eb15b124f586930893c7e151645c2795"},{url:"2023/03/06/Vue-01/index.html",revision:"e80802487208948a4a716b75cafcfa5a"},{url:"2023/03/06/Vue-02/index.html",revision:"38458ac0562c4be89f31377724b233ff"},{url:"2023/03/06/Vue-03/index.html",revision:"ba732a25b5aa6367b12d79d8dae31c70"},{url:"about/index.html",revision:"e9ab36b8bcc02c2c962ae749c2fdc990"},{url:"archives/2023/03/index.html",revision:"c3995d2f3de2aa8e85403e8d6dfc6797"},{url:"archives/2023/index.html",revision:"57442aa0f11e4ca032c9a6beaf6de96f"},{url:"archives/index.html",revision:"205e5a56f08bccea997491d9815e9d71"},{url:"categories/index.html",revision:"9f4f698ef86d2b0095547f1b91bd7591"},{url:"categories/Markdown/index.html",revision:"58b0fd570e8fe9a726eb850a0c72da9c"},{url:"categories/前端/index.html",revision:"36f9e3238cdd6480cb5b2712e9b2f324"},{url:"categories/前端/Vue/index.html",revision:"dc3b9f79c4b409276c85c44b9f66eb21"},{url:"css/index.css",revision:"93e2b985c12e37f5f9dd138877d6b031"},{url:"css/var.css",revision:"d41d8cd98f00b204e9800998ecf8427e"},{url:"img/404.jpg",revision:"4ef3cfb882b6dd4128da4c8745e9a507"},{url:"img/favicon.png",revision:"7a8c47cb5a2149c1a1af21e90ecd9ca7"},{url:"img/friend_404.gif",revision:"68af0be9d22722e74665ef44dd532ba8"},{url:"index.html",revision:"52234887ea24e4268fe72b6a8b296b99"},{url:"js/main.js",revision:"5a6ecf34399a1729b115064d2f283227"},{url:"js/search/algolia.js",revision:"786b8da5325888c55c04e6b6687bf9f5"},{url:"js/search/local-search.js",revision:"1ec55c21e97cc170ee4dadaf96b44806"},{url:"js/tw_cn.js",revision:"bc064917c366036544975274bb20a01d"},{url:"js/utils.js",revision:"0dccc99f6a5b70b9ccfbf58d2c6eec5b"},{url:"photo/hz/index.html",revision:"1abd89edc79153f594544d7153c49bd5"},{url:"photo/Img/0-1.jpg",revision:"2130efb32a7225e8a2d0604f2e0c5a8f"},{url:"photo/Img/0-10.jpg",revision:"c1cc053962a68483604b470ad9e227e8"},{url:"photo/Img/0-2.jpg",revision:"82a0b7c1305fe024ed43cf21650403f8"},{url:"photo/Img/0-3.jpg",revision:"e4f9ca859f3ca12dd776b14182cdfb10"},{url:"photo/Img/0-4.jpg",revision:"45fa96c45ccafd58644f32d73e3c30aa"},{url:"photo/Img/0-5.jpg",revision:"da832a3809b02acf8a3ad7589908b36b"},{url:"photo/Img/0-6.jpg",revision:"694be3ccb14da3a51eafdfb6e9653964"},{url:"photo/Img/0-7.jpg",revision:"416bb75af8d7c0020b3ca809b108b240"},{url:"photo/Img/0-8.jpg",revision:"19a924b608990a2b150fd50ad8185e96"},{url:"photo/Img/0-9.png",revision:"8061388dde87ea85cfba324206848d71"},{url:"photo/Img/1-14.jpg",revision:"1012e49cd5382bffed72e47a1af298ac"},{url:"photo/Img/1-2.jpg",revision:"5a16098962090e0318ed1772606d133e"},{url:"photo/Img/1-8.jpg",revision:"de69a7de5c8b3ab1c4651420d52ac60a"},{url:"photo/Img/2-1.jpg",revision:"4413a9bb167eb437e72ba3d074c30ae0"},{url:"photo/Img/2-10.jpg",revision:"8e83afa530bbbc848e27391d30a6bf79"},{url:"photo/Img/2-11.jpg",revision:"8321aa164890e7e58c895b601e34b1a4"},{url:"photo/Img/2-2.jpg",revision:"cbe56042065803b3a529bcb1776b2404"},{url:"photo/Img/2-3.jpg",revision:"51f92866d50f38323a4f6fa2b2ef6019"},{url:"photo/Img/2-4.jpg",revision:"e15b9dac3367be0c5052c661f4eb0f25"},{url:"photo/Img/2-5.jpg",revision:"48398ee5cb87c89bd18f6881796ee44d"},{url:"photo/Img/2-6.jpg",revision:"87e03699edf68a699f4a4c8368ceeffb"},{url:"photo/Img/2-7.jpg",revision:"fd15f673b3b12712428460bb1ad1860c"},{url:"photo/Img/2-8.jpg",revision:"b8f3b97983ec9b4115013db0b630a3f0"},{url:"photo/Img/2-9.jpg",revision:"e117e75ae2ab95cbfd195d3be5b9c6ee"},{url:"photo/index.html",revision:"09f8c97373b651db1f7814a6aa2f232c"},{url:"photo/szg/index.html",revision:"b9ba40e7082344b97b11fdedf5c73a7e"},{url:"tags/index.html",revision:"ed00ae3d70c84258f645c1d7e16b5242"},{url:"tags/Vue/index.html",revision:"549a7094927ca655ddb9e7a0ae8e187a"},{url:"tags/前端/index.html",revision:"08d132215a1e7d36fe42f1ac72415079"},{url:"tags/模型/index.html",revision:"dc19e51205e9b694cf88588a64b910eb"},{url:"tags/语法/index.html",revision:"7f3797699ecbf55b15d76bda675e4c7b"}],{}),e.registerRoute(/^https:\/\/cdn\.example\.com\/.*/,new e.CacheFirst,"GET")}));
//# sourceMappingURL=service-worker.js.map
