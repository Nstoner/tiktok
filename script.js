const hourAndMinutes = document.querySelector(".time");
const currentTime = new Date();

const hours = currentTime.getHours();
const minutes = currentTime.getMinutes();
const horusText = hours < 10?"0" + hours.toString():hours;
const minutesText = minutes < 10?"0" + minutes.toString():minutes;

hourAndMinutes.textContent = horusText + ":" + minutesText;

const videoTag = document.querySelectorAll(".videoTag");
const progressBar = document.getElementsByClassName("progress-bar")[0];
const currentProgress = document.querySelector(".current-progress");
const sliderTag = document.querySelectorAll(".slider");
const homeContainer = document.getElementsByClassName("home-container")[0];







let duration = 0;
const handleClick = (video) => {
  
  videoTag.forEach((ev) => ev.pause())
  if (video.target.classList.contains("active")) {
    video.target.classList.remove("active");
    
    videoTag.forEach((ve) => ve.pause ())
  }else {
    video.target.classList.add("active");
    video.target.play()
  };
  video.target.addEventListener("loadeddeta", () => {
    const duration = Math.floor(video.duration);
  });
  video.target.addEventListener("timeupdate", () => {
    const currentTime = Math.floor(video.target.currentTime);
    const currentTimeText = currentTime.toString();
    updateCurrentSecond(currentTime)
  });

  const updateCurrentSecond = (currentTime) => {
    const currentProgressWidth = (100/video.target.duration) * currentTime;
    currentProgress.style.width = currentProgressWidth.toString() + "%";
  }
  
}



sliderTag.forEach((slider) => slider.addEventListener("click", handleClick));

homeContainer.addEventListener("scroll", (video) => {
  videoTag.forEach((v) => v.pause());
  
})












