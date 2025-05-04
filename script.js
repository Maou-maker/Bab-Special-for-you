document.addEventListener('DOMContentLoaded', function() {
    const music = document.getElementById('bg-music');
    if (music) {
      music.volume = 0.5;
      // Beberapa browser butuh trigger user
      document.body.addEventListener('click', () => {
        music.play().catch(() => {});
      }, { once: true });
    }
  });
  