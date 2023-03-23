import React from "react";

class Weather extends React.Component {
    render() {
        return (
            <div align="center">
                <p>Дата и время: {this.props.dt_txt}</p>
                <p>Температура: {this.props.temp} C</p>
                <p>Влажность: {this.props.humidity} %</p>
                <p>Скорость ветра: {this.props.speed} м/с</p>
                <hr/>
            </div>
        );
    }
}

export default Weather;
