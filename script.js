// GSAP timeline setup
var tl = gsap.timeline();

// Set initial states for the text elements and the shoe image
gsap.set(".a", { opacity: 0, y: 10 }); // Hide and slightly move text elements down
gsap.set("#left img", { opacity: 0 }); // Hide and position the shoe image slightly to the right

// Animation sequence
tl.to("#right", {
  width: 8, // Collapse the #right div to 8px width
  duration: 2, // Duration of 2 seconds
  ease: "expo.inOut", // Easing for smooth animation
})
  .to("#right", {
    width: "100%", // Expand the #right div back to its full width (38%)
    duration: 2,
    ease: "expo.inOut",
  })
  .to(".a", {
    opacity: 1, // Fade in the .a elements (text, buttons, etc.)
    delay: -2, // Start this animation 2 seconds before the previous one finishes
    stagger: 0.5, // Stagger each element's animation by 0.5 seconds
    y: 0, // Slide the text elements up (from y: 10 to y: 0)
    duration: 1.5,
    ease: "expo.inOut",
  })
  .to(
    "#left img",
    {
      opacity: 1, // Fade in the shoe image
      // Slide the image in from the right (x: 50 to x: 0)
      scale: 1.05, // Slight scale effect for emphasis
      duration: 2, // Duration of 2 seconds
      ease: "expo.inOut", // Smooth easing
    },
    "-=1.5"
  ); // Overlap the shoe image animation with the text animations by 1.5 seconds
