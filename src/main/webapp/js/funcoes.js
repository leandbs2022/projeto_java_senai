// span-confirmar

lsItem = [];


function atualizar (id, preco) {
	quantidade = document.getElementById(id).value;
	id = id.replace('prd-', '');
	total = quantidade * preco;
	
	// Objeto JavaScript conhecido como JSON
	obj = {
			"id": id, 
			"quantidade" : quantidade, 
			"total": total
	}
	lsItem[id] = obj;
//	console.log(obj);
	valorFinal();
}

function valorFinal(){
	
	vFinal = 0;
	for (i in lsItem) {
		obj = lsItem[i];
		vFinal += obj.total;
	}
	document.getElementById("span-confirmar").innerHTML = vFinal.toFixed(2);
	
	if(vFinal > 0) {
		document.getElementById("bt-confirmar").removeAttribute("disabled");	
	}else{
		document.getElementById("bt-confirmar").setAttribute("disabled","disabled");	
	}
}

function enviar () {
	var xmlhttp = new XMLHttpRequest();
	var url = "enviarListaItem";
	xmlhttp.open("POST", url);
	xmlhttp.setRequestHeader("Content-Type","application/json;charset=UTF-8");
	xmlhttp.send(JSON.stringfy(lsItem));
	console.log(xmlhttp);
}




