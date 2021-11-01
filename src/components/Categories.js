import { useQuery } from '@apollo/client';
import { GET_ALL_CATEGORIES } from '../queries/queries'
import guitarCategoriesImages from '../assets/images/categories/guitarsCategoriesImages'
import './Categories.css'
import {Link} from 'react-router-dom'



const Categories = () => {
    const { data: allCategories } = useQuery(GET_ALL_CATEGORIES)
    return <div className="guitars-categories">
        <h2 className="ourCategorisTxt">Our categories</h2>
      
           <div className="categories">
           {allCategories && allCategories.categories.map(category => {
                return <Link key={category.slug} to={`category/${category.id}`}>
                <div key={category.id}>
                    <div className="imageWrapper">
                        <h6 className="guitarCategoryTitle">{category.category}</h6>
                        <img src={guitarCategoriesImages[category.image]} alt="catImage" />
                    </div>
                </div>
                </Link>
            })}
           </div>
        </div>
    
}
 
export default Categories;