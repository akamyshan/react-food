function Ingredients(props) {
    const {
        strIngredient1,
        strIngredient2,
        strIngredient3,
        strIngredient4,
        strIngredient5,
        strIngredient6,
        strIngredient7,
        strIngredient8,
        strIngredient9,
        strIngredient10,
        strIngredient11,
        strIngredient12,
        strIngredient13,
        strIngredient14,
        strIngredient15,
        strIngredient16,
        strIngredient17,
        strIngredient18,
        strIngredient19,
        strIngredient20,
        strMeasure1,
        strMeasure2,
        strMeasure3,
        strMeasure4,
        strMeasure5,
        strMeasure6,
        strMeasure7,
        strMeasure8,
        strMeasure9,
        strMeasure10,
        strMeasure11,
        strMeasure12,
        strMeasure13,
        strMeasure14,
        strMeasure15,
        strMeasure16,
        strMeasure17,
        strMeasure18,
        strMeasure19,
        strMeasure20,
    } = props;
    return (
        <table>
            <thead>
                <tr>
                    <th>Ingredient</th>
                    <th>Measure</th>
                </tr>
            </thead>
            <tbody>
                {strIngredient1 && (
                    <tr>
                        <td>{strIngredient1}</td>
                        <td>{strMeasure1}</td>
                    </tr>
                )}
                {strIngredient2 && (
                    <tr>
                        <td>{strIngredient2}</td>
                        <td>{strMeasure2}</td>
                    </tr>
                )}
                {strIngredient3 && (
                    <tr>
                        <td>{strIngredient3}</td>
                        <td>{strMeasure3}</td>
                    </tr>
                )}
                {strIngredient4 && (
                    <tr>
                        <td>{strIngredient4}</td>
                        <td>{strMeasure4}</td>
                    </tr>
                )}
                {strIngredient5 && (
                    <tr>
                        <td>{strIngredient5}</td>
                        <td>{strMeasure5}</td>
                    </tr>
                )}
                {strIngredient6 && (
                    <tr>
                        <td>{strIngredient6}</td>
                        <td>{strMeasure6}</td>
                    </tr>
                )}
                {strIngredient7 && (
                    <tr>
                        <td>{strIngredient7}</td>
                        <td>{strMeasure7}</td>
                    </tr>
                )}
                {strIngredient8 && (
                    <tr>
                        <td>{strIngredient8}</td>
                        <td>{strMeasure8}</td>
                    </tr>
                )}
                {strIngredient9 && (
                    <tr>
                        <td>{strIngredient9}</td>
                        <td>{strMeasure9}</td>
                    </tr>
                )}
                {strIngredient10 && (
                    <tr>
                        <td>{strIngredient10}</td>
                        <td>{strMeasure10}</td>
                    </tr>
                )}
                {strIngredient11 && (
                    <tr>
                        <td>{strIngredient11}</td>
                        <td>{strMeasure11}</td>
                    </tr>
                )}
                {strIngredient12 && (
                    <tr>
                        <td>{strIngredient12}</td>
                        <td>{strMeasure12}</td>
                    </tr>
                )}
                {strIngredient13 && (
                    <tr>
                        <td>{strIngredient13}</td>
                        <td>{strMeasure13}</td>
                    </tr>
                )}
                {strIngredient14 && (
                    <tr>
                        <td>{strIngredient14}</td>
                        <td>{strMeasure14}</td>
                    </tr>
                )}
                {strIngredient15 && (
                    <tr>
                        <td>{strIngredient15}</td>
                        <td>{strMeasure15}</td>
                    </tr>
                )}
                {strIngredient16 && (
                    <tr>
                        <td>{strIngredient16}</td>
                        <td>{strMeasure16}</td>
                    </tr>
                )}
                {strIngredient17 && (
                    <tr>
                        <td>{strIngredient17}</td>
                        <td>{strMeasure17}</td>
                    </tr>
                )}
                {strIngredient18 && (
                    <tr>
                        <td>{strIngredient18}</td>
                        <td>{strMeasure18}</td>
                    </tr>
                )}
                {strIngredient19 && (
                    <tr>
                        <td>{strIngredient19}</td>
                        <td>{strMeasure19}</td>
                    </tr>
                )}
                {strIngredient20 && (
                    <tr>
                        <td>{strIngredient20}</td>
                        <td>{strMeasure20}</td>
                    </tr>
                )}
            </tbody>
        </table>
    );
}

export { Ingredients };
