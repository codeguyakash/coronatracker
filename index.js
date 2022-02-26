let activeCount = document.getElementById("activeCount");
let deathCount = document.getElementById("deathCount");
let recoverdCount = document.getElementById("recoverdCount");
let totalCount = document.getElementById("totalCount");
let LastUpdate = document.getElementById("LastUpdate");
// var jsonData = null

    var table = document.getElementById("dataTable");
    var tbody = table.querySelector("tbody");

fetch('https://api.rootnet.in/covid19-in/stats/latest').then((CovidData) => {
        // console.log("jsondata" , jsonData.data.regional)  
    // console.log(jsonData)
    return CovidData.json();
})
    .then((APIData) => {
        var regionalData = APIData.data.regional;
        // console.log("jsondata" , regionalData) 
        const myData = APIData.data.summary;
        const Update = APIData;
        
        document.getElementById("deathCount").innerHTML = `Total Deaths - ${myData.deaths}`;
        document.getElementById("recoverdCount").innerHTML = `Total Discharged - ${myData.discharged}`;
        document.getElementById("totalCount").innerHTML = `Total Case - ${myData.total}`;
        document.getElementById("activeCount").innerHTML = `Total Active - ${myData.confirmedCasesIndian}`;
        document.getElementById("LastUpdate").innerHTML = `Last Update - ${Update.lastOriginUpdate}`;
       
        let row = regionalData.map(region => {
            return {
                "loc": region.loc,
                "totalConfirmed": region.totalConfirmed,
                "discharged": region.discharged,
                "deaths": region.deaths
            }
        });
        
        var table = document.getElementById("dataTable");
        var tbody = table.querySelector("tbody");
        
        row.forEach(region => {
            var tr = document.createElement("tr");
            Object.keys(region).forEach(key => {
                var td = document.createElement("td");
                td.innerHTML = region[key];
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        })
    })   
    .catch((error) => {
        console.log(error);
    });
 


// ----------------------------------------Monu Bhai Ka Code-------------------------------------------------------------------------------------------------------------------------------
//    regionalData.forEach(d => {
    //          var tr = document.createElement("tr");
    //         Object.keys(d).forEach(key => {
        //             if(key=="confirmedCasesForeign" || key=="confirmedCasesIndian"){
            //             }else{
                //                 var td = document.createElement("td");
                //                 td.innerHTML = d[key];
                //                 tr.appendChild(td);
                //             }     
                //         });
                //         tbody.appendChild(tr);
                //     })
                
// ----------------------------------------Monu Bhai Ka Code-------------------------------------------------------------------------------------------------------------------------------
               


