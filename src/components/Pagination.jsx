import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function Pagination( {props} ){

  const dispatch = useDispatch();

  const links = props.links;

  const changePage = (page) => {
    dispatch({type: props.actions.CHANGE_PAGE, page: Number(page) });
  }

  const nextPage = () => {
    dispatch({type: props.actions.NEXT_PAGE, page: 1 });
  }

  const prevPage = () => {
    dispatch({type: props.actions.PREV_PAGE, page: 1 });
  }

  function getLinkPagintaion( item, index ){

    if ( item.label == '&laquo; Previous' ){

      if ( props.current_page != 1 ){

        return (<li><a 
          href={`#page=${props.current_page-1}`} 
          onClick={ () => prevPage() }
          className="item item-prev"
          key={`${item.id}_${item.label}`}
        ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 3L5 8L10 13" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>);

      }

    }else if( item.label == 'Next &raquo;' ){

      if ( props.current_page != props.last_page ){

        return (<li><a
          href={`#page=${props.current_page+1}`}
          onClick={ () => nextPage() }
          className="item item-next"
          key={`${item.id}_${item.label}`}
        ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 13L11 8L6 3" stroke="black" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg></a></li>);

      }
    
    }else if (item.label == '...'){

      return (<li><a 
        href="#" 
        className="item item-dots"
        key={`${item.id}_${item.label}`}
        >...</a></li>);

    }else{

      return (<li><a
        href={`#page=${item.label}`}
        onClick={ () => changePage(item.label) }
        className={ `item ${ Number(item.label) == props.current_page ? 'current' : '' } ` }
        key={`${item.id}_${item.label}`}
      >{item.label}</a></li>);

    }

  }

	return(
		<div className="pagination">
      
      <ul className="pagination-container">
        {

          links && links.map( (item, index) => (

            getLinkPagintaion(item, index)

          ) )

        }
      </ul>

    </div>
	);
}

export default Pagination;