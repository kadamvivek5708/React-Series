# Summary: MegaBlog Part 2 - Environment Variables & Appwrite Setup

This video covers the practical setup of the React project and the configuration of the Appwrite backend, with a deep dive into environment variables.

### Key Concepts & Important Points

* **Environment Variables (`.env`)**
    * **Critical for Security:** Used to store all sensitive Appwrite credentials (Project ID, URL, Database ID, etc.) to keep them out of the frontend code. `[00:08:36]`
    * **Vite vs. Create React App:** The video highlights a crucial difference:
        * **Vite:** Variables must be prefixed with `VITE_` and are accessed via `import.meta.env.VITE_VARIABLE_NAME`. `[00:15:46]`
        * **Create React App:** Variables must be prefixed with `REACT_APP_` and are accessed via `process.env.REACT_APP_VARIABLE_NAME`.
    * **`.env.sample`:** A best practice is to create a `.env.sample` file (which is committed to Git) to serve as a template for other developers, showing which variables are needed without exposing the actual secret values. `[00:11:34]`

* **Appwrite Configuration**
    * **Project Setup:** The video walks through creating a new project, database, collection (for articles), and storage bucket (for images) in the Appwrite console.
    * **Permissions are Crucial:** It's emphasized that you must set the correct read/write permissions for your database collections and storage buckets, as this is a common point of failure. `[00:23:19]`
    * **Defining Attributes & Indexes:** The video shows how to define the schema for the "Articles" collection, including attributes like `title`, `content`, `featuredImage`, `status`, and `userId`. An index is created on the `status` attribute for efficient querying. `[00:25:33]`

* **Centralized Config File** `[00:29:14]`
    * **Best Practice:** A `config.js` file is created to import all environment variables from `import.meta.env` and export them from a single, clean object. This makes accessing config variables consistent across the entire application and helps prevent typos.