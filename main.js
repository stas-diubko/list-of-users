'use strict'

var myList = document.querySelector('table');
var modal = document.querySelector('.modal');
var modalContent = document.querySelector('.modal-content');
var userName = document.querySelector('h3');
var userStreet = document.querySelector('.street');
var userCity = document.querySelector('.city');
var userZipcode = document.querySelector('.zipcode');
var close = document.querySelector('.close');

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(function(data) {

    for(let i = 0; i < data.length; i++) {
        var listItem = document.createElement('tr');
        listItem.innerHTML = '<td>' + data[i].name + '</td>' + '<td>' + data[i].username + '</td>' + '<td>' + data[i].email + '</td>' + '<td>' + data[i].website + '</td>';
        myList.appendChild(listItem);
    }

    var tds = document.getElementsByTagName('td');
    for (let f = 0; f < tds.length; f++){
        tds[f].onclick = function () {

            var search = this.innerHTML;

           for (let i = 0; i < data.length; i++){
                // console.log(data[i])
               for (let key in data[i]){
                   if (data[i][key] === search){

                    modal.style.display = 'block';
                   userName.innerHTML = data[i].name;
                   userStreet.innerHTML = 'Street: ' + data[i].address.street;
                   userCity.innerHTML = 'City: ' + data[i].address.city;
                   userZipcode.innerHTML = 'Zipcode: ' + data[i].address.zipcode;

                   close.onclick = function (){
                       modal.style.display = 'none';
                   };

                   window.onclick = function (event){
                       if (event.target == modal) {
                           modal.style.display = 'none';
                        }
                   };

                   }
               }
           }
        }
    }
});

    var el = document.getElementsByTagName('th');
    for (let j = 0; j < el.length; j++){
        el[j].onclick = function () {

            var table = document.querySelector('table');
            var rows = [];

            for (var i = table.children.length - 1; i > 0; i--) {
                var child = table.removeChild(table.children[i]);
                rows.push(child);
            }

            rows.sort(function(a, b) {
                return a.lastChild.innerHTML - b.lastChild.innerHTML;
            })

            for (var i = 0; i < rows.length; i++) {
                myList.appendChild(rows[i]);
            }
        }
    };




 