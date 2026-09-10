// ==============================================================================
// EXERCISE 4: DATA & ES6 LOGIC
// ==============================================================================

// 1. People Array
export const people = [
  { name: 'Jack', age: 50 },
  { name: 'Michael', age: 9 },
  { name: 'John', age: 40 },
  { name: 'Ann', age: 19 },
  { name: 'Elisabeth', age: 16 }
];

export const firstTeenager = people.find(p => p.age >= 10 && p.age <= 20);
export const allTeenagers = people.filter(p => p.age >= 10 && p.age <= 20);
export const isEveryTeenager = people.every(p => p.age >= 10 && p.age <= 20);
export const isAnyTeenager = people.some(p => p.age >= 10 && p.age <= 20);

// 2. Array Reduce & Arrow Functions
export const array = [1, 2, 3, 4];
export const sumArray = array.reduce((acc, cur) => acc + cur, 0);
export const productArray = array.reduce((acc, cur) => acc * cur, 1);

// 3. Companies, Ages, Person
export const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

export const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

export const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

export const getCompanyNamesForEach = () => {
  const names = [];
  companies.forEach(company => names.push(company.name));
  return names;
};

export const getCompaniesStartedAfter1987 = () => {
  return companies.filter(company => company.start > 1987).map(c => c.name);
};

export const getRetailCompaniesIncremented = () => {
  return companies
    .filter(company => company.category === "Retail")
    .map(company => ({
      ...company,
      start: company.start + 1
    }));
};

export const getSortedCompaniesByEnd = () => {
  return [...companies].sort((a, b) => a.end - b.end);
};

export const getSortedAgesDescending = () => {
  return [...ages].sort((a, b) => b - a);
};

export const sumAges = ages.reduce((sum, age) => sum + age, 0);

export const createCompanyObject = () => {
  const { name, category } = companies[0];
  return {
    name,
    category,
    print() {
      return `Company Name: ${this.name}`;
    }
  };
};

export const sumAllNumbers = (...numbers) => {
  return numbers.reduce((sum, num) => sum + Number(num), 0);
};

export const collectArguments = (...args) => {
  return args.reduce((acc, item) => {
    if (Array.isArray(item)) {
      return [...acc, ...item];
    }
    return [...acc, item];
  }, []);
};

export const {
  address: { street }
} = person;

export const createCounter = () => {
  let count = 0;
  return () => count++;
};
export const counter = createCounter();

export const getQueryParams = (url) => {
  try {
    const urlObj = new URL(url);
    const params = {};
    urlObj.searchParams.forEach((value, key) => {
      params[key] = value;
    });
    return params;
  } catch {
    const query = url.split('?')[1] || '';
    const params = {};
    query.split('&').forEach(part => {
      const [k, v] = part.split('=');
      if (k) params[decodeURIComponent(k)] = decodeURIComponent(v || '');
    });
    return params;
  }
};

// 4. Shape Classes
export class Shape {
  constructor(color = "red") {
    this.color = color;
  }

  getArea() {
    return 0;
  }

  toString() {
    return `Shape[color=${this.color}]`;
  }
}

export class Rectangle extends Shape {
  constructor(color = "red", length = 1, width = 1) {
    super(color);
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  toString() {
    return `Rectangle[Shape[color=${this.color}],length=${this.length},width=${this.width},area=${this.getArea()}]`;
  }
}

export class Triangle extends Shape {
  constructor(color = "red", base = 1, height = 1) {
    super(color);
    this.base = base;
    this.height = height;
  }

  getArea() {
    return 0.5 * this.base * this.height;
  }

  toString() {
    return `Triangle[Shape[color=${this.color}],base=${this.base},height=${this.height},area=${this.getArea()}]`;
  }
}

// 5. Promises
export const getRandomNumberPromise = () => {
  return new Promise((resolve, reject) => {
    const num = Math.floor(Math.random() * 10) + 1;
    if (num > 5) {
      resolve(num);
    } else {
      reject("Error");
    }
  });
};
