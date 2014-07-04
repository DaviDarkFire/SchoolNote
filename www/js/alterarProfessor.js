$("#nomeProfessor").val(sessionStorage.getItem("nome"));
var nome = sessionStorage.getItem("nome");
sessionStorage.removeItem("nome");

$("#btAlterarProfessor").click(function(evt){
	evt.preventDefault();
	var novoNome = $("#nomeProfessor").val();
	var prof = {
		'nome' : novoNome
	}

	localStorage.update("professores", nome, prof);	
	window.close();

});