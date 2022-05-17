import { gsap } from "../gsap-lib/gsap.min.js";

import { ScrollTrigger } from "../gsap-lib/ScrollTrigger.min.js";

gsap.registerPlugin(ScrollTrigger);

const pageWrap = document.querySelector('.main')

function GSAPHorizontalScroll() {
  let Sections = gsap.utils.toArray("section");

  let GSAPHorizontalScrollTL = gsap.timeline({
    scrollTrigger: {
      trigger: ".main",
      pin: true,
      scrub: 0,
      end: () => "+=" + pageWrap.offsetWidth,
    }
  })
  GSAPHorizontalScrollTL
    .to(Sections, {
      xPercent: -100 * (Sections.length - 1),
      ease: "none",
    })
}

const sectionB = document.querySelector('.info-b')

function SectionBGSAP() {
  let SectionBGSAPTL = gsap.timeline({
    scrollTrigger: {

      trigger: sectionB,
      scrub: 2,

      start: () => 'top top-=' + (sectionB.offsetLeft - window.innerWidth) * (pageWrap.offsetWidth / (pageWrap.offsetWidth - window.innerWidth)),
      end: () => '+=' + (sectionB.offsetWidth + window.innerWidth) * (pageWrap.offsetWidth / (pageWrap.offsetWidth - window.innerWidth)),
    }
  })
  SectionBGSAPTL
    .from(".info-b h2", {
      y: "-360", ease: "none",
    })
    .from(".info-b h2", {
      scale: 13, ease: "none",
    })
}

window.onload = () => {
  GSAPHorizontalScroll();
  SectionBGSAP();
}
