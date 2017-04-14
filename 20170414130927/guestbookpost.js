function zYouKe(){
  zTxt="昵称：<input input type=text name=username class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput2';\" value='游客'>";
  zTxt=zTxt+" <a href=\"javascript:zLogin();\" class='LinkGbookYouke'>返回登录</a>";
  zTxt=zTxt+"<input type='hidden' value='youke' name='gLoginType'>";
  document.getElementById("dGbookline2").innerHTML=zTxt;
}
function zLogin(){
  zTxt="登录名<邮箱>: <input type=text name=username class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput1';\">&nbsp;";
  zTxt=zTxt+"密码: <input type=password name=userpass class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput1';\">&nbsp;";
  zTxt=zTxt+"&nbsp;<!--input type=checkbox name=autoLogin value=1 checked>自动登录-->";
  zTxt=zTxt+"&nbsp;<a href=\"javascript:zYouKe();\" class=LinkGbookYouke>游客发言</a> <a href=\"javascript:zRegID();\"><font color=#FF0000>5秒注册</font></a>";
  zTxt=zTxt+"<input type='hidden' value='reg' name='gLoginType'>";
  document.getElementById("dGbookline2").innerHTML=zTxt;
}
function zIsEmail(s){
  return s.search(/^\s*[\w\~\-\.]+\@[\w\~\-]+(\.[\w\~\-]+)+\s*$/g)   >=   0;   
}
function zCheckForm(the_form){
  if(!the_form.username){
    if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="请输入您的咨询内容!")){
      alert("请输入您的咨询内容!");
      the_form.gBookTextArea.focus();
      return false;
    }   
  }else{
    //if(!the_form.autoLogin){
    if(!the_form.userpass){
      if(the_form.username.value==""){
        alert("游客昵称不能为空！");
        the_form.username.focus();
        return false;
      }   
      if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="请输入您的咨询内容!")){
        alert("请输入您的咨询内容!");
        the_form.gBookTextArea.focus();
        return false;
      }   
    }else{
      //if(!zIsEmail(the_form.username.value)){
      if(the_form.username.value==""){
        alert("登录名<邮箱>不能为空！");
        the_form.username.focus();
        return false;
      }
      if(the_form.userpass.value==""){
        alert("密码不能为空！");
        the_form.userpass.focus();
        return false;
      }
      if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="请输入您的咨询内容!")){
        alert("请输入您的咨询内容!");
        the_form.gBookTextArea.focus();
        return false;
      }   
    }
  }
  the_form.submitbtn.disabled=true;
  return true;
}
