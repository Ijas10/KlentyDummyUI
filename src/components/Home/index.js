import './index.css'
import Slider from 'react-slick'
import Header from '../Header'
import CardItem from '../CardItem'
import FeedBackCard from '../FeedBackCard'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const cardList = [
  {
    id: 1,
    imageUrl:
      'https://res.cloudinary.com/dnlxvy81c/image/upload/v1652467519/Group_1006-3_mjhlvf.png',
    header: 'Never update your contacts manually',
    description:
      'Any contact you add in CRM gets updated automatically in Klenty. Set up Triggers to drive leads from Klenty back into the CRM.  Save hours everyday to focus on critical activities',
  },
  {
    id: 2,
    imageUrl:
      'https://res.cloudinary.com/dnlxvy81c/image/upload/v1652467530/Group_1006-4_dc8kyg.png',
    header: 'Engage instantly with prospects who show intent',
    description:
      'Auto-sync email engagement data like opens, clicks and replies from Klenty right into your CRM. Get notified immediately. Followup without skipping a beat.',
  },
  {
    id: 3,
    imageUrl:
      'https://res.cloudinary.com/dnlxvy81c/image/upload/v1652467539/Group_1006-5_hbbrlv.png',
    header: 'Outreach without leaving your CRM ',
    description:
      'Engage with prospects straight from your CRM.Book meetings using Klenty- without ever logging into Klenty. No more switching screens to execute sales outreach.',
  },
]

const Home = () => (
  <>
    <Header />
    <div className="mainPage">
      <div className="firstPart">
        <div className="headerPart">
          <h1 className="mainHeader">Don't just integrate</h1>
          <h1 className="subHeader">Accelerate your CRM</h1>
          <p className="headerParagraph">
            Propel your sales team into a state of flow with CRM Accelerations.
            Switch out boring hours of repetitive work with high-impact
            activities. Build a repeatable sales process.
          </p>

          <button className="getStartedBtn" type="button">
            GET STARTED
          </button>
        </div>
        <img
          src="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652461128/Group_1006_rbcej7.png"
          className="headImage"
          alt="imageLogo"
        />
      </div>
      <div className="secondPart">
        <h1 className="header2ndPart">CRM Acceleration</h1>
        <p className="para2ndPart">
          Everything CRM Integrations was supposed to be. And more.
        </p>
        <ul className="unorderedList">
          {cardList.map(each => (
            <CardItem key={each.id} details={each} />
          ))}
        </ul>
      </div>
      <div className="thirdPart">
        <h1 className="reviewHeader">What our customers have to say</h1>
        <Slider>
          <div>
            <FeedBackCard
              idImg="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473101/adam_k8c9mc.png"
              founder="Adam Weinger"
              designation="President,Double The Donation"
              companyLogo="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473173/double-logo_kxtsyh.png"
              paragraph="Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%"
            />
          </div>

          <div>
            <FeedBackCard
              idImg="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473174/gavin_nh1w71.png"
              founder="Sam W"
              designation="Head of Demand Generation , Jump "
              companyLogo="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473173/jump-logo_qs0fwg.png"
              paragraph="From someone who is relatively new to sales
               and lead generating, Klenty was a highly effective and 
               simple-to-use tool that allowed me to quickly generate 
               leads in a genuine and customisable manner"
            />
          </div>
          <div>
            <FeedBackCard
              idImg="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473101/adam_k8c9mc.png"
              founder="Gavin Tye"
              designation="Sales Director , Red Eye"
              companyLogo="https://res.cloudinary.com/dnlxvy81c/image/upload/v1652473173/red-eye_wocb4v.png"
              paragraph="It changed our business. Klenty allowed our outbounds sales team to leverage their time and skills "
            />
          </div>
        </Slider>
      </div>
    </div>
  </>
)

export default Home
