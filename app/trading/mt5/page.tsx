import type { Metadata } from "next";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeading from "../../components/ui/SectionHeading";
import CTASection from "../../components/ui/CTASection";
import Icon from "../../components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import { profile } from "../../data/profile";

const siteUrl = "https://www.moeen.site";

export const metadata: Metadata = {
    title: "MetaTrader 5 & MQL5 Development — Moeen Ul Qadir",
    description:
        "Expert MetaTrader 5 and MQL5 developer specializing in custom Expert Advisors, automated trading bots, custom indicators, and strategy automation for research, backtesting, paper trading, and controlled live environments.",
    alternates: { canonical: "/trading/mt5" },
    openGraph: {
        type: "website",
        url: `${siteUrl}/trading/mt5`,
        siteName: "Moeen Ul Qadir Portfolio",
        title: "MetaTrader 5 & MQL5 Development — Moeen Ul Qadir",
        description:
            "Expert MetaTrader 5 and MQL5 developer specializing in custom Expert Advisors, automated trading bots, custom indicators, and strategy automation for research, backtesting, paper trading, and controlled live environments.",
        locale: "en_US",
        images: [
            {
                url: `${siteUrl}/assets/self/MOON.jpg`,
                width: 1200,
                height: 630,
                alt: "MetaTrader 5 & MQL5 Development — Moeen Ul Qadir",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "MetaTrader 5 & MQL5 Development — Moeen Ul Qadir",
        description:
            "Expert MetaTrader 5 and MQL5 developer specializing in custom Expert Advisors, automated trading bots, custom indicators, and strategy automation for research, backtesting, paper trading, and controlled live environments.",
        images: [`${siteUrl}/assets/self/MOON.jpg`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const mt5JsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "MetaTrader 5 & MQL5 Development — Moeen Ul Qadir",
    description:
        "Expert MetaTrader 5 and MQL5 developer specializing in custom Expert Advisors, automated trading bots, custom indicators, and strategy automation for research, backtesting, paper trading, and controlled live environments.",
    url: `${siteUrl}/trading/mt5`,
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

export default function MT5Page() {
    return (
        <>
            <PageHeader
                eyebrow="Trading Technology"
                title="MetaTrader 5 & MQL5 Development"
                highlight="Custom Expert Advisors & Automated Trading Systems"
                description="Building production-grade trading solutions for research, backtesting, paper trading, and controlled live environments."
            />

            <section className="container-page pb-16">
                <Reveal>
                    <p className="text-lg leading-relaxed text-slate-soft max-w-3xl">
                        I specialize in MetaTrader 5 (MT5) and MQL5 development to create custom Expert Advisors (EAs), automated trading bots, custom indicators, and strategy automation systems. My MT5 development expertise spans the complete lifecycle from strategy concept to deployment in research, backtesting, paper trading, and controlled live environments.
                    </p>
                </Reveal>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="MT5 Development Capabilities"
                        title="What I can build"
                        highlight="with MetaTrader 5 & MQL5"
                    />
                    
                    <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="robot" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Custom Expert Advisors</h4>
                                    <p className="text-sm text-mist/80">
                                        Fully automated trading systems with configurable strategy parameters, entry/exit logic, risk management, and trade management capabilities.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="code" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Custom Indicators</h4>
                                    <p className="text-sm text-mist/80">
                                        Technical indicators for market analysis including moving averages, oscillators, volume-based indicators, and custom proprietary indicators.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="zap" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Strategy Automation</h4>
                                    <p className="text-sm text-mist/80">
                                        Automated strategy execution based on predefined rules including multi-timeframe analysis, session filters, news filters, and dynamic position sizing.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="shieldLock" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Risk-Management Modules</h4>
                                    <p className="text-sm text-mist/80">
                                        Sophisticated risk management including stop-loss/take-profit systems, break-even mechanisms, trailing stops, and dynamic position sizing based on account equity and risk parameters.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="scale" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Position Sizing Systems</h4>
                                    <p className="text-sm text-mist/80">
                                        Advanced position sizing algorithms including fixed fractional, Kelly criterion, volatility-based sizing, and portfolio heat calculations.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="refreshCw" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Multi-Timeframe Strategies</h4>
                                    <p className="text-sm text-mist/80">
                                        Strategies that analyze multiple timeframes for confluence, higher timeframe trend filtering, and lower timeframe entry timing.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Integration & Deployment"
                    title="MT5 ↔ Python Integration"
                    highlight="Bridging the gap between platforms"
                />
                
                <Reveal>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <div>
                            <h4 className="font-semibold text-white mb-3">MT5 to Python Bridges</h4>
                            <p className="text-sm text-mist/80 leading-relaxed">
                                I can build robust bridges between MetaTrader 5 and Python environments for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-mist/80">
                                <li>Real-time market data streaming from MT5 to Python for analysis</li>
                                <li>Trade execution signals from Python strategies to MT5</li>
                                <li>Account monitoring and risk management in Python</li>
                                <li>Historical data export from MT5 for backtesting in Python</li>
                                <li>Automated reporting and performance analytics</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold text-white mb-3">Deployment Environments</h4>
                            <p className="text-sm text-mist/80 leading-relaxed">
                                Systems can be designed for:
                            </p>
                            <ul className="list-disc list-inside space-y-2 text-sm text-mist/80">
                                <li>Research and strategy development</li>
                                <li>Backtesting with historical data</li>
                                <li>Paper trading in simulated environments</li>
                                <li>Controlled live trading with risk limits</li>
                                <li>VPS deployment for 24/7 operation</li>
                            </ul>
                        </div>
                    </div>
                </Reveal>
            </section>

            <CTASection />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(mt5JsonLd) }}
            />
        </>
    );
}