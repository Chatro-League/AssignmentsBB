// define buttons
let emailBtn= document.querySelector('#email')
let postCodeBtn= document.querySelector('#post-code')
let phoneBtn= document.querySelector('#phone')

// event listener
emailBtn.addEventListener('click', emailValid)
postCodeBtn.addEventListener('click',postCodeValid)
phoneBtn.addEventListener('click', phoneValid)

// function

function emailValid(e){
    inputForm.createForm('Input Your Email', 1)
    
}
function postCodeValid(){
    inputForm.createForm('Input Your Post Code', 2)
}
function phoneValid(){
    inputForm.createForm('Input Your Phone Number', 3)
}

function takeInput(id){
    let data = document.querySelector('#text').value
    if (data!==''){
        inputForm.showOutput(inputForm.validation(data, id));
    } else {
        inputForm.showAlert('Input Field is Empty', 'error')
    }
}
// form Class
class inputForm{

    static createForm(text, id){
       let div= document.querySelector('#form')
        div.firstChild.remove()
        
        div.innerHTML=`
            <div>
                <label style="color:teal;font-weight:500;" for="expression">${text}</label>
                <input type="text" id="text" class="u-full-width">
                <button onclick="takeInput(${id})" type="submit" value="Submit" class="u-full-width">Submit</button>
            </div>`
        // div.appendChild(form)
    }

    static validation(input, id){
        let re;
        switch (id){
            case 1:
                re =/^([A_Za-z0-9]\.?)+[^\W_]@([A_Za-z0-9]\.?)+[^\W_]$/
                return re.test(input)
                break;

            case 2:
                re =/^\d{4}$/
                return re.test(input)
                break;

            case 3:
                re = /^(\+)?(88)?01\d{9}$/
                return re.test(input)
                break;  
        }
    }

    static showOutput(value){
        if(value)
            inputForm.showAlert('Valid Expression', 'success')
        else inputForm.showAlert('Invalid Expression', 'error') 

    }

    static showAlert(message, className){
        let div = document.createElement('div')
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('.container')
        let form = document.querySelector('#form')
        container.insertBefore(div, form);

        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 3000)
    }
}

