function zCheckAnYuan(the_form){
  if(the_form.title.value==""){
    alert("案源标题不能为空!");
    the_form.title.focus();
    return false;
  }
  if(the_form.username.value==""){
    alert("案源委托人姓名不能为空!");
    the_form.username.focus();
    return false;
  }
  if(the_form.checkcode.value==""){
    alert("验证码不能为空!");
    the_form.checkcode.focus();
    return false;
  }
  if(the_form.usertel.value==""){
    alert("为了尽快与您取得联系, 了解案件, 请留下您的联系电话!");
    the_form.usertel.focus();
    return false;
  }

  the_form.submitbtn.disabled=true;
  return true;
}