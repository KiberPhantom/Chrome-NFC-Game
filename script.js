document.addEventListener("DOMContentLoaded", async () => {
  const characterContainer = document.getElementById("character-container");
  const character = document.getElementById("character");
  const candy = document.getElementById("candy");
  
  character.style.animation = "idle 1s infinite";

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    alert("> Scan started");

    ndef.addEventListener("readingerror", () => {
      alert("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
	  character.style.animation = "none";
	  character.style.animation = "eat 1s forwards";
	  spawnCandy();
      alert(`> Serial Number: ${serialNumber}`);
      alert(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    alert("Argh! " + error);
  }
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
