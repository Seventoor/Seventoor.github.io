// SVG Morph Animation
$("#logo-morph").click(function () {
  var changefill = document.querySelectorAll(".fillers");
  var tweenH = KUTE.to(
    "#w11",
    { path: "#w21" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    }
  ).start();
  var tweenE = KUTE.to(
    "#w12",
    { path: "#w22" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    }
  ).start();
  var tweenL = KUTE.to(
    "#w13",
    { path: "#w23" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    },
    { attr: { fill: "yellow" } }
  ).start();
  var tweenL2 = KUTE.to(
    "#w14",
    { path: "#w24" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    }
  ).start();
  var tweenEye = KUTE.to(
    "#w15",
    { path: "#w25" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    }
  ).start();
  var tweenEye2 = KUTE.to(
    "#w16",
    { path: "#w26" },
    {
      easing: "easingCubicInOut",
      yoyo: true,
      repeat: 1,
      duration: 3500,
    }
  ).start();
  var fillTween = KUTE.to(
    "#w15",
    { attr: { fill: "red" } },
    { duration: 3500, repeat: 1, yoyo: true }
  ).start();
  var fillTween = KUTE.to(
    "#w16",
    { attr: { fill: "red" } },
    { duration: 3500, repeat: 1, yoyo: true }
  ).start();
});
// SVG Morph Animation

// Mobile Nav Menu
const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", function () {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});
// Mobile Nav Menu

// Open and close popup
$("#contact").click(function () {
  createpopup();
  return false;
});

function createpopup() {

  primaryNav.setAttribute("data-visible", false);
  navToggle.setAttribute("aria-expanded", false);

  const form = document.createElement("div");

  form.className = "popup-form";
  form.setAttribute("id", "overlay");

  form.innerHTML = `
    <div id='overlay' class='popup-container'>
    <div class='popup cairo-font'>
    <p class='txt-ff3'>Where do you want to contact?</p>
    <button class='support'>Support</button>
    <button class='enquiry'>Press/Influencer</button>
    </div>
    </div>
  `;

  document.getElementById("first_slide").appendChild(form);
  addlink();
}

function addlink() {
  const sup = document.querySelector(".support");
  const enq = document.querySelector(".enquiry");

  sup.addEventListener("click", () => {
    window.location.href =
      "mailto:support@herocraft.com?subject=Support Form Submission";
  });
  enq.addEventListener("click", () => {
    window.location.href =
      "mailto:gravewoodhigh@herocraft.com?subject=Press/Influencer Form Submission";
  });
}

$(document).click(function (event) {
  var $target = $(event.target);
  if (!$target.closest(".popup .pop").length) {
    $("#overlay").remove();
  }
});
// Open and close popup

// Show buying options
document.getElementById("btn-1").onclick = function () {
  const but = document.getElementById("btn-1");

  $("#btn-1").html(
    '<a target="_blank" rel="noopener noreferrer" href="https://store.steampowered.com/app/1239300/">Steam</a> or <a href="https://www.epicgames.com/store/product/gravewood-high/home" target="_blank" rel="noopener noreferrer">Epic?</a>'
  );
  but.classList.add("thechoice");
  but.style.cursor("auto");
};
// Show buying options

// Show/Hide Panels
const acc = document.querySelectorAll(".box-title");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight === "300px") {
      panel.style.maxHeight = "0";
    } else {
      panel.style.maxHeight = "300px";
    }
  });
}
// Show/Hide Panels

// Load Youtube IFrame on click
let YouTubeContainers = document.querySelectorAll(".embed-youtube");

// Iterate over every YouTube container
for (let i = 0; i < YouTubeContainers.length; i++) {
  let container = YouTubeContainers[i];
  let imageSource =
    "https://img.youtube.com/vi/" +
    container.dataset.videoId +
    "/sddefault.jpg";

  // Load the Thumbnail Image asynchronously
  let image = new Image();
  image.src = imageSource;
  image.addEventListener("load", function () {
    container.appendChild(image);
  });

  // When the user clicks on the container, load the embedded YouTube video
  container.addEventListener("click", function () {
    let iframe = document.createElement("iframe");

    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "");
    iframe.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );

    iframe.setAttribute(
      "src",
      "https://www.youtube.com/embed/" +
        this.dataset.videoId +
        "?rel=0&showinfo=0&autoplay=1"
    );

    // Clear Thumbnail and load the YouTube iframe
    this.innerHTML = "";
    this.appendChild(iframe);
  });
}
// Load Youtube IFrame on click
