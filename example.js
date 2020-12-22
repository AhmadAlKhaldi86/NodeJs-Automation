/*
// Promise example
function friendGetsPizza() {
  return new Promise((resolve, reject)  => {

  // resolve({name: 'Margherita'})

  reject('Cannot be trusted')
  })
}

friendGetsPizza()
  .then((pizza) => {
    console.log(pizza.name);
  })
  .catch((e) => {
   console.log('Take friend out  of friends because he', e)
});
*/

/*
// Another simple Promise example 
const prom = input => new Promise((resolve, reject) => {
  if (!input) {
    reject(`Not Passed`)
  }
  resolve(input)
})

prom('')
  .then(output => console.log(output))
  .catch((err) => console.log(err))
*/