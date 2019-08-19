/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","b77e4e53f6306dd6c2cbd381060ec1e6"],["/about/index.html","d51618bb3c9406c3151506fc0c156334"],["/archives/2019/04/index.html","5d79dc6bce942ad6461bfc07f1f586e8"],["/archives/2019/05/index.html","3dfd68cdbf6f3367bf004cf7d2fd5d28"],["/archives/2019/05/page/2/index.html","227e9227964b1e043c7d1f2ba8cb719c"],["/archives/2019/05/page/3/index.html","227064fb26f8c1de20e6e9d11ec72ab9"],["/archives/2019/06/index.html","be5880e47b11d9862c4cee8c1d9a8ca5"],["/archives/2019/07/index.html","2eddba8f6ce006ae2b8da2ddacb4e1a9"],["/archives/2019/08/index.html","403ee7720d3c23f0e83eec23dd0daeb4"],["/archives/2019/index.html","c9c7fd2462766664476e095a630a8035"],["/archives/2019/page/2/index.html","2d28656d34c9e7053b2d6696503624fa"],["/archives/2019/page/3/index.html","add5bc24fde1aff1a17e184ccec4ff8c"],["/archives/2019/page/4/index.html","05f004e08bb8a2aee881437b85ea6338"],["/archives/2019/page/5/index.html","01682f2686e29106e94c4fff63c96253"],["/archives/index.html","ba51b9b7e29843e664c81477987e2363"],["/archives/page/2/index.html","171c990226c4c3e2ef9fd1378456410a"],["/archives/page/3/index.html","0a36a9801a9a64b79aec00c57cea7445"],["/archives/page/4/index.html","5f69470d20c1528a7c0e35657a80e652"],["/archives/page/5/index.html","25c4ab345d49c81321fd275c93ef8ebf"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","8d1d075594ec3b3316e0ea472670a2ac"],["/categories/index.html","3db2f0a18484546393bc31f3e301ef50"],["/categories/ことば/index.html","8e5bdcdce3d9956011e914a86688ef21"],["/categories/つぶやき/index.html","12d76af12afb81f1e2c91fe8e8999b8d"],["/categories/アニメ/index.html","d1a77ee2dcf491814c970b6f180af9ec"],["/categories/インターネット/index.html","d3e1359aefdf7d000ededd30d90dd122"],["/categories/中国に関する新聞記事/index.html","e42fa664c85d58c63a9cab4b55c26d17"],["/categories/労働者保護法律/index.html","c51c64c7285f2f10b1246600c263a67f"],["/categories/心理学に関する記事/index.html","23ef0cba2d64f20963e103134b109ab8"],["/categories/日常生活/index.html","e0f38b24fbe299d8d460a2c433499c80"],["/categories/日本のIT教育/index.html","3d96538805afde476f579a6178948998"],["/categories/日本のIT現場/index.html","2d0e0e79e05212986b7556f57fa8d5c6"],["/categories/日本のビジネスマーナ/index.html","72e44c8fcad9b80474c535c2871004e2"],["/categories/日本の国内の人権状況/index.html","083f4096d38110196b521555c38344ee"],["/categories/日本の経済新聞記事/index.html","ef14a1d37b5bbbda5624664ed94e39e5"],["/categories/日本地理/index.html","f4ec46df50746e348ec82ac4d4125b0f"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","c6a26d6df765912ad41aaae705f65088"],["/categories/過酷な現場/index.html","eaeaf6a22275dc0c05e485f679beaa36"],["/categories/金融/index.html","5364b8e3c293b6d2b74e9dc8adedd731"],["/categories/食べ物文化/index.html","0c726f4d538b4a54d6d27c82981e5749"],["/categories/食品工業に関する記事/index.html","2dc0c864d01ce667720b16db3c3b5f3f"],["/css/main.css","47db1ae2187722fb310a4649409188e8"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","739be898b80581fd9204ce8cf39ab3db"],["/js/src/affix.js","d209a72a982d56d67dcd8b6ffe37e010"],["/js/src/algolia-search.js","c9e7ec37d6d4192526e7a99d44633e52"],["/js/src/bootstrap.js","a58f68ac61903ba97ad82941df9d50cc"],["/js/src/china.js","442179eda0f14d632b01c14704a96248"],["/js/src/echarts.min.js","6a8faa91ec0c1177003906fbcf5249b7"],["/js/src/exturl.js","1e89d2f93ee95cce9530b7b9a99fda09"],["/js/src/footprint.js","8c3e46a3bdea318486ae69cafbf4b866"],["/js/src/hook-duoshuo.js","303fee7551b203587c74bb0ffc14fb6f"],["/js/src/instantclick.min.js","4c089895c071d7bafa947ec5da4f0c6f"],["/js/src/js.cookie.js","04eefb23c30d4250004b0e3a91fd12a3"],["/js/src/motion.js","efa48d893d75a6def0384a65c55fe739"],["/js/src/post-details.js","295e7eda7070ba6ed4422ec5cb23d72a"],["/js/src/schemes/pisces.js","92828493c98c9fe7bc07bd94dfe03964"],["/js/src/scroll-cookie.js","8c5069416716dc0d26829cc53154392e"],["/js/src/scrollspy.js","5dc01ebec34cda9373b206b2ab6b3fee"],["/js/src/utils.js","f542d2be8479367d7c652997cca9eac3"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","b5366c6633aa7c998f6d02de1a4c7275"],["/lib/Han/dist/han.js","494d96e5142c50c62553fcc97999cd43"],["/lib/Han/dist/han.min.css","833f34667a86289ed29bae50f7d789e9"],["/lib/Han/dist/han.min.js","d8d4dcb8bee13c805458193bfae19475"],["/lib/algolia-instant-search/instantsearch.min.css","63f5db6031e3c114035e95bf057bc0ac"],["/lib/algolia-instant-search/instantsearch.min.js","aa9219eec47db9a59ddc141e780fdec0"],["/lib/canvas-nest/canvas-nest.min.js","d0b08d95ecd732e50a5605ada57a4536"],["/lib/canvas-ribbon/canvas-ribbon.js","56612983309a56c696a9113be83bd076"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","10ef0ac08e7f2ee34cbf14aa66d5e04e"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","6aca22a28715a2d575103641ae5f952b"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","2e05f31dd89df4581865dae8ae3dbd07"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","8d4045d05b37a583e40da172cea9c569"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f168095ea3e2573bd0a2ae3c2d7bd05f"],["/lib/fancybox/source/jquery.fancybox.css","355ae82717fcf7cc64e8b986a89fe45a"],["/lib/fancybox/source/jquery.fancybox.js","6d8739c59c1326f47d52bca678609734"],["/lib/fancybox/source/jquery.fancybox.pack.js","14940b1613d46c95b72d3c47d75e75fd"],["/lib/fastclick/README.html","d00f97a103add9a5a23d672eafec77e7"],["/lib/fastclick/lib/fastclick.js","35e283d955538f156278cb71dd3b7c9d"],["/lib/fastclick/lib/fastclick.min.js","a61d3f1c5f9022d5d49425a3b5b49d58"],["/lib/font-awesome/css/font-awesome.css","c8ae8d64dc07e4dd3766c864085cdd1f"],["/lib/font-awesome/css/font-awesome.min.css","c8ae8d64dc07e4dd3766c864085cdd1f"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","6f3a4462d251ea354e118be74d89de7c"],["/lib/jquery_lazyload/CONTRIBUTING.html","b1d4c1220b51d259f6b75affd9f277e4"],["/lib/jquery_lazyload/README.html","32072d17025d5a9e034b201427a11afb"],["/lib/jquery_lazyload/jquery.lazyload.js","9f91f80d60649e66d8af3eaa03c89a84"],["/lib/jquery_lazyload/jquery.scrollstop.js","a4fe659534499850fb900175e394fdb2"],["/lib/needsharebutton/font-embedded.css","218d068f460cae2dc2690bcd86ef2935"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b22dc22f7440ad09c9c7d346bb4d8968"],["/lib/pace/pace-theme-barber-shop.min.css","09dd743cca311387cd58b8235f62b7cc"],["/lib/pace/pace-theme-big-counter.min.css","740e0a99f2d951acb30bfa5295aaf991"],["/lib/pace/pace-theme-bounce.min.css","be14b7b7108c6f96a5f3182d6030beea"],["/lib/pace/pace-theme-center-atom.min.css","50c47b2d0f745f97107e0172ad27c062"],["/lib/pace/pace-theme-center-circle.min.css","7a712962bf905459a3fe251c8412ac6c"],["/lib/pace/pace-theme-center-radar.min.css","215693f14bd10f15e16a37b4043583c8"],["/lib/pace/pace-theme-center-simple.min.css","e3c14b93ef08b145a700cdc4e215db8c"],["/lib/pace/pace-theme-corner-indicator.min.css","47b1770462cc0749c9ece77430d617f7"],["/lib/pace/pace-theme-fill-left.min.css","01d0b1339ae53e9bea30f556af19d6cc"],["/lib/pace/pace-theme-flash.min.css","5470e4dd334d2a5e823a3fe2d79d7b3c"],["/lib/pace/pace-theme-loading-bar.min.css","d5253ad61d1da45be39bdae9772fac09"],["/lib/pace/pace-theme-mac-osx.min.css","74a189fe42cbcdf71b6159e73f7b544e"],["/lib/pace/pace-theme-minimal.min.css","53453fe86e82a94bddba256674ca2e74"],["/lib/pace/pace.min.js","eab03798b49a30fbd431cec8b8c8a12a"],["/lib/three/canvas_lines.min.js","08c0297bc727c330388a9e188351792d"],["/lib/three/canvas_sphere.min.js","03c1903d38b152bc72672f2a61e172b5"],["/lib/three/three-waves.min.js","ab218cfc30450e64b443d39dcad09136"],["/lib/three/three.min.js","aeb294015ce6ccb462d8df371d0d3c64"],["/lib/ua-parser-js/dist/ua-parser.min.js","1e4804ea2495432f0cfbbf651dc784fb"],["/lib/ua-parser-js/dist/ua-parser.pack.js","16b0985f782c1635e68b112e968c38b3"],["/lib/velocity/velocity.js","f627dd67d6cac0acaf60cf4462ec457a"],["/lib/velocity/velocity.min.js","645b5b06680d6d1c764efb7f695d2e58"],["/lib/velocity/velocity.ui.js","ff3b7dfdc09e1fbb3f468028123c2fad"],["/lib/velocity/velocity.ui.min.js","413e75dda83bd3122128baf35c15f94e"],["/links/index.html","0cc353d3ca8f20dedb327a12aad7bbbd"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","bde8679d5fa89b1d042b82eff1d3c3aa"],["/page/3/index.html","98eb39433bf74e7d1b7f56b179295af1"],["/page/4/index.html","9ee8b7d5b52dcbfd19b2f0323beeeefe"],["/page/5/index.html","e6993339175dd88473be4539f1824341"],["/photos/index.html","bc123f6120f3a7ff87b66247300273d5"],["/posts/191ddb73/index.html","9c17c1a950efac6ca62b386af4ef2552"],["/posts/1a195976/index.html","d0fa02ede7d349bdefc222e1add8e475"],["/posts/2292f1af/index.html","04dcfdb99e867cb619e111236ffda40b"],["/posts/29d57d6/index.html","99222b35fb4cc018249be5c74bac3c13"],["/posts/2fc77d95/index.html","efe3573c57d7fdfa070b929de2aee133"],["/posts/2feacaf4/index.html","d6cf82ec8653d052aa481fadafe4eab5"],["/posts/37f2c331/index.html","fc81dbead3cfb37d9d381ac5727f1eba"],["/posts/385f0de9/index.html","ff37246cd612efd60950818b5f922130"],["/posts/3caecfa9/index.html","8873d283414e367c270169e8e1c16ea3"],["/posts/44414303/index.html","c6f7884a56b918395acf066b3388893f"],["/posts/456610d0/index.html","9ea6603a96cb84a8f2121047deea5347"],["/posts/45e51894/index.html","4653b5c43e8d85a43977fd5994cb445a"],["/posts/4f1131af/index.html","7200051e1bc94c84c09f1ccad2fb2acf"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","312cb78ed9f5cf3b59bf2243c3b991b9"],["/posts/517ebb95/index.html","f08df7853e53d37b9b11c2ccb293110d"],["/posts/53bf1d9d/index.html","eb1884424cb4390ff466976465109429"],["/posts/554c2ba0/index.html","960fbdcc8bac26263856c1a2ae1c88fc"],["/posts/5f093cf/index.html","06a0a72634176b31830266580b5c905e"],["/posts/63556f52/index.html","6bb1fc10e82055effb667adf43c8f4be"],["/posts/6d49ceec/index.html","c2bcde1dd2e77d46595aeca4cf8b3207"],["/posts/6de7d9db/index.html","086c96cb73986a862a4a4c5c6ce8b0f0"],["/posts/6fda249f/index.html","d33e04bf759b04ac1d136fe0726de177"],["/posts/72f7a359/index.html","5d9bba17695181e05ce788c8a1f187f0"],["/posts/759a6740/index.html","1b6fd0a2cc282b7bf4b37071c338cc86"],["/posts/84b87417/index.html","b3ed08bd9bac84d43f1151d01b5388ab"],["/posts/8a60fcb8/index.html","236206685049b238fe5de04141ecfa03"],["/posts/8b4c253/index.html","c52e4f807a4980effe95f84df97c1737"],["/posts/92912ddc/index.html","d8f05f4cb7cb987e9777984df2bf7eb5"],["/posts/954f8e5e/index.html","4b1a79cce5af7676f556eabff4b33bdc"],["/posts/97e5bc9c/index.html","7292211af89c5855fc73e882d230dad7"],["/posts/9a5c7b64/index.html","5db25c43b589df63ec6525c2b3f661f7"],["/posts/9cf9c275/index.html","2bc94a20af37325e31ef09c4b8ec0a3a"],["/posts/ac7d0231/index.html","31b1a244bc3e9868e6354c3b30ad1edd"],["/posts/c311b112/index.html","1c0e175bfae9eafa292721ea2753fee0"],["/posts/c620d4c2/index.html","82aa799d5923ecae8da0fe6899565359"],["/posts/cfc54393/index.html","02d34313f537da763673637322e48694"],["/posts/dc5155ff/index.html","925b28d6e25eedf785a160335bfc7116"],["/posts/e1bd836e/index.html","e6e43ca2ab3e1949a8d3bc9a31f2292f"],["/posts/e248bec8/index.html","c925b25113b264595f8779834e2b223c"],["/posts/e31c0293/index.html","5d2f4672f06cca92c1825dbb5bfb3d32"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","c32f088ea627f872132b5a9e90ca399a"],["/posts/f8073739/index.html","501457a6bb0300332e60146813d9d9c5"],["/posts/f97ef43b/index.html","c7a5de90eb35a5e64e7403f7179c8494"],["/posts/fa84d5fc/index.html","3659f408a0f0a1b85ea267c75e1a1af3"],["/posts/fb1ab942/index.html","56dbb6945223cc90c1fb6fd5cde5f4d1"],["/sw-register.js","956bb5700356a06381b30b3eabd19a1e"],["/tags/J-pop/index.html","bcfd162505262e06b1613a9dc1402ef9"],["/tags/index.html","d8c339f84144f4e9af433193e6670ad5"],["/tags/ことば/index.html","80af1dc826c957b97d1164ea91ed77f7"],["/tags/つぶやき/index.html","faa23f14b1a17a7c1377e64ddae371f0"],["/tags/アニメ/index.html","351f25ba6c443f7ee89e4f4b10f3e3f7"],["/tags/インターネット/index.html","a4d0a170a696d4976834071d781a115a"],["/tags/チョコレート/index.html","a2323184e39ecaffc3c295405cfe5f71"],["/tags/中国に関する新聞記事/index.html","6fbe35e50cb08f61242b0fc8f6e0423c"],["/tags/乳製品/index.html","74b9a0868a96073da8e1bb1803675e91"],["/tags/労働者保護法律/index.html","a07dd8baf5b0341aa3d9630bb0bc2f45"],["/tags/心理学に関する記事/index.html","23bf2ef8ccd897028f9b23184c029293"],["/tags/日常生活/index.html","a742dc1a8c5c9c3b7b2a04a813b61582"],["/tags/日本のIT教育/index.html","f3907298d39afbd8f0b77b88f89e42df"],["/tags/日本のIT現場/index.html","a250727aac9331b62669361ccd3a868e"],["/tags/日本のビジネスマーナ/index.html","81eb6dbedb13825da9cb9fc4798db6eb"],["/tags/日本の国内の人権状況/index.html","5d9c394c18f37d44eb67d2159fc07aa7"],["/tags/日本の経済新聞記事/index.html","2dc3155aa55da8c85e9867c09f721bce"],["/tags/日本地理/index.html","ba8eebc4932111bb805aae8235743734"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","54440744bd69b67cf98669a8bcd138c6"],["/tags/過酷な現場/index.html","9551abd7bb434b05dd8f50abc4cae67f"],["/tags/金融/index.html","856564660f2d132561b66216c033388f"],["/tags/食べ物文化/index.html","ba598fe46dc0d63222db8f800aa2b487"],["/tags/食品工業に関する記事/index.html","da743ac4364e67c746efde00c3fd297e"]];
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
