const Tables = ({ tables }) => {
    return (
        <article>
            <h2>Overview of the tables</h2>
            <ul>
                {Object.values(tables).map((table) => (
                    <li key={table.id}>
                        <p>{table.name}</p>
                    </li>

                ))}
            </ul>

        </article>
    );
};

export default Tables;
