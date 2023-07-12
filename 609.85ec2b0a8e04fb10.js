"use strict";(self.webpackChunkhermitage_history=self.webpackChunkhermitage_history||[]).push([[609],{7015:(P,_,s)=>{s.d(_,{D:()=>g});var n=s(1993),l=s(7328),m=s(5879),u=s(9862);let g=(()=>{class p{constructor(h){this._http=h,this._dataSubject=new l.t,this.data$=this._dataSubject.asObservable(),this.fetchData()}fetchData(){this._http.get("assets/data/data.json").pipe((0,n.sL)()).subscribe(h=>{this._dataSubject.next(h)})}}return p.\u0275fac=function(h){return new(h||p)(m.LFG(u.eN))},p.\u0275prov=m.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},9962:(P,_,s)=>{s.d(_,{g:()=>p});var n=s(5879),l=s(6814),m=s(2268);function u(d,h){1&d&&n._UZ(0,"ngx-skeleton-loader",3)}const g=function(d){return{display:d}};let p=(()=>{class d{constructor(){this.isLoading=!0}ngOnChanges(v){void 0!==v.image&&(this.isLoading=!0)}hideLoader(){this.isLoading=!1}}return d.\u0275fac=function(v){return new(v||d)},d.\u0275cmp=n.Xpm({type:d,selectors:[["app-image-with-loading"]],inputs:{loader:"loader",image:"image"},features:[n.TTD],decls:3,vars:5,consts:[[1,"container"],["class","container__loader","count","1","appearance","circle","animation","progress",4,"ngIf"],[1,"container__image",3,"ngStyle","src","load","error"],["count","1","appearance","circle","animation","progress",1,"container__loader"]],template:function(v,a){1&v&&(n.TgZ(0,"div",0),n.YNc(1,u,1,0,"ngx-skeleton-loader",1),n.TgZ(2,"img",2),n.NdJ("load",function(){return a.hideLoader()})("error",function(){return a.hideLoader()}),n.qZA()()),2&v&&(n.xp6(1),n.Q6J("ngIf",a.isLoading),n.xp6(1),n.Q6J("ngStyle",n.VKq(3,g,a.isLoading?"none":"block"))("src",a.image,n.LSH))},dependencies:[l.O5,l.PC,m.xr],styles:["[_nghost-%COMP%]{display:block}.container[_ngcontent-%COMP%]{position:relative;width:100%;min-height:180px;padding:0}.container__image[_ngcontent-%COMP%]{width:100%}.container__loader[_ngcontent-%COMP%]{display:block;width:100%;min-height:180px}  ngx-skeleton-loader .skeleton-loader{display:block!important;background:#EEEEEE!important}  ngx-skeleton-loader .skeleton-loader.circle{width:100%!important;min-height:180px;margin:0!important;border-radius:0!important}@media (width >= 429px){.container[_ngcontent-%COMP%], .container__loader[_ngcontent-%COMP%]{min-height:500px}  ngx-skeleton-loader .skeleton-loader.circle{min-height:500px}}"],changeDetection:0}),d})()},3336:(P,_,s)=>{s.d(_,{y:()=>u});var n=s(6814),l=s(2268),m=s(5879);let u=(()=>{class g{}return g.\u0275fac=function(d){return new(d||g)},g.\u0275mod=m.oAB({type:g}),g.\u0275inj=m.cJS({imports:[n.ez,l.hx]}),g})()},5027:(P,_,s)=>{function n(l){return(m,u)=>u&&u[l]?u[l]:void 0}s.d(_,{d:()=>n})},1993:(P,_,s)=>{s.d(_,{sL:()=>u});var n=s(5879),l=s(5592),m=s(9773);function u(r){r||((0,n.gHi)(u),r=(0,n.f3M)(n.ktI));const e=new l.y(t=>r.onDestroy(t.next.bind(t)));return t=>t.pipe((0,m.R)(e))}},2268:(P,_,s)=>{s.d(_,{hx:()=>v,xr:()=>h});var n=s(5879),l=s(6814);function m(a,C){1&a&&n.Hsn(0,0,["*ngIf","appearance  === 'custom-content'"])}const u=function(a,C,o,f,k){return{"custom-content":a,circle:C,progress:o,"progress-dark":f,pulse:k}};function g(a,C){if(1&a&&(n.TgZ(0,"div",1),n.YNc(1,m,1,0,"ng-content",2),n.qZA()),2&a){const o=n.oxw();n.Q6J("ngClass",n.qbA(5,u,"custom-content"===o.appearance,"circle"===o.appearance,"progress"===o.animation,"progress-dark"===o.animation,"pulse"===o.animation))("ngStyle",o.theme),n.uIk("aria-label",o.ariaLabel)("aria-valuetext",o.loadingText),n.xp6(1),n.Q6J("ngIf","custom-content"===o.appearance)}}const p=["*"],d=new n.OlP("ngx-skeleton-loader.config");let h=(()=>{class a{constructor(o){this.config=o;const{appearance:f="line",animation:k="progress",theme:T=null,loadingText:A="Loading...",count:D=1,ariaLabel:w="loading"}=o||{};this.appearance=f,this.animation=k,this.theme=T,this.loadingText=A,this.count=D,this.items=[],this.ariaLabel=w}ngOnInit(){this.validateInputValues()}validateInputValues(){/^\d+$/.test(`${this.count}`)||((0,n.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'count' a numeric value. Forcing default to \"1\"."),this.count=1),"custom-content"===this.appearance&&(0,n.X6Q)()&&1!==this.count&&(console.error('`NgxSkeletonLoaderComponent` enforces elements with "custom-content" appearance as DOM nodes. Forcing "count" to "1".'),this.count=1),this.items.length=this.count;const o=["progress","progress-dark","pulse","false"];-1===o.indexOf(String(this.animation))&&((0,n.X6Q)()&&console.error(`\`NgxSkeletonLoaderComponent\` need to receive 'animation' as: ${o.join(", ")}. Forcing default to "progress".`),this.animation="progress"),-1===["circle","line","custom-content",""].indexOf(String(this.appearance))&&((0,n.X6Q)()&&console.error("`NgxSkeletonLoaderComponent` need to receive 'appearance' as: circle or line or custom-content or empty string. Forcing default to \"''\"."),this.appearance=""),this.config?.theme?.extendsFromRoot&&null!==this.theme&&(this.theme={...this.config.theme,...this.theme})}ngOnChanges(o){["count","animation","appearance"].find(f=>o[f]&&(o[f].isFirstChange()||o[f].previousValue===o[f].currentValue))||this.validateInputValues()}}return a.\u0275fac=function(o){return new(o||a)(n.Y36(d,8))},a.\u0275cmp=n.Xpm({type:a,selectors:[["ngx-skeleton-loader"]],inputs:{count:"count",loadingText:"loadingText",appearance:"appearance",animation:"animation",ariaLabel:"ariaLabel",theme:"theme"},features:[n.TTD],ngContentSelectors:p,decls:1,vars:1,consts:[["class","skeleton-loader","aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",3,"ngClass","ngStyle",4,"ngFor","ngForOf"],["aria-busy","true","aria-valuemin","0","aria-valuemax","100","role","progressbar","tabindex","-1",1,"skeleton-loader",3,"ngClass","ngStyle"],[4,"ngIf"]],template:function(o,f){1&o&&(n.F$t(),n.YNc(0,g,2,11,"div",0)),2&o&&n.Q6J("ngForOf",f.items)},dependencies:[l.mk,l.sg,l.O5,l.PC],styles:['.skeleton-loader[_ngcontent-%COMP%]{box-sizing:border-box;overflow:hidden;position:relative;background:rgb(239,241,246) no-repeat;border-radius:4px;width:100%;height:20px;display:inline-block;margin-bottom:10px;will-change:transform}.skeleton-loader[_ngcontent-%COMP%]:after, .skeleton-loader[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.circle[_ngcontent-%COMP%]{width:40px;height:40px;margin:5px;border-radius:50%}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%]{transform:translateZ(0)}.skeleton-loader.progress[_ngcontent-%COMP%]:after, .skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:after, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{box-sizing:border-box}.skeleton-loader.progress[_ngcontent-%COMP%]:before, .skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{animation:_ngcontent-%COMP%_progress 2s ease-in-out infinite;background-size:200px 100%;position:absolute;z-index:1;top:0;left:0;width:200px;height:100%;content:""}.skeleton-loader.progress[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,rgba(255,255,255,0),rgba(255,255,255,.6),rgba(255,255,255,0))}.skeleton-loader.progress-dark[_ngcontent-%COMP%]:before{background-image:linear-gradient(90deg,transparent,rgba(0,0,0,.2),transparent)}.skeleton-loader.pulse[_ngcontent-%COMP%]{animation:_ngcontent-%COMP%_pulse 1.5s cubic-bezier(.4,0,.2,1) infinite;animation-delay:.5s}.skeleton-loader.custom-content[_ngcontent-%COMP%]{height:100%;background:none}@media (prefers-reduced-motion: reduce){.skeleton-loader.pulse[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%], .skeleton-loader.progress[_ngcontent-%COMP%]{animation:none}.skeleton-loader.progress[_ngcontent-%COMP%], .skeleton-loader.progress-dark[_ngcontent-%COMP%], .skeleton-loader.custom-content[_ngcontent-%COMP%]{background-image:none}}@media screen and (min-device-width: 1200px){.skeleton-loader[_ngcontent-%COMP%]{-webkit-user-select:none;user-select:none;cursor:wait}}@keyframes _ngcontent-%COMP%_progress{0%{transform:translate3d(-200px,0,0)}to{transform:translate3d(calc(200px + 100vw),0,0)}}@keyframes _ngcontent-%COMP%_pulse{0%{opacity:1}50%{opacity:.4}to{opacity:1}}'],changeDetection:0}),a})(),v=(()=>{class a{static forRoot(o){return{ngModule:a,providers:[{provide:d,useValue:o}]}}}return a.\u0275fac=function(o){return new(o||a)},a.\u0275mod=n.oAB({type:a}),a.\u0275inj=n.cJS({imports:[l.ez]}),a})()}}]);