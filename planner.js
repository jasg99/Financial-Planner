//javascript planner 
function performCalculation() {

    // define each input number
    const ex1 = parseFloat(document.getElementById('ex1-input').value);
    const ex2 = parseFloat(document.getElementById('ex2-input').value);
    const ex3 = parseFloat(document.getElementById('ex3-input').value);
    const ex4 = parseFloat(document.getElementById('ex4-input').value);
    const ex5 = parseFloat(document.getElementById('ex5-input').value);
    const ex6 = parseFloat(document.getElementById('ex6-input').value);
    const ex7 = parseFloat(document.getElementById('ex7-input').value);
    //define income input
    const inc = parseFloat(document.getElementById('income-input').value);
    //define goal input
    const goal = parseFloat(document.getElementById('goal-input').value);
    //days in a week
    const dayWeek = 7;
    
    
    //sum is all costs added together
    const sum = ex1 + ex2 + ex3 + ex4 + ex5 + ex6 + ex7;
    //  income - sum(costs) = savings per week
    const pWeek = inc - sum;   
    //savings per week divided by 7 = savings per day
    const pDay = pWeek / dayWeek;
    //goal amount divided by savings per day = no. days til saved
    const numDays = goal / pDay;
    if (numDays > 0) {
     document.getElementById('ex1').innerText = "Electricity: $" + ex1;
     document.getElementById('ex2').innerText = "Rent: $" + ex2;
     document.getElementById('ex3').innerText = "Water: $" + ex3;
     document.getElementById('ex4').innerText = "Groceries: $" + ex4;
     document.getElementById('ex5').innerText = "Fuel: $" + ex5;
     document.getElementById('ex6').innerText ="Leisure: $" + ex6;
     document.getElementById('ex7').innerText = "Other: $" + ex7;
     document.getElementById('inc').innerText = "$" + inc;
     document.getElementById('goal').innerText = "$" + goal;

     document.getElementById('result').innerText = "You have: " + numDays + " Days until you reach your goal!";
     document.getElementById('message').innerText = "Keep saving! You've got this!"
    } else {
     document.getElementById('result').innerText = "...";
     document.getElementById('message').innerText = "Uh oh! looks like you've entered something wrong. Please make sure your income is larger than your expenses, and all the information you have entered is numerical.";
    }

 }
