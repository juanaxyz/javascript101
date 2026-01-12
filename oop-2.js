function car(plat, nama){
    this.plat = plat;
    this.nama = nama;

    let location = {x :0, y:0};

    this.getlocation = function(){
        console.log(plat, nama, location);
        
    };
}


bmw = new car(2405551091, "juana satya");
bmw.getlocation()
