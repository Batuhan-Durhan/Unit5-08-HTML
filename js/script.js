/* Created by: Batuhan Durhan
   Created on: May 2022
   This file contains the JS functions for index.html*/

'use strict'

/**
 * Check service worker.
 */
 if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/Unit-5-08-HTML/sw.js", {
    scope: "/Unit-5-08-HTML/",
  })
}

/**
 * Input.
 */

/**JSDoc
*/
 function buttonClicked() {

  var number1 = parseInt(document.getElementById('number1').value)
  var number2 = parseInt(document.getElementById('number2').value)
  var currentAnswer = parseInt(document.getElementById('number1').value)
  var answer = 0 
  var remainder = 0


  while (currentAnswer > 0 ) {
    currentAnswer = currentAnswer - number2
    if (currentAnswer >= 0) {
      answer++
    }
    
  } 
   while (currentAnswer < 0 ) {
    currentAnswer++
    remainder++
  }
  document.getElementById("number").innerHTML = " The answer is: " + answer + " Remainder: " + remainder
}