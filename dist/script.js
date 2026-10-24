// Wait for the HTML page to load
document.addEventListener("DOMContentLoaded", function() {

    // Get the Starting Lineup form
    const lineupForm = document.getElementById("lineupForm");

    // Handle form submission
    lineupForm.addEventListener("submit", function(event) {

        // Prevent the page from refreshing
        event.preventDefault();

        // Get selected status
        const status = document.querySelector('input[name="status"]:checked').value;
        console.log("Selected Status:", status);

        // Get selected game date
        const gameDate = document.getElementById("gameDate").value;
        console.log("Selected Date:", gameDate);

        // Get selected players
        const selectedPlayers = document.querySelectorAll('input[name="players"]:checked');

        let playerNames = [];

        selectedPlayers.forEach(function(player) 
        {
            console.log("Selected Player:", player.value);
            playerNames.push(player.value);
        });

        // Display form results
        const result = document.getElementById("result");

        result.textContent = "Status: " + status + " | Date: " + gameDate + " | Players: " + playerNames.join(", ");

        });

});