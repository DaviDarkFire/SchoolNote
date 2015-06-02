var nomeProf;

//clique do botão salvar que pega o valor do campo nome
$('#cad-Professores').submit(function(evt){
		evt.preventDefault();		

	    nomeProf = $(this).find('#nomeProfessor').val();

		//cria um objeto com o valor pego do campo nome
		var prof = {
			'nome' : nomeProf
		};

	    //adiciona o valor recebido
	    localStorage.insert('professores', prof);
	    $(this).find('#nomeProfessor').val("");

	    alert('Professor cadastrado com sucesso!');

}); 

//mostra o banco
console.log(localStorage.getCollection("professores"));