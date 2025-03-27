document.getElementById("myForm").addEventListener('submit', saveData);

function saveData(e) {
    e.preventDefault();

    const nameInput = document.getElementById("name").value
    const emailInput = document.getElementById("email").value
    const phoneNumberInput = document.getElementById("phonenumber").value
    const addressInput = document.getElementById("address").value
    const zipcodeInput = document.getElementById("zipcode").value
    const cityInput = document.getElementById("city").value


    if (nameInput.length <2 || nameInput.length > 50) {
        alert("Felakting inmatning, försök igen")
        return;
    }

    if(!emailInput.includes('@') || emailInput.length > 50)
    {
        alert("Felaktig inmatning, försök igen")
        return;
    }

    if (!/^[\d\-()]{1,50}$/.test(phoneNumberInput))
    {
        alert("Felaktig inmatning")
        return;
    }

    if(addressInput.length < 2 || addressInput.length > 50) {
        alert("Felaktig inmatning")
        return;
    }

    if(zipcodeInput.length !== 5 || isNaN(zipcodeInput)) {
        alert("felaktig inmatning")
        return;
    }

    if(cityInput.length < 2 || cityInput.length > 50) {
        alert("felaktig inmatnig")
        return;
    }

    {
        alert("Beställningen är skickad!")
    }

}