function searchContacts() {
      var input, filter, contactList, contacts, contact, i, txtValue;
      input = document.getElementById("searchInput");
      filter = input.value.toUpperCase();
      contactList = document.getElementById("contactList");
      contacts = contactList.getElementsByClassName("contact");
      for (i = 0; i < contacts.length; i++) {
        contact = contacts[i].getElementsByClassName("contact-details")[0];
        txtValue = contact.getElementsByTagName("h2")[0].innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          contacts[i].style.display = "";
        } else {
          contacts[i].style.display = "none";
        }
      }
    }
function showForm() {
      var contactForm = document.getElementById("contactForm");
      contactForm.style.display = "block";
    }

    function hideForm() {
      var contactForm = document.getElementById("contactForm");
      contactForm.style.display = "none";
    }
function addContact() {
      var name = document.getElementById("name").value;
      var email = document.getElementById("email").value;
      var phone = document.getElementById("phone").value;

      var contactList = document.getElementById("contactList");
      var newContact = document.createElement("div");
      newContact.classList.add("contact");

      newContact.innerHTML = `
        <div class="contact-avatar"><img src="avatar3.jpg" alt="Avatar"></div>
        <div class="contact-details">
          <h2>${name}</h2>
          <p>Email: ${email}</p>
          <p>Phone: ${phone}</p>
        </div>
      `;

      contactList.appendChild(newContact);
      hideForm(); // Close the form after adding the contact
    }
// Fetch contacts from the API and populate the contact list
    fetch('https://randomuser.me/api/?results=5') // Fetch 5 random users
      .then(response => response.json())
      .then(data => {
        const contactList = document.getElementById("contactList");
        data.results.forEach(user => {
          const newContact = document.createElement("div");
          newContact.classList.add("contact");
          newContact.innerHTML = `
            <div class="contact-avatar"><img src="${user.picture.large}" alt="Avatar"></div>
            <div class="contact-details">
              <h2>${user.name.first} ${user.name.last}</h2>
              <p>Email: ${user.email}</p>
              <p>Phone: ${user.phone}</p>
            </div>
          `;
          contactList.appendChild(newContact);
        });
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
