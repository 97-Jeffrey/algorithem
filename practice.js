



const m = new Map([
  ['name', '张三'],
]);

const m1 = new Map(m);
m1.set(true, 1)
m1.set('true',1)



console.log(m1);