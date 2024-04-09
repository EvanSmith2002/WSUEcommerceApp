// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to

const productsArray = [
    {
        id: "price_1P38ucP79apvj9gnVgWYvHAB",
        title: "Keychain",
        price: 4.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "10",
        title: "Sunglasses",
        price: 9.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "11",
        title: "Hoodie",
        price: 39.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "1",
        title: "Hat",
        price: 5.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "2",
        title: "Beanie",
        price: 3.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "3",
        title: "Lanyard",
        price: 5.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "4",
        title: "Butch Statue",
        price: 335.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "5",
        title: "Football Jersey",
        price: 49.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        id: "6",
        title: "Mug",
        price: 9.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    }
    
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData === undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };