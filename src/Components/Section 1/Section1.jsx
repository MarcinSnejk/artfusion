import React from 'react'
import './Section1.css';

const Section1 = () => {
  return (
    
      <div className='s1-con'>
        <div className='s1-content'>
          <h1 id="s1-title">Discover Rare Digital Art NFT Marketplace</h1>

          <div className='s1-ntf'>

            <div className='s1_nft_left'>
              <img src="../../../images/top_left.jpg" alt="ntf_picture" className='s1_nft_pic' />
            </div>
            
            <div className='s1_nft_middle'>
              <img src="../../../images/top_main.jpg" alt="ntf_picture" className='s1_nft_pic' />
            </div>
            <div className='s1_nft_right'>
            <img src="../../../images/top_right.jpg" alt="ntf_picture" className='s1_nft_pic' />
            </div>

          </div>


        </div>
      </div>

  )
}

export default Section1
