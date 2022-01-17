import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumb( {items} ){
	return(
		<nav className="breadcrumb breadcrumb-gray">
        
            <a href="#">Чистопар</a>&nbsp;/&nbsp;
            <a href="#">Москва</a>&nbsp;/&nbsp;
            Банные комплексы
          
        </nav>
	);
}

export default Breadcrumb;