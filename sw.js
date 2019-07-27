/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","47efba8d958139e87c075c0a21010b8e"],["/about/index.html","fe51bd0f8ec4d81f7dcf859665836bfc"],["/archives/2019/04/index.html","92794447aab5b6e3d939bc59b2fb94bd"],["/archives/2019/05/index.html","01af9b95c397e3eaf0ac5d18aa40bb56"],["/archives/2019/05/page/2/index.html","8ba04609812dbfafaac3a04ac67119a0"],["/archives/2019/05/page/3/index.html","99bda9a36bc9538ee12df5547d8c525c"],["/archives/2019/06/index.html","d0e33bd576ace8496cfe4274666afdfc"],["/archives/2019/07/index.html","8a0c974dd625da36220bd28870d11b20"],["/archives/2019/index.html","0f61a966c4fc710f473a2ebbfb8bdc86"],["/archives/2019/page/2/index.html","6482efe6ff6fa0c921740bfd32c813f3"],["/archives/2019/page/3/index.html","41af829a18b1494ccc2c6b6443978993"],["/archives/2019/page/4/index.html","541ec986903ca31abde7aa2042dfd4dc"],["/archives/2019/page/5/index.html","abd679e6b013faef62b8e8757f0144c3"],["/archives/index.html","44f930ce9778d206b4204ade07eb81c5"],["/archives/page/2/index.html","bed6f7514cf556bee8ba804560c2e1ce"],["/archives/page/3/index.html","7c70f937c75b276d3e29e0dc261d601b"],["/archives/page/4/index.html","937bc0e48be96fae5a4a7eb62af1a051"],["/archives/page/5/index.html","c415f71d0044e00203ad1683dc536f95"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","dfcfdbad21e45d655f71d8b851cf569b"],["/categories/J-pop/index.html","b9d273da639dbbdfdec6597ed02b2e05"],["/categories/index.html","2d5a7d440c9aba923cc5fef44dfe323c"],["/categories/ことば/index.html","2be0184f19bbcff5a3e0e9cc42d2382a"],["/categories/つぶやき/index.html","1a0cf02cb9ecb3ba616eb6d8756073ee"],["/categories/アニメ/index.html","e8442cec8a50bb19a0ad9933375361e9"],["/categories/インターネット/index.html","93a222503328826d08a4538dabc29dea"],["/categories/中国に関する新聞記事/index.html","fedeca7224d63894c86ec67d37c22301"],["/categories/労働者保護法律/index.html","9784672c6d508bc92801d8e93fe1a12b"],["/categories/心理学に関する記事/index.html","a28b5be9d1f4e5de41f9b267940a467c"],["/categories/日常生活/index.html","b778d42dac20479d7d33b876afafacec"],["/categories/日本のIT教育/index.html","0f17195e2f89558319fdf557b2c9e8f3"],["/categories/日本のIT現場/index.html","8e3ce4d5fdd3b80d3a14b08d2a25046e"],["/categories/日本のビジネスマーナ/index.html","6e88857d229a02e5e1c4f0d4d30be471"],["/categories/日本の国内の人権状況/index.html","8d2b16966433e6602a5afa8d998a48fb"],["/categories/日本の経済新聞記事/index.html","9332c25a789d5aae9f0cfd343aee03e7"],["/categories/日本地理/index.html","ddc065d8eddc37f580625d1d26ee2a8b"],["/categories/毎日ことば/index.html","3cddd4d2a95fb2a44118f4cfff86f202"],["/categories/环境/index.html","de2e849bacf93fd135e60ddecfbfd108"],["/categories/過酷な現場/index.html","c178359483e3f9b5961e9f8a377f599d"],["/categories/金融/index.html","0dac90f72e6d3cfbe30169907e881284"],["/categories/食べ物文化/index.html","7ccfa1914d53e27a5e028dcc5f7ed0aa"],["/categories/食品工業に関する記事/index.html","e69c6024fdb076ae625071347a20a021"],["/css/main.css","752c05e85f1c02f2bbdc46508dd3a55c"],["/games/index.html","85baf2cca617a9b38ea75be3063cdaba"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","60bb29e43663c3c810454439c4f2979b"],["/js/src/affix.js","b6a0a92234962f59adf45c7e928d1b08"],["/js/src/algolia-search.js","9bebffdd62de423cbc8b46845c10cec7"],["/js/src/bootstrap.js","487aa67fdf59ba09a355d5b38fe54f70"],["/js/src/china.js","468741c2d9543555093bddc5efaf9b99"],["/js/src/echarts.min.js","3ef3da77049f34560c00c56e47e35c48"],["/js/src/exturl.js","bc65bafb1a0b3e17a01361b6f59be947"],["/js/src/footprint.js","d251811b48934749e0598b08201eefea"],["/js/src/hook-duoshuo.js","f9f173d106c8c27698de16d799344bc0"],["/js/src/instantclick.min.js","3793dee222d4cf37e71421c6fbc7d8e6"],["/js/src/js.cookie.js","d7d741b62ae6d918d90e8679c5f9af9b"],["/js/src/motion.js","284d6e56cbcd43e389515830672ebb8b"],["/js/src/post-details.js","57f217cc293a609739654b1eb3ec1d37"],["/js/src/schemes/pisces.js","06de4021d1d405443100ea15daf09fca"],["/js/src/scroll-cookie.js","0e83ffc05beb22736b63aeede855945d"],["/js/src/scrollspy.js","1e1400be7d5334002f3c39af6b623daa"],["/js/src/utils.js","fe67435b3307d11bc595a818709b48e6"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","980f9106a176d31e06008b904315b65b"],["/lib/Han/dist/han.js","e69635883abd12a742b0e90caff6b15b"],["/lib/Han/dist/han.min.css","a9f0aea2cf3826a10c3a5ee166352b86"],["/lib/Han/dist/han.min.js","f77b693dbdbba1485c60cad077f21b7b"],["/lib/algolia-instant-search/instantsearch.min.css","e2e4a1d11816593a7808b1f05a466333"],["/lib/algolia-instant-search/instantsearch.min.js","8332f4f82791abba036c50c2e6983f4c"],["/lib/canvas-nest/canvas-nest.min.js","749c2a0082b050c6ac73db8b25172dcb"],["/lib/canvas-ribbon/canvas-ribbon.js","976b1c133df297b0fbc914ec1579c346"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","0c08c97b7aa7aeaa84d347f30befca6d"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","e93111532447efb84f4c76a94ac8a930"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","667408db26742382d7469a71e337ace3"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","fffe84f3cda6b5db4eb0ddefa051f126"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","814334b3140fe9f4641d63e6880d3b5c"],["/lib/fancybox/source/jquery.fancybox.css","0bdf26a2e74fd6477d6d551d7e3efddb"],["/lib/fancybox/source/jquery.fancybox.js","670c2c5983792c06eb0ed4c0996f6ef3"],["/lib/fancybox/source/jquery.fancybox.pack.js","125ad94d589c06c54be5f284d2fa2fc2"],["/lib/fastclick/README.html","0a0a27950e75db69a5d5c7547f7ea4c2"],["/lib/fastclick/lib/fastclick.js","10c5fb5986aad5884487a73b5db3e7d7"],["/lib/fastclick/lib/fastclick.min.js","bd0dec18a2cd3a7f734a0d2de94daa64"],["/lib/font-awesome/css/font-awesome.css","5472b9da736400cc96ac3ecc80f7693b"],["/lib/font-awesome/css/font-awesome.min.css","23890b5f32401f36e6cf10f4c7626a8e"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","4771f20fec9df7d89b7304b6ca4b0420"],["/lib/jquery_lazyload/CONTRIBUTING.html","28c918a356d9e972d6221ffed8a1be57"],["/lib/jquery_lazyload/README.html","4cbbf2a431b28103de034099ee8016f2"],["/lib/jquery_lazyload/jquery.lazyload.js","6d7614b4f3a3ae33285024ba8ce9b0f1"],["/lib/jquery_lazyload/jquery.scrollstop.js","f0e43204fcac772b6421707e83d8945a"],["/lib/needsharebutton/font-embedded.css","3b0bd5bf44bf3c292aecf3f994f6f8d6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","b795c6c98ac2f67292f1733a86a782bf"],["/lib/pace/pace-theme-barber-shop.min.css","46744d52cb619fc81aa2ed16ba138373"],["/lib/pace/pace-theme-big-counter.min.css","226c1daea34479ebecebfb7d57960d52"],["/lib/pace/pace-theme-bounce.min.css","db48ff8fba0436b32271965ec79cc1bb"],["/lib/pace/pace-theme-center-atom.min.css","53d7c92fb96f7f039f7c34e1bac3c22e"],["/lib/pace/pace-theme-center-circle.min.css","09ba8c1f93e87d7790554a1ed499dc65"],["/lib/pace/pace-theme-center-radar.min.css","450f02e6bb2f416f97c5d0042848c65a"],["/lib/pace/pace-theme-center-simple.min.css","efed0071c93005fd53b3e8be3dce9211"],["/lib/pace/pace-theme-corner-indicator.min.css","4004d5b8af565ce98540e20c0eec392f"],["/lib/pace/pace-theme-fill-left.min.css","7afdb3d034ef6d37dadc25c8b6e99e57"],["/lib/pace/pace-theme-flash.min.css","582cb81ad23736f523ae365d7a473bb4"],["/lib/pace/pace-theme-loading-bar.min.css","b18f0ffc3fa22ac310ad5591a64f06a9"],["/lib/pace/pace-theme-mac-osx.min.css","0055de167bbf4c6d8cad0bfa905e4bcb"],["/lib/pace/pace-theme-minimal.min.css","759ca5ba8d7c35917a0ba8f4a9b8a2b6"],["/lib/pace/pace.min.js","96325571c0c9ca4382fd85f7846e97a1"],["/lib/three/canvas_lines.min.js","b53bde2ea3f27191b1d3520b40f88142"],["/lib/three/canvas_sphere.min.js","44c28a93b05cc493b4fb9def4b135110"],["/lib/three/three-waves.min.js","82023c95fe18d45963d65fba6e387e89"],["/lib/three/three.min.js","682b4fed43e7904c5af9d8f884cff7c0"],["/lib/ua-parser-js/dist/ua-parser.min.js","4a97c388de218aa432e19ed86f656636"],["/lib/ua-parser-js/dist/ua-parser.pack.js","fbd8cdb78fa62baa12ae33d78b10fcf4"],["/lib/velocity/velocity.js","ff88e5991b1a0744e415117a5b2aaf93"],["/lib/velocity/velocity.min.js","dedba0ce70bd7630cfa0463f0128ad31"],["/lib/velocity/velocity.ui.js","fd493316e447d6555f3d7f47265b305f"],["/lib/velocity/velocity.ui.min.js","28666d63b47eccf05a8c0d43c1d7acf0"],["/links/index.html","0a8e258ad49760c0049e5def8cdb850f"],["/movies/index.html","77150963c2416cdc075e4fc004cc498e"],["/page/2/index.html","b8c1c4ad5c59a1792c75c3239e2d7503"],["/page/3/index.html","6e8b38686c45a28fc49f9548a7bf4618"],["/page/4/index.html","3a8643b0444f3b49ed402ae69cb398dd"],["/page/5/index.html","5d95d45a4f48eebc76ed437c66b2e025"],["/photos/index.html","8676ed21172cd42f2e13aac74b352e58"],["/posts/191ddb73/index.html","0993ce139d708079e39256856cea31db"],["/posts/1a195976/index.html","bf1d9f814e0b0d8d620f56386fee9c63"],["/posts/2292f1af/index.html","e0a780b4fd137e6d63b1cb46b2dc7f4c"],["/posts/29d57d6/index.html","8715a9f21ee3790d9fb6e222f5333137"],["/posts/2fc77d95/index.html","f72525b9ea811e460c5b7d8ef2a94758"],["/posts/2feacaf4/index.html","cec346a2687281a99433eb1519dd47e2"],["/posts/37f2c331/index.html","378cd7fc89b43d9023d08c70bd19adb1"],["/posts/385f0de9/index.html","cd6709cc5b66437826dc5285d43a63e4"],["/posts/3caecfa9/index.html","9ad544d1190793ea172d226b7cd2ba3a"],["/posts/44414303/index.html","4e19c03262b7a59fb0d0342f4684700a"],["/posts/456610d0/index.html","faf47586c55ef60d18fca78b47085367"],["/posts/45e51894/index.html","ef5b663f598a395959d4500da1b953c9"],["/posts/4f1131af/index.html","5b776b0df6634958603613de52788204"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","885fce34d656433653ed33df8f5aa6ec"],["/posts/517ebb95/index.html","95f5c718607d047fe285309185d4c5f2"],["/posts/53bf1d9d/index.html","5223540a33f82fbbc94adf677acbc244"],["/posts/554c2ba0/index.html","5a120c81e6e60a22fe077c8948c51b96"],["/posts/5f093cf/index.html","d26f35de85b6165eced5946c446aafe5"],["/posts/63556f52/index.html","6a62b62f6f462d1c61e50f1fe00799e8"],["/posts/6d49ceec/index.html","fc8b15be848c90ebcfe85ce640898ecb"],["/posts/6de7d9db/index.html","1c9383cc7309c9c7cf49ceeba7b485b5"],["/posts/6fda249f/index.html","5dbd3a0761ddb1dba5bafde6eb3aaf2f"],["/posts/72f7a359/index.html","55eb47193952c56390e266a50e482df0"],["/posts/759a6740/index.html","b6d855c410a038df5a2855b7bcf0a383"],["/posts/84b87417/index.html","5ed730db1d10ebeb950f88edf8b3afb0"],["/posts/8a60fcb8/index.html","bd23000997f0bd850261d4d3682c5a58"],["/posts/8b4c253/index.html","a13e806c908bbed2d345ccd0c6ade4c5"],["/posts/92912ddc/index.html","822830aaf282f9d52f9a722f29d3babd"],["/posts/97e5bc9c/index.html","c21914993074c48393a9ab0d49b3a1ba"],["/posts/9a5c7b64/index.html","784675063aeb826a13a8e0dd5424340e"],["/posts/9cf9c275/index.html","9c5a179064fd7612abe756976391f33b"],["/posts/ac7d0231/index.html","521ab296359fd0c3869501451c869e86"],["/posts/c311b112/index.html","d7a83557c2ec0036d596eeaea29534fc"],["/posts/c620d4c2/index.html","7dddcc20e5bf373332a8f038953ccf93"],["/posts/cfc54393/index.html","b1106a31e1ede271cc77ca383ff8ceb9"],["/posts/dc5155ff/index.html","6a3d4d631af471fedb93bf36a7fa8f37"],["/posts/e1bd836e/index.html","09d30ad7cd06bccce86811e690b4aabb"],["/posts/e31c0293/index.html","3a04ae34a89fc97a1fd4c712d434ee09"],["/posts/f1b0ad49/index.html","b54590379ed3eda6a6e3078d524288eb"],["/posts/f5fc4461/index.html","69c7cf336d5a036f754b3d950776d3d1"],["/posts/f8073739/index.html","6b87781c7e234b6e5c2575d60d1b8f9d"],["/posts/f97ef43b/index.html","e825da295a0822ecabdba9b288d9243d"],["/posts/fa84d5fc/index.html","a2f022c8c7941d0f202db228173d258a"],["/posts/fb1ab942/index.html","c6f7de33c0a736a6e0299bbf9e42e82e"],["/sw-register.js","cb5c428275e86c313d956340ca19659c"],["/tags/J-pop/index.html","2743582e3dcd12529d6f7475793b4658"],["/tags/index.html","e3faeff1405112f89277a84c1b7e2fab"],["/tags/ことば/index.html","7b838bdeef98356616a914e8dd9af414"],["/tags/つぶやき/index.html","ce6943abd92659847b5a18520841586c"],["/tags/アニメ/index.html","04ea2781a009eb99095a24dd8ffececd"],["/tags/インターネット/index.html","389df25e1c720e3464a628cfeaafc1a7"],["/tags/チョコレート/index.html","9d0d1f184c00a608d619090135bed917"],["/tags/中国に関する新聞記事/index.html","5cc1ec00aa72cb5041d06c8100e49929"],["/tags/乳製品/index.html","5932f394d157197d7c36ab103dff93c0"],["/tags/労働者保護法律/index.html","e7db30d5378f292e3a32babe80273b90"],["/tags/心理学に関する記事/index.html","7e7b58155140aa2a49a403db52fb7918"],["/tags/日常生活/index.html","cd5ffa638acbfa1b9f388a2c53a12c79"],["/tags/日本のIT教育/index.html","c7f89fc29036d4bf9374b27f525d3385"],["/tags/日本のIT現場/index.html","9dca399786117239ac0b21db836e526c"],["/tags/日本のビジネスマーナ/index.html","cb10e8f2ccad01e814c95399762f1b4a"],["/tags/日本の国内の人権状況/index.html","d04402c0a7e40395cf1926f4c3060aad"],["/tags/日本の経済新聞記事/index.html","703b8e95ca696c8632f371453a9a6112"],["/tags/日本地理/index.html","90231ca2d99c17dc561a352dda905304"],["/tags/毎日ことば/index.html","fa0a86e315cab1ac2356b124cefbf3a5"],["/tags/环境/index.html","9463797a1f38ee8ec14e4c33c26ad825"],["/tags/過酷な現場/index.html","06a03f51da0fa506fe63dd5d21a9b203"],["/tags/金融/index.html","6cd2cd4431cdffadabb25dac27945872"],["/tags/食べ物文化/index.html","d96d8b7d445a177ff2f8e901628ac35d"],["/tags/食品工業に関する記事/index.html","9bcf9d71c57a34e58ef0df604e506afa"]];
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
