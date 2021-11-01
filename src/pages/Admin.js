import './Admin.css'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from "../store/"
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from '@apollo/client';
import { GET_ALL_GUITARS } from '../queries/queries'
import { DELETE_GUITAR } from '../mutations/mutations'
import { UPDATE_GUITAR_PRICE } from '../mutations/mutations'
import { CREATE_GUITAR } from '../mutations/mutations'
import guitarsImages from '../../src/assets/images/guitars/guitarImages'
import { TOGGLE_AVAILABILITY } from '../mutations/mutations'
import { TOGGLE_HOT_DEAL } from '../mutations/mutations'
import ScrollUp from '../components/ScrollUp';
import LoadingSpinner from '../components/LoadingSpinner'
import { useHistory } from 'react-router';

const webAPIkey = "AIzaSyADi4U621KWGzpqFZ4B0vOiK8CcNJsMkhU"

const Admin = () => {

    const dispatch = useDispatch()
    const history = useHistory()
    const token = useSelector(state => state.auth.token)
    const [enteredEmail, setEnteredEmail] = useState("")
    const [enteredPassword, setEnteredPassword] = useState("")
    const [enteredSingnInEmail, setEnteredSignInEmail] = useState("")
    const [enteredSignInPassword, setEnteredSignInPassword] = useState("")
    const [enteredConfirmPasswod, setEnteredConfirmPassword] = useState("")
    const [errorMsg, setErrorMsg] = useState()
    const [errorMsgSignIn, setErrorMsgSignIn] = useState()
    const [newPrice, setNewPrice] = useState()
    const [adminMsg, setAdminMsg] = useState("")
    const [createSection, setCreateSection] = useState(false)
    const [deleteUpdateSection, setDeleteUpdateSection] = useState(false)
    const [enteredBrand, setEnteredBrand] = useState("")
    const [enteredModel, setEnteredModel] = useState("")
    const [enteredDescription, setEnteredDescription] = useState("")
    const [enteredPrice, setEnteredPrice] = useState("")
    const [enteredSlug, setEnteredSlug] = useState("")
    const [enteredImage, setEnteredImage] = useState("")
    const [enteredColor, setEnteredColor] = useState("")
    const [isAvailable, setIsAvailable] = useState(false)
    const [isHotDeal, setIsHotDeal] = useState(false)
    const [errorCreateGuitar, setErrorCreateGuitar] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const signUpHandler = (ev) => {
        ev.preventDefault()
        if (enteredEmail.trim().length === 0 ||
            enteredPassword.trim().length === 0 ||
            enteredConfirmPasswod.trim().length === 0) {
            setErrorMsg("All fields required")
            return
        }

        if (!enteredEmail.includes("@")) {
            setErrorMsg("Invalid email address")
            return
        }

        if (enteredPassword !== enteredConfirmPasswod) {
            setErrorMsg("Passwords dont match")
            return
        }

        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${webAPIkey}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json()
                } else {
                    return response.json().then(data => {
                        let errorMessage = "Register failed"
                        throw new Error(errorMessage)
                    })
                }
            })
            .then(data => {
                const myToken = data.idToken;
                dispatch(authActions.login(myToken))
            })
    }

    const signInHandler = (ev) => {
        ev.preventDefault()

        if (enteredSingnInEmail.trim().length === 0 ||
            enteredSignInPassword.trim().length === 0) {
            setErrorMsgSignIn("All fields required")
            return
        }

        if (!enteredSingnInEmail.includes("@")) {
            setErrorMsgSignIn("Invalid email address")
            return
        }
        setIsLoading(true)
        fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${webAPIkey}`, {
            method: "POST",
            header: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                email: enteredSingnInEmail,
                password: enteredSignInPassword,
                returnSecureToken: true
            })

        }).then(response => {
            setIsLoading(false)
            if (response.ok) {
                return response.json()
            } else {
                return response.json().then(data => {
                    let errorMessage = "Authentication failed";
                    throw new Error(errorMessage)
                })
            }
        }).then(data => {
            const myToken = data.idToken
            dispatch(authActions.login(myToken))
        }
        )
    }

    const { data: guitarListInAdmin, refetch } = useQuery(GET_ALL_GUITARS)
    const [deleteGuitar] = useMutation(DELETE_GUITAR)
    const [updatePrice] = useMutation(UPDATE_GUITAR_PRICE)
    const [toggleAvailability] = useMutation(TOGGLE_AVAILABILITY)
    const [toggleHotDeal] = useMutation(TOGGLE_HOT_DEAL)
    const [createGuitar] = useMutation(CREATE_GUITAR)


    return <><div className='formWrapper'>
        {/* FOR ANOTHER ADMIN ACOUNT: */}
        {/* <form onSubmit={signUpHandler} className="form">
            <div>
                <label>Email</label>
                <input type="email" onChange={(ev) => setEnteredEmail(ev.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(ev) => setEnteredPassword(ev.target.value)} />
            </div>
            <div>
                <label>Confirm password</label>
                <input type="password" onChange={(ev) => setEnteredConfirmPassword(ev.target.value)} />
            </div>
            <button>Sign up</button>
        <p className="formErrorMsg">{errorMsg}</p>
        </form> */}

        {!token && <form onSubmit={signInHandler} className="form">
            <div>
                <label>Email</label>
                <input type="email" onChange={(ev) => setEnteredSignInEmail(ev.target.value)} />
            </div>
            <div>
                <label>Password</label>
                <input type="password" onChange={(ev) => setEnteredSignInPassword(ev.target.value)} />
            </div>

            <button>Login</button>
            <p className="formErrorMsg">{errorMsgSignIn}</p>
        </form>}
           <div className="loadingSpinnerWrapper">
           {isLoading && <LoadingSpinner/>}
           </div>
    </div>
        <div className="adminPanelWrapper">
            {token && <div className="adminPanel" >
                <h2 className="panelTitle">Administration panel</h2>
                <div className="panelSections">
                    <button onClick={() => {
                        setCreateSection(false)
                        setDeleteUpdateSection(true)
                    }}>Update / Delete</button>
                    <button onClick={() => {
                        setDeleteUpdateSection(false)
                        setCreateSection(true)
                    }}>Create</button>
                </div>
                <div className="adminMsg">

                    {adminMsg && <h4>{adminMsg}</h4>}
                </div>
                {deleteUpdateSection && <table>
                    <tr>
                        <th>ID</th>
                        <th>Model</th>
                        <th>Price</th>
                        <th>Actions</th>
                        <th>Available</th>
                        <th>Hot Deal</th>
                    </tr>
                    {guitarListInAdmin && guitarListInAdmin.guitars && guitarListInAdmin.guitars.map(guitar => {
                        return <tr key={guitar.id} className="guitarPanelEntry">
                            <td>{guitar.id}</td>
                            <td>{guitar.model}</td>
                            <td>{guitar.price}</td>
                            <td className="actionTd">
                                <input type="text" placeholder="new price" onChange={ev => setNewPrice(ev.target.value)} />
                                <button id="updateBtn" onClick={() => {
                                    setAdminMsg("")
                                    if (!newPrice || newPrice <= 0) {
                                        setAdminMsg("Invalid new price")
                                        return
                                    }
                                    updatePrice({
                                        variables: {
                                            updatePriceId: guitar.id,
                                            newPrice: Number(newPrice)
                                        }
                                    })
                                    refetch()
                                }}>New Price</button>
                                <button id="deleteBtn" onClick={() => {
                                    setAdminMsg("")

                                    deleteGuitar({
                                        variables: {
                                            deleteGuitarId: guitar.id
                                        }
                                    })
                                    refetch()
                                    setAdminMsg(`You removed entry with ID = ${guitar.id}`)
                                }}>Delete</button>
                            </td>
                            <td>
                                <button className="isAvailableBtn"
                                    onClick={() => {
                                        toggleAvailability({
                                            variables: {
                                                updateAvailabilityId: guitar.id
                                            }
                                        })
                                        refetch()
                                    }}
                                    className={guitar.isAvailable ? "green" : "red"}>
                                    {guitar.isAvailable ? "YES" : "NO"}
                                </button>
                            </td>


                            <td>
                                <button
                                    onClick={() => {
                                        toggleHotDeal({
                                            variables: {
                                                updateHotDealId: guitar.id
                                            }
                                        })
                                        refetch()
                                    }}
                                    className={guitar.isHotDeal ? "green" : "red"}>
                                    {guitar.isHotDeal ? "YES" : "NO"}
                                </button>
                            </td>
                        </tr>
                    })}
                </table>}

{/* CREATING A GUITAR */}

                {
                    createSection &&
                    <div className="creationFormWrapper">
                        <div className="creationForm">
                            <div>
                                <label>Brand : </label>
                                <input type="text" onChange={(ev) => setEnteredBrand(ev.target.value)} />
                            </div>
                            <div>
                                <label>Model : </label>
                                <input type="text" onChange={(ev) => setEnteredModel(ev.target.value)} />
                            </div>
                            <div>
                                <label>Slug : </label>
                                <input type="text" onChange={(ev) => setEnteredSlug(ev.target.value)} />
                            </div>
                            <div>
                                <label>Color : </label>
                                <select name="" id="" onChange={(ev) => setEnteredColor(ev.target.value.toUpperCase())} >
                                    <option value=""></option>
                                    <option value="black">BLACK</option>
                                    <option value="white">WHITE</option>
                                    <option value="wood">WOOD</option>
                                    <option value="red">RED</option>
                                    <option value="green">GREEN</option>
                                    <option value="blue">BLUE</option>
                                </select>
                               

                            </div>
                            <div>
                                <label>Description : </label>
                                <textarea onChange={(ev) => setEnteredDescription(ev.target.value)} cols="20" rows="8"></textarea>

                            </div>
                            <div>
                                <label>Is Available : </label>
                                <input type="checkbox" onChange={(ev) => {
                                    if (ev.target.value === "on") {
                                        setIsAvailable(true)
                                    }
                                }} />
                            </div>
                            <div>
                                <label>Is Hot deal : </label>
                                <input type="checkbox" onChange={(ev) => {
                                    if (ev.target.value === "on") {
                                        setIsHotDeal(true)
                                    }
                                }} />
                            </div>
                            <div>
                                <label>Price : </label>
                                <input min="0" type="number" onChange={(ev) => setEnteredPrice(Number(ev.target.value))} />
                            </div>
                            <div>
                                <label>Image : </label>
                                <input type="text" onChange={(ev) => setEnteredImage(ev.target.value)} />
                            </div>
                            {/* <button onClick={()=>console.log(
                                enteredBrand, 
                                enteredModel, 
                                enteredSlug,
                                enteredColor,
                                enteredDescription,
                                isAvailable, 
                                isHotDeal, 
                                enteredPrice,
                                enteredImage,
                                
                                )}>check</button> */}
                            <div>
                                <button id="createGuitarBtn" onClick={() => {
                                    if (!enteredBrand, !enteredModel,
                                        !enteredColor, !enteredSlug,
                                        !enteredDescription, !enteredPrice, !enteredDescription) {
                                        setErrorCreateGuitar("All fields are required.")
                                        return
                                    }
                                    if (enteredPrice <= 0) {
                                        setErrorCreateGuitar("Invalid price value")
                                    }
                                    createGuitar({
                                        variables: {
                                            input: {
                                                brand: enteredBrand,
                                                model: enteredModel,
                                                color: enteredColor,
                                                slug: enteredSlug,
                                                description: enteredDescription,
                                                price: enteredPrice,
                                                image: enteredImage,
                                                isAvailable: isAvailable,
                                                isHotDeal: isHotDeal
                                            }
                                        }
                                    })
                                    refetch()
                                    history.replace('') 
                                }}>Create Guitar</button>
                            </div>
                            <div className="errorCreateGuitar">
                                {errorCreateGuitar && <p>{errorCreateGuitar}</p>}
                            </div>
                        </div>
                    </div>
                }
            </div>}
        </div>
        {deleteUpdateSection  && <ScrollUp/>}
    </>
}

export default Admin;