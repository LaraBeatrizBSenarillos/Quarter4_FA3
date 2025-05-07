function generateShape(event) {
    event.preventDefault(); 

    const input = document.getElementById("numberI").value;
    const number = parseInt(input);

    if (isNaN(number)) {
        alert("Please enter a valid number.");
        return;
    }

    let output = `Number inputted: ${number}\n`;

    if (number % 2 === 1) {
        // Odd number: Draw a rectangle
        for (let i = number; i > 0; i--) {
            let row = '';
            for (let j = 0; j < number; j++) {
                row += i;
                if (j < number - 1) {
                    row += ' ';
                }
            }
            output += row + '\n';
        }
    } else {
        // Even number: Draw a triangle
        for (let i = number; i > 0; i--) {
            let row = '';
            for (let j = 0; j < i; j++) {
                row += i;
                if (j < i - 1) {
                    row += ' ';
                }
            }
            output += row + '\n';
        }
    }

    document.getElementById("output").textContent = output;
    document.getElementById("numberI").value = ''; 
}

