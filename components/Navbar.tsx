'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Navbar() {
  useEffect(() => {
    const handleMenuClose = () => {
      const navbarCollapse = document.getElementById('navbarNav')
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        const bsCollapse = new (window as any).bootstrap.Collapse(navbarCollapse, {
          toggle: false
        })
        bsCollapse.hide()
        document.body.classList.remove('menu-open')
      }
    }

    // Đóng menu khi click vào nav-link
    const navLinks = document.querySelectorAll('#navbarNav .nav-link')
    navLinks.forEach(link => {
      link.addEventListener('click', handleMenuClose)
    })

    // Xử lý overlay
    const navbarCollapse = document.getElementById('navbarNav')
    const overlay = document.getElementById('menu-overlay')
    
    if (navbarCollapse) {
      navbarCollapse.addEventListener('show.bs.collapse', () => {
        document.body.classList.add('menu-open')
      })
      
      navbarCollapse.addEventListener('hide.bs.collapse', () => {
        document.body.classList.remove('menu-open')
      })
    }

    if (overlay) {
      overlay.addEventListener('click', handleMenuClose)
    }

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener('click', handleMenuClose)
      })
      if (overlay) {
        overlay.removeEventListener('click', handleMenuClose)
      }
    }
  }, [])

  return (
    <>
      <div id="menu-overlay" className="menu-overlay"></div>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" href="/">
            <Image
              src="https://th.bing.com/th?id=OIP.TuTlQqAVTKIvcTLr5Wmu6AHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
              className="navbar-brand-image img-fluid"
              alt="Karaoke Dzũng"
              width={50}
              height={50}
            />
            Karaoke Dzũng
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-lg-auto">
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_1">
                  Trang chủ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">
                  Giới thiệu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">
                  Dịch vụ
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">
                  Liên hệ
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

