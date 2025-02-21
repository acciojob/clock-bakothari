//your JS code here. If required.
function updateTimer() {
            const timerElement = document.getElementById("timer");
            const now = new Date();
            timerElement.textContent = now.toLocaleString();
        }
        
        setInterval(updateTimer, 1000);
        updateTimer(); 