;$(document).ready(function(){
	var professores = localStorage.getCollection('professores');
	var $content = $('#content');
	var $lista = $('#listaProfessores ul');
	var $close = $('#close');
	var $btnPlus = $('#PlusIcon');
	var template = $("#template-professor").html();	


/*//////////////////////////////////////////////////////////////////////////////////////////////*/
	var action = function(evt){
		var idProfessor = $(this).data('id');
		var professor = professores[idProfessor];

		$lista.fadeOut('fast');
		$btnPlus.fadeOut('fast');
/*///////////////////////////////////////////////////////////////////////////////////////////////*/
		 var $btnFechar = $('<span/>', {
			'class': 'flaticon-close19 close',
			id: 'close',
			'click': function(){
				$('.info-prof').fadeOut('fast').remove();
				$lista.fadeIn('fast');
				$btnPlus.fadeIn('fast');
				location.reload();
				$(this).remove();
			}
		}).appendTo($content);
/*//////////////////////////////////////////////////////////////////////////////////////////////*/
		


/*///////////////////////////////////////////////////////////////////////////////////////////////*/
		Mustache.parse(template);
		var resultado = Mustache.render(template, { nome: professor.nome });
		var $el = $(resultado);

		$('#content').append($el);

		

		$('#btExcluir').click(function(evt){
			
			var nome = $('#nome').text();						
			if(confirm("Deseja mesmo excluir o professor "+nome+" ?")){
				localStorage.deleteObj("professores", nome);	
			}
							   			
		});

		$('#btAlterar').click(function(evt){
			
			var nome = $('#nome').text();						
			sessionStorage.setItem("nome", nome);
			window.open('../html/alterarProfessor.html');
		});
	}
/*///////////////////////////////////////////////////////////////////////////////////////////////*/		
	
	professores.forEach(function(professor, index){
		$('<li/>', {
			'class': 'professor',
			'html': professor.nome,
			'data-id': index,
			'click': action,			
						
		}).appendTo($lista);
		
		

	});

});

