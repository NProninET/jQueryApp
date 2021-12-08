document.addEventListener('DOMContentLoaded', function() {
    let button = document.querySelector('button');
    let parent = document.querySelector('#colorSelector');
    let colorItems = parent.querySelectorAll('.colorItem');
    let blocks = document.querySelectorAll('.container');

    $('.colorItem').on('click', function(e) {
      $('input:checkbox:checked').parent().parent().removeClass().addClass(`container ${this.classList[1]}`)
    })

    $('button').click(function() {
      let inputValue = document.querySelector('.input-text').value
      let i = Math.round(Math.random() * parseInt(colorItems.length - 1))
      let classn = colorItems[i].classList[1]
      let newContainer = $('<div/>', { 'class': `container ${classn}` })
      .append("<div class='checkbox'>" + "<input type='checkbox'></input>")
      .append(`<div class='content'>${inputValue}</div>`)
      .appendTo('.wrapper').insertBefore('.two')
    })

    $('.input-text').on('keydown', function(event) {
      let inputValue = document.querySelector('.input-text').value
      let i = Math.round(Math.random() * parseInt(colorItems.length - 1))
      let classn = colorItems[i].classList[1]

      if (event.keyCode === 13 && inputValue != '') {
          let newContainer = $('<div/>', { 'class': `container ${classn}` })
          .append("<div class='checkbox'>" + "<input type='checkbox'></input>")
          .append(`<div class='content'>${inputValue}</div>`)
          .appendTo('.wrapper').insertBefore('.two')
          $('.input-text').val('');  
      }
       
    })
})

