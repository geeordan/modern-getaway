/// Home Page ///
function search_rooms() {
    var check_in = document.getElementById("check_in").value;
    var check_out = document.getElementById("check_out").value;
    var selected_location = document.getElementById("locations").value;
    // Check if Location field is empty
    if (!selected_location) {
        alert("Please select a location")
        return;
    }

    // Check if Check In and/or Check Out Dates are empty
    if (!check_in && !check_out) {
        alert("Please Enter a Check In and Check Out Date");
        return;
    }
    else if (!check_in) {
        alert("Please Enter a Check In Date");
        return;
    }
    else if (!check_out) {
        alert("Please Enter a Check Out Date");
        return;
    }  

    // Check that Check Out Date is after Check In Date
    if (check_in > check_out) {
        alert("Check Out Date must be after Check In Date");
        return;
    }

    // Go to corresponding Room Page based on selection
    sessionStorage.setItem("selected_location", selected_location);
    sessionStorage.setItem("check_in", check_in);
    sessionStorage.setItem("check_out", check_out);
    window.location = "rooms.html";
}

/// Top Getaway Pages ///
function check_dates() {
    var check_in = document.getElementById("check_in").value;
    var check_out = document.getElementById("check_out").value;

    // Check if Check In and/or Check Out Dates are empty
    if (!check_in && !check_out) {
        alert("Please Enter a Check In and Check Out Date");
        return;
    }
    else if (!check_in) {
        alert("Please Enter a Check In Date");
        return;
    }
    else if (!check_out) {
        alert("Please Enter a Check Out Date");
        return;
    }  

    // Check that Check Out Date is after Check In Date
    if (check_in > check_out) {
        alert("Check Out Date must be after Check In Date");
        return;
    }

    // Go to corresponding Room Page based on selection
    sessionStorage.setItem("check_in", check_in);
    sessionStorage.setItem("check_out", check_out);
    window.location = "../rooms.html";
}

// Search Rooms in San Francisco, California
function search_rooms_sf() {
    var selected_location = "San Francisco, California";
    sessionStorage.setItem("selected_location", selected_location);
    check_dates();
}
 
// Search Rooms in New York City, New York
function search_rooms_ny() {
    var selected_location = "New York City, New York";
    sessionStorage.setItem("selected_location", selected_location);
    check_dates();
}

// Search Rooms in Honolulu, Hawaii
function search_rooms_honolulu() {
    var selected_location = "Honolulu, Hawaii";
    sessionStorage.setItem("selected_location", selected_location);
    check_dates();
}

/// Room Pages ///
function rooms_by_location () {
    var room_selected_location = sessionStorage.getItem("selected_location");
    
    // Chicago, Illinois
    if (room_selected_location == "Chicago, Illinois") {
        var available = "Available Rooms in Chicago, Illinois:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $301/night"; 
        document.getElementById("room1_pic").src = "img/rooms/ChicagoSuite.jpg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $143/night"; 
        document.getElementById("room2_pic").src = "img/rooms/ChicagoTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $97/night"; 
        document.getElementById("room3_pic").src = "img/rooms/ChicagoOne.jpg";
    }

    // Dallas, Texas
    if (room_selected_location == "Dallas, Texas") {
        var available = "Available Rooms in Dallas, Texas:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $280/night"; 
        document.getElementById("room1_pic").src = "img/rooms/DallasSuite.jpg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $153/night"; 
        document.getElementById("room2_pic").src = "img/rooms/DallasTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $75/night"; 
        document.getElementById("room3_pic").src = "img/rooms/DallasOne.jpeg";
    }

    // Honolulu, Hawaii
    if (room_selected_location == "Honolulu, Hawaii") {
        var available = "Available Rooms in Honolulu, Hawaii:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $332/night"; 
        document.getElementById("room1_pic").src = "img/rooms/HonoluluSuite.jpeg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $180/night"; 
        document.getElementById("room2_pic").src = "img/rooms/HonoluluTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $102/night"; 
        document.getElementById("room3_pic").src = "img/rooms/HonoluluOne.jpg";
    }

    // Los Angeles, California
    if (room_selected_location == "Los Angeles, California") {
        var available = "Available Rooms in Los Angeles, California:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $312/night"; 
        document.getElementById("room1_pic").src = "img/rooms/LosAngelesSuite.jpg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $167/night"; 
        document.getElementById("room2_pic").src = "img/rooms/LosAngelesTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $88/night"; 
        document.getElementById("room3_pic").src = "img/rooms/LosAngelesOne.jpg";
    }

    // New York City, New York
    if (room_selected_location == "New York City, New York") {
        var available = "Available Rooms in New York City, New York:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $342/night"; 
        document.getElementById("room1_pic").src = "img/rooms/NewYorkSuite.jpg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $198/night"; 
        document.getElementById("room2_pic").src = "img/rooms/NewYorkTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $114/night"; 
        document.getElementById("room3_pic").src = "img/rooms/NewYorkOne.jpg";
    }

    // San Francisco, California
    if (room_selected_location == "San Francisco, California") {
        var available = "Available Rooms in San Francisco, California:"
        document.getElementById("available_rooms").innerHTML = available;
        // Room 1
        document.getElementById("room1_price").innerHTML = "Price: $298/night"; 
        document.getElementById("room1_pic").src = "img/rooms/SanFranciscoSuite.jpg";
        // Room 2
        document.getElementById("room2_price").innerHTML = "Price: $161/night"; 
        document.getElementById("room2_pic").src = "img/rooms/SanFranciscoTwo.jpg";
        // Room 3
        document.getElementById("room3_price").innerHTML = "Price: $91/night"; 
        document.getElementById("room3_pic").src = "img/rooms/SanFranciscoOne.jpg";
    }
}

