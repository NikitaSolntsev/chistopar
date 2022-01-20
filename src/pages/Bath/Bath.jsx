import React from 'react';
import {Link, useParams} from 'react-router-dom';
import './Bath.css';
import img from '../../assets/img/photo.jpg';
import axios from 'axios';

import { Breadcrumb, ReviewsBlock} from '../../components';

function Bath(){

	window.scroll(0, 0);

	function setupStandartPrice( price ){
    	return Number(price).toLocaleString();
	}

	const { id } = useParams();

	const [error, setError] = React.useState(null);
	const [isLoaded, setIsLoaded] = React.useState(false);

	const [bath, setBath] = React.useState([]);
	const [services, setServices] = React.useState([]);
	const [forms, setForms] = React.useState([]);
	// const [category, setCategory] = React.useState([]);

	const [reviews, setReviews] = React.useState(
	    {
	      reviews : [
	        {
	          id: '1',
	          specialist_id: '45',
	          user_id: '23',
	          advantage: 'Противоречивые получились впечатления о данном месте.<br />Из плюсов:<br />1) потрясающая локация;<br />2) отличный современный дизайн;<br />3) сама идея спа на природе в таком месте супер;<br />',
	          flaw: 'Из минусов:<br />1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;',
	          rating: '4',
	          created_at: '2020-05-18 09:28:24',
	        },
	        {
	          id: '2',
	          specialist_id: '22',
	          user_id: '23',
	          advantage: 'Противоречивые получились впечатления о данном месте.<br />Из плюсов:<br />1) потрясающая локация;<br />2) отличный современный дизайн;<br />3) сама идея спа на природе в таком месте супер;<br />',
	          flaw: 'Из минусов:<br />1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;',
	          rating: '3',
	          created_at: '2020-12-21 09:28:24',
	        },
	        {
	          id: '2',
	          specialist_id: '22',
	          user_id: '23',
	          advantage: 'Противоречивые получились впечатления о данном месте.<br />Из плюсов:<br />1) потрясающая локация;<br />2) отличный современный дизайн;<br />3) сама идея спа на природе в таком месте супер;<br />',
	          flaw: 'Из минусов:<br />1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;',
	          rating: '4',
	          created_at: '2021-07-02 10:28:24',
	        },
	      ]
	    }
	    
	  );
	// let value = JSON.parse('['+bath.media+']');
	// var mass = JSON.parse(bath.media);

	// console.log(bath.media);

	React.useEffect(() => {

		axios.get('https://chistopar.trendtalk.online/api/bath/'+id).then( ( {data} ) => {
	    	setBath(data.bath);
	    	setServices(data.services);
	    } );

	    axios.get('https://chistopar.trendtalk.online/api/format/'+id).then( ( {data} ) => {

	    	data.forEach( function(obj, i) {

				var _discount = (obj.price_phone/obj.price_online*100).toFixed(0) - 100;

				if (  _discount != 0 && _discount > 0 ){
					data[i].push({ discount : _discount }); 
				}

			} );

	    	setForms(data);
	    } );

	}, []);

	return (
		<div className="complex">
			<div className="container">
				<div className="row">
					<div className="col-md-9 complex-left pr-lg-4">
						<nav className="breadcrumb breadcrumb-gray">
							<a href="#">Чистопар</a>&nbsp;/&nbsp;
							<a href="#">Москва</a>&nbsp;/&nbsp;
							<a href="#">Банные комплексы</a>&nbsp;/&nbsp;
							Nordic Spa
						</nav>
						<ul className="complex__quickly-links">
							<li><a href="#how-to-get">Как добраться</a></li>
							<li><a href="#visit-format">Формат посещения</a></li>
							<li><a href="#specialists">Специалисты</a></li>
							<li><a href="#reviews">Отзывы посетителей</a></li>
							<li><a href="#specifications">Характеристики</a></li>
							<li><a href="#answers">Ответы на частые вопросы</a></li>
						</ul>
						<div className="complex__tiles">
							<div className="item-col">
								<div className="item__container">
									<svg className="icon" width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.3334 5.33341C21.3334 3.85341 22.5201 2.66675 24.0001 2.66675C25.4801 2.66675 26.6667 3.85341 26.6667 5.33341C26.6667 6.81342 25.4801 8.00008 24.0001 8.00008C22.5201 8.00008 21.3334 6.81342 21.3334 5.33341ZM26.6667 28.0001V21.3334H28.1467C29.0534 21.3334 29.6934 20.4401 29.4134 19.5734L26.6134 11.1601C26.2401 10.0667 25.2267 9.33342 24.0801 9.33342H23.9201C22.7734 9.33342 21.7467 10.0667 21.3867 11.1601L20.2401 14.6001C21.6801 15.4001 22.6667 16.9067 22.6667 18.6667V29.3334H25.3334C26.0667 29.3334 26.6667 28.7334 26.6667 28.0001ZM16.6667 15.3334C17.7734 15.3334 18.6667 14.4401 18.6667 13.3334C18.6667 12.2267 17.7734 11.3334 16.6667 11.3334C15.5601 11.3334 14.6667 12.2267 14.6667 13.3334C14.6667 14.4401 15.5601 15.3334 16.6667 15.3334ZM7.33342 8.00008C8.81342 8.00008 10.0001 6.81342 10.0001 5.33341C10.0001 3.85341 8.81342 2.66675 7.33342 2.66675C5.85341 2.66675 4.66675 3.85341 4.66675 5.33341C4.66675 6.81342 5.85341 8.00008 7.33342 8.00008ZM10.0001 28.0001V20.0001H10.6667C11.4001 20.0001 12.0001 19.4001 12.0001 18.6667V12.0001C12.0001 10.5334 10.8001 9.33342 9.33342 9.33342H5.33341C3.86675 9.33342 2.66675 10.5334 2.66675 12.0001V18.6667C2.66675 19.4001 3.26675 20.0001 4.00008 20.0001H4.66675V28.0001C4.66675 28.7334 5.26675 29.3334 6.00008 29.3334H8.66675C9.40008 29.3334 10.0001 28.7334 10.0001 28.0001ZM13.3334 18.6667V22.6667C13.3334 23.4001 13.9334 24.0001 14.6667 24.0001V28.0001C14.6667 28.7334 15.2667 29.3334 16.0001 29.3334H17.3334C18.0667 29.3334 18.6667 28.7334 18.6667 28.0001V24.0001C19.4001 24.0001 20.0001 23.4001 20.0001 22.6667V18.6667C20.0001 17.5734 19.0934 16.6667 18.0001 16.6667H15.3334C14.2401 16.6667 13.3334 17.5734 13.3334 18.6667Z" fill="#CF9259"/></svg>
									<div className="content">
										<div className="des">Для кого</div>
										<div className="title">Семейная</div>
									</div>
								</div>
							</div>
							<div className="item-col">
								<div className="item__container">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29.8534 16.2533C30.3067 15.6666 30.1867 14.8266 29.6001 14.3866L16.8001 4.61325C16.3201 4.25325 15.6534 4.25325 15.1867 4.61325L8.00007 10.1066V9.33325C8.00007 8.59992 7.40007 7.99992 6.66674 7.99992C5.9334 7.99992 5.3334 8.59992 5.3334 9.33325V12.1466L2.38674 14.3866C1.80007 14.8266 1.6934 15.6666 2.1334 16.2533C2.58674 16.8399 3.4134 16.9466 4.00007 16.5066L5.3334 15.4933V26.6666C5.3334 27.3999 5.9334 27.9999 6.66674 27.9999H14.6667V21.3333C14.6667 20.5999 15.2667 19.9999 16.0001 19.9999C16.7334 19.9999 17.3334 20.5999 17.3334 21.3333V27.9999H25.3334C26.0667 27.9999 26.6667 27.3999 26.6667 26.6666V15.4933L27.9867 16.5066C28.5734 16.9599 29.4134 16.8399 29.8534 16.2533ZM7.02674 6.66659C6.04007 6.66659 5.34674 5.59992 5.82674 4.73325C6.52007 3.49325 7.82674 2.66659 9.3334 2.66659C9.84007 2.66659 10.2934 2.37325 10.5201 1.95992C10.7201 1.54659 11.1867 1.33325 11.6401 1.33325C12.6267 1.33325 13.3201 2.39992 12.8401 3.26659C12.1467 4.50659 10.8401 5.33325 9.3334 5.33325C8.82674 5.33325 8.3734 5.62659 8.14674 6.03992C7.94674 6.45325 7.48007 6.66659 7.02674 6.66659Z" fill="#CF9259"/></svg>
									<div className="content">
										<div className="des">Тип бани</div>
										<div className="title">Номерная</div>
									</div>
								</div>
							</div>
							<div className="item-col">
								<div className="item__container">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M30.6667 10.6666V23.9999C30.6667 25.4666 29.4667 26.6666 28 26.6666H6.66671C5.93337 26.6666 5.33337 26.0666 5.33337 25.3333C5.33337 24.5999 5.93337 23.9999 6.66671 23.9999H28V10.6666C28 9.93325 28.6 9.33325 29.3334 9.33325C30.0667 9.33325 30.6667 9.93325 30.6667 10.6666ZM5.33337 21.3333C3.12004 21.3333 1.33337 19.5466 1.33337 17.3333V9.33325C1.33337 7.11992 3.12004 5.33325 5.33337 5.33325H21.3334C23.5467 5.33325 25.3334 7.11992 25.3334 9.33325V18.6666C25.3334 20.1333 24.1334 21.3333 22.6667 21.3333H5.33337ZM9.33337 13.3333C9.33337 15.5466 11.12 17.3333 13.3334 17.3333C15.5467 17.3333 17.3334 15.5466 17.3334 13.3333C17.3334 11.1199 15.5467 9.33325 13.3334 9.33325C11.12 9.33325 9.33337 11.1199 9.33337 13.3333Z" fill="#CF9259"/></svg>
									<div className="content">
										<div className="des">Оплата</div>
										<div className="title">Наличные</div>
									</div>
								</div>
							</div>
							<div className="item-col">
								<div className="item__container">
									<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16 2.66675C8.66663 2.66675 2.66663 8.66675 2.66663 16.0001C2.66663 23.3334 8.66663 29.3334 16 29.3334C23.3333 29.3334 29.3333 23.3334 29.3333 16.0001C29.3333 8.66675 23.3333 2.66675 16 2.66675ZM20.7333 21.0667L15.2933 17.7201C14.8933 17.4801 14.6533 17.0534 14.6533 16.5867V10.3334C14.6666 9.78675 15.12 9.33342 15.6666 9.33342C16.2133 9.33342 16.6666 9.78675 16.6666 10.3334V16.2667L21.7866 19.3467C22.2666 19.6401 22.4266 20.2667 22.1333 20.7467C21.84 21.2134 21.2133 21.3601 20.7333 21.0667Z" fill="#CF9259"/></svg>
									<div className="content">
										<div className="des">Режим работы</div>
										<div className="title">{bath.operation_mode}</div>
									</div>
								</div>
							</div>
						</div>
						<div className="complex__block">
							<h2 className="complex__title">О банном комплексе</h2>
							<div className="complex__paragraph">
								{bath.description}
							</div>
						</div>
						{
							bath.address && (

								<div className="complex__block" id="how-to-get">
									<h2 className="complex__title">Как добраться?</h2>
									<div className="d-flex">
										<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="#37A77F"/><path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="#37A77F"/></svg>
										<span className="ml-2">{bath.address}</span>
									</div>
								</div>

							)

						}
						
						{

							forms && (

								<div className="complex__block" id="visit-format">
									<h2 className="complex__title">Формат посещения</h2>

									<div className="complex__form-list">

									{

										forms && forms.map( (obj) => (

											<div className="item-form" key={obj.id} >
												<div className="card-preview item-form-col">
													<div className="card-preview-container">
														<div className="card-preview-tag card-preview-tag-orange">
															Популярно
														</div>
														<img src={img} />
													</div>
												</div>
												<div className="card-content item-form-col">
													<h2 className="name">{obj.name}</h2>
													<div className="tags">
														<div className="item">Русская баня</div>
													</div>
													<div className="des">
														{obj.description}
													</div>
												</div>
												<div className="card-main item-form-col">
													<div className="wrapper_top">
														<div className="mb-2 online">Онлайн</div>
														<div className="price">
															<div className="current-price">от {setupStandartPrice(obj.price_online)} ₽<span className="per">/ час</span></div>
															
															{
																obj.discount && (
																	<div className="discount">- {obj.discount}%</div>
																)
															}
															
														</div>
														<div className="other-price">
															По телефону — от {setupStandartPrice(obj.price_phone)} ₽
														</div>
													</div>
													<div className="wrapper_bottom">
														<div className="buttons mt-2">
															<a href="#" className="btn btn-dark btn-sm w-100">Забронировать</a>
														</div>
													</div>
												</div>
											</div>
											
											) 
										)

									}	

									</div>	
								</div>

							)


						}

						

						{
							services && (

								<div className="complex__block">
									<h2 className="complex__title">Услуги для посетителей</h2>
									<div className="complex__service-list">
										{ 
							                services && services.map( (service, index) => ( 
							                    <div className="item-service" key={`${service.name}_${index}`}>
													<div className="row">
														<div className="col-md-7">
															<div className="title">
																{service.name}
															</div>
															<div className="des">
																{service.description}
															</div>
														</div>
														<div className="col-md-5">
															<div className="row">
																<div className="col-md-7">
																	<div className="time">
																		<svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9925 2C4.8525 2 1.5 5.36 1.5 9.5C1.5 13.64 4.8525 17 8.9925 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 8.9925 2ZM9 15.5C5.685 15.5 3 12.815 3 9.5C3 6.185 5.685 3.5 9 3.5C12.315 3.5 15 6.185 15 9.5C15 12.815 12.315 15.5 9 15.5Z" fill="#434343"/><path d="M9.375 5.75H8.25V10.25L12.1875 12.6125L12.75 11.69L9.375 9.6875V5.75Z" fill="#434343"/></svg>
																		<span>{service.time} мин</span>
																	</div>
																</div>
																<div className="col-md-5">
																	<div className="price">
																		{setupStandartPrice(service.price)} ₽
																	</div>
																</div>
															</div>
														</div>
													</div>
												</div>
							                    )
							                ) 	
							            }
										
									</div>
								</div>

							)
						}

						<div className="complex__block" id="specialists">
							<h2 className="complex__title">Специалисты</h2>

							<div className="complex__specialists">
								
								<div className="item-card item-card-specialists">
									<div className="card-preview item-card-col">
										<div className="card-preview-container">
											<img src="assets/img/photo.jpg" />
										</div>
									</div>
									<div className="card-content item-card-col">
										<h2 className="name">Павел Стерликов</h2>
										<div className="review">
											<div className="review-tag">
												<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
												<span>4.3</span>
											</div>
											<div className="review-count">
												12 отзывов
											</div>
										</div>

										<div className="specifications">
											<div className="item">
												<div className="left">
													Специализация
													<div className="dots"></div>
												</div>
												<div className="right">
													Банный мастер
												</div>
											</div>
											<div className="item">
												<div className="left">
													Стаж
													<div className="dots"></div>
												</div>
												<div className="right">
													12 лет
												</div>
											</div>
											<div className="item">
												<div className="left">
													Баннный комплекс
													<div className="dots"></div>
												</div>
												<div className="right">
													Nordic Spa
												</div>
											</div>
										</div>
										<div className="tags">
											<div className="item">Парение со льдом</div>
											<div className="item">еще 12 услуг</div>
										</div>
									</div>
									<div className="card-main item-card-col">
										<div className="wrapper_top"></div>
										<div className="wrapper_bottom">
											<div className="wishlist">
												<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.99961 11.6998L3.59961 17.0998V1.7998H14.3996V17.0998L8.99961 11.6998Z" stroke="#DCDCDC" strokeWidth="2" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1623_7630"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
											</div>
											<div className="buttons mt-2">
												<a href="" className="btn btn-dark btn-sm w-100">Забронировать</a>
												<a href="" className="btn btn-green btn-sm w-100 mt-2">Подробнее</a>
											</div>
										</div>
									</div>
								</div>

							</div>

						</div>
						
						
						<div className="complex__block" id="specifications">
							<h2 className="complex__title">Характеристики</h2>
							<div className="row complex__props">
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Вместимость</h3>
										<ul>
											<li>До 10 человек</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Проживание на территории банного комплекса</h3>
										<ul>
											<li>Да</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Индивидуальная парная</h3>
										<ul>
											<li>Нет</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Тип парной</h3>
										<ul>
											<li>Русская электрокаменка</li>
											<li>Русская паровая</li>
											<li>Финская</li>
											<li>Хамам</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Аква зона</h3>
										<ul>
											<li>Бассейн 4х4</li>
											<li>Купели</li>
											<li>Чан</li>
											<li>Обливное устройство</li>
											<li>Фито-бочка</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Аква зона</h3>
										<ul>
											<li>Бассейн 4х4</li>
											<li>Купели</li>
											<li>Чан</li>
											<li>Обливное устройство</li>
											<li>Фито-бочка</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Аква зона</h3>
										<ul>
											<li>Бассейн 4х4</li>
											<li>Купели</li>
											<li>Чан</li>
											<li>Обливное устройство</li>
											<li>Фито-бочка</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Аква зона</h3>
										<ul>
											<li>Бассейн 4х4</li>
											<li>Купели</li>
											<li>Чан</li>
											<li>Обливное устройство</li>
											<li>Фито-бочка</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
						<div className="complex__block">
							<h2 className="complex__title">Технические характеристики</h2>
							<div className="row complex__props complex__props-2">
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Вместимость</h3>
										<ul>
											<li>До 10 человек</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Проживание на территории банного комплекса</h3>
										<ul>
											<li>Да</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Индивидуальная парная</h3>
										<ul>
											<li>Нет</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Тип парной</h3>
										<ul>
											<li>Русская электрокаменка</li>
											<li>Русская паровая</li>
											<li>Финская</li>
											<li>Хамам</li>
										</ul>
									</div>
								</div>
								<div className="col-md-3 col-6">
									<div className="item-prop">
										<h3 className="item-prop-title">Аква зона</h3>
										<ul>
											<li>Бассейн 4х4</li>
											<li>Купели</li>
											<li>Чан</li>
											<li>Обливное устройство</li>
											<li>Фито-бочка</li>
										</ul>
									</div>
								</div>
							</div>
						</div>

						<div className="complex__block">
							<div className="container">

								<ReviewsBlock props={reviews} /> 

							</div>
						</div>

						<div className="jumbotron jumbotron-green">
							<div className="row">
								<div className="col-md-6">
									<div className="jumbotron-title">
										Предложить собственный банный комплекс для размещения
									</div>
									<a href="#" className="btn btn-dark btn-lg-w mt-4">Оставить заявку</a>
								</div>
							</div>
							<svg className="bg-1" width="1124" height="220" viewBox="0 0 1124 220" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M457.737 64.2836L564.685 52C739.425 68.9631 1091.27 102.889 1100.74 102.889C1112.57 102.889 1100.74 165.624 1100.74 183.172C1100.74 197.21 654.246 177.322 431 165.624L457.737 64.2836Z" stroke="#2E9B74" strokeWidth="2"/>
								<path d="M645.611 202L601 310.867C623.743 334.578 671.591 382 681.039 382H1240L1219.01 260.988C1196.26 246.241 1148.41 216.747 1138.97 216.747C1127.16 216.747 865.609 202 841.554 202H645.611Z" stroke="#2E9B74" strokeWidth="2"/>
								<path d="M356.975 180C377.913 180 582.061 200.812 603 200.812L588.168 300H537.567C528.145 300 294.596 279.926 179 269.889V180H356.975Z" stroke="#2E9B74" strokeWidth="2"/>
								<path d="M1122 193.305V107L1628 128.905V230.981C1543.37 235.654 1372.56 245 1366.36 245C1360.16 245 1200.87 210.537 1122 193.305Z" stroke="#2E9B74" strokeWidth="2"/>
								<path d="M802 57.3219V-9L1495 -0.330472V92L1110.24 83.3305L802 57.3219Z" stroke="#2E9B74" strokeWidth="2"/>
							</svg>
						</div>
					</div>
					<div className="col-md-3 complex-right">
						<div className="complex__sidebar">
							<div className="row justify-content-between mb-3">
								<div className="col-auto">
									<div className="complex__sidebar__logo">
										{/*<img src="#" alt="" />*/}
									</div>
								</div>
								<div className="col-auto">
									<div className="d-flex align-items-center">
										<div className="wishlist mr-2">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.99961 11.6998L3.59961 17.0998V1.7998H14.3996V17.0998L8.99961 11.6998Z" stroke="#DCDCDC" strokeWidth="2" strokeLinejoin="round"/></g><defs><clipPath id="clip0_1623_7630"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
										</div>
										<div className="download">
											<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V17H16V11" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 13V3" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 5L9 1L13 5" stroke="#DCDCDC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
										</div>
									</div>
								</div>
							</div>
							<div className="title mb-2">
								{bath.name}
							</div>
							<div className="place mb-3">
								<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="#37A77F"/><path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="#37A77F"/></svg>
								<span>{bath.address}</span>
							</div>
							<div className="review">
								<div className="review-tag">
									<svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#FFFFFF"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
									<span>4.3</span>
								</div>
								<div className="review-count">
									12 отзывов
								</div>
							</div>
							<hr />
							<div className="price mb-4">от {setupStandartPrice(bath.price)} ₽</div>
							<div className="buttons">
								<a href="#" className="btn btn-dark w-100">Забронировать</a>
								<a href="#" className="btn btn-green w-100 mt-2">{bath.phone} • •</a>
							</div>
							<a href="#" className="telephone-me">
								<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.675 12.8167C15.65 12.8167 14.6583 12.65 13.7333 12.35C13.4417 12.25 13.1167 12.325 12.8917 12.55L11.5833 14.1917C9.225 13.0667 7.01667 10.9417 5.84167 8.5L7.46667 7.11667C7.69167 6.88333 7.75833 6.55833 7.66667 6.26667C7.35833 5.34167 7.2 4.35 7.2 3.325C7.2 2.875 6.825 2.5 6.375 2.5H3.49167C3.04167 2.5 2.5 2.7 2.5 3.325C2.5 11.0667 8.94167 17.5 16.675 17.5C17.2667 17.5 17.5 16.975 17.5 16.5167V13.6417C17.5 13.1917 17.125 12.8167 16.675 12.8167Z" fill="#37A77F"/></svg>
								Перезвоните мне
							</a>
						</div>
						<div className="info">
							<div>Всю информацию мы берем с сайта банного комплекса. Если нашли ошибку, напишите на почту</div>
							<a href="mailto:example@mail.ru" className="link-orange">example@mail.ru</a>
						</div>
					</div>
				</div>
			</div>
		</div>

	);
}

export default Bath;