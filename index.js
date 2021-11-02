let obj={
    name: 'Max',
    age: 46,
    online: true,
    colors: ['red','blue','black']
}

console.log(obj.colors.filter(color=>color==='blue').join()[0])
