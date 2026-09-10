class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Xin chào, tôi là ${this.name}, năm nay ${this.age} tuổi.`;
  }
}

class Student extends Person {
  constructor(name, age, scores = []) {
    super(name, age);
    this.scores = scores;
  }

  calculateAverage() {
    if (this.scores.length === 0) return 0;
    const total = this.scores.reduce((sum, score) => sum + score, 0);
    const avg = total / this.scores.length;
    return Number(avg.toFixed(2));
  }

  displayInfo() {
    const avg = this.calculateAverage();
    return `[Sinh viên] Tên: ${this.name} | Tuổi: ${this.age} | Điểm số: [${this.scores.join(', ')}] | Điểm TB: ${avg}`;
  }
}

const createScores = (...scores) => {
  return scores;
};

const extractStudentBasicInfo = (studentObj) => {
  const { name, age } = studentObj;
  return { name, age };
};

const mergeScores = (currentScores, newScores) => {
  return [...currentScores, ...newScores];
};

const getPassingScores = (scores, passThreshold = 5.0) => {
  return scores.filter(score => score >= passThreshold);
};

const formatScoresList = (scores) => {
  return scores.map((score, index) => `Môn ${index + 1}: ${score.toFixed(1)} điểm`);
};

const calculateTotalScore = (scores) => {
  return scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
};

const evaluateAcademicPerformance = (averageScore) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof averageScore !== 'number' || isNaN(averageScore)) {
        reject(new Error("Điểm trung bình không hợp lệ!"));
      } else if (averageScore >= 8.0) {
        resolve("Excellent Student");
      } else {
        resolve("Need Improvement");
      }
    }, 1000);
  });
};

async function runDemo() {
  console.log("==================================================");
  console.log("CHƯƠNG TRÌNH QUẢN LÝ SINH VIÊN (ES6) - FER202");
  console.log("==================================================\n");

  console.log("--- YÊU CẦU 1: Class Person ---");
  const person1 = new Person("Nguyễn Văn A", 45);
  console.log(person1.introduce());
  console.log();

  console.log("--- YÊU CẦU 3: Rest Parameter ---");
  const initialScores = createScores(8.5, 9.0, 7.5);
  console.log("createScores(8.5, 9.0, 7.5):", initialScores);
  console.log();

  console.log("--- YÊU CẦU 2: Class Student extends Person ---");
  const student1 = new Student("Trần Bảo Long", 20, initialScores);
  console.log(student1.introduce());
  console.log(student1.displayInfo());
  console.log("Điểm trung bình:", student1.calculateAverage());
  console.log();

  console.log("--- YÊU CẦU 4: Destructuring ---");
  const { name, age } = student1;
  console.log(`name: "${name}", age: ${age}`);
  console.log();

  console.log("--- YÊU CẦU 5: Spread Operator ---");
  const additionalScores = createScores(9.5, 8.5);
  console.log("Điểm bổ sung:", additionalScores);
  student1.scores = mergeScores(student1.scores, additionalScores);
  console.log("Điểm sau khi gộp:", student1.scores);
  console.log(student1.displayInfo());
  console.log();

  console.log("--- YÊU CẦU 6: Array Methods (filter, map, reduce) ---");
  const demoScoresWithFailed = [...student1.scores, 4.0];
  console.log("Mảng điểm kiểm tra:", demoScoresWithFailed);
  const passingScores = getPassingScores(demoScoresWithFailed);
  console.log("filter (>= 5.0):", passingScores);

  const formattedScores = formatScoresList(student1.scores);
  console.log("map (định dạng):");
  formattedScores.forEach(item => console.log(" *", item));

  const totalScore = calculateTotalScore(student1.scores);
  console.log(`reduce (tổng điểm): ${totalScore.toFixed(2)}`);
  console.log(`Điểm trung bình: ${student1.calculateAverage()}`);
  console.log();

  console.log("--- YÊU CẦU 7: Promise ---");
  console.log("1. Đánh giá Sinh viên 1 (Điểm TB >= 8)...");
  try {
    const evaluation1 = await evaluateAcademicPerformance(student1.calculateAverage());
    console.log(`=> Kết quả: ${evaluation1} (Điểm TB: ${student1.calculateAverage()} >= 8)`);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }

  console.log("\n2. Đánh giá Sinh viên 2 (Điểm TB < 8)...");
  const student2 = new Student("Lê Thị Mai", 20, createScores(6.0, 7.0, 5.5));
  console.log(student2.displayInfo());
  try {
    const evaluation2 = await evaluateAcademicPerformance(student2.calculateAverage());
    console.log(`=> Kết quả: ${evaluation2} (Điểm TB: ${student2.calculateAverage()} < 8)`);
  } catch (error) {
    console.error("Lỗi:", error.message);
  }

  console.log("\n==================================================");
  console.log("HOÀN THÀNH TẤT CẢ 7 YÊU CẦU!");
  console.log("==================================================");
}

if (typeof require !== 'undefined' && require.main === module) {
  runDemo();
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Person,
    Student,
    createScores,
    extractStudentBasicInfo,
    mergeScores,
    getPassingScores,
    formatScoresList,
    calculateTotalScore,
    evaluateAcademicPerformance,
    runDemo
  };
}
