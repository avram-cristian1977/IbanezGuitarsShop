import guitarsImages from '../assets/images/guitars/guitarImages'
import { useQuery } from "@apollo/client";
import { GET_GUITAR_BY_MODEL } from '../queries/queries'
import "./Search.css"
import { useSelector } from "react-redux";

const Search = (props) => {

    const eurData = useSelector(state => state.eur.eur)

    const { data, loading, error } = useQuery(GET_GUITAR_BY_MODEL, { variables: { model: props.term } })

    return <div>
        {data && data.guitar && <div className="searchGuitarCard">
            <p className="searchedImageTitle">Ibanez {data.guitar.model}</p>
            <p><span>Price : </span>{data.guitar.price}$ / {(eurData.data.RON * data.guitar.price).toFixed()}  RON</p>
            <p><span>Color : </span>{data.guitar.color}</p>
            <p><span>Description : </span>{data.guitar.description}</p>
            <p><span>On Stock : </span>{data.guitar.isAvailable ? <span className="green">Yes</span> : <span className="red">No</span>}</p>
            <div className="searchedGuitarImageWrapper">
            <img src={guitarsImages[data.guitar.image]} alt="" />
            </div>
        </div>}
    </div>
}

export default Search;