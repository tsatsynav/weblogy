const temperatureInCelsius = Number(prompt('Введите температуру в градусах Цельсия').trim());
console.log(temperatureInCelsius);
if (temperatureInCelsius === 0) {
   alert('0 градусов по Цельсию - это температура замерзания воды')
   console.log('success')
} else if (temperatureInCelsius > 0) {
   alert('Для замерзания воды температура должна быть 0 градусов по Цельсию либо ниже');
   console.log('no success')
}

const temperatureInFahrenheit = (temperatureInCelsius) * 9 / 5 + 32;
alert(`${temperatureInCelsius} градусов по Цельсию - это ${temperatureInFahrenheit} по Фаренгейту.`);
console.log(`${temperatureInCelsius} = ${temperatureInFahrenheit}`);