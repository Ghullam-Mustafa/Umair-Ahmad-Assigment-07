
document.getElementById('button1').onclick = function () {
     var now = new Date;
     console.log(now);
    var today = now.getDay();
    console.log(today);
    if (today == 0) {
       
        output("sunday")
    }
    else if (today === 1 ) {
       
       
        output("monday")
    }
    else if (today === 2 ) {
       
        
        output("tuesday")
    } else if (today === 3 ) {
       
     ;
        output("wednesday")
    } else if (today === 4 ) {
       
        
        output("thursday")
    } else if (today === 5 ) {
       
       
        output("friday")
    }else{
        output("saturday")
    }
}

// switch 

button2.onclick = function () {
    var now = new Date;
    console.log(now);
    var today = now.getDay();

    switch (today) {
        case 0:
            output("sunday")
            break;
        
         case 1:
            output("Monday")
            break;
         case 2:
            output("tuesday")
           break;
           case 3:
            output("wednesday")
            break;
            case 4:
                output("thursday")
                break;
             case 5:
                    output("friday")
                    break;
                    
           default:
                    output('saturday')
            break;
    }
}

// do while loop 

button3.onclick = function () {
    do {
        var name = prompt("Enter your name ?")
    } while (name === null || name == 0 || name.length < 3);
    output(name)
}

function output(element) {
    document.getElementById('output').innerHTML = element
}