
import Image from 'next/image'

export default function ContentSection() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center mb-20">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/textures/px.jpg" alt="About Us" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">About Us</h2>
            <p className="text-lg mb-6">
              We are a team of passionate innovators dedicated to creating cutting-edge solutions for businesses worldwide. Our mission is to empower organizations with the tools they need to thrive in the digital age.
            </p>
            <p className="text-lg">
              With years of experience and a commitment to excellence, we deliver results that exceed expectations and drive growth for our clients.
            </p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src="/textures/nx.jpg" alt="Our Vision" width={600} height={400} className="rounded-lg shadow-lg" />
          </div>
          <div className="md:w-1/2 md:pr-12">
            <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg mb-6">
              We envision a world where technology seamlessly integrates with everyday life, making complex tasks simple and empowering individuals and businesses to achieve their full potential.
            </p>
            <p className="text-lg">
              Through continuous innovation and a user-centric approach, we strive to be at the forefront of technological advancements, shaping the future of digital experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
