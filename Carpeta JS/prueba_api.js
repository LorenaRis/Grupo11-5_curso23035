fetch('https://fakerapi.it/api/v1/products?_quantity=6&_taxes=12&_categories_type=uuid')
    .then(res => {
        return res.json()
    })
    .then(data => {
        const value = data.data
        value.forEach(element => {
            const parrafo = `${element.description}`
            document.querySelector(`a:nth-child(${element.id}) > div.dorso > p`).insertAdjacentHTML('beforeend', parrafo)
        });
        // const value = data.data
        // console.log(value[0].description)
    })
    .catch(error => console.log(error));