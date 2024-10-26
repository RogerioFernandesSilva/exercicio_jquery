$(document).ready(function() {
    $('#form-tarefa').on('submit', function(e) {
        e.preventDefault(); 

        const nomeTarefa = $('#tarefa').val();

        if (nomeTarefa.trim() !== '') {
            // Cria um novo item de lista com a tarefa
            const novaTarefa = $('<li></li>').text(nomeTarefa);
            
            // Adiciona o item à lista de tarefas
            $('#tarefas').append(novaTarefa);
            
            // Limpa o campo de texto
            $('#tarefa').val('');
        }
    });

    // Ao clicar em "Limpar Tarefas", remove todas as tarefas da lista
    $('#cancelar').click(function() {
        $('#tarefas').empty(); // Remove todas as tarefas
    });

    // Ao clicar em uma tarefa, aplica o efeito de riscar
    $('#tarefas').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});

