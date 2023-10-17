// JavaScript Set A
// Time:
// 45:01
// Points:
// 6/55
// Candidate details
// 1.Email
// Enter valid Email address
// abc@gmail.com
// General Coding
// Incorrect
// 0/3 Points
// 2.What will be the output of the following pseudocode?

// arry = [10,30,34,50,40];
//         if(arry[0] > arry[1]) {
//             a = arry[0];
//             b  = arry[1];
//         } else {
//             a = arry[1];
//             b = arry[0];
//         }
//         for( i = 2; i < arry.length; i++) {
//             if( a < arry[i] ) {
//                 b = a;
//                 a = arry[i];
//             } else if( b < arry[i] ) {
//                 b =  arry[i];
//             }
//         }
//         print(b);

// 10

// 50

// 30

// 40

// None of the Above
// Incorrect
// 0/3 Points
// 3.What is the output of the following code?

// arry = [ 30, 34, 20 ];

//         for( k = 0; k < arry.length -1; k++)
//         {
//             for( j = 0 ; j < arry.length - k - 1 ;  j++ ) {
//                 if(  arry[j] < arry[j+1]  ) {
//                     t = arry[j];
//                     arry[j] = arry[j+1];
//                     arry[j+1] = t + 1;
//                 }
//             }
//         }
//         for(k = 0; k < arry.length; k++){
//                 print(arry[k]+" ");
//         }

// 20 30 34

// 34 31 20

// 34 30 20

// 20 31 34

// None of the Above
// Incorrect
// 0/3 Points
// 4.What is the output of the following?

// arr[] = { 9, 4, 9, 6, 7, 4 }

// for ( i = 0; i < arr.length; i++) {
// 		for (j = 0; j < arr.length; j++) {
// 			if (i != j && arr[i] == arr[j])
// 				break;
//                  }
// 		if (j == arr.length)
// 			return arr[i];
// 	}

// 6

// 9

// 6,7

// 9, 4, 9, 6, 7, 4

// 4
// Incorrect
// 0/3 Points
// 5.What is the output of the following for value n = 4?
// recursion(n) {
//       if (n <= 1) {
//            return n;
//        }
//        return  recursion  (n - 1) +  recursion  (n - 2);
// }

// 5

// 3

// 4

// 1

// None of the Above
// Incorrect
// 0/2 Points
// 6.To sort the array in descending order what condition you should give inside if statement?

// for(i = 0; i  < n  ;i++) {
//      for( j  =  i + 1; j  <  n; j++) {
//             if( ? ) {
//                 temp =  arr[i];
//                 arr[i]  =  arr[j];
//                 arr[j]  =  temp;
//                }
//        }
// }

// arr[ i ] < arr[ j ]

// arr[ i ] > arr[ j ]

// arr[ i ] <= arr[ j ]

// arr[ i ] >= arr[ j ]

// arr[ i ] == arr[ j ]
// Incorrect
// 0/3 Points
// 7.What is the output of the following code for the given 2D array arr?

// 1    2    3
// 4    5    6
// 7    8    9

// for ( i = 0; i < n; i++) {
//     for ( j = 0; j < n; j++) {
//         if (i > j)
//             print( arr[ i ][ j ] + " ");
//     }
// }

// 4 5 6

// 1 5 9

// 7 5 3

// 4 7 8

// None of the Above
// Incorrect
// 0/3 Points
// 8.What is the output of the following code for the given 2D array arr?

// 11    21    23
// 14    15    26
// 17    28    19

// sum = 0
// i = 0
// while ( i < n ){
// 	sum += arr[ i ][ n / 2 ];
//          i++;
// }

// print(sum)

// 64

// 55

// 45

// 42

// 68
// JavaScript
// Correct
// 2/2 Points
// 9.Which of the following are the valid data types in JavaScript?

// Undefined

// Integer

// Float

// Symbol

// Null
// Correct
// 2/2 Points
// 10.What will be the result of 2 + 5 + "3" ?

// 73

// "73"

// "253"

// "55"

// NaN
// Correct
// 2/2 Points
// 11.What will be the result of 2 + 3 * "5" ?

// 17

// "215"

// 215

// 25

// NaN
// Incorrect
// 0/2 Points
// 12.What is the output of the following code?

// var obj = { field : 1};
// var output = ( function() {
//       delete obj.field;
//       return obj.field;
//   })();
// console.log(output);

// { field : 1 }

// null

// undefined

// {}

