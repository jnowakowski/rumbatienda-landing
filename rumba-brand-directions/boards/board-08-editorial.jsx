// 07 · EDITORIAL SUAVE
// Aesthetic: bilingual print magazine — Apartamento meets Caribe — warm, sophisticated, NEVER stiff.
// Cream + terracotta + sage + ink. DM Serif italic display, generous whitespace, intimate.

const Board07Editorial = () => {
  const cream = '#f5ecd9';
  const cream2 = '#ebe0c4';
  const ink = '#1f1815';
  const terra = '#c75d3a';
  const sage = '#6b8a5e';
  const ochre = '#d4a017';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Inter', sans-serif" }}>

      <BoardHeader
        num="07"
        title="Editorial Suave"
        tagline="A print magazine that lives in your suitcase. Warm, intimate, bilingual. Sophistication without the suit."
        fg={ink} bg={cream} accent={terra}
        serif="'DM Serif Display', serif"
      />

      {/* LOGO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', borderBottom: `1px solid ${ink}33` }}>
        <div style={{ padding: '60px 56px 44px', borderRight: `1px solid ${ink}33`, position: 'relative' }}>
          <ModuleLabel color={ink}>Primary · editorial italic</ModuleLabel>

          <div style={{ marginTop: 14, position: 'relative', display: 'inline-block' }}>
            <div style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
              fontSize: 240, lineHeight: 0.85, letterSpacing: '-0.04em',
              color: ink,
            }}>
              Rumba
            </div>
            {/* delicate flourish under the word */}
            <svg viewBox="0 0 720 40" style={{ width: 540, height: 36, marginTop: -10 }}>
              <path d="M 4 20 C 80 4, 200 32, 320 18 S 540 8, 700 22"
                stroke={terra} strokeWidth="2" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{
            marginTop: 24,
            fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 14,
            letterSpacing: '0.36em', textTransform: 'uppercase', color: ink, opacity: 0.7,
            display: 'flex', gap: 18, alignItems: 'center',
          }}>
            <span>VOL. 03</span>
            <span style={{ color: terra }}>·</span>
            <span>Medellín / Cali</span>
            <span style={{ color: terra }}>·</span>
            <span>Eventos de baile</span>
          </div>
        </div>

        <div style={{ padding: '50px 36px', display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 28 }}>
          <ModuleLabel color={ink}>Alt — bilingual lockup &amp; monogram</ModuleLabel>

          <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
            <div style={{ width: 120, height: 120, borderRadius: '50%', background: terra, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
              fontSize: 88, letterSpacing: '-0.03em', lineHeight: 1,
            }}>R</div>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 58, lineHeight: 0.9 }}>
                Rumba<span style={{ color: terra }}>.</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500, fontSize: 12, letterSpacing: '0.3em', textTransform: 'uppercase', marginTop: 8, color: ink, opacity: 0.7 }}>
                THE NIGHTS · LAS NOCHES
              </div>
            </div>
          </div>

          <div style={{
            fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
            fontSize: 64, lineHeight: 0.95, color: sage,
          }}>
            Rumba <span style={{ color: terra, fontStyle: 'normal', fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>×</span> <span style={{ color: ink }}>Cali</span>
          </div>
        </div>
      </div>

      {/* PALETTE + TYPE */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1px solid ${ink}33` }}>
        <div style={{ padding: '36px 56px', borderRight: `1px solid ${ink}33` }}>
          <ModuleLabel color={ink}>Color · warm earth, no cold tones</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Hueso', role: 'Bg' },
            { hex: ink, name: 'Tabaco', role: 'Text' },
            { hex: terra, name: 'Terracota', role: 'Primary' },
            { hex: sage, name: 'Salvia', role: 'Cool' },
            { hex: ochre, name: 'Ocre', role: 'Warm' },
          ]} />
        </div>
        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={ink}>Type · italic editorial + clean grotesk</ModuleLabel>
          <TypeRow font="DM Serif Display" italic label="Display" sample="Six nights in Cali." size={44} color={ink} />
          <TypeRow font="DM Serif Display" label="Display roman" sample="Trip · 002" size={32} color={terra} />
          <TypeRow font="Inter" weight={700} label="Eyebrow" sample="LAS NOCHES — DECEMBER" size={13} color={ink} letterSpacing="0.28em" textTransform="uppercase" />
          <TypeRow font="Inter" weight={400} label="Body" sample="A small group lands in Cali during the only week of the year the entire city is a dance floor." size={16} color={ink} lineHeight={1.55} />
        </div>
      </div>

      {/* MOCK · magazine spread */}
      <div style={{ padding: '32px 56px 40px' }}>
        <ModuleLabel color={ink}>In use · pitch as magazine opener</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, background: cream, border: `1px solid ${ink}33`, marginTop: 6 }}>
          {/* left page */}
          <div style={{ padding: '40px 38px', borderRight: `1px solid ${ink}33`, position: 'relative' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: '0.32em', textTransform: 'uppercase', color: terra }}>
              CHAPTER · 002 / Feria de Cali ’26
            </div>
            <div style={{
              fontFamily: "'DM Serif Display', serif", fontStyle: 'italic',
              fontSize: 88, lineHeight: 0.95, letterSpacing: '-0.025em', marginTop: 22,
              color: ink,
            }}>
              The week<br/>the city<br/><span style={{ color: terra }}>becomes</span><br/>the floor.
            </div>
            <div style={{ marginTop: 26, fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: 16, lineHeight: 1.6, color: ink, maxWidth: '36ch' }}>
              December 25 → 30. Twenty-five dancers. The hotels we&rsquo;d book ourselves, the rooms locals actually go to, the right night for each one.
            </div>
            <div style={{ marginTop: 24, fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 20, color: sage }}>
              by Julian Villa &amp; Janusz Higher
            </div>
          </div>

          {/* right — photo placeholder + caption */}
          <div style={{ padding: '40px 38px', display: 'flex', flexDirection: 'column' }}>
            <div style={{
              flex: 1, minHeight: 320,
              background: `linear-gradient(160deg, ${terra} 0%, ${ochre} 60%, ${sage} 100%)`,
              position: 'relative', overflow: 'hidden',
              border: `1px solid ${ink}33`,
            }}>
              <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(circle at 70% 30%, ${cream}66 0, transparent 50%)` }} />
              <div style={{ position: 'absolute', top: 12, left: 14, fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: cream, background: ink, padding: '4px 8px' }}>
                Plate I · Salsódromo
              </div>
            </div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 16, color: ink, marginTop: 16, lineHeight: 1.4, maxWidth: '40ch' }}>
              &ldquo;You don&rsquo;t experience Cali like a tourist, but like a local.&rdquo;
            </div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 600, fontSize: 11, letterSpacing: '0.22em', textTransform: 'uppercase', color: terra, marginTop: 6 }}>
              — guest, 2024 trip
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board07Editorial = Board07Editorial;
