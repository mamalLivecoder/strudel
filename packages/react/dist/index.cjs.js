"use strict";Object.defineProperties(exports,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}});const t=require("react"),G=require("@uiw/react-codemirror"),b=require("@codemirror/view"),R=require("@codemirror/state"),Q=require("@codemirror/lang-javascript"),o=require("@lezer/highlight"),W=require("@uiw/codemirror-themes"),X=require("react-hook-inview"),V=require("@strudel.cycles/webaudio"),Y=require("@strudel.cycles/core"),Z=require("@strudel.cycles/transpiler"),j=e=>e&&typeof e=="object"&&"default"in e?e:{default:e},n=j(t),ee=j(G),te=W.createTheme({theme:"dark",settings:{background:"#222",foreground:"#75baff",caret:"#ffcc00",selection:"rgba(128, 203, 196, 0.5)",selectionMatch:"#036dd626",lineHighlight:"#00000050",gutterBackground:"transparent",gutterForeground:"#8a919966"},styles:[{tag:o.tags.keyword,color:"#c792ea"},{tag:o.tags.operator,color:"#89ddff"},{tag:o.tags.special(o.tags.variableName),color:"#eeffff"},{tag:o.tags.typeName,color:"#c3e88d"},{tag:o.tags.atom,color:"#f78c6c"},{tag:o.tags.number,color:"#c3e88d"},{tag:o.tags.definition(o.tags.variableName),color:"#82aaff"},{tag:o.tags.string,color:"#c3e88d"},{tag:o.tags.special(o.tags.string),color:"#c3e88d"},{tag:o.tags.comment,color:"#7d8799"},{tag:o.tags.variableName,color:"#c792ea"},{tag:o.tags.tagName,color:"#c3e88d"},{tag:o.tags.bracket,color:"#525154"},{tag:o.tags.meta,color:"#ffcb6b"},{tag:o.tags.attributeName,color:"#c792ea"},{tag:o.tags.propertyName,color:"#c792ea"},{tag:o.tags.className,color:"#decb6b"},{tag:o.tags.invalid,color:"#ffffff"}]});const P=R.StateEffect.define(),re=R.StateField.define({create(){return b.Decoration.none},update(e,r){try{for(let a of r.effects)if(a.is(P))if(a.value){const s=b.Decoration.mark({attributes:{style:"background-color: #FFCA2880"}});e=b.Decoration.set([s.range(0,r.newDoc.length)])}else e=b.Decoration.set([]);return e}catch(a){return console.warn("flash error",a),e}},provide:e=>b.EditorView.decorations.from(e)}),B=e=>{e.dispatch({effects:P.of(!0)}),setTimeout(()=>{e.dispatch({effects:P.of(!1)})},200)},N=R.StateEffect.define(),oe=R.StateField.define({create(){return b.Decoration.none},update(e,r){try{for(let a of r.effects)if(a.is(N)){const s=a.value.map(c=>(c.context.locations||[]).map(({start:m,end:u})=>{const d=c.context.color||"#FFCA28";let i=r.newDoc.line(m.line).from+m.column,l=r.newDoc.line(u.line).from+u.column;const h=r.newDoc.length;return i>h||l>h?void 0:b.Decoration.mark({attributes:{style:`outline: 1.5px solid ${d};`}}).range(i,l)})).flat().filter(Boolean)||[];e=b.Decoration.set(s,!0)}return e}catch{return b.Decoration.set([])}},provide:e=>b.EditorView.decorations.from(e)}),ae=[Q.javascript(),te,oe,re];function I({value:e,onChange:r,onViewChanged:a,onSelectionChange:s,options:c,editorDidMount:m}){const u=t.useCallback(l=>{r?.(l)},[r]),d=t.useCallback(l=>{a?.(l)},[a]),i=t.useCallback(l=>{l.selectionSet&&s&&s?.(l.state.selection)},[s]);return n.default.createElement(n.default.Fragment,null,n.default.createElement(ee.default,{value:e,onChange:u,onCreateEditor:d,onUpdate:i,extensions:ae}))}function H(...e){return e.filter(Boolean).join(" ")}function K({view:e,pattern:r,active:a,getTime:s}){const c=t.useRef([]),m=t.useRef();t.useEffect(()=>{if(e)if(r&&a){let d=function(){try{const i=s(),h=[Math.max(m.current||i,i-1/10,0),i+1/60];m.current=h[1],c.current=c.current.filter(p=>p.whole.end>i);const w=r.queryArc(...h).filter(p=>p.hasOnset());c.current=c.current.concat(w),e.dispatch({effects:N.of(c.current)})}catch{e.dispatch({effects:N.of([])})}u=requestAnimationFrame(d)},u=requestAnimationFrame(d);return()=>{cancelAnimationFrame(u)}}else c.current=[],e.dispatch({effects:N.of([])})},[r,a,e])}const ne="_container_3i85k_1",se="_header_3i85k_5",ce="_buttons_3i85k_9",ie="_button_3i85k_9",le="_buttonDisabled_3i85k_17",ue="_error_3i85k_21",de="_body_3i85k_25",E={container:ne,header:se,buttons:ce,button:ie,buttonDisabled:le,error:ue,body:de};function z({type:e}){return n.default.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"sc-h-5 sc-w-5",viewBox:"0 0 20 20",fill:"currentColor"},{refresh:n.default.createElement("path",{fillRule:"evenodd",d:"M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z",clipRule:"evenodd"}),play:n.default.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z",clipRule:"evenodd"}),pause:n.default.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd"})}[e])}function O({defaultOutput:e,interval:r,getTime:a,evalOnMount:s=!1,initialCode:c="",autolink:m=!1,beforeEval:u,afterEval:d,onEvalError:i,onToggle:l}){const[h,w]=t.useState(),[p,D]=t.useState(),[v,k]=t.useState(c),[y,q]=t.useState(v),[F,_]=t.useState(),[C,A]=t.useState(!1),M=v!==y,{scheduler:f,evaluate:x,start:U,stop:J,pause:$}=t.useMemo(()=>Y.repl({interval:r,defaultOutput:e,onSchedulerError:w,onEvalError:g=>{D(g),i?.(g)},getTime:a,transpiler:Z.transpiler,beforeEval:({code:g})=>{k(g),u?.()},afterEval:({pattern:g,code:T})=>{q(T),_(g),D(),w(),m&&(window.location.hash="#"+encodeURIComponent(btoa(T))),d?.()},onToggle:g=>{A(g),l?.(g)}}),[e,r,a]),S=t.useCallback(async(g=!0)=>x(v,g),[x,v]),L=t.useRef();return t.useEffect(()=>{!L.current&&s&&v&&(L.current=!0,S())},[S,s,v]),t.useEffect(()=>()=>{f.stop()},[f]),{code:v,setCode:k,error:h||p,schedulerError:h,scheduler:f,evalError:p,evaluate:x,activateCode:S,activeCode:y,isDirty:M,pattern:F,started:C,start:U,stop:J,pause:$,togglePlay:async()=>{C?f.pause():await S()}}}const fe=()=>V.getAudioContext().currentTime;function ge({tune:e,hideOutsideView:r=!1,init:a,enableKeyboard:s}){const{code:c,setCode:m,evaluate:u,activateCode:d,error:i,isDirty:l,activeCode:h,pattern:w,started:p,scheduler:D,togglePlay:v,stop:k}=O({initialCode:e,defaultOutput:V.webaudioOutput,getTime:fe}),[y,q]=t.useState(),[F,_]=X.useInView({threshold:.01}),C=t.useRef(),A=t.useMemo(()=>((_||!r)&&(C.current=!0),_||C.current),[_,r]);return K({view:y,pattern:w,active:p&&!h?.includes("strudel disable-highlighting"),getTime:()=>D.getPhase()}),t.useLayoutEffect(()=>{if(s){const M=async f=>{(f.ctrlKey||f.altKey)&&(f.code==="Enter"?(f.preventDefault(),B(y),await d()):f.code==="Period"&&(k(),f.preventDefault()))};return window.addEventListener("keydown",M,!0),()=>window.removeEventListener("keydown",M,!0)}},[s,w,c,u,k,y]),n.default.createElement("div",{className:E.container,ref:F},n.default.createElement("div",{className:E.header},n.default.createElement("div",{className:E.buttons},n.default.createElement("button",{className:H(E.button,p?"sc-animate-pulse":""),onClick:()=>v()},n.default.createElement(z,{type:p?"pause":"play"})),n.default.createElement("button",{className:H(l?E.button:E.buttonDisabled),onClick:()=>d()},n.default.createElement(z,{type:"refresh"}))),i&&n.default.createElement("div",{className:E.error},i.message)),n.default.createElement("div",{className:E.body},A&&n.default.createElement(I,{value:c,onChange:m,onViewChanged:q})))}function me(e){return t.useEffect(()=>(window.addEventListener("message",e),()=>window.removeEventListener("message",e)),[e]),t.useCallback(r=>window.postMessage(r,"*"),[])}const he=e=>t.useLayoutEffect(()=>(window.addEventListener("keydown",e,!0),()=>window.removeEventListener("keydown",e,!0)),[e]);exports.CodeMirror=I;exports.MiniRepl=ge;exports.cx=H;exports.flash=B;exports.useHighlighting=K;exports.useKeydown=he;exports.usePostMessage=me;exports.useStrudel=O;
