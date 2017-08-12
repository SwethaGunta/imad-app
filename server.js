var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});



var articles = 
{
  articleone:{title: 'Article One | Swetha G',
  heading: 'Article One',
  date: 'Sept 5,2017',
  author:'author 1'},
  articletwo:{title: 'Article Two | Swetha G',
  heading: 'Article Two',
  date: 'Sept 10,2017',
  author:'author 2'}};






app.get('/:articleName',function(req,res){
    console.log(req.params.articleName);
    var articleName = req.params.articleName;
    console.log(articleName);
    res.send(createTemplate(articles[articleName]));
});










function createTemplate(data)
{
    console.log(data);
var title = data.title;
var heading = data.heading;
var date = data.date;
var author = data.author;
var htmlTemplate =  
`<html>
    <head>
         <title>
                              
         ${title}
        </title>
                  <meta name="viewport" content ="width=device-width, initial-scale =1" />
        </head>
        <body>
        <h3>
        ${heading}
                </h3>
             <p>
                ${date}
            </p>
                    
            <p>
                ${author}
            </p>
            
        </body>
</html>`

return htmlTemplate;
}



// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
