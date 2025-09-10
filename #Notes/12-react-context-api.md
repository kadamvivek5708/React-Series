# Summary: React Context API (Chai aur Code)

This video explains React's built-in **Context API**, a powerful feature for managing global state and solving the problem of "prop drilling."

### The Problem: Prop Drilling `[00:09:41]`

* **Description:** **Prop drilling** is when you have to pass data (props) down through multiple layers of nested components, even if the components in the middle don't need the data themselves. This makes code messy and hard to maintain. ⛓️
* **Example:** Imagine needing user data in a deeply nested `Profile` component. You would have to pass the `user` prop from `App` -> `Dashboard` -> `Sidebar` -> `Profile`, even though `Dashboard` and `Sidebar` don't use it.

---

### The Solution: Context API `[00:00:33]`

The Context API creates a global "store" for data that any component can access without needing props.

### New Concepts & Important Points

* **`createContext`**
    * **Description:** This is the first step. You create a new context, which is like a container for your global data. You can optionally provide a default value.
    * **Example:** `const UserContext = React.createContext(null);`

* **`Context.Provider`** `[00:09:59]`
    * **Description:** The `Provider` is a component that "provides" the context data to all of its children. You wrap your component tree (or a part of it) with this provider and pass the data you want to share into its `value` prop.
    * **Example:**
        ```jsx
        <UserContext.Provider value={{ user, setUser }}>
            <Login />
            <Profile />
        </UserContext.Provider>
        ```

* **`useContext` Hook** `[00:30:49]`
    * **Description:** This hook is used inside any child component to "consume" or access the data from the nearest `Provider` up the tree.
    * **Example:**
        ```jsx
        // Inside the Profile component
        import { useContext } from 'react';
        import UserContext from './UserContext';

        function Profile() {
            const { user } = useContext(UserContext);
            return <div>Welcome, {user.username}!</div>;
        }
        ```

* **Custom Hooks for Context** `[01:07:09]`
    * **Description:** It's a best practice to create a simple custom hook for your context. This makes consuming the context cleaner and more straightforward.
    * **Example:**
        ```javascript
        // In your ThemeContext.js
        export const useTheme = () => {
            return useContext(ThemeContext);
        }

        // Now in another component, you can just do:
        const { themeMode } = useTheme();
        ```

* **Tailwind Dark Mode Setup** `[01:09:48]`
    * **Description:** To enable class-based theme switching (e.g., adding a `dark` class to the `<html>` tag), you must set `darkMode: 'class'` in your `tailwind.config.js` file.

### Key Takeaway

The **Context API** is React's built-in solution for managing global state, making your code cleaner and avoiding the headache of prop drilling. For more complex applications, you might look into libraries like Redux or Zustand, but Context is perfect for many use cases like theming, user authentication, and more.