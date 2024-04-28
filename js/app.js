var navbarContent = [
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

var navbar = document.querySelector(".navbar")

navbarContent.forEach(function (item) {
  var linkEl = document.createElement("a")
  linkEl.textContent = item.title
    linkEl.setAttribute("href",`/${item.link}`)
    navbar.append(linkEl) }
)

// var tableObj={
    // Quantity:['5-10', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
    // Price:['2000 сом' , '2000 сом' , '2000 сом', '2000 сом', '2000 сом' ,'2000 сом' ,'2000 сом', '2000 сом' ,'2000 сом']
// }
// var tableQuantity = document.querySelector(".tableQuantity")
// var tablePrice = document.querySelector(".tablePrice")


// function tableMaker(arr,tableRow){
//     arr.forEach(function(item){
//     var tCell = document.createElement("td")
//     tCell.textContent= item
//     tableRow.append(tCell)
// })
// }
// for (var key in tableObj){
//     tableMaker(tableObj[key], key==='quality'? tableQuantity:tablePrice)
// }


var tableObj = {
    table1:{
        Quantity:['5-10', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
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

var tableWrapper = document.querySelector('.tableWrapper')

function tableMaker(tableData){
  var table = document.createElement('table')

//   console.log(tableData)

  var tableHead = document.createElement('thead')
  var tableHeadTitle = document.createElement('th')
  var tbody = document.createElement('tbody')
  tableHeadTitle.textContent = 'Худи стандарт'
  tableHead.append(tableHeadTitle)

  var tableBody = document.createElement('tbody')

//   // quantity

//   var tableQuantity=document.createElement('tr')
//   var tableQuantityTitle=document.createElement('th')
//   tableQuantityTitle.textContent='Количество'
//   tableQuantity.append(tableQuantityTitle)

// //price
//   var tablePrice=document.createElement('tr')


//   //content
//   tableData.Quantity?.forEach(function(item){
//     var tableCell=document.createElement('td')
//     tableCell.textContent=item
//     tableQuantity.append(tableCell)
//   })


//   tableBody.append(tableQuantity)

for(var row in tableData){
    console.log(tableData[row])
}


  table.append(tableHead)
  table.append(tableBody)


  tableWrapper.append(table)
}
for(var key in tableObj){
    tableMaker(tableObj[key])
}


