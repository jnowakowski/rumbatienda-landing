// Rumba · Brand Directions · canvas with 10 design directions, a test board, and a 16 variant logo lab

const { DesignCanvas, DCSection, DCArtboard } = window;
const {
  Board01Cartelera, Board02Flyer90, Board03Fania, Board04Sticker, Board05Sudor,
  Board06Feria, Board07LogoLab, Board07Editorial, Board08Crayon, Board09Cumbia,
  Board10Type, Board11LogoLabV2, Board12IconicTest,
  BOARD_W, BOARD_H,
} = window;

const Intro = () => (
  <div style={{
    width: BOARD_W, height: 720,
    background: '#382949', color: '#fff8de',
    padding: '72px 88px',
    fontFamily: "'Familjen Grotesk', sans-serif",
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    position: 'relative', overflow: 'hidden',
  }}>
    <div style={{ position: 'absolute', top: 32, right: 36, width: 64, height: 64, border: '1px solid #fff8de55', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, letterSpacing: '0.18em' }}>
      R<span style={{ color: '#e84c8a' }}>.</span>
    </div>

    <div>
      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12, letterSpacing: '0.28em', textTransform: 'uppercase', opacity: 0.65 }}>
        Rumba · brand exploration · for Julian
      </div>
      <div style={{ fontFamily: "'Rubik', sans-serif", fontWeight: 900, fontSize: 200, lineHeight: 0.88, letterSpacing: '-0.05em', textTransform: 'lowercase', marginTop: 36 }}>
        ten directions.<br /><span style={{ color: '#e84c8a' }}>one logo.</span><br /><span style={{ color: '#f4c324' }}>one icon test.</span>
      </div>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 80, marginTop: 30 }}>
      <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 30, lineHeight: 1.25, color: '#f4c324' }}>
        Start at the Logo Lab. Then scan the ten directions and the icon test. Tell us which lockup types right and which direction lands, then we refine from there.
      </div>
      <div style={{ fontSize: 16, lineHeight: 1.6, opacity: 0.85, columns: 2, columnGap: 36 }}>
        <p style={{ margin: '0 0 1em' }}>The current AI generated mark and the Gaceta site lean curatorial. The product is nightlife. These ten directions cover the range, from poster rough to brutalist to type only.</p>
        <p style={{ margin: 0 }}>Recommended baseline: <strong style={{ color: '#fff8de' }}>06 Feria aligned</strong> palette plus <strong style={{ color: '#fff8de' }}>Logo Lab #01 or #03</strong>. The new icon test adds the missing Colombian movement cue.</p>
      </div>
    </div>
  </div>
);

const App = () => (
  <DesignCanvas title="Rumba · 10 directions + icon test + logo lab">
    <DCSection id="brief" title="Brief">
      <DCArtboard id="intro" label="Read me first" width={BOARD_W} height={720}>
        <Intro />
      </DCArtboard>
    </DCSection>

    <DCSection id="logos" title="Logo Lab · pick a wordmark">
      <DCArtboard id="ll-v2" label="16 wordmark variants · in Feria aligned palette" width={BOARD_W} height={2100}>
        <Board11LogoLabV2 />
      </DCArtboard>
      <DCArtboard id="ll-v1" label="(v1) the original 9 variant logo lab" width={BOARD_W} height={1850}>
        <Board07LogoLab />
      </DCArtboard>
    </DCSection>

    <DCSection id="directions" title="Ten design directions">
      <DCArtboard id="b6" label="01 · Feria aligned · recommended · cream / verde / pink / aubergine" width={BOARD_W} height={BOARD_H}>
        <Board06Feria />
      </DCArtboard>
      <DCArtboard id="b8" label="02 · Editorial Suave · warm magazine, italic serif" width={BOARD_W} height={BOARD_H}>
        <Board07Editorial />
      </DCArtboard>
      <DCArtboard id="b9" label="03 · Crayon Caribe · hand painted folk art, mercado warmth" width={BOARD_W} height={BOARD_H}>
        <Board08Crayon />
      </DCArtboard>
      <DCArtboard id="b10" label="04 · Cumbia Stamp · ornate fruit crate label, dignified" width={BOARD_W} height={BOARD_H}>
        <Board09Cumbia />
      </DCArtboard>
      <DCArtboard id="b11" label="05 · Type Solo · typographic minimalism, no decoration" width={BOARD_W} height={BOARD_H}>
        <Board10Type />
      </DCArtboard>
      <DCArtboard id="b1" label="06 · Cartelera Callejera · street poster paste up, riso misprint" width={BOARD_W} height={BOARD_H}>
        <Board01Cartelera />
      </DCArtboard>
      <DCArtboard id="b2" label="07 · Flyer '99 · Y2K tropical maximalism, chrome bevel" width={BOARD_W} height={BOARD_H}>
        <Board02Flyer90 />
      </DCArtboard>
      <DCArtboard id="b3" label="08 · Salsa Brava · '70s Fania reissue, heavy serif" width={BOARD_W} height={BOARD_H}>
        <Board03Fania />
      </DCArtboard>
      <DCArtboard id="b4" label="09 · Sticker Culture · WhatsApp group chat vernacular" width={BOARD_W} height={BOARD_H}>
        <Board04Sticker />
      </DCArtboard>
      <DCArtboard id="b5" label="10 · Sudor · Neon · brutalist flash photography, single acid accent" width={BOARD_W} height={BOARD_H}>
        <Board05Sudor />
      </DCArtboard>
    </DCSection>

    <DCSection id="iconic-test" title="Illustrative test board">
      <DCArtboard id="b12" label="11 · Iconic test board · flat dancer, sun, palm, drum, same Feria family" width={BOARD_W} height={BOARD_H}>
        <Board12IconicTest />
      </DCArtboard>
    </DCSection>
  </DesignCanvas>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
