// Shared bits for all 5 brand-direction boards
// Each board is ~1280 × 1620 — laid out as: header strip, then asymmetric modules

const BOARD_W = 1280;
const BOARD_H = 1620;

const BoardHeader = ({ num, title, tagline, fg, bg, accent, serif }) => (
  <div style={{
    padding: '34px 56px 28px',
    background: bg,
    color: fg,
    borderBottom: `2px solid ${fg}`,
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  }}>
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 12,
      letterSpacing: '0.22em',
      textTransform: 'uppercase',
      opacity: 0.7,
    }}>
      <span>Direction {num} / 05</span>
      <span>Rumba · brand exploration · 2026</span>
    </div>
    <div style={{
      fontFamily: serif || "'Anton', sans-serif",
      fontSize: 72,
      lineHeight: 0.95,
      letterSpacing: '-0.02em',
      textTransform: 'uppercase',
      marginTop: 14,
      color: fg,
    }}>
      {title}
    </div>
    <div style={{
      fontFamily: "'DM Serif Display', serif",
      fontStyle: 'italic',
      fontSize: 22,
      color: accent,
      maxWidth: '60ch',
      marginTop: 8,
      lineHeight: 1.3,
    }}>
      “{tagline}”
    </div>
  </div>
);

const Swatch = ({ hex, name, role, dark }) => (
  <div style={{
    flex: 1,
    minWidth: 0,
    display: 'flex',
    flexDirection: 'column',
  }}>
    <div style={{
      height: 110,
      background: hex,
      border: '1px solid rgba(0,0,0,0.2)',
    }} />
    <div style={{
      padding: '10px 8px 0',
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 10.5,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: dark ? '#f3eddf' : '#1a1a1a',
    }}>
      <div style={{ opacity: 0.55, marginBottom: 3 }}>{role}</div>
      <div style={{ fontSize: 12, letterSpacing: '0.02em' }}>{name}</div>
      <div style={{ opacity: 0.6, fontSize: 10 }}>{hex}</div>
    </div>
  </div>
);

const Palette = ({ colors, dark }) => (
  <div style={{ display: 'flex', gap: 12, width: '100%' }}>
    {colors.map((c, i) => <Swatch key={i} {...c} dark={dark} />)}
  </div>
);

const ModuleLabel = ({ children, color, align }) => (
  <div style={{
    fontFamily: "'JetBrains Mono', monospace",
    fontSize: 10.5,
    letterSpacing: '0.22em',
    textTransform: 'uppercase',
    color: color || '#1a1a1a',
    opacity: 0.55,
    marginBottom: 14,
    textAlign: align || 'left',
  }}>
    {children}
  </div>
);

const TypeRow = ({ font, weight, label, sample, size, color, italic, letterSpacing, textTransform, lineHeight }) => (
  <div style={{
    display: 'grid',
    gridTemplateColumns: '170px 1fr',
    gap: 28,
    alignItems: 'baseline',
    padding: '14px 0',
    borderTop: `1px solid ${color}33`,
  }}>
    <div style={{
      fontFamily: "'JetBrains Mono', monospace",
      fontSize: 11,
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color,
      opacity: 0.7,
      lineHeight: 1.4,
    }}>
      {label}<br/><span style={{ opacity: 0.55 }}>{font}{weight ? ` · ${weight}` : ''}</span>
    </div>
    <div style={{
      fontFamily: font,
      fontWeight: weight || 400,
      fontSize: size,
      color,
      fontStyle: italic ? 'italic' : 'normal',
      letterSpacing: letterSpacing || 'normal',
      textTransform: textTransform || 'none',
      lineHeight: lineHeight || 1.1,
    }}>
      {sample}
    </div>
  </div>
);

Object.assign(window, { BOARD_W, BOARD_H, BoardHeader, Palette, Swatch, ModuleLabel, TypeRow });
