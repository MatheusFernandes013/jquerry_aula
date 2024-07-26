$(document).ready(function(){
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $("#nome-tarefa").val();

        if (nomeTarefa) {
            const linha = $(`<li>${nomeTarefa}</li>`);
            linha.appendTo('ul');
        
            $("#nome-tarefa").val('');
        }
    });
    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('line-through');
    });
});
