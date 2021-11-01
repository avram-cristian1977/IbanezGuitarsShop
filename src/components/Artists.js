import './Artists.css'
import Carousel from 'react-elastic-carousel'
import EndorserCard from './EndorserCard'
import {guitarists} from '../assets/images/ibanezArtists/guitarists'


const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow:3 },
    { width: 1200, itemsToShow: 4 }
]

const Artists = () => {


    return <div>
        <h2 className="ourArtistTitle">Our artists</h2>
        <Carousel  
        breakPoints={breakPoints}
        showArrows={false}
        pagination={false}
        enableAutoPlay={true}
        >
         
          {guitarists.map(guitarist => {
                return  <div key={guitarist.id} style={{margin:"10px"}}>
                <EndorserCard   guitarist={guitarist}/>
          </div>
            })}
           </Carousel>
    </div>
}

export default Artists;