// Arguments passed into this controller can be accessed via the `$.args` object directly or:
var args = $.args;

// setTimeout(function(e){
// alert('resultado argumentos '+ args.texto + ',\n '+ args.texto2);
// },1000);

//properties
// setTimeout(function() {
// var demoProperties = Ti.App.Properties.getString('parametrosPropertie');
// var objetoPropertie = JSON.parse(demoProperties);
//
// alert('Resultado Propertie ' + objetoPropertie.texto + ', \n ' + objetoPropertie.texto2);
//
// Ti.App.Properties.setString('paramentrosPropertie ', null);
//
// }, 2000);

var demoProperties = Ti.App.Properties.getString('parametrosPropertie');
var objetoPropertie = JSON.parse(demoProperties);

var label = Ti.UI.createLabel({
	top : '10%',
	text : objetoPropertie.nombre,
	width : '70%',
	height : '10%',
	color : 'white',
	top : 0,
	borderColor : 'red',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});

var label1 = Ti.UI.createLabel({
	top : '15%',
	text : objetoPropertie.apellido,
	width : '70%',
	height : '10%',
	color : 'white',
	top : 0,
	borderColor : 'red',
	textAlign : Ti.UI.TEXT_ALIGNMENT_CENTER,
});

$.newWindow.add(label,label1);
//abrir ventana
$.btnClose.addEventListener('click', function(e) {
	$.newWindow.close();
});

//fireevents
Ti.App.addEventListener('win', function(e) {

	$.newWindow.open();

	setTimeout(function() {
		alert('Resultado FireEvent ' + e.texto + ', \n ' + e.texto2);
	}, 1500);

});
