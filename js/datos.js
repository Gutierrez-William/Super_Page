function datos(){
	var nombre=document.getElementById("nombre").value;
	var ciudad=document.getElementById("ciudad").value;
	var dom=document.getElementById("domicilio").value;
	if (nombre == ""){
		alert('error');
	}else{
		if (ciudad == ""){
			alert('error');
		}
		else{
			if (dom == ""){
				alert('error');
			}
			else{
				alert('NOMBRE: '+nombre)
				alert('CIUDAD: '+ciudad)
				alert('DOMICILIO: '+dom)
				alert('ENVIO EXITOSO')
			}
		}
	}
}