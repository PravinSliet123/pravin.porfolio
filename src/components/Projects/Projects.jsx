import styles from './style.module.css'
import { useState, useEffect, useRef } from 'react';
import Project from './components/project';
import { motion } from 'framer-motion';
import gsap from 'gsap';

const projects = [
  {
    title: "MBS-Autoavenue",
    src: "mbs.png",
    color: "#1b6C8C",
    url: "https://www.mbsautoavenue.com",
    subTitle: "Design & CRM Development"
  },
  {
    title: "Hillside",
    src: "ios.png",
    color: "#8C8C8C",
    subTitle: "Android App Development",
    url: "http://hillside-kyoto.com/",

  },
  {
    title: "Kyoto",
    src: "kyoto.png",
    color: "#865803",
    subTitle: "Concept & Development",
    url: "https://kyoto-yano.jp/",

  },
  {
    title: "L-regi",
    src: "lregi.png",
    color: "#D3ECD7",
    subTitle: "Design & SaaS Development",
    url: "https://l-regi.com/",

  },
  {
    title: "THE DECK",
    src: "website.png",
    color: "#706D63",
    subTitle: "Website & Concept",
    url: "https://www.mbsautoavenue.com",

  },
  {
    title: "SHARVIL",
    src: "sharvil.png",
    color: "#8fd0ca",
    subTitle: "Website & Concept",
    url: "https://sharvil-jp.com/",

  },
  {
    title: "Makdfs",
    src: "makdfs.png",
    color: "#8fd0ca",
    subTitle: "Website & Creative",
    url: "https://makdfs.com/",

  },
  {
    title: "V-Interview",
    src: "interview.png",
    color: "rgba(40, 99, 177,0.75)",
    subTitle: "Software Development",
    url: "https://virtual-interview-lemon.vercel.app/dashboard",

  }
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } }
}

export default function Home() {

  const [modal, setModal] = useState({ active: false, index: 0 })
  const [isMobile, setIsMobile] = useState(false)
  const [bgColor, setBgColor] = useState()
  const { active, index } = modal;
  const modalContainer = useRef(null);
  const cursor = useRef(null);
  const cursorLabel = useRef(null);


  let xMoveContainer = useRef(null);
  let yMoveContainer = useRef(null);
  let xMoveCursor = useRef(null);
  let yMoveCursor = useRef(null);
  let xMoveCursorLabel = useRef(null);
  let yMoveCursorLabel = useRef(null);

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", { duration: 0.8, ease: "power3" })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", { duration: 0.8, ease: "power3" })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })

  }
  return (
    <div>

      <div
        className={` ${!bgColor && styles.defaultColor} ${styles.projects}`}
        style={{
          backgroundColor: bgColor
        }}
        onMouseMove={(e) => {
          moveItems(e.clientX, e.clientY)
        }}

        onMouseLeave={() => {
          setModal({ active: false })
          setBgColor('')
        }} >
        <div className={styles.body}>
          {
            projects.map((project, index) => {
              return <Project index={index} title={project.title} manageModal={manageModal} setBgColor={setBgColor} key={index} color={project.color} subTitle={project.subTitle} />
            })
          }
        </div>
        {/* <Rounded height={60} width={170}>
          <Link href={'https://www.canva.com/design/DAFiTsBqbJ4/ObTRtfVcovm9IUHIhmo8HQ/view?utm_content=DAFiTsBqbJ4&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink#2'} target='_blank' className={styles.morework}>More work</Link>
        </Rounded> */}
        <>
          <motion.div ref={modalContainer} style={{
            border:"2px solid #ccc",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          }} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={`${styles.modalContainer}`}>
            <div style={{ top: index * -100 + "%" }} className={styles.modalSlider} onClick={(e) => {

            }}>
              {
                projects.map((project, index) => {
                  const { src, color, url } = project

                  return <div


                    className={styles.modal} style={{ backgroundColor: color }}

                    key={`modal_${index}`}>
                    <img
                      // onClick={() => { handlreRedirect(url) }}
                      src={`/images/${src}`}
                      width={300}
                      height={0}
                      alt="img"
                    />
                    <div className={styles.cursor} >
                      <a
                        style={{
                          zIndex: 56997,
                          textDecoration: "none",
                          color: "white"
                        }}
                        href={url}
                        target='_blank'
                      >View</a>

                    </div>
                  </div>
                })
              }
            </div>
          </motion.div>



        </>
        <div
          onMouseEnter={(e) => { manageModal(false, index, e.clientX, e.clientY) }}
          style={{
            height: "200px",
            width: "100%",
            backgroundColor: "transparent",
            marginTop: "-150px"

          }}
        >

        </div>
      </div>

    </div>
  )
}
