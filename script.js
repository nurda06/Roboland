// Get the color toggle button and theme toggle button
const colorToggleButton = document.getElementById('color-toggle');
const themeToggleButton = document.getElementById('theme-toggle');

// Change Background Color Button
colorToggleButton.addEventListener('click', function() {
    document.body.style.backgroundColor = 
        document.body.style.backgroundColor === 'lightblue' ? '#f4f4f9' : 'lightblue';
});

// Day/Night Mode Toggle Button
themeToggleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
});

// Feedback Form Validation
const feedbackForm = document.getElementById('feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert("Feedback submitted successfully!");
            feedbackForm.reset();
        } else {
            alert("Please fill out all fields.");
        }
    });
}
