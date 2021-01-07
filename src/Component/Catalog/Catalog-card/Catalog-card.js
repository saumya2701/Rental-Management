import cardstyle from './Catalog-card.module.css';

const catalogCard = (props) => {

    let image = props.category.image !== undefined ? props.category.image : 'default_img.jpg';
    console.log(image)
    let imgsrc = `${process.env.PUBLIC_URL}/images/${image}`;

    return (
        <div>
            <div className={cardstyle.card}>
                <img src={imgsrc} alt="Avatar" style={{ width: "100%" }}></img>
                <div className={cardstyle.container}>
                    <button className= {cardstyle.btnstyle} onClick={() => props.showSubCategories(props.category)}> {props.category.name}</button>
                </div>
            </div>
        </div>
    )
}

export default catalogCard;