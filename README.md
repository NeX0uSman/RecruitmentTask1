Recruitment Task: Interactive Advertising Unit
Overview
This project is a mobile-responsive interactive advertising unit created using React + Vite, along with JavaScript (ES6+), SCSS, HTML, Swiper.js, and GSAP.

Project Structure and Features
The application consists of 3 main scenes:

Intro — displays a headline for 8 seconds.

Gallery — a product gallery built with Swiper.js; includes a pulsing CTA button animated with GSAP.

Video — displays a looping video positioned based on the user's selection in the gallery.

Custom Hooks
The project contains 4 custom React hooks managing side effects and event tracking:

useHide — detects when the user hides or switches away from the page; logs "page_hide" event.

useOrientation — monitors device orientation; if not portrait, shows a prompt and hides main content.

useResize — listens for window resize events; logs "window_resize" event.

useSceneChange — tracks the current visible scene and logs "scene_change:{scene_name}".

Components
Intro.jsx — the intro scene component.

Gallery.jsx — product gallery component implementing Swiper.js with clickable slides.

Video.jsx — video scene component that plays video in positions corresponding to selected gallery slide.

App.jsx — the main component managing scene state, orchestrating scene transitions and hooks usage.

Assets
All assets have been provided by 'bam!' and placed into assets folder.

Technologies Used
React (functional components + hooks)

Vite (build tool)

JavaScript (ES6+)

SCSS (modular styles)

Swiper.js (carousel gallery)

GSAP (animations)

HTML5
