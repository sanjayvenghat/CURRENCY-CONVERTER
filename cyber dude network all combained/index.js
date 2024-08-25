let products=[{id:1,title:"android phone", cost: 7500},
{id:2,title:"gaming computer", cost: 90000},{id:3,title:"headphone", cost: 2500}]
let sorting_array=products.sort((a,b)=> a.cost-b.cost)
let after_sorting=sorting_array.sort((a,b)=>{
    if (a.title < b.title) return 1;
    else if(a.title>b.title) return -1;

    }) 
let filter=after_sorting.filter((value)=>value.cost<8000)
let map=filter.map((value)=>{return value.title+" "+value.cost})
console.log(map.join(','))