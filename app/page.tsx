'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Navbar from '@/components/Navbar'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import RoomsSection from '@/components/RoomsSection'
import ServicesSection from '@/components/ServicesSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import FloatingButtons from '@/components/FloatingButtons'

declare global {
  interface Window {
    jQuery: any
    $: any
  }
}

export default function Home() {
  useEffect(() => {
    // Chờ jQuery và các plugin load xong
    const initScripts = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.vegas) {
        const $ = window.jQuery

        // NAVBAR
        $('.navbar-collapse a').on('click', function () {
          $('.navbar-collapse').collapse('hide')
        })

        // Vegas slideshow
        $('.hero-slides').vegas({
          slides: [
            { src: '/images/banner.jpg' },
            { src: '/images/room1.jpg' },
            { src: '/images/room2.jpg' },
            { src: '/images/room1.jpg' } // fallback nếu không có reception.jpg
          ],
          timer: false,
          animation: 'kenburns',
        })

        // Smooth scroll
        $('.smoothscroll').click(function (this: HTMLElement, e: any) {
          e.preventDefault()
          const el = $(this).attr('href')
          const elWrapped = $(el)
          const header_height = ($('.navbar').height() || 0) + 60

          scrollToDiv(elWrapped, header_height)
          return false

          function scrollToDiv(element: any, navheight: number) {
            const offset = element.offset()
            const offsetTop = offset.top
            const totalScroll = offsetTop - navheight

            $('body,html').animate({
              scrollTop: totalScroll
            }, 300)
          }
        })

        // Click scroll
        const sectionArray = [1, 2, 3, 4, 5]

        $.each(sectionArray, function (index: number, value: number) {
          $(document).scroll(function () {
            const sectionElement = $('#section_' + value)
            if (sectionElement.length) {
              const offsetSection = sectionElement.offset()?.top || 0 - 154
              const docScroll = $(document).scrollTop() || 0
              const docScroll1 = docScroll + 1

              if (docScroll1 >= offsetSection) {
                $('.navbar-nav .nav-link').removeClass('active')
                $('.navbar-nav .nav-link:link').addClass('inactive')
                $('.navbar-nav .nav-item .nav-link').eq(index).addClass('active')
                $('.navbar-nav .nav-item .nav-link').eq(index).removeClass('inactive')
              }
            }
          })

          $('.click-scroll').eq(index).click(function (e: any) {
            const sectionElement = $('#section_' + value)
            if (sectionElement.length) {
              const offsetClick = sectionElement.offset()?.top || 0 - 154
              e.preventDefault()
              $('html, body').animate({
                'scrollTop': offsetClick
              }, 300)
            }
          })
        })

        // Set active nav link on page load
        $('.navbar-nav .nav-item .nav-link:link').addClass('inactive')
        $('.navbar-nav .nav-item .nav-link').eq(0).addClass('active')
        $('.navbar-nav .nav-item .nav-link:link').eq(0).removeClass('inactive')
      }
    }

    // Kiểm tra jQuery đã load chưa
    if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.vegas) {
      initScripts()
    } else {
      // Nếu chưa load, đợi một chút rồi thử lại
      const checkInterval = setInterval(() => {
        if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn.vegas) {
          clearInterval(checkInterval)
          initScripts()
        }
      }, 100)

      return () => clearInterval(checkInterval)
    }
  }, [])

  return (
    <>
      <Script src="https://code.jquery.com/jquery-3.6.0.min.js" strategy="beforeInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="lazyOnload" />
      <Script src="/js/jquery.sticky.js" strategy="lazyOnload" />
      <Script src="/js/vegas.min.js" strategy="lazyOnload" />
      
      <main>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <RoomsSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
