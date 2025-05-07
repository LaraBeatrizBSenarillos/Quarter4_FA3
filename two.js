
    const contactsKey = 'contactsListSession';
    var contacts = loadContacts(); 


	function addContact() 
    {
      var input = document.getElementById("nameInput");
      var name = input.value.trim();
      if (name !== "") {
        if (contacts.length === 7) {
          contacts.shift(); 
        }
        contacts.push(name); 
        saveContacts(); 
        input.value = ""; 
        updateDisplay(); 
      }
    }
    
    function loadContacts() 
    {
      var storedContacts = sessionStorage.getItem(contactsKey);
      if (storedContacts) 
      {
        return storedContacts.split(','); 
      }
      return []; 
    }

    function saveContacts() 
    {
      sessionStorage.setItem(contactsKey, contacts.join(','));
    }


    function updateDisplay() 
    {
      var displayText = "";
      for (var i = 0; i < contacts.length; i++) {
        displayText += contacts[i]; 
        if (i < contacts.length - 1) {
          displayText += ", ";
        }
      }
      document.getElementById("contactsDisplay").textContent = displayText; 
    }

    

    function removeContact() 
    {
      contacts.pop(); 
      saveContacts(); 
      updateDisplay();
    }

   
    document.getElementById("contactForm").addEventListener("submit", function(event) 
    {
      event.preventDefault(); 
      addContact(); 
    });

    updateDisplay(); 
