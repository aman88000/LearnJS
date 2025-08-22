
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

// Rule 3 

        function d(){
            console.log(this)
        }

        d.call({a:2});
        d.apply({b: 3})
        // value of this point to object which we pass inside call and apply method

// Rule 4

        function e(){
            console.log(this)
        }
        const obj2 = {
            id: 5
        }
        obj2.e();
        // value of this point to that object which call that function 