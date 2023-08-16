const app = Vue.createApp({
    data() {
        return {
            provinces: ["Guanacaste", "Puntarenas", "San Jose", "Heredia", "Cartago",  "Alajuela", "Limon"],
            cordinates:[{name:"Canas",latitute:10.43105, longitude: -85.09825},{name:"Esparza", latitute: 9.99083, longitude: -84.6672},{name:"Turrialba",latitute: 9.90467 , longitude: -83.68352},{name:"Naranjo", latitute: 10.1, longitude: -84.3833},{name:"Perez Zeledon",
            latitute: 9.34111 , longitude: -83.7406} ] 
        }
    }, mounted() {

        /*
        for (var i = 0; i < this.provinces.length; i++) {
            let province = this.provinces[i].name;
            console.log(province);
            axios({
                method: 'get',
                url: 'https://api.weatherapi.com/v1/current.json?key=df53bb4e93f6408084e211804231405&q=' + this.province + ', Costa Rica &aqi=no'
            })
                .then(
                    (response) => {
                        let item = response.data;
                        console.log(item);
                        
                        celcius=item.current.temp_c;

                        if (this.celcius >= 10 && this.celcius < 16) {
                            this.provinces.color = "card-blue";
                        } else if (this.celcius >= 16 && this.celcius < 22) {
                            this.provinces.color = "card-yellow";
                        } else if (this.celcius >= 22 && this.celcius < 27) {
                            this.provinces.color = "card-orange";
                        } else if (this.celcius >= 27 && this.celcius < 33) {
                            this.provinces.color = "card-red";
                        } else if (this.celcius >= 33 && this.celcius < 38) {
                            this.provinces.color = "card-dark-red";
                        }
                        else if (this.celcius >= 38) {
                            this.provinces.color= "card-very-dark-red";
                        }

                    }
                )
                .catch(
                    error => console.log(error)
                );
          }
          */
        
    }
})
/*
        --- ENPOINTS ---
        https://api.weatherapi.com/v1/current.json?key=&q=San Jose, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Heredia, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Alajuela, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Cartago, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Limon, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Guanacaste, Costa Rica&aqi=no
        https://api.weatherapi.com/v1/current.json?key=add-your-api-key&q=Puntarenas, Costa Rica&aqi=no
*/