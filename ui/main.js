console.log('Loaded!');

var submit_name = document.getElementById('submitname');

submit_name.onclick = function(){
     var request = new XMLHttpRequest();
    request.onreadystatechange = function(){
        if(request.status === XMLHttpRequest.DONE){
            if(request.status === 200 ){
                var names = [];
                var list = ' ';
                console.log('hi!');
                var n = request.responseText;
                console.log(names.toString());
                console.log('hello!')
                names = (JSON.parse(request.responseText));
               console.log(names);
                for(var i=0;i<names.length;i++)
                {
                    console.log(i);
                    console.log(names);
                    list += '<li>' + names[i]  + '</li>';
                }
                var ul = document.getElementById('list');
                ul.innerHTML = list.toString();
            }
        }
    }
    var name = (document.getElementById('myname')).value;
    console.log(name);
    request.open('GET',"http://svgunta.imad.hasura-app.io/submit",true);
//   request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
request.send(null);
  };

