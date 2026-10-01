import type { Metadata } from "next";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeading from "../../components/ui/SectionHeading";
import CTASection from "../../components/ui/CTASection";
import Icon from "../../components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import { profile } from "../../data/profile";

const siteUrl = "https://www.moeen.site";

export const metadata: Metadata = {
    title: "FinTech & Market Intelligence Dashboards — Moeen Ul Qadir",
    description:
        "Expert full-stack developer specializing in financial technology dashboards including crypto trading platforms, forex terminals, stock market dashboards, portfolio trackers, and real-time market intelligence solutions.",
    alternates: { canonical: "/trading/dashboards" },
    openGraph: {
        type: "website",
        url: `${siteUrl}/trading/dashboards`,
        siteName: "Moeen Ul Qadir Portfolio",
        title: "FinTech & Market Intelligence Dashboards — Moeen Ul Qadir",
        description:
            "Expert full-stack developer specializing in financial technology dashboards including crypto trading platforms, forex terminals, stock market dashboards, portfolio trackers, and real-time market intelligence solutions.",
        locale: "en_US",
        images: [
            {
                url: `${siteUrl}/assets/self/MOON.jpg`,
                width: 1200,
                height: 630,
                alt: "FinTech & Market Intelligence Dashboards — Moeen Ul Qadir",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "FinTech & Market Intelligence Dashboards — Moeen Ul Qadir",
        description:
            "Expert full-stack developer specializing in financial technology dashboards including crypto trading platforms, forex terminals, stock market dashboards, portfolio trackers, and real-time market intelligence solutions.",
        images: [`${siteUrl}/assets/self/MOON.jpg`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const fintechDashboardsJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "FinTech & Market Intelligence Dashboards — Moeen Ul Qadir",
    description:
        "Expert full-stack developer specializing in financial technology dashboards including crypto trading platforms, forex terminals, stock market dashboards, portfolio trackers, and real-time market intelligence solutions.",
    url: `${siteUrl}/trading/dashboards`,
    author: {
        "@type": "Person",
        name: profile.name,
        url: siteUrl,
    },
    publisher: {
        "@type": "Person",
        name: profile.name,
    },
};

export default function FinTechDashboardsPage() {
    return (
        <>
            <PageHeader
                eyebrow="Financial Technology"
                title="FinTech & Market Intelligence Dashboards"
                highlight="Real-Time Financial Intelligence Platforms"
                description="Building modern financial interfaces for trading, market analysis, and investment management."
            />

            <section className="container-page pb-16">
                <Reveal>
                    <p className="text-lg leading-relaxed text-slate-soft max-w-3xl">
                        I specialize in building modern financial technology dashboards that provide real-time market intelligence, trading capabilities, and investment insights. My FinTech dashboard expertise spans cryptocurrency exchanges, forex markets, stock trading platforms, and portfolio management systems using modern full-stack technologies.
                    </p>
                </Reveal>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="Dashboard Capabilities"
                        title="What I can build"
                        highlight="Financial Intelligence & Trading Interfaces"
                    />
                    
                    <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="globe" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Crypto Trading Dashboards</h4>
                                    <p className="text-sm text-mist/80">
                                        Real-time cryptocurrency trading interfaces with exchange API integration, portfolio tracking, P&L analysis, order management, and advanced charting capabilities.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="terminal" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Forex Trading Terminals</h4>
                                    <p className="text-sm text-mist/80">
                                        Professional forex trading platforms with real-time quotes, charting packages, technical indicators, economic calendars, and integrated trade execution capabilities.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="chartInfographic" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Stock Market Dashboards</h4>
                                    <p className="text-sm text-mist/80">
                                        Equity market analysis platforms with real-time quotes, fundamental data, technical analysis, screeners, watchlists, and portfolio management tools.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="wallet" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Portfolio Dashboards</h4>
                                    <p className="text-sm text-mist/80">
                                        Investment portfolio tracking systems with performance analytics, asset allocation visualization, risk metrics, rebalancing tools, and performance attribution analysis.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="zap" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Market Intelligence Dashboards</h4>
                                    <p className="text-sm text-mist/80">
                                        Real-time market monitoring systems with news feeds, social sentiment analysis, economic calendars, correlation matrices, and cross-asset analysis capabilities.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="bottts" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Trading Analytics Platforms</h4>
                                    <p className="text-sm text-mist/80">
                                        Advanced trading analytics with trade journaling, strategy performance analysis, risk metrics, behavioral finance insights, and performance attribution tools.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Technology Stack"
                    title="Modern FinTech Development Stack"
                    highlight="Building Production-Grade Financial Applications"
                />
                
                <Reveal>
                    <div className="grid gap-8 md:grid-cols-3">
                        <div>
                            <h4 className="font-semibold text-white mb-3">Frontend Technologies</h4>
                            <p className="text-sm text-mist/80 leading-relaxed">
                                Next.js 14+ • React 18 • TypeScript • Tailwind CSS • Shadcn UI • 
                                Recharts/WebSocket Charts • Framer Motion • Headless UI
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Backend Technologies</h4>
                            <p className="text-sm text-mist/80 leading-relaxed">
                                Node.js • Python/FastAPI • PostgreSQL • Redis • WebSockets • 
                                REST APIs • GraphQL • Docker • Docker Compose
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Financial Integrations</h4>
                            <p className="text-sm text-mist/80 leading-relaxed">
                                Exchange APIs (Binance, Coinbase, Kraken) • 
                                Forex Brokers (OANDA, FXCM, IG) • 
                                Stock APIs (Alpha Vantage, IEX Cloud, Polygon) • 
                                Financial Data (Yahoo Finance, Quandl, Alpha Vantage) • 
                                WebSocket Market Feeds • Economic Calendar APIs
                            </p>
                        </div>
                    </div>
                </Reveal>
            </section>

            <CTASection />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(fintechDashboardsJsonLd) }}
            />
        </>
    );
}