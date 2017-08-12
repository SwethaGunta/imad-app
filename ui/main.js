console.log('Loaded!');
var count = 0;
var button = document.getElementById('counter');
button.onclick = function(){
   count = count + 1;
   console.log(count);
   var span = document.getElementById('count');
   span.innerHtml = count.toString();
}