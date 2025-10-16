<script>
  document.addEventListener('DOMContentLoaded', () => {
    // 1. Highlight current nav link based on URL
    const navLinks = document.querySelectorAll('nav a');
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.style.textDecoration = 'underline';
        link.style.fontWeight = 'bold';
      }
    });

    // 2. Smooth scroll (only on index.html)
    if (currentPage === '' || currentPage === 'index.html') {
      navLinks.forEach(link => {
        if (link.getAttribute('href').startsWith('#')) {
          link.addEventListener('click', e => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
            }
          });
        }
      });
    }

    // 3. Calendar event toggle (only on page3.html)
    if (currentPage === 'page3.html') {
      const events = document.querySelectorAll('.event-list li');
      events.forEach(eventItem => {
        eventItem.style.cursor = 'pointer';

        eventItem.addEventListener('click', () => {
          let details = eventItem.querySelector('.details');
          if (!details) {
            details = document.createElement('p');
            details.classList.add('details');
            details.style.marginTop = '0.5rem';
            details.style.fontStyle = 'italic';
            details.style.color = '#555';
            details.textContent = 'More details about the event: location, speakers, RSVP info, and more.';
            eventItem.appendChild(details);
          } else {
            details.remove();
          }
        });
      });
    }

    // 4. Dynamic greeting in header
    const header = document.querySelector('header h1');
    if (header) {
      const now = new Date();
      const hour = now.getHours();
      let greeting = 'Mount Mary University';

      if (hour >= 5 && hour < 12) {
        greeting = 'Good Morning, Welcome to Mount Mary University';
      } else if (hour >= 12 && hour < 18) {
        greeting = 'Good Afternoon, Welcome to Mount Mary University';
      } else {
        greeting = 'Good Evening, Welcome to Mount Mary University';
      }

      header.textContent = greeting;
    }
  });
</script>
