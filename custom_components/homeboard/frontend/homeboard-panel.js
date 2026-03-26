(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-7965fac9]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-7965fac9]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-7965fac9]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-7965fac9]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-7965fac9]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-7965fac9]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-7965fac9]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-7965fac9]{opacity:1}.edit-ctrl-btn[data-v-7965fac9]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-7965fac9]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-7965fac9]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-7965fac9]{width:2px;height:2px}.dot[data-v-7965fac9]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-7965fac9]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-7965fac9]{justify-content:center;padding:16px 0}.state.error[data-v-7965fac9]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-7965fac9]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-7965fac9 .8s linear infinite}@keyframes spin-7965fac9{to{transform:rotate(360deg)}}.card.narrow[data-v-7965fac9]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-7965fac9]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-7965fac9]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-7965fac9]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-7965fac9]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-7965fac9]{width:18px;height:18px;border-width:2px}.card.small[data-v-7965fac9]:after{bottom:-12px;height:18px}.card.short[data-v-7965fac9]{padding:14px 16px 12px}.card.short .label[data-v-7965fac9]{font-size:.6rem}.resize-handle[data-v-7965fac9]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7965fac9]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-7965fac9]{opacity:1}.ha-toggle-row[data-v-7965fac9]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-7965fac9]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-7965fac9]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-7965fac9]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-7965fac9]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-7965fac9]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-7a388668]{display:flex;align-items:flex-end;padding:0 2px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-7a388668]{align-items:flex-end}.heading-content[data-v-7a388668]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;gap:4px}.heading-text[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-7a388668]{font-size:1rem}.heading-line[data-v-7a388668]{border:none;height:2px;background:#d2d8e0;margin:0;width:100%;border-radius:1px}.heading-input[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-7a388668]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-7a388668]{opacity:1}.heading-edit-btn[data-v-7a388668]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-7a388668]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-7a388668]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-7a388668]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7a388668]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-7a388668]{opacity:1}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-a9eb5409]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-a9eb5409]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-a9eb5409]{display:flex;align-items:center;gap:10px}.app-name[data-v-a9eb5409]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-a9eb5409]{display:flex;align-items:center}.clock[data-v-a9eb5409]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-a9eb5409]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-a9eb5409]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-a9eb5409]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-a9eb5409] .card{width:auto;min-height:unset}.dashboard-main[data-v-a9eb5409] .heading{max-height:50px;align-self:end}.page-tabs[data-v-a9eb5409]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-a9eb5409]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-a9eb5409]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-a9eb5409]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-a9eb5409]:not(.active):hover{color:#718096}.page-tab-label[data-v-a9eb5409]{white-space:nowrap}.page-tab-input[data-v-a9eb5409]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-a9eb5409]{max-width:340px}.page-delete-text[data-v-a9eb5409]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-a9eb5409]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-a9eb5409],.page-delete-confirm[data-v-a9eb5409]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-a9eb5409]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-a9eb5409]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-a9eb5409]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-a9eb5409]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-a9eb5409]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-a9eb5409]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-a9eb5409]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-a9eb5409]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-a9eb5409]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-a9eb5409]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-a9eb5409]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-a9eb5409],.burger-pop-leave-to[data-v-a9eb5409]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-a9eb5409]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-a9eb5409]:hover{background:#0000000a}.burger-item-icon[data-v-a9eb5409]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-a9eb5409],.burger-item-danger .burger-item-icon[data-v-a9eb5409]{color:#e53e3e}.burger-item-muted[data-v-a9eb5409]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-a9eb5409]{height:1px;background:#d2d8e0;margin:4px 14px}.burger-auth-key[data-v-a9eb5409]{padding:6px 14px 10px}.burger-auth-input[data-v-a9eb5409]{width:100%;padding:6px 10px;border:none;border-radius:8px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.75rem;color:#2d3748;outline:none;box-sizing:border-box}.burger-auth-actions[data-v-a9eb5409]{display:flex;gap:6px;margin-top:6px}.burger-auth-save[data-v-a9eb5409],.burger-auth-clear[data-v-a9eb5409]{padding:4px 12px;border:none;border-radius:8px;font-size:.72rem;font-weight:600;cursor:pointer;background:#e8ecf1;color:#2d3748;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.burger-auth-save[data-v-a9eb5409]:active,.burger-auth-clear[data-v-a9eb5409]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.burger-auth-clear[data-v-a9eb5409]{color:#e53e3e}.card-dragging[data-v-a9eb5409]{opacity:.25}.drop-placeholder[data-v-a9eb5409]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Hl = Object.defineProperty;
var Bl = (e, t, n) => t in e ? Hl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var ko = (e, t, n) => Bl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function no(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const _e = {}, tn = [], ht = () => {
}, gi = () => !1, us = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), so = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, oo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jl = Object.prototype.hasOwnProperty, me = (e, t) => jl.call(e, t), Q = Array.isArray, nn = (e) => Pn(e) === "[object Map]", vi = (e) => Pn(e) === "[object Set]", So = (e) => Pn(e) === "[object Date]", ne = (e) => typeof e == "function", xe = (e) => typeof e == "string", pt = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", mi = (e) => (ve(e) || ne(e)) && ne(e.then) && ne(e.catch), yi = Object.prototype.toString, Pn = (e) => yi.call(e), Kl = (e) => Pn(e).slice(8, -1), _i = (e) => Pn(e) === "[object Object]", cs = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gn = /* @__PURE__ */ no(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), fs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Vl = /-\w/g, nt = fs(
  (e) => e.replace(Vl, (t) => t.slice(1).toUpperCase())
), Wl = /\B([A-Z])/g, Ft = fs(
  (e) => e.replace(Wl, "-$1").toLowerCase()
), bi = fs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Es = fs(
  (e) => e ? `on${bi(e)}` : ""
), dt = (e, t) => !Object.is(e, t), zn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, wi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, io = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ul = (e) => {
  const t = xe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let xo;
const ds = () => xo || (xo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Rt(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = xe(s) ? Yl(s) : Rt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (xe(e) || ve(e))
    return e;
}
const zl = /;(?![^(]*\))/g, Jl = /:([^]+)/, Gl = /\/\*[^]*?\*\//g;
function Yl(e) {
  const t = {};
  return e.replace(Gl, "").split(zl).forEach((n) => {
    if (n) {
      const s = n.split(Jl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ke(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = ke(e[n]);
      s && (t += s + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ql = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xl = /* @__PURE__ */ no(ql);
function $i(e) {
  return !!e || e === "";
}
function Ql(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = lo(e[s], t[s]);
  return n;
}
function lo(e, t) {
  if (e === t) return !0;
  let n = So(e), s = So(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = pt(e), s = pt(t), n || s)
    return e === t;
  if (n = Q(e), s = Q(t), n || s)
    return n && s ? Ql(e, t) : !1;
  if (n = ve(e), s = ve(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !lo(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const ki = (e) => !!(e && e.__v_isRef === !0), J = (e) => xe(e) ? e : e == null ? "" : Q(e) || ve(e) && (e.toString === yi || !ne(e.toString)) ? ki(e) ? J(e.value) : JSON.stringify(e, Si, 2) : String(e), Si = (e, t) => ki(t) ? Si(e, t.value) : nn(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Ms(s, i) + " =>"] = o, n),
    {}
  )
} : vi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ms(n))
} : pt(t) ? Ms(t) : ve(t) && !Q(t) && !_i(t) ? String(t) : t, Ms = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    pt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let We;
class Zl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = We, !t && We && (this.index = (We.scopes || (We.scopes = [])).push(
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
      const n = We;
      try {
        return We = this, t();
      } finally {
        We = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = We, We = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (We = this.prevScope, this.prevScope = void 0);
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
function er() {
  return We;
}
let we;
const Is = /* @__PURE__ */ new WeakSet();
class xi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, We && We.active && We.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Is.has(this) && (Is.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ti(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Co(this), Ei(this);
    const t = we, n = st;
    we = this, st = !0;
    try {
      return this.fn();
    } finally {
      Mi(this), we = t, st = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        uo(t);
      this.deps = this.depsTail = void 0, Co(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Is.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    js(this) && this.run();
  }
  get dirty() {
    return js(this);
  }
}
let Ci = 0, vn, mn;
function Ti(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mn, mn = e;
    return;
  }
  e.next = vn, vn = e;
}
function ro() {
  Ci++;
}
function ao() {
  if (--Ci > 0)
    return;
  if (mn) {
    let t = mn;
    for (mn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; vn; ) {
    let t = vn;
    for (vn = void 0; t; ) {
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
function Ei(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Mi(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), uo(s), tr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function js(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ii(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ii(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sn) || (e.globalVersion = Sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !js(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = we, s = st;
  we = e, st = !0;
  try {
    Ei(e);
    const o = e.fn(e._value);
    (t.version === 0 || dt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    we = n, st = s, Mi(e), e.flags &= -3;
  }
}
function uo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      uo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function tr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let st = !0;
const Ai = [];
function xt() {
  Ai.push(st), st = !1;
}
function Ct() {
  const e = Ai.pop();
  st = e === void 0 ? !0 : e;
}
function Co(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = we;
    we = void 0;
    try {
      t();
    } finally {
      we = n;
    }
  }
}
let Sn = 0;
class nr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class co {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!we || !st || we === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== we)
      n = this.activeLink = new nr(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, Li(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = we.depsTail, n.nextDep = void 0, we.depsTail.nextDep = n, we.depsTail = n, we.deps === n && (we.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Sn++, this.notify(t);
  }
  notify(t) {
    ro();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ao();
    }
  }
}
function Li(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Li(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Zn = /* @__PURE__ */ new WeakMap(), zt = /* @__PURE__ */ Symbol(
  ""
), Ks = /* @__PURE__ */ Symbol(
  ""
), xn = /* @__PURE__ */ Symbol(
  ""
);
function Pe(e, t, n) {
  if (st && we) {
    let s = Zn.get(e);
    s || Zn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new co()), o.map = s, o.key = n), o.track();
  }
}
function $t(e, t, n, s, o, i) {
  const l = Zn.get(e);
  if (!l) {
    Sn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (ro(), t === "clear")
    l.forEach(r);
  else {
    const a = Q(e), c = a && cs(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((h, _) => {
        (_ === "length" || _ === xn || !pt(_) && _ >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), c && r(l.get(xn)), t) {
        case "add":
          a ? c && r(l.get("length")) : (r(l.get(zt)), nn(e) && r(l.get(Ks)));
          break;
        case "delete":
          a || (r(l.get(zt)), nn(e) && r(l.get(Ks)));
          break;
        case "set":
          nn(e) && r(l.get(zt));
          break;
      }
  }
  ao();
}
function sr(e, t) {
  const n = Zn.get(e);
  return n && n.get(t);
}
function Qt(e) {
  const t = /* @__PURE__ */ he(e);
  return t === e ? t : (Pe(t, "iterate", xn), /* @__PURE__ */ Ge(e) ? t : t.map(ot));
}
function hs(e) {
  return Pe(e = /* @__PURE__ */ he(e), "iterate", xn), e;
}
function ct(e, t) {
  return /* @__PURE__ */ Tt(e) ? rn(/* @__PURE__ */ Jt(e) ? ot(t) : t) : ot(t);
}
const or = {
  __proto__: null,
  [Symbol.iterator]() {
    return As(this, Symbol.iterator, (e) => ct(this, e));
  },
  concat(...e) {
    return Qt(this).concat(
      ...e.map((t) => Q(t) ? Qt(t) : t)
    );
  },
  entries() {
    return As(this, "entries", (e) => (e[1] = ct(this, e[1]), e));
  },
  every(e, t) {
    return yt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return yt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ct(this, s)),
      arguments
    );
  },
  find(e, t) {
    return yt(
      this,
      "find",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return yt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return yt(
      this,
      "findLast",
      e,
      t,
      (n) => ct(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return yt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return yt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ls(this, "includes", e);
  },
  indexOf(...e) {
    return Ls(this, "indexOf", e);
  },
  join(e) {
    return Qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ls(this, "lastIndexOf", e);
  },
  map(e, t) {
    return yt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return cn(this, "pop");
  },
  push(...e) {
    return cn(this, "push", e);
  },
  reduce(e, ...t) {
    return To(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return To(this, "reduceRight", e, t);
  },
  shift() {
    return cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return yt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return cn(this, "splice", e);
  },
  toReversed() {
    return Qt(this).toReversed();
  },
  toSorted(e) {
    return Qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return cn(this, "unshift", e);
  },
  values() {
    return As(this, "values", (e) => ct(this, e));
  }
};
function As(e, t, n) {
  const s = hs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ge(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const ir = Array.prototype;
function yt(e, t, n, s, o, i) {
  const l = hs(e), r = l !== e && !/* @__PURE__ */ Ge(e), a = l[t];
  if (a !== ir[t]) {
    const h = a.apply(e, i);
    return r ? ot(h) : h;
  }
  let c = n;
  l !== e && (r ? c = function(h, _) {
    return n.call(this, ct(e, h), _, e);
  } : n.length > 2 && (c = function(h, _) {
    return n.call(this, h, _, e);
  }));
  const u = a.call(l, c, s);
  return r && o ? o(u) : u;
}
function To(e, t, n, s) {
  const o = hs(e), i = o !== e && !/* @__PURE__ */ Ge(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(c, u, h) {
    return r && (r = !1, c = ct(e, c)), n.call(this, c, ct(e, u), h, e);
  }) : n.length > 3 && (l = function(c, u, h) {
    return n.call(this, c, u, h, e);
  }));
  const a = o[t](l, ...s);
  return r ? ct(e, a) : a;
}
function Ls(e, t, n) {
  const s = /* @__PURE__ */ he(e);
  Pe(s, "iterate", xn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ gs(n[0]) ? (n[0] = /* @__PURE__ */ he(n[0]), s[t](...n)) : o;
}
function cn(e, t, n = []) {
  xt(), ro();
  const s = (/* @__PURE__ */ he(e))[t].apply(e, n);
  return ao(), Ct(), s;
}
const lr = /* @__PURE__ */ no("__proto__,__v_isRef,__isVue"), Oi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(pt)
);
function rr(e) {
  pt(e) || (e = String(e));
  const t = /* @__PURE__ */ he(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class Pi {
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
      return s === (o ? i ? mr : Fi : i ? Di : Ni).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = Q(t);
    if (!o) {
      let a;
      if (l && (a = or[n]))
        return a;
      if (n === "hasOwnProperty")
        return rr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Me(t) ? t : s
    );
    if ((pt(n) ? Oi.has(n) : lr(n)) || (o || Pe(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ Me(r)) {
      const a = l && cs(n) ? r : r.value;
      return o && ve(a) ? /* @__PURE__ */ Ws(a) : a;
    }
    return ve(r) ? o ? /* @__PURE__ */ Ws(r) : /* @__PURE__ */ ps(r) : r;
  }
}
class Ri extends Pi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = Q(t) && cs(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Tt(i);
      if (!/* @__PURE__ */ Ge(s) && !/* @__PURE__ */ Tt(s) && (i = /* @__PURE__ */ he(i), s = /* @__PURE__ */ he(s)), !l && /* @__PURE__ */ Me(i) && !/* @__PURE__ */ Me(s))
        return c || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : me(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Me(t) ? t : o
    );
    return t === /* @__PURE__ */ he(o) && (r ? dt(s, i) && $t(t, "set", n, s) : $t(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = me(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && $t(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!pt(n) || !Oi.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      Q(t) ? "length" : zt
    ), Reflect.ownKeys(t);
  }
}
class ar extends Pi {
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
const ur = /* @__PURE__ */ new Ri(), cr = /* @__PURE__ */ new ar(), fr = /* @__PURE__ */ new Ri(!0);
const Vs = (e) => e, jn = (e) => Reflect.getPrototypeOf(e);
function dr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ he(o), l = nn(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, c = o[e](...s), u = n ? Vs : t ? rn : ot;
    return !t && Pe(
      i,
      "iterate",
      a ? Ks : zt
    ), Ie(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: _ } = c.next();
          return _ ? { value: h, done: _ } : {
            value: r ? [u(h[0]), u(h[1])] : u(h),
            done: _
          };
        }
      }
    );
  };
}
function Kn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function hr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ he(i), r = /* @__PURE__ */ he(o);
      e || (dt(o, r) && Pe(l, "get", o), Pe(l, "get", r));
      const { has: a } = jn(l), c = t ? Vs : e ? rn : ot;
      if (a.call(l, o))
        return c(i.get(o));
      if (a.call(l, r))
        return c(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Pe(/* @__PURE__ */ he(o), "iterate", zt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ he(i), r = /* @__PURE__ */ he(o);
      return e || (dt(o, r) && Pe(l, "has", o), Pe(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ he(r), c = t ? Vs : e ? rn : ot;
      return !e && Pe(a, "iterate", zt), r.forEach((u, h) => o.call(i, c(u), c(h), l));
    }
  };
  return Ie(
    n,
    e ? {
      add: Kn("add"),
      set: Kn("set"),
      delete: Kn("delete"),
      clear: Kn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ he(this), l = jn(i), r = /* @__PURE__ */ he(o), a = !t && !/* @__PURE__ */ Ge(o) && !/* @__PURE__ */ Tt(o) ? r : o;
        return l.has.call(i, a) || dt(o, a) && l.has.call(i, o) || dt(r, a) && l.has.call(i, r) || (i.add(a), $t(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Ge(i) && !/* @__PURE__ */ Tt(i) && (i = /* @__PURE__ */ he(i));
        const l = /* @__PURE__ */ he(this), { has: r, get: a } = jn(l);
        let c = r.call(l, o);
        c || (o = /* @__PURE__ */ he(o), c = r.call(l, o));
        const u = a.call(l, o);
        return l.set(o, i), c ? dt(i, u) && $t(l, "set", o, i) : $t(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ he(this), { has: l, get: r } = jn(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ he(o), a = l.call(i, o)), r && r.call(i, o);
        const c = i.delete(o);
        return a && $t(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ he(this), i = o.size !== 0, l = o.clear();
        return i && $t(
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
    n[o] = dr(o, e, t);
  }), n;
}
function fo(e, t) {
  const n = hr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    me(n, o) && o in s ? n : s,
    o,
    i
  );
}
const pr = {
  get: /* @__PURE__ */ fo(!1, !1)
}, gr = {
  get: /* @__PURE__ */ fo(!1, !0)
}, vr = {
  get: /* @__PURE__ */ fo(!0, !1)
};
const Ni = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), mr = /* @__PURE__ */ new WeakMap();
function yr(e) {
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
function _r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : yr(Kl(e));
}
// @__NO_SIDE_EFFECTS__
function ps(e) {
  return /* @__PURE__ */ Tt(e) ? e : ho(
    e,
    !1,
    ur,
    pr,
    Ni
  );
}
// @__NO_SIDE_EFFECTS__
function br(e) {
  return ho(
    e,
    !1,
    fr,
    gr,
    Di
  );
}
// @__NO_SIDE_EFFECTS__
function Ws(e) {
  return ho(
    e,
    !0,
    cr,
    vr,
    Fi
  );
}
function ho(e, t, n, s, o) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = _r(e);
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
function Jt(e) {
  return /* @__PURE__ */ Tt(e) ? /* @__PURE__ */ Jt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Tt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ge(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function gs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function he(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ he(t) : e;
}
function wr(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && wi(e, "__v_skip", !0), e;
}
const ot = (e) => ve(e) ? /* @__PURE__ */ ps(e) : e, rn = (e) => ve(e) ? /* @__PURE__ */ Ws(e) : e;
// @__NO_SIDE_EFFECTS__
function Me(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  return $r(e, !1);
}
function $r(e, t) {
  return /* @__PURE__ */ Me(e) ? e : new kr(e, t);
}
class kr {
  constructor(t, n) {
    this.dep = new co(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ he(t), this._value = n ? t : ot(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ge(t) || /* @__PURE__ */ Tt(t);
    t = s ? t : /* @__PURE__ */ he(t), dt(t, n) && (this._rawValue = t, this._value = s ? t : ot(t), this.dep.trigger());
  }
}
function Ae(e) {
  return /* @__PURE__ */ Me(e) ? e.value : e;
}
const Sr = {
  get: (e, t, n) => t === "__v_raw" ? e : Ae(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Me(o) && !/* @__PURE__ */ Me(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Hi(e) {
  return /* @__PURE__ */ Jt(e) ? e : new Proxy(e, Sr);
}
class xr {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ he(t);
    let o = !0, i = t;
    if (!Q(t) || !cs(String(n)))
      do
        o = !/* @__PURE__ */ gs(i) || /* @__PURE__ */ Ge(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ae(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Me(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Me(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return sr(this._raw, this._key);
  }
}
class Cr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function po(e, t, n) {
  return /* @__PURE__ */ Me(e) ? e : ne(e) ? new Cr(e) : ve(e) && arguments.length > 1 ? Tr(e, t, n) : /* @__PURE__ */ W(e);
}
function Tr(e, t, n) {
  return new xr(e, t, n);
}
class Er {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new co(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return Ti(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ii(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Mr(e, t, n = !1) {
  let s, o;
  return ne(e) ? s = e : (s = e.get, o = e.set), new Er(s, o, n);
}
const Vn = {}, es = /* @__PURE__ */ new WeakMap();
let Vt;
function Ir(e, t = !1, n = Vt) {
  if (n) {
    let s = es.get(n);
    s || es.set(n, s = []), s.push(e);
  }
}
function Ar(e, t, n = _e) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, c = (O) => o ? O : /* @__PURE__ */ Ge(O) || o === !1 || o === 0 ? kt(O, 1) : kt(O);
  let u, h, _, m, N = !1, T = !1;
  if (/* @__PURE__ */ Me(e) ? (h = () => e.value, N = /* @__PURE__ */ Ge(e)) : /* @__PURE__ */ Jt(e) ? (h = () => c(e), N = !0) : Q(e) ? (T = !0, N = e.some((O) => /* @__PURE__ */ Jt(O) || /* @__PURE__ */ Ge(O)), h = () => e.map((O) => {
    if (/* @__PURE__ */ Me(O))
      return O.value;
    if (/* @__PURE__ */ Jt(O))
      return c(O);
    if (ne(O))
      return a ? a(O, 2) : O();
  })) : ne(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (_) {
      xt();
      try {
        _();
      } finally {
        Ct();
      }
    }
    const O = Vt;
    Vt = u;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Vt = O;
    }
  } : h = ht, t && o) {
    const O = h, V = o === !0 ? 1 / 0 : o;
    h = () => kt(O(), V);
  }
  const P = er(), k = () => {
    u.stop(), P && P.active && oo(P.effects, u);
  };
  if (i && t) {
    const O = t;
    t = (...V) => {
      O(...V), k();
    };
  }
  let v = T ? new Array(e.length).fill(Vn) : Vn;
  const C = (O) => {
    if (!(!(u.flags & 1) || !u.dirty && !O))
      if (t) {
        const V = u.run();
        if (o || N || (T ? V.some((ee, ae) => dt(ee, v[ae])) : dt(V, v))) {
          _ && _();
          const ee = Vt;
          Vt = u;
          try {
            const ae = [
              V,
              // pass undefined as the old value when it's changed for the first time
              v === Vn ? void 0 : T && v[0] === Vn ? [] : v,
              m
            ];
            v = V, a ? a(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Vt = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(C), u = new xi(h), u.scheduler = l ? () => l(C, !1) : C, m = (O) => Ir(O, !1, u), _ = u.onStop = () => {
    const O = es.get(u);
    if (O) {
      if (a)
        a(O, 4);
      else
        for (const V of O) V();
      es.delete(u);
    }
  }, t ? s ? C(!0) : v = u.run() : l ? l(C.bind(null, !0), !0) : u.run(), k.pause = u.pause.bind(u), k.resume = u.resume.bind(u), k.stop = k, k;
}
function kt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Me(e))
    kt(e.value, t, n);
  else if (Q(e))
    for (let s = 0; s < e.length; s++)
      kt(e[s], t, n);
  else if (vi(e) || nn(e))
    e.forEach((s) => {
      kt(s, t, n);
    });
  else if (_i(e)) {
    for (const s in e)
      kt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && kt(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    vs(o, t, n);
  }
}
function it(e, t, n, s) {
  if (ne(e)) {
    const o = Rn(e, t, n, s);
    return o && mi(o) && o.catch((i) => {
      vs(i, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(it(e[i], t, n, s));
    return o;
  }
}
function vs(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || _e;
  if (t) {
    let r = t.parent;
    const a = t.proxy, c = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, c) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      xt(), Rn(i, null, 10, [
        e,
        a,
        c
      ]), Ct();
      return;
    }
  }
  Lr(e, n, o, s, l);
}
function Lr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const He = [];
let at = -1;
const sn = [];
let Lt = null, Zt = 0;
const Bi = /* @__PURE__ */ Promise.resolve();
let ts = null;
function ms(e) {
  const t = ts || Bi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Or(e) {
  let t = at + 1, n = He.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = He[s], i = Cn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function go(e) {
  if (!(e.flags & 1)) {
    const t = Cn(e), n = He[He.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Cn(n) ? He.push(e) : He.splice(Or(t), 0, e), e.flags |= 1, ji();
  }
}
function ji() {
  ts || (ts = Bi.then(Vi));
}
function Pr(e) {
  Q(e) ? sn.push(...e) : Lt && e.id === -1 ? Lt.splice(Zt + 1, 0, e) : e.flags & 1 || (sn.push(e), e.flags |= 1), ji();
}
function Eo(e, t, n = at + 1) {
  for (; n < He.length; n++) {
    const s = He[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      He.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ki(e) {
  if (sn.length) {
    const t = [...new Set(sn)].sort(
      (n, s) => Cn(n) - Cn(s)
    );
    if (sn.length = 0, Lt) {
      Lt.push(...t);
      return;
    }
    for (Lt = t, Zt = 0; Zt < Lt.length; Zt++) {
      const n = Lt[Zt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Lt = null, Zt = 0;
  }
}
const Cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Vi(e) {
  try {
    for (at = 0; at < He.length; at++) {
      const t = He[at];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; at < He.length; at++) {
      const t = He[at];
      t && (t.flags &= -2);
    }
    at = -1, He.length = 0, Ki(), ts = null, (He.length || sn.length) && Vi();
  }
}
let Xe = null, Wi = null;
function ns(e) {
  const t = Xe;
  return Xe = e, Wi = e && e.type.__scopeId || null, t;
}
function Ui(e, t = Xe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && is(-1);
    const i = ns(t);
    let l;
    try {
      l = e(...o);
    } finally {
      ns(i), s._d && is(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function gt(e, t) {
  if (Xe === null)
    return e;
  const n = $s(Xe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = _e] = t[o];
    i && (ne(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && kt(l), s.push({
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
function Ht(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const r = o[l];
    i && (r.oldValue = i[l].value);
    let a = r.dir[s];
    a && (xt(), it(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Ct());
  }
}
function Rr(e, t) {
  if (je) {
    let n = je.provides;
    const s = je.parent && je.parent.provides;
    s === n && (n = je.provides = Object.create(s)), n[e] = t;
  }
}
function Jn(e, t, n = !1) {
  const s = Sl();
  if (s || on) {
    let o = on ? on._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(s && s.proxy) : t;
  }
}
const Nr = /* @__PURE__ */ Symbol.for("v-scx"), Dr = () => Jn(Nr);
function Ot(e, t, n) {
  return zi(e, t, n);
}
function zi(e, t, n = _e) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = Ie({}, n), a = t && s || !t && i !== "post";
  let c;
  if (An) {
    if (i === "sync") {
      const m = Dr();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = ht, m.resume = ht, m.pause = ht, m;
    }
  }
  const u = je;
  r.call = (m, N, T) => it(m, u, N, T);
  let h = !1;
  i === "post" ? r.scheduler = (m) => {
    Oe(m, u && u.suspense);
  } : i !== "sync" && (h = !0, r.scheduler = (m, N) => {
    N ? m() : go(m);
  }), r.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const _ = Ar(e, t, r);
  return An && (c ? c.push(_) : a && _()), _;
}
function Fr(e, t, n) {
  const s = this.proxy, o = xe(e) ? e.includes(".") ? Ji(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ne(t) ? i = t : (i = t.handler, n = t);
  const l = Nn(this), r = zi(o, i.bind(s), n);
  return l(), r;
}
function Ji(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Gi = /* @__PURE__ */ Symbol("_vte"), Yi = (e) => e.__isTeleport, yn = (e) => e && (e.disabled || e.disabled === ""), Mo = (e) => e && (e.defer || e.defer === ""), Io = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Ao = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Us = (e, t) => {
  const n = e && e.to;
  return xe(n) ? t ? t(n) : null : n;
}, qi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, c) {
    const {
      mc: u,
      pc: h,
      pbc: _,
      o: { insert: m, querySelector: N, createText: T, createComment: P }
    } = c, k = yn(t.props);
    let { shapeFlag: v, children: C, dynamicChildren: O } = t;
    if (e == null) {
      const V = t.el = T(""), ee = t.anchor = T("");
      m(V, n, s), m(ee, n, s);
      const ae = (R, F) => {
        v & 16 && u(
          C,
          R,
          F,
          o,
          i,
          l,
          r,
          a
        );
      }, ce = () => {
        const R = t.target = Us(t.props, N), F = zs(R, t, T, m);
        R && (l !== "svg" && Io(R) ? l = "svg" : l !== "mathml" && Ao(R) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(R), k || (ae(R, F), Gn(t, !1)));
      };
      k && (ae(n, ee), Gn(t, !0)), Mo(t.props) ? (t.el.__isMounted = !1, Oe(() => {
        ce(), delete t.el.__isMounted;
      }, i)) : ce();
    } else {
      if (Mo(t.props) && e.el.__isMounted === !1) {
        Oe(() => {
          qi.process(
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
      const V = t.anchor = e.anchor, ee = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, ce = yn(e.props), R = ce ? n : ee, F = ce ? V : ae;
      if (l === "svg" || Io(ee) ? l = "svg" : (l === "mathml" || Ao(ee)) && (l = "mathml"), O ? (_(
        e.dynamicChildren,
        O,
        R,
        o,
        i,
        l,
        r
      ), yo(e, t, !0)) : a || h(
        e,
        t,
        R,
        F,
        o,
        i,
        l,
        r,
        !1
      ), k)
        ce ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Wn(
          t,
          n,
          V,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const f = t.target = Us(
          t.props,
          N
        );
        f && Wn(
          t,
          f,
          null,
          c,
          0
        );
      } else ce && Wn(
        t,
        ee,
        ae,
        c,
        1
      );
      Gn(t, k);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: r,
      anchor: a,
      targetStart: c,
      targetAnchor: u,
      target: h,
      props: _
    } = e;
    if (h && (o(c), o(u)), i && o(a), l & 16) {
      const m = i || !yn(_);
      for (let N = 0; N < r.length; N++) {
        const T = r[N];
        s(
          T,
          t,
          n,
          m,
          !!T.dynamicChildren
        );
      }
    }
  },
  move: Wn,
  hydrate: Hr
};
function Wn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: c, props: u } = e, h = i === 2;
  if (h && s(l, t, n), (!h || yn(u)) && a & 16)
    for (let _ = 0; _ < c.length; _++)
      o(
        c[_],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function Hr(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: c, createText: u }
}, h) {
  function _(P, k) {
    let v = k;
    for (; v; ) {
      if (v && v.nodeType === 8) {
        if (v.data === "teleport start anchor")
          t.targetStart = v;
        else if (v.data === "teleport anchor") {
          t.targetAnchor = v, P._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      v = l(v);
    }
  }
  function m(P, k) {
    k.anchor = h(
      l(P),
      k,
      r(P),
      n,
      s,
      o,
      i
    );
  }
  const N = t.target = Us(
    t.props,
    a
  ), T = yn(t.props);
  if (N) {
    const P = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (T ? (m(e, t), _(N, P), t.targetAnchor || zs(
      N,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === N ? e : null
    )) : (t.anchor = l(e), _(N, P), t.targetAnchor || zs(N, t, u, c), h(
      P && l(P),
      t,
      N,
      n,
      s,
      o,
      i
    ))), Gn(t, T);
  } else T && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Et = qi;
function Gn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function zs(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[Gi] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const ut = /* @__PURE__ */ Symbol("_leaveCb"), fn = /* @__PURE__ */ Symbol("_enterCb");
function Br() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return En(() => {
    e.isMounted = !0;
  }), ol(() => {
    e.isUnmounting = !0;
  }), e;
}
const qe = [Function, Array], Xi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: qe,
  onEnter: qe,
  onAfterEnter: qe,
  onEnterCancelled: qe,
  // leave
  onBeforeLeave: qe,
  onLeave: qe,
  onAfterLeave: qe,
  onLeaveCancelled: qe,
  // appear
  onBeforeAppear: qe,
  onAppear: qe,
  onAfterAppear: qe,
  onAppearCancelled: qe
}, Qi = (e) => {
  const t = e.subTree;
  return t.component ? Qi(t.component) : t;
}, jr = {
  name: "BaseTransition",
  props: Xi,
  setup(e, { slots: t }) {
    const n = Sl(), s = Br();
    return () => {
      const o = t.default && tl(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Zi(o), l = /* @__PURE__ */ he(e), { mode: r } = l;
      if (s.isLeaving)
        return Os(i);
      const a = Lo(i);
      if (!a)
        return Os(i);
      let c = Js(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      a.type !== Be && Tn(a, c);
      let u = n.subTree && Lo(n.subTree);
      if (u && u.type !== Be && !Wt(u, a) && Qi(n).type !== Be) {
        let h = Js(
          u,
          l,
          s,
          n
        );
        if (Tn(u, h), r === "out-in" && a.type !== Be)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Os(i);
        r === "in-out" && a.type !== Be ? h.delayLeave = (_, m, N) => {
          const T = el(
            s,
            u
          );
          T[String(u.key)] = u, _[ut] = () => {
            m(), _[ut] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            N(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Zi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Be) {
        t = n;
        break;
      }
  }
  return t;
}
const Kr = jr;
function el(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Js(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: _,
    onLeave: m,
    onAfterLeave: N,
    onLeaveCancelled: T,
    onBeforeAppear: P,
    onAppear: k,
    onAfterAppear: v,
    onAppearCancelled: C
  } = t, O = String(e.key), V = el(n, e), ee = (R, F) => {
    R && it(
      R,
      s,
      9,
      F
    );
  }, ae = (R, F) => {
    const f = F[1];
    ee(R, F), Q(R) ? R.every((x) => x.length <= 1) && f() : R.length <= 1 && f();
  }, ce = {
    mode: l,
    persisted: r,
    beforeEnter(R) {
      let F = a;
      if (!n.isMounted)
        if (i)
          F = P || a;
        else
          return;
      R[ut] && R[ut](
        !0
        /* cancelled */
      );
      const f = V[O];
      f && Wt(e, f) && f.el[ut] && f.el[ut](), ee(F, [R]);
    },
    enter(R) {
      if (V[O] === e) return;
      let F = c, f = u, x = h;
      if (!n.isMounted)
        if (i)
          F = k || c, f = v || u, x = C || h;
        else
          return;
      let j = !1;
      R[fn] = (ue) => {
        j || (j = !0, ue ? ee(x, [R]) : ee(f, [R]), ce.delayedLeave && ce.delayedLeave(), R[fn] = void 0);
      };
      const Y = R[fn].bind(null, !1);
      F ? ae(F, [R, Y]) : Y();
    },
    leave(R, F) {
      const f = String(e.key);
      if (R[fn] && R[fn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      ee(_, [R]);
      let x = !1;
      R[ut] = (Y) => {
        x || (x = !0, F(), Y ? ee(T, [R]) : ee(N, [R]), R[ut] = void 0, V[f] === e && delete V[f]);
      };
      const j = R[ut].bind(null, !1);
      V[f] = e, m ? ae(m, [R, j]) : j();
    },
    clone(R) {
      const F = Js(
        R,
        t,
        n,
        s,
        o
      );
      return o && o(F), F;
    }
  };
  return ce;
}
function Os(e) {
  if (ys(e))
    return e = Dt(e), e.children = null, e;
}
function Lo(e) {
  if (!ys(e))
    return Yi(e.type) && e.children ? Zi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && ne(n.default))
      return n.default();
  }
}
function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function tl(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === ie ? (l.patchFlag & 128 && o++, s = s.concat(
      tl(l.children, t, r)
    )) : (t || l.type !== Be) && s.push(r != null ? Dt(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Qe(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function nl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Oo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ss = /* @__PURE__ */ new WeakMap();
function _n(e, t, n, s, o = !1) {
  if (Q(e)) {
    e.forEach(
      (T, P) => _n(
        T,
        t && (Q(t) ? t[P] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (bn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && _n(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? $s(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, c = t && t.r, u = r.refs === _e ? r.refs = {} : r.refs, h = r.setupState, _ = /* @__PURE__ */ he(h), m = h === _e ? gi : (T) => Oo(u, T) ? !1 : me(_, T), N = (T, P) => !(P && Oo(u, P));
  if (c != null && c !== a) {
    if (Po(t), xe(c))
      u[c] = null, m(c) && (h[c] = null);
    else if (/* @__PURE__ */ Me(c)) {
      const T = t;
      N(c, T.k) && (c.value = null), T.k && (u[T.k] = null);
    }
  }
  if (ne(a))
    Rn(a, r, 12, [l, u]);
  else {
    const T = xe(a), P = /* @__PURE__ */ Me(a);
    if (T || P) {
      const k = () => {
        if (e.f) {
          const v = T ? m(a) ? h[a] : u[a] : N() || !e.k ? a.value : u[e.k];
          if (o)
            Q(v) && oo(v, i);
          else if (Q(v))
            v.includes(i) || v.push(i);
          else if (T)
            u[a] = [i], m(a) && (h[a] = u[a]);
          else {
            const C = [i];
            N(a, e.k) && (a.value = C), e.k && (u[e.k] = C);
          }
        } else T ? (u[a] = l, m(a) && (h[a] = l)) : P && (N(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const v = () => {
          k(), ss.delete(e);
        };
        v.id = -1, ss.set(e, v), Oe(v, n);
      } else
        Po(e), k();
    }
  }
}
function Po(e) {
  const t = ss.get(e);
  t && (t.flags |= 8, ss.delete(e));
}
ds().requestIdleCallback;
ds().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, ys = (e) => e.type.__isKeepAlive;
function Vr(e, t) {
  sl(e, "a", t);
}
function Wr(e, t) {
  sl(e, "da", t);
}
function sl(e, t, n = je) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (_s(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ys(o.parent.vnode) && Ur(s, t, n, o), o = o.parent;
  }
}
function Ur(e, t, n, s) {
  const o = _s(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Mn(() => {
    oo(s[t], o);
  }, n);
}
function _s(e, t, n = je, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      xt();
      const r = Nn(n), a = it(t, n, e, l);
      return r(), Ct(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Mt = (e) => (t, n = je) => {
  (!An || e === "sp") && _s(e, (...s) => t(...s), n);
}, zr = Mt("bm"), En = Mt("m"), Jr = Mt(
  "bu"
), Gr = Mt("u"), ol = Mt(
  "bum"
), Mn = Mt("um"), Yr = Mt(
  "sp"
), qr = Mt("rtg"), Xr = Mt("rtc");
function Qr(e, t = je) {
  _s("ec", e, t);
}
const Zr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ue(e, t, n, s) {
  let o;
  const i = n, l = Q(e);
  if (l || xe(e)) {
    const r = l && /* @__PURE__ */ Jt(e);
    let a = !1, c = !1;
    r && (a = !/* @__PURE__ */ Ge(e), c = /* @__PURE__ */ Tt(e), e = hs(e)), o = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      o[u] = t(
        a ? c ? rn(ot(e[u])) : ot(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i);
  } else if (ve(e))
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
const Gs = (e) => e ? xl(e) ? $s(e) : Gs(e.parent) : null, wn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ie(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Gs(e.parent),
    $root: (e) => Gs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ll(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      go(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ms.bind(e.proxy)),
    $watch: (e) => Fr.bind(e)
  })
), Ps = (e, t) => e !== _e && !e.__isScriptSetup && me(e, t), ea = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const _ = l[t];
      if (_ !== void 0)
        switch (_) {
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
        if (Ps(s, t))
          return l[t] = 1, s[t];
        if (o !== _e && me(o, t))
          return l[t] = 2, o[t];
        if (me(i, t))
          return l[t] = 3, i[t];
        if (n !== _e && me(n, t))
          return l[t] = 4, n[t];
        Ys && (l[t] = 0);
      }
    }
    const c = wn[t];
    let u, h;
    if (c)
      return t === "$attrs" && Pe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== _e && me(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, me(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Ps(o, t) ? (o[t] = n, !0) : s !== _e && me(s, t) ? (s[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== _e && r[0] !== "$" && me(e, r) || Ps(t, r) || me(i, r) || me(s, r) || me(wn, r) || me(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Ro(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Ys = !0;
function ta(e) {
  const t = ll(e), n = e.proxy, s = e.ctx;
  Ys = !1, t.beforeCreate && No(t.beforeCreate, e, "bc");
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
    beforeMount: h,
    mounted: _,
    beforeUpdate: m,
    updated: N,
    activated: T,
    deactivated: P,
    beforeDestroy: k,
    beforeUnmount: v,
    destroyed: C,
    unmounted: O,
    render: V,
    renderTracked: ee,
    renderTriggered: ae,
    errorCaptured: ce,
    serverPrefetch: R,
    // public API
    expose: F,
    inheritAttrs: f,
    // assets
    components: x,
    directives: j,
    filters: Y
  } = t;
  if (c && na(c, s, null), l)
    for (const pe in l) {
      const U = l[pe];
      ne(U) && (s[pe] = U.bind(n));
    }
  if (o) {
    const pe = o.call(n, n);
    ve(pe) && (e.data = /* @__PURE__ */ ps(pe));
  }
  if (Ys = !0, i)
    for (const pe in i) {
      const U = i[pe], G = ne(U) ? U.bind(n, n) : ne(U.get) ? U.get.bind(n, n) : ht, be = !ne(U) && ne(U.set) ? U.set.bind(n) : ht, Re = X({
        get: G,
        set: be
      });
      Object.defineProperty(s, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ne) => Re.value = Ne
      });
    }
  if (r)
    for (const pe in r)
      il(r[pe], s, n, pe);
  if (a) {
    const pe = ne(a) ? a.call(n) : a;
    Reflect.ownKeys(pe).forEach((U) => {
      Rr(U, pe[U]);
    });
  }
  u && No(u, e, "c");
  function fe(pe, U) {
    Q(U) ? U.forEach((G) => pe(G.bind(n))) : U && pe(U.bind(n));
  }
  if (fe(zr, h), fe(En, _), fe(Jr, m), fe(Gr, N), fe(Vr, T), fe(Wr, P), fe(Qr, ce), fe(Xr, ee), fe(qr, ae), fe(ol, v), fe(Mn, O), fe(Yr, R), Q(F))
    if (F.length) {
      const pe = e.exposed || (e.exposed = {});
      F.forEach((U) => {
        Object.defineProperty(pe, U, {
          get: () => n[U],
          set: (G) => n[U] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === ht && (e.render = V), f != null && (e.inheritAttrs = f), x && (e.components = x), j && (e.directives = j), R && nl(e);
}
function na(e, t, n = ht) {
  Q(e) && (e = qs(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ve(o) ? "default" in o ? i = Jn(
      o.from || s,
      o.default,
      !0
    ) : i = Jn(o.from || s) : i = Jn(o), /* @__PURE__ */ Me(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function No(e, t, n) {
  it(
    Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function il(e, t, n, s) {
  let o = s.includes(".") ? Ji(n, s) : () => n[s];
  if (xe(e)) {
    const i = t[e];
    ne(i) && Ot(o, i);
  } else if (ne(e))
    Ot(o, e.bind(n));
  else if (ve(e))
    if (Q(e))
      e.forEach((i) => il(i, t, n, s));
    else {
      const i = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(i) && Ot(o, i, e);
    }
}
function ll(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => os(a, c, l, !0)
  ), os(a, t, l)), ve(t) && i.set(t, a), a;
}
function os(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && os(e, i, n, !0), o && o.forEach(
    (l) => os(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = sa[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const sa = {
  data: Do,
  props: Fo,
  emits: Fo,
  // objects
  methods: hn,
  computed: hn,
  // lifecycle
  beforeCreate: Fe,
  created: Fe,
  beforeMount: Fe,
  mounted: Fe,
  beforeUpdate: Fe,
  updated: Fe,
  beforeDestroy: Fe,
  beforeUnmount: Fe,
  destroyed: Fe,
  unmounted: Fe,
  activated: Fe,
  deactivated: Fe,
  errorCaptured: Fe,
  serverPrefetch: Fe,
  // assets
  components: hn,
  directives: hn,
  // watch
  watch: ia,
  // provide / inject
  provide: Do,
  inject: oa
};
function Do(e, t) {
  return t ? e ? function() {
    return Ie(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function oa(e, t) {
  return hn(qs(e), qs(t));
}
function qs(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Fe(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function hn(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Fo(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    Ro(e),
    Ro(t ?? {})
  ) : t;
}
function ia(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Fe(e[s], t[s]);
  return n;
}
function rl() {
  return {
    app: null,
    config: {
      isNativeTag: gi,
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
let la = 0;
function ra(e, t) {
  return function(s, o = null) {
    ne(s) || (s = Ie({}, s)), o != null && !ve(o) && (o = null);
    const i = rl(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const c = i.app = {
      _uid: la++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Ha,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return l.has(u) || (u && ne(u.install) ? (l.add(u), u.install(c, ...h)) : ne(u) && (l.add(u), u(c, ...h))), c;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), c;
      },
      component(u, h) {
        return h ? (i.components[u] = h, c) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, c) : i.directives[u];
      },
      mount(u, h, _) {
        if (!a) {
          const m = c._ceVNode || Ee(s, o);
          return m.appContext = i, _ === !0 ? _ = "svg" : _ === !1 && (_ = void 0), e(m, u, _), a = !0, c._container = u, u.__vue_app__ = c, $s(m.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (it(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, c;
      },
      runWithContext(u) {
        const h = on;
        on = c;
        try {
          return u();
        } finally {
          on = h;
        }
      }
    };
    return c;
  };
}
let on = null;
const aa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${nt(t)}Modifiers`] || e[`${Ft(t)}Modifiers`];
function ua(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || _e;
  let o = n;
  const i = t.startsWith("update:"), l = i && aa(s, t.slice(7));
  l && (l.trim && (o = n.map((u) => xe(u) ? u.trim() : u)), l.number && (o = n.map(io)));
  let r, a = s[r = Es(t)] || // also try camelCase event handler (#2249)
  s[r = Es(nt(t))];
  !a && i && (a = s[r = Es(Ft(t))]), a && it(
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
    e.emitted[r] = !0, it(
      c,
      e,
      6,
      o
    );
  }
}
const ca = /* @__PURE__ */ new WeakMap();
function al(e, t, n = !1) {
  const s = n ? ca : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!ne(e)) {
    const a = (c) => {
      const u = al(c, t, !0);
      u && (r = !0, Ie(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (ve(e) && s.set(e, null), null) : (Q(i) ? i.forEach((a) => l[a] = null) : Ie(l, i), ve(e) && s.set(e, l), l);
}
function bs(e, t) {
  return !e || !us(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Ft(t)) || me(e, t));
}
function Ho(e) {
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
    props: h,
    data: _,
    setupState: m,
    ctx: N,
    inheritAttrs: T
  } = e, P = ns(e);
  let k, v;
  try {
    if (n.shapeFlag & 4) {
      const O = o || s, V = O;
      k = ft(
        c.call(
          V,
          O,
          u,
          h,
          m,
          _,
          N
        )
      ), v = r;
    } else {
      const O = t;
      k = ft(
        O.length > 1 ? O(
          h,
          { attrs: r, slots: l, emit: a }
        ) : O(
          h,
          null
        )
      ), v = t.props ? r : fa(r);
    }
  } catch (O) {
    $n.length = 0, vs(O, e, 1), k = Ee(Be);
  }
  let C = k;
  if (v && T !== !1) {
    const O = Object.keys(v), { shapeFlag: V } = C;
    O.length && V & 7 && (i && O.some(so) && (v = da(
      v,
      i
    )), C = Dt(C, v, !1, !0));
  }
  return n.dirs && (C = Dt(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Tn(C, n.transition), k = C, ns(P), k;
}
const fa = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || us(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, da = (e, t) => {
  const n = {};
  for (const s in e)
    (!so(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ha(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Bo(s, l, c) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const _ = u[h];
        if (ul(l, s, _) && !bs(c, _))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? Bo(s, l, c) : !0 : !!l;
  return !1;
}
function Bo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (ul(t, e, i) && !bs(n, i))
      return !0;
  }
  return !1;
}
function ul(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ve(s) && ve(o) ? !lo(s, o) : s !== o;
}
function pa({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const cl = {}, fl = () => Object.create(cl), dl = (e) => Object.getPrototypeOf(e) === cl;
function ga(e, t, n, s = !1) {
  const o = {}, i = fl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), hl(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ br(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function va(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ he(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let _ = u[h];
        if (bs(e.emitsOptions, _))
          continue;
        const m = t[_];
        if (a)
          if (me(i, _))
            m !== i[_] && (i[_] = m, c = !0);
          else {
            const N = nt(_);
            o[N] = Xs(
              a,
              r,
              N,
              m,
              e,
              !1
            );
          }
        else
          m !== i[_] && (i[_] = m, c = !0);
      }
    }
  } else {
    hl(e, t, o, i) && (c = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !me(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Ft(h)) === h || !me(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[h] = Xs(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== r)
      for (const h in i)
        (!t || !me(t, h)) && (delete i[h], c = !0);
  }
  c && $t(e.attrs, "set", "");
}
function hl(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (gn(a))
        continue;
      const c = t[a];
      let u;
      o && me(o, u = nt(a)) ? !i || !i.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : bs(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ he(n), c = r || _e;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = Xs(
        o,
        a,
        h,
        c[h],
        e,
        !me(c, h)
      );
    }
  }
  return l;
}
function Xs(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = me(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && ne(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const u = Nn(o);
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
    ] && (s === "" || s === Ft(n)) && (s = !0));
  }
  return s;
}
const ma = /* @__PURE__ */ new WeakMap();
function pl(e, t, n = !1) {
  const s = n ? ma : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!ne(e)) {
    const u = (h) => {
      a = !0;
      const [_, m] = pl(h, t, !0);
      Ie(l, _), m && r.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return ve(e) && s.set(e, tn), tn;
  if (Q(i))
    for (let u = 0; u < i.length; u++) {
      const h = nt(i[u]);
      jo(h) && (l[h] = _e);
    }
  else if (i)
    for (const u in i) {
      const h = nt(u);
      if (jo(h)) {
        const _ = i[u], m = l[h] = Q(_) || ne(_) ? { type: _ } : Ie({}, _), N = m.type;
        let T = !1, P = !0;
        if (Q(N))
          for (let k = 0; k < N.length; ++k) {
            const v = N[k], C = ne(v) && v.name;
            if (C === "Boolean") {
              T = !0;
              break;
            } else C === "String" && (P = !1);
          }
        else
          T = ne(N) && N.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = T, m[
          1
          /* shouldCastTrue */
        ] = P, (T || me(m, "default")) && r.push(h);
      }
    }
  const c = [l, r];
  return ve(e) && s.set(e, c), c;
}
function jo(e) {
  return e[0] !== "$" && !gn(e);
}
const vo = (e) => e === "_" || e === "_ctx" || e === "$stable", mo = (e) => Q(e) ? e.map(ft) : [ft(e)], ya = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ui((...o) => mo(t(...o)), n);
  return s._c = !1, s;
}, gl = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (vo(o)) continue;
    const i = e[o];
    if (ne(i))
      t[o] = ya(o, i, s);
    else if (i != null) {
      const l = mo(i);
      t[o] = () => l;
    }
  }
}, vl = (e, t) => {
  const n = mo(t);
  e.slots.default = () => n;
}, ml = (e, t, n) => {
  for (const s in t)
    (n || !vo(s)) && (e[s] = t[s]);
}, _a = (e, t, n) => {
  const s = e.slots = fl();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (ml(s, t, n), n && wi(s, "_", o, !0)) : gl(t, s);
  } else t && vl(e, t);
}, ba = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = _e;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : ml(o, t, n) : (i = !t.$stable, gl(t, o)), l = t;
  } else t && (vl(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !vo(r) && l[r] == null && delete o[r];
}, Oe = xa;
function wa(e) {
  return $a(e);
}
function $a(e, t) {
  const n = ds();
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
    parentNode: h,
    nextSibling: _,
    setScopeId: m = ht,
    insertStaticContent: N
  } = e, T = (d, g, b, L = null, E = null, M = null, B = void 0, H = null, D = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !Wt(d, g) && (L = et(d), Ne(d, E, M, !0), d = null), g.patchFlag === -2 && (D = !1, g.dynamicChildren = null);
    const { type: I, ref: z, shapeFlag: K } = g;
    switch (I) {
      case ws:
        P(d, g, b, L);
        break;
      case Be:
        k(d, g, b, L);
        break;
      case Yn:
        d == null && v(g, b, L, B);
        break;
      case ie:
        x(
          d,
          g,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        );
        break;
      default:
        K & 1 ? V(
          d,
          g,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        ) : K & 6 ? j(
          d,
          g,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        ) : (K & 64 || K & 128) && I.process(
          d,
          g,
          b,
          L,
          E,
          M,
          B,
          H,
          D,
          mt
        );
    }
    z != null && E ? _n(z, d && d.ref, M, g || d, !g) : z == null && d && d.ref != null && _n(d.ref, null, M, d, !0);
  }, P = (d, g, b, L) => {
    if (d == null)
      s(
        g.el = r(g.children),
        b,
        L
      );
    else {
      const E = g.el = d.el;
      g.children !== d.children && c(E, g.children);
    }
  }, k = (d, g, b, L) => {
    d == null ? s(
      g.el = a(g.children || ""),
      b,
      L
    ) : g.el = d.el;
  }, v = (d, g, b, L) => {
    [d.el, d.anchor] = N(
      d.children,
      g,
      b,
      L,
      d.el,
      d.anchor
    );
  }, C = ({ el: d, anchor: g }, b, L) => {
    let E;
    for (; d && d !== g; )
      E = _(d), s(d, b, L), d = E;
    s(g, b, L);
  }, O = ({ el: d, anchor: g }) => {
    let b;
    for (; d && d !== g; )
      b = _(d), o(d), d = b;
    o(g);
  }, V = (d, g, b, L, E, M, B, H, D) => {
    if (g.type === "svg" ? B = "svg" : g.type === "math" && (B = "mathml"), d == null)
      ee(
        g,
        b,
        L,
        E,
        M,
        B,
        H,
        D
      );
    else {
      const I = d.el && d.el._isVueCE ? d.el : null;
      try {
        I && I._beginPatch(), R(
          d,
          g,
          E,
          M,
          B,
          H,
          D
        );
      } finally {
        I && I._endPatch();
      }
    }
  }, ee = (d, g, b, L, E, M, B, H) => {
    let D, I;
    const { props: z, shapeFlag: K, transition: q, dirs: Z } = d;
    if (D = d.el = l(
      d.type,
      M,
      z && z.is,
      z
    ), K & 8 ? u(D, d.children) : K & 16 && ce(
      d.children,
      D,
      null,
      L,
      E,
      Rs(d, M),
      B,
      H
    ), Z && Ht(d, null, L, "created"), ae(D, d, d.scopeId, B, L), z) {
      for (const ye in z)
        ye !== "value" && !gn(ye) && i(D, ye, null, z[ye], M, L);
      "value" in z && i(D, "value", null, z.value, M), (I = z.onVnodeBeforeMount) && rt(I, L, d);
    }
    Z && Ht(d, null, L, "beforeMount");
    const le = ka(E, q);
    le && q.beforeEnter(D), s(D, g, b), ((I = z && z.onVnodeMounted) || le || Z) && Oe(() => {
      I && rt(I, L, d), le && q.enter(D), Z && Ht(d, null, L, "mounted");
    }, E);
  }, ae = (d, g, b, L, E) => {
    if (b && m(d, b), L)
      for (let M = 0; M < L.length; M++)
        m(d, L[M]);
    if (E) {
      let M = E.subTree;
      if (g === M || bl(M.type) && (M.ssContent === g || M.ssFallback === g)) {
        const B = E.vnode;
        ae(
          d,
          B,
          B.scopeId,
          B.slotScopeIds,
          E.parent
        );
      }
    }
  }, ce = (d, g, b, L, E, M, B, H, D = 0) => {
    for (let I = D; I < d.length; I++) {
      const z = d[I] = H ? wt(d[I]) : ft(d[I]);
      T(
        null,
        z,
        g,
        b,
        L,
        E,
        M,
        B,
        H
      );
    }
  }, R = (d, g, b, L, E, M, B) => {
    const H = g.el = d.el;
    let { patchFlag: D, dynamicChildren: I, dirs: z } = g;
    D |= d.patchFlag & 16;
    const K = d.props || _e, q = g.props || _e;
    let Z;
    if (b && Bt(b, !1), (Z = q.onVnodeBeforeUpdate) && rt(Z, b, g, d), z && Ht(g, d, b, "beforeUpdate"), b && Bt(b, !0), (K.innerHTML && q.innerHTML == null || K.textContent && q.textContent == null) && u(H, ""), I ? F(
      d.dynamicChildren,
      I,
      H,
      b,
      L,
      Rs(g, E),
      M
    ) : B || U(
      d,
      g,
      H,
      null,
      b,
      L,
      Rs(g, E),
      M,
      !1
    ), D > 0) {
      if (D & 16)
        f(H, K, q, b, E);
      else if (D & 2 && K.class !== q.class && i(H, "class", null, q.class, E), D & 4 && i(H, "style", K.style, q.style, E), D & 8) {
        const le = g.dynamicProps;
        for (let ye = 0; ye < le.length; ye++) {
          const de = le[ye], y = K[de], w = q[de];
          (w !== y || de === "value") && i(H, de, y, w, E, b);
        }
      }
      D & 1 && d.children !== g.children && u(H, g.children);
    } else !B && I == null && f(H, K, q, b, E);
    ((Z = q.onVnodeUpdated) || z) && Oe(() => {
      Z && rt(Z, b, g, d), z && Ht(g, d, b, "updated");
    }, L);
  }, F = (d, g, b, L, E, M, B) => {
    for (let H = 0; H < g.length; H++) {
      const D = d[H], I = g[H], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(D, I) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? h(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      T(
        D,
        I,
        z,
        null,
        L,
        E,
        M,
        B,
        !0
      );
    }
  }, f = (d, g, b, L, E) => {
    if (g !== b) {
      if (g !== _e)
        for (const M in g)
          !gn(M) && !(M in b) && i(
            d,
            M,
            g[M],
            null,
            E,
            L
          );
      for (const M in b) {
        if (gn(M)) continue;
        const B = b[M], H = g[M];
        B !== H && M !== "value" && i(d, M, H, B, E, L);
      }
      "value" in b && i(d, "value", g.value, b.value, E);
    }
  }, x = (d, g, b, L, E, M, B, H, D) => {
    const I = g.el = d ? d.el : r(""), z = g.anchor = d ? d.anchor : r("");
    let { patchFlag: K, dynamicChildren: q, slotScopeIds: Z } = g;
    Z && (H = H ? H.concat(Z) : Z), d == null ? (s(I, b, L), s(z, b, L), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      b,
      z,
      E,
      M,
      B,
      H,
      D
    )) : K > 0 && K & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === q.length ? (F(
      d.dynamicChildren,
      q,
      b,
      E,
      M,
      B,
      H
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || E && g === E.subTree) && yo(
      d,
      g,
      !0
      /* shallow */
    )) : U(
      d,
      g,
      b,
      z,
      E,
      M,
      B,
      H,
      D
    );
  }, j = (d, g, b, L, E, M, B, H, D) => {
    g.slotScopeIds = H, d == null ? g.shapeFlag & 512 ? E.ctx.activate(
      g,
      b,
      L,
      B,
      D
    ) : Y(
      g,
      b,
      L,
      E,
      M,
      B,
      D
    ) : ue(d, g, D);
  }, Y = (d, g, b, L, E, M, B) => {
    const H = d.component = La(
      d,
      L,
      E
    );
    if (ys(d) && (H.ctx.renderer = mt), Oa(H, !1, B), H.asyncDep) {
      if (E && E.registerDep(H, fe, B), !d.el) {
        const D = H.subTree = Ee(Be);
        k(null, D, g, b), d.placeholder = D.el;
      }
    } else
      fe(
        H,
        d,
        g,
        b,
        E,
        M,
        B
      );
  }, ue = (d, g, b) => {
    const L = g.component = d.component;
    if (ha(d, g, b))
      if (L.asyncDep && !L.asyncResolved) {
        pe(L, g, b);
        return;
      } else
        L.next = g, L.update();
    else
      g.el = d.el, L.vnode = g;
  }, fe = (d, g, b, L, E, M, B) => {
    const H = () => {
      if (d.isMounted) {
        let { next: K, bu: q, u: Z, parent: le, vnode: ye } = d;
        {
          const te = yl(d);
          if (te) {
            K && (K.el = ye.el, pe(d, K, B)), te.asyncDep.then(() => {
              Oe(() => {
                d.isUnmounted || I();
              }, E);
            });
            return;
          }
        }
        let de = K, y;
        Bt(d, !1), K ? (K.el = ye.el, pe(d, K, B)) : K = ye, q && zn(q), (y = K.props && K.props.onVnodeBeforeUpdate) && rt(y, le, K, ye), Bt(d, !0);
        const w = Ho(d), S = d.subTree;
        d.subTree = w, T(
          S,
          w,
          // parent may have changed if it's in a teleport
          h(S.el),
          // anchor may have changed if it's in a fragment
          et(S),
          d,
          E,
          M
        ), K.el = w.el, de === null && pa(d, w.el), Z && Oe(Z, E), (y = K.props && K.props.onVnodeUpdated) && Oe(
          () => rt(y, le, K, ye),
          E
        );
      } else {
        let K;
        const { el: q, props: Z } = g, { bm: le, m: ye, parent: de, root: y, type: w } = d, S = bn(g);
        Bt(d, !1), le && zn(le), !S && (K = Z && Z.onVnodeBeforeMount) && rt(K, de, g), Bt(d, !0);
        {
          y.ce && y.ce._hasShadowRoot() && y.ce._injectChildStyle(
            w,
            d.parent ? d.parent.type : void 0
          );
          const te = d.subTree = Ho(d);
          T(
            null,
            te,
            b,
            L,
            d,
            E,
            M
          ), g.el = te.el;
        }
        if (ye && Oe(ye, E), !S && (K = Z && Z.onVnodeMounted)) {
          const te = g;
          Oe(
            () => rt(K, de, te),
            E
          );
        }
        (g.shapeFlag & 256 || de && bn(de.vnode) && de.vnode.shapeFlag & 256) && d.a && Oe(d.a, E), d.isMounted = !0, g = b = L = null;
      }
    };
    d.scope.on();
    const D = d.effect = new xi(H);
    d.scope.off();
    const I = d.update = D.run.bind(D), z = d.job = D.runIfDirty.bind(D);
    z.i = d, z.id = d.uid, D.scheduler = () => go(z), Bt(d, !0), I();
  }, pe = (d, g, b) => {
    g.component = d;
    const L = d.vnode.props;
    d.vnode = g, d.next = null, va(d, g.props, L, b), ba(d, g.children, b), xt(), Eo(d), Ct();
  }, U = (d, g, b, L, E, M, B, H, D = !1) => {
    const I = d && d.children, z = d ? d.shapeFlag : 0, K = g.children, { patchFlag: q, shapeFlag: Z } = g;
    if (q > 0) {
      if (q & 128) {
        be(
          I,
          K,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        );
        return;
      } else if (q & 256) {
        G(
          I,
          K,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        );
        return;
      }
    }
    Z & 8 ? (z & 16 && ze(I, E, M), K !== I && u(b, K)) : z & 16 ? Z & 16 ? be(
      I,
      K,
      b,
      L,
      E,
      M,
      B,
      H,
      D
    ) : ze(I, E, M, !0) : (z & 8 && u(b, ""), Z & 16 && ce(
      K,
      b,
      L,
      E,
      M,
      B,
      H,
      D
    ));
  }, G = (d, g, b, L, E, M, B, H, D) => {
    d = d || tn, g = g || tn;
    const I = d.length, z = g.length, K = Math.min(I, z);
    let q;
    for (q = 0; q < K; q++) {
      const Z = g[q] = D ? wt(g[q]) : ft(g[q]);
      T(
        d[q],
        Z,
        b,
        null,
        E,
        M,
        B,
        H,
        D
      );
    }
    I > z ? ze(
      d,
      E,
      M,
      !0,
      !1,
      K
    ) : ce(
      g,
      b,
      L,
      E,
      M,
      B,
      H,
      D,
      K
    );
  }, be = (d, g, b, L, E, M, B, H, D) => {
    let I = 0;
    const z = g.length;
    let K = d.length - 1, q = z - 1;
    for (; I <= K && I <= q; ) {
      const Z = d[I], le = g[I] = D ? wt(g[I]) : ft(g[I]);
      if (Wt(Z, le))
        T(
          Z,
          le,
          b,
          null,
          E,
          M,
          B,
          H,
          D
        );
      else
        break;
      I++;
    }
    for (; I <= K && I <= q; ) {
      const Z = d[K], le = g[q] = D ? wt(g[q]) : ft(g[q]);
      if (Wt(Z, le))
        T(
          Z,
          le,
          b,
          null,
          E,
          M,
          B,
          H,
          D
        );
      else
        break;
      K--, q--;
    }
    if (I > K) {
      if (I <= q) {
        const Z = q + 1, le = Z < z ? g[Z].el : L;
        for (; I <= q; )
          T(
            null,
            g[I] = D ? wt(g[I]) : ft(g[I]),
            b,
            le,
            E,
            M,
            B,
            H,
            D
          ), I++;
      }
    } else if (I > q)
      for (; I <= K; )
        Ne(d[I], E, M, !0), I++;
    else {
      const Z = I, le = I, ye = /* @__PURE__ */ new Map();
      for (I = le; I <= q; I++) {
        const re = g[I] = D ? wt(g[I]) : ft(g[I]);
        re.key != null && ye.set(re.key, I);
      }
      let de, y = 0;
      const w = q - le + 1;
      let S = !1, te = 0;
      const ge = new Array(w);
      for (I = 0; I < w; I++) ge[I] = 0;
      for (I = Z; I <= K; I++) {
        const re = d[I];
        if (y >= w) {
          Ne(re, E, M, !0);
          continue;
        }
        let Ce;
        if (re.key != null)
          Ce = ye.get(re.key);
        else
          for (de = le; de <= q; de++)
            if (ge[de - le] === 0 && Wt(re, g[de])) {
              Ce = de;
              break;
            }
        Ce === void 0 ? Ne(re, E, M, !0) : (ge[Ce - le] = I + 1, Ce >= te ? te = Ce : S = !0, T(
          re,
          g[Ce],
          b,
          null,
          E,
          M,
          B,
          H,
          D
        ), y++);
      }
      const Ke = S ? Sa(ge) : tn;
      for (de = Ke.length - 1, I = w - 1; I >= 0; I--) {
        const re = le + I, Ce = g[re], Ye = g[re + 1], $e = re + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ye.el || _l(Ye)
        ) : L;
        ge[I] === 0 ? T(
          null,
          Ce,
          b,
          $e,
          E,
          M,
          B,
          H,
          D
        ) : S && (de < 0 || I !== Ke[de] ? Re(Ce, b, $e, 2) : de--);
      }
    }
  }, Re = (d, g, b, L, E = null) => {
    const { el: M, type: B, transition: H, children: D, shapeFlag: I } = d;
    if (I & 6) {
      Re(d.component.subTree, g, b, L);
      return;
    }
    if (I & 128) {
      d.suspense.move(g, b, L);
      return;
    }
    if (I & 64) {
      B.move(d, g, b, mt);
      return;
    }
    if (B === ie) {
      s(M, g, b);
      for (let K = 0; K < D.length; K++)
        Re(D[K], g, b, L);
      s(d.anchor, g, b);
      return;
    }
    if (B === Yn) {
      C(d, g, b);
      return;
    }
    if (L !== 2 && I & 1 && H)
      if (L === 0)
        H.beforeEnter(M), s(M, g, b), Oe(() => H.enter(M), E);
      else {
        const { leave: K, delayLeave: q, afterLeave: Z } = H, le = () => {
          d.ctx.isUnmounted ? o(M) : s(M, g, b);
        }, ye = () => {
          M._isLeaving && M[ut](
            !0
            /* cancelled */
          ), K(M, () => {
            le(), Z && Z();
          });
        };
        q ? q(M, le, ye) : ye();
      }
    else
      s(M, g, b);
  }, Ne = (d, g, b, L = !1, E = !1) => {
    const {
      type: M,
      props: B,
      ref: H,
      children: D,
      dynamicChildren: I,
      shapeFlag: z,
      patchFlag: K,
      dirs: q,
      cacheIndex: Z
    } = d;
    if (K === -2 && (E = !1), H != null && (xt(), _n(H, null, b, d, !0), Ct()), Z != null && (g.renderCache[Z] = void 0), z & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const le = z & 1 && q, ye = !bn(d);
    let de;
    if (ye && (de = B && B.onVnodeBeforeUnmount) && rt(de, g, d), z & 6)
      qt(d.component, b, L);
    else {
      if (z & 128) {
        d.suspense.unmount(b, L);
        return;
      }
      le && Ht(d, null, g, "beforeUnmount"), z & 64 ? d.type.remove(
        d,
        g,
        b,
        mt,
        L
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== ie || K > 0 && K & 64) ? ze(
        I,
        g,
        b,
        !1,
        !0
      ) : (M === ie && K & 384 || !E && z & 16) && ze(D, g, b), L && Yt(d);
    }
    (ye && (de = B && B.onVnodeUnmounted) || le) && Oe(() => {
      de && rt(de, g, d), le && Ht(d, null, g, "unmounted");
    }, b);
  }, Yt = (d) => {
    const { type: g, el: b, anchor: L, transition: E } = d;
    if (g === ie) {
      an(b, L);
      return;
    }
    if (g === Yn) {
      O(d);
      return;
    }
    const M = () => {
      o(b), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (d.shapeFlag & 1 && E && !E.persisted) {
      const { leave: B, delayLeave: H } = E, D = () => B(b, M);
      H ? H(d.el, M, D) : D();
    } else
      M();
  }, an = (d, g) => {
    let b;
    for (; d !== g; )
      b = _(d), o(d), d = b;
    o(g);
  }, qt = (d, g, b) => {
    const { bum: L, scope: E, job: M, subTree: B, um: H, m: D, a: I } = d;
    Ko(D), Ko(I), L && zn(L), E.stop(), M && (M.flags |= 8, Ne(B, d, g, b)), H && Oe(H, g), Oe(() => {
      d.isUnmounted = !0;
    }, g);
  }, ze = (d, g, b, L = !1, E = !1, M = 0) => {
    for (let B = M; B < d.length; B++)
      Ne(d[B], g, b, L, E);
  }, et = (d) => {
    if (d.shapeFlag & 6)
      return et(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const g = _(d.anchor || d.el), b = g && g[Gi];
    return b ? _(b) : g;
  };
  let De = !1;
  const lt = (d, g, b) => {
    let L;
    d == null ? g._vnode && (Ne(g._vnode, null, null, !0), L = g._vnode.component) : T(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      b
    ), g._vnode = d, De || (De = !0, Eo(L), Ki(), De = !1);
  }, mt = {
    p: T,
    um: Ne,
    m: Re,
    r: Yt,
    mt: Y,
    mc: ce,
    pc: U,
    pbc: F,
    n: et,
    o: e
  };
  return {
    render: lt,
    hydrate: void 0,
    createApp: ra(lt)
  };
}
function Rs({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Bt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ka(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function yo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Q(s) && Q(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = wt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && yo(l, r)), r.type === ws && (r.patchFlag === -1 && (r = o[i] = wt(r)), r.el = l.el), r.type === Be && !r.el && (r.el = l.el);
    }
}
function Sa(e) {
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
function yl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : yl(t);
}
function Ko(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function _l(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? _l(t.subTree) : null;
}
const bl = (e) => e.__isSuspense;
function xa(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Pr(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), ws = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Yn = /* @__PURE__ */ Symbol.for("v-stc"), $n = [];
let Je = null;
function $(e = !1) {
  $n.push(Je = e ? null : []);
}
function Ca() {
  $n.pop(), Je = $n[$n.length - 1] || null;
}
let In = 1;
function is(e, t = !1) {
  In += e, e < 0 && Je && t && (Je.hasOnce = !0);
}
function wl(e) {
  return e.dynamicChildren = In > 0 ? Je || tn : null, Ca(), In > 0 && Je && Je.push(e), e;
}
function A(e, t, n, s, o, i) {
  return wl(
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
function Le(e, t, n, s, o) {
  return wl(
    Ee(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function ls(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const $l = ({ key: e }) => e ?? null, qn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Me(e) || ne(e) ? { i: Xe, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === ie ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && $l(t),
    ref: t && qn(t),
    scopeId: Wi,
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
    ctx: Xe
  };
  return r ? (_o(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= xe(n) ? 8 : 16), In > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Je && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Je.push(a), a;
}
const Ee = Ta;
function Ta(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Zr) && (e = Be), ls(e)) {
    const r = Dt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && _o(r, n), In > 0 && !i && Je && (r.shapeFlag & 6 ? Je[Je.indexOf(e)] = r : Je.push(r)), r.patchFlag = -2, r;
  }
  if (Da(e) && (e = e.__vccOpts), t) {
    t = Ea(t);
    let { class: r, style: a } = t;
    r && !xe(r) && (t.class = ke(r)), ve(a) && (/* @__PURE__ */ gs(a) && !Q(a) && (a = Ie({}, a)), t.style = Rt(a));
  }
  const l = xe(e) ? 1 : bl(e) ? 128 : Yi(e) ? 64 : ve(e) ? 4 : ne(e) ? 2 : 0;
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
function Ea(e) {
  return e ? /* @__PURE__ */ gs(e) || dl(e) ? Ie({}, e) : e : null;
}
function Dt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, c = t ? Ma(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && $l(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(qn(t)) : [i, qn(t)] : qn(t)
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
    patchFlag: t && e.type !== ie ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Tn(
    u,
    a.clone(u)
  ), u;
}
function St(e = " ", t = 0) {
  return Ee(ws, null, e, t);
}
function kl(e, t) {
  const n = Ee(Yn, null, e);
  return n.staticCount = t, n;
}
function oe(e = "", t = !1) {
  return t ? ($(), Le(Be, null, e)) : Ee(Be, null, e);
}
function ft(e) {
  return e == null || typeof e == "boolean" ? Ee(Be) : Q(e) ? Ee(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : ls(e) ? wt(e) : Ee(ws, null, String(e));
}
function wt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function _o(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), _o(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !dl(t) ? t._ctx = Xe : o === 3 && Xe && (Xe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Xe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [St(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ma(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ke([t.class, s.class]));
      else if (o === "style")
        t.style = Rt([t.style, s.style]);
      else if (us(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(Q(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function rt(e, t, n, s = null) {
  it(e, t, 7, [
    n,
    s
  ]);
}
const Ia = rl();
let Aa = 0;
function La(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ia, i = {
    uid: Aa++,
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
    scope: new Zl(
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
    propsOptions: pl(s, o),
    emitsOptions: al(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: _e,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: _e,
    data: _e,
    props: _e,
    attrs: _e,
    slots: _e,
    refs: _e,
    setupState: _e,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ua.bind(null, i), e.ce && e.ce(i), i;
}
let je = null;
const Sl = () => je || Xe;
let rs, Qs;
{
  const e = ds(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  rs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), Qs = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const Nn = (e) => {
  const t = je;
  return rs(e), e.scope.on(), () => {
    e.scope.off(), rs(t);
  };
}, Vo = () => {
  je && je.scope.off(), rs(null);
};
function xl(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Oa(e, t = !1, n = !1) {
  t && Qs(t);
  const { props: s, children: o } = e.vnode, i = xl(e);
  ga(e, s, i, t), _a(e, o, n || t);
  const l = i ? Pa(e, t) : void 0;
  return t && Qs(!1), l;
}
function Pa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, ea);
  const { setup: s } = n;
  if (s) {
    xt();
    const o = e.setupContext = s.length > 1 ? Na(e) : null, i = Nn(e), l = Rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = mi(l);
    if (Ct(), i(), (r || e.sp) && !bn(e) && nl(e), r) {
      if (l.then(Vo, Vo), t)
        return l.then((a) => {
          Wo(e, a);
        }).catch((a) => {
          vs(a, e, 0);
        });
      e.asyncDep = l;
    } else
      Wo(e, l);
  } else
    Cl(e);
}
function Wo(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Hi(t)), Cl(e);
}
function Cl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ht);
  {
    const o = Nn(e);
    xt();
    try {
      ta(e);
    } finally {
      Ct(), o();
    }
  }
}
const Ra = {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function Na(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ra),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function $s(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Hi(wr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in wn)
        return wn[n](e);
    },
    has(t, n) {
      return n in t || n in wn;
    }
  })) : e.proxy;
}
function Da(e) {
  return ne(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ Mr(e, t, An);
function Fa(e, t, n) {
  try {
    is(-1);
    const s = arguments.length;
    return s === 2 ? ve(t) && !Q(t) ? ls(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ls(n) && (n = [n]), Ee(e, t, n));
  } finally {
    is(1);
  }
}
const Ha = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Zs;
const Uo = typeof window < "u" && window.trustedTypes;
if (Uo)
  try {
    Zs = /* @__PURE__ */ Uo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Tl = Zs ? (e) => Zs.createHTML(e) : (e) => e, Ba = "http://www.w3.org/2000/svg", ja = "http://www.w3.org/1998/Math/MathML", bt = typeof document < "u" ? document : null, zo = bt && /* @__PURE__ */ bt.createElement("template"), Ka = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? bt.createElementNS(Ba, e) : t === "mathml" ? bt.createElementNS(ja, e) : n ? bt.createElement(e, { is: n }) : bt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => bt.createTextNode(e),
  createComment: (e) => bt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => bt.querySelector(e),
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
      zo.innerHTML = Tl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = zo.content;
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
}, At = "transition", dn = "animation", Ln = /* @__PURE__ */ Symbol("_vtc"), El = {
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
}, Va = /* @__PURE__ */ Ie(
  {},
  Xi,
  El
), Wa = (e) => (e.displayName = "Transition", e.props = Va, e), Ua = /* @__PURE__ */ Wa(
  (e, { slots: t }) => Fa(Kr, za(e), t)
), jt = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Jo = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function za(e) {
  const t = {};
  for (const x in e)
    x in El || (t[x] = e[x]);
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
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: _ = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, N = Ja(o), T = N && N[0], P = N && N[1], {
    onBeforeEnter: k,
    onEnter: v,
    onEnterCancelled: C,
    onLeave: O,
    onLeaveCancelled: V,
    onBeforeAppear: ee = k,
    onAppear: ae = v,
    onAppearCancelled: ce = C
  } = t, R = (x, j, Y, ue) => {
    x._enterCancelled = ue, Kt(x, j ? u : r), Kt(x, j ? c : l), Y && Y();
  }, F = (x, j) => {
    x._isLeaving = !1, Kt(x, h), Kt(x, m), Kt(x, _), j && j();
  }, f = (x) => (j, Y) => {
    const ue = x ? ae : v, fe = () => R(j, x, Y);
    jt(ue, [j, fe]), Go(() => {
      Kt(j, x ? a : i), _t(j, x ? u : r), Jo(ue) || Yo(j, s, T, fe);
    });
  };
  return Ie(t, {
    onBeforeEnter(x) {
      jt(k, [x]), _t(x, i), _t(x, l);
    },
    onBeforeAppear(x) {
      jt(ee, [x]), _t(x, a), _t(x, c);
    },
    onEnter: f(!1),
    onAppear: f(!0),
    onLeave(x, j) {
      x._isLeaving = !0;
      const Y = () => F(x, j);
      _t(x, h), x._enterCancelled ? (_t(x, _), Qo(x)) : (Qo(x), _t(x, _)), Go(() => {
        x._isLeaving && (Kt(x, h), _t(x, m), Jo(O) || Yo(x, s, P, Y));
      }), jt(O, [x, Y]);
    },
    onEnterCancelled(x) {
      R(x, !1, void 0, !0), jt(C, [x]);
    },
    onAppearCancelled(x) {
      R(x, !0, void 0, !0), jt(ce, [x]);
    },
    onLeaveCancelled(x) {
      F(x), jt(V, [x]);
    }
  });
}
function Ja(e) {
  if (e == null)
    return null;
  if (ve(e))
    return [Ns(e.enter), Ns(e.leave)];
  {
    const t = Ns(e);
    return [t, t];
  }
}
function Ns(e) {
  return Ul(e);
}
function _t(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ln] || (e[Ln] = /* @__PURE__ */ new Set())).add(t);
}
function Kt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ln];
  n && (n.delete(t), n.size || (e[Ln] = void 0));
}
function Go(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ga = 0;
function Yo(e, t, n, s) {
  const o = e._endId = ++Ga, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Ya(e, t);
  if (!l)
    return s();
  const c = l + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(c, _), i();
  }, _ = (m) => {
    m.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, r + 1), e.addEventListener(c, _);
}
function Ya(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${At}Delay`), i = s(`${At}Duration`), l = qo(o, i), r = s(`${dn}Delay`), a = s(`${dn}Duration`), c = qo(r, a);
  let u = null, h = 0, _ = 0;
  t === At ? l > 0 && (u = At, h = l, _ = i.length) : t === dn ? c > 0 && (u = dn, h = c, _ = a.length) : (h = Math.max(l, c), u = h > 0 ? l > c ? At : dn : null, _ = u ? u === At ? i.length : a.length : 0);
  const m = u === At && /\b(?:transform|all)(?:,|$)/.test(
    s(`${At}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: _,
    hasTransform: m
  };
}
function qo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Xo(n) + Xo(e[s])));
}
function Xo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Qo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function qa(e, t, n) {
  const s = e[Ln];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Zo = /* @__PURE__ */ Symbol("_vod"), Xa = /* @__PURE__ */ Symbol("_vsh"), Qa = /* @__PURE__ */ Symbol(""), Za = /(?:^|;)\s*display\s*:/;
function eu(e, t, n) {
  const s = e.style, o = xe(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (xe(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Xn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && Xn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), Xn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[Qa];
      l && (n += ";" + l), s.cssText = n, i = Za.test(n);
    }
  } else t && e.removeAttribute("style");
  Zo in e && (e[Zo] = i ? s.display : "", e[Xa] && (s.display = "none"));
}
const ei = /\s*!important$/;
function Xn(e, t, n) {
  if (Q(n))
    n.forEach((s) => Xn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = tu(e, t);
    ei.test(n) ? e.setProperty(
      Ft(s),
      n.replace(ei, ""),
      "important"
    ) : e[s] = n;
  }
}
const ti = ["Webkit", "Moz", "ms"], Ds = {};
function tu(e, t) {
  const n = Ds[t];
  if (n)
    return n;
  let s = nt(t);
  if (s !== "filter" && s in e)
    return Ds[t] = s;
  s = bi(s);
  for (let o = 0; o < ti.length; o++) {
    const i = ti[o] + s;
    if (i in e)
      return Ds[t] = i;
  }
  return t;
}
const ni = "http://www.w3.org/1999/xlink";
function si(e, t, n, s, o, i = Xl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ni, t.slice(6, t.length)) : e.setAttributeNS(ni, t, n) : n == null || i && !$i(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : pt(n) ? String(n) : n
  );
}
function oi(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Tl(n) : n);
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
    r === "boolean" ? n = $i(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function en(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function nu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ii = /* @__PURE__ */ Symbol("_vei");
function su(e, t, n, s, o = null) {
  const i = e[ii] || (e[ii] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = ou(t);
    if (s) {
      const c = i[t] = ru(
        s,
        o
      );
      en(e, r, c, a);
    } else l && (nu(e, r, l, a), i[t] = void 0);
  }
}
const li = /(?:Once|Passive|Capture)$/;
function ou(e) {
  let t;
  if (li.test(e)) {
    t = {};
    let s;
    for (; s = e.match(li); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Ft(e.slice(2)), t];
}
let Fs = 0;
const iu = /* @__PURE__ */ Promise.resolve(), lu = () => Fs || (iu.then(() => Fs = 0), Fs = Date.now());
function ru(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    it(
      au(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = lu(), n;
}
function au(e, t) {
  if (Q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const ri = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, uu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? qa(e, s, l) : t === "style" ? eu(e, n, s) : us(t) ? so(t) || su(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cu(e, t, s, l)) ? (oi(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && si(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (fu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(s))) ? oi(e, nt(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), si(e, t, s, l));
};
function cu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ri(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return ri(t) && xe(n) ? !1 : t in e;
}
function fu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = nt(t);
  return Array.isArray(n) ? n.some((o) => nt(o) === s) : Object.keys(n).some((o) => nt(o) === s);
}
const ai = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => zn(t, n) : t;
};
function du(e) {
  e.target.composing = !0;
}
function ui(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Hs = /* @__PURE__ */ Symbol("_assign");
function ci(e, t, n) {
  return t && (e = e.trim()), n && (e = io(e)), e;
}
const vt = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Hs] = ai(o);
    const i = s || o.props && o.props.type === "number";
    en(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Hs](ci(e.value, n, i));
    }), (n || i) && en(e, "change", () => {
      e.value = ci(e.value, n, i);
    }), t || (en(e, "compositionstart", du), en(e, "compositionend", ui), en(e, "change", ui));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[Hs] = ai(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? io(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, hu = ["ctrl", "shift", "alt", "meta"], pu = {
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
  exact: (e, t) => hu.some((n) => e[`${n}Key`] && !t.includes(n))
}, se = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = pu[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, gu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Te = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Ft(o.key);
    if (t.some(
      (l) => l === i || gu[l] === i
    ))
      return e(o);
  });
}, vu = /* @__PURE__ */ Ie({ patchProp: uu }, Ka);
let fi;
function mu() {
  return fi || (fi = wa(vu));
}
const yu = (...e) => {
  const t = mu().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = bu(s);
    if (!o) return;
    const i = t._component;
    !ne(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, _u(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function _u(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function bu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const wu = { class: "setup" }, $u = { class: "setup-card" }, ku = { class: "field-group" }, Su = { class: "field-group" }, xu = ["disabled"], Cu = {
  key: 0,
  class: "error"
}, Tu = /* @__PURE__ */ Qe({
  __name: "TokenSetup",
  emits: ["token"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ W(localStorage.getItem("ha_url") ?? "http://homeassistant.local:8123"), o = /* @__PURE__ */ W(""), i = /* @__PURE__ */ W(""), l = /* @__PURE__ */ W(null), r = X(() => s.value.trim() && o.value.trim());
    async function a() {
      const c = s.value.trim().replace(/\/$/, ""), u = o.value.trim();
      if (!(!c || !u)) {
        i.value = "", localStorage.setItem("ha_url", c);
        try {
          let h = null;
          try {
            h = await fetch(`${c}/api/`, {
              headers: { Authorization: `Bearer ${u}` }
            });
          } catch {
            h = await fetch("/api/", {
              headers: { Authorization: `Bearer ${u}` }
            });
          }
          if (!h.ok) {
            i.value = "Token ungültig oder Verbindung fehlgeschlagen.", localStorage.removeItem("ha_url");
            return;
          }
          localStorage.setItem("ha_token", u), n("token", u);
        } catch {
          localStorage.removeItem("ha_url"), i.value = "Home Assistant nicht erreichbar. URL und Netzwerk prüfen.";
        }
      }
    }
    return (c, u) => ($(), A("div", wu, [
      p("div", $u, [
        u[5] || (u[5] = p("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = p("p", null, [
          St(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          St(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", ku, [
          u[3] || (u[3] = p("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          gt(p("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: u[1] || (u[1] = Te((h) => {
              var _;
              return (_ = l.value) == null ? void 0 : _.focus();
            }, ["enter"]))
          }, null, 544), [
            [vt, s.value]
          ])
        ]),
        p("div", Su, [
          u[4] || (u[4] = p("label", { class: "field-label" }, "Access Token", -1)),
          gt(p("input", {
            ref_key: "tokenRef",
            ref: l,
            "onUpdate:modelValue": u[2] || (u[2] = (h) => o.value = h),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Te(a, ["enter"])
          }, null, 544), [
            [vt, o.value]
          ])
        ]),
        p("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, xu),
        i.value ? ($(), A("p", Cu, J(i.value), 1)) : oe("", !0)
      ])
    ]));
  }
}), Ze = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Eu = /* @__PURE__ */ Ze(Tu, [["__scopeId", "data-v-97d10609"]]);
let bo = !1;
const Ml = /* @__PURE__ */ W(null);
function Il(e) {
  bo = e;
}
function Mu() {
  return bo;
}
function Iu(e) {
  Ml.value = e;
}
function Au() {
  return Ml;
}
const ks = /* @__PURE__ */ W(localStorage.getItem("ha_auth_key"));
function Lu() {
  return ks;
}
function Bs(e) {
  ks.value = e, e ? localStorage.setItem("ha_auth_key", e) : localStorage.removeItem("ha_auth_key");
}
function Ou(e) {
  return ks.value || e || "";
}
function Al() {
  var e;
  return bo ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function Ll() {
  const e = Al();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function Ss(e) {
  const t = Al();
  return t ? `${t}${e}` : e;
}
async function Ut(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(Ss(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function Pu(e) {
  const t = await fetch(Ss("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
const Ol = "homeboard", as = /* @__PURE__ */ W(!1), Dn = /* @__PURE__ */ W(null), pn = [];
function Ru(e) {
  as.value ? e(Dn.value) : pn.push(e);
}
let Se = null, kn = 1, ln = null;
const Gt = /* @__PURE__ */ new Map(), On = /* @__PURE__ */ new Map(), eo = /* @__PURE__ */ W(0);
let Nt = !1, di = [];
const Pt = /* @__PURE__ */ new Map();
function Nu() {
  return Ll();
}
function Pl(e) {
  Se && (Se.readyState === WebSocket.OPEN || Se.readyState === WebSocket.CONNECTING) || (Nt = !1, Se = new WebSocket(Nu()), Se.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      Se.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      Nt = !0;
      const i = kn++;
      Se.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = kn++;
      Se.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      const r = kn++;
      Pt.set(r, {
        resolve: (a) => {
          const c = (a == null ? void 0 : a.value) ?? null;
          Dn.value = c, as.value = !0, c != null && c.authKey && (ks.value = c.authKey, localStorage.setItem("ha_auth_key", c.authKey));
          for (const u of pn) u(c);
          pn.length = 0;
        },
        reject: () => {
          as.value = !0;
          for (const a of pn) a(null);
          pn.length = 0;
        }
      }), Se.send(JSON.stringify({ id: r, type: "frontend/get_user_data", key: Ol }));
      for (const a of di) a();
      di = [];
      return;
    }
    if (n.type === "auth_invalid") {
      console.error("HA WebSocket auth failed");
      return;
    }
    if (n.type === "result" && Pt.has(n.id)) {
      const { resolve: i, reject: l } = Pt.get(n.id);
      Pt.delete(n.id), n.success ? i(n.result) : l(new Error(((s = n.error) == null ? void 0 : s.message) ?? "Service call failed"));
      return;
    }
    if (n.type === "result" && n.success && Array.isArray(n.result)) {
      for (const i of n.result)
        On.set(i.entity_id, i), hi(i.entity_id, i);
      eo.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (On.set(i.entity_id, i), eo.value++, hi(i.entity_id, i));
    }
  }, Se.onclose = () => {
    Nt = !1, ln && clearTimeout(ln), ln = setTimeout(() => {
      Se = null, Pl(e);
    }, 5e3);
  }, Se.onerror = () => {
    Se == null || Se.close();
  });
}
function hi(e, t) {
  const n = Gt.get(e);
  if (n)
    for (const s of n) s(t);
}
function Du(e, t) {
  Gt.has(e) || Gt.set(e, /* @__PURE__ */ new Set()), Gt.get(e).add(t);
  const n = On.get(e);
  n && t(n);
}
function Fu(e, t) {
  const n = Gt.get(e);
  n && (n.delete(t), n.size === 0 && Gt.delete(e));
}
function Hu() {
  ln && (clearTimeout(ln), ln = null), Se && (Se.close(), Se = null), Nt = !1, On.clear(), Gt.clear(), as.value = !1, Dn.value = null;
}
async function Qn(e) {
  if (Dn.value = e, !Se || !Nt) return;
  const t = kn++;
  return new Promise((n, s) => {
    Pt.set(t, {
      resolve: () => n(),
      reject: (o) => s(o)
    }), Se.send(JSON.stringify({ id: t, type: "frontend/set_user_data", key: Ol, value: e }));
  });
}
let Un = null;
function to() {
  const e = {}, t = {};
  for (let n = 0; n < localStorage.length; n++) {
    const s = localStorage.key(n);
    if (s) {
      if (s.startsWith("ha_group_")) {
        const o = s.slice(9);
        try {
          const i = JSON.parse(localStorage.getItem(s));
          e[o] = {
            included: Array.isArray(i.included) ? i.included : [],
            excluded: Array.isArray(i.excluded) ? i.excluded : []
          };
        } catch {
        }
      }
      if (s.startsWith("ha_title_")) {
        const o = s.slice(9);
        t[o] || (t[o] = {}), t[o].title = localStorage.getItem(s) ?? "";
      }
      if (s.startsWith("ha_showtitle_")) {
        const o = s.slice(13);
        t[o] || (t[o] = {}), t[o].showTitle = localStorage.getItem(s) !== "false";
      }
    }
  }
  return { groups: e, cardSettings: t };
}
function Rl() {
  Un && clearTimeout(Un), Un = setTimeout(() => {
    if (Un = null, !Se || !Nt) return;
    const e = to(), t = { ...Dn.value ?? {}, ...e };
    Qn(t);
  }, 500);
}
async function Bu(e, t, n, s) {
  if (!Se || !Nt) throw new Error("WebSocket not connected");
  const o = kn++;
  return new Promise((i, l) => {
    Pt.set(o, { resolve: i, reject: l }), Se.send(JSON.stringify({
      id: o,
      type: "call_service",
      domain: t,
      service: n,
      service_data: s ?? {},
      target: { entity_id: e },
      return_response: !0
    })), setTimeout(() => {
      Pt.has(o) && (Pt.delete(o), l(new Error("Timeout")));
    }, 1e4);
  });
}
function ju(e) {
  let t = e;
  const n = /* @__PURE__ */ W(null), s = /* @__PURE__ */ W(null), o = /* @__PURE__ */ W(!0);
  let i = null;
  function l(c) {
    n.value = c, s.value = null, o.value = !1;
  }
  function r(c, u) {
    a(), u && (t = u), o.value = !0, s.value = null, Pl(c), i = l, Du(t, i), Nt || fetch(Ss(`/api/states/${t}`), {
      headers: { Authorization: `Bearer ${c}`, "Content-Type": "application/json" }
    }).then((h) => {
      if (!h.ok) throw new Error(`HTTP ${h.status}`);
      return h.json();
    }).then((h) => {
      o.value && (n.value = h, o.value = !1, s.value = null);
    }).catch((h) => {
      o.value && (s.value = h instanceof Error ? h.message : "Fehler", o.value = !1);
    });
  }
  function a() {
    i && (Fu(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function wo() {
  return { cache: On, version: eo };
}
const Ku = { class: "weather-layout" }, Vu = { class: "weather-left" }, Wu = { class: "weather-temp" }, Uu = { class: "weather-condition" }, zu = {
  key: 0,
  class: "weather-meta"
}, Ju = {
  key: 0,
  class: "weather-meta-item"
}, Gu = {
  key: 1,
  class: "weather-meta-item"
}, Yu = { class: "weather-right" }, qu = ["innerHTML"], Xu = { class: "ha-modal-header-row" }, Qu = { class: "ha-modal-title" }, Zu = { class: "wf-current" }, ec = { class: "wf-current-left" }, tc = ["innerHTML"], nc = { class: "wf-current-info" }, sc = { class: "wf-current-condition" }, oc = { class: "wf-current-ago" }, ic = { class: "wf-current-right" }, lc = { class: "wf-current-temp" }, rc = {
  key: 0,
  class: "wf-current-hilo"
}, ac = { class: "wf-details" }, uc = {
  key: 0,
  class: "wf-detail-row"
}, cc = { class: "wf-detail-value" }, fc = {
  key: 1,
  class: "wf-detail-row"
}, dc = { class: "wf-detail-value" }, hc = {
  key: 2,
  class: "wf-detail-row"
}, pc = { class: "wf-detail-value" }, gc = { class: "wf-tabs" }, vc = {
  key: 0,
  class: "weather-forecast-row"
}, mc = { class: "wf-date" }, yc = ["innerHTML"], _c = { class: "wf-temps" }, bc = { class: "wf-temps-low" }, wc = {
  key: 1,
  class: "ha-modal-empty"
}, $c = {
  key: 0,
  class: "wf-hourly-scroll"
}, kc = { class: "wf-hourly-day-label" }, Sc = { class: "weather-forecast-row" }, xc = { class: "wf-date" }, Cc = ["innerHTML"], Tc = { class: "wf-temps" }, Ec = {
  key: 1,
  class: "ha-modal-empty"
}, Mc = /* @__PURE__ */ Qe({
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
    const t = e, n = /* @__PURE__ */ W(!1), s = {
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
    function o(R, F = 100) {
      const f = F, x = `<path d="M${f * 0.17} ${f * 0.63}a${f * 0.17} ${f * 0.17} 0 0 1 0-${f * 0.33}h${f * 0.04}a${f * 0.23} ${f * 0.23} 0 0 1 ${f * 0.44}-${f * 0.1}a${f * 0.19} ${f * 0.19} 0 0 1 ${f * 0.19} ${f * 0.1}h${f * 0.02}a${f * 0.17} ${f * 0.17} 0 0 1 0 ${f * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linejoin="round"/>`, j = `<svg viewBox="0 0 ${f} ${f}" width="${f}" height="${f}" xmlns="http://www.w3.org/2000/svg">`, Y = "</svg>";
      switch (R) {
        case "sunny":
          return `${j}
        <circle cx="${f / 2}" cy="${f / 2}" r="${f * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((ue) => {
            const fe = ue * Math.PI / 180, pe = f / 2 + Math.cos(fe) * f * 0.25, U = f / 2 + Math.sin(fe) * f * 0.25, G = f / 2 + Math.cos(fe) * f * 0.35, be = f / 2 + Math.sin(fe) * f * 0.35;
            return `<line x1="${pe}" y1="${U}" x2="${G}" y2="${be}" stroke="#f6ad35" stroke-width="${f * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${Y}`;
        case "clear-night":
          return `${j}<path d="M${f * 0.58} ${f * 0.15}a${f * 0.33} ${f * 0.33} 0 1 0 ${f * 0.27} ${f * 0.42} ${f * 0.25} ${f * 0.25} 0 0 1-${f * 0.27}-${f * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${f * 0.03}"/>${Y}`;
        case "partlycloudy":
          return `${j}
        <circle cx="${f * 0.62}" cy="${f * 0.3}" r="${f * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((ue) => {
            const fe = ue * Math.PI / 180;
            return `<line x1="${f * 0.62 + Math.cos(fe) * f * 0.19}" y1="${f * 0.3 + Math.sin(fe) * f * 0.19}" x2="${f * 0.62 + Math.cos(fe) * f * 0.25}" y2="${f * 0.3 + Math.sin(fe) * f * 0.25}" stroke="#f6ad35" stroke-width="${f * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${x}
      ${Y}`;
        case "cloudy":
          return `${j}${x}${Y}`;
        case "rainy":
        case "pouring":
          return `${j}${x}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.5}" y1="${f * 0.71}" x2="${f * 0.45}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.7}" y1="${f * 0.71}" x2="${f * 0.65}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${Y}`;
        case "snowy":
          return `${j}${x}
        <line x1="${f * 0.35}" y1="${f * 0.73}" x2="${f * 0.35}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.28}" y1="${f * 0.805}" x2="${f * 0.42}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.58}" y1="${f * 0.805}" x2="${f * 0.72}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${Y}`;
        case "snowy-rainy":
          return `${j}${x}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.86}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.59}" y1="${f * 0.795}" x2="${f * 0.71}" y2="${f * 0.795}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${Y}`;
        case "fog":
          return `${j}
        <line x1="${f * 0.2}" y1="${f * 0.35}" x2="${f * 0.8}" y2="${f * 0.35}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.15}" y1="${f * 0.5}" x2="${f * 0.85}" y2="${f * 0.5}" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.2}" y1="${f * 0.65}" x2="${f * 0.8}" y2="${f * 0.65}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${Y}`;
        case "lightning":
          return `${j}${x}
        <polygon points="${f * 0.45},${f * 0.62} ${f * 0.52},${f * 0.75} ${f * 0.47},${f * 0.75} ${f * 0.55},${f * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
      ${Y}`;
        case "lightning-rainy":
          return `${j}${x}
        <polygon points="${f * 0.42},${f * 0.62} ${f * 0.48},${f * 0.75} ${f * 0.44},${f * 0.75} ${f * 0.5},${f * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.71}" x2="${f * 0.6}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${Y}`;
        case "windy":
        case "windy-variant":
          return `${j}
        <path d="M${f * 0.15} ${f * 0.4} Q${f * 0.4} ${f * 0.3} ${f * 0.65} ${f * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.2} ${f * 0.55} Q${f * 0.5} ${f * 0.45} ${f * 0.8} ${f * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.15} ${f * 0.7} Q${f * 0.35} ${f * 0.6} ${f * 0.55} ${f * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${Y}`;
        case "hail":
          return `${j}${x}
        <circle cx="${f * 0.3}" cy="${f * 0.8}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.5}" cy="${f * 0.82}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.7}" cy="${f * 0.78}" r="${f * 0.035}" fill="#5bbbf5"/>
      ${Y}`;
        default:
          return `${j}${x}${Y}`;
      }
    }
    const i = X(() => t.state ? o(t.state.state) : o("cloudy")), l = X(() => {
      var R;
      return t.state ? ((R = s[t.state.state]) == null ? void 0 : R.label) ?? t.state.state : "";
    }), r = X(() => {
      if (!t.state) return "--";
      const R = t.state.attributes.temperature;
      return R != null ? Math.round(R) : "--";
    }), a = X(() => t.state ? t.state.attributes.humidity ?? null : null), c = X(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = X(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ W([]), _ = /* @__PURE__ */ W([]), m = /* @__PURE__ */ W("daily"), N = X(() => {
      const R = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], F = [];
      let f = null;
      for (const x of _.value) {
        const j = new Date(x.datetime), Y = R[j.getDay()];
        (!f || f.day !== Y) && (f = { day: Y, hours: [] }, F.push(f)), f.hours.push(x);
      }
      return F;
    }), T = X(() => {
      if (!t.state) return "";
      const R = new Date(t.state.last_updated), f = Math.round(((/* @__PURE__ */ new Date()).getTime() - R.getTime()) / 6e4);
      if (f < 1) return "Gerade eben";
      if (f < 60) return `Vor ${f} Min.`;
      const x = Math.round(f / 60);
      return x < 24 ? `Vor ${x} Stunde${x > 1 ? "n" : ""}` : `Vor ${Math.round(x / 24)} Tag${Math.round(x / 24) > 1 ? "en" : ""}`;
    }), P = X(() => t.state && h.value.length ? h.value[0].tempHigh : null), k = X(() => t.state && h.value.length ? h.value[0].tempLow : null), v = X(() => {
      if (!t.state) return "";
      const R = t.state.attributes.wind_bearing;
      return R == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(R / 22.5) % 16];
    });
    function C(R) {
      return R.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function O() {
      n.value = !0, m.value = "daily", await ee("daily");
    }
    async function V(R) {
      m.value = R, R === "hourly" && _.value.length === 0 && await ee("hourly");
    }
    async function ee(R) {
      var F, f;
      if (R === "daily") {
        const x = (F = t.state) == null ? void 0 : F.attributes.forecast;
        if (x && x.length) {
          h.value = ae(x);
          return;
        }
      }
      try {
        const x = await Bu(t.entityId, "weather", "get_forecasts", { type: R }), j = (x == null ? void 0 : x.response) ?? x, Y = (j == null ? void 0 : j[t.entityId]) ?? (j ? Object.values(j)[0] : null), ue = (Y == null ? void 0 : Y.forecast) ?? [];
        if (ue.length) {
          R === "daily" ? h.value = ae(ue) : _.value = ce(ue);
          return;
        }
      } catch {
        try {
          const x = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: R })
          });
          if (x.ok) {
            const j = await x.json();
            let Y = [];
            if (j != null && j[t.entityId]) Y = j[t.entityId].forecast ?? [];
            else if (Array.isArray(j)) Y = ((f = j[0]) == null ? void 0 : f.forecast) ?? [];
            else {
              const ue = Object.values(j)[0];
              Y = (ue == null ? void 0 : ue.forecast) ?? (j == null ? void 0 : j.forecast) ?? [];
            }
            if (Y.length) {
              R === "daily" ? h.value = ae(Y) : _.value = ce(Y);
              return;
            }
          }
        } catch {
        }
      }
      R === "daily" ? h.value = [] : _.value = [];
    }
    function ae(R) {
      const F = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return R.slice(0, 6).map((f) => {
        const x = new Date(f.datetime);
        return {
          date: f.datetime,
          weekday: F[x.getDay()],
          condition: f.condition ?? "cloudy",
          tempHigh: Math.round(f.temperature ?? f.templow ?? 0),
          tempLow: Math.round(f.templow ?? f.temperature ?? 0),
          precipitation: f.precipitation_probability ?? f.precipitation ?? null
        };
      });
    }
    function ce(R) {
      return R.slice(0, 24).map((F) => {
        const f = new Date(F.datetime);
        return {
          datetime: F.datetime,
          time: f.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: F.condition ?? "cloudy",
          temp: Math.round(F.temperature ?? 0)
        };
      });
    }
    return (R, F) => {
      var f;
      return $(), A(ie, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: se(O, ["stop"]),
          title: "Vorhersage"
        }, [...F[5] || (F[5] = [
          kl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: ke(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", Ku, [
            p("div", Vu, [
              p("span", Wu, J(r.value) + "°", 1),
              p("span", Uu, J(l.value), 1),
              e.isCompact ? oe("", !0) : ($(), A("div", zu, [
                a.value !== null ? ($(), A("span", Ju, "💧 " + J(a.value) + "%", 1)) : oe("", !0),
                c.value !== null ? ($(), A("span", Gu, "💨 " + J(Math.round(c.value)) + " km/h", 1)) : oe("", !0)
              ]))
            ]),
            p("div", Yu, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, qu)
            ])
          ])
        ], 2),
        ($(), Le(Et, { to: "body" }, [
          n.value ? ($(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: F[4] || (F[4] = se((x) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: F[3] || (F[3] = se(() => {
              }, ["stop"]))
            }, [
              p("div", Xu, [
                p("h3", Qu, J(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: F[0] || (F[0] = (x) => n.value = !1)
                }, "✕")
              ]),
              p("div", Zu, [
                p("div", ec, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((f = e.state) == null ? void 0 : f.state) ?? "cloudy", 52)
                  }, null, 8, tc),
                  p("div", nc, [
                    p("span", sc, J(l.value), 1),
                    p("span", oc, J(T.value), 1)
                  ])
                ]),
                p("div", ic, [
                  p("span", lc, J(r.value) + "°C", 1),
                  P.value !== null && k.value !== null ? ($(), A("span", rc, J(P.value) + "°C / " + J(k.value) + "°C", 1)) : oe("", !0)
                ])
              ]),
              p("div", ac, [
                u.value !== null ? ($(), A("div", uc, [
                  F[6] || (F[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", cc, J(C(u.value)) + " hPa", 1)
                ])) : oe("", !0),
                a.value !== null ? ($(), A("div", fc, [
                  F[7] || (F[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", dc, J(a.value) + " %", 1)
                ])) : oe("", !0),
                c.value !== null ? ($(), A("div", hc, [
                  F[8] || (F[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", pc, J(C(c.value)) + " km/h" + J(v.value ? ` (${v.value})` : ""), 1)
                ])) : oe("", !0)
              ]),
              p("div", gc, [
                p("button", {
                  class: ke(["wf-tab", { active: m.value === "daily" }]),
                  onClick: F[1] || (F[1] = (x) => V("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: ke(["wf-tab", { active: m.value === "hourly" }]),
                  onClick: F[2] || (F[2] = (x) => V("hourly"))
                }, "Stündlich", 2)
              ]),
              m.value === "daily" ? ($(), A(ie, { key: 0 }, [
                h.value.length ? ($(), A("div", vc, [
                  ($(!0), A(ie, null, Ue(h.value, (x) => ($(), A("div", {
                    key: x.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", mc, J(x.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(x.condition, 36)
                    }, null, 8, yc),
                    p("span", _c, J(x.tempHigh) + "°", 1),
                    p("span", bc, J(x.tempLow) + "°", 1)
                  ]))), 128))
                ])) : ($(), A("div", wc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : oe("", !0),
              m.value === "hourly" ? ($(), A(ie, { key: 1 }, [
                _.value.length ? ($(), A("div", $c, [
                  ($(!0), A(ie, null, Ue(N.value, (x) => ($(), A("div", {
                    key: x.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", kc, J(x.day), 1),
                    p("div", Sc, [
                      ($(!0), A(ie, null, Ue(x.hours, (j) => ($(), A("div", {
                        key: j.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", xc, J(j.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(j.condition, 32)
                        }, null, 8, Cc),
                        p("span", Tc, J(j.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : ($(), A("div", Ec, "Keine stündlichen Daten verfügbar"))
              ], 64)) : oe("", !0)
            ])
          ])) : oe("", !0)
        ]))
      ], 64);
    };
  }
}), Ic = /* @__PURE__ */ Ze(Mc, [["__scopeId", "data-v-a3030d6f"]]), Ac = { class: "center-wrap" }, Lc = ["title"], Oc = {
  key: 0,
  class: "updated"
}, Pc = { class: "ha-modal-header-row" }, Rc = { class: "ha-light-section" }, Nc = { class: "ha-light-slider-wrap" }, Dc = ["value"], Fc = { class: "ha-light-slider-value" }, Hc = {
  key: 0,
  class: "ha-light-section"
}, Bc = { class: "ha-light-slider-wrap" }, jc = ["value"], Kc = {
  key: 1,
  class: "ha-light-section"
}, Vc = { class: "ha-light-slider-wrap" }, Wc = ["value"], Uc = { class: "ha-light-slider-value" }, zc = /* @__PURE__ */ Qe({
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
    const t = e, n = X(() => {
      if (!t.state) return !1;
      const k = t.state.state;
      if (k === "on" || k === "home" || k === "open" || k === "unlocked") return !0;
      const v = parseFloat(k);
      return !isNaN(v) && v > 0;
    }), s = /* @__PURE__ */ W(!1);
    async function o() {
      t.state && await Ut(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ W(!1), r = X(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = X(() => {
      if (!t.state) return !1;
      const k = t.state.attributes.supported_color_modes;
      return (k == null ? void 0 : k.some((v) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(v))) ?? !1;
    }), c = X(() => {
      if (!t.state) return 0;
      const k = t.state.attributes.hs_color;
      return Math.round((k == null ? void 0 : k[0]) ?? 0);
    }), u = X(() => {
      if (!t.state) return 100;
      const k = t.state.attributes.hs_color;
      return Math.round((k == null ? void 0 : k[1]) ?? 100);
    }), h = X(() => ({
      "--sat-color": `hsl(${c.value}, 100%, 50%)`
    }));
    let _ = null, m = null;
    function N(k) {
      const v = parseInt(k.target.value);
      _ && clearTimeout(_), _ = setTimeout(() => {
        v === 0 ? Ut(t.token, t.entityId, "turn_off") : Ut(t.token, t.entityId, "turn_on", { brightness: v });
      }, 150);
    }
    function T(k) {
      const v = parseInt(k.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        Ut(t.token, t.entityId, "turn_on", {
          hs_color: [v, u.value]
        });
      }, 150);
    }
    function P(k) {
      const v = parseInt(k.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        Ut(t.token, t.entityId, "turn_on", {
          hs_color: [c.value, v]
        });
      }, 150);
    }
    return (k, v) => ($(), A(ie, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: v[0] || (v[0] = se((C) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...v[9] || (v[9] = [
        kl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", Ac, [
          p("button", {
            class: ke(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: v[1] || (v[1] = (C) => s.value = !0),
            onMouseup: v[2] || (v[2] = (C) => s.value = !1),
            onMouseleave: v[3] || (v[3] = (C) => s.value = !1),
            onTouchstartPassive: v[4] || (v[4] = (C) => s.value = !0),
            onTouchend: v[5] || (v[5] = (C) => s.value = !1),
            onClick: o,
            title: n.value ? "Ausschalten" : "Einschalten"
          }, [...v[10] || (v[10] = [
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
          ])], 42, Lc)
        ]),
        i.value ? ($(), A("div", Oc, " Aktualisiert: " + J(i.value), 1)) : oe("", !0)
      ], 2),
      ($(), Le(Et, { to: "body" }, [
        l.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[8] || (v[8] = se((C) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[7] || (v[7] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Pc, [
              v[11] || (v[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: v[6] || (v[6] = (C) => l.value = !1)
              }, "✕")
            ]),
            p("div", Rc, [
              v[12] || (v[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", Nc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: N
                }, null, 40, Dc),
                p("span", Fc, J(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? ($(), A("div", Hc, [
              v[13] || (v[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", Bc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: T
                }, null, 40, jc),
                p("span", {
                  class: "ha-light-color-preview",
                  style: Rt({ background: `hsl(${c.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : oe("", !0),
            a.value ? ($(), A("div", Kc, [
              v[14] || (v[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", Vc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: Rt(h.value),
                  onInput: P
                }, null, 44, Wc),
                p("span", Uc, J(u.value) + "%", 1)
              ])
            ])) : oe("", !0)
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), Jc = /* @__PURE__ */ Ze(zc, [["__scopeId", "data-v-c1ca61d1"]]), Gc = { class: "center-wrap" }, Yc = ["title"], qc = {
  key: 0,
  class: "updated"
}, Xc = /* @__PURE__ */ Qe({
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
    const t = e, n = X(() => {
      if (!t.state) return !1;
      const l = t.state.state;
      if (l === "on" || l === "home" || l === "open" || l === "unlocked") return !0;
      const r = parseFloat(l);
      return !isNaN(r) && r > 0;
    }), s = /* @__PURE__ */ W(!1);
    async function o() {
      t.state && await Ut(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (l, r) => ($(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Gc, [
        p("button", {
          class: ke(["power-btn", { on: n.value, pressing: s.value }]),
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
        ])], 42, Yc)
      ]),
      i.value ? ($(), A("div", qc, " Aktualisiert: " + J(i.value), 1)) : oe("", !0)
    ], 2));
  }
}), Qc = /* @__PURE__ */ Ze(Xc, [["__scopeId", "data-v-495ed0f0"]]), Zc = { class: "state value center-wrap" }, ef = { class: "number" }, tf = { class: "unit" }, nf = {
  key: 0,
  class: "updated"
}, sf = /* @__PURE__ */ Qe({
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
    const t = e, n = X(() => {
      if (!t.state) return "--";
      const i = parseFloat(t.state.state);
      return isNaN(i) ? t.state.state : i.toFixed(1);
    }), s = X(() => {
      var i;
      return ((i = t.state) == null ? void 0 : i.attributes.unit_of_measurement) ?? "";
    }), o = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (i, l) => ($(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Zc, [
        p("span", ef, J(n.value), 1),
        p("span", tf, J(s.value), 1)
      ]),
      o.value && !e.isCompact ? ($(), A("div", nf, " Aktualisiert: " + J(o.value), 1)) : oe("", !0)
    ], 2));
  }
}), of = /* @__PURE__ */ Ze(sf, [["__scopeId", "data-v-336a5298"]]), lf = {
  key: 0,
  class: "card-header"
}, rf = { class: "label" }, af = { class: "ha-modal-fields" }, uf = { class: "ha-modal-input-wrap" }, cf = ["onKeydown"], ff = {
  key: 0,
  class: "ha-modal-suggestions"
}, df = ["onMousedown"], hf = { class: "ha-modal-s-entity" }, pf = { class: "ha-modal-s-name" }, gf = ["onKeydown"], vf = { class: "ha-toggle-row" }, mf = {
  key: 1,
  class: "state loading"
}, yf = {
  key: 2,
  class: "state error"
}, _f = /* @__PURE__ */ Qe({
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
    const n = e, s = t, o = X(() => n.cols === 1 && n.rows === 1), i = X(() => n.rows === 1 && n.cols > 1), l = X(() => n.cols === 1 && n.rows > 1), r = X(() => n.entityId.startsWith("weather.")), a = X(() => n.entityId.startsWith("light.")), c = /* @__PURE__ */ new Set(["on", "off", "open", "closed", "locked", "unlocked", "home", "away"]), u = X(() => !n.state || a.value || r.value ? !1 : c.has(n.state.state)), h = X(() => {
      if (!n.state) return !1;
      const U = n.state.state;
      if (U === "on" || U === "home" || U === "open" || U === "unlocked") return !0;
      const G = parseFloat(U);
      return !isNaN(G) && G > 0;
    }), _ = /* @__PURE__ */ W(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), m = /* @__PURE__ */ W(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    Ot(() => n.entityId, (U) => {
      _.value = localStorage.getItem(`ha_title_${U}`) ?? "", m.value = localStorage.getItem(`ha_showtitle_${U}`) !== "false";
    });
    const N = X(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), T = /* @__PURE__ */ W(!1), P = /* @__PURE__ */ W(""), k = /* @__PURE__ */ W(""), v = /* @__PURE__ */ W(!0), C = /* @__PURE__ */ W(null), O = /* @__PURE__ */ W([]), V = /* @__PURE__ */ W([]), ee = /* @__PURE__ */ W(-1);
    async function ae() {
      try {
        O.value = await Pu(n.token);
      } catch {
      }
    }
    function ce() {
      ee.value = -1;
      const U = P.value.trim().toLowerCase();
      if (!U) {
        V.value = [];
        return;
      }
      V.value = O.value.filter(
        (G) => G.entity_id.toLowerCase().includes(U) || (G.attributes.friendly_name ?? "").toLowerCase().includes(U)
      ).slice(0, 8);
    }
    function R() {
      V.value.length && (ee.value = (ee.value + 1) % V.value.length);
    }
    function F() {
      V.value.length && (ee.value = (ee.value - 1 + V.value.length) % V.value.length);
    }
    function f(U) {
      P.value = U, V.value = [], ee.value = -1;
    }
    function x() {
      ee.value >= 0 && V.value[ee.value] ? f(V.value[ee.value].entity_id) : Y();
    }
    function j() {
      P.value = n.entityId, k.value = _.value, v.value = m.value, V.value = [], ee.value = -1, T.value = !0, ae(), ms(() => {
        var U;
        return (U = C.value) == null ? void 0 : U.select();
      });
    }
    function Y() {
      const U = P.value.trim();
      if (U) {
        const G = k.value.trim();
        localStorage.setItem(`ha_title_${U}`, G), localStorage.setItem(`ha_showtitle_${U}`, String(v.value)), Rl(), U === n.entityId && (_.value = G, m.value = v.value), s("change-entity", U);
      }
      V.value = [], T.value = !1;
    }
    function ue() {
      V.value = [], T.value = !1;
    }
    function fe() {
      T.value = !1, s("remove");
    }
    function pe(U) {
      const G = U.target.closest(".card");
      if (!G) return;
      const be = G.getBoundingClientRect(), Re = "touches" in U ? U.touches[0].clientX : U.clientX, Ne = "touches" in U ? U.touches[0].clientY : U.clientY, Yt = be.width, an = be.height, qt = 120;
      document.body.style.userSelect = "none";
      function ze(De) {
        const lt = "touches" in De ? De.touches[0].clientX : De.clientX, mt = "touches" in De ? De.touches[0].clientY : De.clientY, Xt = Yt + (lt - Re), d = an + (mt - Ne), g = Math.max(1, Math.min(6, Math.round((Xt + 20) / qt))), b = Math.max(1, Math.min(6, Math.round((d + 20) / qt)));
        G.style.gridColumn = `span ${g}`, G.style.gridRow = `span ${b}`, G.dataset.previewCols = String(g), G.dataset.previewRows = String(b);
      }
      function et() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", ze), document.removeEventListener("mouseup", et), document.removeEventListener("touchmove", ze), document.removeEventListener("touchend", et);
        const De = parseInt(G.dataset.previewCols || String(n.cols)), lt = parseInt(G.dataset.previewRows || String(n.rows));
        delete G.dataset.previewCols, delete G.dataset.previewRows, (De !== n.cols || lt !== n.rows) && s("resize", De, lt);
      }
      document.addEventListener("mousemove", ze), document.addEventListener("mouseup", et), document.addEventListener("touchmove", ze), document.addEventListener("touchend", et);
    }
    return (U, G) => ($(), A("div", {
      class: ke(["card", { active: h.value, small: o.value, short: i.value, narrow: l.value }])
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
      m.value ? ($(), A("div", lf, [
        p("span", rf, J(_.value || N.value), 1)
      ])) : oe("", !0),
      ($(), Le(Et, { to: "body" }, [
        T.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: se(ue, ["self"])
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: G[3] || (G[3] = se(() => {
            }, ["stop"]))
          }, [
            G[7] || (G[7] = p("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            p("div", af, [
              p("div", uf, [
                gt(p("input", {
                  ref_key: "inputRef",
                  ref: C,
                  "onUpdate:modelValue": G[0] || (G[0] = (be) => P.value = be),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: ce,
                  onKeydown: [
                    Te(se(x, ["prevent"]), ["enter"]),
                    Te(ue, ["escape"]),
                    Te(se(R, ["prevent"]), ["arrow-down"]),
                    Te(se(F, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, cf), [
                  [vt, P.value]
                ]),
                V.value.length ? ($(), A("ul", ff, [
                  ($(!0), A(ie, null, Ue(V.value, (be, Re) => ($(), A("li", {
                    key: be.entity_id,
                    class: ke(["ha-modal-suggestion-item", { active: Re === ee.value }]),
                    onMousedown: se((Ne) => f(be.entity_id), ["prevent"])
                  }, [
                    p("span", hf, J(be.entity_id), 1),
                    p("span", pf, J(be.attributes.friendly_name ?? ""), 1)
                  ], 42, df))), 128))
                ])) : oe("", !0)
              ]),
              gt(p("input", {
                "onUpdate:modelValue": G[1] || (G[1] = (be) => k.value = be),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Te(se(Y, ["prevent"]), ["enter"]),
                  Te(ue, ["escape"])
                ]
              }, null, 40, gf), [
                [vt, k.value]
              ])
            ]),
            p("div", vf, [
              G[6] || (G[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: ke(["ha-toggle", { on: v.value }]),
                onClick: G[2] || (G[2] = (be) => v.value = !v.value),
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
                onClick: Y
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                title: "Abbrechen",
                onClick: ue
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: fe
            }, "Card entfernen")
          ])
        ])) : oe("", !0)
      ])),
      e.loading ? ($(), A("div", mf, [...G[9] || (G[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? ($(), A("div", yf, [
        G[10] || (G[10] = p("span", null, "⚠️", -1)),
        St(" " + J(e.error), 1)
      ])) : r.value ? ($(), Le(Ic, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: _.value || N.value,
        "custom-title": _.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? ($(), Le(Jc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? ($(), Le(Qc, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : ($(), Le(of, {
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
        onMousedown: se(pe, ["prevent"]),
        onTouchstart: se(pe, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), bf = /* @__PURE__ */ Ze(_f, [["__scopeId", "data-v-7965fac9"]]), wf = { class: "heading-content" }, $f = { class: "ha-modal-header-row" }, kf = { class: "ha-modal-fields" }, Sf = ["onKeydown"], xf = { class: "ha-modal-actions" }, Cf = /* @__PURE__ */ Qe({
  __name: "HeadingCard",
  props: {
    label: {},
    cols: { default: 3 },
    rows: { default: 1 }
  },
  emits: ["update-label", "remove", "resize"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ W(!1), i = /* @__PURE__ */ W(""), l = /* @__PURE__ */ W(null);
    function r() {
      i.value = n.label, o.value = !0, ms(() => {
        var T;
        return (T = l.value) == null ? void 0 : T.select();
      });
    }
    function a() {
      o.value = !1;
      const T = i.value.trim();
      T && T !== n.label && s("update-label", T);
    }
    function c() {
      o.value = !1;
    }
    const u = /* @__PURE__ */ W(!1), h = /* @__PURE__ */ W("");
    function _() {
      h.value = n.label, u.value = !0;
    }
    function m() {
      const T = h.value.trim();
      T && T !== n.label && s("update-label", T), u.value = !1;
    }
    function N(T) {
      const P = T.target.closest(".heading");
      if (!P) return;
      const k = P.getBoundingClientRect(), v = "touches" in T ? T.touches[0].clientX : T.clientX, C = "touches" in T ? T.touches[0].clientY : T.clientY, O = k.width, V = k.height, ee = 120;
      document.body.style.userSelect = "none";
      function ae(R) {
        const F = "touches" in R ? R.touches[0].clientX : R.clientX, f = "touches" in R ? R.touches[0].clientY : R.clientY, x = O + (F - v), j = V + (f - C), Y = Math.max(1, Math.min(12, Math.round((x + 20) / ee))), ue = Math.max(1, Math.min(4, Math.round((j + 20) / ee)));
        P.style.gridColumn = `span ${Y}`, P.style.gridRow = `span ${ue}`, P.dataset.previewCols = String(Y), P.dataset.previewRows = String(ue);
      }
      function ce() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", ae), document.removeEventListener("mouseup", ce), document.removeEventListener("touchmove", ae), document.removeEventListener("touchend", ce);
        const R = parseInt(P.dataset.previewCols ?? "") || n.cols, F = parseInt(P.dataset.previewRows ?? "") || n.rows;
        delete P.dataset.previewCols, delete P.dataset.previewRows, P.style.gridColumn = "", P.style.gridRow = "", s("resize", R, F);
      }
      document.addEventListener("mousemove", ae), document.addEventListener("mouseup", ce), document.addEventListener("touchmove", ae, { passive: !1 }), document.addEventListener("touchend", ce);
    }
    return (T, P) => ($(), A("div", {
      class: ke(["heading", { short: e.rows === 1 }])
    }, [
      p("div", wf, [
        o.value ? gt(($(), A("input", {
          key: 1,
          ref_key: "inputRef",
          ref: l,
          "onUpdate:modelValue": P[0] || (P[0] = (k) => i.value = k),
          class: "heading-input",
          onBlur: a,
          onKeydown: [
            Te(a, ["enter"]),
            Te(c, ["escape"])
          ]
        }, null, 544)), [
          [vt, i.value]
        ]) : ($(), A("h2", {
          key: 0,
          class: "heading-text",
          onDblclick: r
        }, J(e.label), 33)),
        P[8] || (P[8] = p("hr", { class: "heading-line" }, null, -1))
      ]),
      p("button", {
        class: "heading-edit-btn",
        onClick: se(_, ["stop"]),
        title: "Bearbeiten"
      }, [...P[9] || (P[9] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      ($(), Le(Et, { to: "body" }, [
        u.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: P[7] || (P[7] = se((k) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: P[6] || (P[6] = se(() => {
            }, ["stop"]))
          }, [
            p("div", $f, [
              P[10] || (P[10] = p("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: P[1] || (P[1] = (k) => u.value = !1)
              }, "✕")
            ]),
            p("div", kf, [
              gt(p("input", {
                "onUpdate:modelValue": P[2] || (P[2] = (k) => h.value = k),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Te(se(m, ["prevent"]), ["enter"]),
                  P[3] || (P[3] = Te((k) => u.value = !1, ["escape"]))
                ]
              }, null, 40, Sf), [
                [vt, h.value]
              ])
            ]),
            p("div", xf, [
              p("button", {
                class: "ha-modal-btn confirm",
                onClick: m
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                onClick: P[4] || (P[4] = (k) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: P[5] || (P[5] = (k) => {
                T.$emit("remove"), u.value = !1;
              })
            }, " Überschrift entfernen ")
          ])
        ])) : oe("", !0)
      ])),
      p("div", {
        class: "resize-handle",
        onMousedown: se(N, ["prevent"]),
        onTouchstart: se(N, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Tf = /* @__PURE__ */ Ze(Cf, [["__scopeId", "data-v-7a388668"]]), Nl = /* @__PURE__ */ new Map();
function Ef() {
  for (const [, e] of Nl)
    e.reload();
}
function $o(e) {
  const { cache: t, version: n } = wo();
  function s() {
    try {
      const h = localStorage.getItem(`ha_group_${e.key}`);
      if (h) {
        const _ = JSON.parse(h);
        return {
          included: Array.isArray(_.included) ? _.included : [],
          excluded: Array.isArray(_.excluded) ? _.excluded : []
        };
      }
    } catch {
    }
    return { included: [], excluded: [] };
  }
  const o = /* @__PURE__ */ W(s());
  function i() {
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value)), Rl();
  }
  Nl.set(e.key, {
    reload: () => {
      o.value = s();
    }
  });
  const l = X(() => {
    n.value;
    const h = [];
    for (const [, _] of t)
      e.autoDetect(_) && h.push(_.entity_id);
    return h.sort();
  }), r = X(() => {
    const h = new Set(o.value.excluded), _ = /* @__PURE__ */ new Set();
    for (const m of l.value)
      h.has(m) || _.add(m);
    for (const m of o.value.included)
      _.add(m);
    return [..._].sort();
  }), a = X(() => (n.value, r.value.map((h) => t.get(h)).filter((h) => h != null)));
  function c(h) {
    o.value.included.includes(h) || o.value.included.push(h), o.value.excluded = o.value.excluded.filter((_) => _ !== h), i();
  }
  function u(h) {
    o.value.included = o.value.included.filter((_) => _ !== h), l.value.includes(h) && !o.value.excluded.includes(h) && o.value.excluded.push(h), i();
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
const Mf = { class: "pill-label" }, If = { class: "ha-modal-header-row" }, Af = {
  key: 0,
  class: "ha-modal-empty"
}, Lf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Of = { class: "ha-modal-entity-name" }, Pf = /* @__PURE__ */ Qe({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = $o({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ po(() => t.token)
    }), s = X(() => n.entities.value.filter((r) => r.state === "on")), o = X(() => s.value.length > 0), i = X(() => s.value.length), l = /* @__PURE__ */ W(!1);
    return (r, a) => ($(), A(ie, null, [
      p("button", {
        class: ke(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (c) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", Mf, J(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      ($(), Le(Et, { to: "body" }, [
        l.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = se((c) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", If, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (c) => l.value = !1)
              }, "✕")
            ]),
            Ae(n).entities.value.length ? ($(), A("ul", Lf, [
              ($(!0), A(ie, null, Ue(Ae(n).entities.value, (c) => ($(), A("li", {
                key: c.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", Of, J(c.attributes.friendly_name ?? c.entity_id), 1),
                p("span", {
                  class: ke(["ha-modal-entity-badge", c.state === "on" ? "open" : "closed"])
                }, J(c.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : ($(), A("div", Af, " Keine Sensoren gefunden "))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), Rf = /* @__PURE__ */ Ze(Pf, [["__scopeId", "data-v-4c919921"]]), Nf = { class: "pill-label" }, Df = { class: "ha-modal-header-row" }, Ff = { class: "ha-modal-header-actions" }, Hf = {
  key: 0,
  class: "ha-modal-empty"
}, Bf = {
  key: 1,
  class: "ha-modal-entity-list"
}, jf = { class: "ha-modal-entity-name" }, Kf = ["onClick"], Vf = { class: "ha-modal-input-wrap" }, Wf = ["onKeydown"], Uf = {
  key: 0,
  class: "ha-modal-suggestions"
}, zf = ["onMousedown"], Jf = { class: "ha-modal-s-entity" }, Gf = { class: "ha-modal-s-name" }, Yf = { class: "ha-modal-entity-list" }, qf = { class: "ha-modal-entity-name" }, Xf = ["onClick"], Qf = {
  key: 0,
  class: "ha-modal-empty"
}, Zf = /* @__PURE__ */ Qe({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = $o({
      key: "lights",
      autoDetect: (v) => v.entity_id.startsWith("light."),
      token: /* @__PURE__ */ po(() => t.token)
    }), { cache: s, version: o } = wo(), i = X(() => n.entities.value.filter((v) => v.state === "on")), l = X(() => i.value.length > 0), r = X(() => i.value.length), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(""), h = /* @__PURE__ */ W([]);
    function _() {
      c.value = !c.value, u.value = "", h.value = [];
    }
    function m(v) {
      o.value;
      const C = s.get(v);
      return (C == null ? void 0 : C.attributes.friendly_name) ?? v;
    }
    function N() {
      const v = u.value.trim().toLowerCase();
      if (!v) {
        h.value = [];
        return;
      }
      const C = new Set(n.entityIds.value), O = [];
      o.value;
      for (const [, V] of s)
        if (!C.has(V.entity_id) && (V.entity_id.toLowerCase().includes(v) || (V.attributes.friendly_name ?? "").toLowerCase().includes(v)) && (O.push(V), O.length >= 8))
          break;
      h.value = O;
    }
    function T(v) {
      n.addEntity(v), u.value = "", h.value = [];
    }
    function P() {
      h.value.length && T(h.value[0].entity_id);
    }
    async function k(v) {
      await Ut(t.token, v, "toggle");
    }
    return (v, C) => ($(), A(ie, null, [
      p("button", {
        class: ke(["pill", { active: l.value }]),
        onClick: C[0] || (C[0] = (O) => a.value = !0)
      }, [
        C[6] || (C[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", Nf, J(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      ($(), Le(Et, { to: "body" }, [
        a.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: C[5] || (C[5] = se((O) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: C[4] || (C[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Df, [
              C[8] || (C[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", Ff, [
                p("button", {
                  class: ke(["ha-modal-icon-btn", { active: c.value }]),
                  onClick: _,
                  title: "Bearbeiten"
                }, [...C[7] || (C[7] = [
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
                  onClick: C[1] || (C[1] = (O) => {
                    a.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? ($(), A(ie, { key: 1 }, [
              p("div", Vf, [
                gt(p("input", {
                  "onUpdate:modelValue": C[2] || (C[2] = (O) => u.value = O),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Te(se(P, ["prevent"]), ["enter"]),
                    C[3] || (C[3] = Te((O) => {
                      u.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Wf), [
                  [vt, u.value]
                ]),
                h.value.length ? ($(), A("ul", Uf, [
                  ($(!0), A(ie, null, Ue(h.value, (O) => ($(), A("li", {
                    key: O.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((V) => T(O.entity_id), ["prevent"])
                  }, [
                    p("span", Jf, J(O.entity_id), 1),
                    p("span", Gf, J(O.attributes.friendly_name ?? ""), 1)
                  ], 40, zf))), 128))
                ])) : oe("", !0)
              ]),
              p("ul", Yf, [
                ($(!0), A(ie, null, Ue(Ae(n).entityIds.value, (O) => ($(), A("li", {
                  key: O,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", qf, J(m(O)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (V) => Ae(n).removeEntity(O),
                    title: "Entfernen"
                  }, "✕", 8, Xf)
                ]))), 128))
              ]),
              Ae(n).entityIds.value.length ? oe("", !0) : ($(), A("div", Qf, " Keine Lichter ausgewählt "))
            ], 64)) : ($(), A(ie, { key: 0 }, [
              Ae(n).entities.value.length ? ($(), A("ul", Bf, [
                ($(!0), A(ie, null, Ue(Ae(n).entities.value, (O) => ($(), A("li", {
                  key: O.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", jf, J(O.attributes.friendly_name ?? O.entity_id), 1),
                  p("button", {
                    class: ke(["ha-modal-toggle-btn", O.state === "on" ? "on" : "off"]),
                    onClick: (V) => k(O.entity_id)
                  }, J(O.state === "on" ? "An" : "Aus"), 11, Kf)
                ]))), 128))
              ])) : ($(), A("div", Hf, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), ed = /* @__PURE__ */ Ze(Zf, [["__scopeId", "data-v-10807199"]]), td = { class: "pill-label" }, nd = { class: "ha-modal-header-row" }, sd = { class: "ha-modal-header-actions" }, od = {
  key: 0,
  class: "ha-modal-empty"
}, id = {
  key: 1,
  class: "ha-modal-entity-list"
}, ld = { class: "ha-modal-entity-name" }, rd = { class: "ha-modal-entity-value" }, ad = { class: "ha-modal-input-wrap" }, ud = ["onKeydown"], cd = {
  key: 0,
  class: "ha-modal-suggestions"
}, fd = ["onMousedown"], dd = { class: "ha-modal-s-entity" }, hd = { class: "ha-modal-s-name" }, pd = { class: "ha-modal-entity-list" }, gd = { class: "ha-modal-entity-name" }, vd = ["onClick"], md = {
  key: 0,
  class: "ha-modal-empty"
}, yd = /* @__PURE__ */ Qe({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = $o({
      key: "climate",
      autoDetect: (k) => k.entity_id.startsWith("climate.") || k.entity_id.startsWith("sensor.") && k.attributes.device_class === "temperature",
      token: /* @__PURE__ */ po(() => t.token)
    }), { cache: s, version: o } = wo();
    function i(k) {
      if (k.entity_id.startsWith("climate.")) {
        const C = k.attributes.current_temperature;
        return typeof C == "number" ? C : null;
      }
      const v = parseFloat(k.state);
      return isNaN(v) ? null : v;
    }
    function l(k) {
      const v = i(k);
      if (v === null) return k.state;
      const C = k.attributes.unit_of_measurement ?? "°C";
      return `${v.toFixed(1)} ${C}`;
    }
    const r = X(() => {
      const k = n.entities.value.map(i).filter((O) => O !== null);
      if (!k.length) return "-- °C";
      const v = Math.min(...k), C = Math.max(...k);
      return v === C ? `${v.toFixed(1)} °C` : `${v.toFixed(1)}–${C.toFixed(1)} °C`;
    });
    function a(k) {
      o.value;
      const v = s.get(k);
      return (v == null ? void 0 : v.attributes.friendly_name) ?? k;
    }
    const c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(!1), h = /* @__PURE__ */ W(""), _ = /* @__PURE__ */ W([]);
    function m() {
      u.value = !u.value, h.value = "", _.value = [];
    }
    function N() {
      const k = h.value.trim().toLowerCase();
      if (!k) {
        _.value = [];
        return;
      }
      const v = new Set(n.entityIds.value), C = [];
      o.value;
      for (const [, O] of s)
        if (!v.has(O.entity_id) && (O.entity_id.toLowerCase().includes(k) || (O.attributes.friendly_name ?? "").toLowerCase().includes(k)) && (C.push(O), C.length >= 8))
          break;
      _.value = C;
    }
    function T(k) {
      n.addEntity(k), h.value = "", _.value = [];
    }
    function P() {
      _.value.length && T(_.value[0].entity_id);
    }
    return (k, v) => ($(), A(ie, null, [
      p("button", {
        class: "pill",
        onClick: v[0] || (v[0] = (C) => c.value = !0)
      }, [
        v[6] || (v[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", td, J(r.value), 1)
      ]),
      ($(), Le(Et, { to: "body" }, [
        c.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[5] || (v[5] = se((C) => c.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[4] || (v[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", nd, [
              v[8] || (v[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", sd, [
                p("button", {
                  class: ke(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: m,
                  title: "Bearbeiten"
                }, [...v[7] || (v[7] = [
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
                  onClick: v[1] || (v[1] = (C) => {
                    c.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? ($(), A(ie, { key: 1 }, [
              p("div", ad, [
                gt(p("input", {
                  "onUpdate:modelValue": v[2] || (v[2] = (C) => h.value = C),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Te(se(P, ["prevent"]), ["enter"]),
                    v[3] || (v[3] = Te((C) => {
                      h.value = "", _.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, ud), [
                  [vt, h.value]
                ]),
                _.value.length ? ($(), A("ul", cd, [
                  ($(!0), A(ie, null, Ue(_.value, (C) => ($(), A("li", {
                    key: C.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((O) => T(C.entity_id), ["prevent"])
                  }, [
                    p("span", dd, J(C.entity_id), 1),
                    p("span", hd, J(C.attributes.friendly_name ?? ""), 1)
                  ], 40, fd))), 128))
                ])) : oe("", !0)
              ]),
              p("ul", pd, [
                ($(!0), A(ie, null, Ue(Ae(n).entityIds.value, (C) => ($(), A("li", {
                  key: C,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", gd, J(a(C)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (O) => Ae(n).removeEntity(C),
                    title: "Entfernen"
                  }, "✕", 8, vd)
                ]))), 128))
              ]),
              Ae(n).entityIds.value.length ? oe("", !0) : ($(), A("div", md, " Keine Sensoren ausgewählt "))
            ], 64)) : ($(), A(ie, { key: 0 }, [
              Ae(n).entities.value.length ? ($(), A("ul", id, [
                ($(!0), A(ie, null, Ue(Ae(n).entities.value, (C) => ($(), A("li", {
                  key: C.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", ld, J(C.attributes.friendly_name ?? C.entity_id), 1),
                  p("span", rd, J(l(C)), 1)
                ]))), 128))
              ])) : ($(), A("div", od, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), _d = /* @__PURE__ */ Ze(yd, [["__scopeId", "data-v-2665ddcd"]]), bd = { class: "pill-label" }, wd = { class: "ha-modal-header-row" }, $d = {
  key: 0,
  class: "ha-modal-empty"
}, kd = {
  key: 1,
  class: "ha-modal-entity-list"
}, Sd = { class: "notif-header" }, xd = { class: "notif-title" }, Cd = { class: "notif-time" }, Td = {
  key: 0,
  class: "notif-message"
}, Ed = ["onClick"], Md = /* @__PURE__ */ Qe({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ W([]), s = /* @__PURE__ */ W(!1);
    let o = null;
    async function i() {
      try {
        const a = new WebSocket(Ll()), c = await new Promise((u, h) => {
          let _ = 1;
          a.onmessage = (m) => {
            const N = JSON.parse(m.data);
            if (N.type === "auth_required") {
              a.send(JSON.stringify({ type: "auth", access_token: t.token }));
              return;
            }
            if (N.type === "auth_ok") {
              const T = _++;
              a.send(JSON.stringify({ id: T, type: "persistent_notification/get" }));
              return;
            }
            N.type === "result" && (a.close(), N.success && Array.isArray(N.result) ? u(N.result) : u([]));
          }, a.onerror = () => {
            a.close(), u([]);
          }, setTimeout(() => {
            a.close(), u([]);
          }, 5e3);
        });
        n.value = c.sort(
          (u, h) => new Date(h.created_at).getTime() - new Date(u.created_at).getTime()
        );
      } catch {
        n.value = [];
      }
    }
    async function l(a) {
      try {
        await fetch(Ss("/api/services/persistent_notification/dismiss"), {
          method: "POST",
          headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ notification_id: a })
        }), n.value = n.value.filter((c) => c.notification_id !== a), n.value.length === 0 && (s.value = !1);
      } catch {
      }
    }
    function r(a) {
      const c = new Date(a), h = Math.round(((/* @__PURE__ */ new Date()).getTime() - c.getTime()) / 6e4);
      if (h < 1) return "Gerade eben";
      if (h < 60) return `Vor ${h} Min.`;
      const _ = Math.round(h / 60);
      return _ < 24 ? `Vor ${_} Stunde${_ > 1 ? "n" : ""}` : `Vor ${Math.round(_ / 24)} Tag${Math.round(_ / 24) > 1 ? "en" : ""}`;
    }
    return En(() => {
      i(), o = setInterval(i, 3e4);
    }), Mn(() => {
      o && clearInterval(o);
    }), (a, c) => ($(), A(ie, null, [
      n.value.length ? ($(), A("button", {
        key: 0,
        class: "pill",
        onClick: c[0] || (c[0] = (u) => s.value = !0)
      }, [
        c[4] || (c[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", bd, J(n.value.length), 1)
      ])) : oe("", !0),
      ($(), Le(Et, { to: "body" }, [
        s.value ? ($(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: c[3] || (c[3] = se((u) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: c[2] || (c[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", wd, [
              c[5] || (c[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: c[1] || (c[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? ($(), A("ul", kd, [
              ($(!0), A(ie, null, Ue(n.value, (u) => ($(), A("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                p("div", Sd, [
                  p("span", xd, J(u.title || u.message), 1),
                  p("span", Cd, J(r(u.created_at)), 1)
                ]),
                u.title && u.message ? ($(), A("p", Td, J(u.message), 1)) : oe("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (h) => l(u.notification_id)
                }, "Löschen", 8, Ed)
              ]))), 128))
            ])) : ($(), A("div", $d, " Keine Benachrichtigungen "))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), Id = /* @__PURE__ */ Ze(Md, [["__scopeId", "data-v-a643a4ed"]]), Ad = {
  key: 1,
  class: "dashboard"
}, Ld = { class: "dashboard-header" }, Od = { class: "header-left" }, Pd = { class: "header-right" }, Rd = { class: "clock" }, Nd = { class: "clock-time" }, Dd = { class: "clock-date" }, Fd = { class: "page-tabs" }, Hd = { class: "page-tabs-inner" }, Bd = ["onClick", "onDblclick", "onTouchstartPassive"], jd = {
  key: 1,
  class: "page-tab-label"
}, Kd = { class: "ha-modal-header-row" }, Vd = { class: "page-delete-text" }, Wd = { class: "page-delete-actions" }, Ud = { class: "burger-wrap" }, zd = { class: "burger-auth-actions" }, pi = 120, Jd = 36, Gd = 32, Yd = /* @__PURE__ */ Qe({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var de;
    e.panelMode && Il(!0);
    const n = /* @__PURE__ */ W(localStorage.getItem("ha_token")), s = Au(), o = X(() => Mu() ? s.value : n.value), i = Lu(), l = X(() => Ou(o.value ?? void 0)), r = /* @__PURE__ */ W(i.value ?? ""), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ ps({}), u = /* @__PURE__ */ new Map();
    function h() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function _() {
      try {
        const y = localStorage.getItem("ha_pages");
        if (y) {
          const w = JSON.parse(y);
          if (Array.isArray(w) && w.length)
            return w.map((S) => ({
              id: S.id,
              name: S.name || "Seite",
              cards: (S.cards || []).map((te) => ({
                id: te.id,
                type: te.type ?? "card",
                entityId: te.entityId ?? "",
                label: te.label,
                cols: te.cols ?? 2,
                rows: te.rows ?? 2,
                gridCol: te.gridCol,
                gridRow: te.gridRow
              }))
            }));
        }
      } catch {
      }
      try {
        const y = localStorage.getItem("ha_cards");
        if (y) {
          const w = JSON.parse(y).map((S) => ({
            id: S.id,
            entityId: S.entityId,
            cols: S.cols ?? (S.size === "small" ? 1 : 2),
            rows: S.rows ?? (S.size === "small" ? 1 : 2)
          }));
          return [{ id: h(), name: "Home", cards: w }];
        }
      } catch {
      }
      return [{ id: h(), name: "Home", cards: [{ id: h(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const m = /* @__PURE__ */ W([]), N = /* @__PURE__ */ W(""), T = X(() => m.value.find((y) => y.id === N.value) ?? m.value[0]), P = X(() => {
      var y;
      return ((y = T.value) == null ? void 0 : y.cards) ?? [];
    });
    function k() {
      return {
        pages: m.value,
        authKey: i.value ?? null,
        activePage: N.value,
        ...to()
      };
    }
    function v() {
      localStorage.setItem("ha_pages", JSON.stringify(m.value)), localStorage.setItem("ha_active_page", N.value), Qn(k());
    }
    function C(y) {
      if (N.value !== y) {
        for (const w of P.value) be(w.id);
        N.value = y, localStorage.setItem("ha_active_page", y);
        for (const w of P.value)
          w.type !== "heading" && G(w.id, w.entityId);
      }
    }
    function O() {
      const y = h(), w = m.value.length + 1;
      m.value = [...m.value, { id: y, name: `Seite ${w}`, cards: [] }], v(), C(y);
    }
    const V = /* @__PURE__ */ W(null), ee = X(() => {
      const y = m.value.find((w) => w.id === V.value);
      return (y == null ? void 0 : y.name) ?? "";
    }), ae = X(() => {
      const y = m.value.find((w) => w.id === V.value);
      return (y == null ? void 0 : y.cards.length) ?? 0;
    });
    function ce(y) {
      m.value.length <= 1 || (V.value = y);
    }
    function R() {
      const y = V.value;
      if (V.value = null, !y || m.value.length <= 1) return;
      const w = m.value.find((S) => S.id === y);
      if (w)
        for (const S of w.cards) be(S.id);
      if (m.value = m.value.filter((S) => S.id !== y), N.value === y) {
        N.value = m.value[0].id, localStorage.setItem("ha_active_page", N.value);
        for (const S of P.value)
          S.type !== "heading" && G(S.id, S.entityId);
      }
      v();
    }
    let F = null;
    function f(y) {
      F = setTimeout(() => {
        F = null, fe(y);
      }, 600);
    }
    function x() {
      F && (clearTimeout(F), F = null);
    }
    const j = /* @__PURE__ */ W(null), Y = /* @__PURE__ */ W(""), ue = /* @__PURE__ */ W(null);
    function fe(y) {
      const w = m.value.find((S) => S.id === y);
      w && (j.value = y, Y.value = w.name, ms(() => {
        ue.value && ue.value.length && (ue.value[0].focus(), ue.value[0].select());
      }));
    }
    function pe() {
      if (!j.value) return;
      const y = m.value.find((w) => w.id === j.value);
      y && Y.value.trim() && (y.name = Y.value.trim(), m.value = [...m.value], v()), j.value = null;
    }
    function U() {
      j.value = null;
    }
    function G(y, w) {
      if (u.has(y)) return;
      const S = ju(w);
      u.set(y, S), c[y] = { state: null, loading: !0, error: null }, Ot(S.state, (te) => {
        c[y] && (c[y].state = te);
      }), Ot(S.loading, (te) => {
        c[y] && (c[y].loading = te);
      }), Ot(S.error, (te) => {
        c[y] && (c[y].error = te);
      }), o.value && S.start(o.value);
    }
    function be(y) {
      const w = u.get(y);
      w && (w.stop(), u.delete(y)), delete c[y];
    }
    const Re = _();
    m.value = Re;
    const Ne = localStorage.getItem("ha_active_page");
    N.value = ((de = Re.find((y) => y.id === Ne)) == null ? void 0 : de.id) ?? Re[0].id;
    for (const y of P.value)
      y.type !== "heading" && G(y.id, y.entityId);
    Ot(o, (y, w) => {
      if (y && !w)
        for (const [, S] of u) S.start(y);
    }), Ru((y) => {
      var re, Ce;
      if ((re = y == null ? void 0 : y.pages) != null && re.length) {
        for (const $e of P.value) be($e.id);
        m.value = y.pages.map(($e) => ({
          id: $e.id,
          name: $e.name || "Seite",
          cards: ($e.cards || []).map((tt) => ({
            id: tt.id,
            type: tt.type ?? "card",
            entityId: tt.entityId ?? "",
            label: tt.label,
            cols: tt.cols ?? 2,
            rows: tt.rows ?? 2,
            gridCol: tt.gridCol,
            gridRow: tt.gridRow
          }))
        }));
        const Ye = y.activePage ?? localStorage.getItem("ha_active_page");
        N.value = ((Ce = m.value.find(($e) => $e.id === Ye)) == null ? void 0 : Ce.id) ?? m.value[0].id, localStorage.setItem("ha_pages", JSON.stringify(m.value)), localStorage.setItem("ha_active_page", N.value);
        for (const $e of P.value)
          $e.type !== "heading" && G($e.id, $e.entityId);
      }
      if (y != null && y.authKey && (r.value = y.authKey), y != null && y.groups && Object.keys(y.groups).length) {
        for (const [Ye, $e] of Object.entries(y.groups))
          localStorage.setItem(`ha_group_${Ye}`, JSON.stringify($e));
        Ef();
      }
      if (y != null && y.cardSettings && Object.keys(y.cardSettings).length)
        for (const [Ye, $e] of Object.entries(y.cardSettings))
          $e.title !== void 0 && localStorage.setItem(`ha_title_${Ye}`, $e.title), $e.showTitle !== void 0 && localStorage.setItem(`ha_showtitle_${Ye}`, String($e.showTitle));
      const w = to(), S = (y == null ? void 0 : y.groups) && Object.keys(y.groups).length > 0, te = w.groups && Object.keys(w.groups).length > 0, ge = (y == null ? void 0 : y.pages) && y.pages.length > 0, Ke = m.value.length > 0;
      (!S && te || !ge && Ke) && Qn(k());
    });
    function Yt() {
      const y = h(), w = "sensor.wohnzimmer_soll_temperatur", S = T.value;
      S && (S.cards = [...S.cards, { id: y, type: "card", entityId: w, cols: 2, rows: 2 }], m.value = [...m.value], G(y, w), v());
    }
    function an() {
      const y = h(), w = T.value;
      w && (w.cards = [...w.cards, { id: y, type: "heading", entityId: "", label: "Überschrift", cols: 4, rows: 1 }], m.value = [...m.value], v());
    }
    function qt(y, w) {
      const S = T.value;
      if (!S) return;
      const te = S.cards.find((ge) => ge.id === y);
      te && (te.label = w, m.value = [...m.value], v());
    }
    function ze(y) {
      be(y);
      const w = T.value;
      w && (w.cards = w.cards.filter((S) => S.id !== y), m.value = [...m.value], v());
    }
    function et(y) {
      n.value = y;
      for (const [, w] of u) w.start(y);
    }
    function De(y, w) {
      const S = T.value;
      if (!S) return;
      const te = S.cards.find((Ke) => Ke.id === y);
      if (!te) return;
      te.entityId = w;
      const ge = u.get(y);
      ge && o.value && ge.start(o.value, w), m.value = [...m.value], v();
    }
    function lt(y, w, S) {
      const te = T.value;
      if (!te) return;
      const ge = te.cards.find((Ke) => Ke.id === y);
      ge && (ge.cols = w, ge.rows = S, m.value = [...m.value], v());
    }
    function mt() {
      for (const [y] of u) be(y);
      m.value = [{ id: h(), name: "Home", cards: [] }], N.value = m.value[0].id, Hu(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), localStorage.removeItem("ha_auth_key"), Bs(null), r.value = "", n.value = null;
    }
    const Xt = /* @__PURE__ */ W(null), d = /* @__PURE__ */ W(null), g = /* @__PURE__ */ W(null), b = /* @__PURE__ */ W(1), L = /* @__PURE__ */ W(1), E = /* @__PURE__ */ W(2), M = /* @__PURE__ */ W(2);
    function B(y) {
      const w = y.gridCol ? `${y.gridCol} / span ${y.cols}` : `span ${y.cols}`, S = y.gridRow ? `${y.gridRow} / span ${y.rows}` : `span ${y.rows}`;
      return { gridColumn: w, gridRow: S };
    }
    const H = X(() => ({
      gridColumn: `${b.value} / span ${E.value}`,
      gridRow: `${L.value} / span ${M.value}`
    }));
    function D(y, w) {
      const S = y.target;
      if (S.closest(".edit-ctrl-btn") || S.closest(".resize-handle") || S.closest("button") || S.closest("input")) return;
      const te = S.closest("[data-card-id]") ?? S, ge = te.getBoundingClientRect(), Ke = "touches" in y ? y.touches[0].clientX : y.clientX, re = "touches" in y ? y.touches[0].clientY : y.clientY, Ce = Ke - ge.left, Ye = re - ge.top;
      let $e = !1;
      const tt = P.value.find((It) => It.id === w);
      if (!tt) return;
      const un = tt;
      function Fn(It) {
        const xs = "touches" in It ? It.touches[0].clientX : It.clientX, Cs = "touches" in It ? It.touches[0].clientY : It.clientY;
        if (!$e) {
          const Bn = xs - Ke, Ts = Cs - re;
          if (Math.abs(Bn) < 5 && Math.abs(Ts) < 5) return;
          $e = !0, d.value = w, E.value = un.cols, M.value = un.rows;
          const Ve = te.cloneNode(!0);
          Ve.classList.add("drag-ghost"), Ve.style.position = "fixed", Ve.style.width = ge.width + "px", Ve.style.height = ge.height + "px", Ve.style.zIndex = "1000", Ve.style.pointerEvents = "none", Ve.style.opacity = "0.85", Ve.style.transform = "scale(1.04)", Ve.style.transition = "none", Ve.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Ve), g.value = Ve, te.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (g.value && (g.value.style.left = xs - Ce + "px", g.value.style.top = Cs - Ye + "px"), Xt.value) {
          const Bn = Xt.value.getBoundingClientRect(), Ts = xs - Ce - Bn.left - Gd + ge.width / 2, Ve = Cs - Ye - Bn.top - Jd + ge.height / 2, Dl = Math.max(1, Math.round(Ts / pi)), Fl = Math.max(1, Math.round(Ve / pi));
          b.value = Dl, L.value = Fl;
        }
      }
      function Hn() {
        document.removeEventListener("mousemove", Fn), document.removeEventListener("mouseup", Hn), document.removeEventListener("touchmove", Fn), document.removeEventListener("touchend", Hn), document.body.style.userSelect = "", $e && (g.value && (g.value.remove(), g.value = null), te.style.opacity = "", un && (un.gridCol = b.value, un.gridRow = L.value, m.value = [...m.value], v()), d.value = null);
      }
      document.addEventListener("mousemove", Fn), document.addEventListener("mouseup", Hn), document.addEventListener("touchmove", Fn, { passive: !1 }), document.addEventListener("touchend", Hn);
    }
    function I() {
      const y = r.value.trim();
      Bs(y || null), a.value = !1, Qn(k());
    }
    const z = /* @__PURE__ */ W(!1);
    function K(y) {
      z.value && (z.value = !1);
    }
    En(() => document.addEventListener("click", K)), Mn(() => document.removeEventListener("click", K));
    const q = /* @__PURE__ */ W(""), Z = /* @__PURE__ */ W("");
    function le() {
      const y = /* @__PURE__ */ new Date();
      q.value = y.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), Z.value = y.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let ye;
    return En(() => {
      le(), ye = setInterval(le, 1e3);
    }), Mn(() => {
      for (const [y] of u) be(y);
      clearInterval(ye);
    }), (y, w) => ($(), A("div", null, [
      !o.value && !e.panelMode ? ($(), Le(Eu, {
        key: 0,
        onToken: et
      })) : ($(), A("div", Ad, [
        p("header", Ld, [
          p("div", Od, [
            Ee(Rf, { token: l.value }, null, 8, ["token"]),
            Ee(ed, { token: l.value }, null, 8, ["token"]),
            Ee(_d, { token: l.value }, null, 8, ["token"]),
            Ee(Id, { token: l.value }, null, 8, ["token"])
          ]),
          p("div", Pd, [
            p("div", Rd, [
              p("span", Nd, J(q.value), 1),
              p("span", Dd, J(Z.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: Xt,
          class: "dashboard-main"
        }, [
          ($(!0), A(ie, null, Ue(P.value, (S) => {
            var te, ge, Ke;
            return $(), A(ie, {
              key: S.id
            }, [
              S.type === "heading" ? ($(), Le(Tf, {
                key: 0,
                "data-card-id": S.id,
                style: Rt(B(S)),
                class: ke({ "card-dragging": d.value === S.id }),
                label: S.label || "Überschrift",
                cols: S.cols,
                rows: S.rows,
                onUpdateLabel: (re) => qt(S.id, re),
                onRemove: (re) => ze(S.id),
                onResize: (re, Ce) => lt(S.id, re, Ce),
                onMousedown: (re) => D(re, S.id),
                onTouchstart: (re) => D(re, S.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : ($(), Le(bf, {
                key: 1,
                "data-card-id": S.id,
                style: Rt(B(S)),
                class: ke({ "card-dragging": d.value === S.id }),
                "entity-id": S.entityId,
                token: l.value,
                cols: S.cols,
                rows: S.rows,
                state: ((te = c[S.id]) == null ? void 0 : te.state) ?? null,
                loading: ((ge = c[S.id]) == null ? void 0 : ge.loading) ?? !0,
                error: ((Ke = c[S.id]) == null ? void 0 : Ke.error) ?? null,
                onChangeEntity: (re) => De(S.id, re),
                onRemove: (re) => ze(S.id),
                onResize: (re, Ce) => lt(S.id, re, Ce),
                onMousedown: (re) => D(re, S.id),
                onTouchstart: (re) => D(re, S.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          d.value ? ($(), A("div", {
            key: 0,
            class: "drop-placeholder",
            style: Rt(H.value)
          }, null, 4)) : oe("", !0)
        ], 512),
        p("nav", Fd, [
          p("div", Hd, [
            ($(!0), A(ie, null, Ue(m.value, (S, te) => ($(), A("button", {
              key: S.id,
              class: ke(["page-tab", { active: N.value === S.id }]),
              onClick: (ge) => C(S.id),
              onDblclick: (ge) => fe(S.id),
              onTouchstartPassive: (ge) => f(S.id),
              onTouchend: x,
              onTouchmove: x
            }, [
              j.value === S.id ? gt(($(), A("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: ue,
                "onUpdate:modelValue": w[0] || (w[0] = (ge) => Y.value = ge),
                class: "page-tab-input",
                onBlur: pe,
                onKeydown: [
                  Te(pe, ["enter"]),
                  Te(U, ["escape"])
                ],
                onClick: w[1] || (w[1] = se(() => {
                }, ["stop"]))
              }, null, 544)), [
                [vt, Y.value]
              ]) : ($(), A("span", jd, J(S.name), 1))
            ], 42, Bd))), 128))
          ])
        ]),
        ($(), Le(Et, { to: "body" }, [
          V.value ? ($(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: w[5] || (w[5] = se((S) => V.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: w[4] || (w[4] = se(() => {
              }, ["stop"]))
            }, [
              p("div", Kd, [
                w[19] || (w[19] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: w[2] || (w[2] = (S) => V.value = null)
                }, "✕")
              ]),
              p("p", Vd, " „" + J(ee.value) + '" mit ' + J(ae.value) + " Karte" + J(ae.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", Wd, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: w[3] || (w[3] = (S) => V.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: R
                }, "Löschen")
              ])
            ])
          ])) : oe("", !0)
        ])),
        p("div", Ud, [
          p("button", {
            class: "burger-btn",
            onClick: w[6] || (w[6] = se((S) => z.value = !z.value, ["stop"]))
          }, [...w[20] || (w[20] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          Ee(Ua, { name: "burger-pop" }, {
            default: Ui(() => [
              z.value ? ($(), A("div", {
                key: 0,
                class: "burger-menu",
                onClick: w[18] || (w[18] = se(() => {
                }, ["stop"]))
              }, [
                p("button", {
                  class: "burger-item",
                  onClick: w[7] || (w[7] = (S) => {
                    Yt(), z.value = !1;
                  })
                }, [...w[21] || (w[21] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  St(" Karte hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[8] || (w[8] = (S) => {
                    an(), z.value = !1;
                  })
                }, [...w[22] || (w[22] = [
                  p("span", { class: "burger-item-icon" }, "H", -1),
                  St(" Überschrift hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[9] || (w[9] = (S) => {
                    O(), z.value = !1;
                  })
                }, [...w[23] || (w[23] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  St(" Neue Seite ", -1)
                ])]),
                m.value.length > 1 ? ($(), A("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: w[10] || (w[10] = (S) => {
                    ce(N.value), z.value = !1;
                  })
                }, [...w[24] || (w[24] = [
                  p("span", { class: "burger-item-icon" }, "✕", -1),
                  St(" Seite löschen ", -1)
                ])])) : oe("", !0),
                w[27] || (w[27] = p("div", { class: "burger-divider" }, null, -1)),
                p("button", {
                  class: "burger-item burger-item-muted",
                  onClick: w[11] || (w[11] = (S) => a.value = !a.value)
                }, [
                  w[25] || (w[25] = p("span", { class: "burger-item-icon" }, "🔑", -1)),
                  St(" Auth Key " + J(Ae(i) ? "✓" : ""), 1)
                ]),
                a.value ? ($(), A("div", {
                  key: 1,
                  class: "burger-auth-key",
                  onClick: w[16] || (w[16] = se(() => {
                  }, ["stop"]))
                }, [
                  gt(p("input", {
                    "onUpdate:modelValue": w[12] || (w[12] = (S) => r.value = S),
                    class: "burger-auth-input",
                    type: "password",
                    placeholder: "Long-Lived Access Token",
                    onKeydown: w[13] || (w[13] = Te((S) => I(), ["enter"]))
                  }, null, 544), [
                    [vt, r.value]
                  ]),
                  p("div", zd, [
                    p("button", {
                      class: "burger-auth-save",
                      onClick: w[14] || (w[14] = (S) => I())
                    }, "Speichern"),
                    Ae(i) ? ($(), A("button", {
                      key: 0,
                      class: "burger-auth-clear",
                      onClick: w[15] || (w[15] = (S) => {
                        r.value = "", Ae(Bs)(null);
                      })
                    }, "Löschen")) : oe("", !0)
                  ])
                ])) : oe("", !0),
                e.panelMode ? oe("", !0) : ($(), A(ie, { key: 2 }, [
                  w[26] || (w[26] = p("div", { class: "burger-divider" }, null, -1)),
                  p("button", {
                    class: "burger-item burger-item-muted",
                    onClick: w[17] || (w[17] = (S) => {
                      mt(), z.value = !1;
                    })
                  }, " Abmelden ")
                ], 64))
              ])) : oe("", !0)
            ]),
            _: 1
          })
        ])
      ]))
    ]));
  }
}), qd = /* @__PURE__ */ Ze(Yd, [["__scopeId", "data-v-a9eb5409"]]);
class Xd extends HTMLElement {
  constructor() {
    super(...arguments);
    ko(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && Iu(s), !this._app && s) {
      Il(!0);
      const l = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const c = document.createElement("style");
          c.textContent = a.textContent, l.appendChild(c);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", l.appendChild(r), this._app = yu(qd, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", Xd);
