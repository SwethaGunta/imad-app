console.log('Loaded!');

var button = document.getElementById('counter');
var count = 0;
button.onclick = function(){
   count = count + 1;
   console.log(count);
   var span = document.getElementById('count');
   span.innerHTML = count.toString();
};