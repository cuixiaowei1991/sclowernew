
function ZhiCi(zNowDoGbook_id,zNowDoVal){
  var dstNowGBookSpan=document.getElementById("ZhiCi_"+zNowDoGbook_id);
  zNowDoVal=Number(zNowDoVal)+1;
  dstNowGBookSpan.innerHTML="��֧��["+zNowDoVal.toString()+"]";
  setNGbook(zNowDoGbook_id,'isZhiCi');
}

function FanDui(zNowDoGbook_id,zNowDoVal){
  var dstNowGBookSpan=document.getElementById("FanDui_"+zNowDoGbook_id);
  zNowDoVal=Number(zNowDoVal)+1;
  dstNowGBookSpan.innerHTML="�ѷ���["+zNowDoVal.toString()+"]";
  setNGbook(zNowDoGbook_id,'isFanDui');
}

function HuiFu(zNowDoGbook_id,zNoDoUserName){
  var dstNowGBookSpan=window.frames["iframe_gbook"].document.getElementById("gBookTextArea");
  dstNowGBookSpan.focus();
  dstNowGBookSpan.value="[Re:"+zNowDoGbook_id.toString()+" �ظ�:"+zNoDoUserName.toString()+"������]\n";
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function  zTrim(str){
    for(var  i  =  0  ;  i<str.length  &&  str.charAt(i)=="  "  ;  i++  )  ;
    for(var  j  =str.length;  j>0  &&  str.charAt(j-1)=="  "  ;  j--)  ;
    if(i>j)  return  "";  
    return  str.substring(i,j);  
}

function createAjaxObject()
{
	var ajax=false;
	if(document.all)  //IE�ں˵������
	{
		ajax=new ActiveXObject("Microsoft.XMLHTTP");
	}
	else    //��IE�ں�
	{
		ajax=new XMLHttpRequest();
	}
	if(!ajax || typeof ajax=="undefine")
	{
		return false;
	}
	return ajax;
}

function getMyHtml(divId,getHtmlPath)
{
	var ajax=createAjaxObject();
	var objDiv=document.getElementById(divId);
	if(!ajax)
	{
		alert("�����������֧��AJAX����������������");
		return;
	}
	ajax.open("GET",getHtmlPath,true);
	ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	ajax.onreadystatechange=function(){    //����ajax״̬�仯ʱ��������
		if(ajax.readyState==4 && ajax.status==200)
		{
			objDiv.innerHTML=unescape(ajax.responseText);
		}
	}
	ajax.send(null);
}

function setNGbook(nGbookNowDoJJid,nGBookDoFanSi)
{
	var ajax=createAjaxObject();
	if(!ajax){return false;}
	var getHtmlPath="/GuestBook/BannerGbookZhiCi.asp?action1="+nGBookDoFanSi.toString()+"&id="+nGbookNowDoJJid.toString();
	ajax.open("GET",getHtmlPath,true);
	ajax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	ajax.onreadystatechange=function(){    //����ajax״̬�仯ʱ��������
			if(ajax.readyState==4 && ajax.status==200){
			  //
			}
	}
	ajax.send(null);
	return false;
}
