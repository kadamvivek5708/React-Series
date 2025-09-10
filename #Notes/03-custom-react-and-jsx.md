# Summary: How React Actually Works & Building Your Own React (Chai aur Code)

### New Concepts & Important Points

* **Building a Custom React (Mini-Version)**
    * **Description:** The video walks through the process of creating a simplified version of React from scratch. This helps to demystify React and understand its core mechanics. `[00:00:20]`
    * **Example:** A `customRender` function is created that takes a JavaScript object (representing an HTML element) and renders it to the DOM. This mimics how React's `render` function works. `[00:09:12]`

* **React Element as a JavaScript Object**
    * **Description:** React doesn't directly understand the HTML-like JSX you write. It first converts it into a JavaScript object. This object describes the HTML element, its attributes, and its content. `[00:07:16]`
    * **Example:** The JSX `<a href="https://google.com" target="_blank">Click me</a>` is converted into an object like this:
        ```javascript
        {
            type: 'a',
            props: {
                href: '[https://google.com](https://google.com)',
                target: '_blank'
            },
            children: 'Click me'
        }
        ```

* **JSX and its Conversion**
    * **Description:** JSX is "syntactic sugar" that makes writing React code easier and more intuitive. Tools like Babel or Vite are used to transpile (convert) this JSX into regular JavaScript that React can understand, which are `React.createElement()` function calls. `[00:21:01]`
    * **Example:** Your JSX code is converted into `React.createElement()` calls behind the scenes.

* **`React.createElement()`**
    * **Description:** This is the function that JSX is converted into. It's the core way that React creates elements. It takes three arguments: the element type, its properties (props), and its children. `[00:30:45]`
    * **Example:**
        ```javascript
        React.createElement(
            'a',
            { href: '[https://google.com](https://google.com)', target: '_blank' },
            'Click me to visit Google'
        )
        ```

* **Embedding Variables in JSX (Evaluated Expressions)**
    * **Description:** You can inject JavaScript variables and expressions directly into your JSX by wrapping them in curly braces `{}`. However, you can only use **evaluated expressions** inside the curly braces, meaning you can't write `if-else` statements or `for` loops directly within JSX. `[00:34:35]`
    * **Example:**
        ```javascript
        const username = "Ganu";
        return <h1>Hello, {username}</h1>;
        ```

### Important Points Mentioned

* **React is Not Magic:** By building a mini-version of React, you can see that it's just well-structured JavaScript, not a "black box."
* **Understanding the "Why":** Understanding how React works under the hood gives you more confidence and helps you write better, more efficient code.
* **Explore the Source Code:** The instructor encourages looking at the official React source code on GitHub to get a deeper understanding of how it all works.