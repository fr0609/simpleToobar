var oojs = (function (oojs) {


        var createToolbarItems = function (itemElements) {
     		
     	var items = [];

     	[].forEach.call(itemElements, function (el,index,array){

     		var item = {
     			el :  el,
     			
     			disable : function () {
     				this.el.classList.add("disabled");
     			},
     			enable : function () {
     				this.el.classList.add("active");
     			},
     			isDisabled : function () {
     				return this.el.classList.contains("disabled");

     			},
     			activate: function () {
     				if (this.isDisabled()) {
     					return;
     				} 
     				return this.el.classList.add("active");
     			},
     			deactivate: function () {
     				if (this.isDisabled()) {
     					return;
     				} 
     				return this.el.classList.remove("active");
     			},
     			isActive : function () {
     				return this.el.classList.contains("active");

     			},

     			toogleActiveState: function () {

     				if (this.isActive){
     					this.deactivate();
     				} else {
     					this.active();
     				}

     			}
     		};

     		items.push(item);

     	});
     	 return items;
     };


    oojs.createToolbar = function (elementId) {
    
    var element = document.getElementById(elementId);
     //it can be enchanged
    // if(!element){

    // 	element = document.createElement("DIV");
    // }

     var items = element.querySelectorAll(".toolbar-item");

     return {
     	  items: createToolbarItems(items)
     	  //enchange to add or remove items
     	  // add : function(){

     	  // },
     	  // remove : function(){

     	  // }
     };

  };

  return oojs;

}(oojs || {}));





// var toolbar = oojs.CreateToolbar("myToolbar");

// var toolbarItem = toolbar.items[0];

// toolbarItem.setEnabled(true); // or false 
// toolbarItem.getEnabled(); // or false
 
//  // refactor to 
// toolbarItem.enabled = true; // or false
// var enabled = toolbarItem.enabled; //


