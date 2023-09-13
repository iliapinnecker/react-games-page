export default function Card(props) {
    let itemPrice

    if (props.price === 0) {
        itemPrice = "Free to Play"
    } else {
        itemPrice = props.price + " $"
    }

    return (
        <div className="card">
            <img className="card-image" src={`./${props.image}`} />
            <h3 className="card-title">{props.title}</h3>
            <p className="card-desc">{props.description}</p>
            <p className="card-price">{itemPrice}</p>
            <p className="card-rating">{props.rating}</p>
        </div>
    )
}