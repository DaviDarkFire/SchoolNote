;$(document).ready(function(){
	var disciplinas = localStorage.getCollection('disciplinas'); //pega a coleção disciplinas do local storage
	var $content = $('#content');
	var $lista = $('#listaDisciplinas ul');	
	var $close = $('#close');
	var $btnPlus = $('#PlusIcon');
	var template = $("#template-disciplina").html();

	var action = function(evt){
		var idDisciplina = $(this).data('id');
		var disciplina = disciplinas[idDisciplina];

		$lista.fadeOut('fast');
		$btnPlus.fadeOut('fast');

		var $btnFechar = $('<span/>', {
			'class': 'flaticon-close19 close',
			id: 'close',
			'click': function(){
				$('.info-disc').fadeOut('fast').remove();
				$lista.fadeIn('fast');
				$btnPlus.fadeIn('fast');
				location.reload();
				$(this).remove();
			}
		}).appendTo($content);

		console.log(disciplina.diasDaSemana);
		
		Mustache.parse(template);
		var resultado = Mustache.render(template, { nome: disciplina.nome, diasSemana: disciplina.diasDaSemana, professor: disciplina.professor });
		var $el = $(resultado);



		$('#content').append($el);

		$('#btExcluir').click(function(evt){
			
			var nome = $('#nome').text();						
			if(confirm("Deseja mesmo excluir a disciplina "+nome+" ?")){
				localStorage.deleteObj("disciplinas", nome);	
			}				    				
		});

		$('#btAlterar').click(function(evt){
			
			var nome = $('#nome').text();			
			sessionStorage.setItem("nome", nome);			
			window.open('../html/alterarDisciplina.html');
		});
	}

	disciplinas.forEach(function(disciplina, index){
		$('<li/>', {
			'class': 'disciplina',
			'html': disciplina.nome, 			 
			'data-id': index,
			'click': action			
		}).appendTo($lista);
	});
});






