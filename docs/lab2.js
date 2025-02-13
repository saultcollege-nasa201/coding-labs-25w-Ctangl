const form = document.forms.form;
const errorMessages = document.getElementById("errorMessage");

form.addEventListener('submit', function(e) {
    const fname = form.firstname.value.trim();
    const lname = form.lastname.value.trim();
 

    let messages = [];

    if (fname === '') {
        messages.push(' ERROR: First Name is required');
    }

    if (lname === '' ) {
        messages.push('ERROR: Last Name is required');
    }


    if ( messages.length > 0 ) {
        errorMessages.innerHTML = messages.join('<br>');
        e.preventDefault();
    }
});