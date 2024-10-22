import { IoCodeWorking } from 'react-icons/io5';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


export default function Timeline() {
    return (
        <section className={` snap-start pt-12 px-4`}>
            <h2 className="text-3xl font-bold text-center mb-8 text-darkColor dark:text-lightColor">Our Story</h2>
            <div className='  py-4 px-12 sm:px-24 lg:px-36'>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                        // date="2011 - present"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IoCodeWorking />}
                    >
                        <h3 className="vertical-timeline-element-title"> Bridging the E-Commerce Gap</h3>
                        <h4 className="vertical-timeline-element-subtitle">Empowering Local Vendors and Customers for a Better Tomorrow</h4>
                        <p>
                        At Build Incredibles, we recognized a gap in the e-commerce world: many local vendors and customers felt overlooked. Our founder saw that while e-commerce benefited some, it wasn’t helping enough people. We wanted to change that.
                        </p>
                    </VerticalTimelineElement>

                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // date="2010 - 2011"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IoCodeWorking />}
                    >
                        <h3 className="vertical-timeline-element-title"> A Vision for Inclusive E-Commerce</h3>
                        <h4 className="vertical-timeline-element-subtitle"> Empowering Local Businesses and Simplifying Shopping for All</h4>
                        <p>
                        we want to help businesses reach a larger audience while ensuring customers can easily shop from their favorite local sellers. We believe that e-commerce should work for everyone, not just a select few. Our mission is to empower businesses to connect with customers without the usual hassles of online shopping
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        // date="2008 - 2010"
                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                        icon={<IoCodeWorking />}
                    >
                        <h3 className="vertical-timeline-element-title">Building Community Through Connection</h3>
                        <h4 className="vertical-timeline-element-subtitle"> Fostering Positive Experiences for Producers and Consumers Alike</h4>
                        <p>
                        We strive to create a community where both producers and consumers benefit, ensuring that every transaction is a positive experience. At Build Incredibles, we are dedicated to building not just websites but lasting relationships that strengthen our community.
                        </p>
                    </VerticalTimelineElement>

                </VerticalTimeline>
            </div>
        </section>
    )
}