// Button click for Room 1
function room1 () {
    var room_selected_location = sessionStorage.getItem("selected_location");
    var room_name = document.getElementById("room1_name").textContent;
    var room_price = document.getElementById("room1_price").textContent;
    var room_pic = document.getElementById("room1_pic").src;
    var room_location = "Location: " + room_selected_location;
    sessionStorage.setItem("room_name", room_name);
    sessionStorage.setItem("room_price", room_price);
    sessionStorage.setItem("room_pic", room_pic)
    sessionStorage.setItem("room_location", room_location);
    window.location = "packages.html";
}

// Button click for Room 2
function room2 () {
    var room_selected_location = sessionStorage.getItem("selected_location");
    var room_name = document.getElementById("room2_name").textContent;
    var room_price = document.getElementById("room2_price").textContent;
    var room_pic = document.getElementById("room2_pic").src;
    var room_location = "Location: " + room_selected_location;
    sessionStorage.setItem("room_name", room_name);
    sessionStorage.setItem("room_price", room_price);
    sessionStorage.setItem("room_pic", room_pic)
    sessionStorage.setItem("room_location", room_location);
    window.location = "packages.html";
}

// Button click for Room 3
function room3 () {
    var room_selected_location = sessionStorage.getItem("selected_location");
    var room_name = document.getElementById("room3_name").textContent;
    var room_price = document.getElementById("room3_price").textContent;
    var room_pic = document.getElementById("room3_pic").src;
    var room_location = ("Location: " + room_selected_location);
    sessionStorage.setItem("room_name", room_name);
    sessionStorage.setItem("room_price", room_price);
    sessionStorage.setItem("room_pic", room_pic)
    sessionStorage.setItem("room_location", room_location);
    window.location = "packages.html";
}

