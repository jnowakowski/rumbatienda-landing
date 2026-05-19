// 01 · CARTELERA CALLEJERA
// Aesthetic: torn paste-up poster, risograph misprint, Fania-era Latin street ad

const Board01Cartelera = () => {
  const paper = '#f1e8d5';
  const ink = '#16110b';
  const rojo = '#c1121f';
  const amarillo = '#f4b400';
  const verde = '#2f7d3a';

  // halftone dot grid as CSS gradient
  const halftone = (color, op = 0.5) =>
    `radial-gradient(circle at 50% 50%, ${color} 0 1.5px, transparent 2px) 0 0/8px 8px`;

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: paper, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* paper grain */}
      <div style={{
        position: 'absolute', inset: 0,
        background: "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.16  0 0 0 0 0.11  0 0 0 0 0.04  0 0 0 0.10 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>\")",
        mixBlendMode: 'multiply', pointerEvents: 'none', zIndex: 1,
      }} />

      <BoardHeader
        num="01"
        title="Cartelera Callejera"
        tagline="Torn from the wall in Comuna 13. Riso misprint. Eight layers of glue."
        fg={ink} bg={amarillo} accent={rojo}
        serif="'Anton', sans-serif"
      />

      {/* ===== LOGO BLOCK ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 0, position: 'relative', zIndex: 2 }}>

        {/* primary logo */}
        <div style={{
          padding: '56px 56px 44px',
          borderRight: `1.5px solid ${ink}`,
          borderBottom: `1.5px solid ${ink}`,
          position: 'relative',
        }}>
          <ModuleLabel color={ink}>Primary lockup · misregister print</ModuleLabel>

          <div style={{ position: 'relative', display: 'inline-block', marginTop: 10 }}>
            {/* offset color layer for misregister */}
            <div style={{
              position: 'absolute', top: 4, left: -6,
              fontFamily: "'Anton', sans-serif",
              fontSize: 180, lineHeight: 0.85,
              color: rojo, opacity: 0.85,
              letterSpacing: '-0.04em',
              mixBlendMode: 'multiply',
            }}>RUMBA</div>
            <div style={{
              position: 'absolute', top: -3, left: 4,
              fontFamily: "'Anton', sans-serif",
              fontSize: 180, lineHeight: 0.85,
              color: verde, opacity: 0.7,
              letterSpacing: '-0.04em',
              mixBlendMode: 'multiply',
            }}>RUMBA</div>
            <div style={{
              position: 'relative',
              fontFamily: "'Anton', sans-serif",
              fontSize: 180, lineHeight: 0.85,
              color: ink,
              letterSpacing: '-0.04em',
            }}>RUMBA</div>
          </div>

          <div style={{ marginTop: 24, display: 'flex', alignItems: 'flex-end', gap: 22 }}>
            <div style={{
              fontFamily: "'Caveat Brush', cursive",
              fontSize: 38,
              color: rojo,
              transform: 'rotate(-3deg)',
              lineHeight: 1,
            }}>
              ¡eventos de baile!
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: 11,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              borderLeft: `1.5px solid ${ink}`,
              paddingLeft: 16,
              lineHeight: 1.4,
              opacity: 0.7,
            }}>
              Medellín<br/>Cali<br/>est. 2024
            </div>
          </div>
        </div>

        {/* alt mark + stamp */}
        <div style={{
          padding: '56px 48px',
          borderBottom: `1.5px solid ${ink}`,
          background: paper,
          position: 'relative',
        }}>
          <ModuleLabel color={ink}>Hand mark · single-stroke brush</ModuleLabel>
          <div style={{
            fontFamily: "'Caveat Brush', cursive",
            fontSize: 130,
            lineHeight: 0.9,
            color: ink,
            transform: 'rotate(-4deg)',
            marginTop: 10,
            letterSpacing: '-0.01em',
          }}>
            Rumba<span style={{ color: rojo }}>!</span>
          </div>

          {/* round stamp */}
          <div style={{
            position: 'absolute',
            bottom: 38, right: 40,
            width: 140, height: 140,
            border: `2.5px solid ${rojo}`,
            borderRadius: '50%',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: rojo,
            transform: 'rotate(-12deg)',
            fontFamily: "'Anton', sans-serif",
            textAlign: 'center',
            opacity: 0.85,
          }}>
            <div>
              <div style={{ fontSize: 11, letterSpacing: '0.2em', borderBottom: `1px solid ${rojo}`, paddingBottom: 4, marginBottom: 6 }}>SE BAILA</div>
              <div style={{ fontSize: 28, letterSpacing: '-0.02em' }}>SALSA<br/>BRAVA</div>
              <div style={{ fontSize: 10, letterSpacing: '0.18em', borderTop: `1px solid ${rojo}`, paddingTop: 4, marginTop: 6 }}>MDE · CALI</div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '40px 56px', borderRight: `1.5px solid ${ink}`, borderBottom: `1.5px solid ${ink}` }}>
          <ModuleLabel color={ink}>Color · prints flat on cream stock</ModuleLabel>
          <Palette colors={[
            { hex: paper, name: 'Papel crema', role: 'Bg' },
            { hex: ink, name: 'Tinta negra', role: 'Text' },
            { hex: rojo, name: 'Rojo sangre', role: 'Primary' },
            { hex: amarillo, name: 'Amarillo eléct.', role: 'Hi-vis' },
            { hex: verde, name: 'Verde menta', role: 'Accent' },
          ]} />
        </div>

        <div style={{ padding: '40px 48px', borderBottom: `1.5px solid ${ink}` }}>
          <ModuleLabel color={ink}>Type · the loud, the tight, the hand</ModuleLabel>
          <TypeRow font="Anton" label="Display" sample="SÁBADO 11PM" size={48} color={ink} letterSpacing="-0.01em" />
          <TypeRow font="Caveat Brush" label="Hand mark" sample="¡a bailar!" size={40} color={rojo} />
          <TypeRow font="JetBrains Mono" weight={500} label="Caption" sample="LA TOPA · CRA 33 · ENTRADA $30K" size={12} color={ink} letterSpacing="0.18em" textTransform="uppercase" />
        </div>
      </div>

      {/* ===== HERO MOCK · paste-up poster ===== */}
      <div style={{ padding: '40px 56px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={ink}>In use · event flyer (one of many on a wall)</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gap: 24, marginTop: 6 }}>

          {/* main poster */}
          <div style={{
            background: ink,
            color: paper,
            padding: '30px 28px 26px',
            position: 'relative',
            transform: 'rotate(-1.2deg)',
            boxShadow: '6px 6px 0 ' + rojo,
            overflow: 'hidden',
          }}>
            {/* halftone bg */}
            <div style={{ position: 'absolute', inset: 0, background: halftone(rojo), opacity: 0.4, pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', color: amarillo }}>
                ★ NOCHE 047 · VIE 24 OCT
              </div>
              <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 100, lineHeight: 0.85, marginTop: 10, letterSpacing: '-0.03em', color: amarillo }}>
                SALSA<br/>EN VIVO
              </div>
              <div style={{ fontFamily: "'Caveat Brush', cursive", fontSize: 44, color: paper, marginTop: 6, transform: 'rotate(-2deg)', display: 'inline-block' }}>
                con la <span style={{ color: rojo }}>orquesta caliente</span>
              </div>
              <div style={{
                display: 'flex', justifyContent: 'space-between', marginTop: 22,
                borderTop: `1px dashed ${paper}55`, paddingTop: 12,
                fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase',
                color: paper, opacity: 0.85,
              }}>
                <span>La Topa · Cra 33</span>
                <span>11PM</span>
                <span>Cover $30K</span>
              </div>
            </div>
          </div>

          {/* program card */}
          <div style={{
            background: amarillo,
            color: ink,
            padding: '24px 22px',
            transform: 'rotate(2deg)',
            position: 'relative',
            boxShadow: '5px 5px 0 ' + ink,
          }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.65 }}>
              Programa · Sem 43
            </div>
            <div style={{ fontFamily: "'Anton', sans-serif", fontSize: 36, lineHeight: 0.95, letterSpacing: '-0.02em', marginTop: 8, textTransform: 'uppercase' }}>
              esta<br/>semana
            </div>
            <div style={{ marginTop: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, lineHeight: 1.75, letterSpacing: '0.04em' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${ink}55`, padding: '4px 0' }}>
                <span><b>JUE</b> · Tilo</span><span>10PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${ink}55`, padding: '4px 0' }}>
                <span><b>VIE</b> · La Topa</span><span style={{ color: rojo }}>orq. viva</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: `1px dashed ${ink}55`, padding: '4px 0' }}>
                <span><b>SÁB</b> · Zaperoco</span><span>11PM</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', padding: '4px 0' }}>
                <span><b>DOM</b> · La Pascasia</span><span>matinée</span>
              </div>
            </div>
            <div style={{ marginTop: 16, fontFamily: "'Caveat Brush', cursive", fontSize: 26, color: rojo, transform: 'rotate(-2deg)' }}>
              te esperamos →
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board01Cartelera = Board01Cartelera;
