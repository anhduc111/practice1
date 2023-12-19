var clickCount = 0;
// ACCOUNT
const account = document.querySelector('.account');
const openAcc = document.querySelector('#btnAcc');
function ToggleAccount(){
  account.classList.toggle("hideAcc")
}
if(openAcc != null && account != null){
  openAcc.addEventListener("click", ToggleAccount);
  account.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) ToggleAccount();
  });
}
//NAVBAR
function over(id){
id.style.backgroundColor= "#000000";
}
function out(id){
id.style.backgroundColor= "#282A35";
}
function changer(id){
    id.style.top="-50px";
    setTimeout(() =>{
    id.style.top="0px";
    },1000)
}
function changed(){
    clickCount++;
    if(clickCount%2==1){document.getElementById( 'account' ).style.display = 'block';}
    else{document.getElementById( 'account' ).style.display = 'none';}
}
// bthg
const modal = document.querySelector('.modal');
const openModalBtn = document.querySelector('#btn');
const iconCloseModal = document.querySelector('.modal__header i');
const buttonCloseModal = document.querySelector('.modal__footer button');
function toggleModal(){
  modal.classList.toggle("hide");
}
if(openModalBtn != null && iconCloseModal != null && buttonCloseModal != null && modal != null ){
  openModalBtn.addEventListener("click", toggleModal);
  iconCloseModal.addEventListener("click", toggleModal);
  buttonCloseModal.addEventListener("click", toggleModal);
  modal.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal();
  });
}


// bất thường
const modal1 = document.querySelector('.modal1');
const iconCloseModal1 = document.querySelector('.modal__header1 i');
const buttonCloseModal1 = document.querySelector('.modal__footer1 button');
function toggleModal1(){
  document.getElementById("myParagraph").style.display = "none";
}
if(iconCloseModal1 != null && iconCloseModal1 != null && modal1 != null){
  iconCloseModal1.addEventListener("click", toggleModal1);
  buttonCloseModal1.addEventListener("click", toggleModal1);
  modal1.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleModal1();
  });
}
// ĐĂNG KÍ ĐĂNG NHẬP
function Log(){
  if(document.getElementById("Sign-Log").value == "1"){
    document.getElementById("Sign-Log").value = "2";
    var elements = document.getElementsByClassName("Log");
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "Đăng kí";
    }
    var elements1 = document.getElementsByClassName("Log-btn");
    for (var i = 0; i < elements.length; i++) {
      elements1[i].innerHTML = "Log-In";
    }
  }else{
    document.getElementById("Sign-Log").value = "1";
    var elements = document.getElementsByClassName("Log");
    for (var i = 0; i < elements.length; i++) {
      elements[i].innerHTML = "Đăng nhập";
    }
    var elements1 = document.getElementsByClassName("Log-btn");
    for (var i = 0; i < elements.length; i++) {
      elements1[i].innerHTML = "Sign-Up";
    }
  }
}
// INFORMATION
const InFor = document.querySelector('.infor');
const openInFor = document.querySelector('#infor');
function toggleInFor(){
  InFor.classList.toggle("hideInfor");
}
if(openInFor != null && InFor != null){
  openInFor.addEventListener("click", toggleInFor);
InFor.addEventListener("click", (e) => {
  if (e.target == e.currentTarget) toggleInFor();
});
}
// RECHARGE
const recharge = document.querySelector('.Recharge');
const openRecharge = document.querySelector('#openRecharge');
function toggleRecharge(){
  recharge.classList.toggle("hideRecharge");
}
if(recharge != null && openRecharge != null){
  openRecharge.addEventListener("click", toggleRecharge);
  recharge.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleRecharge();
  });
}
// MONTHLY
function CheckMonthly(){
  var monthly = document.querySelector('#monthly').value;
  var Recharge = document.querySelector('#Recharge-check').value;
  if(monthly*20000>Recharge){
    document.getElementById('mess').innerHTML="Bạn không đủ tiền!";
    return false;
  }else return true;
}
const Monthly = document.querySelector('.Monthly');
const openMonthly = document.querySelector('#openMonthly');
function toggleMonthly(){
  Monthly.classList.toggle("hideMonthly");
}
if(Monthly != null && openMonthly != null){
  openMonthly.addEventListener("click", toggleMonthly);
  Monthly.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) toggleMonthly();
  });
}
