function getItems() {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => renderItems(data))

    function renderItems(items) {
        let output = "";

        items.forEach(item => {
            output += `
    <div class="col-md-3">
    <div class="card h-100">
        <img src="${item.image}" class="card-img-top img-fluid p-4" alt="${item.title}">
        <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <!--Beskrivnings-knapp-->
            <div class="collapse" id="description-${item.id}">
                <p>${item.description}</p>
            </div>
        </div>
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <button class="btn btn-primary mb-2 w-100" data-bs-toggle="collapse" data-bs-target="#description-${item.id}">
                Produktbeskrivning
            </button>
            <!--Pris-knapp-->
            <a href="#" class="btn btn-primary w-100">${item.price} EUR</a>
        </div>
    </div>
    </div>

            `;
        })
        document.getElementById("items").innerHTML = output;
    }
}

getItems();