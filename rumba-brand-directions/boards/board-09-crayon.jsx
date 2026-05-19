// 08 · CRAYON CARIBE
// Aesthetic: hand-painted folk art / mercado signage. Warm, slightly imperfect, intimate.
// Cream + tomato + mint + cobalt + saffron. Heavy brush logo, painted shapes.

const Board08Crayon = () => {
  const cream = '#fdf3d8';
  const ink = '#231a16';
  const tomato = '#e64d2e';
  const mint = '#3aa172';
  const cobalt = '#1f5fa6';
  const saffron = '#f6c029';

  // crayon texture filter (subtle pencil grain via SVG turbulence)
  const grain = (col, op) => `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 ${col[0]}  0 0 0 0 ${col[1]}  0 0 0 0 ${col[2]}  0 0 0 ${op} 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`;

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>
      {/* texture overlay */}
      <div style={{ position: 'absolute', inset: 0, background: grain([0.14,0.10,0.08], 0.18), mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 1 }} />

      <BoardHeader
        num="08"
        title="Crayon Caribe"
        tagline="Painted by hand at the mercado. Tomato, mint, cobalt and cream. Imperfect on purpose — that&rsquo;s why it&rsquo;s warm."
        fg={ink} bg={cream} accent={tomato}
        serif="'Caveat Brush', cursive"
      />

      {/* LOGO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', borderBottom: `2px solid ${ink}`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '56px 56px 40px', borderRight: `2px solid ${ink}`, position: 'relative' }}>
          <ModuleLabel color={ink}>Primary · painted wordmark</ModuleLabel>

          {/* painted brush blob behind */}
          <div style={{
            position: 'absolute', top: 105, left: 36, width: 620, height: 180,
            background: saffron,
            borderRadius: '60% 40% 55% 45% / 50% 60% 40% 50%',
            opacity: 0.85,
            filter: 'blur(0.6px)',
          }} />
          <div style={{
            position: 'relative', marginTop: 10,
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 220, lineHeight: 0.86, color: ink,
            transform: 'rotate(-2deg)',
            letterSpacing: '-0.01em',
          }}>
            Rumba<span style={{ color: tomato }}>!</span>
          </div>

          <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 18 }}>
            <svg viewBox="0 0 80 80" style={{ width: 56, height: 56 }}>
              {/* 6-petal flower folk-art */}
              <g transform="translate(40 40)">
                {[0,60,120,180,240,300].map(a => (
                  <ellipse key={a} cx="0" cy="-18" rx="11" ry="20" fill={tomato} transform={`rotate(${a})`} />
                ))}
                <circle cx="0" cy="0" r="8" fill={saffron} />
              </g>
            </svg>
            <div style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 32, color: mint, lineHeight: 1, transform: 'rotate(-1deg)',
            }}>eventos de baile</div>
          </div>
        </div>

        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'flex-start' }}>
          <ModuleLabel color={ink}>Alt — folk-art mark · stickers</ModuleLabel>

          {/* big stamp */}
          <div style={{ position: 'relative', alignSelf: 'center' }}>
            <svg viewBox="0 0 200 200" style={{ width: 200, height: 200 }}>
              {/* daisy outer */}
              <g transform="translate(100 100)">
                {Array.from({length:12}).map((_,i)=>{
                  const a = i*30;
                  return <ellipse key={i} cx="0" cy="-72" rx="14" ry="22" fill={cobalt} transform={`rotate(${a})`} />;
                })}
                <circle cx="0" cy="0" r="58" fill={cream} stroke={ink} strokeWidth="3" />
              </g>
              <text x="100" y="92" textAnchor="middle"
                fontFamily="Caveat Brush" fontSize="42" fill={tomato} fontStyle="italic">
                Rumba
              </text>
              <text x="100" y="120" textAnchor="middle"
                fontFamily="Permanent Marker" fontSize="14" fill={ink} letterSpacing="2">
                MDE · CALI
              </text>
            </svg>
          </div>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <div style={{ background: mint, color: cream, padding: '10px 18px', borderRadius: 999, border: `2px solid ${ink}`, fontFamily: "'Permanent Marker', cursive", fontSize: 18, transform: 'rotate(-3deg)' }}>¡a bailar!</div>
            <div style={{ background: cobalt, color: cream, padding: '10px 18px', borderRadius: 999, border: `2px solid ${ink}`, fontFamily: "'Permanent Marker', cursive", fontSize: 18, transform: 'rotate(4deg)' }}>tonight 11pm</div>
          </div>
        </div>
      </div>

      {/* PALETTE + TYPE */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${ink}`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '36px 56px', borderRight: `2px solid ${ink}` }}>
          <ModuleLabel color={ink}>Color · five hand-mixed paints</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Crema lienzo', role: 'Bg' },
            { hex: ink, name: 'Tinta café', role: 'Text' },
            { hex: tomato, name: 'Tomate', role: 'Primary' },
            { hex: mint, name: 'Menta', role: 'Cool' },
            { hex: cobalt, name: 'Cobalto', role: 'Accent' },
            { hex: saffron, name: 'Azafrán', role: 'Warm' },
          ]} />
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={ink}>Type · painted display + warm grotesk</ModuleLabel>
          <TypeRow font="Caveat Brush" label="Hand display" sample="Rumba esta noche" size={48} color={tomato} />
          <TypeRow font="Permanent Marker" label="Marker accent" sample="¡a las once!" size={28} color={mint} />
          <TypeRow font="Familjen Grotesk" weight={700} label="UI / body" sample="La Topa Tolondra · Cra 33" size={18} color={ink} />
          <TypeRow font="JetBrains Mono" label="Caption" sample="VIE 24 · OCT 2026 · ENTRADA 30K" size={11} color={ink} letterSpacing="0.18em" textTransform="uppercase" />
        </div>
      </div>

      {/* MOCK · painted event flyer */}
      <div style={{ padding: '32px 56px 40px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={ink}>In use · weekly event card (painted &amp; pinned)</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 28, marginTop: 6 }}>
          {/* poster */}
          <div style={{
            background: cream,
            border: `3px solid ${ink}`,
            padding: '34px 30px',
            position: 'relative',
            transform: 'rotate(-1.4deg)',
            boxShadow: `7px 7px 0 ${cobalt}`,
            overflow: 'hidden',
          }}>
            {/* painted curves bg */}
            <svg viewBox="0 0 600 360" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.5 }}>
              <path d="M -40 240 Q 200 180, 380 230 T 700 180" stroke={mint} strokeWidth="40" fill="none" strokeLinecap="round" />
              <path d="M -40 80 Q 220 30, 380 90 T 700 60" stroke={saffron} strokeWidth="32" fill="none" strokeLinecap="round" opacity="0.7" />
            </svg>

            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: tomato, transform: 'rotate(-2deg)', display: 'inline-block' }}>
                ★ esta semana
              </div>
              <div style={{
                fontFamily: "'Caveat Brush', cursive",
                fontSize: 96, lineHeight: 0.88, color: ink, marginTop: 4, transform: 'rotate(-1deg)',
                letterSpacing: '-0.01em',
              }}>
                Salsa<br/>en vivo<span style={{ color: tomato }}>.</span>
              </div>
              <div style={{ marginTop: 14, fontFamily: "'Permanent Marker', cursive", fontSize: 24, color: cobalt, transform: 'rotate(1deg)' }}>
                con la orquesta caliente
              </div>

              <div style={{ marginTop: 30, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <div style={{ background: tomato, color: cream, padding: '8px 16px', border: `2px solid ${ink}`, fontFamily: "'Permanent Marker', cursive", fontSize: 16, transform: 'rotate(-2deg)' }}>VIE 24 · OCT</div>
                <div style={{ background: mint, color: cream, padding: '8px 16px', border: `2px solid ${ink}`, fontFamily: "'Permanent Marker', cursive", fontSize: 16, transform: 'rotate(2deg)' }}>11 PM</div>
                <div style={{ background: saffron, color: ink, padding: '8px 16px', border: `2px solid ${ink}`, fontFamily: "'Permanent Marker', cursive", fontSize: 16, transform: 'rotate(-1deg)' }}>$30K</div>
              </div>
            </div>
          </div>

          {/* program card */}
          <div style={{
            background: cobalt, color: cream,
            border: `3px solid ${ink}`,
            padding: '26px 24px',
            transform: 'rotate(1.6deg)',
            boxShadow: `6px 6px 0 ${tomato}`,
            position: 'relative',
          }}>
            <div style={{ fontFamily: "'Permanent Marker', cursive", fontSize: 18, color: saffron }}>★ programa</div>
            <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: 56, lineHeight: 0.9, color: cream, marginTop: 4 }}>
              esta<br/>semana
            </div>
            <div style={{ marginTop: 14, fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 700, fontSize: 14, lineHeight: 1.8 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${cream}66`, padding: '4px 0' }}>
                <span>JUE · Tilo</span><span style={{ color: saffron }}>10pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${cream}66`, padding: '4px 0' }}>
                <span>VIE · La Topa</span><span style={{ color: saffron }}>orquesta</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${cream}66`, padding: '4px 0' }}>
                <span>SÁB · Zaperoco</span><span style={{ color: saffron }}>11pm</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span>DOM · Pascasia</span><span style={{ color: saffron }}>matinée</span>
              </div>
            </div>
            <div style={{ marginTop: 18, fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: saffron, transform: 'rotate(-2deg)' }}>
              te esperamos →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board08Crayon = Board08Crayon;
