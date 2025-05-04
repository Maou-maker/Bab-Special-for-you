document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    if (music) {
      music.volume = 0.5;
      // Beberapa browser butuh trigger user
      document.body.addEventListener('click', () => {
        music.play().catch(() => {});
      }, { once: true });
    }
  });const bgMusic = document.getElementById('bg-music');
  const toggleButton = document.getElementById('toggle-music');
  
  toggleButton.addEventListener('click', () => {
    if (bgMusic.paused) {
      bgMusic.play();
      toggleButton.textContent = '⏸️ Pause Musik';
    } else {
      bgMusic.pause();
      toggleButton.textContent = '▶️ Mainkan Musik';
    }
  });
  
  