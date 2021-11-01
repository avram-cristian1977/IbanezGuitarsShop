
import HotDeals from '../components/HotDeals'
import Partners from '../components/Partners'
import Categories from '../components/Categories'
import "./Homepage.css"
import AllGuitars from '../components/Allguitars'
import Animation from '../components/Animation'
import ScrollUp from '../components/ScrollUp'
import Artists from '../components/Artists'


const Homepage = () => {


    return <div >
        <Animation />
        <Artists/>
        <div className="homepageSections">
            <Partners />
            <Categories />
            <HotDeals />
        </div>
        <hr className="hrstyle" />
        <AllGuitars />
        <ScrollUp/>
    </div>

}

export default Homepage;