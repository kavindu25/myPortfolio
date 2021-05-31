import '../styles/globals.css';
import App from "next/app";
import Link from "next/link";
import Head from 'next/head';
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

//import '../public/scripts.js'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>My Portfolio</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://use.fontawesome.com/releases/v5.15.3/js/all.js" crossorigin="anonymous"></script>
        <link href="https://fonts.googleapis.com/css?family=Saira+Extra+Condensed:500,700" rel="stylesheet" type="text/css" />
        <link href="https://fonts.googleapis.com/css?family=Muli:400,400i,800,800i" rel="stylesheet" type="text/css" />
        
    </Head>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
            <Link href="about"><a className="navbar-brand js-scroll-trigger" >
                <span className="d-block d-lg-none">Clarence Taylor</span>
                <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="/profilepic2.jpg" alt="" /></span>
            </a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item"><Link  href="/about"><a className="nav-link js-scroll-trigger">About</a></Link></li>
                    <li className="nav-item"><Link href="/experience"><a className="nav-link js-scroll-trigger">Projects</a></Link></li>
                    <li className="nav-item"><Link href="/education"><a className="nav-link js-scroll-trigger">Education</a></Link></li>
                    <li className="nav-item"><Link href="/skills"><a className="nav-link js-scroll-trigger">Skills</a></Link></li>
                    <li className="nav-item"><Link href="/interests"><a className="nav-link js-scroll-trigger">Interests</a></Link></li>
                    <li className="nav-item"><Link href="/awards"><a className="nav-link js-scroll-trigger">Awards</a></Link></li>
                </ul>
            </div>
        </nav>
        <div className="container-fluid p-0">
        <Component {...pageProps} />
        </div>
    </>
}


MyApp.getInitialProps = async (appContext) => {
 
  const appProps = await App.getInitialProps(appContext);
  
   return { ...appProps }
}
    

export default MyApp
