//! moment.js locale configuration
//! locale : Kurdish (Zazakî) [ku-zza] 
//! author : OpenKurd : https://github.com/openkurd

;(function (global, factory) {
   typeof exports === 'object' && typeof module !== 'undefined'
       && typeof require === 'function' ? factory(require('../moment')) :
   typeof define === 'function' && define.amd ? define(['../moment'], factory) :
   factory(global.moment)
}(this, (function (moment) { 'use strict';

    //! moment.js locale configuration

    var monthsStrictRegex =
            /^(çile|sibat|adar|nîsan|gulan|hezîran|tîrmeh|tebax|îlon|cotmeh|mijdar|kanûn)/i,
        monthsShortStrictRegex =
            /(çile|sib\.?|adar|nîs\.?|gul\.?|hez\.?|tîr\.?|teb\.?|îlon|cot\.?|mij\.?|kan\.?)/i,
        monthsRegex =
            /(çile|sib\.?|adar|nîs\.?|gul\.?|hez\.?|tîr\.?|teb\.?|îlon|cot\.?|mij\.?|kan\.?|çile|sibat|adar|nîsan|gulan|hezîran|tîrmeh|tebax|îlon|cotmeh|mijdar|kanûn)/i,
        monthsParse = [
            /^çile/i,
            /^sib/i,
            /^adar/i,
            /^nîs/i,
            /^gul/i,
            /^hez/i,
            /^tîr/i,
            /^teb/i,
            /^îlon/i,
            /^cot/i,
            /^mij/i,
            /^kan/i,
        ];

    var fr = moment.defineLocale('fr', {
        months: 'çile_sibat_adar_nîsan_gulan_heziran_tîrmeh_tebax_îlon_cotmeh_mijdar_kanûn'.split(
            '_'
        ),
        monthsShort:
            'çile_sib._adar_nîs._gul._hez._tîr._teb._îlon_cot._mij._kan.'.split(
                '_'
            ),
        monthsRegex: monthsRegex,
        monthsShortRegex: monthsRegex,
        monthsStrictRegex: monthsStrictRegex,
        monthsShortStrictRegex: monthsShortStrictRegex,
        monthsParse: monthsParse,
        longMonthsParse: monthsParse,
        shortMonthsParse: monthsParse,
        weekdays: 'yekşem_duşem_sêşem_çarşem_pêncşem_înî_şemî'.split('_'),
        weekdaysShort: 'yek._du._sê._çar._pên._înî_şemî'.split('_'),
        weekdaysMin: 'ye_du_sê_ça_pê_în_şe'.split('_'),
        weekdaysParseExact: true,
        longDateFormat: {
            LT: 'HH:mm',
            LTS: 'HH:mm:ss',
            L: 'DD/MM/YYYY',
            LL: 'D MMMM YYYY',
            LLL: 'D MMMM YYYY HH:mm',
            LLLL: 'dddd D MMMM YYYY HH:mm',
        },
        calendar: {
            sameDay: '[îro li saet] LT',
            nextDay: '[Sibê li saet] LT',
            nextWeek: 'dddd [li saet] LT',
            lastDay: '[Duh li saet] LT',
            lastWeek: 'dddd [borî li saet] LT',
            sameElse: 'L',
        },
        relativeTime: {
            future: 'di %s çirke de',
            past: '%s çirke berê',
            s: 'çend çirkan',
            ss: '%d çirkan',
            m: 'deqek',
            mm: '%d deqan',
            h: 'saetek',
            hh: '%d saetan',
            d: 'rojek',
            dd: '%d rojan',
            w: 'heftek',
            ww: '%d heftên',
            M: 'mehek',
            MM: '%d mehan',
            y: 'salek',
            yy: '%d salan',
        },
        dayOfMonthOrdinalParse: /\d{1,2}(er|)/,
        ordinal: function (number, period) {
            switch (period) {
                // TODO: Return 'e' when day of month > 1. Move this case inside
                // block for masculine words below.
                // See https://github.com/moment/moment/issues/3375
                case 'D':
                    return number + (number === 1 ? 'er' : '');

                // Words with masculine grammatical gender: meh, sêmehî, roj
                default:
                case 'M':
                case 'Q':
                case 'DDD':
                case 'd':
                    return number + (number === 1 ? 'er' : 'e');

                // Words with feminine grammatical gender: semaine
                case 'w':
                case 'W':
                    return number + (number === 1 ? 're' : 'e');
            }
        },
        week: {
            dow: 7, // Sunday is the first day of the week.
            doy: 4, // The week that contains Jan 4th is the first week of the year.
        },
    });

    return fr;

})));
