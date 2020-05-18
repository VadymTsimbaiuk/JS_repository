$(function(){
  $('#accordion').accordion();
    
    $('#draggable').draggable();
    $('#droppable').droppable({
        drop: function(event, ui){
            $(this)
                .addClass('ui-state-highlight')
                .find('p')
                .html("ГОООЛЛЛ!!!:")
            } 
    });
    var count = new Number;
    $('#droppable').on('drop', function(){
        count = count + 1;
        alert('Element dropped: ' + count);
    })
    
    
})
