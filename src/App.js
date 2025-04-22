import React, { useState } from "react";
import "./App.css";

// 1. Find the Largest Number in an Array
const largestNumber = (arr) => {
  return Math.max(...arr);
};

// 2. Reverse a String
const reverseString = (str) => {
  return str.split("").reverse().join("");
};

// 3. Check if a String is a Palindrome
const isPalindrome = (str) => {
  const reversed = str.split("").reverse().join("");
  return str === reversed ? "Yes, it's a palindrome" : "No, it's not a palindrome";
};

// 4. Find Prime Numbers in a Range
const findPrimes = (range) => {
  const primes = [];
  for (let num = 2; num <= range; num++) {
    let isPrime = true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) primes.push(num);
  }
  return primes;
};

// 5. Implement a Basic REST API with Express (Mock)
const expressAPI = () => {
  return "Express app created with GET, POST, PUT, DELETE endpoints";
};

// 6. Read and Write a File Using fs Module (Mock)
const fileReadWrite = () => {
  return "File read and write operations performed";
};

// 7. Implement a Queue Using an Array
const queueOperations = () => {
  let queue = [];
  queue.push(1);
  queue.push(2);
  queue.push(3);
  const dequeued = queue.shift();
  return `Queue after enqueue: [1, 2, 3], dequeued element: ${dequeued}`;
};

// 8. Implement a Stack Using an Array
const stackOperations = () => {
  let stack = [];
  stack.push(1);
  stack.push(2);
  stack.push(3);
  const popped = stack.pop();
  return `Stack after push: [1, 2, 3], popped element: ${popped}`;
};

// 9. CRUD Operations Using MongoDB and Mongoose (Mock)
const mongoDBCrud = () => {
  return "CRUD operations on MongoDB using Mongoose";
};

// 10. JWT Authentication with Express.js (Mock)
const jwtAuthentication = () => {
  return "JWT authentication implemented";
};

// 11. Rate Limiting Middleware in Express.js (Mock)
const rateLimiting = () => {
  return "Rate limiting middleware added";
};

// 12. Upload and Retrieve an Image Using Multer (Mock)
const multerUpload = () => {
  return "Image upload and retrieval implemented";
};

// 13. Web Scraper Using Axios and Cheerio (Mock)
const webScraper = () => {
  return "Web scraping using Axios and Cheerio";
};

// 14. Generate a CSV Report from JSON Data (Mock)
const generateCSV = () => {
  return "CSV report generated from JSON data";
};

// 15. Implement Caching Using Redis (Mock)
const redisCaching = () => {
  return "Redis caching setup completed";
};

// 16. Send an Email Using Nodemailer (Mock)
const sendEmail = () => {
  return "Email sent using Nodemailer";
};

// 17. Implement a Basic WebSocket Server (Mock)
const websocketServer = () => {
  return "WebSocket server setup complete";
};

// 18. Perform Bulk Insert in MongoDB (Mock)
const bulkInsertMongoDB = () => {
  return "Bulk insert in MongoDB successful";
};

// 19. Fetch API Data and Store in Database (Mock)
const fetchAndStoreData = () => {
  return "API data fetched and stored in MongoDB";
};

// 20. Implement OAuth 2.0 Authentication (Mock)
const oauthAuthentication = () => {
  return "OAuth 2.0 authentication implemented";
};

const App = () => {
  const [openIndex, setOpenIndex] = useState(null);

  // Array of questions with corresponding outputs
  const questions = [
    {
      id: 1,
      question: "1. Find the Largest Number in an Array",
      output: `Largest number is ${largestNumber([1, 2, 3, 4, 5])}`
    },
    {
      id: 2,
      question: "2. Reverse a String",
      output: `Reversed string is "${reverseString("hello")}"`
    },
    {
      id: 3,
      question: "3. Check if a String is a Palindrome",
      output: `${isPalindrome("racecar")}`
    },
    {
      id: 4,
      question: "4. Find Prime Numbers in a Range",
      output: `Prime numbers up to 10: ${findPrimes(10).join(", ")}`
    },
    {
      id: 5,
      question: "5. Implement a Basic REST API with Express",
      output: `${expressAPI()}`
    },
    {
      id: 6,
      question: "6. Read and Write a File Using fs Module",
      output: `${fileReadWrite()}`
    },
    {
      id: 7,
      question: "7. Implement a Queue Using an Array",
      output: `${queueOperations()}`
    },
    {
      id: 8,
      question: "8. Implement a Stack Using an Array",
      output: `${stackOperations()}`
    },
    {
      id: 9,
      question: "9. CRUD Operations Using MongoDB and Mongoose",
      output: `${mongoDBCrud()}`
    },
    {
      id: 10,
      question: "10. JWT Authentication with Express.js",
      output: `${jwtAuthentication()}`
    },
    {
      id: 11,
      question: "11. Rate Limiting Middleware in Express.js",
      output: `${rateLimiting()}`
    },
    {
      id: 12,
      question: "12. Upload and Retrieve an Image Using Multer",
      output: `${multerUpload()}`
    },
    {
      id: 13,
      question: "13. Web Scraper Using Axios and Cheerio",
      output: `${webScraper()}`
    },
    {
      id: 14,
      question: "14. Generate a CSV Report from JSON Data",
      output: `${generateCSV()}`
    },
    {
      id: 15,
      question: "15. Implement Caching Using Redis",
      output: `${redisCaching()}`
    },
    {
      id: 16,
      question: "16. Send an Email Using Nodemailer",
      output: `${sendEmail()}`
    },
    {
      id: 17,
      question: "17. Implement a Basic WebSocket Server",
      output: `${websocketServer()}`
    },
    {
      id: 18,
      question: "18. Perform Bulk Insert in MongoDB",
      output: `${bulkInsertMongoDB()}`
    },
    {
      id: 19,
      question: "19. Fetch API Data and Store in Database",
      output: `${fetchAndStoreData()}`
    },
    {
      id: 20,
      question: "20. Implement OAuth 2.0 Authentication",
      output: `${oauthAuthentication()}`
    }
  ];

  // Function to toggle the output visibility
  const toggleOutput = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container">
      <h1 className="title">JavaScript and Node.js Problems</h1>
      <div className="question-list">
        {questions.map((q, index) => (
          <div key={q.id} className="question-item">
            <div className="question-text" onClick={() => toggleOutput(index)}>
              <strong>{q.question}</strong>
            </div>
            {openIndex === index && (
              <div className="output-box">
                <p><strong>Output:</strong> {q.output}</p>
              </div>
            )}
            <button
              className="toggle-btn"
              onClick={() => toggleOutput(index)}
            >
              {openIndex === index ? "Collapse" : "Show Output"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;

