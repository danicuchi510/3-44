// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const video = document.getElementById('video');

    // Lista de canciones
    const songs = [
        'songs/song1.mp3',
        'songs/song2.mp3',
        'songs/song3.mp3',
        'songs/song4.mp3',
        'songs/song5.mp3',
        'songs/song6.mp3',
        'songs/song7.mp3',
        'songs/song8.mp3',
        'songs/song9.mp3',
        'songs/song10.mp3',
        'songs/song11.mp3',
        'songs/song12.mp3',
        'songs/song13.mp3',
        'songs/song14.mp3',
        'songs/song15.mp3',
        'songs/song16.mp3',
        'songs/song17.mp3',
        'songs/song18.mp3',
        'songs/song19.mp3',
        'songs/song20.mp3',
        'songs/song21.mp3',
        'songs/song22.mp3',
        'songs/song23.mp3',
        'songs/song24.mp3',
        'songs/song25.mp3',
        'songs/song26.mp3',
        'songs/song27.mp3',
        'songs/song28.mp3',
        'songs/song29.mp3',
        'songs/song30.mp3',
        'songs/song31.mp3',
        'songs/song32.mp3',
        'songs/song33.mp3',
        'songs/song34.mp3',
        'songs/song35.mp3',
        'songs/song36.mp3',
        'songs/song37.mp3',
        'songs/song38.mp3',
        'songs/song39.mp3',
        'songs/song40.mp3',
        'songs/song41.mp3',
        'songs/song42.mp3',
        'songs/song43.mp3',
        'songs/song44.mp3',
        'songs/song45.mp3',
        'songs/song46.mp3',
        'songs/song47.mp3',
        'songs/song48.mp3',
        'songs/song49.mp3',
        'songs/song50.mp3',
        'songs/song51.mp3',
        'songs/song52.mp3',
        'songs/song53.mp3',
        'songs/song54.mp3',
        'songs/song55.mp3',
        'songs/song56.mp3',
        'songs/song57.mp3',
        'songs/song58.mp3',
        'songs/song59.mp3',
        'songs/song60.mp3',
        'songs/song61.mp3',
        'songs/song62.mp3',
        'songs/song63.mp3',
        'songs/song64.mp3',
        'songs/song65.mp3',
        'songs/song66.mp3',
        'songs/song67.mp3',
        'songs/song68.mp3',
        'songs/song69.mp3',
        'songs/song70.mp3',
        'songs/song71.mp3',
        'songs/song72.mp3',
    
        // Agrega tus canciones aquí
    ];

    // Función para iniciar la cámara
    function startCamera() {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => {
                video.srcObject = stream;
            })
            .catch(error => {
                console.error('Error al acceder a la cámara:', error);
            });
    }

    // Función para reproducir una canción aleatoria
    function playRandomSong() {
        const randomIndex = Math.floor(Math.random() * songs.length);
        const randomSong = songs[randomIndex];
        const audio = new Audio(randomSong);
        audio.play();
    }

    // Iniciar la cámara y reproducir música al cargar la página
    startCamera();
    playRandomSong();
});
