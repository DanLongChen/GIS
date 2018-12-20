// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.10/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/scheduling ./GamepadInputDevice ./GamepadState".split(" "),function(e,h,m,k,l,f){Object.defineProperty(h,"__esModule",{value:!0});e=function(){function d(a,b){var c=this;this.element=a;this.input=b;this.handleGamepadConnectedEvent=function(a){c.handleGamepadConnected(a.gamepad)};this.handleGamepadDisconnectedEvent=function(a){a=a.gamepad;var b=c.inputDevices[a.index];b&&(c.emitGamepadEvent(a,f.extractState(b),!1),c.inputDevices[a.index]=
void 0,c.latestUpdate[a.index]=void 0,c.input.gamepad.devices.remove(b))};this.frameTask=null;this.latestUpdate=[];this.inputDevices=[];this.callback=null;if(this.supported="getGamepads"in window.navigator)this.forEachGamepad(function(a){return c.handleGamepadConnected(a)}),window.addEventListener("gamepadconnected",this.handleGamepadConnectedEvent),window.addEventListener("gamepaddisconnected",this.handleGamepadDisconnectedEvent)}d.prototype.destroy=function(){this.pollingEnabled=!1;this.supported&&
(window.removeEventListener("gamepadconnected",this.handleGamepadConnectedEvent),window.removeEventListener("gamepaddisconnected",this.handleGamepadDisconnectedEvent))};Object.defineProperty(d.prototype,"onEvent",{set:function(a){this.callback=a},enumerable:!0,configurable:!0});Object.defineProperty(d.prototype,"pollingEnabled",{set:function(a){this.supported&&(a?this.startPolling():this.stopPolling())},enumerable:!0,configurable:!0});d.prototype.handleGamepadConnected=function(a){var b=new l(a);
"unknown"!==b.deviceType&&(this.inputDevices[a.index]=b,this.input.gamepad.devices.add(b))};d.prototype.startPolling=function(){var a=this;null==this.frameTask&&(this.frameTask=k.addFrameTask({update:function(){return a.readGamepadState()}}))};d.prototype.stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=[])};d.prototype.readGamepadState=function(){var a=this,b=document.hasFocus(),c=this.element.contains(document.activeElement),d="document"===
this.input.gamepad.enabledFocusMode&&!b||"view"===this.input.gamepad.enabledFocusMode&&!c;this.forEachGamepad(function(b){var c=a.inputDevices[b.index];if(c){var g=a.latestUpdate[b.index],c=f.extractState(c),e=d||f.stateIdle(c);g&&(g.timestamp===b.timestamp||!g.active&&e||f.stateEqual(g.state,c))||a.emitGamepadEvent(b,c,!e)}})};d.prototype.forEachGamepad=function(a){for(var b=window.navigator.getGamepads(),c=0;c<b.length;c++){var d=b[c];this.validate(d)&&a(d)}};d.prototype.emitGamepadEvent=function(a,
b,c){var d=this.latestUpdate[a.index];if((d=d&&d.active)||c)this.latestUpdate[a.index]={timestamp:a.timestamp,state:b,active:c},this.callback&&this.callback({device:this.inputDevices[a.index],state:b,action:!d&&c?"start":d&&c?"update":"end"})};d.prototype.validate=function(a){if(!a||!a.connected)return!1;for(var b=0;b<a.axes.length;b++)if(isNaN(a.axes[b]))return!1;return!0};return d}();h.GamepadSource=e});