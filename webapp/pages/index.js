import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'


export default function Home() {
  return <section class="resume-section" id="about">
  <div class="resume-section-content">
      <div className='spinner'>
        <h1 class="mb-0 pb-3">
            Welcome
            <span class="text-primary">!</span>
        </h1>
        {/* <div class="subheading mb-5">
            Computer Science Undergraduate · (+94)0714322888 ·
            <a href="mailto:kavindudealwis@gmail.com"> kavindudealwis@gmail.com</a>
        </div> */}
        <p class="lead mb-5">Hey there, I'm Kavindu and I'm a final year Computer Science undergraduate. I'm passionate about building applications with simplicity and usability in mind. Feel free to navigate around and find more about me!   </p>
        {/* <p className='lead mb-3'>Follow me:</p> */}
        {/* <div class="subheading mb-5">
              (+94)0714322888 ·
            <a href="mailto:kavindudealwis@gmail.com"> kavindudealwis@gmail.com</a>
        </div> */}
        <div class="social-icons">
            <a class="social-icon" href="https://www.linkedin.com/in/kavindu-de-alwis-9a2a571b1/"><i class="fab fa-linkedin-in"></i></a>
            <a class="social-icon" href="https://github.com/kavindu25"><i class="fab fa-github"></i></a>
            <a class="social-icon" href="https://twitter.com/kaviDude"><i class="fab fa-twitter"></i></a>
            <a class="social-icon" href="https://www.facebook.com/kavindupoornima.dealwis/"><i class="fab fa-facebook-f"></i></a>
        </div>
      </div>
  </div>
</section>
    // <h1 className=""><center>welcome!</center></h1>
    
  
}
