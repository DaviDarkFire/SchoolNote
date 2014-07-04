	var data = new Date();	
	var dia;
	var mes; 
	var anoF; 
	var hora;

var anotacoes = localStorage.getCollection("anotacoes");


window.setInterval(function getDate(){

	 dia = data.getDate();
	 mes = data.getMonth()+1;	
	 anoF = data.getFullYear();
	 hora = data.getHours();

	 $.each(anotacoes, function(index, anotacao){	
			var lembrete = anotacao.lembrete;

			var diaArmazenado = parseInt(lembrete.slice(8));
			var mesArmazenado = parseInt(lembrete.slice(5,7));
			var anoArmazenado = parseInt(lembrete.slice(0,4));

			if(diaArmazenado+0 == dia && mesArmazenado+0 == mes && anoArmazenado == anoF){
				document.addEventListener('deviceready', function () {
    				window.plugin.notification.local.add({ message: anotacao.anotacao });
				}, false);
				
			}		
	});
	
}, 5000);

