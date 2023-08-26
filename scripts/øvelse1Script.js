const allImages = document.querySelectorAll(".alkohol, .alkoholfri");

allImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (image.classList.contains("alkohol")) {
      console.log("Indeholder alkohol");
    } else if (image.classList.contains("alkoholfri")) {
      console.log("Alkoholfri");
    }
  });
});
