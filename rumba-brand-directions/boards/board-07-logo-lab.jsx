// 07 · LOGO LAB
// 9 wordmark explorations in the Feria-aligned palette.
// Goal: replace the AI-generated current logo with something that types right.

const Board07LogoLab = () => {
  const cream = '#fff8de';
  const cream2 = '#fff2c4';
  const verde = '#2e9d4e';
  const verdeDeep = '#1f7a3a';
  const pink = '#e84c8a';
  const aubergine = '#382949';
  const sun = '#f4c324';

  const BOARD_H_LOCAL = 1850;

  // Cell wrapper — every logo gets the same frame so we can compare apples-to-apples
  const Cell = ({ no, label, bg, fg, children, gridCol, gridRow }) => (
    <div style={{
      background: bg,
      color: fg,
      gridColumn: gridCol,
      gridRow: gridRow,
      padding: '36px 32px 24px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 340,
      border: `1.5px solid ${aubergine}`,
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em',
        textTransform: 'uppercase', opacity: 0.65,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>{no}</span>
        <span>{label}</span>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px 0', position: 'relative' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ width: BOARD_W, height: BOARD_H_LOCAL, background: cream, color: aubergine, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="07"
        title="Logo Lab"
        tagline="Nine wordmarks in the Feria-aligned palette. Direction picked once you tell us which one types right."
        fg={aubergine} bg={cream2} accent={pink}
        serif="'Rubik', sans-serif"
      />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: 0,
        borderTop: `1.5px solid ${aubergine}`,
        borderBottom: `1.5px solid ${aubergine}`,
      }}>

        {/* 01 — Heavy lowercase wordmark, green on cream */}
        <Cell no="01" label="heavy lowercase" bg={cream} fg={aubergine}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 130, lineHeight: 0.85, letterSpacing: '-0.06em',
            color: verde, textTransform: 'lowercase',
          }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 02 — Caps tight, two-tone */}
        <Cell no="02" label="caps · two-tone" bg={cream} fg={aubergine}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 112, lineHeight: 0.85, letterSpacing: '-0.04em',
          }}>
            <span style={{ color: verde }}>RUM</span><span style={{ color: pink }}>BA</span>
          </div>
        </Cell>

        {/* 03 — Pink swoosh underline */}
        <Cell no="03" label="pink swoosh" bg={cream} fg={aubergine}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <svg viewBox="0 0 380 40" style={{ position: 'absolute', bottom: -8, left: -8, width: 380, height: 40 }}>
              <path d="M 8,26 Q 100,4 200,18 T 372,12" stroke={pink} strokeWidth="9" fill="none" strokeLinecap="round" />
            </svg>
            <div style={{
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 120, lineHeight: 0.9, letterSpacing: '-0.05em',
              color: aubergine, textTransform: 'lowercase',
              position: 'relative',
            }}>rumba</div>
          </div>
        </Cell>

        {/* 04 — Pill / badge */}
        <Cell no="04" label="pill badge" bg={cream2} fg={aubergine}>
          <div style={{
            background: aubergine, color: cream,
            padding: '20px 38px',
            borderRadius: 999,
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 80, lineHeight: 1, letterSpacing: '-0.05em',
            textTransform: 'lowercase',
          }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 05 — Italic / motion */}
        <Cell no="05" label="italic motion" bg={cream} fg={aubergine}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontStyle: 'italic',
            fontSize: 120, lineHeight: 0.9, letterSpacing: '-0.06em',
            color: pink, textTransform: 'lowercase',
            transform: 'skewX(-2deg)',
          }}>
            rumba<span style={{ color: verde }}>!</span>
          </div>
        </Cell>

        {/* 06 — Serif elegant */}
        <Cell no="06" label="serif elegante" bg={cream} fg={aubergine}>
          <div style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
            fontSize: 130, lineHeight: 0.9, letterSpacing: '-0.03em',
            color: aubergine,
          }}>
            Rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 07 — Inverted on green */}
        <Cell no="07" label="inverted · green" bg={verde} fg={cream}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 130, lineHeight: 0.85, letterSpacing: '-0.06em',
            color: cream, textTransform: 'lowercase',
          }}>
            rumba<span style={{ color: sun }}>.</span>
          </div>
        </Cell>

        {/* 08 — Stacked lockup with cities */}
        <Cell no="08" label="stacked lockup" bg={cream} fg={aubergine}>
          <div style={{ textAlign: 'center' }}>
            <div style={{
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 96, lineHeight: 0.85, letterSpacing: '-0.05em',
              color: verde, textTransform: 'lowercase',
            }}>rumba</div>
            <div style={{
              marginTop: 10, paddingTop: 8,
              borderTop: `2px solid ${aubergine}`,
              fontFamily: "'Rubik', sans-serif", fontWeight: 700, fontSize: 12, letterSpacing: '0.36em',
              textTransform: 'uppercase', color: aubergine,
            }}>
              MEDELLÍN <span style={{ color: pink }}>★</span> CALI
            </div>
            <div style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.22em',
              textTransform: 'uppercase', color: aubergine, opacity: 0.6, marginTop: 6,
            }}>eventos de baile · 2026</div>
          </div>
        </Cell>

        {/* 09 — Custom: dot becomes star */}
        <Cell no="09" label="dot · star" bg={cream2} fg={aubergine}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 130, lineHeight: 0.85, letterSpacing: '-0.06em',
            color: aubergine, textTransform: 'lowercase',
            display: 'inline-flex', alignItems: 'flex-start', gap: 4,
          }}>
            rumba
            <svg viewBox="0 0 60 60" style={{ width: 38, height: 38, marginTop: 8 }}>
              <path d="M30 2 L36 22 L57 22 L40 35 L46 56 L30 43 L14 56 L20 35 L3 22 L24 22 Z" fill={pink} />
            </svg>
          </div>
        </Cell>
      </div>

      {/* SCALE TEST */}
      <div style={{ padding: '34px 56px 24px' }}>
        <ModuleLabel color={aubergine}>Scale test · primary candidate (#01) at three sizes + on a button</ModuleLabel>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 42, marginTop: 18, flexWrap: 'wrap' }}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 24, lineHeight: 0.9, letterSpacing: '-0.04em',
            color: verde, textTransform: 'lowercase',
          }}>rumba<span style={{ color: pink }}>.</span></div>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 56, lineHeight: 0.9, letterSpacing: '-0.05em',
            color: verde, textTransform: 'lowercase',
          }}>rumba<span style={{ color: pink }}>.</span></div>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 112, lineHeight: 0.9, letterSpacing: '-0.05em',
            color: verde, textTransform: 'lowercase',
          }}>rumba<span style={{ color: pink }}>.</span></div>

          {/* on button */}
          <button style={{
            background: pink, color: cream,
            border: `2px solid ${aubergine}`,
            padding: '14px 22px',
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 22, letterSpacing: '-0.02em',
            borderRadius: 999, cursor: 'pointer',
            boxShadow: `4px 4px 0 ${aubergine}`,
            textTransform: 'lowercase',
          }}>rumba<span style={{ color: sun }}>.</span></button>

          {/* as favicon */}
          <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
            <div style={{
              width: 44, height: 44, background: verde, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 10,
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 30, lineHeight: 1, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
            <div style={{
              width: 44, height: 44, background: pink, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 10,
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 30, lineHeight: 1, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
            <div style={{
              width: 44, height: 44, background: aubergine, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              borderRadius: 10,
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 30, lineHeight: 1, letterSpacing: '-0.06em',
              textTransform: 'lowercase',
            }}>r</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: aubergine, opacity: 0.65 }}>
              favicons<br/>(44px)
            </div>
          </div>
        </div>
      </div>

      {/* Notes strip */}
      <div style={{ background: aubergine, color: cream, padding: '20px 56px', borderTop: `2px solid ${aubergine}`, display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, fontFamily: "'Familjen Grotesk', sans-serif", fontSize: 14, lineHeight: 1.5 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Our pick</div>
          <strong style={{ color: cream }}>01 + 03 hybrid.</strong> Heavy lowercase wordmark with a pink swoosh — easy to type, animates well, works at 24px or as a billboard. Pink dot/star at end keeps it warm.
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Avoid</div>
          06 (serif elegante) — too much of the old tone. 02 (two-tone caps) — risks looking sporty / brand-deck. Both archive for now.
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Next</div>
          Pick a winner → I redraw it as a clean SVG, make a 3-state animated version (idle / hover / loading), and roll out the rest of the brand sheet.
        </div>
      </div>
    </div>
  );
};

window.Board07LogoLab = Board07LogoLab;
