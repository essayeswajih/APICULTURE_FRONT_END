import { CommonModule } from '@angular/common';
import { AfterViewInit, Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { gsap } from 'gsap';

let ScrollTrigger: any;
if (typeof window !== 'undefined') {
  import('gsap/ScrollTrigger').then(module => {
    ScrollTrigger = module.ScrollTrigger;
    gsap.registerPlugin(ScrollTrigger);
  });
}

@Component({
  selector: 'app-home',
  imports: [CommonModule,RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements AfterViewInit {
  constructor(private activatedRoute: ActivatedRoute) {}
  ngAfterViewInit(): void {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);

      // Create a continuous random movement for the bee
      this.moveBee();
      this.moveBee1();
    }
  }

  // Function to move the bee randomly across the screen
  moveBee() {
    const moveBeeRandomly = () => {
      // Animate the bee to a new random position after a short interval
      gsap.to('#bee', {
        x: 'random(200, 100vw)', // Move bee randomly across the viewport width
        y: 'random(5, 300vh)', // Move bee randomly across the viewport height
        duration: 4 + Math.random() * 4, // Random duration for variety
        ease: 'sine.inOut', // Smooth transition
        onComplete: moveBeeRandomly, // Continue the random movement after completion
      });
    };

    // Start the random movement of the bee
    moveBeeRandomly();

    // Optionally link the scroll to control the speed of the animation
    gsap.to('#bee', {
      scrollTrigger: {
        trigger: '#beeBox',
        start: 'top 10%',
        end: 'bottom 90%',
        scrub: true,
        markers: false, // Remove markers in production
        onUpdate: (self) => {
          const speed = self.progress * 100; // Adjust scroll speed
          gsap.to('#bee', {
            duration: speed, // Scroll speed will affect duration
          });
        },
      },
    });
  }
   moveBee1() {
    const moveBeeRandomly = () => {
      // Animate the bee to a new random position after a short interval
      gsap.to('#bee1', {
        x: 'random(80vh, -200)', // Move bee randomly across the viewport width
        y: 'random(30vh, 300vh)', // Move bee randomly across the viewport height
        duration: 4 + Math.random() * 4, // Random duration for variety
        ease: 'sine.inOut', // Smooth transition
        onComplete: moveBeeRandomly, // Continue the random movement after completion
      });
    };

    // Start the random movement of the bee
    moveBeeRandomly();

    // Optionally link the scroll to control the speed of the animation
    gsap.to('#bee1', {
      scrollTrigger: {
        trigger: '#beeBox1',
        start: 'top 10%',
        end: 'bottom 90%',
        scrub: true,
        markers: false, // Remove markers in production
        onUpdate: (self) => {
          const speed = self.progress * 100; // Adjust scroll speed
          gsap.to('#bee1', {
            duration: speed, // Scroll speed will affect duration
          });
        },
      },
    });
  }
}