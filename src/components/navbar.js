import React from 'react';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import SearchIcon from '@material-ui/icons/Search';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';

function NavBar() {
    return (
        <>
            <div className='mobile-nav'>
                <div className='d-flex align-items-center'>
                    <div style={{"margin-right" : "15px"}}><ArrowBackIcon></ArrowBackIcon></div>
                    <div>
                        <svg class="header-logo-svg" viewBox="0 0 255 121" height="28" width="56"><path d="M112.4 9.2c1.1-2 3.6-6 .5-7.5-1.8-.9-4.2-1.4-6-.5a8.7 8.7 0 0 0-3.5 3.9L91.6 23.6c-1.9 2.7-3.7 6-7.6 6.4-2.6.3-4.4-.8-4.4-3.1s1.4-5.5 2.5-7.5c3-5.8 3.4-7.8 6.4-13.6C91.3.3 82-1 79.7 3 78 5.9 75 11.2 74.1 13c-1.3 3.3-11.1 19-6.9 25.2 5.6 7 20.2-4 12.7 8.7-6 10.3-9.8 16.2-15.1 25.7-1.1 2-2.6 4-3 6.4-.6 3.4 4.1 3.4 6.1 3.2 3.6-.2 5.3-1.9 6.7-5.1l2.6-5.5a368 368 0 0 1 23.4-42.8c4.4-7 8.2-12.9 11.8-19.6m-39-5C76-1.1 67.1.4 67.1.4c-3.2 0-4.6 3.9-5.3 5l-9.6 19c-1.9 3-7.8 16.5-9.8 19.5-.2-3 0-9.1.1-10.5.4-5.8.8-10 1.4-15.3.5-4 1.3-8.7.5-12.7-.5-2.6-1.4-2.7-5-3.1s-6.4 5-7.7 7.7C27.2 19.5 22 29 18 38.7L14 47.2c-1.5 3.4-2.9 6.8-4.5 10.1-1.7 3.5-7 15-8.5 18.7-1.6 4-2 7.1 4.6 7 1 0 3.4.2 6.2-2.9 2.3-2.4 2.7-4.6 4-8a781 781 0 0 1 13.3-31.4c.5-1.2 1.6-4.5 2.8-7.1 0 3.6-.7 8-1 11-.8 10.6-1.4 21-2.4 31.4 0 1.5-.5 3.2.2 4.5s2.3 1.7 3.6 1.8c5.3.7 5.9-2 7.5-5.6 1.5-3.2 2.4-5.9 3.7-9.1a491 491 0 0 1 13-30.1l3.8-7.5c2.4-4.5 4.4-8.8 7-13.9 2-3.7 3.9-7.8 6-11.8m141.5 30.9v.4l-9.4 1.7c3.4-8.7 6.9-19.3 9-24.7-.2 4 .6 18.5.4 22.5m-42.1 9.2a.1.1 0 0 1 0 .1l-18 4C158.4 42 175.3 18.6 178 16l-5.3 28.4m81.6-11.5c-.6-6.1-9-3-14-2.1L226 33.4l-.3-9.7c-.1-6-.5-10.7-.8-16-.2-3.4-.7-8-6.8-7.2-7 1-8.2 4.5-10 8.7l-10.3 23.4-2.8 6.9-1.2.3-8 1.8v-.3c.7-5.7 1.6-11.2 2.4-16.9.7-5 1.5-13.4 2-18.5.7-5.5-5.7-5.4-5.7-5.4-3.8-.2-5.4 1-7.8 4.1-4.2 5.5-9.3 11.4-13.8 17.5-8.2 10.9-14.2 19.2-21.6 30.1-2.2 3.2-5.5 8-8.3 11.8-2-3.8-3.6-8-5.2-11.8-2.3-5.5-4-8.9-5-12.5-1-3.2.1-3.6 2.5-5.4 6.8-5.2 14.5-8.8 21.4-13.7 5-3.5 11-7.4 15.7-11a16.8 16.8 0 0 0 4.4-3.8c2-2.6-3.5-5.3-3.5-5.3a10.6 10.6 0 0 0-7 1.2 42.7 42.7 0 0 0-6.9 4.7c-4 3.2-9.3 7-13.4 10.2a118.4 118.4 0 0 1-13.9 9.5l14-20.8c4.6-6-7.5-7.6-12.1-1.4-4.3 5.6-7.2 10.4-10.6 15.5-8.1 12-14.8 24.6-21.4 37.9-2.5 5-5 10.3-7.3 15.5-1.1 2.6-4.3 8.4.1 9C94.3 82.8 96 78.3 98 73c3.6-8.9 4.7-10.6 7-16.1a115.9 115.9 0 0 1 6.2-13c0-.2.8-1.3.8-1.3.5 1 3.3 10.6 3.7 11.7 2 5.2 5.5 17.4 7.4 23 1.5 4.5 1.9 5.8 8 5.7 3.1-.1 4.5-1.3 6.5-5.1l10.8-20.3 8.9-1.5 2.8-.5a16.5 16.5 0 0 0 2.3-.4l9-1.8-2.9 11.4s-4 15.8 1.2 16.6a11.7 11.7 0 0 0 5 0c6.2-.8 6.3-9 6.3-9l3.3-21.6 7.2-1.4-7.3 24.5c-1 3.5-1.8 8 4.4 7.9 5.1.3 5.4-3 5.4-3 .2-.4 4.1-13.3 5.1-18 .7-3 3-10.5 4-13.6l5.6-1 6-1v7.3c.6 8.7 0 17.7 1.7 26.2.3 1.4.9 3.2 2.6 3.2a45 45 0 0 0 5-.4c6.3-.5 5.1-7 4.7-11-.4-4.6-.8-8.4-1.5-12.9a114.2 114.2 0 0 1-.9-14.3l23.4-4c3-.5 5.1-.3 4.5-6.3M19.1 97.8H7v6.7h10v5H7v10H1.5V92.9H19zM46 116H35.1l-1.5 3.5h-5.9l12-27.2h1.8l11.9 27.2h-5.9zm-5.5-13.5l-3.5 9H44zm43.3-5.2l-3.7 2.9a6 6 0 0 0-5.1-3c-1.8 0-3.3.7-3.3 2.5 0 1.6 1.2 2.2 3.1 3l3 1.4c4.2 1.9 6.6 4 6.6 7.8 0 5-4 8-9.4 8a11.5 11.5 0 0 1-10.2-5.8l3.8-2.9c1.4 2 3.3 3.9 6.5 3.9 2.4 0 3.8-1 3.8-3s-1.3-2.3-3.4-3.3l-2.8-1.3c-3.8-1.8-6.5-4-6.5-7.7 0-4.6 3.8-7.6 8.8-7.6a9.7 9.7 0 0 1 8.8 5.1zm38 22.2h-5.5V108h-11.8v11.5H99V92.8h5.5v10.3h11.8V92.8h5.5zm21.3 0h-5.4V92.8h5.4zm42.8-13.4a14.2 14.2 0 1 1-14.6-13.8h.3A14 14 0 0 1 186 106a2 2 0 0 1 0 .2zm-22.8 0c0 5.2 3.6 8.8 8.6 8.8a8.8 8.8 0 1 0-8.6-9zM223 92.8v27.3h-1.8l-15.5-16.6v16h-5.5V92.4h1.8l15.5 16.4v-16z"></path></svg>
                    </div>
                </div>
                <div className='d-flex align-items-center'>
                    <div><SearchIcon /></div>
                    <div style={{"margin" : "0 25px"}}><FavoriteBorderOutlinedIcon /></div>

                    <div><LocalMallOutlinedIcon /></div>
                </div>
            </div>
            <nav class="navbar navbar-expand-lg ">
                <div className='nav'>
                    <a class="navbar-brand" href="#">
                        <svg class="header-logo-svg" viewBox="0 0 255 121" height="28" width="56"><path d="M112.4 9.2c1.1-2 3.6-6 .5-7.5-1.8-.9-4.2-1.4-6-.5a8.7 8.7 0 0 0-3.5 3.9L91.6 23.6c-1.9 2.7-3.7 6-7.6 6.4-2.6.3-4.4-.8-4.4-3.1s1.4-5.5 2.5-7.5c3-5.8 3.4-7.8 6.4-13.6C91.3.3 82-1 79.7 3 78 5.9 75 11.2 74.1 13c-1.3 3.3-11.1 19-6.9 25.2 5.6 7 20.2-4 12.7 8.7-6 10.3-9.8 16.2-15.1 25.7-1.1 2-2.6 4-3 6.4-.6 3.4 4.1 3.4 6.1 3.2 3.6-.2 5.3-1.9 6.7-5.1l2.6-5.5a368 368 0 0 1 23.4-42.8c4.4-7 8.2-12.9 11.8-19.6m-39-5C76-1.1 67.1.4 67.1.4c-3.2 0-4.6 3.9-5.3 5l-9.6 19c-1.9 3-7.8 16.5-9.8 19.5-.2-3 0-9.1.1-10.5.4-5.8.8-10 1.4-15.3.5-4 1.3-8.7.5-12.7-.5-2.6-1.4-2.7-5-3.1s-6.4 5-7.7 7.7C27.2 19.5 22 29 18 38.7L14 47.2c-1.5 3.4-2.9 6.8-4.5 10.1-1.7 3.5-7 15-8.5 18.7-1.6 4-2 7.1 4.6 7 1 0 3.4.2 6.2-2.9 2.3-2.4 2.7-4.6 4-8a781 781 0 0 1 13.3-31.4c.5-1.2 1.6-4.5 2.8-7.1 0 3.6-.7 8-1 11-.8 10.6-1.4 21-2.4 31.4 0 1.5-.5 3.2.2 4.5s2.3 1.7 3.6 1.8c5.3.7 5.9-2 7.5-5.6 1.5-3.2 2.4-5.9 3.7-9.1a491 491 0 0 1 13-30.1l3.8-7.5c2.4-4.5 4.4-8.8 7-13.9 2-3.7 3.9-7.8 6-11.8m141.5 30.9v.4l-9.4 1.7c3.4-8.7 6.9-19.3 9-24.7-.2 4 .6 18.5.4 22.5m-42.1 9.2a.1.1 0 0 1 0 .1l-18 4C158.4 42 175.3 18.6 178 16l-5.3 28.4m81.6-11.5c-.6-6.1-9-3-14-2.1L226 33.4l-.3-9.7c-.1-6-.5-10.7-.8-16-.2-3.4-.7-8-6.8-7.2-7 1-8.2 4.5-10 8.7l-10.3 23.4-2.8 6.9-1.2.3-8 1.8v-.3c.7-5.7 1.6-11.2 2.4-16.9.7-5 1.5-13.4 2-18.5.7-5.5-5.7-5.4-5.7-5.4-3.8-.2-5.4 1-7.8 4.1-4.2 5.5-9.3 11.4-13.8 17.5-8.2 10.9-14.2 19.2-21.6 30.1-2.2 3.2-5.5 8-8.3 11.8-2-3.8-3.6-8-5.2-11.8-2.3-5.5-4-8.9-5-12.5-1-3.2.1-3.6 2.5-5.4 6.8-5.2 14.5-8.8 21.4-13.7 5-3.5 11-7.4 15.7-11a16.8 16.8 0 0 0 4.4-3.8c2-2.6-3.5-5.3-3.5-5.3a10.6 10.6 0 0 0-7 1.2 42.7 42.7 0 0 0-6.9 4.7c-4 3.2-9.3 7-13.4 10.2a118.4 118.4 0 0 1-13.9 9.5l14-20.8c4.6-6-7.5-7.6-12.1-1.4-4.3 5.6-7.2 10.4-10.6 15.5-8.1 12-14.8 24.6-21.4 37.9-2.5 5-5 10.3-7.3 15.5-1.1 2.6-4.3 8.4.1 9C94.3 82.8 96 78.3 98 73c3.6-8.9 4.7-10.6 7-16.1a115.9 115.9 0 0 1 6.2-13c0-.2.8-1.3.8-1.3.5 1 3.3 10.6 3.7 11.7 2 5.2 5.5 17.4 7.4 23 1.5 4.5 1.9 5.8 8 5.7 3.1-.1 4.5-1.3 6.5-5.1l10.8-20.3 8.9-1.5 2.8-.5a16.5 16.5 0 0 0 2.3-.4l9-1.8-2.9 11.4s-4 15.8 1.2 16.6a11.7 11.7 0 0 0 5 0c6.2-.8 6.3-9 6.3-9l3.3-21.6 7.2-1.4-7.3 24.5c-1 3.5-1.8 8 4.4 7.9 5.1.3 5.4-3 5.4-3 .2-.4 4.1-13.3 5.1-18 .7-3 3-10.5 4-13.6l5.6-1 6-1v7.3c.6 8.7 0 17.7 1.7 26.2.3 1.4.9 3.2 2.6 3.2a45 45 0 0 0 5-.4c6.3-.5 5.1-7 4.7-11-.4-4.6-.8-8.4-1.5-12.9a114.2 114.2 0 0 1-.9-14.3l23.4-4c3-.5 5.1-.3 4.5-6.3M19.1 97.8H7v6.7h10v5H7v10H1.5V92.9H19zM46 116H35.1l-1.5 3.5h-5.9l12-27.2h1.8l11.9 27.2h-5.9zm-5.5-13.5l-3.5 9H44zm43.3-5.2l-3.7 2.9a6 6 0 0 0-5.1-3c-1.8 0-3.3.7-3.3 2.5 0 1.6 1.2 2.2 3.1 3l3 1.4c4.2 1.9 6.6 4 6.6 7.8 0 5-4 8-9.4 8a11.5 11.5 0 0 1-10.2-5.8l3.8-2.9c1.4 2 3.3 3.9 6.5 3.9 2.4 0 3.8-1 3.8-3s-1.3-2.3-3.4-3.3l-2.8-1.3c-3.8-1.8-6.5-4-6.5-7.7 0-4.6 3.8-7.6 8.8-7.6a9.7 9.7 0 0 1 8.8 5.1zm38 22.2h-5.5V108h-11.8v11.5H99V92.8h5.5v10.3h11.8V92.8h5.5zm21.3 0h-5.4V92.8h5.4zm42.8-13.4a14.2 14.2 0 1 1-14.6-13.8h.3A14 14 0 0 1 186 106a2 2 0 0 1 0 .2zm-22.8 0c0 5.2 3.6 8.8 8.6 8.8a8.8 8.8 0 1 0-8.6-9zM223 92.8v27.3h-1.8l-15.5-16.6v16h-5.5V92.4h1.8l15.5 16.4v-16z"></path></svg>
                    </a>
                    <ul class="navbar-nav mr-auto nav_bar">
                        <li class="nav-item ">
                            <a class="nav-link" href="#">Women</a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link hoverItem" href="#">Men</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Kids</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Tech</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#"> Brands</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">More</a>
                        </li>
                        <div class="input-group search_input" >
                            <div class="input-group-prepend prepend_search">
                                <span class="input-group-text h-100" id=""> <i class="fa fa-search" aria-hidden="true"></i>
                                </span>
                            </div>
                            <input type="text" class="form-control" placeholder="Search for products, styles, brands"></input>
                        </div>
                        <li class="nav-item">
                            <a class="nav-link nav_link d-flex" href="#"><i class="fa fa-user" aria-hidden="true"></i><p>Account</p></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav_link d-flex" href="#"><i class="fa-regular fa-heart"></i><p>Wishlist</p></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link nav_link d-flex" href="#"><i class="fa fa-shopping-bag" aria-hidden="true"></i><p>Cart</p></a>
                        </li>
                    </ul>


                </div>

            </nav>
            <div className='secondNav'>
                <ul className='Varities'>
                    <li style={{ fontSize: "15px", fontWeight: "400" }}>What's New </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Sale
                            </p>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton">
                                <div className='d-flex sub_dropdown' >
                                    <div>
                                        <a class="dropdown-item shop_item" href="#">Shop all</a>
                                        <a class="dropdown-item" href="#">Innerwear on Sale</a>
                                        <a class="dropdown-item" href="#">Westernwear on Sale</a>
                                        <a class="dropdown-item" href="#">Bags on Sale</a>
                                        <a class="dropdown-item" href="#">Ethnicwear on Sale</a>
                                        <a class="dropdown-item" href="#">Bottomwear on Sale</a>
                                    </div>
                                    <div>
                                        <a class="dropdown-item" href="#">Accessories on Sale</a>
                                        <a class="dropdown-item" href="#">sports & Fitness on Sale</a>
                                        <a class="dropdown-item" href="#">Watches on Sale</a>
                                        <a class="dropdown-item" href="#">Topwear on Sale</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li >
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Top Wear
                            </p>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton2">
                                <div className='d-flex sub_dropdown'>
                                    <div>
                                        <a class="dropdown-item shop_item" href="#">Shop all</a>
                                        <a class="dropdown-item" href="#">T-Shirts</a>
                                        <a class="dropdown-item" href="#">Casual Shirts</a>
                                        <a class="dropdown-item" href="#"> Polo T-Shirts</a>
                                        <a class="dropdown-item" href="#">Formal Shirts</a>
                                        <a class="dropdown-item" href="#">Suits</a>
                                    </div>
                                    <div>
                                        <a class="dropdown-item" href="#">Jackets</a>
                                        <a class="dropdown-item" href="#">Hoodies</a>
                                        <a class="dropdown-item" href="#">Sweaters</a>
                                        <a class="dropdown-item" href="#">Sweatshirts</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Bottom Wear
                            </p>
                            <div class="dropdown-menu sub_dropdown" aria-labelledby="dropdownMenuButton3">
                                <div>
                                    <div>
                                        <a class="dropdown-item shop_item" href="#">Shop all</a>
                                        <a class="dropdown-item" href="#">Jeans</a>
                                        <a class="dropdown-item" href="#">Casual Trousers</a>
                                        <a class="dropdown-item" href="#"> Formal Trousers</a>
                                        <a class="dropdown-item" href="#">Shorts</a>
                                        <a class="dropdown-item" href="#">Trackpants</a>
                                    </div>
                                    <div>
                                        <a class="dropdown-item" href="#">Joggers</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Ethnic Wear
                            </p>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                <div className='sub_dropdown'>
                                    <a class="dropdown-item shop_item" href="#">Shop all</a>
                                    <a class="dropdown-item" href="#">Kurta Sets</a>
                                    <a class="dropdown-item" href="#">Kurtas</a>
                                    <a class="dropdown-item" href="#"> Nehru Shirts</a>
                                    <a class="dropdown-item" href="#">Bottoms</a>
                                    <a class="dropdown-item" href="#">Dhoti Sets</a>
                                    <a class="dropdown-item" href="#">Sherwanis</a>

                                </div>


                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Foot Wear
                            </p>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton5">
                                <div className='d-flex sub_dropdown'>
                                    <div>
                                        <a class="dropdown-item shop_item" href="#">Shop all</a>
                                        <a class="dropdown-item" href="#">Sport Shoes</a>
                                        <a class="dropdown-item" href="#">Sandals</a>
                                        <a class="dropdown-item" href="#"> Flipflops</a>
                                        <a class="dropdown-item" href="#">Flats</a>
                                        <a class="dropdown-item" href="#">Boots</a>
                                    </div>
                                    <div>
                                        <a class="dropdown-item" href="#">Loafers</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Athleisure
                            </p>
                            <div class="dropdown-menu " aria-labelledby="dropdownMenuButton6">
                                <div className='d-flex sub_dropdown'>
                                    <div>
                                        <a class="dropdown-item shop_item" href="#">Shop all</a>
                                        <a class="dropdown-item" href="#">Joggers</a>
                                        <a class="dropdown-item" href="#">Track Suits</a>
                                        <a class="dropdown-item" href="#">Track Pants</a>
                                        <a class="dropdown-item" href="#">Swimwear</a>
                                        <a class="dropdown-item" href="#">Sports Shorts</a>
                                    </div>
                                    <div>
                                        <a class="dropdown-item" href="#">Loafers</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Inner Wear & Sleep Wear
                            </p>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton7">
                                <div className='sub_dropdown'>
                                    <a class="dropdown-item shop_item" href="#">Shop all</a>
                                    <a class="dropdown-item" href="#">Briefs</a>
                                    <a class="dropdown-item" href="#">Trunks</a>
                                    <a class="dropdown-item" href="#">Boxers</a>
                                    <a class="dropdown-item" href="#">Vests</a>
                                    <a class="dropdown-item" href="#">Thermals</a>
                                    <a class="dropdown-item" href="#">Loungewear</a>
                                </div>

                            </div>
                        </div>

                    </li>
                    <li>
                        <div class="dropdown">
                            <p class=" dropdown-toggle" id="dropdownMenuButton_ei" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Watches
                            </p>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuButton7">
                                <div className='sub_dropdown'>
                                    <a class="dropdown-item" href="#">Watches</a>
                                    <a class="dropdown-item" href="#">More Wearables</a>

                                </div>

                            </div>
                        </div>
                    </li>

                </ul>
            </div>







        </>
    )
}

export default NavBar