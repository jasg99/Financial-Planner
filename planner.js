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
    
    document.getElementById('result').innerText = numDays + " Days";
}