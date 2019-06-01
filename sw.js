/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/TimeLine/index.html","945fe6730ce8c22a92f5140958b68b89"],["/about/index.html","617e157b3a1f8a5d2dece3de0177aa19"],["/archives/2019/04/index.html","0a2593dfba71d6b407aa3639acaf0c5d"],["/archives/2019/05/index.html","554c03e897b5fb854b16bb7dc218792b"],["/archives/2019/05/page/2/index.html","3493a298721def47e9e30a19eadbcf91"],["/archives/2019/05/page/3/index.html","f122919f4ac592363c08a32226cdf118"],["/archives/2019/06/index.html","b30adc886e2ab394b751b5368b279df4"],["/archives/2019/index.html","dac2a3eaa1b25ed0a91a506606b30e56"],["/archives/2019/page/2/index.html","e2b1498a8b9c5b60b3631b418d261e41"],["/archives/2019/page/3/index.html","b61cdb23297e3cdd80aa5c05edb4d959"],["/archives/2019/page/4/index.html","058cb1dd544260a58e19898e2945e604"],["/archives/index.html","5200833a85662706327009a297afbd46"],["/archives/page/2/index.html","c3d0281fedfcfd80c9f4515b470baabc"],["/archives/page/3/index.html","c88a0b51b7f51a17011ff8224df08312"],["/archives/page/4/index.html","f28d1c3874d26dda32e18ed0d1b2caca"],["/assets/douban-loading.gif","ee77c5f36ee70eed3447db5bb7dc4017"],["/books/index.html","150b5d43692218431e05b0af91c64f8c"],["/categories/index.html","21031c0e97096a2222e8f4f1b2afef5d"],["/categories/つぶやき/index.html","542a050678eeb20902ae2a0942e5ba0d"],["/categories/アニメ/index.html","15b3d3ec203133c5cc552186763fbd97"],["/categories/インターネット/index.html","ad5fbc6b4c71f3f8edc72189aee05fad"],["/categories/中国に関する新聞記事/index.html","9f334c9c36ae4cba01d30c95a7f83fb9"],["/categories/労働者保護法律/index.html","180b4309d6df56a2c12ad17529609300"],["/categories/心理学に関する記事/index.html","b9c66a4c9cb0453e8f85f6570e3378e8"],["/categories/日常生活/index.html","e036a27241ca388a89cdb161d3855288"],["/categories/日本のIT教育/index.html","070efac182723639f0aece687f5fd492"],["/categories/日本のIT現場/index.html","3a1a44f7064f5ebd0c9405f405cf6add"],["/categories/日本のビジネスマーナ/index.html","17c0216e90d4844a34eda5557e4f98c7"],["/categories/日本の国内の人権状況/index.html","102adcd53e5d796d70dca8068b5b081c"],["/categories/日本の経済新聞記事/index.html","7e9e8f9a253d372227cef7062bf0b9b2"],["/categories/环境/index.html","c3be3f5bbe5e5ea4c5cf10d3e1d1b7fb"],["/categories/過酷な現場/index.html","ad92d38c9c3050eb568bb7f1457387fb"],["/categories/金融/index.html","8c6bd4dc2c6d597fb60d659f40919976"],["/categories/食べ物文化/index.html","8d27078d3f814d47846350ea80b75134"],["/categories/食品工業に関する記事/index.html","6fb8dd4e02be7d07d8d232d29db89f5e"],["/css/main.css","69f1614e070414dc3830425d38fd443c"],["/games/index.html","209d02111365e1771bea057a66a8577e"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/avatar.jpg","227440c1529f23a25ac3037d24c8afdc"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","a9d75107c4d7e31612f98e78be0979f9"],["/images/quote-r.svg","5f902def9e09af7fc41e4cf86ad1a0f9"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","286b4214e266f4c604dce37e3ba2edd8"],["/js/src/affix.js","19bcac93709eb85f4fbe5c9bfc21ffca"],["/js/src/algolia-search.js","83659a89a523d650edeae6bb04da4f40"],["/js/src/bootstrap.js","80ae1897ab1ea2860a0080ad82b557fe"],["/js/src/china.js","104cef2a92e84e439c08ded06b32072d"],["/js/src/echarts.min.js","fe7adba36e57109051eebc1d4bc570b9"],["/js/src/exturl.js","6efc3439c60838a72ed4200cb677282a"],["/js/src/footprint.js","1efb852e1a7465d1a72a1ad8fc8a072b"],["/js/src/hook-duoshuo.js","aa48f6cae74acb257851e5a9fe4bb1a5"],["/js/src/instantclick.min.js","5a83e0c3e72cfe02d90f16916e480ae6"],["/js/src/js.cookie.js","d0d4c0eb119548da0440834e2dff320d"],["/js/src/motion.js","7da020cf491090c39914cf756f577b32"],["/js/src/post-details.js","f89adf385751691eba7dad927ad48123"],["/js/src/schemes/pisces.js","fe80c91e6f70f64583e288fcb7a92d2d"],["/js/src/scroll-cookie.js","d2293546e285723ec5e2321ccd140bca"],["/js/src/scrollspy.js","2c2f8b05ce461f8e50f03db7d64a8c68"],["/js/src/utils.js","e0f226786ed0575c9f75b31a38db0c81"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","168896bbbcf124448e132f7832cf2a44"],["/lib/Han/dist/han.js","f4bb4841390a5450fe92e71a81055c32"],["/lib/Han/dist/han.min.css","e8541f0c9bb821b341f63852bd071960"],["/lib/Han/dist/han.min.js","88a8d1378e81a672fd98113e42989340"],["/lib/algolia-instant-search/instantsearch.min.css","f1913c38a8f13b0f0da9daa1d135b98c"],["/lib/algolia-instant-search/instantsearch.min.js","881ce94b793760824716db74a4969d43"],["/lib/canvas-nest/canvas-nest.min.js","12f852da2c6a2e772fdad307938612fc"],["/lib/canvas-ribbon/canvas-ribbon.js","9a43ff4929ba4335b181f946077ff810"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","1da72ccaa90f5487789ee8830160d61b"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","b60d109eacdda2c7d30563f61340fdd3"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","9d8818069222ee259d1b9b25e99e487a"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","f1e222918fdd47175490e8b4a50183ba"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","7ce131485d927062842f1fb39642d84a"],["/lib/fancybox/source/jquery.fancybox.css","53f0f3a44dd91a80dcd8d153a74d5c0d"],["/lib/fancybox/source/jquery.fancybox.js","540f899d4045bf9af5df78639bc1cfb9"],["/lib/fancybox/source/jquery.fancybox.pack.js","3205011129d7d2652ad5147328883e59"],["/lib/fastclick/README.html","54356ec8bc9f544c9f3ffabe8dee1cc4"],["/lib/fastclick/lib/fastclick.js","3d475712d578311f65273e5e5e07d642"],["/lib/fastclick/lib/fastclick.min.js","1ff95ed288fd05725fd8468ced7953da"],["/lib/font-awesome/css/font-awesome.css","a307ef06378e342a823def96958dd291"],["/lib/font-awesome/css/font-awesome.min.css","a307ef06378e342a823def96958dd291"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","acf3dcb7ff752b5296ca23ba2c7c2606"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/jquery/index.js","e4df20201175594e18ea323649e5822f"],["/lib/jquery_lazyload/CONTRIBUTING.html","74cbc5f7cd854e09b2902419c7b10e8b"],["/lib/jquery_lazyload/README.html","01174dd54e1b894e00175992b5ea21ca"],["/lib/jquery_lazyload/jquery.lazyload.js","120f43e1841464331c25cffb83e2e1b6"],["/lib/jquery_lazyload/jquery.scrollstop.js","5d4305dc976e332113b87342ae84ec55"],["/lib/needsharebutton/font-embedded.css","9497d11205815df35ac618eda88e77d6"],["/lib/needsharebutton/needsharebutton.css","d41d8cd98f00b204e9800998ecf8427e"],["/lib/needsharebutton/needsharebutton.js","2a878ef2a0c1ed8ef2c09428533b6cde"],["/lib/pace/pace-theme-barber-shop.min.css","44fc3a306ae49a913fdcc51ef97703ef"],["/lib/pace/pace-theme-big-counter.min.css","673cc0d98721185ad05687a937f26dd2"],["/lib/pace/pace-theme-bounce.min.css","eb87769029e2f52652ebd3462013d373"],["/lib/pace/pace-theme-center-atom.min.css","4bab616b5aebd779c73023abaae8aa8d"],["/lib/pace/pace-theme-center-circle.min.css","6f63bd45606bb4779f47e2d428058000"],["/lib/pace/pace-theme-center-radar.min.css","7b03cbdb45b0b9a2d2f2965d40d24842"],["/lib/pace/pace-theme-center-simple.min.css","e55e6183dc11fca9dcc140dd4f2e7bbc"],["/lib/pace/pace-theme-corner-indicator.min.css","e878b0def69dd7c2801c86cdcdc47fd5"],["/lib/pace/pace-theme-fill-left.min.css","87e4ab3112e5438841e01e4f89ff2c27"],["/lib/pace/pace-theme-flash.min.css","98d34674dae0f36ad95190f25d97e79e"],["/lib/pace/pace-theme-loading-bar.min.css","f797b3084e74e9282f910d96aacb5edd"],["/lib/pace/pace-theme-mac-osx.min.css","863691e1472ea360c43ca8ca88b6026e"],["/lib/pace/pace-theme-minimal.min.css","7660c46d8a222ddcd98986f209aaf423"],["/lib/pace/pace.min.js","81002ba5241e944939998bfeadb3ec4d"],["/lib/three/canvas_lines.min.js","1ff7c8ded997dd515351acb8fe68d9c7"],["/lib/three/canvas_sphere.min.js","2bc0c35b036355e6817cedd32580bfa9"],["/lib/three/three-waves.min.js","b1df01a9156f2f4e1b85f541324466e7"],["/lib/three/three.min.js","e3cf1d5ecc7462ad2753dd0459daee7f"],["/lib/ua-parser-js/dist/ua-parser.min.js","ea553862b5fef67a9b071377e78c7035"],["/lib/ua-parser-js/dist/ua-parser.pack.js","9ba8b42540ab7102c25aba032d23f7e7"],["/lib/velocity/velocity.js","a7effa29af7b9bcf9d454381d8e83466"],["/lib/velocity/velocity.min.js","9de60183c3ef474c07ea4d0bbe2b001a"],["/lib/velocity/velocity.ui.js","e4747d6d5374523175b5d4bc62e0b09f"],["/lib/velocity/velocity.ui.min.js","047bf41bf60817034a6c2c7d173aca50"],["/links/index.html","510113de5c9f847c6bec452a38123024"],["/movies/index.html","feef5d1d54fd6902e959e32bbf35f954"],["/page/2/index.html","603a190d152d980773d69fef7519acf4"],["/page/3/index.html","47a56b9b498618dc4a47bc987091561c"],["/page/4/index.html","17d95228a2589ce3e499725453cedc4b"],["/photos/index.html","b793d5cb5053f7f9e9bdc1d8bf7ad0a5"],["/posts/191ddb73/index.html","56d51ffd2412d74a8ccf20bb3bdc8e4f"],["/posts/1a195976/index.html","586e1ad5c9782f4e86324190470f2ab4"],["/posts/2292f1af/index.html","371673302d4edd361b487318966f8b88"],["/posts/2fc77d95/index.html","33abcd8f62c501bcdec3e78ad166bc7d"],["/posts/2feacaf4/index.html","5c28d248deccddc26507d424e07896fb"],["/posts/37f2c331/index.html","7f48cacb4c858247c5f9dd96fdc2142d"],["/posts/385f0de9/index.html","e8396e7fed0bb0b13c2b6cf132a1d260"],["/posts/44414303/index.html","fbf38eeb86c0afb6c38b6e429af92189"],["/posts/456610d0/index.html","109c4a55e0153e87ba0900e8bb513993"],["/posts/45e51894/index.html","b6297c38ffc715b4239319dd79e4560f"],["/posts/4f1131af/index.html","16a675471d0ddeaa6905969493c12e38"],["/posts/517a31fb/cream.png","3e5846b5033e82dfa24e71c7d5120329"],["/posts/517a31fb/index.html","399afcb05bfe17e6186399e0d1bae6d1"],["/posts/517ebb95/index.html","c174363040cb24257db8925574519451"],["/posts/53bf1d9d/index.html","a33bfb7918918f5aece482d2254d7d4b"],["/posts/554c2ba0/index.html","fbfa206f9464a6c63e1fe623c374c77c"],["/posts/63556f52/index.html","92f29c2dc0a27e95c502855252231808"],["/posts/6d49ceec/index.html","dd19d12f18382f6f9063c3f6f31b660f"],["/posts/6de7d9db/index.html","62aba10411413c8c236e28c57d7a7919"],["/posts/6fda249f/index.html","746e0a87fd8404b1b3eb246b991ff420"],["/posts/84b87417/index.html","a0fb401df02902c63be0913f5803be84"],["/posts/97e5bc9c/index.html","3625d4b331d88325ff424866c4f070f6"],["/posts/c311b112/index.html","0906468e18e12e22db573eb52b509836"],["/posts/c620d4c2/index.html","c4a2787517d9295b46b09bb6776a5905"],["/posts/cfc54393/index.html","7c67c26e63513ea8588da0c943533b73"],["/posts/dc5155ff/index.html","532771fddcf137501b6aefdecaeb81f0"],["/posts/e1bd836e/index.html","debd17a4828737d8e9ee263be7f002be"],["/posts/e31c0293/index.html","f24fea65cddc35f696a70c12b3633d9a"],["/posts/f5fc4461/index.html","01380ed85a48d3b530e8d76e5273a3f6"],["/posts/f8073739/index.html","b3e183c6682b9df207bd1a9c15cc4638"],["/posts/f97ef43b/index.html","59856aea73daa9511d6415d221d3de9d"],["/posts/fa84d5fc/index.html","dc3612ea9584dfb013d7a5d33948248f"],["/sw-register.js","7f91fe76692736323ba3fbfd962cde2a"],["/tags/index.html","49b672a3153f0390ddca6610a2735e3a"],["/tags/つぶやき/index.html","c456e41691fced98910cc6bc01e4f447"],["/tags/アニメ/index.html","158311ae2853671d8701201ca6730cf7"],["/tags/インターネット/index.html","147454f2a063b0a8d4897b8d2e44f5a7"],["/tags/チョコレート/index.html","ff4065c4715c564e9034b53cbb36f56d"],["/tags/中国に関する新聞記事/index.html","b352688aa50692fc82cbe9079afb074c"],["/tags/乳製品/index.html","e9d94b07086c843f64d38a84f67c0dc4"],["/tags/労働者保護法律/index.html","7e7433f5d1b5a31d6c27974e6efb83f0"],["/tags/心理学に関する記事/index.html","aeb6f6b0649219ee315fb20c82069684"],["/tags/日常生活/index.html","5ad14a3659af4ec71f2a2526434f100c"],["/tags/日本のIT教育/index.html","23c15c42b32996877c90db0a139206f1"],["/tags/日本のIT現場/index.html","c556ec2c62e35880502293a9785e461d"],["/tags/日本のビジネスマーナ/index.html","32bfaa799891a95e16e3b9bdc4463803"],["/tags/日本の国内の人権状況/index.html","eeac2a72a7072b3ed6d9628f61dd2484"],["/tags/日本の経済新聞記事/index.html","a0534d4e29defc270cb841233e2d359c"],["/tags/环境/index.html","0eaf08782ba1e1e6fe3d7e34500b47e0"],["/tags/過酷な現場/index.html","3783e1acfa07308a7d4afafec5b19357"],["/tags/金融/index.html","15d6b1aebff108996a2e885914a95621"],["/tags/食べ物文化/index.html","37862060a7e8ea5a6173b75892a34494"],["/tags/食品工業に関する記事/index.html","822c688cecdcc9a9c8238014c166cee8"]];
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
