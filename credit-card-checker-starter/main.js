// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]

const teste = [4, 5, 5, 6, 7, 3, 7, 5, 8, 6, 8, 9, 9, 8, 5, 5];


//Validate
console.log('teste savio');
const validateCred = (creditnumber) => {
    let dig_sum = 0;
    let last_digit = 0;
    let count = 0;
    for (let i = creditnumber.length -1 ; i >= 0; i--) {
        if (i === creditnumber.length -1){
            last_digit = creditnumber[i];  
        } else {  
            count++   
            if (count % 2 === 0 ){
                dig_sum += creditnumber[i];
            } else{
                dig_double = creditnumber[i] * 2;
                if (dig_double >= 9){
                    dig_sum += (dig_double - 9) ;
                } else {
                    dig_sum += dig_double;
                }
            }
        }
    }
    if (
        ((dig_sum % 10) === last_digit ) || 
        ((dig_sum + last_digit) % 10 === 0 )
        ) {
        return true;
    } else {
        return false;
    }
    
}


const findInvalidCards = (cards) =>{
  let invalidcards = [];
  cards.forEach(card => {
     if (!validateCred(card)) {
        invalidcards.push(card);
     }     
  });
  return invalidcards;
}

const idInvalidCardCompanies = (invalidCards) => {
    let invalidComp = [];
   
    invalidCards.forEach(card => {
    let exists = false;
      switch (card[0]) {
        case 3: //amex
            invalidComp.forEach(company => {
                if (!(company.indexOf('AMEX') === -1)) {
                company[1].push(card);
                exists = true;
                }
            });  
            if (!exists){
                invalidComp.push(['AMEX', [card]]) 
            };
            break;
        case 4: //visa

            invalidComp.forEach(company => {
                if (!(company.indexOf('VISA') === -1)) {
                company[1].push(card);
                exists = true;
                }
            });  
            if (!exists){
                invalidComp.push(['VISA', [card]]) 
            };
            break;
            
        case 5: //martercard
            invalidComp.forEach(company => {
                if (!(company.indexOf('MASTERCARD') === -1)) {
                company[1].push(card);
                exists = true;
                }
            });  
            if (!exists){
                invalidComp.push(['MASTERCARD', [card]]) 
            };
            break;          
            

        case 6: //discovery
            invalidComp.forEach(company => {
                if (!(company.indexOf('DISCOVERY') === -1)) {
                company[1].push(card);
                exists = true;
                }
            });  
            if (!exists){
                invalidComp.push(['DISCOVERY', [card]]) 
            };
            break;

          default:
              break;
      } 
    })
    return invalidComp;
}

//invalidcards:
// ['VISA', [[CARD1],[CARD2],[CARD3] ]]

const invalidComp = idInvalidCardCompanies(findInvalidCards(batch));


console.log(`Invalid cards:`)
console.log(findInvalidCards(batch));

console.log(`Invalid cards by companies:`)
console.log(invalidComp);

