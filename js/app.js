const navbarContent = [
    {
        title:"ABOUT US" ,
         link:"about/"
    },
    {
        title:"CATALOG" ,
        link:"catalog/"
    },
    {
        title:"OUR WORKS" ,
        link:"works/"
    },
    {
        title:"CONTACTS" ,
        link:"contacts/"
    },
    
]

const navbar = document.querySelector(".navbar")

navbarContent.forEach ((item) => {
  const linkEl = document.createElement("a")
  linkEl.textContent = item.title
    linkEl.setAttribute("href",`/${item.link}`)
    navbar.append(linkEl) })


const tableObj = {
    table1:{
        Quantity:['Количество', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
        Price:['2000 сом' , '2000 сом' , '2000 сом', '2000 сом', '2000 сом' ,'2000 сом' ,'2000 сом', '2000 сом' ,'2000 сом']
    },
    table2:{
        Quantity:['5-10', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
        Price:['2000 сом' , '2000 сом' , '2000 сом', '2000 сом', '2000 сом' ,'2000 сом' ,'2000 сом', '2000 сом' ,'2000 сом']
    },
    table3:{
        Quantity:['5-10', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
        Price:['2000 сом' , '2000 сом' , '2000 сом', '2000 сом', '2000 сом' ,'2000 сом' ,'2000 сом', '2000 сом' ,'2000 сом']
    }
}

const tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(tableData){
  const table = document.createElement('table')
  table.classList.add("table")
  const tableHead = document.createElement('thead')
  const tableHeadTitle = document.createElement('th')
  tableHeadTitle.textContent = 'Худи стандарт'
  tableHead.append(tableHeadTitle)
  const tableBody = document.createElement('tbody')



for(const row in tableData){

    const tableRow=document.createElement('tr')
    tableData[row].forEach((item) => {

     const tableCell=document.createElement('td')
    tableCell.textContent=item
    tableRow.append(tableCell)
})
tableBody.append(tableRow)
}


  table.append(tableHead)
  table.append(tableBody)


  tableWrapper.append(table)
}
for(const key in tableObj){
    tableMaker(tableObj[key])
}

// setTimeout(()=>{
//     console.log('hello')
// },2000)

//  const interval= setInterval(()=>{
//     console.log('hello world')
// },1000)

// setTimeout(()=>{clearInterval(interval)},5000)