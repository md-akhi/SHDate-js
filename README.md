<div dir=rtl>
  
## به نام خدا

تاریخ و زمان گاهشماری هجری شمسی(هجری خورشیدی)

</div>

## In the name of Allah, the Beneficent, the Merciful.

Date and Time Related Extensions - SH (Solar Hijri, Shamsi Hijri, Iranian Hijri)

[![GitHub license](https://img.shields.io/github/license/md-akhi/SHDateTime-js)](https://github.com/md-akhi/SHDateTime-js/blob/dev/LICENSE)
![GitHub package.json version release](https://img.shields.io/github/v/release/md-akhi/SHDateTime-js?color=green)
![GitHub package.json version dev](https://img.shields.io/github/v/tag/md-akhi/SHDateTime-js)
![ workflow](https://github.com/md-akhi/SHDateTime-js/actions/workflows/test.yaml/badge.svg?branch=dev)
![ workflow](https://github.com/md-akhi/SHDateTime-js/actions/workflows/publish.yaml/badge.svg?branch=main)

## Install

```bash
$ npm i @md-akhi/shdatetime
```

## Usage

- ES Modules:

```javascript
import SHDate from "@md-akhi/shdatetime";
var date = new SHDate();
```

- CommonJS:

```javascript
const SHDate = require("@md-akhi/shdatetime").default;
var date = new SHDate();
```

- TypeScript:

```TypeScript
const SHDate = require('@md-akhi/shdatetime');
// OR
import SHDate from '@md-akhi/shdatetime';

var date = new SHDate();
```

- ES Modules for the browser:

```html
<script type="module">
	import SHDate from "@md-akhi/shdatetime";
	var date = new SHDate();
</script>
```

- client side for the browser:

```html
<script
	type="text/javascript"
	src="/path/to/@md-akhi/shdatetime/dist/browser/shdatetime.min.js"
></script>
<script>
	var date = new SHDate();
</script>
```

jsdrive:

```shell
https://cdn.jsdelivr.net/npm/@md-akhi/shdatetime@latest/dist/browser/shdatetime.min.js
```

ubpkg:

```shell
https://unpkg.com/@md-akhi/shdatetime@latest/dist/browser/shdatetime.min.js
```

### Note

- If you want to use ES Modules in Node.js without a transpiler, you need to add `"type": "module"` in your `package.json` or change your file extension from `.js` to `.mjs`.

## API

- [format](#format)

  - Formatting a Date and Time (Date -> String)

<!-- - [parse](#parse)

  - Parsing a Date and Time string (String -> Date) -->

- [setFullYears](#setyearsdateobj-years)

  - seting years

- [setMonths](#setmonths)

  - seting months

- [setDays](#setdays)

  - seting days

- [setHours](#sethours)

  - seting hours

- [setMinutes](#setminutes)

  - seting minutes

- [setSeconds](#setseconds)

  - seting seconds

- [setMilliseconds](#setmilliseconds)

  - seting milliseconds

- [getFullYears](#getyearsdateobj-years)

  - geting years

- [getMonths](#getmonths)

  - geting months

- [getDays](#getdays)

  - geting days

- [getHours](#gethours)

  - geting hours

- [getMinutes](#getminutes)

  - geting minutes

- [getSeconds](#getseconds)

  - geting seconds

- [getMilliseconds](#getmilliseconds)

  - seting milliseconds

- [isLeapYear](#isLeapYear)

  - Whether year is leap year
