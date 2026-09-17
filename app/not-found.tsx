import Link from "next/link";
import Icon from "./components/ui/Icon";

export default function NotFound() {
    return (
        <section className="relative flex min-h-[80vh] items-center overflow-hidden">
            <div className="pointer-events-none absolute inset-0 grid-overlay" aria-hidden="true" />
            <div
                className="pointer-events-none absolute left-1/3 top-1/4 h-96 w-96 rounded-full bg-electric/20 blur-[130px]"
                aria-hidden="true"
            />
            <div className="container-page relative text-center">
                <p className="text-8xl font-extrabold text-gradient-gold sm:text-9xl">404</p>
                <h1 className="mt-4 text-3xl font-bold text-white sm:text-4xl">
                    This page took a wrong turn.
                </h1>
                <p className="mx-auto mt-4 max-w-lg text-slate-soft">
                    The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s
                    get you back on track.
                </p>
                <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                    <Link
                        href="/"
                        className="group inline-flex items-center gap-2 rounded-full bg-gradient-gold px-8 py-4 text-base font-semibold text-ink transition-transform hover:scale-105"
                    >
                        <Icon name="home" size={18} />
                        Back to Home
                    </Link>
                    <Link
                        href="/projects"
                        className="glass inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white transition-colors hover:border-gold/40"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}