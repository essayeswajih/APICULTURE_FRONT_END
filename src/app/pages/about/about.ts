import { Component, effect, signal, ViewChild, ElementRef } from '@angular/core';
import { gsap } from 'gsap';


let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export class About {
  @ViewChild('animateBox') animateBox!: ElementRef;

  constructor() {
    effect(() => {
      if (this.animateBox && typeof window !== 'undefined' && ScrollTrigger) {
        gsap.to(".gsaplogo", {
        x: "52vw",
        y: "15vh",
        scale: 2.5,
        opacity: 1,
        scrollTrigger: {
          trigger: ".gsaplogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
      gsap.to(".sublogo", {
        x: "-52vw",
        y: "15vh",
        scale: 2.5,
        rotate: 360,
        scrollTrigger: {
          trigger: ".sublogo",
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        }
      });
    }
    });
  }
}