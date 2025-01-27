document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('autoplayVideo');
    
    // Função para iniciar o vídeo
    function playVideo() {
        video.play().catch(function(error) {
            console.log("Autoplay foi impedido:", error);
        });
    }

    // Tenta iniciar o vídeo quando a página carrega
    playVideo();

    // Reinicia o vídeo quando terminar (opcional, já que temos loop)
    video.addEventListener('ended', function() {
        video.play();
    });
}); 