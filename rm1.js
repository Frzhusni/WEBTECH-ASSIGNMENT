// Get the box element by its ID
const interactiveBox = document.getElementById('interactiveBox');

// Add a click event listener to the box
interactiveBox.addEventListener('click', () => {
    // Generate a random color
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    
    // Change the background color of the box
    interactiveBox.style.backgroundColor = randomColor;
});


