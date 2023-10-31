import Banner from './components/Banner/index';
import Courses from './components/Courses/index';
import Mentor from './components/Mentor/index';
import Testimonials from './components/Testimonials/index';
import Newsletter from './components/Newsletter/Newsletter';
import Contact from './components/Contact/contact'


export default function Home() {
    return (
        <main>
            <Banner/>
            {/*<Companies/>*/}
            <Mentor/>
            <Courses/>
            <Testimonials/>
            {/*<Newsletter/>*/}
            <Contact/>
        </main>
    )
}
