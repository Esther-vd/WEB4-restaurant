const restaurant = {
    tables: {
        1: {
            id: 1,
            name: 'table 1',
            seated: true,
        },
        2: {
            id: 2,
            name: 'table 2',
            seated: false
        },
        3: {
            id: 3,
            name: 'table 3',
            seated: false
        }
    },
    menu: {
        dishes: {
            1: {
                id: 1,
                name: 'spaghetti',
                price: 22.99,
            },
            2: {
                id: 2,
                name: 'tiramisu',
                price: 15.55,
            },
        },
        drinks: {
            1: {
                id: 1,
                name: 'mojito',
                price: 7.77,
            },
        }

    }
}

export default restaurant;