import React from 'react';
import {Link} from 'react-router-dom';
import img_avatar from '../assets/img/specialist.jpg';

function SpecialistBlock( props ){

  function getRightEndingReviews( reviews ){
    if ( ( reviews < 5 ) && ( reviews != 0 ) ){
        if ( reviews == 1 ){
            return 'отзыв'; 
        }else{
            return 'отзыва';
        }
    }else{
        return 'отзывов'; 
    }
  }

  function setupStandartPrice( price ){
    return Number(price).toLocaleString();
  }

  const linkToPage = '/specialist/'+props.id;

	return (

		<div className="item-card item-card-specialists">
      <div className="card-preview item-card-col">
        <div className="card-preview-container">
          <img src={img_avatar} />
        </div>
      </div>
      <div className="card-content item-card-col">
        <h2 className="name">{props.name}</h2>
        <div className="review review-orange">
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
            <Link to={linkToPage} className="btn btn-green btn-sm w-100 mt-2">Подробнее</Link>
          </div>
        </div>
      </div>
    </div>

	);
}

export default SpecialistBlock;