function insert(num)
{
   document.calculator.display.value+=num
}

function calc()
{
   document.calculator.display.value=eval(document.calculator.display.value)
}

function del()
{
   var val=document.calculator.display.value
   document.calculator.display.value=val.substr(0,val.length-1)
}

function clean()
{
   document.calculator.display.value=""
}
