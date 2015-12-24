var MemoryStore = function(successCallback, errorCallback) {

    this.findByName = function(searchKey, callback) {
        var employees = this.employees.filter(function(element) {
            var fullName = element.firstName + " " + element.lastName + " " + element.title;;
            return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
        });
        callLater(callback, employees);
    }

    this.findById = function(id, callback) {
        var employees = this.employees;
        var employee = null;
        var l = employees.length;
        for (var i=0; i < l; i++) {
            if (employees[i].id === id) {
                employee = employees[i];
                break;
            }
        }
        callLater(callback, employee);
    }

    // Used to simulate async calls. This is done to provide a consistent interface with stores (like WebSqlStore)
    // that use async data access APIs
    var callLater = function(callback, data) {
        if (callback) {
            setTimeout(function() {
                callback(data);
            });
        }
    }

    this.employees = [
                {"id": 1, "firstName": "40", "lastName": "", "title":"JP Nagar 7th Phase, BK Circle", "managerId": 0, "city":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com"},
                {"id": 2, "firstName": "40", "lastName": "", "title":"JP Nagar 7th Phase, Corporation Bank", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com"},
                {"id": 3, "firstName": "40", "lastName": "", "title":"JP Nagar 7th Phase, Brigade Gardenia Apartment", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com"},
                {"id": 4, "firstName": "40", "lastName": "", "title":"JP Nagar 7th Phase, Brigade Millenium Bus Stop", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com"},
                {"id": 5, "firstName": "40", "lastName": "", "title":"JP Nagar, Inchara Hotel Restaurant", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com"},
                {"id": 6, "firstName": "40", "lastName": "", "title":"JP Nagar 2th Phase, 15th Cross Circle", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com"},
                {"id": 7, "firstName": "40", "lastName": "", "title":"JP Nagar 2nd Phase, RV Dental College Circle Stop, ", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"},
                {"id": 8, "firstName": "40", "lastName": "", "title":"JP Nagar 2nd Phase, Marenahalli Bus Stop", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com"},
                {"id": 9, "firstName": "40", "lastName": "", "title":"Jayanagar 5th Blk, Raghavendra Swamy Temple", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com"},
                {"id": 10, "firstName": "40", "lastName": "", "title":"Jayanagar 4th Blk, Vinayaka Temple", "managerId": 4, "city":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com"},
                {"id": 11, "firstName": "40", "lastName": "", "title":"Jayanagar 4th Blk , Cool Joint", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com"},
                {"id": 12, "firstName": "40", "lastName": "", "title":"Jayanagar 3rd Block , Rani Sarala Devi School Stop", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com"},
                {"id": 13, "firstName": "40", "lastName": "", "title":"Jayanagar , Ashoka Pillar", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com"},
                {"id": 14, "firstName": "40", "lastName": "", "title":"Sidhapura Road, Junction Bus Stop", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com"},
                {"id": 15, "firstName": "40", "lastName": "", "title":"Lalbagh Gate, Bus Stop", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"},
				{"id": 16, "firstName": "40", "lastName": "", "title":"Corporation, Bus Stop", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"},
				{"id": 17, "firstName": "40", "lastName": "A", "title":"JP Nagar 7th Phase, BK Circle", "managerId": 0, "city":"New York, NY", "cellPhone":"212-999-8888", "officePhone":"212-999-8887", "email":"ryan@dundermifflin.com"},
                {"id": 18, "firstName": "40", "lastName": "A", "title":"JP Nagar 7th Phase, Corporation Bank", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-865-2536", "officePhone":"570-123-4567", "email":"michael@dundermifflin.com"},
                {"id": 19, "firstName": "40", "lastName": "A", "title":"JP Nagar 7th Phase, Brigade Gardenia Apartment", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-1158", "officePhone":"570-843-8963", "email":"dwight@dundermifflin.com"},
                {"id": 20, "firstName": "40", "lastName": "A", "title":"JP Nagar 7th Phase, Brigade Millenium Bus Stop", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-865-8989", "officePhone":"570-968-5741", "email":"dwight@dundermifflin.com"},
                {"id": 21, "firstName": "40", "lastName": "A", "title":"JP Nagar, Inchara Hotel Restaurant", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-999-5555", "officePhone":"570-999-7474", "email":"pam@dundermifflin.com"},
                {"id": 22, "firstName": "40", "lastName": "A", "title":"JP Nagar 2th Phase, 15th Cross Circle", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-555-9696", "officePhone":"570-999-3232", "email":"angela@dundermifflin.com"},
                {"id": 23, "firstName": "40", "lastName": "A", "title":"JP Nagar 2nd Phase, RV Dental College Circle Stop, ", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-777-9696", "officePhone":"570-111-2525", "email":"kmalone@dundermifflin.com"},
                {"id": 24, "firstName": "40", "lastName": "A", "title":"JP Nagar 2nd Phase, Marenahalli Bus Stop", "managerId": 6, "city":"Scranton, PA", "cellPhone":"570-321-9999", "officePhone":"570-585-3333", "email":"oscar@dundermifflin.com"},
                {"id": 25, "firstName": "40", "lastName": "A", "title":"Jayanagar 5th Blk, Raghavendra Swamy Temple", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-222-6666", "officePhone":"570-333-8585", "email":"creed@dundermifflin.com"},
                {"id": 26, "firstName": "40", "lastName": "A", "title":"Jayanagar 4th Blk, Vinayaka Temple", "managerId": 4, "city":"Scranton, PA", "cellPhone":"570-555-0000", "officePhone":"570-646-9999", "email":"andy@dundermifflin.com"},
                {"id": 27, "firstName": "40", "lastName": "A", "title":"Jayanagar 4th Blk , Cool Joint", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-241-8585", "officePhone":"570-632-1919", "email":"phyllis@dundermifflin.com"},
                {"id": 28, "firstName": "40", "lastName": "A", "title":"Jayanagar 3rd Block , Rani Sarala Devi School Stop", "managerId": 10, "city":"Scranton, PA", "cellPhone":"570-700-6464", "officePhone":"570-787-9393", "email":"shudson@dundermifflin.com"},
                {"id": 29, "firstName": "40", "lastName": "A", "title":"Jayanagar , Ashoka Pillar", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-588-6567", "officePhone":"570-981-6167", "email":"meredith@dundermifflin.com"},
                {"id": 30, "firstName": "40", "lastName": "A", "title":"Sidhapura Road, Junction Bus Stop", "managerId": 2, "city":"Scranton, PA", "cellPhone":"570-123-9654", "officePhone":"570-125-3666", "email":"kelly@dundermifflin.com"},
                {"id": 31, "firstName": "40", "lastName": "A", "title":"Lalbagh Gate, Bus Stop", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"},
				{"id": 32, "firstName": "40", "lastName": "A", "title":"Corporation, Bus Stop", "managerId": 1, "city":"Scranton, PA", "cellPhone":"570-485-8554", "officePhone":"570-699-5577", "email":"toby@dundermifflin.com"}
        ];

    callLater(successCallback);

}