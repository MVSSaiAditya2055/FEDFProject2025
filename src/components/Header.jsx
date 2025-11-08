import React from 'react'

export default function Header(){
  return (
    <header>
  <button id="homeBtn" className="btn home-btn" title="Home" aria-label="Home">Home</button>
      <div className="brand">Virtual Art Gallery — FEDF-PS16</div>

      <div className="search-container">
        <div className="search" role="search">
          <input id="searchInput" type="search" placeholder="Search artists, art pieces, keywords (e.g. Sun)..." aria-label="Search" />
          <button id="searchBtn">Search</button>
        </div>
      </div>

      <div className="header-actions">
        <div id="greeting" className="muted" style={{ fontSize: '0.95rem', cursor: 'pointer' }}></div>
        <button id="loginBtn" className="btn secondary">Login / Register</button>
        <button id="cartBtn" className="btn" title="View cart">Cart (0)</button>
      </div>
    </header>
  )
}
