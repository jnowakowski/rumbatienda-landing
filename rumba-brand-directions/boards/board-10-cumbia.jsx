// 09 · CUMBIA STAMP
// Aesthetic: traditional Colombian/Cuban packaging — fruit-crate labels, cigar boxes, mercado tins.
// Ornate cartouche, decorative borders, heavy serif. Saffron + emerald + crimson + cream + indigo.

const Board09Cumbia = () => {
  const cream = '#f3e7c8';
  const ink = '#1a0f0a';
  const crimson = '#a8281a';
  const emerald = '#1c6f3a';
  const saffron = '#e7a814';
  const indigo = '#1b2c5b';

  // Ornate label component
  const Cartouche = ({ children, w = 320, h = 220, fill = cream, stroke = ink }) => (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: w, height: h, display: 'block' }}>
      {/* outer scallop frame */}
      <rect x="8" y="8" width={w-16} height={h-16} fill={fill} stroke={stroke} strokeWidth="2.5" />
      <rect x="14" y="14" width={w-28} height={h-28} fill="none" stroke={stroke} strokeWidth="0.8" />
      {/* corner ornaments */}
      {[[14,14,1,1],[w-14,14,-1,1],[14,h-14,1,-1],[w-14,h-14,-1,-1]].map(([x,y,sx,sy],i)=>(
        <g key={i} transform={`translate(${x} ${y}) scale(${sx} ${sy})`}>
          <path d="M 0 0 L 16 0 M 0 0 L 0 16 M 8 0 A 8 8 0 0 1 0 8" stroke={stroke} fill="none" strokeWidth="1.5"/>
          <circle cx="4" cy="4" r="1.6" fill={stroke}/>
        </g>
      ))}
      <foreignObject x="20" y="20" width={w-40} height={h-40}>
        <div xmlns="http://www.w3.org/1999/xhtml" style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
          {children}
        </div>
      </foreignObject>
    </svg>
  );

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: cream, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Familjen Grotesk', sans-serif" }}>

      <BoardHeader
        num="09"
        title="Cumbia Stamp"
        tagline="A fruit-crate label from a 1960s Cali mercado. Ornate, confident, aged on purpose — never gimmicky."
        fg={ink} bg={cream} accent={crimson}
        serif="'DM Serif Display', serif"
      />

      {/* LOGO */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', borderBottom: `2px solid ${ink}`, position: 'relative', zIndex: 2 }}>

        <div style={{ padding: '50px 56px 36px', borderRight: `2px solid ${ink}`, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <ModuleLabel color={ink}>Primary · oval cartouche</ModuleLabel>

          {/* oval label */}
          <div style={{ position: 'relative', marginTop: 10, width: 560, height: 360 }}>
            <svg viewBox="0 0 560 360" style={{ width: '100%', height: '100%' }}>
              {/* outer oval */}
              <ellipse cx="280" cy="180" rx="270" ry="170" fill={emerald} stroke={ink} strokeWidth="3" />
              <ellipse cx="280" cy="180" rx="258" ry="158" fill="none" stroke={cream} strokeWidth="1.5" strokeDasharray="3 4" />
              <ellipse cx="280" cy="180" rx="248" ry="148" fill="none" stroke={cream} strokeWidth="0.8" />
              {/* sun rays radiating from center */}
              <g transform="translate(280 180)">
                {Array.from({length: 24}).map((_,i)=>(
                  <line key={i} x1="0" y1="0" x2="0" y2="-260"
                    stroke={saffron} strokeWidth={i%2?2:4} opacity="0.18"
                    transform={`rotate(${i*15})`} />
                ))}
              </g>
              {/* curved top text */}
              <defs>
                <path id="top" d="M 60 180 A 220 130 0 0 1 500 180" />
                <path id="bot" d="M 80 180 A 200 110 0 0 0 480 180" />
              </defs>
              <text fontFamily="DM Serif Display" fontSize="22" fill={saffron} letterSpacing="8">
                <textPath href="#top" startOffset="50%" textAnchor="middle">★ EVENTOS DE BAILE ★</textPath>
              </text>
              <text fontFamily="DM Serif Display" fontSize="20" fill={cream} letterSpacing="6">
                <textPath href="#bot" startOffset="50%" textAnchor="middle">MEDELLÍN — CALI — COLOMBIA</textPath>
              </text>
              {/* main wordmark */}
              <text x="280" y="180" textAnchor="middle"
                fontFamily="DM Serif Display" fontStyle="italic"
                fontSize="118" fill={cream} letterSpacing="-3">
                Rumba
              </text>
              {/* tiny banner */}
              <g transform="translate(280 240)">
                <rect x="-80" y="-14" width="160" height="28" fill={crimson} stroke={ink} strokeWidth="1.5"/>
                <text x="0" y="6" textAnchor="middle" fontFamily="DM Serif Display" fontSize="18" fill={cream} letterSpacing="3">EST. MMXXIV</text>
              </g>
            </svg>
          </div>
        </div>

        {/* alt marks */}
        <div style={{ padding: '40px 32px', display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center', justifyContent: 'center' }}>
          <ModuleLabel color={ink}>Alt · rectangle stamp · small tin</ModuleLabel>

          <Cartouche w={300} h={170} fill={crimson} stroke={ink}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 56, color: cream, lineHeight: 0.9 }}>Rumba</div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 13, color: saffron, letterSpacing: '0.32em', marginTop: 4 }}>VOL. 3 · 2026</div>
          </Cartouche>

          <Cartouche w={300} h={120} fill={cream} stroke={ink}>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 38, color: ink, lineHeight: 1 }}>Rumba<span style={{ color: crimson }}>.</span></div>
            <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 11, color: emerald, letterSpacing: '0.36em', marginTop: 4 }}>★ MDE · CALI ★</div>
          </Cartouche>
        </div>
      </div>

      {/* PALETTE + TYPE */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', borderBottom: `2px solid ${ink}`, position: 'relative', zIndex: 2 }}>
        <div style={{ padding: '36px 56px', borderRight: `2px solid ${ink}` }}>
          <ModuleLabel color={ink}>Color · packaging four-color print</ModuleLabel>
          <Palette colors={[
            { hex: cream, name: 'Crema mercado', role: 'Bg' },
            { hex: ink, name: 'Tinta café', role: 'Text' },
            { hex: crimson, name: 'Carmín', role: 'Primary' },
            { hex: emerald, name: 'Esmeralda', role: 'Cool' },
            { hex: saffron, name: 'Azafrán', role: 'Warm' },
            { hex: indigo, name: 'Añil', role: 'Accent' },
          ]} />
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={ink}>Type · italic serif + Bungee stamps</ModuleLabel>
          <TypeRow font="DM Serif Display" italic label="Wordmark" sample="Rumba." size={56} color={ink} />
          <TypeRow font="DM Serif Display" label="Banner" sample="VOL. 3 · EST. MMXXVI" size={20} color={crimson} letterSpacing="0.16em" textTransform="uppercase" />
          <TypeRow font="Bungee" label="Stamp" sample="★ MEDELLÍN ★" size={18} color={emerald} letterSpacing="0.08em" />
          <TypeRow font="Familjen Grotesk" weight={500} label="Body" sample="Six nights in Cali — 25 dancers, max." size={17} color={ink} />
        </div>
      </div>

      {/* MOCK · cigar-box style trip pitch */}
      <div style={{ padding: '32px 56px 40px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={ink}>In use · the trip as a labeled tin</ModuleLabel>

        <div style={{
          background: indigo, color: cream,
          border: `3px solid ${ink}`,
          padding: '40px 36px',
          marginTop: 6,
          position: 'relative',
          overflow: 'hidden',
          minHeight: 360,
        }}>
          {/* gilded inner border */}
          <div style={{
            position: 'absolute', inset: 14,
            border: `1.5px solid ${saffron}`,
            pointerEvents: 'none',
          }} />
          <div style={{
            position: 'absolute', inset: 22,
            border: `0.8px dashed ${saffron}88`,
            pointerEvents: 'none',
          }} />

          <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 32, alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 14, color: saffron, letterSpacing: '0.36em', textTransform: 'uppercase' }}>★ Edition 002 · Feria de Cali ’68</div>
              <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 96, lineHeight: 0.9, color: cream, marginTop: 18 }}>
                Seis<br/>noches<br/><span style={{ color: saffron }}>de salsa.</span>
              </div>
              <div style={{ marginTop: 22, fontFamily: "'Familjen Grotesk', sans-serif", fontWeight: 500, fontSize: 17, lineHeight: 1.55, color: cream, opacity: 0.9, maxWidth: '46ch' }}>
                Twenty-five dancers. The hotels we&rsquo;d book ourselves, the rooms locals actually go to, the right night for each one.
              </div>

              <div style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                {[['DIC', '25 → 30'], ['GRUPO', '25 / max'], ['DESDE', 'SUIZA']].map(([k,v],i)=>(
                  <div key={i} style={{ border: `1.5px solid ${saffron}`, padding: '8px 14px', fontFamily: "'DM Serif Display', serif", fontSize: 13, color: saffron, letterSpacing: '0.22em', textTransform: 'uppercase' }}>
                    <span style={{ opacity: 0.7 }}>{k} ·</span> <span style={{ color: cream }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* mini cartouche */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <Cartouche w={280} h={280} fill={crimson} stroke={saffron}>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 14, color: saffron, letterSpacing: '0.3em' }}>★ NETO ★</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 96, color: cream, lineHeight: 0.9, marginTop: 8 }}>11<span style={{ color: saffron }}>/</span>25</div>
                <div style={{ fontFamily: "'DM Serif Display', serif", fontSize: 13, color: saffron, letterSpacing: '0.3em', marginTop: 8 }}>SPOTS TAKEN</div>
              </Cartouche>
              <button style={{
                background: saffron, color: ink,
                border: `2px solid ${ink}`,
                padding: '14px 24px',
                fontFamily: "'DM Serif Display', serif", fontStyle: 'italic', fontSize: 20,
                letterSpacing: '0.04em',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>Reservar pasaje →</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board09Cumbia = Board09Cumbia;
