import { act } from "@testing-library/react"
import { useState } from "react"
export default function Pagination( props ){
    const{ numberOfItems, currentPage, perPage } = props
    const[activePage, setActivePage] = useState(1)
    const handleCLick = currentPage => () => {
        setActivePage(activePage)
    }

    const length = Math.ceil(numberOfItems/ perPage)
    const counters = Array.from({length: numberOfItems/perPage }, (el, index) =>{
        return <li key = {index} 
        className={`page-item${((activePage === index +1))  && 'active' || ''}`}>
        <a className="page-link" href="#" onClick= {handleCLick(index + 1)}> {index +1} </a></li>
    })
    return<>
        <nav aria-label="Page navigation example">
            <ul className="pagination">
                <li className={`page-item ${activePage <= 1 }`}><a className="page-link" href="#" onClick={handleCLick ( activePage - 1 || 1 )}>Previous</a></li>
                { counters }
                <li className="page-item">
                    <a className="page-link" href="#" onClick={handleCLick ( activePage + 1 > length ? length : (activePage + 1) )}>Next</a>
                </li>
            </ul>
        </nav>
    </> 
}