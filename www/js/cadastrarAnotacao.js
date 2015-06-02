var disciplinas = localStorage.getCollection("disciplinas");
var projetos = localStorage.getCollection("projetos");
var $selectRelacionadoA = $('#relacionadoA');


$.each(disciplinas, function(index, disciplina){	
	var option = '<option>' + disciplina.nome+ '</option>'	
	$selectRelacionadoA.append($(option));
	console.log(option);
});

$.each(projetos, function(index, projeto){	
	var option = '<option>' + projeto.nome+ '</option>'	
	$selectRelacionadoA.append($(option));
	console.log(option);
});
console.log($selectRelacionadoA);

/*As linhas de cima adicionam as disciplinas e projetos 
cadastrados para o usuário escolher em um select*/
var anotacao;
var data;
var lembrete;
var disciplinaOuProjeto;
var tipoAnotacao;
var nivelImportancia;

$( "#baixo" ).prop( "checked", true );

$('#cad_Anotacao').submit(function(evt){
		evt.preventDefault();		

	 	anotacao = $('#areaTexto').val();
	 	tipoAnotacao = $('#tipoAnotacao option:selected').val();
	 	data = $('#data').val();
	 	lembrete = $('#lembrete').val();
	 	disciplinaOuProjeto = $('#relacionadoA option:selected').val();
	 	nivelImportancia = $("input[name='importancia']:checked").val();	   

	    var anotacao = {
	    	'nome': anotacao,
	    	'anotacao': anotacao,
	    	'tipoAnotacao': tipoAnotacao,
	    	'data': data,
	    	'lembrete': lembrete,
	    	'disciplinaOuProjeto': disciplinaOuProjeto,
	    	'nivelImportancia': nivelImportancia,
	    };

	    console.log(nivelImportancia);

	    localStorage.insert('anotacoes', anotacao);	    		
		console.log(localStorage);
		alert("Anotacao realizada com sucesso.");
});