function fizzbuzz(n) {
  if (n > 1)
    fizzbuzz(n-1);
  
  if (n % 3 == 0 && n % 5 == 0)  // nが3の倍数かつ5の倍数
    return("fizzbuzz");
  else if (n % 3 == 0)  // nが3の倍数(かつ5の倍数でない)
    return("fizz");
  else if (n % 5 == 0)  // nが5の倍数(かつ3の倍数でない)
    return("buzz");
  else  // nが3の倍数でも5の倍数でもない
    return(n );
}

fizzbuzz(100);