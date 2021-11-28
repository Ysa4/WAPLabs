 function sum([...arr])
{
    const filteredArray= arr.filter(num  => num > 20);
    const sum =filteredArray.reduce((total,num)=>total+num,0);
    return sum;
};
const getNewArray =function ([...arr]) {
    const filteredArray= arr.filter(params=>params.length>5 && params.includes('a'));
    return filteredArray;
};


const names =[
    'Adam', 'Alex', 'Aaron', 'Ben', 'Carl', 'Dan', 'David', 'Edward', 'Fred',
     'Frank', 'George', 'Hal', 'Hank', 'Ike', 'John', 'Jack', 'Joe', 'Larry',
      'Monte', 'Matthew', 'Mark', 'Nathan', 'Otto', 'Paul', 'Peter', 'Roger',
       'Roger', 'Steve', 'Thomas', 'Tim', 'Ty', 'Victor', 'Walter'
    ];
const ages= [32, 33, 16, 40];
console.log(sum(ages));
console.log(getNewArray(names));