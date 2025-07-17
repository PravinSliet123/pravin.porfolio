import React, { useLayoutEffect } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'

function ProjectsMobile() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const slider = document.getElementById('slider')
    const sections = gsap.utils.toArray('.slider section')
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: slider,
        pin: true,
        stagger: 1,
        scrub: 1,
        start: "top top",
        end: () => "+=" + slider.offsetWidth,
        markers: true,
      }
    })

    tl.to(slider, {
      xPercent: -60,

    })

    sections.forEach((stop, index) => {
      tl.from(stop.querySelector('.content'), {
        yPercent: -30,
        opacity: 0,

        scrollTrigger: {
          trigger: stop.querySelector('.content'),
          scrub: true,
          start: "left right",
          end: "center center",
          containerAnimation: tl
        }
      }).from(stop.querySelector('.image'), {
        yPercent: -10,
        opacity: 0,
        ease: "elsatic.out(1,1)",
        scrollTrigger: {
          trigger: stop.querySelector('.image'),
          end: "left 60%",
          scrub: true,
          containerAnimation: tl,
          // markers: true
        }
      })
    })
  }, [])
  return (
    <div>
      <div className={styles.page3} >
        <div className={styles.outer} >
          <div className={`${styles.slider} slider`} id='slider'>
            <section className='section'>
              <div className={styles.inner}>
                <Image
                  className='image'
                  height={500}
                  width={600}
                  src={"/images/img1.webp"} />
                <div className={`${styles.content} content`}>
                  <h1>{"what we offer"}</h1>
                  <p>{"There is a wide range of things that SHARVIL, Inc. can provide. Based in Japan, which has abundant IT resources, we can provide solutions that leverage over 10 years of experience in the IT industry. In addition, experienced consultants who are familiar with how to utilize IT solutions and combine those solutions to solve customers' problems simply and efficiently.   SHARVIL's worldwide network can support customers in developing new business areas and expanding into global markets."}</p>
                </div>
              </div>

            </section>
            <section className='section'>
              <div className={styles.inner}>
                <Image
                  className='image'
                  height={500}
                  width={600}
                  src="/images/img2.jpeg" />
                <div className={`${styles.content} content`}>
                  <h1>{"IT SOLUTIONS"}</h1>
                  <p>{"We are involved in a wide range ."}</p>
                  <p>{"If it is related to IT, we will break down the problems , and together we will consider and propose ways to solve those problems efficiently."}</p>
                  <p>{"Please feel free to consult with us regarding the latest technologies from AI to IoT."}</p>
                </div>
              </div>

            </section>
            <section className='section'>
              <div className={styles.inner}>
                <Image
                  className='image'
                  height={500}
                  width={600}
                  src="/images/img3.jpeg" />
                <div className={`${styles.content} content`}>
                  <h1>{"BUSINESS Consultation"}</h1>
                  <p>{"Leveraging the experience and network SHARVIL has made over the years, we wish to fulfil all our clients' demands in One-GO."}</p>
                  <p>{"We keep our word 'Omotenashi' true and offer the best of knowledge, combining them with IT services to help Japanese companies expand overseas. We make a perfect balance by also introducing Japanese markets to our overseas clients."}</p>
                </div>
              </div>

            </section>

          </div>

        </div>
      </div>
    </div>
  )
}

export default ProjectsMobile