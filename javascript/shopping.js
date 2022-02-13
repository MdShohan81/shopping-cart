 function updateCaseNumber(isIncreaing){
    let caseInput = document.getElementById('case-number');
    let caseNumber = parseInt(caseInput.value);
    if(isIncreaing == true){
        caseNumber = caseNumber + 1;
    }else if(caseNumber > 0){
        caseNumber = caseNumber - 1;
    }
    caseInput.value = caseNumber;
    //update price 
    let casePrice = document.getElementById('case-price');
    casePrice.innerText = 80 * caseNumber
 }




// document.getElementById('case-plus').addEventListener('click', function(){
//    updateCaseNumber(true)
   
// })
// document.getElementById('case-minus').addEventListener('click', function(){
//     updateCaseNumber(false)
    
// })