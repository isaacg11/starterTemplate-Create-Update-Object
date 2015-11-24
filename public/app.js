
Stamplay.init('sdkcreateupdateuser');

function createObject(){

	var description = document.getElementById('createData').value;

	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.set('description', description);
	objectInstance.save().then(function(){
		alert('object created!');
	});
}

function updateObject(){

	var newDescription = document.getElementById('updateData').value;

	var objectInstance = new Stamplay.Cobject('object').Model;
	objectInstance.fetch('5653be88b3039e5f75c0d088').then(function(){
    	objectInstance.set('description', newDescription);
    	objectInstance.save().then(function(){
    		alert('object updated');
    	});
	});
}