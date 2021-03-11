let toffsetx = [];
let toffsety = [];
var dragobject={
x: 0, y: 0, offsetx : null, offsety : null, targetobj : null, dragapproved : 0,
initialize:function(){
document.onmousedown=this.drag;
document.onmouseup=function(){
this.dragapproved=0;
window.toffsetx = [];
window.toffsety = [];
}
},
drag:function(e){
var evtobj=window.event? window.event : e
this.targetobj=window.event? event.srcElement : e.target
if (this.targetobj.className=="dragtoy" || this.targetobj.className=="dragtree"){
this.dragapproved=1;
if (isNaN(parseInt(this.targetobj.style.left))){this.targetobj.style.left=0}
if (isNaN(parseInt(this.targetobj.style.top))){this.targetobj.style.top=0}
this.offsetx=parseInt(this.targetobj.style.left);
this.offsety=parseInt(this.targetobj.style.top);
if (this.targetobj.className=="dragtree") {
let list = document.querySelectorAll(".dragtoy");
for (let i = 0; i < list.length; i++) {
window.toffsetx[i] = parseInt(list.item(i).style.left);
window.toffsety[i] = parseInt(list.item(i).style.top);
}
}
this.x=evtobj.clientX;
this.y=evtobj.clientY;
if (evtobj.preventDefault);
evtobj.preventDefault();
document.onmousemove=dragobject.moveit;
}
},
moveit:function(e){
var evtobj=window.event? window.event : e
if (this.dragapproved==1){
this.targetobj.style.left=this.offsetx+evtobj.clientX-this.x+"px";
this.targetobj.style.top=this.offsety+evtobj.clientY-this.y+"px";
if (this.targetobj.className=="dragtree") {
let list = document.querySelectorAll(".dragtoy");
for (let i = 0; i < list.length; i++) {
let l1 = parseInt(this.targetobj.style.left);
let l2 = parseInt(list.item(i).style.left);
let t1 = parseInt(this.targetobj.style.top);
let t2 = parseInt(list.item(i).style.top);
if (l1 <= (l2 + 40) && t1 <= (t2 + 40) && (l1 + 306) >= l2 && (t1 + 463) >= t2) {
list.item(i).style.left = (parseInt(this.targetobj.style.left) + window.toffsetx[i] - this.offsetx) + "px";
list.item(i).style.top = (parseInt(this.targetobj.style.top) + window.toffsety[i] - this.offsety) + "px";
}
}
}
return false;
}
}
}
dragobject.initialize()

function toy(num) {
let adr ="images/toy" + num + ".png";
let table = document.querySelector("#sct");
let nimg = document.createElement('img');
let box = table.getBoundingClientRect();
nimg.setAttribute('src', adr);
nimg.setAttribute('class', 'dragtoy');
nimg.style.left = Math.floor(Math.random() * 460) + box.left + "px";
nimg.style.top = Math.floor(Math.random() * 460) + box.top + "px";
table.appendChild(nimg);
}

function nam() {
let arr = [[1,1,1,0,0,1,1,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,],
 [1,0,1,0,0,1,0,1,0,0,1,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0,],
 [1,1,1,0,0,1,1,1,0,0,1,0,1,0,1,0,0,1,0,1,1,0,0,1,0,0,],
 [1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,1,0,1,0,0,1,0,0,],
 [1,0,0,0,0,1,0,1,0,0,1,0,0,0,1,0,0,1,0,0,1,0,0,1,1,1,]];
let list = document.querySelectorAll(".dragtoy");
let k = 0;
for (let i = 0; i < 26; i++) {
for (let j = 0; j < 5; j++) {
if (arr[j][i] == 1) {
list.item(k).style.left = (i + 1) * 40 + "px";
list.item(k).style.top = (j + 1) * 40 + "px";
list.item(k).style.zIndex = "111";
k++;
}
if (k == list.length) break;
}
if (k == list.length) break;
}
}

function init() {
let table = document.querySelector("#sct");
let box = table.getBoundingClientRect();
let tree = document.querySelector(".dragtree");
tree.style.left = 182 + box.left + "px";
tree.style.top = 56 + box.top + "px";
}