import React, { useState } from 'react'
import FilterSec from './filter';
import Footer from './footer'
import { Items, FilterList } from "./items"
import NavBar from './navbar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox'
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';


function ItemList() {

    const SortBy = [
        "Popularity",
        "Price High To Low",
        "Price Low To High",
        "New Arrivals",
        "Bestseller",
        "Discount High To Low",
        "Fastest Shipping Time"

    ]

    const [state, setState] = React.useState({
        Filter: false
    });
    const [listIndex, setListIndex] = useState(0)
    const [filterListArr, setFilterListArr] = useState([])

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };
    const filterListHandler = (e, i) => {
        setFilterListArr(e.filterList)
        setListIndex(i)
    }
    const list1 = (anchor) => (
        <Box
            sx={{ width: anchor === 'Sort By' || anchor === 'Filter' ? 'auto' : 1 }}
            role="presentation"

        >
            <div >
                <div className='d-flex w-100 justify-content-between px-4 pt-3'>
                    <h4 style={{ "fontSize": "20px" }}>Filters</h4>

                </div>
                <div className=' py-2 d-flex' style={{ "border-top": "1px solid #b1a4a4" }}>
                    <div className="left-Category">
                        {FilterList.map((text, i) => {
                            return (
                                <p style={{ "padding-top": "5px", "paddi ng-bottom": "5px" }}
                                    onClick={() => filterListHandler(text, i)}
                                    className={i === listIndex ? 'listLeftBorder px-3' : 'px-3'}
                                >
                                    {text.filterName}
                                </p>
                            )
                        })}
                    </div>
                    <div className='px-4'>
                        {
                            filterListArr.map(e => {
                                return (
                                    <p>{e}</p>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='d-flex filterBtn'>
                    <button className='close-btn' onClick={toggleDrawer(anchor, false)}
                    >Close</button>
                    <button className=' apply-btn' onClick={toggleDrawer(anchor, false)}>Apply Filters</button>
                </div>
            </div>
        </Box>
    );

    const list2 = (anchor) => (
        <Box
            className='w-100'
            role="presentation">
            <div className='w-100'>
                <div className=' py-4 d-flex'>
                    <div style={{ "width": "100%" }}>
                        {SortBy.map((e, i) => {
                            return (
                                <p onClick={toggleDrawer(anchor, false)} className='sortBy-content'>
                                    <FormControlLabel control={<Checkbox />} className="m-0" />{e}</p>
                            )
                        })}
                    </div>

                </div>
            </div>
        </Box>
    );
    console.log(filterListArr)
    return (
        <>
            <div className='blank_div'></div>
            <div><NavBar /></div>

            <div className='position-relative banner'><img src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/fermion/images/category_slider/img/tr:w-2698,/Mens.desktop.jpg?rnd=20200526195200' className='w-100' style={{ "padding-bottom": "24px" }}></img></div>

            <div className='MenHeadone'>
                <h1>Men</h1>
                <p>103692 products</p>
            </div>
            <div className='MenHead'>
                <div className='Men'>
                    <h3>Men<small className='noOfItems'>(103692)</small></h3>
                </div>
                <hr className="line"></hr>
                <div className='sortDiv d-flex align-items-center position relative'>
                    <div className='sort_icon'><i class="fas fa-sort"></i></div>
                    <div className='sub_sortDiv'>
                        <h5 style={{ "font-size": "17px" }}>Sort By</h5>
                        <h5 className='popularity'>Popularity</h5>
                    </div>
                </div>
            </div>

            <div className='filter_drawer w-100' >
                <div>
                    {['Sort By'].map((anchor) => (
                        <React.Fragment key={anchor} className='d-flex'>
                            <Button className='filterBtn' style={{ "border": "ipx solid #ccc" }} onClick={toggleDrawer(anchor, true)}>{anchor}<p>Popularity </p></Button>
                            <Drawer className='w-100'
                                anchor={anchor}
                                open={state[anchor]}
                            >
                                {list2(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
                <div>
                    {['filter'].map((anchor) => (
                        <React.Fragment key={anchor} className='d-flex'>
                            <Button className='filterBtn' onClick={toggleDrawer(anchor, true)}>{anchor}<p>Apply Filter</p></Button>
                            <Drawer className='w-100'
                                anchor={anchor}
                                open={state[anchor]}
                            >
                                {list1(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>

            <div className='container'>
                <div className='col-lg-12 col-md-12 col-sm-12'>
                    <div className='row'>
                        <FilterSec />
                        <div className='col-lg-9 col-md-12 col-sm-12 card_div'>
                            <div className="col-lg-12 col-md-12 col-sm-12" >
                                <div className="row">
                                    {Items?.map((e, index) => {
                                        return (
                                            <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6 card_item" key={index}>
                                                <div className='position-relative'>
                                                    <img src={e.image} className="w-100"></img>
                                                    <div className='favourite'><FavoriteBorderOutlinedIcon/></div>
                                                    <div className='bestselller'><span>{e.tag}</span></div>
                                                </div>
                                                <div className='details'>
                                                    <h6 className="text-start mt-2">{e.title}</h6>
                                                    <p className="text-start card_descr">{e.description}</p>
                                                    <div className="text-start off_details" >
                                                        <span className='card_price'>{e.Price}</span>
                                                        <s className='px-3 card_strikeprice'>{e.strikeprice}</s>
                                                        <span className='px-3 card_offer' style={{ "color": "green" }}>{e.offer}</span>
                                                    </div>
                                                    <p className="text-start mt-2 card_size">{e.size}</p>
                                                </div>

                                            </div>
                                        )
                                    })}
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div>
                <Footer />
            </div>


        </>

    )
}

export default ItemList