
const burger = document.getElementById("burger");
burger.addEventListener("click", () => {
  if (burger.classList.contains("active")) {
    gsap.to(".links", { scaleX: "0" });
    gsap.to(".line", { stroke: "white" });
    gsap.set("body", { overflow: "auto" });
    gsap.set("body", { overflowX: "hidden" });
  } else {
    gsap.to(".links", { scaleX:"1"});
    gsap.to(".line", { stroke: "black" });
    gsap.fromTo(
      ".links a",
      { opacity: 0, y: 0 },
      { opacity: 1, y: 20, delay: 0.2, stagger: 0.2 }
    );
    gsap.set("body", { overflow: "hidden"});
  }
  burger.classList.toggle("active");
});
gsap.set("body", { overflowX: "hidden" });

const videos = gsap.utils.toArray(".video");
gsap.set(videos, { opacity: 0 });

videos.forEach((video) => {
  ScrollTrigger.create({
    trigger: video,
    start: "top center",
    end: "bottom center",
    markers: false,
    onEnter: () => {
      gsap.to(video, { opacity: 1 });
      video.play();
    },
    onEnterBack: () => video.play(),
    onLeave: () => video.pause(),
    onLeaveBack: () => video.pause(),
  });
});

