import React from 'react';

import { CatalogSort } from './';

function ReviewsBlock( {props} ){

    const reviews = props.reviews;

    function getRightEndingFound( total ){

        if ( ( total < 5 ) && ( total != 0 ) ){
            if ( total == 1 ){
                return 'отзыв'; 
            }else{
                return 'отзыва';
            }
        }else{
            return 'отзывов'; 
        }

    }

    function getRatingCount( arr ){
        return arr.length
    }

     function getAverageReview( arr ){

        var sum_rating = 0;

        arr.map( (item, index) => {
            sum_rating += Number( item.rating );
        } );

        return String((sum_rating/(arr.length)).toFixed(1));    

    }


    function getRatingStars ( rating ){

        let stars = [];

        for (let i = 0; i < 5; i++) {

            if ( rating > i ){
                stars.push(<svg key={`${i}_${rating}`} className="star active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>);
            }else{
                stars.push(<svg  key={`${i}_${rating}`} className="star" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 12.216L12.944 15.2L11.632 9.576L16 5.792L10.248 5.304L8 0L5.752 5.304L0 5.792L4.368 9.576L3.056 15.2L8 12.216Z" fill="#E3E3E3"/></svg>);
            }

        }

        return (
            <div className="rating">
                { stars }
            </div>
        )

    }

	return (

		<div className="ReviewsBlock">
          <h2 className="common_title">Отзывы посетителей</h2>
          <div className="review-list">
            <div className="row align-items-center justify-content-between review-list__top">
              <div className="col-lg-auto">
                <div className="review review-big">
                  <div className="review-tag">
                    <svg width="14" height="15" viewBox="0 0 14 15" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M7 11.189L11.326 13.8L10.178 8.879L14 5.568L8.967 5.141L7 0.5L5.033 5.141L0 5.568L3.822 8.879L2.674 13.8L7 11.189Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1623_8617"><rect width="14" height="14" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>
                    <span>{ getAverageReview(reviews) }</span>
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
                  {getRatingCount(reviews)} {getRightEndingFound(getRatingCount(reviews))}
                </div> 
              </div>
              <div className="col-auto">

                <CatalogSort items={[ 'По умолчанию', 'По рейтингу', 'По дате создания']} />

              </div>
            </div>
            <div className="review-list__items">

                {
                    reviews && reviews.map( (item, index) => (

                        <div className="review-item" key={`${item.id}_${index}`}>
                            <div className="row">
                              <div className="col-md-3">
                                <div className="name">
                                  Екатерина
                                </div>
                                <div className="date">
                                  {item.created_at}
                                </div>
                                {
                                    item.rating && (
                                        getRatingStars( Number(item.rating) )
                                    )
                                }
                              </div>
                              <div className="col-md-9">
                                <div className="review-text">
                                    {
                                        item.advantage ? (

                                            <div className="review-text__selection">
                                                <div className="review_text__label">
                                                  Достоинства
                                                </div>
                                                <div className="review-text__main">
                                                  { item.advantage }
                                                </div>
                                            </div>

                                        ) : ''
                                    }
                                    {
                                        item.flaw ? (

                                            <div className="review-text__selection">
                                                <div className="review_text__label">
                                                  Недостатки
                                                </div>
                                                <div className="review-text__main">
                                                  { item.flaw }
                                                </div>
                                            </div>

                                        ) : ''
                                    }

                                </div>
                                
                              </div>
                            </div>
                          </div>

                    ) ) 
                }
                
            </div>
            
          </div>
        </div>

	);

}

export default ReviewsBlock;