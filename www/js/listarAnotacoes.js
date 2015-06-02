
var anotacoes = localStorage.getCollection("anotacoes");
var $ulAnotacoes = $("ul");

$.each(anotacoes, function(index, anotacao){

	var clazz = "";

	switch(anotacao.nivelImportancia){
		case 'alto':
			clazz = 'divAnotacao prioridade-alta';
			break;
		case 'medio':
			clazz = 'divAnotacao prioridade-media';
			break;
		case 'baixo':
			clazz = 'divAnotacao prioridade-baixa';
			break;
	}

	var $anotacao = $('<div/>', {
		'class': clazz,
		id: index + 'Div'
	});	

	var $spanPrioridade = $('<span/>', {
		class: clazz + '-box'
	}).appendTo($anotacao);

	var $spanTipoAnotacao = $('<div/>', {
		html: anotacao.tipoAnotacao
	}).appendTo($anotacao);

	var $spanDisciplinaOuProjeto = $('<div/>', {
		html: anotacao.disciplinaOuProjeto
	}).appendTo($anotacao);

	var $spanAnotacao = $('<div/>', {
		html: anotacao.anotacao
	}).appendTo($anotacao);

	var $spanNivelImportancia = $('<div/>', {
		html: anotacao.nivelImportancia
	}).appendTo($anotacao);

	var $btnExcluir = $('<span/>', {
		id: index,
		'class': "excluir"
	}).appendTo($anotacao);

	var $btnAlterar = $('<span/>', {
		id: index+"Alterar",
		'class': "alterar"		
	}).appendTo($anotacao);


	$ulAnotacoes.append($anotacao);

	//nem eu sei como fiz a gambiarra que verás a seguir
	$("#"+index).click(function(evt){
		if (confirm("Deseja mesmo excluir a anotação "+anotacao.nome+" ?")){

			localStorage.deleteObj("anotacoes",anotacao.nome);						
			location.reload();
		}
		
	});

	$("#"+index+"Alterar").click(function(evt){
		sessionStorage.setItem("nome", anotacao.nome);
		sessionStorage.setItem("data", anotacao.data);
		sessionStorage.setItem("lembrete", anotacao.lembrete);
		sessionStorage.setItem("CheckedRadio", anotacao.nivelImportancia)
		window.open(
			'../html/alterarAnotacao.html');
		
	});

	
	
});

	


