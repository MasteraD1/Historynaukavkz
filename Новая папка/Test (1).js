<script type="text/javascript" language="JavaScript">// <![CDATA[
 var res="14131";
function check_me()
{
    var count=0;
    with(document.test) {
if (!Q1[0].checked&&!Q1[1].checked&&!Q1[2].checked&&!Q1[3].checked)
{count+=1};
if (!Q2[0].checked&&!Q2[1].checked&&!Q2[2].checked&&!Q2[3].checked)
{count+=1};
if (!Q3[0].checked&&!Q3[1].checked&&!Q3[2].checked&&!Q3[3].checked)
{count+=1};
if (!Q4[0].checked&&!Q4[1].checked&&!Q4[2].checked&&!Q4[3].checked)
{count+=1};
if (!Q5[0].checked&&!Q5[1].checked&&!Q5[2].checked&&!Q5[3].checked)
{count+=1};
if (count>0) alert("Вы выполнили не все задания. Проверьте себя!")
        else answer();
    }
}

function control(k, f1,f2,f3,f4,f5) {
if (k==1&&f1.checked) return true;
if (k==2&&f2.checked) return true;
if (k==3&&f3.checked) return true;
if (k==4&&f4.checked) return true;
if (k==5&&f5.checked) return true;
return false;
}

function answer() {
answ="";
     with(document)    {
    answ+=control(res.charAt(0) ,test.Q1[0],test.Q1[1],test.Q1[2],test.Q1[3])?"1":"0";
answ+=control(res.charAt(1) ,test.Q2[0],test.Q2[1],test.Q2[2],test.Q2[3])?"1":"0";
answ+=control(res.charAt(2) ,test.Q3[0],test.Q3[1],test.Q3[2],test.Q3[3])?"1":"0";
answ+=control(res.charAt(3) ,test.Q4[0],test.Q4[1],test.Q4[2],test.Q4[3])?"1":"0";
answ+=control(res.charAt(4) ,test.Q5[0],test.Q5[1],test.Q5[2],test.Q5[3])?"1":"0";

showResult();
    }
}

function showResult()   {
    var nok=0;
    var i,s;

for (i=0; i<answ.length;i++) {nok+=answ.charAt(i)=="1"?1:0;}
if(nok==5) s="ОТЛИЧНО";
if(nok<5) s="ХОРОШО";
if(nok<3.75) s="УДОВЛЕТВОРИТЕЛЬНО";
if (nok<2.5) s="НЕУДОВЛЕТВОРИТЕЛЬНО";
    document.test.s1.
    value="Количество правильных ответов "+nok+". Ваша оценка "+s+". Посмотрите на окно рядом с номером вопроса. Если ответ правильный, там (+). Если ответ ошибочен, там (-).";

with(document.test)
    {
    if (answ.charAt(0)=="1") {T1.value=" + "} else {T1.value=" - "};
   if (answ.charAt(1)=="1") {T2.value=" + "} else {T2.value=" - "};
   if (answ.charAt(2)=="1") {T3.value=" + "} else {T3.value=" - "};
   if (answ.charAt(3)=="1") {T4.value=" + "} else {T4.value=" - "};
   if (answ.charAt(4)=="1") {T5.value=" + "} else {T5.value=" - "};
     }
}
function showhide(obj){
    if(obj == 'none') return 'inline';
    else return 'none';
}
// ]]>
</script>
<center><b>Түркістан (Қоқан) автономиясын құру</b></center><br/><br/>
&nbsp;&nbsp;&nbsp;<span style="color:#006699;text-decoration:underline;cursor:pointer;" onclick="document.getElementById('instruction').style.display = showhide(document.getElementById('instruction').style.display)">
Инструкция</span>
 <br/>
<div id="instruction" style="display: none; width: 100%;">
<ul>
<li>Выберите один из вариантов в каждом из 5 вопросов;</li>
<li>Нажмите на кнопку "Показать результат";</li>
<li>Скрипт не покажет результат, пока Вы не ответите на все вопросы;</li>
<li>Загляните в окно рядом с номером задания. Если ответ правильный, то там (+). Если Вы ошиблись, там (-).</li>
<li>За каждый правильный ответ начисляется 1 балл;</li>
<li>Оценки: менее 2.5 баллов - НЕУДОВЛЕТВОРИТЕЛЬНО, от 2.5 но менее 3.75 - УДОВЛЕТВОРИТЕЛЬНО, 3.75 и менее 5 - ХОРОШО, 5 - ОТЛИЧНО;</li>
<li>Чтобы сбросить результат тестирования, нажать кнопку "Сбросить ответы";</li>
</ul>
</div>
<form name="test"><ol>
<li><INPUT type="text" size="1" value="" name="T1"/><b> «База Академии Наук СССР в Казахстане была открыта в</b><br/>
<input type="radio" value="0" name="Q1"/> 1932<br />
<input type="radio" value="1" name="Q1"/> 1933<br />
<input type="radio" value="2" name="Q1"/> 1934<br />
<input type="radio" value="3" name="Q1"/> 1935<br />
<br/></li><li><INPUT type="text" size="1" value="" name="T2"/><b> Первый учебник алгебры для казахских школ составил:</b><br/>
<input type="radio" value="0" name="Q2"/> А. Букейханов<br />
<input type="radio" value="1" name="Q2"/>  М. Тынышпаев<br />
<input type="radio" value="2" name="Q2"/> ) А. Байтурсынов<br />
<input type="radio" value="3" name="Q2"/> К. Сатпаев <br />
<br/></li><li><INPUT type="text" size="1" value="" name="T3"/><b> Санитарно-бактериологический институт был создан в: </b><br/>
<input type="radio" value="0" name="Q3"/> 1925<br />
<input type="radio" value="1" name="Q3"/> 1926<br />
<input type="radio" value="2" name="Q3"/> 1927<br />
<input type="radio" value="3" name="Q3"/> 1928<br />
<br/></li><li><INPUT type="text" size="1" value="" name="T4"/><b> Количество научных учреждений в Казахстане к 1940 году составляло:  </b><br/>
<input type="radio" value="0" name="Q4"/> 47 <br />
<input type="radio" value="1" name="Q4"/> 51 <br />
<input type="radio" value="2" name="Q4"/> 57<br />
<input type="radio" value="3" name="Q4"/> 61<br />
<br/></li><li><INPUT type="text" size="1" value="" name="T5"/><b> В каком году созданы секторы почвоведения и географии? </b><br/>
<input type="radio" value="0" name="Q5"/> 1939 <br />
<input type="radio" value="1" name="Q5"/> 1940 <br />
<input type="radio" value="2" name="Q5"/> 1941<br />
<input type="radio" value="3" name="Q5"/> 1942<br />
<br/></li></ol>
<CENTER>
<P><TEXTAREA name="s1" rows="4" cols="70" readonly> </TEXTAREA> </P>
<INPUT onclick="check_me()" type="button" value="Показать результат"/>&nbsp;&nbsp;&nbsp;&nbsp;
<INPUT type="reset" value="Сбросить ответы"/>
</CENTER>
</form>
<!-- Test created by service http://test.fromgomel.com -->
