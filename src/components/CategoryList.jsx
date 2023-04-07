import { CategoryItem } from "./CategoryItem";

function CategoryList(props) {
    const { catalog = [] } = props;

    return (
        <div className="list">
            {catalog.map((element) => (
                <CategoryItem key={element.idCategory} {...element} />
            ))}
        </div>
    );
}

export { CategoryList };
