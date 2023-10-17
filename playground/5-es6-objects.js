// Object property shorthand

const name = 'Andrew'
const userAge = 27

const user = {
  name,
  age: userAge,
  location: 'Philadelphia',
}

console.log(user)

// Object destructuring

const product = {
  label: 'Red notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
  rating: 4.2,
}

// const label = product.label
// const stock = product.stock

// const {label:productLabel, stock, rating = 5} = product
// console.log(productLabel)
// console.log(stock)
// console.log(rating)

const transaction = (type, { label, stock = 0 } = {}) => {
  console.log(type, label, stock)
}

transaction('order', product)

// instanceof using function

function Car(make, ...rest) {
  let [model, ...[year]] = rest

  this.make = make
  this.model = model
  this.year = year
  return this
}
let arrays = ['Honda', 'Accord', 1998]
// const auto = new Car('Honda', 'Accord', 1998)
const auto = new Car(...arrays)

console.log(auto instanceof Car)
console.log(auto instanceof Object)
console.log(auto)
console.log(new String('manku') instanceof String)
console.log(typeof new String('manku'))
console.log(typeof auto)

// parseInt vs Number

console.log(parseInt('124S3533'))
console.log(Number('124S3533'))

class A {}
class B extends A {}
console.log(new B() instanceof A)

//Es6 deceleration

const pet = {
  name: 'Tom',
  age: 20,
  pet_fun() {
    return this
  },
}

pet.toJSON = function () {
  delete pet.age
  return pet.pet_fun()
}

console.log(JSON.parse(JSON.stringify(pet)))
