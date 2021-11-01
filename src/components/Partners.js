import './Partners.css'
import diMarzio from '../assets/images/partners/dimarzio.jpg'
import dunlop from '../assets/images/partners/dunlop.png'
import elixir from '../assets/images/partners/elixir.png'
import fractal from '../assets/images/partners/fractal.png'
import marshall from '../assets/images/partners/marshall.jpg'




const Partners = () => {
    return <div className="partnersWrapper">
   
        <h3 className="ourPartnersTxt">Our partners</h3>
    <div className="partnerImgWrapper">
        <img src={diMarzio} alt="diMarzio" />
    </div>
    <div className="partnerImgWrapper">
        <img src={dunlop} alt="dunlop" />
    </div>
    <div className="partnerImgWrapper">
        <img src={elixir} alt="elixir" />
    </div>
    <div className="partnerImgWrapper">
        <img src={fractal} alt="fractal" />
    </div>
    <div className="partnerImgWrapper">
        <img src={marshall} alt="marshall" />
    </div>
    </div>
}

export default Partners;