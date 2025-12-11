// -------------------------------------------
// 1. CREATE DATES
// -------------------------------------------

// Current date & time
const now = new Date();
console.log("Current Date:", now);

// Specific date from text
const d1 = new Date("2025-12-10");
console.log("From String:", d1);

// Specific date using numbers (year, monthIndex, day)
const d2 = new Date(2025, 11, 10); // December 10, 2025
console.log("From Numbers:", d2);

// Timestamp to Date
const d3 = new Date(1733870000000);
console.log("From Timestamp:", d3);


// -------------------------------------------
// 2. GET DATE PARTS
// -------------------------------------------

console.log("Year:", now.getFullYear());
console.log("Month (0-11):", now.getMonth());
console.log("Date (1-31):", now.getDate());
console.log("Day (0=Sun):", now.getDay());
console.log("Hours:", now.getHours());
console.log("Minutes:", now.getMinutes());
console.log("Seconds:", now.getSeconds());
console.log("Milliseconds:", now.getMilliseconds());
console.log("Timestamp (ms):", now.getTime());


// -------------------------------------------
// 3. SET DATE PARTS
// -------------------------------------------

const setDate = new Date();
setDate.setFullYear(2030);
setDate.setMonth(5); // June
setDate.setDate(15);
console.log("Modified Date:", setDate);


// -------------------------------------------
// 4. FORMAT DATES
// -------------------------------------------

// Default local format
console.log("Locale Date:", now.toLocaleDateString());

// Custom format
console.log(
  "Formatted:",
  now.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })
);

// Include time
console.log(
  "Date & Time:",
  now.toLocaleString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  })
);


// -------------------------------------------
// 5. TIMESTAMPS
// -------------------------------------------

console.log("Current Timestamp:", Date.now());


// -------------------------------------------
// 6. ADD / SUBTRACT DAYS
// -------------------------------------------

const addDays = new Date();
addDays.setDate(addDays.getDate() + 7); // +7 days
console.log("After 7 Days:", addDays);

const minusDays = new Date();
minusDays.setDate(minusDays.getDate() - 7); // -7 days
console.log("Before 7 Days:", minusDays);


// -------------------------------------------
// 7. COMPARE DATES
// -------------------------------------------

const a = new Date("2025-01-01");
const b = new Date("2025-02-01");

console.log("a < b:", a < b);
console.log("a > b:", a > b);
console.log("Difference in ms:", b - a);
console.log("Difference in days:", (b - a) / (1000 * 60 * 60 * 24));


// -------------------------------------------
// 8. FORMAT YYYY-MM-DD
// -------------------------------------------

function formatYMD(date) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

console.log("YYYY-MM-DD:", formatYMD(now));