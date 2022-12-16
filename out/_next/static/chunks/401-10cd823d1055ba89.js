(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[401],{7484:function(e){var t,s,n,i,r,a,l,o,c,d,h,u,f,m,p,x,g,w,v,j,$;e.exports=(t="millisecond",s="second",n="minute",i="hour",r="week",a="month",l="quarter",o="year",c="date",d="Invalid Date",h=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,u=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f=function(e,t,s){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(s)+e},(p={})[m="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],s=e%100;return"["+e+(t[(s-20)%10]||t[s]||"th")+"]"}},x=function(e){return e instanceof j},g=function e(t,s,n){var i;if(!t)return m;if("string"==typeof t){var r=t.toLowerCase();p[r]&&(i=r),s&&(p[r]=s,i=r);var a=t.split("-");if(!i&&a.length>1)return e(a[0])}else{var l=t.name;p[l]=t,i=l}return!n&&i&&(m=i),i||!n&&m},w=function(e,t){if(x(e))return e.clone();var s="object"==typeof t?t:{};return s.date=e,s.args=arguments,new j(s)},(v={s:f,z:function(e){var t=-e.utcOffset(),s=Math.abs(t);return(t<=0?"+":"-")+f(Math.floor(s/60),2,"0")+":"+f(s%60,2,"0")},m:function e(t,s){if(t.date()<s.date())return-e(s,t);var n=12*(s.year()-t.year())+(s.month()-t.month()),i=t.clone().add(n,a),r=s-i<0,l=t.clone().add(n+(r?-1:1),a);return+(-(n+(s-i)/(r?i-l:l-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:a,y:o,w:r,d:"day",D:c,h:i,m:n,s:s,ms:t,Q:l})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=g,v.i=x,v.w=function(e,t){return w(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},$=(j=function(){function e(e){this.$L=g(e.locale,null,!0),this.parse(e)}var f=e.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,s=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(h);if(n){var i=n[2]-1||0,r=(n[7]||"0").substring(0,3);return s?new Date(Date.UTC(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)):new Date(n[1],i,n[3]||1,n[4]||0,n[5]||0,n[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return v},f.isValid=function(){return this.$d.toString()!==d},f.isSame=function(e,t){var s=w(e);return this.startOf(t)<=s&&s<=this.endOf(t)},f.isAfter=function(e,t){return w(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<w(e)},f.$g=function(e,t,s){return v.u(e)?this[t]:this.set(s,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var l=this,d=!!v.u(t)||t,h=v.p(e),u=function(e,t){var s=v.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return d?s:s.endOf("day")},f=function(e,t){return v.w(l.toDate()[e].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},m=this.$W,p=this.$M,x=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case o:return d?u(1,0):u(31,11);case a:return d?u(1,p):u(0,p+1);case r:var w=this.$locale().weekStart||0,j=(m<w?m+7:m)-w;return u(d?x-j:x+(6-j),p);case"day":case c:return f(g+"Hours",0);case i:return f(g+"Minutes",1);case n:return f(g+"Seconds",2);case s:return f(g+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,r){var l,d=v.p(e),h="set"+(this.$u?"UTC":""),u=((l={}).day=h+"Date",l[c]=h+"Date",l[a]=h+"Month",l[o]=h+"FullYear",l[i]=h+"Hours",l[n]=h+"Minutes",l[s]=h+"Seconds",l[t]=h+"Milliseconds",l)[d],f="day"===d?this.$D+(r-this.$W):r;if(d===a||d===o){var m=this.clone().set(c,1);m.$d[u](f),m.init(),this.$d=m.set(c,Math.min(this.$D,m.daysInMonth())).$d}else u&&this.$d[u](f);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[v.p(e)]()},f.add=function(e,t){var l,c=this;e=Number(e);var d=v.p(t),h=function(t){var s=w(c);return v.w(s.date(s.date()+Math.round(t*e)),c)};if(d===a)return this.set(a,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return h(1);if(d===r)return h(7);var u=((l={})[n]=6e4,l[i]=36e5,l[s]=1e3,l)[d]||1,f=this.$d.getTime()+e*u;return v.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,s=this.$locale();if(!this.isValid())return s.invalidDate||d;var n=e||"YYYY-MM-DDTHH:mm:ssZ",i=v.z(this),r=this.$H,a=this.$m,l=this.$M,o=s.weekdays,c=s.months,h=function(e,s,i,r){return e&&(e[s]||e(t,n))||i[s].slice(0,r)},f=function(e){return v.s(r%12||12,e,"0")},m=s.meridiem||function(e,t,s){var n=e<12?"AM":"PM";return s?n.toLowerCase():n},p={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:v.s(l+1,2,"0"),MMM:h(s.monthsShort,l,c,3),MMMM:h(c,l),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:h(s.weekdaysMin,this.$W,o,2),ddd:h(s.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:v.s(r,2,"0"),h:f(1),hh:f(2),a:m(r,a,!0),A:m(r,a,!1),m:String(a),mm:v.s(a,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:i};return n.replace(u,function(e,t){return t||p[e]||i.replace(":","")})},f.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},f.diff=function(e,t,c){var d,h=v.p(t),u=w(e),f=(u.utcOffset()-this.utcOffset())*6e4,m=this-u,p=v.m(this,u);return p=((d={})[o]=p/12,d[a]=p,d[l]=p/3,d[r]=(m-f)/6048e5,d.day=(m-f)/864e5,d[i]=m/36e5,d[n]=m/6e4,d[s]=m/1e3,d)[h]||m,c?p:v.a(p)},f.daysInMonth=function(){return this.endOf(a).$D},f.$locale=function(){return p[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var s=this.clone(),n=g(e,t,!0);return n&&(s.$L=n),s},f.clone=function(){return v.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},e}()).prototype,w.prototype=$,[["$ms",t],["$s",s],["$m",n],["$H",i],["$W","day"],["$M",a],["$y",o],["$D",c]].forEach(function(e){$[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),w.extend=function(e,t){return e.$i||(e(t,j,w),e.$i=!0),w},w.locale=g,w.isDayjs=x,w.unix=function(e){return w(1e3*e)},w.en=p[m],w.Ls=p,w.p={},w)},3401:function(e,t,s){"use strict";var n=s(5893),i=s(7412),r=s.n(i),a=s(7294),l=s(29);let o=e=>{var t,s;let i,{results:o,participant:c,league:d,closeModal:h,fixtures:u}=e,[f,m]=(0,a.useState)(!1),p=()=>{m(!f)},[x,g]=(0,a.useState)([...(i=[],u.map(e=>{i.push(e.MatchId.split("_")[1])}),i.filter((e,t)=>i.indexOf(e)===t))]),w=["Top","Jungle","Mid","Bot","Support"],[v,j]=(0,a.useState)((()=>{var e=[];for(let t=0;t<x.length;t++){var s,n="",i=0,r=0,a=0,l=0,d=0,h=0,u=!1,f=0,m=0;null===(s=o.participantteam)||void 0===s||s.map(e=>{e.name===c.team&&e.game.split("_")[1]===x[t]&&(n=e.name,i+=e.teamKills,r+=e.dragonKills,a+=e.riftHeraldKills,l+=e.baronKills,d+=e.turretKills,h+=e.inhibitorKills,u=e.didWin,f+=e.points,m+=e.teamKills)}),e.push({name:n,week:x[t],teamKills:i,dragonKills:r,riftHeraldKills:a,baronKills:l,turretKills:d,inhibitorKills:h,win:u,points:f,kills:m})}return e})()),[$,_]=(0,a.useState)((s=[],x.map(e=>{for(let t=0;t<w.length;t++){var n;null===(n=o.participantplayer)||void 0===n||n.filter(n=>{n.role===w[t]&&n.matchId.split("_")[1]===e&&s.push(n)})}}),t=[],["Top","Jungle","Mid","Bot","Support"].forEach(e=>{for(let n=0;n<x.length;n++){var i=0,r=0,a=0,o=0,c=0,d=0,h="",u="",f=0,m=0;s.forEach(t=>{t.role===e&&t.matchId.split("_")[1]===x[n]&&(i+=t.kills,r+=t.deaths,a+=t.assists,o+=t.creepScore,c+=t.visionScore,d+=Number((0,l.C_)(t.kills,t.assists,t.teamTotalKills)),m+=t.teamTotalKills,h=t.name,f+=t.points,u=t.team)}),t.push({name:h,team:u,points:f,role:e,week:x[n],kills:i,deaths:r,assists:a,cs:o,vision:c,killp:d})}}),t)),[y,M]=(0,a.useState)(x[0]);return(0,n.jsx)("div",{className:"".concat(r().root," z-20 absolute modal shadow-black p-[1px] fixed top-10 left-0 right-0 shadow-md"),children:(0,n.jsxs)("div",{className:"bg-gray-medium rounded-xl p-5",children:[(0,n.jsxs)("div",{className:"".concat(r().resultsHeader),children:[(0,n.jsx)("p",{children:c.username}),(0,n.jsx)("p",{children:c.fantasyname}),(0,n.jsxs)("button",{id:"dropdownDividerButton",onClick:p,"data-dropdown-toggle":"dropdownDivider",className:"text-white font-medium rounded-lg text-sm text-center inline-flex items-center",type:"button",children:["Week : ",(0,n.jsx)("span",{className:"".concat(r().dj),children:y}),(0,n.jsx)("svg",{className:"w-4 h-4","aria-hidden":"true",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 9l-7 7-7-7"})})]}),(0,n.jsx)("div",{id:"dropdownDivider",className:"".concat(f?"z-20":"hidden"," absolute z-20 ml-[200px] mt-5 max-w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"),children:(0,n.jsx)("ul",{className:"py-1 text-sm text-gray-700","aria-labelledby":"dropdownDividerButton",children:x.map((e,t)=>(0,n.jsx)("li",{children:(0,n.jsx)("button",{onClick(){M(e),m(!1)},className:"inline py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white",children:e})},t))})}),(0,n.jsx)("button",{className:"absolute top-3 right-2.5 ml-auto inline-flex items-center",onClick:h,children:(0,n.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor",className:"w-6 h-6",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"})})})]}),(0,n.jsxs)("div",{className:"".concat(r().resultsContainer," "),children:[$.filter(e=>{if(e.week===y)return e}).map((e,t)=>(0,n.jsxs)("div",{className:"".concat(r().singleRole),children:[(0,n.jsxs)("div",{className:"".concat(r().singleRowHead),children:[(0,n.jsxs)("div",{className:"".concat(r().singleRowHeadIn),children:[(0,n.jsx)("img",{src:"https://i.redd.it/rtqwmwm3tdy41.png",className:"w-12 h-12",alt:"".concat(e.name.split(" ")[0])}),(0,n.jsxs)("div",{className:"".concat(r().coltitles),children:[(0,n.jsx)("h1",{children:"".concat(e.name.split(" ")[0])}),(0,n.jsx)("span",{children:e.team.split(" ")[0]}),(0,n.jsx)("p",{children:e.role})]})]}),(0,n.jsx)("div",{className:"".concat(r().singleRowHeadb),children:(0,n.jsxs)("p",{children:["TOTAL: ",(0,n.jsx)("span",{children:Math.ceil(e.points)})]})})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow1,"   "),children:[(0,n.jsx)("p",{children:"stat"}),(0,n.jsx)("p",{children:"score"})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Kills"}),(0,n.jsx)("p",{children:e.kills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Deaths"}),(0,n.jsx)("p",{children:e.deaths})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Assists"}),(0,n.jsx)("p",{children:e.assists})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"CS"}),(0,n.jsx)("p",{children:e.cs})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Vision"}),(0,n.jsx)("p",{children:e.vision})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Kill %"}),(0,n.jsx)("p",{children:Math.ceil(e.killp)})]})]},t)),v.filter(e=>{if(e.week===y)return e}).map((e,t)=>(0,n.jsxs)("div",{className:"".concat(r().singleRole),children:[(0,n.jsxs)("div",{className:"".concat(r().singleRowHead),children:[(0,n.jsxs)("div",{className:"".concat(r().singleRowHeadIn),children:[(0,n.jsx)("img",{src:"https://i.redd.it/rtqwmwm3tdy41.png",className:"w-12 h-12"}),(0,n.jsxs)("div",{className:"".concat(r().coltitles),children:[(0,n.jsx)("h1",{children:e.name.split(" ")[0]}),(0,n.jsx)("span",{children:d.region}),(0,n.jsx)("p",{children:"Team"})]})]}),(0,n.jsx)("div",{className:"".concat(r().singleRowHeadb),children:(0,n.jsxs)("p",{children:["TOTAL: ",(0,n.jsx)("span",{children:Math.ceil(e.points)})]})})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow1),children:[(0,n.jsx)("p",{children:"stat"}),(0,n.jsx)("p",{children:"score"})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Towers"}),(0,n.jsx)("p",{children:e.turretKills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Inhibs"}),(0,n.jsx)("p",{children:e.inhibitorKills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Dragons"}),(0,n.jsx)("p",{children:e.dragonKills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Rifts"}),(0,n.jsx)("p",{children:e.riftHeraldKills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"Barons"}),(0,n.jsx)("p",{children:e.baronKills})]}),(0,n.jsxs)("div",{className:"".concat(r().singleRoleRow),children:[(0,n.jsx)("p",{children:"win"}),(0,n.jsx)("p",{children:e.win?"Yes":"No"})]})]},t))]})]})})};t.Z=o},29:function(e,t,s){"use strict";s.d(t,{C_:function(){return n},FH:function(){return i}}),s(7484);let n=(e,t,s)=>(e+t)/Math.max(1,s)*25<=25?(e+t)/Math.max(1,s)*25:0;function i(e){var t,s=e/1e3,n=((t=Math.floor(s%60))<10&&t>=0&&(t="0"+t),t<0&&(t="59"),t);return"".concat(Math.floor(s/60),":").concat(n)}},7412:function(e){e.exports={root:"resultDetail_root__nAWXx",resultsHeader:"resultDetail_resultsHeader__H2_TJ",resultsContainer:"resultDetail_resultsContainer__FeXKA",singleRoleRow1:"resultDetail_singleRoleRow1__jbudl",singleRoleRow:"resultDetail_singleRoleRow__mSPOC",singleRowHead:"resultDetail_singleRowHead__cfd3M",singleRowHeadIn:"resultDetail_singleRowHeadIn__WtSwm",singleRowHeadb:"resultDetail_singleRowHeadb__ltagM",singleRole:"resultDetail_singleRole__l2OPq",coltitles:"resultDetail_coltitles__Fk33_",dj:"resultDetail_dj__A1s_y"}}}]);