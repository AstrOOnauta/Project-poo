//Product constructor
class Product {
    constructor(name, price, newDate){
        this.name = name
        this.price = price
        this.newDate = newDate
    }
}

//UI contructor
class UI{
    addProduct(product){
        let productList = document.getElementById("product-list")
        let newProduct = document.createElement("div")
        newProduct.innerHTML = `
            <div class="card text-center mb-4 shadow">
                <div class="card-body">
                    <strong>Produto</strong>: ${product.name} - 
                    <strong>Preço</strong>: R$${product.price} - 
                    <strong>Data</strong>: ${product.newDate}      <br><br>
                    <a href="#" class="btn btn-danger w-100" name="delete">Delete</a>
                </div>
            </div>
            `

        productList.appendChild(newProduct)
    }

    //Reset the input fields after register the product
    resetForm() {
        document.getElementById('product-form').reset()
    }

    //Show success or failed message when try register/delete a product
    showMessage(message, bootstrapClass){
        const newMessage = document.createElement("div")
        newMessage.className = `alert alert-${bootstrapClass} text-center m-5`
        newMessage.innerHTML = message

        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector(".alert").remove()
        }, 3000);
        document.getElementById("header").appendChild(newMessage)
    }
    // Delete the product when click in delete button
    deleteProduct(deleteButton){
        if (deleteButton.name == "delete") {
            deleteButton.parentElement.parentElement.parentElement.remove()
            this.showMessage("Produto deletado com sucesso", "success")
        }
    }
}

//Submit Product
document.getElementById("product-form").addEventListener("submit", function(event){
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let originalDate = document.getElementById("year").value
    let newDate = originalDate.split('-').reverse().join('/')  //Modified format date
    
    //Input fields validation
    if (name == "" || price == "" || newDate == ""){
        ui.showMessage("Por favor insira todos as informações necessárias!", "danger")
    }

    //Create new objects from Product and UI classes
    let product = new Product(name, price, newDate)
    let ui = new UI()

    //Save the product
    ui.addProduct(product)
    ui.resetForm()
    ui.showMessage("Produto adicionado com sucesso", "success")

    event.preventDefault()
    }
)

//Delete product
document.getElementById("product-list").addEventListener("click", function(event){
        let ui = new UI()
        ui.deleteProduct(event.target)
        event.preventDefault()
    }
)