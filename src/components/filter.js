import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import $ from 'jquery';

function FilterSec() {
    const handleToggle = () => {
        $(".scrollable").toggleClass("intro");
    };
    const handleToggleDiv = () => {
        $(".scrollableOne").toggleClass("intrOne");
    }
    const handleToggleDivtwo = () => {
        $(".scrollableTwo").toggleClass("intrTwo");
    }
    const handleToggleDivthree = () => {
        $(".scrollableThree").toggleClass("intrThree");
    }
    const handleToggleDivFour = () => {
        $(".scrollableFour").toggleClass("intrFour");
    }
    const handleToggleDivFive = () => {
        $(".scrollableFive").toggleClass("intrFive");
    }
    const handleToggleDivSix = () => {
        $(".scrollableSix").toggleClass("intrSix");
    }



    return (

        <div className='col-lg-3 h-100 filterSec'>
            <h4>Filters</h4>
            <div className='border ' >
                <div className='w-100 '><h5 className='text-start filters_head'>Category</h5></div>
                <div className='categories'>
                    <div onClick={handleToggle}>
                        <div className='d-flex justify-content-between' >
                            <h6 className='color_prop'>Topwear</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollable'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Select All</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Casual Shirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>T-Shirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Polo T-Shirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Formal Shirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Sweatshirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Jackets</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>

                        </div>
                    </div>
                    <div onClick={handleToggleDiv}>
                        <div className='d-flex justify-content-between'>
                            <h6 className='color_prop'>Personal Accessories</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableOne'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Sunglasses</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Wallets</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Socks</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Belts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Eyeglasses Frames</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Stationery</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Brooches</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>

                        </div>
                    </div>
                    <div onClick={handleToggleDivtwo}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Ethnicwear</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableTwo'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Select All</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Kurta Sets</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Kurtas</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Nehru Shirts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Bottoms</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Dhoti Sets</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Sherwanis</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>

                        </div>
                    </div>
                    <div onClick={handleToggleDivthree}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Bottoms</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableThree'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Select All</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Jeans</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Casual Trousers</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Formal Trousers</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Shorts</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Trackpants</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Joggers</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>

                        </div>
                    </div>
                    <div onClick={handleToggleDivFour}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Footwear</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableFour'>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Select All</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Sport Shoes</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Sandals</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Flipflops</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Flats</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Boots</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>
                            <div className='d-flex justify-content-between align-items-center'>
                                <h6 className='color_prop'>Loafers</h6>
                                <FormControlLabel control={<Checkbox />} className="m-0" />
                            </div>

                        </div>
                    </div>
                    <div onClick={handleToggleDivFive}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Sports and Athleisure</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableFive'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Select All</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Joggers</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Track Suits</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Track Pants</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Swimwear</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Sports Shorts</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Loafers</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>

                            </div>
                    </div>
                    <div onClick={handleToggleDivSix}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Watches</h6>
                            <h3 className='color_prop prop_one'>+</h3>
                        </div>
                        <div className='hoverCatergory scrollableSix'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h6 className='color_prop'>Watches</h6>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />
                                </div>
                            </div>
                    </div>

                </div>
            </div>
            <div className='border my-5' >
                <div className='w-100 '>
                    <h5 className='text-start filters_head'>Discount</h5>

                    <div className='categories'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>70% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>60% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>50% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>40% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>30% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>20% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>10% and above</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='border ' >
                <div className='w-100 '>
                    <h5 className='text-start filters_head'>Brand</h5>
                    <div class="input-group brand_search" >
                        <div class="input-group-prepend ">
                            <span class="input-group-text h-100" id=""> <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder='Search Size'></input>
                    </div>
                </div>

                <div className='categories'>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Puma</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Louis Philippe</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>U.S. POLON ASSN.</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Jack & Jones</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>BASICS</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Peter England</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Allen Solly</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                    <div className='d-flex justify-content-between'>
                        <h6 className='color_prop'>Hang Up</h6>
                        <FormControlLabel control={<Checkbox />} className="m-0" />
                    </div>
                </div>
            </div>
            <div className='border my-5' >
                <div className='w-100 '>
                    <h5 className='text-start filters_head'>Product Label</h5>

                    <div className='categories'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Responsible</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Hidden Gems</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Editor's Pick</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Only on Nykaa</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Global Store</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Offer</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>Express Shipping</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>

                    </div>
                </div>
            </div>
            <div className='border my-5' >
                <div className='w-100 '>
                    <h5 className='text-start filters_head'>Size</h5>
                    <div class="input-group brand_search" >
                        <div class="input-group-prepend ">
                            <span class="input-group-text h-100" id=""> <i class="fa fa-search" aria-hidden="true"></i>
                            </span>
                        </div>
                        <input type="text" class="form-control" placeholder='Search Size'></input>
                    </div>

                    <div className='categories'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>33-36</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>36-36</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>L/XL</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>S/M</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>B5</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>B6+</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h6 className='color_prop'>85CM</h6>
                            <FormControlLabel control={<Checkbox />} className="m-0" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default FilterSec