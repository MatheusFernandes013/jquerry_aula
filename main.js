const linhas = $("#lista-tarefas");
$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $("#nome-tarefa").val();
        const linha = $(`<li><span>${nomeTarefa}</span></li>`);
        linhas.append(linha);
        
        $("#nome-tarefa").val('');

        $('#lista-tarefas').on('click', 'li', function(e) {
            if (!$(e.target).is('button')) {
                $(this).find('span').toggleClass('line-through');
            }
        });
    });
});
