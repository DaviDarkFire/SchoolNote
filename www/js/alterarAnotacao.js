$("#areaTexto").val(sessionStorage.getItem("nome"));
$("#lembrete") .val(sessionStorage.getItem("lembrete"));
$("#data") .val(sessionStorage.getItem("data"));

var nome = sessionStorage.getItem("nome");

var anotacao;
var data;
var lembrete;
var disciplinaOuProjeto;
var tipoAnotacao;
var nivelImportancia;

$("#btAlterarAnotacao").click(function(evt){
	evt.preventDefault();

	anotacao = $('#areaTexto').val();
	tipoAnotacao = $('#tipoAnotacao option:selected').val();
	data = $('#data').val();
	lembrete = $('#lembrete').val();
	disciplinaOuProjeto = $('#relacionadoA option:selected').val();
	nivelImportancia = $("input[name='importancia']:checked").val();	   
    var anotacaoNew = {
    	'nome': anotacao,
    	'anotacao': anotacao,
    	'tipoAnotacao': tipoAnotacao,
    	'data': data,
    	'lembrete': lembrete,
    	'disciplinaOuProjeto': disciplinaOuProjeto,
    	'nivelImportancia': nivelImportancia,
    };

    localStorage.update("anotacoes", nome, anotacaoNew);
    

});
	