// Reference Error: output not defined
// Incorrect
// 0/2 Points
// 13.Which of the following statements are true if,

// let a = 10;
// let b = '20';
// const c = '10';

// a == c

// a === b

// a !== b

// a === c

// a !== c
// Incorrect
// 0/2 Points
// 14.Which statements are wrong for converting an integer 'n' into a string?

// toString(n)

// n.toString()

// JSON.stringify(n);

// n.stringify();

// n + ""
// Incorrect
// 0/2 Points
// 15.What is the output of the following?
// let a = 10;
// let b = 10;
// const c = "30";
// c  = c + a + b;

// 50

// "301010"

// 20

// 10

// None of the above
// Incorrect
// 0/2 Points
// 16.Which of the following function declarations are correct?

// A) async function xyz(){
//     		await function1();
// 	     }

//  B) function xyz(){
//     		await function1();
//      }

// C) async function xyz (){
//      		function1();
//    }

// D) function xyz async(){
//     		await function1()
//   }

// E) Non of the Above

// A

// B

// C

// D

// E
// Incorrect
// 0/2 Points
// 17.What will be the output of the following program?

// function myFunction(y1, y2, ...y3) {
//     const [x1, ...[result]] = y3;    console.log(result);
// };

// const myArray = ["JavaScript", "python",  "dart", "TypeScript",  "java", "go"];
// myFunction(...myArray)

// [ ]

// dart

// Array(3) ["TypeScript", "java", "go"]

// TypeScript

// undefined
// Incorrect
// 0/2 Points
// 18.What will be the output of the following program?

// var myVar = null;
// myVar = "Ajit";

// function myFunction() {
//     console.log(myVar)
//     myVar = "Amar";
// };

// myVar = "Mahesh";
// myFunction();

// Mahesh

// Ajit

// Amar

// undefined

// null
// Section 3 - SQL
// Incorrect
// 0/2 Points
// 19.Which type of join returns all rows that satisfy the join condition ?

// Inner Join

// Outer Join

// Semi Join

// Anti Join

// All of the above
// Incorrect
// 0/2 Points
// 20.With SQL, how do you select all the records from a table named "Persons" where the value of the column "FirstName" starts with an "a"?

// SELECT * FROM Persons WHERE FirstName LIKE '%a'

// SELECT * FROM Persons WHERE FirstName='%a%'

// SELECT * FROM Persons WHERE FirstName='a'

// SELECT * FROM Persons WHERE FirstName LIKE 'a%'

// None of the above
// Incorrect
// 0/2 Points
// 21.How can you change "Das" into "Rao" in the "LastName" column in the Users table?

// UPDATE Users SET LastName = 'Das' INTO LastName = 'Rao'

// MODIFY Users SET LastName = 'Rao' WHERE LastName = 'Das'

// MODIFY Users SET LastName = 'Das' INTO LastName = 'Rao'

// UPDATE Users SET LastName = 'Rao' WHERE LastName = 'Das'

// None of the above
// Incorrect
// 0/2 Points
// 22.Which of the following is the correct order of a SQL statement?

// SELECT, GROUP BY, WHERE, HAVING

// SELECT, WHERE, GROUP BY, HAVING

// SELECT, HAVING, WHERE, GROUP BY

// SELECT, WHERE, HAVING, GROUP BY

// None of the above
// Incorrect
// 0/2 Points
// 23.Find the cities name with the condition and temperature from table 'weather' where condition = sunny or cloudy but temperature >= 60.

// SELECT city, temperature, condition FROM weather WHERE condition = 'cloudy' AND condition = 'sunny' OR temperature >= 60

// SELECT city, temperature, condition FROM weather WHERE condition = 'cloudy' OR condition = 'sunny' OR temperature >= 60

// SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' OR condition = 'cloudy' AND temperature >= 60

// SELECT city, temperature, condition FROM weather WHERE condition = 'sunny' AND condition = 'cloudy' AND temperature >= 60

// None of the Above
// Pseudo Code
// A place where logic has more value than syntax.
// Will be reviewed
// 24.Write pseudo code to Check whether "MALAYALAM" is a palindrome or not.
// Enter your answer
// Go back to thank you page
// This content is created by the owner of the form. The data you submit will be sent to the form owner. Microsoft is not responsible for the privacy or security practices of its customers, including those of this form owner. Never give out your password.
// Powered by Microsoft Forms | The owner of this form has not provided a privacy statement as to how they will use your response data. Do not provide personal or sensitive information. | Terms of use
