function calculateSum() {

    keer();
    gedeeld();
    plus();
    min();
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

