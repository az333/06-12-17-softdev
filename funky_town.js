var fibonacci = function(n){
  if(n < 2) return n;
  else return (fibonacci(n-1) + fibonacci(n-2));
};

var gcd = function(a, b){
  if (a == 0 || b == 0) return 0;
  if (a == b) return a;
  if (a > b) return gcd(a-b, b);
  return gcd(a, b-a);
};

var randomStudent = function(){
    var students = ["angelica", "notangelica", "blah", "cahgvuhvr"];
    return students[Math.floor((Math.random() * students.length))];
};
