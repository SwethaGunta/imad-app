console.log('Loaded!');
var span = 0;
var element = document.getElementbyId('counter');
element.onclick = function(){
   span = span + 1;
   var ele2 = document.getElementbyId('span');
   ele2.innerHtml(span.toString());
}