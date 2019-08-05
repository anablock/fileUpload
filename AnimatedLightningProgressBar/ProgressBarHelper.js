/** 
* $A.getCallback - ensures that the lightning components framework rerenders the markup
*/

({
    valueChanged : function(cmp, ev) {
        // capture the start and end values and figure out if 
        // to increment or decrement from the current value
        var times=0;
        var current=cmp.get('v.value');
        var final=cmp.get('v.inputVal');
        var increment=1;
        if (final<current) {
            increment=-1;
        }
        var self=this;
        // timer is set up to repeat every 100 milliseconds
        var timeoutRef = window.setInterval($A.getCallback(function() {
            if (cmp.isValid()) {
                var value=cmp.get('v.value');
                value+=increment;
                if (value==final) {
                    window.clearInterval(cmp.get('v.timeoutRef'));
                    cmp.set('v.timeoutRef', null);
                }
                cmp.set('v.value', value);
            }
        }), 100);
        cmp.set('v.timeoutRef', timeoutRef);
    }
})
