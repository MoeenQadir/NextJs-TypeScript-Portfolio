import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/Footer';


export const metadata = {
    title: 'Moeen Ul Qadir - Software Engineer | Full Stack Developer',
    description: 'Welcome to Moeen Ul Qadir site ! I am a passionate software engineer and full stack developer skilled in a wide range of technologies. With expertise in front-end development using React.js, Next.js, and Tailwind CSS, as well as back-end development with Node.js, Express.js, and MongoDB, I specialize in building robust and scalable web applications. Explore my portfolio and reach out to discuss your project needs!',
    keywords: 'software, engineer, full stack developer, front end developer, react developer, next js, tailwind, html, css, javascript, jquery, MERN stack development, express, node, mongodb, portfolio, web development',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
