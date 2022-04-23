let totalPictures = document.querySelectorAll('.pictures').length;
        
        for(let i=0; i< totalPictures;i++ ){
            document.querySelectorAll('.pictures')[i].addEventListener('click', myFunc)  
        }
        
        function myFunc(){

            let a = this.innerHTML
           
            if(a == "<span>lion</span>"){
                
                let sound = new Audio("sounds/lion.wav");

                sound.play();
            }
            else if(a == "<span>eagle</span>"){
                
                let sound = new Audio("sounds/eagle.wav");

                sound.play();
            }
            else if(a == "<span>sheep</span>"){
                
                let sound = new Audio("sounds/sheep.wav");

                sound.play();
            }
            else if(a == "<span>rooster</span>"){
                
                let sound = new Audio("sounds/rooster.wav");

                sound.play();
            }
            else if(a == "<span>cow</span>"){
                
                let sound = new Audio("sounds/cow.wav");

                sound.play();
            }
            else if(a == "<span>dog</span>"){
                
                let sound = new Audio("sounds/dog.wav");

                sound.play();
            }
            else if(a == "<span>cat</span>"){
                
                let sound = new Audio("sounds/cat.wav");

                sound.play();
            }
            else{
                
                let sound = new Audio("sounds/bee.wav");

                sound.play();
            };
            
        }