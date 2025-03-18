import { useParams } from "react-router";
import restaurant from "../restaurant"
const Table = () => {
    let {tableId} = useParams();
    const table = restaurant.tables[tableId];
    return (
        <article>
            <h2>{table.name}</h2>
        </article>
    );
};

export default Table;
