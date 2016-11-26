var userInput;
var wikiUrl;

function getUserInput() {
  userInput = document.getElementById("searchTerm").value;
  getWikiData(userInput);
};

function getWikiData(userInput) {
  wikiUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + userInput + "&format=json&callback=?";

  $.ajax({
    type: 'GET',
    url: wikiUrl,
    async:false,
    dataType: 'json',
    success: function(data) {
      $("#search-results").html('');
        for(var i=0; i < data[1].length; i++) {
          $('#search-results').append("<li><a href=" + data[3][i]+ ">" + data[1][i] + "</a><p>" + data[2][i]+ "</p></li>");
        }
       // do something with data
       console.log(data[1][0]);
      console.log(data[2][0]);
      console.log(data[3][0]);
    },
    error: function(errorMsg) {
      $('#search-results').prepend("Oops. Something went wrong.");
      console.log("Something went wrong.");
    }
})
};


window.onload = function() {
	button = document.getElementById("search-button");
	button.addEventListener("click", getUserInput);
    
}
