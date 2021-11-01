import './GuitarDetails.css'

import { useParams, useHistory } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_GUITAR_BY_SLUG } from '../queries/queries'
import guitarsImages from '../assets/images/guitars/guitarImages'
import { useSelector } from "react-redux";

const GuitarDetails = () => {
const history = useHistory()

const eurData = useSelector(state => state.eur.eur)

    const slug = useParams()
    const { data } = useQuery(GET_GUITAR_BY_SLUG, { variables: { slug: slug.slug } })

    return <div>
        <button title="previous page" className="goBackButton" onClick={()=>history.goBack()}><i className="fas fa-arrow-left"></i></button>
        {data && data.guitarBySlug && <div className="searchGuitarCard">
            <p className="searchedImageTitle">Ibanez {data.guitarBySlug.model}</p>
            <p><span>Price : </span>{data.guitarBySlug.price}$ / {(eurData.data.RON * data.guitarBySlug.price).toFixed()}  RON</p>
            <p><span>Color : </span>{data.guitarBySlug.color}</p>
            <p><span>Description : </span>{data.guitarBySlug.description}</p>
            <p><span>On Stock : </span>{data.guitarBySlug.isAvailable ? <span className="green">Yes</span> : <span className="red">No</span>}</p>
            <div className="searchedGuitarImageWrapper">
                <img src={guitarsImages[data.guitarBySlug.image]} alt="" />
            </div>
        </div>}
    </div>;
}

export default GuitarDetails;