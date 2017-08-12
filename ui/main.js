console.log('Loaded!');
var span = 0;
var button = document.getElementbyId('counter');
button.onclick = function(){
   span = span + 1;
   var ele2 = document.getElementbyId('span');
   ele2.innerHtml = span.toString();
}