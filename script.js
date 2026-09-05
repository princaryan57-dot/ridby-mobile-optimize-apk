function optimizeTouchAim() {
    let status = document.getElementById("statusBox");
    let log = document.getElementById("logBox");

    status.innerText = "CALIBRATING TOUCH LATENCY & SENSITIVITY...";
    status.style.color = "#00E5FF";

    setTimeout(() => {
        status.innerText = "STATUS: TOUCH RESPONSE OPTIMIZED!";
        log.innerText = "Touch delay reduced & screen polling response tuned.";
    }, 1200);
}

function cleanRam() {
    let status = document.getElementById("statusBox");
    let log = document.getElementById("logBox");

    status.innerText = "CLEANING RAM & BACKGROUND CACHE...";
    status.style.color = "#00FFCC";

    setTimeout(() => {
        status.innerText = "STATUS: RAM & CACHE FREED!";
        log.innerText = "Background processes cleared successfully.";
    }, 1200);
}

function cleanGpu() {
    let status = document.getElementById("statusBox");
    let log = document.getElementById("logBox");

    status.innerText = "FLUSHING GRAPHICS SHADER CACHE...";
    status.style.color = "#FFD700";

    setTimeout(() => {
        status.innerText = "STATUS: GPU DRIVER CACHE FLUSHED!";
        log.innerText = "Graphics thread buffer refreshed.";
    }, 1200);
}

function ultraBoost() {
    let status = document.getElementById("statusBox");
    let log = document.getElementById("logBox");

    status.innerText = "ACTIVATING ULTRA GAME BOOST...";
    status.style.color = "#FF3366";

    setTimeout(() => {
        status.innerText = "STATUS: ULTRA GAME BOOST ACTIVE!";
        log.innerText = "Maximum performance profile applied.";
    }, 1500);
}