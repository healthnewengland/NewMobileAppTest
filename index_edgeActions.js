/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "${_IDCard2}", "click", function(sym, e) {
         sym.play();
         

      });
      //Edge binding end

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.stop();
         // insert code here

      });
      //Edge binding end

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "complete", function(sym, e) {
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_RoundRect}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play("Start");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${_AboutHNE}", "click", function(sym, e) {
         // insert code for mouse click here
         // play the timeline from the given position (ms or label)
         sym.play("About");

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'About'
   (function(symbolName) {   
   
   })("About");
   //Edge symbol end:'About'

   //=========================================================
   
   //Edge symbol: 'MyID'
   (function(symbolName) {   
   
   })("MyID");
   //Edge symbol end:'MyID'

   //=========================================================
   
   //Edge symbol: 'AboutHNE'
   (function(symbolName) {   
   
      

   })("AboutHNE");
   //Edge symbol end:'AboutHNE'

})(jQuery, AdobeEdge, "EDGE-2609846");