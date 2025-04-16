
document.addEventListener("DOMContentLoaded", function() {
    const ralts_sound = document.getElementById('ralts_sound');
    const kirlia_sound = document.getElementById('kirlia_sound')
    const gardevoir_sound = document.getElementById('gardevoir_sound');

    ralts_sound.volume = 0.5;
    kirlia_sound.volume = 0.5;
    gardevoir_sound.volume = 0.5;

    let sounds_enabled = true;

    document.getElementById('toggle_sound').addEventListener('click', function() {
        sounds_enabled = !sounds_enabled
        if (sounds_enabled == true) {
            this.innerText = 'Pokemon Sounds: ON'
        } else {
            this.innerText = 'Pokemon Sounds: OFF'
        }
    });

    document.getElementById("ralts").addEventListener('mouseenter', function() {
        if (sounds_enabled == true) {
            ralts_sound.currentTime = 0;
            ralts_sound.play();
        }
    });

    document.getElementById("ralts").addEventListener('focus', function() {
        if (sounds_enabled == true) {
            ralts_sound.currentTime = 0;
            ralts_sound.play();
        }
    });

    document.getElementById("kirlia").addEventListener('mouseenter', function() {
        if (sounds_enabled == true) {
            kirlia_sound.currentTime = 0;
            kirlia_sound.play();
        }
    });

    document.getElementById("kirlia").addEventListener('focus', function() {
        if (sounds_enabled == true) {
            kirlia_sound.currentTime = 0;
            kirlia_sound.play();
        }
    });

    document.getElementById("gardevoir").addEventListener('mouseenter', function() {
        if (sounds_enabled == true) {
            gardevoir_sound.currentTime = 0;
            gardevoir_sound.play();
        }
    });

    // doesnt work idk why
    document.getElementById("gardevoir").addEventListener('focus', function() {
        if (sounds_enabled == true) {
            gardevoir_sound.currentTime = 0;
            gardevoir_sound.play();
        }
    });
});
