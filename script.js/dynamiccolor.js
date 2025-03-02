let colors = ["red", "blue", "green", "yellow", "purple", "orange"];
let index = 0;

function changeBackground() {
    document.body.style.backgroundColor = colors[index]; // Set background color
    index = (index + 1) % colors.length; // Move to the next color, reset after last one
}