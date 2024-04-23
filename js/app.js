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

var tableObj={
    Quantity:['5-10', '5-10' , '5-10' , '5-10', '5-10' , '5-10' , '5-10', '5-10', '5-10'],
    Price:['2000 сом' , '2000 сом' , '2000 сом', '2000 сом', '2000 сом' ,'2000 сом' ,'2000 сом', '2000 сом' ,'2000 сом']
}
var tableQuantity = document.querySelector(".tableQuantity")
var tablePrice = document.querySelector(".tablePrice")

tableObj.Quantity.forEach(function(item){
    var tCell = document.createElement("td")
    tCell.textContent= item


tableQuantity.append(tCell)
})

