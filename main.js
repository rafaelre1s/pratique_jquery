$(document).ready(function() {
    
    $('form').on('submit', function(e) {
        e.preventDefault();
    
        const addTarefa = $('#addInput').val();
        const novoItem = $('#addLista');
        /*$('<li>' + addTarefa + '</li>').hide().appendTo(novoItem).fadeIn('slow');*/
        $(`<li>${addTarefa}</li>`).appendTo(novoItem);

        $(novoItem).fadeIn('slow');
        $('#addInput').val('');
    });

    $('#addLista').on('click', 'li', function(e) {
        $(e.target).toggleClass('completed');
    });

    $('#delete').click(function() {
        $('#addLista').empty();
    })
    
})