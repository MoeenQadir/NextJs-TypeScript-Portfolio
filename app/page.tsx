import Banner from './components/Banner/index';
import Companies from './components/Companies/Companies';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Contact from './components/Contact/contact'


export default function Home() {
    return (
        <main>
            <Banner/>
            <Companies/>
            <Mentor/>
            <Courses/>
            <Testimonials/>
            <Contact/>
        </main>
    )
}
