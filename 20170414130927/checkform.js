////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function zCheckSearch(the_form){
  if(the_form.key.value==""){
      alert("�����ؼ��ʲ���Ϊ�գ�");
      the_form.key.focus();
      return false;
  }
    return true;
}

