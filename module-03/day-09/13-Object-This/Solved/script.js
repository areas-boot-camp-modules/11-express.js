// TODO: What does 'this' refer to?
// the window
console.log(this);

// TODO: What does 'this' refer to?
// the window
function helloThis() { 
   console.log("Inside this function, this is " + this); 
}

// TODO: What will this log?
var child = { 
   age: 10,
   ageTenYears: function() {
      // 20
      console.log(this.age + 10); 
   }
};

// TODO: What will this log? 
var investor = {  
  name: "Cash Saver",
  investment: {
    initialInvestment: 5000,
    investmentGrowth: function() {
      // 5,750
      console.log(this.initialInvestment * 1.15)
    }
   }   
};

// TODO: After commenting, check your results!
helloThis();

// TODO: After commenting, check your results!
child.ageTenYears();
investor.investment.investmentGrowth();
