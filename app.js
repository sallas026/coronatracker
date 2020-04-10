//$(document).ready(function(){
//    $.getJSON("https://covid19.mathdro.id/api/", function(data){
//        debugger
//    var people_data ='';
//        $.each(data, function(key, value){
//        people_data += '<tr>';
//        people_data += '<td>' +data.confirmed.value +'</td>';
//        people_data += '<td>' +data.recovered.value +'</td>';
//        people_data += '<td>' +data.deaths.value +'</td>';
//        people_data += '</tr>';
//        });
// $('#employee_table').append(people_data);
//    });
//});
window.onload = function() {
    covidInfectedStats();
}

function covidInfectedStats() {

    fetch('https://covid19.mathdro.id/api/')
        .then(function(resp) {
            return resp.json()
        })
        .then(function(data) {

            console.log(data);

            let confirmed = data.confirmed.value;
            let recovered = data.recovered.value;
            let deaths = data.deaths.value;

            document.getElementById('confirmed').innerHTML = confirmed.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('recovered').innerHTML = recovered.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            document.getElementById('deaths').innerHTML = deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
            //		document.getElementById('deaths').innerHTML = deaths.toLocaleString('en');
            //		document.getElementById('percent').innerHTML = ((Number(deaths)/Number(confirmedCases))*100).toLocaleString("en", {minimumFractionDigits: 2, maximumFractionDigits: 2}) + "%";

        })
        .catch(function() {
            console.log("error");
        })
    //Updates for every 12 hours period
    setTimeout(covidInfectedStats, 43200000)
}