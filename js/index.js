  // js/index.js
document.getElementById('buttonText').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    localStorage.setItem('data', inputText);
});
