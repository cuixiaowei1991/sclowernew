function zYouKe(){
  zTxt="�ǳƣ�<input input type=text name=username class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput2';\" value='�ο�'>";
  zTxt=zTxt+" <a href=\"javascript:zLogin();\" class='LinkGbookYouke'>���ص�¼</a>";
  zTxt=zTxt+"<input type='hidden' value='youke' name='gLoginType'>";
  document.getElementById("dGbookline2").innerHTML=zTxt;
}
function zLogin(){
  zTxt="��¼��<����>: <input type=text name=username class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput1';\">&nbsp;";
  zTxt=zTxt+"����: <input type=password name=userpass class=gBookInput1 onfocus=\"this.className='gBookInput2';\" onblur=\"this.className='gBookInput1';\">&nbsp;";
  zTxt=zTxt+"&nbsp;<!--input type=checkbox name=autoLogin value=1 checked>�Զ���¼-->";
  zTxt=zTxt+"&nbsp;<a href=\"javascript:zYouKe();\" class=LinkGbookYouke>�οͷ���</a> <a href=\"javascript:zRegID();\"><font color=#FF0000>5��ע��</font></a>";
  zTxt=zTxt+"<input type='hidden' value='reg' name='gLoginType'>";
  document.getElementById("dGbookline2").innerHTML=zTxt;
}
function zIsEmail(s){
  return s.search(/^\s*[\w\~\-\.]+\@[\w\~\-]+(\.[\w\~\-]+)+\s*$/g)   >=   0;   
}
function zCheckForm(the_form){
  if(!the_form.username){
    if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="������������ѯ����!")){
      alert("������������ѯ����!");
      the_form.gBookTextArea.focus();
      return false;
    }   
  }else{
    //if(!the_form.autoLogin){
    if(!the_form.userpass){
      if(the_form.username.value==""){
        alert("�ο��ǳƲ���Ϊ�գ�");
        the_form.username.focus();
        return false;
      }   
      if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="������������ѯ����!")){
        alert("������������ѯ����!");
        the_form.gBookTextArea.focus();
        return false;
      }   
    }else{
      //if(!zIsEmail(the_form.username.value)){
      if(the_form.username.value==""){
        alert("��¼��<����>����Ϊ�գ�");
        the_form.username.focus();
        return false;
      }
      if(the_form.userpass.value==""){
        alert("���벻��Ϊ�գ�");
        the_form.userpass.focus();
        return false;
      }
      if((the_form.gBookTextArea.value=="")||(the_form.gBookTextArea.value=="������������ѯ����!")){
        alert("������������ѯ����!");
        the_form.gBookTextArea.focus();
        return false;
      }   
    }
  }
  the_form.submitbtn.disabled=true;
  return true;
}
