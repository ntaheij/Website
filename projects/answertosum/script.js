var input = document.getElementById("answer");


if(getUrlVars()["answer"] != null)
{
    var answer = getUrlVars()["answer"];
    document.getElementById("answer").value = answer.toString();
    document.getElementById("button").click();
}

// Execute a function when the user releases a key on the keyboard
input.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button").click();
  }
});

var e = document.getElementById("niveau");
var niveau = e.options[e.selectedIndex].value;

var form = document.getElementById("f");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);


function calculateSum() {
    var x = parseInt(document.getElementById("answer").value);
    if(x.toString()==='NaN')
    {

        document.getElementById("answer").value = x.toString();
        document.getElementById("keer").innerHTML = "No numbers as answer.";
        document.getElementById("gedeeld").innerHTML = "";
        document.getElementById("plus").innerHTML = "";
        document.getElementById("min").innerHTML = "";
        return true;
    }
    niveau = e.options[e.selectedIndex].value;

    if(niveau=="select")
    {
        document.getElementById("keer").innerHTML = "First choose a niveau."; 
        return true;
    }

    keer();
    console.log("done keer");
    gedeeld();
    console.log("done gedeeld");
    plus();
    console.log("done plus");
    min();
    console.log("done min");
}

function keer()
{
    var x = parseInt(document.getElementById("answer").value);

    var add = false;
    if(x<0)
    {
        x = x*-1;
        add = true;
    }

    var sum = x + "=";

    if(!(x.toString()==='NaN'))
    {
        var v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040))))

        while(v2===0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(90000))))))
        }

        var v3 = x/v2;

        while(!((v3 - x) < 0.5))
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
        }

        if(niveau==="basis")
        {
            while(v3 > (x * 3))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
            }

            while(v2 > (x * 2))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x/v2;
            }
        }

        if(niveau==="vmbo")
        {
            while(v3 > (x * 5))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
            }

            while(v2 > (x * 4))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x/v2;
            }
        }

        if(niveau==="havo")
        {
            while(v3 > (x * 7))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
            }

            while(v2 > (x * 6))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x/v2;
            }
        }
        

        sum = x+"="+v3.toFixed(2)+"*"+v2;

        if(add)
        {
            sum = sum + "*-1";
        }

        document.getElementById("keer").innerHTML = "Keer: " + sum;
    }
}

function gedeeld()
{
    var x = parseInt(document.getElementById("answer").value);

    var add = false;
    if(x<0)
    {
        x = x*-1;
        add = true;
    }

    var sum = x + "=";

    if(!(x.toString()==='NaN'))
    {
        var v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(9080))))

        while(v2===0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(90000))))))
        }

        var v3 = x*v2;

        while((x^3) > v3)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040))));
            v3 = x*v2;
        }

        if(niveau==="basis")
        {
            while(v3 > (x * 6))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 > (x * 5))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }
        }

        if(niveau==="vmbo")
        {
            while(v3 > (x * 8))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 > (x * 7))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }
        }

        if(niveau==="havo")
        {
            while(v3 > (x * 13))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 > (x * 12))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }
        }

        if(niveau==="vwo")
        {
            while(v3 > (x * 15))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 > (x * 14))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x*v2;
            }
        }

        sum = x+"="+v3+"/"+v2;

        if(add)
        {
            sum = sum + "*-1";
        }

        document.getElementById("gedeeld").innerHTML = "Gedeeld: " + sum;
    }
}

function plus()
{
    var x = parseInt(document.getElementById("answer").value);

    var add = false;
    if(x<0)
    {
        x = x*-1;
        add = true;
    }

    var sum = x + "=";

    if(!(x.toString()==='NaN'))
    {
        var v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(655633))))

        while(v2===0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(5363553))))))
        }

        var v3 = x-v2;

        while(v3 < 0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(563535))));
            v3 = x-v2;
        }

        if(niveau==="basis")
        {
            while(v3 > (x * 3))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 > (x * 2))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }
        }

        if(niveau==="vmbo")
        {
            while(v3 > (x * 5))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 > (x * 4))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }
        }

        if(niveau==="havo")
        {
            while(v3 > (x * 8))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 > (x * 7))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }
        }

        if(niveau==="vwo")
        {
            while(v3 > (x * 10))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 > (x * 9))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x-v2;
            }
        }


        sum = x+"="+v3+"+"+v2;

        if(add)
        {
            sum = sum + "*-1";
        }

        document.getElementById("plus").innerHTML = "Plus: " + sum;
    }
}

function min()
{
    var x = parseInt(document.getElementById("answer").value);

    var add = false;
    if(x<0)
    {
        x = x*-1;
        add = true;
    }

    var sum = x + "=";

    if(!(x.toString()==='NaN'))
    {
        var v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(655633))))

        while(v2===0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(getRandomInt(5363553))))))
        }

        var v3 = x+v2;

        while(v3 < 0)
        {
            v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(563535))));
            v3 = x+v2;
        }

        if(niveau==="basis")
        {
            while(v3 > (x * 4))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(1000)))).toFixed(2) / 4;
                v3 = x+v2;

                if(!(v3 > (x*4)))
                {
                    break;
                }
            }

            while(v2 > (x * 3))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(1000)))).toFixed(2);
                v3 = x+v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }
        }

        if(niveau==="vmbo")
        {
            while(v3 > (x * 5))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(1000)))).toFixed(2) / 5;
                v3 = x+v2;

                if(!(v3 > (x*4)))
                {
                    break;
                }
            }

            while(v2 > (x * 4))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }
        }

        if(niveau==="havo")
        {
            while(v3 > (x * 7))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(1000)))).toFixed(2) / 7;
                v3 = x+v2;

                if(!(v3 > (x*4)))
                {
                    break;
                }
            }

            while(v2 > (x * 6))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }
        }

        if(niveau==="vwo")
        {
            while(v3 > (x * 12))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(1000)))).toFixed(2) / 11;
                v3 = x+v2;

                if(!(v3 > (x*4)))
                {
                    break;
                }
            }

            while(v2 > (x * 11))
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }

            while(v2 < 2 || v3 < 2)
            {
                v2 = getRandomInt(getRandomInt(getRandomInt(getRandomInt(4040)))).toFixed(2);
                v3 = x+v2;
            }
        }

        sum = x+"="+v3+"-"+v2;

        if(add)
        {
            sum = sum + "*-1";
        }

        document.getElementById("min").innerHTML = "Min: " + sum;
    }
}


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}


function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}
