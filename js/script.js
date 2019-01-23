/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Every Season", "You", "Secret"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var images = ["https://thefader-res.cloudinary.com/private_images/w_1440,c_limit,f_auto,q_auto:best/IMGP2241_tx5ked/roddy-ricch-feed-tha-streets-meek-mill-interview.jpg",
"http://i64.photobucket.com/albums/h164/ybfchic/March%202018%20Part%204/jacquees.png",
"https://images-na.ssl-images-amazon.com/images/I/41xA%2BHqMtuL._SS500.jpg" ];

var artists =["Roddy Ricch", "Jacquees", "Anne Marie"];
var songLength =[334, 350, 259];
var links =["https://www.youtube.com/watch?v=he7nqDQlSyA", "https://www.youtube.com/watch?v=7VuqbMbgLHk", "https://www.youtube.com/watch?v=JxvGBlpRgIY"];






function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(
      function(show){
          $("#songs").append
          ("<p>"+show+"</p>");
          
          });
    images.forEach(
      function(images){
          $("#images").append
          ("<img src="+ images+">");
          
          });
    artists.forEach(
      function(show){
          $("#artists").append
          ("<p>"+show+"</p>");
          
          });
    songLength.forEach(
      function(show){
          $("#lengths").append
          ("<p>"+show+"</p>");
          
          });
    links.forEach(
      function(link){
          $("#links").append
          ("<a href= "+link+">Youtube</a>");
          
          });

}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
