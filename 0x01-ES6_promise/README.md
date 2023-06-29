# 0x01-ES6_promise

This project contains a set of tasks related to promises in JavaScript. Each task focuses on different aspects of promises and their usage.

## Task 0: Keep every promise you make and only make promises you can keep

Implement the `getResponseFromAPI()` function that returns a Promise. This function returns a Promise instance.

## Task 1: Don't make a promise...if you know you can't keep it

Implement the `getFullResponseFromAPI(success)` function that returns a Promise. The function takes a boolean parameter `success`. When `success` is `true`, the promise is resolved with an object containing status code 200 and body 'Success'. When `success` is `false`, the promise is rejected with an error object containing the message "The fake API is not working currently".

## Task 2: Catch me if you can!

Implement the `handleResponseFromAPI(promise)` function that appends handlers to a given promise. When the promise resolves, it should return an object with status code 200 and body 'success'. When the promise rejects, it should return an empty Error object. Additionally, for every resolution, it should log "Got a response from the API" to the console.

## Task 3: Handle multiple successful promises

Implement the `handleProfileSignup()` function. It imports two functions `uploadPhoto` and `createUser` from `utils.js`. These functions return promises. The `handleProfileSignup()` function resolves all the promises and logs the body, firstName, and lastName to the console. In case of an error, it logs "Signup system offline" to the console.

## Task 4: Simple promise

Implement the `signUpUser(firstName, lastName)` function that returns a resolved promise with an object containing the provided `firstName` and `lastName` values.

## Task 5: Reject the promises

Implement the `uploadPhoto(filename)` function that returns a Promise rejecting with an Error object and the message "filename cannot be processed".

## Task 6: Handle multiple promises

Implement the `handleProfileSignup(firstName, lastName, fileName)` function that calls the `signUpUser` and `uploadPhoto` functions. It resolves all the promises and returns an array with objects representing the status and value/error of each promise.

## Task 7: Load balancer

Implement the `loadBalancer(chinaDownload, USDownload)` function that accepts two promises: `chinaDownload` and `USDownload`. It returns the value of the promise that resolves first.

## Task 8: Throw error / try catch

Implement the `divideFunction(numerator, denominator)` function that accepts two numbers: `numerator` and `denominator`. If `denominator` is equal to 0, the function throws an error with the message "cannot divide by 0". Otherwise, it returns the result of dividing the numerator by the denominator.

## Task 9: Throw an error

Implement the `guardrail(mathFunction)` function that accepts a math function. It executes the function and appends the returned value or error message to an array named `queue`. Additionally, it appends the message "Guardrail was processed" to the `queue`. The function returns the `queue` array.

**Note**: Each task is implemented in a separate file named after the task number.

**Repository**: [alx-backend-javascript](https://github.com/username/alx-backend-javascript)

**Directory**: 0x01-ES6_promise
