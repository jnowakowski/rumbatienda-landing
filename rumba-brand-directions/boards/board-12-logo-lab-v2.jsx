// 11 · LOGO LAB v2 — 16 wordmark variants
// All in (or compatible with) the Feria-aligned palette.
// Goal: pick the one that types right.

const Board11LogoLabV2 = () => {
  const cream = '#fff8de';
  const cream2 = '#fff2c4';
  const verde = '#2e9d4e';
  const verdeDeep = '#1f7a3a';
  const pink = '#e84c8a';
  const aubergine = '#382949';
  const sun = '#f4c324';
  const ink = '#1c1c1c';
  const terra = '#c75d3a';

  const BOARD_H_LOCAL = 2100;

  const Cell = ({ no, label, bg, children, span }) => (
    <div style={{
      background: bg,
      gridColumn: span ? `span ${span}` : undefined,
      padding: '28px 26px 22px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      minHeight: 290,
      border: `1.5px solid ${aubergine}`,
      overflow: 'hidden',
    }}>
      <div style={{
        fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em',
        textTransform: 'uppercase', opacity: 0.65,
        display: 'flex', justifyContent: 'space-between',
      }}>
        <span>{no}</span>
        <span style={{ textAlign: 'right' }}>{label}</span>
      </div>
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px 0' }}>
        {children}
      </div>
    </div>
  );

  return (
    <div style={{ width: BOARD_W, height: BOARD_H_LOCAL, background: cream, color: aubergine, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="LOGO"
        title="Logo Lab"
        tagline="Sixteen wordmarks. Mostly in the Feria-aligned palette. Tell us which one types right — that&rsquo;s the one we redraw clean."
        fg={aubergine} bg={cream2} accent={pink}
        serif="'Rubik', sans-serif"
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: 0, borderTop: `1.5px solid ${aubergine}`, borderBottom: `1.5px solid ${aubergine}` }}>

        {/* 01 — primary candidate */}
        <Cell no="01 ★" label="heavy lowercase" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 96, lineHeight: 0.85, letterSpacing: '-0.06em', color: verde, textTransform: 'lowercase' }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 02 */}
        <Cell no="02" label="caps · two-tone" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 84, lineHeight: 0.85, letterSpacing: '-0.04em' }}>
            <span style={{ color: verde }}>RUM</span><span style={{ color: pink }}>BA</span>
          </div>
        </Cell>

        {/* 03 — pink swoosh */}
        <Cell no="03 ★" label="pink swoosh" bg={cream}>
          <div style={{ position: 'relative', display: 'inline-block' }}>
            <svg viewBox="0 0 320 32" style={{ position: 'absolute', bottom: -6, left: -6, width: 320, height: 32 }}>
              <path d="M 8 20 Q 90 4 180 14 T 312 8" stroke={pink} strokeWidth="7" fill="none" strokeLinecap="round" />
            </svg>
            <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.05em', color: aubergine, textTransform: 'lowercase', position: 'relative' }}>
              rumba
            </div>
          </div>
        </Cell>

        {/* 04 — pill badge */}
        <Cell no="04" label="pill badge" bg={cream2}>
          <div style={{ background: aubergine, color: cream, padding: '14px 28px', borderRadius: 999, fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 60, lineHeight: 1, letterSpacing: '-0.05em', textTransform: 'lowercase' }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 05 — italic motion */}
        <Cell no="05" label="italic motion" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontStyle: 'italic', fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.06em', color: pink, textTransform: 'lowercase', transform: 'skewX(-3deg)' }}>
            rumba<span style={{ color: verde }}>!</span>
          </div>
        </Cell>

        {/* 06 — editorial serif */}
        <Cell no="06" label="serif italic" bg={cream}>
          <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 108, lineHeight: 0.9, letterSpacing: '-0.03em', color: aubergine }}>
            Rumba<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 07 — inverted on green */}
        <Cell no="07" label="inverted · green" bg={verde}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 96, lineHeight: 0.85, letterSpacing: '-0.06em', color: cream, textTransform: 'lowercase' }}>
            rumba<span style={{ color: sun }}>.</span>
          </div>
        </Cell>

        {/* 08 — stacked w/ cities */}
        <Cell no="08" label="stacked lockup" bg={cream}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 76, lineHeight: 0.85, letterSpacing: '-0.05em', color: verde, textTransform: 'lowercase' }}>rumba</div>
            <div style={{ marginTop: 8, paddingTop: 6, borderTop: `2px solid ${aubergine}`, fontFamily: "'Rubik', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.36em', textTransform: 'uppercase', color: aubergine }}>
              MDE <span style={{ color: pink }}>★</span> CALI
            </div>
          </div>
        </Cell>

        {/* 09 — dot becomes star */}
        <Cell no="09" label="dot · star" bg={cream2}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 96, lineHeight: 0.85, letterSpacing: '-0.06em', color: aubergine, textTransform: 'lowercase', display: 'inline-flex', alignItems: 'flex-start', gap: 4 }}>
            rumba
            <svg viewBox="0 0 60 60" style={{ width: 28, height: 28, marginTop: 6 }}>
              <path d="M30 2 L36 22 L57 22 L40 35 L46 56 L30 43 L14 56 L20 35 L3 22 L24 22 Z" fill={pink} />
            </svg>
          </div>
        </Cell>

        {/* 10 — outline / hollow */}
        <Cell no="10" label="outline · hollow" bg={cream}>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 100, lineHeight: 0.9,
            letterSpacing: '-0.06em', color: 'transparent',
            WebkitTextStroke: `3px ${aubergine}`, textTransform: 'lowercase',
          }}>
            rumba<span style={{ WebkitTextStroke: `3px ${pink}` }}>.</span>
          </div>
        </Cell>

        {/* 11 — accent é (Rúmba) */}
        <Cell no="11" label="rúmba · accent" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 100, lineHeight: 0.85, letterSpacing: '-0.06em', color: verde, textTransform: 'lowercase', position: 'relative' }}>
            r<span style={{ position: 'relative' }}>ú</span>mba
          </div>
        </Cell>

        {/* 12 — slash / divider */}
        <Cell no="12" label="rumba / cali" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 70, lineHeight: 0.85, letterSpacing: '-0.05em', color: aubergine, textTransform: 'lowercase' }}>
            rumba<span style={{ color: pink, fontStyle: 'italic', margin: '0 6px' }}>/</span><span style={{ color: verde }}>cali</span>
          </div>
        </Cell>

        {/* 13 — caps minimal punctuated */}
        <Cell no="13" label="caps minimal" bg={cream}>
          <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 96, lineHeight: 0.9, letterSpacing: '-0.05em', color: aubergine }}>
            RUMBA<span style={{ color: pink }}>.</span>
          </div>
        </Cell>

        {/* 14 — sticker / drop-shadow */}
        <Cell no="14" label="sticker · shadow" bg={cream2}>
          <div style={{
            display: 'inline-block', padding: '12px 24px',
            background: pink, color: cream,
            borderRadius: 18, border: `3px solid ${aubergine}`,
            boxShadow: `5px 5px 0 ${aubergine}`,
            transform: 'rotate(-3deg)',
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 62, letterSpacing: '-0.05em', lineHeight: 1, textTransform: 'lowercase',
          }}>rumba<span style={{ color: sun }}>.</span></div>
        </Cell>

        {/* 15 — first letter oversized */}
        <Cell no="15" label="big R · drop cap" bg={cream}>
          <div style={{ display: 'inline-flex', alignItems: 'flex-start', gap: 4 }}>
            <span style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 168, lineHeight: 0.82, letterSpacing: '-0.07em', color: pink, textTransform: 'lowercase' }}>r</span>
            <span style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 64, lineHeight: 1.55, letterSpacing: '-0.04em', color: aubergine, textTransform: 'lowercase' }}>umba<span style={{ color: pink }}>.</span></span>
          </div>
        </Cell>

        {/* 16 — small mark + word */}
        <Cell no="16" label="mark · word" bg={cream}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 14 }}>
            <div style={{
              width: 64, height: 64, borderRadius: 12, background: aubergine, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 44,
              lineHeight: 1, letterSpacing: '-0.06em', textTransform: 'lowercase',
            }}>r<span style={{ color: pink }}>.</span></div>
            <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 60, lineHeight: 0.9, letterSpacing: '-0.05em', color: aubergine, textTransform: 'lowercase' }}>rumba</div>
          </div>
        </Cell>

      </div>

      {/* SCALE TEST */}
      <div style={{ padding: '32px 56px 24px' }}>
        <ModuleLabel color={aubergine}>Scale test · primary candidate (#01) at five sizes + in context</ModuleLabel>
        <div style={{ display: 'flex', alignItems: 'flex-end', gap: 38, marginTop: 18, flexWrap: 'wrap' }}>
          {[18, 36, 64, 112, 160].map(sz => (
            <div key={sz} style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: sz, lineHeight: 0.9, letterSpacing: '-0.05em', color: verde, textTransform: 'lowercase' }}>
              rumba<span style={{ color: pink }}>.</span>
            </div>
          ))}

          <button style={{
            background: pink, color: cream, border: `2px solid ${aubergine}`,
            padding: '12px 20px', fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 22, letterSpacing: '-0.02em', borderRadius: 999, cursor: 'pointer',
            boxShadow: `4px 4px 0 ${aubergine}`, textTransform: 'lowercase',
          }}>quiero ir →</button>

          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            {[ {b:verde,f:cream}, {b:pink,f:cream}, {b:aubergine,f:cream}, {b:sun,f:aubergine}, {b:cream,f:aubergine}].map((c,i)=>(
              <div key={i} style={{
                width: 40, height: 40, background: c.b, color: c.f,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: 8, border: `1.5px solid ${aubergine}`,
                fontFamily: "'Rubik', sans-serif", fontWeight: 900,
                fontSize: 26, lineHeight: 1, letterSpacing: '-0.06em',
                textTransform: 'lowercase',
              }}>r</div>
            ))}
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10, letterSpacing: '0.16em', textTransform: 'uppercase', color: aubergine, opacity: 0.65, marginLeft: 8 }}>
              favicon set
            </div>
          </div>
        </div>
      </div>

      {/* Notes */}
      <div style={{ background: aubergine, color: cream, padding: '22px 56px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 32, fontFamily: "'Familjen Grotesk', sans-serif", fontSize: 14, lineHeight: 1.5 }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Our top three</div>
          <strong style={{ color: cream }}>01 + 03 + 14.</strong> Heavy lowercase, swoosh, and the sticker variant. Sticker version is perfect for IG content — animated.
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Risky picks</div>
          <strong style={{ color: cream }}>10 (outline)</strong> at tiny sizes. <strong style={{ color: cream }}>11 (rúmba)</strong> reads wrong in EN — only use in ES copy.
        </div>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.22em', textTransform: 'uppercase', color: sun, marginBottom: 6 }}>Next step</div>
          Pick a winner (or two — primary + IG variant). I redraw it as a clean SVG, build the 3-state animation, and finalize the system.
        </div>
      </div>
    </div>
  );
};

window.Board11LogoLabV2 = Board11LogoLabV2;
