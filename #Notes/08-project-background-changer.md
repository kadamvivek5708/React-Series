# Summary: Project 1 - Background Changer (Chai aur Code)

This video walks through building the first hands-on project to solidify core React concepts. The goal is to build an app where clicking colored buttons changes the background color of the page.

### New Concepts & Important Points

* **Project-Based Learning** `[00:00:22]`
    * **Description:** The instructor emphasizes moving from theory to practice. Building small, focused projects like this one is the best way to gain confidence and truly understand how React concepts work together.

* **Using `useState` for UI Changes** `[00:05:52]`
    * **Description:** The `useState` hook is used to manage the current background color. The entire UI is designed to "react" to changes in this single piece of state.
    * **Example:**
        ```javascript
        // 'color' holds the current color, 'setColor' is the function to change it.
        const [color, setColor] = useState("olive");
        ```

* **Applying Dynamic Inline Styles** `[00:07:57]`
    * **Description:** In React, you can apply inline styles using a JavaScript object. The property names are written in camelCase (e.g., `backgroundColor` instead of `background-color`). This allows you to set styles dynamically using variables from your component's state.
    * **Example:**
        ```jsx
        // The background color of this div is tied directly to the 'color' state.
        <div className="w-full h-screen duration-200"
             style={{ backgroundColor: color }}>
            {/* ... content ... */}
        </div>
        ```

* **Correctly Using `onClick` with Parameters** `[00:13:58]`
    * **Description:** This is a crucial and often misunderstood concept. When you need to pass an argument to a function in an `onClick` handler, you **must** wrap it in an anonymous arrow function.
    * **Why?** The `onClick` prop expects a **function reference**, not a function call.
    * **❌ Wrong Way:** `onClick={setColor("red")}`
        * This *calls* `setColor("red")` immediately when the component renders, which is not what you want.
    * **✅ Correct Way:** `onClick={() => setColor("red")}`
        * This passes an arrow function that, when the button is clicked, will then call `setColor("red")`. This ensures the function only executes on a click.