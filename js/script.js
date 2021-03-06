// * This code is for the valadation for are login part
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

const videoSearch = (api_key, search, maxResults) => {
  let video = "";
  let videotwo = "";
  let videothree = "";
  let videos = $(".videos");
  let videoTwo = $(".studentVideotwo");
  let videoThree = $(".studentVideothree");
  videos.empty();
  videoTwo.empty();
  videoThree.empty();
  $.get(
    "https://www.googleapis.com/youtube/v3/search?key=" +
      api_key +
      "&type=video&part=snippet&maxResults=" +
      maxResults +
      "&q=" +
      search,
    (data) => {
      video = `<iframe width="325" height="225" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

      videos.append(video);

      videotwo = `<iframe width="325" height="225" src="https://www.youtube.com/embed/${data.items[1].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

      videoTwo.append(videotwo);

      videothree = `<iframe width="325" height="225" src="https://www.youtube.com/embed/${data.items[2].id.videoId}" frameborder="0" allowfullscreen></iframe>`;

      videoThree.append(videothree);
    }
  );
};

window.addEventListener("load", () => {
  console.log("page is loaded");
  let search_val = localStorage.name;
  let api_key = "AIzaSyBd04K-pKR2kkdRMFRA6bF66VisH8DBOBE";
  videoSearch(api_key, search_val, 3);
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
