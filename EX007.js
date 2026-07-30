async function getAllProducts(params) {
    const req = await fetch ('https://fakestoreapi.com/products')

    try {

        const req = await fetch ('https://fakestoreapi.com/products')

        if (req.status == 200) {
        console.log('Executado com sucesso.')
        const res = await req.json()
        return res
        } else {
        return ('Erro ao carregar a página', req.status)
        }
    } catch (error) {
        return error
    }

} 

 getAllProducts()