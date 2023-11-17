const moment = require('moment');

// Assuming data is provided
const data = {
    "Time": ["07:29:30", "07:29:40", "07:29:50", "07:29:57", "07:30:00", "07:30:04", "07:30:07", "07:30:17"],
    "IGN": ["ON", "ON", "ON", "OFF", "OFF", "ON", "ON", "OFF"]
};

// Convert 'Time' to moment objects
const times = data['Time'].map(time => moment(time, 'HH:mm:ss'));

// Initialize variables
let totalDuration = moment.duration();
let ignStatus = null;
let ignChangeTime = null;

// Iterate through rows to calculate total duration
for (let i = 0; i < times.length; i++) {
    const currentTime = times[i];
    if (ignStatus === null) {
        ignStatus = data['IGN'][i];
        ignChangeTime = currentTime;
    } else if (data['IGN'][i] !== ignStatus) {
        totalDuration.add(currentTime.diff(ignChangeTime));
        ignStatus = data['IGN'][i];
        ignChangeTime = currentTime;
    }
}

// If the last state is 'ON', add the remaining time until the end
if (ignStatus === 'ON') {
    totalDuration.add(times[times.length - 1].diff(ignChangeTime));
}

// Convert total duration to hours
const totalHours = totalDuration.asHours();

console.log(`Total hours: ${totalHours.toFixed(2)}`);
