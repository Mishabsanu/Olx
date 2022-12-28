import React,{useContext} from 'react';
import { useHistory,Link } from 'react-router-dom'; 

import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import {AuthContext, FirebaseContext} from '../../Store/Context'

function Header() {
  const history =useHistory()
  const {user} =useContext(AuthContext)
  const {firebase} =useContext(FirebaseContext)
  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
        <Link to='/'>
          <OlxLogo></OlxLogo>
          </Link></div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : ''}</span>
          {!user && <span onClick={() => {
            history.push('/login')
          }}>Login</span>}
          <hr />
        </div>
        {user && <span  onClick={() => {
          firebase.auth().signOut();
          history.push('/')
          }}>Logout</span>}



        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            {/* <span>SELL</span> */}
            { <a onClick={() => {history.push('/Create')}}>SELL</a> }
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
