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
var submit_name = document.getElementById('submitname');
submit_name.onclick = function(){
      
     var request_one = new XMLHttpRequest();
    request_one.onreadystatechange = function(){
        if(request_one.status === XMLHttpRequest.DONE){
            if(request_one.status === 200){
                var names = [];
                var list = ' ';
                names = (JSON.parse(request_one.responseText));
               
                for(var i=0;i<names.length;i++)
                {
                    console.log(i);
                    console.log(names);
                    list += '<li>' + names[i]  + '</li>';
                }
                var ul = document.getElementById('list');
                ul.innerHTML = list;
            }
        }
    }
    var name = (document.getElementById('myname')).value;
    request_one.open('GET',"http://svgunta.imad.hasura-app.io", true);
    request_one.send(null);
}

