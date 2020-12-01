/* eslint-disable react/no-unescaped-entities */
/* eslint-disable semi */
/* eslint-disable arrow-spacing */
/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable react/jsx-indent */
/* eslint-disable object-curly-spacing */
/* eslint-disable react/void-dom-elements-no-children */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/self-closing-comp */
/* eslint-disable react/no-unknown-property */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  handleMouseOver(e) {
    if (e.target.style.textDecoration === 'none' || !e.target.style.textDecoration) {
      e.target.style.textDecoration = 'underline';
    } else {
      e.target.style.textDecoration = 'none';
    }
  }

  render() {
    return (
      <nav style={{
        fontWeight: 700,
        fontFamily: 'Helvetica, sans-serif',
        fontSize: 18,
        color: 'white',
        width: '100%',
        height: 70,
        backgroundColor: 'rgb(204, 0, 0)',
        display: 'flex',
      }}>
        <svg
          style={{ fill: 'white', margin: '0px 10px' }}
          width="50"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          focusable="false"
        >
          <path d="M12 1c6.074 0 10.999 4.925 10.999 11 0 6.074-4.925 10.999-11 10.999-6.074 0-10.999-4.925-10.999-11C1 5.925 5.925 1 12 1zm0 18.173a7.174 7.174 0 10-.001-14.347 7.174 7.174 0 000 14.347zm0-3.653a3.52 3.52 0 110-7.04 3.52 3.52 0 010 7.04z" fill-rule="evenodd"></path>
          </svg>
        <div style={{margin: 'auto 20px'}} onMouseEnter={(e)=>{ this.handleMouseOver(e) }} onMouseLeave={(e)=>{ this.handleMouseOver(e) }}>Categories</div>
        <div style={{margin: 'auto 20px'}} onMouseEnter={(e)=>{ this.handleMouseOver(e) }} onMouseLeave={(e)=>{ this.handleMouseOver(e) }}>Deals</div>
        <div style={{margin: 'auto 20px'}} onMouseEnter={(e)=>{ this.handleMouseOver(e) }} onMouseLeave={(e)=>{ this.handleMouseOver(e) }}>What's New</div>
        <div style={{margin: 'auto 20px'}} onMouseEnter={(e)=>{ this.handleMouseOver(e) }} onMouseLeave={(e)=>{ this.handleMouseOver(e) }}>Pickup & Delivery</div>
        <div style={{margin: 'auto 20px'}}>
          <form>
            <input
type="search"
placeholder="Search"
style={{
  padding: 10,
  border: 0,
  width: 120,
  borderRadius: '20px 0px 0px 20px',
  fontFamily: 'Helvetica, sans-serif',
  fontSize: 18,
}}>
            </input>
            <button
type="submit"
style={{
  padding: 10,
  border: 0,
  backgroundColor: 'rgb(250)',
  borderRadius: '0px 20px 20px 0px',
  fontFamily: 'Helvetica, sans-serif',
  fontSize: 18,
}}><i class="fa fa-search" />
            </button>
          </form>
        </div>
        <div style={{margin: 'auto 10px'}}>
          <svg style={{margin: '0px auto 0px 3px', fill: 'white'}} width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M14.063 14.856c0 1.097.181 1.455.708 1.871.251.197 1.659.607 2.834.865 1.958.536 2.36 2 2.36 2A10.932 10.932 0 0112 23a10.935 10.935 0 01-7.966-3.408s.315-1.352 2.406-2c1.144-.354 2.435-.639 2.713-.838.538-.385.784-.767.784-1.913 0-.26-.217-.516-.49-1.037-.46-.878-1.159-2.101-1.159-3.601S8.558 5.58 12 5.552c3.442-.028 3.711 3.265 3.74 4.708.029 1.443-.688 2.669-1.132 3.51-.29.551-.545.82-.545 1.086zm7.77 2.267l-.648-.394a9.874 9.874 0 001.436-5.133c0-5.64-4.752-10.217-10.621-10.217-5.869 0-10.62 4.577-10.62 10.217 0 1.832.5 3.591 1.439 5.138l-.649.394a10.624 10.624 0 01-1.55-5.532C.62 5.53 5.719.62 12 .62c6.282 0 11.38 4.91 11.38 10.974a10.633 10.633 0 01-1.547 5.528z"></path>
          </svg>
          <div style={{fontSize: 11, fontWeight: 600}}>Sign in
          </div>
        </div>
          <svg style={{margin: 'auto 10px', fill: 'white'}} width="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false"><path d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375zm13 0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375zM1.135 2.212l2.962.543 18.762 2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 01-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476z" id="nds-Icon313a"></path></svg>
      </nav>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('service5'));
