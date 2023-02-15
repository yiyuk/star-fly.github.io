"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[752],{7637:function(t,e,i){i.d(e,{XS:function(){return b}});/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class n{constructor(t,e,i,s,r="div"){this.parent=t,this.object=e,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),n.nextNameID=n.nextNameID||0,this.$name.id=`lil-gui-name-${++n.nextNameID}`,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),void 0!==this._onChange&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),void 0!==this._onFinishChange&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){let e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,void 0!==this._listenCallbackID&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);let t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class s extends n{constructor(t,e,i){super(t,e,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function r(t){let e,i;return(e=t.match(/(#|0x)?([a-f0-9]{6})/i))?i=e[2]:(e=t.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?i=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=t.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(i=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!i&&"#"+i}let o={isPrimitive:!0,match:t=>"number"==typeof t,fromHexString:t=>parseInt(t.substring(1),16),toHexString:t=>"#"+t.toString(16).padStart(6,0)},l={isPrimitive:!1,match:Array.isArray,fromHexString(t,e,i=1){let n=o.fromHexString(t);e[0]=(n>>16&255)/255*i,e[1]=(n>>8&255)/255*i,e[2]=(255&n)/255*i},toHexString([t,e,i],n=1){n=255/n;let s=t*n<<16^e*n<<8^i*n<<0;return o.toHexString(s)}},a=[{isPrimitive:!0,match:t=>"string"==typeof t,fromHexString:r,toHexString:r},o,l,{isPrimitive:!1,match:t=>Object(t)===t,fromHexString(t,e,i=1){let n=o.fromHexString(t);e.r=(n>>16&255)/255*i,e.g=(n>>8&255)/255*i,e.b=(255&n)/255*i},toHexString({r:t,g:e,b:i},n=1){n=255/n;let s=t*n<<16^e*n<<8^i*n<<0;return o.toHexString(s)}}];class h extends n{constructor(t,e,i,n){var s;super(t,e,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,a.find(t=>t.match(s))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{let t=r(this.$text.value);t&&this._setValueFromHexString(t)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){let e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class d extends n{constructor(t,e,i){super(t,e,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",t=>{t.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class c extends n{constructor(t,e,i,n,s,r){super(t,e,i,"number"),this._initInput(),this.min(n),this.max(s);let o=void 0!==r;this.step(o?r:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){let t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=void 0===this._decimals?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;let t=()=>{let t=parseFloat(this.$input.value);isNaN(t)||(this._stepExplicit&&(t=this._snap(t)),this.setValue(this._clamp(t)))},e=t=>{let e=parseFloat(this.$input.value);isNaN(e)||(this._snapClampSetValue(e+t),this.$input.value=this.getValue())},i=t=>{"Enter"===t.code&&this.$input.blur(),"ArrowUp"===t.code&&(t.preventDefault(),e(this._step*this._arrowKeyMultiplier(t))),"ArrowDown"===t.code&&(t.preventDefault(),e(-(this._step*this._arrowKeyMultiplier(t)*1)))},n=t=>{this._inputFocused&&(t.preventDefault(),e(this._step*this._normalizeMouseWheel(t)))},s=!1,r,o,l,a,h,d=t=>{r=t.clientX,o=l=t.clientY,s=!0,a=this.getValue(),h=0,window.addEventListener("mousemove",c),window.addEventListener("mouseup",u)},c=t=>{if(s){let e=t.clientX-r,i=t.clientY-o;Math.abs(i)>5?(t.preventDefault(),this.$input.blur(),s=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(e)>5&&u()}if(!s){let e=t.clientY-l;a+(h-=e*this._step*this._arrowKeyMultiplier(t))>this._max?h=this._max-a:a+h<this._min&&(h=this._min-a),this._snapClampSetValue(a+h)}l=t.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",c),window.removeEventListener("mouseup",u)},p=()=>{this._inputFocused=!0},g=()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()};this.$input.addEventListener("input",t),this.$input.addEventListener("keydown",i),this.$input.addEventListener("wheel",n,{passive:!1}),this.$input.addEventListener("mousedown",d),this.$input.addEventListener("focus",p),this.$input.addEventListener("blur",g)}_initSlider(){let t;this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");let e=(t,e,i,n,s)=>(t-e)/(i-e)*(s-n)+n,i=t=>{let i=this.$slider.getBoundingClientRect(),n=e(t,i.left,i.right,this._min,this._max);this._snapClampSetValue(n)},n=t=>{this._setDraggingStyle(!0),i(t.clientX),window.addEventListener("mousemove",s),window.addEventListener("mouseup",r)},s=t=>{i(t.clientX)},r=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",s),window.removeEventListener("mouseup",r)},o=!1,l,a,h=t=>{t.preventDefault(),this._setDraggingStyle(!0),i(t.touches[0].clientX),o=!1},d=t=>{t.touches.length>1||(this._hasScrollBar?(l=t.touches[0].clientX,a=t.touches[0].clientY,o=!0):h(t),window.addEventListener("touchmove",c,{passive:!1}),window.addEventListener("touchend",u))},c=t=>{if(o){let e=t.touches[0].clientX-l,i=t.touches[0].clientY-a;Math.abs(e)>Math.abs(i)?h(t):(window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u))}else t.preventDefault(),i(t.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",c),window.removeEventListener("touchend",u)},p=this._callOnFinishChange.bind(this),g=e=>{let i=Math.abs(e.deltaX)<Math.abs(e.deltaY);if(i&&this._hasScrollBar)return;e.preventDefault();let n=this._normalizeMouseWheel(e)*this._step;this._snapClampSetValue(this.getValue()+n),this.$input.value=this.getValue(),clearTimeout(t),t=setTimeout(p,400)};this.$slider.addEventListener("mousedown",n),this.$slider.addEventListener("touchstart",d,{passive:!1}),this.$slider.addEventListener("wheel",g,{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle(`lil-gui-${e}`,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:i}=t;Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,i=-t.wheelDelta/120*(this._stepExplicit?1:10));let n=e+-i;return n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){let e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){let t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return void 0!==this._min}get _hasMax(){return void 0!==this._max}}class u extends n{constructor(t,e,i,n){super(t,e,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(t=>{let e=document.createElement("option");e.innerHTML=t,this.$select.appendChild(e)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){let t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=-1===e?t:this._names[e],this}}class p extends n{constructor(t,e,i){super(t,e,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",t=>{"Enter"===t.code&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let g=`.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  background-color: var(--background-color);
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean .widget {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background-color: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background-color: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background-color: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  height: var(--title-height);
  line-height: calc(var(--title-height) - 4px);
  font-weight: 600;
  padding: 0 var(--padding);
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  outline: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui input {
  -webkit-tap-highlight-color: transparent;
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input::-webkit-outer-spin-button,
.lil-gui input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.lil-gui input[type=number] {
  -moz-appearance: textfield;
}
.lil-gui input[type=checkbox] {
  appearance: none;
  -webkit-appearance: none;
  height: var(--checkbox-size);
  width: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  -webkit-tap-highlight-color: transparent;
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  border: 1px solid var(--widget-color);
  text-align: center;
  line-height: calc(var(--widget-height) - 4px);
}
@media (hover: hover) {
  .lil-gui button:hover {
    background: var(--hover-color);
    border-color: var(--hover-color);
  }
  .lil-gui button:focus {
    border-color: var(--focus-color);
  }
}
.lil-gui button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`,m=!1;class b{constructor({parent:t,autoPlace:e=void 0===t,container:i,width:n,title:s="Controls",injectStyles:r=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",t=>{("Enter"===t.code||"Space"===t.code)&&(t.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),o&&this.domElement.classList.add("allow-touch-styles"),this.parent){this.parent.children.push(this),this.parent.folders.push(this),this.parent.$children.appendChild(this.domElement);return}this.domElement.classList.add("root"),!m&&r&&(function(t){let e=document.createElement("style");e.innerHTML=t;let i=document.querySelector("head link[rel=stylesheet], head style");i?document.head.insertBefore(e,i):document.head.appendChild(e)}(g),m=!0),i?i.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this.domElement.addEventListener("keydown",t=>t.stopPropagation()),this.domElement.addEventListener("keyup",t=>t.stopPropagation())}add(t,e,i,n,r){if(Object(i)===i)return new u(this,t,e,i);let o=t[e];switch(typeof o){case"number":return new c(this,t,e,i,n,r);case"boolean":return new s(this,t,e);case"string":return new p(this,t,e);case"function":return new d(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,o)}addColor(t,e,i=1){return new h(this,t,e,i)}addFolder(t){return new b({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(e=>{!(e instanceof d)&&e._name in t.controllers&&e.load(t.controllers[e._name])}),e&&t.folders&&this.folders.forEach(e=>{e._title in t.folders&&e.load(t.folders[e._title])}),this}save(t=!0){let e={controllers:{},folders:{}};return this.controllers.forEach(t=>{if(!(t instanceof d)){if(t._name in e.controllers)throw Error(`Cannot save GUI with duplicate property "${t._name}"`);e.controllers[t._name]=t.save()}}),t&&this.folders.forEach(t=>{if(t._title in e.folders)throw Error(`Cannot save GUI with duplicate folder "${t._title}"`);e.folders[t._title]=t.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{let e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");let i=t=>{t.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);let n=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){let e=t?this.controllersRecursive():this.controllers;return e.forEach(t=>t.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),void 0!==this._onChange&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),void 0!==this._onFinishChange&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}},9365:function(t,e,i){i.d(e,{z:function(){return l}});var n=i(9477);let s={type:"change"},r={type:"start"},o={type:"end"};class l extends n.pBf{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new n.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n.RsA.ROTATE,MIDDLE:n.RsA.DOLLY,RIGHT:n.RsA.PAN},this.touches={ONE:n.QmN.ROTATE,TWO:n.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(t){t.addEventListener("keydown",G),this._domElementKeyEvents=t},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(s),i.update(),a=l.NONE},this.update=function(){let e=new n.Pa4,r=new n._fP().setFromUnitVectors(t.up,new n.Pa4(0,1,0)),o=r.clone().invert(),m=new n.Pa4,b=new n._fP,v=2*Math.PI;return function(){let t=i.object.position;e.copy(t).sub(i.target),e.applyQuaternion(r),d.setFromVector3(e),i.autoRotate&&a===l.NONE&&L(2*Math.PI/60/60*i.autoRotateSpeed),i.enableDamping?(d.theta+=c.theta*i.dampingFactor,d.phi+=c.phi*i.dampingFactor):(d.theta+=c.theta,d.phi+=c.phi);let n=i.minAzimuthAngle,f=i.maxAzimuthAngle;return isFinite(n)&&isFinite(f)&&(n<-Math.PI?n+=v:n>Math.PI&&(n-=v),f<-Math.PI?f+=v:f>Math.PI&&(f-=v),n<=f?d.theta=Math.max(n,Math.min(f,d.theta)):d.theta=d.theta>(n+f)/2?Math.max(n,d.theta):Math.min(f,d.theta)),d.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,d.phi)),d.makeSafe(),d.radius*=u,d.radius=Math.max(i.minDistance,Math.min(i.maxDistance,d.radius)),!0===i.enableDamping?i.target.addScaledVector(p,i.dampingFactor):i.target.add(p),e.setFromSpherical(d),e.applyQuaternion(o),t.copy(i.target).add(e),i.object.lookAt(i.target),!0===i.enableDamping?(c.theta*=1-i.dampingFactor,c.phi*=1-i.dampingFactor,p.multiplyScalar(1-i.dampingFactor)):(c.set(0,0,0),p.set(0,0,0)),u=1,!!(g||m.distanceToSquared(i.object.position)>h||8*(1-b.dot(i.object.quaternion))>h)&&(i.dispatchEvent(s),m.copy(i.object.position),b.copy(i.object.quaternion),g=!1,!0)}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",Z),i.domElement.removeEventListener("pointerdown",V),i.domElement.removeEventListener("pointercancel",X),i.domElement.removeEventListener("wheel",K),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",B),null!==i._domElementKeyEvents&&i._domElementKeyEvents.removeEventListener("keydown",G)};let i=this,l={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},a=l.NONE,h=1e-6,d=new n.$V,c=new n.$V,u=1,p=new n.Pa4,g=!1,m=new n.FM8,b=new n.FM8,v=new n.FM8,f=new n.FM8,A=new n.FM8,w=new n.FM8,y=new n.FM8,E=new n.FM8,x=new n.FM8,_=[],$={};function k(){return Math.pow(.95,i.zoomSpeed)}function L(t){c.theta-=t}function C(t){c.phi-=t}let S=function(){let t=new n.Pa4;return function(e,i){t.setFromMatrixColumn(i,0),t.multiplyScalar(-e),p.add(t)}}(),M=function(){let t=new n.Pa4;return function(e,n){!0===i.screenSpacePanning?t.setFromMatrixColumn(n,1):(t.setFromMatrixColumn(n,0),t.crossVectors(i.object.up,t)),t.multiplyScalar(e),p.add(t)}}(),O=function(){let t=new n.Pa4;return function(e,n){let s=i.domElement;if(i.object.isPerspectiveCamera){let r=i.object.position;t.copy(r).sub(i.target);let o=t.length();S(2*e*(o*=Math.tan(i.object.fov/2*Math.PI/180))/s.clientHeight,i.object.matrix),M(2*n*o/s.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(S(e*(i.object.right-i.object.left)/i.object.zoom/s.clientWidth,i.object.matrix),M(n*(i.object.top-i.object.bottom)/i.object.zoom/s.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function P(t){i.object.isPerspectiveCamera?u/=t:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*t)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function D(t){i.object.isPerspectiveCamera?u*=t:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/t)),i.object.updateProjectionMatrix(),g=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function F(t){m.set(t.clientX,t.clientY)}function T(t){f.set(t.clientX,t.clientY)}function j(){if(1===_.length)m.set(_[0].pageX,_[0].pageY);else{let t=.5*(_[0].pageX+_[1].pageX),e=.5*(_[0].pageY+_[1].pageY);m.set(t,e)}}function I(){if(1===_.length)f.set(_[0].pageX,_[0].pageY);else{let t=.5*(_[0].pageX+_[1].pageX),e=.5*(_[0].pageY+_[1].pageY);f.set(t,e)}}function N(){let t=_[0].pageX-_[1].pageX,e=_[0].pageY-_[1].pageY;y.set(0,Math.sqrt(t*t+e*e))}function H(t){if(1==_.length)b.set(t.pageX,t.pageY);else{let e=J(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);b.set(i,n)}v.subVectors(b,m).multiplyScalar(i.rotateSpeed);let e=i.domElement;L(2*Math.PI*v.x/e.clientHeight),C(2*Math.PI*v.y/e.clientHeight),m.copy(b)}function Y(t){if(1===_.length)A.set(t.pageX,t.pageY);else{let e=J(t),i=.5*(t.pageX+e.x),n=.5*(t.pageY+e.y);A.set(i,n)}w.subVectors(A,f).multiplyScalar(i.panSpeed),O(w.x,w.y),f.copy(A)}function z(t){let e=J(t),n=t.pageX-e.x,s=t.pageY-e.y;E.set(0,Math.sqrt(n*n+s*s)),x.set(0,Math.pow(E.y/y.y,i.zoomSpeed)),P(x.y),y.copy(E)}function V(t){!1!==i.enabled&&(0===_.length&&(i.domElement.setPointerCapture(t.pointerId),i.domElement.addEventListener("pointermove",R),i.domElement.addEventListener("pointerup",B)),_.push(t),"touch"===t.pointerType?function(t){switch(W(t),_.length){case 1:switch(i.touches.ONE){case n.QmN.ROTATE:if(!1===i.enableRotate)return;j(),a=l.TOUCH_ROTATE;break;case n.QmN.PAN:if(!1===i.enablePan)return;I(),a=l.TOUCH_PAN;break;default:a=l.NONE}break;case 2:switch(i.touches.TWO){case n.QmN.DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;i.enableZoom&&N(),i.enablePan&&I(),a=l.TOUCH_DOLLY_PAN;break;case n.QmN.DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;i.enableZoom&&N(),i.enableRotate&&j(),a=l.TOUCH_DOLLY_ROTATE;break;default:a=l.NONE}break;default:a=l.NONE}a!==l.NONE&&i.dispatchEvent(r)}(t):function(t){let e;switch(t.button){case 0:e=i.mouseButtons.LEFT;break;case 1:e=i.mouseButtons.MIDDLE;break;case 2:e=i.mouseButtons.RIGHT;break;default:e=-1}switch(e){case n.RsA.DOLLY:if(!1===i.enableZoom)return;y.set(t.clientX,t.clientY),a=l.DOLLY;break;case n.RsA.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===i.enablePan)return;T(t),a=l.PAN}else{if(!1===i.enableRotate)return;F(t),a=l.ROTATE}break;case n.RsA.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(!1===i.enableRotate)return;F(t),a=l.ROTATE}else{if(!1===i.enablePan)return;T(t),a=l.PAN}break;default:a=l.NONE}a!==l.NONE&&i.dispatchEvent(r)}(t))}function R(t){!1!==i.enabled&&("touch"===t.pointerType?function(t){switch(W(t),a){case l.TOUCH_ROTATE:if(!1===i.enableRotate)return;H(t),i.update();break;case l.TOUCH_PAN:if(!1===i.enablePan)return;Y(t),i.update();break;case l.TOUCH_DOLLY_PAN:if(!1===i.enableZoom&&!1===i.enablePan)return;i.enableZoom&&z(t),i.enablePan&&Y(t),i.update();break;case l.TOUCH_DOLLY_ROTATE:if(!1===i.enableZoom&&!1===i.enableRotate)return;i.enableZoom&&z(t),i.enableRotate&&H(t),i.update();break;default:a=l.NONE}}(t):function(t){switch(a){case l.ROTATE:if(!1===i.enableRotate)return;!function(t){b.set(t.clientX,t.clientY),v.subVectors(b,m).multiplyScalar(i.rotateSpeed);let e=i.domElement;L(2*Math.PI*v.x/e.clientHeight),C(2*Math.PI*v.y/e.clientHeight),m.copy(b),i.update()}(t);break;case l.DOLLY:if(!1===i.enableZoom)return;E.set(t.clientX,t.clientY),x.subVectors(E,y),x.y>0?P(k()):x.y<0&&D(k()),y.copy(E),i.update();break;case l.PAN:if(!1===i.enablePan)return;A.set(t.clientX,t.clientY),w.subVectors(A,f).multiplyScalar(i.panSpeed),O(w.x,w.y),f.copy(A),i.update()}}(t))}function B(t){U(t),0===_.length&&(i.domElement.releasePointerCapture(t.pointerId),i.domElement.removeEventListener("pointermove",R),i.domElement.removeEventListener("pointerup",B)),i.dispatchEvent(o),a=l.NONE}function X(t){U(t)}function K(t){!1!==i.enabled&&!1!==i.enableZoom&&a===l.NONE&&(t.preventDefault(),i.dispatchEvent(r),t.deltaY<0?D(k()):t.deltaY>0&&P(k()),i.update(),i.dispatchEvent(o))}function G(t){!1!==i.enabled&&!1!==i.enablePan&&function(t){let e=!1;switch(t.code){case i.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?C(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,i.keyPanSpeed),e=!0;break;case i.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?C(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(0,-i.keyPanSpeed),e=!0;break;case i.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?L(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(i.keyPanSpeed,0),e=!0;break;case i.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?L(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):O(-i.keyPanSpeed,0),e=!0}e&&(t.preventDefault(),i.update())}(t)}function Z(t){!1!==i.enabled&&t.preventDefault()}function U(t){delete $[t.pointerId];for(let e=0;e<_.length;e++)if(_[e].pointerId==t.pointerId){_.splice(e,1);return}}function W(t){let e=$[t.pointerId];void 0===e&&(e=new n.FM8,$[t.pointerId]=e),e.set(t.pageX,t.pageY)}function J(t){let e=t.pointerId===_[0].pointerId?_[1]:_[0];return $[e.pointerId]}i.domElement.addEventListener("contextmenu",Z),i.domElement.addEventListener("pointerdown",V),i.domElement.addEventListener("pointercancel",X),i.domElement.addEventListener("wheel",K,{passive:!1}),this.update()}}}}]);