const house = {
    robber_menu: {
        money: 0,
        rob_chanse: 100,

    },
    money: 0,
    floors: 10,
    floor: 1,
    elevator: 'Лифт не работает',
    apartments: 10,

    
    elevaup: function () {
        console.log(this.elevator)
    },
    climb: function(floors_index) {
  
        if(floors_index <= 10) {
            this.floor = floors_index
            this.floors--
            console.log(`Вы на ${this.floor}-м этаже`)
        } 
    },
    knock: function (apart_index) {
        if(apart_index <= 10 && this.floor <= 10)
        console.log(`Жилец (${apart_index}-й квартиры): Нам ничего не нужно`)
    },
    robb: function (rob_index) {
        let rob_mass = ['']
        for(let i = 0; i < rob_mass.length; i++) {
            if(rob_mass[i] === rob_index) {
                console.log(`Вы уже грабили эту квартиру!`)
            }
        

        }
        
        if(this.robber_menu.rob_chanse>= 60 && rob_index <= 10) {
    
            this.money += 20000
            this.robber_menu.rob_chanse -= 10
            rob_mass.unshift(rob_index)
            console.log(`Вы успешно ограбили квартиры. У вас ${this.money} рублей`)
        }
        if(this.robber_menu.rob_chanse < 60) {
            console.log(`Вас поймали!`)
        }
       
    },
    leave: function () {
        console.log(`Вы успешно покинули здание`)
    }
}
