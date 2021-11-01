import './Navigation.css'
import { useState } from 'react'
import logo from '../assets/images/logo/logo.png'
import { useHistory } from 'react-router'
import { useDispatch } from 'react-redux'
import { authActions } from '../store'
import { useSelector } from 'react-redux'


const Navigation = (props) => {

    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector(state => state.auth.token)



    const getTerm = () => {
        props.onSaveGetGuitarByModel(searchTerm)

    }
return <nav>

        <ul className="nav-links">
        
            <li className="homeLi" onClick={() => { history.replace('') }}>Home</li>
            <p className="greeting">welcome to Ibanez guitar shop</p>
            <input value={searchTerm} className="searchInput" type="text"
                onChange={(ev) => setSearchTerm(ev.target.value.toUpperCase())}
                placeholder="search model, ex : SRH 500 F"
                />
            <button className="searchBtn" onClick={() => {
                history.replace('./search')
                getTerm()
                setSearchTerm("")
            }}><i className="fas fa-search"></i>
            </button>
            {token && <>
                <p className="loggedAsAdminTxt">Logged as admin</p>
            <button className="logoutBtn" onClick={()=>{
                dispatch(authActions.logout())
            }}><i className="fas fa-sign-out-alt"></i></button>
            </>}
            <div className="logoImgWrapper">
                <img className="logoImg" src={logo} 
                onClick={() => { history.replace('') }}
                alt="ibanezLogo" />
            </div>

        </ul>
    </nav>
}

export default Navigation;