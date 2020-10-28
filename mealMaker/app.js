const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: [],

//        get appetizers() {
          //return this.appetizers;
//        },
//        set appetizers(appetizerIn) {
//         this.appetizers.push(appetizerIn);
//        },
//        get mains() {
         //   return this.mains;
//        },
//        set mains(mainIn) {
//
//        },
//        get desserts() {
          //  return this.desserts;
//        },
//        set desserts(dessertIn) {
//
//        }
    },
    get courses() {
        return{
            appetizers: this.appetizers,
            mains: this.mains,
            desserts: this.desserts
        } 
    },
    addDishToCourse(courseName,dishName,dishPrice){
        const dish = {
            name: dishName,
            price: dishPrice,

        }
        this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
        const dishes = this._courses[courseName];
        return dishes[Math.floor(Math.random() * dishes.length)];

    },
    generateRandomMeal( ){
        const appetizers = this.getRandomDishFromCourse('appetizers');
        const mains      = this.getRandomDishFromCourse('mains');
        const desserts    = this.getRandomDishFromCourse('desserts');

        let totalPrice =  appetizers.price +
                          mains.price      +
                          desserts.price ;

       return  `Your meal is ${appetizers.name}, ${mains.name} and ${desserts.name}, the total price is $ ${totalPrice}.`;

    }    
};

menu.addDishToCourse('appetizers','Bruchetta', 35);
menu.addDishToCourse('appetizers','Batata frita', 25);
menu.addDishToCourse('appetizers','Polenta', 25);
menu.addDishToCourse('appetizers','Provolone Frito', 25);

menu.addDishToCourse('mains','Filé de frango e legumes', 45);
menu.addDishToCourse('mains','Filé Parmegiana', 55);
menu.addDishToCourse('mains','Polvo na brasa', 75);
menu.addDishToCourse('mains','Pancetta defumada', 55);


menu.addDishToCourse('desserts','Petit Gateau', 15);
menu.addDishToCourse('desserts','Gelatto', 12);
menu.addDishToCourse('desserts','Pudim', 10);
menu.addDishToCourse('desserts','Brownie', 16);

console.log(menu);

let meal = menu.generateRandomMeal();

console.log(meal);