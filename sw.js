/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","fe67799b296af0c64c7220c193599b38"],["/about/index.html","d962045c735162b9097e153e00d857a9"],["/archives/2019/04/index.html","1ac8b291e8fab3a442559b6719fa80f9"],["/archives/2019/05/index.html","cac8e98cd71be2723a367b8ee1a42735"],["/archives/2019/05/page/2/index.html","b68845794302ebbed93d85ee6bc9a18a"],["/archives/2019/05/page/3/index.html","966c686275f4d48064e6446506f9e133"],["/archives/2019/06/index.html","40f794fbf4ba98cab0d2abfe0d57c5fd"],["/archives/2019/07/index.html","f421f8af4b0f8ed58ca1a44d2b2a4f8c"],["/archives/2019/08/index.html","fd7596b5539740b7c3c0b50b067c66e8"],["/archives/2019/09/index.html","779e464e923b50a8ff15425b6901011a"],["/archives/2019/index.html","0ed7e56236f4d7a60d3bdd1dcc547d05"],["/archives/2019/page/2/index.html","299fe0c790ff42b8eb24c7adc83ba612"],["/archives/2019/page/3/index.html","8dad39cdb85a11c7fd4ddeb2f38fceed"],["/archives/2019/page/4/index.html","c7430c782d43861fc809684229bfb786"],["/archives/2019/page/5/index.html","9d543956c91ab454e7f2f64846ddd48c"],["/archives/index.html","02f4a0eabb609766b9564676d7133685"],["/archives/page/2/index.html","8f8b7c31cdaa9be011dc9a77cfdcd095"],["/archives/page/3/index.html","8dd148630e922e4ffb1b7e8468662ec6"],["/archives/page/4/index.html","d18fc5d2d19d52cb1fbf486d30c91fa4"],["/archives/page/5/index.html","1b33cf1f7d03fc2d0214a7f2cc610029"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","541c1e37a1b3661d48087750b89882b1"],["/categories/index.html","6ef263db3c5d1b19a63c0d5add037679"],["/categories/ことば/index.html","9332ed64eb0842140a0cfa2961d41b80"],["/categories/つぶやき/index.html","7adb47631e3c032a97159b0c7d766bb5"],["/categories/アニメ/index.html","cbe02125051e49af0fbb093cd7f84f4a"],["/categories/インターネット/index.html","5d5d795962db7b5edab37121fad6e462"],["/categories/中国に関する新聞記事/index.html","345e9af57b6b96037429046cf4eb9437"],["/categories/労働者保護法律/index.html","ffb3c28dd4f4425efa5d3c507711fddb"],["/categories/心理学に関する記事/index.html","71d85247c5e3262101c359c066c8617f"],["/categories/日常生活/index.html","4551a2d69afd4d2230466baed0c6deaa"],["/categories/日本のIT教育/index.html","e29ee3a22a4b790bea9fcefc6561c0b1"],["/categories/日本のIT現場/index.html","d2ce1ba1a249879d73942d6c30f9fcb6"],["/categories/日本のビジネスマーナ/index.html","8a71845aec17f595a4d3e97079281cee"],["/categories/日本の国内の人権状況/index.html","b81a214b828a65647994816852f5c1ef"],["/categories/日本の経済新聞記事/index.html","18470bf119e655316c32ce4f71b6ea0e"],["/categories/日本地理/index.html","27cca256b5ff7aa2fdef7104a393373a"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","af3217aef8e62df979a65b47c29d9748"],["/categories/過酷な現場/index.html","fd8afa55ee7c368098a998fcc80f67fa"],["/categories/金融/index.html","d0e91b56ea0c3e1e4f492fccfdbbefc1"],["/categories/食べ物文化/index.html","b92a56dc6de9507c5119c1436b45dcdf"],["/categories/食品工業に関する記事/index.html","5a4d715dbd122461ac9e40ba7abb5b55"],["/css/main.css","659e1f45f542b5ecb02a6e1dfec3bdec"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4d49ac91c39dceba98fa614f7160241c"],["/js/src/affix.js","54867e554101e0ad22b80161ba8e763b"],["/js/src/algolia-search.js","f50f9982f5712370084ea8a60b6068c3"],["/js/src/bootstrap.js","e8d39cf4ca33d05c921ebf3a0f828003"],["/js/src/china.js","39719d658121c1e345b4f2db6712ff4e"],["/js/src/echarts.min.js","ef448b7c3c6d7194fac218e2bda76942"],["/js/src/exturl.js","b21e19ef2d290cb55c7d30a7425e662b"],["/js/src/footprint.js","a4c6e970a13e0693746ba30bd761a798"],["/js/src/hook-duoshuo.js","617dc957ecf835a0ae895d5bb4d1d701"],["/js/src/instantclick.min.js","a763fbc9c722aedeeaa4adedc5ee14ba"],["/js/src/js.cookie.js","7c2ed4c2946f3c275e3fb2aa08577987"],["/js/src/motion.js","51d79795036bc1d639cead0eda749b53"],["/js/src/post-details.js","2d0d896ff58bb0aec3a0e131c2fe81a9"],["/js/src/schemes/pisces.js","f46a01dfd5eeeca02aaf8635365b482c"],["/js/src/scroll-cookie.js","aaa5c41c767720e81ddcc59e2bacb094"],["/js/src/scrollspy.js","2c9951dd36d38f4e5e2bfd4e364589f0"],["/js/src/utils.js","0d5878ee1634a3f750c1d46298d81599"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","f729b5c8fc40021894cd549149c949b2"],["/lib/Han/dist/han.js","be32cbe79ba2639a0db947505431ed29"],["/lib/Han/dist/han.min.css","80105e128fe772adea6c479ee610d18c"],["/lib/Han/dist/han.min.js","1786ea82f8f1c6f77868cd27b9cb279a"],["/lib/algolia-instant-search/instantsearch.min.css","b1e55ac13e90da3e8c5926a427be27de"],["/lib/algolia-instant-search/instantsearch.min.js","018649bf182d48fe4492a4e8b606d899"],["/lib/canvas-nest/canvas-nest.min.js","cecd3a01635b3d1025adcf1bfa7f1659"],["/lib/canvas-ribbon/canvas-ribbon.js","4daf5ef4106cc67ecc25f97b1ed2154a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","b3a5c8fa4d967a85d41c7f58dc630213"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","518f43f0744d2c756bd15015dc7570e6"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","254c554a357ee2b934b09263520a333f"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","3ee99637126e13379fabd103d3c9aec9"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","24abd5d6b3a94ed5e1c588c9b824edfd"],["/lib/fancybox/source/jquery.fancybox.css","88f7e32f51eaf075b1eabf8b1fb8ac8f"],["/lib/fancybox/source/jquery.fancybox.js","c08ddf5527d2a7e71d6804065b7b3475"],["/lib/fancybox/source/jquery.fancybox.pack.js","e0abb213bbeee016f6400fbd91f4a925"],["/lib/fastclick/README.html","99d59d6919718919b42f9cc62ad0d273"],["/lib/fastclick/lib/fastclick.js","d55b259585ee996df8d462b1dff2dc5f"],["/lib/fastclick/lib/fastclick.min.js","78be89bf5d9c6f4ba9eaabc7855702f6"],["/lib/font-awesome/css/font-awesome.css","a7ff54e34b74d881689b07fe86816343"],["/lib/font-awesome/css/font-awesome.min.css","a7ff54e34b74d881689b07fe86816343"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","5439363eeb896aabd107e0efc3305e64"],["/lib/jquery_lazyload/CONTRIBUTING.html","08ebc72f5632f06dfa44da3cc22e22b0"],["/lib/jquery_lazyload/README.html","aa5ef5e95f685b4023228d25d41904f2"],["/lib/jquery_lazyload/jquery.lazyload.js","8ce126d4b15afc899dc93bc6beff6c75"],["/lib/jquery_lazyload/jquery.scrollstop.js","9b3d74ea931c16b91e443324f7d1f692"],["/lib/needsharebutton/font-embedded.css","a708e88c95ed8aa26a900628684b8519"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","1c6b496d5c1957e199b98e89ffda3a36"],["/lib/pace/pace-theme-barber-shop.min.css","dcd6657b9f0d8595b4574c0706f32b06"],["/lib/pace/pace-theme-big-counter.min.css","4f6c18e35b8dd7b58157198ff69cf416"],["/lib/pace/pace-theme-bounce.min.css","adcfb845882ad5f800d28b74b06f7733"],["/lib/pace/pace-theme-center-atom.min.css","6a0311baef651093a84ad111092f56c1"],["/lib/pace/pace-theme-center-circle.min.css","0b5fed301cd4a15ae1be86b8e67e1c5e"],["/lib/pace/pace-theme-center-radar.min.css","af2390f0278400702d9a826c0ffe8b24"],["/lib/pace/pace-theme-center-simple.min.css","127f6a9309470e3cc6396e78c7b86f72"],["/lib/pace/pace-theme-corner-indicator.min.css","f7791629f55c1ee37459d88e29be2ba1"],["/lib/pace/pace-theme-fill-left.min.css","b32a45caf2baf6934456cd32729f7514"],["/lib/pace/pace-theme-flash.min.css","d7c86acd70112c875eacf0086fc80d29"],["/lib/pace/pace-theme-loading-bar.min.css","83ad5ef19ebdc2b8da1637bbe06caa82"],["/lib/pace/pace-theme-mac-osx.min.css","a5e19836b44eba4205bd0e64e19a26c5"],["/lib/pace/pace-theme-minimal.min.css","63a3ccbcbf0e17bde58ca0cdbe3bbfc8"],["/lib/pace/pace.min.js","6ff1064499699f8204d2378ffc490cb5"],["/lib/three/canvas_lines.min.js","8198fc0b73d6c015d32e76cebfd8922a"],["/lib/three/canvas_sphere.min.js","6a953019a5dc6878f285823f9b9550ca"],["/lib/three/three-waves.min.js","7305b52e007b7cecf1b7f50eccd5adbb"],["/lib/three/three.min.js","87fce451732cd31e68746776851d957a"],["/lib/ua-parser-js/dist/ua-parser.min.js","8c433bdc4406b972870cde0284514644"],["/lib/ua-parser-js/dist/ua-parser.pack.js","64ccd7329de4d030785c739ded7e8fa8"],["/lib/velocity/velocity.js","b2fb724795d430eaecacda79df5bf1a7"],["/lib/velocity/velocity.min.js","154da3dfe047fce386fc828ac9bf5998"],["/lib/velocity/velocity.ui.js","b6ad4029558189c92771f551ace2d6e0"],["/lib/velocity/velocity.ui.min.js","fb6ff824ca87e255bb6cd4ef2d261da8"],["/links/index.html","6d03074103bc69b3b75cf48a727d9169"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","af21ceef3fbb97a61418ce0b34865669"],["/page/3/index.html","1576500203212803b3c166af0f1f5a37"],["/page/4/index.html","329477b39e5b3e33b507cb48af3a4702"],["/page/5/index.html","c8c7df1f3a50e3f7afd85aec324e7d00"],["/photos/index.html","e6cec3606212c8762255dafb9b154985"],["/posts/191ddb73/index.html","76133249df7a04825e5cefd84370ea53"],["/posts/1a195976/index.html","3c8098587bd7b942a734f0093cebd889"],["/posts/2292f1af/index.html","311cad5a1b98b9237642238d3e340890"],["/posts/29d57d6/index.html","5e5762200656035c5681e0b4d9163738"],["/posts/2fc77d95/index.html","78ddf6a42d588aaa9953814b5d8d3a7a"],["/posts/2feacaf4/index.html","e4669c0438a7b11b34ef36b548accc69"],["/posts/37f2c331/index.html","c816d87e21c64518d6ce4e5bb76767b3"],["/posts/385f0de9/index.html","63814d1319410253a88c5f255e95cd7b"],["/posts/3caecfa9/index.html","26628cc994ce4e12ed99d77336c667f0"],["/posts/44414303/index.html","7b649cd865a2c2529a4f4bd63c80e74d"],["/posts/456610d0/index.html","744aafcdb4440cf0bc47d8effd6fc6c3"],["/posts/45e51894/index.html","626eba24afbcce635132823a390e512d"],["/posts/4f1131af/index.html","1a6accb3093ab6ec59010a8fccfbd08b"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","34faf1f2646097b24fe99e6be1144afe"],["/posts/517ebb95/index.html","0bbb1cbdcf9055f5a774fe65d5d73adb"],["/posts/53bf1d9d/index.html","41f479660afef59504e7226d46c30f0b"],["/posts/554c2ba0/index.html","1523489582f6b9623c06c4d042e03a2c"],["/posts/5f093cf/index.html","83c310c4efe5ee429691ecf0d82ae128"],["/posts/63556f52/index.html","4a7aebfe91ee07802577a582ed2cad50"],["/posts/6d49ceec/index.html","e6aad5bd429e050db978469f1caa84a6"],["/posts/6de7d9db/index.html","a5f93b589600605dedbaaa249cb0d462"],["/posts/6fda249f/index.html","36c56c4bf7c194620652eb2698ec9011"],["/posts/72f7a359/index.html","021e059064fb8b11ef8b69408761bb80"],["/posts/759a6740/index.html","61b0b754e5502ba3fe7add31bf115eb2"],["/posts/84b87417/index.html","d4311afde325b23762760700f19d3805"],["/posts/8a60fcb8/index.html","89f85c59f24fb86e5b1c494b61043a75"],["/posts/8b4c253/index.html","468a4f2d9d2ed62d654ce2bcb3f36256"],["/posts/92912ddc/index.html","6254dab0cca28543ea89faccafb4d772"],["/posts/954f8e5e/index.html","56d688c6428c765256a1092e11380fd1"],["/posts/97e5bc9c/index.html","a9aeafae320a7f35f5f7a0fb4239b8b9"],["/posts/9a5c7b64/index.html","301cced64d6c620dbb5affd61daa7c58"],["/posts/9cf9c275/index.html","59c9ff6a183666068793b5bd88f528f5"],["/posts/9f555f82/index.html","9836ab06e2eb64acc9c0a48cf6fc679b"],["/posts/ac7d0231/index.html","6174fa8c234479f2566218186695c8e6"],["/posts/c311b112/index.html","0347e9de5fe90560c47af520775f8a7a"],["/posts/c620d4c2/index.html","1a4c1f916d65a714301f0209d7acf2f0"],["/posts/cfc54393/index.html","ea3d026256cdd3fefe9631ca19c7160b"],["/posts/dc5155ff/index.html","4de62d04ffc01fe40ecaa641069fb6a2"],["/posts/e1bd836e/index.html","4bb8c600fcbc06c35c0f52d69184a7d1"],["/posts/e248bec8/index.html","af9c2324f7dfce2b06ceed1b9632a200"],["/posts/e31c0293/index.html","fab603ab4eeb242ba93d8ced4a729396"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","bc43fe442d191ad4ef1436c7f98a4104"],["/posts/f8073739/index.html","746b695636dd576808a51eb9a0bc8bb2"],["/posts/f97ef43b/index.html","4dcae412a0e80f2c2ddd694e8a472b4c"],["/posts/fa84d5fc/index.html","215c3d8d2702655f4fcc94ef12c5c565"],["/posts/fb1ab942/index.html","d3ddc15c40f1f414159e20ce985bff54"],["/sw-register.js","e11aaf4e59175e76044513bd99d87efa"],["/tags/J-pop/index.html","4a0c32ef8044ab2425ea1e75e36048b8"],["/tags/index.html","29b24453a675868971b31a6886e1ac01"],["/tags/ことば/index.html","a96bf5b413a1a4bba30a75d84deabb49"],["/tags/つぶやき/index.html","49aee37088defe38958ce916fd1a9824"],["/tags/アニメ/index.html","efda59566f5f1ee75260c4fba237ede1"],["/tags/インターネット/index.html","48eaef8e1c9246c19a7a6a2192e978df"],["/tags/チョコレート/index.html","e763b864d526976ce019394d3d31ffea"],["/tags/中国に関する新聞記事/index.html","5cf991ad0675fef6e5ff4d3136afee39"],["/tags/乳製品/index.html","c17c6b7c7822a47c6cf25dd14df47c89"],["/tags/労働者保護法律/index.html","e9f98ad3369a2cdccc9be63fd9d82996"],["/tags/心理学に関する記事/index.html","0919d95ce392bce43787ee4412a71130"],["/tags/日常生活/index.html","980595d0393fa63af7c389b23e4b4206"],["/tags/日本のIT教育/index.html","61bb75d53d31e954f690b6cdded12110"],["/tags/日本のIT現場/index.html","5f8671e5f5bbd44ad8ef7832fc16a6dd"],["/tags/日本のビジネスマーナ/index.html","6922fa106357381d60ab107e87e46936"],["/tags/日本の国内の人権状況/index.html","ed89156eac72f558fd7063a40ea99b5b"],["/tags/日本の経済新聞記事/index.html","0cb34fbf48670ee7cd98aba0bd842e9f"],["/tags/日本地理/index.html","fd0acea35f1d4b2ee24cf9efe3b5e356"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","b0a8cdf0c530be0cd77d45379017e358"],["/tags/過酷な現場/index.html","4ca4124bd4ac571948f314b523f35d2e"],["/tags/金融/index.html","6e7ba2f3b1aaffee4b41dabf9c732ff6"],["/tags/食べ物文化/index.html","41d189db41253da9da11dc9015312805"],["/tags/食品工業に関する記事/index.html","1f5301e1f385fd1964c661f79d4400a5"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
