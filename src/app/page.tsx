
export default function Home() {
  return (
    <section className="bg-white py-10" style={{ fontFamily: 'Comic Sans MS, cursive, sans-serif' }}>
      <div className="container mx-auto px-4 text-center mt-10">
        <h1 className="text-5xl font-bold mb-6">Welcome to My Portfolio Website!</h1>
        <p className="text-lg text-gray-700 mb-4">
          Welcome to my personal portfolio! I&rsquo;m excited to share my journey, projects, and expertise with you. 
          As a passionate developer with a diverse skill set in front-end technologies like HTML, CSS, JavaScript, 
          and advanced frameworks like React.js and Next.js, I am constantly evolving and exploring new areas like 
          TypeScript, Python, Generative AI, the Metaverse, and Web 3.0.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          This website is a showcase of my work, where you&rsquo;ll find projects I&rsquo;ve developed, creative solutions
          I&rsquo;ve built, and insights into my journey from a developer to a Human Resource Manager at Sanofi 
          Pharmaceutical Company.
        </p>
        <p className="text-lg text-gray-700 mb-4">
          I&rsquo;m thrilled to have you here! This portfolio is a window into my world of web development, where 
          creativity meets technology. From building responsive and dynamic websites to experimenting with the
          latest trends in web development, my journey reflects my love for coding and design. With skills in
          HTML, CSS, JavaScript, and experience in advanced frameworks like React.js and Next.js, I&rsquo;m continuously
          learning and growing as a developer.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Beyond coding, I also bring a wealth of experience from diverse industries, including banking and 
          pharmaceuticals, which have shaped my problem-solving abilities and professional approach. My current
          role as a Human Resource Manager at Sanofi Pharmaceutical Company further enriches my portfolio with
          leadership and management expertise. Dive in to explore my projects, career highlights, and the unique 
          perspective I bring to the tech space!
        </p>
        <a
          href="/contact"
          className="inline-block bg-pink-400 hover:bg-pink-200 text-black font-bold py-3 px-6 rounded transition duration-200"
        >
          Let&rsquo;s Connect
        </a>
      </div>
    </section>
  );
}
