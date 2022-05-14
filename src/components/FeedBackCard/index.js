import './index.css'

const FeedBackCard = props => {
  const {idImg, paragraph, designation, companyLogo, founder} = props
  return (
    <div className="reviewCard">
      <img src={idImg} alt="person" className="personPhoto" />
      <div className="reviewContainer">
        <img
          src="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473173/Vector_wo8j38.png"
          alt="doubleQuotes"
          className="doubleQuotes"
        />
        <p className="paraReview">{paragraph}</p>
        <div className="companyLogoContainer">
          <img src={companyLogo} alt="companyLogo1" className="companyLogo" />
          <hr className="hr" />
          <div className="flexBoxCont">
            <p className="founderName">{founder}</p>
            <p className="designation">{designation}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeedBackCard
