function changeTextColor(color){
    document.getElementById('text')
}


function changeTextColor(color) {
    document.getElementById('text').style.color = color;
}

// Add click event listeners to both buttons
document.getElementById('blue').addEventListener('click', function () {
    changeTextColor('blue');
});

document.getElementById('green').addEventListener('click', function () {
    changeTextColor('green');
});