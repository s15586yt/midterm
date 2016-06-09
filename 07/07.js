function(x1,y1,x2,y2) {
　　var a, b, d;

　　a = x1 - x2;
　　b = y1 - y2;
　　d = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));

　　return d;
};