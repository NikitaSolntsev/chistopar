import React from 'react';
import {Link} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

function CatalogFilter( { props } ){


  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);

  const [discard, setDiscard] = React.useState(0);
  const [activeFilters, setActiveFilters] = React.useState([]);


  const onFilterItem = (p_index, index) => {
    dispatch({type: 'ADD_CASH', payload: 5 });
  }

  const onFilterParent = (p_index, index) => {
     dispatch({type: 'GET_CASH', payload: 5 });
  }

	return (
    <div className="CatalogFilter">

      {
        discard ? (

            <div className="catalog-sidebar">
              <div className="discard-filter">
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.5 1L19.5 19" stroke="#B6B6B6" strokeWidth="2"/><path d="M1.5 19L19.5 0.999999" stroke="#B6B6B6" strokeWidth="2"/></g><defs><clipPath id="clip0_1614_221"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs></svg>
                Сбросить фильтр
              </div>
            </div>

          )  : ''
      }
 
      {
        props ? (

          <div className="catalog-filter">
            {

              props && props.map( (parent, p_index) => (

                <div className="filter-parent open" key={`${parent.name}_${parent.p_index}`}>
                  <div className="filter-parent-title" onClick={ () => onFilterParent(p_index) }>
                    <span>{parent.name}</span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11.5L8 6.5L3 11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </div>

                  <div className="filter-child">
                    {

                      parent.options ? (

                        parent.options.map( (item, index) => (

                          <div className="filter-item" onClick={ () => onFilterItem(p_index, index) } value={item.value}  key={`${item.name}_${item.index}`} >
                            <div className="checkbox">
                              <svg width="11" height="9" viewBox="0 0 11 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 5L3.5 7.5L9.5 1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                            </div>
                            { item.name }
                          </div>

                        ) )

                      ) : ''

                    }

                  </div>
                </div>

              ) ) 

            }
            
          </div>

        )  : ''
      }

      
    </div>
	);
}

export default CatalogFilter;