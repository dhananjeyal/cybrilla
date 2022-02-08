function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
      $.ajax({
        type: "POST",
        url: "/shortenurl/",
        data: value,        
        dataType: 'json',
        success: function(data){
            
          $('#error').text(JSON.stringify(data));
        },
        error: function({status, responseJSON}){
            if(status!==200) $('#error').text(responseJSON.error);
        }        
      });
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', handleSubmit);