document.getElementById("myForm").addEventListener('submit', saveData);

function saveData(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name").value
    const emailInput = document.getElementById("email").value
    const phoneNumberInput = document.getElementById("phonenumber").value
    const addressInput = document.getElementById("address").value
    const zipCodeInput = document.getElementById("zipcode").value
    const cityInput = document.getElementById("city").value

    let confirmOrder = true;

    if (!validateName(nameInput)) confirmOrder = false;
    if (!validateEmail(emailInput)) confirmOrder = false;
    if (!validatePhoneNumber(phoneNumberInput)) confirmOrder = false;
    if (!validateAddress(addressInput)) confirmOrder = false;
    if (!validateZipCode(zipCodeInput)) confirmOrder = false;
    if (!validateCity(cityInput)) confirmOrder = false;

    if (!confirmOrder) {
        //alert("Vänligen fyll i alla fält.")
        return;
    }

    alert("Beställningen skickad")

    localStorage.setItem("order", JSON.stringify({
        name: nameInput,
        email: emailInput,
        phoneNumber: phoneNumberInput,
        address: addressInput,
        zipCode: zipCodeInput,
        city: cityInput
    }));

    function validateName(nameInput) {
        let validateNameInput = document.getElementById("inputValidationName")

        if (nameInput.length < 2 || nameInput.length > 50) {
            validateNameInput.style.display = "block";
            return false;
        } else {
            validateNameInput.style.display = "none";
            return true;
        }
    }

    function validateEmail(emailInput) {
        let validateEmailInput = document.getElementById("inputValidationEmail")

        if (!emailInput.includes('@') || emailInput.length > 50) {
            validateEmailInput.style.display = "block";
            return false;
        } else {
            validateEmailInput.style.display = "none";
            return true;

        }
    }

    function validatePhoneNumber(phoneNumberInput) {
        let validatePhoneNumberInput = document.getElementById("inputValidationPhoneNumber")
        if (!/^[\d\-()]{1,50}$/.test(phoneNumberInput)) {
            validatePhoneNumberInput.style.display = "block";
            return false;
        } else {
            validatePhoneNumberInput.style.display = "none";
            return true;
        }
    }

    function validateAddress(addressInput) {
        let validateAddressInput = document.getElementById("inputValidationAddress")

        if (addressInput.length < 2 || addressInput.length > 50) {
            validateAddressInput.style.display = "block";
            return false;
        } else {
            validateAddressInput.style.display = "none";
            return true;
        }
    }

    function validateZipCode(zipCodeInput) {
        let validateZipCodeInput = document.getElementById("inputValidationZipCode")

        if (zipCodeInput.length !== 5 || isNaN(zipCodeInput)) {
            validateZipCodeInput.style.display = "block";
            return false;
        } else {
            validateZipCodeInput.style.display = "none";
            return true;
        }
    }

    function validateCity(cityInput) {
        let validateCityInput = document.getElementById("inputValidationCity")
        if (cityInput.length < 2 || cityInput.length > 50) {
            validateCityInput.style.display = "block";
            return false;
        } else {
            validateCityInput.style.display = "none";
            return true;
        }
    }
}

