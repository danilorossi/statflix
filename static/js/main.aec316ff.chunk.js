(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{132:function(e,t,a){e.exports=a.p+"static/media/statflix_logo.6aa9ce9f.png"},140:function(e,t,a){e.exports=a.p+"static/media/netflix_activity_page.240e7f69.png"},141:function(e,t,a){e.exports=a.p+"static/media/netflix_activity_download.c4c27b7f.png"},142:function(e,t,a){e.exports=a.p+"static/media/netflix_file.7fa8a41c.png"},143:function(e,t,a){e.exports=a.p+"static/media/drop_file.d6080f6a.png"},166:function(e,t,a){e.exports=a(309)},172:function(e,t,a){},309:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(36),c=a.n(o),i=(a(171),a(24)),l=a(18),s=a(26),u=a(25),d=a(27),m=(a(172),a(52)),h=a(37),y=a(17),f=a(131),p=function(e){var t=f.parse(e).data;t.shift(),t.pop();var a=new Set,n={},r={},o=t.map(function(e,t){var o=Object(y.a)(e,2),c=o[0],i=o[1].split("/"),l=Object(y.a)(i,3),s=l[0],u=l[1],d=l[2],m="20".concat(d,"-").concat(u,"-").concat(s),f=new Date(Date.parse(m));a.add(f.getFullYear());var p={title:c,date:f,year:f.getFullYear(),month:f.getMonth()+1,day:f.getDate(),weekDay:f.getDay()},g="".concat(p.day,"-").concat(p.month,"-").concat(p.year);n[g]?n[g]=Object(h.a)({},n[g],{count:n[g].count+1,items:n[g].items.concat(p)}):n[g]={count:1,year:p.year,month:p.month,day:p.day,weekDay:p.weekDay,date:f,items:[p]};var v=p.weekDay;return r[v]?r[v]=Object(h.a)({},r[v],{count:r[v].count+1,items:r[v].items.concat(p)}):r[v]={count:1,weekDay:p.weekDay,date:f,items:[p]},p}).sort(function(e,t){return e.date-t.date}),c=Array.from(a).sort(function(e,t){return e-t}),i=Object.values(r).sort(function(e,t){return t.count-e.count}),l=c.map(function(e){return{year:e,data:v(o,e)}}).sort(function(e,t){return e.year-t.year}),s=Object.values(n).sort(function(e,t){return t.count-e.count})[0],u=l.map(function(e){var t=e.data.reduce(function(e,t){return e+t.count},0);return{year:e.year,count:t}}).sort(function(e,t){return e.year-t.year});return console.log(g(o)),{yearsList:c,sampleData:o,episodesPerMonth:l,episodesPerYear:u,mostActiveDay:s,accumulateByDayDictionary:n,accumulateByWeekDay:i}},g=function(e){var t={};return e.forEach(function(a){var n=a.title.split(":")[0];e.forEach(function(e){if(e.title.startsWith(n)){var a=t[n]||[];0===a.filter(function(t){return t.title===e.title}).length&&(a.push(Object(h.a)({},e)),t[n]=a)}})}),console.log(t),null},v=function(e,t){var a=e.reduce(function(e,a){if(a.year!==t)return e;var n="".concat(a.year,"-").concat(a.month,"-01"),r=e[n];return r?Object(h.a)({},e,Object(m.a)({},n,Object(h.a)({},r,{key:n,entries:e[n].entries.concat(a),count:r.count+1}))):Object(h.a)({},e,Object(m.a)({},n,{key:n,month:a.month,date:a.date,year:a.year,entries:[a],count:1}))},{});return Object.keys(a).map(function(e){return a[e]})},E=a(132),b=a.n(E),x=a(155);function w(){return r.a.createElement("div",null,r.a.createElement("img",{alt:"Web page logo",src:b.a}),r.a.createElement("div",null,r.a.createElement(x.a,{as:"span",color:"red"},"BETA")))}var k=a(317),D=a(316),j=a(140),O=a.n(j),W=a(141),C=a.n(W),S=a(142),T=a.n(S),A=a(143),M=a.n(A);function I(){return r.a.createElement("div",{style:{padding:"10% 10% 0 10%",color:"white",textAlign:"left"}},r.a.createElement(k.a,{bulleted:!0},r.a.createElement(k.a.Item,null,"Visit",r.a.createElement(D.a,{inverted:!0,position:"bottom center",trigger:r.a.createElement("a",{target:"_blank",href:"https://netflix.com/viewingactivity"}," Netflix viewing activity page ")},r.a.createElement(D.a.Header,null,"https://netflix.com/viewingactivity"),r.a.createElement(D.a.Content,null,r.a.createElement("img",{alt:"",style:{width:"500px"},src:O.a}))),"- you will have to login on Netflix first, and select a profile"),r.a.createElement(k.a.Item,null,"At the bottom of the activity page, click on the",r.a.createElement(D.a,{inverted:!0,position:"bottom center",trigger:r.a.createElement("a",{target:"_blank",href:"https://netflix.com/viewingactivity"}," download all ")},r.a.createElement(D.a.Header,null,"Download activity file"),r.a.createElement(D.a.Content,null,r.a.createElement("img",{alt:"",style:{width:"500px"},src:C.a}))),"link"),r.a.createElement(k.a.Item,null,"Locate the downloaded file,",r.a.createElement(D.a,{inverted:!0,position:"bottom center",trigger:r.a.createElement("i",null," NetflixViewingHistory.csv")},r.a.createElement(D.a.Content,null,r.a.createElement("img",{alt:"",style:{},src:T.a}))),", and",r.a.createElement(D.a,{inverted:!0,position:"bottom center",trigger:r.a.createElement("span",null,"drag & drop it")},r.a.createElement(D.a.Header,null,"https://netflix.com/viewingactivity"),r.a.createElement(D.a.Content,null,r.a.createElement("img",{alt:"",style:{width:"500px"},src:M.a}))),"on the box below - or click on the box to select it from your file system.")))}var F=a(323),B=a(152),Y="#e50914",P=a(314),R=a(321);function L(e){var t=e.text;return r.a.createElement(P.a,{horizontal:!0,inverted:!0},t&&r.a.createElement(R.a,{style:{color:Y},as:"h5"},t))}function N(e){var t=e.onComplete,a=Object(n.useCallback)(function(e){var a=new FileReader;a.onabort=function(){return console.log("file reading was aborted")},a.onerror=function(){return console.log("file reading has failed")},a.onload=function(){var e=a.result;t(e)},e.forEach(function(e){return a.readAsText(e)})},[t]),o=Object(B.a)({onDrop:a}),c=o.getRootProps,i=o.getInputProps;return r.a.createElement("div",Object.assign({className:"dropzone",style:_.dropZone},c()),r.a.createElement("input",i()),r.a.createElement("p",null,"Drop Netflix viewing history CSV file"),r.a.createElement(L,{text:"OR"}),r.a.createElement("p",null,"click to select the file"))}var _={dropZone:{padding:"5%",margin:"10% 10% 0",color:"lightgrey",fontSize:"1em",border:"5px solid rgb(222, 59, 48)",borderRadius:"10px",cursor:"pointer"}},z=a(322),U=a(318),H=a(53),V={sections:[{title:"What is this?",body:"\n      This website will give you some fun facts and stats about\n      your Netflix viewing activity, based on the activty file you\n      can download from the Netflix activity page.\n      "},{title:"Why did you do this?",body:"\n      I am a software engineer and I work on a variety of side projects to learn\n      new technologies and refresh things I used in the past: this specific\n       project is an excuse to see how to combine two technology, React and d3js.\n      "},{title:"What do you do with my activity data?",body:"\n      Really, I just do some calculations and show some statistics.\n      The file you upload in this page does not contain any sensitive information,\n      it's just a list of titles and dates (just the date, no time), you can check\n      yourself by opening it with your favourite text editor or as a spreadsheet.\n      I do not store any of it and I do not have access to your Netflix credentials:\n      once you reload this webpage, it's like you never uploaded it :)\n      "},{title:'Why the title says "BETA"?',body:"\n      This is a work in progress pet project, nothing is final, not even the title:\n      I hope to improve the page and provide even more interesting insights and\n      cool visualizations, but I do not promise anything :)\n      "}]},J=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={activeIndex:0},a.handleClick=function(e,t){var n=t.index,r=a.state.activeIndex===n?-1:n;a.setState({activeIndex:r})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.state.activeIndex;return r.a.createElement(z.a,{inverted:!0,style:X.container},r.a.createElement(U.a,{inverted:!0},V.sections.map(function(a,n){return r.a.createElement(r.a.Fragment,{key:"faq_".concat(n)},r.a.createElement(U.a.Title,{active:t===n,index:n,onClick:e.handleClick},r.a.createElement(H.a,{name:"dropdown"})," ",a.title),r.a.createElement(U.a.Content,{active:t===n},a.body))})))}}]),t}(n.Component),X={container:{paddingLeft:"10%",paddingRight:"10%",backgroundColor:"rgb(20, 20, 20)",fontSize:"1.2em"}};function Z(e){var t=e.onFileUploaded;return r.a.createElement(F.a,{columns:1},r.a.createElement(F.a.Column,null,r.a.createElement(N,{onComplete:t})),r.a.createElement(F.a.Column,{textAlign:"left"},r.a.createElement(J,null," ")))}var q=a(154),$=a(8),G=400,K=200;function Q(e){var t=e.selected,a=e.data,o=Object(n.useState)([]),c=Object(y.a)(o,2),i=c[0],l=c[1],s=Object(n.useState)([]),u=Object(y.a)(s,2),d=u[0],m=u[1];return Object(n.useEffect)(function(){var e=function(e){if(!e)return{paths:[],tempAnnotations:[]};var t=$.g().range([0,100]),a=$.h($.c),n=$.b(e,function(e){return e.count}),r=Object(y.a)(n,2),o=r[0],c=r[1];t.domain([0,c]),a.domain([1.5*c,o]);var i=$.a(),l=2*Math.PI/e.length;return{paths:e.map(function(e,n){return{fill:a(e.count),path:i({startAngle:n*l,endAngle:(n+1)*l,innerRadius:t(0),outerRadius:t(e.count)})}}),tempAnnotations:[o,c].map(function(e){return{r:t(e),temp:e}})}}(a),t=e.paths,n=e.tempAnnotations;l(t),m(n)},[a,t]),r.a.createElement("svg",{width:G,height:K},r.a.createElement("g",{transform:"translate(".concat(G/2,", ").concat(K/2,")")},i.map(function(e,t){return r.a.createElement("path",{key:t,d:e.path,stroke:e.fill,strokeWidth:"2",fill:e.fill})}),d.map(function(e,t){return r.a.createElement("g",{key:t},r.a.createElement("circle",{r:e.r,fill:"none",stroke:"#ffaaaa",strokeWidth:"1"}),r.a.createElement("text",{y:-e.r-2,textAnchor:"middle",fill:"#ffaaaa"},e.temp))})))}var ee=20,te=20,ae=60,ne=20,re=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).barsWidth=0,a.state={bars:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"processData",value:function(e){if(e){var t=$.f().padding(.2).domain(e.map(function(e){return e.year}).sort(function(e,t){return e.year-t.year})).range([ne,700-te]),a=$.d(e,function(e){return e.count}),n=$.g().domain([a,0]).range([150-ae,ee]),r=$.b(e,function(e){return e.count}).reverse(),o=$.h().domain([1.5*r[0],r[1]]).interpolator($.c),c=e.map(function(e){return{x:t(e.year),y:0,year:e.year,count:e.count,height:n(e.count),fill:o(e.count)}});c&&(this.barsWidth=t.bandwidth()),this.setState({bars:c})}else this.setState({bars:[]})}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.processData(this.props.data)}},{key:"render",value:function(){var e=this,t=this.props.title,a=this.state.bars;return r.a.createElement("div",{style:{width:"100%"}},t&&r.a.createElement("h2",null,t),a&&r.a.createElement("svg",{width:700,height:150},this.state.bars.map(function(t,a){return r.a.createElement(r.a.Fragment,{key:"bar_chart_".concat(a)},r.a.createElement("rect",{x:t.x,y:t.y,width:e.barsWidth,height:t.height+ee,fill:t.fill}),r.a.createElement("polygon",{strokeWidth:"1",fill:t.fill,stroke:t.fill,points:"".concat(t.x+1,",").concat(t.y+t.height+ee,"\n                  ").concat(t.x+e.barsWidth/2,",").concat(t.y+t.height+ee+20,"\n                  ").concat(t.x-1+e.barsWidth,",").concat(t.y+t.height+ee)}),r.a.createElement("text",{fontWeight:"bold",x:t.x+e.barsWidth/2,textAnchor:"middle",y:t.y+20,fill:"white"},t.year),r.a.createElement("text",{fontWeight:"bold",x:t.x+e.barsWidth/2,y:t.y+t.height+60,textAnchor:"middle",fill:t.fill},t.count))})))}}]),t}(r.a.Component),oe=2,ce=20,ie=$.j("%B"),le=$.j("%u"),se=$.j("%W"),ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).colorScale=null,a.weeksInMonth=function(e){var t=$.k.floor(e);return $.m($.l.floor(t),$.k.offset(t,1)).length},a.getMonthWidth=function(e){var t=a.weeksInMonth(e);return ce*t+oe*(t+1)},a.getTextX=function(e){var t=a.weeksInMonth(e);return(ce*t+oe*(t+1))/2},a.state={months:null,days:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"processData",value:function(e,t,a){if(e){var n=e.filter(function(e){return e.year===a})[0].data,r=n.reduce(function(e,t){return e.concat(t.entries)},[]);this.colorScale=$.h($.c).domain([10,0]);var o=$.e(r,function(e){return e.date}),c=$.d(r,function(e){return e.date}),i=$.k.range($.k.floor(o),c);this.setState({months:i,days:n,accumulateByDayDictionary:t})}else this.setState({months:[]})}}]),Object(l.a)(t,[{key:"componentDidMount",value:function(){this.processData(this.props.data,this.props.accByDate,this.props.selected)}},{key:"componentDidUpdate",value:function(e,t){this.props.selected!==e.selected&&this.processData(this.props.data,this.props.accByDate,this.props.selected)}},{key:"render",value:function(){var e=this,t=this.state,a=t.months,n=t.days,o=t.accumulateByDayDictionary;return r.a.createElement("div",{id:"calendar",style:{padding:"0 10%"}},a&&a.map(function(t,a){var c=e.getMonthWidth(t),i=n[a].date,l=$.i(new Date(i.getFullYear(),i.getMonth(),1),new Date(i.getFullYear(),i.getMonth()+1,1));return r.a.createElement("svg",{className:"month",key:a,style:{margin:"10px"},stroke:"red",width:c,height:7*ce+8*oe+20},r.a.createElement("g",null,r.a.createElement("text",{textAnchor:"middle",className:"month-name",fill:"white","data-month":t,x:e.getTextX(t),y:15}," ",ie(t)," "),l.map(function(e,t){var a=(se(e)-se(new Date(e.getFullYear(),e.getMonth(),1)))*ce+(se(e)-se(new Date(e.getFullYear(),e.getMonth(),1)))*oe+oe,n=le(e)*ce+le(e)*oe+oe;return r.a.createElement("rect",{className:"day",key:"p"+t,y:n,x:a,title:e,width:ce,height:ce,strokeWidth:"2",stroke:"transparent",rx:"3",ry:"3",fill:"#333"})}),n[a].entries.map(function(t,a){var n="".concat(t.day,"-").concat(t.month,"-").concat(t.year),c=(se(t.date)-se(new Date(t.date.getFullYear(),t.date.getMonth(),1)))*ce+(se(t.date)-se(new Date(t.date.getFullYear(),t.date.getMonth(),1)))*oe+oe,i=le(t.date)*ce+le(t.date)*oe+oe,l=o[n],s=l.count,u=l.date,d=l.items,m=r.a.createElement("rect",{className:"day",key:"k"+a,y:i,x:c,width:ce,height:ce,strokeWidth:"2",stroke:"transparent",rx:"3",ry:"3",fill:e.colorScale(s)});return r.a.createElement(D.a,{trigger:m,flowing:!0,style:{maxWidth:"300px"}},r.a.createElement(D.a.Header,null,r.a.createElement(H.a,{name:"calendar"})," ",u.toDateString(),r.a.createElement(x.a,{circular:!0,big:!0,color:"red",floating:!0},s),r.a.createElement(P.a,null)),r.a.createElement(D.a.Content,null,r.a.createElement(k.a,{bulleted:!0,style:{textAlign:"left"}},d.map(function(e){return r.a.createElement(k.a.Item,null,e.title)}))))})))}))}}]),t}(r.a.Component),de=20,me=20,he=(r.a.Component,a(315)),ye=a(151),fe=a.n(ye),pe=a(319),ge=function(e){var t=e.headerText,a=e.value,n=e.footerText,o=e.iconClass,c=void 0===o?null:o;return r.a.createElement(pe.a,{size:"tiny",color:"red",inverted:!0},r.a.createElement(pe.a.Label,null,t),r.a.createElement(pe.a.Value,{style:{color:Y}},a,c&&r.a.createElement(H.a,{name:c})),n&&r.a.createElement(pe.a.Label,null,n))},ve=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],Ee=function(e){var t=e.episode,a=Object(n.useState)(null),o=Object(y.a)(a,2),c=o[0],i=o[1],l=Object(n.useState)(null),s=Object(y.a)(l,2),u=s[0],d=s[1];return Object(n.useEffect)(function(){he.a.addLocale(fe.a);var e=new he.a("en-US");i(e.format(t.date)),d(ve[t.date.getDay()])},[t]),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(H.a,{size:"big",color:"red",name:"tv"})),r.a.createElement(ge,{headerText:"your first episode EVER is",value:t.title})),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(H.a,{size:"big",color:"red",name:"hourglass outline"})),r.a.createElement(ge,{headerText:"and you saw it",value:c,footerText:"(it was ".concat(u,")")})))},be=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];function xe(e){var t=e.data,a=e.yearsList,o=e.currentYear,c=Object(n.useState)(null),i=Object(y.a)(c,2),l=(i[0],i[1]),s=Object(n.useState)(null),u=Object(y.a)(s,2),d=(u[0],u[1]);Object(n.useEffect)(function(){d(o),l(t.episodesPerMonth.filter(function(e){return e.year===o})[0])},[t,o]);return r.a.createElement(F.a,{columns:1},r.a.createElement(F.a.Column,null,r.a.createElement(L,{text:"YOUR FIRST TIME"})),r.a.createElement(F.a.Column,null,r.a.createElement(Ee,{episode:t.sampleData[0]})),r.a.createElement(F.a.Column,null,r.a.createElement(L,{text:"FUN FACTS"})),r.a.createElement(F.a.Column,null,t.sampleData&&r.a.createElement(ge,{headerText:"Overall, you saw",value:t.sampleData.length,footerText:"episodes"}),t.accumulateByWeekDay&&r.a.createElement(ge,{headerText:"Mostly on",value:"".concat(be[t.accumulateByWeekDay[0].weekDay],"s"),footerText:"(and ".concat(be[t.accumulateByWeekDay[1].weekDay],"s)")}),t.mostActiveDay&&r.a.createElement(ge,{headerText:"with a record of",value:t.mostActiveDay.count,footerText:"in one day"})),r.a.createElement(F.a.Column,null,r.a.createElement(L,{text:"EPISODES PER YEAR"})),r.a.createElement(F.a.Column,null,t.episodesPerYear&&r.a.createElement(re,{data:t.episodesPerYear})),r.a.createElement(F.a.Column,null,a&&Object(q.a)(a).reverse().map(function(e){return function(e){var a=t.episodesPerMonth.filter(function(t){return t.year===e})[0];return r.a.createElement(F.a.Column,{key:e},r.a.createElement(L,{text:"STATS FOR ".concat(e)}),a&&a.data&&r.a.createElement(Q,{selected:e,data:a.data}),r.a.createElement("br",null),r.a.createElement("br",null),t.episodesPerMonth&&t.accumulateByDayDictionary&&r.a.createElement(ue,{selected:e,data:t.episodesPerMonth,accByDate:t.accumulateByDayDictionary}))}(e)})),!1)}var we=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).onFileUploaded=function(e){var t=p(e),n=t.sampleData,r=t.yearsList,o=t.episodesPerMonth,c=t.episodesPerYear,i=t.mostActiveDay,l=t.accumulateByDayDictionary,s=t.accumulateByWeekDay;a.setState({dataLoaded:!0,yearsList:r,currentYear:r[0],data:{sampleData:n,episodesPerMonth:o,episodesPerYear:c,mostActiveDay:i,accumulateByDayDictionary:l,accumulateByWeekDay:s}})},a.state={dataLoaded:!1,currentYear:null,data:null},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.state,t=e.currentYear,a=e.dataLoaded,n=e.data,o=e.yearsList;return r.a.createElement("div",{className:"App"},r.a.createElement(w,null),!a&&r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(Z,{onFileUploaded:this.onFileUploaded})),a&&r.a.createElement(xe,{data:n,yearsList:o,currentYear:t}))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[166,1,2]]]);
//# sourceMappingURL=main.aec316ff.chunk.js.map