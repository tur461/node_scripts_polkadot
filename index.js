let obj = {
    name: "some",
    say: function() { 
        return this 
    },
    hello: function() { 
        console.log("hello"); 
        return this;
    },
    something: function() { 
        console.log(this.name);
        return this;
    },
}

doc.addEventListener('click', e => eHandle(e) && handle(e))

obj.say().hello().something()


