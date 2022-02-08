const { $ } = require("../../validators/register.validator");

function handleSubmit(event) {
    event.preventDefault();
  
    let data = new FormData(event.target);
    let value = Object.fromEntries(data.entries());
       $.ajax({
        type: "POST",
        url: "/users/",
        data: value,
        dataType: 'json',
        success: function(data){console.log(data)},
        error: function({status, responseJSON}){
            if(status!==200) $('#error').text(responseJSON.error);
        }        
      });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);