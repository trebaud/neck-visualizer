(this["webpackJsonpneck-visualizer"]=this["webpackJsonpneck-visualizer"]||[]).push([[0],{18:function(e,n,t){e.exports=t(30)},23:function(e,n,t){},30:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),l=t(4),o=t.n(l),i=(t(23),t(5)),u=t(3),c=t(7),d=t(9),m=t.n(d),f=t(15),s=t.n(f),b=t(2);function v(){var e=Object(u.a)(["\n\t&::before {\n\t\tcontent: '\u2022';\n\t\tfont-weight: bold;\n\t\tfont-size: 2rem;\n\t\tmargin-right: 1rem;\n\t\tcolor: ",";\n\t}\n"]);return v=function(){return e},e}function g(){var e=Object(u.a)(["\n\tlist-style: none;\n\tborder-left: 4px solid aliceblue;\n"]);return g=function(){return e},e}function p(){var e=Object(u.a)(["\n\tmargin-left: 1rem;\n"]);return p=function(){return e},e}function h(){var e=Object(u.a)(["\n\tmargin-bottom: 2rem;\n"]);return h=function(){return e},e}function E(){var e=Object(u.a)(["\n\tfont-size: 1.25rem;\n"]);return E=function(){return e},e}function j(){var e=Object(u.a)(["\n\tgrid-area: info;\n\tpadding: 2rem;\n\tmargin: 2rem 2rem 3rem 0;\n\tbackground-color: #fff;\n\topacity: 0.8;\n\tmargin-top: 2rem;\n\tborder-radius: 0.25rem;\n\tdisplay: flex;\n\tflex-direction: columns;\n"]);return j=function(){return e},e}function O(){var e=Object(u.a)(["\n\tgrid-area: settings;\n\tpadding: 2rem;\n\tmargin: 2rem 0 3rem 2rem;\n\tbackground-color: #fff;\n\topacity: 0.8;\n\tborder-radius: 0.25rem;\n"]);return O=function(){return e},e}function k(){var e=Object(u.a)(["\n\tgrid-area: neck;\n\tmargin: 0 2rem;\n\tpadding: 2rem;\n\tbackground-color: #fff;\n\topacity: 0.8;\n\tborder-radius: 0.25rem;\n"]);return k=function(){return e},e}function M(){var e=Object(u.a)(["\n\tborder-radius: 2rem;\n\tpadding: 1rem;\n\tfont-size: 3rem;\n\tcolor: magenta;\n\tbackground-color: #fff;\n\topacity: 0.5;\n"]);return M=function(){return e},e}function S(){var e=Object(u.a)(["\n\tgrid-area: header;\n\ttext-align: center;\n\tpadding: 2rem;\n"]);return S=function(){return e},e}function A(){var e=Object(u.a)(["\n\tbackground-image: url(","static/images/cool.png);\n\tbackground-size: cover;\n\tdisplay: grid;\n\tgrid-gap: 1rem;\n\tgrid-template-areas:\n\t\t'header header'\n\t\t'neck neck'\n\t\t'settings info';\n"]);return A=function(){return e},e}var D=b.default.main(A(),""),y=b.default.div(S()),C=b.default.span(M()),F=b.default.div(k()),z=b.default.div(O()),N=b.default.div(j()),P=b.default.div(E()),T=b.default.div(h()),w=b.default.label(p()),x=b.default.ul(g()),R=b.default.li(v(),(function(e){return e.color})),B=["C","G","D","A","E","B","F#","C#","G#","D#","A#","F"],G={STANDARD:["E2","A2","D3","G3","B3","E4"],FOURTHS:["E2","A2","D3","G3","C4","F4"]},H={major:["root","2M","3M","4P","5P","6M","7M"],"harmonic minor":["root","2M","3m","4P","5P","6m","7M"],"melodic minor":["root","2M","3m","4P","5P","6M","7M"],augmented:["root"],diminished:["root"]},J={root:"#2196f3","2M":"#FFB6C1","3m":"yellow","3M":"#6ec6ff","4P":"#32CD32","5P":"#9a67ea","6M":"#F08080","7m":"red","7M":"#b9e59e"};var U=function(){var e=Object(a.useState)(),n=Object(i.a)(e,2),t=n[0],l=n[1],o=Object(a.useState)({value:"STANDARD",label:"Standard"}),u=Object(i.a)(o,2),f=u[0],b=u[1],v=Object(a.useState)({value:"major",label:"Major diatonic"}),g=Object(i.a)(v,2),p=g[0],h=g[1],E=Object(a.useState)(!0),j=Object(i.a)(E,2),O=j[0],k=j[1],M=(null===t||void 0===t?void 0:t.value)?Object(d.scaleNotes)(null===t||void 0===t?void 0:t.value,null===p||void 0===p?void 0:p.value).map((function(e){return e.note})):[];function S(){var e=H[null===p||void 0===p?void 0:p.value];return M.map((function(n,t){return{note:n,status:e[t]}}))}var A=[{value:"major",label:"Major diatonic"},{value:"harmonic minor",label:"Harmonic minor"},{value:"melodic minor",label:"Melodic minor"},{value:"diminished",label:"Diminished"},{value:"augmented",label:"Augmented"}].find((function(e){return e.value===p.value})).label;return r.a.createElement(D,null,r.a.createElement(y,null,r.a.createElement(C,null,"Guitar Neck Visualizer")),r.a.createElement(F,null,r.a.createElement(m.a,{skinType:"strings",nrOfFrets:12,tuning:G[null===f||void 0===f?void 0:f.value],showNotes:O,selectedNotes:S(),theme:{statusMap:J}})),r.a.createElement(z,null,r.a.createElement(T,null,r.a.createElement("label",null,"Tuning"),r.a.createElement(c.a,{id:"tuning",value:f,placeholder:"Standard tuning by default",onChange:function(e){b(e)},options:[{value:"STANDARD",label:"Standard"},{value:"FOURTHS",label:"All fourths"}]})),r.a.createElement(T,null,r.a.createElement("label",null,"Root note"),r.a.createElement(c.a,{id:"rootNote",value:t,placeholder:"Select a root note",onChange:function(e){l(e)},options:B.map((function(e){return{label:e,value:e}}))})),r.a.createElement(T,null,r.a.createElement("label",null,"Scale"),r.a.createElement(c.a,{id:"scale",value:p,placeholder:"Select a scale",onChange:function(e){h(e)},options:[{value:"major",label:"Major diatonic"},{value:"harmonic minor",label:"Harmonic minor"},{value:"melodic minor",label:"Melodic minor"},{value:"diminished",label:"Diminished"},{value:"augmented",label:"Augmented"}]})),r.a.createElement(T,null,r.a.createElement(s.a,{checked:O,checkBoxStyle:{checkedColor:"#b5cbbb",size:25,unCheckedColor:"#b8b8b8"},duration:400,onClick:function(){return k(!O)}}),r.a.createElement(w,null,"Show notes"))),r.a.createElement(N,null,r.a.createElement(T,null,r.a.createElement(P,null,A," scale:"),r.a.createElement(x,null,S().map((function(e){var n=e.note,t=e.status;return r.a.createElement(R,{color:J[t]},t?"".concat(t,":"):""," ",n)})))),r.a.createElement(T,null,r.a.createElement("img",{alt:"circle-of-fifths",src:"".concat("","static/images/circle-of-fifths.jpg")}))))};o.a.render(r.a.createElement(U,null),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.e01bda65.chunk.js.map