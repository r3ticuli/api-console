!function(){if("undefined"!=typeof self&&self.Prism&&self.document&&Function.prototype.bind){var t=function(t){var e=0,s=0,i=t;if(i.parentNode){do{e+=i.offsetLeft,s+=i.offsetTop}while((i=i.offsetParent)&&i.nodeType<9);i=t;do{e-=i.scrollLeft,s-=i.scrollTop}while((i=i.parentNode)&&!/body/i.test(i.nodeName))}return{top:s,right:innerWidth-e-t.offsetWidth,bottom:innerHeight-s-t.offsetHeight,left:e}},e=/(?:^|\s)token(?=$|\s)/,s=function(t,e,i,o){this._elt=null,this._type=t,this._clsRegexp=RegExp("(?:^|\\s)"+t+"(?=$|\\s)"),this._token=null,this.updater=e,this._mouseout=this.mouseout.bind(this),this.initializer=o;var n=this;i||(i=["*"]),"Array"!==Prism.util.type(i)&&(i=[i]),i.forEach(function(t){"string"!=typeof t&&(t=t.lang),s.byLanguages[t]||(s.byLanguages[t]=[]),s.byLanguages[t].indexOf(n)<0&&s.byLanguages[t].push(n)}),s.byType[t]=this};s.prototype.init=function(){this._elt||(this._elt=document.createElement("div"),this._elt.className="prism-previewer prism-previewer-"+this._type,document.body.appendChild(this._elt),this.initializer&&this.initializer())},s.prototype.check=function(t){do{if(e.test(t.className)&&this._clsRegexp.test(t.className))break}while(t=t.parentNode);t&&t!==this._token&&(this._token=t,this.show())},s.prototype.mouseout=function(){this._token.removeEventListener("mouseout",this._mouseout,!1),this._token=null,this.hide()},s.prototype.show=function(){if(this._elt||this.init(),this._token)if(this.updater.call(this._elt,this._token.textContent)){this._token.addEventListener("mouseout",this._mouseout,!1);var e=t(this._token);this._elt.className+=" active",e.top-this._elt.offsetHeight>0?(this._elt.className=this._elt.className.replace(/(?:^|\s)flipped(?=$|\s)/g,""),this._elt.style.top=e.top+"px",this._elt.style.bottom=""):(this._elt.className+=" flipped",this._elt.style.bottom=e.bottom+"px",this._elt.style.top=""),this._elt.style.left=e.left+Math.min(200,this._token.offsetWidth/2)+"px"}else this.hide()},s.prototype.hide=function(){this._elt.className=this._elt.className.replace(/(?:^|\s)active(?=$|\s)/g,"")},s.byLanguages={},s.byType={},s.initEvents=function(t,e){var i=[];s.byLanguages[e]&&(i=i.concat(s.byLanguages[e])),s.byLanguages["*"]&&(i=i.concat(s.byLanguages["*"])),t.addEventListener("mouseover",function(t){var e=t.target;i.forEach(function(t){t.check(e)})},!1)},Prism.plugins.Previewer=s,Prism.hooks.add("after-highlight",function(t){(s.byLanguages["*"]||s.byLanguages[t.language])&&s.initEvents(t.element,t.language)})}}();