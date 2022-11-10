function attachEventsListeners() {
    const ratios = {
        days: 1,
        hours: 24,
        minutes: 1440,
        seconds: 86400
    };

    function convert(value, unit) {
        const inDays = value / ratios[unit];
        return {
            days: inDays,
            hours: inDays * ratios.hours,
            minutes: inDays * ratios.minutes,
            seconds: inDays * ratios.seconds
        };
    }

    const inputs = {
        days: document.getElementById('days'),
        hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'),
        seconds: document.getElementById('seconds')
    };

    document.querySelector('main').addEventListener('click', onConvert);

    function onConvert(e) {
        if (e.target.tagName == 'INPUT' && e.target.type == 'button') {
            const input = e.target.parentElement.querySelector('input[type="text"]');

            const time = convert(Number(input.value), input.id);
            Object.keys(time).forEach(k => inputs[k].value = time[k]);
        }
    }
}


// function attachEventsListeners() {
//     let divsArr = Array.from(document.getElementsByTagName("div"));
  
//     let daysBtn = document.getElementById("daysBtn");
//     daysBtn.addEventListener("click", convertDays);
  
//     let hoursBtn = document.getElementById("hoursBtn");
//     hoursBtn.addEventListener("click", convertHour);
  
//     let minutesBtn = document.getElementById("minutesBtn");
//     minutesBtn.addEventListener("click", convertMinutes);
  
//     let secondsBtn = document.getElementById("secondsBtn");
//     secondsBtn.addEventListener("click", convertSeconds);
  
//     let daysField = document.getElementById("days");
//     let hoursField = document.getElementById("hours");
//     let minutesField = document.getElementById("minutes");
//     let secondsField = document.getElementById("seconds");
  
//     function convertDays() {
//       let days = daysField.value;
//       hoursField.value = Number(days) * 24;
//       minutesField.value = Number(days) * 60 * 24;
//       secondsField.value = Number(days) * 60 * 24 * 60;
//     }
//     function convertHour() {
//       let hours = hoursField.value;
//       daysField.value = Number(hours) / 24;
//       minutesField.value = Number(hours) * 60;
//       secondsField.value = Number(hours) * 60 * 60;
//     }
//     function convertMinutes() {
//       let minutes = minutesField.value;
//       daysField.value = Number(minutes) / 1440;
//       hoursField.value = Number(minutes) / 24;
//       secondsField.value = Number(minutes) * 60;
//     }
//     function convertSeconds() {
//       let seconds = secondsField.value;
//       daysField.value = Number(seconds) / 86400;
//       hoursField.value = Number(seconds) / 3600;
//       minutesField.value = Number(seconds) / 60;
//     }
//   }
