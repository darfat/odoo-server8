openerp_announcement = function(instance) {
    instance.web.WebClient.include({
        show_application: function() {
            return $.when(this._super.apply(this, arguments));
        },
        _ab_location: function(dbuuid) {
	       //alert ("asdf");
           // return _.str.sprintf('https://services.openerp.com/openerp-enterprise/ab/css/%s.css', dbuuid);
        },
        show_annoucement_bar: function() {
            return;
        }
    });
};
