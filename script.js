if ('NDEFReader' in window) {
  document.addEventListener("DOMContentLoaded", async () => {
    const characterContainer = document.getElementById("character-container");
    const character = document.getElementById("character");
    const candy = document.getElementById("candy");

    // Play idle animation initially
    character.style.animation = "idle 1s infinite";

    try {
      const ndef = new NDEFReader();
      await ndef.scan();

      ndef.addEventListener("readingerror", () => {
        // Обработка ошибок
      });

      ndef.addEventListener("reading", ({ message, serialNumber }) => {
        character.style.animation = "none";
        character.style.animation = "eat 1s forwards";
        spawnCandy();
      });
    } catch (error) {
      // Обработка ошибок
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
  });
} else {
  alert("No no no");
}
