(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,n){e.exports=n(18)},18:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),c=n(4),l=n.n(c),o=n(1),u=n.n(o),i=n(2),s=n(5),m=n(6),f=n(8),d=n(7),h=n(9),p=function(e){var t=e.children;return a.a.createElement("h1",{className:"f2 fw6 pv1 pt4-ns pb3-ns"},t)},b=function(e){var t=e.url,n=e.children;return a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link ttc black-80 hover-blue"},n)},v=function(e){var t=e.repository;return t&&a.a.createElement(p,null,a.a.createElement(b,{url:t.url},t.name)," Leaderboard")},E=function(e){var t=e.children;return a.a.createElement("p",{className:"lh-copy measure"},t)},g=function(e){var t=e.children;return a.a.createElement("code",{className:"f7 fs-normal ba b--black-20 br1 ph1"},t)},w=function(e){var t=e.pr,n=e.open,r=e.config;if(!t||!n)return null;var c=r.repository.url,l=r.createdAfter.substring(0,10),o="?q=is%3Apr+is%3Aopen+created%3A>"+l,u="?q=is%3Apr+is%3Amerged+created%3A>"+l,i="".concat(c).concat("/pulls").concat(o),s="".concat(c).concat("/pulls").concat(u);return a.a.createElement(E,null,a.a.createElement("b",null,t.points.length," people"," ",a.a.createElement(N,{url:s},"merged ",t.totalCount," Pull Requests")),", with a highest individual contribution of ",t.maxCount,". There are an additional"," ",a.a.createElement(N,{url:i},n.totalCount-t.totalCount," open PRs")," in the works. The highest individual contribution of open and merged PRs is"," ",n.maxCount,".")},k=function(e){var t=e.review,n=e.comment;e.bot;return t&&n&&a.a.createElement(E,null,a.a.createElement("b",null,t.points.length," authors")," created",a.a.createElement("b",null," ".concat(t.totalCount," ").concat(t.title))," and",a.a.createElement("b",null," ".concat(n.totalCount," ").concat(n.title)),".")},y=function(e){var t=e.config;return a.a.createElement("p",{className:"lh-copy measure-wide f6 i"},"PRs have been filtered by labels matching ",a.a.createElement(g,null,t.labelGlob)," ","and creation date after ",a.a.createElement(g,null,t.createdAfter.substring(0,10)))},N=function(e){var t=e.url,n=e.children,r=e.ttc,c="".concat("link black-80 hover-blue underline-hover"," ").concat(r?"ttc nowrap":"b");return a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:c},n)},C=function(e){var t=e.charts,n=e.config,c=e.bot;if(!t||0===t.length)return null;var l=t.reduce(function(e,t){return e[t.title]=t,e},{}),o=l["Merged Pull Requests"]||null,u=l["Merged or Open Pull Requests"]||null,i=l["Code Reviews"]||null,s=l["Code Review Comments"]||null;return a.a.createElement(r.Fragment,null,a.a.createElement(w,{pr:o,open:u,config:n}),a.a.createElement(k,{review:i,comment:s,bot:c}),a.a.createElement(y,{config:n}))},R=function(e,t,n){var r=function(e,t,n){var r=function(e,t){return"Merged Pull Requests"===e?"is:pr is:merged created:>".concat(t):"Merged or Open Pull Requests"===e?"is:pr is:merged,open created:>".concat(t):"is:pr created:>".concat(t)}(e,t),a=function(e,t){return t?"Merged Pull Requests"===e||"Merged or Open Pull Requests"===e?" author:".concat(t):" reviewed-by:".concat(t):""}(e,n);return"q=".concat(encodeURIComponent(r+a))}(e,t.createdAfter.substring(0,10),n);return"".concat(t.repository.url,"/pulls?").concat(r)},O=function(e){var t=e.children;return a.a.createElement("h2",{className:"f4 f3-ns fw6 pt4 pb2-ns"},t)},x=function(e){var t=e.url,n=e.children;return a.a.createElement("a",{href:t,target:"_blank",rel:"noopener noreferrer",className:"link black-80 hover-blue underline-hover"},n)},j=function(e){var t=e.children;return a.a.createElement("table",{className:"dt--fixed collapse f7 f6-ns"},a.a.createElement("tbody",null,t))},q=function(e){var t=e.point,n=e.authors,r=e.maxCount,c=e.countUrl,l=t.author,o=n[l],u=o?o.url:"",i=o?o.avatarUrl:"missing-avatar-url",s="".concat(t.count/r*100,"%");return a.a.createElement("tr",{className:"w-100"},a.a.createElement("td",{className:"w2 pr1 pt1"},a.a.createElement(x,{url:u},a.a.createElement("img",{className:"h1 w1",src:i,alt:"avatar"}))),a.a.createElement("td",{className:"w4 pt1 truncate"},a.a.createElement(x,{url:u},l)),a.a.createElement("td",{className:"w2 pt1"},a.a.createElement(x,{url:c},t.count)),a.a.createElement("td",{className:"w-100"},a.a.createElement(x,{url:c},a.a.createElement("div",{className:"bg-blue dim",style:{width:s,height:"1rem"}},"\xa0"))))},A=function(e){var t=e.title,n=e.config;return"Code Reviews"===t||"Code Review Comments"===t?a.a.createElement(O,null,t):a.a.createElement(O,null,a.a.createElement(x,{url:R(t,n)},t))},P=function(e){var t=e.chart,n=e.authors,c=e.config;return a.a.createElement(r.Fragment,null,a.a.createElement(A,{title:t.title,config:c}),a.a.createElement(j,null,t.points.map(function(e,r){var l=t.title,o=t.maxCount,u=R(l,c,e.author),i={point:e,authors:n,maxCount:o,countUrl:u};return a.a.createElement(q,Object.assign({},i,{key:r}))})))},M=function(){var e=Object(i.a)(u.a.mark(function e(t){var n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if((n=e.sent).ok){e.next=6;break}throw console.error("cannot request ".concat(t,". response: ").concat(JSON.stringify(n))),new Error("error fetching URL: ".concat(t));case 6:return e.next=8,n.json();case 8:return e.abrupt("return",e.sent);case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),U=function(e){var t=e.children;return a.a.createElement("div",{className:"center avenir black-80 mw100 mw7-ns pa3 ph5-ns"},t)},D=function(){return a.a.createElement(U,null,a.a.createElement(p,null,"Loading"))},S=function(e){var t=e.error;return console.error("error in App.js: ".concat(t)),a.a.createElement(U,null,a.a.createElement(p,null,"Something went wrong"))},_=function(){return a.a.createElement("div",{className:"bt b--black-20 pv3 mt5 f7 measure"},"Made with"," ",a.a.createElement("span",{role:"img","aria-label":"heart"},"\u2764\ufe0f")," ","by"," ",a.a.createElement("a",{href:"https://github.com/devopsacademyau/leaderboard/graphs/contributors",className:"link black-80 underline-hover hover-blue",rel:"noopener noreferrer",target:"_blank"},"Open Source Contributors"))},J=function(e){function t(e,n){var r;return Object(s.a)(this,t),(r=Object(f.a)(this,Object(d.a)(t).call(this,e,n))).state={chartData:null,loading:!0,error:null},r}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark(function e(){var t,n;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=null,e.next=3,M(this.props.url).catch(function(e){return t=e,null});case 3:n=e.sent,this.setState({chartData:n,error:t,loading:!1});case 5:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.loading,n=e.error,r=e.chartData;if(n)return a.a.createElement(S,{error:n});if(t)return a.a.createElement(D,null);var c=r.charts,l=r.config,o=r.authors,u=r.botComments,i=l.repository,s=o[l.botName]||{};return s.comments=u,a.a.createElement(U,null,a.a.createElement(v,{repository:i}),a.a.createElement(C,{charts:c,config:l,bot:s}),c.map(function(e,t){var n={chart:e,authors:o,config:l};return a.a.createElement(P,Object.assign({key:t},n))}),a.a.createElement(_,null))}}]),t}(r.Component);n(17),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(a.a.createElement(J,{url:"data.json"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.0f35ad82.chunk.js.map