app.component('card-clock', {

    data() {
        return {
            date: "",
            time: ""
        }
    },
    mounted() {
        axios({
            method: 'get',
            url: 'https://api.weatherapi.com/v1/current.json?key=df53bb4e93f6408084e211804231405&q=San Jose, Costa Rica&aqi=no'
        })
            .then(
                (response) => {
                    let item = response.data;
                    console.log(item.location.localtime);

                    const [localDate, localTime] = item.location.localtime.split(' ');
                    this.date = localDate;
                    this.time = localTime;
                }
            )
            .catch(
                error => console.log(error)
            );
    },
    template:
        /*html*/
        `
        <div class="card-clock">
        <h1 class="txt-clock">Hora: <span>{{time}}</span></h1>
        <h1 class="txt-clock">Fecha: <span>{{date}}</span></h1>
    </div>
    `
})