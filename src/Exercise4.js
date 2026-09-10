import React, { useState } from 'react';
import './Exercise4.css';
import logo from './logo.svg';
import {
  firstTeenager,
  allTeenagers,
  isEveryTeenager,
  isAnyTeenager,
  sumArray,
  productArray,
  getRetailCompaniesIncremented,
  sumAges,
  street,
  Rectangle,
  Triangle,
  getRandomNumberPromise
} from './exercise4Data';

function Exercise4() {
  const [promiseResult, setPromiseResult] = useState("");
  const [promiseStatus, setPromiseStatus] = useState("");

  const retailCompanies = getRetailCompaniesIncremented();
  const rect = new Rectangle("blue", 5, 4);
  const tri = new Triangle("green", 6, 3);

  const handleTestPromise = () => {
    setPromiseStatus("loading");
    setPromiseResult("Đang xử lý...");
    getRandomNumberPromise()
      .then((num) => {
        setPromiseStatus("success");
        setPromiseResult(`Thành công! Số ngẫu nhiên lớn hơn 5: ${num}`);
      })
      .catch((err) => {
        setPromiseStatus("error");
        setPromiseResult(`Notice: "${err}" (Số ngẫu nhiên <= 5)`);
      });
  };

  return (
    <div className="exercise4-container">
      {/* ------------------------------------------------------------- */}
      {/* SECTION 1: JSX EXERCISES (Images 1 & 2)                       */}
      {/* ------------------------------------------------------------- */}
      <div className="section-title">PHẦN 1: JSX EXERCISES (BÀI 1 - 5)</div>

      {/* 1. Hello React */}
      <div className="card">
        <h3>1. Design website as image below</h3>
        <h1 className="hello-react">
          Hello <span>React</span>
        </h1>
      </div>

      {/* 2. React Logo & Description */}
      <div className="card">
        <h3>2. Design website as image below</h3>
        <div className="react-logo-box">
          <img src={logo} className="react-logo" alt="React logo" />
          <div className="logo-divider"></div>
          <div className="logo-caption">This is the React logo!</div>
          <div className="logo-subcaption">I don't know why it is blue either!</div>
          <p className="logo-desc">The library for web and native user interfaces</p>
        </div>
      </div>

      {/* 3. Navbar with JSX */}
      <div className="card">
        <h3>3. Create a navbar as image below with JSX</h3>
        <nav className="custom-navbar">
          <button className="nav-btn nav-home">Home</button>
          <a href="#search" className="nav-link">Search</a>
          <a href="#contact" className="nav-link">Contact</a>
          <button className="nav-btn nav-login">Login</button>
        </nav>
      </div>

      {/* 4. This is JSX */}
      <div className="card">
        <h3>4. Display this text</h3>
        <div className="jsx-text">This is JSX</div>
      </div>

      {/* 5. Course list */}
      <div className="card">
        <h3>5. Display list of course</h3>
        <h2 className="course-title">Course names</h2>
        <ul className="course-list">
          <li>React</li>
          <li>ReactNative</li>
          <li>NodeJs</li>
        </ul>
      </div>

      {/* ------------------------------------------------------------- */}
      {/* SECTION 2: USING ES6 AND JSX (Images 3, 4, 5)                 */}
      {/* ------------------------------------------------------------- */}
      <div className="section-title">PHẦN 2: USING ES6 AND JSX</div>

      {/* 1. People teenagers */}
      <div className="card">
        <h3>1. People Array (Teenagers)</h3>
        <p><strong>First teenager (age 10 - 20):</strong> {firstTeenager?.name} ({firstTeenager?.age} tuổi)</p>
        <p><strong>All teenagers:</strong> {allTeenagers.map(p => `${p.name} (${p.age})`).join(', ')}</p>
        <p><strong>Every person is teenager?</strong> {isEveryTeenager ? "true" : "false"}</p>
        <p><strong>Any person is teenager?</strong> {isAnyTeenager ? "true" : "false"}</p>
      </div>

      {/* 2. Array Reduce & Arrow Functions */}
      <div className="card">
        <h3>2. Array [1, 2, 3, 4] Reduce</h3>
        <p><strong>Tổng (Sum):</strong> {sumArray}</p>
        <p><strong>Tích (Product):</strong> {productArray}</p>
      </div>

      {/* 3. Companies Table & Destructuring */}
      <div className="card">
        <h3>3. Companies &amp; Destructuring</h3>
        <p><strong>Các công ty Retail (start đã tăng 1):</strong></p>
        <table className="retail-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Start</th>
              <th>End</th>
            </tr>
          </thead>
          <tbody>
            {retailCompanies.map((c, i) => (
              <tr key={i}>
                <td>{c.name}</td>
                <td>{c.start}</td>
                <td>{c.end}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <p><strong>Tổng tất cả các tuổi (ages sum):</strong> {sumAges}</p>
        <p><strong>Trích xuất street từ object person:</strong> {street}</p>
      </div>

      {/* 4. OOP Shapes */}
      <div className="card">
        <h3>4. Shape Classes (OOP)</h3>
        <p><strong>Hình chữ nhật:</strong> length = 5, width = 4 &rarr; Diện tích: <strong>{rect.getArea()}</strong></p>
        <p><strong>Hình tam giác:</strong> base = 6, height = 3 &rarr; Diện tích: <strong>{tri.getArea()}</strong></p>
      </div>

      {/* 5. Promises */}
      <div className="card">
        <h3>5. Promises (Random number &gt; 5)</h3>
        <button className="btn-promise" onClick={handleTestPromise}>
          Kiểm tra Promise ngẫu nhiên
        </button>
        {promiseResult && (
          <p className={`promise-msg ${promiseStatus}`}>
            {promiseResult}
          </p>
        )}
      </div>
    </div>
  );
}

export default Exercise4;
