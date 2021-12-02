var typeracer_data = JSON.parse(data)
var ctx = document.querySelector("#myChart").getContext("2d")
var usernames = getUsernames(typeracer_data)
var avgSpeeds = getTypingSpeeds(typeracer_data)
// console.log(~~typeracer_data[0].Speed1 + ~~typeracer_data[0].Speed2 + ~~typeracer_data[0].Speed + ~~typeracer_data[0].Speed4)

// Chart.defaults.font.size = 14
// var myChart = new Chart(ctx,{
//     type: "bar",
//     data: {
//         labels: ['Bobby', 'Daniel', 'Misha', 'OOogie', 'Grace'],
//         datasets: [{
//           label: 'Most Evil',
//           data: [97,535,365,234,657,],
//           backgroundColor: [
//             'rgba(255, 99, 132, 0.2)',
//             'rgba(54, 162, 235, 0.2)',
//             'rgba(255, 206, 86, 0.2)',
//             'rgba(75, 192, 192, 0.2)',
//             'rgba(153, 102, 255, 0.2)',
//             'rgba(255, 159, 64, 0.2)'
//           ],
//           borderColor: [
//             'rgba(255, 99, 132, 1)',
//             'rgba(54, 162, 235, 1)',
//             'rgba(255, 206, 86, 1)',
//             'rgba(75, 192, 192, 1)',
//             'rgba(153, 102, 255, 1)',
//             'rgba(255, 159, 64, 1)'
//           ],
//           borderWidth: 1
//         }]
//     }
// })

var myChart = new Chart(ctx,{
    type: "line",
    data: {
        labels: usernames,
        datasets: [{
          label: 'Average Typing Speed',
          data: avgSpeeds,
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
    }
})


function getTypingSpeeds(data){
    var speeds = []
    for(i = 0; i < data.length; i++){
        // 1. for Username[i] - add speeds 1 though 4. 
        // 2. then divide total speed by 4
        // 3. Push result to array
        speeds.push((~~data[i].Speed1 + ~~data[i].Speed2 + ~~data[i].Speed + ~~data[i].Speed4) / 4)
    }
    return speeds
}

// Get usernames from JSON data object
function getUsernames(data){
    var names = []
    for(i = 0; i < data.length; i++){
        names.push(data[i].Username)
    }
    return names
}

console.log(typeracer_data)