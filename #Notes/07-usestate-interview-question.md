# Summary: useState Interview Question - Batching & Callbacks (Chai aur Code)

### The Interview Scenario `[00:00:43]`

A very common React interview question is to build a simple counter and then predict the output when the state update function (`setCounter`) is called multiple times within the same event handler.

**The "Trick" Question:**
If your current counter value is **15**, what will the new value be after this code runs?
```jsx
const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
    setCounter(counter + 1);
};
```

Most people would guess 19, but the correct answer is 16.

New Concepts & Important Points
State Updates are Batched [00:03:36]

Description: React is smart about performance. When you call setCounter multiple times in a row within the same function, React doesn't perform each update one by one. Instead, it batches them together into a single update to avoid unnecessary re-renders.

Why the Output is 16: In the example above, every single setCounter(counter + 1) call sees the same initial value of counter (which is 15). So, React batches four instructions that all say "set the counter to 16". The final result is just a single increment.

The Solution: Using a Callback Function [00:05:07]

Description: To get around batching and ensure each update happens sequentially, you can pass a callback function to your state setter. This function automatically receives the previous state as its argument. This is the recommended way to update state when the new state depends on the old state.

How it Works: The callback ensures that each update is calculated using the most recent state value, not the initial state value when the function was called.