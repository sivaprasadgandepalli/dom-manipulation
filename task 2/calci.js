var op1="",op2="",opr="";
let str="+-*/%";
let ds=document.getElementById('result');
let res=document.getElementById('display');
function display(e)
{
	if(str.includes(e)==false)
	{
		op1+=e;
		res.innerText+=e;
	}
	else
	{
		res.innerText+=e;
		if(op1=="")
		{
			op1+=e;
		}
		else{
			getValues(op1,e);
		}
	}
}
function getValues(val,oparator){
	op2=val;
	opr=oparator;
	op1="";
}
function calculate(){
	if(opr=="+")
	{
		ds.value=parseFloat(op2)+parseFloat(op1);
	}
	else if(opr=="-")
	{
		ds.innerHTML=parseFloat(op2)-parseFloat(op1);
	}
	else if(opr=="*")
	{
		ds.innerHTML=parseFloat(op2)*parseFloat(op1);
	}
	else if(opr=="/")
	{
		ds.innerHTML=parseFloat(op2)/parseFloat(op1);
		ds.style.transition="2s";
	}
	else if(opr=="%")
	{
		ds.innerHTML=parseFloat(op2)%parseFloat(op1);
	}
}
function cancel(){
	ds.innerHTML=0;
	res.innerText="";
	op1="";
	op2="";
	opr="";
}
function hover(e){
	let a=document.querySelectorAll('td');
	a[e].style.background="white";
	a[e].style.color="black";
}
function mouseOut(e){
	let a=document.querySelectorAll('td');
	a[e].style.background="black";
	a[e].style.color="white";
}