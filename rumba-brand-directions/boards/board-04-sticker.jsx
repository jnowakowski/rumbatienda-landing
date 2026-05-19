// 04 · STICKER CULTURE · WHATSAPP LATINO
// Aesthetic: chat-bubble vernacular, voice notes, sticker packs, group-chat energy

const Board04Sticker = () => {
  const bg = '#fff9f2';
  const ink = '#1b1730';
  const wa = '#25d366';       // whatsapp green
  const peach = '#ffb088';
  const lila = '#a78bfa';
  const sun = '#ffd23f';
  const coral = '#ff6b6b';

  return (
    <div style={{ width: BOARD_W, height: BOARD_H, background: bg, color: ink, position: 'relative', overflow: 'hidden', fontFamily: "'Fredoka', sans-serif" }}>

      <BoardHeader
        num="04"
        title="Sticker Culture"
        tagline="The group chat is the brand. Voice notes, stickers, screenshots — never a hotel folder."
        fg={ink} bg={sun} accent={coral}
        serif="'Fredoka', sans-serif"
      />

      {/* ===== LOGO ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', position: 'relative', zIndex: 2, borderBottom: `1.5px dashed ${ink}33` }}>

        <div style={{ padding: '56px', borderRight: `1.5px dashed ${ink}33` }}>
          <ModuleLabel color={ink}>Primary · friendly chunky lockup</ModuleLabel>

          <div style={{ marginTop: 10, display: 'inline-block', position: 'relative' }}>
            <div style={{
              fontFamily: "'Fredoka', sans-serif",
              fontWeight: 700,
              fontSize: 200,
              lineHeight: 0.92,
              letterSpacing: '-0.04em',
              color: ink,
            }}>
              Rumba
            </div>
            {/* star sticker */}
            <div style={{
              position: 'absolute', top: -10, right: -40,
              width: 80, height: 80,
              background: coral,
              border: `4px solid ${ink}`,
              borderRadius: 18,
              transform: 'rotate(14deg)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `4px 4px 0 ${ink}`,
              fontSize: 42,
            }}>💃</div>
            {/* underline scribble */}
            <svg style={{ position: 'absolute', bottom: -8, left: 4, width: 360, height: 22 }} viewBox="0 0 360 22">
              <path d="M 4 14 Q 90 4 180 12 T 354 8" stroke={wa} strokeWidth="6" fill="none" strokeLinecap="round" />
            </svg>
          </div>

          <div style={{ marginTop: 32, fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 38, color: ink, lineHeight: 1.1 }}>
            la rumba <span style={{ color: coral }}>nunca</span> se acaba <span style={{ color: wa }}>~</span>
          </div>
        </div>

        <div style={{ padding: '40px 36px', display: 'flex', flexDirection: 'column', gap: 18 }}>
          <ModuleLabel color={ink}>Sticker pack · drop-ins</ModuleLabel>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {[
              { bg: wa, fg: '#fff', label: 'voy ✋', rot: -6 },
              { bg: coral, fg: '#fff', label: '🌶️ hot', rot: 4 },
              { bg: sun, fg: ink, label: 'a las 11', rot: -3 },
              { bg: lila, fg: '#fff', label: 'paso 💫', rot: 5 },
              { bg: peach, fg: ink, label: '+1 yo', rot: -4 },
              { bg: '#fff', fg: ink, label: 'salsa?', rot: 8 },
            ].map((s, i) => (
              <div key={i} style={{
                background: s.bg, color: s.fg,
                border: `3px solid ${ink}`,
                borderRadius: 22,
                padding: '14px 8px',
                textAlign: 'center',
                fontFamily: "'Fredoka', sans-serif", fontWeight: 600, fontSize: 22,
                transform: `rotate(${s.rot}deg)`,
                boxShadow: `3px 3px 0 ${ink}`,
              }}>{s.label}</div>
            ))}
          </div>

          {/* voice-note bubble */}
          <div style={{
            marginTop: 8,
            background: wa, color: '#fff',
            borderRadius: '20px 20px 20px 4px',
            padding: '14px 16px',
            display: 'flex', alignItems: 'center', gap: 12,
            border: `3px solid ${ink}`,
            boxShadow: `3px 3px 0 ${ink}`,
            transform: 'rotate(-1deg)',
          }}>
            <div style={{ width: 34, height: 34, borderRadius: '50%', background: '#fff', color: wa, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 16 }}>▶</div>
            <div style={{ flex: 1, display: 'flex', gap: 2, alignItems: 'center', height: 34 }}>
              {[8,14,22,30,18,26,12,20,30,24,16,22,10,18,14,26,20,12,8].map((h, i) => (
                <div key={i} style={{ width: 3, height: h, background: '#fff', opacity: i < 8 ? 1 : 0.45, borderRadius: 2 }} />
              ))}
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 12 }}>0:38</div>
          </div>
        </div>
      </div>

      {/* ===== PALETTE + TYPE ===== */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', position: 'relative', zIndex: 2, borderBottom: `1.5px dashed ${ink}33` }}>
        <div style={{ padding: '36px 56px', borderRight: `1.5px dashed ${ink}33` }}>
          <ModuleLabel color={ink}>Color · sticker-pack friendly</ModuleLabel>
          <Palette colors={[
            { hex: bg, name: 'Crema', role: 'Bg' },
            { hex: ink, name: 'Tinta noche', role: 'Text' },
            { hex: wa, name: 'Verde chat', role: 'Primary' },
            { hex: coral, name: 'Coral', role: 'Hot' },
            { hex: sun, name: 'Sol', role: 'Warm' },
            { hex: lila, name: 'Lila', role: 'Cool' },
          ]} />
        </div>

        <div style={{ padding: '36px 44px' }}>
          <ModuleLabel color={ink}>Type · friendly + handwritten</ModuleLabel>
          <TypeRow font="Fredoka" weight={700} label="Display" sample="Rumba esta noche" size={36} color={ink} letterSpacing="-0.02em" />
          <TypeRow font="Caveat" weight={700} label="Handwritten" sample="ya estoy en la puerta wey" size={32} color={coral} />
          <TypeRow font="Fredoka" weight={500} label="UI body" sample="Tap to join the group" size={18} color={ink} />
          <TypeRow font="JetBrains Mono" label="Time / meta" sample="JUE 22:47 · 3 escribiendo…" size={12} color={ink} letterSpacing="0.12em" textTransform="uppercase" />
        </div>
      </div>

      {/* ===== HERO MOCK · GROUP CHAT ===== */}
      <div style={{ padding: '32px 56px 40px', position: 'relative', zIndex: 2 }}>
        <ModuleLabel color={ink}>In use · the trip's group chat is the program</ModuleLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 26, marginTop: 6 }}>

          {/* phone mock */}
          <div style={{
            background: ink,
            borderRadius: 32,
            padding: 6,
            boxShadow: `5px 5px 0 ${wa}, 10px 10px 0 ${ink}`,
          }}>
            <div style={{ background: bg, borderRadius: 26, padding: '14px 14px 18px', minHeight: 480 }}>
              {/* chat header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, paddingBottom: 12, borderBottom: `1px solid ${ink}22` }}>
                <div style={{ width: 38, height: 38, borderRadius: '50%', background: `linear-gradient(135deg, ${coral}, ${sun})`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, border: `2px solid ${ink}` }}>💃</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15 }}>Rumba · Cali '26</div>
                  <div style={{ fontSize: 11, color: ink, opacity: 0.55, fontFamily: "'JetBrains Mono', monospace" }}>25 personas · 11 confirmadas</div>
                </div>
                <div style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: 11, color: wa }}>● en línea</div>
              </div>

              {/* messages */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
                {/* received */}
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: '#fff', border: `2px solid ${ink}`, borderRadius: '16px 16px 16px 4px', padding: '8px 12px', fontSize: 14, boxShadow: `2px 2px 0 ${ink}22` }}>
                  <div style={{ fontSize: 10.5, color: lila, fontWeight: 700, marginBottom: 2 }}>Julian</div>
                  programa de hoy 👇<br/>
                  10pm · La Topa · orquesta viva
                </div>

                {/* sticker received */}
                <div style={{ alignSelf: 'flex-start', background: coral, color: '#fff', border: `2px solid ${ink}`, borderRadius: 14, padding: '10px 14px', fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 26, transform: 'rotate(-4deg)', boxShadow: `2px 2px 0 ${ink}`, display: 'inline-block' }}>
                  ¡a bailar! 🌶️
                </div>

                {/* sent */}
                <div style={{ alignSelf: 'flex-end', maxWidth: '78%', background: wa, color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '8px 12px', fontSize: 14 }}>
                  voy! me cambio y salgo
                </div>

                {/* sent voice */}
                <div style={{ alignSelf: 'flex-end', background: wa, color: '#fff', borderRadius: '16px 16px 4px 16px', padding: '8px 12px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: '#fff', color: wa, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>▶</div>
                  <div style={{ display: 'flex', gap: 2, alignItems: 'center', height: 22 }}>
                    {[6,10,16,22,12,18,8,14,20,16,10,16,8,14].map((h,i)=>(
                      <div key={i} style={{ width: 2, height: h, background: '#fff', opacity: i<6?1:0.4, borderRadius: 2 }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10 }}>0:14</div>
                </div>

                {/* received */}
                <div style={{ alignSelf: 'flex-start', maxWidth: '80%', background: '#fff', border: `2px solid ${ink}`, borderRadius: '16px 16px 16px 4px', padding: '8px 12px', fontSize: 14, boxShadow: `2px 2px 0 ${ink}22` }}>
                  <div style={{ fontSize: 10.5, color: peach, fontWeight: 700, marginBottom: 2 }}>Marlene 🇨🇭</div>
                  ay no, llegué tarde del avión, voy en uber 😩
                </div>

                {/* sent sticker */}
                <div style={{ alignSelf: 'flex-end', background: sun, color: ink, border: `2px solid ${ink}`, borderRadius: 14, padding: '10px 14px', fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 28, transform: 'rotate(3deg)', boxShadow: `2px 2px 0 ${ink}`, display: 'inline-block' }}>
                  tranqui, te guardo el cupo 💃
                </div>
              </div>
            </div>
          </div>

          {/* event card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            <div style={{
              background: '#fff', border: `3px solid ${ink}`, borderRadius: 22,
              padding: '20px 22px', boxShadow: `5px 5px 0 ${coral}`,
              position: 'relative',
            }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', color: ink, opacity: 0.55 }}>VIE 24 · OCT</div>
              <div style={{ fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 40, letterSpacing: '-0.02em', lineHeight: 1, marginTop: 6 }}>
                Salsa en La Topa
              </div>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 26, color: coral, marginTop: 4 }}>orquesta viva · 11pm</div>

              <div style={{ marginTop: 14, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                {['💃 nivel libre', '🍹 cocteles 25k', '📍 Cra 33', '🎫 entrada 30k'].map((t,i)=>(
                  <div key={i} style={{ background: bg, border: `2px solid ${ink}`, borderRadius: 999, padding: '5px 12px', fontSize: 13, fontWeight: 500 }}>{t}</div>
                ))}
              </div>

              <div style={{ marginTop: 18, display: 'flex', gap: 10, alignItems: 'center' }}>
                <div style={{ display: 'flex' }}>
                  {[coral, wa, lila, sun, peach].map((c,i)=>(
                    <div key={i} style={{ width: 28, height: 28, borderRadius: '50%', background: c, border: `2px solid ${ink}`, marginLeft: i ? -8 : 0, fontSize: 14, display:'flex', alignItems:'center', justifyContent:'center' }}>
                      {['🇨🇭','🇨🇴','🇫🇷','🇩🇪','🇨🇦'][i]}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 13, opacity: 0.7 }}>+ 6 más van</div>
              </div>
            </div>

            {/* CTA sticker */}
            <button style={{
              background: wa, color: '#fff',
              border: `3px solid ${ink}`,
              borderRadius: 999,
              padding: '18px 28px',
              fontFamily: "'Fredoka', sans-serif", fontWeight: 700, fontSize: 22,
              boxShadow: `4px 4px 0 ${ink}`,
              cursor: 'pointer',
              transform: 'rotate(-1deg)',
              alignSelf: 'flex-start',
            }}>
              cuéntenme + 💌
            </button>

            <div style={{ background: lila, color: '#fff', border: `3px solid ${ink}`, borderRadius: 20, padding: '16px 20px', boxShadow: `4px 4px 0 ${ink}`, transform: 'rotate(1.5deg)' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: 10.5, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.8 }}>From Julian</div>
              <div style={{ fontFamily: "'Caveat', cursive", fontWeight: 700, fontSize: 30, lineHeight: 1.05, marginTop: 4 }}>
                no es un tour.<br/>es el grupo.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Board04Sticker = Board04Sticker;
