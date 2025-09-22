// Combined JavaScript for animations, map interaction, smooth scrolling & landmarks
document.addEventListener('DOMContentLoaded', function () {
    // 🔹 Simple animation for section headings
    const sectionTitles = document.querySelectorAll('section h2');
    sectionTitles.forEach(title => {
        title.style.opacity = '0';
        title.style.transition = 'opacity 1s ease-in-out';

        setTimeout(() => {
            title.style.opacity = '1';
        }, 300);
    });

    // 🔹 Map interaction
    const delhiMap = document.querySelector('.delhi-map');
    if (delhiMap) {
        delhiMap.addEventListener('click', function () {
            alert('In a full implementation, this would open an interactive map of Delhi with cultural landmarks!');
        });
    }

    // 🔹 Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 🔹 Landmark buttons functionality
    const landmarkButtons = document.querySelectorAll('.landmark-btn');
    const landmarkDetails = document.querySelectorAll('.landmark-detail');

    function showLandmark(landmarkId) {
        // Hide all landmark details
        landmarkDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Remove active class from all buttons
        landmarkButtons.forEach(button => {
            button.classList.remove('active');
        });

        // Show selected landmark detail
        const detailElement = document.getElementById(landmarkId);
        if (detailElement) {
            detailElement.classList.add('active');
        }

        // Add active class to clicked button
        const activeButton = document.querySelector(`.landmark-btn[data-landmark="${landmarkId}"]`);
        if (activeButton) {
            activeButton.classList.add('active');
        }
    }

    // Add click event to all landmark buttons
    landmarkButtons.forEach(button => {
        button.addEventListener('click', function () {
            const landmarkId = this.getAttribute('data-landmark');
            showLandmark(landmarkId);

            // Smooth scroll to landmarks section
            const landmarksSection = document.getElementById('landmarks');
            if (landmarksSection) {
                landmarksSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });





    // Initialize with India Gate visible
    showLandmark('india-gate');

    const images = ["red1.jpg", "red2.jpg", "red3.jpeg", "red4.jpeg"]; // yaha apni photos daalo
    const images1=[]
    let index = 0;

    const imgElement = document.getElementById("slider-img");
    const prevBtn = document.querySelector(".prev");
    const nextBtn = document.querySelector(".next");

    function showImage(i) {
        if (i < 0) index = images.length - 1;
        else if (i >= images.length) index = 0;
        else index = i;

        imgElement.src = images[index];
    }

    prevBtn.addEventListener("click", () => showImage(index - 1));
    nextBtn.addEventListener("click", () => showImage(index + 1));
    showImage(index);



});
