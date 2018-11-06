const survey = products.map(product => {
    return {
        name: product.name,
        image: product.image,
        views: 0,
        clicks: 0
    };
});