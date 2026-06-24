'use client';

import Link from 'next/link';

export default function SurveyClosed({ awardee }) {
  return (
    <main className="wide-container">
      {/* Header Area */}
      <div style={{ marginBottom: '1.5rem', padding: '0.5rem 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <div className="blob" style={{ width: '60px', height: '60px', flexShrink: 0 }}>
            <span style={{ fontSize: '2rem' }}>🕒</span>
          </div>
          <div style={{ textAlign: 'left' }}>
            <h1 style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '0.2rem', lineHeight: 1.2 }}>
              Evaluasi Leadership Project
            </h1>
            <p style={{ color: 'var(--accent-blue)', fontSize: '0.85rem', fontWeight: 600, margin: 0 }}>
              Awardee BAKTI NUSA 15
            </p>
          </div>
        </div>
      </div>

      <div className="app-screen" style={{ marginTop: 0, padding: '2rem 1rem', minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Awardee Card Context */}
        {awardee && (
          <div className="catalog-card" style={{ marginBottom: '2rem', padding: '1rem', background: '#f3f4f6', border: '1px solid #e5e7eb', width: '100%', maxWidth: '500px' }}>
            <div className="catalog-card-header" style={{ marginBottom: 0, justifyContent: 'center' }}>
              {awardee.Foto ? (
                <img
                  src={awardee.Foto.match(/[/\\]images[/\\](.*)/) ? '/images/' + awardee.Foto.match(/[/\\]images[/\\](.*)/)[1].replace(/\\/g, '/') : awardee.Foto}
                  alt={`Foto ${awardee['Nama Awardee']}`}
                  className="profile-photo"
                  onError={(e) => { e.target.onerror = null; e.target.src = 'https://ui-avatars.com/api/?name=' + encodeURIComponent(awardee['Nama Awardee']) + '&background=dc2626&color=fff&size=200' }}
                />
              ) : (
                <img src={`https://ui-avatars.com/api/?name=${encodeURIComponent(awardee['Nama Awardee'])}&background=dc2626&color=fff&size=200`} alt={`Avatar ${awardee['Nama Awardee']}`} className="profile-photo" />
              )}
              <div className="catalog-card-info" style={{ textAlign: 'center' }}>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.3rem' }}>{awardee['Nama Awardee']}</h3>
                <div className="catalog-card-badges" style={{ justifyContent: 'center' }}>
                  <span className="profile-badge">📍 {awardee.Wilayah}</span>
                  {awardee.Kampus && <span className="profile-badge">🎓 {awardee.Kampus}</span>}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Closed Notification Card */}
        <div className="glass-card animate-fade-in" style={{
          textAlign: 'center',
          maxWidth: '500px',
          width: '100%',
          padding: '2.5rem 1.5rem',
          border: '1px solid rgba(220, 38, 38, 0.15)',
          boxShadow: '0 10px 25px rgba(220, 38, 38, 0.05)',
          borderRadius: '24px',
          background: '#fff'
        }}>
          {/* Animated Lock Icon */}
          <div className="animate-pulse-custom" style={{
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            background: 'rgba(239, 68, 68, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1.5rem auto'
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" viewBox="0 0 24 24" stroke="#dc2626" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>

          <h2 style={{
            fontSize: '1.5rem',
            color: '#111827',
            marginBottom: '1rem',
            fontWeight: 800,
            lineHeight: 1.3
          }}>
            Survey Sudah Ditutup
          </h2>
          
          <p style={{
            color: '#4b5563',
            fontSize: '0.95rem',
            lineHeight: 1.6,
            marginBottom: '1.5rem'
          }}>
            Mohon maaf, pengisian survey evaluasi untuk <strong>{awardee ? awardee['Nama Awardee'] : 'Awardee'}</strong> telah ditutup pada tanggal <strong>23 Juni pukul 23:59 WIB</strong>. Kami tidak dapat menerima data atau tanggapan baru lagi.
          </p>

          <p style={{
            color: '#9ca3af',
            fontSize: '0.85rem',
            lineHeight: 1.5,
            marginBottom: '2rem',
            fontStyle: 'italic'
          }}>
            Terima kasih banyak atas perhatian dan partisipasi yang telah Anda berikan.
          </p>

          <Link href="/" className="btn-submit" style={{
            padding: '1rem',
            fontSize: '0.95rem',
            width: '100%',
            display: 'inline-block',
            textDecoration: 'none'
          }}>
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </main>
  );
}
