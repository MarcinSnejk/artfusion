import React from 'react'
import './Section2.css';

const Section2 = () => {
  return (
    <div className='s2-container'>
       <div className='s2-cont'>
          
        <div className='top-cont'>

          <h1 id="title_topcont">Find Your Special Items</h1>

            <div className='s2-drop'>
              <div className='s2-group'>

                  <button className='s2-button'>Category</button>

                  <div className='s2-category'>
                      <a className='s2-a' href='#'>Artist</a>
                      <a className='s2-a' href='#'>Gaming</a>
                      <a className='s2-a' href='#'>Popular</a>

                  </div>
                </div>

              <div className='s2-group'>

                  <button className='s2-button'>Price</button>

                  <div className='s2-price'>
                      <a className='s2-a' href='#'>Top Price</a>
                      <a className='s2-a' href='#'>Low Price</a>
                  </div>
                </div>
            </div>
        </div>


          <div className='nft-container'>

            <div className='nft-content'>

                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user1_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Zyroo</h3>
                      <h3>560 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>

                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user2_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Flynx</h3>
                      <h3>350 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>

                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user3_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Lomi</h3>
                      <h3>1.000 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>

                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user4_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Axel</h3>
                      <h3>890 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>

                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user5_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Nivo</h3>
                      <h3>3.000 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>


                <div className='nft1'>
                  <div className='nft1-column'>
                    <img className='nft_pic' src="../../../images/user6_nft.jpg" alt="nft picture" />
                    <div className='user_price'>
                      <h3>@Kevi</h3>
                      <h3>1.500 ETH</h3>
                    </div>
                    <button className='buy_button'>Buy</button>
                  </div>
                </div>

            </div>
          </div>
       </div>
    </div>
  )
}

export default Section2
