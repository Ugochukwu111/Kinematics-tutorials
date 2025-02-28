let showSidebarBtn = document.querySelector('.mobile-menu-show-siderbar') //button that controls the sideBar
let sideBar = document.querySelector('.side-bar')// this is the actual side bar box

let isSideBarOpen = false; //flag that allows me toggle between show and hide side bar

showSidebarBtn.addEventListener('click', () => {
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
})