function Food(){
    const food1 = "Sushi";
    const food2 = "Chicken Wrap";

    return(
        <ul>
        <li>Kiwi</li> 
        <li>{food1}</li>
        <li>{food2.toUpperCase()}</li>
        </ul>
    );
}

export default Food;