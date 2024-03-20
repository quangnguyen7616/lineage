const fs = require('fs');
function convertToJSON(data) {
    const mappings = data.match(/countryMappings\s*{([^}]*)}/g);
    const result = [];

    mappings.forEach(mapping => {
        const isoCode = mapping.match(/isoCode:\s*"([^"]*)"/)[1];
        const timeZoneIds = mapping.match(/timeZoneIds:\s*"([^"]*)"/g).map(match => match.match(/"([^"]*)"/)[1]);

        const timeZoneLinks = [];
        const timeZoneLinkMatches = mapping.match(/timeZoneLinks\s*{([^}]*)}/g);
        if (timeZoneLinkMatches) {
            timeZoneLinkMatches.forEach(link => {
                const alternativeId = link.match(/alternativeId:\s*"([^"]*)"/)[1];
                const preferredId = link.match(/preferredId:\s*"([^"]*)"/)[1];
                timeZoneLinks.push({ alternativeId, preferredId });
            });
        }

        result.push({ isoCode, timeZoneIds, timeZoneLinks });
    });

    return JSON.stringify(result, null, 2);
}

const data = `
countryMappings {
  isoCode: "ad"
  timeZoneIds: "Europe/Andorra"
}
countryMappings {
  isoCode: "ae"
  timeZoneIds: "Asia/Dubai"
}
countryMappings {
  isoCode: "af"
  timeZoneIds: "Asia/Kabul"
}
countryMappings {
  isoCode: "ag"
  timeZoneIds: "America/Antigua"
}
countryMappings {
  isoCode: "ai"
  timeZoneIds: "America/Anguilla"
}
countryMappings {
  isoCode: "al"
  timeZoneIds: "Europe/Tirane"
}
countryMappings {
  isoCode: "am"
  timeZoneIds: "Asia/Yerevan"
}
countryMappings {
  isoCode: "ao"
  timeZoneIds: "Africa/Luanda"
}
countryMappings {
  isoCode: "aq"
  timeZoneIds: "Antarctica/McMurdo"
  timeZoneIds: "Antarctica/DumontDUrville"
  timeZoneIds: "Antarctica/Casey"
  timeZoneIds: "Antarctica/Davis"
  timeZoneIds: "Antarctica/Mawson"
  timeZoneIds: "Antarctica/Vostok"
  timeZoneIds: "Antarctica/Syowa"
  timeZoneIds: "Antarctica/Troll"
  timeZoneIds: "Antarctica/Rothera"
  timeZoneIds: "Antarctica/Palmer"
}
countryMappings {
  isoCode: "ar"
  timeZoneIds: "America/Argentina/Buenos_Aires"
  timeZoneLinks {
    alternativeId: "America/Buenos_Aires"
    preferredId: "America/Argentina/Buenos_Aires"
  }
  timeZoneLinks {
    alternativeId: "America/Cordoba"
    preferredId: "America/Argentina/Cordoba"
  }
  timeZoneLinks {
    alternativeId: "America/Rosario"
    preferredId: "America/Argentina/Cordoba"
  }
  timeZoneLinks {
    alternativeId: "America/Mendoza"
    preferredId: "America/Argentina/Mendoza"
  }
  timeZoneLinks {
    alternativeId: "America/Jujuy"
    preferredId: "America/Argentina/Jujuy"
  }
  timeZoneLinks {
    alternativeId: "America/Argentina/ComodRivadavia"
    preferredId: "America/Argentina/Catamarca"
  }
  timeZoneLinks {
    alternativeId: "America/Catamarca"
    preferredId: "America/Argentina/Catamarca"
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Cordoba"
    replacementId: "America/Argentina/Buenos_Aires"
    fromMillis: 687931200000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Mendoza"
    replacementId: "America/Argentina/Buenos_Aires"
    fromMillis: 1237082400000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Tucuman"
    replacementId: "America/Argentina/Buenos_Aires"
    fromMillis: 1087099200000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Salta"
    replacementId: "America/Argentina/Mendoza"
    fromMillis: 1096171200000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/San_Juan"
    replacementId: "America/Argentina/Salta"
    fromMillis: 1090728000000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Jujuy"
    replacementId: "America/Argentina/Salta"
    fromMillis: 687931200000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Catamarca"
    replacementId: "America/Argentina/Salta"
    fromMillis: 1087704000000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/La_Rioja"
    replacementId: "America/Argentina/Catamarca"
    fromMillis: 687931200000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Rio_Gallegos"
    replacementId: "America/Argentina/La_Rioja"
    fromMillis: 673588800000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/Ushuaia"
    replacementId: "America/Argentina/Salta"
    fromMillis: 1087704000000
  }
  timeZoneReplacements {
    replacedId: "America/Argentina/San_Luis"
    replacementId: "America/Argentina/Buenos_Aires"
    fromMillis: 1255233600000
  }
}
countryMappings {
  isoCode: "as"
  timeZoneIds: "Pacific/Pago_Pago"
  timeZoneLinks {
    alternativeId: "Pacific/Samoa"
    preferredId: "Pacific/Pago_Pago"
  }
  timeZoneLinks {
    alternativeId: "US/Samoa"
    preferredId: "Pacific/Pago_Pago"
  }
}
countryMappings {
  isoCode: "at"
  timeZoneIds: "Europe/Vienna"
}
countryMappings {
  isoCode: "au"
  timeZoneIds: "Australia/Sydney"
  timeZoneIds: "Australia/Brisbane"
  timeZoneIds: "Australia/Lord_Howe"
  timeZoneIds: "Australia/Adelaide"
  timeZoneIds: "Australia/Darwin"
  timeZoneIds: "Australia/Perth"
  timeZoneIds: "Australia/Eucla"
  timeZoneLinks {
    alternativeId: "Australia/ACT"
    preferredId: "Australia/Sydney"
  }
  timeZoneLinks {
    alternativeId: "Australia/Canberra"
    preferredId: "Australia/Sydney"
  }
  timeZoneLinks {
    alternativeId: "Australia/NSW"
    preferredId: "Australia/Sydney"
  }
  timeZoneLinks {
    alternativeId: "Australia/Victoria"
    preferredId: "Australia/Melbourne"
  }
  timeZoneLinks {
    alternativeId: "Australia/Currie"
    preferredId: "Australia/Hobart"
  }
  timeZoneLinks {
    alternativeId: "Australia/Tasmania"
    preferredId: "Australia/Hobart"
  }
  timeZoneLinks {
    alternativeId: "Australia/Queensland"
    preferredId: "Australia/Brisbane"
  }
  timeZoneLinks {
    alternativeId: "Australia/LHI"
    preferredId: "Australia/Lord_Howe"
  }
  timeZoneLinks {
    alternativeId: "Australia/South"
    preferredId: "Australia/Adelaide"
  }
  timeZoneLinks {
    alternativeId: "Australia/Yancowinna"
    preferredId: "Australia/Broken_Hill"
  }
  timeZoneLinks {
    alternativeId: "Australia/North"
    preferredId: "Australia/Darwin"
  }
  timeZoneLinks {
    alternativeId: "Australia/West"
    preferredId: "Australia/Perth"
  }
  timeZoneReplacements {
    replacedId: "Australia/Melbourne"
    replacementId: "Australia/Sydney"
    fromMillis: 796147200000
  }
  timeZoneReplacements {
    replacedId: "Australia/Hobart"
    replacementId: "Australia/Sydney"
    fromMillis: 1193500800000
  }
  timeZoneReplacements {
    replacedId: "Australia/Lindeman"
    replacementId: "Australia/Brisbane"
    fromMillis: 762883200000
  }
  timeZoneReplacements {
    replacedId: "Antarctica/Macquarie"
    replacementId: "Australia/Sydney"
    fromMillis: 1286035200000
  }
  timeZoneReplacements {
    replacedId: "Australia/Broken_Hill"
    replacementId: "Australia/Adelaide"
    fromMillis: 796149000000
  }
}
countryMappings {
  isoCode: "aw"
  timeZoneIds: "America/Aruba"
}
countryMappings {
  isoCode: "ax"
  timeZoneIds: "Europe/Mariehamn"
}
countryMappings {
  isoCode: "az"
  timeZoneIds: "Asia/Baku"
}
countryMappings {
  isoCode: "ba"
  timeZoneIds: "Europe/Sarajevo"
}
countryMappings {
  isoCode: "bb"
  timeZoneIds: "America/Barbados"
}
countryMappings {
  isoCode: "bd"
  timeZoneIds: "Asia/Dhaka"
  timeZoneLinks {
    alternativeId: "Asia/Dacca"
    preferredId: "Asia/Dhaka"
  }
}
countryMappings {
  isoCode: "be"
  timeZoneIds: "Europe/Brussels"
}
countryMappings {
  isoCode: "bf"
  timeZoneIds: "Africa/Ouagadougou"
}
countryMappings {
  isoCode: "bg"
  timeZoneIds: "Europe/Sofia"
}
countryMappings {
  isoCode: "bh"
  timeZoneIds: "Asia/Bahrain"
}
countryMappings {
  isoCode: "bi"
  timeZoneIds: "Africa/Bujumbura"
}
countryMappings {
  isoCode: "bj"
  timeZoneIds: "Africa/Porto-Novo"
}
countryMappings {
  isoCode: "bl"
  timeZoneIds: "America/St_Barthelemy"
}
countryMappings {
  isoCode: "bm"
  timeZoneIds: "Atlantic/Bermuda"
}
countryMappings {
  isoCode: "bn"
  timeZoneIds: "Asia/Brunei"
}
countryMappings {
  isoCode: "bo"
  timeZoneIds: "America/La_Paz"
}
countryMappings {
  isoCode: "bq"
  timeZoneIds: "America/Kralendijk"
}
countryMappings {
  isoCode: "br"
  timeZoneIds: "America/Noronha"
  timeZoneIds: "America/Sao_Paulo"
  timeZoneIds: "America/Manaus"
  timeZoneIds: "America/Rio_Branco"
  timeZoneLinks {
    alternativeId: "Brazil/DeNoronha"
    preferredId: "America/Noronha"
  }
  timeZoneLinks {
    alternativeId: "Brazil/East"
    preferredId: "America/Sao_Paulo"
  }
  timeZoneLinks {
    alternativeId: "Brazil/West"
    preferredId: "America/Manaus"
  }
  timeZoneLinks {
    alternativeId: "America/Porto_Acre"
    preferredId: "America/Rio_Branco"
  }
  timeZoneLinks {
    alternativeId: "Brazil/Acre"
    preferredId: "America/Rio_Branco"
  }
  timeZoneReplacements {
    replacedId: "America/Bahia"
    replacementId: "America/Sao_Paulo"
    fromMillis: 1550368800000
  }
  timeZoneReplacements {
    replacedId: "America/Santarem"
    replacementId: "America/Recife"
    fromMillis: 1214280000000
  }
  timeZoneReplacements {
    replacedId: "America/Recife"
    replacementId: "America/Bahia"
    fromMillis: 1330221600000
  }
  timeZoneReplacements {
    replacedId: "America/Fortaleza"
    replacementId: "America/Recife"
    fromMillis: 972180000000
  }
  timeZoneReplacements {
    replacedId: "America/Belem"
    replacementId: "America/Recife"
    fromMillis: 1013911200000
  }
  timeZoneReplacements {
    replacedId: "America/Maceio"
    replacementId: "America/Fortaleza"
    fromMillis: 824004000000
  }
  timeZoneReplacements {
    replacedId: "America/Araguaina"
    replacementId: "America/Bahia"
    fromMillis: 1361066400000
  }
  timeZoneReplacements {
    replacedId: "America/Cuiaba"
    replacementId: "America/Manaus"
    fromMillis: 1550372400000
  }
  timeZoneReplacements {
    replacedId: "America/Campo_Grande"
    replacementId: "America/Cuiaba"
    fromMillis: 1076814000000
  }
  timeZoneReplacements {
    replacedId: "America/Porto_Velho"
    replacementId: "America/Manaus"
    fromMillis: 761713200000
  }
  timeZoneReplacements {
    replacedId: "America/Boa_Vista"
    replacementId: "America/Manaus"
    fromMillis: 971578800000
  }
  timeZoneReplacements {
    replacedId: "America/Eirunepe"
    replacementId: "America/Rio_Branco"
    fromMillis: 761716800000
  }
}
countryMappings {
  isoCode: "bs"
  timeZoneIds: "America/Nassau"
}
countryMappings {
  isoCode: "bt"
  timeZoneIds: "Asia/Thimphu"
  timeZoneLinks {
    alternativeId: "Asia/Thimbu"
    preferredId: "Asia/Thimphu"
  }
}
countryMappings {
  isoCode: "bw"
  timeZoneIds: "Africa/Gaborone"
}
countryMappings {
  isoCode: "by"
  timeZoneIds: "Europe/Minsk"
}
countryMappings {
  isoCode: "bz"
  timeZoneIds: "America/Belize"
}
countryMappings {
  isoCode: "ca"
  timeZoneIds: "America/Toronto"
  timeZoneIds: "America/Vancouver"
  timeZoneIds: "America/Edmonton"
  timeZoneIds: "America/Winnipeg"
  timeZoneIds: "America/Halifax"
  timeZoneIds: "America/St_Johns"
  timeZoneIds: "America/Blanc-Sablon"
  timeZoneIds: "America/Atikokan"
  timeZoneIds: "America/Regina"
  timeZoneIds: "America/Dawson_Creek"
  timeZoneIds: "America/Whitehorse"
  timeZoneLinks {
    alternativeId: "America/Montreal"
    preferredId: "America/Toronto"
  }
  timeZoneLinks {
    alternativeId: "America/Nipigon"
    preferredId: "America/Toronto"
  }
  timeZoneLinks {
    alternativeId: "America/Thunder_Bay"
    preferredId: "America/Toronto"
  }
  timeZoneLinks {
    alternativeId: "Canada/Eastern"
    preferredId: "America/Toronto"
  }
  timeZoneLinks {
    alternativeId: "Canada/Pacific"
    preferredId: "America/Vancouver"
  }
  timeZoneLinks {
    alternativeId: "America/Yellowknife"
    preferredId: "America/Edmonton"
  }
  timeZoneLinks {
    alternativeId: "Canada/Mountain"
    preferredId: "America/Edmonton"
  }
  timeZoneLinks {
    alternativeId: "America/Rainy_River"
    preferredId: "America/Winnipeg"
  }
  timeZoneLinks {
    alternativeId: "Canada/Central"
    preferredId: "America/Winnipeg"
  }
  timeZoneLinks {
    alternativeId: "Canada/Atlantic"
    preferredId: "America/Halifax"
  }
  timeZoneLinks {
    alternativeId: "Canada/Newfoundland"
    preferredId: "America/St_Johns"
  }
  timeZoneLinks {
    alternativeId: "America/Pangnirtung"
    preferredId: "America/Iqaluit"
  }
  timeZoneLinks {
    alternativeId: "America/Coral_Harbour"
    preferredId: "America/Atikokan"
  }
  timeZoneLinks {
    alternativeId: "Canada/Saskatchewan"
    preferredId: "America/Regina"
  }
  timeZoneLinks {
    alternativeId: "Canada/Yukon"
    preferredId: "America/Whitehorse"
  }
  timeZoneReplacements {
    replacedId: "America/Moncton"
    replacementId: "America/Halifax"
    fromMillis: 1162098000000
  }
  timeZoneReplacements {
    replacedId: "America/Glace_Bay"
    replacementId: "America/Halifax"
    fromMillis: 57733200000
  }
  timeZoneReplacements {
    replacedId: "America/Goose_Bay"
    replacementId: "America/Halifax"
    fromMillis: 1299996000000
  }
  timeZoneReplacements {
    replacedId: "America/Iqaluit"
    replacementId: "America/Toronto"
    fromMillis: 972802800000
  }
  timeZoneReplacements {
    replacedId: "America/Swift_Current"
    replacementId: "America/Regina"
    fromMillis: 73472400000
  }
  timeZoneReplacements {
    replacedId: "America/Rankin_Inlet"
    replacementId: "America/Winnipeg"
    fromMillis: 1130659200000
  }
  timeZoneReplacements {
    replacedId: "America/Resolute"
    replacementId: "America/Winnipeg"
    fromMillis: 1173600000000
  }
  timeZoneReplacements {
    replacedId: "America/Creston"
    replacementId: "America/Dawson_Creek"
    fromMillis: 84013200000
  }
  timeZoneReplacements {
    replacedId: "America/Fort_Nelson"
    replacementId: "America/Dawson_Creek"
    fromMillis: 1425808800000
  }
  timeZoneReplacements {
    replacedId: "America/Inuvik"
    replacementId: "America/Edmonton"
    fromMillis: 294228000000
  }
  timeZoneReplacements {
    replacedId: "America/Cambridge_Bay"
    replacementId: "America/Edmonton"
    fromMillis: 986115600000
  }
  timeZoneReplacements {
    replacedId: "America/Dawson"
    replacementId: "America/Whitehorse"
    fromMillis: 120646800000
  }
}
countryMappings {
  isoCode: "cc"
  timeZoneIds: "Indian/Cocos"
}
countryMappings {
  isoCode: "cd"
  timeZoneIds: "Africa/Lubumbashi"
  timeZoneIds: "Africa/Kinshasa"
}
countryMappings {
  isoCode: "cf"
  timeZoneIds: "Africa/Bangui"
}
countryMappings {
  isoCode: "cg"
  timeZoneIds: "Africa/Brazzaville"
}
countryMappings {
  isoCode: "ch"
  timeZoneIds: "Europe/Zurich"
}
countryMappings {
  isoCode: "ci"
  timeZoneIds: "Africa/Abidjan"
}
countryMappings {
  isoCode: "ck"
  timeZoneIds: "Pacific/Rarotonga"
}
countryMappings {
  isoCode: "cl"
  timeZoneIds: "America/Punta_Arenas"
  timeZoneIds: "America/Santiago"
  timeZoneIds: "Pacific/Easter"
  timeZoneLinks {
    alternativeId: "Chile/Continental"
    preferredId: "America/Santiago"
  }
  timeZoneLinks {
    alternativeId: "Chile/EasterIsland"
    preferredId: "Pacific/Easter"
  }
}
countryMappings {
  isoCode: "cm"
  timeZoneIds: "Africa/Douala"
}
countryMappings {
  isoCode: "cn"
  timeZoneIds: "Asia/Shanghai"
  timeZoneIds: "Asia/Urumqi"
  timeZoneLinks {
    alternativeId: "Asia/Chongqing"
    preferredId: "Asia/Shanghai"
  }
  timeZoneLinks {
    alternativeId: "Asia/Chungking"
    preferredId: "Asia/Shanghai"
  }
  timeZoneLinks {
    alternativeId: "Asia/Harbin"
    preferredId: "Asia/Shanghai"
  }
  timeZoneLinks {
    alternativeId: "PRC"
    preferredId: "Asia/Shanghai"
  }
  timeZoneLinks {
    alternativeId: "Asia/Kashgar"
    preferredId: "Asia/Urumqi"
  }
}
countryMappings {
  isoCode: "co"
  timeZoneIds: "America/Bogota"
}
countryMappings {
  isoCode: "cr"
  timeZoneIds: "America/Costa_Rica"
}
countryMappings {
  isoCode: "cu"
  timeZoneIds: "America/Havana"
  timeZoneLinks {
    alternativeId: "Cuba"
    preferredId: "America/Havana"
  }
}
countryMappings {
  isoCode: "cv"
  timeZoneIds: "Atlantic/Cape_Verde"
}
countryMappings {
  isoCode: "cw"
  timeZoneIds: "America/Curacao"
}
countryMappings {
  isoCode: "cx"
  timeZoneIds: "Indian/Christmas"
}
countryMappings {
  isoCode: "cy"
  timeZoneIds: "Asia/Nicosia"
  timeZoneIds: "Asia/Famagusta"
}
countryMappings {
  isoCode: "cz"
  timeZoneIds: "Europe/Prague"
}
countryMappings {
  isoCode: "de"
  timeZoneIds: "Europe/Berlin"
  timeZoneReplacements {
    replacedId: "Europe/Busingen"
    replacementId: "Europe/Berlin"
    fromMillis: 338950800000
  }
}
countryMappings {
  isoCode: "dj"
  timeZoneIds: "Africa/Djibouti"
}
countryMappings {
  isoCode: "dk"
  timeZoneIds: "Europe/Copenhagen"
}
countryMappings {
  isoCode: "dm"
  timeZoneIds: "America/Dominica"
}
countryMappings {
  isoCode: "do"
  timeZoneIds: "America/Santo_Domingo"
}
countryMappings {
  isoCode: "dz"
  timeZoneIds: "Africa/Algiers"
}
countryMappings {
  isoCode: "ec"
  timeZoneIds: "America/Guayaquil"
  timeZoneIds: "Pacific/Galapagos"
}
countryMappings {
  isoCode: "ee"
  timeZoneIds: "Europe/Tallinn"
}
countryMappings {
  isoCode: "eg"
  timeZoneIds: "Africa/Cairo"
  timeZoneLinks {
    alternativeId: "Egypt"
    preferredId: "Africa/Cairo"
  }
}
countryMappings {
  isoCode: "eh"
  timeZoneIds: "Africa/El_Aaiun"
}
countryMappings {
  isoCode: "er"
  timeZoneIds: "Africa/Asmara"
  timeZoneLinks {
    alternativeId: "Africa/Asmera"
    preferredId: "Africa/Asmara"
  }
}
countryMappings {
  isoCode: "es"
  timeZoneIds: "Europe/Madrid"
  timeZoneIds: "Atlantic/Canary"
  timeZoneReplacements {
    replacedId: "Africa/Ceuta"
    replacementId: "Europe/Madrid"
    fromMillis: 496803600000
  }
}
countryMappings {
  isoCode: "et"
  timeZoneIds: "Africa/Addis_Ababa"
}
countryMappings {
  isoCode: "fi"
  timeZoneIds: "Europe/Helsinki"
}
countryMappings {
  isoCode: "fj"
  timeZoneIds: "Pacific/Fiji"
}
countryMappings {
  isoCode: "fk"
  timeZoneIds: "Atlantic/Stanley"
}
countryMappings {
  isoCode: "fm"
  timeZoneIds: "Pacific/Pohnpei"
  timeZoneIds: "Pacific/Kosrae"
  timeZoneIds: "Pacific/Chuuk"
  timeZoneLinks {
    alternativeId: "Pacific/Ponape"
    preferredId: "Pacific/Pohnpei"
  }
  timeZoneLinks {
    alternativeId: "Pacific/Truk"
    preferredId: "Pacific/Chuuk"
  }
  timeZoneLinks {
    alternativeId: "Pacific/Yap"
    preferredId: "Pacific/Chuuk"
  }
}
countryMappings {
  isoCode: "fo"
  timeZoneIds: "Atlantic/Faroe"
  timeZoneLinks {
    alternativeId: "Atlantic/Faeroe"
    preferredId: "Atlantic/Faroe"
  }
}
countryMappings {
  isoCode: "fr"
  timeZoneIds: "Europe/Paris"
}
countryMappings {
  isoCode: "ga"
  timeZoneIds: "Africa/Libreville"
}
countryMappings {
  isoCode: "gb"
  timeZoneIds: "Europe/London"
  timeZoneLinks {
    alternativeId: "Europe/Belfast"
    preferredId: "Europe/London"
  }
  timeZoneLinks {
    alternativeId: "GB"
    preferredId: "Europe/London"
  }
  timeZoneLinks {
    alternativeId: "GB-Eire"
    preferredId: "Europe/London"
  }
}
countryMappings {
  isoCode: "gd"
  timeZoneIds: "America/Grenada"
}
countryMappings {
  isoCode: "ge"
  timeZoneIds: "Asia/Tbilisi"
}
countryMappings {
  isoCode: "gf"
  timeZoneIds: "America/Cayenne"
}
countryMappings {
  isoCode: "gg"
  timeZoneIds: "Europe/Guernsey"
}
countryMappings {
  isoCode: "gh"
  timeZoneIds: "Africa/Accra"
}
countryMappings {
  isoCode: "gi"
  timeZoneIds: "Europe/Gibraltar"
}
countryMappings {
  isoCode: "gl"
  timeZoneIds: "America/Danmarkshavn"
  timeZoneIds: "America/Scoresbysund"
  timeZoneIds: "America/Nuuk"
  timeZoneIds: "America/Thule"
  timeZoneLinks {
    alternativeId: "America/Godthab"
    preferredId: "America/Nuuk"
  }
}
countryMappings {
  isoCode: "gm"
  timeZoneIds: "Africa/Banjul"
}
countryMappings {
  isoCode: "gn"
  timeZoneIds: "Africa/Conakry"
}
countryMappings {
  isoCode: "gp"
  timeZoneIds: "America/Guadeloupe"
}
countryMappings {
  isoCode: "gq"
  timeZoneIds: "Africa/Malabo"
}
countryMappings {
  isoCode: "gr"
  timeZoneIds: "Europe/Athens"
}
countryMappings {
  isoCode: "gs"
  timeZoneIds: "Atlantic/South_Georgia"
}
countryMappings {
  isoCode: "gt"
  timeZoneIds: "America/Guatemala"
}
countryMappings {
  isoCode: "gu"
  timeZoneIds: "Pacific/Guam"
}
countryMappings {
  isoCode: "gw"
  timeZoneIds: "Africa/Bissau"
}
countryMappings {
  isoCode: "gy"
  timeZoneIds: "America/Guyana"
}
countryMappings {
  isoCode: "hk"
  timeZoneIds: "Asia/Hong_Kong"
  timeZoneLinks {
    alternativeId: "Hongkong"
    preferredId: "Asia/Hong_Kong"
  }
}
countryMappings {
  isoCode: "hn"
  timeZoneIds: "America/Tegucigalpa"
}
countryMappings {
  isoCode: "hr"
  timeZoneIds: "Europe/Zagreb"
}
countryMappings {
  isoCode: "ht"
  timeZoneIds: "America/Port-au-Prince"
}
countryMappings {
  isoCode: "hu"
  timeZoneIds: "Europe/Budapest"
}
countryMappings {
  isoCode: "id"
  timeZoneIds: "Asia/Jayapura"
  timeZoneIds: "Asia/Makassar"
  timeZoneIds: "Asia/Jakarta"
  timeZoneLinks {
    alternativeId: "Asia/Ujung_Pandang"
    preferredId: "Asia/Makassar"
  }
  timeZoneReplacements {
    replacedId: "Asia/Pontianak"
    replacementId: "Asia/Jakarta"
    fromMillis: 567964800000
  }
}
countryMappings {
  isoCode: "ie"
  timeZoneIds: "Europe/Dublin"
  timeZoneLinks {
    alternativeId: "Eire"
    preferredId: "Europe/Dublin"
  }
}
countryMappings {
  isoCode: "il"
  timeZoneIds: "Asia/Jerusalem"
  timeZoneLinks {
    alternativeId: "Asia/Tel_Aviv"
    preferredId: "Asia/Jerusalem"
  }
  timeZoneLinks {
    alternativeId: "Israel"
    preferredId: "Asia/Jerusalem"
  }
}
countryMappings {
  isoCode: "im"
  timeZoneIds: "Europe/Isle_of_Man"
}
countryMappings {
  isoCode: "in"
  timeZoneIds: "Asia/Kolkata"
  timeZoneLinks {
    alternativeId: "Asia/Calcutta"
    preferredId: "Asia/Kolkata"
  }
}
countryMappings {
  isoCode: "io"
  timeZoneIds: "Indian/Chagos"
}
countryMappings {
  isoCode: "iq"
  timeZoneIds: "Asia/Baghdad"
}
countryMappings {
  isoCode: "ir"
  timeZoneIds: "Asia/Tehran"
  timeZoneLinks {
    alternativeId: "Iran"
    preferredId: "Asia/Tehran"
  }
}
countryMappings {
  isoCode: "is"
  timeZoneIds: "Atlantic/Reykjavik"
  timeZoneLinks {
    alternativeId: "Iceland"
    preferredId: "Atlantic/Reykjavik"
  }
}
countryMappings {
  isoCode: "it"
  timeZoneIds: "Europe/Rome"
}
countryMappings {
  isoCode: "je"
  timeZoneIds: "Europe/Jersey"
}
countryMappings {
  isoCode: "jm"
  timeZoneIds: "America/Jamaica"
  timeZoneLinks {
    alternativeId: "Jamaica"
    preferredId: "America/Jamaica"
  }
}
countryMappings {
  isoCode: "jo"
  timeZoneIds: "Asia/Amman"
}
countryMappings {
  isoCode: "jp"
  timeZoneIds: "Asia/Tokyo"
  timeZoneLinks {
    alternativeId: "Japan"
    preferredId: "Asia/Tokyo"
  }
}
countryMappings {
  isoCode: "ke"
  timeZoneIds: "Africa/Nairobi"
}
countryMappings {
  isoCode: "kg"
  timeZoneIds: "Asia/Bishkek"
}
countryMappings {
  isoCode: "kh"
  timeZoneIds: "Asia/Phnom_Penh"
}
countryMappings {
  isoCode: "ki"
  timeZoneIds: "Pacific/Kiritimati"
  timeZoneIds: "Pacific/Enderbury"
  timeZoneIds: "Pacific/Tarawa"
  timeZoneLinks {
    alternativeId: "Pacific/Kanton"
    preferredId: "Pacific/Enderbury"
  }
}
countryMappings {
  isoCode: "km"
  timeZoneIds: "Indian/Comoro"
}
countryMappings {
  isoCode: "kn"
  timeZoneIds: "America/St_Kitts"
}
countryMappings {
  isoCode: "kp"
  timeZoneIds: "Asia/Pyongyang"
}
countryMappings {
  isoCode: "kr"
  timeZoneIds: "Asia/Seoul"
  timeZoneLinks {
    alternativeId: "ROK"
    preferredId: "Asia/Seoul"
  }
}
countryMappings {
  isoCode: "kw"
  timeZoneIds: "Asia/Kuwait"
}
countryMappings {
  isoCode: "ky"
  timeZoneIds: "America/Cayman"
}
countryMappings {
  isoCode: "kz"
  timeZoneIds: "Asia/Almaty"
  timeZoneIds: "Asia/Oral"
  timeZoneReplacements {
    replacedId: "Asia/Qostanay"
    replacementId: "Asia/Almaty"
    fromMillis: 1099170000000
  }
  timeZoneReplacements {
    replacedId: "Asia/Aqtau"
    replacementId: "Asia/Oral"
    fromMillis: 1099173600000
  }
  timeZoneReplacements {
    replacedId: "Asia/Qyzylorda"
    replacementId: "Asia/Oral"
    fromMillis: 1545328800000
  }
  timeZoneReplacements {
    replacedId: "Asia/Aqtobe"
    replacementId: "Asia/Oral"
    fromMillis: 1099173600000
  }
  timeZoneReplacements {
    replacedId: "Asia/Atyrau"
    replacementId: "Asia/Oral"
    fromMillis: 922572000000
  }
}
countryMappings {
  isoCode: "la"
  timeZoneIds: "Asia/Vientiane"
}
countryMappings {
  isoCode: "lb"
  timeZoneIds: "Asia/Beirut"
}
countryMappings {
  isoCode: "lc"
  timeZoneIds: "America/St_Lucia"
}
countryMappings {
  isoCode: "li"
  timeZoneIds: "Europe/Vaduz"
}
countryMappings {
  isoCode: "lk"
  timeZoneIds: "Asia/Colombo"
}
countryMappings {
  isoCode: "lr"
  timeZoneIds: "Africa/Monrovia"
}
countryMappings {
  isoCode: "ls"
  timeZoneIds: "Africa/Maseru"
}
countryMappings {
  isoCode: "lt"
  timeZoneIds: "Europe/Vilnius"
}
countryMappings {
  isoCode: "lu"
  timeZoneIds: "Europe/Luxembourg"
}
countryMappings {
  isoCode: "lv"
  timeZoneIds: "Europe/Riga"
}
countryMappings {
  isoCode: "ly"
  timeZoneIds: "Africa/Tripoli"
  timeZoneLinks {
    alternativeId: "Libya"
    preferredId: "Africa/Tripoli"
  }
}
countryMappings {
  isoCode: "ma"
  timeZoneIds: "Africa/Casablanca"
}
countryMappings {
  isoCode: "mc"
  timeZoneIds: "Europe/Monaco"
}
countryMappings {
  isoCode: "md"
  timeZoneIds: "Europe/Chisinau"
  timeZoneLinks {
    alternativeId: "Europe/Tiraspol"
    preferredId: "Europe/Chisinau"
  }
}
countryMappings {
  isoCode: "me"
  timeZoneIds: "Europe/Podgorica"
}
countryMappings {
  isoCode: "mf"
  timeZoneIds: "America/Marigot"
}
countryMappings {
  isoCode: "mg"
  timeZoneIds: "Indian/Antananarivo"
}
countryMappings {
  isoCode: "mh"
  timeZoneIds: "Pacific/Majuro"
  timeZoneLinks {
    alternativeId: "Kwajalein"
    preferredId: "Pacific/Kwajalein"
  }
  timeZoneReplacements {
    replacedId: "Pacific/Kwajalein"
    replacementId: "Pacific/Majuro"
    fromMillis: 745934400000
  }
}
countryMappings {
  isoCode: "mk"
  timeZoneIds: "Europe/Skopje"
}
countryMappings {
  isoCode: "ml"
  timeZoneIds: "Africa/Bamako"
  timeZoneLinks {
    alternativeId: "Africa/Timbuktu"
    preferredId: "Africa/Bamako"
  }
}
countryMappings {
  isoCode: "mm"
  timeZoneIds: "Asia/Yangon"
  timeZoneLinks {
    alternativeId: "Asia/Rangoon"
    preferredId: "Asia/Yangon"
  }
}
countryMappings {
  isoCode: "mn"
  timeZoneIds: "Asia/Ulaanbaatar"
  timeZoneIds: "Asia/Hovd"
  timeZoneLinks {
    alternativeId: "Asia/Ulan_Bator"
    preferredId: "Asia/Ulaanbaatar"
  }
  timeZoneReplacements {
    replacedId: "Asia/Choibalsan"
    replacementId: "Asia/Ulaanbaatar"
    fromMillis: 1206889200000
  }
}
countryMappings {
  isoCode: "mo"
  timeZoneIds: "Asia/Macau"
  timeZoneLinks {
    alternativeId: "Asia/Macao"
    preferredId: "Asia/Macau"
  }
}
countryMappings {
  isoCode: "mp"
  timeZoneIds: "Pacific/Saipan"
}
countryMappings {
  isoCode: "mq"
  timeZoneIds: "America/Martinique"
}
countryMappings {
  isoCode: "mr"
  timeZoneIds: "Africa/Nouakchott"
}
countryMappings {
  isoCode: "ms"
  timeZoneIds: "America/Montserrat"
}
countryMappings {
  isoCode: "mt"
  timeZoneIds: "Europe/Malta"
}
countryMappings {
  isoCode: "mu"
  timeZoneIds: "Indian/Mauritius"
}
countryMappings {
  isoCode: "mv"
  timeZoneIds: "Indian/Maldives"
}
countryMappings {
  isoCode: "mw"
  timeZoneIds: "Africa/Blantyre"
}
countryMappings {
  isoCode: "mx"
  timeZoneIds: "America/Mexico_City"
  timeZoneIds: "America/Matamoros"
  timeZoneIds: "America/Cancun"
  timeZoneIds: "America/Ciudad_Juarez"
  timeZoneIds: "America/Hermosillo"
  timeZoneIds: "America/Tijuana"
  timeZoneLinks {
    alternativeId: "Mexico/General"
    preferredId: "America/Mexico_City"
  }
  timeZoneLinks {
    alternativeId: "Mexico/BajaSur"
    preferredId: "America/Mazatlan"
  }
  timeZoneLinks {
    alternativeId: "America/Ensenada"
    preferredId: "America/Tijuana"
  }
  timeZoneLinks {
    alternativeId: "America/Santa_Isabel"
    preferredId: "America/Tijuana"
  }
  timeZoneLinks {
    alternativeId: "Mexico/BajaNorte"
    preferredId: "America/Tijuana"
  }
  timeZoneReplacements {
    replacedId: "America/Merida"
    replacementId: "America/Mexico_City"
    fromMillis: 407653200000
  }
  timeZoneReplacements {
    replacedId: "America/Monterrey"
    replacementId: "America/Mexico_City"
    fromMillis: 594198000000
  }
  timeZoneReplacements {
    replacedId: "America/Chihuahua"
    replacementId: "America/Mexico_City"
    fromMillis: 1667116800000
  }
  timeZoneReplacements {
    replacedId: "America/Bahia_Banderas"
    replacementId: "America/Mexico_City"
    fromMillis: 1270371600000
  }
  timeZoneReplacements {
    replacedId: "America/Ojinaga"
    replacementId: "America/Matamoros"
    fromMillis: 1667718000000
  }
  timeZoneReplacements {
    replacedId: "America/Mazatlan"
    replacementId: "America/Hermosillo"
    fromMillis: 1667116800000
  }
}
countryMappings {
  isoCode: "my"
  timeZoneIds: "Asia/Kuala_Lumpur"
  timeZoneReplacements {
    replacedId: "Asia/Kuching"
    replacementId: "Asia/Kuala_Lumpur"
    fromMillis: 378662400000
  }
}
countryMappings {
  isoCode: "mz"
  timeZoneIds: "Africa/Maputo"
}
countryMappings {
  isoCode: "na"
  timeZoneIds: "Africa/Windhoek"
}
countryMappings {
  isoCode: "nc"
  timeZoneIds: "Pacific/Noumea"
}
countryMappings {
  isoCode: "ne"
  timeZoneIds: "Africa/Niamey"
}
countryMappings {
  isoCode: "nf"
  timeZoneIds: "Pacific/Norfolk"
}
countryMappings {
  isoCode: "ng"
  timeZoneIds: "Africa/Lagos"
}
countryMappings {
  isoCode: "ni"
  timeZoneIds: "America/Managua"
}
countryMappings {
  isoCode: "nl"
  timeZoneIds: "Europe/Amsterdam"
}
countryMappings {
  isoCode: "no"
  timeZoneIds: "Europe/Oslo"
  timeZoneLinks {
    alternativeId: "Atlantic/Jan_Mayen"
    preferredId: "Europe/Oslo"
  }
}
countryMappings {
  isoCode: "np"
  timeZoneIds: "Asia/Kathmandu"
  timeZoneLinks {
    alternativeId: "Asia/Katmandu"
    preferredId: "Asia/Kathmandu"
  }
}
countryMappings {
  isoCode: "nr"
  timeZoneIds: "Pacific/Nauru"
}
countryMappings {
  isoCode: "nu"
  timeZoneIds: "Pacific/Niue"
}
countryMappings {
  isoCode: "nz"
  timeZoneIds: "Pacific/Auckland"
  timeZoneIds: "Pacific/Chatham"
  timeZoneLinks {
    alternativeId: "Antarctica/South_Pole"
    preferredId: "Pacific/Auckland"
  }
  timeZoneLinks {
    alternativeId: "NZ"
    preferredId: "Pacific/Auckland"
  }
  timeZoneLinks {
    alternativeId: "NZ-CHAT"
    preferredId: "Pacific/Chatham"
  }
}
countryMappings {
  isoCode: "om"
  timeZoneIds: "Asia/Muscat"
}
countryMappings {
  isoCode: "pa"
  timeZoneIds: "America/Panama"
}
countryMappings {
  isoCode: "pe"
  timeZoneIds: "America/Lima"
}
countryMappings {
  isoCode: "pf"
  timeZoneIds: "Pacific/Gambier"
  timeZoneIds: "Pacific/Marquesas"
  timeZoneIds: "Pacific/Tahiti"
}
countryMappings {
  isoCode: "pg"
  timeZoneIds: "Pacific/Port_Moresby"
  timeZoneIds: "Pacific/Bougainville"
}
countryMappings {
  isoCode: "ph"
  timeZoneIds: "Asia/Manila"
}
countryMappings {
  isoCode: "pk"
  timeZoneIds: "Asia/Karachi"
}
countryMappings {
  isoCode: "pl"
  timeZoneIds: "Europe/Warsaw"
  timeZoneLinks {
    alternativeId: "Poland"
    preferredId: "Europe/Warsaw"
  }
}
countryMappings {
  isoCode: "pm"
  timeZoneIds: "America/Miquelon"
}
countryMappings {
  isoCode: "pn"
  timeZoneIds: "Pacific/Pitcairn"
}
countryMappings {
  isoCode: "pr"
  timeZoneIds: "America/Puerto_Rico"
}
countryMappings {
  isoCode: "ps"
  timeZoneIds: "Asia/Hebron"
  timeZoneReplacements {
    replacedId: "Asia/Gaza"
    replacementId: "Asia/Hebron"
    fromMillis: 1317330000000
  }
}
countryMappings {
  isoCode: "pt"
  timeZoneIds: "Europe/Lisbon"
  timeZoneIds: "Atlantic/Azores"
  timeZoneLinks {
    alternativeId: "Portugal"
    preferredId: "Europe/Lisbon"
  }
  timeZoneReplacements {
    replacedId: "Atlantic/Madeira"
    replacementId: "Europe/Lisbon"
    fromMillis: 828234000000
  }
}
countryMappings {
  isoCode: "pw"
  timeZoneIds: "Pacific/Palau"
}
countryMappings {
  isoCode: "py"
  timeZoneIds: "America/Asuncion"
}
countryMappings {
  isoCode: "qa"
  timeZoneIds: "Asia/Qatar"
}
countryMappings {
  isoCode: "re"
  timeZoneIds: "Indian/Reunion"
}
countryMappings {
  isoCode: "ro"
  timeZoneIds: "Europe/Bucharest"
}
countryMappings {
  isoCode: "rs"
  timeZoneIds: "Europe/Belgrade"
}
countryMappings {
  isoCode: "ru"
  timeZoneIds: "Asia/Kamchatka"
  timeZoneIds: "Asia/Anadyr"
  timeZoneIds: "Asia/Magadan"
  timeZoneIds: "Asia/Sakhalin"
  timeZoneIds: "Asia/Srednekolymsk"
  timeZoneIds: "Asia/Vladivostok"
  timeZoneIds: "Asia/Chita"
  timeZoneIds: "Asia/Irkutsk"
  timeZoneIds: "Asia/Krasnoyarsk"
  timeZoneIds: "Asia/Novosibirsk"
  timeZoneIds: "Asia/Barnaul"
  timeZoneIds: "Asia/Omsk"
  timeZoneIds: "Asia/Yekaterinburg"
  timeZoneIds: "Europe/Samara"
  timeZoneIds: "Europe/Saratov"
  timeZoneIds: "Europe/Moscow"
  timeZoneIds: "Europe/Volgograd"
  timeZoneIds: "Europe/Kirov"
  timeZoneIds: "Europe/Kaliningrad"
  timeZoneLinks {
    alternativeId: "W-SU"
    preferredId: "Europe/Moscow"
  }
  timeZoneReplacements {
    replacedId: "Asia/Ust-Nera"
    replacementId: "Asia/Vladivostok"
    fromMillis: 1315828800000
  }
  timeZoneReplacements {
    replacedId: "Asia/Yakutsk"
    replacementId: "Asia/Chita"
    fromMillis: 1459015200000
  }
  timeZoneReplacements {
    replacedId: "Asia/Khandyga"
    replacementId: "Asia/Yakutsk"
    fromMillis: 1315832400000
  }
  timeZoneReplacements {
    replacedId: "Asia/Novokuznetsk"
    replacementId: "Asia/Krasnoyarsk"
    fromMillis: 1459022400000
  }
  timeZoneReplacements {
    replacedId: "Asia/Tomsk"
    replacementId: "Asia/Barnaul"
    fromMillis: 1464465600000
  }
  timeZoneReplacements {
    replacedId: "Europe/Ulyanovsk"
    replacementId: "Europe/Saratov"
    fromMillis: 1480806000000
  }
  timeZoneReplacements {
    replacedId: "Europe/Astrakhan"
    replacementId: "Europe/Ulyanovsk"
    fromMillis: 701823600000
  }
}
countryMappings {
  isoCode: "rw"
  timeZoneIds: "Africa/Kigali"
}
countryMappings {
  isoCode: "sa"
  timeZoneIds: "Asia/Riyadh"
}
countryMappings {
  isoCode: "sb"
  timeZoneIds: "Pacific/Guadalcanal"
}
countryMappings {
  isoCode: "sc"
  timeZoneIds: "Indian/Mahe"
}
countryMappings {
  isoCode: "sd"
  timeZoneIds: "Africa/Khartoum"
}
countryMappings {
  isoCode: "se"
  timeZoneIds: "Europe/Stockholm"
}
countryMappings {
  isoCode: "sg"
  timeZoneIds: "Asia/Singapore"
  timeZoneLinks {
    alternativeId: "Singapore"
    preferredId: "Asia/Singapore"
  }
}
countryMappings {
  isoCode: "sh"
  timeZoneIds: "Atlantic/St_Helena"
}
countryMappings {
  isoCode: "si"
  timeZoneIds: "Europe/Ljubljana"
}
countryMappings {
  isoCode: "sj"
  timeZoneIds: "Arctic/Longyearbyen"
}
countryMappings {
  isoCode: "sk"
  timeZoneIds: "Europe/Bratislava"
}
countryMappings {
  isoCode: "sl"
  timeZoneIds: "Africa/Freetown"
}
countryMappings {
  isoCode: "sm"
  timeZoneIds: "Europe/San_Marino"
}
countryMappings {
  isoCode: "sn"
  timeZoneIds: "Africa/Dakar"
}
countryMappings {
  isoCode: "so"
  timeZoneIds: "Africa/Mogadishu"
}
countryMappings {
  isoCode: "sr"
  timeZoneIds: "America/Paramaribo"
}
countryMappings {
  isoCode: "ss"
  timeZoneIds: "Africa/Juba"
}
countryMappings {
  isoCode: "st"
  timeZoneIds: "Africa/Sao_Tome"
}
countryMappings {
  isoCode: "sv"
  timeZoneIds: "America/El_Salvador"
}
countryMappings {
  isoCode: "sx"
  timeZoneIds: "America/Lower_Princes"
}
countryMappings {
  isoCode: "sy"
  timeZoneIds: "Asia/Damascus"
}
countryMappings {
  isoCode: "sz"
  timeZoneIds: "Africa/Mbabane"
}
countryMappings {
  isoCode: "tc"
  timeZoneIds: "America/Grand_Turk"
}
countryMappings {
  isoCode: "td"
  timeZoneIds: "Africa/Ndjamena"
}
countryMappings {
  isoCode: "tf"
  timeZoneIds: "Indian/Kerguelen"
}
countryMappings {
  isoCode: "tg"
  timeZoneIds: "Africa/Lome"
}
countryMappings {
  isoCode: "th"
  timeZoneIds: "Asia/Bangkok"
}
countryMappings {
  isoCode: "tj"
  timeZoneIds: "Asia/Dushanbe"
}
countryMappings {
  isoCode: "tk"
  timeZoneIds: "Pacific/Fakaofo"
}
countryMappings {
  isoCode: "tl"
  timeZoneIds: "Asia/Dili"
}
countryMappings {
  isoCode: "tm"
  timeZoneIds: "Asia/Ashgabat"
  timeZoneLinks {
    alternativeId: "Asia/Ashkhabad"
    preferredId: "Asia/Ashgabat"
  }
}
countryMappings {
  isoCode: "tn"
  timeZoneIds: "Africa/Tunis"
}
countryMappings {
  isoCode: "to"
  timeZoneIds: "Pacific/Tongatapu"
}
countryMappings {
  isoCode: "tr"
  timeZoneIds: "Europe/Istanbul"
  timeZoneLinks {
    alternativeId: "Turkey"
    preferredId: "Europe/Istanbul"
  }
}
countryMappings {
  isoCode: "tt"
  timeZoneIds: "America/Port_of_Spain"
  timeZoneLinks {
    alternativeId: "America/Virgin"
    preferredId: "America/Port_of_Spain"
  }
}
countryMappings {
  isoCode: "tv"
  timeZoneIds: "Pacific/Funafuti"
}
countryMappings {
  isoCode: "tw"
  timeZoneIds: "Asia/Taipei"
  timeZoneLinks {
    alternativeId: "ROC"
    preferredId: "Asia/Taipei"
  }
}
countryMappings {
  isoCode: "tz"
  timeZoneIds: "Africa/Dar_es_Salaam"
}
countryMappings {
  isoCode: "ua"
  timeZoneIds: "Europe/Kiev"
  timeZoneIds: "Europe/Simferopol"
  timeZoneLinks {
    alternativeId: "Europe/Kyiv"
    preferredId: "Europe/Kiev"
  }
  timeZoneLinks {
    alternativeId: "Europe/Uzhgorod"
    preferredId: "Europe/Kiev"
  }
  timeZoneLinks {
    alternativeId: "Europe/Zaporozhye"
    preferredId: "Europe/Kiev"
  }
}
countryMappings {
  isoCode: "ug"
  timeZoneIds: "Africa/Kampala"
}
countryMappings {
  isoCode: "um"
  timeZoneIds: "Pacific/Wake"
  timeZoneIds: "Pacific/Midway"
}
countryMappings {
  isoCode: "us"
  timeZoneIds: "America/New_York"
  timeZoneIds: "America/Chicago"
  timeZoneIds: "America/Denver"
  timeZoneIds: "America/Phoenix"
  timeZoneIds: "America/Los_Angeles"
  timeZoneIds: "America/Anchorage"
  timeZoneIds: "Pacific/Honolulu"
  timeZoneIds: "America/Adak"
  timeZoneLinks {
    alternativeId: "US/Eastern"
    preferredId: "America/New_York"
  }
  timeZoneLinks {
    alternativeId: "America/Louisville"
    preferredId: "America/Kentucky/Louisville"
  }
  timeZoneLinks {
    alternativeId: "US/Michigan"
    preferredId: "America/Detroit"
  }
  timeZoneLinks {
    alternativeId: "America/Fort_Wayne"
    preferredId: "America/Indiana/Indianapolis"
  }
  timeZoneLinks {
    alternativeId: "America/Indianapolis"
    preferredId: "America/Indiana/Indianapolis"
  }
  timeZoneLinks {
    alternativeId: "US/East-Indiana"
    preferredId: "America/Indiana/Indianapolis"
  }
  timeZoneLinks {
    alternativeId: "US/Central"
    preferredId: "America/Chicago"
  }
  timeZoneLinks {
    alternativeId: "America/Knox_IN"
    preferredId: "America/Indiana/Knox"
  }
  timeZoneLinks {
    alternativeId: "US/Indiana-Starke"
    preferredId: "America/Indiana/Knox"
  }
  timeZoneLinks {
    alternativeId: "America/Shiprock"
    preferredId: "America/Denver"
  }
  timeZoneLinks {
    alternativeId: "Navajo"
    preferredId: "America/Denver"
  }
  timeZoneLinks {
    alternativeId: "US/Mountain"
    preferredId: "America/Denver"
  }
  timeZoneLinks {
    alternativeId: "US/Arizona"
    preferredId: "America/Phoenix"
  }
  timeZoneLinks {
    alternativeId: "US/Pacific"
    preferredId: "America/Los_Angeles"
  }
  timeZoneLinks {
    alternativeId: "US/Alaska"
    preferredId: "America/Anchorage"
  }
  timeZoneLinks {
    alternativeId: "Pacific/Johnston"
    preferredId: "Pacific/Honolulu"
  }
  timeZoneLinks {
    alternativeId: "US/Hawaii"
    preferredId: "Pacific/Honolulu"
  }
  timeZoneLinks {
    alternativeId: "America/Atka"
    preferredId: "America/Adak"
  }
  timeZoneLinks {
    alternativeId: "US/Aleutian"
    preferredId: "America/Adak"
  }
  timeZoneReplacements {
    replacedId: "America/Kentucky/Louisville"
    replacementId: "America/New_York"
    fromMillis: 152089200000
  }
  timeZoneReplacements {
    replacedId: "America/Detroit"
    replacementId: "America/New_York"
    fromMillis: 167814000000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Indianapolis"
    replacementId: "America/New_York"
    fromMillis: 1130652000000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Vincennes"
    replacementId: "America/New_York"
    fromMillis: 1194159600000
  }
  timeZoneReplacements {
    replacedId: "America/Kentucky/Monticello"
    replacementId: "America/New_York"
    fromMillis: 972802800000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Petersburg"
    replacementId: "America/Indiana/Vincennes"
    fromMillis: 247042800000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Winamac"
    replacementId: "America/New_York"
    fromMillis: 1173600000000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Vevay"
    replacementId: "America/Indiana/Indianapolis"
    fromMillis: 89186400000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Marengo"
    replacementId: "America/Indiana/Indianapolis"
    fromMillis: 183535200000
  }
  timeZoneReplacements {
    replacedId: "America/Menominee"
    replacementId: "America/Chicago"
    fromMillis: 104918400000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Tell_City"
    replacementId: "America/Chicago"
    fromMillis: 1143964800000
  }
  timeZoneReplacements {
    replacedId: "America/Indiana/Knox"
    replacementId: "America/Indiana/Tell_City"
    fromMillis: 688546800000
  }
  timeZoneReplacements {
    replacedId: "America/North_Dakota/Beulah"
    replacementId: "America/Chicago"
    fromMillis: 1289116800000
  }
  timeZoneReplacements {
    replacedId: "America/North_Dakota/New_Salem"
    replacementId: "America/Chicago"
    fromMillis: 1067155200000
  }
  timeZoneReplacements {
    replacedId: "America/North_Dakota/Center"
    replacementId: "America/Chicago"
    fromMillis: 720000000000
  }
  timeZoneReplacements {
    replacedId: "America/Boise"
    replacementId: "America/Denver"
    fromMillis: 129114000000
  }
  timeZoneReplacements {
    replacedId: "America/Juneau"
    replacementId: "America/Anchorage"
    fromMillis: 436359600000
  }
  timeZoneReplacements {
    replacedId: "America/Sitka"
    replacementId: "America/Juneau"
    fromMillis: 341402400000
  }
  timeZoneReplacements {
    replacedId: "America/Nome"
    replacementId: "America/Anchorage"
    fromMillis: 436363200000
  }
  timeZoneReplacements {
    replacedId: "America/Metlakatla"
    replacementId: "America/Anchorage"
    fromMillis: 1547978400000
  }
  timeZoneReplacements {
    replacedId: "America/Yakutat"
    replacementId: "America/Juneau"
    fromMillis: 436356000000
  }
}
countryMappings {
  isoCode: "uy"
  timeZoneIds: "America/Montevideo"
}
countryMappings {
  isoCode: "uz"
  timeZoneIds: "Asia/Tashkent"
  timeZoneReplacements {
    replacedId: "Asia/Samarkand"
    replacementId: "Asia/Tashkent"
    fromMillis: 670366800000
  }
}
countryMappings {
  isoCode: "va"
  timeZoneIds: "Europe/Vatican"
}
countryMappings {
  isoCode: "vc"
  timeZoneIds: "America/St_Vincent"
}
countryMappings {
  isoCode: "ve"
  timeZoneIds: "America/Caracas"
}
countryMappings {
  isoCode: "vg"
  timeZoneIds: "America/Tortola"
}
countryMappings {
  isoCode: "vi"
  timeZoneIds: "America/St_Thomas"
}
countryMappings {
  isoCode: "vn"
  timeZoneIds: "Asia/Ho_Chi_Minh"
  timeZoneLinks {
    alternativeId: "Asia/Saigon"
    preferredId: "Asia/Ho_Chi_Minh"
  }
}
countryMappings {
  isoCode: "vu"
  timeZoneIds: "Pacific/Efate"
}
countryMappings {
  isoCode: "wf"
  timeZoneIds: "Pacific/Wallis"
}
countryMappings {
  isoCode: "ws"
  timeZoneIds: "Pacific/Apia"
}
countryMappings {
  isoCode: "ye"
  timeZoneIds: "Asia/Aden"
}
countryMappings {
  isoCode: "yt"
  timeZoneIds: "Indian/Mayotte"
}
countryMappings {
  isoCode: "za"
  timeZoneIds: "Africa/Johannesburg"
}
countryMappings {
  isoCode: "zm"
  timeZoneIds: "Africa/Lusaka"
}
countryMappings {
  isoCode: "zw"
  timeZoneIds: "Africa/Harare"
}`;

var jsonData = convertToJSON(data);
fs.writeFileSync('output.json', jsonData);