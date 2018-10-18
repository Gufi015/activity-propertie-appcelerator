//Properties
$.btnProperties.addEventListener('click', function(e) {
	var pasarParametros = {
		'nombre' : $.campoTexto.getValue(),
		'apellido' : $.campoTexto1.getValue(),
		'edad': $.campoTexto2.getValue(),
		'telefono': $.campoTexto3.getValue()
	};
	if ($.campoTexto.getValue() == "") {
		alert('favor de ingresar datos en el TextField');
	} else {
		Ti.App.Properties.setString('parametrosPropertie', JSON.stringify(pasarParametros));

		var newWindow = Alloy.createController('newWindow').getView();
		newWindow.open();
	}

});

// //fireEvents
// $.btnFireEvents.addEventListener('click', function(e) {
	// var pasarParametros = {
		// 'texto' : $.campoTexto.getValue(),
		// 'texto2' : 'prueba Fire event'
	// };
// 
	// var newWindow = Alloy.createController('newWindow').getView();
// 
	// Ti.App.fireEvent('win', pasarParametros);
// });

//Pasar Argumentos a otra pantalla
// $.btnArgs.addEventListener('click', function(e) {
	// var pasarParametros = {
		// 'texto' : $.campoTexto.getValue(),
		// 'texto2' : 'prueba Args'
	// };
	// var newWindow = Alloy.createController('newWindow').getView();
	// newWindow.open();
// });

//abrir otra pantalla
$.btnNewWindow.addEventListener('click', function(e) {
	var newWindow = Alloy.createController('newWindow').getView();
	newWindow.open();
});

function openWin2() {
	var win2 = Alloy.createController('win2').getView();
	win2.open();
}

$.index.open();
