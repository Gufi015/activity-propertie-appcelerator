// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

function showIndicator(e) {
    $.activityIndicator.show();
    // do some work that takes 6 seconds
    // ie. replace the following setTimeout block with your code
    setTimeout(function() {
        e.source.close();
        $.activityIndicator.hide();
    }, 6000);
}