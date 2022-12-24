const hourAndMinutes = document.querySelector(".time");
const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const horusText = hours.toString();
const minutesText = minutes.toString();

hourAndMinutes.textContent = horusText + ":" + minutesText;

const videoTag = document.getElementsByClassName("videoTag")[0];
const progressBar = document.getElementsByClassName("progress-bar")[0];
const currentProgress = document.getElementsByClassName("current-progress")[0];

let duration = 0;
videoTag.addEventListener("loadeddata", () => {
  duration = Math.floor(videoTag.duration);
});

videoTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(videoTag.currentTime);
  currentProgressBar(currentTime);
});

const currentProgressBar = (currentTime) => {
  const currentProgressWidth = (100 / duration) * currentTime;
  currentProgress.style.width = currentProgressWidth.toString() + "%";
};

const homeTag = document.getElementsByClassName("home")[0];

homeTag.addEventListener("click", () => {
  if (homeTag.classList.contains("active")) {
    homeTag.classList.remove("active");
    videoTag.pause();
  } else {
    homeTag.classList.add("active");
    videoTag.play();
  }
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
