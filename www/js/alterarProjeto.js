var professores = localStorage.getCollection("professores");
var $selectProfessor = $('#pegarProfessor');
//busca os professores cadastrados e coloca como opção para o usuário
$.each(professores, function(index, professor){
	var option = '<option>' + professor.nome + '</option>';
	$selectProfessor.append($(option));
});

var nomeAntigo = sessionStorage.getItem("nome");
$("#nomeProjeto").val(nomeAntigo);
sessionStorage.removeItem("nome");

$("#btAlterarProjeto").click(function(evt){
	evt.preventDefault();

	var diasDaSemana = [];
	var nome = $("#nomeProjeto").val();

	var $checados = $('input[type="checkbox"]:checked');

	$.each($checados, function(index, item){
	   	diasDaSemana.push($(item).data('dsemana'));
	});

	var professor = $('#pegarProfessor option:selected').text();


	var projeto = {
		'nome': nome,
		'diasDaSemana': diasDaSemana,
		'professor': professor,
	}

	localStorage.update('projetos', nomeAntigo, projeto);
	console.log(localStorage);

});


