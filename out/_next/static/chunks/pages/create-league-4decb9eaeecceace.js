(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[890],{7484:function(e){var t,n,a,s,r,i,l,o,c,d,u,h,m,f,x,g,p,y,v,b,N;e.exports=(t="millisecond",n="second",a="minute",s="hour",r="week",i="month",l="quarter",o="year",c="date",d="Invalid Date",u=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m=function(e,t,n){var a=String(e);return!a||a.length>=t?e:""+Array(t+1-a.length).join(n)+e},(x={})[f="en"]={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||"th")+"]"}},g=function(e){return e instanceof b},p=function e(t,n,a){var s;if(!t)return f;if("string"==typeof t){var r=t.toLowerCase();x[r]&&(s=r),n&&(x[r]=n,s=r);var i=t.split("-");if(!s&&i.length>1)return e(i[0])}else{var l=t.name;x[l]=t,s=l}return!a&&s&&(f=s),s||!a&&f},y=function(e,t){if(g(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new b(n)},(v={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t);return(t<=0?"+":"-")+m(Math.floor(n/60),2,"0")+":"+m(n%60,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var a=12*(n.year()-t.year())+(n.month()-t.month()),s=t.clone().add(a,i),r=n-s<0,l=t.clone().add(a+(r?-1:1),i);return+(-(a+(n-s)/(r?s-l:l-s))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return({M:i,y:o,w:r,d:"day",D:c,h:s,m:a,s:n,ms:t,Q:l})[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}}).l=p,v.i=g,v.w=function(e,t){return y(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})},N=(b=function(){function e(e){this.$L=p(e.locale,null,!0),this.parse(e)}var m=e.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(v.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var a=t.match(u);if(a){var s=a[2]-1||0,r=(a[7]||"0").substring(0,3);return n?new Date(Date.UTC(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)):new Date(a[1],s,a[3]||1,a[4]||0,a[5]||0,a[6]||0,r)}}return new Date(t)}(e),this.$x=e.x||{},this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return v},m.isValid=function(){return this.$d.toString()!==d},m.isSame=function(e,t){var n=y(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return y(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<y(e)},m.$g=function(e,t,n){return v.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var l=this,d=!!v.u(t)||t,u=v.p(e),h=function(e,t){var n=v.w(l.$u?Date.UTC(l.$y,t,e):new Date(l.$y,t,e),l);return d?n:n.endOf("day")},m=function(e,t){return v.w(l.toDate()[e].apply(l.toDate("s"),(d?[0,0,0,0]:[23,59,59,999]).slice(t)),l)},f=this.$W,x=this.$M,g=this.$D,p="set"+(this.$u?"UTC":"");switch(u){case o:return d?h(1,0):h(31,11);case i:return d?h(1,x):h(0,x+1);case r:var y=this.$locale().weekStart||0,b=(f<y?f+7:f)-y;return h(d?g-b:g+(6-b),x);case"day":case c:return m(p+"Hours",0);case s:return m(p+"Minutes",1);case a:return m(p+"Seconds",2);case n:return m(p+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,r){var l,d=v.p(e),u="set"+(this.$u?"UTC":""),h=((l={}).day=u+"Date",l[c]=u+"Date",l[i]=u+"Month",l[o]=u+"FullYear",l[s]=u+"Hours",l[a]=u+"Minutes",l[n]=u+"Seconds",l[t]=u+"Milliseconds",l)[d],m="day"===d?this.$D+(r-this.$W):r;if(d===i||d===o){var f=this.clone().set(c,1);f.$d[h](m),f.init(),this.$d=f.set(c,Math.min(this.$D,f.daysInMonth())).$d}else h&&this.$d[h](m);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[v.p(e)]()},m.add=function(e,t){var l,c=this;e=Number(e);var d=v.p(t),u=function(t){var n=y(c);return v.w(n.date(n.date()+Math.round(t*e)),c)};if(d===i)return this.set(i,this.$M+e);if(d===o)return this.set(o,this.$y+e);if("day"===d)return u(1);if(d===r)return u(7);var h=((l={})[a]=6e4,l[s]=36e5,l[n]=1e3,l)[d]||1,m=this.$d.getTime()+e*h;return v.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||d;var a=e||"YYYY-MM-DDTHH:mm:ssZ",s=v.z(this),r=this.$H,i=this.$m,l=this.$M,o=n.weekdays,c=n.months,u=function(e,n,s,r){return e&&(e[n]||e(t,a))||s[n].slice(0,r)},m=function(e){return v.s(r%12||12,e,"0")},f=n.meridiem||function(e,t,n){var a=e<12?"AM":"PM";return n?a.toLowerCase():a},x={YY:String(this.$y).slice(-2),YYYY:this.$y,M:l+1,MM:v.s(l+1,2,"0"),MMM:u(n.monthsShort,l,c,3),MMMM:u(c,l),D:this.$D,DD:v.s(this.$D,2,"0"),d:String(this.$W),dd:u(n.weekdaysMin,this.$W,o,2),ddd:u(n.weekdaysShort,this.$W,o,3),dddd:o[this.$W],H:String(r),HH:v.s(r,2,"0"),h:m(1),hh:m(2),a:f(r,i,!0),A:f(r,i,!1),m:String(i),mm:v.s(i,2,"0"),s:String(this.$s),ss:v.s(this.$s,2,"0"),SSS:v.s(this.$ms,3,"0"),Z:s};return a.replace(h,function(e,t){return t||x[e]||s.replace(":","")})},m.utcOffset=function(){return-(15*Math.round(this.$d.getTimezoneOffset()/15))},m.diff=function(e,t,c){var d,u=v.p(t),h=y(e),m=(h.utcOffset()-this.utcOffset())*6e4,f=this-h,x=v.m(this,h);return x=((d={})[o]=x/12,d[i]=x,d[l]=x/3,d[r]=(f-m)/6048e5,d.day=(f-m)/864e5,d[s]=f/36e5,d[a]=f/6e4,d[n]=f/1e3,d)[u]||f,c?x:v.a(x)},m.daysInMonth=function(){return this.endOf(i).$D},m.$locale=function(){return x[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),a=p(e,t,!0);return a&&(n.$L=a),n},m.clone=function(){return v.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},e}()).prototype,y.prototype=N,[["$ms",t],["$s",n],["$m",a],["$H",s],["$W","day"],["$M",i],["$y",o],["$D",c]].forEach(function(e){N[e[1]]=function(t){return this.$g(t,e[0],e[1])}}),y.extend=function(e,t){return e.$i||(e(t,b,y),e.$i=!0),y},y.locale=p,y.isDayjs=g,y.unix=function(e){return y(1e3*e)},y.en=x[f],y.Ls=x,y.p={},y)},7958:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/create-league",function(){return n(8342)}])},8342:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return u},default:function(){return h}});var a=n(5893),s=n(7294),r=n(7484),i=n.n(r),l=n(7578),o=n.n(l);let c=e=>{let{username:t}=e,[n,r]=(0,s.useState)(""),[l,c]=(0,s.useState)(),[d,u]=(0,s.useState)({name:"",region:"",owner:t,inviteOnly:"false",draftTime:"",startDate:"",endDate:"",buyIn:"false",buyInFee:0,duration:0,houseFee:0,minPlayers:0,maxPlayers:0}),h=async()=>{if(""===d.name||""===d.region||""===d.owner||""===d.inviteOnly||""===d.draftTime||""===d.startDate||""===d.endDate||""===d.buyIn||0===d.minPlayers||0===d.maxPlayers){alert("All fields are required");return}await fetch("/api/create-league",{method:"POST",body:JSON.stringify(d)}).then(e=>{e.text().then(e=>{r(e),alert("League Created Successfully")})}).catch(e=>{console.error(e.message)})};return(0,a.jsx)("div",{className:"".concat(o().root),children:(0,a.jsxs)("div",{className:"min-h-screen p-3 space-x-5 bg-gray-dark flex items-start justify-center",children:[(0,a.jsx)("div",{className:"container max-w-[600px]",children:(0,a.jsx)("div",{children:(0,a.jsx)("div",{className:"rounded-xl bg-gradient-to-r from-primary to-secondary shadow-lg p-1 md:p-8 mb-6",children:(0,a.jsx)("div",{className:"bg-gray-medium p-4 px-4 rounded-xl ",children:(0,a.jsxs)("div",{className:"grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3",children:[(0,a.jsxs)("div",{className:"text-white mb-6",children:[(0,a.jsx)("p",{className:"font-medium text-lg bg-gradient-to-r from-primary via-[#f43d00] to-secondary bg-clip-text font-bold text-transparent",children:"Fantasy League Details"}),(0,a.jsx)("p",{className:"bg-gradient-to-r from-primary via-[#f43d00] to-secondary bg-clip-text font-bold text-transparent",children:"Please fill out all the fields."})]}),(0,a.jsx)("div",{className:"lg:col-span-2",children:(0,a.jsxs)("div",{className:"grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5",children:[(0,a.jsxs)("div",{className:"md:col-span-5 text-white mb-6",children:[(0,a.jsx)("label",{className:"uppercase",htmlFor:"league_name ",children:"League Name"}),(0,a.jsx)("input",{onChange(e){u({...d,name:e.target.value}),console.log(d)},type:"text",name:"name",id:"league_name",className:"h-10 text-gray-300 font-bold mt-1 px-4 w-full bg-gray-light rounded-full"})]}),(0,a.jsxs)("label",{className:"md:col-span-5 text-white uppercase mb-6",htmlFor:"region",children:["Choose a region:",(0,a.jsxs)("select",{onChange(e){u({...d,region:e.target.value}),console.log(d)},className:"h-10 mt-1 text-gray-400 font-bold rounded px-4 w-full bg-gray-light rounded-full",name:"region",children:[(0,a.jsx)("option",{value:"LEC",children:"LEC EUROPE"}),(0,a.jsx)("option",{value:"LCK",children:"LCK KOREA"}),(0,a.jsx)("option",{value:"LPL",children:"LPL CHINA"}),(0,a.jsx)("option",{value:"LCS",children:"LCS AMERICA"})]})]}),(0,a.jsxs)("div",{className:"md:col-span-3 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"startDate",children:"START DATE"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,startDate:i()(t).toDate().toISOString()}),console.log(d)},type:"date",name:"startDate",id:"startDate",className:"h-10 text-gray-400 font-bold mt-1 rounded px-4 w-full bg-gray-light rounded-full",placeholder:""})]}),(0,a.jsxs)("div",{className:"md:col-span-3 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"endDate",children:"end date"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,endDate:i()(t).toDate().toISOString()}),console.log(d)},type:"date",name:"endDate",id:"endDate",className:"h-10 text-gray-400 font-bold mt-1 rounded px-4 w-full bg-gray-light rounded-full",placeholder:""})]}),(0,a.jsxs)("div",{className:"md:col-span-3 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"draftDate",children:"Draft date"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,draftTime:i()(t).toDate().toISOString()}),console.log(d)},type:"date",name:"draftDate",id:"draftDate",className:"h-10 text-gray-400 font-bold mt-1 rounded px-4 w-full bg-gray-light rounded-full",placeholder:""})]}),(0,a.jsxs)("div",{className:"md:col-span-2 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"maxPlayers",children:"Max members"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,maxPlayers:Number(t)}),console.log(d)},type:"number",name:"maxPlayers",id:"maxPlayers",className:"h-10 mt-1 rounded px-4 text-gray-400 w-full bg-gray-light rounded-full",placeholder:""})]}),(0,a.jsxs)("div",{className:"md:col-span-2 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"minPlayers",children:"Min members"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,minPlayers:Number(t)}),console.log(d)},type:"number",name:"minPlayers",id:"minPlayers",className:"h-10 mt-1 rounded px-4 w-full text-gray-400 bg-gray-light rounded-full",placeholder:""})]}),(0,a.jsx)("div",{className:"md:col-span-5 mb-6",children:(0,a.jsx)("div",{className:"inline-flex items-center",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"uppercase text-white",children:"This is A buy-in League?"}),(0,a.jsxs)("div",{className:"flex flex-row",children:["                        ",(0,a.jsx)("input",{onChange(e){u({...d,buyIn:"true"}),console.log(d)},type:"checkbox",name:"buyIn",id:"buyIn",className:"form-checkbox "}),(0,a.jsx)("label",{htmlFor:"true",className:"ml-2 uppercase text-white",children:"True"})]}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("input",{onChange(e){u({...d,buyIn:"false"}),console.log(d)},type:"checkbox",name:"false",id:"buyinTrue",className:"form-checkbox "}),(0,a.jsx)("label",{htmlFor:"false",className:"ml-2 uppercase text-white",children:"False"})]})]})})}),(0,a.jsxs)("div",{className:"md:col-span-2 mb-6",children:[(0,a.jsx)("label",{className:"uppercase text-white",htmlFor:"buyInfee",children:"BuyInfee"}),(0,a.jsx)("input",{onChange(e){let t=e.target.value;u({...d,buyInFee:Number(t)}),console.log(d)},type:"number",name:"buyInfee",id:"buyInfee",placeholder:"$1,000,000.00",className:"h-10 mt-1 text-gray-400 rounded px-4 w-full bg-gray-light rounded-full"})]}),(0,a.jsx)("div",{className:"md:col-span-5 mb-6",children:(0,a.jsx)("div",{className:"inline-flex items-center",children:(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsx)("span",{className:"uppercase text-white",children:"This League is Invite oNLY?"}),(0,a.jsxs)("div",{className:"flex flex-row",children:["                        ",(0,a.jsx)("input",{onChange(e){u({...d,inviteOnly:"true"}),console.log(d)},type:"checkbox",name:"inviteOnlytrue",id:"inviteOnly",className:"form-checkbox"}),(0,a.jsx)("label",{htmlFor:"invitetrue",className:"ml-2 uppercase text-white",children:"True"})]}),(0,a.jsxs)("div",{className:"flex flex-row",children:[(0,a.jsx)("input",{onChange(e){u({...d,inviteOnly:"false"}),console.log(d)},type:"checkbox",name:"inviteOnlyfalse",id:"billing_same",className:"form-checkbox"}),(0,a.jsx)("label",{htmlFor:"invitefalse",className:"ml-2 uppercase text-white",children:"False"})]})]})})}),(0,a.jsx)("div",{className:"md:col-span-5 text-left",children:(0,a.jsx)("div",{className:"inline-flex items-end",children:(0,a.jsx)("button",{onClick:h,className:"bg-gray-light hover:bg-gradient-to-r from-primary to-secondary hover:text-gray-dark text-white text-lg font-bold py-2 px-6 focus:outline rounded-full",children:(0,a.jsx)("span",{children:"Submit"})})})})]})})]})})})})}),(0,a.jsxs)("div",{className:"flex flex-col w-1/4 space-y-5 p-6",children:[" ",(0,a.jsx)("h2",{className:"font-semibold mb-6 text-3xl font-xix bg-gradient-to-r from-primary via-[#f43d00] to-secondary bg-clip-text font-bold text-transparent",children:"Create Fantasy League"})," ",(0,a.jsx)("div",{children:(0,a.jsxs)("div",{className:"flex flex-col space-y-5",children:[(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-primary",children:"Rules"}),(0,a.jsx)("p",{className:"text-gray-400",children:"Find an in-depth list here of how all the points are calculated and how any exception to normal game circumstances are handled."})]}),(0,a.jsxs)("div",{children:[(0,a.jsx)("h1",{className:"text-primary",children:"FAQ"}),(0,a.jsx)("p",{className:"text-gray-400",children:"Find an in-depth list here of how all the points are calculated and how any exception to normal game circumstances are handled."})]})]})})," "]})]})})},d=e=>{let{username:t,owner:n}=e;(0,s.useEffect)(()=>{(null===n.verificationCode||""===n.verificationCode||!1===n.emailVerified)&&(window.location.href="/user/verify")},[n.verificationCode,n.emailVerified]);let[r,i]=(0,s.useState)(""),[l,o]=(0,s.useState)(),[d,u]=(0,s.useState)({name:"",region:"",owner:t,inviteOnly:"false",draftTime:"",startDate:"",endDate:"",buyIn:"false",buyInFee:0,duration:0,houseFee:0,minPlayers:0,maxPlayers:0});return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(c,{username:t})})};var u=!0,h=d},7578:function(e){e.exports={root:"creater_root__PfrQU"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=7958)}),_N_E=e.O()}]);