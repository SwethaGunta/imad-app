console.log('Loaded!');
var count = 0;
var button = document.getElementbyId('counter');
button.onclick = function(){
   count = count + 1;
   var span = document.getElementbyId('span');
   span.innerHtml = count.toString();
}