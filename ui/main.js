console.log('Loaded!');

var button = document.getElementById('counter');

button.onclick = function(){
    //connecting to the counter endpoint
    var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.readyState ===  XMLHttpRequest.DONE){
            if(request.status === 200)
            {
                var count = request.responseText;
                //console.log(count);
                var span = document.getElementById('count');
                span.innerHTML = count.toString();
            }
        }
    }
    request.open('GET',"http://svgunta.imad.hasura-app.io/counter",true);
    request.send(null);
   
};
var submit_name = document.getElementById('submit-name');
submit_name.onclick = function(){
    var request = new XMLHttpRequest();
    var names = [];
    request.onreadystatechange = function(){
        if(request.status === XMLHttpRequest.DONE){
            if(request.status === 200){
               // var name = request.responseText;
                //names.push(JSON.parse(name));
                names = request.responseText;
                names = JSON.parse(names);
                var list = '';
                for(var i=0;i<names.length();i++)
                {
                    list += '<li>' + names[i]  + '</li>';
                }
                var ul = document.getElementById('list');
                ul.innerHTML = list;
            }
        }
    
    }
    var name = (document.getElementById('myname')).value;
    request.open('GET',"http://svgunta.imad.hasura-app.io/submit-name?name=" + name, true);
    request.send(null);
    
}

