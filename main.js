
// Basic JavaScript for interactivity
document.querySelector('.match-center').addEventListener('click', function() {
    alert('Redirecting to match centre...');
});

// Search functionality
document.querySelector('.search-bar input').addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        alert('Searching for: ' + this.value);
    }
});
