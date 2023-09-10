import { assert, expect } from "chai";
import { it, describe } from "mocha";

import * as UntilString from "./Until-String.js";
import * as UntilDate from "./Until-Date.js";
import SHDate from "../src/base.js";

const merge = (target: any, source: any) => {
	// Iterate through `source` properties and if an `Object` set property to merge of `target` and `source` properties
	for (const key of Object.keys(source)) {
		if (source[key] instanceof Object)
			Object.assign(source[key], merge(target[key], source[key]));
	}
	// Join `target` and modified `source`
	Object.assign(target || {}, source);
	return target;
};
const Until = merge(UntilString.DateString, UntilDate.solarDate);
// console.log(Until);
const tests = (isarray = false, ...data: any) => {
	if (!isarray) console.log(data);
	else if (JSON.stringify(data[0]) !== JSON.stringify(data[1]))
		console.log(data);
};

describe("String", () => {
	it("correctly Date Day Of Year YYYY.doy", () => {
		Until.forEach(({ sdata }: any) => {
			const sdate = new SHDate(sdata.DateDoy);
			const doy = sdate.getDayOfYear();
			const year = sdate.getFullYear();
			assert.equal(year, sdata.solar[0]);
			assert.equal(doy, sdata.Doy);
		});
	});

	it("correctly Date Week Of Year YYYY-Ww-D", () => {
		Until.forEach(({ sdata }: any) => {
			const sdate = new SHDate(sdata.DateWoy);
			const woy = sdate.getWeekOfYear();
			const year = sdate.getFullYear();
			const dow = sdate.getDay();
			assert.deepEqual(woy, sdata.Woy);
			assert.equal(year, sdata.solar[0]);
			assert.equal(dow, sdata.Dow);
		});
	});

	it("correctly Date YYYY-MM-DD HH:II:SS", () => {
		Until.forEach(({ sdata, sdate }: any) => {
			const [dyears, dmonths, ddays, dhours, dminutes, dseconds] = sdate;
			const date = new SHDate(sdata.DateTime);
			const years = date.getFullYear();
			const months = date.getMonth() + 1;
			const days = date.getDate();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			assert.deepEqual(
				[years, months, days, hours, minutes, seconds],
				[dyears, dmonths, ddays, dhours, dminutes, dseconds]
			);
		});
	});

	it("correctly Date YYYY/MM/DD ", () => {
		Until.forEach(({ sdata, sdate }: any) => {
			const date = new SHDate(sdata.DateWithSlash);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			const milliseconds = date.getMilliseconds();
			assert.deepEqual([years, months, days], sdata.solar);
		});
	});

	it("correctly Date YYYY ", () => {
		Until.forEach(({ sdata }: any) => {
			const date = new SHDate(sdata.DateYear);
			const years = date.getFullYear();
			const months = date.getMonth() + 1;
			const days = date.getDate();
			assert.equal(years, sdata.solar[0]);
		});
	});

	it("correctly Date YYYYMMDD ", () => {
		Until.forEach(({ sdata, sdate }: any) => {
			const date = new SHDate(sdata.DateWithOutSlash);
			const years = date.getFullYear();
			const months = date.getMonth() + 1;
			const days = date.getDate();
			const hours = date.getHours();
			const minutes = date.getMinutes();
			const seconds = date.getSeconds();
			const milliseconds = date.getMilliseconds();
			assert.deepEqual(
				[years, months, days, hours, minutes, seconds, milliseconds],
				sdate
			);
		});
	});

	// it("correctly Date Abbr YYYY[.-]M ", () => {
	// 	Until.forEach(({ sdata }: any) => {
	// 		const date = new SHDate(sdata.DateYearMonth);
	// 		const years = date.getFullYear();
	// 		const months = date.getMonth();
	// 		const days = date.getDate();
	// 		tests(true, [years, months, days], sdata.solar);
	// 		if (sdata.solar[2] == 1 && sdata.solar[1] == months) {
	// 			assert.deepEqual([years, months, days], sdata.solar);
	// 		} else {
	// 			assert.notDeepEqual([years, months, days], sdata.solar);
	// 		}
	// 	});
	// });

	// it("correctly Date Abbr M ", () => {
	// 	Until.forEach(({ sdata, sdate }: any) => {
	// 		const date = new SHDate(sdata.DateMonth);
	// 		const years = date.getFullYear();
	// 		const months = date.getMonth() + 1;
	// 		const days = date.getDate();
	// 		const hours = date.getHours();
	// 		const minutes = date.getMinutes();
	// 		const seconds = date.getSeconds();
	// 		const milliseconds = date.getMilliseconds();
	// 		if (
	// 			JSON.stringify([
	// 				years,
	// 				months,
	// 				days,
	// 				hours,
	// 				minutes,
	// 				seconds,
	// 				milliseconds
	// 			]) !== JSON.stringify(sdate)
	// 		)
	// 			console.log(
	// 				[years, months, days, hours, minutes, seconds, milliseconds],
	// 				sdate
	// 			);
	// 		assert.deepEqual(
	// 			[years, months, days, hours, minutes, seconds, milliseconds],
	// 			sdate
	// 		);
	// 	});
	// });

	it("correctly Date Abbr DD, M YYYY", () => {
		Until.forEach(({ sdata, sdate }: any) => {
			const date = new SHDate(sdata.DateAber);
			const years = date.getFullYear();
			const months = date.getMonth();
			const days = date.getDate();
			tests(true, [years, months, days], sdata.solar);
			assert.deepEqual([years, months, days], sdata.solar);
		});
	});

	// it("correctly Date Abbr DayName , DD M YYYY", () => {
	// 	Until.forEach(({ sdata, sdate }: any) => {
	// 		const date = new SHDate(sdata.DateAberWithDate);
	// 		const years = date.getFullYear();
	// 		const months = date.getMonth() + 1;
	// 		const days = date.getDate();
	// 		const hours = date.getHours();
	// 		const minutes = date.getMinutes();
	// 		const seconds = date.getSeconds();
	// 		const milliseconds = date.getMilliseconds();
	// 		if (
	// 			JSON.stringify([
	// 				years,
	// 				months,
	// 				days,
	// 				hours,
	// 				minutes,
	// 				seconds,
	// 				milliseconds
	// 			]) !== JSON.stringify(sdate)
	// 		)
	// 			console.log(
	// 				[years, months, days, hours, minutes, seconds, milliseconds],
	// 				sdate
	// 			);
	// 		assert.deepEqual(
	// 			[years, months, days, hours, minutes, seconds, milliseconds],
	// 			sdate
	// 		);
	// 	});
	// });
});
