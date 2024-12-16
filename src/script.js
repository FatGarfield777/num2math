// Simplified script for generating LaTeX expressions based on input number

document.addEventListener("DOMContentLoaded", function() {
    const inputNumber = document.getElementById("number-input");
    const resultDiv = document.getElementById("result");

    // Function to generate LaTeX expressions
    function generateLatex(number) {
        let latexExpressions = [];

        // Simple transformations
        latexExpressions.push(`x = ${number}`); // Basic assignment
        latexExpressions.push(`x^2 = ${Math.pow(number, 2)}`); // Square
        latexExpressions.push(`\\sqrt{x} = ${Math.sqrt(number).toFixed(2)}`); // Square root

        // Advanced transformations
        latexExpressions.push(`\\frac{1}{x} = ${(1 / number).toFixed(2)}`); // Reciprocal
        latexExpressions.push(`\\ln(x) = ${Math.log(number).toFixed(2)}`); // Natural log
        latexExpressions.push(`e^x = ${Math.exp(number).toFixed(2)}`); // Exponential

        // Trigonometric transformations
        latexExpressions.push(`\\sin(x) = ${Math.sin(number).toFixed(2)}`); // Sine
        latexExpressions.push(`\\cos(x) = ${Math.cos(number).toFixed(2)}`); // Cosine
        latexExpressions.push(`\\tan(x) = ${Math.tan(number).toFixed(2)}`); // Tangent

        return latexExpressions;
    }

    // Function to display results
    function displayResults() {
        const number = parseFloat(inputNumber.value);
        if (isNaN(number)) {
            resultDiv.innerHTML = "<p>Please enter a valid number.</p>";
            return;
        }

        const latexExpressions = generateLatex(number);

        // Convert LaTeX to HTML
        const htmlContent = latexExpressions.map(expr => `\\[${expr}\\]`).join("<br>");
        resultDiv.innerHTML = htmlContent;

        // Render with MathJax
        MathJax.typesetPromise([resultDiv]);
    }

    // Event listener for input changes
    inputNumber.addEventListener("input", displayResults);

    // Initial rendering
    displayResults();
});
