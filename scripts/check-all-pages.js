/* One-off: check ALL pages for ALL console errors / pageerrors (desktop + mobile). */
const puppeteer = require("puppeteer");

const base = process.argv[2] || "http://localhost:3200";
const pages = [
    "/",
    "/about",
    "/services",
    "/skills",
    "/projects",
    "/projects/pulsewatch-uptime-monitoring",
    "/contact",
    "/does-not-exist",
];

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });

    let totalIssues = 0;

    for (const path of pages) {
        for (const scenario of [
            { name: "desktop", viewport: { width: 1440, height: 900 } },
            { name: "mobile", viewport: { width: 390, height: 844, isMobile: true, hasTouch: true } },
        ]) {
            const page = await browser.newPage();
            await page.setViewport(scenario.viewport);
            const messages = [];
            page.on("console", (msg) => {
                if (msg.type() === "error") messages.push(`[console.error] ${msg.text()}`);
            });
            page.on("pageerror", (err) => messages.push(`[pageerror] ${err.message}`));

            try {
                await page.goto(base + path, { waitUntil: "networkidle2", timeout: 60000 });
                await new Promise((r) => setTimeout(r, 6000));
            } catch (e) {
                messages.push(`[nav] ${e.message}`);
            }

            if (messages.length) {
                totalIssues += messages.length;
                console.log(`\n### ${path} (${scenario.name}): ${messages.length} issue(s)`);
                messages.slice(0, 5).forEach((m) => console.log("  " + m.slice(0, 400)));
            } else {
                console.log(`${path} (${scenario.name}): OK`);
            }
            await page.close();
        }
    }

    await browser.close();
    console.log(`\nTotal issues: ${totalIssues}`);
})().catch((e) => {
    console.error("script failed:", e.message);
    process.exit(1);
});
