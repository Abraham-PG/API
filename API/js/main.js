var button = document.getElementById('button');
var input = document.getElementById('input');
var results = document.getElementById('results');

button.addEventListener('click', function() {
  
    console.log(input.value);
    $.ajax({
      url: "https://www.googleapis.com/books/v1/volumes?q=" +  input.value,
      dataType: 'json', success: function(data) { console.log(data);
        for(var i = 0; i < data.items.length; i++) {
        
          results.innerHTML += '<img src="' + data.items[i].volumeInfo.imageLinks.smallThumbnail + '">';
            
          results.innerHTML += '<h1>' + data.items[i].volumeInfo.title + '</h2>';
          results.innerHTML += '<h3>' + data.items[i].volumeInfo.authors + '</h3>';
          results.innerHTML += '<p>' + data.items[i].volumeInfo.description + '</p>';
          results.innerHTML += '<p>' + data.items[i].volumeInfo.publishedDate + '</p>';
        }
      },
      
    });
    
  }
)
