//PROBLEM : There is too much information on one page of this website.
//SOLUTION : Use progressive enhancement principles to create pagination and enhance useability of the page

//STEPS TO SOLUTION :
//On page load, hide all but first 10 students in the list
//Set var that targets the original student-list in HTML so it can be manipulated
//Set var for the amount of students in the initial list
//Create a For loop so that if the index number of student in the list is less than 10, display it. Anything after 10 will be hidden

//Add pagination links using Javascript at bottom of the page
//Calculate the number of pages by taking the the total amount of students, dividing by page view amount (10), and log this in the console
//Create a pagination function, that adds(append) a list (ul) of links (a) to the bottom of the page

//The appropriate set of 10 students from the list will show in order when the user clicks through the different pagination links / pages
//When user clicks (onclick) on "2" (a) in the pagination, students 11 through 20 are shown (???). And so on, respectively (???)

//Ensure that this works for any number of students
//Test by adding my written Javascript to the student-list-examples folder




/* Is there a way to do this, using this method of hiding students?
$(document).ready(function () {

$("ul.student-list").hide()
})*/

//document.getElementsByTagName("ul").children[0].style.display = "none"



////////////////////////* START OF CODE *////////////////////////
//$(document).ready ONLY IF JAVASCRIPT SRC ARE NOT AT BOTTOM OF HTML DOCUMENT


////////////////////////* VARIABLES *////////////////////////
var htmlPage = document.getElementsByClassName('page')[0];
var ogstudentList = document.getElementsByClassName('student-list')[0];
var studentAmount = ogstudentList.children.length;
var pagesNumber;
var paginationList = document.createElement('ul');

var page = document.createElement('li');
var linkNumber = document.createElement('a');
// WHY CAN'T I PUT var number = document.createTextNode(i+1);


var pageNumber = parseInt('item.innerHTML');
var start = (pageNumber * 10) - 10;
var end = (pageNumber * 10);

var details = document.getElementsByClassName('student-details');
var ul = document.createElement('ul');
var btn =document.getElementsByTagName('button')[0];
var input = document.getElementsByTagName('input')[0];
var counter = 0;
var arr = [];




////////////////////////* FUNCTIONS *////////////////////////
function InitStudentDisplay(){
  //log this info for some reason
  console.log('init');

  /*For loop where the index starts at 10.
  After the tenth student,if i(10) is less than the amount of children in the 'student-list' html element,
  then add 1 to i and hide each child with the corresponding index number*/
  for (i = 10; i < studentAmount; i++) {
    ogstudentList.children[i].style.display = 'none';
  }

  for(var i=0; i<10; i++){
       ogstudentList.children[i].style.display = 'block';
   }
   var pagesNumbersList = document.querySelectorAll('ul li a');
    //pagesNumbersList[0].classList.add('active');

}



/*Function that calculates the amount of pages
if each page only displays 10 students.
Function parameters are the two components that need to be accessed within the function,
so listing them helps for readability / reference.
*/
function calculatePagesAmount(studentAmount){ //why do I not have to set pagesNumber as a paramter?
console.log(studentAmount);
  pagesNumber = Math.ceil(studentAmount/10);
  console.log(pagesNumber);
}



/*Function that creates the pagination links, from the previously determiend amount of pages.
1. run the calculatePagesAmount function
2. Give ul created by var paginationList a class of 'pagination'
3. Set paginationList as the last element within the htmlPage entity (the page div in the html body)
4.Run a for loop that creates a numbered link for everytime i is less than the amount of pagesNumber.
5.

*/
function pagination(studentAmount){
  calculatePagesAmount(studentAmount);

  paginationList.setAttribute('class', 'pagination');
  htmlPage.append(paginationList);

  /*1. Set the var number to create a textnode starting at 1. This has to be defined here, because i is defined in this for loop.
  2. Set href=# for linkNumber, which is a previously created 'a'
  3. Append the number i+1 to the 'a' that is linkNumber
  4. Append the linkNumber link to page, which is a previously defined li item
  5. Append this page list, to the prefviously defined 'ul' known as paginationList
  6. Append this paginationList containing these items finally to the htmlPage, which is the page div
  */
  for(var i=0; i<pagesNumber; i++){
    var number = document.createTextNode(i+1);
    linkNumber.setAttribute('href', '#')
    linkNumber.append(number);
    page.append(linkNumber);
    paginationList.append(page);
    htmlPage.append(paginationList);
    //pagesNumbersList.forEach(activePage, studentAmount);
  }


  /*function activePage(item){
    item.onclick = function(){
      for(var i=0; i<studentNumber; i++){
        ogstudentList.children[i].style.display = 'none';
      }

      for(var i=0; i<pagesNumbersList.length; i++){
        pagesNumbersList[i].classList.remove('class', 'active');
      }

      item.classList.add('active');

      for(var i=start; i<end; i++){
        ogstudentList.children[i].style.display = 'block';
      }
    }
  }*/

  }





////////////////////////* LAUNCH CODE *////////////////////////

InitStudentDisplay();
pagination(studentAmount);








////////////////////////* END OF CODE *////////////////////////
