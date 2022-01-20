import React from 'react';
import {Link} from 'react-router-dom';

function Breadcrumb( {items} ){

    function getItemBreadcrumbs( breadcrumb ){

        if( breadcrumb.link != '' ){
            return ( <span key={`${breadcrumb.title}_${breadcrumb.id}`}><Link to={breadcrumb.link} >{breadcrumb.title}</Link>&nbsp;/&nbsp;</span>);
        }else{
            return ( <span key={`${breadcrumb.title}_${breadcrumb.id}`}>{breadcrumb.title}</span>);
        }
        
    }

	return(
		<nav className="breadcrumb breadcrumb-gray">

            {
                items && items.map( (breadcrumb) => (

                    getItemBreadcrumbs(breadcrumb)

                    )
                    
                ) 
            }

        </nav>
	);
}

export default Breadcrumb;