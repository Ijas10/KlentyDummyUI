import './index.css'

const CardItem = props => {
  const {details} = props
  const {header, description, imageUrl} = details
  return (
    <li className="listItems">
      <img src={imageUrl} alt="CardImage" className="cardImage" />
      <h1 className="cardItemHead">{header}</h1>
      <p className="cardItemDescription">{description}</p>
    </li>
  )
}

export default CardItem
