(this.webpackJsonpdosuku=this.webpackJsonpdosuku||[]).push([[0],{28:function(e){e.exports=JSON.parse('{"checkBoardButton":"Check","description":"Please don\'t commit sudoku","copyrightNotice":"Copyright \xa9 2020 Tore Bergebakken - Some rights reserved.","difficultyEasy":"Easy","difficultyMedium":"Medium","difficultyHard":"Hard","notFilledMessage":"The board is not filled in!","winMessage":"Congratulations! You solved it!","lossMessage":"Nay. This is wrong.","goBack":"Back"}')},29:function(e){e.exports=JSON.parse('{"checkBoardButton":"Sjekk","description":"Rett og slett sudoku","copyrightNotice":"Copyright \xa9 2020 Tore Bergebakken \u2013 Noen rettigheter forbeholdt.","difficultyEasy":"Lett","difficultyMedium":"Middels","difficultyHard":"Vanskelig","notFilledMessage":"Du har ikke fylt ut brettet!","winMessage":"Gratulerer med seieren, kompis!","lossMessage":"Beklager, dette er ikke helt rett.","goBack":"Tilbake"}')},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},42:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),i=n(18),s=n.n(i),u=(n(37),n(38),n(10)),o=n(2),l=(n(39),n(7)),d=n(14),b=n(8),j=n.n(b),f=n(11),h=n.n(f),O=j.a.mark(k),x=j.a.mark(C),m=j.a.mark(N);function g(e){return e.map((function(e){return e.map((function(e){return{numbers:0!==e?[e]:[],disabled:0!==e}}))}))}var p=[[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0],[0,0,0,0,0,0,0,0,0]];function k(e){var t;return j.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:t=1;case 1:if(!(t<=e)){n.next=7;break}return n.next=4,t;case 4:t++,n.next=1;break;case 7:case"end":return n.stop()}}),O)}var v=new Set(k(9)),y=Array.from(k(9));function C(e,t){var n,c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:n=Object(d.a)(t),a.prev=1,n.s();case 3:if((c=n.n()).done){a.next=9;break}return r=c.value,a.next=7,r[e];case 7:a.next=3;break;case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),n.e(a.t0);case 14:return a.prev=14,n.f(),a.finish(14);case 17:case"end":return a.stop()}}),x,null,[[1,11,14,17]])}function N(e,t,n){var c,r;return j.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:c=3*e;case 1:if(!(c<3*(e+1))){a.next=12;break}r=3*t;case 3:if(!(r<3*(t+1))){a.next=9;break}return a.next=6,n[c][r];case 6:r++,a.next=3;break;case 9:c++,a.next=1;break;case 12:case"end":return a.stop()}}),m)}function w(e){var t,n=h.a.clone(v),c=Object(d.a)(e);try{for(c.s();!(t=c.n()).done;){var r=t.value;n.delete(r)}}catch(a){c.e(a)}finally{c.f()}return 0===n.size}n(42);var S=n(22),B=n(28),M=n(29),E={en:Object(S.a)({},B),no:Object(S.a)({},M)},F={en:"English",no:"Norsk"},T=Object(r.createContext)({language:"en",dictionary:E.en,languageChange:function(e){}});function A(e){var t=e.children,n=Object(r.useState)("en"),a=Object(l.a)(n,2),i=a[0],s=a[1],u={language:i,dictionary:E[i],languageChange:function(e){var t=e in F?e:"en";s(t),localStorage.setItem("language",t)}};return Object(c.jsx)(T.Provider,{value:u,children:t})}var I=[[4,3,5,2,6,9,7,8,1],[6,8,2,5,7,1,4,9,3],[1,9,7,8,3,4,5,6,2],[8,2,6,1,9,5,3,4,7],[3,7,4,6,8,2,9,1,5],[9,5,1,7,4,3,6,2,8],[5,1,9,3,2,6,8,7,4],[2,4,8,9,5,7,1,3,6],[7,6,3,4,1,8,2,5,9]],H=[[0,0,0,2,6,0,7,0,1],[6,8,0,0,7,0,0,9,0],[1,9,0,0,0,4,5,0,0],[8,2,0,1,0,0,0,4,0],[0,0,4,6,0,2,9,0,0],[0,5,0,0,0,3,0,2,8],[0,0,9,3,0,0,0,7,4],[0,4,0,0,5,0,0,3,6],[7,0,3,0,1,8,0,0,0]],J=h.a.cloneDeep(I);J[2][3]=1;var P={easy:[H,[[1,0,0,4,8,9,0,0,6],[7,3,0,0,0,0,0,4,0],[0,0,0,0,0,1,2,9,5],[0,0,7,1,2,0,6,0,0],[5,0,0,7,0,3,0,0,8],[0,0,6,0,9,5,7,0,0],[9,1,4,6,0,0,0,0,0],[0,2,0,0,0,0,0,3,7],[8,0,0,5,1,2,0,0,4]]],medium:[[[0,2,0,6,0,8,0,0,0],[5,8,0,0,0,9,7,0,0],[0,0,0,0,4,0,0,0,0],[3,7,0,0,0,0,5,0,0],[6,0,0,0,0,0,0,0,4],[0,0,8,0,0,0,0,1,3],[0,0,0,0,2,0,0,0,0],[0,0,9,8,0,0,0,3,6],[0,0,0,3,0,6,0,9,0]]],hard:[[[0,0,0,6,0,0,4,0,0],[7,0,0,0,0,3,6,0,0],[0,0,0,0,9,1,0,8,0],[0,0,0,0,0,0,0,0,0],[0,5,0,1,8,0,0,0,3],[0,0,0,3,0,6,0,4,5],[0,4,0,2,0,0,0,6,0],[9,0,3,0,0,0,0,0,0],[0,2,0,0,0,0,1,0,0]],[[2,0,0,3,0,0,0,0,0],[8,0,4,0,6,2,0,0,3],[0,1,3,8,0,0,2,0,0],[0,0,0,0,2,0,3,9,0],[5,0,7,0,0,0,6,2,1],[0,3,2,0,0,6,0,0,0],[0,2,0,0,0,9,1,4,0],[6,0,1,2,5,0,8,0,9],[0,0,0,0,0,1,0,0,2]]],cheat:[I],wrong:[J]},D=n(19),L=n.n(D),K=n(30),z=n.n(K);L.a.setAppElement("#root");var G={content:{minWidth:"15em",width:"30em",height:"10em",textAlign:"center",top:"50%",left:"50%",transform:"translate(-50%, -50%)"}};function R(e){return(e%3===2&&e<8?"border-bottom":"")||(e%3===0&&e>0?"border-top":"")}function V(e){return(e%3===2&&e<8?"border-right":"")||(e%3===0&&e>0?"border-left":"")}function W(e){var t,n=e.tile,r=e.onClick,a=e.selected,i=n.numbers;return t=i.length>4?Object(c.jsx)("div",{className:"cell-grid-tiny",children:n.numbers.map((function(e){return Object(c.jsx)("div",{className:"cell-num-tiny",children:e},e)}))}):i.length>1?Object(c.jsx)("div",{className:"cell-grid-small",children:n.numbers.map((function(e){return Object(c.jsx)("div",{className:"cell-num-small",children:e},e)}))}):i.length>0?i[0]:"",Object(c.jsx)("button",{className:"cell-btn ".concat(a?"active":""),onClick:r,disabled:n.disabled,children:t})}function Y(){var e=Object(o.f)().id,t=Object(r.useState)(!1),n=Object(l.a)(t,2),a=n[0],i=n[1],s=Object(r.useState)(""),b=Object(l.a)(s,2),j=b[0],f=b[1],O=Object(r.useState)(!1),x=Object(l.a)(O,2),m=x[0],k=x[1],v=Object(r.useState)(p),S=Object(l.a)(v,2),B=S[0],M=S[1],E=Object(r.useState)(g(p)),F=Object(l.a)(E,2),A=F[0],I=F[1],J=Object(r.useState)(null),D=Object(l.a)(J,2),K=D[0],Y=D[1],q=Object(r.useContext)(T).dictionary;return Object(r.useEffect)((function(){M(P[e]&&h.a.sample(P[e])||H)}),[e]),Object(r.useEffect)((function(){I(g(B))}),[B]),Object(c.jsxs)(z.a,{handleKeys:["enter","1","2","3","4","5","6","7","8","9"],onKeyEvent:function(e){"enter"!==e||a?Q(parseInt(e)):Z()},children:[Object(c.jsx)("table",{children:Object(c.jsx)("tbody",{children:A.map((function(e,t){return Object(c.jsx)("tr",{className:R(t),children:e.map((function(e,n){return Object(c.jsx)("td",{className:V(n),children:Object(c.jsx)(W,{tile:e,onClick:function(){return Y([t,n])},selected:U(t,n)})},n)}))},t)}))})}),Object(c.jsx)("p",{children:y.map((function(e){if(K){var t=A[K[0]][K[1]];return Object(c.jsx)("button",{className:"cell-btn ".concat(t.numbers.includes(e)?" active":""),onClick:function(){return Q(e)},children:e},e)}return Object(c.jsx)("button",{className:"cell-btn",disabled:!0,children:e},e)}))}),Object(c.jsxs)("p",{children:[Object(c.jsx)(u.b,{to:"/",children:Object(c.jsx)("button",{children:q.goBack})}),Object(c.jsx)("button",{onClick:Z,children:q.checkBoardButton})]}),Object(c.jsxs)(L.a,{isOpen:a,style:G,children:[Object(c.jsx)("p",{className:"message ".concat(m?" error":""),children:j}),Object(c.jsx)("p",{children:Object(c.jsx)("button",{onClick:function(){return i(!1)},children:"Ok"})})]})]});function Q(e){if(K){var t=Object(l.a)(K,2),n=t[0],c=t[1],r=A[n][c].numbers,a=h.a.clone(A);r.includes(e)?a[n][c].numbers=y.filter((function(t){return r.includes(t)&&t!==e})):a[n][c].numbers=y.filter((function(t){return r.includes(t)||t===e})),I(a)}}function U(e,t){return null!==K&&K[0]===e&&K[1]===t}function X(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];f(e),k(t),i(!0)}function Z(){var e;!function(e){return e.reduce((function(e,t){return e&&t.reduce((function(e,t){return e&&1===t.numbers.length}),!0)}),!0)}(A)?X(q.notFilledMessage):!function(e){var t,n=Object(d.a)(e);try{for(n.s();!(t=n.n()).done;)if(!w(t.value))return!1}catch(i){n.e(i)}finally{n.f()}for(var c=0;c<9;c++)if(!w(Array.from(C(c,e))))return!1;for(var r=0;r<3;r++)for(var a=0;a<3;a++)if(!w(Array.from(N(r,a,e))))return!1;return!0}((e=A,e.map((function(e){return e.map((function(e){return 1===e.numbers.length?e.numbers[0]:0}))}))))?X(q.lossMessage):X(q.winMessage,!1)}}function q(){var e=Object(r.useContext)(T).dictionary;return Object(c.jsxs)("header",{children:[Object(c.jsx)("h1",{children:"dosuku"}),Object(c.jsx)("h2",{children:e.description})]})}function Q(){return Object(c.jsxs)("footer",{children:[Object(c.jsx)("p",{children:"sudoku kudosu sukudo"}),Object(c.jsx)("p",{children:"sudoku dokusu kusudo"}),Object(c.jsx)("p",{children:"kudosu dosuku sukudo"})]})}function U(){var e=Object(r.useContext)(T),t=(e.language,e.languageChange);return Object(r.useEffect)((function(){var e=localStorage.getItem("language");e||(e=window.navigator.language.substr(0,2)),t(e)}),[t]),Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{onClick:function(){return t("en")},children:F.en}),Object(c.jsx)("button",{onClick:function(){return t("no")},children:F.no})]})}function X(){var e=Object(r.useContext)(T).dictionary;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("p",{children:Object(c.jsx)(u.b,{to:"/board/easy",children:Object(c.jsx)("button",{className:"btn-wide",children:e.difficultyEasy})})}),Object(c.jsx)("p",{children:Object(c.jsx)(u.b,{to:"/board/medium",children:Object(c.jsx)("button",{className:"btn-wide",children:e.difficultyMedium})})}),Object(c.jsx)("p",{children:Object(c.jsx)(u.b,{to:"/board/hard",children:Object(c.jsx)("button",{className:"btn-wide",children:e.difficultyHard})})}),Object(c.jsx)("p",{children:Object(c.jsx)(U,{})})]})}var Z=function(){return Object(c.jsx)(u.a,{children:Object(c.jsx)(A,{children:Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)(q,{}),Object(c.jsx)("main",{children:Object(c.jsxs)(o.c,{children:[Object(c.jsx)(o.a,{exact:!0,path:"/",children:Object(c.jsx)(X,{})}),Object(c.jsx)(o.a,{path:"/board/:id",children:Object(c.jsx)(Y,{})}),Object(c.jsx)(o.a,{children:Object(c.jsx)("h2",{children:"404 Not Found"})})]})}),Object(c.jsx)(Q,{})]})})})},$=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),c(e),r(e),a(e),i(e)}))};s.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(Z,{})}),document.getElementById("root")),$()}},[[56,1,2]]]);
//# sourceMappingURL=main.8df28976.chunk.js.map