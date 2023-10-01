/*const app = new Vue ({
  el: '#app',
  
  }
  );*/


document.addEventListener('DOMContentLoaded', function() {
  var botonRegresar = document.getElementById('botonRegresar');
  
  botonRegresar.addEventListener('click', function() {
      window.location.href = 'Documentos.html';
  });
});


document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('select');
  var instances = M.FormSelect.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.autocomplete');
  var instances = M.Autocomplete.init(elems, options);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.datepicker');
  var options = {
    format: 'dd/mm/yyyy', 
    autoClose: true, 
    
  };
  var instances = M.Datepicker.init(elems, options);
});


