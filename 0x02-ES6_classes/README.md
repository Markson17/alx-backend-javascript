# 0x02-ES6_classes

This project focuses on implementing classes and working with objects in JavaScript using ES6 syntax. The tasks in this project are as follows:

## Task 0: ClassRoom
- Implement a class named `ClassRoom` that accepts an attribute `maxStudentsSize` and assigns it to `_maxStudentsSize`.

## Task 1: Let's make some classrooms
- Import the `ClassRoom` class from `0-classroom.js`.
- Implement a function named `initializeRooms` that returns an array of 3 `ClassRoom` objects with sizes 19, 20, and 34.

## Task 2: A Course, Getters, and Setters
- Implement a class named `HolbertonCourse` with attributes `name`, `length`, and `students`.
- Verify the type of attributes during object creation.
- Implement a getter and setter for each attribute.

## Task 3: Methods, static methods, computed method names..... MONEY
- Implement a class named `Currency` with attributes `code` and `name`.
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullCurrency` that returns the attributes in the format `name (code)`.

## Task 4: Pricing
- Import the `Currency` class from `3-currency.js`.
- Implement a class named `Pricing` with attributes `amount` and `currency`.
- Implement a getter and setter for each attribute.
- Implement a method named `displayFullPrice` that returns the attributes in the format `amount currency_name (currency_code)`.
- Implement a static method named `convertPrice` that accepts `amount` and `conversionRate` and returns the amount multiplied by the conversion rate.

## Task 5: A Building
- Implement a class named `Building` with attribute `sqft`.
- Implement a getter for the attribute `sqft`.
- Consider this class as an abstract class and ensure that any class that extends from it implements a method named `evacuationWarningMessage`.
- If a class that extends from `Building` does not have the `evacuationWarningMessage` method, throw an error with the message "Class extending Building must override evacuationWarningMessage".

## Task 6: Inheritance
- Import `Building` from `5-building.js`.
- Implement a class named `SkyHighBuilding` that extends `Building` with attributes `sqft` and `floors`.
- Implement a getter for each attribute.
- Override the method `evacuationWarningMessage` and return the string "Evacuate slowly the NUMBER_OF_FLOORS floors".

## Task 7: Airport
- Implement a class named `Airport` with attributes `name` and `code`.
- Implement a default string description of the class that returns the airport code.

## Task 8: Primitive - Holberton Class
- Implement a class named `HolbertonClass` with attributes `size` and `location`.
- When the class is cast into a Number, it should return the `size`.
- When the class is cast into a String, it should return the `location`.

## Task 9: Hoisting
- Fix the code and make it work by resolving the order of class declarations and variable references.

## Task 10: Vroom
- Implement a class named `Car` with attributes `brand`, `motor`, and `color`.
- Add a method named `cloneCar` that returns a new object of the class.

## Task 11: EVCar
- Import `Car` from `10-car.js`.
- Implement a class named `EVCar` that extends `Car` with attributes `brand`, `motor`, `color`, and `range`.

**Note**: Each task is implemented in a separate file named after the task number.

**Repository**: [alx-backend-javascript](https://github.com/Markson17/alx-backend-javascript)

**Directory**: 0x02-ES6_classes
