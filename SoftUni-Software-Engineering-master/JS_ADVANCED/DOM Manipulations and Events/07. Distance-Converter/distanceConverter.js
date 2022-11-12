function attachEventsListeners() {
    const button = document.getElementById('convert');
    button.addEventListener('click', convert);

    const unitsToMeters = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in: 0.0254
    };

    function convert(ev) {
        const inputValue = Number(document.getElementById('inputDistance').value);
        const inputUnits = document.getElementById('inputUnits').value;
        const outputUnits = document.getElementById('outputUnits').value
        const outputField = document.getElementById('outputDistance');

        const inMeters = inputValue * unitsToMeters[inputUnits];
        outputField.value = inMeters / unitsToMeters[outputUnits];
    }
}