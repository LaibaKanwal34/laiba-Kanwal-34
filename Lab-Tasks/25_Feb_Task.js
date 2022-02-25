/*
    1. Write a function called sandwich calculator. This should accept one value: bread
    2. The function should return the total number of possible sandwiches based on the amount of breads available. I need 2 breads to make one sandwich, so if there are 10 breads, it should return 5. Test your function with console.log.
    3. Extend your function so it accepts two values, bread and cheese.
    4. It takes two sbreads and one cheese to make a sandwich. The function should return the total number of possible sandwiches, so if there are breads, but only 1 cheese, it should return 1.

    */

    class sandwich{
        sandwich(noofbread){
            this.noofbread = noofbread
        }

        sandwich_calculator(bread){
            // It will return total number of possible sandwiches
            var n = this.noofbread /2 
            return n
        }
    }


    class withCheez extends sandwich{
        breadwithcheez(sbreads) {
            this.sandwich_calculator.apply(sbreads, chees);
            sandwich = super.n + chees
            return sandwich
        }
    }