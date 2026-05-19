// 06 · FERIA-ALIGNED
// Aligned with the official Feria de Cali palette + tone — cream/green/pink/aubergine, Montserrat 900.
// Festive, warm, modern. NOT serious. NOT brutalist. This is the "yes, and" direction.

const Board06Feria = () => {
  const cream = '#fff8de';
  const cream2 = '#fff2c4';
  const verde = '#2e9d4e';
  const verdeDeep = '#1f7a3a';
  const pink = '#e84c8a';
  const pinkDeep = '#c0306e';
  const aubergine = '#382949';
  const sun = '#f4c324';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: aubergine, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="06"
        title="Feria · Aligned"
        tagline="Same family as the official Feria de Cali — cream, tropical green, pink, aubergine. Loud but warm. Festive, never pompous."
        fg={aubergine} bg={cream2} accent={pink}
        serif="'Rubik', sans-serif"
      />

      {/* ===== LOGO ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', borderBottom: `2px solid ${aubergine}`, position: 'relative', zIndex: 2 }}>

        {/* primary */}
        <div style={{ padding: '60px 56px 40px', borderRight: `2px solid ${aubergine}`, position: 'relative', overflow: 'hidden' }}>
          <ModuleLabel color={aubergine}>Primary lockup · Montserrat-family heavy</ModuleLabel>

          <div style={{ position: 'relative', marginTop: 10 }}>
            {/* pink underline swoosh */}
            <svg viewBox="0 0 720 60" style={{ position: 'absolute', bottom: -10, left: -10, width: 720, height: 60 }}>
              <path d="M 10,40 Q 200,10 380,30 T 700,22" stroke={pink} strokeWidth="12" fill="none" strokeLinecap="round" />
            </svg>

            <div style={{
              fontFamily: "'Rubik', 'Montserrat', sans-serif",
              fontWeight: 900,
              fontSize: 220,
              lineHeight: 0.9,
              letterSpacing: '-0.05em',
              color: verde,
              textTransform: 'lowercase',
              position: 'relative',
            }}>
              rumba
            </div>
          </div>

          <div style={{
            marginTop: 26,
            fontFamily: "'Rubik', sans-serif",
            fontWeight: 700,
            fontSize: 18,
            letterSpacing: '0.36em',
            textTransform: 'uppercase',
            color: aubergine,
            borderTop: `2px solid ${aubergine}`,
            borderBottom: `2px solid ${aubergine}`,
            padding: '12px 0',
            display: 'flex', justifyContent: 'space-between',
          }}>
            <span>EVENTOS</span><span>·</span><span>DE</span><span>·</span><span>BAILE</span>
          </div>
        </div>

        {/* alt marks */}
        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <ModuleLabel color={aubergine}>Alt marks</ModuleLabel>

          {/* badge */}
          <div style={{
            background: aubergine, color: cream,
            padding: '22px 28px',
            borderRadius: 999,
            textAlign: 'center',
            position: 'relative',
            alignSelf: 'flex-start',
          }}>
            <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 56, letterSpacing: '-0.04em', lineHeight: 1, textTransform: 'lowercase' }}>
              rumba<span style={{ color: pink }}>.</span>
            </div>
          </div>

          {/* two-tone */}
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 92, lineHeight: 0.9,
            letterSpacing: '-0.05em', textTransform: 'lowercase',
          }}>
            <span style={{ color: verde }}>rum</span><span style={{ color: pink }}>ba</span>
          </div>

          {/* mini stamp */}
          <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
            <div style={{
              width: 90, height: 90,
              borderRadius: '50%',
              background: pink,
              color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 56, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
            <div style={{
              width: 90, height: 90,
              borderRadius: '50%',
              background: verde,
              color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 56, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
            <div style={{
              width: 90, height: 90,
              borderRadius: 18,
              background: sun,
              color: aubergine,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 56, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${aubergine}`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '36px 56px', borderRight: `2px solid ${aubergine}` }}>
          <ModuleLabel color={aubergine}>Color · same family as Feria de Cali ’68</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Crema fiesta', role: 'Bg' },
            { hex: aubergine, name: 'Berenjena', role: 'Text' },
            { hex: verde, name: 'Verde Cali', role: 'Primary' },
            { hex: pink, name: 'Rosa rumba', role: 'Hot' },
            { hex: sun, name: 'Amarillo sol', role: 'Warm' },
          ]} />
          <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', color: aubergine, opacity: 0.65, textTransform: 'uppercase' }}>
            Aubergine · Pink · Green · Cream · Sun — exactly the family Cali uses.
          </div>
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={aubergine}>Type · heavy display + grotesk body</ModuleLabel>
          <TypeRow font="Rubik" weight={900} label="Display" sample="rumba esta noche" size={44} color={verde} letterSpacing="-0.04em" textTransform="lowercase" />
          <TypeRow font="Rubik" weight={900} label="Display alt" sample="¡SALSA EN VIVO!" size={28} color={pink} letterSpacing="-0.01em" />
          <TypeRow font="Familjen Grotesk" weight={500} label="Body" sample="Viernes 24 · doors 10pm · La Topa Tolondra" size={18} color={aubergine} />
          <TypeRow font="JetBrains Mono" label="Caption" sample="N 03°25′ · MEDELLÍN → CALI" size={11} color={aubergine} letterSpacing="0.18em" textTransform="uppercase" />
        </div>
      </div>

      {/* ===== HERO MOCK · landing card ===== */}
      <div style={{ padding: '32px 56px 40px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={aubergine}>In use · trip pitch card</ModuleLabel>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 0,
          background: cream, border: `2px solid ${aubergine}`,
          overflow: 'hidden',
          marginTop: 6,
        }}>
          {/* left */}
          <div style={{ padding: '36px 40px', position: 'relative', borderRight: `2px solid ${aubergine}` }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: aubergine, opacity: 0.7, display: 'flex', justifyContent: 'space-between' }}>
              <span>★ Trip 002 · Feria de Cali ’68</span>
              <span>11 / 25 confirmados</span>
            </div>

            <div style={{ position: 'relative', marginTop: 18 }}>
              <svg viewBox="0 0 720 30" style={{ position: 'absolute', bottom: -8, left: -4, width: 580, height: 30 }}>
                <path d="M 6,20 Q 180,4 360,16 T 700,10" stroke={pink} strokeWidth="8" fill="none" strokeLinecap="round" />
              </svg>
              <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 120, lineHeight: 0.86, letterSpacing: '-0.05em', textTransform: 'lowercase', color: verde }}>
                seis días<br/>de salsa
              </div>
            </div>

            <div style={{ marginTop: 22, fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 500, fontSize: 19, lineHeight: 1.5, color: aubergine, maxWidth: '52ch' }}>
              No es un tour. Un grupo pequeño que aterriza en Cali la única semana del año en que toda la ciudad es la pista — y entra por la puerta de atrás.
            </div>

            <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['25 dic → 30', '25 personas · max', 'Desde Suiza', 'Curado por Rumba'].map((t, i) => (
                <div key={i} style={{
                  background: i % 2 ? aubergine : cream2,
                  color: i % 2 ? cream : aubergine,
                  border: `2px solid ${aubergine}`,
                  padding: '7px 14px', borderRadius: 999,
                  fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5, letterSpacing: '0.16em', textTransform: 'uppercase',
                }}>{t}</div>
              ))}
            </div>

            <button style={{
              marginTop: 26,
              background: pink, color: cream,
              border: `2px solid ${aubergine}`,
              padding: '16px 24px',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 18, letterSpacing: '-0.01em',
              borderRadius: 999, cursor: 'pointer',
              boxShadow: `5px 5px 0 ${aubergine}`,
              textTransform: 'lowercase',
              display: 'inline-flex', gap: 10, alignItems: 'center',
            }}>quiero ir →</button>
          </div>

          {/* right — calendar ribbon */}
          <div style={{ background: aubergine, color: cream, padding: '32px 26px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -40, right: -40, width: 180, height: 180, borderRadius: '50%', background: pink, opacity: 0.3 }} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun }}>★ La semana</div>
            <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 36, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'lowercase', marginTop: 6 }}>
              programa
            </div>

            <div style={{ marginTop: 18, position: 'relative' }}>
              {[
                ['25', 'JUE', 'Bienvenida', pink],
                ['26', 'VIE', 'Apertura', sun],
                ['27', 'SÁB', 'Salsódromo', pink],
                ['28', 'DOM', 'Barrio + vivo', verde],
                ['29', 'LUN', 'Sorpresa', sun],
                ['30', 'MAR', 'Despedida', pink],
              ].map(([d, day, name, c]) => (
                <div key={d} style={{
                  display: 'grid', gridTemplateColumns: '46px 38px 1fr',
                  gap: 10, alignItems: 'baseline',
                  padding: '9px 0',
                  borderBottom: `1px dashed ${cream}33`,
                }}>
                  <span style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 22, color: cream, letterSpacing: '-0.02em' }}>{d}</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', color: c }}>{day}</span>
                  <span style={{ fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 500, fontSize: 15, color: cream, opacity: 0.95 }}>{name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board06Feria = Board06Feria;
