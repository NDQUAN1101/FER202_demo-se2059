import React, { useState } from 'react';
import './App.css';
import {
  Student,
  createScores,
  extractStudentBasicInfo,
  mergeScores,
  getPassingScores,
  formatScoresList,
  calculateTotalScore,
  evaluateAcademicPerformance
} from './studentManagement';
import Exercise4 from './Exercise4';

function App() {
  // Tab hiện tại: 'es6-student' hoặc 'exercise4'
  const [activeTab, setActiveTab] = useState('es6-student');

  // --- STATE BÀI QUẢN LÝ SINH VIÊN (ES6) ---
  const [student, setStudent] = useState(() => {
    return new Student("Trần Bảo Long", 20, createScores(8.5, 9.0, 7.5));
  });

  const [inputScore, setInputScore] = useState("");
  const [evalResult, setEvalResult] = useState("");

  const { name, age } = extractStudentBasicInfo(student);
  const passingScores = getPassingScores(student.scores);
  const formattedScores = formatScoresList(student.scores);
  const totalScore = calculateTotalScore(student.scores);
  const averageScore = student.calculateAverage();

  const handleAddScore = () => {
    const num = parseFloat(inputScore);
    if (isNaN(num) || num < 0 || num > 10) {
      alert("Vui lòng nhập điểm hợp lệ từ 0 đến 10");
      return;
    }
    const newScores = mergeScores(student.scores, [num]);
    setStudent(new Student(student.name, student.age, newScores));
    setInputScore("");
    setEvalResult("");
  };

  const handleEvaluate = () => {
    setEvalResult("Đang đánh giá...");
    evaluateAcademicPerformance(averageScore).then((res) => {
      setEvalResult(res);
    });
  };

  return (
    <div className="container">
      <h2>Exercise 4 &amp; ES6</h2>

      {/* Tabs chuyển đổi giữa 2 bài */}
      <div className="tab-bar">
        <button
          className={`tab-item ${activeTab === 'es6-student' ? 'active' : ''}`}
          onClick={() => setActiveTab('es6-student')}
        >
          1. Student Management (ES6)
        </button>
        <button
          className={`tab-item ${activeTab === 'exercise4' ? 'active' : ''}`}
          onClick={() => setActiveTab('exercise4')}
        >
          2. Exercise 4 (JSX &amp; ES6)
        </button>
      </div>

      {/* NỘI DUNG TAB 1: STUDENT MANAGEMENT (ES6) */}
      {activeTab === 'es6-student' && (
        <div className="tab-content">
          <div className="card">
            <h3>Thông Tin Sinh Viên</h3>
            <p><strong>Họ và tên:</strong> {name}</p>
            <p><strong>Tuổi:</strong> {age}</p>
            <p><strong>Giới thiệu:</strong> <em>"{student.introduce()}"</em></p>
          </div>

          <div className="card">
            <h3>Điểm Số &amp; Môn Học</h3>
            <p><strong>Danh sách điểm:</strong> {student.scores.join(', ')}</p>
            
            <div className="form-group">
              <input
                type="number"
                placeholder="Nhập điểm mới (0 - 10)"
                value={inputScore}
                onChange={(e) => setInputScore(e.target.value)}
              />
              <button onClick={handleAddScore}>Thêm điểm</button>
            </div>

            <p><strong>Điểm đạt (&ge; 5.0):</strong> {passingScores.join(', ') || 'Không có'}</p>
            <p><strong>Tổng điểm:</strong> {totalScore.toFixed(2)}</p>
            <p><strong>Điểm trung bình:</strong> {averageScore}</p>

            <p><strong>Chi tiết từng môn:</strong></p>
            <ul>
              {formattedScores.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="card">
            <h3>Đánh Giá Học Lực</h3>
            <button onClick={handleEvaluate}>Đánh giá học lực</button>
            {evalResult && (
              <p className="result">
                Xếp loại: <strong>{evalResult}</strong>
              </p>
            )}
          </div>
        </div>
      )}

      {/* NỘI DUNG TAB 2: EXERCISE 4 (JSX & ES6) */}
      {activeTab === 'exercise4' && (
        <div className="tab-content">
          <Exercise4 />
        </div>
      )}
    </div>
  );
}

export default App;
