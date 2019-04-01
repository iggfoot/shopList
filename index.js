/* The purpose of the exercise to practice event delegation -
   attaching a single event listener to a parent element that
   will fire for all descendants whether or not they exist now
   or in the future*/

/* In this exercise, the parent element that will receive
   the listener is 'shopping-list'*/ 

$(function() {
    // creates an event listener when 'delete' button is clicked; item is deleted
    $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
        $(this).closest('li').remove();
      }); 
    /*creates an event listener when 'check' button is clicked; item toggled
      between being crossed out and normal*/
    $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
        $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
      });
    //creates an event listener when 'add an item' is clicked  
    $('#js-shopping-list-form').submit(function(event) {
        event.preventDefault();
        const addItem = $('#shopping-list-entry').val(); 
        //clears out field by setting it to empty string
        $('#shopping-list-entry').val('');
        $('.shopping-list').append(
          `<li>
            <span class="shopping-item">${addItem}</span>
            <div class="shopping-item-controls">
              <button class="shopping-item-toggle">
                <span class="button-label">check</span>
              </button>
              <button class="shopping-item-delete">
                <span class="button-label">delete</span>
              </button>
            </div>
          </li>`);
      });

})