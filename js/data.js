  // js/data.js
document.addEventListener('DOMContentLoaded', function() {
    const storedData = localStorage.getItem('data');
    if (storedData) {
        document.getElementById('data').textContent = storedData;
    }
});
