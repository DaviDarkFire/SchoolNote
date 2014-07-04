var nomeDisc;
var diasDaSemana = [];

var professores = localStorage.getCollection("professores");
var $selectProfessor = $('#pegarProfessor');
//busca os professores cadastrados e coloca como opção para o usuário
$.each(professores, function(index, professor){
	var option = '<option>' + professor.nome + '</option>';
	$selectProfessor.append($(option));
});

//clique do botão salvar que pega os valores digitados
$('#cad_Disciplinas').submit(function(evt){
		evt.preventDefault();		

	    nomeDisc = $(this).find('#nomeDisciplina').val();		  
	    var $checados = $('input[type="checkbox"]:checked');

	    $.each($checados, function(index, item){
	    	diasDaSemana.push($(item).data('dsemana'));
	    });

	    var professor = $('#pegarProfessor option:selected').text();

	    var disc = {
	    	'nome': nomeDisc,
	    	'diasDaSemana': diasDaSemana,
	    	'professor': professor,
	    };

	    localStorage.insert('disciplinas', disc);	    		
		console.log(diasDaSemana);
		alert("Disciplina cadastrada com sucesso");
});
