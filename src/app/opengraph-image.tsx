import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Zyvane Technologies OS'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#050505',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'sans-serif',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-20%',
            right: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        <div
          style={{
            position: 'absolute',
            bottom: '-20%',
            left: '-10%',
            width: '800px',
            height: '800px',
            background: 'radial-gradient(circle, rgba(56,189,248,0.1) 0%, rgba(0,0,0,0) 70%)',
            borderRadius: '50%',
          }}
        />

        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '120px',
              height: '120px',
              borderRadius: '30px',
              background: 'rgba(255,255,255,0.05)',
              border: '2px solid rgba(255,255,255,0.1)',
              marginBottom: '40px',
            }}
          >
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 2 7 12 12 22 7 12 2" />
              <polyline points="2 17 12 22 22 17" />
              <polyline points="2 12 12 17 22 12" />
            </svg>
          </div>

          <h1
            style={{
              fontSize: '80px',
              fontWeight: 900,
              color: '#ffffff',
              letterSpacing: '-0.05em',
              margin: '0 0 20px 0',
              textAlign: 'center',
            }}
          >
            Zyvane Technologies
          </h1>

          <p
            style={{
              fontSize: '32px',
              fontWeight: 500,
              color: '#a1a1aa',
              letterSpacing: '-0.02em',
              margin: 0,
              textAlign: 'center',
              maxWidth: '800px',
            }}
          >
            Autonomous Infrastructure Partner.
          </p>

          <div
            style={{
              display: 'flex',
              marginTop: '60px',
              gap: '24px',
            }}
          >
            <span style={{ color: '#6366F1', fontSize: '24px', fontFamily: 'monospace' }}>[SYS_INIT]</span>
            <span style={{ color: '#38BDF8', fontSize: '24px', fontFamily: 'monospace' }}>[DATA_SYNC]</span>
            <span style={{ color: '#34D399', fontSize: '24px', fontFamily: 'monospace' }}>[DEPLOYED]</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
