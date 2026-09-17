"use client";

import type { ComponentType } from "react";
import type { IconType, IconBaseProps } from "react-icons";
import * as Si from "react-icons/si";
import * as Tb from "react-icons/tb";
import * as Md from "react-icons/md";
import * as Fi from "react-icons/fi";

type IconProps = {
    name: string;
    className?: string;
    size?: number;
    color?: string;
};

const map: Record<string, IconType> = {
    arrowRight: Fi.FiArrowRight,
    arrowUp: Fi.FiArrowUp,
    arrowUpRight: Fi.FiArrowUpRight,
    external: Fi.FiExternalLink,
    mail: Fi.FiMail,
    phone: Fi.FiPhone,
    send: Fi.FiSend,
    download: Fi.FiDownload,
    mapPin: Fi.FiMapPin,
    calendar: Fi.FiCalendar,
    clock: Fi.FiClock,
    briefcase: Fi.FiBriefcase,
    graduation: Fi.FiBook,
    heart: Fi.FiHeart,
    check: Fi.FiCheck,
    checkCircle: Fi.FiCheckCircle,
    menu: Fi.FiMenu,
    x: Fi.FiX,
    globe: Fi.FiGlobe,
    terminal: Fi.FiTerminal,
    layers: Fi.FiLayers,
    grid: Fi.FiGrid,
    user: Fi.FiUser,
    home: Fi.FiHome,
    star: Fi.FiStar,
    sparkles: Tb.TbSparkles,
    locate: Tb.TbLocation,
    bolt: Tb.TbBolt,
    cube: Tb.TbBox,
    shield: Tb.TbShieldLock,
    lock: Tb.TbLock,
    key: Tb.TbKey,
    api: Tb.TbApi,
    code: Tb.TbCode,
    cloud: Tb.TbCloud,
    database: Tb.TbDatabase,
    server: Tb.TbServer2,
    cpu: Tb.TbCpu,
    bug: Tb.TbBug,
    wrench: Tb.TbTools,
    adjust: Tb.TbAdjustments,
    puzzle: Tb.TbPuzzle,
    stack: Tb.TbStack2,
    brand: Tb.TbBuilding,
    dashboard: Tb.TbLayoutDashboard,
    rocket: Tb.TbRocket,
    faceId: Tb.TbFaceId,
    robot: Tb.TbRobot,
    binary: Tb.TbBinaryTree2,
    sitemap: Tb.TbSitemap,
    route: Tb.TbRoute,
    sendQueue: Tb.TbSend,
    refresh: Tb.TbRefresh,
    alert: Tb.TbAlertTriangle,
    copy: Tb.TbCopy,
    heartSpark: Tb.TbHeart,
    brandWhatsapp: Si.SiWhatsapp,
    brandLinkedin: Si.SiLinkedin,
    brandGithub: Si.SiGithub,
    brandFacebook: Si.SiFacebook,
    brandFiverr: Si.SiFiverr,

    frontend: Md.MdDevicesOther,
    backend: Tb.TbServerCog,
    devops: Tb.TbCloudCog,
    ai: Tb.TbBrain,
    architecture: Tb.TbSitemap,
    tools: Tb.TbTool,

    typescript: Si.SiTypescript,
    react: Si.SiReact,
    next: Si.SiNextdotjs,
    html: Si.SiHtml5,
    tailwind: Si.SiTailwindcss,
    redux: Si.SiRedux,
    framer: Si.SiFramer,
    node: Si.SiNodedotjs,
    rest: Tb.TbPlugConnected,
    sql: Si.SiPostgresql,
    prisma: Si.SiPrisma,
    redis: Si.SiRedis,
    socket: Si.SiSocketdotio,
    queue: Tb.TbStack3,
    storage: Si.SiAmazons3,
    docker: Si.SiDocker,
    cicd: Si.SiGithubactions,
    linux: Si.SiLinux,
    nginx: Si.SiNginx,
    ssl: Tb.TbLock,
    aws: Si.SiAmazonwebservices,
    cloudflare: Si.SiCloudflare,
    ssh: Tb.TbTerminal2,
    llm: Si.SiOpenai,
    openrouter: Tb.TbRoute,
    rag: Tb.TbChartRadar,
    vector: Tb.TbVectorTriangle,
    agent: Tb.TbRobot,
    n8n: Si.SiN8N,
    system: Tb.TbChartInfographic,
    pattern: Tb.TbBoxModel2,
    solid: Tb.TbArrowsDiff,
    oop: Tb.TbBox,
    algo: Tb.TbBinaryTree,
    error: Tb.TbAlertCircle,
    auth: Tb.TbUserShield,
    jwt: Tb.TbKey,
    vitest: Si.SiVitest,
    playwright: Tb.TbTestPipe2,
    git: Si.SiGit,
    npm: Tb.TbBrandNpm,
    eslint: Si.SiEslint,
    debug: Tb.TbBug,
    spark: Tb.TbSparkles,
};

export default function Icon({ name, className, size = 20, color }: IconProps) {
    const Component = (map[name] ?? Md.MdOutlineAutoAwesome) as ComponentType<IconBaseProps>;
    return <Component className={className} size={size} color={color} aria-hidden="true" />;
}

export type { IconType };
export { map as iconMap };