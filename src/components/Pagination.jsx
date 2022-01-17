import React from 'react';
import {Link} from 'react-router-dom';

function Pagination(){
	return(
		<div className="pagination">
      <ul className="pagination-container">
        <li><a href="#" className="item item-prev"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L5 8L10 13" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
        <li><a href="#" className="item current">1</a></li>
        <li><a href="#" className="item">2</a></li>
        <li><a href="#" className="item item-dots">...</a></li>
        <li><a href="#" className="item">8</a></li>
        <li><a href="#" className="item">9</a></li>
        <li><a href="#" className="item item-next"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 13L11 8L6 3" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>
      </ul>
    </div>
	);
}

export default Pagination;