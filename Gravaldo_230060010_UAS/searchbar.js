function performSearch() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let destinations = document.getElementsByClassName('destination');
    
    for (let i = 0; i < destinations.length; i++) {
        let destinationName = destinations[i].getAttribute('data-name').toLowerCase();
        if (destinationName.includes(input)) {
            destinations[i].style.display = '';
        } else {
            destinations[i].style.display = 'none';
        }
    }
}
