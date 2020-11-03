let {cookBeans, steamBroccoli, cookRice, bakeChicken} = require('./library.js')

// Write your code below:
async function serveDinnerAgain(){
  let foodArray = await Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans() ]);
  let text = `Dinner is served. We're having ` 
  for (i = 0; i < foodArray.length; i++) {
    if (i === foodArray.length - 1){
      text += `and ${foodArray[i]}. `;

    } else {
      text += `${foodArray[i]}, `;
    }
  };
  console.log(text);


}


serveDinnerAgain();