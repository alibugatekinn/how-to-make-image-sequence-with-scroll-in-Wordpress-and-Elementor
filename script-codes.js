
	document.addEventListener('DOMContentLoaded', function() {
  var frameCount = 26;
  var frameName = 'http://www.adanaprofil.com/wp-content/uploads/2023/04/';
  var frames = [];

  // Resimleri önceden yükle
  for (var i = 1; i <= frameCount; i++) {
    var img = new Image();
    img.src = frameName + i + '-scaled.webp';
    frames.push(img);
  }

  var container = document.getElementById('sequence-container-1');

  window.addEventListener('scroll', function() {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    var frameIndex = Math.floor(scrollTop / 15) + 1;

    if (frameIndex > frameCount) {
      frameIndex = frameCount;
    }

    // Önceden yüklenen resmi arka plana ekle
    container.style.backgroundImage = 'url(' + frames[frameIndex - 1].src + ')';
    container.style.backgroundSize = 'cover';
  });
});

