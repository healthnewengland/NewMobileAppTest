/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
         dom: [
         {
            id:'BackGround',
            type:'image',
            rect:['0','0','320px','480px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"BackGround.png",'0px','0px']
         },
         {
            id:'Logo',
            type:'image',
            rect:['-100px','-153px','519px','912px','auto','auto'],
            fill:["rgba(0,0,0,0)",im+"Logo.png",'0px','0px']
         },
         {
            id:'Rectangle2',
            type:'rect',
            rect:['0px','400px','320px','80px','auto','auto'],
            fill:["rgba(76,72,128,0.62)"],
            stroke:[0,"rgb(0, 0, 0)","none"]
         },
         {
            id:'RoundRect',
            display:'none',
            type:'rect',
            rect:['91px','421px','138px','38px','auto','auto'],
            borderRadius:["10px","10px","10px","10px"],
            fill:["rgba(192,192,192,1)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            c:[
            {
               id:'Text',
               type:'text',
               rect:['26px','10px','85px','17px','auto','auto'],
               text:"BACK",
               align:"center",
               font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none",""]
            }]
         },
         {
            id:'AboutHNE',
            type:'rect',
            rect:['159','400','auto','auto','auto','auto']
         },
         {
            id:'IDCard2',
            type:'image',
            rect:['80px','401px','79px','79px','auto','auto'],
            fill:["rgba(0,0,0,0)",'IDCard.png','0px','0px']
         },
         {
            id:'Text2',
            display:'none',
            type:'text',
            rect:['17px','28px','163px','27px','auto','auto'],
            text:"About",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         },
         {
            id:'Text3',
            display:'none',
            type:'text',
            rect:['7px','29px','189px','17px','auto','auto'],
            text:"ID Card",
            align:"left",
            font:['Arial, Helvetica, sans-serif',16,"rgba(0,0,0,1)","normal","none","normal"]
         }],
         symbolInstances: [
         {
            id:'AboutHNE',
            symbolName:'AboutHNE'
         }
         ]
      },
   states: {
      "Base State": {
         "${_RoundRect}": [
            ["style", "top", '421px'],
            ["style", "left", '91px'],
            ["style", "display", 'none']
         ],
         "${_Text3}": [
            ["style", "display", 'none']
         ],
         "${_Text2}": [
            ["style", "top", '28px'],
            ["style", "display", 'none'],
            ["style", "text-align", 'left'],
            ["style", "left", '17px']
         ],
         "${_Logo}": [
            ["style", "top", '-153px'],
            ["style", "left", '-100px'],
            ["style", "display", 'block']
         ],
         "${_IDCard2}": [
            ["style", "top", '401px'],
            ["style", "overflow", 'hidden'],
            ["style", "height", '79px'],
            ["style", "display", 'block'],
            ["style", "left", '80px'],
            ["style", "width", '79px']
         ],
         "${_Text}": [
            ["style", "top", '10px'],
            ["style", "left", '26px'],
            ["style", "text-align", 'center'],
            ["style", "font-size", '16px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "width", '320px'],
            ["style", "height", '480px'],
            ["style", "overflow", 'hidden']
         ],
         "${_AboutHNE}": [
            ["style", "display", 'block']
         ],
         "${_Rectangle2}": [
            ["color", "background-color", 'rgba(76,72,128,0.62)'],
            ["style", "height", '80px'],
            ["style", "top", '400px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 1250,
         autoPlay: true,
         labels: {
            "Start": 0,
            "IDCard": 500,
            "About": 1250
         },
         timeline: [
            { id: "eid8", tween: [ "style", "${_RoundRect}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid9", tween: [ "style", "${_RoundRect}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid5", tween: [ "style", "${_AboutHNE}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid4", tween: [ "style", "${_AboutHNE}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid14", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid12", tween: [ "style", "${_Text3}", "display", 'block', { fromValue: 'none'}], position: 500, duration: 0 },
            { id: "eid13", tween: [ "style", "${_Text3}", "display", 'none', { fromValue: 'block'}], position: 1250, duration: 0 },
            { id: "eid11", tween: [ "style", "${_Text2}", "display", 'none', { fromValue: 'none'}], position: 0, duration: 0 },
            { id: "eid10", tween: [ "style", "${_Text2}", "display", 'block', { fromValue: 'none'}], position: 1250, duration: 0 },
            { id: "eid2", tween: [ "style", "${_IDCard2}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid3", tween: [ "style", "${_IDCard2}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 },
            { id: "eid6", tween: [ "style", "${_Logo}", "display", 'block', { fromValue: 'block'}], position: 0, duration: 0 },
            { id: "eid7", tween: [ "style", "${_Logo}", "display", 'none', { fromValue: 'block'}], position: 500, duration: 0 }         ]
      }
   }
},
"About": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'About',
      type: 'image',
      rect: ['0px','0px','88px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/About.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_About}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '88px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '88px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"MyID": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'IDCard',
      type: 'image',
      rect: ['0px','0px','88px','90px','auto','auto'],
      fill: ['rgba(0,0,0,0)','images/IDCard.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_IDCard}": [
            ["style", "height", '90px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '88px']
         ],
         "${symbolSelector}": [
            ["style", "height", '90px'],
            ["style", "width", '88px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
},
"AboutHNE": {
   version: "1.5.0",
   minimumCompatibleVersion: "1.5.0",
   build: "1.5.0.217",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: false,
   resizeInstances: false,
   content: {
   dom: [
   {
      id: 'About3',
      type: 'image',
      rect: ['0px','0px','80px','80px','auto','auto'],
      fill: ['rgba(0,0,0,0)','About.png','0px','0px']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_About3}": [
            ["style", "height", '80px'],
            ["style", "top", '0px'],
            ["style", "left", '0px'],
            ["style", "width", '80px']
         ],
         "${symbolSelector}": [
            ["style", "height", '80px'],
            ["style", "width", '80px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-2609846");
