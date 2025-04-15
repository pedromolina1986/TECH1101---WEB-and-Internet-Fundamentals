function Team(name, city, year){
    this.name = name;
    this.city = city;
    this.yearOfFoundation = year;
    this.cheers = function(){
        return ("Go " + this.name + " Go!"); 
    };
};

const teams = [];

let flames = new Team("Flames", "Clagary", 1972);
let oilers = new Team("Oilers", "Edmonton", 1971);
teams.push(flames);
teams.push(oilers);

teams.map(team => {
    console.log(team.cheers());
});
