import type { Metadata } from "next";
import PageHeader from "../../components/ui/PageHeader";
import SectionHeading from "../../components/ui/SectionHeading";
import CTASection from "../../components/ui/CTASection";
import Icon from "../../components/ui/Icon";
import { Reveal, Stagger, StaggerItem } from "../../components/ui/Reveal";
import { profile } from "../../data/profile";

const siteUrl = "https://www.moeen.site";

export const metadata: Metadata = {
    title: "Python Trading & Quantitative Research — Moeen Ul Qadir",
    description:
        "Expert Python developer specializing in algorithmic trading systems, quantitative research, backtesting engines, market-data pipelines, and risk management solutions for financial markets.",
    alternates: { canonical: "/trading/python" },
    openGraph: {
        type: "website",
        url: `${siteUrl}/trading/python`,
        siteName: "Moeen Ul Qadir Portfolio",
        title: "Python Trading & Quantitative Research — Moeen Ul Qadir",
        description:
            "Expert Python developer specializing in algorithmic trading systems, quantitative research, backtesting engines, market-data pipelines, and risk management solutions for financial markets.",
        locale: "en_US",
        images: [
            {
                url: `${siteUrl}/assets/self/MOON.jpg`,
                width: 1200,
                height: 630,
                alt: "Python Trading & Quantitative Research — Moeen Ul Qadir",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Python Trading & Quantitative Research — Moeen Ul Qadir",
        description:
            "Expert Python developer specializing in algorithmic trading systems, quantitative research, backtesting engines, market-data pipelines, and risk management solutions for financial markets.",
        images: [`${siteUrl}/assets/self/MOON.jpg`],
    },
    robots: {
        index: true,
        follow: true,
    },
};

const pythonTradingJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Python Trading & Quantitative Research — Moeen Ul Qadir",
    description:
        "Expert Python developer specializing in algorithmic trading systems, quantitative research, backtesting engines, market-data pipelines, and risk management solutions for financial markets.",
    url: `${siteUrl}/trading/python`,
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

export default function PythonTradingPage() {
    return (
        <>
            <PageHeader
                eyebrow="Quantitative Trading"
                title="Python Trading & Quantitative Research"
                highlight="Complete Algorithmic Trading Pipeline"
                description="Building the complete trading pipeline from market data to performance analytics."
            />

            <section className="container-page pb-16">
                <Reveal>
                    <p className="text-lg leading-relaxed text-slate-soft max-w-3xl">
                        I specialize in Python development for algorithmic trading and quantitative research. My expertise covers the complete trading pipeline: from market data acquisition and processing to strategy logic, backtesting, risk management, paper trading, and performance analytics. I build production-grade systems that institutional quant teams and proprietary trading firms rely on.
                    </p>
                </Reveal>
            </section>

            <section className="border-t border-white/5 bg-ink-900/40 py-20 lg:py-24">
                <div className="container-page">
                    <SectionHeading
                        eyebrow="Python Trading Capabilities"
                        title="What I can build"
                        highlight="with Python for Financial Markets"
                    />
                    
                    <Stagger className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="robot" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Python Trading Bots</h4>
                                    <p className="text-sm text-mist/80">
                                        Fully automated trading systems that connect to exchange APIs, brokers, or data feeds to execute trades based on predefined strategies.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="chartInfographic" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Backtesting Engines</h4>
                                    <p className="text-sm text-mist/80">
                                        Sophisticated backtesting systems that simulate strategy performance on historical data with realistic slippage, commissions, and market impact.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="database" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Market-Data Pipelines</h4>
                                    <p className="text-sm text-mist/80">
                                        Robust data pipelines for acquiring, cleaning, validating, and storing OHLCV, tick, bid/ask, and volume data from multiple sources.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="shieldLock" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Risk-Management Engines</h4>
                                    <p className="text-sm text-mist/80">
                                        Quantitative risk management systems including VaR calculations, stress testing, portfolio optimization, and dynamic position sizing based on volatility and correlation.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="scale" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Performance Analytics</h4>
                                    <p className="text-sm text-mist/80">
                                        Comprehensive performance analysis including Sharpe ratio, Sortino ratio, maximum drawdown, win rate, profit factor, expectancy, and strategy robustness metrics.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                        
                        <StaggerItem>
                            <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-ink-700/60 p-5">
                                <Icon name="zap" size={24} className="mt-0.5 shrink-0 text-gold" />
                                <div>
                                    <h4 className="font-semibold text-white mb-1">Strategy Research & Optimization</h4>
                                    <p className="text-sm text-mist/80">
                                        Systematic strategy research including parameter optimization, walk-forward analysis, Monte Carlo simulation, and robustness testing across multiple market regimes.
                                    </p>
                                </div>
                            </div>
                        </StaggerItem>
                    </Stagger>
                </div>
            </section>

            <section className="container-page section-space">
                <SectionHeading
                    eyebrow="Complete Trading Pipeline"
                    title="From Market Data to Performance Analytics"
                    highlight="End-to-End Algorithmic Trading Systems"
                />
                
                <Reveal>
                    <div className="text-center">
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="database" size={20} className="text-gold" />
                                <span>Market Data</span>
                            </div>
                            <div className="w-1/2 h-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="zap" size={20} className="text-gold" />
                                <span>Data Processing</span>
                            </div>
                            <div className="w-1/2 h-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="robot" size={20} className="text-gold" />
                                <span>Strategy Logic</span>
                            </div>
                            <div className="w-1/2 h-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="shieldLock" size={20} className="text-gold" />
                                <span>Risk Management</span>
                            </div>
                            <div className="w-1/2 h-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="terminal" size={20} className="text-gold" />
                                <span>Paper Trading</span>
                            </div>
                            <div className="w-1/2 h-px bg-white/10" />
                            <div className="flex items-center gap-2 text-sm text-mist/80">
                                <Icon name="chartInfographic" size={20} className="text-gold" />
                                <span>Performance Analytics</span>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </section>

            <CTASection />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(pythonTradingJsonLd) }}
            />
        </>
    );
}