/// Package Pages ///
function load_details () {
    // Room Details
    var location = sessionStorage.getItem("room_location");
    var name = sessionStorage.getItem("room_name");
    var price = sessionStorage.getItem("room_price");
    var pic = sessionStorage.getItem("room_pic");
    document.getElementById("room_location").innerHTML = location; 
    document.getElementById("room_select").innerHTML = name;  
    document.getElementById("room_price").innerHTML = price;  
    document.getElementById("room_pic").src = pic;
    
    // Package Prices
    var room_selected_location = sessionStorage.getItem("selected_location");

    // Chicago, Illinois
    if (room_selected_location == "Chicago, Illinois" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $301/night";
        document.getElementById("pack2_price").innerHTML = "Price: $319/night";
        document.getElementById("pack3_price").innerHTML = "Price: $351/night";
    }
    if (room_selected_location == "Chicago, Illinois" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $143/night";
        document.getElementById("pack2_price").innerHTML = "Price: $161/night";
        document.getElementById("pack3_price").innerHTML = "Price: $193/night";
    }
    if (room_selected_location == "Chicago, Illinois" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $97/night";
        document.getElementById("pack2_price").innerHTML = "Price: $115/night";
        document.getElementById("pack3_price").innerHTML = "Price: $147/night";
    }

    // Dallas, Texas
    if (room_selected_location == "Dallas, Texas" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $280/night";
        document.getElementById("pack2_price").innerHTML = "Price: $298/night";
        document.getElementById("pack3_price").innerHTML = "Price: $330/night";
    }
    if (room_selected_location == "Dallas, Texas" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $153/night";
        document.getElementById("pack2_price").innerHTML = "Price: $171/night";
        document.getElementById("pack3_price").innerHTML = "Price: $203/night";
    }
    if (room_selected_location == "Dallas, Texas" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $75/night";
        document.getElementById("pack2_price").innerHTML = "Price: $93/night";
        document.getElementById("pack3_price").innerHTML = "Price: $125/night";
    }

    // Honolulu, Hawaii
    if (room_selected_location == "Honolulu, Hawaii" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $332/night";
        document.getElementById("pack2_price").innerHTML = "Price: $350/night";
        document.getElementById("pack3_price").innerHTML = "Price: $382/night";
    }
    if (room_selected_location == "Honolulu, Hawaii" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $180/night";
        document.getElementById("pack2_price").innerHTML = "Price: $195/night";
        document.getElementById("pack3_price").innerHTML = "Price: $230/night";
    }
    if (room_selected_location == "Honolulu, Hawaii" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $102/night";
        document.getElementById("pack2_price").innerHTML = "Price: $120/night";
        document.getElementById("pack3_price").innerHTML = "Price: $152/night";
    }

    // Los Angeles, California
    if (room_selected_location == "Los Angeles, California" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $312/night";
        document.getElementById("pack2_price").innerHTML = "Price: $330/night";
        document.getElementById("pack3_price").innerHTML = "Price: $362/night";
    }
    if (room_selected_location == "Los Angeles, California" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $167/night";
        document.getElementById("pack2_price").innerHTML = "Price: $185/night";
        document.getElementById("pack3_price").innerHTML = "Price: $217/night";
    }
    if (room_selected_location == "Los Angeles, California" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $88/night";
        document.getElementById("pack2_price").innerHTML = "Price: $106/night";
        document.getElementById("pack3_price").innerHTML = "Price: $138/night";
    }

    // New York City, New York
    if (room_selected_location == "New York City, New York" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $342/night";
        document.getElementById("pack2_price").innerHTML = "Price: $360/night";
        document.getElementById("pack3_price").innerHTML = "Price: $392/night";
    }
    if (room_selected_location == "New York City, New York" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $198/night";
        document.getElementById("pack2_price").innerHTML = "Price: $216/night";
        document.getElementById("pack3_price").innerHTML = "Price: $248/night";
    }
    if (room_selected_location == "New York City, New York" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $114/night";
        document.getElementById("pack2_price").innerHTML = "Price: $132/night";
        document.getElementById("pack3_price").innerHTML = "Price: $164/night";
    }

    // San Francisco, California
    if (room_selected_location == "San Francisco, California" && name.includes("Suite")) {
        document.getElementById("pack1_price").innerHTML = "Price: $298/night";
        document.getElementById("pack2_price").innerHTML = "Price: $316/night";
        document.getElementById("pack3_price").innerHTML = "Price: $348/night";
    }
    if (room_selected_location == "San Francisco, California" && name.includes("Double")) {
        document.getElementById("pack1_price").innerHTML = "Price: $161/night";
        document.getElementById("pack2_price").innerHTML = "Price: $179/night";
        document.getElementById("pack3_price").innerHTML = "Price: $211/night";
    }
    if (room_selected_location == "San Francisco, California" && name.includes("Single")) {
        document.getElementById("pack1_price").innerHTML = "Price: $91/night";
        document.getElementById("pack2_price").innerHTML = "Price: $109/night";
        document.getElementById("pack3_price").innerHTML = "Price: $141/night";
    }
}

// Button click for Package 1
function package1() {
    var package_name = document.getElementById("pack1_name").textContent;
    var package_price = document.getElementById("pack1_price").textContent;
    sessionStorage.setItem("package_name", package_name);
    sessionStorage.setItem("package_price", package_price);
    window.location = "payment.html";
}

// Button click for Package 2
function package2() {
    var package_name = document.getElementById("pack2_name").textContent;
    var package_price = document.getElementById("pack2_price").textContent;
    sessionStorage.setItem("package_name", package_name);
    sessionStorage.setItem("package_price", package_price);
    window.location = "payment.html";
}

// Button click for Package 3
function package3() {
    var package_name = document.getElementById("pack3_name").textContent;
    var package_price = document.getElementById("pack3_price").textContent;
    sessionStorage.setItem("package_name", package_name);
    sessionStorage.setItem("package_price", package_price);
    window.location = "payment.html";
}

