Sure, here is the updated content in a proper format for a README.md file:

## Counter Component

This is a React TypeScript function component that includes three buttons (+, -, and Reset) and an input box to enter a step value number. When the user clicks on the + button, the counter value increases based on the given step value, and when they click on the - button, the counter value decreases. 
When the user clicks on the Reset button, it sets the default counter value to 0. If the user enters a negative value in the input box, the + and - buttons will be disabled. 
The current counter value will be displayed in a div.

### Usage

1. Clone the repository.

2. Install dependencies:

   ```
   yarn install
   ```

3. Run the application:

   ```
   yanr start
   ```

### Props

- `defaultValue`: A number that represents the initial value of the step.

### Example

```typescript
import React from 'react';
import Counter from './Counter';

function App() {
  return <Counter defaultValue={1} />;
}

export default App;
```

### Contributing

Contributions are welcome. Feel free to open a pull request or an issue if you find any bugs or have any suggestions.

### License

This project is licensed under the [MIT License](LICENSE).