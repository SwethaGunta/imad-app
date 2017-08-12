console.log('Loaded!');

var button = document.getElementById('counter');
var count = 0;
button.onclick = function(){
    //connecting to the counter endpoint
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE){
            if(request.status === 200)
            {
                var count = request.responseText;
                count = count + 1;
                //console.log(count);
                var span = document.getElementById('count');
                span.innerHTML = count.toString();
            }
        }
        
        
    }
    request.open('GET',"http://svgunta.imad.hasura-app.io/counter",true);
    request.send(null);
   
};