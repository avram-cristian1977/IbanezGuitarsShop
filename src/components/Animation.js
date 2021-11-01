import './Animation.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Animation = () => {

    useEffect(() => {
        axios.get('https://freecurrencyapi.net/api/v2/latest?apikey=86af7f20-3666-11ec-a4c8-1f589826ceba')
            .then(data => setPriceRon(data.data.data.RON))

    }, [])



    const [priceRON, setPriceRon] = useState(0)


    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    
    today = dd + '-' + mm + '-' + yyyy;

    return <div id="scroll-container">
              <div id="scroll-text">{`Today, ${today} 1$ = ${priceRON}. Check out our daily discounts of the best guitars manufacturer in the world. Ibanez (アイバニーズ, Aibanīzu) is a Japanese guitar brand owned by Hoshino Gakki.`}</div>
             </div>
}
 
export default Animation;