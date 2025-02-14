function stopVideo() {
    const iframe = document.getElementById('youtubeVideo');
    iframe.src = iframe.src; // Reset the iframe src
}
