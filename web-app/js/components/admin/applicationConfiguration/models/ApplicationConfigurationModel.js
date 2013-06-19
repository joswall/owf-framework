define([
    'jquery',
    'underscore',
    'backbone'
], function($, _, Backbone){
    
    return ApplicationConfigurationModel = Backbone.Model.extend({
                    
        capturePriorValue: function(){
            this.set({priorValue : this.get("value")});
        },
        
        resetValue: function(){
            this.set({value : this.get("priorValue")});
        }
    }); 
    
});
