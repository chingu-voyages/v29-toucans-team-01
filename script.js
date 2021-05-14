﻿// * This code is for the valadation for are login part
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

  let api_key = "AIzaSyB-MlRab6Uu7xRY-B-htrumpC3Pbidr-6k";
  let video = '';
  let videotwo = '';
  let videothree = '';
  let videos = $(".videos");
  let videoTwo = $(".studentVideotwo");
  let videoThree = $('.studentVideothree');
  $("#form").submit(function(e){
      e.preventDefault()
      let search = $("#search").val();

      videoSearch(api_key,search,3);
  })

  function videoSearch(api_key, search, maxResults){
      videos.empty();
      videoTwo.empty();
      videoThree.empty();
      $.get("https://www.googleapis.com/youtube/v3/search?key=" + api_key + "&type=video&part=snippet&maxResults=" + maxResults + "&q=" + search, 
        function(data){
          console.log(data);

          video = `<iframe width="315" height="200" src="http://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

          videos.append(video);

          videotwo = `<iframe width="315" height="200" src="http://www.youtube.com/embed/${data.items[1].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

          videoTwo.append(videotwo);
          
          videothree = `<iframe width="315" height="200" src="http://www.youtube.com/embed/${data.items[2].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

          videoThree.append(videothree);

            // data.items.forEach(item => {
            //     video = `
            //     <iframe width="315" height="200" src="http://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
                
            //     videos.append(video);
            // })

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
