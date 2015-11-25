# starterTemplate-Create-Update-Object
a starter template for creating and updating objects with the Stamplay SDK

**CLONING: When cloning this repo, you must initialize your app first to make it work.**

 1) **Initialize the front-end of your app with Stamplay**
 <br>
- Go to your command line and enter **stamplay init**
- When prompted, enter your **appID** & **API Key**

2) **Initialize the SDK library in your app**
<br>
- In your index.html file, enter the SDK cdn script (or install with bower if you prefer)
```
<script src="//drrjhlchpvi7e.cloudfront.net/libs/stamplay-js-sdk/1.3.1/stamplay.min.js"></script>

```
```
$ bower install stamplay-js-sdk
```
- In your Javascript file, enter the initialization script at the top of the file
```
Stamplay.init('yourAppId');
```
3) **Configure object model**
- Go to your Stamplay editor and select **Objects**, then click **Add+**
- Give **object model** a name (e.g "object")
- Create properties on that model with a property **name** and value **type** (e.g Name:"description" Type:"String")

4) **Create Object**
```
function createObject(){

	var description = document.getElementById('createData').value;

	var objectInstance = new Stamplay.Cobject('objectModel').Model;
	objectInstance.set('description', description);
	objectInstance.save().then(function(){
		alert('object created!');
	});
}
```
5) **Update Object**
```
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
```

![alt tag](public/images/sdk-create-update-object-micro-repo.png)
