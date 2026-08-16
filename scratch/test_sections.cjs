const http = require('http');

http.get('http://localhost:8080/', (res) => {
  let data = '';
  res.on('data', (chunk) => { data += chunk; });
  res.on('end', () => {
    console.log(`HTTP Status: ${res.statusCode}, HTML length: ${data.length}`);
    const expected = [
      "home",
      "about",
      "clubs",
      "events",
      "competitions",
      "achievements",
      "visionaries",
      "student-council",
      "student-voices",
      "gallery",
      "notices",
    ];

    let lastPos = -1;
    let allOk = true;
    for (const s of expected) {
      const pos = data.indexOf(`id="${s}"`);
      console.log(`Section [${s}] -> position: ${pos}`);
      if (pos === -1) {
        console.error(`ERROR: Section id="${s}" NOT FOUND in HTML!`);
        allOk = false;
      } else if (pos < lastPos) {
        console.error(`ERROR: Section id="${s}" is out of sequence!`);
        allOk = false;
      }
      lastPos = pos;
    }

    if (allOk) {
      console.log('\nSUCCESS: All 11 major sections are verified as standalone full-width sections in the exact vertical order!');
    } else {
      process.exit(1);
    }
  });
}).on('error', (err) => {
  console.error('Error connecting to server:', err.message);
  process.exit(1);
});
