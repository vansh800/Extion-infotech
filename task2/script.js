 
    // Dark Mode Toggle
    const modeToggle = document.getElementById('modeToggle');
    modeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      modeToggle.textContent = document.body.classList.contains('dark-mode') ? "Light Mode" : "Dark Mode";
    });

    // Typing Animation
    const typingText = ["Frontend Developer", "UI/UX Designer", "JavaScript Enthusiast"];
    let i = 0, j = 0;
    function typeEffect() {
      if (j < typingText[i].length) {
        document.getElementById('typing').innerHTML += typingText[i].charAt(j);
        j++;
        setTimeout(typeEffect, 100);
      } else {
        setTimeout(eraseEffect, 1000);
      }
    }
    function eraseEffect() {
      if (j > 0) {
        document.getElementById('typing').innerHTML = typingText[i].substring(0, j - 1);
        j--;
        setTimeout(eraseEffect, 50);
      } else {
        i = (i + 1) % typingText.length;
        setTimeout(typeEffect, 200);
      }
    }
    typeEffect();

    // Download Resume
    function downloadResume() {
      const link = document.createElement('a');
      link.href = "resume.pdf"; // Add your resume file here
      link.download = "My_Resume.pdf";
      link.click();
    }

    // Project Filtering
    function filterProjects(category) {
      const projects = document.querySelectorAll('#projectList .card');
      projects.forEach(p => {
        if (category === 'all' || p.getAttribute('data-category') === category) {
          p.style.display = "block";
        } else {
          p.style.display = "none";
        }
      });
    }

    // Form Validation
    function validateForm() {
      let name = document.getElementById('name').value.trim();
      let email = document.getElementById('email').value.trim();
      let message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert("Please fill all fields!");
        return false;
      }
      if (!email.includes('@') || !email.includes('.')) {
        alert("Please enter a valid email!");
        return false;
      }
      alert("Message sent successfully!");
      return true;
    }
