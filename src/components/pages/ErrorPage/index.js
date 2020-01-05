import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

export default function ErrorPage() {
  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>اوبس! هذه الصفحة غير موجودة</h2>
        <p>نحن اسفون، لكن الصفحة التي تبحث عنها غير موجودة</p>
        <Link to="/"> الصفحة الرئيسية </Link>
      </div>
    </div>
  );
}
