
// Function to clear form fields
function clearFormFields() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
}

// Clear form fields when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    clearFormFields();
});

// Function to reload page on smaller screens after form submission
function reloadPageOnSubmit() {
    // Check if screen width is less than or equal to 768 pixels
    if (window.innerWidth <= 768) {
        // Reload the page
        window.location.reload();
    }
}

// Listen for form submission event
document.getElementById("contact-form").addEventListener("submit", function() {
    // Call function to reload page if necessary
    reloadPageOnSubmit();
});



function toggleMenu() {
    var menu = document.querySelector('.menu');
    var menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('active');
    menuIcon.classList.toggle('open');
}

function toggleSection(sectionId) {
    var sections = document.querySelectorAll('.section');
    sections.forEach(function(section) {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    // Close the menu when a section is selected
    var menu = document.querySelector('.menu');
    var menuIcon = document.querySelector('.menu-icon');
    menu.classList.remove('active');
    menuIcon.classList.remove('open');
}

function redirectToGitHub() {
    window.open("https://github.com/Mkayuni", "_blank");
}

function redirectToResume() {
    window.open("https://drive.google.com/file/d/1AX4I3C_fztSOthmQ_X39NO3xtf14zN3p/view?usp=sharing", "_blank");
}

function toggleRecruiterMode() {
    var toggleButton = document.getElementById('toggleButton');
    var personalModeText = document.getElementById('personalModeText');
    var recruiterModeText = document.getElementById('recruiterModeText');

    if (toggleButton.checked) {
        // Switch to recruiter mode
        personalModeText.style.display = 'none';
        recruiterModeText.style.display = 'block';
    } else {
        // Switch to personal mode
        personalModeText.style.display = 'block';
        recruiterModeText.style.display = 'none';
    }
}

// Function to reset the toggle to personal mode when the page loads
window.onload = function() {
    document.getElementById('toggleButton').checked = false; // Ensure the toggle is unchecked
    toggleRecruiterMode(); // Call the function to update the mode based on the toggle state

    // Add event listeners to links that navigate to other sections
    var links = document.querySelectorAll('a[href^="#"]');
    links.forEach(function(link) {
        link.addEventListener('click', function() {
            // Reset the toggle to personal mode
            document.getElementById('toggleButton').checked = false;
            toggleRecruiterMode();
        });
    });
};

