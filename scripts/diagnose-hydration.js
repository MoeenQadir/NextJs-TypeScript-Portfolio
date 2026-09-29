/* Diagnose hydration errors: loads the page in Chromium, captures console errors,
 * and dumps the first-level children of <section> as the server sees them vs client. */
const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();

    const errors = [];
    page.on("console", (msg) => {
        const text = msg.text();
        if (
            msg.type() === "error" ||
            text.includes("Hydration") ||
            text.includes("hydration") ||
            text.includes("Did not expect") ||
            text.includes("server HTML")
        ) {
            errors.push(`[console.${msg.type()}] ${text.slice(0, 600)}`);
        }
    });
    page.on("pageerror", (err) => errors.push(`[pageerror] ${String(err).slice(0, 600)}`));

    await page.goto("http://localhost:3200/", { waitUntil: "networkidle", timeout: 60000 });
    await page.waitForTimeout(8000); // let the intro play out

    const sectionChildren = await page.evaluate(() => {
        const section = document.querySelector("section");
        if (!section) return "NO SECTION FOUND";
        return Array.from(section.children).map(
            (el) =>
                `${el.tagName.toLowerCase()}.${String(el.className).split(" ").slice(0, 3).join(".")}`
        );
    });

    console.log("=== section first-level children (client DOM) ===");
    console.log(Array.isArray(sectionChildren) ? sectionChildren.join("\n") : sectionChildren);
    console.log("\n=== errors captured ===");
    console.log(errors.length ? errors.join("\n---\n") : "NONE");

    await browser.close();
})();
