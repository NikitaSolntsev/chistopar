import React from 'react';
import {Link} from 'react-router-dom';
import img from '../assets/img/photo.jpg';

function BathBlock( props ){

  const availableTags = [
    {
      'name' : 'Рекомендуем',
      'class' : 'card-preview-tag-green',
    }
  ]

  function getCurrentTag( index ){
    return availableTags[index-1];
  }

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

  const linkToPage = '/bath/'+props.id;

	return (

		<div className="item-card">
        <div className="card-preview item-card-col">
          <div className="card-preview-container">

            {
              props.tag && 
              <div className="card-preview-tag card-preview-tag-green">
                {getCurrentTag(props.tag).name}
              </div>
            }

           
            <img src={img} />
          </div>
        </div>
        <div className="card-content item-card-col">
          <h2 className="name">{props.name}</h2>
          <div className="place">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 2.5C7.0975 2.5 4.75 4.8475 4.75 7.75C4.75 11.6875 10 17.5 10 17.5C10 17.5 15.25 11.6875 15.25 7.75C15.25 4.8475 12.9025 2.5 10 2.5ZM6.25 7.75C6.25 5.68 7.93 4 10 4C12.07 4 13.75 5.68 13.75 7.75C13.75 9.91 11.59 13.1425 10 15.16C8.44 13.1575 6.25 9.8875 6.25 7.75Z" fill="#37A77F"/><path d="M10 9.625C11.0355 9.625 11.875 8.78553 11.875 7.75C11.875 6.71447 11.0355 5.875 10 5.875C8.96447 5.875 8.125 6.71447 8.125 7.75C8.125 8.78553 8.96447 9.625 10 9.625Z" fill="#37A77F"/></svg>
            <span>{props.address}</span>
          </div>
          <div className="review">
            {/*{
              props.rating && 
              <div className="review-tag">
                <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                <span>{props.rating}</span>
              </div>
            }
            
            {  
              props.reviews &&
              <div className="review-count">
                {props.reviews} {getRightEndingReviews(props.reviews)}
              </div>
            }*/}

            <div className="review-tag">
              <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
              <span>4.5</span>
            </div>
            <div className="review-count">
              12 {getRightEndingReviews(12)}
            </div>
            
          </div>
          <div className="tags">
            <div className="item">Семейная</div>
            <div className="item">Русская баня</div>
            <div className="item">Номерная</div>
            <div className="item">Оплата наличными</div>
          </div>
          
        </div>
        <div className="card-main item-card-col">
          <div className="wrapper_top">
            <div className="mb-2">Онлайн</div>
            <div className="price">

              <div className="current-price">от {setupStandartPrice(props.price)} ₽</div>
              {
                props.discount && (
                  <div className="discount">- {props.discount}%</div>
                )
              }
            </div>

            <div className="other-price">
              По телефону — от {setupStandartPrice(props.price+100)} ₽
            </div>
            
          </div>
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

export default BathBlock;