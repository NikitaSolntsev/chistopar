import React from 'react';
import {Link, useParams} from 'react-router-dom';
import axios from 'axios';

function Specialist(){

  const { id } = useParams();

  const [specialist, setSpecialist] = React.useState([]);

  React.useEffect(() => {
    axios.get('https://chistopar.trendtalk.online/api/specialists/'+id).then( ( {data} ) => {
      setSpecialist(data.specialist);
    } )
  }, []);

	return (
    <div className="Specialist">
      <div className="main-content">
        <div className="main-screen">
          <div className="container">
            <nav className="breadcrumb breadcrumb-gray">
              <a href="#">Чистопар</a>&nbsp;/&nbsp;
              <a href="#">Специалисты</a>&nbsp;/&nbsp;
              Иванов Иван Иванович
            </nav>
            <div className="specialist-main mt-4">
              <div className="row">
                <div className="col-md-4">
                  <div className="specialist__avatar">
                    <div className="img-rect">
                      <img src="assets/img/photo.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="wrapper pl-lg-4">
                    <h1 className="specialist__name">
                      {specialist.name}
                    </h1>
                    <div className="row align-items-center justify-content-between">
                      <div className="col-auto">
                        <div className="review">
                          <div className="review-tag">
                            <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                            <span>4.3</span>
                          </div>
                          <div className="review-count">
                            12 отзывов
                          </div> 
                        </div>
                      </div>
                      <div className="col-auto">
                        <div className="d-flex align-items-center">
                          <div className="wishlist mr-2 bg-white">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.99961 11.6998L3.59961 17.0998V1.7998H14.3996V17.0998L8.99961 11.6998Z" stroke="#DCDCDC" stroke-width="2" stroke-linejoin="round"/></g><defs><clipPath id="clip0_1623_7630"><rect width="18" height="18" fill="white"/></clipPath></defs></svg>
                          </div>
                          <div className="download bg-white">
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 11V17H16V11" stroke="#DCDCDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M9 13V3" stroke="#DCDCDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M5 5L9 1L13 5" stroke="#DCDCDC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          </div>
                        </div>
                      </div>  
                    </div>
                    
                    <div className="line my-4"></div>
                    <div className="row">
                      <div className="col-lg-8">
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
                          <div className="item">
                            <div className="left">
                              О себе
                              <div className="dots"></div>
                            </div>
                            <div className="right">
                              Отделочник-универсал с опытом работ более 15 лет без вредных привычек. На все виды работ гарантия. Всегда помогу клиенту с подбором материала с дизайном.21
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="fs-14 text-gray mb-12">Банный комплекс</div>
                        <div className="specialist-bath">
                          <div className="specialist-bath__logo">
                            <img src="" alt="" />
                          </div>
                          <div className="specialist-bath__name ml-lg-3 fw-700">Nordic Spa</div>
                        </div>
                        <div className="wrapper">
                          <a href="#" className="btn btn-dark w-100 px-0">Записаться</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
          <div className="bg">
            <svg width="1920" height="631" viewBox="0 0 1920 631" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 607.859V0.5H1923V629.59C1847.67 607.514 1412.5 605.738 1210.5 615.888C812.607 635.88 236.546 638.738 0 607.859Z" fill="#F8F8F8"/></svg>
          </div>
        </div>
        <div className="common_block">
          <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <h2 className="common_title">Услуги специалиста</h2>
                <div className="specialist__service-list">
                  <div className="item-service">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="title">
                          Парение со льдом
                        </div>
                        <div className="des">
                          Лед кладется под лицо, протирание тела льдом
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="time">
                              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9925 2C4.8525 2 1.5 5.36 1.5 9.5C1.5 13.64 4.8525 17 8.9925 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 8.9925 2ZM9 15.5C5.685 15.5 3 12.815 3 9.5C3 6.185 5.685 3.5 9 3.5C12.315 3.5 15 6.185 15 9.5C15 12.815 12.315 15.5 9 15.5Z" fill="#434343"/><path d="M9.375 5.75H8.25V10.25L12.1875 12.6125L12.75 11.69L9.375 9.6875V5.75Z" fill="#434343"/></svg>
                              <span>30 мин</span>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="price">
                              1 400 ₽
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-service">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="title">
                          Парение со льдом
                        </div>
                        <div className="des">
                          Лед кладется под лицо, протирание тела льдом
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="time">
                              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9925 2C4.8525 2 1.5 5.36 1.5 9.5C1.5 13.64 4.8525 17 8.9925 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 8.9925 2ZM9 15.5C5.685 15.5 3 12.815 3 9.5C3 6.185 5.685 3.5 9 3.5C12.315 3.5 15 6.185 15 9.5C15 12.815 12.315 15.5 9 15.5Z" fill="#434343"/><path d="M9.375 5.75H8.25V10.25L12.1875 12.6125L12.75 11.69L9.375 9.6875V5.75Z" fill="#434343"/></svg>
                              <span>30 мин</span>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="price">
                              1 400 ₽
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="item-service">
                    <div className="row">
                      <div className="col-md-7">
                        <div className="title">
                          Парение со льдом
                        </div>
                        <div className="des">
                          Лед кладется под лицо, протирание тела льдом
                        </div>
                      </div>
                      <div className="col-md-5">
                        <div className="row">
                          <div className="col-md-7">
                            <div className="time">
                              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.9925 2C4.8525 2 1.5 5.36 1.5 9.5C1.5 13.64 4.8525 17 8.9925 17C13.14 17 16.5 13.64 16.5 9.5C16.5 5.36 13.14 2 8.9925 2ZM9 15.5C5.685 15.5 3 12.815 3 9.5C3 6.185 5.685 3.5 9 3.5C12.315 3.5 15 6.185 15 9.5C15 12.815 12.315 15.5 9 15.5Z" fill="#434343"/><path d="M9.375 5.75H8.25V10.25L12.1875 12.6125L12.75 11.69L9.375 9.6875V5.75Z" fill="#434343"/></svg>
                              <span>30 мин</span>
                            </div>
                          </div>
                          <div className="col-md-5">
                            <div className="price">
                              1 400 ₽
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="common_block">
          <div className="container">
            <div className="row">
              <div className="col-lg-4"></div>
              <div className="col-lg-8">
                <h2 className="common_title">Отзывы посетителей</h2>
                <div className="review-list">
                  <div className="row align-items-center justify-content-between review-list__top">
                    <div className="col-lg-auto">
                      <div className="review review-big">
                        <div className="review-tag">
                          <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                          <span>4.3</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-auto">
                      <div className="wrapper">
                        <a href="#" className="btn btn-dark">Оставить отзыв</a>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-between align-items-center">
                    <div className="col-auto">
                      <div className="review-count text-gray">
                        12 отзывов
                      </div> 
                    </div>
                    <div className="col-auto">
                      <div className="catalog-sort">
                              <div className="catalog-sort-label">
                                <span>По умолчанию</span>
                                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13 11.5L8 6.5L3 11.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                              </div>
                              <div className="catalog-sort-popup">
                                <ul className="catalog-sort-popup-container">
                                  <li className="active"><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>По умолчанию</li>
                                  <li><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Цена по убыванию</li>
                                  <li><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Цена по возрастанию</li>
                                  <li><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Рейтинг по убыванию</li>
                                  <li><svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.99988 8.26471L6.23529 12.5L14 4.5" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>Рейтинг по возрастанию</li>
                                </ul>
                              </div>
                            </div>
                    </div>
                  </div>
                  <div className="review-list__items">
                    <div className="review-item">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="name">
                            Екатерина
                          </div>
                          <div className="date">
                            23 мая 2021
                          </div>
                          <div className="rating">
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="review-text">
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Достоинства
                              </div>
                              <div className="review-text__main">
                                Противоречивые получились впечатления о данном месте.
                                Из плюсов:<br />
                                1) потрясающая локация;<br />
                                2) отличный современный дизайн;<br />
                                3) сама идея спа на природе в таком месте супер;<br />
                              </div>
                            </div>
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Недостатки
                              </div>
                              <div className="review-text__main">
                                Из минусов:<br />
                                1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;
                              </div>
                            </div>
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Комментарий
                              </div>
                              <div className="review-text__main">
                                Из минусов:<br />
                                1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                    <div className="review-item">
                      <div className="row">
                        <div className="col-md-3">
                          <div className="name">
                            Екатерина
                          </div>
                          <div className="date">
                            23 мая 2021
                          </div>
                          <div className="rating">
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                            <svg className="star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>
                          </div>
                        </div>
                        <div className="col-md-9">
                          <div className="review-text">
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Достоинства
                              </div>
                              <div className="review-text__main">
                                Противоречивые получились впечатления о данном месте.
                                Из плюсов:<br />
                                1) потрясающая локация;<br />
                                2) отличный современный дизайн;<br />
                                3) сама идея спа на природе в таком месте супер;<br />
                              </div>
                            </div>
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Недостатки
                              </div>
                              <div className="review-text__main">
                                Из минусов:<br />
                                1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;
                              </div>
                            </div>
                            <div className="review-text__selection">
                              <div className="review_text__label">
                                Комментарий
                              </div>
                              <div className="review-text__main">
                                Из минусов:<br />
                                1) между слотами для записи нет перерывов. Было заплачено за два часа посещения. И это время не только для отдыха, но и для всех приготовлений и сборов;
                              </div>
                            </div>
                          </div>
                          
                        </div>
                      </div>
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
	);
}

export default Specialist;