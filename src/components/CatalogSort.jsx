import React from 'react';

function CatalogSort( {items} ){

  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeItem, setActiveItem] = React.useState(0)
  const sortRef = React.useRef();
  const activeLabel = items[activeItem];

  const onSelectItem = (index) => {
    setActiveItem(index);
    setVisiblePopup(false);
  }

  const toggleVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  }

  const handleOutsideClick = (e) => {
    if ( !e.path.includes(sortRef.current) ) {
      setVisiblePopup(false);
    }
  }

  React.useEffect(() => {
    document.body.addEventListener('click', handleOutsideClick );
  }, [])

	return(
		<div className="catalog-sort" ref={ sortRef } >
      <div className={ `catalog-sort-label ${ visiblePopup ? 'active' : '' }`}onClick={ toggleVisiblePopup }>
        <span>{activeLabel}</span>
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11.5L8 6.5L3 11.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      </div>
      {visiblePopup && (
        <div className="catalog-sort-popup">
          <ul className="catalog-sort-popup-container">
            { 
              items && items.map( (name, index) => ( 
                <li className={activeItem === index ? 'active' : ''} onClick={ () => onSelectItem(index) }  key={`${name}_${index}`}  ><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>{name}</li>
                )
              ) 
            }
          </ul>
        </div>
      )}
      
    </div>
	);
}

export default CatalogSort;