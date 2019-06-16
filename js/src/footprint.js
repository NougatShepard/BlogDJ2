// build time:Sun Jun 16 2019 14:10:15 GMT+0900 (GMT+09:00)
var myChart=echarts.init(document.getElementById("myMap"));var data=[{name:"昆明",value:["2011.09 ～ 2014.06","こんめい: 雲南省","大学","高頻度取引専攻"]},{name:"西安",value:["2013.06","せいあん","華山","かざん"]},{name:"蘇州",value:["2014.09 ～ 2017.06","そしゅう: ○○情報処理技術研究所","",""]},{name:"郑州",value:["2017.07 ～ 2017.11","Sterling Trader Inc &","Hold Brothers Capital","関係の○○証券会社"]},{name:"大連",value:["2017.12 ～ 2018.05","だいれん:","",""]}];var geoCoordMap={"昆明":[102.73,25.04],"西安":[108.95,34.27],"蘇州":[120.62,31.32],"郑州":[113.65,34.76],"大連":[121.62,38.92]};var convertData=function(e){var a=[];for(var r=0;r<e.length;r++){var o=geoCoordMap[e[r].name];if(o){a.push({name:e[r].name,value:o.concat(e[r].value)})}}return a};option={title:{},tooltip:{trigger:"item",padding:10,backgroundColor:"#222",borderColor:"#777",borderWidth:1,formatter:function(e){name=e.name;time=e.value[2];describe1=e.value[3];describe2=e.value[4];describe3=e.value[5];return'<div style="border-bottom: 1px solid rgba(255,255,255,.3); font-size: 18px;padding-bottom: 7px;margin-bottom: 7px">'+name+"</div>"+time+"<br>"+describe1+"<br>"+describe2+"<br>"+describe3}},geo:{map:"china",label:{emphasis:{show:false}},roam:false,itemStyle:{normal:{areaColor:"#e6e6e6",borderColor:"#111"},emphasis:{areaColor:"#cccccc"}}},series:[{name:"足迹",type:"effectScatter",coordinateSystem:"geo",data:convertData(data),showEffectOn:"render",rippleEffect:{brushType:"stroke"},hoverAnimation:true,label:{normal:{formatter:"{b}",position:"right",show:true}},itemStyle:{normal:{color:"#4d4d4d",shadowBlur:10,shadowColor:"#333"}},zlevel:1}]};myChart.setOption(option);
//rebuild by neat 