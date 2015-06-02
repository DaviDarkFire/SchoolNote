;$(document).ready(function(){
	var projetos = localStorage.getCollection('projetos'); //pega a coleção projetos do local storage
	var $content = $('#content');
	var $lista = $('#listaProjetos ul');
	var $close = $('#close');
	var $btnPlus = $('#PlusIcon');
	var template = $("#template-projeto").html();

	var action = function(evt){
		var idProjeto = $(this).data('id');
		var projeto = projetos[idProjeto];

		$lista.fadeOut('fast');
		$btnPlus.fadeOut('fast');

		var $btnFechar = $('<span/>', {
			'class': 'flaticon-close19 close',
			id: 'close',
			'click': function(){
				$('.info-proj').fadeOut('fast').remove();
				$lista.fadeIn('fast');
				$btnPlus.fadeIn('fast');
				location.reload();
				$(this).remove();
			}
		}).appendTo($content);

		Mustache.parse(template);
		var resultado = Mustache.render(template, { nome: projeto.nome, diasSemana: projeto.diasDaSemana, professor: projeto.professor });
		var $el = $(resultado);

		$('#content').append($el);

		$('#btExcluir').click(function(evt){
			
			var nome = $('#nome').text();						
			if(confirm("Deseja mesmo excluir o projeto "+nome+" ?")){
				localStorage.deleteObj("projetos", nome);	
			}				    	
			
		});

		$('#btAlterar').click(function(evt){
			
			var nome = $('#nome').text();			
			sessionStorage.setItem("nome", nome);			
			window.open('../html/alterarProjeto.html');
		});
	}

	projetos.forEach(function(projeto, index){
		$('<li/>', {
			'class': 'projeto',
			'html': projeto.nome, 			 
			'data-id': index,
			'click': action
		}).appendTo($lista);
	});
});





