import { Chat, Footer, Header, SideBar, TopButton } from '@/components'
import React from 'react'
import '../../../styles/index.8c75d3e3.css'
import '../../../styles/GameList.4fceab7d.css'
import '../../../styles/GameNavPath.e1cc4a4a.css'

function page() {
  return (
    
      <div className="s1m5fjkg">
        <div className="slots-container page-max-width-wrap">
          <div className="game-opt-wrap">
            <div className="path-wrap">
              <div className="nsy8oc0 game-nav-path">
                <a keep-scroll-position="true" className="path active"
                  title="Picks For You">Picks For You</a>
              </div>
            </div>
          </div>
          <div className="s1qvj928">
            
            
            
            <div className="l1d038jc load-more-wrap">
              <span className="current">40</span>&nbsp; / &nbsp;<span className="total">711</span>
              <div className="progress">
                <div className="green" style={{ width: '6%' }}></div>
              </div>6%
            </div>
            <div className="more-btn-wrap">
              <button className="ui-button button-normal show-more">
                <div className="button-inner">
                  <a href="/gamelist/picks-for-you?page=2" keep-scroll-position="true" className="">Load
                    More</a>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      
  )
}

export default page