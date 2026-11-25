(()=>{var Nt=(i,e,t)=>()=>{if(t)throw t[0];try{return i&&(e=i(i=0)),e}catch(n){throw t=[n],n}};var Mu=(i,e)=>()=>{try{return e||i((e={exports:{}}).exports,e),e.exports}catch(t){throw e=0,t}};var dn=Uint8Array.fromBase64||(()=>{for(var i=new Uint8Array(128),e=0;e<64;e++)i[e<26?e+65:e<52?e+71:e<62?e-4:e*4-205]=e;return t=>{for(var n=t.length,s=new Uint8Array((n-(t[n-1]=="=")-(t[n-2]=="="))*3/4|0),r=0,a=0;r<n;){var o=i[t.charCodeAt(r++)],l=i[t.charCodeAt(r++)],c=i[t.charCodeAt(r++)],h=i[t.charCodeAt(r++)];s[a++]=o<<2|l>>4,s[a++]=l<<4|c>>2,s[a++]=c<<6|h}return s}})();var Gl,Vl=Nt(()=>{Gl=`:host {
  --taupe: #CBA890; --taupe-deep: #B8937A; --cream: #F7E4D0; --paper: #FAF0E4;
  --maroon: #74110F; --maroon-deep: #5A0C0B; --ink: #2A1714; --ink-soft: #54382F; --line: #A5826A;
  --serif: 'Besley DTU', 'Rockwell', 'Georgia', serif; --sans: 'Hanken DTU', system-ui, -apple-system, 'Segoe UI', sans-serif;
  --r: 6px;
  display: block; color: var(--ink); background: var(--taupe);
  font: 400 1rem/1.5 var(--sans); -webkit-font-smoothing: antialiased; text-align: left;
}
*, *::before, *::after { box-sizing: border-box; }
button, input, select { font: inherit; color: inherit; }
button { cursor: pointer; }
:focus-visible { outline: 2px solid var(--maroon); outline-offset: 3px; }
h2, h3, p, ul, dl, dd, fieldset, legend, table { margin: 0; padding: 0; border: 0; }
.wrap { max-width: 1400px; margin: 0 auto; display: grid; grid-template-columns: minmax(0, 1.42fr) minmax(0, 1fr); column-gap: clamp(1.5rem, 4vw, 4.5rem); padding-inline: clamp(1.25rem, 4vw, 4rem); }

/* viewer */
.viewer { position: sticky; top: var(--dtu-top, 0px); height: calc(100vh - var(--dtu-top, 0px)); height: calc(100svh - var(--dtu-top, 0px)); min-height: 30rem; display: flex; flex-direction: column; padding-block: clamp(1rem, 3vh, 2rem); }
.stage { position: relative; flex: 1; min-height: 0; cursor: grab; touch-action: pan-y; user-select: none; -webkit-user-select: none; border-radius: var(--r); }
.stage.grabbing { cursor: grabbing; }
.stage canvas { position: absolute; inset: 0; width: 100%; height: 100%; display: block; }
.hint { position: absolute; left: 50%; bottom: .25rem; transform: translateX(-50%); display: flex; align-items: center; gap: .6rem; color: var(--ink-soft); font-size: .9375rem; pointer-events: none; white-space: nowrap; transition: opacity .6s ease; }
.hint svg { width: 26px; height: 14px; }
.touched .hint { opacity: 0; }
.msg { position: absolute; inset: 0; display: grid; place-items: center; text-align: center; color: var(--ink-soft); }
.views { align-self: center; display: flex; gap: .25rem; margin-top: 1rem; padding: .25rem; border: 1px solid var(--line); border-radius: 999px; }
.views button { border: 0; background: none; border-radius: 999px; min-width: 5.25rem; min-height: 2.5rem; padding: 0 1.1rem; font-weight: 550; font-size: .9375rem; }
.views button:hover { background: color-mix(in srgb, var(--cream) 45%, transparent); }
.views button[aria-pressed=true] { background: var(--maroon); color: var(--cream); }

/* panel */
.panel { min-width: 0; display: flex; flex-direction: column; }
.chapter { scroll-margin-top: var(--dtu-top, 0px); min-height: 0; display: flex; flex-direction: column; justify-content: flex-start; gap: 1.25rem; padding-block: 1.5rem 1.75rem; }
.chapter + .chapter { border-top: 1px solid var(--line); padding-top: 1.75rem; }
h2, h3 { font-family: var(--serif); font-weight: 600; letter-spacing: -.012em; text-wrap: balance; overflow-wrap: break-word; min-width: 0; }
h2 { font-size: clamp(2.4rem, 4.1vw, 3.75rem); line-height: 1.04; }
h3 { font-size: clamp(1.8rem, 2.7vw, 2.5rem); line-height: 1.12; }
.lede { font-size: 1.125rem; color: var(--ink-soft); max-width: 34ch; margin-top: 1rem; text-wrap: pretty; }
.row { display: flex; align-items: baseline; justify-content: space-between; gap: 1rem; margin-bottom: .7rem; }
legend, .lab { font-weight: 600; font-size: .9375rem; }
.val { color: var(--ink-soft); font-size: .9375rem; }
.link { border: 0; background: none; padding: .25rem 0; font-size: .9375rem; text-decoration: underline; text-underline-offset: 3px; text-decoration-thickness: 1px; }
.link:hover { color: var(--maroon); }
.sr { position: absolute; width: 1px; height: 1px; overflow: hidden; clip-path: inset(50%); white-space: nowrap; }

.sizes { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: .5rem; }
.sizes label { position: relative; display: grid; place-items: center; min-height: 3rem; border: 1px solid var(--line); border-radius: var(--r); font-weight: 550; cursor: pointer; }
.sizes label:hover { border-color: var(--ink-soft); }
.sizes label:has(:checked) { background: var(--maroon); border-color: var(--maroon); color: var(--cream); }
input[type=radio] { position: absolute; inset: 0; opacity: 0; width: 100%; height: 100%; margin: 0; cursor: pointer; }
label:has(input[type=radio]:focus-visible) { outline: 2px solid var(--maroon); outline-offset: 3px; }
.need .sizes label { border-color: var(--maroon); }

.name-trigger-wrap { margin-top: -0.85rem; }
.btn-name-box { display: inline-flex; align-items: center; gap: .75rem; padding: .65rem .95rem; background: var(--paper); border: 1.5px solid var(--line); border-radius: var(--r); color: var(--ink); font-size: .9375rem; font-weight: 550; cursor: pointer; transition: all .15s ease; box-shadow: 0 1px 3px rgba(42,23,20,.04); }
.btn-name-box:hover { border-color: var(--maroon); background: var(--cream); color: var(--maroon); }
.btn-name-box .sq-box { display: inline-grid; place-items: center; width: 1.5rem; height: 1.5rem; border: 1.5px solid var(--line); border-radius: 4px; background: var(--taupe); color: var(--ink); flex-shrink: 0; }
.btn-name-box:hover .sq-box { border-color: var(--maroon); background: var(--maroon); color: var(--cream); }
.put-name-card { display: grid; gap: 1.25rem; padding: 1.5rem; background: var(--paper); border: 1.5px solid var(--line); border-radius: var(--r); box-shadow: 0 4px 16px rgba(42,23,20,.05); max-width: 30rem; }

.field { display: grid; gap: .5rem; }
.field input, .field select { width: 100%; min-height: 3.25rem; padding: 0 1rem; border: 1px solid var(--line); border-radius: var(--r); background: var(--paper); font-size: 1.0625rem; }
.field input::placeholder { color: #7d675a; }
.field input:hover, .field select:hover { border-color: var(--ink-soft); }
.field input:focus-visible, .field select:focus-visible { outline-offset: 0; border-color: var(--maroon); }
.field select { appearance: none; -webkit-appearance: none; padding-right: 2.75rem; background: var(--paper) url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='9' fill='none' stroke='%232A1714' stroke-width='1.6'%3E%3Cpath d='M1 1.2l6 6 6-6'/%3E%3C/svg%3E") no-repeat right 1rem center; }
.fields { display: grid; gap: 1.25rem; max-width: 27rem; }

.spec { list-style: none; display: grid; border-top: 1px solid var(--line); }
.spec li { display: grid; grid-template-columns: 7.5rem minmax(0, 1fr); gap: 1rem; padding: .8rem 0; border-bottom: 1px solid var(--line); }
.spec b { font-weight: 600; }
.spec span { color: var(--ink-soft); }

/* buy bar: the only primary button, always in reach */
.buy { position: sticky; bottom: 0; z-index: 2; margin-top: 1rem; display: grid; grid-template-columns: auto minmax(0, 1fr); align-items: center; gap: 1rem 1.5rem; padding: 1rem 0 1.25rem; background: var(--taupe); border-top: 1px solid var(--line); }
.price { font-family: var(--serif); font-weight: 600; font-size: 1.625rem; line-height: 1.1; font-variant-numeric: lining-nums tabular-nums; }
.sum { font-size: .9375rem; color: var(--ink-soft); margin-top: .15rem; }
.add { justify-self: end; width: 100%; max-width: 17rem; min-height: 3.5rem; border: 0; border-radius: var(--r); background: var(--maroon); color: var(--cream); font-weight: 600; font-size: 1.0625rem; transition: background-color .15s ease, transform .1s ease; }
.add:hover { background: var(--maroon-deep); } .add:active { transform: translateY(1px); }
.add[aria-disabled=true] { opacity: .75; }
.note { grid-column: 1 / -1; font-size: .9375rem; font-weight: 550; color: var(--maroon-deep); } .note:empty { display: none; }

dialog { border: 0; border-radius: 10px; padding: 0; width: min(34rem, calc(100vw - 2rem)); background: var(--paper); color: var(--ink); box-shadow: 0 24px 60px rgb(42 23 20 / .28); }
dialog::backdrop { background: rgb(42 23 20 / .45); }
.dlg { padding: clamp(1.25rem, 4vw, 2rem); display: grid; gap: 1.1rem; }
.dlg .row { margin: 0; align-items: center; }
.dlg h3 { font-size: 1.625rem; }
.x { width: 2.75rem; height: 2.75rem; border: 1px solid var(--line); background: none; border-radius: 50%; display: grid; place-items: center; }
.x:hover { background: var(--cream); }
table { width: 100%; border-collapse: collapse; font-variant-numeric: tabular-nums; }
th, td { text-align: left; padding: .6rem .5rem .6rem 0; border-bottom: 1px solid #ddcdb9; font-weight: 400; }
thead th { font-weight: 600; font-size: .9375rem; } tbody th { font-weight: 600; } tr.on > * { color: var(--maroon); font-weight: 600; }

@media (max-width: 1080px) { .sizes { grid-template-columns: repeat(3, minmax(0, 1fr)); } }
@media (max-height: 800px) and (min-width: 821px) { .chapter { gap: 1.35rem; padding-block: 2rem 6.75rem; } .lede { font-size: 1.0625rem; margin-top: .7rem; } h2 { font-size: clamp(2.2rem, 3.6vw, 3.1rem); } }
@media (max-width: 820px) {
  .wrap { display: block; padding-inline: 0; }
  .viewer { height: 54vh; height: 54svh; min-height: 21rem; z-index: 1; background: var(--taupe); padding: .5rem 1rem .75rem; }
  .views { margin-top: .4rem; } .views button { min-height: 2.75rem; }
  .panel { padding-inline: 1.25rem; }
  .chapter, .chapter.last { min-height: 0; justify-content: flex-start; padding-block: 1.75rem 2.25rem; }
  .chapter { scroll-margin-top: calc(54svh + var(--dtu-top, 0px)); }
  .chapter + .chapter { border-top: 1px solid var(--line); padding-top: 2.25rem; }
  .sizes { grid-template-columns: repeat(6, minmax(0, 1fr)); gap: .4rem; }
  .buy { margin: 0 -1.25rem; padding: .75rem 1.25rem calc(.75rem + env(safe-area-inset-bottom)); gap: .5rem 1rem; }
  .price { font-size: 1.375rem; } .add { min-height: 3.25rem; }
  .sum { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 9.5rem; }
}
@media (max-width: 400px) { .spec li { grid-template-columns: 6rem minmax(0, 1fr); } }
@media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
`});var Xl,Wl=Nt(()=>{Xl=dn("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")});var Jl,Yl=Nt(()=>{Jl=dn("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")});var Zl,ql=Nt(()=>{Zl=dn("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")});var jl,Kl=Nt(()=>{jl=dn("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")});var $l,Ql=Nt(()=>{$l=dn("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")});var ec,tc=Nt(()=>{ec="data:image/png;base64,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"});function Tu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Cu(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lh(){let i=os("canvas");return i.style.display="block",i}function $o(...i){let e="THREE."+i.shift();Li?Li("log",e,...i):console.log(e,...i)}function ch(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ce(...i){i=ch(i);let e="THREE."+i.shift();if(Li)Li("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ie(...i){i=ch(i);let e="THREE."+i.shift();if(Li)Li("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function $i(...i){let e=i.join(" ");e in nc||(nc[e]=!0,Ce(...i))}function hh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function Wi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bt[i&255]+bt[i>>8&255]+bt[i>>16&255]+bt[i>>24&255]+"-"+bt[e&255]+bt[e>>8&255]+"-"+bt[e>>16&15|64]+bt[e>>24&255]+"-"+bt[t&63|128]+bt[t>>8&255]+"-"+bt[t>>16&255]+bt[t>>24&255]+bt[n&255]+bt[n>>8&255]+bt[n>>16&255]+bt[n>>24&255]).toLowerCase()}function ke(i,e,t){return Math.max(e,Math.min(t,i))}function el(i,e){return(i%e+e)%e}function Ru(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Iu(i,e,t){return i!==e?(t-i)/(e-i):0}function ts(i,e,t){return(1-t)*i+t*e}function Pu(i,e,t,n){return ts(i,e,1-Math.exp(-t*n))}function Lu(i,e=1){return e-Math.abs(el(i,e*2)-e)}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Fu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Nu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Uu(i,e){return i+Math.random()*(e-i)}function Bu(i){return i*(.5-Math.random())}function Ou(i){i!==void 0&&(ic=i);let e=ic+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zu(i){return i*es}function ku(i){return i*Di}function Hu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Vu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function tl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Gu(i,e,t,n,s){let r=Math.cos,a=Math.sin,o=r(t/2),l=a(t/2),c=r((e+n)/2),h=a((e+n)/2),f=r((e-n)/2),u=a((e-n)/2),d=r((n-e)/2),x=a((n-e)/2);switch(s){case"XYX":i.set(o*h,l*f,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*f,o*c);break;case"ZXZ":i.set(l*f,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*x,l*d,o*c);break;case"YXY":i.set(l*d,o*h,l*x,o*c);break;case"ZYZ":i.set(l*x,l*d,o*h,o*c);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function dh(i,e){if(e.constructor===Float32Array)return i;let t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function fh(i,e){if(e.constructor===Float32Array)return i;let t=nl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}function Wu(){let i={enabled:!0,workingColorSpace:rs,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Je&&(s.r=Tn(s.r),s.g=Tn(s.g),s.b=Tn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(s.r=Ri(s.r),s.g=Ri(s.g),s.b=Ri(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hn?as:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[rs]:{primaries:e,whitePoint:n,transfer:as,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Ot},outputColorSpaceConfig:{drawingBufferColorSpace:Ot}},[Ot]:{primaries:e,whitePoint:n,transfer:Je,toXYZ:rc,fromXYZ:ac,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Ot}}}),i}function Tn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ri(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}function Qa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?_r.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}function to(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function co(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ti.fromArray(i,r);let o=s.x*Math.abs(ti.x)+s.y*Math.abs(ti.y)+s.z*Math.abs(ti.z),l=e.dot(ti),c=t.dot(ti),h=n.dot(ti);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function ad(i,e,t,n,s,r,a,o){let l;if(e.side===Lt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===qn,o),l===null)return null;sr.copy(o),sr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(sr);return c<t.near||c>t.far?null:{distance:c,point:sr.clone(),object:i}}function rr(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,er),i.getVertexPosition(l,tr),i.getVertexPosition(c,nr);let h=ad(i,e,t,n,er,tr,nr,xc);if(h){let f=new D;kn.getBarycoord(xc,er,tr,nr,f),s&&(h.uv=kn.getInterpolatedAttribute(s,o,l,c,f,new we)),r&&(h.uv1=kn.getInterpolatedAttribute(r,o,l,c,f,new we)),a&&(h.normal=kn.getInterpolatedAttribute(a,o,l,c,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new D,materialIndex:0};kn.getNormal(er,tr,nr,u.normal),h.face=u,h.barycoord=f}return h}function il(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,f){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,d=(o-a)/h-(l-a)/(h+f)+(l-o)/f;u*=h,d*=h,s(a,o,u,d)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}function Sc(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function ld(i,e){let t=1-i;return t*t*e}function cd(i,e){return 2*(1-i)*i*e}function hd(i,e){return i*i*e}function ns(i,e,t,n){return ld(i,e)+cd(i,t)+hd(i,n)}function ud(i,e){let t=1-i;return t*t*t*e}function dd(i,e){let t=1-i;return 3*t*t*i*e}function fd(i,e){return 3*(1-i)*i*i*e}function pd(i,e){return i*i*i*e}function is(i,e,t,n,s){return ud(i,e)+dd(i,t)+fd(i,n)+pd(i,s)}function ui(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(_c(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(_c(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Tt(i){let e={};for(let t=0;t<i.length;t++){let n=ui(i[t]);for(let s in n)e[s]=n[s]}return e}function _c(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function gd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function sl(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:We.workingColorSpace}function Ai(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function or(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function gh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function yd(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Md(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=gh(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=yd(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function bc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function wc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}function ol(i,e,t,n){let s=Rd(n);switch(t){case Yo:return i*e;case qo:return i*e/s.components*s.byteLength;case sa:return i*e/s.components*s.byteLength;case Zn:return i*e*2/s.components*s.byteLength;case ra:return i*e*2/s.components*s.byteLength;case Jo:return i*e*3/s.components*s.byteLength;case cn:return i*e*4/s.components*s.byteLength;case aa:return i*e*4/s.components*s.byteLength;case Cs:case Rs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Is:case Ps:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case la:case ha:return Math.max(i,16)*Math.max(e,8)/4;case oa:case ca:return Math.max(i,8)*Math.max(e,8)/2;case ua:case da:case pa:case ma:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case fa:case Ls:case ga:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case va:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ya:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Ma:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Sa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _a:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ba:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wa:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Ea:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ta:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Ra:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Ia:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case La:case Da:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Fa:case Na:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ds:case Ua:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Rd(i){switch(i){case Ft:case Vo:return{byteLength:1,components:1};case Gi:case Go:case ln:return{byteLength:2,components:1};case na:case ia:return{byteLength:2,components:4};case an:case ta:case on:return{byteLength:4,components:1};case Wo:case Xo:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}var Rc,To,Ic,ai,Pc,ki,qn,Lt,jt,oi,Hi,Co,Ro,Io,Lc,li,Dc,Fc,Nc,Uc,Bc,Oc,zc,kc,Po,Lo,Hc,Vc,Gc,Wc,Xc,Yc,Jc,qc,Zc,dr,fr,pr,Ii,mr,gr,xr,vr,Do,Kc,jc,Qt,Fo,No,Uo,Bo,Oo,zo,ko,Ho,ci,Vi,Qr,$r,yr,pn,Mr,vt,Qc,Ts,It,ea,Pn,Ft,Vo,Go,Gi,ta,an,on,ln,na,ia,hi,Wo,Xo,Yo,Jo,cn,Cn,Ln,qo,sa,Zn,ra,aa,Cs,Rs,Is,Ps,oa,la,ca,ha,ua,da,fa,pa,ma,Ls,ga,xa,va,ya,Ma,Sa,_a,ba,wa,Ea,Aa,Ta,Ca,Ra,Ia,Pa,La,Da,Fa,Na,Ds,Ua,ss,Sr,hr,Mo,So,_o,bo,$c,Ba,eh,hn,Ot,rs,as,Je,ur,th,nh,ih,sh,Zo,rh,ah,Ko,jo,oh,Qo,qt,Pi,nc,Li,uh,mn,bt,ic,es,Di,Oa,ll,we,gn,cl,D,Ka,sc,hl,Pe,ja,rc,ac,We,gi,_r,Xu,Fi,Yu,$a,Pt,ul,Qe,br,kt,ls,wr,jr,tt,xi,tn,Ju,qu,Nn,Ws,Ut,oc,lc,Rn,cs,Zu,cc,vi,Sn,Xs,Zi,Ku,ju,hc,uc,dc,fc,Qu,yi,eo,Et,An,$u,Ni,ph,Un,Ys,De,wt,hs,nn,_n,no,bn,Mi,Si,pc,io,so,ro,ao,oo,lo,kn,Hn,wn,sn,Js,_i,bi,wi,Bn,On,ei,Ki,qs,Zs,ti,ct,Ks,ed,zt,us,ds,at,td,ji,ho,Ui,nd,Jt,uo,Ei,Bt,Qi,xt,Ht,fo,id,sd,rn,rd,Vn,En,po,js,Qs,Er,Ar,mc,ni,$s,gc,er,tr,nr,mo,ir,xc,sr,At,Tr,ii,od,ar,Gn,vc,Cr,fs,ps,In,ms,gs,Bi,xs,Zt,vs,Rr,yc,Mc,go,xo,vo,Oi,Ir,Pr,Lr,Dr,Fr,ys,Nr,md,si,Ms,Ss,mh,xd,vd,Kt,Ur,Wn,Br,Or,Xn,zr,kr,Hr,Vr,Vt,Yn,Gr,Wr,Xr,_s,Jn,Yr,Jr,xh,qr,bs,ws,yo,Ec,Ac,Zr,lr,cr,fn,Es,zn,Tc,Cc,Rt,As,wo,ri,Ti,Ci,zi,Kr,rl,Sd,al,_d,bd,wd,Ed,Ad,Td,Cd,Eo,et,G0,dl,Ao,fl=Nt(()=>{Rc=0,To=1,Ic=2,ai=1,Pc=2,ki=3,qn=0,Lt=1,jt=2,oi=0,Hi=1,Co=2,Ro=3,Io=4,Lc=5,li=100,Dc=101,Fc=102,Nc=103,Uc=104,Bc=200,Oc=201,zc=202,kc=203,Po=204,Lo=205,Hc=206,Vc=207,Gc=208,Wc=209,Xc=210,Yc=211,Jc=212,qc=213,Zc=214,dr=0,fr=1,pr=2,Ii=3,mr=4,gr=5,xr=6,vr=7,Do=0,Kc=1,jc=2,Qt=0,Fo=1,No=2,Uo=3,Bo=4,Oo=5,zo=6,ko=7,Ho=300,ci=301,Vi=302,Qr=303,$r=304,yr=1e3,pn=1001,Mr=1002,vt=1003,Qc=1004,Ts=1005,It=1006,ea=1007,Pn=1008,Ft=1009,Vo=1010,Go=1011,Gi=1012,ta=1013,an=1014,on=1015,ln=1016,na=1017,ia=1018,hi=1020,Wo=35902,Xo=35899,Yo=1021,Jo=1022,cn=1023,Cn=1026,Ln=1027,qo=1028,sa=1029,Zn=1030,ra=1031,aa=1033,Cs=33776,Rs=33777,Is=33778,Ps=33779,oa=35840,la=35841,ca=35842,ha=35843,ua=36196,da=37492,fa=37496,pa=37488,ma=37489,Ls=37490,ga=37491,xa=37808,va=37809,ya=37810,Ma=37811,Sa=37812,_a=37813,ba=37814,wa=37815,Ea=37816,Aa=37817,Ta=37818,Ca=37819,Ra=37820,Ia=37821,Pa=36492,La=36494,Da=36495,Fa=36283,Na=36284,Ds=36285,Ua=36286,ss=2300,Sr=2301,hr=2302,Mo=2303,So=2400,_o=2401,bo=2402,$c=3200,Ba=0,eh=1,hn="",Ot="srgb",rs="srgb-linear",as="linear",Je="srgb",ur=7680,th=519,nh=512,ih=513,sh=514,Zo=515,rh=516,ah=517,Ko=518,jo=519,oh=35044,Qo="300 es",qt=2e3,Pi=2001;nc={},Li=null;uh={[dr]:dr,[pr]:xr,[mr]:mr,[Ii]:gr,[fr]:fr,[xr]:pr,[vr]:vr,[gr]:Ii},mn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ic=1234567,es=Math.PI/180,Di=180/Math.PI;Oa={DEG2RAD:es,RAD2DEG:Di,generateUUID:Wi,clamp:ke,euclideanModulo:el,mapLinear:Ru,inverseLerp:Iu,lerp:ts,damp:Pu,pingpong:Lu,smoothstep:Du,smootherstep:Fu,randInt:Nu,randFloat:Uu,randFloatSpread:Bu,seededRandom:Ou,degToRad:zu,radToDeg:ku,isPowerOfTwo:Hu,ceilPowerOfTwo:Vu,floorPowerOfTwo:tl,setQuaternionFromProperEuler:Gu,normalize:fh,denormalize:dh},ll=class ll{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ll.prototype.isVector2=!0;we=ll,gn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],f=n[s+3],u=r[a+0],d=r[a+1],x=r[a+2],M=r[a+3];if(f!==M||l!==u||c!==d||h!==x){let p=l*u+c*d+h*x+f*M;p<0&&(u=-u,d=-d,x=-x,M=-M,p=-p);let m=1-o;if(p<.9995){let b=Math.acos(p),A=Math.sin(b);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A,l=l*m+u*o,c=c*m+d*o,h=h*m+x*o,f=f*m+M*o}else{l=l*m+u*o,c=c*m+d*o,h=h*m+x*o,f=f*m+M*o;let b=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=b,c*=b,h*=b,f*=b}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],f=r[a],u=r[a+1],d=r[a+2],x=r[a+3];return e[t]=o*x+h*f+l*d-c*u,e[t+1]=l*x+h*u+c*f-o*d,e[t+2]=c*x+h*d+o*u-l*f,e[t+3]=h*x-o*f-l*u-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),f=o(r/2),u=l(n/2),d=l(s/2),x=l(r/2);switch(a){case"XYZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"YXZ":this._x=u*h*f+c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"ZXY":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f-u*d*x;break;case"ZYX":this._x=u*h*f-c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f+u*d*x;break;case"YZX":this._x=u*h*f+c*d*x,this._y=c*d*f+u*h*x,this._z=c*h*x-u*d*f,this._w=c*h*f-u*d*x;break;case"XZY":this._x=u*h*f-c*d*x,this._y=c*d*f-u*h*x,this._z=c*h*x+u*d*f,this._w=c*h*f+u*d*x;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],f=t[10],u=n+o+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-l)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>o&&n>f){let d=2*Math.sqrt(1+n-o-f);this._w=(h-l)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(o>f){let d=2*Math.sqrt(1+o-n-f);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+f-n-o);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ke(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},cl=class cl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),f=2*(r*n-a*t);return this.x=t+l*c+a*f-o*h,this.y=n+l*h+o*c-r*f,this.z=s+l*f+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ke(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cl.prototype.isVector3=!0;D=cl,Ka=new D,sc=new gn,hl=class hl{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],f=n[7],u=n[2],d=n[5],x=n[8],M=s[0],p=s[3],m=s[6],b=s[1],A=s[4],S=s[7],T=s[2],E=s[5],g=s[8];return r[0]=a*M+o*b+l*T,r[3]=a*p+o*A+l*E,r[6]=a*m+o*S+l*g,r[1]=c*M+h*b+f*T,r[4]=c*p+h*A+f*E,r[7]=c*m+h*S+f*g,r[2]=u*M+d*b+x*T,r[5]=u*p+d*A+x*E,r[8]=u*m+d*S+x*g,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=h*a-o*c,u=o*l-h*r,d=c*r-a*l,x=t*f+n*u+s*d;if(x===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/x;return e[0]=f*M,e[1]=(s*c-h*n)*M,e[2]=(o*n-s*a)*M,e[3]=u*M,e[4]=(h*t-s*l)*M,e[5]=(s*r-o*t)*M,e[6]=d*M,e[7]=(n*l-c*t)*M,e[8]=(a*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return $i("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ja.makeScale(e,t)),this}rotate(e){return $i("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return $i("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hl.prototype.isMatrix3=!0;Pe=hl,ja=new Pe,rc=new Pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ac=new Pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);We=Wu();_r=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{gi===void 0&&(gi=os("canvas")),gi.width=e.width,gi.height=e.height;let s=gi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=gi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=os("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Tn(t[n]/255)*255):t[n]=Tn(t[n]);return{data:t,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xu=0,Fi=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=Wi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Qa(s[a].image)):r.push(Qa(s[a]))}else r=Qa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};Yu=0,$a=new D,Pt=class i extends mn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pn,s=pn,r=It,a=Pn,o=cn,l=Ft,c=i.DEFAULT_ANISOTROPY,h=hn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Yu++}),this.uuid=Wi(),this.name="",this.source=new Fi(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new we(0,0),this.repeat=new we(1,1),this.center=new we(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize($a).x}get height(){return this.source.getSize($a).y}get depth(){return this.source.getSize($a).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Ce(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ho)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yr:e.x=e.x-Math.floor(e.x);break;case pn:e.x=e.x<0?0:1;break;case Mr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yr:e.y=e.y-Math.floor(e.y);break;case pn:e.y=e.y<0?0:1;break;case Mr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ho;Pt.DEFAULT_ANISOTROPY=1;ul=class ul{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],f=l[8],u=l[1],d=l[5],x=l[9],M=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(x-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(x+p)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let A=(c+1)/2,S=(d+1)/2,T=(m+1)/2,E=(h+u)/4,g=(f+M)/4,_=(x+p)/4;return A>S&&A>T?A<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(A),s=E/n,r=g/n):S>T?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=E/s,r=_/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=g/r,s=_/r),this.set(n,s,r,t),this}let b=Math.sqrt((p-x)*(p-x)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(p-x)/b,this.y=(f-M)/b,this.z=(u-h)/b,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ke(this.x,e.x,t.x),this.y=ke(this.y,e.y,t.y),this.z=ke(this.z,e.z,t.z),this.w=ke(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ke(this.x,e,t),this.y=ke(this.y,e,t),this.z=ke(this.z,e,t),this.w=ke(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ke(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ul.prototype.isVector4=!0;Qe=ul,br=class extends mn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Qe(0,0,e,t),this.scissorTest=!1,this.viewport=new Qe(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Pt({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new Fi(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},kt=class extends br{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},ls=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},wr=class extends Pt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=vt,this.minFilter=vt,this.wrapR=pn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},jr=class jr{constructor(e,t,n,s,r,a,o,l,c,h,f,u,d,x,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,M,p)}set(e,t,n,s,r,a,o,l,c,h,f,u,d,x,M,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=f,m[14]=u,m[3]=d,m[7]=x,m[11]=M,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new jr().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/xi.setFromMatrixColumn(e,0).length(),r=1/xi.setFromMatrixColumn(e,1).length(),a=1/xi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=a*h,d=a*f,x=o*h,M=o*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=d+x*c,t[5]=u-M*c,t[9]=-o*l,t[2]=M-u*c,t[6]=x+d*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,d=l*f,x=c*h,M=c*f;t[0]=u+M*o,t[4]=x*o-d,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-o,t[2]=d*o-x,t[6]=M+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,d=l*f,x=c*h,M=c*f;t[0]=u-M*o,t[4]=-a*f,t[8]=x+d*o,t[1]=d+x*o,t[5]=a*h,t[9]=M-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,d=a*f,x=o*h,M=o*f;t[0]=l*h,t[4]=x*c-d,t[8]=u*c+M,t[1]=l*f,t[5]=M*c+u,t[9]=d*c-x,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,d=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=M-u*f,t[8]=x*f+d,t[1]=f,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=d*f+x,t[10]=u-M*f}else if(e.order==="XZY"){let u=a*l,d=a*c,x=o*l,M=o*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=u*f+M,t[5]=a*h,t[9]=d*f-x,t[2]=x*f-d,t[6]=o*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ju,e,qu)}lookAt(e,t,n){let s=this.elements;return Ut.subVectors(e,t),Ut.lengthSq()===0&&(Ut.z=1),Ut.normalize(),Nn.crossVectors(n,Ut),Nn.lengthSq()===0&&(Math.abs(n.z)===1?Ut.x+=1e-4:Ut.z+=1e-4,Ut.normalize(),Nn.crossVectors(n,Ut)),Nn.normalize(),Ws.crossVectors(Ut,Nn),s[0]=Nn.x,s[4]=Ws.x,s[8]=Ut.x,s[1]=Nn.y,s[5]=Ws.y,s[9]=Ut.y,s[2]=Nn.z,s[6]=Ws.z,s[10]=Ut.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],f=n[5],u=n[9],d=n[13],x=n[2],M=n[6],p=n[10],m=n[14],b=n[3],A=n[7],S=n[11],T=n[15],E=s[0],g=s[4],_=s[8],N=s[12],P=s[1],F=s[5],O=s[9],G=s[13],R=s[2],V=s[6],Y=s[10],H=s[14],te=s[3],X=s[7],Q=s[11],$=s[15];return r[0]=a*E+o*P+l*R+c*te,r[4]=a*g+o*F+l*V+c*X,r[8]=a*_+o*O+l*Y+c*Q,r[12]=a*N+o*G+l*H+c*$,r[1]=h*E+f*P+u*R+d*te,r[5]=h*g+f*F+u*V+d*X,r[9]=h*_+f*O+u*Y+d*Q,r[13]=h*N+f*G+u*H+d*$,r[2]=x*E+M*P+p*R+m*te,r[6]=x*g+M*F+p*V+m*X,r[10]=x*_+M*O+p*Y+m*Q,r[14]=x*N+M*G+p*H+m*$,r[3]=b*E+A*P+S*R+T*te,r[7]=b*g+A*F+S*V+T*X,r[11]=b*_+A*O+S*Y+T*Q,r[15]=b*N+A*G+S*H+T*$,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],f=e[6],u=e[10],d=e[14],x=e[3],M=e[7],p=e[11],m=e[15],b=l*d-c*u,A=o*d-c*f,S=o*u-l*f,T=a*d-c*h,E=a*u-l*h,g=a*f-o*h;return t*(M*b-p*A+m*S)-n*(x*b-p*T+m*E)+s*(x*A-M*T+m*g)-r*(x*S-M*E+p*g)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],f=e[9],u=e[10],d=e[11],x=e[12],M=e[13],p=e[14],m=e[15],b=t*o-n*a,A=t*l-s*a,S=t*c-r*a,T=n*l-s*o,E=n*c-r*o,g=s*c-r*l,_=h*M-f*x,N=h*p-u*x,P=h*m-d*x,F=f*p-u*M,O=f*m-d*M,G=u*m-d*p,R=b*G-A*O+S*F+T*P-E*N+g*_;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let V=1/R;return e[0]=(o*G-l*O+c*F)*V,e[1]=(s*O-n*G-r*F)*V,e[2]=(M*g-p*E+m*T)*V,e[3]=(u*E-f*g-d*T)*V,e[4]=(l*P-a*G-c*N)*V,e[5]=(t*G-s*P+r*N)*V,e[6]=(p*S-x*g-m*A)*V,e[7]=(h*g-u*S+d*A)*V,e[8]=(a*O-o*P+c*_)*V,e[9]=(n*P-t*O-r*_)*V,e[10]=(x*E-M*S+m*b)*V,e[11]=(f*S-h*E-d*b)*V,e[12]=(o*N-a*F-l*_)*V,e[13]=(t*F-n*N+s*_)*V,e[14]=(M*A-x*T-p*b)*V,e[15]=(h*T-f*A+u*b)*V,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,f=o+o,u=r*c,d=r*h,x=r*f,M=a*h,p=a*f,m=o*f,b=l*c,A=l*h,S=l*f,T=n.x,E=n.y,g=n.z;return s[0]=(1-(M+m))*T,s[1]=(d+S)*T,s[2]=(x-A)*T,s[3]=0,s[4]=(d-S)*E,s[5]=(1-(u+m))*E,s[6]=(p+b)*E,s[7]=0,s[8]=(x+A)*g,s[9]=(p-b)*g,s[10]=(1-(u+M))*g,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=xi.set(s[0],s[1],s[2]).length(),o=xi.set(s[4],s[5],s[6]).length(),l=xi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),tn.copy(this);let c=1/a,h=1/o,f=1/l;return tn.elements[0]*=c,tn.elements[1]*=c,tn.elements[2]*=c,tn.elements[4]*=h,tn.elements[5]*=h,tn.elements[6]*=h,tn.elements[8]*=f,tn.elements[9]*=f,tn.elements[10]*=f,t.setFromRotationMatrix(tn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=qt,l=!1){let c=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),x,M;if(l)x=r/(a-r),M=a*r/(a-r);else if(o===qt)x=-(a+r)/(a-r),M=-2*a*r/(a-r);else if(o===Pi)x=-a/(a-r),M=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=f,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=qt,l=!1){let c=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),x,M;if(l)x=1/(a-r),M=a/(a-r);else if(o===qt)x=-2/(a-r),M=-(a+r)/(a-r);else if(o===Pi)x=-1/(a-r),M=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=f,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=x,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};jr.prototype.isMatrix4=!0;tt=jr,xi=new D,tn=new tt,Ju=new D(0,0,0),qu=new D(1,1,1),Nn=new D,Ws=new D,Ut=new D,oc=new tt,lc=new gn,Rn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ke(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ke(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ke(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ke(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ke(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,d));break;case"XZY":this._z=Math.asin(-ke(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return oc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(oc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return lc.setFromEuler(this),this.setFromQuaternion(lc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Rn.DEFAULT_ORDER="XYZ";cs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Zu=0,cc=new D,vi=new gn,Sn=new tt,Xs=new D,Zi=new D,Ku=new D,ju=new gn,hc=new D(1,0,0),uc=new D(0,1,0),dc=new D(0,0,1),fc={type:"added"},Qu={type:"removed"},yi={type:"childadded",child:null},eo={type:"childremoved",child:null},Et=class i extends mn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zu++}),this.uuid=Wi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new D,t=new Rn,n=new gn,s=new D(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tt},normalMatrix:{value:new Pe}}),this.matrix=new tt,this.matrixWorld=new tt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new cs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(hc,e)}rotateY(e){return this.rotateOnAxis(uc,e)}rotateZ(e){return this.rotateOnAxis(dc,e)}translateOnAxis(e,t){return cc.copy(e).applyQuaternion(this.quaternion),this.position.add(cc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(hc,e)}translateY(e){return this.translateOnAxis(uc,e)}translateZ(e){return this.translateOnAxis(dc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Xs.copy(e):Xs.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Zi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(Zi,Xs,this.up):Sn.lookAt(Xs,Zi,this.up),this.quaternion.setFromRotationMatrix(Sn),s&&(Sn.extractRotation(s.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ie("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(fc),yi.child=e,this.dispatchEvent(yi),yi.child=null):Ie("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Qu),eo.child=e,this.dispatchEvent(eo),eo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(fc),yi.child=e,this.dispatchEvent(yi),yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,e,Ku),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Zi,ju,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let f=l[c];r(e.shapes,f)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),u=a(e.skeletons),d=a(e.animations),x=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),x.length>0&&(n.nodes=x)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Et.DEFAULT_UP=new D(0,1,0);Et.DEFAULT_MATRIX_AUTO_UPDATE=!0;Et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;An=class extends Et{constructor(){super(),this.isGroup=!0,this.type="Group"}},$u={type:"move"},Ni=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new An,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new An,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new An,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),m=this._getHandJoint(c,M);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,x=.005;c.inputState.pinching&&u>d+x?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=d-x&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent($u)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new An;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ph={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ys={h:0,s:0,l:0};De=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ot){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,We.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=We.workingColorSpace){return this.r=e,this.g=t,this.b=n,We.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=We.workingColorSpace){if(e=el(e,1),t=ke(t,0,1),n=ke(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=to(a,r,e+1/3),this.g=to(a,r,e),this.b=to(a,r,e-1/3)}return We.colorSpaceToWorking(this,s),this}setStyle(e,t=Ot){function n(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ot){let n=ph[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Tn(e.r),this.g=Tn(e.g),this.b=Tn(e.b),this}copyLinearToSRGB(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ot){return We.workingToColorSpace(wt.copy(this),e),Math.round(ke(wt.r*255,0,255))*65536+Math.round(ke(wt.g*255,0,255))*256+Math.round(ke(wt.b*255,0,255))}getHexString(e=Ot){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=We.workingColorSpace){We.workingToColorSpace(wt.copy(this),t);let n=wt.r,s=wt.g,r=wt.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let f=a-o;switch(c=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=We.workingColorSpace){return We.workingToColorSpace(wt.copy(this),t),e.r=wt.r,e.g=wt.g,e.b=wt.b,e}getStyle(e=Ot){We.workingToColorSpace(wt.copy(this),e);let t=wt.r,n=wt.g,s=wt.b;return e!==Ot?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Ys);let n=ts(Un.h,Ys.h,t),s=ts(Un.s,Ys.s,t),r=ts(Un.l,Ys.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},wt=new De;De.NAMES=ph;hs=class extends Et{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Rn,this.environmentIntensity=1,this.environmentRotation=new Rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},nn=new D,_n=new D,no=new D,bn=new D,Mi=new D,Si=new D,pc=new D,io=new D,so=new D,ro=new D,ao=new Qe,oo=new Qe,lo=new Qe,kn=class i{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),nn.subVectors(e,t),s.cross(nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){nn.subVectors(s,t),_n.subVectors(n,t),no.subVectors(e,t);let a=nn.dot(nn),o=nn.dot(_n),l=nn.dot(no),c=_n.dot(_n),h=_n.dot(no),f=a*c-o*o;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(c*l-o*h)*u,x=(a*h-o*l)*u;return r.set(1-d-x,x,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,bn)===null?!1:bn.x>=0&&bn.y>=0&&bn.x+bn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bn.x),l.addScaledVector(a,bn.y),l.addScaledVector(o,bn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return ao.setScalar(0),oo.setScalar(0),lo.setScalar(0),ao.fromBufferAttribute(e,t),oo.fromBufferAttribute(e,n),lo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(ao,r.x),a.addScaledVector(oo,r.y),a.addScaledVector(lo,r.z),a}static isFrontFacing(e,t,n,s){return nn.subVectors(n,t),_n.subVectors(e,t),nn.cross(_n).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return nn.subVectors(this.c,this.b),_n.subVectors(this.a,this.b),nn.cross(_n).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Mi.subVectors(s,n),Si.subVectors(r,n),io.subVectors(e,n);let l=Mi.dot(io),c=Si.dot(io);if(l<=0&&c<=0)return t.copy(n);so.subVectors(e,s);let h=Mi.dot(so),f=Si.dot(so);if(h>=0&&f<=h)return t.copy(s);let u=l*f-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Mi,a);ro.subVectors(e,r);let d=Mi.dot(ro),x=Si.dot(ro);if(x>=0&&d<=x)return t.copy(r);let M=d*c-l*x;if(M<=0&&c>=0&&x<=0)return o=c/(c-x),t.copy(n).addScaledVector(Si,o);let p=h*x-d*f;if(p<=0&&f-h>=0&&d-x>=0)return pc.subVectors(r,s),o=(f-h)/(f-h+(d-x)),t.copy(s).addScaledVector(pc,o);let m=1/(p+M+u);return a=M*m,o=u*m,t.copy(n).addScaledVector(Mi,a).addScaledVector(Si,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Hn=class{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(sn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(sn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=sn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,sn):sn.fromBufferAttribute(r,a),sn.applyMatrix4(e.matrixWorld),this.expandByPoint(sn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Js.copy(n.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,sn),sn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ki),qs.subVectors(this.max,Ki),_i.subVectors(e.a,Ki),bi.subVectors(e.b,Ki),wi.subVectors(e.c,Ki),Bn.subVectors(bi,_i),On.subVectors(wi,bi),ei.subVectors(_i,wi);let t=[0,-Bn.z,Bn.y,0,-On.z,On.y,0,-ei.z,ei.y,Bn.z,0,-Bn.x,On.z,0,-On.x,ei.z,0,-ei.x,-Bn.y,Bn.x,0,-On.y,On.x,0,-ei.y,ei.x,0];return!co(t,_i,bi,wi,qs)||(t=[1,0,0,0,1,0,0,0,1],!co(t,_i,bi,wi,qs))?!1:(Zs.crossVectors(Bn,On),t=[Zs.x,Zs.y,Zs.z],co(t,_i,bi,wi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,sn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(sn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},wn=[new D,new D,new D,new D,new D,new D,new D,new D],sn=new D,Js=new Hn,_i=new D,bi=new D,wi=new D,Bn=new D,On=new D,ei=new D,Ki=new D,qs=new D,Zs=new D,ti=new D;ct=new D,Ks=new we,ed=0,zt=class extends mn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=on,this.version=0,this._normalizationScale=e!==void 0?nl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ks.fromBufferAttribute(this,t),Ks.applyMatrix3(e),this.setXY(t,Ks.x,Ks.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):dh(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):fh(e,this.array)}},us=class extends zt{constructor(e,t,n){super(new Uint16Array(e),t,n)}},ds=class extends zt{constructor(e,t,n){super(new Uint32Array(e),t,n)}},at=class extends zt{constructor(e,t,n){super(new Float32Array(e),t,n)}},td=new Hn,ji=new D,ho=new D,Ui=class{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ji.subVectors(e,this.center);let t=ji.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ji,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ho.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ji.copy(e.center).add(ho)),this.expandByPoint(ji.copy(e.center).sub(ho))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nd=0,Jt=new tt,uo=new Et,Ei=new D,Bt=new Hn,Qi=new Hn,xt=new D,Ht=class i extends mn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Wi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Tu(e)?ds:us)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Pe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Jt.makeRotationFromQuaternion(e),this.applyMatrix4(Jt),this}rotateX(e){return Jt.makeRotationX(e),this.applyMatrix4(Jt),this}rotateY(e){return Jt.makeRotationY(e),this.applyMatrix4(Jt),this}rotateZ(e){return Jt.makeRotationZ(e),this.applyMatrix4(Jt),this}translate(e,t,n){return Jt.makeTranslation(e,t,n),this.applyMatrix4(Jt),this}scale(e,t,n){return Jt.makeScale(e,t,n),this.applyMatrix4(Jt),this}lookAt(e){return uo.lookAt(e),uo.updateMatrix(),this.applyMatrix4(uo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ei).negate(),this.translate(Ei.x,Ei.y,Ei.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new at(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Hn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Bt.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Bt.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Bt.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Bt.min),this.boundingBox.expandByPoint(Bt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ie('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ie("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){let n=this.boundingSphere.center;if(Bt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qi.setFromBufferAttribute(o),this.morphTargetsRelative?(xt.addVectors(Bt.min,Qi.min),Bt.expandByPoint(xt),xt.addVectors(Bt.max,Qi.max),Bt.expandByPoint(xt)):(Bt.expandByPoint(Qi.min),Bt.expandByPoint(Qi.max))}Bt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)xt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(xt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xt.fromBufferAttribute(o,c),l&&(Ei.fromBufferAttribute(e,c),xt.add(Ei)),s=Math.max(s,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ie('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ie("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new zt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let N=0;N<n.count;N++)o[N]=new D,l[N]=new D;let h=new D,f=new D,u=new D,d=new we,x=new we,M=new we,p=new D,m=new D;function b(N,P,F){c[N]=c[P]=c[F]=1,h.fromBufferAttribute(n,N),f.fromBufferAttribute(n,P),u.fromBufferAttribute(n,F),d.fromBufferAttribute(r,N),x.fromBufferAttribute(r,P),M.fromBufferAttribute(r,F),f.sub(h),u.sub(h),x.sub(d),M.sub(d);let O=1/(x.x*M.y-M.x*x.y);isFinite(O)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(u,-x.y).multiplyScalar(O),m.copy(u).multiplyScalar(x.x).addScaledVector(f,-M.x).multiplyScalar(O),o[N].add(p),o[P].add(p),o[F].add(p),l[N].add(m),l[P].add(m),l[F].add(m))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,P=A.length;N<P;++N){let F=A[N],O=F.start,G=F.count;for(let R=O,V=O+G;R<V;R+=3)b(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let S=new D,T=new D,E=new D,g=new D;function _(N){E.fromBufferAttribute(s,N),g.copy(E);let P=o[N];S.copy(P),S.sub(E.multiplyScalar(E.dot(P))).normalize(),T.crossVectors(g,P);let O=T.dot(l[N])<0?-1:1;a.setXYZW(N,S.x,S.y,S.z,O)}for(let N=0,P=n.count;N<P;++N)c[N]&&_(N);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new zt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new D,r=new D,a=new D,o=new D,l=new D,c=new D,h=new D,f=new D;if(e)for(let u=0,d=e.count;u<d;u+=3){let x=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,x),r.fromBufferAttribute(t,M),a.fromBufferAttribute(t,p),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,x),l.fromBufferAttribute(n,M),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(x,o.x,o.y,o.z),n.setXYZ(M,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,f=o.normalized,u=new c.constructor(l.length*h),d=0,x=0;for(let M=0,p=l.length;M<p;M++){o.isInterleavedBufferAttribute?d=l[M]*o.data.stride+o.offset:d=l[M]*h;for(let m=0;m<h;m++)u[x++]=c[d++]}return new zt(u,h,f)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,f=c.length;h<f;h++){let u=c[h],d=e(u,n);l.push(d)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let f=0,u=c.length;f<u;f++){let d=c[f];h.push(d.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],f=r[c];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},fo=new D,id=new D,sd=new Pe,rn=class{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=fo.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(fo),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sd.getNormalMatrix(e),s=this.coplanarPoint(fo).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rd=0,Vn=class extends mn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=Wi(),this.name="",this.type="Material",this.blending=Hi,this.side=qn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Po,this.blendDst=Lo,this.blendEquation=li,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new De(0,0,0),this.blendAlpha=0,this.depthFunc=Ii,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=th,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ur,this.stencilZFail=ur,this.stencilZPass=ur,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Ce(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Ce(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new De().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new we().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new we().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},En=new D,po=new D,js=new D,Qs=new D,Er=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,En)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=En.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(En.copy(this.origin).addScaledVector(this.direction,t),En.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){po.copy(e).add(t).multiplyScalar(.5),js.copy(t).sub(e).normalize(),Qs.copy(this.origin).sub(po);let r=e.distanceTo(t)*.5,a=-this.direction.dot(js),o=Qs.dot(this.direction),l=-Qs.dot(js),c=Qs.lengthSq(),h=Math.abs(1-a*a),f,u,d,x;if(h>0)if(f=a*l-o,u=a*o-l,x=r*h,f>=0)if(u>=-x)if(u<=x){let M=1/h;f*=M,u*=M,d=f*(f+a*u+2*o)+u*(a*f+u+2*l)+c}else u=r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u=-r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;else u<=-x?(f=Math.max(0,-(-a*r+o)),u=f>0?-r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c):u<=x?(f=0,u=Math.min(Math.max(-r,-l),r),d=u*(u+2*l)+c):(f=Math.max(0,-(a*r+o)),u=f>0?r:Math.min(Math.max(-r,-l),r),d=-f*f+u*(u+2*l)+c);else u=a>0?-r:r,f=Math.max(0,-(a*u+o)),d=-f*f+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(po).addScaledVector(js,u),d}intersectSphere(e,t){if(e.radius<0)return null;En.subVectors(e.center,this.origin);let n=En.dot(this.direction),s=En.dot(En)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(e.min.z-u.z)*f,l=(e.max.z-u.z)*f):(o=(e.max.z-u.z)*f,l=(e.min.z-u.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,En)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,f=e.x-a.x,u=e.y-a.y,d=e.z-a.z,x=t.x-a.x,M=t.y-a.y,p=t.z-a.z,m=n.x-a.x,b=n.y-a.y,A=n.z-a.z,S=Math.abs(l),T=Math.abs(c),E=Math.abs(h),g,_,N,P,F,O,G,R,V,Y,H,te;if(S>=T&&S>=E?(N=l,O=f,V=x,te=m,l>=0?(g=c,_=h,P=u,F=d,G=M,R=p,Y=b,H=A):(g=h,_=c,P=d,F=u,G=p,R=M,Y=A,H=b)):T>=E?(N=c,O=u,V=M,te=b,c>=0?(g=h,_=l,P=d,F=f,G=p,R=x,Y=A,H=m):(g=l,_=h,P=f,F=d,G=x,R=p,Y=m,H=A)):(N=h,O=d,V=p,te=A,h>=0?(g=l,_=c,P=f,F=u,G=x,R=M,Y=m,H=b):(g=c,_=l,P=u,F=f,G=M,R=x,Y=b,H=m)),N===0)return null;let X=g/N,Q=_/N,$=1/N,Se=P-X*O,Fe=F-Q*O,Z=G-X*V,pe=R-Q*V,ve=Y-X*te,Ae=H-Q*te,me=ve*pe-Ae*Z,Ue=Se*Ae-Fe*ve,ot=Z*Fe-pe*Se;if(s){if(me<0||Ue<0||ot<0)return null}else if((me<0||Ue<0||ot<0)&&(me>0||Ue>0||ot>0))return null;let Re=me+Ue+ot;if(Re===0)return null;let qe=$*(me*O+Ue*V+ot*te);return(Re>0?qe<0:qe>0)?null:this.at(qe/Re,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ar=class extends Vn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new De(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.combine=Do,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},mc=new tt,ni=new Er,$s=new Ui,gc=new D,er=new D,tr=new D,nr=new D,mo=new D,ir=new D,xc=new D,sr=new D,At=class extends Et{constructor(e=new Ht,t=new Ar){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){ir.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],f=r[l];h!==0&&(mo.fromBufferAttribute(f,e),a?ir.addScaledVector(mo,h):ir.addScaledVector(mo.sub(t),h))}t.add(ir)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),$s.copy(n.boundingSphere),$s.applyMatrix4(r),ni.copy(e.ray).recast(e.near),!($s.containsPoint(ni.origin)===!1&&(ni.intersectSphere($s,gc)===null||ni.origin.distanceToSquared(gc)>(e.far-e.near)**2))&&(mc.copy(r).invert(),ni.copy(e.ray).applyMatrix4(mc),!(n.boundingBox!==null&&ni.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ni)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(o!==null)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let p=u[x],m=a[p.materialIndex],b=Math.max(p.start,d.start),A=Math.min(o.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,T=A;S<T;S+=3){let E=o.getX(S),g=o.getX(S+1),_=o.getX(S+2);s=rr(this,m,e,n,c,h,f,E,g,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),M=Math.min(o.count,d.start+d.count);for(let p=x,m=M;p<m;p+=3){let b=o.getX(p),A=o.getX(p+1),S=o.getX(p+2);s=rr(this,a,e,n,c,h,f,b,A,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let x=0,M=u.length;x<M;x++){let p=u[x],m=a[p.materialIndex],b=Math.max(p.start,d.start),A=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let S=b,T=A;S<T;S+=3){let E=S,g=S+1,_=S+2;s=rr(this,m,e,n,c,h,f,E,g,_),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let x=Math.max(0,d.start),M=Math.min(l.count,d.start+d.count);for(let p=x,m=M;p<m;p+=3){let b=p,A=p+1,S=p+2;s=rr(this,a,e,n,c,h,f,b,A,S),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};Tr=class extends Pt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=vt,h=vt,f,u){super(null,a,o,l,c,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},ii=new Ui,od=new we(.5,.5),ar=new D,Gn=class{constructor(e=new rn,t=new rn,n=new rn,s=new rn,r=new rn,a=new rn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=qt,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],f=r[5],u=r[6],d=r[7],x=r[8],M=r[9],p=r[10],m=r[11],b=r[12],A=r[13],S=r[14],T=r[15];if(s[0].setComponents(c-a,d-h,m-x,T-b).normalize(),s[1].setComponents(c+a,d+h,m+x,T+b).normalize(),s[2].setComponents(c+o,d+f,m+M,T+A).normalize(),s[3].setComponents(c-o,d-f,m-M,T-A).normalize(),n)s[4].setComponents(l,u,p,S).normalize(),s[5].setComponents(c-l,d-u,m-p,T-S).normalize();else if(s[4].setComponents(c-l,d-u,m-p,T-S).normalize(),t===qt)s[5].setComponents(c+l,d+u,m+p,T+S).normalize();else if(t===Pi)s[5].setComponents(l,u,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ii.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ii.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ii)}intersectsSprite(e){ii.center.set(0,0,0);let t=od.distanceTo(e.center);return ii.radius=.7071067811865476+t,ii.applyMatrix4(e.matrixWorld),this.intersectsSphere(ii)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(ar.x=s.normal.x>0?e.max.x:e.min.x,ar.y=s.normal.y>0?e.max.y:e.min.y,ar.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ar)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},vc=new tt,Cr=class i{constructor(){this.coordinateSystem=qt,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];vc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Gn),n[s].setFromProjectionMatrix(vc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Gn),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}},fs=class extends Pt{constructor(e=[],t=ci,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ps=class extends Pt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},In=class extends Pt{constructor(e,t,n=an,s,r,a,o=vt,l=vt,c,h=Cn,f=1){if(h!==Cn&&h!==Ln)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Fi(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ms=class extends In{constructor(e,t=an,n=ci,s,r,a=vt,o=vt,l,c=Cn){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},gs=class extends Pt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Bi=class i extends Ht{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],f=[],u=0,d=0;x("z","y","x",-1,-1,n,t,e,a,r,0),x("z","y","x",1,-1,n,t,-e,a,r,1),x("x","z","y",1,1,e,n,t,s,a,2),x("x","z","y",1,-1,e,n,-t,s,a,3),x("x","y","z",1,-1,e,t,n,s,r,4),x("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2));function x(M,p,m,b,A,S,T,E,g,_,N){let P=S/g,F=T/_,O=S/2,G=T/2,R=E/2,V=g+1,Y=_+1,H=0,te=0,X=new D;for(let Q=0;Q<Y;Q++){let $=Q*F-G;for(let Se=0;Se<V;Se++){let Fe=Se*P-O;X[M]=Fe*b,X[p]=$*A,X[m]=R,c.push(X.x,X.y,X.z),X[M]=0,X[p]=0,X[m]=E>0?1:-1,h.push(X.x,X.y,X.z),f.push(Se/g),f.push(1-Q/_),H+=1}}for(let Q=0;Q<_;Q++)for(let $=0;$<g;$++){let Se=u+$+V*Q,Fe=u+$+V*(Q+1),Z=u+($+1)+V*(Q+1),pe=u+($+1)+V*Q;l.push(Se,Fe,pe),l.push(Fe,Z,pe),te+=6}o.addGroup(d,te,N),d+=te,u+=H}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},xs=class i extends Ht{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],x=0,M=[],p=n/2,m=0;b(),a===!1&&(e>0&&A(!0),t>0&&A(!1)),this.setIndex(h),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function b(){let S=new D,T=new D,E=0,g=(t-e)/n;for(let _=0;_<=r;_++){let N=[],P=_/r,F=P*(t-e)+e;for(let O=0;O<=s;O++){let G=O/s,R=G*l+o,V=Math.sin(R),Y=Math.cos(R);T.x=F*V,T.y=-P*n+p,T.z=F*Y,f.push(T.x,T.y,T.z),S.set(V,g,Y).normalize(),u.push(S.x,S.y,S.z),d.push(G,1-P),N.push(x++)}M.push(N)}for(let _=0;_<s;_++)for(let N=0;N<r;N++){let P=M[N][_],F=M[N+1][_],O=M[N+1][_+1],G=M[N][_+1];(e>0||N!==0)&&(h.push(P,F,G),E+=3),(t>0||N!==r-1)&&(h.push(F,O,G),E+=3)}c.addGroup(m,E,0),m+=E}function A(S){let T=x,E=new we,g=new D,_=0,N=S===!0?e:t,P=S===!0?1:-1;for(let O=1;O<=s;O++)f.push(0,p*P,0),u.push(0,P,0),d.push(.5,.5),x++;let F=x;for(let O=0;O<=s;O++){let R=O/s*l+o,V=Math.cos(R),Y=Math.sin(R);g.x=N*Y,g.y=p*P,g.z=N*V,f.push(g.x,g.y,g.z),u.push(0,P,0),E.x=V*.5+.5,E.y=Y*.5*P+.5,d.push(E.x,E.y),x++}for(let O=0;O<s;O++){let G=T+O,R=F+O;S===!0?h.push(R,R+1,G):h.push(R+1,R,G),_+=3}c.addGroup(m,_,S===!0?1:2),m+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Zt=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Ce("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(a-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new we:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new D,s=[],r=[],a=[],o=new D,l=new tt;for(let d=0;d<=e;d++){let x=d/e;s[d]=this.getTangentAt(x,new D)}r[0]=new D,a[0]=new D;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),f<=c&&(c=f,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),a[d]=a[d-1].clone(),o.crossVectors(s[d-1],s[d]),o.length()>Number.EPSILON){o.normalize();let x=Math.acos(ke(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(l.makeRotationAxis(o,x))}a[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ke(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(d=-d);for(let x=1;x<=e;x++)r[x].applyMatrix4(l.makeRotationAxis(s[x],d*x)),a[x].crossVectors(s[x],r[x])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},vs=class extends Zt{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new we){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=l-this.aX,d=c-this.aY;l=u*h-d*f+this.aX,c=u*f+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Rr=class extends vs{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};yc=new D,Mc=new D,go=new il,xo=new il,vo=new il,Oi=class extends Zt{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new D){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Mc.subVectors(s[0],s[1]).add(s[0]),c=Mc);let f=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(yc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=yc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,x=Math.pow(c.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),x<1e-4&&(x=M),p<1e-4&&(p=M),go.initNonuniformCatmullRom(c.x,f.x,u.x,h.x,x,M,p),xo.initNonuniformCatmullRom(c.y,f.y,u.y,h.y,x,M,p),vo.initNonuniformCatmullRom(c.z,f.z,u.z,h.z,x,M,p)}else this.curveType==="catmullrom"&&(go.initCatmullRom(c.x,f.x,u.x,h.x,this.tension),xo.initCatmullRom(c.y,f.y,u.y,h.y,this.tension),vo.initCatmullRom(c.z,f.z,u.z,h.z,this.tension));return n.set(go.calc(l),xo.calc(l),vo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new D().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};Ir=class extends Zt{constructor(e=new we,t=new we,n=new we,s=new we){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,s.x,r.x,a.x,o.x),is(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pr=class extends Zt{constructor(e=new D,t=new D,n=new D,s=new D){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(is(e,s.x,r.x,a.x,o.x),is(e,s.y,r.y,a.y,o.y),is(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Lr=class extends Zt{constructor(e=new we,t=new we){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new we){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new we){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Dr=class extends Zt{constructor(e=new D,t=new D){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new D){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new D){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Fr=class extends Zt{constructor(e=new we,t=new we,n=new we){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new we){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,s.x,r.x,a.x),ns(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ys=class extends Zt{constructor(e=new D,t=new D,n=new D){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new D){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(ns(e,s.x,r.x,a.x),ns(e,s.y,r.y,a.y),ns(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Nr=class extends Zt{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new we){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],f=s[a>s.length-3?s.length-1:a+2];return n.set(Sc(o,l.x,c.x,h.x,f.x),Sc(o,l.y,c.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new we().fromArray(s))}return this}},md=Object.freeze({__proto__:null,ArcCurve:Rr,CatmullRomCurve3:Oi,CubicBezierCurve:Ir,CubicBezierCurve3:Pr,EllipseCurve:vs,LineCurve:Lr,LineCurve3:Dr,QuadraticBezierCurve:Fr,QuadraticBezierCurve3:ys,SplineCurve:Nr}),si=class i extends Ht{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,f=e/o,u=t/l,d=[],x=[],M=[],p=[];for(let m=0;m<h;m++){let b=m*u-a;for(let A=0;A<c;A++){let S=A*f-r;x.push(S,-b,0),M.push(0,0,1),p.push(A/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let b=0;b<o;b++){let A=b+c*m,S=b+c*(m+1),T=b+1+c*(m+1),E=b+1+c*m;d.push(A,S,E),d.push(S,T,E)}this.setIndex(d),this.setAttribute("position",new at(x,3)),this.setAttribute("normal",new at(M,3)),this.setAttribute("uv",new at(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ms=class i extends Ht{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],f=[],u=new D,d=new D,x=new D;for(let M=0;M<=n;M++){let p=a+M/n*o;for(let m=0;m<=s;m++){let b=m/s*r;d.x=(e+t*Math.cos(p))*Math.cos(b),d.y=(e+t*Math.cos(p))*Math.sin(b),d.z=t*Math.sin(p),c.push(d.x,d.y,d.z),u.x=e*Math.cos(b),u.y=e*Math.sin(b),x.subVectors(d,u).normalize(),h.push(x.x,x.y,x.z),f.push(m/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let m=(s+1)*M+p-1,b=(s+1)*(M-1)+p-1,A=(s+1)*(M-1)+p,S=(s+1)*M+p;l.push(m,b,S),l.push(b,A,S)}this.setIndex(l),this.setAttribute("position",new at(c,3)),this.setAttribute("normal",new at(h,3)),this.setAttribute("uv",new at(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}},Ss=class i extends Ht{constructor(e=new ys(new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new D,l=new D,c=new we,h=new D,f=[],u=[],d=[],x=[];M(),this.setIndex(x),this.setAttribute("position",new at(f,3)),this.setAttribute("normal",new at(u,3)),this.setAttribute("uv",new at(d,2));function M(){for(let A=0;A<t;A++)p(A);p(r===!1?t:0),b(),m()}function p(A){h=e.getPointAt(A/t,h);let S=a.normals[A],T=a.binormals[A];for(let E=0;E<=s;E++){let g=E/s*Math.PI*2,_=Math.sin(g),N=-Math.cos(g);l.x=N*S.x+_*T.x,l.y=N*S.y+_*T.y,l.z=N*S.z+_*T.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,f.push(o.x,o.y,o.z)}}function m(){for(let A=1;A<=t;A++)for(let S=1;S<=s;S++){let T=(s+1)*(A-1)+(S-1),E=(s+1)*A+(S-1),g=(s+1)*A+S,_=(s+1)*(A-1)+S;x.push(T,E,_),x.push(E,g,_)}}function b(){for(let A=0;A<=t;A++)for(let S=0;S<=s;S++)c.x=A/t,c.y=S/s,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new md[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};mh={clone:ui,merge:Tt},xd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Kt=class extends Vn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=xd,this.fragmentShader=vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ui(e.uniforms),this.uniformsGroups=gd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new De().setHex(s.value);break;case"v2":this.uniforms[n].value=new we().fromArray(s.value);break;case"v3":this.uniforms[n].value=new D().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Pe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new tt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Ur=class extends Kt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Wn=class extends Vn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new De(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new De(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ba,this.normalScale=new we(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Br=class extends Vn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$c,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Or=class extends Vn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Xn=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},zr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:So,endingEnd:So}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case _o:r=e,o=2*t-n;break;case bo:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case _o:a=e,l=2*n-t;break;case bo:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,x=(n-t)/(s-t),M=x*x,p=M*x,m=-u*p+2*u*M-u*x,b=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*x+1,A=(-1-d)*p+(1.5+d)*M+.5*x,S=d*p-d*M;for(let T=0;T!==o;++T)r[T]=m*a[h+T]+b*a[c+T]+A*a[l+T]+S*a[f+T];return r}},kr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*f+a[l+u]*h;return r}},Hr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Vr=class extends Xn{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,f=this.outTangents;if(!h||!f){let x=(n-t)/(s-t),M=1-x;for(let p=0;p!==o;++p)r[p]=a[c+p]*M+a[l+p]*x;return r}let u=o*2,d=e-1;for(let x=0;x!==o;++x){let M=a[c+x],p=a[l+x],m=d*u+x*2,b=f[m],A=f[m+1],S=e*u+x*2,T=h[S],E=h[S+1],g=Md(n,t,b,T,s);r[x]=gh(g,M,A,E,p)}return r}};Vt=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ai(t,this.TimeBufferType),this.values=Ai(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Ai(e.times,Array),values:Ai(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),or(e.settings)&&(n.settings={inTangents:Ai(e.settings.inTangents,Array),outTangents:Ai(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new kr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new zr(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Vr(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ss:t=this.InterpolantFactoryMethodDiscrete;break;case Sr:t=this.InterpolantFactoryMethodLinear;break;case hr:t=this.InterpolantFactoryMethodSmooth;break;case Mo:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ce("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ss;case this.InterpolantFactoryMethodLinear:return Sr;case this.InterpolantFactoryMethodSmooth:return hr;case this.InterpolantFactoryMethodBezier:return Mo}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;or(this.settings)&&(bc(this.settings.inTangents,e),bc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;or(this.settings)&&(wc(this.settings.inTangents,e),wc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ie("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ie("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ie("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ie("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&Cu(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ie("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===hr,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let f=o*n,u=f-n,d=f+n;for(let x=0;x!==n;++x){let M=t[f+x];if(M!==t[u+x]||M!==t[d+x]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let f=o*n,u=a*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,or(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Vt.prototype.ValueTypeName="";Vt.prototype.TimeBufferType=Float32Array;Vt.prototype.ValueBufferType=Float32Array;Vt.prototype.DefaultInterpolation=Sr;Yn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Yn.prototype.ValueTypeName="bool";Yn.prototype.ValueBufferType=Array;Yn.prototype.DefaultInterpolation=ss;Yn.prototype.InterpolantFactoryMethodLinear=void 0;Yn.prototype.InterpolantFactoryMethodSmooth=void 0;Gr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};Gr.prototype.ValueTypeName="color";Wr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};Wr.prototype.ValueTypeName="number";Xr=class extends Xn{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)gn.slerpFlat(r,0,a,c-o,a,c,l);return r}},_s=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Xr(this.times,this.values,this.getValueSize(),e)}};_s.prototype.ValueTypeName="quaternion";_s.prototype.InterpolantFactoryMethodSmooth=void 0;Jn=class extends Vt{constructor(e,t,n){super(e,t,n)}};Jn.prototype.ValueTypeName="string";Jn.prototype.ValueBufferType=Array;Jn.prototype.DefaultInterpolation=ss;Jn.prototype.InterpolantFactoryMethodLinear=void 0;Jn.prototype.InterpolantFactoryMethodSmooth=void 0;Yr=class extends Vt{constructor(e,t,n,s){super(e,t,n,s)}};Yr.prototype.ValueTypeName="vector";Jr=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,f){return c.push(h,f),this},this.removeHandler=function(h){let f=c.indexOf(h);return f!==-1&&c.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=c.length;f<u;f+=2){let d=c[f],x=c[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return x}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},xh=new Jr,qr=class{constructor(e){this.manager=e!==void 0?e:xh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};qr.DEFAULT_MATERIAL_NAME="__DEFAULT";bs=class extends Et{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new De(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},ws=class extends bs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.groundColor=new De(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},yo=new tt,Ec=new D,Ac=new D,Zr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new we(512,512),this.mapType=Ft,this.map=null,this.mapPass=null,this.matrix=new tt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gn,this._frameExtents=new we(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Ec.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ec),Ac.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ac),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(yo,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===Pi||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(yo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},lr=new D,cr=new gn,fn=new D,Es=class extends Et{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tt,this.projectionMatrix=new tt,this.projectionMatrixInverse=new tt,this.coordinateSystem=qt,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(lr,cr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,fn.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(lr,cr,fn),fn.x===1&&fn.y===1&&fn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(lr,cr,fn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zn=new D,Tc=new we,Cc=new we,Rt=class extends Es{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Di*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(es*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Di*2*Math.atan(Math.tan(es*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){zn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zn.x,zn.y).multiplyScalar(-e/zn.z),zn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zn.x,zn.y).multiplyScalar(-e/zn.z)}getViewSize(e,t){return this.getViewBounds(e,Tc,Cc),t.subVectors(Cc,Tc)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(es*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},As=class extends Es{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},wo=class extends Zr{constructor(){super(new As(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ri=class extends bs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Et.DEFAULT_UP),this.updateMatrix(),this.target=new Et,this.shadow=new wo}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Ti=-90,Ci=1,zi=class extends Et{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Rt(Ti,Ci,e,t);s.layers=this.layers,this.add(s);let r=new Rt(Ti,Ci,e,t);r.layers=this.layers,this.add(r);let a=new Rt(Ti,Ci,e,t);a.layers=this.layers,this.add(a);let o=new Rt(Ti,Ci,e,t);o.layers=this.layers,this.add(o);let l=new Rt(Ti,Ci,e,t);l.layers=this.layers,this.add(l);let c=new Rt(Ti,Ci,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===qt)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Pi)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),x=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=x,n.texture.needsPMREMUpdate=!0}},Kr=class extends Rt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},rl="\\[\\]\\.:\\/",Sd=new RegExp("["+rl+"]","g"),al="[^"+rl+"]",_d="[^"+rl.replace("\\.","")+"]",bd=/((?:WC+[\/:])*)/.source.replace("WC",al),wd=/(WCOD+)?/.source.replace("WCOD",_d),Ed=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",al),Ad=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",al),Td=new RegExp("^"+bd+wd+Ed+Ad+"$"),Cd=["material","materials","bones","map"],Eo=class{constructor(e,t,n){let s=n||et.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},et=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Sd,"")}static parseTrackName(e){let t=Td.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Cd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ie("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ie("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ie("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ie("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ie("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ie("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ie("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ie("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};et.Composite=Eo;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];G0=new Float32Array(1),dl=class dl{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};dl.prototype.isMatrix2=!0;Ao=dl;typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function zh(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pd(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,f=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){let h=l.array,f=l.updateRanges;if(i.bindBuffer(c,o),f.length===0)i.bufferSubData(c,0,h);else{f.sort((d,x)=>d.start-x.start);let u=0;for(let d=1;d<f.length;d++){let x=f[u],M=f[d];M.start<=x.start+x.count+1?x.count=Math.max(x.count,M.start+M.count-x.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,x=f.length;d<x;d++){let M=f[d];i.bufferSubData(c,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function fm(i,e,t,n,s,r){let a=new De(0),o=s===!0?0:1,l,c,h=null,f=0,u=null;function d(b){let A=b.isScene===!0?b.background:null;if(A&&A.isTexture){let S=b.backgroundBlurriness>0;A=e.get(A,S)}return A}function x(b){let A=!1,S=d(b);S===null?p(a,o):S&&S.isColor&&(p(S,1),A=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||A)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(b,A){let S=d(A);S&&S.isCubeTexture?(c===void 0&&(c=new At(new Bi(1,1,1),new Kt({name:"BackgroundCubeMaterial",uniforms:ui(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,g){this.matrixWorld.copyPosition(g.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(dm.makeRotationFromEuler(A.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(kh),c.material.toneMapped=We.getTransfer(S.colorSpace)!==Je,(h!==S||f!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new At(new si(2,2),new Kt({name:"BackgroundMaterial",uniforms:ui(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:qn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.toneMapped=We.getTransfer(S.colorSpace)!==Je,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,f=S.version,u=i.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function p(b,A){b.getRGB(za,sl(i)),t.buffers.color.setClear(za.r,za.g,za.b,A,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,A=1){a.set(b),o=A,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(a,o)},render:x,addToRenderList:M,dispose:m}}function pm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(F,O,G,R,V){let Y=!1,H=f(F,R,G,O);r!==H&&(r=H,c(r.object)),Y=d(F,R,G,V),Y&&x(F,R,G,V),V!==null&&e.update(V,i.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,S(F,O,G,R),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return i.createVertexArray()}function c(F){return i.bindVertexArray(F)}function h(F){return i.deleteVertexArray(F)}function f(F,O,G,R){let V=R.wireframe===!0,Y=n[O.id];Y===void 0&&(Y={},n[O.id]=Y);let H=F.isInstancedMesh===!0?F.id:0,te=Y[H];te===void 0&&(te={},Y[H]=te);let X=te[G.id];X===void 0&&(X={},te[G.id]=X);let Q=X[V];return Q===void 0&&(Q=u(l()),X[V]=Q),Q}function u(F){let O=[],G=[],R=[];for(let V=0;V<t;V++)O[V]=0,G[V]=0,R[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:G,attributeDivisors:R,object:F,attributes:{},index:null}}function d(F,O,G,R){let V=r.attributes,Y=O.attributes,H=0,te=G.getAttributes();for(let X in te)if(te[X].location>=0){let $=V[X],Se=Y[X];if(Se===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&(Se=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&(Se=F.instanceColor)),$===void 0||$.attribute!==Se||Se&&$.data!==Se.data)return!0;H++}return r.attributesNum!==H||r.index!==R}function x(F,O,G,R){let V={},Y=O.attributes,H=0,te=G.getAttributes();for(let X in te)if(te[X].location>=0){let $=Y[X];$===void 0&&(X==="instanceMatrix"&&F.instanceMatrix&&($=F.instanceMatrix),X==="instanceColor"&&F.instanceColor&&($=F.instanceColor));let Se={};Se.attribute=$,$&&$.data&&(Se.data=$.data),V[X]=Se,H++}r.attributes=V,r.attributesNum=H,r.index=R}function M(){let F=r.newAttributes;for(let O=0,G=F.length;O<G;O++)F[O]=0}function p(F){m(F,0)}function m(F,O){let G=r.newAttributes,R=r.enabledAttributes,V=r.attributeDivisors;G[F]=1,R[F]===0&&(i.enableVertexAttribArray(F),R[F]=1),V[F]!==O&&(i.vertexAttribDivisor(F,O),V[F]=O)}function b(){let F=r.newAttributes,O=r.enabledAttributes;for(let G=0,R=O.length;G<R;G++)O[G]!==F[G]&&(i.disableVertexAttribArray(G),O[G]=0)}function A(F,O,G,R,V,Y,H){H===!0?i.vertexAttribIPointer(F,O,G,V,Y):i.vertexAttribPointer(F,O,G,R,V,Y)}function S(F,O,G,R){M();let V=R.attributes,Y=G.getAttributes(),H=O.defaultAttributeValues;for(let te in Y){let X=Y[te];if(X.location>=0){let Q=V[te];if(Q===void 0&&(te==="instanceMatrix"&&F.instanceMatrix&&(Q=F.instanceMatrix),te==="instanceColor"&&F.instanceColor&&(Q=F.instanceColor)),Q!==void 0){let $=Q.normalized,Se=Q.itemSize,Fe=e.get(Q);if(Fe===void 0)continue;let Z=Fe.buffer,pe=Fe.type,ve=Fe.bytesPerElement,Ae=pe===i.INT||pe===i.UNSIGNED_INT||Q.gpuType===ta;if(Q.isInterleavedBufferAttribute){let me=Q.data,Ue=me.isInterleavedBuffer===!0?me.stride:me.itemSize,ot=Q.offset;if(me.isInstancedInterleavedBuffer||me.isInstancedBufferAttribute){for(let Re=0;Re<X.locationSize;Re++)m(X.location+Re,me.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Re=0;Re<X.locationSize;Re++)p(X.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let Re=0;Re<X.locationSize;Re++)A(X.location+Re,Se/X.locationSize,pe,$,Ue*ve,(ot+Se/X.locationSize*Re)*ve,Ae)}else{if(Q.isInstancedBufferAttribute){for(let me=0;me<X.locationSize;me++)m(X.location+me,Q.meshPerAttribute);F.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let me=0;me<X.locationSize;me++)p(X.location+me);i.bindBuffer(i.ARRAY_BUFFER,Z);for(let me=0;me<X.locationSize;me++)A(X.location+me,Se/X.locationSize,pe,$,Se*ve,Se/X.locationSize*me*ve,Ae)}}else if(H!==void 0){let $=H[te];if($!==void 0)switch($.length){case 2:i.vertexAttrib2fv(X.location,$);break;case 3:i.vertexAttrib3fv(X.location,$);break;case 4:i.vertexAttrib4fv(X.location,$);break;default:i.vertexAttrib1fv(X.location,$)}}}}b()}function T(){N();for(let F in n){let O=n[F];for(let G in O){let R=O[G];for(let V in R){let Y=R[V];for(let H in Y)h(Y[H].object),delete Y[H];delete R[V]}}delete n[F]}}function E(F){if(n[F.id]===void 0)return;let O=n[F.id];for(let G in O){let R=O[G];for(let V in R){let Y=R[V];for(let H in Y)h(Y[H].object),delete Y[H];delete R[V]}}delete n[F.id]}function g(F){for(let O in n){let G=n[O];for(let R in G){let V=G[R];if(V[F.id]===void 0)continue;let Y=V[F.id];for(let H in Y)h(Y[H].object),delete Y[H];delete V[F.id]}}}function _(F){for(let O in n){let G=n[O],R=F.isInstancedMesh===!0?F.id:0,V=G[R];if(V!==void 0){for(let Y in V){let H=V[Y];for(let te in H)h(H[te].object),delete H[te];delete V[Y]}delete G[R],Object.keys(G).length===0&&delete n[O]}}}function N(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:P,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:_,releaseStatesOfProgram:g,initAttributes:M,enableAttribute:p,disableUnusedAttributes:b}}function mm(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let d=0;d<h;d++)u+=c[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function gm(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let g=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(g.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(g){return!(g!==cn&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(g){let _=g===ln&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(g!==Ft&&g!==on&&!_&&n.convert(g)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(g){if(g==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";g="mediump"}return g==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Ce("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),A=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),E=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:x,maxTextureSize:M,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:b,maxVaryings:A,maxFragmentUniforms:S,maxSamples:T,samples:E}}function xm(i){let e=this,t=null,n=0,s=!1,r=!1,a=new rn,o=new Pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let x=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,m=i.get(f);if(!s||x===null||x.length===0||r&&!p)r?h(null):c();else{let b=r?0:n,A=b*4,S=m.clippingState||null;l.value=S,S=h(x,u,A,d);for(let T=0;T!==A;++T)S[T]=t[T];m.clippingState=S,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,x){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=l.value,x!==!0||p===null){let m=d+M*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(p===null||p.length<m)&&(p=new Float32Array(m));for(let A=0,S=d;A!==M;++A,S+=4)a.copy(f[A]).applyMatrix4(b,o),a.normal.toArray(p,S),p[S+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}function yh(i,e,t){return new Us(i,{minFilter:Pn,generateMipmaps:e,type:ln,colorSpace:rs,depthBuffer:t})}function Bs(i,e,t){return new Kt({name:i,uniforms:e,vertexShader:ze.cube_vert,fragmentShader:t,side:Lt,blending:oi,depthTest:!1,depthWrite:!1})}function bm(){return Bs("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hh}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function wm(){return Bs("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vh}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Em(){return Bs("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${ym}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Mh(){return Bs("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Sh(){return Bs("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Am(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?a(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Qr||d===$r)if(e.has(u)){let x=e.get(u).texture;return o(x,u.mapping)}else{let x=u.image;if(x&&x.height>0){let M=new Us(x.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",c),o(M.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,x=d===Qr||d===$r,M=d===ci||d===Vi;if(x||M){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ha(i)),p=x?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let b=u.image;return x&&b&&b.height>0||M&&b&&l(b)?(n===null&&(n=new Ha(i)),p=x?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,d){return d===Qr?u.mapping=ci:d===$r&&(u.mapping=Vi),u}function l(u){let d=0,x=6;for(let M=0;M<x;M++)u[M]!==void 0&&d++;return d===x}function c(u){let d=u.target;d.removeEventListener("dispose",c);let x=e.get(d);x!==void 0&&(e.delete(d),x.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let x=t.get(d);x!==void 0&&(t.delete(d),x.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Tm(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&$i("WebGLRenderer: "+n+" extension not supported."),s}}}function Cm(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(x=>delete s[x]);function o(x){l(x.target)}function l(x){x.index!==null&&e.remove(x.index);for(let p in x.attributes)e.remove(x.attributes[p]);x.removeEventListener("dispose",o),delete s[x.id],a.unregister(x);let M=r.get(x);M&&(e.remove(M),r.delete(x)),n.releaseStatesOfGeometry(x),x.isInstancedBufferGeometry===!0&&delete x._maxInstanceCount,t.memory.geometries--}function c(x,M){return s[M.id]!==void 0||(M.addEventListener("dispose",o),s[M.id]=new WeakRef(M),a.register(M,M.id,M),t.memory.geometries++),M}function h(x){let M=x.attributes;for(let p in M)e.update(M[p],i.ARRAY_BUFFER)}function f(x){let M=x.index,p=x.attributes.position,m=0;if(p===void 0)return;let b=M!==null?M.array.length:p.array.length/3-1,A=p.count>=65535?ds:us,S=new A(Math.ceil(b/3)*6,1),T=S.array;if(M!==null){let g=M.array;m=M.version;for(let _=0,N=0;_<b;_+=3){let P=g[_+0],F=g[_+1],O=g[_+2];T[N++]=P,T[N++]=F,T[N++]=F,T[N++]=O,T[N++]=O,T[N++]=P}}else{m=p.version;for(let g=0,_=0;g<b;g+=3){let N=g+0,P=g+1,F=g+2;T[_++]=N,T[_++]=P,T[_++]=P,T[_++]=F,T[_++]=F,T[_++]=N}}S.version=m;let E=r.get(x);E&&e.remove(E),r.set(x,S)}function u(x){let M=r.get(x);if(M){let p=x.index;p!==null&&M.version<p.version&&f(x)}else f(x);return r.get(x)}function d(){for(let x in s){let M=s[x].deref();M!==void 0&&l(M)}}return{get:c,update:h,getWireframeAttribute:u,dispose:d}}function Rm(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*a,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=u[p];t.update(M,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Im(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ie("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function Pm(i,e,t){let n=new WeakMap,s=new Qe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==f){let N=function(){g.dispose(),n.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let d=o.morphAttributes.position!==void 0,x=o.morphAttributes.normal!==void 0,M=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],A=0;d===!0&&(A=1),x===!0&&(A=2),M===!0&&(A=3);let S=o.attributes.position.count*A,T=1;S>e.maxTextureSize&&(T=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);let E=new Float32Array(S*T*4*f),g=new ls(E,S,T,f);g.type=on,g.needsUpdate=!0;let _=A*4;for(let P=0;P<f;P++){let F=p[P],O=m[P],G=b[P],R=S*T*4*P;for(let V=0;V<F.count;V++){let Y=V*_;d===!0&&(s.fromBufferAttribute(F,V),E[R+Y+0]=s.x,E[R+Y+1]=s.y,E[R+Y+2]=s.z,E[R+Y+3]=0),x===!0&&(s.fromBufferAttribute(O,V),E[R+Y+4]=s.x,E[R+Y+5]=s.y,E[R+Y+6]=s.z,E[R+Y+7]=0),M===!0&&(s.fromBufferAttribute(G,V),E[R+Y+8]=s.x,E[R+Y+9]=s.y,E[R+Y+10]=s.z,E[R+Y+11]=G.itemSize===4?s.w:1)}}u={count:f,texture:g,size:new we(S,T)},n.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let d=0;for(let M=0;M<c.length;M++)d+=c[M];let x=o.morphTargetsRelative?1:1-d;l.getUniforms().setValue(i,"morphTargetBaseInfluence",x),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function Lm(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,f=c.geometry,u=e.get(c,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let d=c.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}function Fm(i,e,t,n,s,r){let a=new kt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ht;h.setAttribute("position",new at([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new at([0,2,0,0,2,0],2));let f=new Ur({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new At(h,f),d=new As(-1,1,1,-1,0,1),x=null,M=null,p=!1,m,b=null,A=[],S=!1;this.setSize=function(T,E){a.setSize(T,E),o!==null&&o.setSize(T,E),l!==null&&l.setSize(T,E);for(let g=0;g<A.length;g++){let _=A[g];_.setSize&&_.setSize(T,E)}},this.setEffects=function(T){A=T,S=A.length>0&&A[0].isRenderPass===!0;let E=a.width,g=a.height;A.length>0&&o===null&&(o=new kt(E,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}),l=new kt(E,g,{type:ln,depthBuffer:!1,stencilBuffer:!1}));let _=s===!0&&A.some(N=>N.needsDepthTexture===!0);_!==(a.depthTexture!==null)&&(_===!0&&c===null&&(c=new In(E,g),r===!0&&(c.format=Ln,c.type=hi)),a.dispose(),a.depthTexture=_?c:null,a.resolveDepthBuffer=_,a.storeMultisampledDepthBuffer=_);for(let N=0;N<A.length;N++){let P=A[N];P.setSize&&P.setSize(E,g),_&&P.needsDepthTexture===!0&&P.setDepthTexture&&P.setDepthTexture(c)}},this.begin=function(T,E){if(p||T.toneMapping===Qt&&A.length===0)return!1;if(b=E,E!==null){let g=E.width,_=E.height;(a.width!==g||a.height!==_)&&this.setSize(g,_)}return S===!1&&T.setRenderTarget(a),m=T.toneMapping,T.toneMapping=Qt,!0},this.hasRenderPass=function(){return S},this.end=function(T,E){T.toneMapping=m,p=!0;let g=a,_=o;for(let N=0;N<A.length;N++){let P=A[N];P.enabled!==!1&&(P.render(T,_,g,E),P.needsSwap!==!1&&(g=_,_=_===o?l:o))}if(x!==T.outputColorSpace||M!==T.toneMapping){x=T.outputColorSpace,M=T.toneMapping,f.defines={},We.getTransfer(x)===Je&&(f.defines.SRGB_TRANSFER="");let N=Dm[M];N&&(f.defines[N]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=g.texture,T.setRenderTarget(b),T.render(u,d),b=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),f.dispose()}}function Yi(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=_h[s];if(r===void 0&&(r=new Float32Array(s),_h[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function ft(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ga(i,e){let t=bh[e];t===void 0&&(t=new Int32Array(e),bh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Nm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Um(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2fv(this.addr,e),ft(t,e)}}function Bm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(dt(t,e))return;i.uniform3fv(this.addr,e),ft(t,e)}}function Om(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4fv(this.addr,e),ft(t,e)}}function zm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Ah.set(n),i.uniformMatrix2fv(this.addr,!1,Ah),ft(t,n)}}function km(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;Eh.set(n),i.uniformMatrix3fv(this.addr,!1,Eh),ft(t,n)}}function Hm(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),ft(t,e)}else{if(dt(t,n))return;wh.set(n),i.uniformMatrix4fv(this.addr,!1,wh),ft(t,n)}}function Vm(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Gm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2iv(this.addr,e),ft(t,e)}}function Wm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3iv(this.addr,e),ft(t,e)}}function Xm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4iv(this.addr,e),ft(t,e)}}function Ym(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Jm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(dt(t,e))return;i.uniform2uiv(this.addr,e),ft(t,e)}}function qm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(dt(t,e))return;i.uniform3uiv(this.addr,e),ft(t,e)}}function Zm(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(dt(t,e))return;i.uniform4uiv(this.addr,e),ft(t,e)}}function Wa(i){return i.version===0&&(i.compareFunction=jo,i.needsUpdate=!0),i}function Km(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Wa(Wh):r=Gh,t.setTexture2D(e||r,s)}function jm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Jh,s)}function Qm(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Wa(Xh):r=qh,t.setTextureCube(e||r,s)}function $m(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Yh,s)}function eg(i){switch(i){case 5126:return Nm;case 35664:return Um;case 35665:return Bm;case 35666:return Om;case 35674:return zm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return Ym;case 36294:return Jm;case 36295:return qm;case 36296:return Zm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return Qm;case 36289:case 36303:case 36311:case 36292:return $m}}function tg(i,e){i.uniform1fv(this.addr,e)}function ng(i,e){let t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function ig(i,e){let t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function sg(i,e){let t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function rg(i,e){let t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function ag(i,e){let t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function og(i,e){let t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function lg(i,e){i.uniform1iv(this.addr,e)}function cg(i,e){i.uniform2iv(this.addr,e)}function hg(i,e){i.uniform3iv(this.addr,e)}function ug(i,e){i.uniform4iv(this.addr,e)}function dg(i,e){i.uniform1uiv(this.addr,e)}function fg(i,e){i.uniform2uiv(this.addr,e)}function pg(i,e){i.uniform3uiv(this.addr,e)}function mg(i,e){i.uniform4uiv(this.addr,e)}function gg(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Wa(Wh):a=Gh;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function xg(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Jh,r[a])}function vg(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Wa(Xh):a=qh;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function yg(i,e,t){let n=this.cache,s=e.length,r=Ga(t,s);dt(n,r)||(i.uniform1iv(this.addr,r),ft(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||Yh,r[a])}function Mg(i){switch(i){case 5126:return tg;case 35664:return ng;case 35665:return ig;case 35666:return sg;case 35674:return rg;case 35675:return ag;case 35676:return og;case 5124:case 35670:return lg;case 35667:case 35671:return cg;case 35668:case 35672:return hg;case 35669:case 35673:return ug;case 5125:return dg;case 36294:return fg;case 36295:return pg;case 36296:return mg;case 35678:case 36198:case 36298:case 36306:case 35682:return gg;case 35679:case 36299:case 36307:return xg;case 35680:case 36300:case 36308:case 36293:return vg;case 36289:case 36303:case 36311:case 36292:return yg}}function Th(i,e){i.seq.push(e),i.map[e.id]=e}function Sg(i,e,t){let n=i.name,s=n.length;for(pl.lastIndex=0;;){let r=pl.exec(n),a=pl.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Th(t,c===void 0?new gl(o,i,e):new xl(o,i,e));break}else{let f=t.map[o];f===void 0&&(f=new vl(o),Th(t,f)),t=f}}}function Ch(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}function wg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function Eg(i){We._getMatrix(Rh,We.workingColorSpace,i);let e=`mat3( ${Rh.elements.map(t=>t.toFixed(4))} )`;switch(We.getTransfer(i)){case as:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Ih(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+wg(i.getShaderSource(e),o)}else return r}function Ag(i,e){let t=Eg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function Cg(i,e){let t=Tg[e];return t===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Rg(){We.getLuminanceCoefficients(ka);let i=ka.x.toFixed(4),e=ka.y.toFixed(4),t=ka.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Ig(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ns).join(`
`)}function Pg(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Lg(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ns(i){return i!==""}function Ph(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Lh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function yl(i){return i.replace(Dg,Fg)}function Fg(i,e){let t=ze[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return yl(t)}function Dh(i){return i.replace(Ng,Ug)}function Ug(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Fh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Og(i){return Bg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function kg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":zg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}function Vg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Hg[i.combine]||"ENVMAP_BLENDING_NONE"}function Gg(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=Og(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=kg(t),f=Vg(t),u=Ig(t),d=Pg(r),x=s.createProgram(),M,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ns).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Ns).join(`
`),p.length>0&&(p+=`
`)):(M=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ns).join(`
`),p=[Fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qt?"#define TONE_MAPPING":"",t.toneMapping!==Qt?ze.tonemapping_pars_fragment:"",t.toneMapping!==Qt?Cg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,Ag("linearToOutputTexel",t.outputColorSpace),Rg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ns).join(`
`)),a=yl(a),a=Ph(a,t),a=Lh(a,t),o=yl(o),o=Ph(o,t),o=Lh(o,t),a=Dh(a),o=Dh(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===Qo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let b=m+M+a,A=m+p+o,S=Ch(s,s.VERTEX_SHADER,b),T=Ch(s,s.FRAGMENT_SHADER,A);s.attachShader(x,S),s.attachShader(x,T),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function E(P){if(i.debug.checkShaderErrors){let F=s.getProgramInfoLog(x)||"",O=s.getShaderInfoLog(S)||"",G=s.getShaderInfoLog(T)||"",R=F.trim(),V=O.trim(),Y=G.trim(),H=!0,te=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(H=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,S,T);else{let X=Ih(s,S,"vertex"),Q=Ih(s,T,"fragment");Ie("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+R+`
`+X+`
`+Q)}else R!==""?Ce("WebGLProgram: Program Info Log:",R):(V===""||Y==="")&&(te=!1);te&&(P.diagnostics={runnable:H,programLog:R,vertexShader:{log:V,prefix:M},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(S),s.deleteShader(T),g=new Xi(s,x),_=Lg(s,x)}let g;this.getUniforms=function(){return g===void 0&&E(this),g};let _;this.getAttributes=function(){return _===void 0&&E(this),_};let N=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(x,_g)),N},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bg++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=S,this.fragmentShader=T,this}function Xg(i){return i===Zn||i===Ls||i===Ds}function Yg(i,e,t,n,s,r){let a=new cs,o=new Ml,l=new Set,c=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(g){return l.add(g),g===0?"uv":`uv${g}`}function x(g,_,N,P,F,O){let G=P.fog,R=F.geometry,V=g.isMeshStandardMaterial||g.isMeshLambertMaterial||g.isMeshPhongMaterial?P.environment:null,Y=g.isMeshStandardMaterial||g.isMeshLambertMaterial&&!g.envMap||g.isMeshPhongMaterial&&!g.envMap,H=e.get(g.envMap||V,Y),te=u[g.type],X=n.precision;g.precision!==null&&(X=n.getMaxPrecision(g.precision),X!==g.precision&&Ce("WebGLProgram.getParameters:",g.precision,"not supported, using",X,"instead."));let Q=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,$=Q!==void 0?Q.length:0,Se=0;R.morphAttributes.position!==void 0&&(Se=1),R.morphAttributes.normal!==void 0&&(Se=2),R.morphAttributes.color!==void 0&&(Se=3);let Fe,Z,pe,ve;if(te){let de=vn[te];Fe=de.vertexShader,Z=de.fragmentShader}else{Fe=g.vertexShader,Z=g.fragmentShader;let de=o.getVertexShaderStage(g),Ze=o.getFragmentShaderStage(g);o.update(g,de,Ze),pe=de.id,ve=Ze.id}let Ae=i.getRenderTarget(),me=i.state.buffers.depth.getReversed(),Ue=F.isInstancedMesh===!0,ot=F.isBatchedMesh===!0,Re=!!g.map,qe=!!g.matcap,Ke=!!H,He=Ke&&H.isPMREMTexture===!0,yt=!!g.aoMap,ht=!!g.lightMap,Dt=!!g.bumpMap&&g.wireframe===!1,st=!!g.normalMap,un=!!g.displacementMap,pt=!!g.emissiveMap,Gt=!!g.metalnessMap,Wt=!!g.roughnessMap,Xt=g.anisotropy>0,L=g.clearcoat>0,Yt=g.diffuseRoughness>0,nt=g.dispersion>0,it=g.retroreflectivity>0,ue=g.iridescence>0,ut=g.sheen>0,Te=g.transmission>0,Le=Xt&&!!g.anisotropyMap,w=L&&!!g.clearcoatMap,v=L&&!!g.clearcoatNormalMap,B=L&&!!g.clearcoatRoughnessMap,ee=Yt&&!!g.diffuseRoughnessMap,j=ue&&!!g.iridescenceMap,se=ue&&!!g.iridescenceThicknessMap,ce=ut&&!!g.sheenColorMap,J=ut&&!!g.sheenRoughnessMap,q=!!g.specularMap,ae=!!g.specularColorMap,C=!!g.specularIntensityMap,K=Te&&!!g.transmissionMap,W=Te&&!!g.thicknessMap,oe=!!g.gradientMap,ie=!!g.alphaMap,re=g.alphaTest>0,be=!!g.alphaHash,Oe=!!g.extensions,ne=Qt;g.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(ne=i.toneMapping);let Ee=He?H.isCompressedCubeTexture?H.image[0].mipmaps:H.mipmaps:null,Be={shaderID:te,shaderType:g.type,shaderName:g.name,vertexShader:Fe,fragmentShader:Z,defines:g.defines,customVertexShaderID:pe,customFragmentShaderID:ve,isRawShaderMaterial:g.isRawShaderMaterial===!0,glslVersion:g.glslVersion,precision:X,batching:ot,batchingColor:ot&&F._colorsTexture!==null,instancing:Ue,instancingColor:Ue&&F.instanceColor!==null,instancingMorph:Ue&&F.morphTexture!==null,outputColorSpace:Ae===null?i.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:We.workingColorSpace,alphaToCoverage:!!g.alphaToCoverage,map:Re,matcap:qe,envMap:Ke,envMapMode:Ke&&H.mapping,envMapPMREM:He,envMapMaxLod:He?Ee.length-1:null,envMapSize:He?Ee[0].width:null,aoMap:yt,lightMap:ht,bumpMap:Dt,normalMap:st,displacementMap:un,emissiveMap:pt,normalMapObjectSpace:st&&g.normalMapType===eh,normalMapTangentSpace:st&&g.normalMapType===Ba,packedNormalMap:st&&g.normalMapType===Ba&&Xg(g.normalMap.format),metalnessMap:Gt,roughnessMap:Wt,anisotropy:Xt,anisotropyMap:Le,clearcoat:L,clearcoatMap:w,clearcoatNormalMap:v,clearcoatRoughnessMap:B,diffuseRoughness:Yt,diffuseRoughnessMap:ee,dispersion:nt,retroreflection:it,iridescence:ue,iridescenceMap:j,iridescenceThicknessMap:se,sheen:ut,sheenColorMap:ce,sheenRoughnessMap:J,specularMap:q,specularColorMap:ae,specularIntensityMap:C,transmission:Te,transmissionMap:K,thicknessMap:W,gradientMap:oe,opaque:g.transparent===!1&&g.blending===Hi&&g.alphaToCoverage===!1,alphaMap:ie,alphaTest:re,alphaHash:be,combine:g.combine,mapUv:Re&&d(g.map.channel),aoMapUv:yt&&d(g.aoMap.channel),lightMapUv:ht&&d(g.lightMap.channel),bumpMapUv:Dt&&d(g.bumpMap.channel),normalMapUv:st&&d(g.normalMap.channel),displacementMapUv:un&&d(g.displacementMap.channel),emissiveMapUv:pt&&d(g.emissiveMap.channel),metalnessMapUv:Gt&&d(g.metalnessMap.channel),roughnessMapUv:Wt&&d(g.roughnessMap.channel),anisotropyMapUv:Le&&d(g.anisotropyMap.channel),clearcoatMapUv:w&&d(g.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(g.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&d(g.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ee&&d(g.diffuseRoughnessMap.channel),iridescenceMapUv:j&&d(g.iridescenceMap.channel),iridescenceThicknessMapUv:se&&d(g.iridescenceThicknessMap.channel),sheenColorMapUv:ce&&d(g.sheenColorMap.channel),sheenRoughnessMapUv:J&&d(g.sheenRoughnessMap.channel),specularMapUv:q&&d(g.specularMap.channel),specularColorMapUv:ae&&d(g.specularColorMap.channel),specularIntensityMapUv:C&&d(g.specularIntensityMap.channel),transmissionMapUv:K&&d(g.transmissionMap.channel),thicknessMapUv:W&&d(g.thicknessMap.channel),alphaMapUv:ie&&d(g.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(st||Xt),vertexNormals:!!R.attributes.normal,vertexColors:g.vertexColors,vertexAlphas:g.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!R.attributes.uv&&(Re||ie),fog:!!G,useFog:g.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:g.wireframe===!1&&(g.flatShading===!0||R.attributes.normal===void 0&&st===!1&&(g.isMeshLambertMaterial||g.isMeshPhongMaterial||g.isMeshStandardMaterial||g.isMeshPhysicalMaterial)),sizeAttenuation:g.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:me,skinning:F.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:$,morphTextureStride:Se,numSunLights:_.sun.length,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numSunLightShadows:_.sunShadowMap.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numLightProbeGrids:O.filter(de=>de.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:g.dithering,shadowMapEnabled:i.shadowMap.enabled&&N.length>0,shadowMapType:i.shadowMap.type,toneMapping:ne,decodeVideoTexture:Re&&g.map.isVideoTexture===!0&&We.getTransfer(g.map.colorSpace)===Je,decodeVideoTextureEmissive:pt&&g.emissiveMap.isVideoTexture===!0&&We.getTransfer(g.emissiveMap.colorSpace)===Je,premultipliedAlpha:g.premultipliedAlpha,doubleSided:g.side===jt,flipSided:g.side===Lt,useDepthPacking:g.depthPacking>=0,depthPacking:g.depthPacking||0,index0AttributeName:g.index0AttributeName,extensionClipCullDistance:Oe&&g.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Oe&&g.extensions.multiDraw===!0||ot)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:g.customProgramCacheKey()};return Be.vertexUv1s=l.has(1),Be.vertexUv2s=l.has(2),Be.vertexUv3s=l.has(3),l.clear(),Be}function M(g){let _=[];if(g.shaderID?_.push(g.shaderID):(_.push(g.customVertexShaderID),_.push(g.customFragmentShaderID)),g.defines!==void 0)for(let N in g.defines)_.push(N),_.push(g.defines[N]);return g.isRawShaderMaterial===!1&&(p(_,g),m(_,g),_.push(i.outputColorSpace)),_.push(g.customProgramCacheKey),_.join()}function p(g,_){g.push(_.precision),g.push(_.outputColorSpace),g.push(_.envMapMode),g.push(_.envMapPMREM),g.push(_.envMapMaxLod),g.push(_.envMapSize),g.push(_.mapUv),g.push(_.alphaMapUv),g.push(_.lightMapUv),g.push(_.aoMapUv),g.push(_.bumpMapUv),g.push(_.normalMapUv),g.push(_.displacementMapUv),g.push(_.emissiveMapUv),g.push(_.metalnessMapUv),g.push(_.roughnessMapUv),g.push(_.anisotropyMapUv),g.push(_.clearcoatMapUv),g.push(_.clearcoatNormalMapUv),g.push(_.clearcoatRoughnessMapUv),g.push(_.diffuseRoughnessMapUv),g.push(_.iridescenceMapUv),g.push(_.iridescenceThicknessMapUv),g.push(_.sheenColorMapUv),g.push(_.sheenRoughnessMapUv),g.push(_.specularMapUv),g.push(_.specularColorMapUv),g.push(_.specularIntensityMapUv),g.push(_.transmissionMapUv),g.push(_.thicknessMapUv),g.push(_.combine),g.push(_.fogExp2),g.push(_.sizeAttenuation),g.push(_.morphTargetsCount),g.push(_.numSunLights),g.push(_.numDirLights),g.push(_.numPointLights),g.push(_.numSpotLights),g.push(_.numSpotLightMaps),g.push(_.numHemiLights),g.push(_.numRectAreaLights),g.push(_.numSunLightShadows),g.push(_.numDirLightShadows),g.push(_.numPointLightShadows),g.push(_.numSpotLightShadows),g.push(_.numSpotLightShadowsWithMaps),g.push(_.numLightProbes),g.push(_.numLightProbeGrids),g.push(_.shadowMapType),g.push(_.toneMapping),g.push(_.numClippingPlanes),g.push(_.numClipIntersection),g.push(_.depthPacking)}function m(g,_){a.disableAll(),_.instancing&&a.enable(0),_.instancingColor&&a.enable(1),_.instancingMorph&&a.enable(2),_.matcap&&a.enable(3),_.envMap&&a.enable(4),_.normalMapObjectSpace&&a.enable(5),_.normalMapTangentSpace&&a.enable(6),_.clearcoat&&a.enable(7),_.iridescence&&a.enable(8),_.alphaTest&&a.enable(9),_.vertexColors&&a.enable(10),_.vertexAlphas&&a.enable(11),_.vertexUv1s&&a.enable(12),_.vertexUv2s&&a.enable(13),_.vertexUv3s&&a.enable(14),_.vertexTangents&&a.enable(15),_.anisotropy&&a.enable(16),_.alphaHash&&a.enable(17),_.batching&&a.enable(18),_.dispersion&&a.enable(19),_.retroreflection&&a.enable(24),_.diffuseRoughness&&a.enable(25),_.batchingColor&&a.enable(20),_.gradientMap&&a.enable(21),_.packedNormalMap&&a.enable(22),_.vertexNormals&&a.enable(23),g.push(a.mask),a.disableAll(),_.fog&&a.enable(0),_.useFog&&a.enable(1),_.flatShading&&a.enable(2),_.logarithmicDepthBuffer&&a.enable(3),_.reversedDepthBuffer&&a.enable(4),_.skinning&&a.enable(5),_.morphTargets&&a.enable(6),_.morphNormals&&a.enable(7),_.morphColors&&a.enable(8),_.premultipliedAlpha&&a.enable(9),_.shadowMapEnabled&&a.enable(10),_.doubleSided&&a.enable(11),_.flipSided&&a.enable(12),_.useDepthPacking&&a.enable(13),_.dithering&&a.enable(14),_.transmission&&a.enable(15),_.sheen&&a.enable(16),_.opaque&&a.enable(17),_.pointsUvs&&a.enable(18),_.decodeVideoTexture&&a.enable(19),_.decodeVideoTextureEmissive&&a.enable(20),_.alphaToCoverage&&a.enable(21),_.numLightProbeGrids>0&&a.enable(22),_.hasPositionAttribute&&a.enable(23),g.push(a.mask)}function b(g){let _=u[g.type],N;if(_){let P=vn[_];N=mh.clone(P.uniforms)}else N=g.uniforms;return N}function A(g,_){let N=h.get(_);return N!==void 0?++N.usedTimes:(N=new Gg(i,_,g,s),c.push(N),h.set(_,N)),N}function S(g){if(--g.usedTimes===0){let _=c.indexOf(g);c[_]=c[c.length-1],c.pop(),h.delete(g.cacheKey),g.destroy()}}function T(g){o.remove(g)}function E(){o.dispose()}return{getParameters:x,getProgramCacheKey:M,getUniforms:b,acquireProgram:A,releaseProgram:S,releaseShaderCache:T,programs:c,dispose:E}}function Jg(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function qg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Nh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Uh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function o(u,d,x,M,p,m){let b=i[e];return b===void 0?(b={id:u.id,object:u,geometry:d,material:x,materialVariant:a(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:m},i[e]=b):(b.id=u.id,b.object=u,b.geometry=d,b.material=x,b.materialVariant=a(u),b.groupOrder=M,b.renderOrder=u.renderOrder,b.z=p,b.group=m),e++,b}function l(u,d,x,M,p,m,b){b.reversedDepth===!0&&(p=-p);let A=o(u,d,x,M,p,m);x.transmission>0?n.push(A):x.transparent===!0?s.push(A):t.push(A)}function c(u,d,x,M,p,m){let b=o(u,d,x,M,p,m);x.transmission>0?n.unshift(b):x.transparent===!0?s.unshift(b):t.unshift(b)}function h(u,d){t.length>1&&t.sort(u||qg),n.length>1&&n.sort(d||Nh),s.length>1&&s.sort(d||Nh)}function f(){for(let u=e,d=i.length;u<d;u++){let x=i[u];if(x.id===null)break;x.id=null,x.object=null,x.geometry=null,x.material=null,x.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:f,sort:h}}function Zg(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Uh,i.set(n,[a])):s>=r.length?(a=new Uh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Kg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new D,color:new De};break;case"SpotLight":t={position:new D,direction:new D,color:new De,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new De,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new De,groundColor:new De};break;case"RectAreaLight":t={color:new De,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function jg(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new we,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}function $g(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function e0(i){let e=new Kg,t=jg(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);let s=new D,r=new tt,a=new tt;function o(c){let h=0,f=0,u=0;for(let O=0;O<9;O++)n.probe[O].set(0,0,0);let d=0,x=0,M=0,p=0,m=0,b=0,A=0,S=0,T=0,E=0,g=0,_=0,N=0,P=0;c.sort($g);for(let O=0,G=c.length;O<G;O++){let R=c[O],V=R.color,Y=R.intensity,H=R.distance,te=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Zn?te=R.shadow.map.texture:te=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=V.r*Y,f+=V.g*Y,u+=V.b*Y;else if(R.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(R.sh.coefficients[X],Y);P++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,$=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[x]=$,n.sunShadowMap[x]=te;let Se=Q.getViewportCount();for(let Fe=0;Fe<Se;Fe++)n.sunShadowMatrix[M+Fe]=Q.getMatrix(Fe),n.sunShadowCascade[M+Fe]=Q._cascadeData[Fe];M+=Se,x++}n.sun[d]=X,d++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Q=R.shadow,$=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.directionalShadow[p]=$,n.directionalShadowMap[p]=te,n.directionalShadowMatrix[p]=R.shadow.matrix,T++}n.directional[p]=X,p++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(V).multiplyScalar(Y),X.distance=H,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,n.spot[b]=X;let Q=R.shadow;if(R.map&&(n.spotLightMap[_]=R.map,_++,Q.updateMatrices(R),R.castShadow&&N++),n.spotLightMatrix[b]=Q.matrix,R.castShadow){let $=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,n.spotShadow[b]=$,n.spotShadowMap[b]=te,g++}b++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(V).multiplyScalar(Y),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),n.rectArea[A]=X,A++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let Q=R.shadow,$=t.get(R);$.shadowIntensity=Q.intensity,$.shadowBias=Q.bias,$.shadowNormalBias=Q.normalBias,$.shadowRadius=Q.radius,$.shadowMapSize=Q.mapSize,$.shadowCameraNear=Q.camera.near,$.shadowCameraFar=Q.camera.far,n.pointShadow[m]=$,n.pointShadowMap[m]=te,n.pointShadowMatrix[m]=R.shadow.matrix,E++}n.point[m]=X,m++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(Y),X.groundColor.copy(R.groundColor).multiplyScalar(Y),n.hemi[S]=X,S++}}A>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=fe.LTC_FLOAT_1,n.rectAreaLTC2=fe.LTC_FLOAT_2):(n.rectAreaLTC1=fe.LTC_HALF_1,n.rectAreaLTC2=fe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let F=n.hash;(F.sunLength!==d||F.directionalLength!==p||F.pointLength!==m||F.spotLength!==b||F.rectAreaLength!==A||F.hemiLength!==S||F.numSunShadows!==x||F.numDirectionalShadows!==T||F.numPointShadows!==E||F.numSpotShadows!==g||F.numSpotMaps!==_||F.numLightProbes!==P)&&(n.sun.length=d,n.directional.length=p,n.spot.length=b,n.rectArea.length=A,n.point.length=m,n.hemi.length=S,n.sunShadow.length=x,n.sunShadowMap.length=x,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=g,n.spotShadowMap.length=g,n.spotLightMatrix.length=g+_-N,n.spotLightMap.length=_,n.numSpotLightShadowsWithMaps=N,n.numLightProbes=P,F.sunLength=d,F.directionalLength=p,F.pointLength=m,F.spotLength=b,F.rectAreaLength=A,F.hemiLength=S,F.numSunShadows=x,F.numDirectionalShadows=T,F.numPointShadows=E,F.numSpotShadows=g,F.numSpotMaps=_,F.numLightProbes=P,n.version=Qg++)}function l(c,h){let f=0,u=0,d=0,x=0,M=0,p=0,m=h.matrixWorldInverse;for(let b=0,A=c.length;b<A;b++){let S=c[b];if(S.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),f++}else if(S.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),u++}else if(S.isSpotLight){let T=n.spot[x];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),T.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(m),x++}else if(S.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),T.halfWidth.set(S.width*.5,0,0),T.halfHeight.set(0,S.height*.5,0),T.halfWidth.applyMatrix4(a),T.halfHeight.applyMatrix4(a),M++}else if(S.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(S.matrixWorld),T.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(S.matrixWorld),T.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Bh(i){let e=new e0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function a(f){f.isLightProbeGrid?s.push(f):t.push(f)}function o(f){n.push(f)}function l(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function c(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function t0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Bh(i),e.set(s,[o])):r>=a.length?(o=new Bh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}function a0(i,e,t){let n=new Gn,s=new we,r=new we,a=new Qe,o=new Br,l=new Or,c={},h=t.maxTextureSize,f={[qn]:Lt,[Lt]:qn,[jt]:jt},u=new Kt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new we},radius:{value:4}},vertexShader:n0,fragmentShader:i0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let x=new Ht;x.setAttribute("position",new zt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new At(x,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ai;let m=this.type;this.render=function(E,g,_){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;this.type===Pc&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ai);let N=i.getRenderTarget(),P=i.getActiveCubeFace(),F=i.getActiveMipmapLevel(),O=i.state;O.setBlending(oi),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let G=m!==this.type;G&&g.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(V=>V.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,V=E.length;R<V;R++){let Y=E[R],H=Y.shadow;if(H===void 0){Ce("WebGLShadowMap:",Y,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);let te=H.getFrameExtents();s.multiply(te),r.copy(H.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,H.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,H.mapSize.y=r.y));let X=i.state.buffers.depth.getReversed();if(H.camera._reversedDepth=X,H.map===null||G===!0){if(H.map!==null&&(H.map.depthTexture!==null&&(H.map.depthTexture.dispose(),H.map.depthTexture=null),H.map.dispose()),this.type===ki){if(Y.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}H.map=new kt(s.x,s.y,{format:Zn,type:ln,minFilter:It,magFilter:It,generateMipmaps:!1}),H.map.texture.name=Y.name+".shadowMap",H.map.depthTexture=new In(s.x,s.y,on),H.map.depthTexture.name=Y.name+".shadowMapDepth",H.map.depthTexture.format=Cn,H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt}else Y.isPointLight?(H.map=new Us(s.x),H.map.depthTexture=new ms(s.x,an)):(H.map=new kt(s.x,s.y),H.map.depthTexture=new In(s.x,s.y,an)),H.map.depthTexture.name=Y.name+".shadowMap",H.map.depthTexture.format=Cn,this.type===ai?(H.map.depthTexture.compareFunction=X?Ko:Zo,H.map.depthTexture.minFilter=It,H.map.depthTexture.magFilter=It):(H.map.depthTexture.compareFunction=null,H.map.depthTexture.minFilter=vt,H.map.depthTexture.magFilter=vt);H.camera.updateProjectionMatrix()}H.map.isWebGLCubeRenderTarget!==!0&&(H.map.width!==s.x||H.map.height!==s.y)&&H.map.setSize(s.x,s.y);let Q=H.map.isWebGLCubeRenderTarget?6:H.getViewportCount();Y.isPointLight!==!0&&H.updateMatrices(Y,_);let $=(H.camera.layers.mask&4294967294)!==0?H.camera.layers:_.layers;for(let Se=0;Se<Q;Se++){let Fe=H.getCamera(Se);if(Y.isPointLight){let Z=H.camera,pe=H.matrix,ve=Y.distance||Z.far;ve!==Z.far&&(Z.far=ve,Z.updateProjectionMatrix()),Fs.setFromMatrixPosition(Y.matrixWorld),Z.position.copy(Fs),ml.copy(Z.position),ml.add(s0[Se]),Z.up.copy(r0[Se]),Z.lookAt(ml),Z.updateMatrixWorld(),pe.makeTranslation(-Fs.x,-Fs.y,-Fs.z),Oh.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),H._frustum.setFromProjectionMatrix(Oh,Z.coordinateSystem,Z.reversedDepth)}if(H.map.isWebGLCubeRenderTarget)i.setRenderTarget(H.map,Se),i.clear();else{Se===0&&(i.setRenderTarget(H.map),i.clear());let Z=H.getViewport(Se);a.set(r.x*Z.x,r.y*Z.y,r.x*Z.z,r.y*Z.w),O.viewport(a)}n=H.getFrustum(Se),S(g,_,Fe,Y,$,this.type)}H.isPointLightShadow!==!0&&this.type===ki&&b(H,_),H.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(N,P,F)};function b(E,g){let _=e.update(M);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null?E.mapPass=new kt(s.x,s.y,{format:Zn,type:ln}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(g,null,_,u,M,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(g,null,_,d,M,null)}function A(E,g,_,N){let P=null,F=_.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(F!==void 0)P=F;else if(P=_.isPointLight===!0?l:o,i.localClippingEnabled&&g.clipShadows===!0&&Array.isArray(g.clippingPlanes)&&g.clippingPlanes.length!==0||g.displacementMap&&g.displacementScale!==0||g.alphaMap&&g.alphaTest>0||g.map&&g.alphaTest>0||g.alphaToCoverage===!0){let O=P.uuid,G=g.uuid,R=c[O];R===void 0&&(R={},c[O]=R);let V=R[G];V===void 0&&(V=P.clone(),R[G]=V,g.addEventListener("dispose",T)),P=V}if(P.visible=g.visible,P.wireframe=g.wireframe,N===ki?P.side=g.shadowSide!==null?g.shadowSide:g.side:P.side=g.shadowSide!==null?g.shadowSide:f[g.side],P.alphaMap=g.alphaMap,P.alphaTest=g.alphaToCoverage===!0?.5:g.alphaTest,P.map=g.map,P.clipShadows=g.clipShadows,P.clippingPlanes=g.clippingPlanes,P.clipIntersection=g.clipIntersection,P.displacementMap=g.displacementMap,P.displacementScale=g.displacementScale,P.displacementBias=g.displacementBias,P.wireframeLinewidth=g.wireframeLinewidth,P.linewidth=g.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let O=i.properties.get(P);O.light=_}return P}function S(E,g,_,N,P,F){if(E.visible===!1)return;if(E.layers.test(P)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&F===ki)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,E.matrixWorld);let R=e.update(E),V=E.material;if(Array.isArray(V)){let Y=R.groups;for(let H=0,te=Y.length;H<te;H++){let X=Y[H],Q=V[X.materialIndex];if(Q&&Q.visible){let $=A(E,Q,N,F);E.onBeforeShadow(i,E,g,_,R,$,X),i.renderBufferDirect(_,null,R,$,E,X),E.onAfterShadow(i,E,g,_,R,$,X)}}}else if(V.visible){let Y=A(E,V,N,F);E.onBeforeShadow(i,E,g,_,R,Y,null),i.renderBufferDirect(_,null,R,Y,E,null),E.onAfterShadow(i,E,g,_,R,Y,null)}}let G=E.children;for(let R=0,V=G.length;R<V;R++)S(G[R],g,_,N,P,F)}function T(E){E.target.removeEventListener("dispose",T);for(let _ in c){let N=c[_],P=E.target.uuid;P in N&&(N[P].dispose(),delete N[P])}}}function o0(i,e){function t(){let C=!1,K=new Qe,W=null,oe=new Qe(0,0,0,0);return{setMask:function(ie){W!==ie&&!C&&(i.colorMask(ie,ie,ie,ie),W=ie)},setLocked:function(ie){C=ie},setClear:function(ie,re,be,Oe,ne){ne===!0&&(ie*=Oe,re*=Oe,be*=Oe),K.set(ie,re,be,Oe),oe.equals(K)===!1&&(i.clearColor(ie,re,be,Oe),oe.copy(K))},reset:function(){C=!1,W=null,oe.set(-1,0,0,0)}}}function n(){let C=!1,K=!1,W=null,oe=null,ie=null;return{setReversed:function(re){if(K!==re){let be=e.get("EXT_clip_control");re?be.clipControlEXT(be.LOWER_LEFT_EXT,be.ZERO_TO_ONE_EXT):be.clipControlEXT(be.LOWER_LEFT_EXT,be.NEGATIVE_ONE_TO_ONE_EXT),K=re;let Oe=ie;ie=null,this.setClear(Oe)}},getReversed:function(){return K},setTest:function(re){re?me(i.DEPTH_TEST):Ue(i.DEPTH_TEST)},setMask:function(re){W!==re&&!C&&(i.depthMask(re),W=re)},setFunc:function(re){if(K&&(re=uh[re]),oe!==re){switch(re){case dr:i.depthFunc(i.NEVER);break;case fr:i.depthFunc(i.ALWAYS);break;case pr:i.depthFunc(i.LESS);break;case Ii:i.depthFunc(i.LEQUAL);break;case mr:i.depthFunc(i.EQUAL);break;case gr:i.depthFunc(i.GEQUAL);break;case xr:i.depthFunc(i.GREATER);break;case vr:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}oe=re}},setLocked:function(re){C=re},setClear:function(re){ie!==re&&(ie=re,K&&(re=1-re),i.clearDepth(re))},reset:function(){C=!1,W=null,oe=null,ie=null,K=!1}}}function s(){let C=!1,K=null,W=null,oe=null,ie=null,re=null,be=null,Oe=null,ne=null;return{setTest:function(Ee){C||(Ee?me(i.STENCIL_TEST):Ue(i.STENCIL_TEST))},setMask:function(Ee){K!==Ee&&!C&&(i.stencilMask(Ee),K=Ee)},setFunc:function(Ee,Be,de){(W!==Ee||oe!==Be||ie!==de)&&(i.stencilFunc(Ee,Be,de),W=Ee,oe=Be,ie=de)},setOp:function(Ee,Be,de){(re!==Ee||be!==Be||Oe!==de)&&(i.stencilOp(Ee,Be,de),re=Ee,be=Be,Oe=de)},setLocked:function(Ee){C=Ee},setClear:function(Ee){ne!==Ee&&(i.clearStencil(Ee),ne=Ee)},reset:function(){C=!1,K=null,W=null,oe=null,ie=null,re=null,be=null,Oe=null,ne=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},f={},u={},d=new WeakMap,x=[],M=null,p=!1,m=null,b=null,A=null,S=null,T=null,E=null,g=null,_=new De(0,0,0),N=0,P=!1,F=null,O=null,G=null,R=null,V=null,Y=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),H=!1,te=0,X=i.getParameter(i.VERSION);X.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(X)[1]),H=te>=1):X.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),H=te>=2);let Q=null,$={},Se=i.getParameter(i.SCISSOR_BOX),Fe=i.getParameter(i.VIEWPORT),Z=new Qe().fromArray(Se),pe=new Qe().fromArray(Fe);function ve(C,K,W,oe){let ie=new Uint8Array(4),re=i.createTexture();i.bindTexture(C,re),i.texParameteri(C,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(C,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let be=0;be<W;be++)C===i.TEXTURE_3D||C===i.TEXTURE_2D_ARRAY?i.texImage3D(K,0,i.RGBA,1,1,oe,0,i.RGBA,i.UNSIGNED_BYTE,ie):i.texImage2D(K+be,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ie);return re}let Ae={};Ae[i.TEXTURE_2D]=ve(i.TEXTURE_2D,i.TEXTURE_2D,1),Ae[i.TEXTURE_CUBE_MAP]=ve(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ae[i.TEXTURE_2D_ARRAY]=ve(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Ae[i.TEXTURE_3D]=ve(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),me(i.DEPTH_TEST),a.setFunc(Ii),Dt(!1),st(To),me(i.CULL_FACE),yt(oi);function me(C){h[C]!==!0&&(i.enable(C),h[C]=!0)}function Ue(C){h[C]!==!1&&(i.disable(C),h[C]=!1)}function ot(C,K){return u[C]!==K?(i.bindFramebuffer(C,K),u[C]=K,C===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=K),C===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=K),!0):!1}function Re(C,K){let W=x,oe=!1;if(C){W=d.get(K),W===void 0&&(W=[],d.set(K,W));let ie=C.textures;if(W.length!==ie.length||W[0]!==i.COLOR_ATTACHMENT0){for(let re=0,be=ie.length;re<be;re++)W[re]=i.COLOR_ATTACHMENT0+re;W.length=ie.length,oe=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,oe=!0);oe&&i.drawBuffers(W)}function qe(C){return M!==C?(i.useProgram(C),M=C,!0):!1}let Ke={[li]:i.FUNC_ADD,[Dc]:i.FUNC_SUBTRACT,[Fc]:i.FUNC_REVERSE_SUBTRACT};Ke[Nc]=i.MIN,Ke[Uc]=i.MAX;let He={[Bc]:i.ZERO,[Oc]:i.ONE,[zc]:i.SRC_COLOR,[Po]:i.SRC_ALPHA,[Xc]:i.SRC_ALPHA_SATURATE,[Gc]:i.DST_COLOR,[Hc]:i.DST_ALPHA,[kc]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Wc]:i.ONE_MINUS_DST_COLOR,[Vc]:i.ONE_MINUS_DST_ALPHA,[Yc]:i.CONSTANT_COLOR,[Jc]:i.ONE_MINUS_CONSTANT_COLOR,[qc]:i.CONSTANT_ALPHA,[Zc]:i.ONE_MINUS_CONSTANT_ALPHA};function yt(C,K,W,oe,ie,re,be,Oe,ne,Ee){if(C===oi){p===!0&&(Ue(i.BLEND),p=!1);return}if(p===!1&&(me(i.BLEND),p=!0),C!==Lc){if(C!==m||Ee!==P){if((b!==li||T!==li)&&(i.blendEquation(i.FUNC_ADD),b=li,T=li),Ee)switch(C){case Hi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFunc(i.ONE,i.ONE);break;case Ro:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Io:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ie("WebGLState: Invalid blending: ",C);break}else switch(C){case Hi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Co:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ro:Ie("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Io:Ie("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ie("WebGLState: Invalid blending: ",C);break}A=null,S=null,E=null,g=null,_.set(0,0,0),N=0,m=C,P=Ee}return}ie=ie||K,re=re||W,be=be||oe,(K!==b||ie!==T)&&(i.blendEquationSeparate(Ke[K],Ke[ie]),b=K,T=ie),(W!==A||oe!==S||re!==E||be!==g)&&(i.blendFuncSeparate(He[W],He[oe],He[re],He[be]),A=W,S=oe,E=re,g=be),(Oe.equals(_)===!1||ne!==N)&&(i.blendColor(Oe.r,Oe.g,Oe.b,ne),_.copy(Oe),N=ne),m=C,P=!1}function ht(C,K){C.side===jt?Ue(i.CULL_FACE):me(i.CULL_FACE);let W=C.side===Lt;K&&(W=!W),Dt(W),C.blending===Hi&&C.transparent===!1?yt(oi):yt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let oe=C.stencilWrite;o.setTest(oe),oe&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),pt(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?me(i.SAMPLE_ALPHA_TO_COVERAGE):Ue(i.SAMPLE_ALPHA_TO_COVERAGE)}function Dt(C){F!==C&&(C?i.frontFace(i.CW):i.frontFace(i.CCW),F=C)}function st(C){C!==Rc?(me(i.CULL_FACE),C!==O&&(C===To?i.cullFace(i.BACK):C===Ic?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ue(i.CULL_FACE),O=C}function un(C){C!==G&&(H&&i.lineWidth(C),G=C)}function pt(C,K,W){C?(me(i.POLYGON_OFFSET_FILL),(R!==K||V!==W)&&(R=K,V=W,a.getReversed()&&(K=-K,W=-W),i.polygonOffset(K,W))):Ue(i.POLYGON_OFFSET_FILL)}function Gt(C){C?me(i.SCISSOR_TEST):Ue(i.SCISSOR_TEST)}function Wt(C){C===void 0&&(C=i.TEXTURE0+Y-1),Q!==C&&(i.activeTexture(C),Q=C)}function Xt(C,K,W){W===void 0&&(Q===null?W=i.TEXTURE0+Y-1:W=Q);let oe=$[W];oe===void 0&&(oe={type:void 0,texture:void 0},$[W]=oe),(oe.type!==C||oe.texture!==K)&&(Q!==W&&(i.activeTexture(W),Q=W),i.bindTexture(C,K||Ae[C]),oe.type=C,oe.texture=K)}function L(){let C=$[Q];C!==void 0&&C.type!==void 0&&(i.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function Yt(){try{i.compressedTexImage2D(...arguments)}catch(C){Ie("WebGLState:",C)}}function nt(){try{i.compressedTexImage3D(...arguments)}catch(C){Ie("WebGLState:",C)}}function it(){try{i.texSubImage2D(...arguments)}catch(C){Ie("WebGLState:",C)}}function ue(){try{i.texSubImage3D(...arguments)}catch(C){Ie("WebGLState:",C)}}function ut(){try{i.compressedTexSubImage2D(...arguments)}catch(C){Ie("WebGLState:",C)}}function Te(){try{i.compressedTexSubImage3D(...arguments)}catch(C){Ie("WebGLState:",C)}}function Le(){try{i.texStorage2D(...arguments)}catch(C){Ie("WebGLState:",C)}}function w(){try{i.texStorage3D(...arguments)}catch(C){Ie("WebGLState:",C)}}function v(){try{i.texImage2D(...arguments)}catch(C){Ie("WebGLState:",C)}}function B(){try{i.texImage3D(...arguments)}catch(C){Ie("WebGLState:",C)}}function ee(C){return f[C]!==void 0?f[C]:i.getParameter(C)}function j(C,K){f[C]!==K&&(i.pixelStorei(C,K),f[C]=K)}function se(C){Z.equals(C)===!1&&(i.scissor(C.x,C.y,C.z,C.w),Z.copy(C))}function ce(C){pe.equals(C)===!1&&(i.viewport(C.x,C.y,C.z,C.w),pe.copy(C))}function J(C,K){let W=c.get(K);W===void 0&&(W=new WeakMap,c.set(K,W));let oe=W.get(C);oe===void 0&&(oe=i.getUniformBlockIndex(K,C.name),i.uniformBlockBinding(K,oe,oe),W.set(C,oe))}function q(C,K,W){let ie=c.get(K).get(C);l[ie]!==W&&(i.bindBufferBase(i.UNIFORM_BUFFER,ie,W),l[ie]=W)}function ae(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,$={},u={},l={},d=new WeakMap,x=[],M=null,p=!1,m=null,b=null,A=null,S=null,T=null,E=null,g=null,_=new De(0,0,0),N=0,P=!1,F=null,O=null,G=null,R=null,V=null,Z.set(0,0,i.canvas.width,i.canvas.height),pe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:me,disable:Ue,bindFramebuffer:ot,drawBuffers:Re,useProgram:qe,setBlending:yt,setMaterial:ht,setFlipSided:Dt,setCullFace:st,setLineWidth:un,setPolygonOffset:pt,setScissorTest:Gt,activeTexture:Wt,bindTexture:Xt,unbindTexture:L,compressedTexImage2D:Yt,compressedTexImage3D:nt,texImage2D:v,texImage3D:B,pixelStorei:j,getParameter:ee,updateUBOMapping:J,uniformBlockBinding:q,texStorage2D:Le,texStorage3D:w,texSubImage2D:it,texSubImage3D:ue,compressedTexSubImage2D:ut,compressedTexSubImage3D:Te,scissor:se,viewport:ce,reset:ae}}function l0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new we,h=new WeakMap,f=new Set,u,d=new WeakMap,x=new Set,M=new FinalizationRegistry(w=>x.delete(w)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(w,v){return p?new OffscreenCanvas(w,v):os("canvas")}function b(w,v,B){let ee=1,j=Le(w);if((j.width>B||j.height>B)&&(ee=B/Math.max(j.width,j.height)),ee<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){let se=Math.floor(ee*j.width),ce=Math.floor(ee*j.height);u===void 0&&(u=m(se,ce));let J=v?m(se,ce):u;return J.width=se,J.height=ce,J.getContext("2d").drawImage(w,0,0,se,ce),Ce("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+se+"x"+ce+")."),J}else return"data"in w&&Ce("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),w;return w}function A(w){return w.generateMipmaps}function S(w){i.generateMipmap(w)}function T(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function E(w,v,B,ee,j,se=!1){if(w!==null){if(i[w]!==void 0)return i[w];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let ce;ee&&(ce=e.get("EXT_texture_norm16"),ce||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let J=v;if(v===i.RED&&(B===i.FLOAT&&(J=i.R32F),B===i.HALF_FLOAT&&(J=i.R16F),B===i.UNSIGNED_BYTE&&(J=i.R8),B===i.UNSIGNED_SHORT&&ce&&(J=ce.R16_EXT),B===i.SHORT&&ce&&(J=ce.R16_SNORM_EXT)),v===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.R8UI),B===i.UNSIGNED_SHORT&&(J=i.R16UI),B===i.UNSIGNED_INT&&(J=i.R32UI),B===i.BYTE&&(J=i.R8I),B===i.SHORT&&(J=i.R16I),B===i.INT&&(J=i.R32I)),v===i.RG&&(B===i.FLOAT&&(J=i.RG32F),B===i.HALF_FLOAT&&(J=i.RG16F),B===i.UNSIGNED_BYTE&&(J=i.RG8),B===i.UNSIGNED_SHORT&&ce&&(J=ce.RG16_EXT),B===i.SHORT&&ce&&(J=ce.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RG8UI),B===i.UNSIGNED_SHORT&&(J=i.RG16UI),B===i.UNSIGNED_INT&&(J=i.RG32UI),B===i.BYTE&&(J=i.RG8I),B===i.SHORT&&(J=i.RG16I),B===i.INT&&(J=i.RG32I)),v===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGB8UI),B===i.UNSIGNED_SHORT&&(J=i.RGB16UI),B===i.UNSIGNED_INT&&(J=i.RGB32UI),B===i.BYTE&&(J=i.RGB8I),B===i.SHORT&&(J=i.RGB16I),B===i.INT&&(J=i.RGB32I)),v===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(J=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(J=i.RGBA16UI),B===i.UNSIGNED_INT&&(J=i.RGBA32UI),B===i.BYTE&&(J=i.RGBA8I),B===i.SHORT&&(J=i.RGBA16I),B===i.INT&&(J=i.RGBA32I)),v===i.RGB&&(B===i.UNSIGNED_SHORT&&ce&&(J=ce.RGB16_EXT),B===i.SHORT&&ce&&(J=ce.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(J=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(J=i.R11F_G11F_B10F)),v===i.RGBA){let q=se?as:We.getTransfer(j);B===i.FLOAT&&(J=i.RGBA32F),B===i.HALF_FLOAT&&(J=i.RGBA16F),B===i.UNSIGNED_BYTE&&(J=q===Je?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&ce&&(J=ce.RGBA16_EXT),B===i.SHORT&&ce&&(J=ce.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(J=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(J=i.RGB5_A1)}return(J===i.R16F||J===i.R32F||J===i.RG16F||J===i.RG32F||J===i.RGBA16F||J===i.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function g(w,v){let B;return w?v===null||v===an||v===hi?B=i.DEPTH24_STENCIL8:v===on?B=i.DEPTH32F_STENCIL8:v===Gi&&(B=i.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===an||v===hi?B=i.DEPTH_COMPONENT24:v===on?B=i.DEPTH_COMPONENT32F:v===Gi&&(B=i.DEPTH_COMPONENT16),B}function _(w,v){return A(w)===!0||w.isFramebufferTexture&&w.minFilter!==vt&&w.minFilter!==It?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function N(w){let v=new WeakRef(w);n.get(w).__ref=v,x.add(v),M.register(w,v,v)}function P(w){let v=n.get(w).__ref;v!==void 0&&(x.delete(v),M.unregister(v))}function F(w){G(w.target)}function O(w){R(w.target)}function G(w){w.removeEventListener("dispose",F),P(w),Y(w),w.isVideoTexture&&h.delete(w),w.isHTMLTexture&&f.delete(w)}function R(w){w.removeEventListener("dispose",O),P(w),te(w)}function V(){for(let w of x){let v=w.deref();v!==void 0&&(v.isRenderTarget===!0?R(v):G(v))}x.clear(),f.clear()}function Y(w){let v=n.get(w);if(v.__webglInit===void 0)return;let B=w.source,ee=d.get(B);if(ee){let j=ee[v.__cacheKey];j.usedTimes--,j.usedTimes===0&&H(w),Object.keys(ee).length===0&&d.delete(B)}n.remove(w)}function H(w){let v=n.get(w);i.deleteTexture(v.__webglTexture);let B=w.source,ee=d.get(B);delete ee[v.__cacheKey],a.memory.textures--}function te(w){let v=n.get(w);v.__depthDisposeCallback&&v.__depthDisposeCallback();let B=w.depthTexture;if(B&&B.renderTarget===w&&G(B),w.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(v.__webglFramebuffer[j]))for(let se=0;se<v.__webglFramebuffer[j].length;se++)i.deleteFramebuffer(v.__webglFramebuffer[j][se]);else i.deleteFramebuffer(v.__webglFramebuffer[j]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[j])}else{if(Array.isArray(v.__webglFramebuffer))for(let j=0;j<v.__webglFramebuffer.length;j++)i.deleteFramebuffer(v.__webglFramebuffer[j]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let j=0;j<v.__webglColorRenderbuffer.length;j++)v.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[j]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ee=w.textures;for(let j=0,se=ee.length;j<se;j++){let ce=n.get(ee[j]);ce.__webglTexture&&(i.deleteTexture(ce.__webglTexture),a.memory.textures--),n.remove(ee[j])}n.remove(w)}let X=0;function Q(){X=0}function $(){return X}function Se(w){X=w}function Fe(){let w=X;return w>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(w+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,w}function Z(w){let v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.mipmapsAutoUpdate),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function pe(w,v){let B=n.get(w);if(w.isVideoTexture&&ut(w),w.isRenderTargetTexture===!1&&w.isExternalTexture!==!0&&w.version>0&&B.__version!==w.version){let ee=w.image;if(ee===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(B,w,v);return}}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+v)}function ve(w,v){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ht(B,w,v);return}else w.isExternalTexture&&(B.__webglTexture=w.sourceTexture?w.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+v)}function Ae(w,v){let B=n.get(w);if(w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){ht(B,w,v);return}t.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+v)}function me(w,v){let B=n.get(w);if(w.version>0&&B.__version!==w.version){Dt(B,w,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+v)}let Ue={[yr]:i.REPEAT,[pn]:i.CLAMP_TO_EDGE,[Mr]:i.MIRRORED_REPEAT},ot={[vt]:i.NEAREST,[Qc]:i.NEAREST_MIPMAP_NEAREST,[Ts]:i.NEAREST_MIPMAP_LINEAR,[It]:i.LINEAR,[ea]:i.LINEAR_MIPMAP_NEAREST,[Pn]:i.LINEAR_MIPMAP_LINEAR},Re={[nh]:i.NEVER,[jo]:i.ALWAYS,[ih]:i.LESS,[Zo]:i.LEQUAL,[sh]:i.EQUAL,[Ko]:i.GEQUAL,[rh]:i.GREATER,[ah]:i.NOTEQUAL};function qe(w,v){if(v.type===on&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===It||v.magFilter===ea||v.magFilter===Ts||v.magFilter===Pn||v.minFilter===It||v.minFilter===ea||v.minFilter===Ts||v.minFilter===Pn)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,Ue[v.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,Ue[v.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,Ue[v.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,ot[v.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,ot[v.minFilter]),v.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,Re[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===vt||v.minFilter!==Ts&&v.minFilter!==Pn||v.type===on&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ke(w,v){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",F),N(v));let ee=v.source,j=d.get(ee);j===void 0&&(j={},d.set(ee,j));let se=Z(v);if(se!==w.__cacheKey){j[se]===void 0&&(j[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),j[se].usedTimes++;let ce=j[w.__cacheKey];ce!==void 0&&(j[w.__cacheKey].usedTimes--,ce.usedTimes===0&&H(v)),w.__cacheKey=se,w.__webglTexture=j[se].texture}return B}function He(w,v,B){return Math.floor(Math.floor(w/B)/v)}function yt(w,v,B,ee){let se=w.updateRanges;if(se.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,B,ee,v.data);else{se.sort((C,K)=>C.start-K.start);let ce=0;for(let C=1;C<se.length;C++){let K=se[ce],W=se[C],oe=K.start+K.count,ie=He(W.start,v.width,4),re=He(K.start,v.width,4);W.start<=oe+1&&ie===re&&He(W.start+W.count-1,v.width,4)===ie?K.count=Math.max(K.count,W.start+W.count-K.start):(++ce,se[ce]=W)}se.length=ce+1;let J=t.getParameter(i.UNPACK_ROW_LENGTH),q=t.getParameter(i.UNPACK_SKIP_PIXELS),ae=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let C=0,K=se.length;C<K;C++){let W=se[C],oe=Math.floor(W.start/4),ie=Math.ceil(W.count/4),re=oe%v.width,be=Math.floor(oe/v.width),Oe=ie,ne=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,re),t.pixelStorei(i.UNPACK_SKIP_ROWS,be),t.texSubImage2D(i.TEXTURE_2D,0,re,be,Oe,ne,B,ee,v.data)}w.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,J),t.pixelStorei(i.UNPACK_SKIP_PIXELS,q),t.pixelStorei(i.UNPACK_SKIP_ROWS,ae)}}function ht(w,v,B){let ee=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ee=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ee=i.TEXTURE_3D);let j=Ke(w,v),se=v.source;t.bindTexture(ee,w.__webglTexture,i.TEXTURE0+B);let ce=n.get(se);if(se.version!==ce.__version||j===!0){if(t.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let ne=We.getPrimaries(We.workingColorSpace),Ee=v.colorSpace===hn?null:We.getPrimaries(v.colorSpace),Be=v.colorSpace===hn||ne===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let q=b(v.image,!1,s.maxTextureSize);q=Te(v,q);let ae=r.convert(v.format,v.colorSpace),C=r.convert(v.type),K=E(v.internalFormat,ae,C,v.normalized,v.colorSpace,v.isVideoTexture);qe(ee,v);let W,oe=v.mipmaps,ie=v.isVideoTexture!==!0,re=ce.__version===void 0||j===!0,be=se.dataReady,Oe=_(v,q);if(v.isDepthTexture)K=g(v.format===Ln,v.type),re&&(ie?t.texStorage2D(i.TEXTURE_2D,1,K,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,K,q.width,q.height,0,ae,C,null));else if(v.isDataTexture)if(oe.length>0){ie&&re&&t.texStorage2D(i.TEXTURE_2D,Oe,K,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,C,W.data):t.texImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,ae,C,W.data);v.generateMipmaps=!1}else ie?(re&&t.texStorage2D(i.TEXTURE_2D,Oe,K,q.width,q.height),be&&yt(v,q,ae,C)):t.texImage2D(i.TEXTURE_2D,0,K,q.width,q.height,0,ae,C,q.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){ie&&re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,K,oe[0].width,oe[0].height,q.depth);for(let ne=0,Ee=oe.length;ne<Ee;ne++)if(W=oe[ne],v.format!==cn)if(ae!==null)if(ie){if(be)if(v.layerUpdates.size>0){let Be=ol(W.width,W.height,v.format,v.type);for(let de of v.layerUpdates){let Ze=W.data.subarray(de*Be/W.data.BYTES_PER_ELEMENT,(de+1)*Be/W.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,de,W.width,W.height,1,ae,Ze)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,q.depth,ae,W.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ne,K,W.width,W.height,q.depth,0,W.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?be&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ne,0,0,0,W.width,W.height,q.depth,ae,C,W.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ne,K,W.width,W.height,q.depth,0,ae,C,W.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{ie&&re&&t.texStorage2D(i.TEXTURE_2D,Oe,K,oe[0].width,oe[0].height);for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],v.format!==cn?ae!==null?ie?be&&t.compressedTexSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,W.data):t.compressedTexImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,W.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,W.width,W.height,ae,C,W.data):t.texImage2D(i.TEXTURE_2D,ne,K,W.width,W.height,0,ae,C,W.data)}else if(v.isDataArrayTexture)if(ie){if(re&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,K,q.width,q.height,q.depth),be)if(v.layerUpdates.size>0){let ne=ol(q.width,q.height,v.format,v.type);for(let Ee of v.layerUpdates){let Be=q.data.subarray(Ee*ne/q.data.BYTES_PER_ELEMENT,(Ee+1)*ne/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ee,q.width,q.height,1,ae,C,Be)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,ae,C,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,K,q.width,q.height,q.depth,0,ae,C,q.data);else if(v.isData3DTexture)ie?(re&&t.texStorage3D(i.TEXTURE_3D,Oe,K,q.width,q.height,q.depth),be&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,ae,C,q.data)):t.texImage3D(i.TEXTURE_3D,0,K,q.width,q.height,q.depth,0,ae,C,q.data);else if(v.isFramebufferTexture){if(re)if(ie)t.texStorage2D(i.TEXTURE_2D,Oe,K,q.width,q.height);else{let ne=q.width,Ee=q.height;for(let Be=0;Be<Oe;Be++)t.texImage2D(i.TEXTURE_2D,Be,K,ne,Ee,0,ae,C,null),ne>>=1,Ee>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let ne=i.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),q.parentNode!==ne){ne.appendChild(q),f.add(v),ne.onpaint=Ee=>{let Be=Ee.changedElements;for(let de of f)Be.includes(de.image)&&(de.needsUpdate=!0)},ne.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,q);else{let Be=i.RGBA,de=i.RGBA,Ze=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Be,de,Ze,q)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(oe.length>0){if(ie&&re){let ne=Le(oe[0]);t.texStorage2D(i.TEXTURE_2D,Oe,K,ne.width,ne.height)}for(let ne=0,Ee=oe.length;ne<Ee;ne++)W=oe[ne],ie?be&&t.texSubImage2D(i.TEXTURE_2D,ne,0,0,ae,C,W):t.texImage2D(i.TEXTURE_2D,ne,K,ae,C,W);v.generateMipmaps=!1}else if(ie){if(re){let ne=Le(q);t.texStorage2D(i.TEXTURE_2D,Oe,K,ne.width,ne.height)}be&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ae,C,q)}else t.texImage2D(i.TEXTURE_2D,0,K,ae,C,q);A(v)&&v.mipmapsAutoUpdate===!0&&S(ee),ce.__version=se.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function Dt(w,v,B){if(v.image.length!==6)return;let ee=Ke(w,v),j=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);let se=n.get(j);if(j.version!==se.__version||ee===!0){t.activeTexture(i.TEXTURE0+B);let ce=We.getPrimaries(We.workingColorSpace),J=v.colorSpace===hn?null:We.getPrimaries(v.colorSpace),q=v.colorSpace===hn||ce===J?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,q);let ae=v.isCompressedTexture||v.image[0].isCompressedTexture,C=v.image[0]&&v.image[0].isDataTexture,K=[];for(let de=0;de<6;de++)!ae&&!C?K[de]=b(v.image[de],!0,s.maxCubemapSize):K[de]=C?v.image[de].image:v.image[de],K[de]=Te(v,K[de]);let W=K[0],oe=r.convert(v.format,v.colorSpace),ie=r.convert(v.type),re=E(v.internalFormat,oe,ie,v.normalized,v.colorSpace),be=v.isVideoTexture!==!0,Oe=se.__version===void 0||ee===!0,ne=j.dataReady,Ee=_(v,W);qe(i.TEXTURE_CUBE_MAP,v);let Be;if(v.isDepthTexture){if(re=g(v.format===Ln,v.type),Oe)if(be)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,re,W.width,W.height);else for(let de=0;de<6;de++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,W.width,W.height,0,oe,ie,null)}else if(ae){be&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,W.width,W.height);for(let de=0;de<6;de++){Be=K[de].mipmaps;for(let Ze=0;Ze<Be.length;Ze++){let mt=Be[Ze];v.format!==cn?oe!==null?be?ne&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,mt.width,mt.height,oe,mt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,re,mt.width,mt.height,0,mt.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,0,0,mt.width,mt.height,oe,ie,mt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze,re,mt.width,mt.height,0,oe,ie,mt.data)}}}else{if(Be=v.mipmaps,be&&Oe){Be.length>0&&Ee++;let de=Le(K[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ee,re,de.width,de.height)}for(let de=0;de<6;de++)if(C){be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,K[de].width,K[de].height,oe,ie,K[de].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,K[de].width,K[de].height,0,oe,ie,K[de].data);for(let Ze=0;Ze<Be.length;Ze++){let Dn=Be[Ze].image[de].image;be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,Dn.width,Dn.height,oe,ie,Dn.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,re,Dn.width,Dn.height,0,oe,ie,Dn.data)}}else{be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,0,0,oe,ie,K[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,re,oe,ie,K[de]);for(let Ze=0;Ze<Be.length;Ze++){let mt=Be[Ze];be?ne&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,0,0,oe,ie,mt.image[de]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+de,Ze+1,re,oe,ie,mt.image[de])}}}A(v)&&v.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),se.__version=j.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function st(w,v,B,ee,j,se){let ce=r.convert(B.format,B.colorSpace),J=r.convert(B.type),q=E(B.internalFormat,ce,J,B.normalized,B.colorSpace),ae=n.get(v),C=n.get(B);if(C.__renderTarget=v,!ae.__hasExternalTextures){let K=Math.max(1,v.width>>se),W=Math.max(1,v.height>>se);j===i.TEXTURE_3D||j===i.TEXTURE_2D_ARRAY?t.texImage3D(j,se,q,K,W,v.depth,0,ce,J,null):t.texImage2D(j,se,q,K,W,0,ce,J,null)}t.bindFramebuffer(i.FRAMEBUFFER,w),ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ee,j,C.__webglTexture,0,it(v)):(j===i.TEXTURE_2D||j>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ee,j,C.__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function un(w,v,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),v.depthBuffer){let ee=v.depthTexture,j=ee&&ee.isDepthTexture?ee.type:null,se=g(v.stencilBuffer,j),ce=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ue(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),se,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),se,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,se,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,ce,i.RENDERBUFFER,w)}else{let ee=v.textures;for(let j=0;j<ee.length;j++){let se=ee[j],ce=r.convert(se.format,se.colorSpace),J=r.convert(se.type),q=E(se.internalFormat,ce,J,se.normalized,se.colorSpace);ue(v)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,it(v),q,v.width,v.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,it(v),q,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,q,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function pt(w,v,B){let ee=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let j=n.get(v.depthTexture);j.__renderTarget=v;let se=ee?v.depthTexture.image[0]:v.depthTexture.image;(!j.__webglTexture||se.width!==v.width||se.height!==v.height)&&(se.width=v.width,se.height=v.height,v.depthTexture.needsUpdate=!0),ee?me(v.depthTexture,0):pe(v.depthTexture,0);let ce=j.__webglTexture,J=it(v),q=ee?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ae=v.depthTexture.format===Ln?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===Cn)ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,q,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ae,q,ce,0);else if(v.depthTexture.format===Ln)ue(v)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ae,q,ce,0,J):i.framebufferTexture2D(i.FRAMEBUFFER,ae,q,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Gt(w){let v=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==w.depthTexture){let ee=w.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ee){let j=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ee.removeEventListener("dispose",j)};ee.addEventListener("dispose",j),v.__depthDisposeCallback=j}v.__boundDepthTexture=ee}if(w.depthTexture&&!v.__autoAllocateDepthBuffer)if(B)for(let ee=0;ee<6;ee++)pt(v.__webglFramebuffer[ee],w,ee);else w.texture.mipmaps.length>0?pt(v.__webglFramebuffer[0],w,0):pt(v.__webglFramebuffer,w,0);else if(B){v.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ee]),v.__webglDepthbuffer[ee]===void 0)v.__webglDepthbuffer[ee]=i.createRenderbuffer(),un(v.__webglDepthbuffer[ee],w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer[ee];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,se)}}else if(w.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),un(v.__webglDepthbuffer,w,!1);else{let j=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,se)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Wt(w,v,B){let ee=n.get(w);v!==void 0&&st(ee.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Gt(w)}function Xt(w){let v=w.texture,B=n.get(w),ee=n.get(v);w.addEventListener("dispose",O),N(w);let j=w.textures,se=w.isWebGLCubeRenderTarget===!0,ce=j.length>1;if(ce||(ee.__webglTexture===void 0&&(ee.__webglTexture=i.createTexture()),ee.__version=v.version,a.memory.textures++),se){B.__webglFramebuffer=[];for(let J=0;J<6;J++)if(v.mipmaps.length>0){B.__webglFramebuffer[J]=[];for(let q=0;q<v.mipmaps.length;q++)B.__webglFramebuffer[J][q]=i.createFramebuffer()}else B.__webglFramebuffer[J]=i.createFramebuffer()}else{if(v.mipmaps.length>0){B.__webglFramebuffer=[];for(let J=0;J<v.mipmaps.length;J++)B.__webglFramebuffer[J]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(ce)for(let J=0,q=j.length;J<q;J++){let ae=n.get(j[J]);ae.__webglTexture===void 0&&(ae.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&ue(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let J=0;J<j.length;J++){let q=j[J];B.__webglColorRenderbuffer[J]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[J]);let ae=r.convert(q.format,q.colorSpace),C=r.convert(q.type),K=E(q.internalFormat,ae,C,q.normalized,q.colorSpace,w.isXRRenderTarget===!0),W=it(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,W,K,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+J,i.RENDERBUFFER,B.__webglColorRenderbuffer[J])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),un(B.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture),qe(i.TEXTURE_CUBE_MAP,v);for(let J=0;J<6;J++)if(v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)st(B.__webglFramebuffer[J][q],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,q);else st(B.__webglFramebuffer[J],w,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0);A(v)?S(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(ce){for(let J=0,q=j.length;J<q;J++){let ae=j[J],C=n.get(ae),K=i.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(K=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(K,C.__webglTexture),qe(K,ae),st(B.__webglFramebuffer,w,ae,i.COLOR_ATTACHMENT0+J,K,0),A(ae)&&S(K)}t.unbindTexture()}else{let J=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(J=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(J,ee.__webglTexture),qe(J,v),v.mipmaps.length>0)for(let q=0;q<v.mipmaps.length;q++)st(B.__webglFramebuffer[q],w,v,i.COLOR_ATTACHMENT0,J,q);else st(B.__webglFramebuffer,w,v,i.COLOR_ATTACHMENT0,J,0);A(v)?S(J):v.mipmaps.length>0&&i.texParameteri(J,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}w.depthBuffer&&Gt(w)}function L(w){let v=w.textures;for(let B=0,ee=v.length;B<ee;B++){let j=v[B];if(A(j)&&j.mipmapsAutoUpdate===!0){let se=T(w),ce=n.get(j).__webglTexture;t.bindTexture(se,ce),S(se),t.unbindTexture()}}}let Yt=[];function nt(w){if(w.samples>0){if(ue(w)===!1){let v=w.textures,B=w.width,ee=w.height,j=i.COLOR_BUFFER_BIT,se=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ce=n.get(w),J=v.length>1;if(J)for(let ae=0;ae<v.length;ae++)t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),w.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let ae=0;ae<v.length;ae++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(j|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(j|=i.STENCIL_BUFFER_BIT)),J){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,C,0)}i.blitFramebuffer(0,0,B,ee,0,0,B,ee,j,i.NEAREST),l===!0&&(Yt.length=0,Yt.push(i.COLOR_ATTACHMENT0+ae),w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&Yt.push(se),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),J)for(let ae=0;ae<v.length;ae++){t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.RENDERBUFFER,ce.__webglColorRenderbuffer[ae]);let C=n.get(v[ae]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ae,i.TEXTURE_2D,C,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.storeMultisampledDepthBuffer===!1&&l){let v=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function it(w){return Math.min(s.maxSamples,w.samples)}function ue(w){let v=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function ut(w){let v=a.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Te(w,v){let B=w.colorSpace,ee=w.format,j=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==rs&&B!==hn&&(We.getTransfer(B)===Je?(ee!==cn||j!==Ft)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ie("WebGLTextures: Unsupported texture color space:",B)),v}function Le(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=Fe,this.resetTextureUnits=Q,this.getTextureUnits=$,this.setTextureUnits=Se,this.setTexture2D=pe,this.setTexture2DArray=ve,this.setTexture3D=Ae,this.setTextureCube=me,this.rebindTextures=Wt,this.setupRenderTarget=Xt,this.updateRenderTargetMipmap=L,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=st,this.useMultisampledRTT=ue,this.dispose=V}function c0(i,e){function t(n,s=hn){let r,a=We.getTransfer(s);if(n===Ft)return i.UNSIGNED_BYTE;if(n===na)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ia)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Wo)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xo)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Vo)return i.BYTE;if(n===Go)return i.SHORT;if(n===Gi)return i.UNSIGNED_SHORT;if(n===ta)return i.INT;if(n===an)return i.UNSIGNED_INT;if(n===on)return i.FLOAT;if(n===ln)return i.HALF_FLOAT;if(n===Yo)return i.ALPHA;if(n===Jo)return i.RGB;if(n===cn)return i.RGBA;if(n===Cn)return i.DEPTH_COMPONENT;if(n===Ln)return i.DEPTH_STENCIL;if(n===qo)return i.RED;if(n===sa)return i.RED_INTEGER;if(n===Zn)return i.RG;if(n===ra)return i.RG_INTEGER;if(n===aa)return i.RGBA_INTEGER;if(n===Cs||n===Rs||n===Is||n===Ps)if(a===Je)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Cs)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Cs)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Rs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Is)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ps)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===oa||n===la||n===ca||n===ha)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===oa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===la)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ca)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ha)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ua||n===da||n===fa||n===pa||n===ma||n===Ls||n===ga)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ua||n===da)return a===Je?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===fa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===pa)return r.COMPRESSED_R11_EAC;if(n===ma)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Ls)return r.COMPRESSED_RG11_EAC;if(n===ga)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===xa||n===va||n===ya||n===Ma||n===Sa||n===_a||n===ba||n===wa||n===Ea||n===Aa||n===Ta||n===Ca||n===Ra||n===Ia)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===va)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ya)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ma)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Sa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_a)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ba)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ea)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Aa)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ta)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ca)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ra)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ia)return a===Je?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===La||n===Da)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return a===Je?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===La)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Da)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Fa||n===Na||n===Ds||n===Ua)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Fa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Na)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ds)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ua)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}function f0(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,sl(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,b,A,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),f(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&d(p,m,S)):m.isMeshMatcapMaterial?(r(p,m),x(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),M(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,b,A):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Lt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Lt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let b=e.get(m),A=b.envMap,S=b.envMapRotation;A&&(p.envMap.value=A,p.envMapRotation.value.setFromMatrix4(d0.makeRotationFromEuler(S)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Zh),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,b,A){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*b,p.scale.value=A*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function f(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function d(p,m,b){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Lt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=b.texture,p.transmissionSamplerSize.value.set(b.width,b.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function x(p,m){m.matcap&&(p.matcap.value=m.matcap)}function M(p,m){let b=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(b.matrixWorld),p.nearDistance.value=b.shadow.camera.near,p.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function p0(i,e,t,n){let s={},r={};function a(b,A){let S=A.program;n.uniformBlockBinding(b,S,s[b.id])}function o(b,A){let S=s[b.id];S===void 0&&(x(b),S=l(b),s[b.id]=S,b.addEventListener("dispose",p));let T=A.program;n.updateUBOMapping(b,T);let E=e.render.frame;r[b.id]!==E&&(c(b),r[b.id]=E)}function l(b){let A=i.createBuffer(),S=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,A),i.bufferData(i.UNIFORM_BUFFER,S,T),i.bindBuffer(i.UNIFORM_BUFFER,null),A}function c(b){let A=s[b.id],S=b.uniforms,T=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,A);for(let E=0,g=S.length;E<g;E++){let _=S[E];if(Array.isArray(_))for(let N=0,P=_.length;N<P;N++)h(_[N],E,N,T);else h(_,E,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(b,A,S,T){if(u(b,A,S,T)===!0){let E=b.__offset,g=b.value;if(Array.isArray(g)){let _=0;for(let N=0;N<g.length;N++){let P=g[N],F=M(P,!0);f(P,b.__data,_),_+=F.storage/Float32Array.BYTES_PER_ELEMENT}}else f(g,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,E,b.__data)}}function f(b,A,S){typeof b=="number"||typeof b=="boolean"?A[S]=b:b.isMatrix3?(A[S]=b.elements[0],A[S+1]=b.elements[1],A[S+2]=b.elements[2],A[S+3]=0,A[S+4]=b.elements[3],A[S+5]=b.elements[4],A[S+6]=b.elements[5],A[S+7]=0,A[S+8]=b.elements[6],A[S+9]=b.elements[7],A[S+10]=b.elements[8],A[S+11]=0):ArrayBuffer.isView(b)?A.set(b.subarray(0,A.length-S),S):b.toArray(A,S)}function u(b,A,S,T){let E=b.value,g=A+"_"+S;if(Array.isArray(E)){T[g]===void 0&&(T[g]=[]);let _=T[g],N=!1;for(let P=0;P<E.length;P++)d(E[P],_,P)===!0&&(N=!0);return N}return d(E,T,g)}function d(b,A,S){if(A[S]===void 0)return typeof b=="number"||typeof b=="boolean"?A[S]=b:ArrayBuffer.isView(b)?A[S]=b.slice():A[S]=b.clone(),!0;{let T=A[S];if(typeof b=="number"||typeof b=="boolean"){if(T!==b)return A[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(T.equals(b)===!1)return T.copy(b),!0}}return!1}function x(b){let A=b.uniforms,S=0,T=16;for(let g=0,_=A.length;g<_;g++){let N=Array.isArray(A[g])?A[g]:[A[g]];for(let P=0,F=N.length;P<F;P++){let O=N[P],G=Array.isArray(O.value)?O.value:[O.value],R=Array.isArray(A[g])||Array.isArray(O.value),V=S;for(let H=0,te=G.length;H<te;H++){let X=G[H],Q=M(X,R),$=S%T,Se=$%Q.boundary,Fe=$+Se;S+=Se,Fe!==0&&T-Fe<Q.storage&&(S+=T-Fe),H===0&&(V=S),S+=Q.storage}let Y=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new Y((S-V)/Float32Array.BYTES_PER_ELEMENT),O.__offset=V}}let E=S%T;return E>0&&(S+=T-E),b.__size=S,b.__cache={},this}function M(b,A){let S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=16,S.storage=48):b.isMatrix4?(S.boundary=16,S.storage=64):b.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(S.boundary=16,S.storage=b.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",b),A===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function p(b){let A=b.target;A.removeEventListener("dispose",p),i.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function m(){for(let b in s)i.deleteBuffer(s[b]);s={},r={}}return{bind:a,update:o,dispose:m}}function g0(){return xn===null&&(xn=new Tr(m0,16,16,Zn,ln),xn.name="DFG_LUT",xn.minFilter=It,xn.magFilter=It,xn.wrapS=pn,xn.wrapT=pn,xn.generateMipmaps=!1,xn.needsUpdate=!0),xn}var Ld,Dd,Fd,Nd,Ud,Bd,Od,zd,kd,Hd,Vd,Gd,Wd,Xd,Yd,Jd,qd,Zd,Kd,jd,Qd,$d,ef,tf,nf,sf,rf,af,of,lf,cf,hf,uf,df,ff,pf,mf,gf,xf,vf,yf,Mf,Sf,_f,bf,wf,Ef,Af,Tf,Cf,Rf,If,Pf,Lf,Df,Ff,Nf,Uf,Bf,Of,zf,kf,Hf,Vf,Gf,Wf,Xf,Yf,Jf,qf,Zf,Kf,jf,Qf,$f,ep,tp,np,ip,sp,rp,ap,op,lp,cp,hp,up,dp,fp,pp,mp,gp,xp,vp,yp,Mp,Sp,_p,bp,wp,Ep,Ap,Tp,Cp,Rp,Ip,Pp,Lp,Dp,Fp,Np,Up,Bp,Op,zp,kp,Hp,Vp,Gp,Wp,Xp,Yp,Jp,qp,Zp,Kp,jp,Qp,$p,em,tm,nm,im,sm,rm,am,om,lm,cm,hm,um,ze,fe,vn,za,dm,kh,Us,vh,vm,ym,Hh,Vh,Mm,Sm,_m,Ha,Dm,Gh,Wh,Xh,Yh,Jh,qh,_h,bh,wh,Eh,Ah,gl,xl,vl,pl,Xi,_g,bg,Rh,Tg,ka,Dg,Ng,Bg,zg,Hg,Wg,Ml,Sl,Qg,n0,i0,s0,r0,Oh,Fs,ml,h0,u0,_l,bl,d0,Zh,m0,xn,Va,wl=Nt(()=>{fl();fl();Ld=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Dd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Fd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ud=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Bd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Od=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,zd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Hd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Vd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Gd=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Wd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Yd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Jd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,qd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Kd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,jd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Qd=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$d=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,tf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,sf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,rf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,of=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",cf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,hf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,df=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,ff=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,mf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,yf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Mf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Sf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_f=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,bf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,wf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ef=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Af=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Cf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Rf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,If=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Lf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Df=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ff=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Nf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Uf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Bf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Of=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,zf=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hf=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Vf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Wf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Xf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Yf=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Jf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Zf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Kf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,jf=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Qf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$f=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,tp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,np=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ip=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,ap=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,op=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,cp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,dp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,fp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,pp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,mp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,gp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,xp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,vp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Mp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Sp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,_p=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,wp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ep=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ap=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Tp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Rp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ip=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Pp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Lp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Dp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Np=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Up=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Op=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,zp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,kp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Hp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Gp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Wp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Zp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,jp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,$p=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,nm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,im=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,am=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,om=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ze={alphahash_fragment:Ld,alphahash_pars_fragment:Dd,alphamap_fragment:Fd,alphamap_pars_fragment:Nd,alphatest_fragment:Ud,alphatest_pars_fragment:Bd,aomap_fragment:Od,aomap_pars_fragment:zd,batching_pars_vertex:kd,batching_vertex:Hd,begin_vertex:Vd,beginnormal_vertex:Gd,bsdfs:Wd,iridescence_fragment:Xd,bumpmap_pars_fragment:Yd,clipping_planes_fragment:Jd,clipping_planes_pars_fragment:qd,clipping_planes_pars_vertex:Zd,clipping_planes_vertex:Kd,color_fragment:jd,color_pars_fragment:Qd,color_pars_vertex:$d,color_vertex:ef,common:tf,defaultnormal_vertex:nf,displacementmap_pars_vertex:sf,displacementmap_vertex:rf,emissivemap_fragment:af,emissivemap_pars_fragment:of,colorspace_fragment:lf,colorspace_pars_fragment:cf,envmap_fragment:hf,envmap_common_pars_fragment:uf,envmap_pars_fragment:df,envmap_pars_vertex:ff,envmap_physical_pars_fragment:wf,envmap_vertex:pf,fog_vertex:mf,fog_pars_vertex:gf,fog_fragment:xf,fog_pars_fragment:vf,gradientmap_pars_fragment:yf,lightmap_pars_fragment:Mf,lights_lambert_fragment:Sf,lights_lambert_pars_fragment:_f,lights_pars_begin:bf,lights_toon_fragment:Ef,lights_toon_pars_fragment:Af,lights_phong_fragment:Tf,lights_phong_pars_fragment:Cf,lights_physical_fragment:Rf,lights_physical_pars_fragment:If,lights_fragment_begin:Pf,lights_fragment_maps:Lf,lights_fragment_end:Df,lightprobes_pars_fragment:Ff,logdepthbuf_fragment:Nf,logdepthbuf_pars_fragment:Uf,logdepthbuf_pars_vertex:Bf,logdepthbuf_vertex:Of,map_fragment:zf,map_pars_fragment:kf,map_particle_fragment:Hf,map_particle_pars_fragment:Vf,metalnessmap_fragment:Gf,metalnessmap_pars_fragment:Wf,morphinstance_vertex:Xf,morphcolor_vertex:Yf,morphnormal_vertex:Jf,morphtarget_pars_vertex:qf,morphtarget_vertex:Zf,normal_fragment_begin:Kf,normal_fragment_maps:jf,normal_pars_fragment:Qf,normal_pars_vertex:$f,normal_vertex:ep,normalmap_pars_fragment:tp,clearcoat_normal_fragment_begin:np,clearcoat_normal_fragment_maps:ip,clearcoat_pars_fragment:sp,iridescence_pars_fragment:rp,opaque_fragment:ap,packing:op,premultiplied_alpha_fragment:lp,project_vertex:cp,dithering_fragment:hp,dithering_pars_fragment:up,roughnessmap_fragment:dp,roughnessmap_pars_fragment:fp,shadowmap_pars_fragment:pp,shadowmap_pars_vertex:mp,shadowmap_vertex:gp,shadowmask_pars_fragment:xp,skinbase_vertex:vp,skinning_pars_vertex:yp,skinning_vertex:Mp,skinnormal_vertex:Sp,specularmap_fragment:_p,specularmap_pars_fragment:bp,tonemapping_fragment:wp,tonemapping_pars_fragment:Ep,transmission_fragment:Ap,transmission_pars_fragment:Tp,uv_pars_fragment:Cp,uv_pars_vertex:Rp,uv_vertex:Ip,worldpos_vertex:Pp,background_vert:Lp,background_frag:Dp,backgroundCube_vert:Fp,backgroundCube_frag:Np,cube_vert:Up,cube_frag:Bp,depth_vert:Op,depth_frag:zp,distance_vert:kp,distance_frag:Hp,equirect_vert:Vp,equirect_frag:Gp,linedashed_vert:Wp,linedashed_frag:Xp,meshbasic_vert:Yp,meshbasic_frag:Jp,meshlambert_vert:qp,meshlambert_frag:Zp,meshmatcap_vert:Kp,meshmatcap_frag:jp,meshnormal_vert:Qp,meshnormal_frag:$p,meshphong_vert:em,meshphong_frag:tm,meshphysical_vert:nm,meshphysical_frag:im,meshtoon_vert:sm,meshtoon_frag:rm,points_vert:am,points_frag:om,shadow_vert:lm,shadow_frag:cm,sprite_vert:hm,sprite_frag:um},fe={common:{diffuse:{value:new De(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pe}},envmap:{envMap:{value:null},envMapRotation:{value:new Pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pe},normalScale:{value:new we(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new De(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new De(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new De(16777215)},opacity:{value:1},center:{value:new we(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pe},alphaMap:{value:null},alphaMapTransform:{value:new Pe},alphaTest:{value:0}}},vn={basic:{uniforms:Tt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Tt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},envMapIntensity:{value:1}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Tt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new De(0)},specular:{value:new De(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Tt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new De(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Tt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new De(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Tt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Tt([fe.points,fe.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Tt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Tt([fe.common,fe.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Tt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Tt([fe.sprite,fe.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distance:{uniforms:Tt([fe.common,fe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distance_vert,fragmentShader:ze.distance_frag},shadow:{uniforms:Tt([fe.lights,fe.fog,{color:{value:new De(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};vn.physical={uniforms:Tt([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pe},clearcoatNormalScale:{value:new we(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pe},sheen:{value:0},sheenColor:{value:new De(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pe},transmissionSamplerSize:{value:new we},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pe},attenuationDistance:{value:0},attenuationColor:{value:new De(0)},specularColor:{value:new De(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pe},anisotropyVector:{value:new we},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};za={r:0,b:0,g:0},dm=new tt,kh=new Pe;kh.set(-1,0,0,0,1,0,0,0,1);Us=class extends kt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new fs(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Bi(5,5,5),r=new Kt({name:"CubemapFromEquirect",uniforms:ui(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:oi});r.uniforms.tEquirect.value=t;let a=new At(s,r),o=t.minFilter;return t.minFilter===Pn&&(t.minFilter=It),new zi(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},vh=256,vm=3,ym=20,Hh=256,Vh=16,Mm=3,Sm=new D,_m=new De,Ha=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new zi(1,10,null),this._boxMesh=new At(new Bi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=Sm}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=l.autoClear,u=l.autoClearColor,d=l.autoClearDepth,x=l.autoClearStencil,M=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,M===null&&(e.background=l.getClearColor(_m));let p=new zi(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=f,l.autoClearColor=u,l.autoClearDepth=d,l.autoClearStencil=x,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Sh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(vh,tl(e))}_fromTexture(e,t){e.mapping===ci||e.mapping===Vi?this._setSize(e.image.length===0?vh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=yh(e,!1,!1),n=Math.log2(e)-vm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=yh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ci||e.mapping===Vi?(this._cubemapMaterial===null&&(this._cubemapMaterial=Sh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Mh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=bm(),this._integrationMaterial=wm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/Vh);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-Mm)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Hh*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Em());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};Dm={[Fo]:"LINEAR_TONE_MAPPING",[No]:"REINHARD_TONE_MAPPING",[Uo]:"CINEON_TONE_MAPPING",[Bo]:"ACES_FILMIC_TONE_MAPPING",[zo]:"AGX_TONE_MAPPING",[ko]:"NEUTRAL_TONE_MAPPING",[Oo]:"CUSTOM_TONE_MAPPING"};Gh=new Pt,Wh=new In(1,1),Xh=new ms(1),Yh=new ls,Jh=new wr,qh=new fs,_h=[],bh=[],wh=new Float32Array(16),Eh=new Float32Array(9),Ah=new Float32Array(4);gl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=eg(t.type)}},xl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Mg(t.type)}},vl=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},pl=/(\w+)(\])?(\[|\.)?/g;Xi=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);Sg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};_g=37297,bg=0;Rh=new Pe;Tg={[Fo]:"Linear",[No]:"Reinhard",[Uo]:"Cineon",[Bo]:"ACESFilmic",[zo]:"AgX",[ko]:"Neutral",[Oo]:"Custom"};ka=new D;Dg=/^[ \t]*#include +<([\w\d./]+)>/gm;Ng=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;Bg={[ai]:"SHADOWMAP_TYPE_PCF",[ki]:"SHADOWMAP_TYPE_VSM"};zg={[Vi]:"ENVMAP_MODE_REFRACTION"};Hg={[Do]:"ENVMAP_BLENDING_MULTIPLY",[Kc]:"ENVMAP_BLENDING_MIX",[jc]:"ENVMAP_BLENDING_ADD"};Wg=0,Ml=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Sl(e),t.set(e,n)),n}},Sl=class{constructor(e){this.id=Wg++,this.code=e,this.usedTimes=0}};Qg=0;n0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,i0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,s0=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],r0=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Oh=new tt,Fs=new D,ml=new D;h0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,u0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,_l=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new gs(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Kt({vertexShader:h0,fragmentShader:u0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new At(new si(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},bl=class extends mn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,f=null,u=null,d=null,x=null,M=typeof XRWebGLBinding<"u",p=new _l,m={},b=t.getContextAttributes(),A=null,S=null,T=[],E=[],g=new we,_=null,N=null,P=new Rt;P.viewport=new Qe;let F=new Rt;F.viewport=new Qe;let O=[P,F],G=new Kr,R=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Ni,T[Z]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Ni,T[Z]=pe),pe.getGripSpace()},this.getHand=function(Z){let pe=T[Z];return pe===void 0&&(pe=new Ni,T[Z]=pe),pe.getHandSpace()};function Y(Z){let pe=E.indexOf(Z.inputSource);if(pe===-1)return;let ve=T[pe];ve!==void 0&&(ve.update(Z.inputSource,Z.frame,c||a),ve.dispatchEvent({type:Z.type,data:Z.inputSource}))}function H(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",te);for(let Z=0;Z<T.length;Z++){let pe=E[Z];pe!==null&&(E[Z]=null,T[Z].disconnect(pe))}R=null,V=null,p.reset();for(let Z in m)delete m[Z];if(e.setRenderTarget(A),d=null,u=null,f=null,s=null,S=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(_),e.setSize(g.width,g.height,!1),N!==null){let Z=N.camera;Z.fov=N.fov,Z.zoom=N.zoom,Z.updateProjectionMatrix(),N=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){r=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){o=Z,n.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Z){c=Z},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return x},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",H),s.addEventListener("inputsourceschange",te),b.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(g),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let ve=null,Ae=null,me=null;b.depth&&(me=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=b.stencil?Ln:Cn,Ae=b.stencil?hi:an);let Ue={colorFormat:t.RGBA8,depthFormat:me,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(Ue),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),S=new kt(u.textureWidth,u.textureHeight,{format:cn,type:Ft,depthTexture:new In(u.textureWidth,u.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ve={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),S=new kt(d.framebufferWidth,d.framebufferHeight,{format:cn,type:Ft,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function te(Z){for(let pe=0;pe<Z.removed.length;pe++){let ve=Z.removed[pe],Ae=E.indexOf(ve);Ae>=0&&(E[Ae]=null,T[Ae].disconnect(ve))}for(let pe=0;pe<Z.added.length;pe++){let ve=Z.added[pe],Ae=E.indexOf(ve);if(Ae===-1){for(let Ue=0;Ue<T.length;Ue++)if(Ue>=E.length){E.push(ve),Ae=Ue;break}else if(E[Ue]===null){E[Ue]=ve,Ae=Ue;break}if(Ae===-1)break}let me=T[Ae];me&&me.connect(ve)}}function X(Z,pe){pe===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(pe.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let pe=Z.near,ve=Z.far;p.texture!==null&&(p.depthNear>0&&(pe=p.depthNear),p.depthFar>0&&(ve=p.depthFar)),G.near=F.near=P.near=pe,G.far=F.far=P.far=ve,(R!==G.near||V!==G.far)&&(s.updateRenderState({depthNear:G.near,depthFar:G.far}),R=G.near,V=G.far),G.layers.mask=Z.layers.mask|6,P.layers.mask=G.layers.mask&-5,F.layers.mask=G.layers.mask&-3;let Ae=Z.parent,me=G.cameras;X(G,Ae);for(let Ue=0;Ue<me.length;Ue++)X(me[Ue],Ae);G.projectionMatrix.copy(P.projectionMatrix),G.projectionMatrixInverse.copy(P.projectionMatrixInverse),N===null&&Z.isPerspectiveCamera&&(N={camera:Z,fov:Z.fov,zoom:Z.zoom}),Q(Z,G,Ae)};function Q(Z,pe,ve){ve===null?Z.matrix.copy(pe.matrixWorld):(Z.matrix.copy(ve.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(pe.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(pe.projectionMatrix),Z.projectionMatrixInverse.copy(pe.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Di*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return G},this.getFoveation=function(){if(!(u===null&&d===null))return l},this.setFoveation=function(Z){l=Z,u!==null&&(u.fixedFoveation=Z),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=Z)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(G)},this.getCameraTexture=function(Z){return m[Z]};let $=null;function Se(Z,pe){if(h=pe.getViewerPose(c||a),x=pe,h!==null){let ve=h.views;d!==null&&(e.setRenderTargetFramebuffer(S,d.framebuffer),e.setRenderTarget(S));let Ae=!1;ve.length!==G.cameras.length&&(G.cameras.length=0,Ae=!0);for(let Re=0;Re<ve.length;Re++){let qe=ve[Re],Ke=null;if(d!==null)Ke=d.getViewport(qe);else{let yt=f.getViewSubImage(u,qe);Ke=yt.viewport,Re===0&&(e.setRenderTargetTextures(S,yt.colorTexture,yt.depthStencilTexture),e.setRenderTarget(S))}let He=O[Re];He===void 0&&(He=new Rt,He.layers.enable(Re),He.viewport=new Qe,O[Re]=He),He.matrix.fromArray(qe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(qe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Re===0&&(G.matrix.copy(He.matrix),G.matrix.decompose(G.position,G.quaternion,G.scale)),Ae===!0&&G.cameras.push(He)}let me=s.enabledFeatures;if(me&&me.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let Re=f.getDepthInformation(ve[0]);Re&&Re.isValid&&Re.texture&&p.init(Re,s.renderState)}if(me&&me.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let Re=0;Re<ve.length;Re++){let qe=ve[Re].camera;if(qe){let Ke=m[qe];Ke||(Ke=new gs,m[qe]=Ke);let He=f.getCameraImage(qe);Ke.sourceTexture=He}}}}for(let ve=0;ve<T.length;ve++){let Ae=E[ve],me=T[ve];Ae!==null&&me!==void 0&&me.update(Ae,pe,c||a)}$&&$(Z,pe),pe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:pe}),x=null}let Fe=new zh;Fe.setAnimationLoop(Se),this.setAnimationLoop=function(Z){$=Z},this.dispose=function(){}}},d0=new tt,Zh=new Pe;Zh.set(-1,0,0,0,1,0,0,0,1);m0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),xn=null;Va=class{constructor(e={}){let{canvas:t=lh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=Ft}=e;this.isWebGLRenderer=!0;let x;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");x=n.getContextAttributes().alpha}else x=a;let M=d,p=new Set([aa,ra,sa]),m=new Set([Ft,an,Gi,hi,na,ia]),b=new Uint32Array(4),A=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},T=null,E=null,g=[],_=[],N=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qt,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,F=!1,O=null,G=null,R=null,V=null;this._outputColorSpace=Ot;let Y=0,H=0,te=null,X=-1,Q=null,$=new Qe,Se=new Qe,Fe=null,Z=new De(0),pe=0,ve=t.width,Ae=t.height,me=1,Ue=null,ot=null,Re=new Qe(0,0,ve,Ae),qe=new Qe(0,0,ve,Ae),Ke=!1,He=new Gn,yt=new Cr,ht=!1,Dt=!1,st=new tt,un=new D,pt=new Qe,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Wt=!1;function Xt(){return te===null?me:1}let L=n;function Yt(y,I){return t.getContext(y,I)}let nt,it,ue,ut,Te,Le,w,v,B,ee,j,se,ce,J,q,ae,C,K,W,oe,ie,re,be;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ee,!1),t.addEventListener("webglcontextrestored",Be,!1),t.addEventListener("webglcontextcreationerror",de,!1),L===null){let I="webgl2";if(L=Yt(I,y),L===null)throw Yt(I)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(y){throw t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",de,!1),Ie("WebGLRenderer: "+y.message),y}function Oe(){nt=new Tm(L),nt.init(),ie=new c0(L,nt),it=new gm(L,nt,e,ie),ue=new o0(L,nt),it.reversedDepthBuffer&&u&&ue.buffers.depth.setReversed(!0),G=L.createFramebuffer(),R=L.createFramebuffer(),V=L.createFramebuffer(),ut=new Im(L),Te=new Jg,Le=new l0(L,nt,ue,Te,it,ie,ut),w=new Am(P),v=new Pd(L),re=new pm(L,v),B=new Cm(L,v,ut,re),ee=new Lm(L,B,v,re,ut),K=new Pm(L,it,Le),q=new xm(Te),j=new Yg(P,w,nt,it,re,q),se=new f0(P,Te),ce=new Zg,J=new t0(nt),C=new fm(P,w,ue,ee,x,l),ae=new a0(P,ee,it),be=new p0(L,ut,it,ue),W=new mm(L,nt,ut),oe=new Rm(L,nt,ut),ut.programs=j.programs,P.capabilities=it,P.extensions=nt,P.properties=Te,P.renderLists=ce,P.shadowMap=ae,P.state=ue,P.info=ut}M!==Ft&&(N=new Fm(M,t.width,t.height,o,s,r));let ne=new bl(P,L);this.xr=ne,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let y=nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return me},this.setPixelRatio=function(y){y!==void 0&&(me=y,this.setSize(ve,Ae,!1))},this.getSize=function(y){return y.set(ve,Ae)},this.setSize=function(y,I,k=!0){if(ne.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}ve=y,Ae=I,t.width=Math.floor(y*me),t.height=Math.floor(I*me),k===!0&&(t.style.width=y+"px",t.style.height=I+"px"),N!==null&&N.setSize(t.width,t.height),this.setViewport(0,0,y,I)},this.getDrawingBufferSize=function(y){return y.set(ve*me,Ae*me).floor()},this.setDrawingBufferSize=function(y,I,k){ve=y,Ae=I,me=k,t.width=Math.floor(y*k),t.height=Math.floor(I*k),this.setViewport(0,0,y,I)},this.setEffects=function(y){if(M===Ft){Ie("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let I=0;I<y.length;I++)if(y[I].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy($)},this.getViewport=function(y){return y.copy(Re)},this.setViewport=function(y,I,k,U){y.isVector4?Re.set(y.x,y.y,y.z,y.w):Re.set(y,I,k,U),ue.viewport($.copy(Re).multiplyScalar(Xt()).round())},this.getScissor=function(y){return y.copy(qe)},this.setScissor=function(y,I,k,U){y.isVector4?qe.set(y.x,y.y,y.z,y.w):qe.set(y,I,k,U),ue.scissor(Se.copy(qe).multiplyScalar(Xt()).round())},this.getScissorTest=function(){return Ke},this.setScissorTest=function(y){ue.setScissorTest(Ke=y)},this.setOpaqueSort=function(y){Ue=y},this.setTransparentSort=function(y){ot=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,I=!0,k=!0){let U=0;if(y){let z=!1;if(te!==null){let he=te.texture.format;z=p.has(he)}if(z){let he=te.texture.type,xe=m.has(he),le=C.getClearColor(),ge=C.getClearAlpha(),_e=le.r,Ne=le.g,Ve=le.b;xe?(b[0]=_e,b[1]=Ne,b[2]=Ve,b[3]=ge,L.clearBufferuiv(L.COLOR,0,b)):(A[0]=_e,A[1]=Ne,A[2]=Ve,A[3]=ge,L.clearBufferiv(L.COLOR,0,A))}else U|=L.COLOR_BUFFER_BIT}I&&(U|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),k&&(U|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U!==0&&L.clear(U)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){t.removeEventListener("webglcontextlost",Ee,!1),t.removeEventListener("webglcontextrestored",Be,!1),t.removeEventListener("webglcontextcreationerror",de,!1),C.dispose(),ce.dispose(),J.dispose(),Le.dispose(),Te.dispose(),w.dispose(),ee.dispose(),B.dispose(),re.dispose(),be.dispose(),j.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",Ll),ne.removeEventListener("sessionend",Dl),jn.stop()};function Ee(y){y.preventDefault(),$o("WebGLRenderer: Context Lost."),F=!0}function Be(){$o("WebGLRenderer: Context Restored."),F=!1;let y=ut.autoReset,I=ae.enabled,k=ae.autoUpdate,U=ae.needsUpdate,z=ae.type;Oe(),ut.autoReset=y,ae.enabled=I,ae.autoUpdate=k,ae.needsUpdate=U,ae.type=z}function de(y){Ie("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function Ze(y){let I=y.target;I.removeEventListener("dispose",Ze),mt(I)}function mt(y){Dn(y),Te.remove(y)}function Dn(y){let I=Te.get(y).programs;I!==void 0&&(I.forEach(function(k){j.releaseProgram(k)}),y.isShaderMaterial&&j.releaseShaderCache(y))}this.renderBufferDirect=function(y,I,k,U,z,he){I===null&&(I=Gt);let xe=z.isMesh&&z.matrixWorld.determinantAffine()<0,le=xu(y,I,k,U,z);ue.setMaterial(U,xe);let ge=k.index,_e=1;if(U.wireframe===!0){if(ge=B.getWireframeAttribute(k),ge===void 0)return;_e=2}let Ne=k.drawRange,Ve=k.attributes.position,ye=Ne.start*_e,Ge=(Ne.start+Ne.count)*_e;he!==null&&(ye=Math.max(ye,he.start*_e),Ge=Math.min(Ge,(he.start+he.count)*_e)),ge!==null?(ye=Math.max(ye,0),Ge=Math.min(Ge,ge.count)):Ve!=null&&(ye=Math.max(ye,0),Ge=Math.min(Ge,Ve.count));let lt=Ge-ye;if(lt<0||lt===1/0)return;re.setup(z,U,le,k,ge);let $e,je=W;if(ge!==null&&($e=v.get(ge),je=oe,je.setIndex($e)),z.isMesh)U.wireframe===!0?(ue.setLineWidth(U.wireframeLinewidth*Xt()),je.setMode(L.LINES)):je.setMode(L.TRIANGLES);else if(z.isLine){let St=U.linewidth;St===void 0&&(St=1),ue.setLineWidth(St*Xt()),z.isLineSegments?je.setMode(L.LINES):z.isLineLoop?je.setMode(L.LINE_LOOP):je.setMode(L.LINE_STRIP)}else z.isPoints?je.setMode(L.POINTS):z.isSprite&&je.setMode(L.TRIANGLES);if(z.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))je.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let St=z._multiDrawStarts,Me=z._multiDrawCounts,Ct=z._multiDrawCount,Ye=ge?v.get(ge).bytesPerElement:1,Qn=Te.get(U).currentProgram.getUniforms();for(let _t=0;_t<Ct;_t++)Qn.setValue(L,"_gl_DrawID",_t),je.render(St[_t]/Ye,Me[_t])}else if(z.isInstancedMesh)je.renderInstances(ye,lt,z.count);else if(k.isInstancedBufferGeometry){let St=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,St);je.renderInstances(ye,lt,Me)}else je.render(ye,lt)};function Pl(y,I,k,U){O!==null&&y.isNodeMaterial&&O.setObject(U,y),ht===!0&&q.setState(y,k,!1),y.transparent===!0&&y.side===jt&&y.forceSinglePass===!1?(y.side=Lt,y.needsUpdate=!0,qi(y,I,U),y.side=qn,y.needsUpdate=!0,qi(y,I,U),y.side=jt):qi(y,I,U)}this.compile=function(y,I,k=null){k===null&&(k=y),O!==null&&O.renderStart(y,I,k),E=J.get(k),E.init(I),_.push(E),k.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==k&&y.traverseVisible(function(z){z.isLight&&z.layers.test(I.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),Dt=this.localClippingEnabled,ht=q.init(this.clippingPlanes,Dt),ht===!0&&q.setGlobalState(this.clippingPlanes,I),O!==null&&ae.render(E.state.shadowsArray,k,I);let U=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let he=z.material;if(he)if(Array.isArray(he))for(let xe=0;xe<he.length;xe++){let le=he[xe];Pl(le,k,I,z),U.add(le)}else Pl(he,k,I,z),U.add(he)}),E=_.pop(),O!==null&&O.renderEnd(),U},this.compileAsync=function(y,I,k=null){let U=this.compile(y,I,k);return new Promise(z=>{function he(){if(U.forEach(function(xe){let ge=Te.get(xe).currentProgram;(ge===void 0||ge.isReady())&&U.delete(xe)}),U.size===0){z(y);return}setTimeout(he,10)}nt.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let qa=null;function mu(y){qa&&qa(y)}function Ll(){jn.stop()}function Dl(){jn.start()}let jn=new zh;jn.setAnimationLoop(mu),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(y){qa=y,ne.setAnimationLoop(y),y===null?jn.stop():jn.start()},ne.addEventListener("sessionstart",Ll),ne.addEventListener("sessionend",Dl),this.render=function(y,I){if(I!==void 0&&I.isCamera!==!0){Ie("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(F===!0)return;O!==null&&O.renderStart(y,I);let k=ne.enabled===!0&&ne.isPresenting===!0,U=N!==null&&(te===null||k)&&N.begin(P,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(I),I=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(P,y,I,te),E=J.get(y,_.length),E.init(I),E.state.textureUnits=Le.getTextureUnits(),_.push(E),st.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),I.isArrayCamera?yt.setFromArrayCamera(I):He.setFromProjectionMatrix(st,qt,I.reversedDepth),Dt=this.localClippingEnabled,ht=q.init(this.clippingPlanes,Dt),T=ce.get(y,g.length),T.init(),g.push(T),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let xe=P.xr.getDepthSensingMesh();xe!==null&&Za(xe,I,-1/0,P.sortObjects)}Za(y,I,0,P.sortObjects),T.finish(),O!==null&&O.updateLights(E.state.lightsArray),P.sortObjects===!0&&T.sort(Ue,ot),Wt=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,Wt&&C.addToRenderList(T,y),this.info.autoReset===!0&&this.info.reset(),ht===!0&&q.beginShadows();let z=E.state.shadowsArray;if(ae.render(z,y,I),ht===!0&&q.endShadows(),(U&&N.hasRenderPass())===!1){let xe=T.opaque,le=T.transmissive;if(E.setupLights(),I.isArrayCamera){let ge=I.cameras;if(le.length>0)for(let _e=0,Ne=ge.length;_e<Ne;_e++){let Ve=ge[_e];Nl(xe,le,y,Ve)}Wt&&C.render(y);for(let _e=0,Ne=ge.length;_e<Ne;_e++){let Ve=ge[_e];Fl(T,y,Ve,Ve.viewport)}}else le.length>0&&Nl(xe,le,y,I),Wt&&C.render(y),Fl(T,y,I)}te!==null&&H===0&&(Le.updateMultisampleRenderTarget(te),Le.updateRenderTargetMipmap(te)),U&&N.end(P),y.isScene===!0&&y.onAfterRender(P,y,I),re.resetDefaultState(),X=-1,Q=null,_.pop(),_.length>0?(E=_[_.length-1],Le.setTextureUnits(E.state.textureUnits),ht===!0&&q.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,g.pop(),g.length>0?T=g[g.length-1]:T=null,O!==null&&O.renderEnd()};function Za(y,I,k,U){if(y.visible===!1)return;if(y.layers.test(I.layers)){if(y.isGroup)k=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(I);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let xe=I.isArrayCamera?yt:He;if(!y.frustumCulled||y.intersectsFrustum(xe)){U&&pt.setFromMatrixPosition(y.matrixWorld).applyMatrix4(st);let le=ee.update(y),ge=y.material;ge.visible&&T.push(y,le,ge,k,pt.z,null,I)}}else if(y.isMesh||y.isLine||y.isPoints){let xe=I.isArrayCamera?yt:He;if(!y.frustumCulled||y.intersectsFrustum(xe)){let le=ee.update(y),ge=y.material;if(U&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),pt.copy(y.boundingSphere.center)):(le.boundingSphere===null&&le.computeBoundingSphere(),pt.copy(le.boundingSphere.center)),pt.applyMatrix4(y.matrixWorld).applyMatrix4(st)),Array.isArray(ge)){let _e=le.groups;for(let Ne=0,Ve=_e.length;Ne<Ve;Ne++){let ye=_e[Ne],Ge=ge[ye.materialIndex];Ge&&Ge.visible&&T.push(y,le,Ge,k,pt.z,ye,I)}}else ge.visible&&T.push(y,le,ge,k,pt.z,null,I)}}}let he=y.children;for(let xe=0,le=he.length;xe<le;xe++)Za(he[xe],I,k,U)}function Fl(y,I,k,U){let{opaque:z,transmissive:he,transparent:xe}=y;E.setupLightsView(k),ht===!0&&q.setGlobalState(P.clippingPlanes,k),U&&ue.viewport($.copy(U)),z.length>0&&Vs(z,I,k),he.length>0&&Vs(he,I,k),xe.length>0&&Vs(xe,I,k),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Nl(y,I,k,U){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[U.id]===void 0){let ye=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[U.id]=new kt(1,1,{generateMipmaps:!0,type:ye?ln:Ft,minFilter:Pn,samples:Math.max(4,it.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:We.workingColorSpace})}let he=E.state.transmissionRenderTarget[U.id],xe=U.viewport||$;he.setSize(xe.z*P.transmissionResolutionScale,xe.w*P.transmissionResolutionScale);let le=P.getRenderTarget(),ge=P.getActiveCubeFace(),_e=P.getActiveMipmapLevel();P.setRenderTarget(he),P.getClearColor(Z),pe=P.getClearAlpha(),pe<1&&P.setClearColor(16777215,.5),P.clear(),Wt&&C.render(k);let Ne=P.toneMapping;P.toneMapping=Qt;let Ve=U.viewport;if(U.viewport!==void 0&&(U.viewport=void 0),E.setupLightsView(U),ht===!0&&q.setGlobalState(P.clippingPlanes,U),Vs(y,k,U),Le.updateMultisampleRenderTarget(he),Le.updateRenderTargetMipmap(he),nt.has("WEBGL_multisampled_render_to_texture")===!1){let ye=!1;for(let Ge=0,lt=I.length;Ge<lt;Ge++){let $e=I[Ge],{object:je,geometry:St,material:Me,group:Ct}=$e;if(Me.side===jt&&je.layers.test(U.layers)){let Ye=Me.side;Me.side=Lt,Me.needsUpdate=!0,Ul(je,k,U,St,Me,Ct),Me.side=Ye,Me.needsUpdate=!0,ye=!0}}ye===!0&&(Le.updateMultisampleRenderTarget(he),Le.updateRenderTargetMipmap(he))}P.setRenderTarget(le,ge,_e),P.setClearColor(Z,pe),Ve!==void 0&&(U.viewport=Ve),P.toneMapping=Ne}function Vs(y,I,k){let U=I.isScene===!0?I.overrideMaterial:null;for(let z=0,he=y.length;z<he;z++){let xe=y[z],{object:le,geometry:ge,group:_e}=xe,Ne=xe.material;Ne.allowOverride===!0&&U!==null&&(Ne=U),le.layers.test(k.layers)&&Ul(le,I,k,ge,Ne,_e)}}function Ul(y,I,k,U,z,he){O!==null&&z.isNodeMaterial&&O.setObject(y,z),y.onBeforeRender(P,I,k,U,z,he),y.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(P,I,k,U,y,he),z.transparent===!0&&z.side===jt&&z.forceSinglePass===!1?(z.side=Lt,z.needsUpdate=!0,P.renderBufferDirect(k,I,U,z,y,he),z.side=qn,z.needsUpdate=!0,P.renderBufferDirect(k,I,U,z,y,he),z.side=jt):P.renderBufferDirect(k,I,U,z,y,he),y.onAfterRender(P,I,k,U,z,he)}function Bl(y){let I=0;for(let k of y)k.texture!==null&&I++;return I}function qi(y,I,k){I.isScene!==!0&&(I=Gt);let U=Te.get(y),z=E.state.lights,he=E.state.shadowsArray,xe=z.state.version,le=j.getParameters(y,z.state,he,I,k,E.state.lightProbeGridArray),ge=j.getProgramCacheKey(le),_e=U.programs;U.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?I.environment:null,U.fog=I.fog;let Ne=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;U.envMap=w.get(y.envMap||U.environment,Ne),U.envMapRotation=U.environment!==null&&y.envMap===null?I.environmentRotation:y.envMapRotation,_e===void 0&&(y.addEventListener("dispose",Ze),_e=new Map,U.programs=_e,U.programVariants=new Map);let Ve=_e.get(ge);if(Ve!==void 0){if(U.currentProgram===Ve&&U.lightsStateVersion===xe)return zl(y,le),Ve}else le.uniforms=j.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,k,le),y.onBeforeCompile(le,P),Ve=j.acquireProgram(le,ge),_e.set(ge,Ve),U.uniforms=le.uniforms;let ye=U.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(ye.clippingPlanes=q.uniform),zl(y,le),U.needsLights=yu(y),U.lightsStateVersion=xe,U.needsLights&&(ye.ambientLightColor.value=z.state.ambient,ye.lightProbe.value=z.state.probe,ye.sunLights.value=z.state.sun,ye.sunLightShadows.value=z.state.sunShadow,ye.directionalLights.value=z.state.directional,ye.directionalLightShadows.value=z.state.directionalShadow,ye.spotLights.value=z.state.spot,ye.spotLightShadows.value=z.state.spotShadow,ye.rectAreaLights.value=z.state.rectArea,ye.ltc_1.value=z.state.rectAreaLTC1,ye.ltc_2.value=z.state.rectAreaLTC2,ye.pointLights.value=z.state.point,ye.pointLightShadows.value=z.state.pointShadow,ye.hemisphereLights.value=z.state.hemi,ye.sunShadowMatrix.value=z.state.sunShadowMatrix,ye.sunShadowCascade.value=z.state.sunShadowCascade,ye.directionalShadowMatrix.value=z.state.directionalShadowMatrix,ye.spotLightMatrix.value=z.state.spotLightMatrix,ye.spotLightMap.value=z.state.spotLightMap,ye.pointShadowMatrix.value=z.state.pointShadowMatrix),U.numLightProbeGrids=Bl(E.state.lightProbeGridArray),U.currentProgram=Ve,U.uniformsList=null,Ve}function gu(y,I,k,U,z){let he=Te.get(y),xe=he.currentProgram.id+","+U+","+z,le=he.programVariants.get(xe);return le===void 0?(le=qi(y,I,k),he.programVariants.set(xe,le)):(he.currentProgram=le,he.uniformsList=null,he.outputColorSpace=U,he.toneMapping=z),le}function Ol(y){if(y.uniformsList===null){let I=y.currentProgram.getUniforms();y.uniformsList=Xi.seqWithValue(I.seq,y.uniforms)}return y.uniformsList}function zl(y,I){let k=Te.get(y);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function xu(y,I,k,U,z){I.isScene!==!0&&(I=Gt),Le.resetTextureUnits();let he=I.fog,xe=U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial?I.environment:null,le=te===null?P.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:We.workingColorSpace,ge=U.isMeshStandardMaterial||U.isMeshLambertMaterial&&!U.envMap||U.isMeshPhongMaterial&&!U.envMap,_e=w.get(U.envMap||xe,ge),Ne=U.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ve=!!k.attributes.tangent&&(!!U.normalMap||U.anisotropy>0),ye=!!k.morphAttributes.position,Ge=!!k.morphAttributes.normal,lt=!!k.morphAttributes.color,$e=Qt;U.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&($e=P.toneMapping);let je=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,St=je!==void 0?je.length:0,Me=Te.get(U),Ct=E.state.lights;if(ht===!0&&(Dt===!0||y!==Q)){let rt=y===Q&&U.id===X;q.setState(U,y,rt)}let Ye=!1,Qn=!1;U.version===Me.__version?Me.needsLights&&Me.lightsStateVersion!==Ct.state.version||z.isBatchedMesh&&Me.batching===!1||!z.isBatchedMesh&&Me.batching===!0||z.isBatchedMesh&&Me.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Me.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Me.instancing===!1||!z.isInstancedMesh&&Me.instancing===!0||z.isSkinnedMesh&&Me.skinning===!1||!z.isSkinnedMesh&&Me.skinning===!0||z.isInstancedMesh&&Me.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Me.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Me.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Me.instancingMorph===!1&&z.morphTexture!==null||Me.envMap!==_e||U.fog===!0&&Me.fog!==he||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==q.numPlanes||Me.numIntersection!==q.numIntersection)||Me.vertexAlphas!==Ne||Me.vertexTangents!==Ve||Me.morphTargets!==ye||Me.morphNormals!==Ge||Me.morphColors!==lt||Me.morphTargetsCount!==St||Me.numLightProbeGrids!==Bl(E.state.lightProbeGridArray)?Ye=!0:(Me.outputColorSpace!==le||Me.toneMapping!==$e)&&(Qn=!0):(Ye=!0,Me.__version=U.version);let _t=Me.currentProgram;(Ye===!0||Qn===!0)&&(_t=Qn===!0?gu(U,I,z,le,$e):qi(U,I,z),O&&U.isNodeMaterial&&O.onUpdateProgram(U,_t,Me));let Gs=!1,Fn=!1,$n=!1,Xe=_t.getUniforms(),Mt=Me.uniforms;if(ue.useProgram(_t.program)&&(Gs=!0,Fn=!0,$n=!0),U.id!==X&&(X=U.id,Fn=!0),Gs||Q!==y){ue.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),Xe.setValue(L,"projectionMatrix",y.projectionMatrix),Xe.setValue(L,"viewMatrix",y.matrixWorldInverse);let gt=Xe.map.cameraPosition;gt!==void 0&&gt.setValue(L,un.setFromMatrixPosition(y.matrixWorld)),it.logarithmicDepthBuffer&&Xe.setValue(L,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(U.isMeshPhongMaterial||U.isMeshToonMaterial||U.isMeshLambertMaterial||U.isMeshBasicMaterial||U.isMeshStandardMaterial||U.isShaderMaterial)&&Xe.setValue(L,"isOrthographic",y.isOrthographicCamera===!0),Q!==y&&(Q=y,Fn=!0,$n=!0)}if(Me.needsLights&&(Ct.state.sunShadowMap.length>0&&Xe.setValue(L,"sunShadowMap",Ct.state.sunShadowMap,Le),Ct.state.directionalShadowMap.length>0&&Xe.setValue(L,"directionalShadowMap",Ct.state.directionalShadowMap,Le),Ct.state.spotShadowMap.length>0&&Xe.setValue(L,"spotShadowMap",Ct.state.spotShadowMap,Le),Ct.state.pointShadowMap.length>0&&Xe.setValue(L,"pointShadowMap",Ct.state.pointShadowMap,Le)),z.isSkinnedMesh){Xe.setOptional(L,z,"bindMatrix"),Xe.setOptional(L,z,"bindMatrixInverse");let rt=z.skeleton;rt&&(rt.boneTexture===null&&rt.computeBoneTexture(),Xe.setValue(L,"boneTexture",rt.boneTexture,Le))}z.isBatchedMesh&&(Xe.setOptional(L,z,"batchingTexture"),Xe.setValue(L,"batchingTexture",z._matricesTexture,Le),Xe.setOptional(L,z,"batchingIdTexture"),Xe.setValue(L,"batchingIdTexture",z._indirectTexture,Le),Xe.setOptional(L,z,"batchingColorTexture"),z._colorsTexture!==null&&Xe.setValue(L,"batchingColorTexture",z._colorsTexture,Le));let en=k.morphAttributes;if((en.position!==void 0||en.normal!==void 0||en.color!==void 0)&&K.update(z,k,_t),(Fn||Me.receiveShadow!==z.receiveShadow)&&(Me.receiveShadow=z.receiveShadow,Xe.setValue(L,"receiveShadow",z.receiveShadow)),(U.isMeshStandardMaterial||U.isMeshLambertMaterial||U.isMeshPhongMaterial)&&U.envMap===null&&I.environment!==null&&(Mt.envMapIntensity.value=I.environmentIntensity),Mt.dfgLUT!==void 0&&(Mt.dfgLUT.value=g0()),Fn){if(Xe.setValue(L,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&vu(Mt,$n),he&&U.fog===!0&&se.refreshFogUniforms(Mt,he),se.refreshMaterialUniforms(Mt,U,me,Ae,E.state.transmissionRenderTarget[y.id]),Me.needsLights&&Me.numLightProbeGrids>0){let rt=S,gt=0;for(let Mn of E.state.lightProbeGridArray)Mn.texture!==null&&(rt.textures[gt]=Mn.texture,rt.min[gt]=Mn.boundingBox.min,rt.max[gt]=Mn.boundingBox.max,rt.resolution[gt]=Mn.resolution,gt++);for(let Mn in rt)rt[Mn].length=gt;Mt.probesSH.value=rt.textures,Mt.probesMin.value=rt.min,Mt.probesMax.value=rt.max,Mt.probesResolution.value=rt.resolution}Xi.upload(L,Ol(Me),Mt,Le)}if(U.isShaderMaterial&&U.uniformsNeedUpdate===!0&&(Xi.upload(L,Ol(Me),Mt,Le),U.uniformsNeedUpdate=!1),U.isSpriteMaterial&&Xe.setValue(L,"center",z.center),Xe.setValue(L,"modelViewMatrix",z.modelViewMatrix),Xe.setValue(L,"normalMatrix",z.normalMatrix),Xe.setValue(L,"modelMatrix",z.matrixWorld),U.uniformsGroups!==void 0){let rt=U.uniformsGroups;for(let gt=0,Mn=rt.length;gt<Mn;gt++){let Hl=rt[gt];be.update(Hl,_t),be.bind(Hl,_t)}}return _t}function vu(y,I){y.ambientLightColor.needsUpdate=I,y.lightProbe.needsUpdate=I,y.sunLights.needsUpdate=I,y.sunLightShadows.needsUpdate=I,y.directionalLights.needsUpdate=I,y.directionalLightShadows.needsUpdate=I,y.pointLights.needsUpdate=I,y.pointLightShadows.needsUpdate=I,y.spotLights.needsUpdate=I,y.spotLightShadows.needsUpdate=I,y.rectAreaLights.needsUpdate=I,y.hemisphereLights.needsUpdate=I}function yu(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,I,k){let U=Te.get(y);U.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,U.__autoAllocateDepthBuffer===!1&&(U.__useRenderToTexture=!1),Te.get(y.texture).__webglTexture=I,Te.get(y.depthTexture).__webglTexture=U.__autoAllocateDepthBuffer?void 0:k,U.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,I){let k=Te.get(y);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(y,I=0,k=0){te=y,Y=I,H=k;let U=null,z=!1,he=!1;if(y){let le=Te.get(y);if(le.__useDefaultFramebuffer!==void 0){ue.bindFramebuffer(L.FRAMEBUFFER,le.__webglFramebuffer),$.copy(y.viewport),Se.copy(y.scissor),Fe=y.scissorTest,ue.viewport($),ue.scissor(Se),ue.setScissorTest(Fe),X=-1;return}else if(le.__webglFramebuffer===void 0)Le.setupRenderTarget(y);else if(le.__hasExternalTextures)Le.rebindTextures(y,Te.get(y.texture).__webglTexture,Te.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let Ne=y.depthTexture;if(le.__boundDepthTexture!==Ne){if(Ne!==null&&Te.has(Ne)&&(y.width!==Ne.image.width||y.height!==Ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Le.setupDepthRenderbuffer(y)}}let ge=y.texture;(ge.isData3DTexture||ge.isDataArrayTexture||ge.isCompressedArrayTexture)&&(he=!0);let _e=Te.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(_e[I])?U=_e[I][k]:U=_e[I],z=!0):y.samples>0&&Le.useMultisampledRTT(y)===!1?U=Te.get(y).__webglMultisampledFramebuffer:Array.isArray(_e)?U=_e[k]:U=_e,$.copy(y.viewport),Se.copy(y.scissor),Fe=y.scissorTest}else $.copy(Re).multiplyScalar(me).floor(),Se.copy(qe).multiplyScalar(me).floor(),Fe=Ke;if(k!==0&&(U=G),ue.bindFramebuffer(L.FRAMEBUFFER,U)&&ue.drawBuffers(y,U),ue.viewport($),ue.scissor(Se),ue.setScissorTest(Fe),z){let le=Te.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+I,le.__webglTexture,k)}else if(he){let le=I;for(let ge=0;ge<y.textures.length;ge++){let _e=Te.get(y.textures[ge]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+ge,_e.__webglTexture,k,le)}}else if(y!==null&&k!==0){let le=Te.get(y.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,le.__webglTexture,k)}X=-1};function kl(y){let I=Te.get(y);return(I.__readFormat!==y.format||I.__readType!==y.type)&&(I.__readFormat=y.format,I.__readType=y.type,I.__formatReadable=it.textureFormatReadable(y.format),I.__typeReadable=it.textureTypeReadable(y.type)),I}this.readRenderTargetPixels=function(y,I,k,U,z,he,xe,le=0){if(!(y&&y.isWebGLRenderTarget)){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ge=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge){ue.bindFramebuffer(L.FRAMEBUFFER,ge);try{let _e=y.textures[le],Ne=_e.format,Ve=_e.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=kl(_e);if(ye.__formatReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(ye.__typeReadable===!1){Ie("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=y.width-U&&k>=0&&k<=y.height-z&&L.readPixels(I,k,U,z,ie.convert(Ne),ie.convert(Ve),he)}finally{let _e=te!==null?Te.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,_e)}}},this.readRenderTargetPixelsAsync=async function(y,I,k,U,z,he,xe,le=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ge=Te.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&xe!==void 0&&(ge=ge[xe],Array.isArray(ge)&&(ge=ge[0])),ge)if(I>=0&&I<=y.width-U&&k>=0&&k<=y.height-z){ue.bindFramebuffer(L.FRAMEBUFFER,ge);let _e=y.textures[le],Ne=_e.format,Ve=_e.type;y.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+le);let ye=kl(_e);if(ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ge=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.bufferData(L.PIXEL_PACK_BUFFER,he.byteLength,L.STREAM_READ),L.readPixels(I,k,U,z,ie.convert(Ne),ie.convert(Ve),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let lt=te!==null?Te.get(te).__webglFramebuffer:null;ue.bindFramebuffer(L.FRAMEBUFFER,lt);let $e=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await hh(L,$e,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Ge),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,he),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Ge),L.deleteSync($e),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,I=null,k=0){let U=Math.pow(2,-k),z=Math.floor(y.image.width*U),he=Math.floor(y.image.height*U),xe=I!==null?I.x:0,le=I!==null?I.y:0;Le.setTexture2D(y,0),L.copyTexSubImage2D(L.TEXTURE_2D,k,0,0,xe,le,z,he),ue.unbindTexture()},this.copyTextureToTexture=function(y,I,k=null,U=null,z=0,he=0){let xe,le,ge,_e,Ne,Ve,ye,Ge,lt,$e=y.isCompressedTexture?y.mipmaps[he]:y.image;if(k!==null)xe=k.max.x-k.min.x,le=k.max.y-k.min.y,ge=k.isBox3?k.max.z-k.min.z:1,_e=k.min.x,Ne=k.min.y,Ve=k.isBox3?k.min.z:0;else{let Xe=Math.pow(2,-z);xe=Math.floor($e.width*Xe),le=Math.floor($e.height*Xe),y.isDataArrayTexture?ge=$e.depth:y.isData3DTexture?ge=Math.floor($e.depth*Xe):ge=1,_e=0,Ne=0,Ve=0}U!==null?(ye=U.x,Ge=U.y,lt=U.z):(ye=0,Ge=0,lt=0);let je=ie.convert(I.format),St=ie.convert(I.type),Me;I.isData3DTexture?(Le.setTexture3D(I,0),Me=L.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(Le.setTexture2DArray(I,0),Me=L.TEXTURE_2D_ARRAY):(Le.setTexture2D(I,0),Me=L.TEXTURE_2D),ue.activeTexture(L.TEXTURE0),ue.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,I.flipY),ue.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),ue.pixelStorei(L.UNPACK_ALIGNMENT,I.unpackAlignment);let Ct=ue.getParameter(L.UNPACK_ROW_LENGTH),Ye=ue.getParameter(L.UNPACK_IMAGE_HEIGHT),Qn=ue.getParameter(L.UNPACK_SKIP_PIXELS),_t=ue.getParameter(L.UNPACK_SKIP_ROWS),Gs=ue.getParameter(L.UNPACK_SKIP_IMAGES);ue.pixelStorei(L.UNPACK_ROW_LENGTH,$e.width),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,$e.height),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,_e),ue.pixelStorei(L.UNPACK_SKIP_ROWS,Ne),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,Ve);let Fn=y.isDataArrayTexture||y.isData3DTexture,$n=I.isDataArrayTexture||I.isData3DTexture;if(y.isDepthTexture){let Xe=Te.get(y),Mt=Te.get(I),en=Te.get(Xe.__renderTarget),rt=Te.get(Mt.__renderTarget);ue.bindFramebuffer(L.READ_FRAMEBUFFER,en.__webglFramebuffer),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let gt=0;gt<ge;gt++)Fn&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(y).__webglTexture,z,Ve+gt),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Te.get(I).__webglTexture,he,lt+gt)),L.blitFramebuffer(_e,Ne,_e+xe,Ne+le,ye,Ge,ye+xe,Ge+le,L.DEPTH_BUFFER_BIT,L.NEAREST);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||Te.has(y)){let Xe=Te.get(y),Mt=Te.get(I);ue.bindFramebuffer(L.READ_FRAMEBUFFER,R),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,V);for(let en=0;en<ge;en++)Fn?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Xe.__webglTexture,z,Ve+en):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Xe.__webglTexture,z),$n?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Mt.__webglTexture,he,lt+en):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Mt.__webglTexture,he),z!==0?L.blitFramebuffer(_e,Ne,_e+xe,Ne+le,ye,Ge,ye+xe,Ge+le,L.COLOR_BUFFER_BIT,L.NEAREST):$n?L.copyTexSubImage3D(Me,he,ye,Ge,lt+en,_e,Ne,xe,le):L.copyTexSubImage2D(Me,he,ye,Ge,_e,Ne,xe,le);ue.bindFramebuffer(L.READ_FRAMEBUFFER,null),ue.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else $n?y.isDataTexture||y.isData3DTexture?L.texSubImage3D(Me,he,ye,Ge,lt,xe,le,ge,je,St,$e.data):I.isCompressedArrayTexture?L.compressedTexSubImage3D(Me,he,ye,Ge,lt,xe,le,ge,je,$e.data):L.texSubImage3D(Me,he,ye,Ge,lt,xe,le,ge,je,St,$e):y.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,he,ye,Ge,xe,le,je,St,$e.data):y.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,he,ye,Ge,$e.width,$e.height,je,$e.data):L.texSubImage2D(L.TEXTURE_2D,he,ye,Ge,xe,le,je,St,$e);ue.pixelStorei(L.UNPACK_ROW_LENGTH,Ct),ue.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Ye),ue.pixelStorei(L.UNPACK_SKIP_PIXELS,Qn),ue.pixelStorei(L.UNPACK_SKIP_ROWS,_t),ue.pixelStorei(L.UNPACK_SKIP_IMAGES,Gs),he===0&&I.generateMipmaps===!0&&I.mipmapsAutoUpdate===!0&&L.generateMipmap(Me),ue.unbindTexture()},this.initRenderTarget=function(y){Te.get(y).__webglFramebuffer===void 0&&Le.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Le.setTextureCube(y,0):y.isData3DTexture?Le.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Le.setTexture2DArray(y,0):Le.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){Y=0,H=0,te=null,ue.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return qt}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=We._getDrawingBufferColorSpace(e),t.unpackColorSpace=We._getUnpackColorSpace()}}});async function jh(){let i=await fetch("/models/hoodie-ts.bin");if(!i.ok)throw new Error(`Failed to load /models/hoodie-ts.bin (${i.status})`);let e=i.body.pipeThrough(new DecompressionStream("gzip")),t=await new Response(e).arrayBuffer(),s=new DataView(t).getUint32(0,!0),r=JSON.parse(new TextDecoder().decode(new Uint8Array(t,4,s))),a=4+s,o=new Float32Array(t,a,r.v*3);a+=r.v*12;let l=new Uint32Array(t,a,r.i),c=new Ht;return c.setAttribute("position",new zt(o,3)),c.setIndex(new zt(l,1)),c.computeVertexNormals(),c}var Qh=Nt(()=>{wl()});function ru(i){let e=document.createElement("canvas");e.width=i.w*i.px,e.height=i.h*i.px;let t=e.getContext("2d",{willReadFrequently:!1});return{c:e,g:t}}function au(i,e){i.setTransform(1,0,0,1,0,0),i.globalCompositeOperation="source-over",i.fillStyle="#000",i.fillRect(0,0,i.canvas.width,i.canvas.height),i.setTransform(e.px,0,0,e.px,(e.w/2-e.cx)*e.px,(e.cy+e.h/2)*e.px)}function El(i,e){i.beginPath();for(let t of v0[e])t.forEach(([n,s],r)=>r?i.lineTo($t(n),mi(yn(s))):i.moveTo($t(n),mi(yn(s)))),i.closePath()}function nu(i,e,t,n,s,r){i.font=`${s} ${t}px "${n}"`;let a=[...e].map(o=>i.measureText(o).width+r);return{ws:a,total:a.reduce((o,l)=>o+l,0)-r}}function pi(i,e,{x:t=0,y:n,cap:s,font:r,weight:a=700,gap:o=0,arc:l=0,fit:c=1/0,span:h=0}){i.font=`${a} 100px "${r}"`;let u=i.measureText("H").actualBoundingBoxAscent||100*.7,d=s/u;h&&(o=(h/d-nu(i,e,100,r,a,0).total)/(e.length-1)/100);let{ws:x,total:M}=nu(i,e,100,r,a,o*100);M*d>c&&(d=c/M);let p=t-M*d/2;return i.textBaseline="alphabetic",i.textAlign="center",[...e].forEach((m,b)=>{let A=(x[b]-o*100)*d,S=p+A/2;i.save(),i.translate(S,mi(n-l*S*S)),i.rotate(Math.atan(2*l*S)),i.scale(d,d),i.fillText(m,0,0),i.restore(),p+=x[b]*d}),M*d}function ou(){let{c:i,g:e}=ru($h);au(e,$h),e.lineJoin="miter",e.miterLimit=3;for(let t of"DTU")El(e,t),e.strokeStyle=ks,e.lineWidth=.86,e.stroke();for(let t of"DTU")El(e,t),e.strokeStyle=x0,e.lineWidth=.56,e.stroke();for(let t of"DTU")El(e,t),e.fillStyle=ks,e.fill("evenodd");return e.fillStyle="#000",e.fillRect(-16,mi(yn(323)),32,165*Ji),e.fillStyle=su,pi(e,"DELHI",{x:$t(635),y:yn(450),cap:2.3,font:zs,weight:700,span:670*Ji}),Os(e,$t(60),$t(255),yn(409),.24),Os(e,$t(1017),$t(1215),yn(409),.24),pi(e,"TECHNOLOGICAL UNIVERSITY",{y:yn(801),cap:1.1,font:zs,weight:700,span:1128*Ji,arc:.0062}),pi(e,"EST. 1941",{x:$t(633),y:yn(920),cap:.98,font:zs,weight:700,span:290*Ji}),Os(e,$t(283),$t(457),yn(900),.16),Os(e,$t(811),$t(987),yn(900),.16),i}function Al({seal:i,name:e,batch:t}){iu||=ru(eu);let{c:n,g:s}=iu;au(s,eu),i?s.drawImage(i,-fi/2,mi(di)-fi/2,fi,fi):(s.strokeStyle=ks,s.lineWidth=.13,s.setLineDash([.55,.4]),s.beginPath(),s.arc(0,mi(di),fi/2-.1,0,7),s.stroke(),s.setLineDash([]),s.fillStyle=ks,pi(s,"Official seal",{y:di+.35,cap:1,font:zs,weight:600}),pi(s,"artwork goes here",{y:di-1.5,cap:1,font:zs,weight:600})),s.fillStyle=ks;for(let r of[-1,1])for(let a of[-.42,.42])Os(s,r*6.8,r*11.43,di+a,.28);return e&&(s.fillStyle=su,pi(s,e.toUpperCase(),{y:di-fi/2-5.1,cap:1.6,font:tu,weight:400,gap:.16,fit:25}),t&&pi(s,`BATCH OF ${t}`,{y:di-fi/2-7.3,cap:.95,font:tu,weight:400,gap:.16})),n}function lu(i){let t=document.createElement("canvas");t.width=t.height=1200;let n=t.getContext("2d",{willReadFrequently:!0}),s=i.naturalWidth||1200,r=i.naturalHeight||1200,a=1200/Math.max(s,r);n.imageSmoothingQuality="high",n.drawImage(i,(1200-s*a)/2,(1200-r*a)/2,s*a,r*a);let o=n.getImageData(0,0,1200,1200),l=o.data,c=0;for(let f=3;f<l.length;f+=4)l[f]<20&&c++;let h=c/(1200*1200)<.03;for(let f=0;f<l.length;f+=4){let u=(l[f]*.299+l[f+1]*.587+l[f+2]*.114)/255,d=h?Math.min(1,Math.max(0,(.92-u)/.45)):l[f+3]/255*Math.min(1,Math.max(0,(.97-u)/.2));l[f]=255,l[f+1]=l[f+2]=0,l[f+3]=d*255}return n.putImageData(o,0,0),t}var $h,eu,zs,tu,ks,x0,su,mi,v0,Ji,$t,yn,Os,di,fi,iu,Tl=Nt(()=>{$h={w:32,h:27,cx:0,cy:46.4,px:64},eu={w:36,h:36,cx:0,cy:44,px:56},zs="Bitter DTU",tu="Graduate DTU",ks="#f00",x0="#0f0",su="#00f";mi=i=>-i,v0={D:[[[77,160],[318,97],[385,157],[385,600],[326,672],[77,736],[77,648],[105,641],[105,237],[77,244]],[[189,212],[272,190],[301,218],[301,578],[272,606],[189,619]]],T:[[[452,73],[539,66],[632,63],[725,66],[802,73],[802,203],[722,203],[718,160],[675,158],[675,580],[712,580],[712,664],[555,664],[555,580],[590,580],[590,158],[547,160],[540,203],[452,203]]],U:[[[862,82],[1008,108],[1008,193],[977,189],[977,595],[1010,620],[1085,626],[1104,604],[1104,212],[1066,205],[1066,121],[1208,165],[1208,253],[1188,247],[1188,664],[1125,716],[950,674],[896,604],[896,170],[862,164]]]},Ji=.0255,$t=i=>(i-640)*Ji,yn=i=>58.34-i*Ji;Os=(i,e,t,n,s)=>i.fillRect(Math.min(e,t),mi(n)-s/2,Math.abs(t-e),s);di=49,fi=11.43});var y0,M0,Ya,Kn,S0,Xa,cu=Nt(()=>{wl();Qh();Tl();y0=`
varying vec3 vRest; varying vec3 vObj; varying vec3 vNo;
uniform float uSwing;     // string pendulum swing from motion
uniform float uHoodBounce;// up-down cap/hood bounce on scroll
uniform float uFabricLag; // sleeve & fleece softness lag from motion
`,M0=`
varying vec3 vRest; varying vec3 vObj; varying vec3 vNo;
uniform vec3 uBody, uInk, uLine, uSmall, uStripe, uPiping, uTrim;
uniform sampler2D tFront, tBack; uniform vec4 uFront, uBack; uniform float uBright; uniform vec2 uYaw;
float h31(vec3 p){ p=fract(p*.1031); p+=dot(p,p.yzx+33.33); return fract((p.x+p.y)*p.z); }
float vn(vec3 p){ vec3 i=floor(p),f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(mix(h31(i),h31(i+vec3(1,0,0)),f.x),mix(h31(i+vec3(0,1,0)),h31(i+vec3(1,1,0)),f.x),f.y),
             mix(mix(h31(i+vec3(0,0,1)),h31(i+vec3(1,0,1)),f.x),mix(h31(i+vec3(0,1,1)),h31(i+vec3(1,1,1)),f.x),f.y),f.z); }
float ribMask(vec3 r){
  float hem = smoothstep(5.4, 4.6, r.y) * step(abs(r.x), 21.0);
  float cuff = smoothstep(58.5, 60.0, abs(r.x));
  return max(hem, cuff);
}
float height(vec3 r, float lod){
  float h=((vn(r*vec3(9.,6.,9.))-.5)*.012 + (vn(r*vec3(24.,14.,24.))-.5)*.010)*lod + (vn(r*.9)-.5)*.05;
  float rib=ribMask(r);
  if(rib>0.){
    float phase = abs(r.x) > 58.0 ? r.y * 5.0 : r.x * 4.5;
    h += rib * 0.036 * cos(phase) * lod;
  }
  return h;
}
vec3 gAlbedo; float gInk;
void fabric(){
  vec3 r=vRest; vec3 n=normalize(vNo);
  vec3 col=mix(uBody, uTrim, ribMask(r)); gInk=0.;
  float fine=vn(r*9.)*.55+vn(r*21.)*.45;

  // Varsity sleeve stripe & piping along the exact top ridge of each sleeve (|x| 19.5..57.8)
  float ax = abs(r.x);
  float tSl = clamp((ax - 19.5) / 38.5, 0.0, 1.0);
  float yMinSl = mix(55.0, 21.5, tSl);
  float isSleeve = smoothstep(19.0, 20.0, ax) * (1.0 - smoothstep(57.5, 58.3, ax)) * smoothstep(yMinSl - 1.2, yMinSl + 1.2, r.y) * step(r.y, 65.5);
  if (isSleeve > 0.001) {
    float zCenter = -2.6
      - 1.1 * smoothstep(30.0, 38.0, ax) * (1.0 - smoothstep(38.0, 44.0, ax))
      + 7.3 * smoothstep(40.0, 58.0, ax);
    float w = abs(r.z - zCenter) / 1.45;
    float aa = min(fwidth(w) * 0.75 + 0.02, 0.25);
    float s = (1.0 - smoothstep(1.0 - aa, 1.0 + aa, w)) * isSleeve;
    float p = (1.0 - smoothstep(1.26 - aa, 1.26 + aa, w)) * (1.0 - s) * isSleeve;
    col = mix(col, uPiping, p);
    col = mix(col, uStripe, s);
    gInk = max(gInk, s * 0.6);
  }

  // Front DTU crest (z > 2.0, |x| < 19.5, y 29.5..60.0)
  if (r.z > 2.0 && ax < 19.5 && r.y > 29.5 && r.y < 60.0) {
    vec2 uf = vec2((r.x - uFront.x) / uFront.z + 0.5, (r.y - uFront.y) / uFront.w + 0.5);
    vec3 m = texture2D(tFront, uf).rgb;
    if (uf.x > 0.0 && uf.x < 1.0 && uf.y > 0.0 && uf.y < 1.0) {
      float px = length(fwidth(r));
      float grain = 1.0 - (0.10 * smoothstep(0.55, 0.9, vn(r * 30.0)) * smoothstep(0.09, 0.03, px));
      m *= grain;
      col = mix(col, uInk, m.r);
      col = mix(col, uLine, m.g * step(0.0, uLine.r));
      col = mix(col, uSmall, m.b);
      gInk = max(m.r, m.b);
    }
  }

  // Back DelTech seal + Name/Batch (z < -2.0, |x| < 18.0, y 20..57)
  if (r.z < -2.0 && ax < 18.0 && r.y > 20.0 && r.y < 57.0) {
    vec2 ub = vec2((-r.x - uBack.x) / uBack.z + 0.5, (r.y - uBack.y) / uBack.w + 0.5);
    vec3 m = texture2D(tBack, ub).rgb;
    if (ub.x > 0.0 && ub.x < 1.0 && ub.y > 0.0 && ub.y < 1.0) {
      float px = length(fwidth(r));
      float grain = 1.0 - (0.10 * smoothstep(0.55, 0.9, vn(r * 30.0)) * smoothstep(0.09, 0.03, px));
      m *= grain;
      col = mix(col, uInk, m.r);
      col = mix(col, uLine, m.g * step(0.0, uLine.r));
      col = mix(col, uSmall, m.b);
      gInk = max(m.r, m.b);
    }
  }

  col *= mix(0.982 + 0.035 * fine, 1.0, gInk * 0.8);
  gAlbedo = col;
}
vec3 bumpN(vec3 N, vec3 vp, float face){
  vec3 dx=dFdx(vRest), dy=dFdy(vRest);
  float px=max(length(dx),length(dy));
  float lod=1.-smoothstep(.12,.34,px);
  float h0=height(vRest,lod), hx=height(vRest+dx,lod)-h0, hy=height(vRest+dy,lod)-h0;
  float k=1.-.35*gInk;
  vec3 sx=dFdx(vp), sy=dFdy(vp);
  vec3 R1=cross(sy,N), R2=cross(N,sx); float det=dot(sx,R1)*face; if(abs(det)<1e-10) return N;
  vec3 gr=sign(det)*(hx*R1+hy*R2)*k;
  return normalize(abs(det)*N-gr);
}
`,Ya={cream:{label:"Off White",body:"#F5F2EB",ink:"#74110F",line:null,small:"#74110F",stripe:"#7A1015",piping:"#FAF8F4",trim:"#F0ECE3",bright:1}},Kn=Math.PI*2,S0=(i,e,t,n)=>i+(e-i)*(1-Math.exp(-n*t)),Xa=class{constructor(e,{onView:t,onInteract:n,reduced:s}){Object.assign(this,{stage:e,onView:t,onInteract:n,reduced:s}),this.yaw=-.45,this.vel=0,this.target=0,this.mode=s?"hold":"idle",s&&(this.yaw=0),this.dirty=!0,this.visible=!0,this.swing=0,this.swingVel=0,this.hoodBounce=0,this.hoodBounceVel=0,this.fabricLag=0,this.fabricVel=0,this.prevYaw=this.yaw}async init(){let e=this.renderer=new Va({antialias:!0,alpha:!0,powerPreference:"high-performance"});e.setClearAlpha(0),e.shadowMap.enabled=!0,e.shadowMap.type=ai,e.toneMapping=Qt,this.canvas=e.domElement,this.stage.prepend(this.canvas);let t=this.scene=new hs;this.camera=new Rt(13,1,50,900),t.add(new ws("#fffaf6","#b8937a",1.48));let n=new ri("#fff6ec",1.48);n.position.set(-70,130,110),n.target.position.set(0,40,0),t.add(n,n.target);let s=new ri("#f6e9de",.68);s.position.set(120,40,70),t.add(s);let r=new ri("#fff",.45);r.position.set(30,60,-120),t.add(r),this.u={uBody:{value:new De},uInk:{value:new De},uLine:{value:new De},uSmall:{value:new De},uStripe:{value:new De},uPiping:{value:new De},uTrim:{value:new De},uBright:{value:1},uYaw:{value:new we(1,0)},uSwing:{value:0},uHoodBounce:{value:0},uFabricLag:{value:0},uFront:{value:new Qe(0,45,33,27)},uBack:{value:new Qe(0,41.5,27,27)},tFront:{value:this.tex(ou())},tBack:{value:this.tex(Al({}))}};let a=await jh(),o=this.root=new An,l=new Wn({roughness:1,metalness:0,side:jt});l.onBeforeCompile=M=>{Object.assign(M.uniforms,this.u),M.vertexShader=y0+M.vertexShader.replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
if (abs(position.x) > 24.5) {
  float armN = smoothstep(24.5, 62.0, abs(position.x));
  float thetaN = uFabricLag * armN * armN * 0.085;
  float csN = cos(thetaN), snN = sin(thetaN);
  float nx = objectNormal.x * csN - objectNormal.z * snN;
  float nz = objectNormal.x * snN + objectNormal.z * csN;
  objectNormal.x = nx;
  objectNormal.z = nz;
}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest=position; vObj=position; vNo=normal;
if (abs(position.x) > 24.5) {
  // Sleeves pivot smoothly around shoulder joints (x = \xB124.5)
  float arm = smoothstep(24.5, 62.0, abs(position.x));
  float sx = sign(position.x) * 24.5;
  float lx = transformed.x - sx, lz = transformed.z;
  float theta = uFabricLag * arm * arm * 0.085;
  float cs = cos(theta), sn = sin(theta);
  transformed.x = sx + lx * cs - lz * sn;
  transformed.z = lx * sn + lz * cs;
} else if (position.y > 54.0) {
  // Hood: subtle up-down settle on scroll
  float hoodFlex = smoothstep(54.0, 68.0, position.y) * (0.45 + 0.55 * smoothstep(8.0, -10.0, position.z));
  transformed.y += uHoodBounce * hoodFlex * 0.50;
} else {
  // Subtle lower torso twist
  float hem = smoothstep(24.0, 2.0, position.y);
  float theta = uFabricLag * hem * 0.015;
  float cs = cos(theta), sn = sin(theta);
  float rx = transformed.x * cs - transformed.z * sn;
  float rz = transformed.x * sn + transformed.z * cs;
  transformed.x = rx;
  transformed.z = rz;
}
`),M.fragmentShader=M.fragmentShader.replace("#include <common>",`#include <common>
`+M0).replace("#include <color_fragment>","fabric(); diffuseColor.rgb=gAlbedo;").replace("#include <normal_fragment_maps>","normal=bumpN(normal,-vViewPosition,faceDirection);").replace("#include <aomap_fragment>",`
          float cav=smoothstep(-0.3,0.6,vNo.y)*0.16+0.84;
          reflectedLight.indirectDiffuse*=mix(vec3(0.86,0.78,0.72),vec3(1.0),cav);
          reflectedLight.directSpecular*=0.; reflectedLight.indirectSpecular*=0.;`).replace("#include <opaque_fragment>",`
          float ndv=clamp(dot(normal,normalize(vViewPosition)),0.,1.);
          outgoingLight+=diffuseColor.rgb*pow(1.-ndv,3.)*.15*(1.-gInk);
          outgoingLight*=uBright;
          #include <opaque_fragment>`)};let c=new At(a,l);o.add(c);let h=new Wn({color:"#A08C78",roughness:.55,metalness:.35}),f=new Wn({color:"#F6DFC9",roughness:.95,metalness:0}),u=new Wn({color:"#D9CBBB",roughness:.65,metalness:.05}),d=M=>{M.onBeforeCompile=p=>{p.uniforms.uSwing=this.u.uSwing,p.uniforms.uHoodBounce=this.u.uHoodBounce,p.vertexShader=`uniform float uSwing, uHoodBounce;
`+p.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
float t = clamp((65.2 - position.y) / 20.0, 0.0, 1.0);
float dx = uSwing * (t * t * 2.8 + t * 0.4);
transformed.x += dx;
transformed.y += uHoodBounce * (1.0 - t) * 0.35 - 0.03 * dx * dx;
transformed.z += abs(uSwing) * t * t * 0.8;`)}};d(f),d(u),h.onBeforeCompile=M=>{M.uniforms.uHoodBounce=this.u.uHoodBounce,M.vertexShader=`uniform float uHoodBounce;
`+M.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
transformed.y += uHoodBounce * 0.35;`)};for(let M of[-1,1]){let p=new At(new Ms(.52,.15,12,24),h);p.position.set(M*2.8,65.2,9.65),p.rotation.set(-.52,M*.18,0),p.castShadow=!0,o.add(p);let m=new Oi([new D(M*2.8,65.2,9.6),new D(M*3,62.5,11.8),new D(M*3.3,58,14.3),new D(M*3.5,52,17),new D(M*3.6,46.2,17.8)]),b=new At(new Ss(m,36,.4,12,!1),f);b.castShadow=b.receiveShadow=!0,o.add(b);let A=new xs(.43,.38,1.7,12);A.translate(M*3.6,45.4,17.85);let S=new At(A,u);S.castShadow=S.receiveShadow=!0,o.add(S)}t.add(o);let x=this.floor=new At(new si(160,96),new Kt({transparent:!0,depthWrite:!1,vertexShader:"varying vec2 v; void main(){ v=uv*2.-1.; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:`varying vec2 v; void main(){ vec2 p=v*vec2(80.,48.);
        float a=exp(-dot(p/vec2(24.,12.),p/vec2(24.,12.)))*.22;
        vec2 q=vec2(abs(p.x)-48.,p.y-2.); a+=exp(-dot(q/vec2(10.,8.),q/vec2(10.,8.)))*.11;
        a=max(0.,a-.025)*smoothstep(0.,70.,gl_FragCoord.y); gl_FragColor=vec4(.20,.11,.07,a*smoothstep(1.,.6,max(abs(v.x),abs(v.y)))); }`}));x.rotation.x=-Math.PI/2,x.position.y=-3,o.add(x),this.setColour("cream"),this.bind(),this.ro=new ResizeObserver(()=>this.resize()),this.ro.observe(this.stage),this.resize(),this.io=new IntersectionObserver(([M])=>{this.visible=M.isIntersecting,this.visible&&this.kick()}),this.io.observe(this.stage),this.kick()}tex(e){let t=new ps(e);return t.colorSpace=hn,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t}setColour(e){let t=Ya[e],n=this.u;n.uBody.value.set(t.body),n.uInk.value.set(t.ink),n.uSmall.value.set(t.small),n.uLine.value.set(t.line||t.body),n.uStripe.value.set(t.stripe),n.uPiping.value.set(t.piping),n.uTrim.value.set(t.trim),n.uBright.value=t.bright,this.kick()}setBack(e){Al(e),this.u.tBack.value.needsUpdate=!0,this.kick()}resize(){let e=this.stage.clientWidth,t=this.stage.clientHeight;if(!e||!t)return;this.renderer.setPixelRatio(Math.min(devicePixelRatio||1,2)),this.renderer.setSize(e,t,!1);let n=this.camera;n.aspect=e/t;let s=Math.tan(Oa.degToRad(n.fov/2)),r=Math.max(90/2/s,132/2/s/n.aspect),a=Oa.degToRad(2.2),o=40;n.position.set(0,o+Math.sin(a)*r,Math.cos(a)*r),n.near=Math.max(5,r-120),n.far=r+120,n.lookAt(0,o,0),n.updateProjectionMatrix(),this.draw()}bind(){let e=this.stage,t=null,n=0,s=0;e.addEventListener("pointerdown",o=>{o.target.closest("button")||o.pointerType==="mouse"&&o.button||(t=o.pointerId,n=o.clientX,s=o.timeStamp,this.vel=0,this.mode="drag",e.setPointerCapture(t),e.classList.add("grabbing"),this.touch())}),e.addEventListener("pointermove",o=>{if(o.pointerId!==t)return;let l=Kn/Math.max(420,e.clientWidth*.95),c=(o.clientX-n)*l,h=Math.max(1,o.timeStamp-s)/1e3;this.yaw+=c,this.vel=this.vel*.6+c/h*.4,n=o.clientX,s=o.timeStamp,this.kick()});let r=o=>{o.pointerId===t&&(t=null,e.classList.remove("grabbing"),(o.timeStamp-s>90||this.reduced)&&(this.vel=0),this.vel=Math.max(-7,Math.min(7,this.vel)),this.mode="inertia",this.kick())};e.addEventListener("pointerup",r),e.addEventListener("pointercancel",r),e.addEventListener("keydown",o=>{let l={ArrowLeft:-1,ArrowRight:1}[o.key];o.target===e&&(l&&(this.touch(),this.to(Math.round(this.yaw/(Kn/24)+l)*(Kn/24),!0),o.preventDefault()),o.key==="Home"&&(this.view("front"),o.preventDefault()),o.key==="End"&&(this.view("back"),o.preventDefault()))});let a=window.scrollY;addEventListener("scroll",()=>{if(!this.visible||this.reduced){a=window.scrollY;return}let o=window.scrollY-a;a=window.scrollY,o&&(this.hoodBounceVel+=Math.max(-5.5,Math.min(5.5,o*.085)),this.kick())},{passive:!0})}touch(){this.touched||(this.touched=!0,this.onInteract?.())}to(e,t){t||(e+=Math.round((this.yaw-e)/Kn)*Kn),this.target=e,this.mode="ease",this.vel=0,this.reduced&&(this.yaw=e,this.mode="hold"),this.kick()}view(e){this.touch(),this.to({front:0,back:Math.PI,side:-Math.PI/2}[e])}scrollTo(e){this.mode!=="drag"&&(this.touch(),this.to(e))}kick(){this.dirty=!0,!this.raf&&this.visible&&this.root&&(this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.tick(e)))}tick(e){this.raf=0;let t=Math.min(.12,Math.max(0,(e-this.last)/1e3));this.last=e;let n=!0;if(this.mode==="idle"?this.yaw+=t*.34:this.mode==="inertia"?(this.yaw+=this.vel*t,this.vel*=Math.exp(-2.6*t),Math.abs(this.vel)<.02&&(this.vel=0,this.mode="hold")):this.mode==="ease"?(this.yaw=S0(this.yaw,this.target,t,6.5),Math.abs(this.yaw-this.target)<8e-4&&(this.yaw=this.target,this.mode="hold")):n=!1,t>0&&!this.reduced){let r=(this.yaw-this.prevYaw)/t;this.prevYaw=this.yaw;let a=Math.max(-1.2,Math.min(1.2,-r*.32));this.swingVel+=((a-this.swing)*30-this.swingVel*2.6)*t,this.swing+=this.swingVel*t,this.swing=Math.max(-1.3,Math.min(1.3,this.swing)),this.hoodBounceVel+=(-this.hoodBounce*24-this.hoodBounceVel*4)*t,this.hoodBounce+=this.hoodBounceVel*t,this.hoodBounce=Math.max(-1,Math.min(1,this.hoodBounce));let o=Math.max(-1,Math.min(1,-r*.28));this.fabricVel+=((o-this.fabricLag)*22-this.fabricVel*4.2)*t,this.fabricLag+=this.fabricVel*t,this.fabricLag=Math.max(-1.1,Math.min(1.1,this.fabricLag)),this.u.uSwing.value=this.swing,this.u.uHoodBounce.value=this.hoodBounce,this.u.uFabricLag.value=this.fabricLag}let s=Math.abs(this.swing)>.003||Math.abs(this.swingVel)>.01||Math.abs(this.hoodBounce)>.003||Math.abs(this.hoodBounceVel)>.01||Math.abs(this.fabricLag)>.003||Math.abs(this.fabricVel)>.01;this.draw(),(n||this.mode==="drag"||s)&&this.visible&&(this.raf=requestAnimationFrame(r=>this.tick(r)))}draw(){if(!this.root)return;this.root.rotation.y=this.yaw,this.u.uYaw.value.set(Math.cos(this.yaw),Math.sin(this.yaw)),this.renderer.render(this.scene,this.camera);let e=(this.yaw%Kn+Kn)%Kn,t=e*180/Math.PI,n=s=>Math.min(Math.abs(t-s),360-Math.abs(t-s))<22;this.onView?.(n(0)?"front":n(180)?"back":n(90)||n(270)?"side":null,Math.round(t))}}});var hu,Cl,uu,du,Rl,Ja,fu=Nt(()=>{hu="DTU-HERITAGE-HOODIE",Cl=["XS","S","M","L","XL","XXL"],uu={XS:[54,66,57],S:[57,68,58],M:[60,70,59],L:[63,72,60],XL:[66,74,61],XXL:[69,76,62]},du=Array.from({length:41},(i,e)=>2030-e),Rl=2027,Ja=20});var R0=Mu(()=>{Vl();Wl();Yl();ql();Kl();Ql();tc();cu();Tl();fu();var E0,A0=()=>E0||=Promise.all([["Besley DTU",Xl,"600"],["Bitter DTU",Jl,"500"],["Bitter DTU",Zl,"700"],["Graduate DTU",jl,"400"],["Hanken DTU",$l,"100 900"]].map(async([i,e,t])=>{let n=new FontFace(i,e.buffer,{weight:t});await n.load(),document.fonts.add(n)})).catch(i=>console.warn("[dtu-hoodie] fonts",i)),T0=()=>`
<div class="wrap">
  <div class="viewer">
    <div class="stage" tabindex="0" role="slider" aria-label="Hoodie, 360 degree view. Use the left and right arrow keys to rotate." aria-valuemin="0" aria-valuemax="360" aria-valuenow="0" aria-valuetext="Front">
      <p class="msg">Loading the 3D view</p>
      <p class="hint" aria-hidden="true"><svg viewBox="0 0 26 14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 1.5 7 6 12M20 2l4.500 5L20 12M2 7h22"/></svg>Drag to rotate</p>
    </div>
    <div class="views" role="group" aria-label="Hoodie view">
      ${["Front","Back","Side"].map(i=>`<button type="button" data-view="${i.toLowerCase()}" aria-pressed="false">${i}</button>`).join("")}
    </div>
  </div>
  <form class="panel" novalidate>
    <section class="chapter">
      <div><h2>The DTU Heritage Hoodie</h2><p class="lede">Heavyweight brushed fleece with a varsity front and the university seal on the back.</p></div>
      <fieldset class="size"><div class="row"><legend>Size</legend><button type="button" class="link" data-guide>Size guide</button></div>
        <div class="sizes">${Cl.map(i=>`<label><input type="radio" name="size" value="${i}" ${i==="L"?"checked":""}>${i}</label>`).join("")}</div>
      </fieldset>
      <div class="put-name-card" data-name>
        <div class="row" style="margin-bottom:0.25rem">
          <legend style="display:flex;align-items:center;gap:0.5rem">
            <span class="sq-box"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></span>
            <b>Put your name &amp; batch under the seal</b>
          </legend>
          <span class="val" style="font-size:0.8125rem">Optional</span>
        </div>
        <p class="lede" style="margin-top:0;font-size:0.875rem">Customizes the back print under the heritage university seal.</p>
        <div class="fields" style="display:grid;grid-template-columns:1fr 1fr;gap:0.75rem">
          <div class="field"><div class="row" style="margin:0"><label class="lab" for="nm">Name</label><span class="val" id="ct">0 of ${Ja}</span></div>
            <input id="nm" name="name" type="text" maxlength="${Ja}" autocomplete="off" autocapitalize="characters" spellcheck="false" placeholder="e.g. Rahul Sharma" aria-describedby="ct"></div>
          <div class="field"><div class="row" style="margin:0"><label class="lab" for="bt">Batch</label><span class="val">Year</span></div>
            <select id="bt" name="batch">${du.map(i=>`<option ${i===Rl?"selected":""}>${i}</option>`).join("")}</select></div>
        </div>
      </div>
    </section>
    <div class="buy">
      <div><p class="price"></p><p class="sum"></p></div>
      <button type="submit" class="add">Add to cart</button>
      <p class="note" role="status" aria-live="polite"></p>
    </div>
  <div class="dtu-highlights">
      <div class="dtu-hl-item"><p class="dtu-hl-title">400 GSM Fleece</p><p class="dtu-hl-sub">Heavyweight combed cotton</p></div>
      <div class="dtu-hl-item"><p class="dtu-hl-title">AB4 Pick-up</p><p class="dtu-hl-sub">Free campus collection</p></div>
      <div class="dtu-hl-item"><p class="dtu-hl-title">Pay on Delivery</p><p class="dtu-hl-sub">Cash or UPI at pickup</p></div>
      <div class="dtu-hl-item"><p class="dtu-hl-title">Code DTU33</p><p class="dtu-hl-sub">33% off first 50 orders</p></div>
    </div>
  </form>
</div>
<dialog aria-labelledby="sg"><div class="dlg">
  <div class="row"><h3 id="sg">Size guide</h3><button type="button" class="x" aria-label="Close size guide"><svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"><path d="M1 1l12 12M13 1 1 13"/></svg></button></div>
  <p class="val">Garment measured flat, in centimetres. Compare with a hoodie you already own.</p>
  <table><thead><tr><th scope="col">Size</th><th scope="col">Chest</th><th scope="col">Length</th><th scope="col">Sleeve</th></tr></thead>
  <tbody>${Cl.map(i=>`<tr data-s="${i}"><th scope="row">${i}</th>${uu[i].map(e=>`<td>${e}</td>`).join("")}</tr>`).join("")}</tbody></table>
</div></dialog>`,Hs=[[0,0],[.16,0],[.42,Math.PI],[.64,Math.PI],[.92,Math.PI*2],[1,Math.PI*2]],C0=i=>i*i*(3-2*i);function pu(i){for(let e=1;e<Hs.length;e++)if(i<=Hs[e][0]){let[t,n]=Hs[e-1],[s,r]=Hs[e];return n+(r-n)*C0((i-t)/(s-t||1))}return Hs.at(-1)[1]}var Il=class extends HTMLElement{connectedCallback(){if(this.shadowRoot)return;let e=this.attachShadow({mode:"open"});e.innerHTML=`<style>${Gl}</style>${T0()}`,this.$=t=>e.querySelector(t),this.$$=t=>[...e.querySelectorAll(t)],this.state={colour:"cream",size:"L",name:"",batch:String(Rl)},this.price=Number(this.getAttribute("price"))||1899,this.currency=this.getAttribute("currency")||"INR",this.$(".price").innerHTML=`<span style="font-size:0.75rem;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:var(--ink-soft);margin-right:0.35rem">MRP</span><del style="color:var(--ink-soft);font-size:1.1rem;font-weight:500;margin-right:0.45rem;opacity:0.75">₹1,499</del>${new Intl.NumberFormat("en-IN",{style:"currency",currency:this.currency,maximumFractionDigits:0}).format(this.price)}`,this.wire(),this.summary(),this.start()}async start(){await A0();let e=this.$(".stage");try{let t;this.viewer=new Xa(e,{reduced:matchMedia("(prefers-reduced-motion: reduce)").matches,onInteract:()=>e.classList.add("touched"),onView:(n,s)=>{e.setAttribute("aria-valuenow",s),n!==t&&(t=n,e.setAttribute("aria-valuetext",n?n[0].toUpperCase()+n.slice(1):"Turning"),this.$$("[data-view]").forEach(r=>r.setAttribute("aria-pressed",r.dataset.view===n)))}}),await this.viewer.init(),this.$(".msg").remove(),this.refreshBack(),this.loadSeal(),this.onScroll(),this.dispatchEvent(new CustomEvent("dtu:ready",{bubbles:!0,composed:!0}))}catch(t){console.error("[dtu-hoodie]",t),this.$(".msg").textContent="The 3D view needs WebGL, which is off in this browser. You can still order below.",this.$(".hint").remove(),this.viewer=null}}loadSeal(){let e=this.getAttribute("seal")||ec;if(!e)return console.warn("[dtu-hoodie] No seal supplied. Set the seal attribute or add src/dtu-seal.svg and rebuild.");let t=new Image;t.crossOrigin="anonymous",t.onload=()=>{this.seal=lu(t),this.refreshBack()},t.onerror=()=>console.warn("[dtu-hoodie] Seal file could not be loaded:",e.slice(0,80)),t.src=e}refreshBack(){this.viewer?.root&&this.viewer.setBack({seal:this.seal,name:this.state.name.trim(),batch:this.state.batch})}summary(){let e=this.state;this.$(".sum").textContent=`${Ya[e.colour].label}${e.size?`, ${e.size}`:""}`,this.$$("tr[data-s]").forEach(t=>t.classList.toggle("on",t.dataset.s===e.size))}wire(){let e=this.state,t=this.$(".panel"),n=this.$(".note"),s=this.$("#nm"),r=this.$("dialog"),a=this.$(".add"),o=()=>{a?.dataset.visitCart&&(delete a.dataset.visitCart,a.textContent="Add to cart")};this.$$("[data-view]").forEach(c=>c.addEventListener("click",()=>this.viewer?.view(c.dataset.view))),t.addEventListener("change",c=>{let{name:h,value:f}=c.target;h==="size"&&(e.size=f,this.$(".size").classList.remove("need"),o()),h==="batch"&&(e.batch=f,this.refreshBack(),this.viewer?.view("back"),o()),n.textContent="",this.summary()}),s.addEventListener("input",()=>{e.name=s.value,this.$("#ct").textContent=`${s.value.length} of ${Ja}`,n.textContent="",this.refreshBack(),this.viewer?.view("back"),o()}),s.addEventListener("focus",()=>this.viewer?.view("back")),this.$("[data-name]").addEventListener("click",c=>{if(c.target.closest("input,select,label,option"))return;let h=matchMedia("(prefers-reduced-motion: reduce)").matches;s.closest(".chapter").scrollIntoView({behavior:h?"auto":"smooth",block:"start"}),s.focus({preventScroll:!0})}),this.$("[data-guide]").addEventListener("click",()=>r.showModal()),this.$(".x").addEventListener("click",()=>r.close()),r.addEventListener("click",c=>{c.target===r&&r.close()}),t.addEventListener("submit",c=>{c.preventDefault();let s=e.size||"L";e.size=s;let h=e.name.trim(),f={sku:hu,colourway:e.colour,colourwayLabel:Ya[e.colour].label,size:s,name:h||null,batch:h?e.batch:null,price:this.price,currency:this.currency,quantity:1};this.dispatchEvent(new CustomEvent("dtu:add-to-cart",{bubbles:!0,composed:!0,cancelable:!0,detail:f}));n.textContent=`Added: ${f.colourwayLabel}, size ${s}${h?`, ${h.toUpperCase()}, batch of ${e.batch}`:""}.`;if(a){a.textContent="Added to Bag ✓";setTimeout(()=>{if(a)a.textContent="Add to cart"},1800)}});let l=0;this._scroll=()=>{l||(l=requestAnimationFrame(()=>{l=0,this.onScroll()}))},addEventListener("scroll",this._scroll,{passive:!0}),addEventListener("resize",this._scroll)}onScroll(){if(!this.viewer?.root)return;let e=this.getBoundingClientRect(),t=e.height-innerHeight;if(t<40)return;let n=Math.min(1,Math.max(0,-e.top/t));if(this._p===void 0){this._p=n,n>.02&&this.viewer.scrollTo(pu(n));return}Math.abs(n-this._p)<.0015||(this._p=n,this.viewer.scrollTo(pu(n)))}disconnectedCallback(){removeEventListener("scroll",this._scroll),removeEventListener("resize",this._scroll)}};customElements.get("dtu-hoodie")||customElements.define("dtu-hoodie",Il)});R0();})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
