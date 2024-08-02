var isStop=true;
        let[seconds,minutes,hours]=[0,0,0];
        
        function start(){
            console.log("start");
            if(isStop==true){
                isStop==false;{
                    timer();
                }
            }
        }
        function timer(){if(isStop==false){
            s++;
            displayTime.innerHTML=seconds;
            setTimeout("timer()",1000);
        }
    }
    function stop(){
        isStop=true;
    }