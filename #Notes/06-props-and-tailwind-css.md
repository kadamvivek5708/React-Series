# Summary: Props and Tailwind CSS (Chai aur Code)

### New Concepts & Important Points

* **Tailwind CSS Setup** `[00:04:52]`
    * **Description:** Tailwind CSS is a utility-first CSS framework that allows you to build custom designs directly in your HTML (or JSX) by applying pre-existing classes.
    * **Setup Steps:**
        1.  Install Tailwind, PostCSS, and Autoprefixer: `npm install -D tailwindcss postcss autoprefixer`.
        2.  Initialize Tailwind: `npx tailwindcss init -p`. This creates `tailwind.config.js` and `postcss.config.js`.
        3.  Configure Content Paths: In `tailwind.config.js`, tell Tailwind where your files are so it can scan them for classes.
        4.  Import Directives: Add `@tailwind base;`, `@tailwind components;`, and `@tailwind utilities;` to your main `index.css` file.
    * **Example:**
        ```jsx
        <h1 className="bg-green-400 p-4 rounded-xl text-black">
            Tailwind Test
        </h1>
        ```

---

* **Props (Properties)** `[00:14:04]`
    * **Description:** Props are the way you pass data from a parent component down to a child component. They make your components **reusable** and **dynamic**. Think of them as arguments you pass to a function.
    * **Why Use Props?** Instead of hard-coding data into a component (like a user's name on a profile card), you can pass that data in as a prop. This allows you to use the same `Card` component for many different users.

* **Passing Props** `[00:18:25]`
    * **Description:** You pass props to a component as if they were HTML attributes.
    * **Example (In the parent `App.jsx`):**
        ```jsx
        // Here, 'username' and 'btnText' are props being passed to the Card component
        <Card username="Ganu" btnText="Click Me" />
        <Card username="Vivek" btnText="Visit Profile" />
        ```

* **Receiving and Using Props** `[00:22:54]`
    * **Description:** Inside the child component, the props are received as a single object. It's best practice to destructure this object to pull out the specific values you need.
    * **Example (In the child `Card.jsx`):**
        ```jsx
        // Destructuring { username, btnText } from the props object
        function Card({ username, btnText }) {
            return (
                <div>
                    <h1>{username}</h1>
                    <button>{btnText}</button>
                </div>
            );
        }
        ```

* **Default Values for Props** `[00:28:43]`
    * **Description:** You can set default values for props. If a parent component doesn't pass a certain prop, the child component will use the default value instead. This prevents errors and makes your components more robust.
    * **Example (In the child `Card.jsx`):**
        ```jsx
        // If btnText is not provided, it will default to "Visit Me"
        function Card({ username, btnText = "Visit Me" }) {
            // ... component code
        }
        ```