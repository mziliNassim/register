let form = document.querySelector(".form-register"),
    btn = document.querySelector(".bttn"),
    info = [
        document.querySelector('#first-name'),
        document.querySelector('#last-name'),
        document.querySelector('#stdnb'),
        document.querySelector('#Birth'),
        document.querySelector('#stmail'),
        document.querySelector('#stphone'),
        document.querySelector('#Degree'),
        document.querySelector('#Level'),
        document.querySelector('#staddress'),
        document.querySelector('#stcity'),
        document.querySelector('#stzip'),
        document.querySelector('#stcountry')
    ]
;
function isValidMail(mail) {
    // includes for email validation
    let = emailCondition = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailCondition.test(mail)) {
        return true;        // Valid email
    } 
    return false;           // Invalid email
}
function isValidPhone(phone) {
    // includes for phone validation
    var phoneRegex = /^\d{10}$/;

    // Remove non-numeric characters from the phone number
    var numericPhoneNumber = phone.replace(/\D/g, '');

    // Test the numeric phone number against the regex
    if (phoneRegex.test(numericPhoneNumber)) {
        // Perform additional actions if needed
        console.log('Valid phone number:', numericPhoneNumber);
        return true; // Valid phone number
    } else {
        console.log('Invalid phone number:', numericPhoneNumber);
        return false; // Invalid phone number
    }
}

btn.addEventListener("click", (e)=> {
    e.preventDefault();

    let is_empty = false;
    info.forEach(input => {
        if (input.value === '') {
            is_empty = true;
        }
    });

    // check empty inputs
    if (is_empty) {
        alert('All input are requared!')
    } else {
        // check email validation
        let mail = info[4].value;
        if (!isValidMail(mail)) {
            alert('Enter a valid email address')
        } else {
            // check phone number
            let phone = info[5].value;
            if (!isValidPhone(phone)) {
                alert('Enter a valid phone number');
            } else {
                // submit
                btn.classList.toggle("is_active");
                setTimeout(()=>{
                    window.print();
                    form.submit();
                    window.open('../index.html', '_self')
                }, 700)
            }
        }
    }
});
