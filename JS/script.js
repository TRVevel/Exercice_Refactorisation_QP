document.getElementById('tva-form1').addEventListener('submit', function (event) {
    //Empêche le rechargement de la page lors de la soumission
    event.preventDefault();

    class PriceData {
        constructor(ttcPrice, taxRate) {
            this.ttcPrice = ttcPrice;
            this.taxRate = taxRate;
            //calcul prix HT
            this.htPrice = ttcPrice / (1 + this.taxRate / 100);
            //calcul montant taxes
            this.taxAmount = this.ttcPrice - this.htPrice;
        }
    }

    // Récupération des valeurs dans le formulaire
    const priceTTC = parseFloat(document.getElementById('p').value);
    const priceTaxRate = parseFloat(document.getElementById('tr').value);

    // Contôles des données saisies
    if (isNaN(priceTTC) || isNaN(priceTaxRate) || priceTTC <= 0 || priceTaxRate < 0) {
        alert('Veuillez entrer des valeurs valides.');
        return;
    }

    // Calculer les résultats
    const priceData = new PriceData(priceTTC, priceTaxRate);

    // Affichage des résultats 
    const resultsSection = document.getElementById('results');
    resultsSection.innerHTML = `
        <p><strong>Prix HT :</strong> ${priceData.htPrice.toFixed(2)} €</p>
        <p><strong>Part TVA :</strong> ${priceData.taxAmount.toFixed(2)} €</p>
        <p><strong>Prix TTC :</strong> ${priceData.ttcPrice.toFixed(2)} €</p>
    `;
});