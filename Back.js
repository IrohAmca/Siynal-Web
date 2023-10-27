import React from 'react';
import { Link } from 'react-router-dom'; 

function Tooltip(props) {
  return (
    <div className="tooltip">
      <Link to="Hocalar.html">Eğitmenler</Link>
      <Link to="İdari.html">İdari Kadro</Link>
    </div>
  );
}

export default Tooltip;


