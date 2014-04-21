String.prototype.contains = function(it) {
    return this.indexOf(it) !== -1;
};

var fullListOfFeaturesToggle = function() {
	$("#fullListOfFeatures").slideToggle("slow"); 
    $("#fullListOfFeaturesLink").slideToggle("slow");	
};

$(document).ready(function() {
    
});