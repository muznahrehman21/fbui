import React from 'react'
import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
function Topbar() {
  return (
    <>
      <div className='topbarContainer'>
        <div className="topbarLeft">
          <span className='logo'>FBUI </span>
        </div>
        <div className="topbarCenter">
          <div className="searchBar">
            <Search  className='searchIcon'/>
            <input placeholder='Search' className='searchInput' />
          </div>
        </div>
        <div className="topbarRight">
          <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
          </div>
          <div className="topbarIcons">
            <div className="topbarItem">

              <Person />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarItem">

              <Chat />
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarItem">

              <Notifications />
              <span className="topbarIconBadge">1</span>
            </div>

          </div>
          
        </div>
      </div>
    </>
  )
}

export default Topbar