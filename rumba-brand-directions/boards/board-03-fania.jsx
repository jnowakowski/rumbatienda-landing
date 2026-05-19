// 03 · SALSA BRAVA · FANIA REVIVAL
// Aesthetic: 1970s vinyl reissue — heavy serif, off-white stock, photo-grain, classic record-label dignity

const Board03Fania = () => {
  const cream = '#efe7d4';
  const ink = '#1d150d';
  const mustard = '#d4a017';
  const verde = '#1f6e3a';
  const rojo = '#bd2a1a';
  const azul = '#1c3d6e';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1, pointerEvents: 'none',
        background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.11  0 0 0 0 0.08  0 0 0 0 0.05  0 0 0 0.08 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        mixBlendMode: 'multiply',
      }} />

      <BoardHeader
        num="03"
        title="Salsa Brava"
        tagline="1972 Fania reissue. Heavy serif, photo-grain, the dignity of an LP back-cover."
        fg={ink} bg={cream} accent={rojo}
        serif="'DM Serif Display', serif"
      />

      {/* ===== LOGO ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', position: 'relative', zIndex: 2, borderBottom: `1.5px solid ${ink}` }}>

        {/* primary lockup */}
        <div style={{ padding: '60px 56px 48px', borderRight: `1.5px solid ${ink}`, position: 'relative' }}>
          <ModuleLabel color={ink}>Primary lockup · record label set</ModuleLabel>

          <div style={{ marginTop: 8 }}>
            <div style={{
              fontFamily: "'DM Serif Display', serif",
              fontStyle: 'italic',
              fontSize: 200,
              lineHeight: 0.85,
              letterSpacing: '-0.025em',
              color: ink,
            }}>
              Rumba<span style={{ color: rojo }}>.</span>
            </div>
            <div style={{
              marginTop: 14,
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 17,
              letterSpacing: '0.32em',
              textTransform: 'uppercase',
              color: ink,
              borderTop: `2px solid ${ink}`,
              borderBottom: `2px solid ${ink}`,
              padding: '10px 0',
              display: 'flex',
              justifyContent: 'space-between',
            }}>
              <span>SALSA</span><span>·</span><span>BAILE</span><span>·</span><span>MEDELLÍN</span>
            </div>
          </div>
        </div>

        {/* record label disc */}
        <div style={{ padding: '46px 36px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
          <ModuleLabel color={ink}>Disc label · stamp use</ModuleLabel>

          <div style={{
            position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -42%)',
            width: 320, height: 320, borderRadius: '50%',
            background: mustard,
            border: `3px solid ${ink}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: `0 12px 0 ${ink}10, inset 0 0 0 22px ${mustard}, inset 0 0 0 24px ${ink}`,
          }}>
            {/* center hole */}
            <div style={{ position: 'absolute', width: 18, height: 18, background: cream, borderRadius: '50%', border: `2px solid ${ink}` }} />
            {/* curved text */}
            <svg viewBox="0 0 320 320" style={{ position: 'absolute', inset: 0 }}>
              <defs>
                <path id="top-arc" d="M 50,160 A 110,110 0 0 1 270,160" />
                <path id="bot-arc" d="M 60,160 A 100,100 0 0 0 260,160" />
              </defs>
              <text fontFamily="Archivo Black" fontSize="14" letterSpacing="6" fill={ink}>
                <textPath href="#top-arc" startOffset="50%" textAnchor="middle">
                  EVENTOS DE BAILE
                </textPath>
              </text>
              <text fontFamily="Archivo Black" fontSize="14" letterSpacing="6" fill={ink}>
                <textPath href="#bot-arc" startOffset="50%" textAnchor="middle">
                  MEDELLÍN · COLOMBIA
                </textPath>
              </text>
            </svg>
            <div style={{ textAlign: 'center', position: 'relative', zIndex: 2, transform: 'translateY(-2px)' }}>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 64, lineHeight: 0.9, color: ink }}>Rumba</div>
              <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 10, letterSpacing: '0.28em', color: rojo, marginTop: 4 }}>MMXXVI · 33⅓</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', zIndex: 2, borderBottom: `1.5px solid ${ink}` }}>
        <div style={{ padding: '40px 56px', borderRight: `1.5px solid ${ink}` }}>
          <ModuleLabel color={ink}>Color · golden era, four-color print</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Crema vinyl', role: 'Bg' },
            { hex: ink, name: 'Tinta café', role: 'Text' },
            { hex: rojo, name: 'Cereza', role: 'Primary' },
            { hex: mustard, name: 'Mostaza', role: 'Warm' },
            { hex: verde, name: 'Verde tropical', role: 'Accent' },
            { hex: azul, name: 'Azul Caribe', role: 'Cool' },
          ]} />
        </div>

        <div style={{ padding: '40px 44px' }}>
          <ModuleLabel color={ink}>Type · the credit sleeve</ModuleLabel>
          <TypeRow font="DM Serif Display" italic label="Wordmark" sample="Rumba." size={56} color={ink} />
          <TypeRow font="Archivo Black" label="Display caps" sample="LADO A · 6 PISTAS" size={22} color={ink} letterSpacing="0.18em" />
          <TypeRow font="DM Serif Display" label="Editorial" sample="Six nights of salsa brava." size={28} color={rojo} />
          <TypeRow font="JetBrains Mono" label="Liner notes" sample="REC. CALI · DIC 2026 · STEREO" size={11} color={ink} letterSpacing="0.18em" textTransform="uppercase" />
        </div>
      </div>

      {/* ===== HERO MOCK · LP-style program ===== */}
      <div style={{ padding: '40px 56px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={ink}>In use · trip program as LP back-cover</ModuleLabel>

        <div style={{
          background: cream,
          border: `2px solid ${ink}`,
          padding: '32px 36px',
          marginTop: 6,
          display: 'grid',
          gridTemplateColumns: '180px 1fr',
          gap: 36,
          alignItems: 'start',
        }}>
          {/* mini disc */}
          <div style={{ position: 'relative' }}>
            <div style={{
              width: 180, height: 180, borderRadius: '50%',
              background: `radial-gradient(circle, ${ink} 0 20px, ${rojo} 21px 32px, ${ink} 33px 100%)`,
              border: `2px solid ${ink}`,
              position: 'relative',
              boxShadow: `0 0 0 1px ${ink}, 8px 8px 0 ${mustard}`,
            }}>
              <div style={{ position: 'absolute', inset: 0, background: `repeating-radial-gradient(circle, transparent 0 4px, ${ink}33 4px 5px)`, borderRadius: '50%' }} />
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 22, color: cream, lineHeight: 1 }}>Rumba</div>
                <div style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 8, color: mustard, letterSpacing: '0.2em', marginTop: 2 }}>VOL. 03</div>
              </div>
            </div>
            <div style={{ marginTop: 18, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: ink, opacity: 0.7, lineHeight: 1.6 }}>
              Cat. RM-026<br/>
              Stereo · 33⅓<br/>
              Pressed in Cali
            </div>
          </div>

          {/* tracklist */}
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: rojo }}>
              ★ LADO A · LA SEMANA EN CALI ★
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 44, lineHeight: 1, marginTop: 8, color: ink }}>
              Feria '26 <span style={{ color: rojo }}>·</span> six nights, one build.
            </div>

            <div style={{ marginTop: 22, borderTop: `1.5px solid ${ink}` }}>
              {[
                ['A1', 'Llegada', 'Welcome dinner · easy night', '5:14'],
                ['A2', 'Apertura', 'Class · city walk · Feria opens', '6:38'],
                ['A3', 'Salsódromo', 'Parade · the big night', '9:12'],
                ['B1', 'Barrio', 'Workshop · live orquesta', '7:24'],
                ['B2', 'Sorpresa', 'Recover · best night', '8:01'],
                ['B3', 'Despedida', 'Long breakfast · airport', '4:47'],
              ].map(([n, t, d, time]) => (
                <div key={n} style={{
                  display: 'grid',
                  gridTemplateColumns: '50px 130px 1fr 60px',
                  gap: 14, alignItems: 'baseline',
                  padding: '11px 0',
                  borderBottom: `1px dotted ${ink}66`,
                }}>
                  <span style={{ fontFamily: "'Archivo Black', sans-serif", fontSize: 13, letterSpacing: '0.1em', color: mustard }}>{n}.</span>
                  <span style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 22, color: ink }}>{t}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: ink, opacity: 0.75, letterSpacing: '0.05em' }}>{d}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, color: rojo, textAlign: 'right', letterSpacing: '0.05em' }}>{time}</span>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 18, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: ink, opacity: 0.6 }}>
                Total time · 41:16 · Limited pressing · 25 only
              </div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 22, color: verde }}>
                rsvp →
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board03Fania = Board03Fania;
