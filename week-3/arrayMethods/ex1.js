//EX1
console.log(data.map(d=> {return {email: d.email, company:d.company}}))

//EX2
console.log(data.filter(d=>d.address.zipcode[0]==5))

//E3
console.log(data.filter(d=>d.address.zipcode[0]==5).map(d=>d.id))

//E4
console.log(data.map(d=>d.name).filter(d=>d[0]==="C"))

//E5
console.log(data.map(d=>d.name).every(d=>d.city==="South Christy"))

//E6
console.log(data.find(d=>d.address.suite==="Apt. 950").name)

//E7
const printNameCityCompany = function(d){
    console.log(`${d.name} lives in ${d.address.city}, and owns the company ${d.company.name}`)
}

data.forEach(d=>printNameCityCompany(d))

