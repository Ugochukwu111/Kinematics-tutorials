let showSidebarBtn = document.querySelector('.mobile-menu-show-siderbar') //button that controls the sideBar
let sideBar = document.querySelector('.side-bar')// this is the actual side bar box

let isSideBarOpen = false; //flag that allows me toggle between show and hide side bar

function toggleSidebar(){
  if(isSideBarOpen){
    sideBar.style. transform = 'translateX(100%)' ;
    showSidebarBtn.style.backgroundImage = 'url(icons/menu_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg)' ;
    isSideBarOpen = false;
    // showSidebarBtn.setAttribute("aria-expanded", false);
  }else{
    sideBar.style.transform = 'translateX( 0%)';
    showSidebarBtn.style.backgroundImage = 'url(icons/close_24dp_E3E3E3_FILL0_wght400_GRAD0_opsz24.svg)' ;
    isSideBarOpen = true;
  //   showSidebarBtn.setAttribute("aria-expanded", true);
  }
}

showSidebarBtn.addEventListener("click", (event) => {
  event.stopPropagation(); // Prevents click from propagating to document
  toggleSidebar();
});

document.addEventListener("click", (event) => {
  if (isSideBarOpen && !sideBar.contains(event.target) && event.target !== showSidebarBtn) {
    toggleSidebar();
  }
});


// this array contains major courses that 100lvl students offers in uniben
// --that kinematics teaches
let hundredLVLCourseLIst =[
  '**100_Course__1**',
  '**100_Course__2**',
  '**100_Course__3**',
  '**100_Course__4**',
  '**100_Course__5**'
];

let html100lvlCourseList = [];

// this array contains major courses that 200lvl students offers in uniben
// --that kinematics teaches
const twoHundredLVLCourseLIst =[
  '**200_Course__1**',
  '**200_Course__2**',
  '**200_Course__3**',
  '**200_Course__4**',
  '**200_Course__5**'
];

let html200lvlCourseList = [];

//save both lenghts of the array in variable to enhance faster loopiing
let hundredLVLCourseLIstLength = hundredLVLCourseLIst.length;
let twoHundredLVLCourseLIstLength = twoHundredLVLCourseLIst.length;

//the element that holds the courses
let courseContainer = document.querySelector('.course-list-holder');
console.log(courseContainer)

//reuseable function to loop 200lvl and 100lvl courseList
function  displayCourseList(courseList, courseListlength, htmllvllist) {
  htmllvllist.length = 0;// lent is set to 0 to prevent accumulation of old data
  for (let i = 0; i < courseListlength; i++){
    let loopedArray = courseList[i];
     let html = `<p>${loopedArray}</p>`;
     htmllvllist.push(html);
       
  }
  courseContainer.innerHTML = htmllvllist.join("");
}
 function display100lvlCourseList() {
  displayCourseList(hundredLVLCourseLIst, hundredLVLCourseLIstLength, html100lvlCourseList);
 }
 display100lvlCourseList()

 function display200lvlCourseList(){
  displayCourseList(twoHundredLVLCourseLIst, twoHundredLVLCourseLIstLength, html200lvlCourseList);
 }

