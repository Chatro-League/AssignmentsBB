// Define UI Elements
let productList = document.querySelectorAll('#product-list button')
let cart = document.querySelector('#cart')

// Add Event Listener
productList.forEach(button => button.addEventListener('click', addtoCart))
cart.addEventListener('click', removeProduct)

// Event Function
function addtoCart(e){
        
        let arr= e.target.parentElement.parentElement.querySelectorAll('td')
        let row = document.createElement('tr')
        
        row.innerHTML = `
        <td>${arr[0].textContent}</td>
        <td>${arr[1].textContent}</td>
        <td><button id="remove" type="button" value=''>Remove from Cart</button></td>
        `
        cart.appendChild(row)
        // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.textContent)
        showAlert('Added to Cart', 'success')
        e.preventDefault();
}

function removeProduct(e){
        if(e.target.hasAttribute('value')){
                e.target.parentElement.parentElement.remove()
                showAlert('Removed from Cart', 'success')
        }
}

function showAlert(message, className){
        let div = document.createElement('div')
        div.className = `alert ${className}`;
        div.appendChild(document.createTextNode(message));

        let container = document.querySelector('#products')
        let table = document.querySelector('#product-table')
        container.insertBefore(div, table);

        setTimeout(()=>{
            document.querySelector('.alert').remove()
        }, 1500)
    }