const fs = require('fs');

var tzs = JSON.parse(fs.readFileSync('tz.json', 'utf8'));
var carriers = JSON.parse(fs.readFileSync('carrier.json', 'utf8'));

for (let i = 0; i < tzs.length; i++) {
    const carrier_filters = carriers.filter(x => x.country_iso == tzs[i].CountryIso);
    tzs[i].Carriers = [];
    for (let j = 0; j < carrier_filters.length; j++) {
        if (carrier_filters[j].carrier_name && carrier_filters[j].carrier_name != "Unknown") {
            tzs[i].Carriers.push({
                CarrierName: carrier_filters[j].carrier_name,
                Mnc: carrier_filters[j].carrier_attribute.mnc,
                Mcc: carrier_filters[j].carrier_attribute.mcc,
                CountryCode: carrier_filters[j].country_code,
            });
        }
    }
}

fs.writeFileSync('output_final.json', JSON.stringify(tzs));