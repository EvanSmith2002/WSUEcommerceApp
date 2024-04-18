const productsArray = [
    {
        productID: 'prod_PsukWILjmjRySQ',
        priceID: "price_1P38ucP79apvj9gnVgWYvHAB",
        title: "Keychain",
        price: 4.99,
        link:"https://m.media-amazon.com/images/I/51R0Bna8S2L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
    },
    {
        id: "10",
        title: "Sunglasses",
        price: 9.99,
        link:"https://m.media-amazon.com/images/I/71bFMJg0N9L.jpg"
    },
    {
        id: "11",
        title: "Hoodie",
        price: 39.99,
        link:"https://fanatics.frgimages.com/washington-state-cougars/mens-colosseum-crimson-washington-state-cougars-lace-up-30-pullover-hoodie_pi4352000_altimages_ff_4352119-c5442f1025ce5879d76falt1_full.jpg?_hv=2&w=900"
    },
    {
        title: "White Hoodie",
        price: 20.99,
        link: "https://images.footballfanatics.com/washington-state-cougars/mens-champion-h-oat-washington-state-cougars-sp-replen-powerblend-hood_ss10_p-101307724+u-in7aadjtyibqckhjkfpk+v-wdvew6nvhubpjtxm9ukq.jpg?_hv=2&w=340"
    },
    {
        title: "Grey Hoodie",
        price: 30.99,
        link: "https://fanatics.frgimages.com/washington-state-cougars/mens-colosseum-heather-gray-washington-state-cougars-arch-and-logo-crew-neck-sweatshirt_pi3129000_ff_3129659c_full.jpg?_hv=2&w=340"
    },
    {
        id: "1",
        title: "Hat",
        price: 5.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-primary-team-logo-basic-59fifty-fitted-hat_pi4181000_altimages_ff_4181294-4d1ca7ff2446ed42b06aalt2_full.jpg?_hv=2&w=600"
    },
    {
        title: "Grey Hat",
        price: 10.99,
        link: "https://images.footballfanatics.com/washington-state-cougars/mens-top-of-the-world-gray-washington-state-cougars-primary-logo-staple-adjustable-hat_pi3146000_altimages_ff_3146944alt1_full.jpg?_hv=2&w=900"
    },
    {
        title:"White Hat",
        price: 6.99,
        link: "https://images.footballfanatics.com/washington-state-cougars/mens-new-era-white/crimson-washington-state-cougars-court-sport-foam-a-frame-9forty-adjustable-trucker-hat_ss5_p-200399026+u-dxgbs2yuk8thlztkiv79+v-acjzibsr3x7cc9kivikj.jpg?_hv=2&w=340"
    },
    {
        title:"White Tumbler",
        price: 40.99,
        link:"https://images.footballfanatics.com/washington-state-cougars/washington-state-cougars-40oz-rocky-alumni-personalized-tumbler_ss5_p-200822909+u-sr2imsgi0wxdpweviv91+v-eaxdxswyapadljvt5eyc.jpg?_hv=2&w=340"
    },
    {
        title: "Phone case",
        price: 50.59,
        link:"https://images.footballfanatics.com/washington-state-cougars/washington-state-cougars-linen-logo-iphone-magnetic-bump-case_ss5_p-201333122+u-rixbp672bhugzbm8nipd+v-g5smsiqqcoxmckjdauqz.jpg?_hv=2&w=340"
    },
    {
        id: "2",
        title: "Beanie",
        price: 3.99,
        link:"https://fanatics.frgimages.com/washington-state-cougars/mens-new-era-crimson-washington-state-cougars-marquee%C2%A0cuffed-knit-hat-with-pom_ss5_p-200021136+pv-1+u-q2pwnyxpqsuupm8py31e+v-wbwjtcn4oof5gubq2b20.jpg?_hv=2&w=900"
    },
    {
        id: "3",
        title: "Lanyard",
        price: 5.99,
        link:"https://m.media-amazon.com/images/I/81cbTGvy+uL._AC_SX679_.jpg"
    },
    {
        id: "4",
        title: "Butch Statue",
        price: 335.99,
        link:"https://fanatics.frgimages.com/washington-state-cougars/washington-state-cougars-mascot-statue_pi3455000_altimages_ff_3455944-1d8e53be5667f6f77979alt1_full.jpg?_hv=2&w=900"
    },
    {
        id: "5",
        title: "Football Jersey",
        price: 49.99,
        link:"https://fanatics.frgimages.com/washington-state-cougars/mens-nike-cameron-ward-crimson-washington-state-cougars-nil-replica-football-jersey_pi5103000_altimages_ff_5103043-1133442294b109309e85alt1_full.jpg?_hv=2&w=900"
    },
    {
        id: "6",
        title: "Mug",
        price: 9.99,
        link:"https://fanatics.frgimages.com/washington-state-cougars/washington-state-cougars-16oz-sculpted-mug_pi4236000_altimages_ff_4236086-9fdf8e2317dc0f1adab3alt1_full.jpg?_hv=2&w=900"
    }  
];

// 1. add item to strip on approval
// 2. remove item from stripe on delete product
// 3. edit price in seller
// 4. make sure checkout works.