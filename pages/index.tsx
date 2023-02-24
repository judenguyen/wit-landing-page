import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link'
import LaunchCountdown from "../containers/LaunchCountdown"
import Slider from "../components/Slider"
import Carousel from "../components/Carousel"
import CTA from "../components/Form"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Wit Sports Contest Page</title>
        <meta name="description" content="Wit Sports Contest" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet"/>
      </Head>
      <main className={styles.main}>
        <section className={styles.header}>
          <div className={styles.headerText}>
            <div className="container">
            <div className={styles.countdownSection}>
              <div className="row">
                  <div className="col-12">
                      <div className={styles.countdownContainerOutter}>
                        <h5>Voting Begins in</h5>
                        <div className={styles.countdownContainer}>
                        <LaunchCountdown days={8}
                              hours={23}
                              minutes={55}
                              seconds={41}
                        />
                        </div>
                      </div> 
                    </div>
                </div>
            

          </div>
              <div className="row">
                <div className="col-6">
                  <div className={styles.nextContest}>
                    <div className={styles.image}>
                      <Image
                            src={'/fresnoState.png'}
                            height={76}
                            width={76}
                            alt="Fresno State Athletics"
                          />
                    </div>
                    <div className={styles.text}>
                      <h3>Our Next Contest:</h3>
                      <h4>#Loremipsumdolor</h4>
                    </div>
                  </div>

                  <h1>Fan Moments</h1>
                  <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pharetra congue libero in finibus. Integer nulla eros, tempus.</h2>
                  <div className={styles.mobile}>
                    <div className={styles.carouselContainer}>
                      <Carousel/>
                    </div>
                  </div>
                  <div className={styles.presentedBy}>
                    <div className={styles.text}>
                      <p>Presented by <span>Pepsi</span></p>
                    </div>
                    <div className={styles.image}>
                      <Image
                              src={'/pepsiLogo.png'}
                              height={50}
                              width={50}
                              alt="Fresno State Athletics"
                      />
                    </div>

                    
                  </div>
                  <div className="row">
                    <div className="col-4">
                      <div className={styles.boxDescription}>
                        <p>Step one id libero imperdiet, lacinia arcu ac, ullamcorper ligula. Quisque ut venenatis nulla. Nulla est magna, gravida at enim eget, imperdiet lobortis.</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className={styles.boxDescription}>
                        <p>Step two pulvinar, enim lacinia congue lacinia, enim quam imperdiet nisi, vel egestas tellus nisi at ex. Phasellus euismod pellentesque.</p>
                      </div>
                    </div>
                    <div className="col-4">
                      <div className={styles.boxDescription}>
                        <p>Step three sit amet aliquam quam faucibus sed. Proin nec ultricies libero. Vivamus sed urna.</p>
                      </div>
                    </div> 
                    <CTA/>    
                  </div>
                </div>
                <div className="col-6">
                  <div className={styles.desktop}>
                    <div className={styles.carouselContainer}>
                      <Carousel/>
                    </div>
                  </div>
                  
                </div>
                </div>
            </div>
          </div>
          </section>

          <section className={styles.videos}>
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h3>Headline About Videos <span>Already Submitted</span></h3>
                  <Slider/>
                </div>
              </div>   
            </div>
            
          </section>
          <section className={styles.cta}>
            <div className="container">
                <div className="row">
                  <div className="col-12">
                    <h3>Last CTA</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur tellus tellus, pulvinar quis volutpat et, mollis vitae ligula.</p>
                    <CTA/>
                  </div>
                </div>   
              </div>
          </section>

          <section className={styles.footer}>
            <div className="container">
              <div className={styles.flex}>
                <div className="col-6">
                  <div className={styles.footerlogo}>
                    <a href="https://witcontests.com/" target="_blank">
                      <Image
                        src={'/Logo_Wit.png'}
                        height={40}
                        width={69}
                        alt="Fresno State Athletics"
                      />
                    </a>
                  <div className={styles.desktop}><p>Copyright © 2020 Wit. All rights reserved.</p></div> 
                  </div>
  
             
                </div>
                <div className="col-6">
                  <ul>
                    <li><a href="" target="_blank">FAQ</a></li>
                    <li><a href="" target="_blank">Privacy Policy</a></li>
                    <li><a href="" target="_blank">Terms of Serivce</a></li>
                  </ul>
                  <div className={styles.mobile}><p>Copyright © 2020 Wit. All rights reserved.</p></div>
                </div>
              </div>
            </div>
          </section>
            
        </main>
    </>
  )
}
