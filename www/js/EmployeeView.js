document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady() {
    // we will not be doing anything!!
	alert('Device ready');
}

var EmployeeView = function(employee) {

    this.initialize = function() {
        this.el = $('<div/>');
        this.el.on('click', '.add-location-btn', this.addLocation);
        this.el.on('click', '.add-contact-btn', this.addToContacts);
        this.el.on('click', '.change-pic-btn', this.changePicture);
    };

    this.render = function() {
        this.el.html(EmployeeView.template(employee));
        return this;
    };

    this.addLocation = function(event) {
        event.preventDefault();
        console.log('addLocation');
        navigator.geolocation.getCurrentPosition(
            function(position) {
                $('.location', this.el).html(position.coords.latitude + ',' +position.coords.longitude);
				alert('Registered alert');
            },
            function() {
                alert('Error registering alert');
            });
        return false;
    };

    this.addToContacts = function(event) {
        alert(app.currentEmployee.firstName +  app.currentEmployee.lastName);
		event.preventDefault();
        console.log('addToContacts');
        //if (!navigator.contacts) {
        //    app.showAlert("Contacts API not supported1", "Error");
        //    return;
        //}
		alert(app.currentEmployee.firstName +  app.currentEmployee.lastName);
        var contact = navigator.contacts.create();
        contact.name = {givenName: app.currentEmployee.firstName, familyName:  app.currentEmployee.lastName};
		alert(app.currentEmployee.firstName +  app.currentEmployee.lastName);
        var phoneNumbers = [];
        phoneNumbers[0] = new ContactField('work', app.currentEmployee.officePhone, false);
        phoneNumbers[1] = new ContactField('mobile', app.currentEmployee.cellPhone, true); // preferred number
        contact.phoneNumbers = phoneNumbers;
        //contact.save();
		alert('Saving to contact');
		contact.save(onSaveSuccess,onSaveError);
		alert('Savinged');
        return false;
    };

	function onSaveSuccess(contact) {
    alert("Save Success");
};

function onSaveError(contactError) {
    alert("Error = " + contactError.code);
};
	
    this.changePicture = function(event) {
        event.preventDefault();
        console.log('changePicture');
        if (!navigator.camera) {
            app.showAlert("Camera API not supported", "Error");
            return;
        }
        var options =   {   quality: 50,
                            destinationType: Camera.DestinationType.DATA_URL,
                            sourceType: 1,      // 0:Photo Library, 1=Camera, 2=Saved Photo Album
                            encodingType: 0     // 0=JPG 1=PNG
                        };

        navigator.camera.getPicture(
            function(imageData) {
                $('#image').attr('src', "data:image/jpeg;base64," + imageData);
            },
            function() {
                alert('Error taking picture');
            },
            options);

        return false;
    };

    this.initialize();

}

EmployeeView.template = Handlebars.compile($("#employee-tpl").html());