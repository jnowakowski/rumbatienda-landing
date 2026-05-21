// 11 · ICONIC TEST BOARD
// First guess at the missing move from Julian's feedback: flat dancer, sun, palms, drums.
// Keep the Feria-aligned palette, but let the illustration carry the energy.

const Board12IconicTest = () => {
  const cream = '#fff8de';
  const cream2 = '#fff2c4';
  const aubergine = '#382949';
  const green = '#2e9d4e';
  const greenDeep = '#1f7a3a';
  const pink = '#e84c8a';
  const pinkDeep = '#c0306e';
  const sun = '#f4c324';
  const red = '#c94a3f';
  const sand = '#f7e7b5';

  const IconTile = ({ title, note, bg, children, fg }) => (
    <div style={{
      background: bg,
      border: `2px solid ${aubergine}`,
      borderRadius: 22,
      padding: '16px 14px 14px',
      minHeight: 170,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: fg || aubergine,
      overflow: 'hidden',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: 10,
        letterSpacing: '0.22em',
        textTransform: 'uppercase',
        opacity: 0.7,
        display: 'flex',
        justifyContent: 'space-between',
        gap: 8,
      }}>
        <span>{title}</span>
        <span>{note}</span>
      </div>
      <div style={{ paddingTop: 12, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {children}
      </div>
    </div>
  );

  const SunGlyph = ({ color = aubergine, accent = pink }) => (
    <svg viewBox="0 0 220 220" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="110" cy="110" r="44" fill={accent} stroke={color} strokeWidth="8" />
        {[
          [110, 24, 110, 54],
          [110, 166, 110, 196],
          [24, 110, 54, 110],
          [166, 110, 196, 110],
          [48, 48, 69, 69],
          [151, 48, 130, 69],
          [48, 172, 69, 151],
          [151, 172, 130, 151],
          [68, 30, 82, 58],
          [138, 30, 124, 58],
          [68, 190, 82, 162],
          [138, 190, 124, 162],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="8" />
        ))}
      </g>
    </svg>
  );

  const DancerGlyph = ({ color = aubergine, accent = pink }) => (
    <svg viewBox="0 0 220 220" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="118" cy="46" r="16" fill={accent} stroke={color} strokeWidth="7" />
        <path d="M118 64 L100 96 L126 114 L150 90 Z" fill={accent} stroke={color} strokeWidth="7" />
        <path d="M102 94 L70 74" stroke={color} strokeWidth="10" />
        <path d="M124 102 L164 78" stroke={color} strokeWidth="10" />
        <path d="M118 116 L98 162" stroke={color} strokeWidth="10" />
        <path d="M128 114 L160 162" stroke={color} strokeWidth="10" />
        <path d="M68 74 C82 94, 90 106, 112 112" stroke={accent} strokeWidth="10" />
        <path d="M164 78 C150 102, 142 110, 124 114" stroke={accent} strokeWidth="10" />
        <path d="M88 156 Q112 132 142 156" fill={sun} stroke={color} strokeWidth="7" />
        <path d="M90 160 Q112 176 142 160" stroke={color} strokeWidth="7" fill="none" />
      </g>
    </svg>
  );

  const PalmGlyph = ({ color = aubergine, accent = green }) => (
    <svg viewBox="0 0 220 220" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M110 180 C102 144, 100 114, 114 64" stroke={color} strokeWidth="12" />
        <path d="M110 86 C78 68, 54 44, 30 34" stroke={accent} strokeWidth="12" />
        <path d="M112 84 C86 56, 70 36, 64 18" stroke={accent} strokeWidth="12" />
        <path d="M114 82 C114 50, 116 28, 122 10" stroke={accent} strokeWidth="12" />
        <path d="M116 84 C138 56, 154 36, 178 18" stroke={accent} strokeWidth="12" />
        <path d="M118 88 C154 74, 182 64, 204 58" stroke={accent} strokeWidth="12" />
        <path d="M82 172 Q110 184 138 172" fill={sun} stroke={color} strokeWidth="8" />
      </g>
    </svg>
  );

  const DrumGlyph = ({ color = aubergine, accent = red }) => (
    <svg viewBox="0 0 220 220" style={{ width: '100%', height: '100%' }} aria-hidden="true">
      <g fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M54 86 C72 58, 150 58, 166 86 L166 144 C150 172, 72 172, 54 144 Z" fill={accent} stroke={color} strokeWidth="8" />
        <ellipse cx="110" cy="86" rx="56" ry="16" fill={sun} stroke={color} strokeWidth="8" />
        <ellipse cx="110" cy="144" rx="56" ry="16" fill={pink} stroke={color} strokeWidth="8" />
        <path d="M36 50 L76 74" stroke={color} strokeWidth="10" />
        <path d="M184 50 L144 74" stroke={color} strokeWidth="10" />
        <path d="M78 70 L54 34" stroke={sun} strokeWidth="10" />
        <path d="M142 70 L166 34" stroke={sun} strokeWidth="10" />
        <circle cx="110" cy="114" r="18" fill={color} stroke={color} strokeWidth="6" />
      </g>
    </svg>
  );

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: aubergine, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="11"
        title="Iconic Test"
        tagline="Flat dancer, sun, palms, drums. Same Feria family, more movement. Keep the wordmark clean and let the icon do the salsa."
        fg={aubergine} bg={cream2} accent={pink}
        serif="'Rubik', sans-serif"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 0.95fr', borderBottom: `2px solid ${aubergine}` }}>
        <div style={{ padding: '54px 54px 42px', borderRight: `2px solid ${aubergine}`, position: 'relative', overflow: 'hidden' }}>
          <ModuleLabel color={aubergine}>Primary lockup · icon beside wordmark, not inside it</ModuleLabel>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 206px', gap: 26, alignItems: 'end', marginTop: 10 }}>
            <div style={{ position: 'relative' }}>
              <svg viewBox="0 0 760 68" style={{ position: 'absolute', left: -10, top: 108, width: 730, height: 68 }}>
                <path d="M 18 44 Q 176 12 332 30 T 742 28" stroke={pink} strokeWidth="12" fill="none" strokeLinecap="round" />
              </svg>
              <div style={{
                fontFamily: "'Rubik', sans-serif",
                fontWeight: 900,
                fontSize: 188,
                lineHeight: 0.84,
                letterSpacing: '-0.06em',
                textTransform: 'lowercase',
                color: green,
                position: 'relative',
              }}>
                rumba<span style={{ color: pink }}>.</span>
              </div>
              <div style={{
                marginTop: 14,
                maxWidth: '20ch',
                fontFamily: "'DM Serif Display', serif",
                fontStyle: 'italic',
                fontSize: 24,
                lineHeight: 1.35,
                color: aubergine,
              }}>
                The missing move is not more decoration. It is a flat icon family with rhythm.
              </div>
            </div>

            <div style={{
              background: aubergine,
              color: cream,
              border: `2px solid ${aubergine}`,
              borderRadius: 28,
              padding: '16px 16px 14px',
              boxShadow: `6px 6px 0 ${pinkDeep}`,
            }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, opacity: 0.95 }}>
                icon family
              </div>
              <div style={{ marginTop: 12, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                <div style={{ width: '100%', aspectRatio: '1 / 1', background: cream, borderRadius: 18, padding: 8 }}><SunGlyph color={aubergine} accent={sun} /></div>
                <div style={{ width: '100%', aspectRatio: '1 / 1', background: cream, borderRadius: 18, padding: 8 }}><DancerGlyph color={aubergine} accent={pink} /></div>
                <div style={{ width: '100%', aspectRatio: '1 / 1', background: cream, borderRadius: 18, padding: 8 }}><PalmGlyph color={aubergine} accent={green} /></div>
                <div style={{ width: '100%', aspectRatio: '1 / 1', background: cream, borderRadius: 18, padding: 8 }}><DrumGlyph color={aubergine} accent={red} /></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: 24, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {['dancer', 'sun', 'palms', 'drums', 'motion line'].map((item, i) => (
              <div key={item} style={{
                background: i % 2 ? cream2 : aubergine,
                color: i % 2 ? aubergine : cream,
                border: `2px solid ${aubergine}`,
                borderRadius: 999,
                padding: '8px 14px',
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: 11,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}>{item}</div>
            ))}
          </div>
        </div>

        <div style={{ padding: '34px 32px 32px', background: cream2 }}>
          <ModuleLabel color={aubergine}>Glyph system · flat, loud, legible</ModuleLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
            <IconTile title="Sun" note="hero mark" bg={sun} fg={aubergine}>
              <div style={{ width: 132, height: 132 }}><SunGlyph color={aubergine} accent={cream} /></div>
            </IconTile>
            <IconTile title="Dancer" note="motion lead" bg={pink} fg={cream}>
              <div style={{ width: 132, height: 132 }}><DancerGlyph color={aubergine} accent={cream} /></div>
            </IconTile>
            <IconTile title="Palm" note="frame / canopy" bg={green} fg={cream}>
              <div style={{ width: 132, height: 132 }}><PalmGlyph color={cream} accent={cream} /></div>
            </IconTile>
            <IconTile title="Drum" note="rhythm cue" bg={aubergine} fg={cream}>
              <div style={{ width: 132, height: 132 }}><DrumGlyph color={cream} accent={sun} /></div>
            </IconTile>
          </div>
          <div style={{
            marginTop: 14,
            fontFamily: "'DM Serif Display', serif",
            fontStyle: 'italic',
            fontSize: 18,
            lineHeight: 1.45,
            color: aubergine,
            padding: '0 4px',
          }}>
            Best guess: the figure can sit outside the wordmark as a companion, or become the center of a stamp system, but not be dissolved into decorative clutter.
          </div>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${aubergine}` }}>
        <div style={{ padding: '34px 54px', borderRight: `2px solid ${aubergine}` }}>
          <ModuleLabel color={aubergine}>Color · keep the Feria family, push the contrast</ModuleLabel>
          <Palette
            dark={false}
            colors={[
              { hex: cream, name: 'Crema fiesta', role: 'Bg' },
              { hex: aubergine, name: 'Berenjena', role: 'Ink' },
              { hex: green, name: 'Verde Cali', role: 'Primary' },
              { hex: pink, name: 'Rosa rumba', role: 'Accent' },
              { hex: sun, name: 'Amarillo sol', role: 'Warm' },
            ]}
          />
          <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: aubergine, opacity: 0.72 }}>
            Same base family as Feria de Cali 68, but the figure and sun add the missing energy.
          </div>
        </div>

        <div style={{ padding: '34px 42px' }}>
          <ModuleLabel color={aubergine}>Type · keep the mark simple, move the voice into support text</ModuleLabel>
          <TypeRow font="Rubik" weight={900} label="Display" sample="rumba en cali" size={46} color={green} letterSpacing="-0.05em" textTransform="lowercase" />
          <TypeRow font="Rubik" weight={900} label="Display alt" sample="salsa viva" size={30} color={pink} letterSpacing="-0.02em" textTransform="lowercase" />
          <TypeRow font="Familjen Grotesk" weight={500} label="Body" sample="December 25 to 30, 2026 · small group trip · curated for dancers" size={18} color={aubergine} lineHeight={1.45} />
          <TypeRow font="JetBrains Mono" label="Caption" sample="MDE -> CALI · NIGHTS / BARRIOS / SALSODROMO" size={11} color={aubergine} letterSpacing="0.18em" textTransform="uppercase" />
        </div>
      </div>

      <div style={{ padding: '32px 54px 40px' }}>
        <ModuleLabel color={aubergine}>In use · trip card and poster seed</ModuleLabel>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.3fr 0.9fr',
          gap: 0,
          marginTop: 8,
          background: cream,
          border: `2px solid ${aubergine}`,
          overflow: 'hidden',
        }}>
          <div style={{ padding: '36px 40px 34px', borderRight: `2px solid ${aubergine}`, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 16, fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: aubergine, opacity: 0.72 }}>
              <span>Trip 002</span>
              <span>25 spots</span>
            </div>

            <div style={{ marginTop: 18, display: 'flex', alignItems: 'center', gap: 18 }}>
              <div style={{ width: 96, height: 96, borderRadius: '50%', background: sun, padding: 8, border: `2px solid ${aubergine}` }}>
                <SunGlyph color={aubergine} accent={cream} />
              </div>
              <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 112, lineHeight: 0.86, letterSpacing: '-0.06em', textTransform: 'lowercase', color: green }}>
                seis días<br />de salsa
              </div>
            </div>

            <div style={{ marginTop: 20, fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 22, lineHeight: 1.45, color: aubergine, maxWidth: '42ch' }}>
              A clean wordmark, a flat dancer, one sun, one drum. Enough to feel Colombian without turning into clip art.
            </div>

            <div style={{ marginTop: 20, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['25 dec to 30', 'small group', 'from switzerland', 'curated by rumba'].map((t, i) => (
                <div key={t} style={{
                  background: i % 2 ? aubergine : pink,
                  color: i % 2 ? cream : cream,
                  border: `2px solid ${aubergine}`,
                  padding: '8px 13px',
                  borderRadius: 999,
                  fontFamily: "'JetBrains Mono', monospace",
                  fontSize: 10.5,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                }}>{t}</div>
              ))}
            </div>

            <button style={{
              marginTop: 24,
              background: green,
              color: cream,
              border: `2px solid ${aubergine}`,
              padding: '15px 22px',
              borderRadius: 999,
              fontFamily: "'Rubik', sans-serif",
              fontWeight: 900,
              fontSize: 18,
              letterSpacing: '-0.02em',
              boxShadow: `5px 5px 0 ${aubergine}`,
              textTransform: 'lowercase',
            }}>
              quiero ir ->
            </button>
          </div>

          <div style={{ background: aubergine, color: cream, padding: '28px 24px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: -32, right: -28, width: 170, height: 170, borderRadius: '50%', background: pink, opacity: 0.22 }} />
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun }}>
              poster seed
            </div>
            <div style={{ marginTop: 8, fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 34, lineHeight: 0.95, letterSpacing: '-0.03em', textTransform: 'lowercase' }}>
              icon first
            </div>
            <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              {[
                ['sun', sun, aubergine],
                ['dancer', pink, cream],
                ['palm', green, cream],
                ['drum', red, cream],
              ].map(([label, bg, fg]) => (
                <div key={label} style={{
                  background: bg,
                  color: fg,
                  borderRadius: 18,
                  border: `2px solid ${cream}`,
                  padding: 12,
                  minHeight: 120,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <div style={{ width: 74, height: 74 }}>
                    {label === 'sun' && <SunGlyph color={fg} accent={cream} />}
                    {label === 'dancer' && <DancerGlyph color={fg} accent={cream} />}
                    {label === 'palm' && <PalmGlyph color={fg} accent={cream} />}
                    {label === 'drum' && <DrumGlyph color={fg} accent={cream} />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board12IconicTest = Board12IconicTest;
