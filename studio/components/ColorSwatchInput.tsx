import {useState} from 'react'
import type {ChangeEvent} from 'react'
import {set} from 'sanity'
import type {StringInputProps} from 'sanity'

const PRESETS = [
  {title: 'Violet',   value: '#ba9eff'},
  {title: 'Teal',     value: '#53ddfc'},
  {title: 'Coral',    value: '#ff946e'},
  {title: 'Rosa',     value: '#ff6e84'},
  {title: 'Lime',     value: '#a3e635'},
  {title: 'Amber',    value: '#fbbf24'},
  {title: 'Sky',      value: '#38bdf8'},
  {title: 'Lavanda',  value: '#c4b5fd'},
  {title: 'Menta',    value: '#6ee7b7'},
]

const HEX_RE = /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/

export function ColorSwatchInput(props: StringInputProps) {
  const {value, onChange} = props
  const isPreset = PRESETS.some((p) => p.value === value)
  const [customHex, setCustomHex] = useState(!isPreset && value ? value : '')

  function selectPreset(hex: string) {
    setCustomHex('')
    onChange(set(hex))
  }

  function handleCustomChange(e: ChangeEvent<HTMLInputElement>) {
    const raw = e.target.value
    setCustomHex(raw)
    if (HEX_RE.test(raw)) onChange(set(raw))
  }

  const activeColor = value ?? '#ba9eff'

  return (
    <div style={{display: 'flex', flexDirection: 'column', gap: 12, padding: '4px 0'}}>
      {/* Presets */}
      <div style={{display: 'flex', flexWrap: 'wrap', gap: 8}}>
        {PRESETS.map((color) => {
          const isSelected = value === color.value
          return (
            <button
              key={color.value}
              type="button"
              title={color.title}
              onClick={() => selectPreset(color.value)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '6px 14px 6px 8px',
                border: `2px solid ${isSelected ? color.value : 'rgba(255,255,255,0.08)'}`,
                borderRadius: 999,
                background: isSelected ? color.value + '22' : 'transparent',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
            >
              <span
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: '50%',
                  background: color.value,
                  flexShrink: 0,
                  boxShadow: isSelected ? `0 0 8px ${color.value}88` : 'none',
                }}
              />
              <span
                style={{
                  color: isSelected ? color.value : '#acaab5',
                  fontSize: 13,
                  fontWeight: isSelected ? 600 : 400,
                }}
              >
                {color.title}
              </span>
            </button>
          )
        })}
      </div>

      {/* Custom hex input */}
      <div style={{display: 'flex', alignItems: 'center', gap: 10}}>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: 6,
            background: HEX_RE.test(customHex) ? customHex : activeColor,
            flexShrink: 0,
            border: '2px solid rgba(255,255,255,0.12)',
          }}
        />
        <input
          type="text"
          placeholder="Color personalizado  (#a1b2c3)"
          value={customHex}
          onChange={handleCustomChange}
          style={{
            background: 'rgba(255,255,255,0.05)',
            border: `1.5px solid ${customHex && !HEX_RE.test(customHex) ? '#ff6e84' : 'rgba(255,255,255,0.12)'}`,
            borderRadius: 6,
            color: '#efecf8',
            fontSize: 13,
            padding: '6px 12px',
            width: 220,
            outline: 'none',
            fontFamily: 'monospace',
          }}
        />
        {customHex && !HEX_RE.test(customHex) && (
          <span style={{color: '#ff6e84', fontSize: 12}}>Hex inválido</span>
        )}
      </div>
    </div>
  )
}
