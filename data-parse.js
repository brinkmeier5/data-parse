console.log('Starting parsing');
Papa.parse('https://data.cityofnewyork.us/api/views/h9gi-nx95/rows.csv', {
	download: true,
	complete: function(results) {
		console.log('Parsing Complete');
		var data = results.data;
		console.log(data);
		printInjuredPersons2018OrEarlier(data);
		print2016ProportionalCyclistInjury(data);
	}
});
var personsInjuredColumn = 10;
var dateColumn = 0;
var zipCodeColumn = 3;
var cyclistInjured = 14;
var cyclistKilled = 15;

// Question 1
function printInjuredPersons2018OrEarlier(data) {
	var injuredPersons = 0;
	for(var i = 1; i<data.length; i++){
		var numberOfInjuries = data[i][personsInjuredColumn];
		if(numberOfInjuries > 0){
			var dateOfIncident = data[i][dateColumn];
			var date = new Date(dateOfIncident);
			if (date.getFullYear() <= 2018) {
				injuredPersons = injuredPersons + parseInt(numberOfInjuries);
			}
		}
	}
	console.log('Number of persons injured 2018 or earlier: ' + injuredPersons);
}

// Question 2
function print2016ProportionalCyclistInjury(data){
	var total2016Collisions = 0;
	var cyclistInjuriesOrDeaths = 0;
	for(var i = 1; i<data.length; i++){
		var dateOfIncident = data[i][dateColumn];
		var date = new Date(dateOfIncident);
		if (date.getFullYear() == 2016) {
			total2016Collisions ++;
			if(parseInt(data[i][cyclistInjured]) > 0 || parseInt(data[i][cyclistKilled]) > 0) {
				cyclistInjuriesOrDeaths ++;
			}
		}
	}
	console.log('Total 2016 Collisions: ' + total2016Collisions);
	console.log('2016 Collisions resulting in cyclist injury or death: ' + cyclistInjuriesOrDeaths);
	console.log('Proportion resulting in cyclist injury or death: ' + cyclistInjuriesOrDeaths/total2016Collisions);
}

// Question 3
function print2016MaxVehiclesInCollisionByZipCode(data){
	var collisionsByZipCode = {};
	for(var i = 1; i<data.length; i++){
		var dateOfIncident = data[i][dateColumn];
		var date = new Date(dateOfIncident);
		if (date.getFullYear() == 2016) {
			if(data[i][vehicleTypeCode1]){
				if(data[i][vehicleTypeCode2]){
					if(data[i][vehicleTypeCode3]){
						if(data[i][vehicleTypeCode4]){
							if(data[i][vehicleTypeCode5]){
				
							} else{

							}
						} else {

						}
					} else {

					}
				} else {
					if(collisionsByZipCode[data[i][zipCodeColumn]]){
						
					}
				}
			}
		}
	}
}