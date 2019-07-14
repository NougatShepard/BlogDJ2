/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","f6543853d03d4148640a4d205b81fe3e"],["/about/index.html","30d4a6c4926942c29f0965baa64a9eae"],["/archives/2019/04/index.html","03edab337bfe45286269685f2e22204d"],["/archives/2019/05/index.html","2b45140fba6d87615c27997f8cab4117"],["/archives/2019/05/page/2/index.html","db989b2ce7430f0b1febf88539f41e45"],["/archives/2019/05/page/3/index.html","78ffd26738d949e0b58454ce05d07e77"],["/archives/2019/06/index.html","8ce9e86e659e0833dab9bc62f815061b"],["/archives/2019/07/index.html","abcfde9981106c39bc67493037140e80"],["/archives/2019/index.html","9d7e9e5e89518e18a80088fd636f3274"],["/archives/2019/page/2/index.html","02175ce6ce1922171c91162eff28dd20"],["/archives/2019/page/3/index.html","5eda413f2879889f62a903afa2a67f89"],["/archives/2019/page/4/index.html","935ae6a6c5516d139ecc107c64a402ba"],["/archives/2019/page/5/index.html","793ddd5ec181ea6245805f0b92164e93"],["/archives/index.html","e34a0521cb62d5c64e1bd2addd83ba3d"],["/archives/page/2/index.html","7625f2d8b46a16bbfd5eab4c6ff0dee9"],["/archives/page/3/index.html","dde0765c0d4f9c3d6d5e170c155a76ee"],["/archives/page/4/index.html","5c5e010fe89ccf049ea30e0ed8f55406"],["/archives/page/5/index.html","671f8b782e0017dc92802822d56c6f69"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","56a73e7c5553dfb426df3a9c94c268eb"],["/categories/index.html","6a20bb442bd73e2fd377bdf048d07d49"],["/categories/ことば/index.html","8986d218792becc1e614dbfe1df39ca5"],["/categories/つぶやき/index.html","64a4af3dbc358173c5196e4cfe159a32"],["/categories/アニメ/index.html","29b27d1eb04d304ebcfad947de786888"],["/categories/インターネット/index.html","f036dcbaff1f78c3ca8e7f89aa1660be"],["/categories/中国に関する新聞記事/index.html","cb78a26a1ff94023a004d4e335d39b87"],["/categories/労働者保護法律/index.html","76cc519761e9b20ed76e87755ddcb70e"],["/categories/心理学に関する記事/index.html","c006d84ea935afbe6781cfa182366f65"],["/categories/日常生活/index.html","9d32aa8a3c2c040b88836dc37a9f511b"],["/categories/日本のIT教育/index.html","21aa71f1b4a181e6609ed35d4ccd4dd9"],["/categories/日本のIT現場/index.html","eded09e9ea1dc40b54f159cfe4f3e5d5"],["/categories/日本のビジネスマーナ/index.html","ffe73801b3c883c4d302a6c7d62d119f"],["/categories/日本の国内の人権状況/index.html","76474f4e1325e4b62f16eba3fb6454b7"],["/categories/日本の経済新聞記事/index.html","7203ef480f2c22b195453dd0bb756b28"],["/categories/日本地理/index.html","25082378053d66d38e637134c244e688"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","e86b3711236a4e72b9f4afd8d68ac8ac"],["/categories/過酷な現場/index.html","351f7add5c6758e9f09825233cfcddcb"],["/categories/金融/index.html","2407a08dfe10b0ef48c0a6611d0e8dd4"],["/categories/食べ物文化/index.html","25a267c51fed45fb3952ed4c12aaab59"],["/categories/食品工業に関する記事/index.html","ebae4268ad465ad3e8383123aac1f025"],["/css/main.css","67e11259031d4bbb6ead9b145e0a2d08"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","042c75a2a8f2ec4688f0057edb7e2768"],["/js/src/affix.js","629eb1559a91ebbc44a5b48877be9c52"],["/js/src/algolia-search.js","6fad98407bb153fbb0fa8ff3b9829eec"],["/js/src/bootstrap.js","aae1dc1a209f0b3a8b1166a34d128fac"],["/js/src/china.js","ffb84d507fe9a799f75dd08fe0512a52"],["/js/src/echarts.min.js","9ca1f04165bf701bba902b6251faa0be"],["/js/src/exturl.js","0786e6b8e5e387df9412a23d572c23ee"],["/js/src/footprint.js","bbc69e3c1acec883da9aee1ad192f184"],["/js/src/hook-duoshuo.js","268e43b2883cb997ae0c14681139678e"],["/js/src/instantclick.min.js","d9eb4ba6975e2a83b36d62569725ed26"],["/js/src/js.cookie.js","3b944db36468bb43c710991c7b264626"],["/js/src/motion.js","44b98ec6d3f3b5298b1d07d9d08edd49"],["/js/src/post-details.js","8745bf3e0aadc1de000c06210138117b"],["/js/src/schemes/pisces.js","1324f7d5f116d9ebf563bdd66ad73d28"],["/js/src/scroll-cookie.js","f2ac9e39413b89a3ac12afd57127dbaa"],["/js/src/scrollspy.js","592f428970e0d5d8ae9119230147fdcb"],["/js/src/utils.js","89a1d30fcd38f7cbd98e8e66a5b6abb0"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","81c84b3e269aa2499618894da9af36e6"],["/lib/Han/dist/han.js","41c21fd1f8bbf4ec08b06786a310d1b3"],["/lib/Han/dist/han.min.css","e4892f58fd90df7437ce479ca023951b"],["/lib/Han/dist/han.min.js","d7bdab27a57161cbcc5cb30977ebdcec"],["/lib/algolia-instant-search/instantsearch.min.css","5c0221067e605cf9fca3037a7876bdd4"],["/lib/algolia-instant-search/instantsearch.min.js","930a4fbed93f5dfdab668cbba67c245a"],["/lib/canvas-nest/canvas-nest.min.js","6e813f22cefa8bc79adaaef3ddaf7285"],["/lib/canvas-ribbon/canvas-ribbon.js","47b076591d777e824fc5b89b670ea243"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","eb722517c4b83ba760333b640645d422"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","a18e40f2747864b9a101d2f560f15314"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","f7980d0e33a07bacd265340d135dfe1b"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","13036fed387cc676c804d88b3812ff19"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","f5556df901ddad62287c85a2cf237cb9"],["/lib/fancybox/source/jquery.fancybox.css","9ef8da655c75763232b75fcf15175b87"],["/lib/fancybox/source/jquery.fancybox.js","f41a9e975740626c7322d9376054b2fd"],["/lib/fancybox/source/jquery.fancybox.pack.js","bd79e6a025eaefe988388f12dd62ebc7"],["/lib/fastclick/README.html","b2b28deee3b2e5139f2b569afa5daec5"],["/lib/fastclick/lib/fastclick.js","58f81f46d662a15fc29b483a3216a49e"],["/lib/fastclick/lib/fastclick.min.js","74585714955a993b15f206909ee8d92e"],["/lib/font-awesome/css/font-awesome.css","d31e232bcabb308d73ba00d42675e9be"],["/lib/font-awesome/css/font-awesome.min.css","d31e232bcabb308d73ba00d42675e9be"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","cf6ceb296b0132b8c1b6d28f4828ee3c"],["/lib/jquery_lazyload/CONTRIBUTING.html","62d5985e092e8aeba99113f118568fef"],["/lib/jquery_lazyload/README.html","b1f43149b9c87d8c61e78996043b675e"],["/lib/jquery_lazyload/jquery.lazyload.js","bd561a340a11f193e781630e4bef79cd"],["/lib/jquery_lazyload/jquery.scrollstop.js","0d9ab244c56567b295c6e2d9692560c9"],["/lib/needsharebutton/font-embedded.css","de94490eca5bbdf008d5ee1f5c50cfda"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","99ebe4e8b60345d84cd48cebe30dbb4e"],["/lib/pace/pace-theme-barber-shop.min.css","6a1b0e881d2fb8d87db428d76c569329"],["/lib/pace/pace-theme-big-counter.min.css","29f0028ee3296104926d47a9bb99510a"],["/lib/pace/pace-theme-bounce.min.css","c51f59f506c48cc7d78c07f1ef54819a"],["/lib/pace/pace-theme-center-atom.min.css","9bccffcce2282e56997bc05d76a431b7"],["/lib/pace/pace-theme-center-circle.min.css","66b772d4a5e1ee54d1974feb9c74ae1c"],["/lib/pace/pace-theme-center-radar.min.css","a8d51d1064c529049a41765562383f59"],["/lib/pace/pace-theme-center-simple.min.css","af7596f62a21d6515f4f1c9b0b31fcc4"],["/lib/pace/pace-theme-corner-indicator.min.css","fcc6cc6af2ada2d051b49a67906d117d"],["/lib/pace/pace-theme-fill-left.min.css","90e941b1f8260c4f819baa7a5ff8f3b9"],["/lib/pace/pace-theme-flash.min.css","2436bbbf6f49df9b6c0542e11c6571ee"],["/lib/pace/pace-theme-loading-bar.min.css","7e215e5c3f4767accedc11c756e28740"],["/lib/pace/pace-theme-mac-osx.min.css","96755e0b86040cf385c54653167ce6d7"],["/lib/pace/pace-theme-minimal.min.css","44b6d15ebe9dd6eeafc5013790f950fd"],["/lib/pace/pace.min.js","27b6c62c95a95079c2f036b6274bbda8"],["/lib/three/canvas_lines.min.js","fc4273d9238112063ab0b9902ba342ab"],["/lib/three/canvas_sphere.min.js","ac746c433b23de8caf1cfb469f5694fd"],["/lib/three/three-waves.min.js","6c9d851cd6743eb3741b3107480da940"],["/lib/three/three.min.js","c939c7803c415ddae077ade0507c8b84"],["/lib/ua-parser-js/dist/ua-parser.min.js","84d2fe4bf7a8a564860f9d7425e583c4"],["/lib/ua-parser-js/dist/ua-parser.pack.js","35bf8838b1b01f53d4cf49ae8912c9cf"],["/lib/velocity/velocity.js","435b9501e53f09b84c2c5d9eaafc198b"],["/lib/velocity/velocity.min.js","243c51b70df4560c920e50cdc7d18d5c"],["/lib/velocity/velocity.ui.js","01faddf15fed71d96caa41b43e72c457"],["/lib/velocity/velocity.ui.min.js","aec6d73707a47db44d9347c5311c3399"],["/links/index.html","3e2c41f34a9fac182d7ac56f717c6649"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","b1f4fb3094a82d800e6d657ab2a39900"],["/page/3/index.html","87142ce10868b15b71422fef9d24674c"],["/page/4/index.html","73c1c737ae590597b915b2070dc51b80"],["/page/5/index.html","581b41597ff63e7f6e16a5dbb812b39e"],["/photos/index.html","c6ba4de6e315e45342adca3aa98d8182"],["/posts/191ddb73/index.html","fefa6890fb731dcd0db106b651f99859"],["/posts/1a195976/index.html","4a0f1e3991942c9e686a886da533beeb"],["/posts/2292f1af/index.html","4a3c334510e7e301bb33dd60252feb30"],["/posts/29d57d6/index.html","f5105d29a1aa1c51f1847bd1acf24271"],["/posts/2fc77d95/index.html","7254b7c7f5ca526c7c2f87aefc8354f3"],["/posts/2feacaf4/index.html","377cc40b2211a07d9319ef20a96e8417"],["/posts/37f2c331/index.html","0facf75ebd7a60565527a45118aed708"],["/posts/385f0de9/index.html","c113665116aeba5ea5b791b9382a6fe3"],["/posts/3caecfa9/index.html","60b266550ea60e3a8505eb89ad4504f8"],["/posts/44414303/index.html","8f89e889e3a9c69780837197ef8be7bb"],["/posts/456610d0/index.html","3e540b4081e8577d7dd77d95a1069bb9"],["/posts/45e51894/index.html","6fd1e5c1606e218fbed6cdd96cf57486"],["/posts/4f1131af/index.html","3f69ad436c4c9d0883774c0d7e57f415"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","c634cbc01d97edbd4d2c1bb394c7548a"],["/posts/517ebb95/index.html","2d15f91cca4aa1c3202b326c08359554"],["/posts/53bf1d9d/index.html","645b25335f2b298b089b088af684f5ec"],["/posts/554c2ba0/index.html","88ae9c3a31554719dd6c29eb15cf8f69"],["/posts/63556f52/index.html","a96d99d5af5ac3ab079c350e4b3d017b"],["/posts/6d49ceec/index.html","de72e8549f99b03bc76e150236899433"],["/posts/6de7d9db/index.html","70c6ddccfe1c0ebfd3dfbdff02fc38b1"],["/posts/6fda249f/index.html","9494ba225be9444c36efdc8ef249540e"],["/posts/759a6740/index.html","8e66e17b51b27ebb09fb092b53e69649"],["/posts/84b87417/index.html","28341e4329419ff7f1d9e8257c0b246a"],["/posts/8a60fcb8/index.html","c2323ae9e1e6d5170ae4a1579a9506ab"],["/posts/8b4c253/index.html","aa602f94d0e4938718abfbd2b2d994a2"],["/posts/92912ddc/index.html","f2dd72d0b102929d076924aad5a57808"],["/posts/97e5bc9c/index.html","0a387cc27b7cf58910156f5c78e82d5f"],["/posts/9a5c7b64/index.html","ed8ac1fc82ab934abe7f1b113df557bd"],["/posts/9cf9c275/index.html","c321cf5ae6d69e9a9ace0b1b434f0f0a"],["/posts/ac7d0231/index.html","ca7d6b138353ee08f572624532e8cb8b"],["/posts/c311b112/index.html","cc81c2670def9f10bab00d98d25950b2"],["/posts/c620d4c2/index.html","37db0a00d6440ab230ea0791c3b6d957"],["/posts/cfc54393/index.html","220a275be4a1ca8b32559fc5aa8bb691"],["/posts/dc5155ff/index.html","5e207540d10b5def7d150fd25534172e"],["/posts/e1bd836e/index.html","88c353981ff318d06dfbdfb06b8774f2"],["/posts/e31c0293/index.html","c67522631017d1c8b6ece20f4463cb60"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","910cfd0da3e31a8c1333c213d1d04eda"],["/posts/f8073739/index.html","08f3eb31c39e091cd2e802563d2407da"],["/posts/f97ef43b/index.html","94c8ff95ffc3f6b2267ba3ac7d982d92"],["/posts/fa84d5fc/index.html","a19d7b9b73fd4f774e286687a52ec14a"],["/posts/fb1ab942/index.html","ad077ddd0492ba2f18d3a2a2728aee43"],["/sw-register.js","3ecb721a457aa5f87e85f622334be4ac"],["/tags/J-pop/index.html","79b980ed26c9be88b5c7b3b971137c48"],["/tags/index.html","d65dc01f4180dd7cd11ffcc64a5e2cbf"],["/tags/ことば/index.html","e1056fb8c6ff09b8c9a64310659af0a7"],["/tags/つぶやき/index.html","e57c6cff59bb6472f1daecde1fc33cc2"],["/tags/アニメ/index.html","4ed8af76dacefa47e6fd23d72971825a"],["/tags/インターネット/index.html","d55c48995796e08dfa0eb79f8600efde"],["/tags/チョコレート/index.html","6a6226ba983792db811bf0e3170fe30a"],["/tags/中国に関する新聞記事/index.html","30f0bd334427154f6ff79ab8256a143f"],["/tags/乳製品/index.html","7db93467759cc7c0ca57d53b8d24a9f6"],["/tags/労働者保護法律/index.html","06f8122d54a3a0d1557e72c90a922d49"],["/tags/心理学に関する記事/index.html","3c52877d8f8e2c3aac732b9d2fb9df47"],["/tags/日常生活/index.html","ff542c2307a6f401f10e9d4353c27ccb"],["/tags/日本のIT教育/index.html","f6bf1664f79f19f0a0fb12d548d38782"],["/tags/日本のIT現場/index.html","7d12346f6e9403e112f8e5d94cf48e38"],["/tags/日本のビジネスマーナ/index.html","7ebba376bb7d9988841be672586817c7"],["/tags/日本の国内の人権状況/index.html","65d982c26bbedf04fedd3a01f8d82c4f"],["/tags/日本の経済新聞記事/index.html","b5fb70779cb8daa9a532ae8e02a61395"],["/tags/日本地理/index.html","59ddf2305567f629e1c9f6012cd61f9c"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","5c55ab5fe373fd38bf7cfd78d4dd22ad"],["/tags/過酷な現場/index.html","0a06f4a7301c715afa4c05ca1a8c9c45"],["/tags/金融/index.html","4cf264d95cbbd4cd976796e43ab4090d"],["/tags/食べ物文化/index.html","ce2bb4d2c9aa5bcc9a1d8eae4345d576"],["/tags/食品工業に関する記事/index.html","da7318c69aa7220211ff08d10a9a016d"]];
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
