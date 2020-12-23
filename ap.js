let products = []
async function getdata() {
    products = await fetch("https://global-warming.org/api/temperature-api"); //fetching the data from API
    products = await products.json(); //converting the data into json
    var div = document.getElementById("two")
        //console.log(products)
    for (i = 0; i < products.result.length - 1; i++) { //looping to get all the values
        var tsl = document.createElement("div1") //creating div1 element
        var time = document.createElement("div2") //creating div2 element
        var station = document.createElement("div3") //creating div3 element
        var land = document.createElement("div4") //creating div4 element
        time.setAttribute("id", "time1") //setting attribute to time
        station.setAttribute("id", "station1") //setting attribute to station
        land.setAttribute("id", "land1") //setting attribute to land
        tsl.setAttribute("id", "tsl1") //setting attribute to tsl
        var t1 = document.createTextNode("TIME : " + products.result[i].time) //creating a text
        var s1 = document.createTextNode("STATION : " + products.result[i].station)
        var l1 = document.createTextNode("LAND : " + products.result[i].land)
        time.appendChild(t1)
        station.appendChild(s1)
        land.appendChild(l1)
        tsl.appendChild(time)
        tsl.appendChild(station)
        tsl.appendChild(land)
        div.appendChild(tsl)
    }
}
getdata()