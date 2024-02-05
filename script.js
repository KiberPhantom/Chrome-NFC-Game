document.addEventListener("DOMContentLoaded", () => {
  const characterContainer = document.getElementById("character-container");
  const character = document.getElementById("character");
  const candy = document.getElementById("candy");

  // Play idle animation initially
  character.style.animation = "idle 1s infinite";

  // Handle NFC reading event
  function handleNFCReading() {
    // Stop idle animation
    character.style.animation = "none";

    // Play eat animation
    character.style.animation = "eat 1s forwards";

    // Spawn candy
    spawnCandy();
  }

  // Function to spawn candy and animate it towards the character
  function spawnCandy() {
    candy.style.display = "block";

    // Animate candy towards the character
    candy.style.animation = "candy-fall 2s linear forwards";

    // After animation, hide candy
    setTimeout(() => {
      candy.style.display = "none";
      // Reset character animation to idle
      character.style.animation = "idle 1s infinite";
    }, 2000);
  }

  // Attach NFC reading event listener
  document.addEventListener("reading", handleNFCReading);
});
