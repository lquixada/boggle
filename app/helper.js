/*
 * Helper
 */

_.mixin({
  render: function (elementId, context) {
    var source   = $(elementId+'-template').html();
    var compiled = _.template(source);
    var html = compiled(context);
    
    $(elementId).html(html);
  }
});
