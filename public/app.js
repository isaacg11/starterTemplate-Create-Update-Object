
Stamplay.init('yourAppId');

function createObject(){

	var description = document.getElementById('createData').value;

	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.set('description', description);
	objectInstance.save().then(function(){
		alert('object created!');
	});
}

function updateObject(){

	var newDescription = document.getElementById('updateData').value;

	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.fetch('id').then(function(){
    	objectInstance.set('description', newDescription);
    	objectInstance.save().then(function(){
    		alert('object updated');
    	});
	});
}
