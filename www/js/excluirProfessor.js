var nomeProf;


$('#exc-Professores').submit(function(evt){
		evt.preventDefault();		

	    nomeProf = $(this).find('#nomeProfessor').val();

		//cria um objeto com o valor pego do campo nome
		var prof = {
			'nome' : nomeProf
		};

	    //adiciona o valor recebido
	    localStorage.deleteObj('professores', prof);
	    $(this).find('#nomeProfessor').val("");

	    alert('Professor excluido com sucesso!');

}); 

//mostra o banco
console.log(localStorage.getCollection("professores"));