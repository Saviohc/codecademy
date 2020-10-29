class Media {
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title() {
        return this._title;
    }

    get ratings() {
        return this._ratings;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    set isCheckedOut(isCheckedOut) {
        this._isCheckedOut = isCheckedOut;
    }

    toggleCheckOutStatus() {
      this._isCheckedOut = this._isCheckedOut ? false : true;
    }
    addRating(rating) {
        this._ratings.push(rating);
    }
    getAverageRating() {
       return (this._ratings.reduce((accumulator, currentValue) => accumulator + currentValue) / 
               this.ratings.length );
    }
}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages  = pages;
        
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    } 
  
}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runTime  = runTime;
        
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    } 
}

class CD extends Media {
    constructor(title, artist, songs) {
        super(title);
        this._artist = director;
        this._songs  = songs;       
    }

    get artist() {
        return this._artist;
    }

    get songs() {
        return this._songs;
    } 
}



const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);

console.log(historyOfEverything);

historyOfEverything.toggleCheckOutStatus();


historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything);

console.log(historyOfEverything.getAverageRating());



const speed = new Movie('Speed', 'Jan de Bont', 116);

speed.toggleCheckOutStatus();

console.log(speed);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);

console.log(speed.getAverageRating());

