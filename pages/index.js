import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>مرحباً بك في موقعنا</title>
        <meta name="description" content="موقع إلكتروني احترافي باللغة العربية" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="container">
        <nav className="navbar">
          <div className="logo">موقعي</div>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
          <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
            <li><a href="#home">الرئيسية</a></li>
            <li><a href="#about">من نحن</a></li>
            <li><a href="#services">خدماتنا</a></li>
            <li><a href="#contact">تواصل معنا</a></li>
          </ul>
        </nav>

        <section id="home" className="hero">
          <div className="hero-content">
            <h1>مرحباً بك في موقعنا الإلكتروني</h1>
            <p>نقدم لك أفضل الحلول الرقمية والخدمات المتميزة</p>
            <button className="cta-button">ابدأ الآن</button>
          </div>
        </section>

        <section id="about" className="about">
          <h2>من نحن</h2>
          <div className="about-content">
            <p>
              نحن فريق محترف متخصص في تقديم أفضل الخدمات الرقمية. نسعى دائماً لتحقيق
              رضا عملائنا من خلال تقديم حلول مبتكرة وعالية الجودة.
            </p>
            <div className="stats">
              <div className="stat-item">
                <h3>500+</h3>
                <p>عميل سعيد</p>
              </div>
              <div className="stat-item">
                <h3>10+</h3>
                <p>سنوات خبرة</p>
              </div>
              <div className="stat-item">
                <h3>1000+</h3>
                <p>مشروع منجز</p>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <h2>خدماتنا</h2>
          <div className="services-grid">
            <div className="service-card">
              <div className="icon">🎨</div>
              <h3>التصميم الإبداعي</h3>
              <p>نصمم واجهات مستخدم جذابة وسهلة الاستخدام</p>
            </div>
            <div className="service-card">
              <div className="icon">💻</div>
              <h3>تطوير المواقع</h3>
              <p>نطور مواقع إلكترونية سريعة وآمنة</p>
            </div>
            <div className="service-card">
              <div className="icon">📱</div>
              <h3>تطبيقات الجوال</h3>
              <p>نبني تطبيقات جوال احترافية لجميع المنصات</p>
            </div>
            <div className="service-card">
              <div className="icon">🚀</div>
              <h3>التسويق الرقمي</h3>
              <p>نساعدك على الوصول لجمهورك المستهدف</p>
            </div>
            <div className="service-card">
              <div className="icon">🔒</div>
              <h3>الأمن السيبراني</h3>
              <p>نحمي بياناتك ومعلوماتك الحساسة</p>
            </div>
            <div className="service-card">
              <div className="icon">☁️</div>
              <h3>الحلول السحابية</h3>
              <p>نقدم حلول تخزين وإدارة سحابية متقدمة</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>تواصل معنا</h2>
          <form className="contact-form" onSubmit={(e) => {
            e.preventDefault()
            alert('شكراً لتواصلك معنا! سنرد عليك قريباً')
          }}>
            <input type="text" placeholder="الاسم" required />
            <input type="email" placeholder="البريد الإلكتروني" required />
            <input type="tel" placeholder="رقم الهاتف" />
            <textarea placeholder="رسالتك" rows="5" required></textarea>
            <button type="submit" className="submit-button">إرسال</button>
          </form>
        </section>

        <footer className="footer">
          <p>© 2024 جميع الحقوق محفوظة</p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">📘</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="LinkedIn">💼</a>
          </div>
        </footer>
      </div>
    </>
  )
}
