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
