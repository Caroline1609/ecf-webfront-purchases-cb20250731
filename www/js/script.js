const firsName = document.getElementById('firsName');
const surname = document.getElementById('name');
const datedelivery = document.getElementById('dateDelivery');
const buttonSubmit = document.getElementById('buttonSubmit');
const buttonReset = document.getElementById('buttonReset');
const resultatInfo = document.getElementById('resultatInfo');
const quantity = document.getElementById('quantity');
const price = document.getElementById('price');

function check(event){
    event.preventDefault();

    // Vérification du nom et prénom
    if (firsName.value.length < 3 || surname.value.length < 3) { //Vérifier que le nom et prenom ont au moins 3 caractère.
        resultatInfo.innerHTML = 'Le nom ou le prénom fait moins de 3 caractères';
        return;
    } else {
        resultatInfo.innerHTML = 'Le nom et le prénom sont conformes';
    }

    // Vérification de la date
    const date = new Date(datedelivery.value);
    const dateactuelle = new Date();
    dateactuelle.setDate(dateactuelle.getDate() + 8);

    if (date < dateactuelle) {
        resultatInfo.innerHTML += "<br>La date de livraison doit être au moins 8 jours dans le futur";
    } else {
        resultatInfo.innerHTML += "<br>La date de livraison est valide";
    }

    //calculer le prix
    
    const quantityOrders = quantity.value;
    const price = price.value;

    // resultat = price * quantityOrders;

    console.log(quantityOrders);
    console.log(price);
    console.log(resultat)





}


buttonSubmit.addEventListener("click", check);

console.log(buttonReset);
console.log(buttonSubmit);
