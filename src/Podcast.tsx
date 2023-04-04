import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

function Podcast() {
  return (
    <div style={{ textAlign: 'center', margin: '200px' }}>
      <h2>
        Here is a link to my podcasts:
        <a href="https://baconsale.com/" target="_blank" rel="noreferrer">
          https://baconsale.com/
        </a>
      </h2>
      <p style={{ fontWeight: 'bold' }}>Please take a listen!</p>
    </div>
  );
}

export default Podcast;
