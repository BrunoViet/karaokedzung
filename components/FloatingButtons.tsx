'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <>
      <style jsx>{`
        @keyframes shakeAndScale {
          0%, 100% {
            transform: translateX(0) scale(1);
          }
          10%, 30%, 50%, 70%, 90% {
            transform: translateX(-3px) scale(1.05);
          }
          20%, 40%, 60%, 80% {
            transform: translateX(3px) scale(1.05);
          }
        }

        .shake-animation {
          animation: shakeAndScale 2s infinite;
        }

        .shake-animation:hover {
          animation: none;
          transform: scale(1.15) !important;
        }
      `}</style>
      <div
        className="floating-buttons"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          gap: '15px',
          alignItems: 'flex-end',
        }}
      >
        {/* Nút gọi điện trực tiếp */}
        <a
          href="tel:+84906404048"
          className="shake-animation"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #25D366, #128C7E)',
            border: 'none',
            color: '#fff',
            fontSize: '24px',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(37, 211, 102, 0.4)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(37, 211, 102, 0.6)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(37, 211, 102, 0.4)'
          }}
          aria-label="Gọi điện trực tiếp"
        >
          <i className="bi-telephone-fill"></i>
        </a>

        {/* Nút Zalo */}
        <a
          href="https://zalo.me/0906404048"
          target="_blank"
          rel="noopener noreferrer"
          className="shake-animation"
          style={{
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textDecoration: 'none',
            overflow: 'hidden',
            padding: '8px',
            position: 'relative',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.3)'
            e.currentTarget.style.transform = 'scale(1.1)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)'
            e.currentTarget.style.transform = 'scale(1)'
          }}
          aria-label="Chat Zalo"
        >
          <Image
            src="/images/zalo.png"
            alt="Zalo"
            width={34}
            height={34}
            unoptimized
            style={{
              width: '34px',
              height: '34px',
              objectFit: 'contain',
              position: 'relative',
              zIndex: 1,
            }}
          />
        </a>

        {/* Nút quay về đầu trang - ở dưới cùng */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #BC6C25, #DDA15E)',
              border: 'none',
              color: '#fff',
              fontSize: '24px',
              cursor: 'pointer',
              boxShadow: '0 4px 15px rgba(188, 108, 37, 0.4)',
              transition: 'all 0.3s ease',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.1)'
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(188, 108, 37, 0.6)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)'
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(188, 108, 37, 0.4)'
            }}
            aria-label="Quay về đầu trang"
          >
            <i className="bi-arrow-up-circle-fill"></i>
          </button>
        )}
      </div>
    </>
  )
}
