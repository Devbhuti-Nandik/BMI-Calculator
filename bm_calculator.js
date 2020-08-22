function getValues(age, height, weight) 
{
    let newHeight,result;
    
    if(age>0 && age<=120)
    {
        newHeight = height/100;
        if(height>0 && weight>0)
        {
                result  = weight/Math.pow(newHeight,2);
                document.getElementById("myProgress").setAttribute("style","display:block");
                document.getElementsByClassName("blankClass")[0].setAttribute("style","display:block");
                document.getElementsByClassName("blankClass1")[0].setAttribute("style","display:block");
                document.getElementsByClassName("blankClass2")[0].setAttribute("style","display:block");
                
                document.getElementById("bmi").innerHTML="BMI ="+" "+result.toPrecision(4) + " kg/m<sup>2</sup>";
                //progression bar
                let i=0;
                if(i==0)
                {
                    i=1;
                    let elem = document.getElementById("myBar");   
                    let width = 1;
                    let id = setInterval(frame, 10);
                    function frame() 
                    {
                        //console.log("before if"+width);
                        if (width >= result) 
                        {
                            clearInterval(id);
                            i=0;
                          //  console.log("after if"+width);
                        }   
                        else 
                        {
                            //console.log("inside first else"+width);
                            if(result>100)
                            {
                                elem.style.width= 100 +"%";
                                elem.innerHTML = result.toPrecision(4) + "<br>kg/m<sup>2</sup>";
                                clearInterval(id);
                              //  console.log("result" + result);
                            }
                            
                            else
                            {
                                //console.log("inside second else"+width);
                                width++; 
                                elem.style.width = width + "%";
                                elem.innerHTML = result.toPrecision(2) + "<br>kg/m<sup>2</sup>";
                                
                            }
                        }
                    }
                }
            
            if(age>=18 && age<=120)
            {
                if(result>=0 && result<=18.5)
                    document.getElementById("myBar").setAttribute("style","background-color:#fff200");
                else if(result>18.5 && result<=25)
                    document.getElementById("myBar").setAttribute("style","background-color:#4CAF50");
                else if(result>25 && result<=30)
                    document.getElementById("myBar").setAttribute("style","background-color:#FFA500");
                else
                    document.getElementById("myBar").setAttribute("style","background-color:#FF6347");
            }
            else if(age>0 && age<18)
            {
                if(result>0 && result<13.5)
                    document.getElementById("myBar").setAttribute("style","background-color:#fff200");
                else if(result>=13.5 && result<=18)
                    document.getElementById("myBar").setAttribute("style","background-color:#4CAF50");
                else if(result >18 && result<=19.5)
                    document.getElementById("myBar").setAttribute("style","background-color:#FFA500");
                else
                    document.getElementById("myBar").setAttribute("style","background-color:#FF6347");
                
            }
            
            if(age>=18 && age<=120)
            {
                if(result<16)
                    document.getElementById("details").innerHTML="(Severe Thinness)";
                else if(result>=16 && result<=17)
                    document.getElementById("details").innerHTML="(Moderate Thinness)";
                else if(result>=17 && result<=18.5)
                    document.getElementById("details").innerHTML="(Mild Thinness)";
                else if(result>18.5 && result<=25)
                    document.getElementById("details").innerHTML="(Normal)";
                else if(result>25 && result<=30)
                    document.getElementById("details").innerHTML="(Overweight)";
                else if(result>30 && result<=35)
                    document.getElementById("details").innerHTML="(Obese Class I)";
                else if(result>35 && result<=40)
                    document.getElementById("details").innerHTML="(Obese Class II)";
                else
                    document.getElementById("details").innerHTML="(Obese Class III)";
            }
            else if(age>0 && age<18)
            {
                if(result>0 && result<13.5)
                    document.getElementById("details").innerHTML="(Thinness)";
                else if(result>=13.5 && result<=18)
                    document.getElementById("details").innerHTML="(Normal)";
                else if(result >18 && result<=19.5)
                    document.getElementById("details").innerHTML="(OverWeight)";
                else
                    document.getElementById("details").innerHTML="(Obese)";
            }
        }
            else
            {
                document.getElementsByClassName("blankClass1")[0].setAttribute("style","display:block");
                document.getElementById("bmi").innerHTML="Height or weight cannot be zero!!!"
            }
    }
    else
    {
        document.getElementsByClassName("blankClass1")[0].setAttribute("style","display:block");
        document.getElementById("bmi").innerHTML="Invalid age!!!";
    }
}

function resetFunc()
{
    document.getElementsByClassName("blankClass")[0].setAttribute("style","display:none");
    document.getElementsByClassName("blankClass1")[0].setAttribute("style","display:none");
    document.getElementsByClassName("blankClass2")[0].setAttribute("style","display:none");
    document.getElementById("myForm").reset();
}

