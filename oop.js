// ini procedural programming
// let baseSalary = 30_000;
// let overtime = 10;
// let rate = 20;
// function getWage(baseSalary, overtime, rate){
//     return baseSalary + (overtime * rate);
// }

// encapsulation = group sebuah fungsi dan variabel menjadi sebuah group (objek)
let employee = {
    baseSalary: 35_000,
    overtime: 5,
    rate: 20,

    getWage: function(){
            console.log(this.baseSalary + (this.overtime * this.rate));
            
        return this.baseSalary + (this.overtime * this.rate);
    }
}

employee.getWage();

// abstraction = reducec impact of change

// inheritance = mengurangi redudansi, menurunkan properti parents

// polymorphism 

// oop 1
const circle = {
    radius: 1,
    location : {
        x: 1,
        y: 1
    },
    draw : function(){
        console.log('draw');
        
    }
}