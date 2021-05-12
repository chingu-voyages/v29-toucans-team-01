// * This code is for the valadation for are login part
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()





$(document).ready(function(){

  let api_key = "AIzaSyBjeB7NxJ34NhgJIi5swpWT7rEgudCUCO0";
  let video = '';
  var videos = $("#videos");

  $("#form").submit(function(e){
      e.preventDefault()
      let search = $("#search").val();

      videoSearch(api_key,search,3);
  })

  function videoSearch(api_key, search, maxResults){
      videos.empty();
      $.get("https://www.googleapis.com/youtube/v3/search?key=" + api_key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search,function(data){
          console.log(data);

          data.items.forEach(item => {
              video = `
              <iframe width="315" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
              
              videos.append(video);
          })

      })

  }

});

   


 

//* This function is for the review system

var modal = document.getElementById("modal");

var span = document.getElementsByClassName("close")[0];

function myFunction() {
  modal.style.display = "block";
}

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
