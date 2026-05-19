// 10 · TYPE SOLO
// Aesthetic: extreme typographic reduction. One huge wordmark, zero decoration, palette stripped to bones.
// Cream + ink + one pink. The wordmark alone has to carry the entire identity.

const Board10Type = () => {
  const cream = '#fff8de';
  const ink = '#1c1c1c';
  const pink = '#e84c8a';
  const muted = '#7d6e60';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="10"
        title="Type Solo"
        tagline="Type only. Scale, weight, and one pink dot do all the work. The most confident option — if the word is right, you don&rsquo;t need illustration."
        fg={ink} bg={cream} accent={pink}
        serif="'Rubik', sans-serif"
      />

      {/* LOGO — huge */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr', borderBottom: `1.5px solid ${ink}` }}>
        <div style={{ padding: '64px 56px 48px', position: 'relative' }}>
          <ModuleLabel color={ink}>Primary · word does everything</ModuleLabel>

          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 360, lineHeight: 0.82, letterSpacing: '-0.07em',
            color: ink, textTransform: 'lowercase',
            position: 'relative',
          }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>

          <div style={{
            marginTop: 22, paddingTop: 18,
            borderTop: `1.5px solid ${ink}`,
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24,
            fontFamily: "'JetBrains Mono', monospace", fontSize: 11.5,
            letterSpacing: '0.18em', textTransform: 'uppercase',
            color: ink, opacity: 0.85,
          }}>
            <span>Eventos de baile</span>
            <span>Medellín ↔ Cali</span>
            <span>Est. 2024</span>
            <span style={{ textAlign: 'right', color: pink }}>● cuenta nueva 2026</span>
          </div>
        </div>
      </div>

      {/* ALT LOCKUPS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', borderBottom: `1.5px solid ${ink}` }}>
        <div style={{ padding: '40px 32px', borderRight: `1.5px solid ${ink}` }}>
          <ModuleLabel color={ink}>Stacked</ModuleLabel>
          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 110, lineHeight: 0.82, letterSpacing: '-0.06em',
            textTransform: 'lowercase', color: ink, marginTop: 16,
          }}>
            rum<br/>ba<span style={{ color: pink }}>.</span>
          </div>
        </div>

        <div style={{ padding: '40px 32px', borderRight: `1.5px solid ${ink}`, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ModuleLabel color={ink}>Inverted</ModuleLabel>
          <div style={{
            background: ink, color: cream,
            padding: '34px 32px',
            marginTop: 12,
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 110, lineHeight: 0.85, letterSpacing: '-0.06em',
            textTransform: 'lowercase',
          }}>
            rumba<span style={{ color: pink }}>.</span>
          </div>
        </div>

        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          <ModuleLabel color={ink}>Mono · favicon range</ModuleLabel>
          <div style={{ display: 'flex', gap: 14, alignItems: 'flex-end', marginTop: 12 }}>
            {[96, 64, 44, 28].map((sz) => (
              <div key={sz} style={{
                width: sz, height: sz, background: ink, color: cream,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: "'Rubik', sans-serif", fontWeight: 900,
                fontSize: sz * 0.7, letterSpacing: '-0.06em',
                lineHeight: 1, textTransform: 'lowercase',
              }}>r</div>
            ))}
            <div style={{
              width: 28, height: 28, background: pink, color: cream,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: "'Rubik', sans-serif", fontWeight: 900,
              fontSize: 18, letterSpacing: '-0.06em',
              lineHeight: 1, textTransform: 'lowercase',
            }}>.</div>
          </div>
        </div>
      </div>

      {/* PALETTE + TYPE */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `1.5px solid ${ink}` }}>
        <div style={{ padding: '36px 56px', borderRight: `1.5px solid ${ink}` }}>
          <ModuleLabel color={ink}>Color · three colors total</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Hueso', role: 'Bg' },
            { hex: ink, name: 'Tinta', role: 'Text' },
            { hex: pink, name: 'Rosa accent', role: 'Single' },
            { hex: muted, name: 'Niebla', role: 'Mute' },
          ]} />
          <div style={{ marginTop: 14, fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.16em', textTransform: 'uppercase', color: ink, opacity: 0.6, lineHeight: 1.7 }}>
            One pink, one ink, one cream — earned across every surface. <br/>
            No second accent. No tint variants. No gradients.
          </div>
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={ink}>Type · one face, four sizes</ModuleLabel>
          <TypeRow font="Rubik" weight={900} label="Display" sample="rumba." size={64} color={ink} letterSpacing="-0.05em" textTransform="lowercase" />
          <TypeRow font="Rubik" weight={900} label="Title" sample="Cali, December." size={32} color={ink} letterSpacing="-0.03em" />
          <TypeRow font="Rubik" weight={400} label="Body" sample="A small group lands in Cali during the only week of the year the entire city is a dance floor." size={16} color={ink} lineHeight={1.55} />
          <TypeRow font="JetBrains Mono" label="Caption" sample="DEC 25 → 30 · CALI" size={11} color={pink} letterSpacing="0.2em" textTransform="uppercase" />
        </div>
      </div>

      {/* MOCK · landing hero */}
      <div style={{ padding: '32px 56px 40px' }}>
        <ModuleLabel color={ink}>In use · landing hero (no illustration)</ModuleLabel>

        <div style={{ marginTop: 6, background: cream, border: `1.5px solid ${ink}`, padding: '54px 44px 40px', position: 'relative' }}>
          <div style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase',
            color: ink, opacity: 0.75, display: 'flex', justifyContent: 'space-between',
          }}>
            <span>rumba<span style={{ color: pink }}>.</span> &nbsp;/ trip 002</span>
            <span>11 / 25 confirmados</span>
          </div>

          <div style={{
            fontFamily: "'Rubik', sans-serif", fontWeight: 900,
            fontSize: 168, lineHeight: 0.85, letterSpacing: '-0.06em',
            textTransform: 'lowercase', color: ink, marginTop: 30,
          }}>
            seis días<br/>de salsa<span style={{ color: pink }}>.</span>
          </div>

          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 36, alignItems: 'end' }}>
            <div style={{ fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 500, fontSize: 20, lineHeight: 1.45, color: ink, maxWidth: '46ch' }}>
              Veinticinco bailarines, una semana en Cali, las noches que los locales saben. No es un tour — es el grupo.
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
              <button style={{
                background: 'transparent', color: ink,
                border: `1.5px solid ${ink}`,
                padding: '14px 22px',
                fontFamily: "'Rubik', sans-serif", fontWeight: 700, fontSize: 16,
                cursor: 'pointer', textTransform: 'lowercase',
              }}>programa</button>
              <button style={{
                background: ink, color: cream,
                border: `1.5px solid ${ink}`,
                padding: '14px 22px',
                fontFamily: "'Rubik', sans-serif", fontWeight: 700, fontSize: 16,
                cursor: 'pointer', textTransform: 'lowercase',
              }}>quiero ir <span style={{ color: pink }}>→</span></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board10Type = Board10Type;
