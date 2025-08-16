// Select the image in the navbar
const logo = document.querySelector(".left img");

// When you hover on it
logo.addEventListener("mouseenter", () => {
  logo.src = "Images/Logos and Icons/JL Logo 3rd Inverse.jpg"; // <- change to your actual alternate image
});

// When you move your mouse away
logo.addEventListener("mouseleave", () => {
  logo.src = "Images/Logos and Icons/JL Logo 3rd.jpg"; // <- the original image
});