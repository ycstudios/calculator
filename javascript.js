        
        // Variable to hold the current calculation expression
        let calculation = '';

        /**
         * Main calculator function
         * Handles different inputs (numbers, operators, and actions like = or C)
         */
        function calculator(operator) {
            let result = 0; // Initialize result variable

            // If the operator is a number (0–9), append it to the calculation
            for (let i = 0; i <= 9; i++) {
                if (operator === String(i)) {
                    calculation += String(i); // Append the number to the current expression
                    display();
                }
            }

            // Handle addition operator
            if (operator === '+') {
                calculation += '+'; // Append + to the expression
                display();

            } 
            // Handle multiplication operator
            else if (operator === '*') {
                calculation += '*'; // Append * to the expression
                display();

            } 
            // Handle division operator
            else if (operator === '/') {
                calculation += '/'; // Append / to the expression
                display();

            } 

            else if (operator === '-') {
                calculation += '-'; // Append / to the expression
                display();
            } 

            else if (operator === '.') {
                calculation += '.'; // Append / to the expression
                display();
            } 
            // Handle equals operator
            else if (operator === '=') {
                try {
                    result = eval(calculation); // Evaluate the expression using eval
                    document.querySelector('.calculation').innerHTML=(`${result}`);
                } catch (e) {
                    alert('Invalid Expression Entered'); // Catch and display errors
                }
            } 
            // Handle clear action
            else if (operator === 'C') {
                calculation = ''; // Reset the calculation expression
                display() // Notify the user
            }
        }
        function display(){
        document.querySelector('.calculation').innerHTML=`${calculation}`
        }