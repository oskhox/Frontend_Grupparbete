function getHeader() {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;
        })
}

document.addEventListener('DOMContentLoaded', function() {
    getHeader();
});