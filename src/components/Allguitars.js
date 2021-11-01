import "./Allguitars.css"
import { GET_ALL_GUITARS } from '../queries/queries'
import { useQuery } from '@apollo/client'
import { useEffect, useState } from 'react'
import guitarsImages from '../assets/images/guitars/guitarImages'
import Guitar from "./Guitar";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { eurCurrency } from "../store/index";
import LoadingSpinner from '../components/LoadingSpinner'
import Pagination from "./Pagination"

const AllGuitars = () => {



    useEffect(() => {
        getEur()
    }, [])

    const dispatch = useDispatch()
    const eurData = useSelector(state => state.eur.eur)
    
    const [currentPage, setCurrentPage] = useState(1)
    const [guitarsPerPage] = useState(4)

    const getEur = () => {
        dispatch(eurCurrency())
    }

    const { data: allGuitars, loading } = useQuery(GET_ALL_GUITARS)

    if(allGuitars){
        console.log("all guitars", allGuitars);
    }

    if (loading) {
        return <LoadingSpinner />
    }

    const indexOfTheLast = currentPage * guitarsPerPage
    const indexOfTheFirst = indexOfTheLast - guitarsPerPage
    const currentGuitars = allGuitars.guitars.slice(indexOfTheFirst, indexOfTheLast)

    const paginate = (pageNum) => {

        setCurrentPage(pageNum)
    }

    return <div className="guitar-card">
        <h2 className="allGuitarsTitle">Our Guitars</h2>
        {currentGuitars && currentGuitars.map(guitar => {
            return <Link key={guitar.id} to={`/${guitar.slug}`}>
                <Guitar
                    key={guitar.id} guitar={guitar}
                    priceRON={eurData && eurData.data.RON && eurData.data.RON} guitarsImages={guitarsImages} />
            </Link>
        })
        }
        <Pagination
            guitarsPerPage={guitarsPerPage}
            totalGuitars={allGuitars.guitars.length}
            paginate={paginate}
        />
    </div>
}

export default AllGuitars;