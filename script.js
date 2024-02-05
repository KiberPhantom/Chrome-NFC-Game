document.addEventListener("DOMContentLoaded", async () => {
  alert("User clicked scan button");

  try {
    const ndef = new NDEFReader();
    await ndef.scan();
    alert("> Scan started");

    ndef.addEventListener("readingerror", () => {
      alert("Argh! Cannot read data from the NFC tag. Try another one?");
    });

    ndef.addEventListener("reading", ({ message, serialNumber }) => {
      alert(`> Serial Number: ${serialNumber}`);
      alert(`> Records: (${message.records.length})`);
    });
  } catch (error) {
    alert("Argh! " + error);
  }
});
