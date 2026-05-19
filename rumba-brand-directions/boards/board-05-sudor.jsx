// 05 · SUDOR · NEON
// Aesthetic: flash-on-camera nightlife photography, brutalist sans, mostly mono + one acid accent
// Reference vibe: 032c, Boiler Room, Wolfgang Tillmans-meets-Cali

const Board05Sudor = () => {
  const bg = '#0a0a0c';
  const fg = '#f5f3ee';
  const acid = '#d4ff00';     // single acid accent
  const muted = '#787878';

  // crude photo placeholder: gradient + halftone + grain + label
  const Photo = ({ tone, tag, label, span, h, rot, contrast }) => (
    <div style={{
      width: '100%', height: h || 260, position: 'relative', overflow: 'hidden',
      background: `${tone}`,
      transform: rot ? `rotate(${rot}deg)` : 'none',
      gridColumn: span ? `span ${span}` : undefined,
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        background: `
          radial-gradient(circle at 70% 35%, ${fg}25 0, transparent 50%),
          radial-gradient(circle at 25% 80%, ${acid}25 0, transparent 40%),
          repeating-linear-gradient(0deg, transparent 0 1px, ${bg}22 1px 2px)
        `,
        mixBlendMode: 'screen',
      }} />
      {/* halftone */}
      <div style={{
        position: 'absolute', inset: 0,
        background: `radial-gradient(circle, ${fg} 0 0.6px, transparent 1.5px) 0 0/4px 4px`,
        opacity: 0.18,
      }} />
      {/* grain */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.35,
        background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='1.4' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        mixBlendMode: 'overlay',
      }} />
      {/* tag */}
      <div style={{
        position: 'absolute', top: 12, left: 12,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10,
        letterSpacing: '0.18em', textTransform: 'uppercase',
        background: bg, color: fg, padding: '4px 8px',
      }}>{tag}</div>
      {label && <div style={{
        position: 'absolute', bottom: 12, left: 12, right: 12,
        fontFamily: "'Archivo Black', sans-serif", fontSize: 14,
        textTransform: 'uppercase', letterSpacing: '0.04em',
        color: fg, mixBlendMode: 'difference',
        lineHeight: 1.05,
      }}>{label}</div>}
      {/* timestamp */}
      <div style={{
        position: 'absolute', bottom: 10, right: 12,
        fontFamily: "'JetBrains Mono', monospace", fontSize: 9.5,
        color: acid, letterSpacing: '0.1em',
      }}>{contrast || '00:42'}</div>
    </div>
  );

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: bg, color: fg, position: 'relative', overflow: 'hidden', fontFamily: "'Space Grotesk', sans-serif" }}>

      <BoardHeader
        num="05"
        title="Sudor · Neon"
        tagline="Flash-on-camera. Sweat, blur, an acid accent. The photos do the talking — everything else gets out of the way."
        fg={fg} bg={bg} accent={acid}
        serif="'Archivo Black', sans-serif"
      />

      {/* ===== LOGO ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', borderBottom: `1px solid ${fg}22`, position: 'relative', zIndex: 2 }}>

        <div style={{ padding: '60px 56px', borderRight: `1px solid ${fg}22`, position: 'relative' }}>
          <ModuleLabel color={fg}>Primary · monolithic wordmark</ModuleLabel>

          <div style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: 240,
            lineHeight: 0.82,
            letterSpacing: '-0.05em',
            color: fg,
            marginTop: 6,
          }}>
            RUMBA<span style={{ color: acid }}>.</span>
          </div>

          <div style={{
            marginTop: 14, paddingTop: 12,
            borderTop: `1px solid ${fg}33`,
            display: 'flex', justifyContent: 'space-between',
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: muted,
          }}>
            <span>Medellín → Cali</span>
            <span>MMXXVI</span>
            <span>Index 0001</span>
            <span style={{ color: acid }}>● recording</span>
          </div>
        </div>

        {/* alt + favicon system */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <ModuleLabel color={fg}>Mark · monogram / favicon</ModuleLabel>

          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end' }}>
            <div style={{
              width: 130, height: 130, background: fg, color: bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Archivo Black', sans-serif", fontSize: 90,
              lineHeight: 1, letterSpacing: '-0.06em',
            }}>R<span style={{ color: acid }}>.</span></div>
            <div style={{
              width: 100, height: 100, background: acid, color: bg,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Archivo Black', sans-serif", fontSize: 64,
              lineHeight: 1, letterSpacing: '-0.06em',
            }}>R</div>
            <div style={{
              width: 80, height: 80, background: bg, color: fg, border: `2px solid ${fg}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Archivo Black', sans-serif", fontSize: 50,
              lineHeight: 1, letterSpacing: '-0.06em',
            }}>R</div>
          </div>

          <div style={{ marginTop: 8, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: muted, letterSpacing: '0.16em', textTransform: 'uppercase', lineHeight: 1.7 }}>
            Three weights · same letter<br/>
            One acid dot · earned, not decorative<br/>
            Logo never sits on a photo — sits next to it
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${fg}22`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '36px 56px', borderRight: `1px solid ${fg}22` }}>
          <ModuleLabel color={fg}>Color · two and a half</ModuleLabel>
          <Palette dark colors={[
            { hex: bg, name: 'Negro club', role: 'Bg' },
            { hex: fg, name: 'Bone', role: 'Text' },
            { hex: '#1f1f23', name: 'Tinta humo', role: 'Surface' },
            { hex: muted, name: 'Niebla', role: 'Mute' },
            { hex: acid, name: 'Ácido', role: 'Single accent' },
          ]} />
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={fg}>Type · brutalist sans, mono caption</ModuleLabel>
          <TypeRow font="Archivo Black" label="Display" sample="LA TOPA TOLONDRA" size={32} color={fg} letterSpacing="-0.02em" textTransform="uppercase" />
          <TypeRow font="Space Grotesk" weight={500} label="Body" sample="Cali, December 27. Doors at 23:00." size={22} color={fg} />
          <TypeRow font="JetBrains Mono" label="Mono caption" sample="N 03°25′ · W 76°31′ · 27.DEC.26" size={12} color={acid} letterSpacing="0.18em" />
        </div>
      </div>

      {/* ===== HERO MOCK · photo wall ===== */}
      <div style={{ padding: '32px 56px 40px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={fg}>In use · landing / photo wall</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 8, marginTop: 6 }}>
          {/* big lead photo with overlay text */}
          <div style={{ gridColumn: 'span 8', position: 'relative' }}>
            <Photo tone="linear-gradient(135deg, #2a1f3a, #0d0d10 60%, #1a0a1a)" tag="0001 · LA TOPA · 02:14" label="" h={400} contrast="ISO 6400" />
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'flex-end', padding: 20, pointerEvents: 'none' }}>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', color: acid, textTransform: 'uppercase' }}>
                  ● now playing
                </div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 76, lineHeight: 0.86, letterSpacing: '-0.04em', textTransform: 'uppercase', color: fg, marginTop: 8 }}>
                  Six nights<br/>in Cali<span style={{ color: acid }}>.</span>
                </div>
              </div>
            </div>
          </div>

          {/* meta panel */}
          <div style={{ gridColumn: 'span 4', background: '#15151a', padding: 22, display: 'flex', flexDirection: 'column', gap: 14, height: 400 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: muted }}>
              Trip 002 / index
            </div>
            <div style={{ borderTop: `1px solid ${fg}22`, paddingTop: 14 }}>
              {[
                ['date', 'Dec 25 → 30, 2026'],
                ['city', 'Cali, Colombia'],
                ['group', '25 dancers · max'],
                ['taken', '11 / 25'],
                ['from', 'Switzerland → CLO'],
                ['curated by', 'Julian & Janusz'],
              ].map(([k,v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: `1px solid ${fg}11`, fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, letterSpacing: '0.06em' }}>
                  <span style={{ color: muted, textTransform: 'uppercase' }}>{k}</span>
                  <span style={{ color: fg }}>{v}</span>
                </div>
              ))}
            </div>
            <button style={{
              marginTop: 'auto',
              background: acid, color: bg, border: 'none',
              padding: '16px 18px',
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 14, letterSpacing: '0.08em', textTransform: 'uppercase',
              cursor: 'pointer',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            }}>
              <span>Request a spot</span>
              <span>→</span>
            </button>
          </div>

          {/* photo grid */}
          <Photo span={3} tone="linear-gradient(160deg, #3a1820, #0d0d10)" tag="0002 · SALSÓDROMO" h={200} contrast="f/2.0" />
          <Photo span={3} tone="linear-gradient(200deg, #1a3a28, #0d0d10 70%)" tag="0003 · BARRIO OBRERO" h={200} contrast="0:38" />
          <Photo span={3} tone="linear-gradient(140deg, #3a3018, #0d0d10)" tag="0004 · MORNING CLASS" h={200} contrast="07:14" />
          <Photo span={3} tone="linear-gradient(180deg, #1a2a3a, #0d0d10)" tag="0005 · DESPEDIDA" h={200} contrast="04:32" />
        </div>
      </div>
    </div>
  );
};

window.Board05Sudor = Board05Sudor;
