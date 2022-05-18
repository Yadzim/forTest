const f = (x) => Math.E**((-1)*x**2)*Math.sin(x**2+1);

// to'rtburchaklar usuli
const func = (a,b,n) => {
  let x=0, h = (b-a)/n;

  for(let i=1; i<=n; i++){
    x += f(a+i*h)*h;
  }
  return x;
}

// trapetsiya usuli
const func1 = (a,b,n) => {
  let x=0, sum=0, h = (b-a)/n;

  for(let i=1; i<n; i++){
    x=a+i*h
    sum += 2*f(x);
  }
  return (h/2)*(sum + f(a) + f(b));
}

// simson usuli
const integral2 = (a,b,n) => {
  let sum = 0;
  let m =n/2;
  let h = (b-a)/n;
  for(let i=1; i<=m; i++){
    sum += 4*f(a+(2*i-1)*h) + (i!==n/2 && 2*f(a+(2*i)*h));
  }
  return (sum + f(a) + f(b))*h/3;
}

console.log(integral2(0,1,10));