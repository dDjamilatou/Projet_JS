document.addEventListener('DOMContentLoaded', function () {
    const URL = 'http://localhost:3000/clients';
    const URL2 = 'http://localhost:3000/articles';


    const prenomElement = document.getElementById('prenom');
    const nomElement = document.getElementById('nom');
    const telElement = document.getElementById('tel');
    const emailElement = document.getElementById('email');
    const userPhotoElement = document.querySelector('.header-user img');
    const totalElement = document.getElementById('total');
    const verseElement = document.getElementById('verse');
    const restantElement = document.getElementById('restant');

    function afficherInfosClient(client) {
        prenomElement.textContent = `Prenom: ${client.prenom}`;
        nomElement.textContent = `Nom: ${client.nom}`;
        telElement.textContent = `Telephone: ${client.telephone}`;
        emailElement.textContent = `Email: ${client.email}`;
        totalElement.textContent = `Montant Total: ${client.dette[0].montant}`;
        verseElement.textContent = `Montant Verse: ${client.dette[0].verse}`;
        restantElement.textContent = `Montant Restant: ${client.dette[0].restant}`;



    }


    function getClientData() {
        fetch(URL)
            .then(response => response.json())
            .then(data => {
                const client = data[0];
                afficherInfosClient(client);
            })
    }
    getClientData();
});