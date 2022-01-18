import React from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from './Jumbotron.jsx';
import axios from 'axios';

import { BathBlock, Breadcrumb, Pagination, CatalogCategory, CatalogSort, NoResult, CatalogFilter } from '../../components';

function Baths(){

	const [resp, setResp] = React.useState([]);

	React.useEffect(() => {
		axios.post('https://chistopar.trendtalk.online/api/bath?page=1').then( ( {data} ) => {

			data.data.forEach( function(obj, i) {

				var _discount = (obj.price_phone/obj.price_online*100).toFixed(0) - 100;

				if (  _discount != 0 && _discount > 0 ){
					data.data[i].push({ discount : _discount }); 
				}

			} );

	    	setResp(data);
	    } )
	}, []);

	//Получаем банные комплексы
	const items = resp.data;

	//Получаем сколько всего банных комплексов
	const total = resp.total;

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
	            return 'банный комплекс'; 
	        }else{
	            return 'банных комплекса';
	        }
	    }else{
	        return 'банных комплексов'; 
	    }

	}

	return(
		<div className="Catalog">
			<div className="main-screen">

		        <div className="container">

		        	<Breadcrumb />

		        	<h1 className="header-title header-title-1">Банные комплексы в Москве</h1>

		        </div>

		    </div>
	    	<div className="catalog-container">
		        <div className="container">
		          <div className="row">
		            <div className="col-md-3">
		              
		              <CatalogFilter props={filter} />

		              <div className="mini-jumbotron">
		                <div className="content">
		                  <svg className="house" width="84" height="85" viewBox="0 0 84 85" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M79.3289 36.598C69.2068 25.3525 54.5396 10.5692 53.8792 9.14472L15.3075 16.041L10.3039 71.7689L65.2332 79.958L79.3289 36.598Z" fill="#DFA46D"/><g><path d="M42.687 23.0895C42.0565 25.9403 39.2462 27.7325 36.3955 27.102C35.4509 26.893 34.5072 27.4949 34.2983 28.4395L30.8636 27.6798C31.4941 24.829 34.3044 23.0367 37.1551 23.6673C38.0997 23.8762 39.0434 23.2743 39.2523 22.3298L42.687 23.0895ZM45.362 27.2838L33.3183 32.8702L33.9184 30.1568L30.4838 29.3971L29.3025 34.738L23.2806 37.5312L24.7546 40.7214L28.3491 39.0486L24.7861 55.1572L52.2635 61.2346L55.8265 45.126L58.3839 48.1415L61.062 45.8877L45.362 27.2838ZM47.1743 34.8901L40.4938 33.4125L44.4048 31.6115L47.1743 34.8901ZM35.2519 35.8558L50.914 39.3199L52.9691 41.756L52.6273 43.3016L32.0192 38.7435L32.3611 37.1979L35.2519 35.8558ZM51.8676 46.7363L51.1079 50.1709L30.4999 45.6128L31.2596 42.1782L51.8676 46.7363ZM28.9805 52.4822L29.7402 49.0475L50.3482 53.6056L49.5886 57.0403L28.9805 52.4822Z" fill="white"/></g><defs><clipPath id="clip0_1623_12775"><rect width="42.2122" height="42.2122" fill="white" transform="translate(25.8936 17.5737) rotate(12.4719)"/></clipPath></defs></svg>
		                  <div className="title">
		                    Предложить собственный банный комплекс для размещения
		                  </div>
		                  <div className="wrapper">
		                    <a href="#" className="btn btn-dark w-100 px-0">Оставить заявку</a>
		                  </div>
		                  
		                </div>
		                <svg className="bg" width="355" height="225" viewBox="0 0 355 225" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.51223 158.793C7.99381 144.204 -2.23102 12.5768 10.5024 8.0996C10.7681 1.0303 73.6535 1.03038 91.7213 3.74022C109.789 6.45007 204.5 5.86183 242.458 5.86098C266.668 5.86045 327.086 -4.18873 339.96 3.74025C348.5 8.99993 354.306 14.9188 354.306 28.3648C354.306 41.3529 356.953 175.061 350.5 213.693C346 229 203.752 224.082 169.48 224.082C149.82 224.082 15.6646 224.89 5.51223 218.764C-4.64013 212.637 2.5001 176.5 5.51223 158.793Z" fill="#CF9259"/></svg>
		              </div>
		            </div>
		            <div className="col-md-9">

		              <CatalogCategory items={['Русская баня', 'Финская сауна', 'Турецкий хаммам', 'Японская офуро']} />
		              
		              <div className="catalog-bar d-flex align-items-center justify-content-between">

		                <div className="catalog-counter">{total} {getRightEndingFound(total)}</div>

		                <CatalogSort items={[ 'По умолчанию', 'Цена по убыванию', 'Цена по возрастанию', 'Рейтинг по убыванию', 'Рейтинг по возрастанию']} />

		              </div>

		              <Jumbotron />

		              <div className="catalog-list">
			              {
					      	items && items.map( (obj) => <BathBlock key={obj.id} {...obj} />)
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

export default Baths;