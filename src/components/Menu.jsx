const Menu = ({ menu }) => {
    return (
        <article>
            <h2>Menu of the day</h2>
            <h3>The dishes</h3>
            {Object.values(menu.dishes).map((dish) => (
                <p key={dish.id}>{dish.name}</p>
            ))}
            <h3>The dishes</h3>
            {Object.values(menu.drinks).map((drink) => (
                <p key={drink.id}>{drink.name}</p>
            ))}
        </article>
    );
};

export default Menu;
