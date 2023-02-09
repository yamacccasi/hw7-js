let data = [
    "hello", "world" , 23 , "23" , null, 45, "true"
];


let newArr = data.filter(function FilterBy(number) {
      return typeof number != 'string';
});

console.log(newArr);

