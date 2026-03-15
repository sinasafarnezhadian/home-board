(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-2114e986]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-2114e986]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-2114e986]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-2114e986]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-2114e986]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-2114e986]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-2114e986]{opacity:1}.edit-ctrl-btn[data-v-2114e986]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-2114e986]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-2114e986]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-2114e986]{width:2px;height:2px}.dot[data-v-2114e986]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-2114e986]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-2114e986]{justify-content:center;padding:16px 0}.state.error[data-v-2114e986]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-2114e986]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-2114e986 .8s linear infinite}@keyframes spin-2114e986{to{transform:rotate(360deg)}}.card.narrow[data-v-2114e986]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-2114e986]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-2114e986]{width:18px;height:18px;border-width:2px}.card.small[data-v-2114e986]:after{bottom:-12px;height:18px}.card.short[data-v-2114e986]{padding:14px 16px 12px}.card.short .label[data-v-2114e986]{font-size:.6rem}.resize-handle[data-v-2114e986]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-2114e986]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-2114e986]{opacity:1}.ha-toggle-row[data-v-2114e986]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-2114e986]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-2114e986]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-2114e986]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-2114e986]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-2114e986]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-ab143d98]{display:flex;align-items:flex-end;padding:0 4px 6px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-ab143d98]{align-items:center;padding:0 4px}.heading-text[data-v-ab143d98]{font-size:1.6rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1.1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-ab143d98]{font-size:1.2rem}.heading-input[data-v-ab143d98]{font-size:1.6rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1.1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-ab143d98]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-ab143d98]{opacity:1}.heading-edit-btn[data-v-ab143d98]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-ab143d98]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-ab143d98]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-ab143d98]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-ab143d98]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-ab143d98]{opacity:1}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-56cad792]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-56cad792]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-56cad792]{display:flex;align-items:center;gap:10px}.app-name[data-v-56cad792]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-56cad792]{display:flex;align-items:center}.clock[data-v-56cad792]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-56cad792]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-56cad792]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-56cad792]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-56cad792] .card{width:auto;min-height:unset}.page-tabs[data-v-56cad792]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-56cad792]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-56cad792]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-56cad792]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-56cad792]:not(.active):hover{color:#718096}.page-tab-label[data-v-56cad792]{white-space:nowrap}.page-tab-input[data-v-56cad792]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-56cad792]{max-width:340px}.page-delete-text[data-v-56cad792]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-56cad792]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-56cad792],.page-delete-confirm[data-v-56cad792]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-56cad792]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-56cad792]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-56cad792]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-56cad792]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-56cad792]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-56cad792]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-56cad792]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-56cad792]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-56cad792]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-56cad792]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-56cad792]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-56cad792],.burger-pop-leave-to[data-v-56cad792]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-56cad792]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-56cad792]:hover{background:#0000000a}.burger-item-icon[data-v-56cad792]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-56cad792],.burger-item-danger .burger-item-icon[data-v-56cad792]{color:#e53e3e}.burger-item-muted[data-v-56cad792]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-56cad792]{height:1px;background:#d2d8e0;margin:4px 14px}.card-dragging[data-v-56cad792]{opacity:.25}.drop-placeholder[data-v-56cad792]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var $l = Object.defineProperty;
var kl = (e, t, n) => t in e ? $l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ao = (e, t, n) => kl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Vs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const pe = {}, Xt = [], ct = () => {
}, ti = () => !1, Qn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Ks = (e) => e.startsWith("onUpdate:"), xe = Object.assign, Ws = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, xl = Object.prototype.hasOwnProperty, he = (e, t) => xl.call(e, t), X = Array.isArray, Qt = (e) => Mn(e) === "[object Map]", ni = (e) => Mn(e) === "[object Set]", uo = (e) => Mn(e) === "[object Date]", ee = (e) => typeof e == "function", me = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", fe = (e) => e !== null && typeof e == "object", si = (e) => (fe(e) || ee(e)) && ee(e.then) && ee(e.catch), oi = Object.prototype.toString, Mn = (e) => oi.call(e), Cl = (e) => Mn(e).slice(8, -1), ii = (e) => Mn(e) === "[object Object]", Zn = (e) => me(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, fn = /* @__PURE__ */ Vs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), es = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Sl = /-\w/g, et = es(
  (e) => e.replace(Sl, (t) => t.slice(1).toUpperCase())
), Tl = /\B([A-Z])/g, Pt = es(
  (e) => e.replace(Tl, "-$1").toLowerCase()
), li = es((e) => e.charAt(0).toUpperCase() + e.slice(1)), gs = es(
  (e) => e ? `on${li(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Dn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ri = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Us = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, El = (e) => {
  const t = me(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let co;
const ts = () => co || (co = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function It(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = me(s) ? Ll(s) : It(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (me(e) || fe(e))
    return e;
}
const Ml = /;(?![^(]*\))/g, Al = /:([^]+)/, Il = /\/\*[^]*?\*\//g;
function Ll(e) {
  const t = {};
  return e.replace(Il, "").split(Ml).forEach((n) => {
    if (n) {
      const s = n.split(Al);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ve(e) {
  let t = "";
  if (me(e))
    t = e;
  else if (X(e))
    for (let n = 0; n < e.length; n++) {
      const s = ve(e[n]);
      s && (t += s + " ");
    }
  else if (fe(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Pl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Rl = /* @__PURE__ */ Vs(Pl);
function ai(e) {
  return !!e || e === "";
}
function Ol(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = zs(e[s], t[s]);
  return n;
}
function zs(e, t) {
  if (e === t) return !0;
  let n = uo(e), s = uo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), s = ft(t), n || s)
    return e === t;
  if (n = X(e), s = X(t), n || s)
    return n && s ? Ol(e, t) : !1;
  if (n = fe(e), s = fe(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !zs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ui = (e) => !!(e && e.__v_isRef === !0), z = (e) => me(e) ? e : e == null ? "" : X(e) || fe(e) && (e.toString === oi || !ee(e.toString)) ? ui(e) ? z(e.value) : JSON.stringify(e, ci, 2) : String(e), ci = (e, t) => ui(t) ? ci(e, t.value) : Qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[vs(s, i) + " =>"] = o, n),
    {}
  )
} : ni(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => vs(n))
} : ft(t) ? vs(t) : fe(t) && !X(t) && !ii(t) ? String(t) : t, vs = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ft(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let je;
class Nl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = je, !t && je && (this.index = (je.scopes || (je.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = je;
      try {
        return je = this, t();
      } finally {
        je = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = je, je = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (je = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Dl() {
  return je;
}
let ge;
const ms = /* @__PURE__ */ new WeakSet();
class fi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && je.active && je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, ms.has(this) && (ms.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || hi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fo(this), pi(this);
    const t = ge, n = tt;
    ge = this, tt = !0;
    try {
      return this.fn();
    } finally {
      gi(this), ge = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ys(t);
      this.deps = this.depsTail = void 0, fo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? ms.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ts(this) && this.run();
  }
  get dirty() {
    return Ts(this);
  }
}
let di = 0, dn, hn;
function hi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = hn, hn = e;
    return;
  }
  e.next = dn, dn = e;
}
function Js() {
  di++;
}
function Gs() {
  if (--di > 0)
    return;
  if (hn) {
    let t = hn;
    for (hn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; dn; ) {
    let t = dn;
    for (dn = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function pi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function gi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ys(s), Fl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ts(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (vi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function vi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === bn) || (e.globalVersion = bn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ts(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ge, s = tt;
  ge = e, tt = !0;
  try {
    pi(e);
    const o = e.fn(e._value);
    (t.version === 0 || ut(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ge = n, tt = s, gi(e), e.flags &= -3;
  }
}
function Ys(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Ys(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Fl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const mi = [];
function yt() {
  mi.push(tt), tt = !1;
}
function bt() {
  const e = mi.pop();
  tt = e === void 0 ? !0 : e;
}
function fo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ge;
    ge = void 0;
    try {
      t();
    } finally {
      ge = n;
    }
  }
}
let bn = 0;
class Hl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ge || !tt || ge === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ge)
      n = this.activeLink = new Hl(ge, this), ge.deps ? (n.prevDep = ge.depsTail, ge.depsTail.nextDep = n, ge.depsTail = n) : ge.deps = ge.depsTail = n, yi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ge.depsTail, n.nextDep = void 0, ge.depsTail.nextDep = n, ge.depsTail = n, ge.deps === n && (ge.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, bn++, this.notify(t);
  }
  notify(t) {
    Js();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Gs();
    }
  }
}
function yi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        yi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Kn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ Symbol(
  ""
), Es = /* @__PURE__ */ Symbol(
  ""
), _n = /* @__PURE__ */ Symbol(
  ""
);
function Me(e, t, n) {
  if (tt && ge) {
    let s = Kn.get(e);
    s || Kn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new qs()), o.map = s, o.key = n), o.track();
  }
}
function vt(e, t, n, s, o, i) {
  const l = Kn.get(e);
  if (!l) {
    bn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Js(), t === "clear")
    l.forEach(r);
  else {
    const a = X(e), c = a && Zn(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((d, y) => {
        (y === "length" || y === _n || !ft(y) && y >= u) && r(d);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), c && r(l.get(_n)), t) {
        case "add":
          a ? c && r(l.get("length")) : (r(l.get(jt)), Qt(e) && r(l.get(Es)));
          break;
        case "delete":
          a || (r(l.get(jt)), Qt(e) && r(l.get(Es)));
          break;
        case "set":
          Qt(e) && r(l.get(jt));
          break;
      }
  }
  Gs();
}
function Bl(e, t) {
  const n = Kn.get(e);
  return n && n.get(t);
}
function Gt(e) {
  const t = /* @__PURE__ */ ce(e);
  return t === e ? t : (Me(t, "iterate", _n), /* @__PURE__ */ ze(e) ? t : t.map(nt));
}
function ns(e) {
  return Me(e = /* @__PURE__ */ ce(e), "iterate", _n), e;
}
function rt(e, t) {
  return /* @__PURE__ */ _t(e) ? on(/* @__PURE__ */ Vt(e) ? nt(t) : t) : nt(t);
}
const jl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ys(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return Gt(this).concat(
      ...e.map((t) => X(t) ? Gt(t) : t)
    );
  },
  entries() {
    return ys(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
  },
  every(e, t) {
    return dt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return dt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return dt(
      this,
      "find",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return dt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return dt(
      this,
      "findLast",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return dt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return dt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return bs(this, "includes", e);
  },
  indexOf(...e) {
    return bs(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return dt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return rn(this, "pop");
  },
  push(...e) {
    return rn(this, "push", e);
  },
  reduce(e, ...t) {
    return ho(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return ho(this, "reduceRight", e, t);
  },
  shift() {
    return rn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return dt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return rn(this, "splice", e);
  },
  toReversed() {
    return Gt(this).toReversed();
  },
  toSorted(e) {
    return Gt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Gt(this).toSpliced(...e);
  },
  unshift(...e) {
    return rn(this, "unshift", e);
  },
  values() {
    return ys(this, "values", (e) => rt(this, e));
  }
};
function ys(e, t, n) {
  const s = ns(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ ze(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Vl = Array.prototype;
function dt(e, t, n, s, o, i) {
  const l = ns(e), r = l !== e && !/* @__PURE__ */ ze(e), a = l[t];
  if (a !== Vl[t]) {
    const d = a.apply(e, i);
    return r ? nt(d) : d;
  }
  let c = n;
  l !== e && (r ? c = function(d, y) {
    return n.call(this, rt(e, d), y, e);
  } : n.length > 2 && (c = function(d, y) {
    return n.call(this, d, y, e);
  }));
  const u = a.call(l, c, s);
  return r && o ? o(u) : u;
}
function ho(e, t, n, s) {
  const o = ns(e), i = o !== e && !/* @__PURE__ */ ze(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(c, u, d) {
    return r && (r = !1, c = rt(e, c)), n.call(this, c, rt(e, u), d, e);
  }) : n.length > 3 && (l = function(c, u, d) {
    return n.call(this, c, u, d, e);
  }));
  const a = o[t](l, ...s);
  return r ? rt(e, a) : a;
}
function bs(e, t, n) {
  const s = /* @__PURE__ */ ce(e);
  Me(s, "iterate", _n);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ os(n[0]) ? (n[0] = /* @__PURE__ */ ce(n[0]), s[t](...n)) : o;
}
function rn(e, t, n = []) {
  yt(), Js();
  const s = (/* @__PURE__ */ ce(e))[t].apply(e, n);
  return Gs(), bt(), s;
}
const Kl = /* @__PURE__ */ Vs("__proto__,__v_isRef,__isVue"), bi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Wl(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ ce(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class _i {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, i = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return i;
    if (n === "__v_raw")
      return s === (o ? i ? er : xi : i ? ki : $i).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = X(t);
    if (!o) {
      let a;
      if (l && (a = jl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Wl;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ ke(t) ? t : s
    );
    if ((ft(n) ? bi.has(n) : Kl(n)) || (o || Me(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ ke(r)) {
      const a = l && Zn(n) ? r : r.value;
      return o && fe(a) ? /* @__PURE__ */ As(a) : a;
    }
    return fe(r) ? o ? /* @__PURE__ */ As(r) : /* @__PURE__ */ ss(r) : r;
  }
}
class wi extends _i {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = X(t) && Zn(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ _t(i);
      if (!/* @__PURE__ */ ze(s) && !/* @__PURE__ */ _t(s) && (i = /* @__PURE__ */ ce(i), s = /* @__PURE__ */ ce(s)), !l && /* @__PURE__ */ ke(i) && !/* @__PURE__ */ ke(s))
        return c || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : he(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ ke(t) ? t : o
    );
    return t === /* @__PURE__ */ ce(o) && (r ? ut(s, i) && vt(t, "set", n, s) : vt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = he(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && vt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ft(n) || !bi.has(n)) && Me(t, "has", n), s;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      X(t) ? "length" : jt
    ), Reflect.ownKeys(t);
  }
}
class Ul extends _i {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return !0;
  }
  deleteProperty(t, n) {
    return !0;
  }
}
const zl = /* @__PURE__ */ new wi(), Jl = /* @__PURE__ */ new Ul(), Gl = /* @__PURE__ */ new wi(!0);
const Ms = (e) => e, Pn = (e) => Reflect.getPrototypeOf(e);
function Yl(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ ce(o), l = Qt(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, c = o[e](...s), u = n ? Ms : t ? on : nt;
    return !t && Me(
      i,
      "iterate",
      a ? Es : jt
    ), xe(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: d, done: y } = c.next();
          return y ? { value: d, done: y } : {
            value: r ? [u(d[0]), u(d[1])] : u(d),
            done: y
          };
        }
      }
    );
  };
}
function Rn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ql(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(o);
      e || (ut(o, r) && Me(l, "get", o), Me(l, "get", r));
      const { has: a } = Pn(l), c = t ? Ms : e ? on : nt;
      if (a.call(l, o))
        return c(i.get(o));
      if (a.call(l, r))
        return c(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Me(/* @__PURE__ */ ce(o), "iterate", jt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ ce(i), r = /* @__PURE__ */ ce(o);
      return e || (ut(o, r) && Me(l, "has", o), Me(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ ce(r), c = t ? Ms : e ? on : nt;
      return !e && Me(a, "iterate", jt), r.forEach((u, d) => o.call(i, c(u), c(d), l));
    }
  };
  return xe(
    n,
    e ? {
      add: Rn("add"),
      set: Rn("set"),
      delete: Rn("delete"),
      clear: Rn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ce(this), l = Pn(i), r = /* @__PURE__ */ ce(o), a = !t && !/* @__PURE__ */ ze(o) && !/* @__PURE__ */ _t(o) ? r : o;
        return l.has.call(i, a) || ut(o, a) && l.has.call(i, o) || ut(r, a) && l.has.call(i, r) || (i.add(a), vt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ ze(i) && !/* @__PURE__ */ _t(i) && (i = /* @__PURE__ */ ce(i));
        const l = /* @__PURE__ */ ce(this), { has: r, get: a } = Pn(l);
        let c = r.call(l, o);
        c || (o = /* @__PURE__ */ ce(o), c = r.call(l, o));
        const u = a.call(l, o);
        return l.set(o, i), c ? ut(i, u) && vt(l, "set", o, i) : vt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ce(this), { has: l, get: r } = Pn(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ ce(o), a = l.call(i, o)), r && r.call(i, o);
        const c = i.delete(o);
        return a && vt(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ce(this), i = o.size !== 0, l = o.clear();
        return i && vt(
          o,
          "clear",
          void 0,
          void 0
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Yl(o, e, t);
  }), n;
}
function Xs(e, t) {
  const n = ql(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    he(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Xl = {
  get: /* @__PURE__ */ Xs(!1, !1)
}, Ql = {
  get: /* @__PURE__ */ Xs(!1, !0)
}, Zl = {
  get: /* @__PURE__ */ Xs(!0, !1)
};
const $i = /* @__PURE__ */ new WeakMap(), ki = /* @__PURE__ */ new WeakMap(), xi = /* @__PURE__ */ new WeakMap(), er = /* @__PURE__ */ new WeakMap();
function tr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function nr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : tr(Cl(e));
}
// @__NO_SIDE_EFFECTS__
function ss(e) {
  return /* @__PURE__ */ _t(e) ? e : Qs(
    e,
    !1,
    zl,
    Xl,
    $i
  );
}
// @__NO_SIDE_EFFECTS__
function sr(e) {
  return Qs(
    e,
    !1,
    Gl,
    Ql,
    ki
  );
}
// @__NO_SIDE_EFFECTS__
function As(e) {
  return Qs(
    e,
    !0,
    Jl,
    Zl,
    xi
  );
}
function Qs(e, t, n, s, o) {
  if (!fe(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = nr(e);
  if (i === 0)
    return e;
  const l = o.get(e);
  if (l)
    return l;
  const r = new Proxy(
    e,
    i === 2 ? s : n
  );
  return o.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Vt(e) {
  return /* @__PURE__ */ _t(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function _t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function os(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ce(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ce(t) : e;
}
function or(e) {
  return !he(e, "__v_skip") && Object.isExtensible(e) && ri(e, "__v_skip", !0), e;
}
const nt = (e) => fe(e) ? /* @__PURE__ */ ss(e) : e, on = (e) => fe(e) ? /* @__PURE__ */ As(e) : e;
// @__NO_SIDE_EFFECTS__
function ke(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  return ir(e, !1);
}
function ir(e, t) {
  return /* @__PURE__ */ ke(e) ? e : new lr(e, t);
}
class lr {
  constructor(t, n) {
    this.dep = new qs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ce(t), this._value = n ? t : nt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ze(t) || /* @__PURE__ */ _t(t);
    t = s ? t : /* @__PURE__ */ ce(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : nt(t), this.dep.trigger());
  }
}
function Ve(e) {
  return /* @__PURE__ */ ke(e) ? e.value : e;
}
const rr = {
  get: (e, t, n) => t === "__v_raw" ? e : Ve(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ ke(o) && !/* @__PURE__ */ ke(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Ci(e) {
  return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, rr);
}
class ar {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ ce(t);
    let o = !0, i = t;
    if (!X(t) || !Zn(String(n)))
      do
        o = !/* @__PURE__ */ os(i) || /* @__PURE__ */ ze(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ve(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ ke(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ ke(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Bl(this._raw, this._key);
  }
}
class ur {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function Zs(e, t, n) {
  return /* @__PURE__ */ ke(e) ? e : ee(e) ? new ur(e) : fe(e) && arguments.length > 1 ? cr(e, t, n) : /* @__PURE__ */ U(e);
}
function cr(e, t, n) {
  return new ar(e, t, n);
}
class fr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = bn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ge !== this)
      return hi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return vi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function dr(e, t, n = !1) {
  let s, o;
  return ee(e) ? s = e : (s = e.get, o = e.set), new fr(s, o, n);
}
const On = {}, Wn = /* @__PURE__ */ new WeakMap();
let Ft;
function hr(e, t = !1, n = Ft) {
  if (n) {
    let s = Wn.get(n);
    s || Wn.set(n, s = []), s.push(e);
  }
}
function pr(e, t, n = pe) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, c = (R) => o ? R : /* @__PURE__ */ ze(R) || o === !1 || o === 0 ? mt(R, 1) : mt(R);
  let u, d, y, $, F = !1, E = !1;
  if (/* @__PURE__ */ ke(e) ? (d = () => e.value, F = /* @__PURE__ */ ze(e)) : /* @__PURE__ */ Vt(e) ? (d = () => c(e), F = !0) : X(e) ? (E = !0, F = e.some((R) => /* @__PURE__ */ Vt(R) || /* @__PURE__ */ ze(R)), d = () => e.map((R) => {
    if (/* @__PURE__ */ ke(R))
      return R.value;
    if (/* @__PURE__ */ Vt(R))
      return c(R);
    if (ee(R))
      return a ? a(R, 2) : R();
  })) : ee(e) ? t ? d = a ? () => a(e, 2) : e : d = () => {
    if (y) {
      yt();
      try {
        y();
      } finally {
        bt();
      }
    }
    const R = Ft;
    Ft = u;
    try {
      return a ? a(e, 3, [$]) : e($);
    } finally {
      Ft = R;
    }
  } : d = ct, t && o) {
    const R = d, V = o === !0 ? 1 / 0 : o;
    d = () => mt(R(), V);
  }
  const O = Dl(), x = () => {
    u.stop(), O && O.active && Ws(O.effects, u);
  };
  if (i && t) {
    const R = t;
    t = (...V) => {
      R(...V), x();
    };
  }
  let m = E ? new Array(e.length).fill(On) : On;
  const T = (R) => {
    if (!(!(u.flags & 1) || !u.dirty && !R))
      if (t) {
        const V = u.run();
        if (o || F || (E ? V.some((Z, le) => ut(Z, m[le])) : ut(V, m))) {
          y && y();
          const Z = Ft;
          Ft = u;
          try {
            const le = [
              V,
              // pass undefined as the old value when it's changed for the first time
              m === On ? void 0 : E && m[0] === On ? [] : m,
              $
            ];
            m = V, a ? a(t, 3, le) : (
              // @ts-expect-error
              t(...le)
            );
          } finally {
            Ft = Z;
          }
        }
      } else
        u.run();
  };
  return r && r(T), u = new fi(d), u.scheduler = l ? () => l(T, !1) : T, $ = (R) => hr(R, !1, u), y = u.onStop = () => {
    const R = Wn.get(u);
    if (R) {
      if (a)
        a(R, 4);
      else
        for (const V of R) V();
      Wn.delete(u);
    }
  }, t ? s ? T(!0) : m = u.run() : l ? l(T.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function mt(e, t = 1 / 0, n) {
  if (t <= 0 || !fe(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ ke(e))
    mt(e.value, t, n);
  else if (X(e))
    for (let s = 0; s < e.length; s++)
      mt(e[s], t, n);
  else if (ni(e) || Qt(e))
    e.forEach((s) => {
      mt(s, t, n);
    });
  else if (ii(e)) {
    for (const s in e)
      mt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && mt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function An(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    is(o, t, n);
  }
}
function st(e, t, n, s) {
  if (ee(e)) {
    const o = An(e, t, n, s);
    return o && si(o) && o.catch((i) => {
      is(i, t, n);
    }), o;
  }
  if (X(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(st(e[i], t, n, s));
    return o;
  }
}
function is(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || pe;
  if (t) {
    let r = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let d = 0; d < u.length; d++)
          if (u[d](e, a, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      yt(), An(i, null, 10, [
        e,
        a,
        c
      ]), bt();
      return;
    }
  }
  gr(e, n, o, s, l);
}
function gr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Re = [];
let it = -1;
const Zt = [];
let Et = null, Yt = 0;
const Si = /* @__PURE__ */ Promise.resolve();
let Un = null;
function ls(e) {
  const t = Un || Si;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function vr(e) {
  let t = it + 1, n = Re.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Re[s], i = wn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function eo(e) {
  if (!(e.flags & 1)) {
    const t = wn(e), n = Re[Re.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= wn(n) ? Re.push(e) : Re.splice(vr(t), 0, e), e.flags |= 1, Ti();
  }
}
function Ti() {
  Un || (Un = Si.then(Mi));
}
function mr(e) {
  X(e) ? Zt.push(...e) : Et && e.id === -1 ? Et.splice(Yt + 1, 0, e) : e.flags & 1 || (Zt.push(e), e.flags |= 1), Ti();
}
function po(e, t, n = it + 1) {
  for (; n < Re.length; n++) {
    const s = Re[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Re.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ei(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort(
      (n, s) => wn(n) - wn(s)
    );
    if (Zt.length = 0, Et) {
      Et.push(...t);
      return;
    }
    for (Et = t, Yt = 0; Yt < Et.length; Yt++) {
      const n = Et[Yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Et = null, Yt = 0;
  }
}
const wn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Mi(e) {
  try {
    for (it = 0; it < Re.length; it++) {
      const t = Re[it];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), An(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; it < Re.length; it++) {
      const t = Re[it];
      t && (t.flags &= -2);
    }
    it = -1, Re.length = 0, Ei(), Un = null, (Re.length || Zt.length) && Mi();
  }
}
let Ge = null, Ai = null;
function zn(e) {
  const t = Ge;
  return Ge = e, Ai = e && e.type.__scopeId || null, t;
}
function Ii(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Yn(-1);
    const i = zn(t);
    let l;
    try {
      l = e(...o);
    } finally {
      zn(i), s._d && Yn(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function wt(e, t) {
  if (Ge === null)
    return e;
  const n = fs(Ge), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = pe] = t[o];
    i && (ee(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && mt(l), s.push({
      dir: i,
      instance: n,
      value: l,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function Rt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const r = o[l];
    i && (r.oldValue = i[l].value);
    let a = r.dir[s];
    a && (yt(), st(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), bt());
  }
}
function yr(e, t) {
  if (Ne) {
    let n = Ne.provides;
    const s = Ne.parent && Ne.parent.provides;
    s === n && (n = Ne.provides = Object.create(s)), n[e] = t;
  }
}
function Fn(e, t, n = !1) {
  const s = cl();
  if (s || en) {
    let o = en ? en._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ee(t) ? t.call(s && s.proxy) : t;
  }
}
const br = /* @__PURE__ */ Symbol.for("v-scx"), _r = () => Fn(br);
function Mt(e, t, n) {
  return Li(e, t, n);
}
function Li(e, t, n = pe) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = xe({}, n), a = t && s || !t && i !== "post";
  let c;
  if (Sn) {
    if (i === "sync") {
      const $ = _r();
      c = $.__watcherHandles || ($.__watcherHandles = []);
    } else if (!a) {
      const $ = () => {
      };
      return $.stop = ct, $.resume = ct, $.pause = ct, $;
    }
  }
  const u = Ne;
  r.call = ($, F, E) => st($, u, F, E);
  let d = !1;
  i === "post" ? r.scheduler = ($) => {
    Ee($, u && u.suspense);
  } : i !== "sync" && (d = !0, r.scheduler = ($, F) => {
    F ? $() : eo($);
  }), r.augmentJob = ($) => {
    t && ($.flags |= 4), d && ($.flags |= 2, u && ($.id = u.uid, $.i = u));
  };
  const y = pr(e, t, r);
  return Sn && (c ? c.push(y) : a && y()), y;
}
function wr(e, t, n) {
  const s = this.proxy, o = me(e) ? e.includes(".") ? Pi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ee(t) ? i = t : (i = t.handler, n = t);
  const l = In(this), r = Li(o, i.bind(s), n);
  return l(), r;
}
function Pi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ri = /* @__PURE__ */ Symbol("_vte"), Oi = (e) => e.__isTeleport, pn = (e) => e && (e.disabled || e.disabled === ""), go = (e) => e && (e.defer || e.defer === ""), vo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, mo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Is = (e, t) => {
  const n = e && e.to;
  return me(n) ? t ? t(n) : null : n;
}, Ni = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, c) {
    const {
      mc: u,
      pc: d,
      pbc: y,
      o: { insert: $, querySelector: F, createText: E, createComment: O }
    } = c, x = pn(t.props);
    let { shapeFlag: m, children: T, dynamicChildren: R } = t;
    if (e == null) {
      const V = t.el = E(""), Z = t.anchor = E("");
      $(V, n, s), $(Z, n, s);
      const le = (I, D) => {
        m & 16 && u(
          T,
          I,
          D,
          o,
          i,
          l,
          r,
          a
        );
      }, te = () => {
        const I = t.target = Is(t.props, F), D = Ls(I, t, E, $);
        I && (l !== "svg" && vo(I) ? l = "svg" : l !== "mathml" && mo(I) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(I), x || (le(I, D), Hn(t, !1)));
      };
      x && (le(n, Z), Hn(t, !0)), go(t.props) ? (t.el.__isMounted = !1, Ee(() => {
        te(), delete t.el.__isMounted;
      }, i)) : te();
    } else {
      if (go(t.props) && e.el.__isMounted === !1) {
        Ee(() => {
          Ni.process(
            e,
            t,
            n,
            s,
            o,
            i,
            l,
            r,
            a,
            c
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const V = t.anchor = e.anchor, Z = t.target = e.target, le = t.targetAnchor = e.targetAnchor, te = pn(e.props), I = te ? n : Z, D = te ? V : le;
      if (l === "svg" || vo(Z) ? l = "svg" : (l === "mathml" || mo(Z)) && (l = "mathml"), R ? (y(
        e.dynamicChildren,
        R,
        I,
        o,
        i,
        l,
        r
      ), so(e, t, !0)) : a || d(
        e,
        t,
        I,
        D,
        o,
        i,
        l,
        r,
        !1
      ), x)
        te ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Nn(
          t,
          n,
          V,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const f = t.target = Is(
          t.props,
          F
        );
        f && Nn(
          t,
          f,
          null,
          c,
          0
        );
      } else te && Nn(
        t,
        Z,
        le,
        c,
        1
      );
      Hn(t, x);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: r,
      anchor: a,
      targetStart: c,
      targetAnchor: u,
      target: d,
      props: y
    } = e;
    if (d && (o(c), o(u)), i && o(a), l & 16) {
      const $ = i || !pn(y);
      for (let F = 0; F < r.length; F++) {
        const E = r[F];
        s(
          E,
          t,
          n,
          $,
          !!E.dynamicChildren
        );
      }
    }
  },
  move: Nn,
  hydrate: $r
};
function Nn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: c, props: u } = e, d = i === 2;
  if (d && s(l, t, n), (!d || pn(u)) && a & 16)
    for (let y = 0; y < c.length; y++)
      o(
        c[y],
        t,
        n,
        2
      );
  d && s(r, t, n);
}
function $r(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: c, createText: u }
}, d) {
  function y(O, x) {
    let m = x;
    for (; m; ) {
      if (m && m.nodeType === 8) {
        if (m.data === "teleport start anchor")
          t.targetStart = m;
        else if (m.data === "teleport anchor") {
          t.targetAnchor = m, O._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      m = l(m);
    }
  }
  function $(O, x) {
    x.anchor = d(
      l(O),
      x,
      r(O),
      n,
      s,
      o,
      i
    );
  }
  const F = t.target = Is(
    t.props,
    a
  ), E = pn(t.props);
  if (F) {
    const O = F._lpa || F.firstChild;
    t.shapeFlag & 16 && (E ? ($(e, t), y(F, O), t.targetAnchor || Ls(
      F,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === F ? e : null
    )) : (t.anchor = l(e), y(F, O), t.targetAnchor || Ls(F, t, u, c), d(
      O && l(O),
      t,
      F,
      n,
      s,
      o,
      i
    ))), Hn(t, E);
  } else E && t.shapeFlag & 16 && ($(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const kt = Ni;
function Hn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ls(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[Ri] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), an = /* @__PURE__ */ Symbol("_enterCb");
function kr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return kn(() => {
    e.isMounted = !0;
  }), Wi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], Di = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Je,
  onEnter: Je,
  onAfterEnter: Je,
  onEnterCancelled: Je,
  // leave
  onBeforeLeave: Je,
  onLeave: Je,
  onAfterLeave: Je,
  onLeaveCancelled: Je,
  // appear
  onBeforeAppear: Je,
  onAppear: Je,
  onAfterAppear: Je,
  onAppearCancelled: Je
}, Fi = (e) => {
  const t = e.subTree;
  return t.component ? Fi(t.component) : t;
}, xr = {
  name: "BaseTransition",
  props: Di,
  setup(e, { slots: t }) {
    const n = cl(), s = kr();
    return () => {
      const o = t.default && ji(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Hi(o), l = /* @__PURE__ */ ce(e), { mode: r } = l;
      if (s.isLeaving)
        return _s(i);
      const a = yo(i);
      if (!a)
        return _s(i);
      let c = Ps(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (d) => c = d
      );
      a.type !== Oe && $n(a, c);
      let u = n.subTree && yo(n.subTree);
      if (u && u.type !== Oe && !Ht(u, a) && Fi(n).type !== Oe) {
        let d = Ps(
          u,
          l,
          s,
          n
        );
        if ($n(u, d), r === "out-in" && a.type !== Oe)
          return s.isLeaving = !0, d.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete d.afterLeave, u = void 0;
          }, _s(i);
        r === "in-out" && a.type !== Oe ? d.delayLeave = (y, $, F) => {
          const E = Bi(
            s,
            u
          );
          E[String(u.key)] = u, y[lt] = () => {
            $(), y[lt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            F(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Hi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Oe) {
        t = n;
        break;
      }
  }
  return t;
}
const Cr = xr;
function Bi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ps(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: d,
    onBeforeLeave: y,
    onLeave: $,
    onAfterLeave: F,
    onLeaveCancelled: E,
    onBeforeAppear: O,
    onAppear: x,
    onAfterAppear: m,
    onAppearCancelled: T
  } = t, R = String(e.key), V = Bi(n, e), Z = (I, D) => {
    I && st(
      I,
      s,
      9,
      D
    );
  }, le = (I, D) => {
    const f = D[1];
    Z(I, D), X(I) ? I.every((C) => C.length <= 1) && f() : I.length <= 1 && f();
  }, te = {
    mode: l,
    persisted: r,
    beforeEnter(I) {
      let D = a;
      if (!n.isMounted)
        if (i)
          D = O || a;
        else
          return;
      I[lt] && I[lt](
        !0
        /* cancelled */
      );
      const f = V[R];
      f && Ht(e, f) && f.el[lt] && f.el[lt](), Z(D, [I]);
    },
    enter(I) {
      if (V[R] === e) return;
      let D = c, f = u, C = d;
      if (!n.isMounted)
        if (i)
          D = x || c, f = m || u, C = T || d;
        else
          return;
      let j = !1;
      I[an] = (re) => {
        j || (j = !0, re ? Z(C, [I]) : Z(f, [I]), te.delayedLeave && te.delayedLeave(), I[an] = void 0);
      };
      const J = I[an].bind(null, !1);
      D ? le(D, [I, J]) : J();
    },
    leave(I, D) {
      const f = String(e.key);
      if (I[an] && I[an](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      Z(y, [I]);
      let C = !1;
      I[lt] = (J) => {
        C || (C = !0, D(), J ? Z(E, [I]) : Z(F, [I]), I[lt] = void 0, V[f] === e && delete V[f]);
      };
      const j = I[lt].bind(null, !1);
      V[f] = e, $ ? le($, [I, j]) : j();
    },
    clone(I) {
      const D = Ps(
        I,
        t,
        n,
        s,
        o
      );
      return o && o(D), D;
    }
  };
  return te;
}
function _s(e) {
  if (rs(e))
    return e = Lt(e), e.children = null, e;
}
function yo(e) {
  if (!rs(e))
    return Oi(e.type) && e.children ? Hi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ee(n.default))
      return n.default();
  }
}
function $n(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $n(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function ji(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === oe ? (l.patchFlag & 128 && o++, s = s.concat(
      ji(l.children, t, r)
    )) : (t || l.type !== Oe) && s.push(r != null ? Lt(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Ye(e, t) {
  return ee(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    xe({ name: e.name }, t, { setup: e })
  ) : e;
}
function Vi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function bo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Jn = /* @__PURE__ */ new WeakMap();
function gn(e, t, n, s, o = !1) {
  if (X(e)) {
    e.forEach(
      (E, O) => gn(
        E,
        t && (X(t) ? t[O] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (vn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && gn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? fs(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, c = t && t.r, u = r.refs === pe ? r.refs = {} : r.refs, d = r.setupState, y = /* @__PURE__ */ ce(d), $ = d === pe ? ti : (E) => bo(u, E) ? !1 : he(y, E), F = (E, O) => !(O && bo(u, O));
  if (c != null && c !== a) {
    if (_o(t), me(c))
      u[c] = null, $(c) && (d[c] = null);
    else if (/* @__PURE__ */ ke(c)) {
      const E = t;
      F(c, E.k) && (c.value = null), E.k && (u[E.k] = null);
    }
  }
  if (ee(a))
    An(a, r, 12, [l, u]);
  else {
    const E = me(a), O = /* @__PURE__ */ ke(a);
    if (E || O) {
      const x = () => {
        if (e.f) {
          const m = E ? $(a) ? d[a] : u[a] : F() || !e.k ? a.value : u[e.k];
          if (o)
            X(m) && Ws(m, i);
          else if (X(m))
            m.includes(i) || m.push(i);
          else if (E)
            u[a] = [i], $(a) && (d[a] = u[a]);
          else {
            const T = [i];
            F(a, e.k) && (a.value = T), e.k && (u[e.k] = T);
          }
        } else E ? (u[a] = l, $(a) && (d[a] = l)) : O && (F(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const m = () => {
          x(), Jn.delete(e);
        };
        m.id = -1, Jn.set(e, m), Ee(m, n);
      } else
        _o(e), x();
    }
  }
}
function _o(e) {
  const t = Jn.get(e);
  t && (t.flags |= 8, Jn.delete(e));
}
ts().requestIdleCallback;
ts().cancelIdleCallback;
const vn = (e) => !!e.type.__asyncLoader, rs = (e) => e.type.__isKeepAlive;
function Sr(e, t) {
  Ki(e, "a", t);
}
function Tr(e, t) {
  Ki(e, "da", t);
}
function Ki(e, t, n = Ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (as(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      rs(o.parent.vnode) && Er(s, t, n, o), o = o.parent;
  }
}
function Er(e, t, n, s) {
  const o = as(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  xn(() => {
    Ws(s[t], o);
  }, n);
}
function as(e, t, n = Ne, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      yt();
      const r = In(n), a = st(t, n, e, l);
      return r(), bt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const xt = (e) => (t, n = Ne) => {
  (!Sn || e === "sp") && as(e, (...s) => t(...s), n);
}, Mr = xt("bm"), kn = xt("m"), Ar = xt(
  "bu"
), Ir = xt("u"), Wi = xt(
  "bum"
), xn = xt("um"), Lr = xt(
  "sp"
), Pr = xt("rtg"), Rr = xt("rtc");
function Or(e, t = Ne) {
  as("ec", e, t);
}
const Nr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ke(e, t, n, s) {
  let o;
  const i = n, l = X(e);
  if (l || me(e)) {
    const r = l && /* @__PURE__ */ Vt(e);
    let a = !1, c = !1;
    r && (a = !/* @__PURE__ */ ze(e), c = /* @__PURE__ */ _t(e), e = ns(e)), o = new Array(e.length);
    for (let u = 0, d = e.length; u < d; u++)
      o[u] = t(
        a ? c ? on(nt(e[u])) : nt(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i);
  } else if (fe(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (r, a) => t(r, a, void 0, i)
      );
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let a = 0, c = r.length; a < c; a++) {
        const u = r[a];
        o[a] = t(e[u], u, a, i);
      }
    }
  else
    o = [];
  return o;
}
const Rs = (e) => e ? fl(e) ? fs(e) : Rs(e.parent) : null, mn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ xe(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Rs(e.parent),
    $root: (e) => Rs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      eo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ls.bind(e.proxy)),
    $watch: (e) => wr.bind(e)
  })
), ws = (e, t) => e !== pe && !e.__isScriptSetup && he(e, t), Dr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const y = l[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return i[t];
        }
      else {
        if (ws(s, t))
          return l[t] = 1, s[t];
        if (o !== pe && he(o, t))
          return l[t] = 2, o[t];
        if (he(i, t))
          return l[t] = 3, i[t];
        if (n !== pe && he(n, t))
          return l[t] = 4, n[t];
        Os && (l[t] = 0);
      }
    }
    const c = mn[t];
    let u, d;
    if (c)
      return t === "$attrs" && Me(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== pe && he(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      d = a.config.globalProperties, he(d, t)
    )
      return d[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return ws(o, t) ? (o[t] = n, !0) : s !== pe && he(s, t) ? (s[t] = n, !0) : he(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== pe && r[0] !== "$" && he(e, r) || ws(t, r) || he(i, r) || he(s, r) || he(mn, r) || he(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : he(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function wo(e) {
  return X(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Os = !0;
function Fr(e) {
  const t = zi(e), n = e.proxy, s = e.ctx;
  Os = !1, t.beforeCreate && $o(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: l,
    watch: r,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: d,
    mounted: y,
    beforeUpdate: $,
    updated: F,
    activated: E,
    deactivated: O,
    beforeDestroy: x,
    beforeUnmount: m,
    destroyed: T,
    unmounted: R,
    render: V,
    renderTracked: Z,
    renderTriggered: le,
    errorCaptured: te,
    serverPrefetch: I,
    // public API
    expose: D,
    inheritAttrs: f,
    // assets
    components: C,
    directives: j,
    filters: J
  } = t;
  if (c && Hr(c, s, null), l)
    for (const de in l) {
      const W = l[de];
      ee(W) && (s[de] = W.bind(n));
    }
  if (o) {
    const de = o.call(n, n);
    fe(de) && (e.data = /* @__PURE__ */ ss(de));
  }
  if (Os = !0, i)
    for (const de in i) {
      const W = i[de], G = ee(W) ? W.bind(n, n) : ee(W.get) ? W.get.bind(n, n) : ct, ye = !ee(W) && ee(W.set) ? W.set.bind(n) : ct, De = Q({
        get: G,
        set: ye
      });
      Object.defineProperty(s, de, {
        enumerable: !0,
        configurable: !0,
        get: () => De.value,
        set: (Ae) => De.value = Ae
      });
    }
  if (r)
    for (const de in r)
      Ui(r[de], s, n, de);
  if (a) {
    const de = ee(a) ? a.call(n) : a;
    Reflect.ownKeys(de).forEach((W) => {
      yr(W, de[W]);
    });
  }
  u && $o(u, e, "c");
  function ue(de, W) {
    X(W) ? W.forEach((G) => de(G.bind(n))) : W && de(W.bind(n));
  }
  if (ue(Mr, d), ue(kn, y), ue(Ar, $), ue(Ir, F), ue(Sr, E), ue(Tr, O), ue(Or, te), ue(Rr, Z), ue(Pr, le), ue(Wi, m), ue(xn, R), ue(Lr, I), X(D))
    if (D.length) {
      const de = e.exposed || (e.exposed = {});
      D.forEach((W) => {
        Object.defineProperty(de, W, {
          get: () => n[W],
          set: (G) => n[W] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === ct && (e.render = V), f != null && (e.inheritAttrs = f), C && (e.components = C), j && (e.directives = j), I && Vi(e);
}
function Hr(e, t, n = ct) {
  X(e) && (e = Ns(e));
  for (const s in e) {
    const o = e[s];
    let i;
    fe(o) ? "default" in o ? i = Fn(
      o.from || s,
      o.default,
      !0
    ) : i = Fn(o.from || s) : i = Fn(o), /* @__PURE__ */ ke(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function $o(e, t, n) {
  st(
    X(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Ui(e, t, n, s) {
  let o = s.includes(".") ? Pi(n, s) : () => n[s];
  if (me(e)) {
    const i = t[e];
    ee(i) && Mt(o, i);
  } else if (ee(e))
    Mt(o, e.bind(n));
  else if (fe(e))
    if (X(e))
      e.forEach((i) => Ui(i, t, n, s));
    else {
      const i = ee(e.handler) ? e.handler.bind(n) : t[e.handler];
      ee(i) && Mt(o, i, e);
    }
}
function zi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => Gn(a, c, l, !0)
  ), Gn(a, t, l)), fe(t) && i.set(t, a), a;
}
function Gn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Gn(e, i, n, !0), o && o.forEach(
    (l) => Gn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = Br[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const Br = {
  data: ko,
  props: xo,
  emits: xo,
  // objects
  methods: cn,
  computed: cn,
  // lifecycle
  beforeCreate: Pe,
  created: Pe,
  beforeMount: Pe,
  mounted: Pe,
  beforeUpdate: Pe,
  updated: Pe,
  beforeDestroy: Pe,
  beforeUnmount: Pe,
  destroyed: Pe,
  unmounted: Pe,
  activated: Pe,
  deactivated: Pe,
  errorCaptured: Pe,
  serverPrefetch: Pe,
  // assets
  components: cn,
  directives: cn,
  // watch
  watch: Vr,
  // provide / inject
  provide: ko,
  inject: jr
};
function ko(e, t) {
  return t ? e ? function() {
    return xe(
      ee(e) ? e.call(this, this) : e,
      ee(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function jr(e, t) {
  return cn(Ns(e), Ns(t));
}
function Ns(e) {
  if (X(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Pe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cn(e, t) {
  return e ? xe(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function xo(e, t) {
  return e ? X(e) && X(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : xe(
    /* @__PURE__ */ Object.create(null),
    wo(e),
    wo(t ?? {})
  ) : t;
}
function Vr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = xe(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Pe(e[s], t[s]);
  return n;
}
function Ji() {
  return {
    app: null,
    config: {
      isNativeTag: ti,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Kr = 0;
function Wr(e, t) {
  return function(s, o = null) {
    ee(s) || (s = xe({}, s)), o != null && !fe(o) && (o = null);
    const i = Ji(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const c = i.app = {
      _uid: Kr++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: $a,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...d) {
        return l.has(u) || (u && ee(u.install) ? (l.add(u), u.install(c, ...d)) : ee(u) && (l.add(u), u(c, ...d))), c;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, d) {
        return d ? (i.components[u] = d, c) : i.components[u];
      },
      directive(u, d) {
        return d ? (i.directives[u] = d, c) : i.directives[u];
      },
      mount(u, d, y) {
        if (!a) {
          const $ = c._ceVNode || $e(s, o);
          return $.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), e($, u, y), a = !0, c._container = u, u.__vue_app__ = c, fs($.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (st(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, d) {
        return i.provides[u] = d, c;
      },
      runWithContext(u) {
        const d = en;
        en = c;
        try {
          return u();
        } finally {
          en = d;
        }
      }
    };
    return c;
  };
}
let en = null;
const Ur = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${Pt(t)}Modifiers`];
function zr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || pe;
  let o = n;
  const i = t.startsWith("update:"), l = i && Ur(s, t.slice(7));
  l && (l.trim && (o = n.map((u) => me(u) ? u.trim() : u)), l.number && (o = n.map(Us)));
  let r, a = s[r = gs(t)] || // also try camelCase event handler (#2249)
  s[r = gs(et(t))];
  !a && i && (a = s[r = gs(Pt(t))]), a && st(
    a,
    e,
    6,
    o
  );
  const c = s[r + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, st(
      c,
      e,
      6,
      o
    );
  }
}
const Jr = /* @__PURE__ */ new WeakMap();
function Gi(e, t, n = !1) {
  const s = n ? Jr : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!ee(e)) {
    const a = (c) => {
      const u = Gi(c, t, !0);
      u && (r = !0, xe(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (fe(e) && s.set(e, null), null) : (X(i) ? i.forEach((a) => l[a] = null) : xe(l, i), fe(e) && s.set(e, l), l);
}
function us(e, t) {
  return !e || !Qn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), he(e, t[0].toLowerCase() + t.slice(1)) || he(e, Pt(t)) || he(e, t));
}
function Co(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: l,
    attrs: r,
    emit: a,
    render: c,
    renderCache: u,
    props: d,
    data: y,
    setupState: $,
    ctx: F,
    inheritAttrs: E
  } = e, O = zn(e);
  let x, m;
  try {
    if (n.shapeFlag & 4) {
      const R = o || s, V = R;
      x = at(
        c.call(
          V,
          R,
          u,
          d,
          $,
          y,
          F
        )
      ), m = r;
    } else {
      const R = t;
      x = at(
        R.length > 1 ? R(
          d,
          { attrs: r, slots: l, emit: a }
        ) : R(
          d,
          null
        )
      ), m = t.props ? r : Gr(r);
    }
  } catch (R) {
    yn.length = 0, is(R, e, 1), x = $e(Oe);
  }
  let T = x;
  if (m && E !== !1) {
    const R = Object.keys(m), { shapeFlag: V } = T;
    R.length && V & 7 && (i && R.some(Ks) && (m = Yr(
      m,
      i
    )), T = Lt(T, m, !1, !0));
  }
  return n.dirs && (T = Lt(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && $n(T, n.transition), x = T, zn(O), x;
}
const Gr = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Qn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Yr = (e, t) => {
  const n = {};
  for (const s in e)
    (!Ks(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function qr(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? So(s, l, c) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        const y = u[d];
        if (Yi(l, s, y) && !us(c, y))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? So(s, l, c) : !0 : !!l;
  return !1;
}
function So(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (Yi(t, e, i) && !us(n, i))
      return !0;
  }
  return !1;
}
function Yi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && fe(s) && fe(o) ? !zs(s, o) : s !== o;
}
function Xr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const qi = {}, Xi = () => Object.create(qi), Qi = (e) => Object.getPrototypeOf(e) === qi;
function Qr(e, t, n, s = !1) {
  const o = {}, i = Xi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Zi(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ sr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Zr(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ ce(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let d = 0; d < u.length; d++) {
        let y = u[d];
        if (us(e.emitsOptions, y))
          continue;
        const $ = t[y];
        if (a)
          if (he(i, y))
            $ !== i[y] && (i[y] = $, c = !0);
          else {
            const F = et(y);
            o[F] = Ds(
              a,
              r,
              F,
              $,
              e,
              !1
            );
          }
        else
          $ !== i[y] && (i[y] = $, c = !0);
      }
    }
  } else {
    Zi(e, t, o, i) && (c = !0);
    let u;
    for (const d in r)
      (!t || // for camelCase
      !he(t, d) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Pt(d)) === d || !he(t, u))) && (a ? n && // for camelCase
      (n[d] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[d] = Ds(
        a,
        r,
        d,
        void 0,
        e,
        !0
      )) : delete o[d]);
    if (i !== r)
      for (const d in i)
        (!t || !he(t, d)) && (delete i[d], c = !0);
  }
  c && vt(e.attrs, "set", "");
}
function Zi(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (fn(a))
        continue;
      const c = t[a];
      let u;
      o && he(o, u = et(a)) ? !i || !i.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : us(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ce(n), c = r || pe;
    for (let u = 0; u < i.length; u++) {
      const d = i[u];
      n[d] = Ds(
        o,
        a,
        d,
        c[d],
        e,
        !he(c, d)
      );
    }
  }
  return l;
}
function Ds(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = he(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && ee(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const u = In(o);
          s = c[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    l[
      0
      /* shouldCast */
    ] && (i && !r ? s = !1 : l[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Pt(n)) && (s = !0));
  }
  return s;
}
const ea = /* @__PURE__ */ new WeakMap();
function el(e, t, n = !1) {
  const s = n ? ea : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!ee(e)) {
    const u = (d) => {
      a = !0;
      const [y, $] = el(d, t, !0);
      xe(l, y), $ && r.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return fe(e) && s.set(e, Xt), Xt;
  if (X(i))
    for (let u = 0; u < i.length; u++) {
      const d = et(i[u]);
      To(d) && (l[d] = pe);
    }
  else if (i)
    for (const u in i) {
      const d = et(u);
      if (To(d)) {
        const y = i[u], $ = l[d] = X(y) || ee(y) ? { type: y } : xe({}, y), F = $.type;
        let E = !1, O = !0;
        if (X(F))
          for (let x = 0; x < F.length; ++x) {
            const m = F[x], T = ee(m) && m.name;
            if (T === "Boolean") {
              E = !0;
              break;
            } else T === "String" && (O = !1);
          }
        else
          E = ee(F) && F.name === "Boolean";
        $[
          0
          /* shouldCast */
        ] = E, $[
          1
          /* shouldCastTrue */
        ] = O, (E || he($, "default")) && r.push(d);
      }
    }
  const c = [l, r];
  return fe(e) && s.set(e, c), c;
}
function To(e) {
  return e[0] !== "$" && !fn(e);
}
const to = (e) => e === "_" || e === "_ctx" || e === "$stable", no = (e) => X(e) ? e.map(at) : [at(e)], ta = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ii((...o) => no(t(...o)), n);
  return s._c = !1, s;
}, tl = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (to(o)) continue;
    const i = e[o];
    if (ee(i))
      t[o] = ta(o, i, s);
    else if (i != null) {
      const l = no(i);
      t[o] = () => l;
    }
  }
}, nl = (e, t) => {
  const n = no(t);
  e.slots.default = () => n;
}, sl = (e, t, n) => {
  for (const s in t)
    (n || !to(s)) && (e[s] = t[s]);
}, na = (e, t, n) => {
  const s = e.slots = Xi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (sl(s, t, n), n && ri(s, "_", o, !0)) : tl(t, s);
  } else t && nl(e, t);
}, sa = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = pe;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : sl(o, t, n) : (i = !t.$stable, tl(t, o)), l = t;
  } else t && (nl(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !to(r) && l[r] == null && delete o[r];
}, Ee = aa;
function oa(e) {
  return ia(e);
}
function ia(e, t) {
  const n = ts();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: l,
    createText: r,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: d,
    nextSibling: y,
    setScopeId: $ = ct,
    insertStaticContent: F
  } = e, E = (h, g, w, L = null, S = null, M = null, B = void 0, H = null, N = !!g.dynamicChildren) => {
    if (h === g)
      return;
    h && !Ht(h, g) && (L = Ie(h), Ae(h, S, M, !0), h = null), g.patchFlag === -2 && (N = !1, g.dynamicChildren = null);
    const { type: A, ref: Y, shapeFlag: v } = g;
    switch (A) {
      case cs:
        O(h, g, w, L);
        break;
      case Oe:
        x(h, g, w, L);
        break;
      case Bn:
        h == null && m(g, w, L, B);
        break;
      case oe:
        C(
          h,
          g,
          w,
          L,
          S,
          M,
          B,
          H,
          N
        );
        break;
      default:
        v & 1 ? V(
          h,
          g,
          w,
          L,
          S,
          M,
          B,
          H,
          N
        ) : v & 6 ? j(
          h,
          g,
          w,
          L,
          S,
          M,
          B,
          H,
          N
        ) : (v & 64 || v & 128) && A.process(
          h,
          g,
          w,
          L,
          S,
          M,
          B,
          H,
          N,
          Qe
        );
    }
    Y != null && S ? gn(Y, h && h.ref, M, g || h, !g) : Y == null && h && h.ref != null && gn(h.ref, null, M, h, !0);
  }, O = (h, g, w, L) => {
    if (h == null)
      s(
        g.el = r(g.children),
        w,
        L
      );
    else {
      const S = g.el = h.el;
      g.children !== h.children && c(S, g.children);
    }
  }, x = (h, g, w, L) => {
    h == null ? s(
      g.el = a(g.children || ""),
      w,
      L
    ) : g.el = h.el;
  }, m = (h, g, w, L) => {
    [h.el, h.anchor] = F(
      h.children,
      g,
      w,
      L,
      h.el,
      h.anchor
    );
  }, T = ({ el: h, anchor: g }, w, L) => {
    let S;
    for (; h && h !== g; )
      S = y(h), s(h, w, L), h = S;
    s(g, w, L);
  }, R = ({ el: h, anchor: g }) => {
    let w;
    for (; h && h !== g; )
      w = y(h), o(h), h = w;
    o(g);
  }, V = (h, g, w, L, S, M, B, H, N) => {
    if (g.type === "svg" ? B = "svg" : g.type === "math" && (B = "mathml"), h == null)
      Z(
        g,
        w,
        L,
        S,
        M,
        B,
        H,
        N
      );
    else {
      const A = h.el && h.el._isVueCE ? h.el : null;
      try {
        A && A._beginPatch(), I(
          h,
          g,
          S,
          M,
          B,
          H,
          N
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, Z = (h, g, w, L, S, M, B, H) => {
    let N, A;
    const { props: Y, shapeFlag: v, transition: b, dirs: _ } = h;
    if (N = h.el = l(
      h.type,
      M,
      Y && Y.is,
      Y
    ), v & 8 ? u(N, h.children) : v & 16 && te(
      h.children,
      N,
      null,
      L,
      S,
      $s(h, M),
      B,
      H
    ), _ && Rt(h, null, L, "created"), le(N, h, h.scopeId, B, L), Y) {
      for (const q in Y)
        q !== "value" && !fn(q) && i(N, q, null, Y[q], M, L);
      "value" in Y && i(N, "value", null, Y.value, M), (A = Y.onVnodeBeforeMount) && ot(A, L, h);
    }
    _ && Rt(h, null, L, "beforeMount");
    const K = la(S, b);
    K && b.beforeEnter(N), s(N, g, w), ((A = Y && Y.onVnodeMounted) || K || _) && Ee(() => {
      A && ot(A, L, h), K && b.enter(N), _ && Rt(h, null, L, "mounted");
    }, S);
  }, le = (h, g, w, L, S) => {
    if (w && $(h, w), L)
      for (let M = 0; M < L.length; M++)
        $(h, L[M]);
    if (S) {
      let M = S.subTree;
      if (g === M || ll(M.type) && (M.ssContent === g || M.ssFallback === g)) {
        const B = S.vnode;
        le(
          h,
          B,
          B.scopeId,
          B.slotScopeIds,
          S.parent
        );
      }
    }
  }, te = (h, g, w, L, S, M, B, H, N = 0) => {
    for (let A = N; A < h.length; A++) {
      const Y = h[A] = H ? gt(h[A]) : at(h[A]);
      E(
        null,
        Y,
        g,
        w,
        L,
        S,
        M,
        B,
        H
      );
    }
  }, I = (h, g, w, L, S, M, B) => {
    const H = g.el = h.el;
    let { patchFlag: N, dynamicChildren: A, dirs: Y } = g;
    N |= h.patchFlag & 16;
    const v = h.props || pe, b = g.props || pe;
    let _;
    if (w && Ot(w, !1), (_ = b.onVnodeBeforeUpdate) && ot(_, w, g, h), Y && Rt(g, h, w, "beforeUpdate"), w && Ot(w, !0), (v.innerHTML && b.innerHTML == null || v.textContent && b.textContent == null) && u(H, ""), A ? D(
      h.dynamicChildren,
      A,
      H,
      w,
      L,
      $s(g, S),
      M
    ) : B || W(
      h,
      g,
      H,
      null,
      w,
      L,
      $s(g, S),
      M,
      !1
    ), N > 0) {
      if (N & 16)
        f(H, v, b, w, S);
      else if (N & 2 && v.class !== b.class && i(H, "class", null, b.class, S), N & 4 && i(H, "style", v.style, b.style, S), N & 8) {
        const K = g.dynamicProps;
        for (let q = 0; q < K.length; q++) {
          const ne = K[q], ae = v[ne], _e = b[ne];
          (_e !== ae || ne === "value") && i(H, ne, ae, _e, S, w);
        }
      }
      N & 1 && h.children !== g.children && u(H, g.children);
    } else !B && A == null && f(H, v, b, w, S);
    ((_ = b.onVnodeUpdated) || Y) && Ee(() => {
      _ && ot(_, w, g, h), Y && Rt(g, h, w, "updated");
    }, L);
  }, D = (h, g, w, L, S, M, B) => {
    for (let H = 0; H < g.length; H++) {
      const N = h[H], A = g[H], Y = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        N.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (N.type === oe || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ht(N, A) || // - In the case of a component, it could contain anything.
        N.shapeFlag & 198) ? d(N.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      E(
        N,
        A,
        Y,
        null,
        L,
        S,
        M,
        B,
        !0
      );
    }
  }, f = (h, g, w, L, S) => {
    if (g !== w) {
      if (g !== pe)
        for (const M in g)
          !fn(M) && !(M in w) && i(
            h,
            M,
            g[M],
            null,
            S,
            L
          );
      for (const M in w) {
        if (fn(M)) continue;
        const B = w[M], H = g[M];
        B !== H && M !== "value" && i(h, M, H, B, S, L);
      }
      "value" in w && i(h, "value", g.value, w.value, S);
    }
  }, C = (h, g, w, L, S, M, B, H, N) => {
    const A = g.el = h ? h.el : r(""), Y = g.anchor = h ? h.anchor : r("");
    let { patchFlag: v, dynamicChildren: b, slotScopeIds: _ } = g;
    _ && (H = H ? H.concat(_) : _), h == null ? (s(A, w, L), s(Y, w, L), te(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      w,
      Y,
      S,
      M,
      B,
      H,
      N
    )) : v > 0 && v & 64 && b && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    h.dynamicChildren && h.dynamicChildren.length === b.length ? (D(
      h.dynamicChildren,
      b,
      w,
      S,
      M,
      B,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || S && g === S.subTree) && so(
      h,
      g,
      !0
      /* shallow */
    )) : W(
      h,
      g,
      w,
      Y,
      S,
      M,
      B,
      H,
      N
    );
  }, j = (h, g, w, L, S, M, B, H, N) => {
    g.slotScopeIds = H, h == null ? g.shapeFlag & 512 ? S.ctx.activate(
      g,
      w,
      L,
      B,
      N
    ) : J(
      g,
      w,
      L,
      S,
      M,
      B,
      N
    ) : re(h, g, N);
  }, J = (h, g, w, L, S, M, B) => {
    const H = h.component = ga(
      h,
      L,
      S
    );
    if (rs(h) && (H.ctx.renderer = Qe), va(H, !1, B), H.asyncDep) {
      if (S && S.registerDep(H, ue, B), !h.el) {
        const N = H.subTree = $e(Oe);
        x(null, N, g, w), h.placeholder = N.el;
      }
    } else
      ue(
        H,
        h,
        g,
        w,
        S,
        M,
        B
      );
  }, re = (h, g, w) => {
    const L = g.component = h.component;
    if (qr(h, g, w))
      if (L.asyncDep && !L.asyncResolved) {
        de(L, g, w);
        return;
      } else
        L.next = g, L.update();
    else
      g.el = h.el, L.vnode = g;
  }, ue = (h, g, w, L, S, M, B) => {
    const H = () => {
      if (h.isMounted) {
        let { next: v, bu: b, u: _, parent: K, vnode: q } = h;
        {
          const He = ol(h);
          if (He) {
            v && (v.el = q.el, de(h, v, B)), He.asyncDep.then(() => {
              Ee(() => {
                h.isUnmounted || A();
              }, S);
            });
            return;
          }
        }
        let ne = v, ae;
        Ot(h, !1), v ? (v.el = q.el, de(h, v, B)) : v = q, b && Dn(b), (ae = v.props && v.props.onVnodeBeforeUpdate) && ot(ae, K, v, q), Ot(h, !0);
        const _e = Co(h), We = h.subTree;
        h.subTree = _e, E(
          We,
          _e,
          // parent may have changed if it's in a teleport
          d(We.el),
          // anchor may have changed if it's in a fragment
          Ie(We),
          h,
          S,
          M
        ), v.el = _e.el, ne === null && Xr(h, _e.el), _ && Ee(_, S), (ae = v.props && v.props.onVnodeUpdated) && Ee(
          () => ot(ae, K, v, q),
          S
        );
      } else {
        let v;
        const { el: b, props: _ } = g, { bm: K, m: q, parent: ne, root: ae, type: _e } = h, We = vn(g);
        Ot(h, !1), K && Dn(K), !We && (v = _ && _.onVnodeBeforeMount) && ot(v, ne, g), Ot(h, !0);
        {
          ae.ce && ae.ce._hasShadowRoot() && ae.ce._injectChildStyle(
            _e,
            h.parent ? h.parent.type : void 0
          );
          const He = h.subTree = Co(h);
          E(
            null,
            He,
            w,
            L,
            h,
            S,
            M
          ), g.el = He.el;
        }
        if (q && Ee(q, S), !We && (v = _ && _.onVnodeMounted)) {
          const He = g;
          Ee(
            () => ot(v, ne, He),
            S
          );
        }
        (g.shapeFlag & 256 || ne && vn(ne.vnode) && ne.vnode.shapeFlag & 256) && h.a && Ee(h.a, S), h.isMounted = !0, g = w = L = null;
      }
    };
    h.scope.on();
    const N = h.effect = new fi(H);
    h.scope.off();
    const A = h.update = N.run.bind(N), Y = h.job = N.runIfDirty.bind(N);
    Y.i = h, Y.id = h.uid, N.scheduler = () => eo(Y), Ot(h, !0), A();
  }, de = (h, g, w) => {
    g.component = h;
    const L = h.vnode.props;
    h.vnode = g, h.next = null, Zr(h, g.props, L, w), sa(h, g.children, w), yt(), po(h), bt();
  }, W = (h, g, w, L, S, M, B, H, N = !1) => {
    const A = h && h.children, Y = h ? h.shapeFlag : 0, v = g.children, { patchFlag: b, shapeFlag: _ } = g;
    if (b > 0) {
      if (b & 128) {
        ye(
          A,
          v,
          w,
          L,
          S,
          M,
          B,
          H,
          N
        );
        return;
      } else if (b & 256) {
        G(
          A,
          v,
          w,
          L,
          S,
          M,
          B,
          H,
          N
        );
        return;
      }
    }
    _ & 8 ? (Y & 16 && Fe(A, S, M), v !== A && u(w, v)) : Y & 16 ? _ & 16 ? ye(
      A,
      v,
      w,
      L,
      S,
      M,
      B,
      H,
      N
    ) : Fe(A, S, M, !0) : (Y & 8 && u(w, ""), _ & 16 && te(
      v,
      w,
      L,
      S,
      M,
      B,
      H,
      N
    ));
  }, G = (h, g, w, L, S, M, B, H, N) => {
    h = h || Xt, g = g || Xt;
    const A = h.length, Y = g.length, v = Math.min(A, Y);
    let b;
    for (b = 0; b < v; b++) {
      const _ = g[b] = N ? gt(g[b]) : at(g[b]);
      E(
        h[b],
        _,
        w,
        null,
        S,
        M,
        B,
        H,
        N
      );
    }
    A > Y ? Fe(
      h,
      S,
      M,
      !0,
      !1,
      v
    ) : te(
      g,
      w,
      L,
      S,
      M,
      B,
      H,
      N,
      v
    );
  }, ye = (h, g, w, L, S, M, B, H, N) => {
    let A = 0;
    const Y = g.length;
    let v = h.length - 1, b = Y - 1;
    for (; A <= v && A <= b; ) {
      const _ = h[A], K = g[A] = N ? gt(g[A]) : at(g[A]);
      if (Ht(_, K))
        E(
          _,
          K,
          w,
          null,
          S,
          M,
          B,
          H,
          N
        );
      else
        break;
      A++;
    }
    for (; A <= v && A <= b; ) {
      const _ = h[v], K = g[b] = N ? gt(g[b]) : at(g[b]);
      if (Ht(_, K))
        E(
          _,
          K,
          w,
          null,
          S,
          M,
          B,
          H,
          N
        );
      else
        break;
      v--, b--;
    }
    if (A > v) {
      if (A <= b) {
        const _ = b + 1, K = _ < Y ? g[_].el : L;
        for (; A <= b; )
          E(
            null,
            g[A] = N ? gt(g[A]) : at(g[A]),
            w,
            K,
            S,
            M,
            B,
            H,
            N
          ), A++;
      }
    } else if (A > b)
      for (; A <= v; )
        Ae(h[A], S, M, !0), A++;
    else {
      const _ = A, K = A, q = /* @__PURE__ */ new Map();
      for (A = K; A <= b; A++) {
        const Ce = g[A] = N ? gt(g[A]) : at(g[A]);
        Ce.key != null && q.set(Ce.key, A);
      }
      let ne, ae = 0;
      const _e = b - K + 1;
      let We = !1, He = 0;
      const Ct = new Array(_e);
      for (A = 0; A < _e; A++) Ct[A] = 0;
      for (A = _; A <= v; A++) {
        const Ce = h[A];
        if (ae >= _e) {
          Ae(Ce, S, M, !0);
          continue;
        }
        let Le;
        if (Ce.key != null)
          Le = q.get(Ce.key);
        else
          for (ne = K; ne <= b; ne++)
            if (Ct[ne - K] === 0 && Ht(Ce, g[ne])) {
              Le = ne;
              break;
            }
        Le === void 0 ? Ae(Ce, S, M, !0) : (Ct[Le - K] = A + 1, Le >= He ? He = Le : We = !0, E(
          Ce,
          g[Le],
          w,
          null,
          S,
          M,
          B,
          H,
          N
        ), ae++);
      }
      const St = We ? ra(Ct) : Xt;
      for (ne = St.length - 1, A = _e - 1; A >= 0; A--) {
        const Ce = K + A, Le = g[Ce], Ze = g[Ce + 1], Jt = Ce + 1 < Y ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ze.el || il(Ze)
        ) : L;
        Ct[A] === 0 ? E(
          null,
          Le,
          w,
          Jt,
          S,
          M,
          B,
          H,
          N
        ) : We && (ne < 0 || A !== St[ne] ? De(Le, w, Jt, 2) : ne--);
      }
    }
  }, De = (h, g, w, L, S = null) => {
    const { el: M, type: B, transition: H, children: N, shapeFlag: A } = h;
    if (A & 6) {
      De(h.component.subTree, g, w, L);
      return;
    }
    if (A & 128) {
      h.suspense.move(g, w, L);
      return;
    }
    if (A & 64) {
      B.move(h, g, w, Qe);
      return;
    }
    if (B === oe) {
      s(M, g, w);
      for (let v = 0; v < N.length; v++)
        De(N[v], g, w, L);
      s(h.anchor, g, w);
      return;
    }
    if (B === Bn) {
      T(h, g, w);
      return;
    }
    if (L !== 2 && A & 1 && H)
      if (L === 0)
        H.beforeEnter(M), s(M, g, w), Ee(() => H.enter(M), S);
      else {
        const { leave: v, delayLeave: b, afterLeave: _ } = H, K = () => {
          h.ctx.isUnmounted ? o(M) : s(M, g, w);
        }, q = () => {
          M._isLeaving && M[lt](
            !0
            /* cancelled */
          ), v(M, () => {
            K(), _ && _();
          });
        };
        b ? b(M, K, q) : q();
      }
    else
      s(M, g, w);
  }, Ae = (h, g, w, L = !1, S = !1) => {
    const {
      type: M,
      props: B,
      ref: H,
      children: N,
      dynamicChildren: A,
      shapeFlag: Y,
      patchFlag: v,
      dirs: b,
      cacheIndex: _
    } = h;
    if (v === -2 && (S = !1), H != null && (yt(), gn(H, null, w, h, !0), bt()), _ != null && (g.renderCache[_] = void 0), Y & 256) {
      g.ctx.deactivate(h);
      return;
    }
    const K = Y & 1 && b, q = !vn(h);
    let ne;
    if (q && (ne = B && B.onVnodeBeforeUnmount) && ot(ne, g, h), Y & 6)
      zt(h.component, w, L);
    else {
      if (Y & 128) {
        h.suspense.unmount(w, L);
        return;
      }
      K && Rt(h, null, g, "beforeUnmount"), Y & 64 ? h.type.remove(
        h,
        g,
        w,
        Qe,
        L
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== oe || v > 0 && v & 64) ? Fe(
        A,
        g,
        w,
        !1,
        !0
      ) : (M === oe && v & 384 || !S && Y & 16) && Fe(N, g, w), L && Wt(h);
    }
    (q && (ne = B && B.onVnodeUnmounted) || K) && Ee(() => {
      ne && ot(ne, g, h), K && Rt(h, null, g, "unmounted");
    }, w);
  }, Wt = (h) => {
    const { type: g, el: w, anchor: L, transition: S } = h;
    if (g === oe) {
      Ut(w, L);
      return;
    }
    if (g === Bn) {
      R(h);
      return;
    }
    const M = () => {
      o(w), S && !S.persisted && S.afterLeave && S.afterLeave();
    };
    if (h.shapeFlag & 1 && S && !S.persisted) {
      const { leave: B, delayLeave: H } = S, N = () => B(w, M);
      H ? H(h.el, M, N) : N();
    } else
      M();
  }, Ut = (h, g) => {
    let w;
    for (; h !== g; )
      w = y(h), o(h), h = w;
    o(g);
  }, zt = (h, g, w) => {
    const { bum: L, scope: S, job: M, subTree: B, um: H, m: N, a: A } = h;
    Eo(N), Eo(A), L && Dn(L), S.stop(), M && (M.flags |= 8, Ae(B, h, g, w)), H && Ee(H, g), Ee(() => {
      h.isUnmounted = !0;
    }, g);
  }, Fe = (h, g, w, L = !1, S = !1, M = 0) => {
    for (let B = M; B < h.length; B++)
      Ae(h[B], g, w, L, S);
  }, Ie = (h) => {
    if (h.shapeFlag & 6)
      return Ie(h.component.subTree);
    if (h.shapeFlag & 128)
      return h.suspense.next();
    const g = y(h.anchor || h.el), w = g && g[Ri];
    return w ? y(w) : g;
  };
  let be = !1;
  const Xe = (h, g, w) => {
    let L;
    h == null ? g._vnode && (Ae(g._vnode, null, null, !0), L = g._vnode.component) : E(
      g._vnode || null,
      h,
      g,
      null,
      null,
      null,
      w
    ), g._vnode = h, be || (be = !0, po(L), Ei(), be = !1);
  }, Qe = {
    p: E,
    um: Ae,
    m: De,
    r: Wt,
    mt: J,
    mc: te,
    pc: W,
    pbc: D,
    n: Ie,
    o: e
  };
  return {
    render: Xe,
    hydrate: void 0,
    createApp: Wr(Xe)
  };
}
function $s({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Ot({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function la(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function so(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (X(s) && X(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = gt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && so(l, r)), r.type === cs && (r.patchFlag === -1 && (r = o[i] = gt(r)), r.el = l.el), r.type === Oe && !r.el && (r.el = l.el);
    }
}
function ra(e) {
  const t = e.slice(), n = [0];
  let s, o, i, l, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        r = i + l >> 1, e[n[r]] < c ? i = r + 1 : l = r;
      c < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function ol(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ol(t);
}
function Eo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function il(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? il(t.subTree) : null;
}
const ll = (e) => e.__isSuspense;
function aa(e, t) {
  t && t.pendingBranch ? X(e) ? t.effects.push(...e) : t.effects.push(e) : mr(e);
}
const oe = /* @__PURE__ */ Symbol.for("v-fgt"), cs = /* @__PURE__ */ Symbol.for("v-txt"), Oe = /* @__PURE__ */ Symbol.for("v-cmt"), Bn = /* @__PURE__ */ Symbol.for("v-stc"), yn = [];
let Ue = null;
function k(e = !1) {
  yn.push(Ue = e ? null : []);
}
function ua() {
  yn.pop(), Ue = yn[yn.length - 1] || null;
}
let Cn = 1;
function Yn(e, t = !1) {
  Cn += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function rl(e) {
  return e.dynamicChildren = Cn > 0 ? Ue || Xt : null, ua(), Cn > 0 && Ue && Ue.push(e), e;
}
function P(e, t, n, s, o, i) {
  return rl(
    p(
      e,
      t,
      n,
      s,
      o,
      i,
      !0
    )
  );
}
function Te(e, t, n, s, o) {
  return rl(
    $e(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function qn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ht(e, t) {
  return e.type === t.type && e.key === t.key;
}
const al = ({ key: e }) => e ?? null, jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? me(e) || /* @__PURE__ */ ke(e) || ee(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === oe ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && al(t),
    ref: t && jn(t),
    scopeId: Ai,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: i,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: Ge
  };
  return r ? (oo(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= me(n) ? 8 : 16), Cn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const $e = ca;
function ca(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Nr) && (e = Oe), qn(e)) {
    const r = Lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && oo(r, n), Cn > 0 && !i && Ue && (r.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = r : Ue.push(r)), r.patchFlag = -2, r;
  }
  if (_a(e) && (e = e.__vccOpts), t) {
    t = fa(t);
    let { class: r, style: a } = t;
    r && !me(r) && (t.class = ve(r)), fe(a) && (/* @__PURE__ */ os(a) && !X(a) && (a = xe({}, a)), t.style = It(a));
  }
  const l = me(e) ? 1 : ll(e) ? 128 : Oi(e) ? 64 : fe(e) ? 4 : ee(e) ? 2 : 0;
  return p(
    e,
    t,
    n,
    s,
    o,
    l,
    i,
    !0
  );
}
function fa(e) {
  return e ? /* @__PURE__ */ os(e) || Qi(e) ? xe({}, e) : e : null;
}
function Lt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, c = t ? da(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && al(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? X(i) ? i.concat(jn(t)) : [i, jn(t)] : jn(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== oe ? l === -1 ? 16 : l | 16 : l,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Lt(e.ssContent),
    ssFallback: e.ssFallback && Lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && $n(
    u,
    a.clone(u)
  ), u;
}
function At(e = " ", t = 0) {
  return $e(cs, null, e, t);
}
function ul(e, t) {
  const n = $e(Bn, null, e);
  return n.staticCount = t, n;
}
function ie(e = "", t = !1) {
  return t ? (k(), Te(Oe, null, e)) : $e(Oe, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? $e(Oe) : X(e) ? $e(
    oe,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qn(e) ? gt(e) : $e(cs, null, String(e));
}
function gt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Lt(e);
}
function oo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (X(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), oo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !Qi(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ee(t) ? (t = { default: t, _ctx: Ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [At(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function da(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ve([t.class, s.class]));
      else if (o === "style")
        t.style = It([t.style, s.style]);
      else if (Qn(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(X(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ot(e, t, n, s = null) {
  st(e, t, 7, [
    n,
    s
  ]);
}
const ha = Ji();
let pa = 0;
function ga(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || ha, i = {
    uid: pa++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Nl(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: el(s, o),
    emitsOptions: Gi(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: pe,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: pe,
    data: pe,
    props: pe,
    attrs: pe,
    slots: pe,
    refs: pe,
    setupState: pe,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = zr.bind(null, i), e.ce && e.ce(i), i;
}
let Ne = null;
const cl = () => Ne || Ge;
let Xn, Fs;
{
  const e = ts(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Xn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), Fs = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const In = (e) => {
  const t = Ne;
  return Xn(e), e.scope.on(), () => {
    e.scope.off(), Xn(t);
  };
}, Mo = () => {
  Ne && Ne.scope.off(), Xn(null);
};
function fl(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function va(e, t = !1, n = !1) {
  t && Fs(t);
  const { props: s, children: o } = e.vnode, i = fl(e);
  Qr(e, s, i, t), na(e, o, n || t);
  const l = i ? ma(e, t) : void 0;
  return t && Fs(!1), l;
}
function ma(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Dr);
  const { setup: s } = n;
  if (s) {
    yt();
    const o = e.setupContext = s.length > 1 ? ba(e) : null, i = In(e), l = An(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = si(l);
    if (bt(), i(), (r || e.sp) && !vn(e) && Vi(e), r) {
      if (l.then(Mo, Mo), t)
        return l.then((a) => {
          Ao(e, a);
        }).catch((a) => {
          is(a, e, 0);
        });
      e.asyncDep = l;
    } else
      Ao(e, l);
  } else
    dl(e);
}
function Ao(e, t, n) {
  ee(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : fe(t) && (e.setupState = Ci(t)), dl(e);
}
function dl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = In(e);
    yt();
    try {
      Fr(e);
    } finally {
      bt(), o();
    }
  }
}
const ya = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function ba(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ya),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function fs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ci(or(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mn)
        return mn[n](e);
    },
    has(t, n) {
      return n in t || n in mn;
    }
  })) : e.proxy;
}
function _a(e) {
  return ee(e) && "__vccOpts" in e;
}
const Q = (e, t) => /* @__PURE__ */ dr(e, t, Sn);
function wa(e, t, n) {
  try {
    Yn(-1);
    const s = arguments.length;
    return s === 2 ? fe(t) && !X(t) ? qn(t) ? $e(e, null, [t]) : $e(e, t) : $e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && qn(n) && (n = [n]), $e(e, t, n));
  } finally {
    Yn(1);
  }
}
const $a = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Hs;
const Io = typeof window < "u" && window.trustedTypes;
if (Io)
  try {
    Hs = /* @__PURE__ */ Io.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const hl = Hs ? (e) => Hs.createHTML(e) : (e) => e, ka = "http://www.w3.org/2000/svg", xa = "http://www.w3.org/1998/Math/MathML", pt = typeof document < "u" ? document : null, Lo = pt && /* @__PURE__ */ pt.createElement("template"), Ca = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? pt.createElementNS(ka, e) : t === "mathml" ? pt.createElementNS(xa, e) : n ? pt.createElement(e, { is: n }) : pt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => pt.createTextNode(e),
  createComment: (e) => pt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => pt.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, i) {
    const l = n ? n.previousSibling : t.lastChild;
    if (o && (o === i || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === i || !(o = o.nextSibling)); )
        ;
    else {
      Lo.innerHTML = hl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Lo.content;
      if (s === "svg" || s === "mathml") {
        const a = r.firstChild;
        for (; a.firstChild; )
          r.appendChild(a.firstChild);
        r.removeChild(a);
      }
      t.insertBefore(r, n);
    }
    return [
      // first
      l ? l.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Tt = "transition", un = "animation", Tn = /* @__PURE__ */ Symbol("_vtc"), pl = {
  name: String,
  type: String,
  css: {
    type: Boolean,
    default: !0
  },
  duration: [String, Number, Object],
  enterFromClass: String,
  enterActiveClass: String,
  enterToClass: String,
  appearFromClass: String,
  appearActiveClass: String,
  appearToClass: String,
  leaveFromClass: String,
  leaveActiveClass: String,
  leaveToClass: String
}, Sa = /* @__PURE__ */ xe(
  {},
  Di,
  pl
), Ta = (e) => (e.displayName = "Transition", e.props = Sa, e), Ea = /* @__PURE__ */ Ta(
  (e, { slots: t }) => wa(Cr, Ma(e), t)
), Nt = (e, t = []) => {
  X(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Po = (e) => e ? X(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ma(e) {
  const t = {};
  for (const C in e)
    C in pl || (t[C] = e[C]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: i = `${n}-enter-from`,
    enterActiveClass: l = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: a = i,
    appearActiveClass: c = l,
    appearToClass: u = r,
    leaveFromClass: d = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: $ = `${n}-leave-to`
  } = e, F = Aa(o), E = F && F[0], O = F && F[1], {
    onBeforeEnter: x,
    onEnter: m,
    onEnterCancelled: T,
    onLeave: R,
    onLeaveCancelled: V,
    onBeforeAppear: Z = x,
    onAppear: le = m,
    onAppearCancelled: te = T
  } = t, I = (C, j, J, re) => {
    C._enterCancelled = re, Dt(C, j ? u : r), Dt(C, j ? c : l), J && J();
  }, D = (C, j) => {
    C._isLeaving = !1, Dt(C, d), Dt(C, $), Dt(C, y), j && j();
  }, f = (C) => (j, J) => {
    const re = C ? le : m, ue = () => I(j, C, J);
    Nt(re, [j, ue]), Ro(() => {
      Dt(j, C ? a : i), ht(j, C ? u : r), Po(re) || Oo(j, s, E, ue);
    });
  };
  return xe(t, {
    onBeforeEnter(C) {
      Nt(x, [C]), ht(C, i), ht(C, l);
    },
    onBeforeAppear(C) {
      Nt(Z, [C]), ht(C, a), ht(C, c);
    },
    onEnter: f(!1),
    onAppear: f(!0),
    onLeave(C, j) {
      C._isLeaving = !0;
      const J = () => D(C, j);
      ht(C, d), C._enterCancelled ? (ht(C, y), Fo(C)) : (Fo(C), ht(C, y)), Ro(() => {
        C._isLeaving && (Dt(C, d), ht(C, $), Po(R) || Oo(C, s, O, J));
      }), Nt(R, [C, J]);
    },
    onEnterCancelled(C) {
      I(C, !1, void 0, !0), Nt(T, [C]);
    },
    onAppearCancelled(C) {
      I(C, !0, void 0, !0), Nt(te, [C]);
    },
    onLeaveCancelled(C) {
      D(C), Nt(V, [C]);
    }
  });
}
function Aa(e) {
  if (e == null)
    return null;
  if (fe(e))
    return [ks(e.enter), ks(e.leave)];
  {
    const t = ks(e);
    return [t, t];
  }
}
function ks(e) {
  return El(e);
}
function ht(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Tn] || (e[Tn] = /* @__PURE__ */ new Set())).add(t);
}
function Dt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Tn];
  n && (n.delete(t), n.size || (e[Tn] = void 0));
}
function Ro(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ia = 0;
function Oo(e, t, n, s) {
  const o = e._endId = ++Ia, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = La(e, t);
  if (!l)
    return s();
  const c = l + "end";
  let u = 0;
  const d = () => {
    e.removeEventListener(c, y), i();
  }, y = ($) => {
    $.target === e && ++u >= a && d();
  };
  setTimeout(() => {
    u < a && d();
  }, r + 1), e.addEventListener(c, y);
}
function La(e, t) {
  const n = window.getComputedStyle(e), s = (F) => (n[F] || "").split(", "), o = s(`${Tt}Delay`), i = s(`${Tt}Duration`), l = No(o, i), r = s(`${un}Delay`), a = s(`${un}Duration`), c = No(r, a);
  let u = null, d = 0, y = 0;
  t === Tt ? l > 0 && (u = Tt, d = l, y = i.length) : t === un ? c > 0 && (u = un, d = c, y = a.length) : (d = Math.max(l, c), u = d > 0 ? l > c ? Tt : un : null, y = u ? u === Tt ? i.length : a.length : 0);
  const $ = u === Tt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Tt}Property`).toString()
  );
  return {
    type: u,
    timeout: d,
    propCount: y,
    hasTransform: $
  };
}
function No(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Do(n) + Do(e[s])));
}
function Do(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Fo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Pa(e, t, n) {
  const s = e[Tn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Ho = /* @__PURE__ */ Symbol("_vod"), Ra = /* @__PURE__ */ Symbol("_vsh"), Oa = /* @__PURE__ */ Symbol(""), Na = /(?:^|;)\s*display\s*:/;
function Da(e, t, n) {
  const s = e.style, o = me(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (me(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Vn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && Vn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), Vn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[Oa];
      l && (n += ";" + l), s.cssText = n, i = Na.test(n);
    }
  } else t && e.removeAttribute("style");
  Ho in e && (e[Ho] = i ? s.display : "", e[Ra] && (s.display = "none"));
}
const Bo = /\s*!important$/;
function Vn(e, t, n) {
  if (X(n))
    n.forEach((s) => Vn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fa(e, t);
    Bo.test(n) ? e.setProperty(
      Pt(s),
      n.replace(Bo, ""),
      "important"
    ) : e[s] = n;
  }
}
const jo = ["Webkit", "Moz", "ms"], xs = {};
function Fa(e, t) {
  const n = xs[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return xs[t] = s;
  s = li(s);
  for (let o = 0; o < jo.length; o++) {
    const i = jo[o] + s;
    if (i in e)
      return xs[t] = i;
  }
  return t;
}
const Vo = "http://www.w3.org/1999/xlink";
function Ko(e, t, n, s, o, i = Rl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Vo, t.slice(6, t.length)) : e.setAttributeNS(Vo, t, n) : n == null || i && !ai(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
  );
}
function Wo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? hl(n) : n);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const r = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let l = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = ai(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function qt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ha(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Uo = /* @__PURE__ */ Symbol("_vei");
function Ba(e, t, n, s, o = null) {
  const i = e[Uo] || (e[Uo] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = ja(t);
    if (s) {
      const c = i[t] = Wa(
        s,
        o
      );
      qt(e, r, c, a);
    } else l && (Ha(e, r, l, a), i[t] = void 0);
  }
}
const zo = /(?:Once|Passive|Capture)$/;
function ja(e) {
  let t;
  if (zo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(zo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Pt(e.slice(2)), t];
}
let Cs = 0;
const Va = /* @__PURE__ */ Promise.resolve(), Ka = () => Cs || (Va.then(() => Cs = 0), Cs = Date.now());
function Wa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    st(
      Ua(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ka(), n;
}
function Ua(e, t) {
  if (X(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Jo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, za = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? Pa(e, s, l) : t === "style" ? Da(e, n, s) : Qn(t) ? Ks(t) || Ba(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Ja(e, t, s, l)) ? (Wo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Ko(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ga(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !me(s))) ? Wo(e, et(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Ko(e, t, s, l));
};
function Ja(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Jo(t) && ee(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Jo(t) && me(n) ? !1 : t in e;
}
function Ga(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = et(t);
  return Array.isArray(n) ? n.some((o) => et(o) === s) : Object.keys(n).some((o) => et(o) === s);
}
const Go = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return X(t) ? (n) => Dn(t, n) : t;
};
function Ya(e) {
  e.target.composing = !0;
}
function Yo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ss = /* @__PURE__ */ Symbol("_assign");
function qo(e, t, n) {
  return t && (e = e.trim()), n && (e = Us(e)), e;
}
const $t = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Ss] = Go(o);
    const i = s || o.props && o.props.type === "number";
    qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Ss](qo(e.value, n, i));
    }), (n || i) && qt(e, "change", () => {
      e.value = qo(e.value, n, i);
    }), t || (qt(e, "compositionstart", Ya), qt(e, "compositionend", Yo), qt(e, "change", Yo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[Ss] = Go(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? Us(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, qa = ["ctrl", "shift", "alt", "meta"], Xa = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => qa.some((n) => e[`${n}Key`] && !t.includes(n))
}, se = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = Xa[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, Qa = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Se = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Pt(o.key);
    if (t.some(
      (l) => l === i || Qa[l] === i
    ))
      return e(o);
  });
}, Za = /* @__PURE__ */ xe({ patchProp: za }, Ca);
let Xo;
function eu() {
  return Xo || (Xo = oa(Za));
}
const tu = (...e) => {
  const t = eu().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = su(s);
    if (!o) return;
    const i = t._component;
    !ee(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, nu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function nu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function su(e) {
  return me(e) ? document.querySelector(e) : e;
}
const ou = { class: "setup" }, iu = { class: "setup-card" }, lu = { class: "field-group" }, ru = { class: "field-group" }, au = ["disabled"], uu = {
  key: 0,
  class: "error"
}, cu = /* @__PURE__ */ Ye({
  __name: "TokenSetup",
  emits: ["token"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ U(localStorage.getItem("ha_url") ?? "http://homeassistant.local:8123"), o = /* @__PURE__ */ U(""), i = /* @__PURE__ */ U(""), l = /* @__PURE__ */ U(null), r = Q(() => s.value.trim() && o.value.trim());
    async function a() {
      const c = s.value.trim().replace(/\/$/, ""), u = o.value.trim();
      if (!(!c || !u)) {
        i.value = "", localStorage.setItem("ha_url", c);
        try {
          let d = null;
          try {
            d = await fetch(`${c}/api/`, {
              headers: { Authorization: `Bearer ${u}` }
            });
          } catch {
            d = await fetch("/api/", {
              headers: { Authorization: `Bearer ${u}` }
            });
          }
          if (!d.ok) {
            i.value = "Token ungültig oder Verbindung fehlgeschlagen.", localStorage.removeItem("ha_url");
            return;
          }
          localStorage.setItem("ha_token", u), n("token", u);
        } catch {
          localStorage.removeItem("ha_url"), i.value = "Home Assistant nicht erreichbar. URL und Netzwerk prüfen.";
        }
      }
    }
    return (c, u) => (k(), P("div", ou, [
      p("div", iu, [
        u[5] || (u[5] = p("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = p("p", null, [
          At(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          At(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", lu, [
          u[3] || (u[3] = p("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          wt(p("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (d) => s.value = d),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: u[1] || (u[1] = Se((d) => {
              var y;
              return (y = l.value) == null ? void 0 : y.focus();
            }, ["enter"]))
          }, null, 544), [
            [$t, s.value]
          ])
        ]),
        p("div", ru, [
          u[4] || (u[4] = p("label", { class: "field-label" }, "Access Token", -1)),
          wt(p("input", {
            ref_key: "tokenRef",
            ref: l,
            "onUpdate:modelValue": u[2] || (u[2] = (d) => o.value = d),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Se(a, ["enter"])
          }, null, 544), [
            [$t, o.value]
          ])
        ]),
        p("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, au),
        i.value ? (k(), P("p", uu, z(i.value), 1)) : ie("", !0)
      ])
    ]));
  }
}), qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, fu = /* @__PURE__ */ qe(cu, [["__scopeId", "data-v-97d10609"]]);
let io = !1;
const gl = /* @__PURE__ */ U(null);
function vl(e) {
  io = e;
}
function du() {
  return io;
}
function hu(e) {
  gl.value = e;
}
function pu() {
  return gl;
}
function ml() {
  var e;
  return io ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function yl() {
  const e = ml();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function ds(e) {
  const t = ml();
  return t ? `${t}${e}` : e;
}
async function Bt(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(ds(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function gu(e) {
  const t = await fetch(ds("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
let we = null, Bs = 1, tn = null;
const Kt = /* @__PURE__ */ new Map(), En = /* @__PURE__ */ new Map(), js = /* @__PURE__ */ U(0);
let nn = !1, Qo = [];
const sn = /* @__PURE__ */ new Map();
function vu() {
  return yl();
}
function bl(e) {
  we && (we.readyState === WebSocket.OPEN || we.readyState === WebSocket.CONNECTING) || (nn = !1, we = new WebSocket(vu()), we.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      we.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      nn = !0;
      const i = Bs++;
      we.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = Bs++;
      we.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      for (const r of Qo) r();
      Qo = [];
      return;
    }
    if (n.type === "auth_invalid") {
      console.error("HA WebSocket auth failed");
      return;
    }
    if (n.type === "result" && sn.has(n.id)) {
      const { resolve: i, reject: l } = sn.get(n.id);
      sn.delete(n.id), n.success ? i(n.result) : l(new Error(((s = n.error) == null ? void 0 : s.message) ?? "Service call failed"));
      return;
    }
    if (n.type === "result" && n.success && Array.isArray(n.result)) {
      for (const i of n.result)
        En.set(i.entity_id, i), Zo(i.entity_id, i);
      js.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (En.set(i.entity_id, i), js.value++, Zo(i.entity_id, i));
    }
  }, we.onclose = () => {
    nn = !1, tn && clearTimeout(tn), tn = setTimeout(() => {
      we = null, bl(e);
    }, 5e3);
  }, we.onerror = () => {
    we == null || we.close();
  });
}
function Zo(e, t) {
  const n = Kt.get(e);
  if (n)
    for (const s of n) s(t);
}
function mu(e, t) {
  Kt.has(e) || Kt.set(e, /* @__PURE__ */ new Set()), Kt.get(e).add(t);
  const n = En.get(e);
  n && t(n);
}
function yu(e, t) {
  const n = Kt.get(e);
  n && (n.delete(t), n.size === 0 && Kt.delete(e));
}
function bu() {
  tn && (clearTimeout(tn), tn = null), we && (we.close(), we = null), nn = !1, En.clear(), Kt.clear();
}
async function _u(e, t, n, s) {
  if (!we || !nn) throw new Error("WebSocket not connected");
  const o = Bs++;
  return new Promise((i, l) => {
    sn.set(o, { resolve: i, reject: l }), we.send(JSON.stringify({
      id: o,
      type: "call_service",
      domain: t,
      service: n,
      service_data: s ?? {},
      target: { entity_id: e },
      return_response: !0
    })), setTimeout(() => {
      sn.has(o) && (sn.delete(o), l(new Error("Timeout")));
    }, 1e4);
  });
}
function wu(e) {
  let t = e;
  const n = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U(null), o = /* @__PURE__ */ U(!0);
  let i = null;
  function l(c) {
    n.value = c, s.value = null, o.value = !1;
  }
  function r(c, u) {
    a(), u && (t = u), o.value = !0, s.value = null, bl(c), i = l, mu(t, i), nn || fetch(ds(`/api/states/${t}`), {
      headers: { Authorization: `Bearer ${c}`, "Content-Type": "application/json" }
    }).then((d) => {
      if (!d.ok) throw new Error(`HTTP ${d.status}`);
      return d.json();
    }).then((d) => {
      o.value && (n.value = d, o.value = !1, s.value = null);
    }).catch((d) => {
      o.value && (s.value = d instanceof Error ? d.message : "Fehler", o.value = !1);
    });
  }
  function a() {
    i && (yu(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function lo() {
  return { cache: En, version: js };
}
const $u = { class: "weather-layout" }, ku = { class: "weather-left" }, xu = { class: "weather-temp" }, Cu = { class: "weather-condition" }, Su = {
  key: 0,
  class: "weather-meta"
}, Tu = {
  key: 0,
  class: "weather-meta-item"
}, Eu = {
  key: 1,
  class: "weather-meta-item"
}, Mu = { class: "weather-right" }, Au = ["innerHTML"], Iu = { class: "ha-modal-header-row" }, Lu = { class: "ha-modal-title" }, Pu = { class: "wf-current" }, Ru = { class: "wf-current-left" }, Ou = ["innerHTML"], Nu = { class: "wf-current-info" }, Du = { class: "wf-current-condition" }, Fu = { class: "wf-current-ago" }, Hu = { class: "wf-current-right" }, Bu = { class: "wf-current-temp" }, ju = {
  key: 0,
  class: "wf-current-hilo"
}, Vu = { class: "wf-details" }, Ku = {
  key: 0,
  class: "wf-detail-row"
}, Wu = { class: "wf-detail-value" }, Uu = {
  key: 1,
  class: "wf-detail-row"
}, zu = { class: "wf-detail-value" }, Ju = {
  key: 2,
  class: "wf-detail-row"
}, Gu = { class: "wf-detail-value" }, Yu = { class: "wf-tabs" }, qu = {
  key: 0,
  class: "weather-forecast-row"
}, Xu = { class: "wf-date" }, Qu = ["innerHTML"], Zu = { class: "wf-temps" }, ec = { class: "wf-temps-low" }, tc = {
  key: 1,
  class: "ha-modal-empty"
}, nc = {
  key: 0,
  class: "wf-hourly-scroll"
}, sc = { class: "wf-hourly-day-label" }, oc = { class: "weather-forecast-row" }, ic = { class: "wf-date" }, lc = ["innerHTML"], rc = { class: "wf-temps" }, ac = {
  key: 1,
  class: "ha-modal-empty"
}, uc = /* @__PURE__ */ Ye({
  __name: "WeatherBody",
  props: {
    entityId: {},
    token: {},
    state: {},
    isCompact: { type: Boolean },
    isShort: { type: Boolean },
    isNarrow: { type: Boolean },
    label: {},
    customTitle: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ U(!1), s = {
      sunny: { label: "Sonnig" },
      "clear-night": { label: "Klar" },
      partlycloudy: { label: "Teilw. bewölkt" },
      cloudy: { label: "Bewölkt" },
      rainy: { label: "Regen" },
      pouring: { label: "Starkregen" },
      snowy: { label: "Schnee" },
      "snowy-rainy": { label: "Schneeregen" },
      fog: { label: "Nebel" },
      hail: { label: "Hagel" },
      lightning: { label: "Gewitter" },
      "lightning-rainy": { label: "Gewitter & Regen" },
      windy: { label: "Windig" },
      "windy-variant": { label: "Windig" },
      exceptional: { label: "Außergewöhnlich" }
    };
    function o(I, D = 100) {
      const f = D, C = `<path d="M${f * 0.17} ${f * 0.63}a${f * 0.17} ${f * 0.17} 0 0 1 0-${f * 0.33}h${f * 0.04}a${f * 0.23} ${f * 0.23} 0 0 1 ${f * 0.44}-${f * 0.1}a${f * 0.19} ${f * 0.19} 0 0 1 ${f * 0.19} ${f * 0.1}h${f * 0.02}a${f * 0.17} ${f * 0.17} 0 0 1 0 ${f * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linejoin="round"/>`, j = `<svg viewBox="0 0 ${f} ${f}" width="${f}" height="${f}" xmlns="http://www.w3.org/2000/svg">`, J = "</svg>";
      switch (I) {
        case "sunny":
          return `${j}
        <circle cx="${f / 2}" cy="${f / 2}" r="${f * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((re) => {
            const ue = re * Math.PI / 180, de = f / 2 + Math.cos(ue) * f * 0.25, W = f / 2 + Math.sin(ue) * f * 0.25, G = f / 2 + Math.cos(ue) * f * 0.35, ye = f / 2 + Math.sin(ue) * f * 0.35;
            return `<line x1="${de}" y1="${W}" x2="${G}" y2="${ye}" stroke="#f6ad35" stroke-width="${f * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${J}`;
        case "clear-night":
          return `${j}<path d="M${f * 0.58} ${f * 0.15}a${f * 0.33} ${f * 0.33} 0 1 0 ${f * 0.27} ${f * 0.42} ${f * 0.25} ${f * 0.25} 0 0 1-${f * 0.27}-${f * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${f * 0.03}"/>${J}`;
        case "partlycloudy":
          return `${j}
        <circle cx="${f * 0.62}" cy="${f * 0.3}" r="${f * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((re) => {
            const ue = re * Math.PI / 180;
            return `<line x1="${f * 0.62 + Math.cos(ue) * f * 0.19}" y1="${f * 0.3 + Math.sin(ue) * f * 0.19}" x2="${f * 0.62 + Math.cos(ue) * f * 0.25}" y2="${f * 0.3 + Math.sin(ue) * f * 0.25}" stroke="#f6ad35" stroke-width="${f * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${C}
      ${J}`;
        case "cloudy":
          return `${j}${C}${J}`;
        case "rainy":
        case "pouring":
          return `${j}${C}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.5}" y1="${f * 0.71}" x2="${f * 0.45}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.7}" y1="${f * 0.71}" x2="${f * 0.65}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${J}`;
        case "snowy":
          return `${j}${C}
        <line x1="${f * 0.35}" y1="${f * 0.73}" x2="${f * 0.35}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.28}" y1="${f * 0.805}" x2="${f * 0.42}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.58}" y1="${f * 0.805}" x2="${f * 0.72}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${J}`;
        case "snowy-rainy":
          return `${j}${C}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.86}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.59}" y1="${f * 0.795}" x2="${f * 0.71}" y2="${f * 0.795}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${J}`;
        case "fog":
          return `${j}
        <line x1="${f * 0.2}" y1="${f * 0.35}" x2="${f * 0.8}" y2="${f * 0.35}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.15}" y1="${f * 0.5}" x2="${f * 0.85}" y2="${f * 0.5}" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.2}" y1="${f * 0.65}" x2="${f * 0.8}" y2="${f * 0.65}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${J}`;
        case "lightning":
          return `${j}${C}
        <polygon points="${f * 0.45},${f * 0.62} ${f * 0.52},${f * 0.75} ${f * 0.47},${f * 0.75} ${f * 0.55},${f * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
      ${J}`;
        case "lightning-rainy":
          return `${j}${C}
        <polygon points="${f * 0.42},${f * 0.62} ${f * 0.48},${f * 0.75} ${f * 0.44},${f * 0.75} ${f * 0.5},${f * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.71}" x2="${f * 0.6}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${J}`;
        case "windy":
        case "windy-variant":
          return `${j}
        <path d="M${f * 0.15} ${f * 0.4} Q${f * 0.4} ${f * 0.3} ${f * 0.65} ${f * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.2} ${f * 0.55} Q${f * 0.5} ${f * 0.45} ${f * 0.8} ${f * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.15} ${f * 0.7} Q${f * 0.35} ${f * 0.6} ${f * 0.55} ${f * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${J}`;
        case "hail":
          return `${j}${C}
        <circle cx="${f * 0.3}" cy="${f * 0.8}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.5}" cy="${f * 0.82}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.7}" cy="${f * 0.78}" r="${f * 0.035}" fill="#5bbbf5"/>
      ${J}`;
        default:
          return `${j}${C}${J}`;
      }
    }
    const i = Q(() => t.state ? o(t.state.state) : o("cloudy")), l = Q(() => {
      var I;
      return t.state ? ((I = s[t.state.state]) == null ? void 0 : I.label) ?? t.state.state : "";
    }), r = Q(() => {
      if (!t.state) return "--";
      const I = t.state.attributes.temperature;
      return I != null ? Math.round(I) : "--";
    }), a = Q(() => t.state ? t.state.attributes.humidity ?? null : null), c = Q(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = Q(() => t.state ? t.state.attributes.pressure ?? null : null), d = /* @__PURE__ */ U([]), y = /* @__PURE__ */ U([]), $ = /* @__PURE__ */ U("daily"), F = Q(() => {
      const I = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], D = [];
      let f = null;
      for (const C of y.value) {
        const j = new Date(C.datetime), J = I[j.getDay()];
        (!f || f.day !== J) && (f = { day: J, hours: [] }, D.push(f)), f.hours.push(C);
      }
      return D;
    }), E = Q(() => {
      if (!t.state) return "";
      const I = new Date(t.state.last_updated), f = Math.round(((/* @__PURE__ */ new Date()).getTime() - I.getTime()) / 6e4);
      if (f < 1) return "Gerade eben";
      if (f < 60) return `Vor ${f} Min.`;
      const C = Math.round(f / 60);
      return C < 24 ? `Vor ${C} Stunde${C > 1 ? "n" : ""}` : `Vor ${Math.round(C / 24)} Tag${Math.round(C / 24) > 1 ? "en" : ""}`;
    }), O = Q(() => t.state && d.value.length ? d.value[0].tempHigh : null), x = Q(() => t.state && d.value.length ? d.value[0].tempLow : null), m = Q(() => {
      if (!t.state) return "";
      const I = t.state.attributes.wind_bearing;
      return I == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(I / 22.5) % 16];
    });
    function T(I) {
      return I.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function R() {
      n.value = !0, $.value = "daily", await Z("daily");
    }
    async function V(I) {
      $.value = I, I === "hourly" && y.value.length === 0 && await Z("hourly");
    }
    async function Z(I) {
      var D, f;
      if (I === "daily") {
        const C = (D = t.state) == null ? void 0 : D.attributes.forecast;
        if (C && C.length) {
          d.value = le(C);
          return;
        }
      }
      try {
        const C = await _u(t.entityId, "weather", "get_forecasts", { type: I }), j = (C == null ? void 0 : C.response) ?? C, J = (j == null ? void 0 : j[t.entityId]) ?? (j ? Object.values(j)[0] : null), re = (J == null ? void 0 : J.forecast) ?? [];
        if (re.length) {
          I === "daily" ? d.value = le(re) : y.value = te(re);
          return;
        }
      } catch {
        try {
          const C = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: I })
          });
          if (C.ok) {
            const j = await C.json();
            let J = [];
            if (j != null && j[t.entityId]) J = j[t.entityId].forecast ?? [];
            else if (Array.isArray(j)) J = ((f = j[0]) == null ? void 0 : f.forecast) ?? [];
            else {
              const re = Object.values(j)[0];
              J = (re == null ? void 0 : re.forecast) ?? (j == null ? void 0 : j.forecast) ?? [];
            }
            if (J.length) {
              I === "daily" ? d.value = le(J) : y.value = te(J);
              return;
            }
          }
        } catch {
        }
      }
      I === "daily" ? d.value = [] : y.value = [];
    }
    function le(I) {
      const D = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return I.slice(0, 6).map((f) => {
        const C = new Date(f.datetime);
        return {
          date: f.datetime,
          weekday: D[C.getDay()],
          condition: f.condition ?? "cloudy",
          tempHigh: Math.round(f.temperature ?? f.templow ?? 0),
          tempLow: Math.round(f.templow ?? f.temperature ?? 0),
          precipitation: f.precipitation_probability ?? f.precipitation ?? null
        };
      });
    }
    function te(I) {
      return I.slice(0, 24).map((D) => {
        const f = new Date(D.datetime);
        return {
          datetime: D.datetime,
          time: f.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: D.condition ?? "cloudy",
          temp: Math.round(D.temperature ?? 0)
        };
      });
    }
    return (I, D) => {
      var f;
      return k(), P(oe, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: se(R, ["stop"]),
          title: "Vorhersage"
        }, [...D[5] || (D[5] = [
          ul('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: ve(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", $u, [
            p("div", ku, [
              p("span", xu, z(r.value) + "°", 1),
              p("span", Cu, z(l.value), 1),
              e.isCompact ? ie("", !0) : (k(), P("div", Su, [
                a.value !== null ? (k(), P("span", Tu, "💧 " + z(a.value) + "%", 1)) : ie("", !0),
                c.value !== null ? (k(), P("span", Eu, "💨 " + z(Math.round(c.value)) + " km/h", 1)) : ie("", !0)
              ]))
            ]),
            p("div", Mu, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, Au)
            ])
          ])
        ], 2),
        (k(), Te(kt, { to: "body" }, [
          n.value ? (k(), P("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: D[4] || (D[4] = se((C) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: D[3] || (D[3] = se(() => {
              }, ["stop"]))
            }, [
              p("div", Iu, [
                p("h3", Lu, z(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: D[0] || (D[0] = (C) => n.value = !1)
                }, "✕")
              ]),
              p("div", Pu, [
                p("div", Ru, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((f = e.state) == null ? void 0 : f.state) ?? "cloudy", 52)
                  }, null, 8, Ou),
                  p("div", Nu, [
                    p("span", Du, z(l.value), 1),
                    p("span", Fu, z(E.value), 1)
                  ])
                ]),
                p("div", Hu, [
                  p("span", Bu, z(r.value) + "°C", 1),
                  O.value !== null && x.value !== null ? (k(), P("span", ju, z(O.value) + "°C / " + z(x.value) + "°C", 1)) : ie("", !0)
                ])
              ]),
              p("div", Vu, [
                u.value !== null ? (k(), P("div", Ku, [
                  D[6] || (D[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", Wu, z(T(u.value)) + " hPa", 1)
                ])) : ie("", !0),
                a.value !== null ? (k(), P("div", Uu, [
                  D[7] || (D[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", zu, z(a.value) + " %", 1)
                ])) : ie("", !0),
                c.value !== null ? (k(), P("div", Ju, [
                  D[8] || (D[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", Gu, z(T(c.value)) + " km/h" + z(m.value ? ` (${m.value})` : ""), 1)
                ])) : ie("", !0)
              ]),
              p("div", Yu, [
                p("button", {
                  class: ve(["wf-tab", { active: $.value === "daily" }]),
                  onClick: D[1] || (D[1] = (C) => V("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: ve(["wf-tab", { active: $.value === "hourly" }]),
                  onClick: D[2] || (D[2] = (C) => V("hourly"))
                }, "Stündlich", 2)
              ]),
              $.value === "daily" ? (k(), P(oe, { key: 0 }, [
                d.value.length ? (k(), P("div", qu, [
                  (k(!0), P(oe, null, Ke(d.value, (C) => (k(), P("div", {
                    key: C.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", Xu, z(C.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(C.condition, 36)
                    }, null, 8, Qu),
                    p("span", Zu, z(C.tempHigh) + "°", 1),
                    p("span", ec, z(C.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (k(), P("div", tc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : ie("", !0),
              $.value === "hourly" ? (k(), P(oe, { key: 1 }, [
                y.value.length ? (k(), P("div", nc, [
                  (k(!0), P(oe, null, Ke(F.value, (C) => (k(), P("div", {
                    key: C.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", sc, z(C.day), 1),
                    p("div", oc, [
                      (k(!0), P(oe, null, Ke(C.hours, (j) => (k(), P("div", {
                        key: j.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", ic, z(j.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(j.condition, 32)
                        }, null, 8, lc),
                        p("span", rc, z(j.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (k(), P("div", ac, "Keine stündlichen Daten verfügbar"))
              ], 64)) : ie("", !0)
            ])
          ])) : ie("", !0)
        ]))
      ], 64);
    };
  }
}), cc = /* @__PURE__ */ qe(uc, [["__scopeId", "data-v-a3030d6f"]]), fc = { class: "center-wrap" }, dc = ["title"], hc = {
  key: 0,
  class: "updated"
}, pc = { class: "ha-modal-header-row" }, gc = { class: "ha-light-section" }, vc = { class: "ha-light-slider-wrap" }, mc = ["value"], yc = { class: "ha-light-slider-value" }, bc = {
  key: 0,
  class: "ha-light-section"
}, _c = { class: "ha-light-slider-wrap" }, wc = ["value"], $c = {
  key: 1,
  class: "ha-light-section"
}, kc = { class: "ha-light-slider-wrap" }, xc = ["value"], Cc = { class: "ha-light-slider-value" }, Sc = /* @__PURE__ */ Ye({
  __name: "LightBody",
  props: {
    entityId: {},
    token: {},
    state: {},
    isCompact: { type: Boolean },
    isShort: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Q(() => {
      if (!t.state) return !1;
      const x = t.state.state;
      if (x === "on" || x === "home" || x === "open" || x === "unlocked") return !0;
      const m = parseFloat(x);
      return !isNaN(m) && m > 0;
    }), s = /* @__PURE__ */ U(!1);
    async function o() {
      t.state && await Bt(t.token, t.entityId, "toggle");
    }
    const i = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ U(!1), r = Q(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = Q(() => {
      if (!t.state) return !1;
      const x = t.state.attributes.supported_color_modes;
      return (x == null ? void 0 : x.some((m) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(m))) ?? !1;
    }), c = Q(() => {
      if (!t.state) return 0;
      const x = t.state.attributes.hs_color;
      return Math.round((x == null ? void 0 : x[0]) ?? 0);
    }), u = Q(() => {
      if (!t.state) return 100;
      const x = t.state.attributes.hs_color;
      return Math.round((x == null ? void 0 : x[1]) ?? 100);
    }), d = Q(() => ({
      "--sat-color": `hsl(${c.value}, 100%, 50%)`
    }));
    let y = null, $ = null;
    function F(x) {
      const m = parseInt(x.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        m === 0 ? Bt(t.token, t.entityId, "turn_off") : Bt(t.token, t.entityId, "turn_on", { brightness: m });
      }, 150);
    }
    function E(x) {
      const m = parseInt(x.target.value);
      $ && clearTimeout($), $ = setTimeout(() => {
        Bt(t.token, t.entityId, "turn_on", {
          hs_color: [m, u.value]
        });
      }, 150);
    }
    function O(x) {
      const m = parseInt(x.target.value);
      $ && clearTimeout($), $ = setTimeout(() => {
        Bt(t.token, t.entityId, "turn_on", {
          hs_color: [c.value, m]
        });
      }, 150);
    }
    return (x, m) => (k(), P(oe, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: m[0] || (m[0] = se((T) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...m[9] || (m[9] = [
        ul('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: ve(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", fc, [
          p("button", {
            class: ve(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: m[1] || (m[1] = (T) => s.value = !0),
            onMouseup: m[2] || (m[2] = (T) => s.value = !1),
            onMouseleave: m[3] || (m[3] = (T) => s.value = !1),
            onTouchstartPassive: m[4] || (m[4] = (T) => s.value = !0),
            onTouchend: m[5] || (m[5] = (T) => s.value = !1),
            onClick: o,
            title: n.value ? "Ausschalten" : "Einschalten"
          }, [...m[10] || (m[10] = [
            p("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              p("path", { d: "M9 18h6" }),
              p("path", { d: "M10 22h4" }),
              p("path", { d: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" })
            ], -1)
          ])], 42, dc)
        ]),
        i.value ? (k(), P("div", hc, " Aktualisiert: " + z(i.value), 1)) : ie("", !0)
      ], 2),
      (k(), Te(kt, { to: "body" }, [
        l.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: m[8] || (m[8] = se((T) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: m[7] || (m[7] = se(() => {
            }, ["stop"]))
          }, [
            p("div", pc, [
              m[11] || (m[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: m[6] || (m[6] = (T) => l.value = !1)
              }, "✕")
            ]),
            p("div", gc, [
              m[12] || (m[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", vc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: F
                }, null, 40, mc),
                p("span", yc, z(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (k(), P("div", bc, [
              m[13] || (m[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", _c, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: E
                }, null, 40, wc),
                p("span", {
                  class: "ha-light-color-preview",
                  style: It({ background: `hsl(${c.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : ie("", !0),
            a.value ? (k(), P("div", $c, [
              m[14] || (m[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", kc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: It(d.value),
                  onInput: O
                }, null, 44, xc),
                p("span", Cc, z(u.value) + "%", 1)
              ])
            ])) : ie("", !0)
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Tc = /* @__PURE__ */ qe(Sc, [["__scopeId", "data-v-c1ca61d1"]]), Ec = { class: "center-wrap" }, Mc = ["title"], Ac = {
  key: 0,
  class: "updated"
}, Ic = /* @__PURE__ */ Ye({
  __name: "BinaryBody",
  props: {
    entityId: {},
    token: {},
    state: {},
    isCompact: { type: Boolean },
    isShort: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Q(() => {
      if (!t.state) return !1;
      const l = t.state.state;
      if (l === "on" || l === "home" || l === "open" || l === "unlocked") return !0;
      const r = parseFloat(l);
      return !isNaN(r) && r > 0;
    }), s = /* @__PURE__ */ U(!1);
    async function o() {
      t.state && await Bt(t.token, t.entityId, "toggle");
    }
    const i = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (l, r) => (k(), P("div", {
      class: ve(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Ec, [
        p("button", {
          class: ve(["power-btn", { on: n.value, pressing: s.value }]),
          onMousedown: r[0] || (r[0] = (a) => s.value = !0),
          onMouseup: r[1] || (r[1] = (a) => s.value = !1),
          onMouseleave: r[2] || (r[2] = (a) => s.value = !1),
          onTouchstartPassive: r[3] || (r[3] = (a) => s.value = !0),
          onTouchend: r[4] || (r[4] = (a) => s.value = !1),
          onClick: o,
          title: n.value ? "Ausschalten" : "Einschalten"
        }, [...r[5] || (r[5] = [
          p("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            p("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
            p("line", {
              x1: "12",
              y1: "2",
              x2: "12",
              y2: "12"
            })
          ], -1)
        ])], 42, Mc)
      ]),
      i.value ? (k(), P("div", Ac, " Aktualisiert: " + z(i.value), 1)) : ie("", !0)
    ], 2));
  }
}), Lc = /* @__PURE__ */ qe(Ic, [["__scopeId", "data-v-495ed0f0"]]), Pc = { class: "state value center-wrap" }, Rc = { class: "number" }, Oc = { class: "unit" }, Nc = {
  key: 0,
  class: "updated"
}, Dc = /* @__PURE__ */ Ye({
  __name: "ValueBody",
  props: {
    entityId: {},
    token: {},
    state: {},
    isCompact: { type: Boolean },
    isShort: { type: Boolean },
    isNarrow: { type: Boolean }
  },
  setup(e) {
    const t = e, n = Q(() => {
      if (!t.state) return "--";
      const i = parseFloat(t.state.state);
      return isNaN(i) ? t.state.state : i.toFixed(1);
    }), s = Q(() => {
      var i;
      return ((i = t.state) == null ? void 0 : i.attributes.unit_of_measurement) ?? "";
    }), o = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (i, l) => (k(), P("div", {
      class: ve(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Pc, [
        p("span", Rc, z(n.value), 1),
        p("span", Oc, z(s.value), 1)
      ]),
      o.value && !e.isCompact ? (k(), P("div", Nc, " Aktualisiert: " + z(o.value), 1)) : ie("", !0)
    ], 2));
  }
}), Fc = /* @__PURE__ */ qe(Dc, [["__scopeId", "data-v-336a5298"]]), Hc = {
  key: 0,
  class: "card-header"
}, Bc = { class: "label" }, jc = { class: "ha-modal-fields" }, Vc = { class: "ha-modal-input-wrap" }, Kc = ["onKeydown"], Wc = {
  key: 0,
  class: "ha-modal-suggestions"
}, Uc = ["onMousedown"], zc = { class: "ha-modal-s-entity" }, Jc = { class: "ha-modal-s-name" }, Gc = ["onKeydown"], Yc = { class: "ha-toggle-row" }, qc = {
  key: 1,
  class: "state loading"
}, Xc = {
  key: 2,
  class: "state error"
}, Qc = /* @__PURE__ */ Ye({
  __name: "SensorCard",
  props: {
    entityId: {},
    token: {},
    cols: { default: 2 },
    rows: { default: 2 },
    state: {},
    loading: { type: Boolean },
    error: {}
  },
  emits: ["change-entity", "remove", "resize"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Q(() => n.cols === 1 && n.rows === 1), i = Q(() => n.rows === 1 && n.cols > 1), l = Q(() => n.cols === 1 && n.rows > 1), r = Q(() => n.entityId.startsWith("weather.")), a = Q(() => n.entityId.startsWith("light.")), c = /* @__PURE__ */ new Set(["on", "off", "open", "closed", "locked", "unlocked", "home", "away"]), u = Q(() => !n.state || a.value || r.value ? !1 : c.has(n.state.state)), d = Q(() => {
      if (!n.state) return !1;
      const W = n.state.state;
      if (W === "on" || W === "home" || W === "open" || W === "unlocked") return !0;
      const G = parseFloat(W);
      return !isNaN(G) && G > 0;
    }), y = /* @__PURE__ */ U(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), $ = /* @__PURE__ */ U(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    Mt(() => n.entityId, (W) => {
      y.value = localStorage.getItem(`ha_title_${W}`) ?? "", $.value = localStorage.getItem(`ha_showtitle_${W}`) !== "false";
    });
    const F = Q(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), E = /* @__PURE__ */ U(!1), O = /* @__PURE__ */ U(""), x = /* @__PURE__ */ U(""), m = /* @__PURE__ */ U(!0), T = /* @__PURE__ */ U(null), R = /* @__PURE__ */ U([]), V = /* @__PURE__ */ U([]), Z = /* @__PURE__ */ U(-1);
    async function le() {
      try {
        R.value = await gu(n.token);
      } catch {
      }
    }
    function te() {
      Z.value = -1;
      const W = O.value.trim().toLowerCase();
      if (!W) {
        V.value = [];
        return;
      }
      V.value = R.value.filter(
        (G) => G.entity_id.toLowerCase().includes(W) || (G.attributes.friendly_name ?? "").toLowerCase().includes(W)
      ).slice(0, 8);
    }
    function I() {
      V.value.length && (Z.value = (Z.value + 1) % V.value.length);
    }
    function D() {
      V.value.length && (Z.value = (Z.value - 1 + V.value.length) % V.value.length);
    }
    function f(W) {
      O.value = W, V.value = [], Z.value = -1;
    }
    function C() {
      Z.value >= 0 && V.value[Z.value] ? f(V.value[Z.value].entity_id) : J();
    }
    function j() {
      O.value = n.entityId, x.value = y.value, m.value = $.value, V.value = [], Z.value = -1, E.value = !0, le(), ls(() => {
        var W;
        return (W = T.value) == null ? void 0 : W.select();
      });
    }
    function J() {
      const W = O.value.trim();
      if (W) {
        const G = x.value.trim();
        localStorage.setItem(`ha_title_${W}`, G), localStorage.setItem(`ha_showtitle_${W}`, String(m.value)), W === n.entityId && (y.value = G, $.value = m.value), s("change-entity", W);
      }
      V.value = [], E.value = !1;
    }
    function re() {
      V.value = [], E.value = !1;
    }
    function ue() {
      E.value = !1, s("remove");
    }
    function de(W) {
      const G = W.target.closest(".card");
      if (!G) return;
      const ye = G.getBoundingClientRect(), De = "touches" in W ? W.touches[0].clientX : W.clientX, Ae = "touches" in W ? W.touches[0].clientY : W.clientY, Wt = ye.width, Ut = ye.height, zt = 120;
      document.body.style.userSelect = "none";
      function Fe(be) {
        const Xe = "touches" in be ? be.touches[0].clientX : be.clientX, Qe = "touches" in be ? be.touches[0].clientY : be.clientY, ln = Wt + (Xe - De), h = Ut + (Qe - Ae), g = Math.max(1, Math.min(6, Math.round((ln + 20) / zt))), w = Math.max(1, Math.min(6, Math.round((h + 20) / zt)));
        G.style.gridColumn = `span ${g}`, G.style.gridRow = `span ${w}`, G.dataset.previewCols = String(g), G.dataset.previewRows = String(w);
      }
      function Ie() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", Fe), document.removeEventListener("mouseup", Ie), document.removeEventListener("touchmove", Fe), document.removeEventListener("touchend", Ie);
        const be = parseInt(G.dataset.previewCols || String(n.cols)), Xe = parseInt(G.dataset.previewRows || String(n.rows));
        delete G.dataset.previewCols, delete G.dataset.previewRows, (be !== n.cols || Xe !== n.rows) && s("resize", be, Xe);
      }
      document.addEventListener("mousemove", Fe), document.addEventListener("mouseup", Ie), document.addEventListener("touchmove", Fe), document.addEventListener("touchend", Ie);
    }
    return (W, G) => (k(), P("div", {
      class: ve(["card", { active: d.value, small: o.value, short: i.value, narrow: l.value }])
    }, [
      p("button", {
        class: "edit-ctrl-btn",
        onClick: se(j, ["stop"]),
        title: "Bearbeiten"
      }, [...G[4] || (G[4] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      $.value ? (k(), P("div", Hc, [
        p("span", Bc, z(y.value || F.value), 1)
      ])) : ie("", !0),
      (k(), Te(kt, { to: "body" }, [
        E.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: se(re, ["self"])
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: G[3] || (G[3] = se(() => {
            }, ["stop"]))
          }, [
            G[7] || (G[7] = p("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            p("div", jc, [
              p("div", Vc, [
                wt(p("input", {
                  ref_key: "inputRef",
                  ref: T,
                  "onUpdate:modelValue": G[0] || (G[0] = (ye) => O.value = ye),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: te,
                  onKeydown: [
                    Se(se(C, ["prevent"]), ["enter"]),
                    Se(re, ["escape"]),
                    Se(se(I, ["prevent"]), ["arrow-down"]),
                    Se(se(D, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, Kc), [
                  [$t, O.value]
                ]),
                V.value.length ? (k(), P("ul", Wc, [
                  (k(!0), P(oe, null, Ke(V.value, (ye, De) => (k(), P("li", {
                    key: ye.entity_id,
                    class: ve(["ha-modal-suggestion-item", { active: De === Z.value }]),
                    onMousedown: se((Ae) => f(ye.entity_id), ["prevent"])
                  }, [
                    p("span", zc, z(ye.entity_id), 1),
                    p("span", Jc, z(ye.attributes.friendly_name ?? ""), 1)
                  ], 42, Uc))), 128))
                ])) : ie("", !0)
              ]),
              wt(p("input", {
                "onUpdate:modelValue": G[1] || (G[1] = (ye) => x.value = ye),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Se(se(J, ["prevent"]), ["enter"]),
                  Se(re, ["escape"])
                ]
              }, null, 40, Gc), [
                [$t, x.value]
              ])
            ]),
            p("div", Yc, [
              G[6] || (G[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: ve(["ha-toggle", { on: m.value }]),
                onClick: G[2] || (G[2] = (ye) => m.value = !m.value),
                type: "button"
              }, [...G[5] || (G[5] = [
                p("span", { class: "ha-toggle-knob" }, null, -1)
              ])], 2)
            ]),
            G[8] || (G[8] = p("div", { class: "ha-modal-hint" }, " Entity-ID eingeben · ↑↓ navigieren · Enter übernehmen ", -1)),
            p("div", { class: "ha-modal-actions" }, [
              p("button", {
                class: "ha-modal-btn confirm",
                title: "Übernehmen",
                onClick: J
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                title: "Abbrechen",
                onClick: re
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: ue
            }, "Card entfernen")
          ])
        ])) : ie("", !0)
      ])),
      e.loading ? (k(), P("div", qc, [...G[9] || (G[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (k(), P("div", Xc, [
        G[10] || (G[10] = p("span", null, "⚠️", -1)),
        At(" " + z(e.error), 1)
      ])) : r.value ? (k(), Te(cc, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: y.value || F.value,
        "custom-title": y.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (k(), Te(Tc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? (k(), Te(Lc, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (k(), Te(Fc, {
        key: 6,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])),
      p("div", {
        class: "resize-handle",
        onMousedown: se(de, ["prevent"]),
        onTouchstart: se(de, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Zc = /* @__PURE__ */ qe(Qc, [["__scopeId", "data-v-2114e986"]]), ef = { class: "ha-modal-header-row" }, tf = { class: "ha-modal-fields" }, nf = ["onKeydown"], sf = { class: "ha-modal-actions" }, of = /* @__PURE__ */ Ye({
  __name: "HeadingCard",
  props: {
    label: {},
    cols: { default: 3 },
    rows: { default: 1 }
  },
  emits: ["update-label", "remove", "resize"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ U(!1), i = /* @__PURE__ */ U(""), l = /* @__PURE__ */ U(null);
    function r() {
      i.value = n.label, o.value = !0, ls(() => {
        var E;
        return (E = l.value) == null ? void 0 : E.select();
      });
    }
    function a() {
      o.value = !1;
      const E = i.value.trim();
      E && E !== n.label && s("update-label", E);
    }
    function c() {
      o.value = !1;
    }
    const u = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U("");
    function y() {
      d.value = n.label, u.value = !0;
    }
    function $() {
      const E = d.value.trim();
      E && E !== n.label && s("update-label", E), u.value = !1;
    }
    function F(E) {
      const O = E.target.closest(".heading");
      if (!O) return;
      const x = O.getBoundingClientRect(), m = "touches" in E ? E.touches[0].clientX : E.clientX, T = "touches" in E ? E.touches[0].clientY : E.clientY, R = x.width, V = x.height, Z = 120;
      document.body.style.userSelect = "none";
      function le(I) {
        const D = "touches" in I ? I.touches[0].clientX : I.clientX, f = "touches" in I ? I.touches[0].clientY : I.clientY, C = R + (D - m), j = V + (f - T), J = Math.max(1, Math.min(12, Math.round((C + 20) / Z))), re = Math.max(1, Math.min(4, Math.round((j + 20) / Z)));
        O.style.gridColumn = `span ${J}`, O.style.gridRow = `span ${re}`, O.dataset.previewCols = String(J), O.dataset.previewRows = String(re);
      }
      function te() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", le), document.removeEventListener("mouseup", te), document.removeEventListener("touchmove", le), document.removeEventListener("touchend", te);
        const I = parseInt(O.dataset.previewCols ?? "") || n.cols, D = parseInt(O.dataset.previewRows ?? "") || n.rows;
        delete O.dataset.previewCols, delete O.dataset.previewRows, O.style.gridColumn = "", O.style.gridRow = "", s("resize", I, D);
      }
      document.addEventListener("mousemove", le), document.addEventListener("mouseup", te), document.addEventListener("touchmove", le, { passive: !1 }), document.addEventListener("touchend", te);
    }
    return (E, O) => (k(), P("div", {
      class: ve(["heading", { short: e.rows === 1 }])
    }, [
      o.value ? wt((k(), P("input", {
        key: 1,
        ref_key: "inputRef",
        ref: l,
        "onUpdate:modelValue": O[0] || (O[0] = (x) => i.value = x),
        class: "heading-input",
        onBlur: a,
        onKeydown: [
          Se(a, ["enter"]),
          Se(c, ["escape"])
        ]
      }, null, 544)), [
        [$t, i.value]
      ]) : (k(), P("h2", {
        key: 0,
        class: "heading-text",
        onDblclick: r
      }, z(e.label), 33)),
      p("button", {
        class: "heading-edit-btn",
        onClick: se(y, ["stop"]),
        title: "Bearbeiten"
      }, [...O[8] || (O[8] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      (k(), Te(kt, { to: "body" }, [
        u.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: O[7] || (O[7] = se((x) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: O[6] || (O[6] = se(() => {
            }, ["stop"]))
          }, [
            p("div", ef, [
              O[9] || (O[9] = p("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: O[1] || (O[1] = (x) => u.value = !1)
              }, "✕")
            ]),
            p("div", tf, [
              wt(p("input", {
                "onUpdate:modelValue": O[2] || (O[2] = (x) => d.value = x),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Se(se($, ["prevent"]), ["enter"]),
                  O[3] || (O[3] = Se((x) => u.value = !1, ["escape"]))
                ]
              }, null, 40, nf), [
                [$t, d.value]
              ])
            ]),
            p("div", sf, [
              p("button", {
                class: "ha-modal-btn confirm",
                onClick: $
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                onClick: O[4] || (O[4] = (x) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: O[5] || (O[5] = (x) => {
                E.$emit("remove"), u.value = !1;
              })
            }, " Überschrift entfernen ")
          ])
        ])) : ie("", !0)
      ])),
      p("div", {
        class: "resize-handle",
        onMousedown: se(F, ["prevent"]),
        onTouchstart: se(F, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), lf = /* @__PURE__ */ qe(of, [["__scopeId", "data-v-ab143d98"]]);
function ro(e) {
  const { cache: t, version: n } = lo();
  function s() {
    try {
      const d = localStorage.getItem(`ha_group_${e.key}`);
      if (d) {
        const y = JSON.parse(d);
        return {
          included: Array.isArray(y.included) ? y.included : [],
          excluded: Array.isArray(y.excluded) ? y.excluded : []
        };
      }
    } catch {
    }
    return { included: [], excluded: [] };
  }
  const o = /* @__PURE__ */ U(s());
  function i() {
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value));
  }
  const l = Q(() => {
    n.value;
    const d = [];
    for (const [, y] of t)
      e.autoDetect(y) && d.push(y.entity_id);
    return d.sort();
  }), r = Q(() => {
    const d = new Set(o.value.excluded), y = /* @__PURE__ */ new Set();
    for (const $ of l.value)
      d.has($) || y.add($);
    for (const $ of o.value.included)
      y.add($);
    return [...y].sort();
  }), a = Q(() => (n.value, r.value.map((d) => t.get(d)).filter((d) => d != null)));
  function c(d) {
    o.value.included.includes(d) || o.value.included.push(d), o.value.excluded = o.value.excluded.filter((y) => y !== d), i();
  }
  function u(d) {
    o.value.included = o.value.included.filter((y) => y !== d), l.value.includes(d) && !o.value.excluded.includes(d) && o.value.excluded.push(d), i();
  }
  return {
    entities: a,
    entityIds: r,
    autoDetectedIds: l,
    config: o,
    addEntity: c,
    removeEntity: u
  };
}
const rf = { class: "pill-label" }, af = { class: "ha-modal-header-row" }, uf = {
  key: 0,
  class: "ha-modal-empty"
}, cf = {
  key: 1,
  class: "ha-modal-entity-list"
}, ff = { class: "ha-modal-entity-name" }, df = /* @__PURE__ */ Ye({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = ro({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ Zs(() => t.token)
    }), s = Q(() => n.entities.value.filter((r) => r.state === "on")), o = Q(() => s.value.length > 0), i = Q(() => s.value.length), l = /* @__PURE__ */ U(!1);
    return (r, a) => (k(), P(oe, null, [
      p("button", {
        class: ve(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (c) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", rf, z(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      (k(), Te(kt, { to: "body" }, [
        l.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = se((c) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", af, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (c) => l.value = !1)
              }, "✕")
            ]),
            Ve(n).entities.value.length ? (k(), P("ul", cf, [
              (k(!0), P(oe, null, Ke(Ve(n).entities.value, (c) => (k(), P("li", {
                key: c.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", ff, z(c.attributes.friendly_name ?? c.entity_id), 1),
                p("span", {
                  class: ve(["ha-modal-entity-badge", c.state === "on" ? "open" : "closed"])
                }, z(c.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (k(), P("div", uf, " Keine Sensoren gefunden "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), hf = /* @__PURE__ */ qe(df, [["__scopeId", "data-v-4c919921"]]), pf = { class: "pill-label" }, gf = { class: "ha-modal-header-row" }, vf = { class: "ha-modal-header-actions" }, mf = {
  key: 0,
  class: "ha-modal-empty"
}, yf = {
  key: 1,
  class: "ha-modal-entity-list"
}, bf = { class: "ha-modal-entity-name" }, _f = ["onClick"], wf = { class: "ha-modal-input-wrap" }, $f = ["onKeydown"], kf = {
  key: 0,
  class: "ha-modal-suggestions"
}, xf = ["onMousedown"], Cf = { class: "ha-modal-s-entity" }, Sf = { class: "ha-modal-s-name" }, Tf = { class: "ha-modal-entity-list" }, Ef = { class: "ha-modal-entity-name" }, Mf = ["onClick"], Af = {
  key: 0,
  class: "ha-modal-empty"
}, If = /* @__PURE__ */ Ye({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = ro({
      key: "lights",
      autoDetect: (m) => m.entity_id.startsWith("light."),
      token: /* @__PURE__ */ Zs(() => t.token)
    }), { cache: s, version: o } = lo(), i = Q(() => n.entities.value.filter((m) => m.state === "on")), l = Q(() => i.value.length > 0), r = Q(() => i.value.length), a = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(""), d = /* @__PURE__ */ U([]);
    function y() {
      c.value = !c.value, u.value = "", d.value = [];
    }
    function $(m) {
      o.value;
      const T = s.get(m);
      return (T == null ? void 0 : T.attributes.friendly_name) ?? m;
    }
    function F() {
      const m = u.value.trim().toLowerCase();
      if (!m) {
        d.value = [];
        return;
      }
      const T = new Set(n.entityIds.value), R = [];
      o.value;
      for (const [, V] of s)
        if (!T.has(V.entity_id) && (V.entity_id.toLowerCase().includes(m) || (V.attributes.friendly_name ?? "").toLowerCase().includes(m)) && (R.push(V), R.length >= 8))
          break;
      d.value = R;
    }
    function E(m) {
      n.addEntity(m), u.value = "", d.value = [];
    }
    function O() {
      d.value.length && E(d.value[0].entity_id);
    }
    async function x(m) {
      await Bt(t.token, m, "toggle");
    }
    return (m, T) => (k(), P(oe, null, [
      p("button", {
        class: ve(["pill", { active: l.value }]),
        onClick: T[0] || (T[0] = (R) => a.value = !0)
      }, [
        T[6] || (T[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", pf, z(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (k(), Te(kt, { to: "body" }, [
        a.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: T[5] || (T[5] = se((R) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: T[4] || (T[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", gf, [
              T[8] || (T[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", vf, [
                p("button", {
                  class: ve(["ha-modal-icon-btn", { active: c.value }]),
                  onClick: y,
                  title: "Bearbeiten"
                }, [...T[7] || (T[7] = [
                  p("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    p("path", { d: "M12 20h9" }),
                    p("path", { d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1)
                ])], 2),
                p("button", {
                  class: "ha-modal-close",
                  onClick: T[1] || (T[1] = (R) => {
                    a.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? (k(), P(oe, { key: 1 }, [
              p("div", wf, [
                wt(p("input", {
                  "onUpdate:modelValue": T[2] || (T[2] = (R) => u.value = R),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: F,
                  onKeydown: [
                    Se(se(O, ["prevent"]), ["enter"]),
                    T[3] || (T[3] = Se((R) => {
                      u.value = "", d.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, $f), [
                  [$t, u.value]
                ]),
                d.value.length ? (k(), P("ul", kf, [
                  (k(!0), P(oe, null, Ke(d.value, (R) => (k(), P("li", {
                    key: R.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((V) => E(R.entity_id), ["prevent"])
                  }, [
                    p("span", Cf, z(R.entity_id), 1),
                    p("span", Sf, z(R.attributes.friendly_name ?? ""), 1)
                  ], 40, xf))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", Tf, [
                (k(!0), P(oe, null, Ke(Ve(n).entityIds.value, (R) => (k(), P("li", {
                  key: R,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Ef, z($(R)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (V) => Ve(n).removeEntity(R),
                    title: "Entfernen"
                  }, "✕", 8, Mf)
                ]))), 128))
              ]),
              Ve(n).entityIds.value.length ? ie("", !0) : (k(), P("div", Af, " Keine Lichter ausgewählt "))
            ], 64)) : (k(), P(oe, { key: 0 }, [
              Ve(n).entities.value.length ? (k(), P("ul", yf, [
                (k(!0), P(oe, null, Ke(Ve(n).entities.value, (R) => (k(), P("li", {
                  key: R.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", bf, z(R.attributes.friendly_name ?? R.entity_id), 1),
                  p("button", {
                    class: ve(["ha-modal-toggle-btn", R.state === "on" ? "on" : "off"]),
                    onClick: (V) => x(R.entity_id)
                  }, z(R.state === "on" ? "An" : "Aus"), 11, _f)
                ]))), 128))
              ])) : (k(), P("div", mf, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Lf = /* @__PURE__ */ qe(If, [["__scopeId", "data-v-10807199"]]), Pf = { class: "pill-label" }, Rf = { class: "ha-modal-header-row" }, Of = { class: "ha-modal-header-actions" }, Nf = {
  key: 0,
  class: "ha-modal-empty"
}, Df = {
  key: 1,
  class: "ha-modal-entity-list"
}, Ff = { class: "ha-modal-entity-name" }, Hf = { class: "ha-modal-entity-value" }, Bf = { class: "ha-modal-input-wrap" }, jf = ["onKeydown"], Vf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Kf = ["onMousedown"], Wf = { class: "ha-modal-s-entity" }, Uf = { class: "ha-modal-s-name" }, zf = { class: "ha-modal-entity-list" }, Jf = { class: "ha-modal-entity-name" }, Gf = ["onClick"], Yf = {
  key: 0,
  class: "ha-modal-empty"
}, qf = /* @__PURE__ */ Ye({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = ro({
      key: "climate",
      autoDetect: (x) => x.entity_id.startsWith("climate.") || x.entity_id.startsWith("sensor.") && x.attributes.device_class === "temperature",
      token: /* @__PURE__ */ Zs(() => t.token)
    }), { cache: s, version: o } = lo();
    function i(x) {
      if (x.entity_id.startsWith("climate.")) {
        const T = x.attributes.current_temperature;
        return typeof T == "number" ? T : null;
      }
      const m = parseFloat(x.state);
      return isNaN(m) ? null : m;
    }
    function l(x) {
      const m = i(x);
      if (m === null) return x.state;
      const T = x.attributes.unit_of_measurement ?? "°C";
      return `${m.toFixed(1)} ${T}`;
    }
    const r = Q(() => {
      const x = n.entities.value.map(i).filter((R) => R !== null);
      if (!x.length) return "-- °C";
      const m = Math.min(...x), T = Math.max(...x);
      return m === T ? `${m.toFixed(1)} °C` : `${m.toFixed(1)}–${T.toFixed(1)} °C`;
    });
    function a(x) {
      o.value;
      const m = s.get(x);
      return (m == null ? void 0 : m.attributes.friendly_name) ?? x;
    }
    const c = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(!1), d = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U([]);
    function $() {
      u.value = !u.value, d.value = "", y.value = [];
    }
    function F() {
      const x = d.value.trim().toLowerCase();
      if (!x) {
        y.value = [];
        return;
      }
      const m = new Set(n.entityIds.value), T = [];
      o.value;
      for (const [, R] of s)
        if (!m.has(R.entity_id) && (R.entity_id.toLowerCase().includes(x) || (R.attributes.friendly_name ?? "").toLowerCase().includes(x)) && (T.push(R), T.length >= 8))
          break;
      y.value = T;
    }
    function E(x) {
      n.addEntity(x), d.value = "", y.value = [];
    }
    function O() {
      y.value.length && E(y.value[0].entity_id);
    }
    return (x, m) => (k(), P(oe, null, [
      p("button", {
        class: "pill",
        onClick: m[0] || (m[0] = (T) => c.value = !0)
      }, [
        m[6] || (m[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", Pf, z(r.value), 1)
      ]),
      (k(), Te(kt, { to: "body" }, [
        c.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: m[5] || (m[5] = se((T) => c.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: m[4] || (m[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Rf, [
              m[8] || (m[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", Of, [
                p("button", {
                  class: ve(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: $,
                  title: "Bearbeiten"
                }, [...m[7] || (m[7] = [
                  p("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    p("path", { d: "M12 20h9" }),
                    p("path", { d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1)
                ])], 2),
                p("button", {
                  class: "ha-modal-close",
                  onClick: m[1] || (m[1] = (T) => {
                    c.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? (k(), P(oe, { key: 1 }, [
              p("div", Bf, [
                wt(p("input", {
                  "onUpdate:modelValue": m[2] || (m[2] = (T) => d.value = T),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: F,
                  onKeydown: [
                    Se(se(O, ["prevent"]), ["enter"]),
                    m[3] || (m[3] = Se((T) => {
                      d.value = "", y.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, jf), [
                  [$t, d.value]
                ]),
                y.value.length ? (k(), P("ul", Vf, [
                  (k(!0), P(oe, null, Ke(y.value, (T) => (k(), P("li", {
                    key: T.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((R) => E(T.entity_id), ["prevent"])
                  }, [
                    p("span", Wf, z(T.entity_id), 1),
                    p("span", Uf, z(T.attributes.friendly_name ?? ""), 1)
                  ], 40, Kf))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", zf, [
                (k(!0), P(oe, null, Ke(Ve(n).entityIds.value, (T) => (k(), P("li", {
                  key: T,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Jf, z(a(T)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (R) => Ve(n).removeEntity(T),
                    title: "Entfernen"
                  }, "✕", 8, Gf)
                ]))), 128))
              ]),
              Ve(n).entityIds.value.length ? ie("", !0) : (k(), P("div", Yf, " Keine Sensoren ausgewählt "))
            ], 64)) : (k(), P(oe, { key: 0 }, [
              Ve(n).entities.value.length ? (k(), P("ul", Df, [
                (k(!0), P(oe, null, Ke(Ve(n).entities.value, (T) => (k(), P("li", {
                  key: T.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Ff, z(T.attributes.friendly_name ?? T.entity_id), 1),
                  p("span", Hf, z(l(T)), 1)
                ]))), 128))
              ])) : (k(), P("div", Nf, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Xf = /* @__PURE__ */ qe(qf, [["__scopeId", "data-v-2665ddcd"]]), Qf = { class: "pill-label" }, Zf = { class: "ha-modal-header-row" }, ed = {
  key: 0,
  class: "ha-modal-empty"
}, td = {
  key: 1,
  class: "ha-modal-entity-list"
}, nd = { class: "notif-header" }, sd = { class: "notif-title" }, od = { class: "notif-time" }, id = {
  key: 0,
  class: "notif-message"
}, ld = ["onClick"], rd = /* @__PURE__ */ Ye({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ U([]), s = /* @__PURE__ */ U(!1);
    let o = null;
    async function i() {
      try {
        const a = new WebSocket(yl()), c = await new Promise((u, d) => {
          let y = 1;
          a.onmessage = ($) => {
            const F = JSON.parse($.data);
            if (F.type === "auth_required") {
              a.send(JSON.stringify({ type: "auth", access_token: t.token }));
              return;
            }
            if (F.type === "auth_ok") {
              const E = y++;
              a.send(JSON.stringify({ id: E, type: "persistent_notification/get" }));
              return;
            }
            F.type === "result" && (a.close(), F.success && Array.isArray(F.result) ? u(F.result) : u([]));
          }, a.onerror = () => {
            a.close(), u([]);
          }, setTimeout(() => {
            a.close(), u([]);
          }, 5e3);
        });
        n.value = c.sort(
          (u, d) => new Date(d.created_at).getTime() - new Date(u.created_at).getTime()
        );
      } catch {
        n.value = [];
      }
    }
    async function l(a) {
      try {
        await fetch(ds("/api/services/persistent_notification/dismiss"), {
          method: "POST",
          headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ notification_id: a })
        }), n.value = n.value.filter((c) => c.notification_id !== a), n.value.length === 0 && (s.value = !1);
      } catch {
      }
    }
    function r(a) {
      const c = new Date(a), d = Math.round(((/* @__PURE__ */ new Date()).getTime() - c.getTime()) / 6e4);
      if (d < 1) return "Gerade eben";
      if (d < 60) return `Vor ${d} Min.`;
      const y = Math.round(d / 60);
      return y < 24 ? `Vor ${y} Stunde${y > 1 ? "n" : ""}` : `Vor ${Math.round(y / 24)} Tag${Math.round(y / 24) > 1 ? "en" : ""}`;
    }
    return kn(() => {
      i(), o = setInterval(i, 3e4);
    }), xn(() => {
      o && clearInterval(o);
    }), (a, c) => (k(), P(oe, null, [
      n.value.length ? (k(), P("button", {
        key: 0,
        class: "pill",
        onClick: c[0] || (c[0] = (u) => s.value = !0)
      }, [
        c[4] || (c[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", Qf, z(n.value.length), 1)
      ])) : ie("", !0),
      (k(), Te(kt, { to: "body" }, [
        s.value ? (k(), P("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: c[3] || (c[3] = se((u) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: c[2] || (c[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Zf, [
              c[5] || (c[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: c[1] || (c[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (k(), P("ul", td, [
              (k(!0), P(oe, null, Ke(n.value, (u) => (k(), P("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                p("div", nd, [
                  p("span", sd, z(u.title || u.message), 1),
                  p("span", od, z(r(u.created_at)), 1)
                ]),
                u.title && u.message ? (k(), P("p", id, z(u.message), 1)) : ie("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (d) => l(u.notification_id)
                }, "Löschen", 8, ld)
              ]))), 128))
            ])) : (k(), P("div", ed, " Keine Benachrichtigungen "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), ad = /* @__PURE__ */ qe(rd, [["__scopeId", "data-v-a643a4ed"]]), ud = {
  key: 1,
  class: "dashboard"
}, cd = { class: "dashboard-header" }, fd = { class: "header-left" }, dd = { class: "header-right" }, hd = { class: "clock" }, pd = { class: "clock-time" }, gd = { class: "clock-date" }, vd = { class: "page-tabs" }, md = { class: "page-tabs-inner" }, yd = ["onClick", "onDblclick", "onTouchstartPassive"], bd = {
  key: 1,
  class: "page-tab-label"
}, _d = { class: "ha-modal-header-row" }, wd = { class: "page-delete-text" }, $d = { class: "page-delete-actions" }, kd = { class: "burger-wrap" }, ei = 120, xd = 36, Cd = 32, Sd = /* @__PURE__ */ Ye({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var Y;
    e.panelMode && vl(!0);
    const n = /* @__PURE__ */ U(localStorage.getItem("ha_token")), s = pu(), o = Q(() => du() ? s.value : n.value), i = /* @__PURE__ */ ss({}), l = /* @__PURE__ */ new Map();
    function r() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function a() {
      try {
        const v = localStorage.getItem("ha_pages");
        if (v) {
          const b = JSON.parse(v);
          if (Array.isArray(b) && b.length)
            return b.map((_) => ({
              id: _.id,
              name: _.name || "Seite",
              cards: (_.cards || []).map((K) => ({
                id: K.id,
                type: K.type ?? "card",
                entityId: K.entityId ?? "",
                label: K.label,
                cols: K.cols ?? 2,
                rows: K.rows ?? 2,
                gridCol: K.gridCol,
                gridRow: K.gridRow
              }))
            }));
        }
      } catch {
      }
      try {
        const v = localStorage.getItem("ha_cards");
        if (v) {
          const b = JSON.parse(v).map((_) => ({
            id: _.id,
            entityId: _.entityId,
            cols: _.cols ?? (_.size === "small" ? 1 : 2),
            rows: _.rows ?? (_.size === "small" ? 1 : 2)
          }));
          return [{ id: r(), name: "Home", cards: b }];
        }
      } catch {
      }
      return [{ id: r(), name: "Home", cards: [{ id: r(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const c = /* @__PURE__ */ U([]), u = /* @__PURE__ */ U(""), d = Q(() => c.value.find((v) => v.id === u.value) ?? c.value[0]), y = Q(() => {
      var v;
      return ((v = d.value) == null ? void 0 : v.cards) ?? [];
    });
    function $() {
      localStorage.setItem("ha_pages", JSON.stringify(c.value));
    }
    function F(v) {
      if (u.value !== v) {
        for (const b of y.value) re(b.id);
        u.value = v, localStorage.setItem("ha_active_page", v);
        for (const b of y.value)
          b.type !== "heading" && J(b.id, b.entityId);
      }
    }
    function E() {
      const v = r(), b = c.value.length + 1;
      c.value = [...c.value, { id: v, name: `Seite ${b}`, cards: [] }], $(), F(v);
    }
    const O = /* @__PURE__ */ U(null), x = Q(() => {
      const v = c.value.find((b) => b.id === O.value);
      return (v == null ? void 0 : v.name) ?? "";
    }), m = Q(() => {
      const v = c.value.find((b) => b.id === O.value);
      return (v == null ? void 0 : v.cards.length) ?? 0;
    });
    function T(v) {
      c.value.length <= 1 || (O.value = v);
    }
    function R() {
      const v = O.value;
      if (O.value = null, !v || c.value.length <= 1) return;
      const b = c.value.find((_) => _.id === v);
      if (b)
        for (const _ of b.cards) re(_.id);
      if (c.value = c.value.filter((_) => _.id !== v), u.value === v) {
        u.value = c.value[0].id, localStorage.setItem("ha_active_page", u.value);
        for (const _ of y.value)
          _.type !== "heading" && J(_.id, _.entityId);
      }
      $();
    }
    let V = null;
    function Z(v) {
      V = setTimeout(() => {
        V = null, f(v);
      }, 600);
    }
    function le() {
      V && (clearTimeout(V), V = null);
    }
    const te = /* @__PURE__ */ U(null), I = /* @__PURE__ */ U(""), D = /* @__PURE__ */ U(null);
    function f(v) {
      const b = c.value.find((_) => _.id === v);
      b && (te.value = v, I.value = b.name, ls(() => {
        D.value && D.value.length && (D.value[0].focus(), D.value[0].select());
      }));
    }
    function C() {
      if (!te.value) return;
      const v = c.value.find((b) => b.id === te.value);
      v && I.value.trim() && (v.name = I.value.trim(), c.value = [...c.value], $()), te.value = null;
    }
    function j() {
      te.value = null;
    }
    function J(v, b) {
      if (l.has(v)) return;
      const _ = wu(b);
      l.set(v, _), i[v] = { state: null, loading: !0, error: null }, Mt(_.state, (K) => {
        i[v] && (i[v].state = K);
      }), Mt(_.loading, (K) => {
        i[v] && (i[v].loading = K);
      }), Mt(_.error, (K) => {
        i[v] && (i[v].error = K);
      }), o.value && _.start(o.value);
    }
    function re(v) {
      const b = l.get(v);
      b && (b.stop(), l.delete(v)), delete i[v];
    }
    const ue = a();
    c.value = ue;
    const de = localStorage.getItem("ha_active_page");
    u.value = ((Y = ue.find((v) => v.id === de)) == null ? void 0 : Y.id) ?? ue[0].id;
    for (const v of y.value)
      v.type !== "heading" && J(v.id, v.entityId);
    Mt(o, (v, b) => {
      if (v && !b)
        for (const [, _] of l) _.start(v);
    });
    function W() {
      const v = r(), b = "sensor.wohnzimmer_soll_temperatur", _ = d.value;
      _ && (_.cards = [..._.cards, { id: v, type: "card", entityId: b, cols: 2, rows: 2 }], c.value = [...c.value], J(v, b), $());
    }
    function G() {
      const v = r(), b = d.value;
      b && (b.cards = [...b.cards, { id: v, type: "heading", entityId: "", label: "Überschrift", cols: 3, rows: 1 }], c.value = [...c.value], $());
    }
    function ye(v, b) {
      const _ = d.value;
      if (!_) return;
      const K = _.cards.find((q) => q.id === v);
      K && (K.label = b, c.value = [...c.value], $());
    }
    function De(v) {
      re(v);
      const b = d.value;
      b && (b.cards = b.cards.filter((_) => _.id !== v), c.value = [...c.value], $());
    }
    function Ae(v) {
      n.value = v;
      for (const [, b] of l) b.start(v);
    }
    function Wt(v, b) {
      const _ = d.value;
      if (!_) return;
      const K = _.cards.find((ne) => ne.id === v);
      if (!K) return;
      K.entityId = b;
      const q = l.get(v);
      q && o.value && q.start(o.value, b), c.value = [...c.value], $();
    }
    function Ut(v, b, _) {
      const K = d.value;
      if (!K) return;
      const q = K.cards.find((ne) => ne.id === v);
      q && (q.cols = b, q.rows = _, c.value = [...c.value], $());
    }
    function zt() {
      for (const [v] of l) re(v);
      c.value = [{ id: r(), name: "Home", cards: [] }], u.value = c.value[0].id, bu(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), n.value = null;
    }
    const Fe = /* @__PURE__ */ U(null), Ie = /* @__PURE__ */ U(null), be = /* @__PURE__ */ U(null), Xe = /* @__PURE__ */ U(1), Qe = /* @__PURE__ */ U(1), ln = /* @__PURE__ */ U(2), h = /* @__PURE__ */ U(2);
    function g(v) {
      const b = v.gridCol ? `${v.gridCol} / span ${v.cols}` : `span ${v.cols}`, _ = v.gridRow ? `${v.gridRow} / span ${v.rows}` : `span ${v.rows}`;
      return { gridColumn: b, gridRow: _ };
    }
    const w = Q(() => ({
      gridColumn: `${Xe.value} / span ${ln.value}`,
      gridRow: `${Qe.value} / span ${h.value}`
    }));
    function L(v, b) {
      const _ = v.target;
      if (_.closest(".edit-ctrl-btn") || _.closest(".resize-handle") || _.closest("button") || _.closest("input")) return;
      const K = _.closest("[data-card-id]") ?? _, q = K.getBoundingClientRect(), ne = "touches" in v ? v.touches[0].clientX : v.clientX, ae = "touches" in v ? v.touches[0].clientY : v.clientY, _e = ne - q.left, We = ae - q.top;
      let He = !1;
      const Ct = y.value.find((Ze) => Ze.id === b);
      if (!Ct) return;
      const St = Ct;
      function Ce(Ze) {
        const Jt = "touches" in Ze ? Ze.touches[0].clientX : Ze.clientX, hs = "touches" in Ze ? Ze.touches[0].clientY : Ze.clientY;
        if (!He) {
          const Ln = Jt - ne, ps = hs - ae;
          if (Math.abs(Ln) < 5 && Math.abs(ps) < 5) return;
          He = !0, Ie.value = b, ln.value = St.cols, h.value = St.rows;
          const Be = K.cloneNode(!0);
          Be.classList.add("drag-ghost"), Be.style.position = "fixed", Be.style.width = q.width + "px", Be.style.height = q.height + "px", Be.style.zIndex = "1000", Be.style.pointerEvents = "none", Be.style.opacity = "0.85", Be.style.transform = "scale(1.04)", Be.style.transition = "none", Be.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Be), be.value = Be, K.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (be.value && (be.value.style.left = Jt - _e + "px", be.value.style.top = hs - We + "px"), Fe.value) {
          const Ln = Fe.value.getBoundingClientRect(), ps = Jt - _e - Ln.left - Cd + q.width / 2, Be = hs - We - Ln.top - xd + q.height / 2, _l = Math.max(1, Math.round(ps / ei)), wl = Math.max(1, Math.round(Be / ei));
          Xe.value = _l, Qe.value = wl;
        }
      }
      function Le() {
        document.removeEventListener("mousemove", Ce), document.removeEventListener("mouseup", Le), document.removeEventListener("touchmove", Ce), document.removeEventListener("touchend", Le), document.body.style.userSelect = "", He && (be.value && (be.value.remove(), be.value = null), K.style.opacity = "", St && (St.gridCol = Xe.value, St.gridRow = Qe.value, c.value = [...c.value], $()), Ie.value = null);
      }
      document.addEventListener("mousemove", Ce), document.addEventListener("mouseup", Le), document.addEventListener("touchmove", Ce, { passive: !1 }), document.addEventListener("touchend", Le);
    }
    const S = /* @__PURE__ */ U(!1);
    function M(v) {
      S.value && (S.value = !1);
    }
    kn(() => document.addEventListener("click", M)), xn(() => document.removeEventListener("click", M));
    const B = /* @__PURE__ */ U(""), H = /* @__PURE__ */ U("");
    function N() {
      const v = /* @__PURE__ */ new Date();
      B.value = v.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), H.value = v.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let A;
    return kn(() => {
      N(), A = setInterval(N, 1e3);
    }), xn(() => {
      for (const [v] of l) re(v);
      clearInterval(A);
    }), (v, b) => (k(), P("div", null, [
      !o.value && !e.panelMode ? (k(), Te(fu, {
        key: 0,
        onToken: Ae
      })) : (k(), P("div", ud, [
        p("header", cd, [
          p("div", fd, [
            $e(hf, {
              token: o.value
            }, null, 8, ["token"]),
            $e(Lf, {
              token: o.value
            }, null, 8, ["token"]),
            $e(Xf, {
              token: o.value
            }, null, 8, ["token"]),
            $e(ad, {
              token: o.value
            }, null, 8, ["token"])
          ]),
          p("div", dd, [
            p("div", hd, [
              p("span", pd, z(B.value), 1),
              p("span", gd, z(H.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: Fe,
          class: "dashboard-main"
        }, [
          (k(!0), P(oe, null, Ke(y.value, (_) => {
            var K, q, ne;
            return k(), P(oe, {
              key: _.id
            }, [
              _.type === "heading" ? (k(), Te(lf, {
                key: 0,
                "data-card-id": _.id,
                style: It(g(_)),
                class: ve({ "card-dragging": Ie.value === _.id }),
                label: _.label || "Überschrift",
                cols: _.cols,
                rows: _.rows,
                onUpdateLabel: (ae) => ye(_.id, ae),
                onRemove: (ae) => De(_.id),
                onResize: (ae, _e) => Ut(_.id, ae, _e),
                onMousedown: (ae) => L(ae, _.id),
                onTouchstart: (ae) => L(ae, _.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : (k(), Te(Zc, {
                key: 1,
                "data-card-id": _.id,
                style: It(g(_)),
                class: ve({ "card-dragging": Ie.value === _.id }),
                "entity-id": _.entityId,
                token: o.value,
                cols: _.cols,
                rows: _.rows,
                state: ((K = i[_.id]) == null ? void 0 : K.state) ?? null,
                loading: ((q = i[_.id]) == null ? void 0 : q.loading) ?? !0,
                error: ((ne = i[_.id]) == null ? void 0 : ne.error) ?? null,
                onChangeEntity: (ae) => Wt(_.id, ae),
                onRemove: (ae) => De(_.id),
                onResize: (ae, _e) => Ut(_.id, ae, _e),
                onMousedown: (ae) => L(ae, _.id),
                onTouchstart: (ae) => L(ae, _.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          Ie.value ? (k(), P("div", {
            key: 0,
            class: "drop-placeholder",
            style: It(w.value)
          }, null, 4)) : ie("", !0)
        ], 512),
        p("nav", vd, [
          p("div", md, [
            (k(!0), P(oe, null, Ke(c.value, (_, K) => (k(), P("button", {
              key: _.id,
              class: ve(["page-tab", { active: u.value === _.id }]),
              onClick: (q) => F(_.id),
              onDblclick: (q) => f(_.id),
              onTouchstartPassive: (q) => Z(_.id),
              onTouchend: le,
              onTouchmove: le
            }, [
              te.value === _.id ? wt((k(), P("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: D,
                "onUpdate:modelValue": b[0] || (b[0] = (q) => I.value = q),
                class: "page-tab-input",
                onBlur: C,
                onKeydown: [
                  Se(C, ["enter"]),
                  Se(j, ["escape"])
                ],
                onClick: b[1] || (b[1] = se(() => {
                }, ["stop"]))
              }, null, 544)), [
                [$t, I.value]
              ]) : (k(), P("span", bd, z(_.name), 1))
            ], 42, yd))), 128))
          ])
        ]),
        (k(), Te(kt, { to: "body" }, [
          O.value ? (k(), P("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: b[5] || (b[5] = se((_) => O.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: b[4] || (b[4] = se(() => {
              }, ["stop"]))
            }, [
              p("div", _d, [
                b[13] || (b[13] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: b[2] || (b[2] = (_) => O.value = null)
                }, "✕")
              ]),
              p("p", wd, " „" + z(x.value) + '" mit ' + z(m.value) + " Karte" + z(m.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", $d, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: b[3] || (b[3] = (_) => O.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: R
                }, "Löschen")
              ])
            ])
          ])) : ie("", !0)
        ])),
        p("div", kd, [
          p("button", {
            class: "burger-btn",
            onClick: b[6] || (b[6] = se((_) => S.value = !S.value, ["stop"]))
          }, [...b[14] || (b[14] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          $e(Ea, { name: "burger-pop" }, {
            default: Ii(() => [
              S.value ? (k(), P("div", {
                key: 0,
                class: "burger-menu",
                onClick: b[12] || (b[12] = se(() => {
                }, ["stop"]))
              }, [
                p("button", {
                  class: "burger-item",
                  onClick: b[7] || (b[7] = (_) => {
                    W(), S.value = !1;
                  })
                }, [...b[15] || (b[15] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  At(" Karte hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: b[8] || (b[8] = (_) => {
                    G(), S.value = !1;
                  })
                }, [...b[16] || (b[16] = [
                  p("span", { class: "burger-item-icon" }, "H", -1),
                  At(" Überschrift hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: b[9] || (b[9] = (_) => {
                    E(), S.value = !1;
                  })
                }, [...b[17] || (b[17] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  At(" Neue Seite ", -1)
                ])]),
                c.value.length > 1 ? (k(), P("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: b[10] || (b[10] = (_) => {
                    T(u.value), S.value = !1;
                  })
                }, [...b[18] || (b[18] = [
                  p("span", { class: "burger-item-icon" }, "✕", -1),
                  At(" Seite löschen ", -1)
                ])])) : ie("", !0),
                e.panelMode ? ie("", !0) : (k(), P(oe, { key: 1 }, [
                  b[19] || (b[19] = p("div", { class: "burger-divider" }, null, -1)),
                  p("button", {
                    class: "burger-item burger-item-muted",
                    onClick: b[11] || (b[11] = (_) => {
                      zt(), S.value = !1;
                    })
                  }, " Abmelden ")
                ], 64))
              ])) : ie("", !0)
            ]),
            _: 1
          })
        ])
      ]))
    ]));
  }
}), Td = /* @__PURE__ */ qe(Sd, [["__scopeId", "data-v-56cad792"]]);
class Ed extends HTMLElement {
  constructor() {
    super(...arguments);
    ao(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && hu(s), !this._app && s) {
      vl(!0);
      const l = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const c = document.createElement("style");
          c.textContent = a.textContent, l.appendChild(c);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", l.appendChild(r), this._app = tu(Td, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", Ed);
