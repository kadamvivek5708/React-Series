# Summary: MegaBlog Part 3 - Building an Auth Service

This video introduces a professional software design pattern: creating a **service layer** to handle all interactions with the Appwrite backend, making the code modular and "future-proof."

### Core Concept: Services to Avoid Vendor Lock-in

* **What is a Service?** `[00:01:06]`
    * **Description:** A "service" is a class or object that encapsulates all the logic for interacting with a specific third-party API (like Appwrite). The rest of your application will only call methods on your service, not directly on the Appwrite SDK.
    * **Why is this important? (Avoiding Vendor Lock-in):** If you ever decide to switch from Appwrite to another backend (like Firebase), you only need to rewrite the code inside your service file. The rest of your application (your components, pages, etc.) remains unchanged, saving a massive amount of refactoring effort. `[00:15:28]`

### Key Methods Implemented in `AuthService`

* The video demonstrates creating an `AuthService` class with methods for all authentication-related tasks. Each method is `async` and wrapped in a `try...catch` block for robust error handling.
    * **`createAccount({email, password, name})`:** Registers a new user. `[00:11:03]`
    * **`login({email, password})`:** Creates a new session for an existing user. `[00:16:03]`
    * **`getCurrentUser()`:** Checks if a user is currently logged in and returns their data. `[00:19:02]`
    * **`logout()`:** Deletes the user's session. `[00:22:41]`

* **Singleton Pattern** `[00:05:49]`
    * **Description:** The video exports a single instance of the `AuthService` class (`export default new AuthService();`). This ensures that only one connection to Appwrite is established and used throughout the entire application, which is efficient and prevents potential issues.


<details>
<summary>Click to expand AUTH SERVICE code</summary>

```javascript
//This id a Production Grade Code with Future Proof

import conf from '../conf/conf';
import {Client , Account , ID} from 'appwrite';

export class AuthService{
    client = new Client();
    account;

    constructur(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.account(new Account(this.client));
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique(), email,password,name);
            if (userAccount) {
                //call another method
                return this.login({email,password})
            } else {
                return userAccount;
            }
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
            const userLogin = await this.account.createEmailSession(email, password);
            return userLogin;
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            const status = await this.account.get();
            return status;
        } catch (error) {
            throw error;
        }
        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService();
export default authService;
```
</details> 