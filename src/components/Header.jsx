import React from 'react';
import {Link} from 'react-router-dom';
import logo from '../assets/img/logo_header.png';

function Header(){
	return (
		<header className="header_container d-lg-block d-none">
	        <div className="container container-xxl">
	          <div className="row align-items-center">
	            <div className="col-md-1 col-2">
	              <div className="logo header__logo">
	              	<Link to="/">
	              		<img src={logo} alt="Чистопар" />
	              	</Link>
	              </div>
	            </div>
	            <div className="col-md-5">
	              <ul className="menu header__menu">
	                <li className="menu__item menu__item--catalog">
	                  <Link to="baths">
	                  <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="18" height="18" transform="translate(0 0.5)" fill="white"/><path d="M2 3.5H16" stroke="#CF9259" strokeWidth="2" strokeLinecap="round"/><path d="M2 9.5H16" stroke="#CF9259" strokeWidth="2" strokeLinecap="round"/><path d="M2 15.5H16" stroke="#CF9259" strokeWidth="2" strokeLinecap="round"/>
	                  </svg>
	                  КАТАЛОГ БАНЬ
	                  </Link>
	                </li>
	                <li className="menu__item">
		                <Link to="specialists">
		                	Специалисты
		                </Link>
		            </li>
		            <li className="menu__item">
		                <Link to="articles">
		                	Банный вестник
		                </Link>
		            </li>
		            <li className="menu__item">
		                <Link to="about">
		                	О проекте
		                </Link>
		            </li>
	              </ul>
	            </div>
	            <div className="col-md-6">
	              <div className="row align-items-center">
	                <div className="col-md-7">
	                  <form className="search header__search">
	                    <button>
	                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12.4351 11.5629H11.7124L11.4563 11.3159C12.3528 10.273 12.8925 8.9191 12.8925 7.44625C12.8925 4.16209 10.2304 1.5 6.94625 1.5C3.66209 1.5 1 4.16209 1 7.44625C1 10.7304 3.66209 13.3925 6.94625 13.3925C8.4191 13.3925 9.77301 12.8528 10.8159 11.9563L11.0629 12.2124V12.9351L15.6369 17.5L17 16.1369L12.4351 11.5629ZM6.94625 11.5629C4.66838 11.5629 2.82962 9.72413 2.82962 7.44625C2.82962 5.16838 4.66838 3.32962 6.94625 3.32962C9.22413 3.32962 11.0629 5.16838 11.0629 7.44625C11.0629 9.72413 9.22413 11.5629 6.94625 11.5629Z" fill="#929292"/>
	                    </svg>
	                    </button>
	                    <input type="text" placeholder="Поиск по банным комплексам" />
	                  </form>
	                </div>
	                <div className="col-md-5">
	                  <div className="header__panel">
	                    <div className="place place_header d-flex align-items-center">
	                      <svg className="mr-2" width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M8.00008 0.944336C5.05151 0.944336 2.66675 3.30922 2.66675 6.23322C2.66675 10.1999 8.00008 16.0554 8.00008 16.0554C8.00008 16.0554 13.3334 10.1999 13.3334 6.23322C13.3334 3.30922 10.9487 0.944336 8.00008 0.944336ZM4.19056 6.23322C4.19056 4.14789 5.89722 2.45545 8.00008 2.45545C10.1029 2.45545 11.8096 4.14789 11.8096 6.23322C11.8096 8.40922 9.61532 11.6657 8.00008 13.6981C6.41532 11.6808 4.19056 8.38656 4.19056 6.23322Z" fill="#CF9259"/><path d="M7.99995 8.05556C8.98179 8.05556 9.77772 7.25962 9.77772 6.27778C9.77772 5.29594 8.98179 4.5 7.99995 4.5C7.01811 4.5 6.22217 5.29594 6.22217 6.27778C6.22217 7.25962 7.01811 8.05556 7.99995 8.05556Z" fill="#CF9259"/></g><defs><clipPath id="clip0_1610_14206"><rect width="16" height="16" fill="white" transform="translate(0 0.5)"/></clipPath></defs></svg>Красная поляна
	                    </div>
	                    <div className="header__buttons">
	                      <a href="" className="header__button header__button--wishlist">
	                        <span className="counter">1</span>
	                        <svg width="13" height="18" viewBox="0 0 13 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.5 11.3529L1 17V1H12V17L6.5 11.3529Z" stroke="#CF9259" strokeWidth="2" strokeLinejoin="round"/></svg>
	                      </a>
	                      <a href="" className="header__button header__button--user">
	                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
	                          <path d="M11.0001 5.19455C12.1765 5.19455 13.139 6.15705 13.139 7.33344C13.139 8.50983 12.1765 9.47233 11.0001 9.47233C9.82375 9.47233 8.86125 8.50983 8.86125 7.33344C8.86125 6.15705 9.82375 5.19455 11.0001 5.19455ZM11.0001 15.889C13.8876 15.889 17.2029 17.2686 17.4168 18.0279H4.58347C4.82944 17.2579 8.12333 15.889 11.0001 15.889ZM11.0001 3.05566C8.63666 3.05566 6.72236 4.96997 6.72236 7.33344C6.72236 9.69691 8.63666 11.6112 11.0001 11.6112C13.3636 11.6112 15.2779 9.69691 15.2779 7.33344C15.2779 4.96997 13.3636 3.05566 11.0001 3.05566ZM11.0001 13.7501C8.14472 13.7501 2.44458 15.1832 2.44458 18.0279V20.1668H19.5557V18.0279C19.5557 15.1832 13.8556 13.7501 11.0001 13.7501Z" fill="#CF9259"/>
	                        </svg>
	                      </a>
	                    </div>
	                  </div>
	                </div>
	              </div>
	            </div>
	          </div>
	        </div>
	    </header>
	);
}

export default Header;