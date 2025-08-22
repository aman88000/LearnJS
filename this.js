
// Rule 2
        function a(){
            console.log(a)
        }
        a() // in this case value of this is Window object 

        function b(){
            "use strict"
            console.log(a)
        }
        b() // In this case the value of this is undefined 

// Rule 2

        function C(){
            console.log(this)
            this.age = 30
        }
        
        const obj1 = new C()
        // value of this point to newly created object 
