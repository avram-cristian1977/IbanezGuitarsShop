
import './Pagination.css'

const Pagination = ({guitarsPerPage, totalGuitars, paginate}) => {

    const pageNumbers = []

    for(let i = 1 ; i <= Math.ceil(totalGuitars / guitarsPerPage) ; i++){
        pageNumbers.push(i)
    }
console.log(pageNumbers);
    return <nav className="paginationNavLinks">
        <ul>
            {pageNumbers.map(number => {
            return <li key={number}>
                    <a onClick = {()=>paginate(number)} href="#">{number}</a>
                </li>
            })}
        </ul>

    </nav>
}
 
export default Pagination;