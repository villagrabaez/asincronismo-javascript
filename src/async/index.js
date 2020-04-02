const doSomethingsAsync = () => {
  return new Promise((resolve, reject) => {
    if ( true ) {
      // resolve('True')
      setTimeout( () => resolve('Do Something Async'), 3000)
    } else {
      reject(new Error('Ops...'))
    }
  })
}

const doSomethings = async () => {
  const something = await doSomethingsAsync()
  console.log(something)
}

console.log('Before')
doSomethings()
console.log('After')

const anotherFunction = async () => {
  try {
    const something = await doSomethingsAsync()
    console.log(something)
  } catch (error) {
    console.error(error)
  }
}

console.log('Before 1')
anotherFunction()
console.log('After 1')