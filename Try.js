//Try Cathch :- This iS Used TO Handle The Error 
        //1) RefrenceErorr

                // let x = 5;

                // try{
                //         let x = y + 1;
                //         console.log(y); 
                //     }

                // catch(err)
                // {
                //     console.log(err.name);
                // }

        //2)Range Error
                // let num = 1;
                // try{
                //     let num = num.toPrecision(500);
                    
                // }
                // catch(err)
                // {
                //     console.log(err.name);
                // }

        //3)SyntaxError
                // try{
                //      eval('Hello');
                // }
                // catch(err)
                // {
                //     console.log(err.name);
                // }

        //4)TypeError
            //   try{
            //     let num = 5;
            //      console.log(num.toUpperCase());
            //   }
            //   catch(err)
            //   {
            //     console.log(err.name);
            //   }

        //5)URI
        //  try{
        //     decodeURI("%%%%%");
        //  }
        //  catch(err)
        //  {
        //     console.log(err.name);
        //  }

     //Date Function

       
        const dt = new Date();
        // let dy = dt.getDay();
        // console.log(dy);
        
        const val = 38;

        switch(val)
        {            
//Here Start With GetFunction 
           case 0:
                let date = dt.getDate();
                console.log(date);
                break;

            case 1:
                let day = dt.getDay();
                console.log(day);
                break;
            
            case 2:
                let fullyear = dt.getFullYear();
                console.log(fullyear);
                break;

            case 3:
                let hours = dt.getHours();
                console.log(hours);
                break;

            case 4:
                let ms = dt.getMilliseconds();
                console.log(ms);
                break;

            case 5:
                let minutes = dt.getMinutes();
                console.log(minutes);
                break;

            case 5:
                let sec = dt.getSecond();
                console.log(sec);
                break;

            case 6:
                let month = dt.getMonth();
                console.log(month);
                break;

            case 7:
                let time = dt.getTime();
                console.log(time);
                break;

            case 8:
                let diff = dt.getTimezoneOffset();
                console.log(diff);
                break;
//Here The Start UTC Date Operation
            case 9:
                let utcdate = dt.getUTCDate();
                console.log(utcdate);
                break;

            case 10:
                let utcfullyear = dt.getUTCFullYear();
                console.log(utcfullyear);
                break;
            
            case 11:
                let utchours = dt.getUTCHours();
                console.log(utchours);
                break;

            case 12:
                let utcmonth = dt.getUTCMonth();
                console.log(utcmonth);
                break;

            case 13:
                let utcminute = dt.getUTCMinutes();
                console.log(utcminute);
                break;

            case 14:
                let minisecnd = dt.getUTCMilliseconds();
                console.log(minisecnd);
                break;

//Here Start With Set Function

            case 15:
                let setdate = dt.setDate(10);
                console.log(dt);
                break;

            case 16:
                let setfullyear = dt.setFullYear(2025);
                console.log(dt);
                break;

            case 17:
                let sethour = dt.setHours(dt.getHours() - 24); //expected argument 0 to 24
                console.log(dt);
                break;

            case 18 :
                let setmilisecond = dt.setMilliseconds(365); //expected argument 0 to 999 min 
                console.log(setmilisecond);
                break;
            
            case 19 :
                let setminute = dt.setMinutes(17); //expected argument 0 to 60 min
                console.log(dt);
                break;

            case 20:
                let setmonth = dt.setMonth(-1); // 0 Means January ,1 February
                console.log(dt);
                break;

            case 21:
                let setsec = dt.setSeconds(0); // expected argument 0 - 60
                console.log(dt);
                break;

            case 22:
                let settime = dt.setTime(-1332403882588);
                console.log(dt);
                break;

//Here Start UTC according set 

            case 23 :
                let setutcdate = dt.setUTCDate(15);
                console.log(dt);
                break;

            case 24 :
                let setutcfullyear = dt.setUTCFullYear(2025);
                console.log(dt);
                break;

            case 25 :
                let setutcHours = dt.setUTCHours(22); //expected argument 0 to 24
                console.log(dt);
                break;

            case 26:
                let setutcMilisecond = dt.setUTCMilliseconds(222); //expected argument 0 to 999
                console.log(dt);
                break;

            case 27 :
                let setutcminute = dt.setUTCMinutes(55); //expected argument 0 to 60 min
                console.log(dt);
                break;

            case 28 :
                let setutcmonth = dt.setUTCMonth(3); // 0 Means January ,1 February
                console.log(dt);
                break;

            case 29 :
                let setutcsecond = dt.setUTCSeconds(23) //expected argument 0 to 60 sec
                console.log(dt);
                break;

            case 30 :
                let datestring = dt.toDateString();
                console.log(datestring); //it give only date not the time 
                break;

            case 31 :
                let toisostring = dt.toISOString();
                console.log(toisostring);
                break;

            case 32 :
                let tojson = dt.toJSON();
                console.log(tojson);
                break;

            case 33 :
                let tolocaldatestring = dt.toLocaleDateString(); //give the 11/12/2024 formate 
                console.log(tolocaldatestring);
                break;

            case 34 :
                let tolocaltimestring = dt.toLocaleTimeString(); //give the 1:10:19 pm
                console.log(tolocaltimestring);
                break;

            case 35 :
                let tolocalalstring = dt.toLocaleString();
                console.log(tolocalalstring);
                break;

            case 36 :
                let tostring = dt.toString();
                console.log(tostring);
                break;

            case 37 :
                let totimestring = dt.toTimeString();
                console.log(totimestring);
                break;

            case 38 :
                let toutcstring = dt.toUTCString();
                console.log(toutcstring);
                break;

            default :
                console.log("Select Proper Case...");
            
        }
