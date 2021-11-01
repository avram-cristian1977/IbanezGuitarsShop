import './HotDeals.css'
import guitarsImages from '../assets/images/guitars/guitarImages'
import { useQuery } from "@apollo/client"
import { GET_HOT_DEALS } from '../queries/queries'
import { Link } from 'react-router-dom'

const HotDeals = () => {

    const { data: serverHotDeals } = useQuery(GET_HOT_DEALS)
    return <div className="hotDealsWrapper">
        <h3 className="hotDealsTxt">Hot Deals!</h3>
        <div className="dealCardWrapper">

            {serverHotDeals && serverHotDeals.hotDeals.map(deal => {
                return <Link key={deal.slug} to={`/${deal.slug}`}>
                <div key={deal.id} className="dealCard">
                    <h6>Model : {deal.model}</h6>
                    <p className="hotDealPrice">Price : {deal.price}$</p>
                    <div className="dealImageWrapper">
                        <img src={guitarsImages[deal.image]} alt="dealImage" />
                    </div>
                    <p className="dealBonus">Free shipping!</p>
                </div>
                </Link>
            })}
        </div>
    </div>
}

export default HotDeals;