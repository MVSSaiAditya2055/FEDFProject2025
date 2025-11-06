import React, { useEffect } from 'react'
import { initLegacyApp } from './legacy'

export default function App() {
  useEffect(() => {
    // Initialize legacy DOM-based app (seeding, routing, listeners).
    // This keeps original app behavior while providing a React mount.
    initLegacyApp();
  }, [])

  return (
    <>
      <header>
        <button id="homeBtn" className="btn home-btn" title="Home" aria-label="Home">🏠</button>
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

      <main id="app">
        <section>
          <div className="carousel section" id="carouselSection">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
              <strong>Featured</strong>
              <small className="muted">Click slideshow to open item</small>
            </div>
            <div className="carousel-stage" id="carouselStage" tabIndex={0} aria-live="polite"></div>
          </div>

          <div id="pageContent" className="section" aria-live="polite">
            <h3>Welcome to the Virtual Art Gallery</h3>
            <p className="muted">Explore artworks, learn cultural histories, join virtual tours and attend exhibitions. Use the search bar above to find art pieces or artists — example search term: <code>Sun</code>.</p>

            <div style={{ marginTop: 12 }}>
              <h4>Recent Art Pieces</h4>
              <div id="recentList"></div>
            </div>
          </div>
        </section>

        <aside className="calendar" aria-label="Events calendar">
          <div className="month-title">
            <strong id="calMonthTitle"></strong>
            <div>
              <button id="prevMonth" className="btn secondary" style={{ padding: '6px 8px' }}>◀</button>
              <button id="nextMonth" className="btn secondary" style={{ padding: '6px 8px' }}>▶</button>
            </div>
          </div>
          <div className="cal-weekdays" id="calWeekdays">
            <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
          </div>
          <div className="cal-grid" id="calendarGrid"></div>

          <div style={{ marginTop: 12 }}>
            <h4 style={{ marginBottom: 8 }}>Upcoming Events</h4>
            <div id="upcomingEventsList"></div>
          </div>
        </aside>
      </main>

      <footer>
        <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'center' }}>
          <div>
            <strong>About Us</strong>
            <div className="muted" style={{ marginTop: 6, maxWidth: 550 }}>We are a student-built prototype showcasing artworks, cultural context and virtual events. This project (FEDF-PS16) is developed as a Student Development Project.</div>
          </div>
          <div style={{ textAlign: 'right' }}>
            <strong>Contact</strong>
            <div className="muted" style={{ marginTop: 6 }}>Email: fedf-p16@example.edu<br />Mentor: [Faculty Mentor Name]</div>
          </div>
        </div>
      </footer>

      {/* template used by legacy script */}
      <template id="searchResultsTemplate">
        <div>
          <h3>Search Results</h3>
          <div style={{ marginTop: 8 }}>
            <h4>Art Pieces</h4>
            <div id="artResults"></div>
          </div>
          <div style={{ marginTop: 12 }}>
            <h4>Artists</h4>
            <div id="artistResults"></div>
          </div>
        </div>
      </template>
    </>
  )
}
