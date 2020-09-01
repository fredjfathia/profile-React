import React from 'react';
import FullName from './profile/FullName' ;
import Address from './profile/Address';
import ProfilPhoto from './profile/ProfilPhoto';
import './profile/profile.css' ;

function Main() {
  return (
    <div className="Main">
      <header className="main-header">
      <FullName/>
      </header>
      <main className="main-main">
      <ProfilPhoto/>
      </main>
      <footer className="main-footer">
      <Address/>
      </footer>
    </div>
  );
}

export default Main;
