const fName = document.getElementById('fName')
const address = document.getElementById('Address')
const city = document.getElementById('city')
const pNumber = document.getElementById('pNumber')
var phoneformat = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
const email = document.getElementById('email')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const vMake = document.getElementById('vMake')
const vModel = document.getElementById('vModel')
const vYear = document.getElementById('vYear')
const form= document.getElementById('form')
const errorElement = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []

    if (fName.value === '') {
        fName.style.border = "1px solid red"
        document.getElementById("nError").innerHTML = "&#10005"
        messages.push("Enter Correct Name");
    }
    else{
        fName.style.border = "1px solid green"
        document.getElementById("nError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
   if (address.value === '') {
        address.style.border = "1px solid red"
        document.getElementById("aError").innerHTML = "&#10005"
        messages.push("Enter Correct Address")
    }
    else{
        address.style.border = "1px solid #d6d6d6"
        document.getElementById("aError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
    if (city.value === '') {
        // document.getElementById('error_field').innerHTML = "required";
        city.style.border = "1px solid red"
        document.getElementById("cError").innerHTML = "&#10005"
        messages.push("Enter Correct City");
    }
    else{
        city.style.border = "1px solid #d6d6d6"
        document.getElementById("cError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
   if (pNumber.value === '' || !pNumber.value.match(phoneformat)) {
        pNumber.style.border = "1px solid red"
        document.getElementById("pError").innerHTML = "&#10005"
        messages.push("Enter Correct Phone#")
    }
    else{
        pNumber.style.border = "1px solid #d6d6d6"
        document.getElementById("pError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
    if (email.value === '' || !email.value.match(mailformat)) {
        // document.getElementById('error_field').innerHTML = "required";
        email.style.border = "1px solid red"
        document.getElementById("eError").innerHTML = "&#10005"
        messages.push("Enter Correct Email");
    }
    else{
        email.style.border = "1px solid #d6d6d6"
        document.getElementById("eError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
   if (vMake.value === '') {
        vMake.style.border = "1px solid red"
        document.getElementById("markError").innerHTML = "&#10005"
        messages.push("Enter Correct Mark ")
    }
    else{
        vMake.style.border = "1px solid #d6d6d6"
        document.getElementById("markError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
    if (vModel.value === '') {
        // document.getElementById('error_field').innerHTML = "required";
        vModel.style.border = "1px solid red"
        document.getElementById("modelError").innerHTML = "&#10005"
        messages.push("Enter Correct Model");
    }
    else{
        vModel.style.border = "1px solid #d6d6d6"
        document.getElementById("modelError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }
   if (vYear.value === '') {
        vYear.style.border = "1px solid red"
        document.getElementById("yearError").innerHTML = "&#10005"
        messages.push("Enter Correct Year")
    }
    else{
        vYear.style.border = "1px solid #d6d6d6"
        document.getElementById("yearError").innerHTML = "<span style='color: Green;'>&#10003</span>"
    }

    if (messages.length > 0) {
        e.preventDefault()
        // to show the message on the html page
        // errorElement.innerHTML =messages.join('<br>')
    }

    else{
        saveBookmark()
    }
    
    
})
    function saveBookmark(e) {  
      var bookmark = {
        fullName: fName.value,
        address: address.value,
        city: city.value,
        Pnumber: pNumber.value,
        email: email.value,
        Mark: vMake.value,
        Model: vModel.value,
        Year: vYear.value,
        Color: vColor.value
      }
      // Test if bookmarks is null
      if (localStorage.getItem('bookmarks') === null) {
        // Init array
        var bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      } else {
        // Get bookmarks from localStorage
        var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Re-set back to localStorage
        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
      }
  
    }
    //  Fetch bookmarks
  function fetchBookmarks() {
    // Get bookmarks from localStorage
    var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
    // Get output id
    var bookmarksResults = document.getElementById('bookmarksResults');
    // Build output
    bookmarksResults.innerHTML = '';
    for (var i = 0; i < bookmarks.length; i++) {
      var FirstName = bookmarks[i].fullName;
      var Address = bookmarks[i].address;
      var City = bookmarks[i].city;
      var Phone = bookmarks[i].Pnumber;
      var email = bookmarks[i].email;
      var mark = bookmarks[i].Mark;
      var model = bookmarks[i].Model;
      var year = bookmarks[i].Year;
    //   var color = bookmarks[i].Color
      var txt = mark;
  
      bookmarksResults.innerHTML += ' <table id="Value">' +
        '<tr><th>Name</th><th>Address</th><th>City</th><th>Phone</th><th>Email</th><th>Mark</th><th>Model</th><th>Year</th><th>Link</th></tr>' +
        ' <tr> <td>' + FirstName + '</td>' +
        '<td>' + Address + '</td>' +
        ' <td>' + City + '</td>' +
        '<td>' + Phone + '</td>' +
        '<td>' + email + '</td>' +
        '<td>' + mark + '</td>' +
        '<td>' + model + '</td>' +
        '<td>' + year + '</td>' +
        '<td>' + txt.link("http://www.jdpower.com/Cars/" + mark + "/" + model + "/" + year) + '</td>' + 
        '</tr> <br> '

    }
  }
