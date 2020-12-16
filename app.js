const tl = gsap.timeline({ onUpdate: updatePercentage });
const controller = new ScrollMagic.Controller();

// Badges animations
const badgeContainer = document.querySelector(".badges");
Array.from(badgeContainer.children).forEach((badge, index) => {
  const duration = 1 - (badgeContainer.children.length - index) * 0.18;
  tl.from(`.${badge.className}`, { duration, y: -50, opacity: 0 });
});

tl.from("#h-divider", { duration: 1, width: 0 });
tl.from("#products-title", { duration: 1, opacity: 0 });

// // Products animation
// const productContainer = document.querySelector("#products");
// Array.from(productContainer.children).forEach((product, index) => {
//   const duration = 1 - (productContainer.children.length - index) * 0.08;
//   tl.from(`.${product.className}`, { duration, x: 500, opacity: 0 });
// });

const sportContainer = document.querySelector("#sports");
Array.from(sportContainer.children).forEach((sport, index) => {
  const duration = 1;
  tl.from(`.${sport.className} .text-wrapper`, { duration, opacity: 0 });
  tl.from(`.${sport.className} .image-wrapper1`, { duration, x: '50%', y: '100%' }, "-=1");
  tl.from(`.${sport.className} .pattern-wrapper1`, { duration, x: '-100%', y: '100%' }, "-=1");
  tl.from(`.${sport.className} .image-wrapper2`, { duration, x: '-50%', y: '100%' }, "-=1");
  tl.from(`.${sport.className} .pattern-wrapper2`, { duration, x: '100%', y: '-100%' }, "-=1");
});

const scene = new ScrollMagic.Scene({
  triggerElement: ".frame2",
  triggerHook: "onLeave",
  duration: "250%",
})
  .setPin(".frame2")
  .setTween(tl)
  .addTo(controller);

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}
