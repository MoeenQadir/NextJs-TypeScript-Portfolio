/* Capture hydration errors across multiple viewport/device scenarios. */
const puppeteer = require("puppeteer");

const scenarios = [
    { name: "desktop-1440", viewport: { width: 1440, height: 900 } },
    { name: "mobile-390", viewport: { width: 390, height: 844, isMobile: true, hasTouch: true } },
];

const target = process.argv[2] || "http://localhost:3000";

(async () => {
    const browser = await puppeteer.launch({
        headless: "new",
        executablePath: "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
    });

    for (const scenario of scenarios) {
        const page = await browser.newPage();
        await page.setViewport(scenario.viewport);
        const messages = [];
        page.on("console", (msg) => {
            if (["error", "warning"].includes(msg.type())) messages.push(msg.text());
        });
        page.on("pageerror", (err) => messages.push(`[pageerror] ${err.message}`));

        await page.goto(target, { waitUntil: "networkidle0", timeout: 60000 });
        await new Promise((r) => setTimeout(r, 8000));

        const relevant = messages.filter((m) =>
            /hydrat|mismatch|did not expect|expected server html|text content|error while hydrating|Minified React error/i.test(m)
        );
        console.log(`\n### ${scenario.name}: ${relevant.length ? "ISSUES FOUND" : "clean"}`);
        relevant.slice(0, 4).forEach((m) => console.log(m.slice(0, 1500)));
        await page.close();
    }
    await browser.close();
})().catch((e) => {
    console.error("script failed:", e.message);
    process.exit(1);
});
