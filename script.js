function calculate(expression) {
    // Replace `×` with `*` before evaluating the expression
    expression = expression.replace(/×/g, '*');

    try {
        // Evaluate the expression
        let result = eval(expression);
        return result;
    } catch (error) {
        return "Error";
    }
}
