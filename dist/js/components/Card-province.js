app.component('card-province', {

    props: {
        province: {
            type: String
        }
    },
    data() {
        return {
            url: '',
            cloudiness: "",
            celciusdegreess: "",
            image: "",
            humidity: "",
            winds: "",
            feelsLike: "",
            uvindex: "",
            uvText: "",
            clr: "",
            displayProvince:""
        }
    },
    mounted() {
        this.url = this.province;
        this.displayProvince = (this.province === "San Jose") ? "San José" : this.province;
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=df53bb4e93f6408084e211804231405&q=' + this.url + ', Costa Rica &aqi=no'
        })
            .then(
                (response) => {
                    let item = response.data;
                    console.log(item);
                    this.cloudiness = item.current.condition.text;
                    this.celciusdegreess = item.current.temp_c + "° C";
                    this.image = "https://" + item.current.condition.icon;
                    this.humidity = item.current.humidity;
                    this.winds = item.current.wind_kph;
                    this.feelsLike = item.current.feelslike_c;
                    this.uvindex = item.current.uv;

                    const temperature = parseFloat(this.celciusdegreess);

                    if (temperature >= 10 && temperature < 16) {
                        this.clr = "card-blue";
                    } else if (temperature >= 16 && temperature < 22) {
                        this.clr = "card-yellow";
                    } else if (temperature >= 22 && temperature < 27) {
                        this.clr = "card-orange";
                    } else if (temperature >= 27 && temperature < 33) {
                        this.clr = "card-red";
                    } else if (temperature >= 33 && temperature < 38) {
                        this.clr = "card-dark-red";
                    } else if (temperature >= 38) {
                        this.clr = "card-very-dark-red";
                    }

                    if (this.uvindex >= 1 && this.uvindex <= 2) {
                        return this.uvText = "Low";
                    } else if (this.uvindex >= 3 && this.uvindex <= 5) {
                        return this.uvText = "Moderate";
                    } else if (this.uvindex >= 6 && this.uvindex <= 7) {
                        return this.uvText = "High";
                    } else if (this.uvindex >= 8 && this.uvindex <= 10) {
                        return this.uvText = "Very High";
                    } else if (this.uvindex >= 11) {
                        return this.uvText = "Extreme";
                    }

                }
            )
            .catch(
                error => console.log(error)
            );
    },
    template:
        /*html*/
        `
    <div :class="clr">
    <div class="row-1">
        <h2 class="txt-name-province">{{ displayProvince }}<br>
            <span> {{ cloudiness }}</span>
        </h2>
        <p class="txt-cloudy"></p>
        <div>
            <img v-bind:src="image" alt="cloudAndSun">
        </div>
    </div>
    <div class="row">
        <p class="txt-celsius-degress"> {{ celciusdegreess }} </p>
        <img class="pl-1" src="imgs/umbrella.svg" alt="umbrella">
        <p class="txt-temp pl-2"> {{ humidity }} <span> %</span> </p>
        <img class="pl-3" src="imgs/wind-1.svg" alt="wind">
        <p class="txt-temp pl-2"> {{winds}} <span> kph</span> </p>
    </div>
    <p class="txt-cart">Feels like: <span> {{ feelsLike }} </span></p>
    <p class="txt-cart">UV Index: <span> {{uvText}} </span></p>
</div>
    `
})