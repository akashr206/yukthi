"use client";
import { useState,useEffect,useRef } from "react";
import { useRouter } from "next/navigation";
const chapters= [
        {
            chapterNumber: 1,
            chapterTitle: "Introduction to JavaScript",
            chapterDescription:
                "Learn the fundamentals of JavaScript, its history, and how it's used in web development.",
            learningObjectives: [
                "Understand what JavaScript is and its role in web development.",
                "Learn about the history of JavaScript.",
                "Set up a development environment for JavaScript.",
                "Write and execute basic JavaScript code.",
                "Understand the different ways to include JavaScript in HTML.",
            ],
            contentOutline: [
                "What is JavaScript? (Definition, purpose, and role in web development)",
                "History of JavaScript (Brendan Eich, Netscape, ECMAScript)",
                "Setting up a Development Environment (Text editors, browsers, developer tools)",
                "Your First JavaScript Program (Writing and executing 'Hello, World!')",
                "Including JavaScript in HTML (Inline, internal, and external JavaScript)",
                "Introduction to the console (console.log())",
            ],
            suggestedActivities: [
                "Write a program that displays a personalized greeting message using JavaScript.",
                "Experiment with different ways to include JavaScript in an HTML file.",
                "Explore the browser's developer console and its features.",
            ],
        },
        {
            chapterNumber: 2,
            chapterTitle:
                "JavaScript Basics: Variables, Data Types, and Operators",
            chapterDescription:
                "Explore the core concepts of variables, data types, and operators in JavaScript.",
            learningObjectives: [
                "Declare and initialize variables in JavaScript.",
                "Understand different data types (number, string, boolean, null, undefined, symbol, object).",
                "Use arithmetic, comparison, logical, and assignment operators.",
                "Understand type coercion in JavaScript.",
                "Learn about operator precedence.",
            ],
            contentOutline: [
                "Variables (Declaration, initialization, and scope)",
                "Data Types (Primitive and non-primitive data types)",
                "Operators (Arithmetic, comparison, logical, assignment, ternary)",
                "Type Coercion (Implicit and explicit type conversion)",
                "Operator Precedence (Understanding the order of operations)",
                "Introduction to `let` and `const`",
            ],
            suggestedActivities: [
                "Create a program that calculates the area of a rectangle using variables and operators.",
                "Experiment with different data types and observe their behavior.",
                "Practice using comparison and logical operators to make decisions in your code.",
                "Explore the difference between `var`, `let`, and `const`.",
            ],
        },
        {
            chapterNumber: 3,
            chapterTitle: "Control Flow: Conditionals and Loops",
            chapterDescription:
                "Learn how to control the flow of your JavaScript code using conditionals and loops.",
            learningObjectives: [
                "Use `if`, `else if`, and `else` statements for conditional execution.",
                "Implement loops using `for`, `while`, and `do...while` statements.",
                "Use `break` and `continue` statements to control loop execution.",
                "Understand nested loops.",
            ],
            contentOutline: [
                "Conditional Statements (`if`, `else if`, `else`)",
                "Loops (`for`, `while`, `do...while`)",
                "Break and Continue Statements",
                "Nested Loops (Loops within loops)",
                "Switch Statement (Alternative to `if-else if-else`)",
            ],
            suggestedActivities: [
                "Write a program that determines whether a number is positive, negative, or zero using conditional statements.",
                "Create a program that prints the multiplication table for a given number using loops.",
                "Implement a program that finds the factorial of a number using a loop.",
                "Use a `switch` statement to determine the day of the week based on a number.",
            ],
        },
        {
            chapterNumber: 4,
            chapterTitle: "Functions in JavaScript",
            chapterDescription:
                "Understand the concept of functions and how to create and use them in JavaScript.",
            learningObjectives: [
                "Define and call functions.",
                "Pass arguments to functions.",
                "Return values from functions.",
                "Understand function scope.",
                "Learn about anonymous functions and arrow functions.",
                "Understand Immediately Invoked Function Expressions (IIFE).",
            ],
            contentOutline: [
                "Defining Functions (Function declaration and function expression)",
                "Calling Functions",
                "Function Arguments (Passing data to functions)",
                "Return Values (Returning data from functions)",
                "Function Scope (Local and global scope)",
                "Anonymous Functions and Arrow Functions",
                "Immediately Invoked Function Expressions (IIFE)",
            ],
            suggestedActivities: [
                "Create a function that calculates the average of an array of numbers.",
                "Write a function that reverses a string.",
                "Implement a function that checks if a number is prime.",
                "Create an IIFE that initializes a variable.",
            ],
        },
        {
            chapterNumber: 5,
            chapterTitle: "Objects and Arrays",
            chapterDescription:
                "Explore objects and arrays, fundamental data structures in JavaScript.",
            learningObjectives: [
                "Create and manipulate objects.",
                "Access object properties using dot notation and bracket notation.",
                "Add, modify, and delete object properties.",
                "Create and manipulate arrays.",
                "Access array elements.",
                "Use common array methods (push, pop, shift, unshift, slice, splice, map, filter, reduce).",
                "Understand the difference between primitive and reference types.",
            ],
            contentOutline: [
                "Objects (Creating objects, properties, and methods)",
                "Accessing Object Properties (Dot notation and bracket notation)",
                "Adding, Modifying, and Deleting Object Properties",
                "Arrays (Creating arrays, elements, and indexing)",
                "Accessing Array Elements",
                "Array Methods (push, pop, shift, unshift, slice, splice, map, filter, reduce, forEach)",
                "Primitive vs. Reference Types (Understanding the difference)",
            ],
            suggestedActivities: [
                "Create an object representing a book with properties like title, author, and ISBN.",
                "Write a program that iterates through an array and prints each element.",
                "Implement a function that filters an array of numbers to return only the even numbers.",
                "Use the `map` method to transform an array of strings to uppercase.",
            ],
        },
        {
            chapterNumber: 6,
            chapterTitle: "DOM Manipulation",
            chapterDescription:
                "Learn how to interact with the Document Object Model (DOM) to dynamically modify web page content and structure.",
            learningObjectives: [
                "Understand the DOM structure and its representation in JavaScript.",
                "Select HTML elements using different methods (getElementById, getElementsByClassName, querySelector, querySelectorAll).",
                "Modify HTML content (innerHTML, textContent).",
                "Change element attributes (setAttribute, getAttribute).",
                "Add and remove HTML elements dynamically.",
                "Manipulate CSS styles using JavaScript.",
            ],
            contentOutline: [
                "Introduction to the DOM (Document Object Model)",
                "Selecting HTML Elements (getElementById, getElementsByClassName, querySelector, querySelectorAll)",
                "Modifying HTML Content (innerHTML, textContent)",
                "Changing Element Attributes (setAttribute, getAttribute)",
                "Adding and Removing HTML Elements (createElement, appendChild, removeChild)",
                "Manipulating CSS Styles (style property)",
            ],
            suggestedActivities: [
                "Create a button that changes the background color of a page when clicked.",
                "Write a script that dynamically adds list items to an unordered list.",
                "Implement a program that updates the content of a paragraph based on user input.",
                "Create a simple image slider using DOM manipulation.",
            ],
        },
        {
            chapterNumber: 7,
            chapterTitle: "Event Handling",
            chapterDescription:
                "Learn how to handle events in JavaScript, allowing your web pages to respond to user interactions.",
            learningObjectives: [
                "Understand the concept of events in JavaScript.",
                "Attach event listeners to HTML elements.",
                "Handle common events (click, mouseover, keypress, submit).",
                "Prevent default event behavior.",
                "Understand event bubbling and capturing.",
                "Use event delegation.",
            ],
            contentOutline: [
                "Introduction to Events (Event types, event listeners)",
                "Attaching Event Listeners (addEventListener)",
                "Common Events (click, mouseover, keypress, submit, load)",
                "Preventing Default Behavior (preventDefault)",
                "Event Bubbling and Capturing",
                "Event Delegation",
            ],
            suggestedActivities: [
                "Create a button that displays an alert message when clicked.",
                "Write a script that changes the color of an element when the mouse hovers over it.",
                "Implement a form that validates user input before submission.",
                "Use event delegation to handle clicks on dynamically added elements.",
            ],
        },
        {
            chapterNumber: 8,
            chapterTitle: "Asynchronous JavaScript and Promises",
            chapterDescription:
                "Dive into asynchronous programming with callbacks and promises.",
            learningObjectives: [
                "Understand asynchronous JavaScript and its importance.",
                "Use callbacks to handle asynchronous operations.",
                "Learn about the problems with callbacks (callback hell).",
                "Understand promises and their states (pending, resolved, rejected).",
                "Use `then`, `catch`, and `finally` methods with promises.",
                "Use `async/await` syntax for cleaner asynchronous code.",
            ],
            contentOutline: [
                "Introduction to Asynchronous JavaScript (Single-threaded nature of JavaScript)",
                "Callbacks (Handling asynchronous operations)",
                "Callback Hell (The problems with nested callbacks)",
                "Promises (Introduction to Promises)",
                "Promise States (Pending, resolved, rejected)",
                "Using `then`, `catch`, and `finally`",
                "Async/Await (Cleaner asynchronous code)",
            ],
            suggestedActivities: [
                "Simulate an asynchronous operation using `setTimeout` and callbacks.",
                "Convert a callback-based function to use promises.",
                "Create a function that fetches data from an API using `fetch` and promises.",
                "Implement an error handling mechanism using `catch`.",
            ],
        },
        {
            chapterNumber: 9,
            chapterTitle: "Fetch API and Working with APIs",
            chapterDescription:
                "Learn how to use the Fetch API to make HTTP requests and interact with external APIs.",
            learningObjectives: [
                "Understand the Fetch API and its advantages.",
                "Make GET, POST, PUT, and DELETE requests using Fetch.",
                "Handle responses and parse JSON data.",
                "Set request headers.",
                "Handle errors and network issues.",
                "Understand Cross-Origin Resource Sharing (CORS).",
            ],
            contentOutline: [
                "Introduction to the Fetch API",
                "Making GET Requests",
                "Making POST, PUT, and DELETE Requests",
                "Handling Responses and Parsing JSON Data",
                "Setting Request Headers",
                "Error Handling and Network Issues",
                "Cross-Origin Resource Sharing (CORS)",
            ],
            suggestedActivities: [
                "Fetch data from a public API (e.g., JSONPlaceholder) and display it on a web page.",
                "Implement a form that sends data to an API using a POST request.",
                "Handle errors gracefully when fetching data from an API.",
                "Experiment with different request headers.",
            ],
        },
        {
            chapterNumber: 10,
            chapterTitle:
                "Introduction to JavaScript Frameworks (React, Angular, Vue)",
            chapterDescription:
                "Get an overview of popular JavaScript frameworks and their benefits.",
            learningObjectives: [
                "Understand the purpose and benefits of JavaScript frameworks.",
                "Learn about React, Angular, and Vue.js.",
                "Understand the basic concepts of each framework (components, data binding, routing).",
                "Choose the right framework for your project.",
                "Set up a basic project with one of the frameworks.",
            ],
            contentOutline: [
                "Why Use JavaScript Frameworks? (Benefits and use cases)",
                "Introduction to React (Components, JSX, Virtual DOM)",
                "Introduction to Angular (Modules, components, directives, services)",
                "Introduction to Vue.js (Components, template syntax, reactivity)",
                "Choosing the Right Framework (Factors to consider)",
                "Setting Up a Basic Project (Using Create React App, Angular CLI, Vue CLI)",
            ],
            suggestedActivities: [
                "Explore the official documentation of React, Angular, and Vue.js.",
                "Set up a basic project with one of the frameworks using the respective CLI tool.",
                "Create a simple component in each framework to display some data.",
                "Compare the different approaches to data binding in each framework.",
            ],
        },
    ];

    export default function Sidebar() {
        const [overviewBar, setOverviewBar] = useState(true);
        const [expandedChapters, setExpandedChapters] = useState({});
        const router = useRouter();
    
        const toggleChapter = (index) => {
            setExpandedChapters((prev) => ({
                ...prev,
                [index]: !prev[index],
            }));
        };
    
        const routetopage = (title, idx) => {
            const formattedTitle = title.toLowerCase().replace(/\s+/g, "-"); // Format title as a URL slug
            router.push(`/chapter-test/${formattedTitle}/${idx }`);
        };
    
        return (
            <div className="w-full h-fit transition ease-out duration-1000 md:w-96 rounded-3xl border border-[#e5e5e5] shadow-sm p-6 flex flex-col gap-4">
                <button
                    onClick={() => setOverviewBar(!overviewBar)}
                    className="w-full bg-black text-white dark:text-black dark:bg-white rounded-full py-4 font-medium"
                >
                    {overviewBar ? "Hide Overview" : "Show Overview"}
                </button>
    
                {overviewBar && (
                    <div className="flex flex-col">
                        {chapters.map((chapter, index) => (
                            <div key={index} className="w-full text-[15px] py-1 my-1 font-medium">
                                <button
                                    onClick={() => toggleChapter(index)}
                                    className="w-full text-left px-2 hover:cursor-pointer font-semibold rounded-md"
                                >
                                    {`${index + 1}. ${chapter.chapterTitle}`}
                                </button>
    
                                {expandedChapters[index] && (
                                    <div className="pl-4 mt-2">
                                        {chapter.contentOutline.map((content, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => routetopage(chapter.chapterTitle, idx)}
                                                className="block w-full text-start text-[10px] text-gray-600 py-1 hover:bg-gray-200 rounded-md"
                                            >
                                                {content}
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        );
    }