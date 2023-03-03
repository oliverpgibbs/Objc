document.addEventListener('DOMContentLoaded', function() {
  var lottieAnimation = document.querySelector('.lottie-animation.nav-logo');
  var animation = lottie.loadAnimation({
      container: lottieAnimation,
      renderer: 'svg',
      path: 'Animations/logo-animation.json',
      autoplay: false,
  });
});
