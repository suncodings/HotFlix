!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipe=t()}(this,function(){"use strict";return function(m,n,e,t){var f={features:null,bind:function(e,t,n,i){var o=(i?"remove":"add")+"EventListener";t=t.split(" ");for(var a=0;a<t.length;a++)t[a]&&e[o](t[a],n,!1)},isArray:function(e){return e instanceof Array},createEl:function(e,t){t=document.createElement(t||"div");return e&&(t.className=e),t},getScrollY:function(){var e=window.pageYOffset;return void 0!==e?e:document.documentElement.scrollTop},unbind:function(e,t,n){f.bind(e,t,n,!0)},removeClass:function(e,t){t=new RegExp("(\\s|^)"+t+"(\\s|$)");e.className=e.className.replace(t," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")},addClass:function(e,t){f.hasClass(e,t)||(e.className+=(e.className?" ":"")+t)},hasClass:function(e,t){return e.className&&new RegExp("(^|\\s)"+t+"(\\s|$)").test(e.className)},getChildByClass:function(e,t){for(var n=e.firstChild;n;){if(f.hasClass(n,t))return n;n=n.nextSibling}},arraySearch:function(e,t,n){for(var i=e.length;i--;)if(e[i][n]===t)return i;return-1},extend:function(e,t,n){for(var i in t)if(t.hasOwnProperty(i)){if(n&&e.hasOwnProperty(i))continue;e[i]=t[i]}},easing:{sine:{out:function(e){return Math.sin(e*(Math.PI/2))},inOut:function(e){return-(Math.cos(Math.PI*e)-1)/2}},cubic:{out:function(e){return--e*e*e+1}}},detectFeatures:function(){if(f.features)return f.features;var e,t,n=f.createEl().style,i="",o={};o.oldIE=document.all&&!document.addEventListener,o.touch="ontouchstart"in window,window.requestAnimationFrame&&(o.raf=window.requestAnimationFrame,o.caf=window.cancelAnimationFrame),o.pointerEvent=navigator.pointerEnabled||navigator.msPointerEnabled,o.pointerEvent||(e=navigator.userAgent,!/iP(hone|od)/.test(navigator.platform)||(t=navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/))&&0<t.length&&(1<=(t=parseInt(t[1],10))&&t<8&&(o.isOldIOSPhone=!0)),t=(t=e.match(/Android\s([0-9\.]*)/))?t[1]:0,1<=(t=parseFloat(t))&&(t<4.4&&(o.isOldAndroid=!0),o.androidVersion=t),o.isMobileOpera=/opera mini|opera mobi/i.test(e));for(var a,r,l,s=["transform","perspective","animationName"],u=["","webkit","Moz","ms","O"],c=0;c<4;c++){i=u[c];for(var d=0;d<3;d++)a=s[d],r=i+(i?a.charAt(0).toUpperCase()+a.slice(1):a),!o[a]&&r in n&&(o[a]=r);i&&!o.raf&&(i=i.toLowerCase(),o.raf=window[i+"RequestAnimationFrame"],o.raf&&(o.caf=window[i+"CancelAnimationFrame"]||window[i+"CancelRequestAnimationFrame"]))}return o.raf||(l=0,o.raf=function(e){var t=(new Date).getTime(),n=Math.max(0,16-(t-l)),i=window.setTimeout(function(){e(t+n)},n);return l=t+n,i},o.caf=function(e){clearTimeout(e)}),o.svg=!!document.createElementNS&&!!document.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect,f.features=o}};f.detectFeatures(),f.features.oldIE&&(f.bind=function(e,t,n,i){t=t.split(" ");for(var o,a=(i?"detach":"attach")+"Event",r=function(){n.handleEvent.call(n)},l=0;l<t.length;l++)if(o=t[l])if("object"==typeof n&&n.handleEvent){if(i){if(!n["oldIE"+o])return!1}else n["oldIE"+o]=r;e[a]("on"+o,n["oldIE"+o])}else e[a]("on"+o,n)});var h=this,y={allowPanToNext:!0,spacing:.12,bgOpacity:1,mouseUsed:!1,loop:!0,pinchToClose:!0,closeOnScroll:!0,closeOnVerticalDrag:!0,verticalDragRange:.75,hideAnimationDuration:333,showAnimationDuration:333,showHideOpacity:!1,focus:!0,escKey:!0,arrowKeys:!0,mainScrollEndFriction:.35,panEndFriction:.35,isClickableElement:function(e){return"A"===e.tagName},getDoubleTapZoom:function(e,t){return e||t.initialZoomLevel<.7?1:1.33},maxSpreadZoom:1.33,modal:!0,scaleMode:"fit"};f.extend(y,t);function i(){return{x:0,y:0}}function o(e,t){f.extend(h,t.publicMethods),je.push(e)}function r(e){var t=Xt();return t-1<e?e-t:e<0?t+e:e}function a(e,t){return et[e]||(et[e]=[]),et[e].push(t)}function x(e){var t=et[e];if(t){var n=Array.prototype.slice.call(arguments);n.shift();for(var i=0;i<t.length;i++)t[i].apply(h,n)}}function c(){return(new Date).getTime()}function g(e){Ne=e,h.bg.style.opacity=e*y.bgOpacity}function l(e,t,n,i,o){(!Qe||o&&o!==h.currItem)&&(i/=(o||h.currItem).fitRatio),e[le]=j+t+"px, "+n+"px"+J+" scale("+i+")"}function d(e,t){var n;!y.loop&&t&&(n=W+(Ke.x*Xe-e)/Ke.x,t=Math.round(e-wt.x),(n<0&&0<t||n>=Xt()-1&&t<0)&&(e=wt.x+t*y.mainScrollEndFriction)),wt.x=e,it(e,B)}function s(e,t){var n=bt[e]-Ve[e];return We[e]+Ye[e]+n-t/$*n}function v(e,t){e.x=t.x,e.y=t.y,t.id&&(e.id=t.id)}function u(e){e.x=Math.round(e.x),e.y=Math.round(e.y)}function p(e,t){return e=jt(h.currItem,Ge,e),t&&(Ze=e),e}function w(e){return(e=e||h.currItem).initialZoomLevel}function b(e){return 0<(e=e||h.currItem).w?y.maxSpreadZoom:1}function I(e,t,n,i){return i===h.currItem.initialZoomLevel?(n[e]=h.currItem.initialPosition[e],!0):(n[e]=s(e,i),n[e]>t.min[e]?(n[e]=t.min[e],!0):n[e]<t.max[e]&&(n[e]=t.max[e],!0))}function C(e){var t="";y.escKey&&27===e.keyCode?t="close":y.arrowKeys&&(37===e.keyCode?t="prev":39===e.keyCode&&(t="next")),t&&(e.ctrlKey||e.altKey||e.shiftKey||e.metaKey||(e.preventDefault?e.preventDefault():e.returnValue=!1,h[t]()))}function D(e){e&&(Se||Me||Fe||Ie)&&(e.preventDefault(),e.stopPropagation())}function T(){h.setScrollOffset(0,f.getScrollY())}function M(e){rt[e]&&(rt[e].raf&&de(rt[e].raf),lt--,delete rt[e])}function S(e){rt[e]&&M(e),rt[e]||(lt++,rt[e]={})}function A(){for(var e in rt)rt.hasOwnProperty(e)&&M(e)}function E(e,t,n,i,o,a,r){var l,s=c();S(e);var u=function(){if(rt[e]){if(l=c()-s,i<=l)return M(e),a(n),void(r&&r());a((n-t)*o(l/i)+t),rt[e].raf=ce(u)}};u()}function O(e,t){return yt.x=Math.abs(e.x-t.x),yt.y=Math.abs(e.y-t.y),Math.sqrt(yt.x*yt.x+yt.y*yt.y)}function k(e,t){return Mt.prevent=!Tt(e.target,y.isClickableElement),x("preventDragEvent",e,t,Mt),Mt.prevent}function R(e,t){return t.x=e.pageX,t.y=e.pageY,t.id=e.identifier,t}function Z(e,t,n){n.x=.5*(e.x+t.x),n.y=.5*(e.y+t.y)}function P(){var e=Be.y-h.currItem.initialPosition.y;return 1-Math.abs(e/(Ge.y/2))}function F(e){for(;0<Et.length;)Et.pop();return se?(He=0,mt.forEach(function(e){0===He?Et[0]=e:1===He&&(Et[1]=e),He++})):-1<e.type.indexOf("touch")?e.touches&&0<e.touches.length&&(Et[0]=R(e.touches[0],St),1<e.touches.length&&(Et[1]=R(e.touches[1],At))):(St.x=e.pageX,St.y=e.pageY,St.id="",Et[0]=St),Et}function L(e,t){var n,i,o,a=Be[e]+t[e],r=0<t[e],l=wt.x+t.x,s=wt.x-ft.x,u=a>Ze.min[e]||a<Ze.max[e]?y.panEndFriction:1,a=Be[e]+t[e]*u;return!y.allowPanToNext&&q!==h.currItem.initialZoomLevel||(Pe?"h"!==Le||"x"!==e||Me||(r?(a>Ze.min[e]&&(u=y.panEndFriction,Ze.min[e],n=Ze.min[e]-We[e]),(n<=0||s<0)&&1<Xt()?(o=l,s<0&&l>ft.x&&(o=ft.x)):Ze.min.x!==Ze.max.x&&(i=a)):(a<Ze.max[e]&&(u=y.panEndFriction,Ze.max[e],n=We[e]-Ze.max[e]),(n<=0||0<s)&&1<Xt()?(o=l,0<s&&l<ft.x&&(o=ft.x)):Ze.min.x!==Ze.max.x&&(i=a))):o=l,"x"!==e)?void(Fe||Ee||q>h.currItem.fitRatio&&(Be[e]+=t[e]*u)):(void 0!==o&&(d(o,!0),Ee=o!==ft.x),Ze.min.x!==Ze.max.x&&(void 0!==i?Be.x=i:Ee||(Be.x+=t.x*u)),void 0!==o)}function z(e){var t;"mousedown"===e.type&&0<e.button||(Bt?e.preventDefault():Ce&&"mousedown"===e.type||(k(e,!0)&&e.preventDefault(),x("pointerDown"),se&&((t=f.arraySearch(mt,e.pointerId,"id"))<0&&(t=mt.length),mt[t]={x:e.pageX,y:e.pageY,id:e.pointerId}),e=(t=F(e)).length,Oe=null,A(),De&&1!==e||(De=ze=!0,f.bind(window,X,h),be=Ue=_e=Ie=Ee=Se=Te=Me=!1,Le=null,x("firstTouchStart",t),v(We,Be),Ye.x=Ye.y=0,v(dt,t[0]),v(pt,dt),ft.x=Ke.x*Xe,ht=[{x:dt.x,y:dt.y}],ve=ge=c(),p(q,!0),Ct(),Dt()),!ke&&1<e&&!Fe&&!Ee&&($=q,ke=Te=!(Me=!1),Ye.y=Ye.x=0,v(We,Be),v(st,t[0]),v(ut,t[1]),Z(st,ut,It),bt.x=Math.abs(It.x)-Be.x,bt.y=Math.abs(It.y)-Be.y,Re=O(st,ut))))}function _(e){var t,n;e.preventDefault(),se&&-1<(t=f.arraySearch(mt,e.pointerId,"id"))&&((n=mt[t]).x=e.pageX,n.y=e.pageY),De&&(n=F(e),Le||Se||ke?Oe=n:wt.x!==Ke.x*Xe?Le="h":(e=Math.abs(n[0].x-dt.x)-Math.abs(n[0].y-dt.y),10<=Math.abs(e)&&(Le=0<e?"h":"v",Oe=n)))}function N(e){if(ye.isOldAndroid){if(Ce&&"mouseup"===e.type)return;-1<e.type.indexOf("touch")&&(clearTimeout(Ce),Ce=setTimeout(function(){Ce=0},600))}x("pointerUp"),k(e,!1)&&e.preventDefault(),!se||-1<(n=f.arraySearch(mt,e.pointerId,"id"))&&(a=mt.splice(n,1)[0],navigator.pointerEnabled?a.type=e.pointerType||"mouse":(a.type={4:"mouse",2:"touch",3:"pen"}[e.pointerType],a.type||(a.type=e.pointerType||"mouse")));var t=F(e),n=t.length;if("mouseup"===e.type&&(n=0),2===n)return!(Oe=null);1===n&&v(pt,t[0]),0!==n||Le||Fe||(a||("mouseup"===e.type?a={x:e.pageX,y:e.pageY,type:"mouse"}:e.changedTouches&&e.changedTouches[0]&&(a={x:e.changedTouches[0].pageX,y:e.changedTouches[0].pageY,type:"touch"})),x("touchRelease",e,a));var i,o,a=-1;if(0===n&&(De=!1,f.unbind(window,X,h),Ct(),ke?a=0:-1!==vt&&(a=c()-vt)),vt=1===n?c():-1,a=-1!==a&&a<150?"zoom":"swipe",ke&&n<2&&(ke=!1,1===n&&(a="zoomPointerUp"),x("zoomGestureEnded")),Oe=null,Se||Me||Fe||Ie)if(A(),(we=we||kt()).calculateSwipeSpeed("x"),Ie)P()<y.verticalDragRange?h.close():(i=Be.y,o=Ne,E("verticalDrag",0,1,300,f.easing.cubic.out,function(e){Be.y=(h.currItem.initialPosition.y-i)*e+i,g((1-o)*e+o),tt()}),x("onVerticalDrag",1));else{if((Ee||Fe)&&0===n){if(Zt(a,we))return;a="zoomPointerUp"}if(!Fe)return"swipe"!==a?void Ft():void(!Ee&&q>h.currItem.fitRatio&&Rt(we))}}var U,H,Y,W,B,G,X,V,K,q,$,j,J,Q,ee,te,ne,ie,oe,ae,re,le,se,ue,ce,de,pe,me,fe,he,ye,xe,ge,ve,we,be,Ie,Ce,De,Te,Me,Se,Ae,Ee,Oe,ke,Re,Ze,Pe,Fe,Le,ze,_e,Ne,Ue,He,Ye=i(),We=i(),Be=i(),Ge={},Xe=0,Ve={},Ke=i(),qe=0,$e=!0,je=[],Je={},Qe=!1,et={},tt=function(e){Pe&&(e&&(q>h.currItem.fitRatio?Qe||(Jt(h.currItem,!1,!0),Qe=!0):Qe&&(Jt(h.currItem),Qe=!1)),l(Pe,Be.x,Be.y,q))},nt=function(e){e.container&&l(e.container.style,e.initialPosition.x,e.initialPosition.y,e.initialZoomLevel,e)},it=function(e,t){t[le]=j+e+"px, 0px"+J},ot=null,at=function(){ot&&(f.unbind(document,"mousemove",at),f.addClass(m,"pswp--has_mouse"),y.mouseUsed=!0,x("mouseUsed")),ot=setTimeout(function(){ot=null},100)},rt={},lt=0,t={shout:x,listen:a,viewportSize:Ge,options:y,isMainScrollAnimating:function(){return Fe},getZoomLevel:function(){return q},getCurrentIndex:function(){return W},isDragging:function(){return De},isZooming:function(){return ke},setScrollOffset:function(e,t){Ve.x=e,he=Ve.y=t,x("updateScrollOffset",Ve)},applyZoomPan:function(e,t,n,i){Be.x=t,Be.y=n,q=e,tt(i)},init:function(){if(!U&&!H){var e;h.framework=f,h.template=m,h.bg=f.getChildByClass(m,"pswp__bg"),pe=m.className,U=!0,ye=f.detectFeatures(),ce=ye.raf,de=ye.caf,le=ye.transform,fe=ye.oldIE,h.scrollWrap=f.getChildByClass(m,"pswp__scroll-wrap"),h.container=f.getChildByClass(h.scrollWrap,"pswp__container"),B=h.container.style,h.itemHolders=te=[{el:h.container.children[0],wrap:0,index:-1},{el:h.container.children[1],wrap:0,index:-1},{el:h.container.children[2],wrap:0,index:-1}],te[0].el.style.display=te[2].el.style.display="none",function(){if(le){var e=ye.perspective&&!ue;return j="translate"+(e?"3d(":"("),J=ye.perspective?", 0px)":")"}le="left",f.addClass(m,"pswp--ie"),it=function(e,t){t.left=e+"px"},nt=function(e){var t=1<e.fitRatio?1:e.fitRatio,n=e.container.style,i=t*e.w,t=t*e.h;n.width=i+"px",n.height=t+"px",n.left=e.initialPosition.x+"px",n.top=e.initialPosition.y+"px"},tt=function(){var e,t,n,i;Pe&&(e=Pe,n=(t=1<(i=h.currItem).fitRatio?1:i.fitRatio)*i.w,i=t*i.h,e.width=n+"px",e.height=i+"px",e.left=Be.x+"px",e.top=Be.y+"px")}}(),K={resize:h.updateSize,orientationchange:function(){clearTimeout(xe),xe=setTimeout(function(){Ge.x!==h.scrollWrap.clientWidth&&h.updateSize()},500)},scroll:T,keydown:C,click:D};var t=ye.isOldIOSPhone||ye.isOldAndroid||ye.isMobileOpera;for(ye.animationName&&ye.transform&&!t||(y.showAnimationDuration=y.hideAnimationDuration=0),e=0;e<je.length;e++)h["init"+je[e]]();n&&(h.ui=new n(h,f)).init(),x("firstUpdate"),W=W||y.index||0,(isNaN(W)||W<0||W>=Xt())&&(W=0),h.currItem=Gt(W),(ye.isOldIOSPhone||ye.isOldAndroid)&&($e=!1),m.setAttribute("aria-hidden","false"),y.modal&&($e?m.style.position="fixed":(m.style.position="absolute",m.style.top=f.getScrollY()+"px")),void 0===he&&(x("initialLayout"),he=me=f.getScrollY());t="pswp--open ";for(y.mainClass&&(t+=y.mainClass+" "),y.showHideOpacity&&(t+="pswp--animate_opacity "),t+=ue?"pswp--touch":"pswp--notouch",t+=ye.animationName?" pswp--css_animation":"",t+=ye.svg?" pswp--svg":"",f.addClass(m,t),h.updateSize(),G=-1,qe=null,e=0;e<3;e++)it((e+G)*Ke.x,te[e].el.style);fe||f.bind(h.scrollWrap,V,h),a("initialZoomInEnd",function(){h.setContent(te[0],W-1),h.setContent(te[2],W+1),te[0].el.style.display=te[2].el.style.display="block",y.focus&&m.focus(),f.bind(document,"keydown",h),ye.transform&&f.bind(h.scrollWrap,"click",h),y.mouseUsed||f.bind(document,"mousemove",at),f.bind(window,"resize scroll orientationchange",h),x("bindEvents")}),h.setContent(te[1],W),h.updateCurrItem(),x("afterInit"),$e||(Q=setInterval(function(){lt||De||ke||q!==h.currItem.initialZoomLevel||h.updateSize()},1e3)),f.addClass(m,"pswp--visible")}},close:function(){U&&(H=!(U=!1),x("close"),f.unbind(window,"resize scroll orientationchange",h),f.unbind(window,"scroll",K.scroll),f.unbind(document,"keydown",h),f.unbind(document,"mousemove",at),ye.transform&&f.unbind(h.scrollWrap,"click",h),De&&f.unbind(window,X,h),clearTimeout(xe),x("unbindEvents"),Vt(h.currItem,null,!0,h.destroy))},destroy:function(){x("destroy"),Ht&&clearTimeout(Ht),m.setAttribute("aria-hidden","true"),m.className=pe,Q&&clearInterval(Q),f.unbind(h.scrollWrap,V,h),f.unbind(window,"scroll",h),Ct(),A(),et=null},panTo:function(e,t,n){n||(e>Ze.min.x?e=Ze.min.x:e<Ze.max.x&&(e=Ze.max.x),t>Ze.min.y?t=Ze.min.y:t<Ze.max.y&&(t=Ze.max.y)),Be.x=e,Be.y=t,tt()},handleEvent:function(e){e=e||window.event,K[e.type]&&K[e.type](e)},goTo:function(e){var t=(e=r(e))-W;qe=t,W=e,h.currItem=Gt(W),Xe-=t,d(Ke.x*Xe),A(),Fe=!1,h.updateCurrItem()},next:function(){h.goTo(W+1)},prev:function(){h.goTo(W-1)},updateCurrZoomItem:function(e){var t;e&&x("beforeChange",0),Pe=te[1].el.children.length?(t=te[1].el.children[0],f.hasClass(t,"pswp__zoom-wrap")?t.style:null):null,Ze=h.currItem.bounds,$=q=h.currItem.initialZoomLevel,Be.x=Ze.center.x,Be.y=Ze.center.y,e&&x("afterChange")},invalidateCurrItems:function(){ee=!0;for(var e=0;e<3;e++)te[e].item&&(te[e].item.needsUpdate=!0)},updateCurrItem:function(e){if(0!==qe){var t,n=Math.abs(qe);if(!(e&&n<2)){h.currItem=Gt(W),Qe=!1,x("beforeChange",qe),3<=n&&(G+=qe+(0<qe?-3:3),n=3);for(var i=0;i<n;i++)0<qe?(t=te.shift(),te[2]=t,it((++G+2)*Ke.x,t.el.style),h.setContent(t,W-n+i+1+1)):(t=te.pop(),te.unshift(t),it(--G*Ke.x,t.el.style),h.setContent(t,W+n-i-1-1));!Pe||1!==Math.abs(qe)||(e=Gt(ne)).initialZoomLevel!==q&&(jt(e,Ge),Jt(e),nt(e)),qe=0,h.updateCurrZoomItem(),ne=W,x("afterChange")}}},updateSize:function(e){if(!$e&&y.modal){var t=f.getScrollY();if(he!==t&&(m.style.top=t+"px",he=t),!e&&Je.x===window.innerWidth&&Je.y===window.innerHeight)return;Je.x=window.innerWidth,Je.y=window.innerHeight,m.style.height=Je.y+"px"}if(Ge.x=h.scrollWrap.clientWidth,Ge.y=h.scrollWrap.clientHeight,T(),Ke.x=Ge.x+Math.round(Ge.x*y.spacing),Ke.y=Ge.y,d(Ke.x*Xe),x("beforeResize"),void 0!==G){for(var n,i,o,a=0;a<3;a++)n=te[a],it((a+G)*Ke.x,n.el.style),o=W+a-1,y.loop&&2<Xt()&&(o=r(o)),(i=Gt(o))&&(ee||i.needsUpdate||!i.bounds)?(h.cleanSlide(i),h.setContent(n,o),1===a&&(h.currItem=i,h.updateCurrZoomItem(!0)),i.needsUpdate=!1):-1===n.index&&0<=o&&h.setContent(n,o),i&&i.container&&(jt(i,Ge),Jt(i),nt(i));ee=!1}$=q=h.currItem.initialZoomLevel,(Ze=h.currItem.bounds)&&(Be.x=Ze.center.x,Be.y=Ze.center.y,tt(!0)),x("resize")},zoomTo:function(t,e,n,i,o){e&&($=q,bt.x=Math.abs(e.x)-Be.x,bt.y=Math.abs(e.y)-Be.y,v(We,Be));var e=p(t,!1),a={};I("x",e,a,t),I("y",e,a,t);var r=q,l=Be.x,s=Be.y;u(a);e=function(e){1===e?(q=t,Be.x=a.x,Be.y=a.y):(q=(t-r)*e+r,Be.x=(a.x-l)*e+l,Be.y=(a.y-s)*e+s),o&&o(e),tt(1===e)};n?E("customZoomTo",0,1,n,i||f.easing.sine.inOut,e):e(1)}},st={},ut={},ct={},dt={},pt={},mt=[],ft={},ht=[],yt={},xt=0,gt=i(),vt=0,wt=i(),bt=i(),It=i(),Ct=function(){Ae&&(de(Ae),Ae=null)},Dt=function(){De&&(Ae=ce(Dt),Ot())},Tt=function(e,t){return!(!e||e===document)&&!(e.getAttribute("class")&&-1<e.getAttribute("class").indexOf("pswp__scroll-wrap"))&&(t(e)?e:Tt(e.parentNode,t))},Mt={},St={},At={},Et=[],Ot=function(){if(Oe){var e=Oe.length;if(0!==e)if(v(st,Oe[0]),ct.x=st.x-dt.x,ct.y=st.y-dt.y,ke&&1<e)dt.x=st.x,dt.y=st.y,(ct.x||ct.y||(a=Oe[1],r=ut,a.x!==r.x||a.y!==r.y))&&(v(ut,Oe[1]),Me||(Me=!0,x("zoomGestureStarted")),i=O(st,ut),(o=Pt(i))>h.currItem.initialZoomLevel+h.currItem.initialZoomLevel/15&&(Ue=!0),n=1,e=w(),a=b(),o<e?y.pinchToClose&&!Ue&&$<=h.currItem.initialZoomLevel?(g(r=1-(e-o)/(e/1.2)),x("onPinchClose",r),_e=!0):(1<(n=(e-o)/e)&&(n=1),o=e-n*(e/3)):a<o&&(1<(n=(o-a)/(6*e))&&(n=1),o=a+n*e),n<0&&(n=0),Z(st,ut,gt),Ye.x+=gt.x-It.x,Ye.y+=gt.y-It.y,v(It,gt),Be.x=s("x",o),Be.y=s("y",o),be=q<o,q=o,tt());else if(Le&&(ze&&(ze=!1,10<=Math.abs(ct.x)&&(ct.x-=Oe[0].x-pt.x),10<=Math.abs(ct.y)&&(ct.y-=Oe[0].y-pt.y)),dt.x=st.x,dt.y=st.y,0!==ct.x||0!==ct.y)){if("v"===Le&&y.closeOnVerticalDrag&&"fit"===y.scaleMode&&q===h.currItem.initialZoomLevel){Ye.y+=ct.y,Be.y+=ct.y;var t=P();return Ie=!0,x("onVerticalDrag",t),g(t),void tt()}n=c(),i=st.x,o=st.y,50<n-ve&&((t=2<ht.length?ht.shift():{}).x=i,t.y=o,ht.push(t),ve=n),Se=!0,Ze=h.currItem.bounds,L("x",ct)||(L("y",ct),u(Be),tt())}}var n,i,o,a,r},kt=function(){var t,n,i={lastFlickOffset:{},lastFlickDist:{},lastFlickSpeed:{},slowDownRatio:{},slowDownRatioReverse:{},speedDecelerationRatio:{},speedDecelerationRatioAbs:{},distanceOffset:{},backAnimDestination:{},backAnimStarted:{},calculateSwipeSpeed:function(e){n=1<ht.length?(t=c()-ve+50,ht[ht.length-2][e]):(t=c()-ge,pt[e]),i.lastFlickOffset[e]=dt[e]-n,i.lastFlickDist[e]=Math.abs(i.lastFlickOffset[e]),20<i.lastFlickDist[e]?i.lastFlickSpeed[e]=i.lastFlickOffset[e]/t:i.lastFlickSpeed[e]=0,Math.abs(i.lastFlickSpeed[e])<.1&&(i.lastFlickSpeed[e]=0),i.slowDownRatio[e]=.95,i.slowDownRatioReverse[e]=1-i.slowDownRatio[e],i.speedDecelerationRatio[e]=1},calculateOverBoundsAnimOffset:function(t,e){i.backAnimStarted[t]||(Be[t]>Ze.min[t]?i.backAnimDestination[t]=Ze.min[t]:Be[t]<Ze.max[t]&&(i.backAnimDestination[t]=Ze.max[t]),void 0!==i.backAnimDestination[t]&&(i.slowDownRatio[t]=.7,i.slowDownRatioReverse[t]=1-i.slowDownRatio[t],i.speedDecelerationRatioAbs[t]<.05&&(i.lastFlickSpeed[t]=0,i.backAnimStarted[t]=!0,E("bounceZoomPan"+t,Be[t],i.backAnimDestination[t],e||300,f.easing.sine.out,function(e){Be[t]=e,tt()}))))},calculateAnimOffset:function(e){i.backAnimStarted[e]||(i.speedDecelerationRatio[e]=i.speedDecelerationRatio[e]*(i.slowDownRatio[e]+i.slowDownRatioReverse[e]-i.slowDownRatioReverse[e]*i.timeDiff/10),i.speedDecelerationRatioAbs[e]=Math.abs(i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]),i.distanceOffset[e]=i.lastFlickSpeed[e]*i.speedDecelerationRatio[e]*i.timeDiff,Be[e]+=i.distanceOffset[e])},panAnimLoop:function(){if(rt.zoomPan&&(rt.zoomPan.raf=ce(i.panAnimLoop),i.now=c(),i.timeDiff=i.now-i.lastNow,i.lastNow=i.now,i.calculateAnimOffset("x"),i.calculateAnimOffset("y"),tt(),i.calculateOverBoundsAnimOffset("x"),i.calculateOverBoundsAnimOffset("y"),i.speedDecelerationRatioAbs.x<.05&&i.speedDecelerationRatioAbs.y<.05))return Be.x=Math.round(Be.x),Be.y=Math.round(Be.y),tt(),void M("zoomPan")}};return i},Rt=function(e){return e.calculateSwipeSpeed("y"),Ze=h.currItem.bounds,e.backAnimDestination={},e.backAnimStarted={},Math.abs(e.lastFlickSpeed.x)<=.05&&Math.abs(e.lastFlickSpeed.y)<=.05?(e.speedDecelerationRatioAbs.x=e.speedDecelerationRatioAbs.y=0,e.calculateOverBoundsAnimOffset("x"),e.calculateOverBoundsAnimOffset("y"),!0):(S("zoomPan"),e.lastNow=c(),void e.panAnimLoop())},Zt=function(e,t){var n,i;Fe||(xt=W),"swipe"===e&&(i=dt.x-pt.x,e=t.lastFlickDist.x<10,30<i&&(e||20<t.lastFlickOffset.x)?a=-1:i<-30&&(e||t.lastFlickOffset.x<-20)&&(a=1)),a&&((W+=a)<0?(W=y.loop?Xt()-1:0,o=!0):W>=Xt()&&(W=y.loop?0:Xt()-1,o=!0),o&&!y.loop||(qe+=a,Xe-=a,n=!0));var o=Ke.x*Xe,a=Math.abs(o-wt.x),r=n||o>wt.x==0<t.lastFlickSpeed.x?(r=0<Math.abs(t.lastFlickSpeed.x)?a/Math.abs(t.lastFlickSpeed.x):333,r=Math.min(r,400),Math.max(r,250)):333;return xt===W&&(n=!1),Fe=!0,x("mainScrollAnimStart"),E("mainScroll",wt.x,o,r,f.easing.cubic.out,d,function(){A(),Fe=!1,xt=-1,!n&&xt===W||h.updateCurrItem(),x("mainScrollAnimComplete")}),n&&h.updateCurrItem(!0),n},Pt=function(e){return 1/Re*e*$},Ft=function(){var e=q,t=w(),n=b();q<t?e=t:n<q&&(e=n);var i,o=Ne;return _e&&!be&&!Ue&&q<t?h.close():(_e&&(i=function(e){g((1-o)*e+o)}),h.zoomTo(e,0,200,f.easing.cubic.out,i)),!0};o("Gestures",{publicMethods:{initGestures:function(){function e(e,t,n,i,o){ie=e+t,oe=e+n,ae=e+i,re=o?e+o:""}(se=ye.pointerEvent)&&ye.touch&&(ye.touch=!1),se?navigator.pointerEnabled?e("pointer","down","move","up","cancel"):e("MSPointer","Down","Move","Up","Cancel"):ye.touch?(e("touch","start","move","end","cancel"),ue=!0):e("mouse","down","move","up"),X=oe+" "+ae+" "+re,V=ie,se&&!ue&&(ue=1<navigator.maxTouchPoints||1<navigator.msMaxTouchPoints),h.likelyTouchDevice=ue,K[ie]=z,K[oe]=_,K[ae]=N,re&&(K[re]=K[ae]),ye.touch&&(V+=" mousedown",X+=" mousemove mouseup",K.mousedown=K[ie],K.mousemove=K[oe],K.mouseup=K[ae]),ue||(y.allowPanToNext=!1)}}});function Lt(){return{center:{x:0,y:0},max:{x:0,y:0},min:{x:0,y:0}}}function zt(e,t,n,i,o,a){t.loadError||i&&(t.imageAppended=!0,Jt(t,i,t===h.currItem&&Qe),n.appendChild(i),a&&setTimeout(function(){t&&t.loaded&&t.placeholder&&(t.placeholder.style.display="none",t.placeholder=null)},500))}function _t(e){function t(){e.loading=!1,e.loaded=!0,e.loadComplete?e.loadComplete(e):e.img=null,n.onload=n.onerror=null,n=null}e.loading=!0,e.loaded=!1;var n=e.img=f.createEl("pswp__img","img");return n.onload=t,n.onerror=function(){e.loadError=!0,t()},n.src=e.src,n}function Nt(e,t){return e.src&&e.loadError&&e.container&&(t&&(e.container.innerHTML=""),e.container.innerHTML=y.errorMsg.replace("%url%",e.src),1)}function Ut(){if(qt.length){for(var e,t=0;t<qt.length;t++)(e=qt[t]).holder.index===e.index&&zt(e.index,e.item,e.baseDiv,e.img,0,e.clearPlaceholder);qt=[]}}var Ht,Yt,Wt,Bt,Gt,Xt,Vt=function(r,e,l,t){var s;Ht&&clearTimeout(Ht),Wt=Bt=!0,r.initialLayout?(s=r.initialLayout,r.initialLayout=null):s=y.getThumbBoundsFn&&y.getThumbBoundsFn(W);function u(){M("initialZoom"),l?(h.template.removeAttribute("style"),h.bg.removeAttribute("style")):(g(1),e&&(e.style.display="block"),f.addClass(m,"pswp--animated-in"),x("initialZoom"+(l?"OutEnd":"InEnd"))),t&&t(),Bt=!1}var c=l?y.hideAnimationDuration:y.showAnimationDuration;if(!c||!s||void 0===s.x)return x("initialZoom"+(l?"Out":"In")),q=r.initialZoomLevel,v(Be,r.initialPosition),tt(),m.style.opacity=l?0:1,g(1),void(c?setTimeout(function(){u()},c):u());var d,p;d=Y,p=!h.currItem.src||h.currItem.loadError||y.showHideOpacity,r.miniImg&&(r.miniImg.style.webkitBackfaceVisibility="hidden"),l||(q=s.w/r.w,Be.x=s.x,Be.y=s.y-me,h[p?"template":"bg"].style.opacity=.001,tt()),S("initialZoom"),l&&!d&&f.removeClass(m,"pswp--animated-in"),p&&(l?f[(d?"remove":"add")+"Class"](m,"pswp--animate_opacity"):setTimeout(function(){f.addClass(m,"pswp--animate_opacity")},30)),Ht=setTimeout(function(){var t,n,i,o,a,e;x("initialZoom"+(l?"Out":"In")),l?(t=s.w/r.w,n=Be.x,i=Be.y,o=q,a=Ne,e=function(e){1===e?(q=t,Be.x=s.x,Be.y=s.y-he):(q=(t-o)*e+o,Be.x=(s.x-n)*e+n,Be.y=(s.y-he-i)*e+i),tt(),p?m.style.opacity=1-e:g(a-e*a)},d?E("initialZoom",0,1,c,f.easing.cubic.out,e,u):(e(1),Ht=setTimeout(u,c+20))):(q=r.initialZoomLevel,v(Be,r.initialPosition),tt(),g(1),p?m.style.opacity=1:g(1),Ht=setTimeout(u,c+20))},l?25:90)},Kt={},qt=[],$t={index:0,errorMsg:'<div class="pswp__error-msg"><a href="%url%" target="_blank">The image</a> could not be loaded.</div>',forceProgressiveLoading:!1,preload:[1,1],getNumItemsFn:function(){return Yt.length}},jt=function(e,t,n){if(!e.src||e.loadError)return e.w=e.h=0,e.initialZoomLevel=e.fitRatio=1,e.bounds=Lt(),e.initialPosition=e.bounds.center,e.bounds;var i,o,a,r=!n;return r&&(e.vGap||(e.vGap={top:0,bottom:0}),x("parseVerticalMargin",e)),Kt.x=t.x,Kt.y=t.y-e.vGap.top-e.vGap.bottom,r&&(i=Kt.x/e.w,o=Kt.y/e.h,e.fitRatio=i<o?i:o,"orig"===(a=y.scaleMode)?n=1:"fit"===a&&(n=e.fitRatio),1<n&&(n=1),e.initialZoomLevel=n,e.bounds||(e.bounds=Lt())),n?(i=(t=e).w*n,o=e.h*n,(a=t.bounds).center.x=Math.round((Kt.x-i)/2),a.center.y=Math.round((Kt.y-o)/2)+t.vGap.top,a.max.x=i>Kt.x?Math.round(Kt.x-i):a.center.x,a.max.y=o>Kt.y?Math.round(Kt.y-o)+t.vGap.top:a.center.y,a.min.x=i>Kt.x?0:a.center.x,a.min.y=o>Kt.y?t.vGap.top:a.center.y,r&&n===e.initialZoomLevel&&(e.initialPosition=e.bounds.center),e.bounds):void 0},Jt=function(e,t,n){var i;e.src&&(t=t||e.container.lastChild,i=n?e.w:Math.round(e.w*e.fitRatio),n=n?e.h:Math.round(e.h*e.fitRatio),e.placeholder&&!e.loaded&&(e.placeholder.style.width=i+"px",e.placeholder.style.height=n+"px"),t.style.width=i+"px",t.style.height=n+"px")};o("Controller",{publicMethods:{lazyLoadItem:function(e){e=r(e);var t=Gt(e);t&&(!t.loaded&&!t.loading||ee)&&(x("gettingData",e,t),t.src&&_t(t))},initController:function(){f.extend(y,$t,!0),h.items=Yt=e,Gt=h.getItemAt,Xt=y.getNumItemsFn,y.loop,Xt()<3&&(y.loop=!1),a("beforeChange",function(e){for(var t=y.preload,n=null===e||0<=e,i=Math.min(t[0],Xt()),o=Math.min(t[1],Xt()),a=1;a<=(n?o:i);a++)h.lazyLoadItem(W+a);for(a=1;a<=(n?i:o);a++)h.lazyLoadItem(W-a)}),a("initialLayout",function(){h.currItem.initialLayout=y.getThumbBoundsFn&&y.getThumbBoundsFn(W)}),a("mainScrollAnimComplete",Ut),a("initialZoomInEnd",Ut),a("destroy",function(){for(var e,t=0;t<Yt.length;t++)(e=Yt[t]).container&&(e.container=null),e.placeholder&&(e.placeholder=null),e.img&&(e.img=null),e.preloader&&(e.preloader=null),e.loadError&&(e.loaded=e.loadError=!1);qt=null})},getItemAt:function(e){return 0<=e&&void 0!==Yt[e]&&Yt[e]},allowProgressiveImg:function(){return y.forceProgressiveLoading||!ue||y.mouseUsed||1200<screen.width},setContent:function(t,n){y.loop&&(n=r(n));var e=h.getItemAt(t.index);e&&(e.container=null);var i,o,a=h.getItemAt(n);a?(x("gettingData",n,a),t.index=n,o=(t.item=a).container=f.createEl("pswp__zoom-wrap"),!a.src&&a.html&&(a.html.tagName?o.appendChild(a.html):o.innerHTML=a.html),Nt(a),jt(a,Ge),!a.src||a.loadError||a.loaded?a.src&&!a.loadError&&((i=f.createEl("pswp__img","img")).style.opacity=1,i.src=a.src,Jt(a,i),zt(0,a,o,i)):(a.loadComplete=function(e){if(U){if(t&&t.index===n){if(Nt(e,!0))return e.loadComplete=e.img=null,jt(e,Ge),nt(e),void(t.index===W&&h.updateCurrZoomItem());e.imageAppended?!Bt&&e.placeholder&&(e.placeholder.style.display="none",e.placeholder=null):ye.transform&&(Fe||Bt)?qt.push({item:e,baseDiv:o,img:e.img,index:n,holder:t,clearPlaceholder:!0}):zt(0,e,o,e.img,0,!0)}e.loadComplete=null,e.img=null,x("imageLoadComplete",n,e)}},f.features.transform&&(e="pswp__img pswp__img--placeholder",e+=a.msrc?"":" pswp__img--placeholder--blank",e=f.createEl(e,a.msrc?"img":""),a.msrc&&(e.src=a.msrc),Jt(a,e),o.appendChild(e),a.placeholder=e),a.loading||_t(a),h.allowProgressiveImg()&&(!Wt&&ye.transform?qt.push({item:a,baseDiv:o,img:a.img,index:n,holder:t}):zt(0,a,o,a.img,0,!0))),Wt||n!==W?nt(a):(Pe=o.style,Vt(a,i||a.img)),t.el.innerHTML="",t.el.appendChild(o)):t.el.innerHTML=""},cleanSlide:function(e){e.img&&(e.img.onload=e.img.onerror=null),e.loaded=e.loading=e.img=e.imageAppended=!1}}});function Qt(e,t,n){var i=document.createEvent("CustomEvent"),n={origEvent:e,target:e.target,releasePoint:t,pointerType:n||"touch"};i.initCustomEvent("pswpTap",!0,!0,n),e.target.dispatchEvent(i)}var en,tn,nn={};o("Tap",{publicMethods:{initTap:function(){a("firstTouchStart",h.onTapStart),a("touchRelease",h.onTapRelease),a("destroy",function(){nn={},en=null})},onTapStart:function(e){1<e.length&&(clearTimeout(en),en=null)},onTapRelease:function(e,t){var n,i,o;!t||Se||Te||lt||(n=t,en&&(clearTimeout(en),en=null,i=n,o=nn,Math.abs(i.x-o.x)<25&&Math.abs(i.y-o.y)<25)?x("doubleTap",n):"mouse"!==t.type?"BUTTON"===e.target.tagName.toUpperCase()||f.hasClass(e.target,"pswp__single-tap")?Qt(e,t):(v(nn,n),en=setTimeout(function(){Qt(e,t),en=null},300)):Qt(e,t,"mouse"))}}}),o("DesktopZoom",{publicMethods:{initDesktopZoom:function(){fe||(ue?a("mouseUsed",function(){h.setupDesktopZoom()}):h.setupDesktopZoom(!0))},setupDesktopZoom:function(e){tn={};var t="wheel mousewheel DOMMouseScroll";a("bindEvents",function(){f.bind(m,t,h.handleMouseWheel)}),a("unbindEvents",function(){tn&&f.unbind(m,t,h.handleMouseWheel)}),h.mouseZoomedIn=!1;function n(){h.mouseZoomedIn&&(f.removeClass(m,"pswp--zoomed-in"),h.mouseZoomedIn=!1),q<1?f.addClass(m,"pswp--zoom-allowed"):f.removeClass(m,"pswp--zoom-allowed"),o()}var i,o=function(){i&&(f.removeClass(m,"pswp--dragging"),i=!1)};a("resize",n),a("afterChange",n),a("pointerDown",function(){h.mouseZoomedIn&&(i=!0,f.addClass(m,"pswp--dragging"))}),a("pointerUp",o),e||n()},handleMouseWheel:function(e){if(q<=h.currItem.fitRatio)return y.modal&&(!y.closeOnScroll||lt||De?e.preventDefault():le&&2<Math.abs(e.deltaY)&&(Y=!0,h.close())),!0;if(e.stopPropagation(),tn.x=0,"deltaX"in e)1===e.deltaMode?(tn.x=18*e.deltaX,tn.y=18*e.deltaY):(tn.x=e.deltaX,tn.y=e.deltaY);else if("wheelDelta"in e)e.wheelDeltaX&&(tn.x=-.16*e.wheelDeltaX),e.wheelDeltaY?tn.y=-.16*e.wheelDeltaY:tn.y=-.16*e.wheelDelta;else{if(!("detail"in e))return;tn.y=e.detail}p(q,!0);var t=Be.x-tn.x,n=Be.y-tn.y;(y.modal||t<=Ze.min.x&&t>=Ze.max.x&&n<=Ze.min.y&&n>=Ze.max.y)&&e.preventDefault(),h.panTo(t,n)},toggleDesktopZoom:function(e){e=e||{x:Ge.x/2+Ve.x,y:Ge.y/2+Ve.y};var t=y.getDoubleTapZoom(!0,h.currItem),n=q===t;h.mouseZoomedIn=!n,h.zoomTo(n?h.currItem.initialZoomLevel:t,e,333),f[(n?"remove":"add")+"Class"](m,"pswp--zoomed-in")}}});function on(){return xn.hash.substring(1)}function an(){ln&&clearTimeout(ln),un&&clearTimeout(un)}function rn(){var e=on(),t={};if(e.length<5)return t;var n,i=e.split("&");for(a=0;a<i.length;a++)i[a]&&((n=i[a].split("=")).length<2||(t[n[0]]=n[1]));if(y.galleryPIDs){for(var o=t.pid,a=t.pid=0;a<Yt.length;a++)if(Yt[a].pid===o){t.pid=a;break}}else t.pid=parseInt(t.pid,10)-1;return t.pid<0&&(t.pid=0),t}var ln,sn,un,cn,dn,pn,mn,fn,hn,yn,xn,gn,vn={history:!0,galleryUID:1},wn=function(){var e,t;un&&clearTimeout(un),lt||De?un=setTimeout(wn,500):(cn?clearTimeout(sn):cn=!0,t=W+1,(e=Gt(W)).hasOwnProperty("pid")&&(t=e.pid),e=mn+"&gid="+y.galleryUID+"&pid="+t,fn||-1===xn.hash.indexOf(e)&&(yn=!0),t=xn.href.split("#")[0]+"#"+e,gn?"#"+e!==window.location.hash&&history[fn?"replaceState":"pushState"]("",document.title,t):fn?xn.replace(t):xn.hash=e,fn=!0,sn=setTimeout(function(){cn=!1},60))};o("History",{publicMethods:{initHistory:function(){var e,t;f.extend(y,vn,!0),y.history&&(xn=window.location,fn=hn=yn=!1,mn=on(),gn="pushState"in history,-1<mn.indexOf("gid=")&&(mn=(mn=mn.split("&gid=")[0]).split("?gid=")[0]),a("afterChange",h.updateURL),a("unbindEvents",function(){f.unbind(window,"hashchange",h.onHashChange)}),e=function(){pn=!0,hn||(yn?history.back():mn?xn.hash=mn:gn?history.pushState("",document.title,xn.pathname+xn.search):xn.hash=""),an()},a("unbindEvents",function(){Y&&e()}),a("destroy",function(){pn||e()}),a("firstUpdate",function(){W=rn().pid}),-1<(t=mn.indexOf("pid="))&&("&"===(mn=mn.substring(0,t)).slice(-1)&&(mn=mn.slice(0,-1))),setTimeout(function(){U&&f.bind(window,"hashchange",h.onHashChange)},40))},onHashChange:function(){return on()===mn?(hn=!0,void h.close()):void(cn||(dn=!0,h.goTo(rn().pid),dn=!1))},updateURL:function(){an(),dn||(fn?ln=setTimeout(wn,800):wn())}}}),f.extend(h,t)}});
