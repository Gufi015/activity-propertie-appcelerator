// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// /**
 // * The scoped constructor of the controller.
 // **/
// (function constructor() {
// 
// }());
// 
// function showIndicator() {
	// $.indicatorLight.show();
	// $.indicatorDark.show();
	// $.indicatorBig.show();
	// $.indicatorMessage.show();
	// $.indicatorNavBar.show();
// }
// 
// function changeTintColor() {
	// const colors = [ 'red', 'green', 'blue', 'yellow', 'purple' ];
// 
	// $.indicatorLight.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
	// $.indicatorDark.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
	// $.indicatorBig.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
	// $.indicatorMessage.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
	// $.indicatorNavBar.setIndicatorColor(colors[_.random(0, colors.length - 1)]);
// }

import { logger } from 'logger';

/**
 * The scoped constructor of the controller.
 **/
(function constructor() {

}());

let focussedTextfield;

function textFieldValueChanged({ source, value }) {
	logger.log(`${source.id} changed value to ${value}`);
}

function textFieldFocussed({ source }) {
	focussedTextfield = source.id;
	logger.log(`${source.id} focussed!`);
}

function textFieldBlurred({ source }) {
	focussedTextfield = null;
	logger.log(`${source.id} blurred!`);
}

function blurTextfield() {
	if (focussedTextfield) {
		$[focussedTextfield].blur();
	}
}