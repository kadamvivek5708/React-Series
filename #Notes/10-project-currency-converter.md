# Summary: Project 3 - Currency Converter with Custom Hooks (Chai aur Code)

This video walks through building a more advanced project, a currency converter. It introduces the powerful concept of custom hooks to create reusable, stateful logic.

### New Concepts & Important Points

* **Custom Hooks** `[00:09:53]`
    * **Description:** A custom hook is a reusable JavaScript function whose name starts with "use" and that can call other hooks (like `useState` and `useEffect`). This is a core concept for sharing logic between components without repeating code.
    * **Example:** A `useCurrencyInfo` hook is created to fetch and manage the currency data from an API. Any component can now use this hook to get currency information without needing to write its own fetching logic.

* **Fetching Data from an API** `[00:12:51]`
    * **Description:** This project uses a real-world currency API to get live exchange rates. The `fetch` API is used within a `useEffect` hook to get the data.
    * **Example:** The `useCurrencyInfo` hook fetches data from a URL. When the base currency changes (e.g., from 'usd' to 'inr'), `useEffect` triggers a new API call to get the updated rates.

* **Component Reusability** `[00:22:11]`
    * **Description:** The project emphasizes creating a generic `InputBox` component that can be used for both the "From" and "To" fields. This is a key principle of clean React development.
    * **Example:** The `InputBox` component accepts various props (`label`, `amount`, `onAmountChange`, `currencyOptions`, etc.) to make it highly configurable and reusable throughout the application.

* **`useId` Hook** `[00:39:56]`
    * **Description:** The `useId` hook generates unique and stable IDs that can be used to link labels and inputs for accessibility (`htmlFor` and `id`). This is the recommended way to create unique IDs in React.
    * **Important Note:** The video explicitly warns **not** to use `useId` to generate `keys` for lists, as the IDs are not guaranteed to be stable for that purpose.

* **Modular Component Exports (`index.js`)** `[00:39:03]`
    * **Description:** A professional practice for organizing components. An `index.js` file is created in the `components` folder to export all components from one central place.
    * **Benefit:** This makes imports cleaner. Instead of `import InputBox from './components/InputBox'`, you can do `import { InputBox } from './components'`.

* **Conditional Function Calls** `[00:30:45]`
    * **Description:** To avoid errors if a function prop (like `onAmountChange`) is not passed to a component, you can use the `&&` operator to call it conditionally.
    * **Example:** `onAmountChange && onAmountChange(...)` ensures the function is only called if it actually exists.