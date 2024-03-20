const fs = require('fs');

var tzs = JSON.parse(fs.readFileSync('tz.json', 'utf8'));
var carriers = JSON.parse(fs.readFileSync('carrier_backup.json', 'utf8'));

for (let i = 0; i < tzs.length; i++) {
    const carrier_filters = carriers.filter(x => x.countryCode == tzs[i].CountryIso.toUpperCase() && x.status == "Operational" && x.brand && x.mcc && x.mnc);
    tzs[i].Carriers = [];
    for (let j = 0; j < carrier_filters.length; j++) {
        tzs[i].Carriers.push({
            CarrierName: carrier_filters[j].brand,
            Mnc: carrier_filters[j].mnc,
            Mcc: carrier_filters[j].mcc
        });
    }
}

fs.writeFileSync('output_final1.json', JSON.stringify(tzs));