# Summary: Create React Projects (Chai aur Code)

### New Concepts & Tools Introduced

* **VS Code**
    * **Description:** A popular and versatile code editor for writing and editing code. While the instructor uses VS Code, you can also use other editors like Vim or Sublime Text.
    * **Example:** The video demonstrates how to open and use VS Code to set up and write code for the project. `[00:02:01]`

* **Node.js**
    * **Description:** A JavaScript runtime environment that lets you run JavaScript code on your computer, outside of a web browser.
    * **Example:** You can check if Node.js is installed by running the command `node -v` in your terminal, which will show you the version you have installed. `[00:02:15]`

* **React Documentation (react.dev)**
    * **Description:** The official documentation for React. It's a key resource for learning and keeping up-to-date with the latest features of the library.
    * **Example:** The video shows the `react.dev` website and points out the "Quick Start" and "Thinking in React" sections as valuable learning resources. `[00:03:13]`

* **React Core Library vs. Attachments**
    * **Description:** React itself is a core library, but to build applications for different platforms, you need to use additional libraries:
        * `react-dom`: For building websites.
        * `react-native`: For building mobile applications.
    * **Example:** The instructor explains that to create a website, you combine the `react` library with `react-dom`. `[00:09:35]`

* **NPM (Node Package Manager) and NPX (Node Package Executor)**
    * **Description:**
        * **NPM:** A tool that comes with Node.js and is used to install and manage JavaScript libraries for your projects.
        * **NPX:** A tool used to run Node.js packages without having to install them on your computer, which is very useful for running commands that you only need to use once.
    * **Example:** The command `npx create-react-app 01-basic-react` is used to create a new React project without having to globally install `create-react-app`. `[00:11:25]`

* **`create-react-app`**
    * **Description:** A command-line tool for quickly setting up a new React project. However, the instructor notes that it can be a bit "bulky" and include many files you might not need.
    * **Example:** The video demonstrates how to create a new React project by running `npx create-react-app 01-basic-react`. `[00:12:00]`

* **Vite**
    * **Description:** A modern and fast frontend development tool that provides a leaner and quicker development experience for React. It's recommended as a faster alternative to `create-react-app`.
    * **Example:** To create a new React project with Vite, you can use the command `npm create vite@latest`. `[00:20:01]`

* **`package.json`**
    * **Description:** A file in a Node.js project that contains important information about the project, such as its name, version, and a list of all the libraries it depends on.
    * **Example:** The video shows how to look at the `package.json` file to see the project's dependencies and the available scripts like `start`, `build`, and `test`. `[00:14:30]`

* **Project Scripts (`start`, `build`, `test`)**
    * **Description:** These are commands defined in the `package.json` file to automate common tasks:
        * `start`: Runs the project in a development mode.
        * `build`: Prepares the project for production by converting the React code into regular HTML, CSS, and JavaScript.
        * `test`: Runs all the test cases for the project.
    * **Example:** You can run the development server by using the command `npm run start`. `[00:15:30]`

* **`node_modules`**
    * **Description:** A folder that contains all the installed libraries and packages that your project needs to run. It's usually a very large folder.
    * **Example:** The video points out the `node_modules` folder in the project and explains that it's created when you run `npm install`. `[00:14:23]`

* **`npm install` (or `npm i`)**
    * **Description:** A command used to download and install all the libraries and packages that are listed in the `package.json` file.
    * **Example:** After creating a project with Vite, you need to run `npm install` inside the project directory to install all the necessary dependencies. `[00:23:43]`

* **Project Cleaning / Editing**
    * **Description:** The process of removing unnecessary files and code that are automatically generated when you create a new project. This helps to simplify the project and makes it easier to understand.
    * **Example:** The instructor deletes files like `setupTests.js`, `logo.svg`, and `App.css` from the project to reduce complexity and show a simple "Hello World" example. `[00:25:05]`

### Important Points Mentioned

* **Learning Approach:** The instructor recommends a hands-on approach to learning by creating projects and experimenting with the code, rather than just watching videos.
* **Documentation is Key:** While videos are useful, it's important to learn how to read and use the official documentation to stay updated and develop good learning habits.
* **Vite over Create React App:** For new projects, Vite is recommended because it is faster and creates a more lightweight project compared to `create-react-app`.
* **Understanding the Build Process:** The `build` command is important because it converts your React code into standard HTML, CSS, and JavaScript that can be understood by web browsers.
* **Confidence in Modifying Code:** Don't be afraid to modify and clean up the code in your projects. This will help you gain a better understanding of how everything works.