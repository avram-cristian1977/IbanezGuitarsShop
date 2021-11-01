import './Guitar.css'



const Guitar = ({guitar, priceRON, guitarsImages}) => {


  
    
    return <div key={guitar.id} className="guitar-card">
    <div title="details" className="guitar-info">
        <div className="labelHole"></div>
        <p>IBANEZ {guitar.model}</p>
        <p>Price {guitar.price}$ / {(priceRON * guitar.price).toFixed()} RON</p>
    </div>
    <img src={guitarsImages[guitar.image]} alt="guitarImage" />
   
    <hr className="hrstyle" />
</div>
}
 
export default Guitar;