// Book Your Getaway Button
function book_getaway() {
    var full_name = document.getElementById("full_name").value;
    var email = document.getElementById("email").value;
    var phone_number = document.getElementById("phone_num").value;
    var country = document.getElementById("country").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var zip_code = document.getElementById("zip_code").value;
    var card_number = document.getElementById("card_number").value;
    var month = document.getElementById("month").value;
    var exp_year = document.getElementById("exp_year").value;
    var cvv = document.getElementById("cvv").value;

    // Check if all required fields have the correct value
    if (!full_name || !email || !(email.includes("@")) || !phone_number || (phone_number.length != "12") || !(phone_number.includes("-")) || !country || !address || !city || !state || !zip_code || (isNaN(zip_code)) || !card_number || (isNaN(card_number)) || !month || !exp_year  || (isNaN(exp_year)) || !cvv || (isNaN(cvv)) || (cvv.length != "3")) {   
        alert("One or more required fields has been entered incorrectly");
        return;
    }

    sessionStorage.setItem("full_name", full_name);
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("phone_number", phone_number);
    window.location = "confirmation.html";   
}

/// Payment Page ///
function load_all_details() {
    // Room and Package Details
    var location = sessionStorage.getItem("room_location");
    var name = sessionStorage.getItem("room_name");
    var price = sessionStorage.getItem("room_price");
    var pic = sessionStorage.getItem("room_pic");
    var package_name = sessionStorage.getItem("package_name");
    var package_price = sessionStorage.getItem("package_price");
    document.getElementById("room_location").innerHTML = location; 
    document.getElementById("room_select").innerHTML = name;  
    document.getElementById("room_price").innerHTML = "Room " + price;  
    document.getElementById("room_pic").src = pic;
    document.getElementById("room_package").innerHTML = "Selected Package: " + package_name;
    document.getElementById("total_cost").innerHTML = "Total " + package_price;
}

/// Confirmation Page ///
function final_details() {
    // Room and Package Details
    var location = sessionStorage.getItem("room_location");
    var name = sessionStorage.getItem("room_name");
    var pic = sessionStorage.getItem("room_pic");
    var package_name = sessionStorage.getItem("package_name");
    var package_price = sessionStorage.getItem("package_price");
    document.getElementById("room_location").innerHTML = location; 
    document.getElementById("room_select").innerHTML = name;  
    document.getElementById("room_pic").src = pic;
    document.getElementById("room_package").innerHTML = "Selected Package: " + package_name;
    document.getElementById("total_cost").innerHTML = "Total " + package_price;

    // Personal Details
    var confirmation_number = sessionStorage.getItem("confirmation_number");
    var full_name = sessionStorage.getItem("full_name");
    var check_in = sessionStorage.getItem("check_in");
    var check_out = sessionStorage.getItem("check_out");
    var email = sessionStorage.getItem("email");
    var phone_number = sessionStorage.getItem("phone_number");
    document.getElementById("confirmation_number").innerHTML = "Confirmation #: " + confirmation_number;
    document.getElementById("final_name").innerHTML = "Full Name: " + full_name;
    document.getElementById("check_in").innerHTML = "Check In Date: " + check_in;
    document.getElementById("check_out").innerHTML = "Check Out Date: " + check_out;
    document.getElementById("final_email").innerHTML = "Email Address: " + email;
    document.getElementById("final_phone").innerHTML = "Phone Number: " + phone_number;
}

/// Home and Back Buttons ///
// Home
function home () {
    sessionStorage.clear();
    window.location = "../index.html";
}

// Back Button
function back () {
    sessionStorage.clear();
    window.history.back();
}

// Normal Back Button (no session clear)
function normal_back () { 
    window.history.back();
}

// jQuery back function
$(document).ready(function(){
	$('.back_button').click(function(){
		window.history.back();
		return false;
	});
});

// Firebase Database
const dbRef = firebase.database().ref();
const detailsRef = dbRef.child('reservations');
detailsRef.on("child_added", function(snapshot, prevChildKey){
    var newPost = snapshot.val();
});

function add_to_database(){
    var confirmation_number = Math.floor((Math.random() * 10000) + 1);
    sessionStorage.setItem("confirmation_number", confirmation_number);
    var full_name = sessionStorage.getItem("full_name");
    var check_in = sessionStorage.getItem("check_in");
    var check_out = sessionStorage.getItem("check_out");
    var email = sessionStorage.getItem("email");
    var phone_number = sessionStorage.getItem("phone_number");
    var location = sessionStorage.getItem("room_location");
    var package_name = sessionStorage.getItem("package_name");
    var room_name = sessionStorage.getItem("room_name");
   
    detailsRef.push().set({
        confirmation_number: confirmation_number,
        full_name: full_name,
        check_in: check_in,
        check_out: check_out,
        email: email,
        phone_number: phone_number,
        location: location,
        room_name: room_name,
        package_name: package_name        
    });
}