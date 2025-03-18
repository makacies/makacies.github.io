document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("image-container");
  const coversFolder = "covers";
  const coversCount = 24;

  function loadCovers() {
    for (let i = 0; i < coversCount; i++) {
      const img = document.createElement("img");
      img.src = `${coversFolder}/${i}.png`;
      img.src;
      //   cover.classList.add("tile-image");
      console.log(img.src);
      container.appendChild(img);
    }
  }

  window.addEventListener("resize", loadCovers);
  loadCovers();
});
