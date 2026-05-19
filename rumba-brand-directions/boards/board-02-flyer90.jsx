// 02 · FLYER 90s · TROPICAL MAXIMALISM
// Aesthetic: photocopied club flyer, gradient mesh, chrome bevel, comic-y, intentional bad-taste-but-loved

const Board02Flyer90 = () => {
  const bg = '#0e0420';
  const fg = '#fff6e8';
  const hotPink = '#ff2d87';
  const cyan = '#00e5ff';
  const lime = '#c8ff2d';
  const magenta = '#c800ff';
  const orange = '#ff7a00';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: bg, color: fg, position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>
      {/* mesh gradient bg */}
      <div style={{ position: 'absolute', inset: 0,
        background: `
          radial-gradient(at 12% 10%, ${magenta}55 0, transparent 45%),
          radial-gradient(at 90% 8%, ${cyan}55 0, transparent 40%),
          radial-gradient(at 80% 92%, ${hotPink}66 0, transparent 45%),
          radial-gradient(at 8% 88%, ${lime}33 0, transparent 40%),
          ${bg}
        `,
      }} />
      {/* star field */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.5,
        background: `radial-gradient(circle, ${fg} 0 0.6px, transparent 1px) 0 0/30px 30px, radial-gradient(circle, ${fg} 0 0.5px, transparent 1px) 15px 15px/30px 30px`,
      }} />

      <BoardHeader
        num="02"
        title="Flyer '99"
        tagline="Photocopied at the corner store. Gradient mesh, chrome bevel, no apologies."
        fg={fg} bg="transparent" accent={lime}
        serif="'Honk', sans-serif"
      />

      {/* ===== LOGO ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', position: 'relative', zIndex: 2, borderBottom: `1.5px solid ${fg}33` }}>
        <div style={{ padding: '56px', borderRight: `1.5px solid ${fg}33`, textAlign: 'center', position: 'relative' }}>
          <ModuleLabel color={fg}>Primary · chrome bevel + drop-shadow</ModuleLabel>

          <div style={{
            fontFamily: "'Honk', sans-serif",
            fontSize: 200,
            lineHeight: 1,
            letterSpacing: '-0.01em',
            background: `linear-gradient(180deg, ${cyan} 0%, ${fg} 35%, ${hotPink} 55%, ${orange} 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextStroke: `2px ${bg}`,
            backgroundClip: 'text',
            color: 'transparent',
            filter: `drop-shadow(6px 6px 0 ${magenta}) drop-shadow(0 0 40px ${hotPink}88)`,
            marginTop: 8,
          }}>
            Rumba!
          </div>
          <div style={{
            fontFamily: "'Bungee', sans-serif",
            fontSize: 14,
            letterSpacing: '0.32em',
            marginTop: 8,
            color: lime,
            textShadow: `2px 2px 0 ${magenta}`,
          }}>
            ✦ MEDELLÍN · CALI · MMXXVI ✦
          </div>
        </div>

        <div style={{ padding: '56px 44px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 30, alignItems: 'center' }}>
          <ModuleLabel color={fg}>Sticker badges</ModuleLabel>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 22, alignItems: 'center' }}>
            <div style={{
              fontFamily: "'Bungee Shade', sans-serif",
              fontSize: 56,
              color: lime,
              transform: 'rotate(-5deg)',
              textShadow: `4px 4px 0 ${hotPink}, 8px 8px 0 ${cyan}`,
              letterSpacing: '0.02em',
            }}>RUMBA</div>

            <div style={{
              padding: '14px 26px',
              background: `linear-gradient(135deg, ${hotPink}, ${magenta})`,
              border: `3px solid ${fg}`,
              borderRadius: 999,
              transform: 'rotate(6deg)',
              fontFamily: "'Bungee', sans-serif",
              fontSize: 18,
              color: fg,
              letterSpacing: '0.08em',
              boxShadow: `4px 4px 0 ${bg}, 0 0 30px ${hotPink}66`,
            }}>★ TONIGHT ★</div>

            <div style={{
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 38,
              color: cyan,
              transform: 'rotate(-3deg)',
              textShadow: `3px 3px 0 ${bg}`,
            }}>se baila!</div>
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1.5px solid ${fg}33`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '36px 56px', borderRight: `1.5px solid ${fg}33` }}>
          <ModuleLabel color={fg}>Color · sample tropical loud</ModuleLabel>
          <Palette dark colors={[
            { hex: bg, name: 'Tinta noche', role: 'Bg' },
            { hex: hotPink, name: 'Rosa shock', role: 'Primary' },
            { hex: cyan, name: 'Cian piscina', role: 'Cool' },
            { hex: lime, name: 'Lima neón', role: 'Hi-vis' },
            { hex: magenta, name: 'Magenta', role: 'Accent' },
            { hex: orange, name: 'Naranja sol', role: 'Warm' },
          ]} />
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={fg}>Type · everything turned up</ModuleLabel>
          <TypeRow font="Honk" label="Hero" sample="Rumba!" size={48} color={hotPink} />
          <TypeRow font="Bungee" label="Display caps" sample="VIERNES 11PM" size={26} color={cyan} letterSpacing="0.05em" />
          <TypeRow font="Permanent Marker" label="Marker" sample="¡a bailar mi gente!" size={28} color={lime} />
          <TypeRow font="Inter" weight={700} label="UI body" sample="Tap to RSVP" size={16} color={fg} />
        </div>
      </div>

      {/* ===== HERO MOCK · FLYER ===== */}
      <div style={{ padding: '40px 56px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={fg}>In use · IG story flyer</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, marginTop: 6 }}>

          {/* Flyer A — orange/pink */}
          <div style={{
            aspectRatio: '9 / 14',
            background: `linear-gradient(160deg, ${orange} 0%, ${hotPink} 50%, ${magenta} 100%)`,
            border: `4px solid ${fg}`,
            padding: 18,
            position: 'relative',
            transform: 'rotate(-2deg)',
            boxShadow: `6px 6px 0 ${cyan}`,
            overflow: 'hidden',
          }}>
            <div style={{ fontFamily: "'Bungee', sans-serif", fontSize: 12, letterSpacing: '0.18em', color: bg }}>★ NOCHE #047</div>
            <div style={{ fontFamily: "'Honk', sans-serif", fontSize: 80, lineHeight: 0.85, color: lime, WebkitTextStroke: `2px ${bg}`, marginTop: 8, textShadow: `4px 4px 0 ${bg}` }}>SALSA</div>
            <div style={{ fontFamily: "'Honk', sans-serif", fontSize: 80, lineHeight: 0.85, color: fg, WebkitTextStroke: `2px ${bg}`, textShadow: `4px 4px 0 ${bg}` }}>BRAVA</div>
            <div style={{ position: 'absolute', bottom: 18, left: 18, right: 18, fontFamily: "'Permanent Marker', cursive", fontSize: 22, color: cyan, transform: 'rotate(-3deg)', textShadow: `2px 2px 0 ${bg}` }}>
              vie 24 · 11pm
            </div>
            <div style={{ position: 'absolute', top: 14, right: 14, width: 60, height: 60, borderRadius: '50%', background: lime, border: `3px solid ${bg}`, fontFamily: "'Bungee', sans-serif", fontSize: 10, color: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', transform: 'rotate(12deg)', lineHeight: 1.1 }}>
              FREE<br/>before<br/>11pm
            </div>
          </div>

          {/* Flyer B — Cali Feria */}
          <div style={{
            aspectRatio: '9 / 14',
            background: bg,
            border: `4px solid ${fg}`,
            padding: 18,
            position: 'relative',
            transform: 'rotate(1.5deg)',
            boxShadow: `6px 6px 0 ${hotPink}`,
            overflow: 'hidden',
          }}>
            <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 50% 70%, ${magenta}99 0, transparent 60%), radial-gradient(circle at 50% 30%, ${cyan}66 0, transparent 50%)` }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: "'Bungee', sans-serif", fontSize: 11, letterSpacing: '0.2em', color: lime }}>★ TRIP 002 · DIC 26</div>
              <div style={{
                fontFamily: "'Honk', sans-serif",
                fontSize: 88, lineHeight: 0.85,
                marginTop: 28,
                background: `linear-gradient(180deg, ${lime} 0%, ${cyan} 50%, ${hotPink} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextStroke: `2px ${fg}`,
                backgroundClip: 'text',
                color: 'transparent',
                textShadow: 'none',
                filter: `drop-shadow(4px 4px 0 ${fg})`,
                letterSpacing: '-0.01em',
              }}>FERIA<br/>DE CALI</div>
              <div style={{ position: 'absolute', bottom: -130, right: -10, fontFamily: "'Permanent Marker', cursive", fontSize: 28, color: fg, transform: 'rotate(-4deg)' }}>
                6 días<br/>25 personas
              </div>
            </div>
          </div>

          {/* Flyer C — sticker mash */}
          <div style={{
            aspectRatio: '9 / 14',
            background: lime,
            border: `4px solid ${bg}`,
            padding: 18,
            position: 'relative',
            transform: 'rotate(-3deg)',
            boxShadow: `6px 6px 0 ${magenta}`,
            overflow: 'hidden',
          }}>
            <div style={{ fontFamily: "'Bungee', sans-serif", fontSize: 11, letterSpacing: '0.18em', color: bg }}>★ WORKSHOP</div>
            <div style={{
              fontFamily: "'Bungee Shade', sans-serif",
              fontSize: 50, lineHeight: 0.9, color: hotPink,
              textShadow: `3px 3px 0 ${bg}`,
              marginTop: 12,
              letterSpacing: '0.01em',
            }}>CALI<br/>FOOT-<br/>WORK</div>
            <div style={{
              marginTop: 12,
              fontFamily: "'Permanent Marker', cursive",
              fontSize: 24, color: bg, transform: 'rotate(-2deg)',
            }}>3 horas · 1 maestro</div>

            <div style={{ position: 'absolute', bottom: 18, right: 14, padding: '8px 14px', background: cyan, border: `2px solid ${bg}`, fontFamily: "'Bungee', sans-serif", fontSize: 13, color: bg, transform: 'rotate(6deg)' }}>
              SOLD OUT 🌶️
            </div>
            <div style={{ position: 'absolute', top: '38%', left: 20, fontFamily: "'Permanent Marker', cursive", fontSize: 36, color: magenta, transform: 'rotate(-8deg)', textShadow: `2px 2px 0 ${lime}` }}>
              ¡uffff!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board02Flyer90 = Board02Flyer90;
