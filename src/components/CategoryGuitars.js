import { useParams } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_CATEGORY_GUITARS } from '../queries/queries'
import Guitar from "./Guitar";
import guitarsImages from "../assets/images/guitars/guitarImages"
import { Link } from "react-router-dom";
import {useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { eurCurrency } from "../store/index";
import './CategoryGuitars.css'
import LoadingSpinner from "./LoadingSpinner";



const CategoryGuitars = () => {

    useEffect(() => {
        getEur()
    }, [])

    const dispatch = useDispatch()
    const eurData = useSelector(state => state.eur.eur)

    const getEur = () => {
        dispatch(eurCurrency())
    }

    const id = useParams()
    const { data: categoryGuitars, loading } = useQuery(GET_CATEGORY_GUITARS, { variables: { categoryId: Number(id.id) } })

    if(loading){
        return <LoadingSpinner/>
    }
    
    return <div>
     
         {categoryGuitars && categoryGuitars.category.guitars && <h2 className="categoryTitle">{categoryGuitars.category.category}<span className="guitarCatword"> guitars</span> </h2> }

        {categoryGuitars && categoryGuitars.category.guitars && categoryGuitars.category.guitars.map(guitar => {
            return <Link key={guitar.id} to={`/${guitar.slug}`}>
                <Guitar
                    guitar={guitar}
                    guitarsImages={guitarsImages}
                    priceRON={eurData && eurData.data.RON && eurData.data.RON} >
                </Guitar>
            </Link>
        })}
    </div>;
}

export default CategoryGuitars;