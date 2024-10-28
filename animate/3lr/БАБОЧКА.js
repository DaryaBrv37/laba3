(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"БАБОЧКА_atlas_1", frames: [[0,0,1864,1542]]},
		{name:"БАБОЧКА_atlas_2", frames: [[0,0,687,703]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.бабочка_Монтажнаяобласть1 = function() {
	this.initialize(img.бабочка_Монтажнаяобласть1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,1169,2845);


(lib.крыло = function() {
	this.initialize(img.крыло);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,2090,3075);


(lib.левоеКОЛЕСО = function() {
	this.initialize(ss["БАБОЧКА_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.фон02 = function() {
	this.initialize(ss["БАБОЧКА_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.фон_Монтажнаяобласть1pngкопия = function() {
	this.initialize(img.фон_Монтажнаяобласть1pngкопия);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,5334,3000);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Символ2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.левоеКОЛЕСО();
	this.instance.setTransform(0,0,0.1693,0.1693);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ2, new cjs.Rectangle(0,0,116.4,119.1), null);


(lib.Символ1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.крыло();
	this.instance.setTransform(0,0,0.1303,0.1303);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Символ1, new cjs.Rectangle(0,0,272.4,400.7), null);


(lib.KOLESOL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ2();
	this.instance.setTransform(58.1,59.5,1,1,0,0,0,58.1,59.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:58.2,rotation:8.1818,x:58.2,y:59.55},0).wait(1).to({rotation:16.3636},0).wait(1).to({rotation:24.5455},0).wait(1).to({rotation:32.7273,x:58.15},0).wait(1).to({rotation:40.9091,x:58.2},0).wait(1).to({rotation:49.0909,x:58.15},0).wait(1).to({rotation:57.2727},0).wait(1).to({rotation:65.4545,x:58.2},0).wait(1).to({rotation:73.6364,x:58.15},0).wait(1).to({rotation:81.8182},0).wait(1).to({rotation:90},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-24.9,-23.5,166.1,166.2);


(lib.левоекрыло = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.Символ1();
	this.instance.setTransform(272.4,200.3,1,1,0,0,0,272.4,200.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:136.2,regY:200.4,scaleX:0.9604,x:141.55,y:200.4},0).wait(1).to({scaleX:0.9208,x:146.95},0).wait(1).to({scaleX:0.8812,x:152.3},0).wait(1).to({scaleX:0.8417,x:157.75},0).wait(1).to({scaleX:0.8021,x:163.15},0).wait(1).to({scaleX:0.7625,x:168.5},0).wait(1).to({scaleX:0.7229,x:173.9},0).wait(1).to({scaleX:0.6833,x:179.3},0).wait(1).to({scaleX:0.6437,x:184.65},0).wait(1).to({scaleX:0.6041,x:190.1},0).wait(1).to({scaleX:0.5645,x:195.45},0).wait(1).to({scaleX:0.525,x:200.85},0).wait(1).to({scaleX:0.4854,x:206.25},0).wait(1).to({scaleX:0.525,x:200.85},0).wait(1).to({scaleX:0.5647,x:195.45},0).wait(1).to({scaleX:0.6043,x:190.05},0).wait(1).to({scaleX:0.644,x:184.65},0).wait(1).to({scaleX:0.6836,x:179.25},0).wait(1).to({scaleX:0.7233,x:173.85},0).wait(1).to({scaleX:0.763,x:168.45},0).wait(1).to({scaleX:0.8026,x:163.05},0).wait(1).to({scaleX:0.8423,x:157.65},0).wait(1).to({scaleX:0.8819,x:152.25},0).wait(1).to({scaleX:0.9216,x:146.85},0).wait(1).to({scaleX:0.8853,x:151.8},0).wait(1).to({scaleX:0.849,x:156.75},0).wait(1).to({scaleX:0.8128,x:161.65},0).wait(1).to({scaleX:0.7765,x:166.6},0).wait(1).to({scaleX:0.7402,x:171.55},0).wait(1).to({scaleX:0.7039,x:176.45},0).wait(1).to({scaleX:0.6676,x:181.45},0).wait(1).to({scaleX:0.6314,x:186.35},0).wait(1).to({scaleX:0.5951,x:191.3},0).wait(1).to({scaleX:0.5588,x:196.25},0).wait(1).to({scaleX:0.5225,x:201.15},0).wait(1).to({scaleX:0.557,x:196.5},0).wait(1).to({scaleX:0.5914,x:191.8},0).wait(1).to({scaleX:0.6258,x:187.15},0).wait(1).to({scaleX:0.6603,x:182.45},0).wait(1).to({scaleX:0.6947,x:177.7},0).wait(1).to({scaleX:0.7291,x:173.05},0).wait(1).to({scaleX:0.7636,x:168.35},0).wait(1).to({scaleX:0.798,x:163.7},0).wait(1).to({scaleX:0.8324,x:159},0).wait(1).to({scaleX:0.8669,x:154.3},0).wait(1).to({scaleX:0.9013,x:149.6},0).wait(1).to({scaleX:0.9358,x:144.9},0).wait(1).to({scaleX:0.9702,x:140.25},0).wait(1).to({scaleX:1.0046,x:135.6},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1.2,0,273.59999999999997,400.7);


(lib.Бабочка = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_1
	this.instance = new lib.бабочка_Монтажнаяобласть1();
	this.instance.setTransform(166,0,0.1736,0.1736);

	this.instance_1 = new lib.левоекрыло();
	this.instance_1.setTransform(393.3,215.3,1,1,0,0,180,136.2,200.3);

	this.instance_2 = new lib.левоекрыло();
	this.instance_2.setTransform(136.2,215.3,1,1,0,0,0,136.2,200.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Бабочка, new cjs.Rectangle(0,0,529.5,494), null);


// stage content:
(lib.Безымянный2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_15
	this.instance = new lib.Бабочка();
	this.instance.setTransform(1002.1,452.75,0.1539,0.1539,0,0,0,264.1,246.6);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:264.8,regY:247,scaleX:0.156,scaleY:0.156,x:1002.7,y:452.25},0).wait(1).to({scaleX:0.158,scaleY:0.158,x:1003.25,y:451.8},0).wait(1).to({scaleX:0.1601,scaleY:0.1601,x:1003.8,y:451.3},0).wait(1).to({scaleX:0.1621,scaleY:0.1621,x:1004.3,y:450.8},0).wait(1).to({scaleX:0.1641,scaleY:0.1641,x:1004.85,y:450.25},0).wait(1).to({scaleX:0.1662,scaleY:0.1662,x:1005.45,y:449.75},0).wait(1).to({scaleX:0.1682,scaleY:0.1682,x:1006,y:449.25},0).wait(1).to({scaleX:0.1703,scaleY:0.1703,x:1006.55,y:448.75},0).wait(1).to({scaleX:0.1723,scaleY:0.1723,x:1007.1,y:448.2},0).wait(1).to({scaleX:0.1744,scaleY:0.1744,x:1007.6,y:447.7},0).wait(1).to({scaleX:0.1764,scaleY:0.1764,x:1008.15,y:447.2},0).wait(1).to({scaleX:0.1785,scaleY:0.1785,x:1008.7,y:446.75},0).wait(1).to({scaleX:0.1805,scaleY:0.1805,x:1009.25,y:446.25},0).wait(1).to({scaleX:0.1826,scaleY:0.1826,x:1009.8,y:445.7},0).wait(1).to({scaleX:0.1846,scaleY:0.1846,x:1010.35,y:445.2},0).wait(1).to({scaleX:0.1866,scaleY:0.1866,x:1010.85,y:444.7},0).wait(1).to({scaleX:0.1887,scaleY:0.1887,x:1011.4,y:444.2},0).wait(1).to({scaleX:0.1907,scaleY:0.1907,x:1011.95,y:443.65},0).wait(1).to({scaleX:0.1928,scaleY:0.1928,x:1012.5,y:443.15},0).wait(1).to({scaleX:0.1948,scaleY:0.1948,x:1013.05,y:442.65},0).wait(1).to({scaleX:0.1969,scaleY:0.1969,x:1013.6,y:442.2},0).wait(1).to({scaleX:0.1989,scaleY:0.1989,x:1014.1,y:441.7},0).wait(1).to({scaleX:0.201,scaleY:0.201,x:1014.65,y:441.15},0).wait(1).to({scaleX:0.203,scaleY:0.203,x:1015.2,y:440.65},0).wait(1).to({scaleX:0.2051,scaleY:0.2051,x:1015.75,y:440.15},0).wait(1).to({scaleX:0.2071,scaleY:0.2071,x:1016.3,y:439.65},0).wait(1).to({scaleX:0.2091,scaleY:0.2091,x:1016.85,y:439.1},0).wait(1).to({scaleX:0.2112,scaleY:0.2112,x:1017.35,y:438.6},0).wait(1).to({scaleX:0.2132,scaleY:0.2132,x:1017.9,y:438.1},0).wait(1).to({scaleX:0.2153,scaleY:0.2153,x:1018.45,y:437.65},0).wait(1).to({scaleX:0.2173,scaleY:0.2173,x:1019,y:437.15},0).wait(1).to({scaleX:0.2194,scaleY:0.2194,x:1019.55,y:436.6},0).wait(1).to({scaleX:0.2214,scaleY:0.2214,x:1020.1,y:436.1},0).wait(1).to({scaleX:0.2235,scaleY:0.2235,x:1020.6,y:435.6},0).wait(1).to({scaleX:0.2255,scaleY:0.2255,x:1021.15,y:435.1},0).wait(1).to({scaleX:0.2276,scaleY:0.2276,x:1021.7,y:434.55},0).wait(1).to({scaleX:0.2296,scaleY:0.2296,x:1022.25,y:434.05},0).wait(1).to({scaleX:0.2317,scaleY:0.2317,x:1022.8,y:433.55},0).wait(1).to({scaleX:0.2337,scaleY:0.2337,x:1023.35,y:433.05},0).wait(1).to({scaleX:0.2357,scaleY:0.2357,x:1023.85,y:432.6},0).wait(1).to({scaleX:0.2378,scaleY:0.2378,x:1024.4,y:432.05},0).wait(1).to({scaleX:0.2398,scaleY:0.2398,x:1024.95,y:431.55},0).wait(1).to({scaleX:0.2419,scaleY:0.2419,x:1025.5,y:431.05},0).wait(1).to({scaleX:0.2439,scaleY:0.2439,x:1026.05,y:430.55},0).wait(1).to({scaleX:0.246,scaleY:0.246,x:1026.6,y:430},0).wait(2).to({regY:246.9,scaleX:0.1539,scaleY:0.1539,x:998.45,y:461.6},0).wait(1));

	// Слой_14
	this.instance_1 = new lib.Бабочка();
	this.instance_1.setTransform(218.65,326.2,0.1206,0.1206,0,0,0,264.6,247.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({regX:264.8,regY:247,scaleX:0.1333,scaleY:0.1333,y:326.15},0).wait(1).to({scaleX:0.1459,scaleY:0.1459},0).wait(1).to({scaleX:0.1586,scaleY:0.1586},0).wait(1).to({scaleX:0.1712,scaleY:0.1712},0).wait(1).to({scaleX:0.1839,scaleY:0.1839},0).wait(1).to({scaleX:0.1966,scaleY:0.1966},0).wait(1).to({scaleX:0.2092,scaleY:0.2092},0).wait(1).to({scaleX:0.2219,scaleY:0.2219},0).wait(1).to({scaleX:0.2345,scaleY:0.2345,x:218.7},0).wait(1).to({scaleX:0.2472,scaleY:0.2472},0).wait(1).to({scaleX:0.2599,scaleY:0.2599},0).wait(1).to({scaleX:0.2725,scaleY:0.2725,y:326.1},0).wait(1).to({scaleX:0.2852,scaleY:0.2852,y:326.15},0).wait(1).to({scaleX:0.2978,scaleY:0.2978,y:326.1},0).wait(1).to({scaleX:0.3105,scaleY:0.3105,y:326.15},0).wait(1).to({scaleX:0.3232,scaleY:0.3232,y:326.1},0).wait(1).to({scaleX:0.3358,scaleY:0.3358},0).wait(1).to({scaleX:0.3485,scaleY:0.3485,x:218.75},0).wait(1).to({scaleX:0.3612,scaleY:0.3612},0).wait(1).to({scaleX:0.3738,scaleY:0.3738,y:326.15},0).wait(1).to({scaleX:0.3865,scaleY:0.3865,y:326.1},0).wait(1).to({scaleX:0.3991,scaleY:0.3991,y:326.15},0).wait(1).to({scaleX:0.4118,scaleY:0.4118,y:326.1},0).wait(1).to({scaleX:0.4245,scaleY:0.4245},0).wait(1).to({scaleX:0.4371,scaleY:0.4371},0).wait(1).to({scaleX:0.4498,scaleY:0.4498},0).wait(1).to({scaleX:0.4624,scaleY:0.4624},0).wait(1).to({scaleX:0.4751,scaleY:0.4751},0).wait(1).to({scaleX:0.4878,scaleY:0.4878},0).wait(1).to({scaleX:0.5004,scaleY:0.5004},0).wait(1).to({scaleX:0.5131,scaleY:0.5131},0).wait(1).to({scaleX:0.5257,scaleY:0.5257},0).wait(1).to({scaleX:0.5384,scaleY:0.5384},0).wait(1).to({scaleX:0.5511,scaleY:0.5511},0).wait(1).to({scaleX:0.5637,scaleY:0.5637},0).wait(1).to({scaleX:0.5764,scaleY:0.5764,x:218.8,y:326.05},0).wait(1).to({scaleX:0.5891,scaleY:0.5891,y:326.1},0).wait(1).to({scaleX:0.6017,scaleY:0.6017,y:326.05},0).wait(1).to({scaleX:0.6144,scaleY:0.6144,y:326.1},0).wait(1).to({scaleX:0.627,scaleY:0.627},0).wait(1).to({scaleX:0.6397,scaleY:0.6397,y:326.05},0).wait(1).to({scaleX:0.6524,scaleY:0.6524,y:326.1},0).wait(1).to({scaleX:0.665,scaleY:0.665,y:326.05},0).wait(1).to({scaleX:0.6777,scaleY:0.6777,y:326.1},0).wait(1).to({scaleX:0.6903,scaleY:0.6903,y:326.05},0).wait(1).to({scaleX:0.703,scaleY:0.703,y:326.1},0).wait(1).to({regX:265.2,regY:247.2,scaleX:0.5211,scaleY:0.5211,x:218.75,y:326.2},0).wait(1));

	// Слой_13
	this.instance_2 = new lib.Бабочка();
	this.instance_2.setTransform(69.45,707.15,0.182,0.182,0,0,0,264.9,247.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({regX:264.8,regY:247,scaleX:0.1871,scaleY:0.1871,x:93.45,y:697.1},0).wait(1).to({scaleX:0.1922,scaleY:0.1922,x:117.6,y:687.5},0).wait(1).to({scaleX:0.1973,scaleY:0.1973,x:141.9,y:678.25},0).wait(1).to({scaleX:0.2024,scaleY:0.2024,x:166.3,y:669.1},0).wait(1).to({scaleX:0.2075,scaleY:0.2075,x:190.75,y:660.15},0).wait(1).to({scaleX:0.2126,scaleY:0.2126,x:215.25,y:651.4},0).wait(1).to({scaleX:0.2177,scaleY:0.2177,x:239.85,y:642.95},0).wait(1).to({scaleX:0.2228,scaleY:0.2228,x:264.5,y:634.65},0).wait(1).to({scaleX:0.2279,scaleY:0.2279,x:289.3,y:626.65},0).wait(1).to({scaleX:0.2331,scaleY:0.2331,x:314.2,y:619.25},0).wait(1).to({scaleX:0.2382,scaleY:0.2382,x:339.4,y:612.65},0).wait(1).to({scaleX:0.2433,scaleY:0.2433,x:364.6,y:606.25},0).wait(1).to({scaleX:0.2484,scaleY:0.2484,x:389.9,y:600.15},0).wait(1).to({scaleX:0.2535,scaleY:0.2535,x:415.25,y:594.25},0).wait(1).to({scaleX:0.2586,scaleY:0.2586,x:440.65,y:588.6},0).wait(1).to({scaleX:0.2637,scaleY:0.2637,x:466.15,y:583.4},0).wait(1).to({scaleX:0.2688,scaleY:0.2688,x:491.8,y:578.65},0).wait(1).to({scaleX:0.2739,scaleY:0.2739,x:517.4,y:574.1},0).wait(1).to({scaleX:0.279,scaleY:0.279,x:543.1,y:569.75},0).wait(1).to({scaleX:0.2841,scaleY:0.2841,x:568.75,y:565.6},0).wait(1).to({scaleX:0.2892,scaleY:0.2892,x:594.45,y:561.55},0).wait(1).to({scaleX:0.2943,scaleY:0.2943,x:620.2,y:557.75},0).wait(1).to({scaleX:0.2995,scaleY:0.2995,x:645.95,y:556.6},0).wait(1).to({scaleX:0.2918,scaleY:0.2918,x:671.5,y:561.45},0).wait(1).to({scaleX:0.2842,scaleY:0.2842,x:697.05,y:566.5},0).wait(1).to({scaleX:0.2765,scaleY:0.2765,x:722.55,y:571.65},0).wait(1).to({scaleX:0.2689,scaleY:0.2689,x:748.05,y:576.95},0).wait(1).to({scaleX:0.2612,scaleY:0.2612,x:773.45,y:582.35},0).wait(1).to({scaleX:0.2536,scaleY:0.2536,x:798.95,y:587.95},0).wait(1).to({scaleX:0.2459,scaleY:0.2459,x:824.3,y:593.6},0).wait(1).to({scaleX:0.2383,scaleY:0.2383,x:849.7,y:599.4},0).wait(1).to({scaleX:0.2306,scaleY:0.2306,x:875,y:605.25},0).wait(1).to({scaleX:0.223,scaleY:0.223,x:900.4,y:611.3},0).wait(1).to({scaleX:0.2153,scaleY:0.2153,x:925.65,y:617.4},0).wait(1).to({scaleX:0.2077,scaleY:0.2077,x:950.95,y:623.6},0).wait(1).to({scaleX:0.2001,scaleY:0.2001,x:976.15,y:629.9},0).wait(1).to({scaleX:0.1924,scaleY:0.1924,x:1001.45,y:636.25},0).wait(1).to({scaleX:0.1848,scaleY:0.1848,x:1026.6,y:642.8},0).wait(1).to({scaleX:0.1771,scaleY:0.1771,x:1051.8,y:649.4},0).wait(1).to({scaleX:0.1695,scaleY:0.1695,x:1076.95,y:656.1},0).wait(1).to({scaleX:0.1618,scaleY:0.1618,x:1102.05,y:662.95},0).wait(1).to({scaleX:0.1542,scaleY:0.1542,x:1127.15,y:669.9},0).wait(1).to({scaleX:0.1465,scaleY:0.1465,x:1152.2,y:677},0).wait(1).to({scaleX:0.1389,scaleY:0.1389,x:1177.2,y:684.25},0).wait(1).to({scaleX:0.1312,scaleY:0.1312,x:1202.1,y:691.8},0).wait(1).to({scaleX:0.1236,scaleY:0.1236,x:1226.8,y:699.95},0).wait(1).to({regX:264.9,scaleX:0.182,scaleY:0.182,x:1005.9,y:595.75},0).wait(1));

	// Слой_12
	this.instance_3 = new lib.Бабочка();
	this.instance_3.setTransform(1218.45,443.35,0.3535,0.3535,0,0,0,264.4,247.2);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(1).to({regX:264.8,regY:247,scaleX:0.2845,scaleY:0.2845,rotation:-7.3636,x:1129.95,y:461},0).wait(1).to({scaleX:0.2154,scaleY:0.2154,rotation:-10.3332,x:1042.75,y:484.6},0).wait(1).to({scaleX:0.1463,scaleY:0.1463,rotation:-16.9599,x:957.3,y:514.3},0).wait(1).to({rotation:-26.0923,x:923.7,y:532.25},0).wait(1).to({rotation:-37.7226,x:894.75,y:557},0).wait(1).to({rotation:-24.8886,x:866.6,y:582.7},0).wait(1).to({rotation:-9.6221,x:831.05,y:596.1},0).wait(1).to({rotation:-3.3942,x:793.8,y:604.45},0).wait(1).to({rotation:2.567,x:755.95,y:608.9},0).wait(1).to({rotation:8.293,x:717.8,y:609.4},0).wait(1).to({rotation:13.579,x:679.75,y:606.25},0).wait(1).to({rotation:18.393,x:642.2,y:599.8},0).wait(1).to({rotation:22.762,x:605.2,y:590.35},0).wait(1).to({rotation:26.732,x:569.1,y:578.2},0).wait(1).to({rotation:30.365,x:533.85,y:563.75},0).wait(1).to({rotation:33.748,x:499.5,y:547.15},0).wait(1).to({rotation:36.972,x:466.15,y:528.6},0).wait(1).to({rotation:40.172,x:433.95,y:508.25},0).wait(1).to({rotation:43.609,x:402.9,y:486},0).wait(1).to({rotation:48.092,x:373.4,y:461.85},0).wait(1).to({rotation:68.558,x:347.55,y:433.95},0).wait(1).to({rotation:27.209,x:329.5,y:426.75},0).wait(1).to({rotation:25.422,x:311.25,y:420.1},0).wait(1).to({rotation:23.25,x:292.8,y:414.05},0).wait(1).to({rotation:20.54,x:274,y:408.85},0).wait(1).to({rotation:17.065,x:255,y:404.55},0).wait(1).to({rotation:12.437,x:235.75,y:401.7},0).wait(1).to({rotation:6.0119,x:216.35,y:400.65},0).wait(1).to({rotation:-3.283,x:196.95,y:402.25},0).wait(1).to({rotation:-16.8582,x:178.3,y:407.6},0).wait(1).to({rotation:-34.897,x:161.85,y:417.9},0).wait(1).to({rotation:-53.4582,x:149.65,y:432.9},0).wait(1).to({rotation:-67.9849,x:142.25,y:450.85},0).wait(1).to({rotation:-78.0086,x:138.8,y:469.95},0).wait(1).to({rotation:-84.8966,x:138.15,y:489.35},0).wait(1).to({rotation:-89.8098,x:139.45,y:508.75},0).wait(1).to({rotation:-93.4778,x:142.1,y:528.05},0).wait(1).to({rotation:-96.3146,x:145.95,y:547.15},0).wait(1).to({rotation:-98.5799,x:150.55,y:566},0).wait(8).to({regY:247.1,scaleX:0.3535,scaleY:0.3535,rotation:0,x:167.9,y:452.95},0).wait(1));

	// Слой_8
	this.instance_4 = new lib.Бабочка();
	this.instance_4.setTransform(77.15,90.7,0.2533,0.2533,0,0,0,264.8,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).to({guide:{path:[77.2,90.8,77.6,87.1,78.5,83.4,73.9,96.7,78,111,82,125.3,92.8,134.2,103.2,142.7,119.6,146.1,130.4,148.3,149.7,148.9,164.8,149.3,173.4,148.1,186.3,146.4,194.9,140.4,200.2,156.7,214.7,169.4,227.9,180.9,245.8,187.2,260.9,192.4,280.7,194.5,292.7,195.7,316.6,196.4,328.8,196.7,334.9,196.6,345.1,196.5,353.1,195.3,361.5,194.1,371.7,191.2,378.2,189.3,389.8,185.3,420.5,174.8,442.4,166.5,470.6,155.7,493.8,145,495.4,144.3,529.5,127.9,551.1,117.5,565.6,111.7,607.5,94.8,640.9,95.1,655.9,95.2,667.2,98.8,673.7,100.9,685.6,106.8,716.8,122.3,748,137.8,804.2,165.8,833.1,178.7,881,200.1,921.1,212.3,925.6,213.6,927.8,214.6,931.4,216.2,933.6,218.3,935.8,220.4,937.6,224,938.6,226.1,940.5,230.5,948.7,247.9,968.2,258.9,985.4,268.6,1007.6,271.4,1022.6,273.2,1048.6,272.5,1078.4,271.7,1089.6,272.4,1112.9,273.8,1134.6,280.7,1157,287.7,1175.8,300,1195.3,312.7,1209.9,330.4,1224.9,348.5,1232.8,369.6,1236.2,378.6,1242.4,403.4,1247.9,424.9,1253.4,436.6,1262.1,455.2,1275.7,463.1,1275.7,463.1,1275.7,463.1]}},47).wait(1));

	// велик
	this.instance_5 = new lib.фон02();
	this.instance_5.setTransform(452,273,0.1802,0.1802);

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(48));

	// leftKOL
	this.instance_6 = new lib.KOLESOL();
	this.instance_6.setTransform(731.65,500.5,1,1,0,0,0,58.1,59.5);

	this.instance_7 = new lib.KOLESOL();
	this.instance_7.setTransform(544.1,500.5,1,1,0,0,0,58.1,59.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_7},{t:this.instance_6}]}).wait(48));

	// бабочка_Монтажная_область_1_png
	this.instance_8 = new lib.Бабочка();
	this.instance_8.setTransform(646.15,290.65,0.3776,0.3776,0,0,0,264.8,247);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(48));

	// фон
	this.instance_9 = new lib.фон_Монтажнаяобласть1pngкопия();
	this.instance_9.setTransform(0,0,0.24,0.24);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(48));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(640,360,702.8,392.1);
// library properties:
lib.properties = {
	id: '5A0A54EB5700E541B8C5434ACCC54D30',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/бабочка_Монтажнаяобласть1.png", id:"бабочка_Монтажнаяобласть1"},
		{src:"images/крыло_.png", id:"крыло"},
		{src:"images/фон_Монтажнаяобласть1pngкопия.png", id:"фон_Монтажнаяобласть1pngкопия"},
		{src:"images/БАБОЧКА_atlas_1.png", id:"БАБОЧКА_atlas_1"},
		{src:"images/БАБОЧКА_atlas_2.png", id:"БАБОЧКА_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['5A0A54EB5700E541B8C5434ACCC54D30'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;