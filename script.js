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

    // 5. Highlight today's date in the October 2025 calendar
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.getMonth(); // 0 = Jan, 9 = October
    const currentYear = today.getFullYear();

    // Check if it's October 2025
    if (currentMonth === 9 && currentYear === 2025) {
      const calendarTable = document.querySelector('#calendar table');
      if (calendarTable) {
        const cells = calendarTable.querySelectorAll('td');
        cells.forEach(cell => {
          const cellDay = parseInt(cell.textContent);
          if (!isNaN(cellDay) && cellDay === currentDay && !cell.classList.contains('text-muted')) {
            cell.classList.add('table-primary', 'fw-bold');
          }
        });
      }

      // Insert today's date as a heading above the calendar
      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const dateDisplay = today.toLocaleDateString('en-US', options); // e.g., Thursday, October 16, 2025
      const dateHeading = document.createElement('p');
      dateHeading.textContent = `Today is ${dateDisplay}`;
      dateHeading.classList.add('text-center', 'fw-semibold', 'mb-4');
      const calendarSection = document.getElementById('calendar');
      const calendarTitle = calendarSection.querySelector('h2');
      calendarSection.insertBefore(dateHeading, calendarTitle.nextSibling);
    }
  });
</script>
