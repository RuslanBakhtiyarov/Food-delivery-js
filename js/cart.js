const cart = () => {
    const buttonCart = document.getElementById('cart-button')
    const modalCart = document.querySelector('.modal-cart')
    const close = modalCart.querySelector('.close')
    const body = modalCart.querySelector('.modal-body')

    const incrementCount = (id) => { 
        const cartArrey = JSON.parse(localStorage.getItem('cart'))

        cartArrey.map((item) => {
            if (item.id === id) {
            item.count++
            }
            return item
        })
        localStorage.getItem('cart', JSON.stringify(cartArrey))
        renderItems(cartArrey)
        
    }
    const decrementCount = (id) => { 
        const cartArrey = JSON.parse(localStorage.getItem('cart'))

        cartArrey.map((item) => {
            item.count = item.count > 0 ? item.count - 1 : 0
            return item
        })
        localStorage.getItem('cart', JSON.stringify(cartArrey))
        renderItems(cartArrey)
    }

    const renderItems = (data) => {
        body.innerHTML = ''

        data.forEach(({name,price,id,count}) => {
            const cartElem = document.createElement('div')

            cartElem.classList.add('food-row')

            cartElem.innerHTML = `
            <span class="food-name">${name}</span>
                    <strong class="food-price">${price}₽</strong>
                    <div class="food-counter">
                        <button class="counter-button btn-dec" data-index"${id}">-</button>
                        <span class="counter">${count}</span>
                        <button class="counter-button btn-inc" data-index"${id}">+</button>
                    </div>
            `
            //cartElem.querySelector('.btn-dec').addEventListener('click', () => {
              //  decrementCount(id)
            //})
            //cartElem.querySelector('.btn-inc').addEventListener('click', () => {
              //  incrementCount(id)
            //})

            body.append(cartElem)
            
        })
    }
    body.addEventListener('click', (e) => {
        e.preventDefault()
        
        if (e.target.classList.contains('btn-inc')) {
            console.log(e.target.dataset.index);
        } else if (e.target.classList.contains('btn-dec')){
            console.log('dec');
        }
    })

    buttonCart.addEventListener('click', () => {
        console.log();
        
        if (localStorage.getItem('cart')) {
            renderItems(JSON.parse(localStorage.getItem('cart')))
        }

    modalCart.classList.add('is-open') 
    })

    close.addEventListener('click', () => {
        modalCart.classList.remove('is-open')
    })
}
cart()