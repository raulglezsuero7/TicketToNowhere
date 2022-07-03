        var btnAbrirPopup = document.getElementById('apoyanos'),
        overlay = document.getElementById('overlay'),
        popup = document.getElementById('popup'),
        btnCerrarPopup = document.getElementById('btn-cerrar-popup');

        btnAbrirPopup.addEventListener('click', function()
        {
            overlay.classList.add('active');
            popup.classList.add('active');
        });

        btnCerrarPopup.addEventListener('click', function()
        {
            overlay.classList.remove('active');
            popup.classList.remove('active');
        });

        var btnAbrirVideo = document.getElementById('watchTrailer'),
        videoOverlay = document.getElementById('video-overlay'),
        videoPopup = document.getElementById('video-popup'),
        btnCerrarVideo = document.getElementById('btn-cerrar-video');

        btnAbrirVideo.addEventListener('click', function()
        {
            videoOverlay.classList.add('active');
            videoPopup.classList.add('active');
        });

        btnCerrarVideo.addEventListener('click', function()
        {
            videoOverlay.classList.remove('active');
            videoPopup.classList.remove('active');
        });


        var btnAbrirAudio = document.getElementById('listenBSO'),
        audioOverlay = document.getElementById('audio-overlay'),
        audioPopup = document.getElementById('audio-popup'),
        btnCerrarAudio = document.getElementById('btn-cerrar-audio'),
        audio = document.getElementById('audio');

        btnAbrirAudio.addEventListener('click', function()
        {
            audioOverlay.classList.add('active');
            audioPopup.classList.add('active');
        });

        btnCerrarAudio.addEventListener('click', function()
        {
            audioOverlay.classList.remove('active');
            audioPopup.classList.remove('active');
            audio.pause();

        });

        var btnAbrirElev = document.getElementById('watchVideo'),
        elevOverlay = document.getElementById('elev-overlay'),
        elevPopup = document.getElementById('elev-popup'),
        btnCerrarElev = document.getElementById('btn-cerrar-elev');

        btnAbrirElev.addEventListener('click', function()
        {
            elevOverlay.classList.add('active');
            elevPopup.classList.add('active');
        });

        btnCerrarElev.addEventListener('click', function()
        {
            elevOverlay.classList.remove('active');
            elevPopup.classList.remove('active');

        });



