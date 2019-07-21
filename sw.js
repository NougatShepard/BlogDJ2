/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","7d10a1a8fdac37c58b15b94ac2eb5560"],["/about/index.html","142190e9e05992e386bb2a3c83ad19f7"],["/archives/2019/04/index.html","f1e4e162a5ebed98b8ebe89bc3a7ff58"],["/archives/2019/05/index.html","23441d12edbf0580054dc793f455c5b4"],["/archives/2019/05/page/2/index.html","17e88a7d4a1df84f1530a52987ef89f1"],["/archives/2019/05/page/3/index.html","e972d559be434d9a6beac027c526c6fd"],["/archives/2019/06/index.html","175d70f385fd7cb89e813d070a241299"],["/archives/2019/07/index.html","d31c41ed1d0768131e15e25aed792be4"],["/archives/2019/index.html","c890a60fb74abddf956f7a68221d95ce"],["/archives/2019/page/2/index.html","95ce1dbc834a90bfb7a1c0159ef9a9ec"],["/archives/2019/page/3/index.html","8947efa46bdbd169c714f730b89f1b21"],["/archives/2019/page/4/index.html","87b85263a8ab8f27da79cc73e13ee8c7"],["/archives/2019/page/5/index.html","c51f873ab082fc4da381215193002bff"],["/archives/index.html","86c6fb2acdea926dff1be34ffb539e00"],["/archives/page/2/index.html","bcb0790a418e6d8fdcc25c076dbfd613"],["/archives/page/3/index.html","e2bdceb4ed485b12e605e72c6ed3e85b"],["/archives/page/4/index.html","0a41e5ac26ac2872158da34f9d287dd4"],["/archives/page/5/index.html","4f52bf7a2fa629c5413612d1340ba896"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","25fa54f200c8529fbab642747abbad97"],["/categories/index.html","9e4a2a22dc848a6dcd43821c4a691591"],["/categories/ことば/index.html","12e1fa25d8256c3f1bd60f66c4764761"],["/categories/つぶやき/index.html","0705c8a0b3f91e1a08823aac9285483c"],["/categories/アニメ/index.html","42ec1dd52ee095655f3e2e907de78bd3"],["/categories/インターネット/index.html","1a7dbf0280c2f0f3f72e4337ebe2303b"],["/categories/中国に関する新聞記事/index.html","5ce48b837c7260a39f9d19c2faefa5d4"],["/categories/労働者保護法律/index.html","c4ac4f2b747f82fe4187b255b559c837"],["/categories/心理学に関する記事/index.html","d70dbed525120b65c24adf584e7b7888"],["/categories/日常生活/index.html","d39e2239f3a5dc3299b7a482c000376f"],["/categories/日本のIT教育/index.html","f96826e7fc6798ea1e314e5a127df68f"],["/categories/日本のIT現場/index.html","bad14d62b9ef6a118418de83e22aec99"],["/categories/日本のビジネスマーナ/index.html","3638f2a8696cf36994c6e0685e0884c9"],["/categories/日本の国内の人権状況/index.html","0f6fd9be8115d8a28cdb2bcbd7691c39"],["/categories/日本の経済新聞記事/index.html","f647e874b76ea423deebd1de4dbac3c5"],["/categories/日本地理/index.html","75aa6c52c45e42552fa6070d23a63ea3"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","578dee11b2c27d2547de02ae1a179ce5"],["/categories/過酷な現場/index.html","f629e7252951b79eb5921bc837ca96f0"],["/categories/金融/index.html","2294e919ac074aba46fbe3347f5c5882"],["/categories/食べ物文化/index.html","a3b57e700094d4ff84cea1bb3eb751af"],["/categories/食品工業に関する記事/index.html","c4cac2ae3a4c66d751c0f514e9f7be8a"],["/css/main.css","ded6720990ef35405f195a052531e651"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","64d92bae73f950f49dab462630a28d5d"],["/js/src/affix.js","8e540ddf6803f7225fb07e242b618f85"],["/js/src/algolia-search.js","be25b67515cb2317143552657ed4f484"],["/js/src/bootstrap.js","f45118bd747ec2c80b7afec9ef83eb05"],["/js/src/china.js","aceb35fa20cedb818b4bff4f4343b5a2"],["/js/src/echarts.min.js","00ae82a3381ba2e485f2bfe392d2508d"],["/js/src/exturl.js","41a1f60e6a302bd509a5c17112e1fbe5"],["/js/src/footprint.js","3103403be5f4141f15f83170cb937f94"],["/js/src/hook-duoshuo.js","a86868d1f617cd182565489f2fe90648"],["/js/src/instantclick.min.js","bf5cc0f0b5d1cea73f1ae4854218fde2"],["/js/src/js.cookie.js","7f4d5b77a3995e7ddb1d5c3e6ba3ed2b"],["/js/src/motion.js","74fadc2250615112d46d70d4e3c7acc9"],["/js/src/post-details.js","44527846ba1ec8320518b68a1614f14c"],["/js/src/schemes/pisces.js","b5249aae00629672545f5f71c29d3612"],["/js/src/scroll-cookie.js","0bbc4e20ae13c167b664fd8669d3cd05"],["/js/src/scrollspy.js","fb73ccedaf3d3daf1864b5bcf335d8f0"],["/js/src/utils.js","0972ec808247a5ab17fe32eeca73065e"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","493a3317866a5d0ea246171f517d2cdc"],["/lib/Han/dist/han.js","3afc4828ea470a946cda1510e6021edd"],["/lib/Han/dist/han.min.css","5ca898d4da79068dd7f665382bf06d0d"],["/lib/Han/dist/han.min.js","7b868dad70fbe9f7330b9ef036b1d9db"],["/lib/algolia-instant-search/instantsearch.min.css","f1c0d958c68b382a2bf258d728e26309"],["/lib/algolia-instant-search/instantsearch.min.js","9ecbb8b5c341408a7401857b886af525"],["/lib/canvas-nest/canvas-nest.min.js","6c6791df2a6bfd8227fbd6c5e7b65892"],["/lib/canvas-ribbon/canvas-ribbon.js","79abb104f4faace2cb14ae3463b08b4a"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","56fe57d11a71fd4f20c0899e1f7f8965"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","5c6479f5d6a5f74efba1cdeb24428d84"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","508c200f00958c957844f8f1b0882968"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","72ae8dc6a2c5628657fc0c645120f5cd"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","54548595b12ae7589c5b549133c5af36"],["/lib/fancybox/source/jquery.fancybox.css","27bf14a3e2bdadb47242a61d52a9631b"],["/lib/fancybox/source/jquery.fancybox.js","3b596eac196390e8a8486852669eed26"],["/lib/fancybox/source/jquery.fancybox.pack.js","6e0c048a43312bb67042df1abab8a13a"],["/lib/fastclick/README.html","6a36039051ed7c3467da99e03417c16c"],["/lib/fastclick/lib/fastclick.js","cfcdba65c951931b84f89d800e5f3956"],["/lib/fastclick/lib/fastclick.min.js","2890e1c0244a2e8b417e8979e0701ef0"],["/lib/font-awesome/css/font-awesome.css","affe740c71b3fd7c72d36fda0f0a1f4d"],["/lib/font-awesome/css/font-awesome.min.css","affe740c71b3fd7c72d36fda0f0a1f4d"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","0ce646d3a51ce3c8a41e8a3673c28a83"],["/lib/jquery_lazyload/CONTRIBUTING.html","ef82460b72a4f0611f81facace6a8da3"],["/lib/jquery_lazyload/README.html","2bcb1a8b005b7adf06f21a6073cb6213"],["/lib/jquery_lazyload/jquery.lazyload.js","4893deb4dddada351eef2df9f5776ab6"],["/lib/jquery_lazyload/jquery.scrollstop.js","55c755f9de2d2b4474d383c08c0aafda"],["/lib/needsharebutton/font-embedded.css","b38b25972ade0213be3a665d9554a5c6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","f3bee6d907f7bf5bec8dfd4794534aab"],["/lib/pace/pace-theme-barber-shop.min.css","d9b0e52eb0fabe481b5061e716218d6d"],["/lib/pace/pace-theme-big-counter.min.css","ee753c7c400e3d50a612ce87561c8923"],["/lib/pace/pace-theme-bounce.min.css","1366e9ee041a2b2663d5ec77f3c30d9d"],["/lib/pace/pace-theme-center-atom.min.css","c2d9757e572a867e6ba8ceada9c16f95"],["/lib/pace/pace-theme-center-circle.min.css","c9dc07584547f2a6138ae751c120bec3"],["/lib/pace/pace-theme-center-radar.min.css","d87e316784aa7edf30b82584a2899164"],["/lib/pace/pace-theme-center-simple.min.css","480e0d0caa17910bc4fc885b8a69b483"],["/lib/pace/pace-theme-corner-indicator.min.css","8a69f767818400f73eabc79f68e0a13c"],["/lib/pace/pace-theme-fill-left.min.css","d27ff8fa42b1ac2db2d6b36fd10d54ef"],["/lib/pace/pace-theme-flash.min.css","d6129acbe43b49344e286d95bbbc76ea"],["/lib/pace/pace-theme-loading-bar.min.css","efa97249d0fd86d2f6290e5b688bc986"],["/lib/pace/pace-theme-mac-osx.min.css","f27be1dbd072f60775321c29d1424a71"],["/lib/pace/pace-theme-minimal.min.css","b6faf7c3d812ff084fff51355fe9409e"],["/lib/pace/pace.min.js","5388bad9c9c115c2f3134311563fa5fd"],["/lib/three/canvas_lines.min.js","8000ced83c9bbab1ec3d3c769ef77282"],["/lib/three/canvas_sphere.min.js","a119509b7027f43e46111aac5514888f"],["/lib/three/three-waves.min.js","76e6ae7d6d8eaebc82c9c99207d0559a"],["/lib/three/three.min.js","dc8b68b404d35c5a0cd9f23d3961e68a"],["/lib/ua-parser-js/dist/ua-parser.min.js","d24a89d772d00334af240080d5a3ca4e"],["/lib/ua-parser-js/dist/ua-parser.pack.js","39fe094d4ce2d482fc4b6e1120d56f7c"],["/lib/velocity/velocity.js","fda8059b2eac55e5e42399e18c3d95b1"],["/lib/velocity/velocity.min.js","1d7aa480207a52391d614063ac541d5e"],["/lib/velocity/velocity.ui.js","d7005b2ef581d1f2769b69647d66ee0f"],["/lib/velocity/velocity.ui.min.js","e69f53be3a1aa841c8abface405b361a"],["/links/index.html","a58580ddab0ff635d56262ba9af77dd7"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","294db4f5bafdd105823539b62e39f5a6"],["/page/3/index.html","c3d4220e69ec32095fc27d192ab4885b"],["/page/4/index.html","a4a2b4986da53359e394ea6aa655d4bb"],["/page/5/index.html","7a75d7f02eb3ce396d97841d66d208a1"],["/photos/index.html","3ee7dd57529977626f1e411daa5ebc80"],["/posts/191ddb73/index.html","b8a40b54b41ef7e8f1c3b70a65871aad"],["/posts/1a195976/index.html","87218da2ed02df236616f12e34ddeaa1"],["/posts/2292f1af/index.html","900c521fad6b37c6f403bd1ca78d2780"],["/posts/29d57d6/index.html","644ced010f325f7e5065687ea28316ba"],["/posts/2fc77d95/index.html","cb2e42e11db206eb17a3932fe957f856"],["/posts/2feacaf4/index.html","c182c326ad48bdafe4f99573b7d2655b"],["/posts/37f2c331/index.html","0ffe5ba40773d83779ba9497ad0f87c1"],["/posts/385f0de9/index.html","d6d15338ed17f751fd00ac2c5db08203"],["/posts/3caecfa9/index.html","4324f81f775a3c7a12750ad6c07aabcc"],["/posts/44414303/index.html","5582e70fbcb457464286063abad249e0"],["/posts/456610d0/index.html","1daa55f226628e41142ef4ffe01cf43e"],["/posts/45e51894/index.html","778f42055a9f58b6cf6c8dfb5d987e2f"],["/posts/4f1131af/index.html","2e06732a351b6f71e914a196baaf6aa3"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","593eb4dca33f5d58be60530b78850450"],["/posts/517ebb95/index.html","ff43fcb0f2ace8683cd42c3792a92115"],["/posts/53bf1d9d/index.html","4d06c3fd0b7671b415b999ff64e45488"],["/posts/554c2ba0/index.html","990e6c38f716254a035b5496a14ef59d"],["/posts/5f093cf/index.html","a00cfbccfe553463a61963ee21b66e37"],["/posts/63556f52/index.html","24ff98bb594d8bbee20d3c4cc71771da"],["/posts/6d49ceec/index.html","77aa35db3831e8a67f31be88a0ff6c78"],["/posts/6de7d9db/index.html","ac2462f457923deb5db8bc698a41acb0"],["/posts/6fda249f/index.html","2882837a30a745f0cb449a97d9277840"],["/posts/759a6740/index.html","f0f0b3dc0e01e934ef6893ea58ee5531"],["/posts/84b87417/index.html","add2920320943e3100dc1e14b4495b16"],["/posts/8a60fcb8/index.html","f6c846458cda4f1d540b474882d68243"],["/posts/8b4c253/index.html","dfe9b84b177d646e963b1c05e08f1b2a"],["/posts/92912ddc/index.html","e33b7e95fbda9d7276cb617d2f0ad221"],["/posts/97e5bc9c/index.html","26e19ff585142bbeb960a37549a0f532"],["/posts/9a5c7b64/index.html","694f064c1bfa9b20df392fdb9f2d63e8"],["/posts/9cf9c275/index.html","73f698a5ab6f8f6013c181021f82ce4a"],["/posts/ac7d0231/index.html","4f397ee2479a3d3cc2df96a2f0992c27"],["/posts/c311b112/index.html","bbbcfb7729b65b182cdd8cabffe89c7c"],["/posts/c620d4c2/index.html","4b648118b0fdbd2a2cc2a74f087b116f"],["/posts/cfc54393/index.html","9db6b14adeb8f23b6e0979405c9d091f"],["/posts/dc5155ff/index.html","acda52c3e243d66ff64812ddb954ec77"],["/posts/e1bd836e/index.html","f4f95930fa67431e30bb8d3e1ad920e5"],["/posts/e31c0293/index.html","e80102abd04a0981dec1c207f9fb0d5b"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","beeec844ea4bd3c907093f8bba242661"],["/posts/f8073739/index.html","482bf26a01b2b3f36ce3b6e0ee385fa3"],["/posts/f97ef43b/index.html","d55f9ab79f98efeab751417c3bc1223e"],["/posts/fa84d5fc/index.html","286fd4a0ec2a7b53a051d2782b2189b5"],["/posts/fb1ab942/index.html","2688d43e783a5bf3908a3ab711ef9044"],["/sw-register.js","a1f423da57d7e806e107d4657340df5e"],["/tags/J-pop/index.html","4037193fc797722d6cb00a16f5be60c4"],["/tags/index.html","22fb9fc12d338506a0685cbc744e2107"],["/tags/ことば/index.html","ea8992bea87cbe578b61910ea0a1cb38"],["/tags/つぶやき/index.html","33a2d45fff4ad71e87b88e25f01a27eb"],["/tags/アニメ/index.html","02da6b40654e8fb03c262d74bfbdb99a"],["/tags/インターネット/index.html","a2b4fb0dba526801a61ea32e5f7e0d00"],["/tags/チョコレート/index.html","f9257797f9408d57508d057431289da0"],["/tags/中国に関する新聞記事/index.html","d9f505fc83246534e260a6600e8ec94f"],["/tags/乳製品/index.html","fca950459bdc02c2af68a000615f2ee7"],["/tags/労働者保護法律/index.html","dec98106f9999d706a5320f461768b2d"],["/tags/心理学に関する記事/index.html","ee7473b88bc673d5c71f6ac8dffa3716"],["/tags/日常生活/index.html","7fa7251b66a7a8f5167ac599e91eecbe"],["/tags/日本のIT教育/index.html","65ee5eef16b0d3e3d5c4b4dbae182c56"],["/tags/日本のIT現場/index.html","0198b5fdaed83eafaaf1ae6e096349a1"],["/tags/日本のビジネスマーナ/index.html","8f7067aeb08549f1ced3675a032b42ea"],["/tags/日本の国内の人権状況/index.html","dc99b821e46c791c6c11ea90abb420cc"],["/tags/日本の経済新聞記事/index.html","9af15b0f58c8f3e7c3a9a45cb7296ef8"],["/tags/日本地理/index.html","da1288a830f929b0b00c55f4dbbea6e4"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","b67d23ae69c6033fbaa94634441edac2"],["/tags/過酷な現場/index.html","4f21f7e6d34a2735f7a7e8c002f668a4"],["/tags/金融/index.html","db2a0b00ca50ff29ebea142527bc12a2"],["/tags/食べ物文化/index.html","dd3c0509df3054379f61d2a19ad6170f"],["/tags/食品工業に関する記事/index.html","ffaea6621b1f3fa198ce85d061344945"]];
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
