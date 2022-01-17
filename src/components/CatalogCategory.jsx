import React from 'react';

function CatalogCategory( {items} ){

    const [activeItem, setActiveItem] = React.useState(null)

    const onSelectItem = (index) => {
        setActiveItem(index);
    }

	return(
		<div className="catalog-category">
            { 
                items && items.map( (name, index) => ( 
                    <div 
                        className={activeItem === index ? 'catalog-category-item active' : 'catalog-category-item'}
                        onClick={ () => onSelectItem(index) } 
                        key={`${name}_${index}`}
                        >{name}
                    </div>
                    )
                ) 
            }
            <div className="catalog-category-more">Ещё</div>
        </div>
	);
}

export default CatalogCategory;