# odin-calculator
The goal of this project is to build a working basic calculator to practice skills with HTML, CSS, and Javascript.

Goal functions: add, subtract, multiply, divide

Calculation will consist of a number, an operator, and another number

Function operate will take the two numbers and operator, and call one of the functions

1. Create basic HTML using buttons for digits and operators
2. Create functions to populate the display when a button is clicked. 
    Store that content for next steps
3. Make calculator work! Store variables and operator input and use function operate when = 
is pressed. Then update the display.

### Things to watch out for:
- Only evaluate one pair of numbers at a time
- Round values with long decimals
- Pressing "clear" should reset the calculator
- Display error (must be hilarious) when user tries to divide by 0
- Should only run the operation with two numbers and an operator. 
        If multiple operators are pressed, only use the last one entered.
- When result is displayed, pressing a new digit should clear the result and start a new operation

### Extra credit
- Add a . to allow users to input floats (disable the button if it has already been used in the number)
- Add a backspace button
- Add keyboard support
