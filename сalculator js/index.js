    const input = document.querySelector("input")
    const btns = document.querySelector(".btns").children;

    if(!input.value) input.value = 0;



        let str = ""
        Array.from(btns).forEach((btn) => {
            btn.addEventListener("click", function () {
                switch(this.textContent) {
                    case "÷":
                    str += ":"  
                    break;

                    case "×":
                    str += "*";
                    break;

                    case "–":
                    str += "-";
                    break;

                    case "+":
                    str += "+";
                    break;

                    case "=":

                    if(str.includes(":")) str = str.replaceAll(":", "/")

                        if(str.includes("%")){
                            let [a, b] = str.split("%");
                            str = a*b / 100;
                        }

                        str = eval(str);
                        
                    break;

                    case "AC":
                    str = 0;
                    break;

                    default:
                      str ? (str+= this.textContent) : (str = this.textContent);
                }
                input.value = str
            })
        })

