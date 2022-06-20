import React from 'react'

function Footer() {
  return (
    <>
      <div className='footer'>
        <div className='firstFooter'>
          <div className='col-lg-12'>
            <div className='firstfootSub'>
              <div className='row justify-content-between'>
                <div className='col-lg-3'>
                  <h3>DOWNLOAD OUR APP</h3>
                  <div className='d-flex '>
                    <div className='w-100'>
                      <img src='https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/googlePlay.png' className='w-100'></img>
                    </div>
                    <div className='w-100'>
                      <img src='https://adn-static1.nykaa.com/nykdesignstudio-images/tr:h-66,/pub/media/wysiwyg/homepagemiddle/appleStore.png' className='w-100'></img>
                    </div>
                  </div>
                </div>
                <div className='col-lg-3 '>
                  <h3>SUBSCRIBE THE LETTER</h3>
                  <div className='emailInput'>
                    <input type="text" placeholder="enter your email"></input>
                    <button>SUBMIT</button>
                  </div>
                </div>
                <div className='col-lg-3 '>
                  <h3>FOR QUERIES</h3>
                  <p>18002663333 | support@nykaafashion.com</p>
                  <p> (Monday to Saturday, 10AM - 7PM)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='secondFooter'>
          <div className='secondfootSub'>
            <div className='col-lg-12'>
              <div className='row justify-content-between'>
                <div className='col-lg-2'>
                  <h6>WHO ARE WE</h6>
                  <p>About Us</p>
                  <p>Careers</p>
                  <p>Press</p>
                </div>
                <div className='col-lg-5'>
                  <h6>HELP</h6>
                  <div className='d-flex justify-content-between'>
                    <div>
                      <p>Shipping & Return Policy</p>
                      <p>Help Center</p>
                      <p>Terms & Conditions</p>
                    </div>
                    <div>
                      <p>Privacy Policy</p>
                      <p>Privacy Policy for EU Residents</p>
                      <p>Responsible Disclosure</p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-2'>
                  <h6>QUICKLINKS</h6>
                  <p>Offers</p>
                  <p>Sitemap</p>
                </div>
                <div className='col-lg-2'>
                  <h6>FOLLOW US</h6>
                  <div className='d-flex'>
                    <div><img className='socailLinks' src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/homepagemiddle/icons-instagram-footer.svg'></img></div>
                    <div><img className='socailLinks' src='https://adn-static1.nykaa.com/nykdesignstudio-images/pub/media/wysiwyg/homepagemiddle/icons-facebook-footer.svg'></img></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='thirdFooter'>
          <div className='thirdfootSub'>
            <div className='col-lg-12'>
              <div className='row justify-content-between'>
                <div className='col-lg-1'>
                  <h6>WOMEN</h6>
                  <p>Indianwear</p>
                  <p>Westernwear</p>
                  <p>Bags</p>
                  <p>Footwear</p>
                  <p>Lingerie</p>
                  <p>Jewellery</p>
                  <p>Accessories</p>
                  <p>Watches</p>
                  <p>Sportswear</p>
                </div>
                <div className='col-lg-2'>
                  <h6>MEN</h6>
                  <p>Topwear</p>
                  <p>Bottomwear</p>
                  <p>Footwear</p>
                  <p>Personal Accessories</p>
                  <p>Ethnic Wear</p>
                  <p>Innerwear</p>
                  <p>Watches</p>
                  <p>Sportswear</p>
                  <p>Bags and Backpacks</p>
                </div>
                <div className='col-lg-1'>
                  <h6>KIDS</h6>
                  <p>Westernwear</p>
                  <p>Indianwear</p>
                  <p>Footwear</p>
                  <p>Accessories</p>
                  <p>Toys and Games</p>
                  <p>Sportswear</p>
                  <p>Feeding</p>
                  <p>Home</p>
                  <p>Innerwear</p>
                </div>
                <div className='col-lg-1'>
                  <h6>LUXE</h6>
                  <p>Separates</p>
                  <p>Sarees</p>
                  <p>Dresses</p>
                  <p>Kurta Sets</p>
                  <p>Lehengas</p>
                  <p>Jewellery</p>
                  <p>Bags</p>
                  <p>Masks</p>
                </div>
                <div className='col-lg-1'>
                  <h6 style={{"white-space": "nowrap"}}>TOP BRANDS</h6>
                  <p>Aachho</p>
                  <p>Forever New</p>
                  <p>Biba</p>
                  <p>Reebok</p>
                  <p>Adidas</p>
                  <p>Lavanya the Label</p>
                  <p>Forever 21</p>
                  <p>Gap</p>
                  <p>W</p>
                </div>
                <div className='col-lg-2'>
                  <h6>HOUSE OF NYKAA</h6>
                  <p>20 Dresses by Nykaa Fashion</p>
                  <p>Mondano by Nykaa Fashion</p>
                  <p>RSVP by Nykaa Fashion</p>
                  <p>Likha by Nykaa Fashion</p>
                  <p>Nykd by Nykaa</p>
                  <p>Pipa Bella</p>
                  <p>Gajra Gang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='lastFooter'>
          <p>© 2019 - 2022 Nykaa Fashion Pvt. Ltd. All Rights Reserved</p>
        </div>
      </div>

    </>
  )
}

export default Footer