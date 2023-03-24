let obj, method;

obj = {
    go: function() { console.log(this); }
};

obj.go();               // (1) [object Object]

(obj.go)();             // (2) [object Object]

(method = obj.go)();    // (3) undefined

(obj.go || obj.stop)(); // (4) undefined

// в случаях 3 и 4 идёт потеря this, т.к. без точки значение ссылочного типа не возвращается.
