// 1. Write a function that takes two numbers as inputs and returns the sum of all the even numbers between them. Use a loop and conditional statements to accomplish this task.
// function sumofEven(num1, num2) {
//     let sum = 0

//     if (num1 > num2) {
//         [num1, num2] = [num2, num1]
//     }

//     for (let i = num1; i <= num2; i++) {
//         if (i % 2 == 0) {
//             sum += i
//         }
//     }
//     return sum
// }

// console.log(sumofEven(2, 10))

// 2. Write a program that prints the first 100 Fibonacci numbers. Use a loop and conditional statements to accomplish this task.

// 3. Write a program that takes an array of integers and returns the largest number in the array. Use a loop and conditional statements to accomplish this task.
// function largestNumber(arr) {
//     let largestNum = arr[0]
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] > largestNum) {
//             largestNum = arr[i]
//         }
//     }
//     return largestNum
 // }

// const numbers = [40, 55, 38, 67, 39, 69, 7, 89, 70, 76]

// const largestNum = largestNumber(numbers)
// console.log("The largest number is " + largestNum)

// 4. Write a program that takes an array of integers and returns the sum of all the even numbers in the array. Use a loop and conditional statements to accomplish this task.
// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// function evenArray(nums) {
//     let sum = 0
//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] % 2 == 0) {
//             sum += nums[i]
//         }
//     }
//     return sum
// }

// console.log("The sum of even numbers is " + evenArray(nums))

// 5. Write a program that takes an array of integers and returns a new array with only the even numbers. Use a loop and conditional statements to accomplish this task.
// let evenNums = []

// let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for (let i = 1; i < nums.length; i++) {
//     if (nums[i] % 2 == 0) {
//         evenNums.push(nums[i])
//     }
// }
// console.log(nums)
// console.log(`The even numbers in the array above are: ${evenNums}`)
