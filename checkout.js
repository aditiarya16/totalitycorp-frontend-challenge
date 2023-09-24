function saveButton() {
    // Get input values
    //alert("clicked");
    var name = document.getElementById("name").value;
    var street = document.getElementById("street").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip = document.getElementById("zip").value;
    var country = document.getElementById("country").value;


    var output = document.getElementById("output");
    output.innerHTML = "<address>" + name + "<br/>" + street + ", " + city + "<br/>" + state + ", " + zip + "<br/>" + country + "</address>";
}