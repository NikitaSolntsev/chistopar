import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { Breadcrumb, Pagination, CatalogCategory, CatalogSort, NoResult, SpecialistBlock, CatalogFilter } from '../../components';

function Specialists(){

	const [resp, setResp] = React.useState([]);

	React.useEffect(() => {
		axios.get('https://chistopar.trendtalk.online/api/specialists?page=1').then( ( {data} ) => {
	    	setResp(data);
	    } )
	}, []);

	//Получаем банные комплексы
	const items = resp.data;

	//Получаем сколько всего банных комплексов
	const total = resp.total;

	console.log(items);

	const filter = [
		{
			id : 0,
			name  : 'Вид отдыха',
			options : [
				{
					id : 0,
					name : 'Загородный',
					value : 'загородный',
				},
				{
					id : 1,
					name : 'Городской',
					value : 'городской',
				},
			]

		},
		{
			id : 1,
			name  : 'Тип парной',
			options : [
				{
					id : 0,
					name : 'Русская баня',
					value : 'русская баня',
				},
				{
					id : 1,
					name : 'Финская сауна',
					value : 'финская сауна',
				},
				{
					id : 2,
					name : 'Турецкий хамам',
					value : 'турецкий хамам',
				},
				{
					id : 3,
					name : 'Японское офуро',
					value : 'японское офуро',
				},

			]

		},
		{
			id : 3,
			name  : 'Заведение',
			options : [
				{
					id : 0,
					name : 'Загородный',
					value : 'загородный',
				},
				{
					id : 1,
					name : 'Городской',
					value : 'городской',
				},
			]

		},
	]

	function getRightEndingFound( total ){

	    if ( ( total < 5 ) && ( total != 0 ) ){
	        if ( total == 1 ){
	            return 'специалист'; 
	        }else{
	            return 'специалиста';
	        }
	    }else{
	        return 'специалистов'; 
	    }

	}

	return(
		<div className="Specialists">
			<div className="main-screen">

		        <div className="container">

		        	<Breadcrumb />

		        </div>

		    </div>
	    	
	    	<div className="catalog-container">
				<div className="container">
					<div className="row">
						<div className="col-md-3">
							
							<CatalogFilter props={filter} />

						</div>
						<div className="col-md-9">
							<h1 className="header-title header-title-2">Специалисты в <span>Москве</span></h1>
							<svg className="w-100 mt-4 mb-5" width="1127" height="15" viewBox="0 0 1127 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 10.2195C97.171 6.30039 280.789 5.2622 306.543 10.5004C338.5 17 455.903 11.6983 468.832 10.5003C511.775 6.52099 994.266 -8.99968 1126 10.2195" stroke="#EFEFEF" strokeLinecap="round"/></svg>
							<div className="catalog-bar d-flex align-items-center justify-content-between mt-0">
								<div className="catalog-counter">{total} {getRightEndingFound(total)}</div>
								
								<CatalogSort items={[ 'По умолчанию', 'Цена по убыванию', 'Цена по возрастанию', 'Рейтинг по убыванию', 'Рейтинг по возрастанию']} />

							</div>
							<div className="catalog-list">

								{
							      	items && items.map( (obj) => <SpecialistBlock key={obj.id} {...obj} />)
							    } 

							    {
							      	!items && (

							      		<NoResult />

							      	)
							    }
							    
							</div>

							<Pagination />

						</div>
					</div>
				</div>
			</div>


	    </div>

	);

}

export default Specialists;