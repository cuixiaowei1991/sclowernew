function zCheckAnYuan(the_form){
  if(the_form.title.value==""){
    alert("��Դ���ⲻ��Ϊ��!");
    the_form.title.focus();
    return false;
  }
  if(the_form.username.value==""){
    alert("��Դί������������Ϊ��!");
    the_form.username.focus();
    return false;
  }
  if(the_form.checkcode.value==""){
    alert("��֤�벻��Ϊ��!");
    the_form.checkcode.focus();
    return false;
  }
  if(the_form.usertel.value==""){
    alert("Ϊ�˾�������ȡ����ϵ, �˽ⰸ��, ������������ϵ�绰!");
    the_form.usertel.focus();
    return false;
  }

  the_form.submitbtn.disabled=true;
  return true;
}