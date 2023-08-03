const tabItems = document.querySelectorAll('.tab-item');
const tabContentItems = document.querySelectorAll('.tab-content-item');
function selectItem(e) {
  removeBorder();
  removeShow();
  this.classList.add('tab-border');
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add('show');
}
function removeBorder() {
  tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow() {
  tabContentItems.forEach(item => item.classList.remove('show'));
}
tabItems.forEach(item => item.addEventListener('click', selectItem));
/*function tabContentItems(tabItems) {
    var i, tabcontent, tabItems;
    tabcontent c document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tabItems = document.getElementsByClassName("tabItems");
    for (i = 0; i < tablinks.length; i++) {
      tabItems[i].className = tabItems[i].className.replace(" active", "");
    }
    document.getElementById(tabcontent).style.display = "block";
    tabContentItems.currentTarget.className += " active";
  }
  */

