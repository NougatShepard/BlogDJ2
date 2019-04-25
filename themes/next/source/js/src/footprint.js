var myChart = echarts.init(document.getElementById('myMap'));

var data = [
    // {name: '吴川', value: ['1995.11 ～ forever', '出生成长的地方，永远的家']},
    // {name: '苏州', value: ['2015.9 ～ now', '15年就读苏州大学，有幸在这个江南水乡生活']},
    // {name: '北京', value: ['2016.07', '8080']},
    // {name: '无锡', value: ['2017.03', '太湖鼋头渚国际樱花动漫节']}
    {name: '海门', value: ['2016.07', '8080']},
    {name: '南通', value: ['2016.07', '8080']},
    {name: '上海', value: ['2016.07', '8080']},
    {name: '昆明', value: ['2016.07', '8080']},
    {name: '大连', value: ['2016.07', '8080']},
    {name: '吴江', value: ['2016.07', '8080']},
    {name: '苏州', value: ['2016.07', '8080']},
    {name: '镇江', value: ['2016.07', '8080']},
    {name: '西安', value: ['2016.07', '8080']},
    {name: '扬州', value: ['2016.07', '8080']},
    {name: '南京', value: ['2016.07', '8080']},
    {name: '北京', value: ['2016.07', '8080']},
    {name: '郑州', value: ['2016.07', '8080']},
];
var geoCoordMap = {
    // '吴川':[110.364977,21.274898],
    // '苏州':[120.619585,31.299379],
    // '北京':[116.405285,39.904989],
    // '无锡':[120.301663,32.5]
    '海门':[121.15,31.89],
   '南通':[121.05,32.08],
   '上海':[121.48,31.22],
   '昆明':[102.73,25.04],
   '大连':[121.62,38.92],
   '吴江':[120.63,31.16],
   '苏州':[120.62,31.32],
   '镇江':[119.44,32.2],
   '西安':[108.95,34.27],
   '扬州':[119.42,32.39],
   '南京':[118.78,32.04],
   '北京':[116.46,39.92],
   '郑州':[113.65,34.76],
};

var convertData = function (data) {
    var res = [];
    for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
            res.push({
                name: data[i].name,
                value: geoCoord.concat(data[i].value)
            });
            //console.log(res)
        }
    }
    return res;
};

option = {
    // backgroundColor: '#404a59',
    title: {
    },
    tooltip: {
        trigger: 'item',
        padding: 10,
        backgroundColor: '#222',
        borderColor: '#777',
        borderWidth: 1,
        formatter: function (params) {
            name = params.name
            time = params.value[2]
            describe = params.value[3]
            return '<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'
                + name
                + '</div>'
                + time
                + '<br>'
                + describe;
        }
    },
    geo: {
        map: 'china',
        label: {
            emphasis: {
                show: false
            }
        },
        roam: false,
        itemStyle: {
            normal: {
                areaColor: '#e6e6e6',
                borderColor: '#111'
            },
            emphasis: {
                areaColor: '#cccccc'
            }
        }
    },
    series : [
        {
            name: '足迹',
            type: 'effectScatter',
            coordinateSystem: 'geo',
            data: convertData(data),
            showEffectOn: 'render',
            rippleEffect: {
                brushType: 'stroke'
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}',
                    position: 'right',
                    show: true
                }
            },
            itemStyle: {
                normal: {
                    color: '#4d4d4d',
                    shadowBlur: 10,
                    shadowColor: '#333'
                }
            },
            zlevel: 1
        }
    ]
};

myChart.setOption(option);


// var myChart = echarts.init(document.getElementById('myMap'));

// var data = [
//     {name: '海门', value: 9},
//     {name: '南通', value: 23},
//     {name: '上海', value: 25},
//     {name: '昆明', value: 39},
//     {name: '大连', value: 47},
//     {name: '吴江', value: 47},
//     {name: '苏州', value: 50},
//     {name: '镇江', value: 59},
//     {name: '西安', value: 61},
//     {name: '扬州', value: 64},
//     {name: '南京', value: 67},
//     {name: '北京', value: 79},
//     {name: '郑州', value: 113},
// ];
// var geoCoordMap = {
//    '海门':[121.15,31.89],
//    '南通':[121.05,32.08],
//    '上海':[121.48,31.22],
//    '昆明':[102.73,25.04],
//    '大连':[121.62,38.92],
//    '吴江':[120.63,31.16],
//    '苏州':[120.62,31.32],
//    '镇江':[119.44,32.2],
//    '西安':[108.95,34.27],
//    '扬州':[119.42,32.39],
//    '南京':[118.78,32.04],
//    '北京':[116.46,39.92],
//    '郑州':[113.65,34.76],
// };

// var convertData = function (data) {
//    var res = [];
//    for (var i = 0; i < data.length; i++) {
//        var geoCoord = geoCoordMap[data[i].name];
//        if (geoCoord) {
//            res.push({
//                name: data[i].name,
//                value: geoCoord.concat(data[i].value)
//            });
//        }
//    }
//    return res;
// };

// option = {
//    //backgroundColor: '#404a59',
//    title: {
//     //    text: '全国主要城市空气质量',
//     //    subtext: 'data from PM25.in',
//     //    sublink: 'http://www.pm25.in',
//     //    left: 'center',
//     //    textStyle: {
//     //        color: '#fff'
//     //    }
//    },
//    tooltip : {
//        trigger: 'item'
//    },
//    legend: {
//        orient: 'vertical',
//        y: 'bottom',
//        x:'right',
//        data:['pm2.5'],
//        textStyle: {
//            color: '#fff'
//        }
//    },
//    geo: {
//        map: 'china',
//        label: {
//            emphasis: {
//                show: false
//            }
//        },
//        roam: true,
//        itemStyle: {
//            normal: {
//                areaColor: '#323c48',
//                borderColor: '#111'
//            },
//            emphasis: {
//                areaColor: '#2a333d'
//            }
//        }
//    },
//    series : [
//        {
//            name: 'pm2.5',
//            type: 'scatter',
//            coordinateSystem: 'geo',
//            data: convertData(data),
//            symbolSize: function (val) {
//                return val[2] / 10;
//            },
//            label: {
//                normal: {
//                    formatter: '{b}',
//                    position: 'right',
//                    show: false
//                },
//                emphasis: {
//                    show: true
//                }
//            },
//            itemStyle: {
//                normal: {
//                    color: '#ddb926'
//                }
//            }
//        },
//        {
//            name: 'Top 5',
//            type: 'effectScatter',
//            coordinateSystem: 'geo',
//            data: convertData(data.sort(function (a, b) {
//                return b.value - a.value;
//            }).slice(0, 6)),
//            symbolSize: function (val) {
//                return val[2] / 10;
//            },
//            showEffectOn: 'render',
//            rippleEffect: {
//                brushType: 'stroke'
//            },
//            hoverAnimation: true,
//            label: {
//                normal: {
//                    formatter: '{b}',
//                    position: 'right',
//                    show: true
//                }
//            },
//            itemStyle: {
//                normal: {
//                    color: '#f4e925',
//                    shadowBlur: 10,
//                    shadowColor: '#333'
//                }
//            },
//            zlevel: 1
//        }
//    ]
// };