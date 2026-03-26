(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-7965fac9]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-7965fac9]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-7965fac9]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-7965fac9]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-7965fac9]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-7965fac9]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-7965fac9]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-7965fac9]{opacity:1}.edit-ctrl-btn[data-v-7965fac9]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-7965fac9]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-7965fac9]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-7965fac9]{width:2px;height:2px}.dot[data-v-7965fac9]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-7965fac9]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-7965fac9]{justify-content:center;padding:16px 0}.state.error[data-v-7965fac9]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-7965fac9]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-7965fac9 .8s linear infinite}@keyframes spin-7965fac9{to{transform:rotate(360deg)}}.card.narrow[data-v-7965fac9]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-7965fac9]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-7965fac9]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-7965fac9]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-7965fac9]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-7965fac9]{width:18px;height:18px;border-width:2px}.card.small[data-v-7965fac9]:after{bottom:-12px;height:18px}.card.short[data-v-7965fac9]{padding:14px 16px 12px}.card.short .label[data-v-7965fac9]{font-size:.6rem}.resize-handle[data-v-7965fac9]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7965fac9]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-7965fac9]{opacity:1}.ha-toggle-row[data-v-7965fac9]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-7965fac9]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-7965fac9]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-7965fac9]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-7965fac9]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-7965fac9]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-7a388668]{display:flex;align-items:flex-end;padding:0 2px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-7a388668]{align-items:flex-end}.heading-content[data-v-7a388668]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;gap:4px}.heading-text[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-7a388668]{font-size:1rem}.heading-line[data-v-7a388668]{border:none;height:2px;background:#d2d8e0;margin:0;width:100%;border-radius:1px}.heading-input[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-7a388668]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-7a388668]{opacity:1}.heading-edit-btn[data-v-7a388668]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-7a388668]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-7a388668]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-7a388668]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7a388668]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-7a388668]{opacity:1}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-f2d0a479]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-f2d0a479]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-f2d0a479]{display:flex;align-items:center;gap:10px}.app-name[data-v-f2d0a479]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-f2d0a479]{display:flex;align-items:center}.clock[data-v-f2d0a479]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-f2d0a479]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-f2d0a479]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-f2d0a479]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-f2d0a479] .card{width:auto;min-height:unset}.dashboard-main[data-v-f2d0a479] .heading{max-height:50px;align-self:end}.page-tabs[data-v-f2d0a479]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-f2d0a479]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-f2d0a479]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-f2d0a479]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-f2d0a479]:not(.active):hover{color:#718096}.page-tab-label[data-v-f2d0a479]{white-space:nowrap}.page-tab-input[data-v-f2d0a479]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-f2d0a479]{max-width:340px}.page-delete-text[data-v-f2d0a479]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-f2d0a479]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-f2d0a479],.page-delete-confirm[data-v-f2d0a479]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-f2d0a479]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-f2d0a479]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-f2d0a479]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-f2d0a479]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-f2d0a479]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-f2d0a479]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-f2d0a479]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-f2d0a479]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-f2d0a479]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-f2d0a479]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-f2d0a479]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-f2d0a479],.burger-pop-leave-to[data-v-f2d0a479]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-f2d0a479]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-f2d0a479]:hover{background:#0000000a}.burger-item-icon[data-v-f2d0a479]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-f2d0a479],.burger-item-danger .burger-item-icon[data-v-f2d0a479]{color:#e53e3e}.burger-item-muted[data-v-f2d0a479]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-f2d0a479]{height:1px;background:#d2d8e0;margin:4px 14px}.burger-auth-key[data-v-f2d0a479]{padding:6px 14px 10px}.burger-auth-input[data-v-f2d0a479]{width:100%;padding:6px 10px;border:none;border-radius:8px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.75rem;color:#2d3748;outline:none;box-sizing:border-box}.burger-auth-actions[data-v-f2d0a479]{display:flex;gap:6px;margin-top:6px}.burger-auth-save[data-v-f2d0a479],.burger-auth-clear[data-v-f2d0a479]{padding:4px 12px;border:none;border-radius:8px;font-size:.72rem;font-weight:600;cursor:pointer;background:#e8ecf1;color:#2d3748;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.burger-auth-save[data-v-f2d0a479]:active,.burger-auth-clear[data-v-f2d0a479]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.burger-auth-clear[data-v-f2d0a479]{color:#e53e3e}.card-dragging[data-v-f2d0a479]{opacity:.25}.drop-placeholder[data-v-f2d0a479]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var Dl = Object.defineProperty;
var Fl = (e, t, n) => t in e ? Dl(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var $o = (e, t, n) => Fl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function eo(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const be = {}, Zt = [], ct = () => {
}, pi = () => !1, rs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), to = (e) => e.startsWith("onUpdate:"), Me = Object.assign, no = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Hl = Object.prototype.hasOwnProperty, me = (e, t) => Hl.call(e, t), Q = Array.isArray, en = (e) => On(e) === "[object Map]", gi = (e) => On(e) === "[object Set]", ko = (e) => On(e) === "[object Date]", se = (e) => typeof e == "function", xe = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", vi = (e) => (ve(e) || se(e)) && se(e.then) && se(e.catch), mi = Object.prototype.toString, On = (e) => mi.call(e), Bl = (e) => On(e).slice(8, -1), yi = (e) => On(e) === "[object Object]", as = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, gn = /* @__PURE__ */ eo(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), us = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, jl = /-\w/g, Ze = us(
  (e) => e.replace(jl, (t) => t.slice(1).toUpperCase())
), Kl = /\B([A-Z])/g, Rt = us(
  (e) => e.replace(Kl, "-$1").toLowerCase()
), _i = us((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = us(
  (e) => e ? `on${_i(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Un = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, so = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Vl = (e) => {
  const t = xe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let So;
const cs = () => So || (So = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lt(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = xe(s) ? Jl(s) : Lt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (xe(e) || ve(e))
    return e;
}
const Wl = /;(?![^(]*\))/g, Ul = /:([^]+)/, zl = /\/\*[^]*?\*\//g;
function Jl(e) {
  const t = {};
  return e.replace(zl, "").split(Wl).forEach((n) => {
    if (n) {
      const s = n.split(Ul);
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
const Gl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Yl = /* @__PURE__ */ eo(Gl);
function wi(e) {
  return !!e || e === "";
}
function ql(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = oo(e[s], t[s]);
  return n;
}
function oo(e, t) {
  if (e === t) return !0;
  let n = ko(e), s = ko(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), s = ft(t), n || s)
    return e === t;
  if (n = Q(e), s = Q(t), n || s)
    return n && s ? ql(e, t) : !1;
  if (n = ve(e), s = ve(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !oo(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const $i = (e) => !!(e && e.__v_isRef === !0), J = (e) => xe(e) ? e : e == null ? "" : Q(e) || ve(e) && (e.toString === mi || !se(e.toString)) ? $i(e) ? J(e.value) : JSON.stringify(e, ki, 2) : String(e), ki = (e, t) => $i(t) ? ki(e, t.value) : en(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Ts(s, i) + " =>"] = o, n),
    {}
  )
} : gi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ts(n))
} : ft(t) ? Ts(t) : ve(t) && !Q(t) && !yi(t) ? String(t) : t, Ts = (e, t = "") => {
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
let Ve;
class Xl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = Ve, !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(
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
      const n = Ve;
      try {
        return Ve = this, t();
      } finally {
        Ve = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = Ve, Ve = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (Ve = this.prevScope, this.prevScope = void 0);
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
function Ql() {
  return Ve;
}
let $e;
const Es = /* @__PURE__ */ new WeakSet();
class Si {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ve && Ve.active && Ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Es.has(this) && (Es.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ci(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, xo(this), Ti(this);
    const t = $e, n = et;
    $e = this, et = !0;
    try {
      return this.fn();
    } finally {
      Ei(this), $e = t, et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ro(t);
      this.deps = this.depsTail = void 0, xo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Es.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Hs(this) && this.run();
  }
  get dirty() {
    return Hs(this);
  }
}
let xi = 0, vn, mn;
function Ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = mn, mn = e;
    return;
  }
  e.next = vn, vn = e;
}
function io() {
  xi++;
}
function lo() {
  if (--xi > 0)
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
function Ti(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ei(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), ro(s), Zl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Hs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Mi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Mi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Sn) || (e.globalVersion = Sn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Hs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $e, s = et;
  $e = e, et = !0;
  try {
    Ti(e);
    const o = e.fn(e._value);
    (t.version === 0 || ut(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    $e = n, et = s, Ei(e), e.flags &= -3;
  }
}
function ro(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      ro(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Zl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const Ii = [];
function $t() {
  Ii.push(et), et = !1;
}
function kt() {
  const e = Ii.pop();
  et = e === void 0 ? !0 : e;
}
function xo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = $e;
    $e = void 0;
    try {
      t();
    } finally {
      $e = n;
    }
  }
}
let Sn = 0;
class er {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ao {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$e || !et || $e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e)
      n = this.activeLink = new er($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, Ai(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = $e.depsTail, n.nextDep = void 0, $e.depsTail.nextDep = n, $e.depsTail = n, $e.deps === n && ($e.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, Sn++, this.notify(t);
  }
  notify(t) {
    io();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      lo();
    }
  }
}
function Ai(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ai(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Xn = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ Symbol(
  ""
), Bs = /* @__PURE__ */ Symbol(
  ""
), xn = /* @__PURE__ */ Symbol(
  ""
);
function Oe(e, t, n) {
  if (et && $e) {
    let s = Xn.get(e);
    s || Xn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new ao()), o.map = s, o.key = n), o.track();
  }
}
function _t(e, t, n, s, o, i) {
  const l = Xn.get(e);
  if (!l) {
    Sn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (io(), t === "clear")
    l.forEach(r);
  else {
    const a = Q(e), c = a && as(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((h, m) => {
        (m === "length" || m === xn || !ft(m) && m >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), c && r(l.get(xn)), t) {
        case "add":
          a ? c && r(l.get("length")) : (r(l.get(Vt)), en(e) && r(l.get(Bs)));
          break;
        case "delete":
          a || (r(l.get(Vt)), en(e) && r(l.get(Bs)));
          break;
        case "set":
          en(e) && r(l.get(Vt));
          break;
      }
  }
  lo();
}
function tr(e, t) {
  const n = Xn.get(e);
  return n && n.get(t);
}
function qt(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Oe(t, "iterate", xn), /* @__PURE__ */ Je(e) ? t : t.map(tt));
}
function fs(e) {
  return Oe(e = /* @__PURE__ */ pe(e), "iterate", xn), e;
}
function rt(e, t) {
  return /* @__PURE__ */ St(e) ? on(/* @__PURE__ */ Wt(e) ? tt(t) : t) : tt(t);
}
const nr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Ms(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return qt(this).concat(
      ...e.map((t) => Q(t) ? qt(t) : t)
    );
  },
  entries() {
    return Ms(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
  },
  every(e, t) {
    return gt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return gt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return gt(
      this,
      "find",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return gt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return gt(
      this,
      "findLast",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return gt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return gt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Is(this, "includes", e);
  },
  indexOf(...e) {
    return Is(this, "indexOf", e);
  },
  join(e) {
    return qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Is(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return cn(this, "pop");
  },
  push(...e) {
    return cn(this, "push", e);
  },
  reduce(e, ...t) {
    return Co(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Co(this, "reduceRight", e, t);
  },
  shift() {
    return cn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return cn(this, "splice", e);
  },
  toReversed() {
    return qt(this).toReversed();
  },
  toSorted(e) {
    return qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return cn(this, "unshift", e);
  },
  values() {
    return Ms(this, "values", (e) => rt(this, e));
  }
};
function Ms(e, t, n) {
  const s = fs(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const sr = Array.prototype;
function gt(e, t, n, s, o, i) {
  const l = fs(e), r = l !== e && !/* @__PURE__ */ Je(e), a = l[t];
  if (a !== sr[t]) {
    const h = a.apply(e, i);
    return r ? tt(h) : h;
  }
  let c = n;
  l !== e && (r ? c = function(h, m) {
    return n.call(this, rt(e, h), m, e);
  } : n.length > 2 && (c = function(h, m) {
    return n.call(this, h, m, e);
  }));
  const u = a.call(l, c, s);
  return r && o ? o(u) : u;
}
function Co(e, t, n, s) {
  const o = fs(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(c, u, h) {
    return r && (r = !1, c = rt(e, c)), n.call(this, c, rt(e, u), h, e);
  }) : n.length > 3 && (l = function(c, u, h) {
    return n.call(this, c, u, h, e);
  }));
  const a = o[t](l, ...s);
  return r ? rt(e, a) : a;
}
function Is(e, t, n) {
  const s = /* @__PURE__ */ pe(e);
  Oe(s, "iterate", xn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ hs(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), s[t](...n)) : o;
}
function cn(e, t, n = []) {
  $t(), io();
  const s = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return lo(), kt(), s;
}
const or = /* @__PURE__ */ eo("__proto__,__v_isRef,__isVue"), Li = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function ir(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Oe(t, "has", e), t.hasOwnProperty(e);
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
      return s === (o ? i ? gr : Di : i ? Ni : Ri).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = Q(t);
    if (!o) {
      let a;
      if (l && (a = nr[n]))
        return a;
      if (n === "hasOwnProperty")
        return ir;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ee(t) ? t : s
    );
    if ((ft(n) ? Li.has(n) : or(n)) || (o || Oe(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ Ee(r)) {
      const a = l && as(n) ? r : r.value;
      return o && ve(a) ? /* @__PURE__ */ Ks(a) : a;
    }
    return ve(r) ? o ? /* @__PURE__ */ Ks(r) : /* @__PURE__ */ ds(r) : r;
  }
}
class Oi extends Pi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = Q(t) && as(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ St(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ St(s) && (i = /* @__PURE__ */ pe(i), s = /* @__PURE__ */ pe(s)), !l && /* @__PURE__ */ Ee(i) && !/* @__PURE__ */ Ee(s))
        return c || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : me(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ee(t) ? t : o
    );
    return t === /* @__PURE__ */ pe(o) && (r ? ut(s, i) && _t(t, "set", n, s) : _t(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = me(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && _t(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ft(n) || !Li.has(n)) && Oe(t, "has", n), s;
  }
  ownKeys(t) {
    return Oe(
      t,
      "iterate",
      Q(t) ? "length" : Vt
    ), Reflect.ownKeys(t);
  }
}
class lr extends Pi {
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
const rr = /* @__PURE__ */ new Oi(), ar = /* @__PURE__ */ new lr(), ur = /* @__PURE__ */ new Oi(!0);
const js = (e) => e, Bn = (e) => Reflect.getPrototypeOf(e);
function cr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ pe(o), l = en(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, c = o[e](...s), u = n ? js : t ? on : tt;
    return !t && Oe(
      i,
      "iterate",
      a ? Bs : Vt
    ), Me(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = c.next();
          return m ? { value: h, done: m } : {
            value: r ? [u(h[0]), u(h[1])] : u(h),
            done: m
          };
        }
      }
    );
  };
}
function jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function fr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), r = /* @__PURE__ */ pe(o);
      e || (ut(o, r) && Oe(l, "get", o), Oe(l, "get", r));
      const { has: a } = Bn(l), c = t ? js : e ? on : tt;
      if (a.call(l, o))
        return c(i.get(o));
      if (a.call(l, r))
        return c(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Oe(/* @__PURE__ */ pe(o), "iterate", Vt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), r = /* @__PURE__ */ pe(o);
      return e || (ut(o, r) && Oe(l, "has", o), Oe(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ pe(r), c = t ? js : e ? on : tt;
      return !e && Oe(a, "iterate", Vt), r.forEach((u, h) => o.call(i, c(u), c(h), l));
    }
  };
  return Me(
    n,
    e ? {
      add: jn("add"),
      set: jn("set"),
      delete: jn("delete"),
      clear: jn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ pe(this), l = Bn(i), r = /* @__PURE__ */ pe(o), a = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ St(o) ? r : o;
        return l.has.call(i, a) || ut(o, a) && l.has.call(i, o) || ut(r, a) && l.has.call(i, r) || (i.add(a), _t(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ St(i) && (i = /* @__PURE__ */ pe(i));
        const l = /* @__PURE__ */ pe(this), { has: r, get: a } = Bn(l);
        let c = r.call(l, o);
        c || (o = /* @__PURE__ */ pe(o), c = r.call(l, o));
        const u = a.call(l, o);
        return l.set(o, i), c ? ut(i, u) && _t(l, "set", o, i) : _t(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ pe(this), { has: l, get: r } = Bn(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ pe(o), a = l.call(i, o)), r && r.call(i, o);
        const c = i.delete(o);
        return a && _t(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ pe(this), i = o.size !== 0, l = o.clear();
        return i && _t(
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
    n[o] = cr(o, e, t);
  }), n;
}
function uo(e, t) {
  const n = fr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    me(n, o) && o in s ? n : s,
    o,
    i
  );
}
const dr = {
  get: /* @__PURE__ */ uo(!1, !1)
}, hr = {
  get: /* @__PURE__ */ uo(!1, !0)
}, pr = {
  get: /* @__PURE__ */ uo(!0, !1)
};
const Ri = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap();
function vr(e) {
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
function mr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : vr(Bl(e));
}
// @__NO_SIDE_EFFECTS__
function ds(e) {
  return /* @__PURE__ */ St(e) ? e : co(
    e,
    !1,
    rr,
    dr,
    Ri
  );
}
// @__NO_SIDE_EFFECTS__
function yr(e) {
  return co(
    e,
    !1,
    ur,
    hr,
    Ni
  );
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return co(
    e,
    !0,
    ar,
    pr,
    Di
  );
}
function co(e, t, n, s, o) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = mr(e);
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
function Wt(e) {
  return /* @__PURE__ */ St(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function St(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function hs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function _r(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && bi(e, "__v_skip", !0), e;
}
const tt = (e) => ve(e) ? /* @__PURE__ */ ds(e) : e, on = (e) => ve(e) ? /* @__PURE__ */ Ks(e) : e;
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  return br(e, !1);
}
function br(e, t) {
  return /* @__PURE__ */ Ee(e) ? e : new wr(e, t);
}
class wr {
  constructor(t, n) {
    this.dep = new ao(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ St(t);
    t = s ? t : /* @__PURE__ */ pe(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : tt(t), this.dep.trigger());
  }
}
function Ae(e) {
  return /* @__PURE__ */ Ee(e) ? e.value : e;
}
const $r = {
  get: (e, t, n) => t === "__v_raw" ? e : Ae(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Ee(o) && !/* @__PURE__ */ Ee(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Fi(e) {
  return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, $r);
}
class kr {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ pe(t);
    let o = !0, i = t;
    if (!Q(t) || !as(String(n)))
      do
        o = !/* @__PURE__ */ hs(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ae(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Ee(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Ee(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return tr(this._raw, this._key);
  }
}
class Sr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function fo(e, t, n) {
  return /* @__PURE__ */ Ee(e) ? e : se(e) ? new Sr(e) : ve(e) && arguments.length > 1 ? xr(e, t, n) : /* @__PURE__ */ W(e);
}
function xr(e, t, n) {
  return new kr(e, t, n);
}
class Cr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new ao(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Sn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $e !== this)
      return Ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Mi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Tr(e, t, n = !1) {
  let s, o;
  return se(e) ? s = e : (s = e.get, o = e.set), new Cr(s, o, n);
}
const Kn = {}, Qn = /* @__PURE__ */ new WeakMap();
let Bt;
function Er(e, t = !1, n = Bt) {
  if (n) {
    let s = Qn.get(n);
    s || Qn.set(n, s = []), s.push(e);
  }
}
function Mr(e, t, n = be) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, c = (P) => o ? P : /* @__PURE__ */ Je(P) || o === !1 || o === 0 ? bt(P, 1) : bt(P);
  let u, h, m, y, N = !1, T = !1;
  if (/* @__PURE__ */ Ee(e) ? (h = () => e.value, N = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ Wt(e) ? (h = () => c(e), N = !0) : Q(e) ? (T = !0, N = e.some((P) => /* @__PURE__ */ Wt(P) || /* @__PURE__ */ Je(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ Ee(P))
      return P.value;
    if (/* @__PURE__ */ Wt(P))
      return c(P);
    if (se(P))
      return a ? a(P, 2) : P();
  })) : se(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      $t();
      try {
        m();
      } finally {
        kt();
      }
    }
    const P = Bt;
    Bt = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Bt = P;
    }
  } : h = ct, t && o) {
    const P = h, V = o === !0 ? 1 / 0 : o;
    h = () => bt(P(), V);
  }
  const O = Ql(), S = () => {
    u.stop(), O && O.active && no(O.effects, u);
  };
  if (i && t) {
    const P = t;
    t = (...V) => {
      P(...V), S();
    };
  }
  let v = T ? new Array(e.length).fill(Kn) : Kn;
  const C = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const V = u.run();
        if (o || N || (T ? V.some((ee, ae) => ut(ee, v[ae])) : ut(V, v))) {
          m && m();
          const ee = Bt;
          Bt = u;
          try {
            const ae = [
              V,
              // pass undefined as the old value when it's changed for the first time
              v === Kn ? void 0 : T && v[0] === Kn ? [] : v,
              y
            ];
            v = V, a ? a(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Bt = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(C), u = new Si(h), u.scheduler = l ? () => l(C, !1) : C, y = (P) => Er(P, !1, u), m = u.onStop = () => {
    const P = Qn.get(u);
    if (P) {
      if (a)
        a(P, 4);
      else
        for (const V of P) V();
      Qn.delete(u);
    }
  }, t ? s ? C(!0) : v = u.run() : l ? l(C.bind(null, !0), !0) : u.run(), S.pause = u.pause.bind(u), S.resume = u.resume.bind(u), S.stop = S, S;
}
function bt(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ee(e))
    bt(e.value, t, n);
  else if (Q(e))
    for (let s = 0; s < e.length; s++)
      bt(e[s], t, n);
  else if (gi(e) || en(e))
    e.forEach((s) => {
      bt(s, t, n);
    });
  else if (yi(e)) {
    for (const s in e)
      bt(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && bt(e[s], t, n);
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
    ps(o, t, n);
  }
}
function nt(e, t, n, s) {
  if (se(e)) {
    const o = Rn(e, t, n, s);
    return o && vi(o) && o.catch((i) => {
      ps(i, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(nt(e[i], t, n, s));
    return o;
  }
}
function ps(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || be;
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
      $t(), Rn(i, null, 10, [
        e,
        a,
        c
      ]), kt();
      return;
    }
  }
  Ir(e, n, o, s, l);
}
function Ir(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const He = [];
let it = -1;
const tn = [];
let Mt = null, Xt = 0;
const Hi = /* @__PURE__ */ Promise.resolve();
let Zn = null;
function gs(e) {
  const t = Zn || Hi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ar(e) {
  let t = it + 1, n = He.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = He[s], i = Cn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function ho(e) {
  if (!(e.flags & 1)) {
    const t = Cn(e), n = He[He.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Cn(n) ? He.push(e) : He.splice(Ar(t), 0, e), e.flags |= 1, Bi();
  }
}
function Bi() {
  Zn || (Zn = Hi.then(Ki));
}
function Lr(e) {
  Q(e) ? tn.push(...e) : Mt && e.id === -1 ? Mt.splice(Xt + 1, 0, e) : e.flags & 1 || (tn.push(e), e.flags |= 1), Bi();
}
function To(e, t, n = it + 1) {
  for (; n < He.length; n++) {
    const s = He[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      He.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ji(e) {
  if (tn.length) {
    const t = [...new Set(tn)].sort(
      (n, s) => Cn(n) - Cn(s)
    );
    if (tn.length = 0, Mt) {
      Mt.push(...t);
      return;
    }
    for (Mt = t, Xt = 0; Xt < Mt.length; Xt++) {
      const n = Mt[Xt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Mt = null, Xt = 0;
  }
}
const Cn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ki(e) {
  try {
    for (it = 0; it < He.length; it++) {
      const t = He[it];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Rn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; it < He.length; it++) {
      const t = He[it];
      t && (t.flags &= -2);
    }
    it = -1, He.length = 0, ji(), Zn = null, (He.length || tn.length) && Ki();
  }
}
let Ye = null, Vi = null;
function es(e) {
  const t = Ye;
  return Ye = e, Vi = e && e.type.__scopeId || null, t;
}
function Wi(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && ss(-1);
    const i = es(t);
    let l;
    try {
      l = e(...o);
    } finally {
      es(i), s._d && ss(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function dt(e, t) {
  if (Ye === null)
    return e;
  const n = bs(Ye), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = be] = t[o];
    i && (se(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && bt(l), s.push({
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
function Nt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const r = o[l];
    i && (r.oldValue = i[l].value);
    let a = r.dir[s];
    a && ($t(), nt(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), kt());
  }
}
function Pr(e, t) {
  if (je) {
    let n = je.provides;
    const s = je.parent && je.parent.provides;
    s === n && (n = je.provides = Object.create(s)), n[e] = t;
  }
}
function zn(e, t, n = !1) {
  const s = kl();
  if (s || nn) {
    let o = nn ? nn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && se(t) ? t.call(s && s.proxy) : t;
  }
}
const Or = /* @__PURE__ */ Symbol.for("v-scx"), Rr = () => zn(Or);
function It(e, t, n) {
  return Ui(e, t, n);
}
function Ui(e, t, n = be) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = Me({}, n), a = t && s || !t && i !== "post";
  let c;
  if (An) {
    if (i === "sync") {
      const y = Rr();
      c = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = ct, y.resume = ct, y.pause = ct, y;
    }
  }
  const u = je;
  r.call = (y, N, T) => nt(y, u, N, T);
  let h = !1;
  i === "post" ? r.scheduler = (y) => {
    Pe(y, u && u.suspense);
  } : i !== "sync" && (h = !0, r.scheduler = (y, N) => {
    N ? y() : ho(y);
  }), r.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const m = Mr(e, t, r);
  return An && (c ? c.push(m) : a && m()), m;
}
function Nr(e, t, n) {
  const s = this.proxy, o = xe(e) ? e.includes(".") ? zi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  se(t) ? i = t : (i = t.handler, n = t);
  const l = Nn(this), r = Ui(o, i.bind(s), n);
  return l(), r;
}
function zi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ji = /* @__PURE__ */ Symbol("_vte"), Gi = (e) => e.__isTeleport, yn = (e) => e && (e.disabled || e.disabled === ""), Eo = (e) => e && (e.defer || e.defer === ""), Mo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Io = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Vs = (e, t) => {
  const n = e && e.to;
  return xe(n) ? t ? t(n) : null : n;
}, Yi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, c) {
    const {
      mc: u,
      pc: h,
      pbc: m,
      o: { insert: y, querySelector: N, createText: T, createComment: O }
    } = c, S = yn(t.props);
    let { shapeFlag: v, children: C, dynamicChildren: P } = t;
    if (e == null) {
      const V = t.el = T(""), ee = t.anchor = T("");
      y(V, n, s), y(ee, n, s);
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
        const R = t.target = Vs(t.props, N), F = Ws(R, t, T, y);
        R && (l !== "svg" && Mo(R) ? l = "svg" : l !== "mathml" && Io(R) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(R), S || (ae(R, F), Jn(t, !1)));
      };
      S && (ae(n, ee), Jn(t, !0)), Eo(t.props) ? (t.el.__isMounted = !1, Pe(() => {
        ce(), delete t.el.__isMounted;
      }, i)) : ce();
    } else {
      if (Eo(t.props) && e.el.__isMounted === !1) {
        Pe(() => {
          Yi.process(
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
      if (l === "svg" || Mo(ee) ? l = "svg" : (l === "mathml" || Io(ee)) && (l = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        R,
        o,
        i,
        l,
        r
      ), vo(e, t, !0)) : a || h(
        e,
        t,
        R,
        F,
        o,
        i,
        l,
        r,
        !1
      ), S)
        ce ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Vn(
          t,
          n,
          V,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const f = t.target = Vs(
          t.props,
          N
        );
        f && Vn(
          t,
          f,
          null,
          c,
          0
        );
      } else ce && Vn(
        t,
        ee,
        ae,
        c,
        1
      );
      Jn(t, S);
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
      props: m
    } = e;
    if (h && (o(c), o(u)), i && o(a), l & 16) {
      const y = i || !yn(m);
      for (let N = 0; N < r.length; N++) {
        const T = r[N];
        s(
          T,
          t,
          n,
          y,
          !!T.dynamicChildren
        );
      }
    }
  },
  move: Vn,
  hydrate: Dr
};
function Vn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: c, props: u } = e, h = i === 2;
  if (h && s(l, t, n), (!h || yn(u)) && a & 16)
    for (let m = 0; m < c.length; m++)
      o(
        c[m],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function Dr(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: c, createText: u }
}, h) {
  function m(O, S) {
    let v = S;
    for (; v; ) {
      if (v && v.nodeType === 8) {
        if (v.data === "teleport start anchor")
          t.targetStart = v;
        else if (v.data === "teleport anchor") {
          t.targetAnchor = v, O._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      v = l(v);
    }
  }
  function y(O, S) {
    S.anchor = h(
      l(O),
      S,
      r(O),
      n,
      s,
      o,
      i
    );
  }
  const N = t.target = Vs(
    t.props,
    a
  ), T = yn(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (T ? (y(e, t), m(N, O), t.targetAnchor || Ws(
      N,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === N ? e : null
    )) : (t.anchor = l(e), m(N, O), t.targetAnchor || Ws(N, t, u, c), h(
      O && l(O),
      t,
      N,
      n,
      s,
      o,
      i
    ))), Jn(t, T);
  } else T && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const xt = Yi;
function Jn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ws(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[Ji] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), fn = /* @__PURE__ */ Symbol("_enterCb");
function Fr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return En(() => {
    e.isMounted = !0;
  }), sl(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ge = [Function, Array], qi = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ge,
  onEnter: Ge,
  onAfterEnter: Ge,
  onEnterCancelled: Ge,
  // leave
  onBeforeLeave: Ge,
  onLeave: Ge,
  onAfterLeave: Ge,
  onLeaveCancelled: Ge,
  // appear
  onBeforeAppear: Ge,
  onAppear: Ge,
  onAfterAppear: Ge,
  onAppearCancelled: Ge
}, Xi = (e) => {
  const t = e.subTree;
  return t.component ? Xi(t.component) : t;
}, Hr = {
  name: "BaseTransition",
  props: qi,
  setup(e, { slots: t }) {
    const n = kl(), s = Fr();
    return () => {
      const o = t.default && el(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Qi(o), l = /* @__PURE__ */ pe(e), { mode: r } = l;
      if (s.isLeaving)
        return As(i);
      const a = Ao(i);
      if (!a)
        return As(i);
      let c = Us(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      a.type !== Be && Tn(a, c);
      let u = n.subTree && Ao(n.subTree);
      if (u && u.type !== Be && !jt(u, a) && Xi(n).type !== Be) {
        let h = Us(
          u,
          l,
          s,
          n
        );
        if (Tn(u, h), r === "out-in" && a.type !== Be)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, As(i);
        r === "in-out" && a.type !== Be ? h.delayLeave = (m, y, N) => {
          const T = Zi(
            s,
            u
          );
          T[String(u.key)] = u, m[lt] = () => {
            y(), m[lt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            N(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function Qi(e) {
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
const Br = Hr;
function Zi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Us(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: m,
    onLeave: y,
    onAfterLeave: N,
    onLeaveCancelled: T,
    onBeforeAppear: O,
    onAppear: S,
    onAfterAppear: v,
    onAppearCancelled: C
  } = t, P = String(e.key), V = Zi(n, e), ee = (R, F) => {
    R && nt(
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
          F = O || a;
        else
          return;
      R[lt] && R[lt](
        !0
        /* cancelled */
      );
      const f = V[P];
      f && jt(e, f) && f.el[lt] && f.el[lt](), ee(F, [R]);
    },
    enter(R) {
      if (V[P] === e) return;
      let F = c, f = u, x = h;
      if (!n.isMounted)
        if (i)
          F = S || c, f = v || u, x = C || h;
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
      ee(m, [R]);
      let x = !1;
      R[lt] = (Y) => {
        x || (x = !0, F(), Y ? ee(T, [R]) : ee(N, [R]), R[lt] = void 0, V[f] === e && delete V[f]);
      };
      const j = R[lt].bind(null, !1);
      V[f] = e, y ? ae(y, [R, j]) : j();
    },
    clone(R) {
      const F = Us(
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
function As(e) {
  if (vs(e))
    return e = Ot(e), e.children = null, e;
}
function Ao(e) {
  if (!vs(e))
    return Gi(e.type) && e.children ? Qi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && se(n.default))
      return n.default();
  }
}
function Tn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Tn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function el(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === le ? (l.patchFlag & 128 && o++, s = s.concat(
      el(l.children, t, r)
    )) : (t || l.type !== Be) && s.push(r != null ? Ot(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function qe(e, t) {
  return se(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Me({ name: e.name }, t, { setup: e })
  ) : e;
}
function tl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Lo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const ts = /* @__PURE__ */ new WeakMap();
function _n(e, t, n, s, o = !1) {
  if (Q(e)) {
    e.forEach(
      (T, O) => _n(
        T,
        t && (Q(t) ? t[O] : t),
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
  const i = s.shapeFlag & 4 ? bs(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, c = t && t.r, u = r.refs === be ? r.refs = {} : r.refs, h = r.setupState, m = /* @__PURE__ */ pe(h), y = h === be ? pi : (T) => Lo(u, T) ? !1 : me(m, T), N = (T, O) => !(O && Lo(u, O));
  if (c != null && c !== a) {
    if (Po(t), xe(c))
      u[c] = null, y(c) && (h[c] = null);
    else if (/* @__PURE__ */ Ee(c)) {
      const T = t;
      N(c, T.k) && (c.value = null), T.k && (u[T.k] = null);
    }
  }
  if (se(a))
    Rn(a, r, 12, [l, u]);
  else {
    const T = xe(a), O = /* @__PURE__ */ Ee(a);
    if (T || O) {
      const S = () => {
        if (e.f) {
          const v = T ? y(a) ? h[a] : u[a] : N() || !e.k ? a.value : u[e.k];
          if (o)
            Q(v) && no(v, i);
          else if (Q(v))
            v.includes(i) || v.push(i);
          else if (T)
            u[a] = [i], y(a) && (h[a] = u[a]);
          else {
            const C = [i];
            N(a, e.k) && (a.value = C), e.k && (u[e.k] = C);
          }
        } else T ? (u[a] = l, y(a) && (h[a] = l)) : O && (N(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const v = () => {
          S(), ts.delete(e);
        };
        v.id = -1, ts.set(e, v), Pe(v, n);
      } else
        Po(e), S();
    }
  }
}
function Po(e) {
  const t = ts.get(e);
  t && (t.flags |= 8, ts.delete(e));
}
cs().requestIdleCallback;
cs().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, vs = (e) => e.type.__isKeepAlive;
function jr(e, t) {
  nl(e, "a", t);
}
function Kr(e, t) {
  nl(e, "da", t);
}
function nl(e, t, n = je) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ms(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      vs(o.parent.vnode) && Vr(s, t, n, o), o = o.parent;
  }
}
function Vr(e, t, n, s) {
  const o = ms(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Mn(() => {
    no(s[t], o);
  }, n);
}
function ms(e, t, n = je, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      $t();
      const r = Nn(n), a = nt(t, n, e, l);
      return r(), kt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const Ct = (e) => (t, n = je) => {
  (!An || e === "sp") && ms(e, (...s) => t(...s), n);
}, Wr = Ct("bm"), En = Ct("m"), Ur = Ct(
  "bu"
), zr = Ct("u"), sl = Ct(
  "bum"
), Mn = Ct("um"), Jr = Ct(
  "sp"
), Gr = Ct("rtg"), Yr = Ct("rtc");
function qr(e, t = je) {
  ms("ec", e, t);
}
const Xr = /* @__PURE__ */ Symbol.for("v-ndc");
function We(e, t, n, s) {
  let o;
  const i = n, l = Q(e);
  if (l || xe(e)) {
    const r = l && /* @__PURE__ */ Wt(e);
    let a = !1, c = !1;
    r && (a = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ St(e), e = fs(e)), o = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      o[u] = t(
        a ? c ? on(tt(e[u])) : tt(e[u]) : e[u],
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
const zs = (e) => e ? Sl(e) ? bs(e) : zs(e.parent) : null, wn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Me(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => zs(e.parent),
    $root: (e) => zs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => il(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      ho(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = gs.bind(e.proxy)),
    $watch: (e) => Nr.bind(e)
  })
), Ls = (e, t) => e !== be && !e.__isScriptSetup && me(e, t), Qr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: i, accessCache: l, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const m = l[t];
      if (m !== void 0)
        switch (m) {
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
        if (Ls(s, t))
          return l[t] = 1, s[t];
        if (o !== be && me(o, t))
          return l[t] = 2, o[t];
        if (me(i, t))
          return l[t] = 3, i[t];
        if (n !== be && me(n, t))
          return l[t] = 4, n[t];
        Js && (l[t] = 0);
      }
    }
    const c = wn[t];
    let u, h;
    if (c)
      return t === "$attrs" && Oe(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== be && me(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, me(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Ls(o, t) ? (o[t] = n, !0) : s !== be && me(s, t) ? (s[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== be && r[0] !== "$" && me(e, r) || Ls(t, r) || me(i, r) || me(s, r) || me(wn, r) || me(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Oo(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Js = !0;
function Zr(e) {
  const t = il(e), n = e.proxy, s = e.ctx;
  Js = !1, t.beforeCreate && Ro(t.beforeCreate, e, "bc");
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
    mounted: m,
    beforeUpdate: y,
    updated: N,
    activated: T,
    deactivated: O,
    beforeDestroy: S,
    beforeUnmount: v,
    destroyed: C,
    unmounted: P,
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
  if (c && ea(c, s, null), l)
    for (const ge in l) {
      const U = l[ge];
      se(U) && (s[ge] = U.bind(n));
    }
  if (o) {
    const ge = o.call(n, n);
    ve(ge) && (e.data = /* @__PURE__ */ ds(ge));
  }
  if (Js = !0, i)
    for (const ge in i) {
      const U = i[ge], G = se(U) ? U.bind(n, n) : se(U.get) ? U.get.bind(n, n) : ct, we = !se(U) && se(U.set) ? U.set.bind(n) : ct, Re = X({
        get: G,
        set: we
      });
      Object.defineProperty(s, ge, {
        enumerable: !0,
        configurable: !0,
        get: () => Re.value,
        set: (Ne) => Re.value = Ne
      });
    }
  if (r)
    for (const ge in r)
      ol(r[ge], s, n, ge);
  if (a) {
    const ge = se(a) ? a.call(n) : a;
    Reflect.ownKeys(ge).forEach((U) => {
      Pr(U, ge[U]);
    });
  }
  u && Ro(u, e, "c");
  function de(ge, U) {
    Q(U) ? U.forEach((G) => ge(G.bind(n))) : U && ge(U.bind(n));
  }
  if (de(Wr, h), de(En, m), de(Ur, y), de(zr, N), de(jr, T), de(Kr, O), de(qr, ce), de(Yr, ee), de(Gr, ae), de(sl, v), de(Mn, P), de(Jr, R), Q(F))
    if (F.length) {
      const ge = e.exposed || (e.exposed = {});
      F.forEach((U) => {
        Object.defineProperty(ge, U, {
          get: () => n[U],
          set: (G) => n[U] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === ct && (e.render = V), f != null && (e.inheritAttrs = f), x && (e.components = x), j && (e.directives = j), R && tl(e);
}
function ea(e, t, n = ct) {
  Q(e) && (e = Gs(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ve(o) ? "default" in o ? i = zn(
      o.from || s,
      o.default,
      !0
    ) : i = zn(o.from || s) : i = zn(o), /* @__PURE__ */ Ee(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Ro(e, t, n) {
  nt(
    Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ol(e, t, n, s) {
  let o = s.includes(".") ? zi(n, s) : () => n[s];
  if (xe(e)) {
    const i = t[e];
    se(i) && It(o, i);
  } else if (se(e))
    It(o, e.bind(n));
  else if (ve(e))
    if (Q(e))
      e.forEach((i) => ol(i, t, n, s));
    else {
      const i = se(e.handler) ? e.handler.bind(n) : t[e.handler];
      se(i) && It(o, i, e);
    }
}
function il(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => ns(a, c, l, !0)
  ), ns(a, t, l)), ve(t) && i.set(t, a), a;
}
function ns(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && ns(e, i, n, !0), o && o.forEach(
    (l) => ns(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = ta[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const ta = {
  data: No,
  props: Do,
  emits: Do,
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
  watch: sa,
  // provide / inject
  provide: No,
  inject: na
};
function No(e, t) {
  return t ? e ? function() {
    return Me(
      se(e) ? e.call(this, this) : e,
      se(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function na(e, t) {
  return hn(Gs(e), Gs(t));
}
function Gs(e) {
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
  return e ? Me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Do(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Me(
    /* @__PURE__ */ Object.create(null),
    Oo(e),
    Oo(t ?? {})
  ) : t;
}
function sa(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Fe(e[s], t[s]);
  return n;
}
function ll() {
  return {
    app: null,
    config: {
      isNativeTag: pi,
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
let oa = 0;
function ia(e, t) {
  return function(s, o = null) {
    se(s) || (s = Me({}, s)), o != null && !ve(o) && (o = null);
    const i = ll(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const c = i.app = {
      _uid: oa++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Da,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return l.has(u) || (u && se(u.install) ? (l.add(u), u.install(c, ...h)) : se(u) && (l.add(u), u(c, ...h))), c;
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
      mount(u, h, m) {
        if (!a) {
          const y = c._ceVNode || Te(s, o);
          return y.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(y, u, m), a = !0, c._container = u, u.__vue_app__ = c, bs(y.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (nt(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, c;
      },
      runWithContext(u) {
        const h = nn;
        nn = c;
        try {
          return u();
        } finally {
          nn = h;
        }
      }
    };
    return c;
  };
}
let nn = null;
const la = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function ra(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || be;
  let o = n;
  const i = t.startsWith("update:"), l = i && la(s, t.slice(7));
  l && (l.trim && (o = n.map((u) => xe(u) ? u.trim() : u)), l.number && (o = n.map(so)));
  let r, a = s[r = Cs(t)] || // also try camelCase event handler (#2249)
  s[r = Cs(Ze(t))];
  !a && i && (a = s[r = Cs(Rt(t))]), a && nt(
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
    e.emitted[r] = !0, nt(
      c,
      e,
      6,
      o
    );
  }
}
const aa = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const s = n ? aa : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!se(e)) {
    const a = (c) => {
      const u = rl(c, t, !0);
      u && (r = !0, Me(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (ve(e) && s.set(e, null), null) : (Q(i) ? i.forEach((a) => l[a] = null) : Me(l, i), ve(e) && s.set(e, l), l);
}
function ys(e, t) {
  return !e || !rs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Rt(t)) || me(e, t));
}
function Fo(e) {
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
    data: m,
    setupState: y,
    ctx: N,
    inheritAttrs: T
  } = e, O = es(e);
  let S, v;
  try {
    if (n.shapeFlag & 4) {
      const P = o || s, V = P;
      S = at(
        c.call(
          V,
          P,
          u,
          h,
          y,
          m,
          N
        )
      ), v = r;
    } else {
      const P = t;
      S = at(
        P.length > 1 ? P(
          h,
          { attrs: r, slots: l, emit: a }
        ) : P(
          h,
          null
        )
      ), v = t.props ? r : ua(r);
    }
  } catch (P) {
    $n.length = 0, ps(P, e, 1), S = Te(Be);
  }
  let C = S;
  if (v && T !== !1) {
    const P = Object.keys(v), { shapeFlag: V } = C;
    P.length && V & 7 && (i && P.some(to) && (v = ca(
      v,
      i
    )), C = Ot(C, v, !1, !0));
  }
  return n.dirs && (C = Ot(C, null, !1, !0), C.dirs = C.dirs ? C.dirs.concat(n.dirs) : n.dirs), n.transition && Tn(C, n.transition), S = C, es(O), S;
}
const ua = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || rs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, ca = (e, t) => {
  const n = {};
  for (const s in e)
    (!to(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function fa(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Ho(s, l, c) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const m = u[h];
        if (al(l, s, m) && !ys(c, m))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? Ho(s, l, c) : !0 : !!l;
  return !1;
}
function Ho(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (al(t, e, i) && !ys(n, i))
      return !0;
  }
  return !1;
}
function al(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ve(s) && ve(o) ? !oo(s, o) : s !== o;
}
function da({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const ul = {}, cl = () => Object.create(ul), fl = (e) => Object.getPrototypeOf(e) === ul;
function ha(e, t, n, s = !1) {
  const o = {}, i = cl();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), dl(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ yr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function pa(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ pe(o), [a] = e.propsOptions;
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
        let m = u[h];
        if (ys(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (a)
          if (me(i, m))
            y !== i[m] && (i[m] = y, c = !0);
          else {
            const N = Ze(m);
            o[N] = Ys(
              a,
              r,
              N,
              y,
              e,
              !1
            );
          }
        else
          y !== i[m] && (i[m] = y, c = !0);
      }
    }
  } else {
    dl(e, t, o, i) && (c = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !me(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Rt(h)) === h || !me(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[h] = Ys(
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
  c && _t(e.attrs, "set", "");
}
function dl(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (gn(a))
        continue;
      const c = t[a];
      let u;
      o && me(o, u = Ze(a)) ? !i || !i.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : ys(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ pe(n), c = r || be;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = Ys(
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
function Ys(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = me(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && se(a)) {
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
    ] && (s === "" || s === Rt(n)) && (s = !0));
  }
  return s;
}
const ga = /* @__PURE__ */ new WeakMap();
function hl(e, t, n = !1) {
  const s = n ? ga : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!se(e)) {
    const u = (h) => {
      a = !0;
      const [m, y] = hl(h, t, !0);
      Me(l, m), y && r.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return ve(e) && s.set(e, Zt), Zt;
  if (Q(i))
    for (let u = 0; u < i.length; u++) {
      const h = Ze(i[u]);
      Bo(h) && (l[h] = be);
    }
  else if (i)
    for (const u in i) {
      const h = Ze(u);
      if (Bo(h)) {
        const m = i[u], y = l[h] = Q(m) || se(m) ? { type: m } : Me({}, m), N = y.type;
        let T = !1, O = !0;
        if (Q(N))
          for (let S = 0; S < N.length; ++S) {
            const v = N[S], C = se(v) && v.name;
            if (C === "Boolean") {
              T = !0;
              break;
            } else C === "String" && (O = !1);
          }
        else
          T = se(N) && N.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = T, y[
          1
          /* shouldCastTrue */
        ] = O, (T || me(y, "default")) && r.push(h);
      }
    }
  const c = [l, r];
  return ve(e) && s.set(e, c), c;
}
function Bo(e) {
  return e[0] !== "$" && !gn(e);
}
const po = (e) => e === "_" || e === "_ctx" || e === "$stable", go = (e) => Q(e) ? e.map(at) : [at(e)], va = (e, t, n) => {
  if (t._n)
    return t;
  const s = Wi((...o) => go(t(...o)), n);
  return s._c = !1, s;
}, pl = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (po(o)) continue;
    const i = e[o];
    if (se(i))
      t[o] = va(o, i, s);
    else if (i != null) {
      const l = go(i);
      t[o] = () => l;
    }
  }
}, gl = (e, t) => {
  const n = go(t);
  e.slots.default = () => n;
}, vl = (e, t, n) => {
  for (const s in t)
    (n || !po(s)) && (e[s] = t[s]);
}, ma = (e, t, n) => {
  const s = e.slots = cl();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (vl(s, t, n), n && bi(s, "_", o, !0)) : pl(t, s);
  } else t && gl(e, t);
}, ya = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = be;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : vl(o, t, n) : (i = !t.$stable, pl(t, o)), l = t;
  } else t && (gl(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !po(r) && l[r] == null && delete o[r];
}, Pe = ka;
function _a(e) {
  return ba(e);
}
function ba(e, t) {
  const n = cs();
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
    nextSibling: m,
    setScopeId: y = ct,
    insertStaticContent: N
  } = e, T = (d, g, b, L = null, E = null, M = null, B = void 0, H = null, D = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !jt(d, g) && (L = Qe(d), Ne(d, E, M, !0), d = null), g.patchFlag === -2 && (D = !1, g.dynamicChildren = null);
    const { type: I, ref: z, shapeFlag: K } = g;
    switch (I) {
      case _s:
        O(d, g, b, L);
        break;
      case Be:
        S(d, g, b, L);
        break;
      case Gn:
        d == null && v(g, b, L, B);
        break;
      case le:
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
          pt
        );
    }
    z != null && E ? _n(z, d && d.ref, M, g || d, !g) : z == null && d && d.ref != null && _n(d.ref, null, M, d, !0);
  }, O = (d, g, b, L) => {
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
  }, S = (d, g, b, L) => {
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
      E = m(d), s(d, b, L), d = E;
    s(g, b, L);
  }, P = ({ el: d, anchor: g }) => {
    let b;
    for (; d && d !== g; )
      b = m(d), o(d), d = b;
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
      Ps(d, M),
      B,
      H
    ), Z && Nt(d, null, L, "created"), ae(D, d, d.scopeId, B, L), z) {
      for (const ye in z)
        ye !== "value" && !gn(ye) && i(D, ye, null, z[ye], M, L);
      "value" in z && i(D, "value", null, z.value, M), (I = z.onVnodeBeforeMount) && ot(I, L, d);
    }
    Z && Nt(d, null, L, "beforeMount");
    const re = wa(E, q);
    re && q.beforeEnter(D), s(D, g, b), ((I = z && z.onVnodeMounted) || re || Z) && Pe(() => {
      I && ot(I, L, d), re && q.enter(D), Z && Nt(d, null, L, "mounted");
    }, E);
  }, ae = (d, g, b, L, E) => {
    if (b && y(d, b), L)
      for (let M = 0; M < L.length; M++)
        y(d, L[M]);
    if (E) {
      let M = E.subTree;
      if (g === M || _l(M.type) && (M.ssContent === g || M.ssFallback === g)) {
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
      const z = d[I] = H ? yt(d[I]) : at(d[I]);
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
    const K = d.props || be, q = g.props || be;
    let Z;
    if (b && Dt(b, !1), (Z = q.onVnodeBeforeUpdate) && ot(Z, b, g, d), z && Nt(g, d, b, "beforeUpdate"), b && Dt(b, !0), (K.innerHTML && q.innerHTML == null || K.textContent && q.textContent == null) && u(H, ""), I ? F(
      d.dynamicChildren,
      I,
      H,
      b,
      L,
      Ps(g, E),
      M
    ) : B || U(
      d,
      g,
      H,
      null,
      b,
      L,
      Ps(g, E),
      M,
      !1
    ), D > 0) {
      if (D & 16)
        f(H, K, q, b, E);
      else if (D & 2 && K.class !== q.class && i(H, "class", null, q.class, E), D & 4 && i(H, "style", K.style, q.style, E), D & 8) {
        const re = g.dynamicProps;
        for (let ye = 0; ye < re.length; ye++) {
          const he = re[ye], _ = K[he], w = q[he];
          (w !== _ || he === "value") && i(H, he, _, w, E, b);
        }
      }
      D & 1 && d.children !== g.children && u(H, g.children);
    } else !B && I == null && f(H, K, q, b, E);
    ((Z = q.onVnodeUpdated) || z) && Pe(() => {
      Z && ot(Z, b, g, d), z && Nt(g, d, b, "updated");
    }, L);
  }, F = (d, g, b, L, E, M, B) => {
    for (let H = 0; H < g.length; H++) {
      const D = d[H], I = g[H], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(D, I) || // - In the case of a component, it could contain anything.
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
      if (g !== be)
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
    (g.key != null || E && g === E.subTree) && vo(
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
    const H = d.component = Ia(
      d,
      L,
      E
    );
    if (vs(d) && (H.ctx.renderer = pt), Aa(H, !1, B), H.asyncDep) {
      if (E && E.registerDep(H, de, B), !d.el) {
        const D = H.subTree = Te(Be);
        S(null, D, g, b), d.placeholder = D.el;
      }
    } else
      de(
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
    if (fa(d, g, b))
      if (L.asyncDep && !L.asyncResolved) {
        ge(L, g, b);
        return;
      } else
        L.next = g, L.update();
    else
      g.el = d.el, L.vnode = g;
  }, de = (d, g, b, L, E, M, B) => {
    const H = () => {
      if (d.isMounted) {
        let { next: K, bu: q, u: Z, parent: re, vnode: ye } = d;
        {
          const te = ml(d);
          if (te) {
            K && (K.el = ye.el, ge(d, K, B)), te.asyncDep.then(() => {
              Pe(() => {
                d.isUnmounted || I();
              }, E);
            });
            return;
          }
        }
        let he = K, _;
        Dt(d, !1), K ? (K.el = ye.el, ge(d, K, B)) : K = ye, q && Un(q), (_ = K.props && K.props.onVnodeBeforeUpdate) && ot(_, re, K, ye), Dt(d, !0);
        const w = Fo(d), $ = d.subTree;
        d.subTree = w, T(
          $,
          w,
          // parent may have changed if it's in a teleport
          h($.el),
          // anchor may have changed if it's in a fragment
          Qe($),
          d,
          E,
          M
        ), K.el = w.el, he === null && da(d, w.el), Z && Pe(Z, E), (_ = K.props && K.props.onVnodeUpdated) && Pe(
          () => ot(_, re, K, ye),
          E
        );
      } else {
        let K;
        const { el: q, props: Z } = g, { bm: re, m: ye, parent: he, root: _, type: w } = d, $ = bn(g);
        Dt(d, !1), re && Un(re), !$ && (K = Z && Z.onVnodeBeforeMount) && ot(K, he, g), Dt(d, !0);
        {
          _.ce && _.ce._hasShadowRoot() && _.ce._injectChildStyle(
            w,
            d.parent ? d.parent.type : void 0
          );
          const te = d.subTree = Fo(d);
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
        if (ye && Pe(ye, E), !$ && (K = Z && Z.onVnodeMounted)) {
          const te = g;
          Pe(
            () => ot(K, he, te),
            E
          );
        }
        (g.shapeFlag & 256 || he && bn(he.vnode) && he.vnode.shapeFlag & 256) && d.a && Pe(d.a, E), d.isMounted = !0, g = b = L = null;
      }
    };
    d.scope.on();
    const D = d.effect = new Si(H);
    d.scope.off();
    const I = d.update = D.run.bind(D), z = d.job = D.runIfDirty.bind(D);
    z.i = d, z.id = d.uid, D.scheduler = () => ho(z), Dt(d, !0), I();
  }, ge = (d, g, b) => {
    g.component = d;
    const L = d.vnode.props;
    d.vnode = g, d.next = null, pa(d, g.props, L, b), ya(d, g.children, b), $t(), To(d), kt();
  }, U = (d, g, b, L, E, M, B, H, D = !1) => {
    const I = d && d.children, z = d ? d.shapeFlag : 0, K = g.children, { patchFlag: q, shapeFlag: Z } = g;
    if (q > 0) {
      if (q & 128) {
        we(
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
    Z & 8 ? (z & 16 && Ue(I, E, M), K !== I && u(b, K)) : z & 16 ? Z & 16 ? we(
      I,
      K,
      b,
      L,
      E,
      M,
      B,
      H,
      D
    ) : Ue(I, E, M, !0) : (z & 8 && u(b, ""), Z & 16 && ce(
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
    d = d || Zt, g = g || Zt;
    const I = d.length, z = g.length, K = Math.min(I, z);
    let q;
    for (q = 0; q < K; q++) {
      const Z = g[q] = D ? yt(g[q]) : at(g[q]);
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
    I > z ? Ue(
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
  }, we = (d, g, b, L, E, M, B, H, D) => {
    let I = 0;
    const z = g.length;
    let K = d.length - 1, q = z - 1;
    for (; I <= K && I <= q; ) {
      const Z = d[I], re = g[I] = D ? yt(g[I]) : at(g[I]);
      if (jt(Z, re))
        T(
          Z,
          re,
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
      const Z = d[K], re = g[q] = D ? yt(g[q]) : at(g[q]);
      if (jt(Z, re))
        T(
          Z,
          re,
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
        const Z = q + 1, re = Z < z ? g[Z].el : L;
        for (; I <= q; )
          T(
            null,
            g[I] = D ? yt(g[I]) : at(g[I]),
            b,
            re,
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
      const Z = I, re = I, ye = /* @__PURE__ */ new Map();
      for (I = re; I <= q; I++) {
        const fe = g[I] = D ? yt(g[I]) : at(g[I]);
        fe.key != null && ye.set(fe.key, I);
      }
      let he, _ = 0;
      const w = q - re + 1;
      let $ = !1, te = 0;
      const ne = new Array(w);
      for (I = 0; I < w; I++) ne[I] = 0;
      for (I = Z; I <= K; I++) {
        const fe = d[I];
        if (_ >= w) {
          Ne(fe, E, M, !0);
          continue;
        }
        let Ie;
        if (fe.key != null)
          Ie = ye.get(fe.key);
        else
          for (he = re; he <= q; he++)
            if (ne[he - re] === 0 && jt(fe, g[he])) {
              Ie = he;
              break;
            }
        Ie === void 0 ? Ne(fe, E, M, !0) : (ne[Ie - re] = I + 1, Ie >= te ? te = Ie : $ = !0, T(
          fe,
          g[Ie],
          b,
          null,
          E,
          M,
          B,
          H,
          D
        ), _++);
      }
      const _e = $ ? $a(ne) : Zt;
      for (he = _e.length - 1, I = w - 1; I >= 0; I--) {
        const fe = re + I, Ie = g[fe], an = g[fe + 1], Yt = fe + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          an.el || yl(an)
        ) : L;
        ne[I] === 0 ? T(
          null,
          Ie,
          b,
          Yt,
          E,
          M,
          B,
          H,
          D
        ) : $ && (he < 0 || I !== _e[he] ? Re(Ie, b, Yt, 2) : he--);
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
      B.move(d, g, b, pt);
      return;
    }
    if (B === le) {
      s(M, g, b);
      for (let K = 0; K < D.length; K++)
        Re(D[K], g, b, L);
      s(d.anchor, g, b);
      return;
    }
    if (B === Gn) {
      C(d, g, b);
      return;
    }
    if (L !== 2 && I & 1 && H)
      if (L === 0)
        H.beforeEnter(M), s(M, g, b), Pe(() => H.enter(M), E);
      else {
        const { leave: K, delayLeave: q, afterLeave: Z } = H, re = () => {
          d.ctx.isUnmounted ? o(M) : s(M, g, b);
        }, ye = () => {
          M._isLeaving && M[lt](
            !0
            /* cancelled */
          ), K(M, () => {
            re(), Z && Z();
          });
        };
        q ? q(M, re, ye) : ye();
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
    if (K === -2 && (E = !1), H != null && ($t(), _n(H, null, b, d, !0), kt()), Z != null && (g.renderCache[Z] = void 0), z & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const re = z & 1 && q, ye = !bn(d);
    let he;
    if (ye && (he = B && B.onVnodeBeforeUnmount) && ot(he, g, d), z & 6)
      Jt(d.component, b, L);
    else {
      if (z & 128) {
        d.suspense.unmount(b, L);
        return;
      }
      re && Nt(d, null, g, "beforeUnmount"), z & 64 ? d.type.remove(
        d,
        g,
        b,
        pt,
        L
      ) : I && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !I.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== le || K > 0 && K & 64) ? Ue(
        I,
        g,
        b,
        !1,
        !0
      ) : (M === le && K & 384 || !E && z & 16) && Ue(D, g, b), L && zt(d);
    }
    (ye && (he = B && B.onVnodeUnmounted) || re) && Pe(() => {
      he && ot(he, g, d), re && Nt(d, null, g, "unmounted");
    }, b);
  }, zt = (d) => {
    const { type: g, el: b, anchor: L, transition: E } = d;
    if (g === le) {
      rn(b, L);
      return;
    }
    if (g === Gn) {
      P(d);
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
  }, rn = (d, g) => {
    let b;
    for (; d !== g; )
      b = m(d), o(d), d = b;
    o(g);
  }, Jt = (d, g, b) => {
    const { bum: L, scope: E, job: M, subTree: B, um: H, m: D, a: I } = d;
    jo(D), jo(I), L && Un(L), E.stop(), M && (M.flags |= 8, Ne(B, d, g, b)), H && Pe(H, g), Pe(() => {
      d.isUnmounted = !0;
    }, g);
  }, Ue = (d, g, b, L = !1, E = !1, M = 0) => {
    for (let B = M; B < d.length; B++)
      Ne(d[B], g, b, L, E);
  }, Qe = (d) => {
    if (d.shapeFlag & 6)
      return Qe(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const g = m(d.anchor || d.el), b = g && g[Ji];
    return b ? m(b) : g;
  };
  let De = !1;
  const st = (d, g, b) => {
    let L;
    d == null ? g._vnode && (Ne(g._vnode, null, null, !0), L = g._vnode.component) : T(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      b
    ), g._vnode = d, De || (De = !0, To(L), ji(), De = !1);
  }, pt = {
    p: T,
    um: Ne,
    m: Re,
    r: zt,
    mt: Y,
    mc: ce,
    pc: U,
    pbc: F,
    n: Qe,
    o: e
  };
  return {
    render: st,
    hydrate: void 0,
    createApp: ia(st)
  };
}
function Ps({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Dt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function wa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function vo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Q(s) && Q(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = yt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && vo(l, r)), r.type === _s && (r.patchFlag === -1 && (r = o[i] = yt(r)), r.el = l.el), r.type === Be && !r.el && (r.el = l.el);
    }
}
function $a(e) {
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
function ml(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : ml(t);
}
function jo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function yl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? yl(t.subTree) : null;
}
const _l = (e) => e.__isSuspense;
function ka(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Lr(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), _s = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), Gn = /* @__PURE__ */ Symbol.for("v-stc"), $n = [];
let ze = null;
function k(e = !1) {
  $n.push(ze = e ? null : []);
}
function Sa() {
  $n.pop(), ze = $n[$n.length - 1] || null;
}
let In = 1;
function ss(e, t = !1) {
  In += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function bl(e) {
  return e.dynamicChildren = In > 0 ? ze || Zt : null, Sa(), In > 0 && ze && ze.push(e), e;
}
function A(e, t, n, s, o, i) {
  return bl(
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
  return bl(
    Te(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function os(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const wl = ({ key: e }) => e ?? null, Yn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Ee(e) || se(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === le ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && wl(t),
    ref: t && Yn(t),
    scopeId: Vi,
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
    ctx: Ye
  };
  return r ? (mo(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= xe(n) ? 8 : 16), In > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ze.push(a), a;
}
const Te = xa;
function xa(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Xr) && (e = Be), os(e)) {
    const r = Ot(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && mo(r, n), In > 0 && !i && ze && (r.shapeFlag & 6 ? ze[ze.indexOf(e)] = r : ze.push(r)), r.patchFlag = -2, r;
  }
  if (Ra(e) && (e = e.__vccOpts), t) {
    t = Ca(t);
    let { class: r, style: a } = t;
    r && !xe(r) && (t.class = ke(r)), ve(a) && (/* @__PURE__ */ hs(a) && !Q(a) && (a = Me({}, a)), t.style = Lt(a));
  }
  const l = xe(e) ? 1 : _l(e) ? 128 : Gi(e) ? 64 : ve(e) ? 4 : se(e) ? 2 : 0;
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
function Ca(e) {
  return e ? /* @__PURE__ */ hs(e) || fl(e) ? Me({}, e) : e : null;
}
function Ot(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, c = t ? Ta(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && wl(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(Yn(t)) : [i, Yn(t)] : Yn(t)
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
    patchFlag: t && e.type !== le ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Ot(e.ssContent),
    ssFallback: e.ssFallback && Ot(e.ssFallback),
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
function wt(e = " ", t = 0) {
  return Te(_s, null, e, t);
}
function $l(e, t) {
  const n = Te(Gn, null, e);
  return n.staticCount = t, n;
}
function ie(e = "", t = !1) {
  return t ? (k(), Le(Be, null, e)) : Te(Be, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? Te(Be) : Q(e) ? Te(
    le,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : os(e) ? yt(e) : Te(_s, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ot(e);
}
function mo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), mo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !fl(t) ? t._ctx = Ye : o === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else se(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [wt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ta(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ke([t.class, s.class]));
      else if (o === "style")
        t.style = Lt([t.style, s.style]);
      else if (rs(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(Q(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ot(e, t, n, s = null) {
  nt(e, t, 7, [
    n,
    s
  ]);
}
const Ea = ll();
let Ma = 0;
function Ia(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Ea, i = {
    uid: Ma++,
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
    scope: new Xl(
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
    propsOptions: hl(s, o),
    emitsOptions: rl(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: be,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: be,
    data: be,
    props: be,
    attrs: be,
    slots: be,
    refs: be,
    setupState: be,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ra.bind(null, i), e.ce && e.ce(i), i;
}
let je = null;
const kl = () => je || Ye;
let is, qs;
{
  const e = cs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  is = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => je = n
  ), qs = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const Nn = (e) => {
  const t = je;
  return is(e), e.scope.on(), () => {
    e.scope.off(), is(t);
  };
}, Ko = () => {
  je && je.scope.off(), is(null);
};
function Sl(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Aa(e, t = !1, n = !1) {
  t && qs(t);
  const { props: s, children: o } = e.vnode, i = Sl(e);
  ha(e, s, i, t), ma(e, o, n || t);
  const l = i ? La(e, t) : void 0;
  return t && qs(!1), l;
}
function La(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Qr);
  const { setup: s } = n;
  if (s) {
    $t();
    const o = e.setupContext = s.length > 1 ? Oa(e) : null, i = Nn(e), l = Rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = vi(l);
    if (kt(), i(), (r || e.sp) && !bn(e) && tl(e), r) {
      if (l.then(Ko, Ko), t)
        return l.then((a) => {
          Vo(e, a);
        }).catch((a) => {
          ps(a, e, 0);
        });
      e.asyncDep = l;
    } else
      Vo(e, l);
  } else
    xl(e);
}
function Vo(e, t, n) {
  se(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Fi(t)), xl(e);
}
function xl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = Nn(e);
    $t();
    try {
      Zr(e);
    } finally {
      kt(), o();
    }
  }
}
const Pa = {
  get(e, t) {
    return Oe(e, "get", ""), e[t];
  }
};
function Oa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Pa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function bs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fi(_r(e.exposed)), {
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
function Ra(e) {
  return se(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ Tr(e, t, An);
function Na(e, t, n) {
  try {
    ss(-1);
    const s = arguments.length;
    return s === 2 ? ve(t) && !Q(t) ? os(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && os(n) && (n = [n]), Te(e, t, n));
  } finally {
    ss(1);
  }
}
const Da = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Xs;
const Wo = typeof window < "u" && window.trustedTypes;
if (Wo)
  try {
    Xs = /* @__PURE__ */ Wo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cl = Xs ? (e) => Xs.createHTML(e) : (e) => e, Fa = "http://www.w3.org/2000/svg", Ha = "http://www.w3.org/1998/Math/MathML", mt = typeof document < "u" ? document : null, Uo = mt && /* @__PURE__ */ mt.createElement("template"), Ba = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? mt.createElementNS(Fa, e) : t === "mathml" ? mt.createElementNS(Ha, e) : n ? mt.createElement(e, { is: n }) : mt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => mt.createTextNode(e),
  createComment: (e) => mt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => mt.querySelector(e),
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
      Uo.innerHTML = Cl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Uo.content;
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
}, Et = "transition", dn = "animation", Ln = /* @__PURE__ */ Symbol("_vtc"), Tl = {
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
}, ja = /* @__PURE__ */ Me(
  {},
  qi,
  Tl
), Ka = (e) => (e.displayName = "Transition", e.props = ja, e), Va = /* @__PURE__ */ Ka(
  (e, { slots: t }) => Na(Br, Wa(e), t)
), Ft = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, zo = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Wa(e) {
  const t = {};
  for (const x in e)
    x in Tl || (t[x] = e[x]);
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
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, N = Ua(o), T = N && N[0], O = N && N[1], {
    onBeforeEnter: S,
    onEnter: v,
    onEnterCancelled: C,
    onLeave: P,
    onLeaveCancelled: V,
    onBeforeAppear: ee = S,
    onAppear: ae = v,
    onAppearCancelled: ce = C
  } = t, R = (x, j, Y, ue) => {
    x._enterCancelled = ue, Ht(x, j ? u : r), Ht(x, j ? c : l), Y && Y();
  }, F = (x, j) => {
    x._isLeaving = !1, Ht(x, h), Ht(x, y), Ht(x, m), j && j();
  }, f = (x) => (j, Y) => {
    const ue = x ? ae : v, de = () => R(j, x, Y);
    Ft(ue, [j, de]), Jo(() => {
      Ht(j, x ? a : i), vt(j, x ? u : r), zo(ue) || Go(j, s, T, de);
    });
  };
  return Me(t, {
    onBeforeEnter(x) {
      Ft(S, [x]), vt(x, i), vt(x, l);
    },
    onBeforeAppear(x) {
      Ft(ee, [x]), vt(x, a), vt(x, c);
    },
    onEnter: f(!1),
    onAppear: f(!0),
    onLeave(x, j) {
      x._isLeaving = !0;
      const Y = () => F(x, j);
      vt(x, h), x._enterCancelled ? (vt(x, m), Xo(x)) : (Xo(x), vt(x, m)), Jo(() => {
        x._isLeaving && (Ht(x, h), vt(x, y), zo(P) || Go(x, s, O, Y));
      }), Ft(P, [x, Y]);
    },
    onEnterCancelled(x) {
      R(x, !1, void 0, !0), Ft(C, [x]);
    },
    onAppearCancelled(x) {
      R(x, !0, void 0, !0), Ft(ce, [x]);
    },
    onLeaveCancelled(x) {
      F(x), Ft(V, [x]);
    }
  });
}
function Ua(e) {
  if (e == null)
    return null;
  if (ve(e))
    return [Os(e.enter), Os(e.leave)];
  {
    const t = Os(e);
    return [t, t];
  }
}
function Os(e) {
  return Vl(e);
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Ln] || (e[Ln] = /* @__PURE__ */ new Set())).add(t);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Ln];
  n && (n.delete(t), n.size || (e[Ln] = void 0));
}
function Jo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let za = 0;
function Go(e, t, n, s) {
  const o = e._endId = ++za, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Ja(e, t);
  if (!l)
    return s();
  const c = l + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(c, m), i();
  }, m = (y) => {
    y.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, r + 1), e.addEventListener(c, m);
}
function Ja(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${Et}Delay`), i = s(`${Et}Duration`), l = Yo(o, i), r = s(`${dn}Delay`), a = s(`${dn}Duration`), c = Yo(r, a);
  let u = null, h = 0, m = 0;
  t === Et ? l > 0 && (u = Et, h = l, m = i.length) : t === dn ? c > 0 && (u = dn, h = c, m = a.length) : (h = Math.max(l, c), u = h > 0 ? l > c ? Et : dn : null, m = u ? u === Et ? i.length : a.length : 0);
  const y = u === Et && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Et}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: m,
    hasTransform: y
  };
}
function Yo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => qo(n) + qo(e[s])));
}
function qo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Xo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ga(e, t, n) {
  const s = e[Ln];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Qo = /* @__PURE__ */ Symbol("_vod"), Ya = /* @__PURE__ */ Symbol("_vsh"), qa = /* @__PURE__ */ Symbol(""), Xa = /(?:^|;)\s*display\s*:/;
function Qa(e, t, n) {
  const s = e.style, o = xe(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (xe(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && qn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && qn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), qn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[qa];
      l && (n += ";" + l), s.cssText = n, i = Xa.test(n);
    }
  } else t && e.removeAttribute("style");
  Qo in e && (e[Qo] = i ? s.display : "", e[Ya] && (s.display = "none"));
}
const Zo = /\s*!important$/;
function qn(e, t, n) {
  if (Q(n))
    n.forEach((s) => qn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Za(e, t);
    Zo.test(n) ? e.setProperty(
      Rt(s),
      n.replace(Zo, ""),
      "important"
    ) : e[s] = n;
  }
}
const ei = ["Webkit", "Moz", "ms"], Rs = {};
function Za(e, t) {
  const n = Rs[t];
  if (n)
    return n;
  let s = Ze(t);
  if (s !== "filter" && s in e)
    return Rs[t] = s;
  s = _i(s);
  for (let o = 0; o < ei.length; o++) {
    const i = ei[o] + s;
    if (i in e)
      return Rs[t] = i;
  }
  return t;
}
const ti = "http://www.w3.org/1999/xlink";
function ni(e, t, n, s, o, i = Yl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ti, t.slice(6, t.length)) : e.setAttributeNS(ti, t, n) : n == null || i && !wi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
  );
}
function si(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Cl(n) : n);
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
    r === "boolean" ? n = wi(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Qt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function eu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const oi = /* @__PURE__ */ Symbol("_vei");
function tu(e, t, n, s, o = null) {
  const i = e[oi] || (e[oi] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = nu(t);
    if (s) {
      const c = i[t] = iu(
        s,
        o
      );
      Qt(e, r, c, a);
    } else l && (eu(e, r, l, a), i[t] = void 0);
  }
}
const ii = /(?:Once|Passive|Capture)$/;
function nu(e) {
  let t;
  if (ii.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ii); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let Ns = 0;
const su = /* @__PURE__ */ Promise.resolve(), ou = () => Ns || (su.then(() => Ns = 0), Ns = Date.now());
function iu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    nt(
      lu(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = ou(), n;
}
function lu(e, t) {
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
const li = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, ru = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? Ga(e, s, l) : t === "style" ? Qa(e, n, s) : rs(t) ? to(t) || tu(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : au(e, t, s, l)) ? (si(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ni(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (uu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(s))) ? si(e, Ze(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ni(e, t, s, l));
};
function au(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && li(t) && se(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return li(t) && xe(n) ? !1 : t in e;
}
function uu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ze(t);
  return Array.isArray(n) ? n.some((o) => Ze(o) === s) : Object.keys(n).some((o) => Ze(o) === s);
}
const ri = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Un(t, n) : t;
};
function cu(e) {
  e.target.composing = !0;
}
function ai(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ds = /* @__PURE__ */ Symbol("_assign");
function ui(e, t, n) {
  return t && (e = e.trim()), n && (e = so(e)), e;
}
const ht = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Ds] = ri(o);
    const i = s || o.props && o.props.type === "number";
    Qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Ds](ui(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = ui(e.value, n, i);
    }), t || (Qt(e, "compositionstart", cu), Qt(e, "compositionend", ai), Qt(e, "change", ai));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[Ds] = ri(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? so(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, fu = ["ctrl", "shift", "alt", "meta"], du = {
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
  exact: (e, t) => fu.some((n) => e[`${n}Key`] && !t.includes(n))
}, oe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = du[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, hu = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Ce = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Rt(o.key);
    if (t.some(
      (l) => l === i || hu[l] === i
    ))
      return e(o);
  });
}, pu = /* @__PURE__ */ Me({ patchProp: ru }, Ba);
let ci;
function gu() {
  return ci || (ci = _a(pu));
}
const vu = (...e) => {
  const t = gu().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = yu(s);
    if (!o) return;
    const i = t._component;
    !se(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, mu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function mu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function yu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const _u = { class: "setup" }, bu = { class: "setup-card" }, wu = { class: "field-group" }, $u = { class: "field-group" }, ku = ["disabled"], Su = {
  key: 0,
  class: "error"
}, xu = /* @__PURE__ */ qe({
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
    return (c, u) => (k(), A("div", _u, [
      p("div", bu, [
        u[5] || (u[5] = p("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = p("p", null, [
          wt(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          wt(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", wu, [
          u[3] || (u[3] = p("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          dt(p("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: u[1] || (u[1] = Ce((h) => {
              var m;
              return (m = l.value) == null ? void 0 : m.focus();
            }, ["enter"]))
          }, null, 544), [
            [ht, s.value]
          ])
        ]),
        p("div", $u, [
          u[4] || (u[4] = p("label", { class: "field-label" }, "Access Token", -1)),
          dt(p("input", {
            ref_key: "tokenRef",
            ref: l,
            "onUpdate:modelValue": u[2] || (u[2] = (h) => o.value = h),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Ce(a, ["enter"])
          }, null, 544), [
            [ht, o.value]
          ])
        ]),
        p("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, ku),
        i.value ? (k(), A("p", Su, J(i.value), 1)) : ie("", !0)
      ])
    ]));
  }
}), Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Cu = /* @__PURE__ */ Xe(xu, [["__scopeId", "data-v-97d10609"]]);
let yo = !1;
const El = /* @__PURE__ */ W(null);
function Ml(e) {
  yo = e;
}
function Tu() {
  return yo;
}
function Eu(e) {
  El.value = e;
}
function Mu() {
  return El;
}
const ws = /* @__PURE__ */ W(localStorage.getItem("ha_auth_key"));
function Iu() {
  return ws;
}
function Fs(e) {
  ws.value = e, e ? localStorage.setItem("ha_auth_key", e) : localStorage.removeItem("ha_auth_key");
}
function Au(e) {
  return ws.value || e || "";
}
function Il() {
  var e;
  return yo ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function Al() {
  const e = Il();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function $s(e) {
  const t = Il();
  return t ? `${t}${e}` : e;
}
async function Kt(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch($s(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function Lu(e) {
  const t = await fetch($s("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
const Ll = "homeboard", ls = /* @__PURE__ */ W(!1), ln = /* @__PURE__ */ W(null), pn = [];
function Pu(e) {
  ls.value ? e(ln.value) : pn.push(e);
}
let Se = null, kn = 1, sn = null;
const Ut = /* @__PURE__ */ new Map(), Pn = /* @__PURE__ */ new Map(), Qs = /* @__PURE__ */ W(0);
let Pt = !1, fi = [];
const At = /* @__PURE__ */ new Map();
function Ou() {
  return Al();
}
function Pl(e) {
  Se && (Se.readyState === WebSocket.OPEN || Se.readyState === WebSocket.CONNECTING) || (Pt = !1, Se = new WebSocket(Ou()), Se.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      Se.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      Pt = !0;
      const i = kn++;
      Se.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = kn++;
      Se.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      const r = kn++;
      At.set(r, {
        resolve: (a) => {
          const c = (a == null ? void 0 : a.value) ?? null;
          ln.value = c, ls.value = !0, c != null && c.authKey && (ws.value = c.authKey, localStorage.setItem("ha_auth_key", c.authKey));
          for (const u of pn) u(c);
          pn.length = 0;
        },
        reject: () => {
          ls.value = !0;
          for (const a of pn) a(null);
          pn.length = 0;
        }
      }), Se.send(JSON.stringify({ id: r, type: "frontend/get_user_data", key: Ll }));
      for (const a of fi) a();
      fi = [];
      return;
    }
    if (n.type === "auth_invalid") {
      console.error("HA WebSocket auth failed");
      return;
    }
    if (n.type === "result" && At.has(n.id)) {
      const { resolve: i, reject: l } = At.get(n.id);
      At.delete(n.id), n.success ? i(n.result) : l(new Error(((s = n.error) == null ? void 0 : s.message) ?? "Service call failed"));
      return;
    }
    if (n.type === "result" && n.success && Array.isArray(n.result)) {
      for (const i of n.result)
        Pn.set(i.entity_id, i), di(i.entity_id, i);
      Qs.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (Pn.set(i.entity_id, i), Qs.value++, di(i.entity_id, i));
    }
  }, Se.onclose = () => {
    Pt = !1, sn && clearTimeout(sn), sn = setTimeout(() => {
      Se = null, Pl(e);
    }, 5e3);
  }, Se.onerror = () => {
    Se == null || Se.close();
  });
}
function di(e, t) {
  const n = Ut.get(e);
  if (n)
    for (const s of n) s(t);
}
function Ru(e, t) {
  Ut.has(e) || Ut.set(e, /* @__PURE__ */ new Set()), Ut.get(e).add(t);
  const n = Pn.get(e);
  n && t(n);
}
function Nu(e, t) {
  const n = Ut.get(e);
  n && (n.delete(t), n.size === 0 && Ut.delete(e));
}
function Du() {
  sn && (clearTimeout(sn), sn = null), Se && (Se.close(), Se = null), Pt = !1, Pn.clear(), Ut.clear(), ls.value = !1, ln.value = null;
}
async function Zs(e) {
  if (ln.value = e, !Se || !Pt) return;
  const t = kn++;
  return new Promise((n, s) => {
    At.set(t, {
      resolve: () => n(),
      reject: (o) => s(o)
    }), Se.send(JSON.stringify({ id: t, type: "frontend/set_user_data", key: Ll, value: e }));
  });
}
let Wn = null;
function Fu() {
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
function Ol() {
  Wn && clearTimeout(Wn), Wn = setTimeout(() => {
    if (Wn = null, !ln.value || !Se || !Pt) return;
    const e = Fu(), t = { ...ln.value, ...e };
    Zs(t);
  }, 500);
}
async function Hu(e, t, n, s) {
  if (!Se || !Pt) throw new Error("WebSocket not connected");
  const o = kn++;
  return new Promise((i, l) => {
    At.set(o, { resolve: i, reject: l }), Se.send(JSON.stringify({
      id: o,
      type: "call_service",
      domain: t,
      service: n,
      service_data: s ?? {},
      target: { entity_id: e },
      return_response: !0
    })), setTimeout(() => {
      At.has(o) && (At.delete(o), l(new Error("Timeout")));
    }, 1e4);
  });
}
function Bu(e) {
  let t = e;
  const n = /* @__PURE__ */ W(null), s = /* @__PURE__ */ W(null), o = /* @__PURE__ */ W(!0);
  let i = null;
  function l(c) {
    n.value = c, s.value = null, o.value = !1;
  }
  function r(c, u) {
    a(), u && (t = u), o.value = !0, s.value = null, Pl(c), i = l, Ru(t, i), Pt || fetch($s(`/api/states/${t}`), {
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
    i && (Nu(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function _o() {
  return { cache: Pn, version: Qs };
}
const ju = { class: "weather-layout" }, Ku = { class: "weather-left" }, Vu = { class: "weather-temp" }, Wu = { class: "weather-condition" }, Uu = {
  key: 0,
  class: "weather-meta"
}, zu = {
  key: 0,
  class: "weather-meta-item"
}, Ju = {
  key: 1,
  class: "weather-meta-item"
}, Gu = { class: "weather-right" }, Yu = ["innerHTML"], qu = { class: "ha-modal-header-row" }, Xu = { class: "ha-modal-title" }, Qu = { class: "wf-current" }, Zu = { class: "wf-current-left" }, ec = ["innerHTML"], tc = { class: "wf-current-info" }, nc = { class: "wf-current-condition" }, sc = { class: "wf-current-ago" }, oc = { class: "wf-current-right" }, ic = { class: "wf-current-temp" }, lc = {
  key: 0,
  class: "wf-current-hilo"
}, rc = { class: "wf-details" }, ac = {
  key: 0,
  class: "wf-detail-row"
}, uc = { class: "wf-detail-value" }, cc = {
  key: 1,
  class: "wf-detail-row"
}, fc = { class: "wf-detail-value" }, dc = {
  key: 2,
  class: "wf-detail-row"
}, hc = { class: "wf-detail-value" }, pc = { class: "wf-tabs" }, gc = {
  key: 0,
  class: "weather-forecast-row"
}, vc = { class: "wf-date" }, mc = ["innerHTML"], yc = { class: "wf-temps" }, _c = { class: "wf-temps-low" }, bc = {
  key: 1,
  class: "ha-modal-empty"
}, wc = {
  key: 0,
  class: "wf-hourly-scroll"
}, $c = { class: "wf-hourly-day-label" }, kc = { class: "weather-forecast-row" }, Sc = { class: "wf-date" }, xc = ["innerHTML"], Cc = { class: "wf-temps" }, Tc = {
  key: 1,
  class: "ha-modal-empty"
}, Ec = /* @__PURE__ */ qe({
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
            const de = ue * Math.PI / 180, ge = f / 2 + Math.cos(de) * f * 0.25, U = f / 2 + Math.sin(de) * f * 0.25, G = f / 2 + Math.cos(de) * f * 0.35, we = f / 2 + Math.sin(de) * f * 0.35;
            return `<line x1="${ge}" y1="${U}" x2="${G}" y2="${we}" stroke="#f6ad35" stroke-width="${f * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${Y}`;
        case "clear-night":
          return `${j}<path d="M${f * 0.58} ${f * 0.15}a${f * 0.33} ${f * 0.33} 0 1 0 ${f * 0.27} ${f * 0.42} ${f * 0.25} ${f * 0.25} 0 0 1-${f * 0.27}-${f * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${f * 0.03}"/>${Y}`;
        case "partlycloudy":
          return `${j}
        <circle cx="${f * 0.62}" cy="${f * 0.3}" r="${f * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((ue) => {
            const de = ue * Math.PI / 180;
            return `<line x1="${f * 0.62 + Math.cos(de) * f * 0.19}" y1="${f * 0.3 + Math.sin(de) * f * 0.19}" x2="${f * 0.62 + Math.cos(de) * f * 0.25}" y2="${f * 0.3 + Math.sin(de) * f * 0.25}" stroke="#f6ad35" stroke-width="${f * 0.03}" stroke-linecap="round"/>`;
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
    }), a = X(() => t.state ? t.state.attributes.humidity ?? null : null), c = X(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = X(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ W([]), m = /* @__PURE__ */ W([]), y = /* @__PURE__ */ W("daily"), N = X(() => {
      const R = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], F = [];
      let f = null;
      for (const x of m.value) {
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
    }), O = X(() => t.state && h.value.length ? h.value[0].tempHigh : null), S = X(() => t.state && h.value.length ? h.value[0].tempLow : null), v = X(() => {
      if (!t.state) return "";
      const R = t.state.attributes.wind_bearing;
      return R == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(R / 22.5) % 16];
    });
    function C(R) {
      return R.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function P() {
      n.value = !0, y.value = "daily", await ee("daily");
    }
    async function V(R) {
      y.value = R, R === "hourly" && m.value.length === 0 && await ee("hourly");
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
        const x = await Hu(t.entityId, "weather", "get_forecasts", { type: R }), j = (x == null ? void 0 : x.response) ?? x, Y = (j == null ? void 0 : j[t.entityId]) ?? (j ? Object.values(j)[0] : null), ue = (Y == null ? void 0 : Y.forecast) ?? [];
        if (ue.length) {
          R === "daily" ? h.value = ae(ue) : m.value = ce(ue);
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
              R === "daily" ? h.value = ae(Y) : m.value = ce(Y);
              return;
            }
          }
        } catch {
        }
      }
      R === "daily" ? h.value = [] : m.value = [];
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
      return k(), A(le, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: oe(P, ["stop"]),
          title: "Vorhersage"
        }, [...F[5] || (F[5] = [
          $l('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: ke(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", ju, [
            p("div", Ku, [
              p("span", Vu, J(r.value) + "°", 1),
              p("span", Wu, J(l.value), 1),
              e.isCompact ? ie("", !0) : (k(), A("div", Uu, [
                a.value !== null ? (k(), A("span", zu, "💧 " + J(a.value) + "%", 1)) : ie("", !0),
                c.value !== null ? (k(), A("span", Ju, "💨 " + J(Math.round(c.value)) + " km/h", 1)) : ie("", !0)
              ]))
            ]),
            p("div", Gu, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, Yu)
            ])
          ])
        ], 2),
        (k(), Le(xt, { to: "body" }, [
          n.value ? (k(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: F[4] || (F[4] = oe((x) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: F[3] || (F[3] = oe(() => {
              }, ["stop"]))
            }, [
              p("div", qu, [
                p("h3", Xu, J(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: F[0] || (F[0] = (x) => n.value = !1)
                }, "✕")
              ]),
              p("div", Qu, [
                p("div", Zu, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((f = e.state) == null ? void 0 : f.state) ?? "cloudy", 52)
                  }, null, 8, ec),
                  p("div", tc, [
                    p("span", nc, J(l.value), 1),
                    p("span", sc, J(T.value), 1)
                  ])
                ]),
                p("div", oc, [
                  p("span", ic, J(r.value) + "°C", 1),
                  O.value !== null && S.value !== null ? (k(), A("span", lc, J(O.value) + "°C / " + J(S.value) + "°C", 1)) : ie("", !0)
                ])
              ]),
              p("div", rc, [
                u.value !== null ? (k(), A("div", ac, [
                  F[6] || (F[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", uc, J(C(u.value)) + " hPa", 1)
                ])) : ie("", !0),
                a.value !== null ? (k(), A("div", cc, [
                  F[7] || (F[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", fc, J(a.value) + " %", 1)
                ])) : ie("", !0),
                c.value !== null ? (k(), A("div", dc, [
                  F[8] || (F[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", hc, J(C(c.value)) + " km/h" + J(v.value ? ` (${v.value})` : ""), 1)
                ])) : ie("", !0)
              ]),
              p("div", pc, [
                p("button", {
                  class: ke(["wf-tab", { active: y.value === "daily" }]),
                  onClick: F[1] || (F[1] = (x) => V("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: ke(["wf-tab", { active: y.value === "hourly" }]),
                  onClick: F[2] || (F[2] = (x) => V("hourly"))
                }, "Stündlich", 2)
              ]),
              y.value === "daily" ? (k(), A(le, { key: 0 }, [
                h.value.length ? (k(), A("div", gc, [
                  (k(!0), A(le, null, We(h.value, (x) => (k(), A("div", {
                    key: x.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", vc, J(x.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(x.condition, 36)
                    }, null, 8, mc),
                    p("span", yc, J(x.tempHigh) + "°", 1),
                    p("span", _c, J(x.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (k(), A("div", bc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : ie("", !0),
              y.value === "hourly" ? (k(), A(le, { key: 1 }, [
                m.value.length ? (k(), A("div", wc, [
                  (k(!0), A(le, null, We(N.value, (x) => (k(), A("div", {
                    key: x.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", $c, J(x.day), 1),
                    p("div", kc, [
                      (k(!0), A(le, null, We(x.hours, (j) => (k(), A("div", {
                        key: j.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", Sc, J(j.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(j.condition, 32)
                        }, null, 8, xc),
                        p("span", Cc, J(j.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (k(), A("div", Tc, "Keine stündlichen Daten verfügbar"))
              ], 64)) : ie("", !0)
            ])
          ])) : ie("", !0)
        ]))
      ], 64);
    };
  }
}), Mc = /* @__PURE__ */ Xe(Ec, [["__scopeId", "data-v-a3030d6f"]]), Ic = { class: "center-wrap" }, Ac = ["title"], Lc = {
  key: 0,
  class: "updated"
}, Pc = { class: "ha-modal-header-row" }, Oc = { class: "ha-light-section" }, Rc = { class: "ha-light-slider-wrap" }, Nc = ["value"], Dc = { class: "ha-light-slider-value" }, Fc = {
  key: 0,
  class: "ha-light-section"
}, Hc = { class: "ha-light-slider-wrap" }, Bc = ["value"], jc = {
  key: 1,
  class: "ha-light-section"
}, Kc = { class: "ha-light-slider-wrap" }, Vc = ["value"], Wc = { class: "ha-light-slider-value" }, Uc = /* @__PURE__ */ qe({
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
      const S = t.state.state;
      if (S === "on" || S === "home" || S === "open" || S === "unlocked") return !0;
      const v = parseFloat(S);
      return !isNaN(v) && v > 0;
    }), s = /* @__PURE__ */ W(!1);
    async function o() {
      t.state && await Kt(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ W(!1), r = X(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = X(() => {
      if (!t.state) return !1;
      const S = t.state.attributes.supported_color_modes;
      return (S == null ? void 0 : S.some((v) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(v))) ?? !1;
    }), c = X(() => {
      if (!t.state) return 0;
      const S = t.state.attributes.hs_color;
      return Math.round((S == null ? void 0 : S[0]) ?? 0);
    }), u = X(() => {
      if (!t.state) return 100;
      const S = t.state.attributes.hs_color;
      return Math.round((S == null ? void 0 : S[1]) ?? 100);
    }), h = X(() => ({
      "--sat-color": `hsl(${c.value}, 100%, 50%)`
    }));
    let m = null, y = null;
    function N(S) {
      const v = parseInt(S.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        v === 0 ? Kt(t.token, t.entityId, "turn_off") : Kt(t.token, t.entityId, "turn_on", { brightness: v });
      }, 150);
    }
    function T(S) {
      const v = parseInt(S.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [v, u.value]
        });
      }, 150);
    }
    function O(S) {
      const v = parseInt(S.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [c.value, v]
        });
      }, 150);
    }
    return (S, v) => (k(), A(le, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: v[0] || (v[0] = oe((C) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...v[9] || (v[9] = [
        $l('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", Ic, [
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
          ])], 42, Ac)
        ]),
        i.value ? (k(), A("div", Lc, " Aktualisiert: " + J(i.value), 1)) : ie("", !0)
      ], 2),
      (k(), Le(xt, { to: "body" }, [
        l.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[8] || (v[8] = oe((C) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[7] || (v[7] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Pc, [
              v[11] || (v[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: v[6] || (v[6] = (C) => l.value = !1)
              }, "✕")
            ]),
            p("div", Oc, [
              v[12] || (v[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", Rc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: N
                }, null, 40, Nc),
                p("span", Dc, J(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (k(), A("div", Fc, [
              v[13] || (v[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", Hc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: T
                }, null, 40, Bc),
                p("span", {
                  class: "ha-light-color-preview",
                  style: Lt({ background: `hsl(${c.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : ie("", !0),
            a.value ? (k(), A("div", jc, [
              v[14] || (v[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", Kc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: Lt(h.value),
                  onInput: O
                }, null, 44, Vc),
                p("span", Wc, J(u.value) + "%", 1)
              ])
            ])) : ie("", !0)
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), zc = /* @__PURE__ */ Xe(Uc, [["__scopeId", "data-v-c1ca61d1"]]), Jc = { class: "center-wrap" }, Gc = ["title"], Yc = {
  key: 0,
  class: "updated"
}, qc = /* @__PURE__ */ qe({
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
      t.state && await Kt(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (l, r) => (k(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Jc, [
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
        ])], 42, Gc)
      ]),
      i.value ? (k(), A("div", Yc, " Aktualisiert: " + J(i.value), 1)) : ie("", !0)
    ], 2));
  }
}), Xc = /* @__PURE__ */ Xe(qc, [["__scopeId", "data-v-495ed0f0"]]), Qc = { class: "state value center-wrap" }, Zc = { class: "number" }, ef = { class: "unit" }, tf = {
  key: 0,
  class: "updated"
}, nf = /* @__PURE__ */ qe({
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
    return (i, l) => (k(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Qc, [
        p("span", Zc, J(n.value), 1),
        p("span", ef, J(s.value), 1)
      ]),
      o.value && !e.isCompact ? (k(), A("div", tf, " Aktualisiert: " + J(o.value), 1)) : ie("", !0)
    ], 2));
  }
}), sf = /* @__PURE__ */ Xe(nf, [["__scopeId", "data-v-336a5298"]]), of = {
  key: 0,
  class: "card-header"
}, lf = { class: "label" }, rf = { class: "ha-modal-fields" }, af = { class: "ha-modal-input-wrap" }, uf = ["onKeydown"], cf = {
  key: 0,
  class: "ha-modal-suggestions"
}, ff = ["onMousedown"], df = { class: "ha-modal-s-entity" }, hf = { class: "ha-modal-s-name" }, pf = ["onKeydown"], gf = { class: "ha-toggle-row" }, vf = {
  key: 1,
  class: "state loading"
}, mf = {
  key: 2,
  class: "state error"
}, yf = /* @__PURE__ */ qe({
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
    }), m = /* @__PURE__ */ W(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), y = /* @__PURE__ */ W(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    It(() => n.entityId, (U) => {
      m.value = localStorage.getItem(`ha_title_${U}`) ?? "", y.value = localStorage.getItem(`ha_showtitle_${U}`) !== "false";
    });
    const N = X(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), T = /* @__PURE__ */ W(!1), O = /* @__PURE__ */ W(""), S = /* @__PURE__ */ W(""), v = /* @__PURE__ */ W(!0), C = /* @__PURE__ */ W(null), P = /* @__PURE__ */ W([]), V = /* @__PURE__ */ W([]), ee = /* @__PURE__ */ W(-1);
    async function ae() {
      try {
        P.value = await Lu(n.token);
      } catch {
      }
    }
    function ce() {
      ee.value = -1;
      const U = O.value.trim().toLowerCase();
      if (!U) {
        V.value = [];
        return;
      }
      V.value = P.value.filter(
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
      O.value = U, V.value = [], ee.value = -1;
    }
    function x() {
      ee.value >= 0 && V.value[ee.value] ? f(V.value[ee.value].entity_id) : Y();
    }
    function j() {
      O.value = n.entityId, S.value = m.value, v.value = y.value, V.value = [], ee.value = -1, T.value = !0, ae(), gs(() => {
        var U;
        return (U = C.value) == null ? void 0 : U.select();
      });
    }
    function Y() {
      const U = O.value.trim();
      if (U) {
        const G = S.value.trim();
        localStorage.setItem(`ha_title_${U}`, G), localStorage.setItem(`ha_showtitle_${U}`, String(v.value)), Ol(), U === n.entityId && (m.value = G, y.value = v.value), s("change-entity", U);
      }
      V.value = [], T.value = !1;
    }
    function ue() {
      V.value = [], T.value = !1;
    }
    function de() {
      T.value = !1, s("remove");
    }
    function ge(U) {
      const G = U.target.closest(".card");
      if (!G) return;
      const we = G.getBoundingClientRect(), Re = "touches" in U ? U.touches[0].clientX : U.clientX, Ne = "touches" in U ? U.touches[0].clientY : U.clientY, zt = we.width, rn = we.height, Jt = 120;
      document.body.style.userSelect = "none";
      function Ue(De) {
        const st = "touches" in De ? De.touches[0].clientX : De.clientX, pt = "touches" in De ? De.touches[0].clientY : De.clientY, Gt = zt + (st - Re), d = rn + (pt - Ne), g = Math.max(1, Math.min(6, Math.round((Gt + 20) / Jt))), b = Math.max(1, Math.min(6, Math.round((d + 20) / Jt)));
        G.style.gridColumn = `span ${g}`, G.style.gridRow = `span ${b}`, G.dataset.previewCols = String(g), G.dataset.previewRows = String(b);
      }
      function Qe() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", Ue), document.removeEventListener("mouseup", Qe), document.removeEventListener("touchmove", Ue), document.removeEventListener("touchend", Qe);
        const De = parseInt(G.dataset.previewCols || String(n.cols)), st = parseInt(G.dataset.previewRows || String(n.rows));
        delete G.dataset.previewCols, delete G.dataset.previewRows, (De !== n.cols || st !== n.rows) && s("resize", De, st);
      }
      document.addEventListener("mousemove", Ue), document.addEventListener("mouseup", Qe), document.addEventListener("touchmove", Ue), document.addEventListener("touchend", Qe);
    }
    return (U, G) => (k(), A("div", {
      class: ke(["card", { active: h.value, small: o.value, short: i.value, narrow: l.value }])
    }, [
      p("button", {
        class: "edit-ctrl-btn",
        onClick: oe(j, ["stop"]),
        title: "Bearbeiten"
      }, [...G[4] || (G[4] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      y.value ? (k(), A("div", of, [
        p("span", lf, J(m.value || N.value), 1)
      ])) : ie("", !0),
      (k(), Le(xt, { to: "body" }, [
        T.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: oe(ue, ["self"])
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: G[3] || (G[3] = oe(() => {
            }, ["stop"]))
          }, [
            G[7] || (G[7] = p("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            p("div", rf, [
              p("div", af, [
                dt(p("input", {
                  ref_key: "inputRef",
                  ref: C,
                  "onUpdate:modelValue": G[0] || (G[0] = (we) => O.value = we),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: ce,
                  onKeydown: [
                    Ce(oe(x, ["prevent"]), ["enter"]),
                    Ce(ue, ["escape"]),
                    Ce(oe(R, ["prevent"]), ["arrow-down"]),
                    Ce(oe(F, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, uf), [
                  [ht, O.value]
                ]),
                V.value.length ? (k(), A("ul", cf, [
                  (k(!0), A(le, null, We(V.value, (we, Re) => (k(), A("li", {
                    key: we.entity_id,
                    class: ke(["ha-modal-suggestion-item", { active: Re === ee.value }]),
                    onMousedown: oe((Ne) => f(we.entity_id), ["prevent"])
                  }, [
                    p("span", df, J(we.entity_id), 1),
                    p("span", hf, J(we.attributes.friendly_name ?? ""), 1)
                  ], 42, ff))), 128))
                ])) : ie("", !0)
              ]),
              dt(p("input", {
                "onUpdate:modelValue": G[1] || (G[1] = (we) => S.value = we),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Ce(oe(Y, ["prevent"]), ["enter"]),
                  Ce(ue, ["escape"])
                ]
              }, null, 40, pf), [
                [ht, S.value]
              ])
            ]),
            p("div", gf, [
              G[6] || (G[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: ke(["ha-toggle", { on: v.value }]),
                onClick: G[2] || (G[2] = (we) => v.value = !v.value),
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
              onClick: de
            }, "Card entfernen")
          ])
        ])) : ie("", !0)
      ])),
      e.loading ? (k(), A("div", vf, [...G[9] || (G[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (k(), A("div", mf, [
        G[10] || (G[10] = p("span", null, "⚠️", -1)),
        wt(" " + J(e.error), 1)
      ])) : r.value ? (k(), Le(Mc, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: m.value || N.value,
        "custom-title": m.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (k(), Le(zc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? (k(), Le(Xc, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (k(), Le(sf, {
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
        onMousedown: oe(ge, ["prevent"]),
        onTouchstart: oe(ge, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), _f = /* @__PURE__ */ Xe(yf, [["__scopeId", "data-v-7965fac9"]]), bf = { class: "heading-content" }, wf = { class: "ha-modal-header-row" }, $f = { class: "ha-modal-fields" }, kf = ["onKeydown"], Sf = { class: "ha-modal-actions" }, xf = /* @__PURE__ */ qe({
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
      i.value = n.label, o.value = !0, gs(() => {
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
    function m() {
      h.value = n.label, u.value = !0;
    }
    function y() {
      const T = h.value.trim();
      T && T !== n.label && s("update-label", T), u.value = !1;
    }
    function N(T) {
      const O = T.target.closest(".heading");
      if (!O) return;
      const S = O.getBoundingClientRect(), v = "touches" in T ? T.touches[0].clientX : T.clientX, C = "touches" in T ? T.touches[0].clientY : T.clientY, P = S.width, V = S.height, ee = 120;
      document.body.style.userSelect = "none";
      function ae(R) {
        const F = "touches" in R ? R.touches[0].clientX : R.clientX, f = "touches" in R ? R.touches[0].clientY : R.clientY, x = P + (F - v), j = V + (f - C), Y = Math.max(1, Math.min(12, Math.round((x + 20) / ee))), ue = Math.max(1, Math.min(4, Math.round((j + 20) / ee)));
        O.style.gridColumn = `span ${Y}`, O.style.gridRow = `span ${ue}`, O.dataset.previewCols = String(Y), O.dataset.previewRows = String(ue);
      }
      function ce() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", ae), document.removeEventListener("mouseup", ce), document.removeEventListener("touchmove", ae), document.removeEventListener("touchend", ce);
        const R = parseInt(O.dataset.previewCols ?? "") || n.cols, F = parseInt(O.dataset.previewRows ?? "") || n.rows;
        delete O.dataset.previewCols, delete O.dataset.previewRows, O.style.gridColumn = "", O.style.gridRow = "", s("resize", R, F);
      }
      document.addEventListener("mousemove", ae), document.addEventListener("mouseup", ce), document.addEventListener("touchmove", ae, { passive: !1 }), document.addEventListener("touchend", ce);
    }
    return (T, O) => (k(), A("div", {
      class: ke(["heading", { short: e.rows === 1 }])
    }, [
      p("div", bf, [
        o.value ? dt((k(), A("input", {
          key: 1,
          ref_key: "inputRef",
          ref: l,
          "onUpdate:modelValue": O[0] || (O[0] = (S) => i.value = S),
          class: "heading-input",
          onBlur: a,
          onKeydown: [
            Ce(a, ["enter"]),
            Ce(c, ["escape"])
          ]
        }, null, 544)), [
          [ht, i.value]
        ]) : (k(), A("h2", {
          key: 0,
          class: "heading-text",
          onDblclick: r
        }, J(e.label), 33)),
        O[8] || (O[8] = p("hr", { class: "heading-line" }, null, -1))
      ]),
      p("button", {
        class: "heading-edit-btn",
        onClick: oe(m, ["stop"]),
        title: "Bearbeiten"
      }, [...O[9] || (O[9] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      (k(), Le(xt, { to: "body" }, [
        u.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: O[7] || (O[7] = oe((S) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: O[6] || (O[6] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", wf, [
              O[10] || (O[10] = p("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: O[1] || (O[1] = (S) => u.value = !1)
              }, "✕")
            ]),
            p("div", $f, [
              dt(p("input", {
                "onUpdate:modelValue": O[2] || (O[2] = (S) => h.value = S),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Ce(oe(y, ["prevent"]), ["enter"]),
                  O[3] || (O[3] = Ce((S) => u.value = !1, ["escape"]))
                ]
              }, null, 40, kf), [
                [ht, h.value]
              ])
            ]),
            p("div", Sf, [
              p("button", {
                class: "ha-modal-btn confirm",
                onClick: y
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                onClick: O[4] || (O[4] = (S) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: O[5] || (O[5] = (S) => {
                T.$emit("remove"), u.value = !1;
              })
            }, " Überschrift entfernen ")
          ])
        ])) : ie("", !0)
      ])),
      p("div", {
        class: "resize-handle",
        onMousedown: oe(N, ["prevent"]),
        onTouchstart: oe(N, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Cf = /* @__PURE__ */ Xe(xf, [["__scopeId", "data-v-7a388668"]]);
function bo(e) {
  const { cache: t, version: n } = _o();
  function s() {
    try {
      const h = localStorage.getItem(`ha_group_${e.key}`);
      if (h) {
        const m = JSON.parse(h);
        return {
          included: Array.isArray(m.included) ? m.included : [],
          excluded: Array.isArray(m.excluded) ? m.excluded : []
        };
      }
    } catch {
    }
    return { included: [], excluded: [] };
  }
  const o = /* @__PURE__ */ W(s());
  function i() {
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value)), Ol();
  }
  const l = X(() => {
    n.value;
    const h = [];
    for (const [, m] of t)
      e.autoDetect(m) && h.push(m.entity_id);
    return h.sort();
  }), r = X(() => {
    const h = new Set(o.value.excluded), m = /* @__PURE__ */ new Set();
    for (const y of l.value)
      h.has(y) || m.add(y);
    for (const y of o.value.included)
      m.add(y);
    return [...m].sort();
  }), a = X(() => (n.value, r.value.map((h) => t.get(h)).filter((h) => h != null)));
  function c(h) {
    o.value.included.includes(h) || o.value.included.push(h), o.value.excluded = o.value.excluded.filter((m) => m !== h), i();
  }
  function u(h) {
    o.value.included = o.value.included.filter((m) => m !== h), l.value.includes(h) && !o.value.excluded.includes(h) && o.value.excluded.push(h), i();
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
const Tf = { class: "pill-label" }, Ef = { class: "ha-modal-header-row" }, Mf = {
  key: 0,
  class: "ha-modal-empty"
}, If = {
  key: 1,
  class: "ha-modal-entity-list"
}, Af = { class: "ha-modal-entity-name" }, Lf = /* @__PURE__ */ qe({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = bo({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ fo(() => t.token)
    }), s = X(() => n.entities.value.filter((r) => r.state === "on")), o = X(() => s.value.length > 0), i = X(() => s.value.length), l = /* @__PURE__ */ W(!1);
    return (r, a) => (k(), A(le, null, [
      p("button", {
        class: ke(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (c) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", Tf, J(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      (k(), Le(xt, { to: "body" }, [
        l.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = oe((c) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Ef, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (c) => l.value = !1)
              }, "✕")
            ]),
            Ae(n).entities.value.length ? (k(), A("ul", If, [
              (k(!0), A(le, null, We(Ae(n).entities.value, (c) => (k(), A("li", {
                key: c.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", Af, J(c.attributes.friendly_name ?? c.entity_id), 1),
                p("span", {
                  class: ke(["ha-modal-entity-badge", c.state === "on" ? "open" : "closed"])
                }, J(c.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (k(), A("div", Mf, " Keine Sensoren gefunden "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Pf = /* @__PURE__ */ Xe(Lf, [["__scopeId", "data-v-4c919921"]]), Of = { class: "pill-label" }, Rf = { class: "ha-modal-header-row" }, Nf = { class: "ha-modal-header-actions" }, Df = {
  key: 0,
  class: "ha-modal-empty"
}, Ff = {
  key: 1,
  class: "ha-modal-entity-list"
}, Hf = { class: "ha-modal-entity-name" }, Bf = ["onClick"], jf = { class: "ha-modal-input-wrap" }, Kf = ["onKeydown"], Vf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Wf = ["onMousedown"], Uf = { class: "ha-modal-s-entity" }, zf = { class: "ha-modal-s-name" }, Jf = { class: "ha-modal-entity-list" }, Gf = { class: "ha-modal-entity-name" }, Yf = ["onClick"], qf = {
  key: 0,
  class: "ha-modal-empty"
}, Xf = /* @__PURE__ */ qe({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = bo({
      key: "lights",
      autoDetect: (v) => v.entity_id.startsWith("light."),
      token: /* @__PURE__ */ fo(() => t.token)
    }), { cache: s, version: o } = _o(), i = X(() => n.entities.value.filter((v) => v.state === "on")), l = X(() => i.value.length > 0), r = X(() => i.value.length), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(""), h = /* @__PURE__ */ W([]);
    function m() {
      c.value = !c.value, u.value = "", h.value = [];
    }
    function y(v) {
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
      const C = new Set(n.entityIds.value), P = [];
      o.value;
      for (const [, V] of s)
        if (!C.has(V.entity_id) && (V.entity_id.toLowerCase().includes(v) || (V.attributes.friendly_name ?? "").toLowerCase().includes(v)) && (P.push(V), P.length >= 8))
          break;
      h.value = P;
    }
    function T(v) {
      n.addEntity(v), u.value = "", h.value = [];
    }
    function O() {
      h.value.length && T(h.value[0].entity_id);
    }
    async function S(v) {
      await Kt(t.token, v, "toggle");
    }
    return (v, C) => (k(), A(le, null, [
      p("button", {
        class: ke(["pill", { active: l.value }]),
        onClick: C[0] || (C[0] = (P) => a.value = !0)
      }, [
        C[6] || (C[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", Of, J(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (k(), Le(xt, { to: "body" }, [
        a.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: C[5] || (C[5] = oe((P) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: C[4] || (C[4] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Rf, [
              C[8] || (C[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", Nf, [
                p("button", {
                  class: ke(["ha-modal-icon-btn", { active: c.value }]),
                  onClick: m,
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
                  onClick: C[1] || (C[1] = (P) => {
                    a.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? (k(), A(le, { key: 1 }, [
              p("div", jf, [
                dt(p("input", {
                  "onUpdate:modelValue": C[2] || (C[2] = (P) => u.value = P),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Ce(oe(O, ["prevent"]), ["enter"]),
                    C[3] || (C[3] = Ce((P) => {
                      u.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Kf), [
                  [ht, u.value]
                ]),
                h.value.length ? (k(), A("ul", Vf, [
                  (k(!0), A(le, null, We(h.value, (P) => (k(), A("li", {
                    key: P.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: oe((V) => T(P.entity_id), ["prevent"])
                  }, [
                    p("span", Uf, J(P.entity_id), 1),
                    p("span", zf, J(P.attributes.friendly_name ?? ""), 1)
                  ], 40, Wf))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", Jf, [
                (k(!0), A(le, null, We(Ae(n).entityIds.value, (P) => (k(), A("li", {
                  key: P,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Gf, J(y(P)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (V) => Ae(n).removeEntity(P),
                    title: "Entfernen"
                  }, "✕", 8, Yf)
                ]))), 128))
              ]),
              Ae(n).entityIds.value.length ? ie("", !0) : (k(), A("div", qf, " Keine Lichter ausgewählt "))
            ], 64)) : (k(), A(le, { key: 0 }, [
              Ae(n).entities.value.length ? (k(), A("ul", Ff, [
                (k(!0), A(le, null, We(Ae(n).entities.value, (P) => (k(), A("li", {
                  key: P.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Hf, J(P.attributes.friendly_name ?? P.entity_id), 1),
                  p("button", {
                    class: ke(["ha-modal-toggle-btn", P.state === "on" ? "on" : "off"]),
                    onClick: (V) => S(P.entity_id)
                  }, J(P.state === "on" ? "An" : "Aus"), 11, Bf)
                ]))), 128))
              ])) : (k(), A("div", Df, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Qf = /* @__PURE__ */ Xe(Xf, [["__scopeId", "data-v-10807199"]]), Zf = { class: "pill-label" }, ed = { class: "ha-modal-header-row" }, td = { class: "ha-modal-header-actions" }, nd = {
  key: 0,
  class: "ha-modal-empty"
}, sd = {
  key: 1,
  class: "ha-modal-entity-list"
}, od = { class: "ha-modal-entity-name" }, id = { class: "ha-modal-entity-value" }, ld = { class: "ha-modal-input-wrap" }, rd = ["onKeydown"], ad = {
  key: 0,
  class: "ha-modal-suggestions"
}, ud = ["onMousedown"], cd = { class: "ha-modal-s-entity" }, fd = { class: "ha-modal-s-name" }, dd = { class: "ha-modal-entity-list" }, hd = { class: "ha-modal-entity-name" }, pd = ["onClick"], gd = {
  key: 0,
  class: "ha-modal-empty"
}, vd = /* @__PURE__ */ qe({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = bo({
      key: "climate",
      autoDetect: (S) => S.entity_id.startsWith("climate.") || S.entity_id.startsWith("sensor.") && S.attributes.device_class === "temperature",
      token: /* @__PURE__ */ fo(() => t.token)
    }), { cache: s, version: o } = _o();
    function i(S) {
      if (S.entity_id.startsWith("climate.")) {
        const C = S.attributes.current_temperature;
        return typeof C == "number" ? C : null;
      }
      const v = parseFloat(S.state);
      return isNaN(v) ? null : v;
    }
    function l(S) {
      const v = i(S);
      if (v === null) return S.state;
      const C = S.attributes.unit_of_measurement ?? "°C";
      return `${v.toFixed(1)} ${C}`;
    }
    const r = X(() => {
      const S = n.entities.value.map(i).filter((P) => P !== null);
      if (!S.length) return "-- °C";
      const v = Math.min(...S), C = Math.max(...S);
      return v === C ? `${v.toFixed(1)} °C` : `${v.toFixed(1)}–${C.toFixed(1)} °C`;
    });
    function a(S) {
      o.value;
      const v = s.get(S);
      return (v == null ? void 0 : v.attributes.friendly_name) ?? S;
    }
    const c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(!1), h = /* @__PURE__ */ W(""), m = /* @__PURE__ */ W([]);
    function y() {
      u.value = !u.value, h.value = "", m.value = [];
    }
    function N() {
      const S = h.value.trim().toLowerCase();
      if (!S) {
        m.value = [];
        return;
      }
      const v = new Set(n.entityIds.value), C = [];
      o.value;
      for (const [, P] of s)
        if (!v.has(P.entity_id) && (P.entity_id.toLowerCase().includes(S) || (P.attributes.friendly_name ?? "").toLowerCase().includes(S)) && (C.push(P), C.length >= 8))
          break;
      m.value = C;
    }
    function T(S) {
      n.addEntity(S), h.value = "", m.value = [];
    }
    function O() {
      m.value.length && T(m.value[0].entity_id);
    }
    return (S, v) => (k(), A(le, null, [
      p("button", {
        class: "pill",
        onClick: v[0] || (v[0] = (C) => c.value = !0)
      }, [
        v[6] || (v[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", Zf, J(r.value), 1)
      ]),
      (k(), Le(xt, { to: "body" }, [
        c.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[5] || (v[5] = oe((C) => c.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[4] || (v[4] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", ed, [
              v[8] || (v[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", td, [
                p("button", {
                  class: ke(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: y,
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
            u.value ? (k(), A(le, { key: 1 }, [
              p("div", ld, [
                dt(p("input", {
                  "onUpdate:modelValue": v[2] || (v[2] = (C) => h.value = C),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Ce(oe(O, ["prevent"]), ["enter"]),
                    v[3] || (v[3] = Ce((C) => {
                      h.value = "", m.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, rd), [
                  [ht, h.value]
                ]),
                m.value.length ? (k(), A("ul", ad, [
                  (k(!0), A(le, null, We(m.value, (C) => (k(), A("li", {
                    key: C.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: oe((P) => T(C.entity_id), ["prevent"])
                  }, [
                    p("span", cd, J(C.entity_id), 1),
                    p("span", fd, J(C.attributes.friendly_name ?? ""), 1)
                  ], 40, ud))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", dd, [
                (k(!0), A(le, null, We(Ae(n).entityIds.value, (C) => (k(), A("li", {
                  key: C,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", hd, J(a(C)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (P) => Ae(n).removeEntity(C),
                    title: "Entfernen"
                  }, "✕", 8, pd)
                ]))), 128))
              ]),
              Ae(n).entityIds.value.length ? ie("", !0) : (k(), A("div", gd, " Keine Sensoren ausgewählt "))
            ], 64)) : (k(), A(le, { key: 0 }, [
              Ae(n).entities.value.length ? (k(), A("ul", sd, [
                (k(!0), A(le, null, We(Ae(n).entities.value, (C) => (k(), A("li", {
                  key: C.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", od, J(C.attributes.friendly_name ?? C.entity_id), 1),
                  p("span", id, J(l(C)), 1)
                ]))), 128))
              ])) : (k(), A("div", nd, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), md = /* @__PURE__ */ Xe(vd, [["__scopeId", "data-v-2665ddcd"]]), yd = { class: "pill-label" }, _d = { class: "ha-modal-header-row" }, bd = {
  key: 0,
  class: "ha-modal-empty"
}, wd = {
  key: 1,
  class: "ha-modal-entity-list"
}, $d = { class: "notif-header" }, kd = { class: "notif-title" }, Sd = { class: "notif-time" }, xd = {
  key: 0,
  class: "notif-message"
}, Cd = ["onClick"], Td = /* @__PURE__ */ qe({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ W([]), s = /* @__PURE__ */ W(!1);
    let o = null;
    async function i() {
      try {
        const a = new WebSocket(Al()), c = await new Promise((u, h) => {
          let m = 1;
          a.onmessage = (y) => {
            const N = JSON.parse(y.data);
            if (N.type === "auth_required") {
              a.send(JSON.stringify({ type: "auth", access_token: t.token }));
              return;
            }
            if (N.type === "auth_ok") {
              const T = m++;
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
        await fetch($s("/api/services/persistent_notification/dismiss"), {
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
      const m = Math.round(h / 60);
      return m < 24 ? `Vor ${m} Stunde${m > 1 ? "n" : ""}` : `Vor ${Math.round(m / 24)} Tag${Math.round(m / 24) > 1 ? "en" : ""}`;
    }
    return En(() => {
      i(), o = setInterval(i, 3e4);
    }), Mn(() => {
      o && clearInterval(o);
    }), (a, c) => (k(), A(le, null, [
      n.value.length ? (k(), A("button", {
        key: 0,
        class: "pill",
        onClick: c[0] || (c[0] = (u) => s.value = !0)
      }, [
        c[4] || (c[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", yd, J(n.value.length), 1)
      ])) : ie("", !0),
      (k(), Le(xt, { to: "body" }, [
        s.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: c[3] || (c[3] = oe((u) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: c[2] || (c[2] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", _d, [
              c[5] || (c[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: c[1] || (c[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (k(), A("ul", wd, [
              (k(!0), A(le, null, We(n.value, (u) => (k(), A("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                p("div", $d, [
                  p("span", kd, J(u.title || u.message), 1),
                  p("span", Sd, J(r(u.created_at)), 1)
                ]),
                u.title && u.message ? (k(), A("p", xd, J(u.message), 1)) : ie("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (h) => l(u.notification_id)
                }, "Löschen", 8, Cd)
              ]))), 128))
            ])) : (k(), A("div", bd, " Keine Benachrichtigungen "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Ed = /* @__PURE__ */ Xe(Td, [["__scopeId", "data-v-a643a4ed"]]), Md = {
  key: 1,
  class: "dashboard"
}, Id = { class: "dashboard-header" }, Ad = { class: "header-left" }, Ld = { class: "header-right" }, Pd = { class: "clock" }, Od = { class: "clock-time" }, Rd = { class: "clock-date" }, Nd = { class: "page-tabs" }, Dd = { class: "page-tabs-inner" }, Fd = ["onClick", "onDblclick", "onTouchstartPassive"], Hd = {
  key: 1,
  class: "page-tab-label"
}, Bd = { class: "ha-modal-header-row" }, jd = { class: "page-delete-text" }, Kd = { class: "page-delete-actions" }, Vd = { class: "burger-wrap" }, Wd = { class: "burger-auth-actions" }, hi = 120, Ud = 36, zd = 32, Jd = /* @__PURE__ */ qe({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var he;
    e.panelMode && Ml(!0);
    const n = /* @__PURE__ */ W(localStorage.getItem("ha_token")), s = Mu(), o = X(() => Tu() ? s.value : n.value), i = Iu(), l = X(() => Au(o.value ?? void 0)), r = /* @__PURE__ */ W(i.value ?? ""), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ ds({}), u = /* @__PURE__ */ new Map();
    function h() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function m() {
      try {
        const _ = localStorage.getItem("ha_pages");
        if (_) {
          const w = JSON.parse(_);
          if (Array.isArray(w) && w.length)
            return w.map(($) => ({
              id: $.id,
              name: $.name || "Seite",
              cards: ($.cards || []).map((te) => ({
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
        const _ = localStorage.getItem("ha_cards");
        if (_) {
          const w = JSON.parse(_).map(($) => ({
            id: $.id,
            entityId: $.entityId,
            cols: $.cols ?? ($.size === "small" ? 1 : 2),
            rows: $.rows ?? ($.size === "small" ? 1 : 2)
          }));
          return [{ id: h(), name: "Home", cards: w }];
        }
      } catch {
      }
      return [{ id: h(), name: "Home", cards: [{ id: h(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const y = /* @__PURE__ */ W([]), N = /* @__PURE__ */ W(""), T = X(() => y.value.find((_) => _.id === N.value) ?? y.value[0]), O = X(() => {
      var _;
      return ((_ = T.value) == null ? void 0 : _.cards) ?? [];
    });
    function S() {
      return {
        pages: y.value,
        authKey: i.value ?? null,
        activePage: N.value
      };
    }
    function v() {
      localStorage.setItem("ha_pages", JSON.stringify(y.value)), localStorage.setItem("ha_active_page", N.value), Zs(S());
    }
    function C(_) {
      if (N.value !== _) {
        for (const w of O.value) we(w.id);
        N.value = _, localStorage.setItem("ha_active_page", _);
        for (const w of O.value)
          w.type !== "heading" && G(w.id, w.entityId);
      }
    }
    function P() {
      const _ = h(), w = y.value.length + 1;
      y.value = [...y.value, { id: _, name: `Seite ${w}`, cards: [] }], v(), C(_);
    }
    const V = /* @__PURE__ */ W(null), ee = X(() => {
      const _ = y.value.find((w) => w.id === V.value);
      return (_ == null ? void 0 : _.name) ?? "";
    }), ae = X(() => {
      const _ = y.value.find((w) => w.id === V.value);
      return (_ == null ? void 0 : _.cards.length) ?? 0;
    });
    function ce(_) {
      y.value.length <= 1 || (V.value = _);
    }
    function R() {
      const _ = V.value;
      if (V.value = null, !_ || y.value.length <= 1) return;
      const w = y.value.find(($) => $.id === _);
      if (w)
        for (const $ of w.cards) we($.id);
      if (y.value = y.value.filter(($) => $.id !== _), N.value === _) {
        N.value = y.value[0].id, localStorage.setItem("ha_active_page", N.value);
        for (const $ of O.value)
          $.type !== "heading" && G($.id, $.entityId);
      }
      v();
    }
    let F = null;
    function f(_) {
      F = setTimeout(() => {
        F = null, de(_);
      }, 600);
    }
    function x() {
      F && (clearTimeout(F), F = null);
    }
    const j = /* @__PURE__ */ W(null), Y = /* @__PURE__ */ W(""), ue = /* @__PURE__ */ W(null);
    function de(_) {
      const w = y.value.find(($) => $.id === _);
      w && (j.value = _, Y.value = w.name, gs(() => {
        ue.value && ue.value.length && (ue.value[0].focus(), ue.value[0].select());
      }));
    }
    function ge() {
      if (!j.value) return;
      const _ = y.value.find((w) => w.id === j.value);
      _ && Y.value.trim() && (_.name = Y.value.trim(), y.value = [...y.value], v()), j.value = null;
    }
    function U() {
      j.value = null;
    }
    function G(_, w) {
      if (u.has(_)) return;
      const $ = Bu(w);
      u.set(_, $), c[_] = { state: null, loading: !0, error: null }, It($.state, (te) => {
        c[_] && (c[_].state = te);
      }), It($.loading, (te) => {
        c[_] && (c[_].loading = te);
      }), It($.error, (te) => {
        c[_] && (c[_].error = te);
      }), o.value && $.start(o.value);
    }
    function we(_) {
      const w = u.get(_);
      w && (w.stop(), u.delete(_)), delete c[_];
    }
    const Re = m();
    y.value = Re;
    const Ne = localStorage.getItem("ha_active_page");
    N.value = ((he = Re.find((_) => _.id === Ne)) == null ? void 0 : he.id) ?? Re[0].id;
    for (const _ of O.value)
      _.type !== "heading" && G(_.id, _.entityId);
    It(o, (_, w) => {
      if (_ && !w)
        for (const [, $] of u) $.start(_);
    }), Pu((_) => {
      var $, te;
      if (!(($ = _ == null ? void 0 : _.pages) != null && $.length)) return;
      for (const ne of O.value) we(ne.id);
      y.value = _.pages.map((ne) => ({
        id: ne.id,
        name: ne.name || "Seite",
        cards: (ne.cards || []).map((_e) => ({
          id: _e.id,
          type: _e.type ?? "card",
          entityId: _e.entityId ?? "",
          label: _e.label,
          cols: _e.cols ?? 2,
          rows: _e.rows ?? 2,
          gridCol: _e.gridCol,
          gridRow: _e.gridRow
        }))
      }));
      const w = _.activePage ?? localStorage.getItem("ha_active_page");
      N.value = ((te = y.value.find((ne) => ne.id === w)) == null ? void 0 : te.id) ?? y.value[0].id, localStorage.setItem("ha_pages", JSON.stringify(y.value)), localStorage.setItem("ha_active_page", N.value);
      for (const ne of O.value)
        ne.type !== "heading" && G(ne.id, ne.entityId);
      if (_.authKey && (r.value = _.authKey), _.groups)
        for (const [ne, _e] of Object.entries(_.groups))
          localStorage.setItem(`ha_group_${ne}`, JSON.stringify(_e));
      if (_.cardSettings)
        for (const [ne, _e] of Object.entries(_.cardSettings))
          _e.title !== void 0 && localStorage.setItem(`ha_title_${ne}`, _e.title), _e.showTitle !== void 0 && localStorage.setItem(`ha_showtitle_${ne}`, String(_e.showTitle));
    });
    function zt() {
      const _ = h(), w = "sensor.wohnzimmer_soll_temperatur", $ = T.value;
      $ && ($.cards = [...$.cards, { id: _, type: "card", entityId: w, cols: 2, rows: 2 }], y.value = [...y.value], G(_, w), v());
    }
    function rn() {
      const _ = h(), w = T.value;
      w && (w.cards = [...w.cards, { id: _, type: "heading", entityId: "", label: "Überschrift", cols: 4, rows: 1 }], y.value = [...y.value], v());
    }
    function Jt(_, w) {
      const $ = T.value;
      if (!$) return;
      const te = $.cards.find((ne) => ne.id === _);
      te && (te.label = w, y.value = [...y.value], v());
    }
    function Ue(_) {
      we(_);
      const w = T.value;
      w && (w.cards = w.cards.filter(($) => $.id !== _), y.value = [...y.value], v());
    }
    function Qe(_) {
      n.value = _;
      for (const [, w] of u) w.start(_);
    }
    function De(_, w) {
      const $ = T.value;
      if (!$) return;
      const te = $.cards.find((_e) => _e.id === _);
      if (!te) return;
      te.entityId = w;
      const ne = u.get(_);
      ne && o.value && ne.start(o.value, w), y.value = [...y.value], v();
    }
    function st(_, w, $) {
      const te = T.value;
      if (!te) return;
      const ne = te.cards.find((_e) => _e.id === _);
      ne && (ne.cols = w, ne.rows = $, y.value = [...y.value], v());
    }
    function pt() {
      for (const [_] of u) we(_);
      y.value = [{ id: h(), name: "Home", cards: [] }], N.value = y.value[0].id, Du(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), localStorage.removeItem("ha_auth_key"), Fs(null), r.value = "", n.value = null;
    }
    const Gt = /* @__PURE__ */ W(null), d = /* @__PURE__ */ W(null), g = /* @__PURE__ */ W(null), b = /* @__PURE__ */ W(1), L = /* @__PURE__ */ W(1), E = /* @__PURE__ */ W(2), M = /* @__PURE__ */ W(2);
    function B(_) {
      const w = _.gridCol ? `${_.gridCol} / span ${_.cols}` : `span ${_.cols}`, $ = _.gridRow ? `${_.gridRow} / span ${_.rows}` : `span ${_.rows}`;
      return { gridColumn: w, gridRow: $ };
    }
    const H = X(() => ({
      gridColumn: `${b.value} / span ${E.value}`,
      gridRow: `${L.value} / span ${M.value}`
    }));
    function D(_, w) {
      const $ = _.target;
      if ($.closest(".edit-ctrl-btn") || $.closest(".resize-handle") || $.closest("button") || $.closest("input")) return;
      const te = $.closest("[data-card-id]") ?? $, ne = te.getBoundingClientRect(), _e = "touches" in _ ? _.touches[0].clientX : _.clientX, fe = "touches" in _ ? _.touches[0].clientY : _.clientY, Ie = _e - ne.left, an = fe - ne.top;
      let Yt = !1;
      const wo = O.value.find((Tt) => Tt.id === w);
      if (!wo) return;
      const un = wo;
      function Dn(Tt) {
        const ks = "touches" in Tt ? Tt.touches[0].clientX : Tt.clientX, Ss = "touches" in Tt ? Tt.touches[0].clientY : Tt.clientY;
        if (!Yt) {
          const Hn = ks - _e, xs = Ss - fe;
          if (Math.abs(Hn) < 5 && Math.abs(xs) < 5) return;
          Yt = !0, d.value = w, E.value = un.cols, M.value = un.rows;
          const Ke = te.cloneNode(!0);
          Ke.classList.add("drag-ghost"), Ke.style.position = "fixed", Ke.style.width = ne.width + "px", Ke.style.height = ne.height + "px", Ke.style.zIndex = "1000", Ke.style.pointerEvents = "none", Ke.style.opacity = "0.85", Ke.style.transform = "scale(1.04)", Ke.style.transition = "none", Ke.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Ke), g.value = Ke, te.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (g.value && (g.value.style.left = ks - Ie + "px", g.value.style.top = Ss - an + "px"), Gt.value) {
          const Hn = Gt.value.getBoundingClientRect(), xs = ks - Ie - Hn.left - zd + ne.width / 2, Ke = Ss - an - Hn.top - Ud + ne.height / 2, Rl = Math.max(1, Math.round(xs / hi)), Nl = Math.max(1, Math.round(Ke / hi));
          b.value = Rl, L.value = Nl;
        }
      }
      function Fn() {
        document.removeEventListener("mousemove", Dn), document.removeEventListener("mouseup", Fn), document.removeEventListener("touchmove", Dn), document.removeEventListener("touchend", Fn), document.body.style.userSelect = "", Yt && (g.value && (g.value.remove(), g.value = null), te.style.opacity = "", un && (un.gridCol = b.value, un.gridRow = L.value, y.value = [...y.value], v()), d.value = null);
      }
      document.addEventListener("mousemove", Dn), document.addEventListener("mouseup", Fn), document.addEventListener("touchmove", Dn, { passive: !1 }), document.addEventListener("touchend", Fn);
    }
    function I() {
      const _ = r.value.trim();
      Fs(_ || null), a.value = !1, Zs(S());
    }
    const z = /* @__PURE__ */ W(!1);
    function K(_) {
      z.value && (z.value = !1);
    }
    En(() => document.addEventListener("click", K)), Mn(() => document.removeEventListener("click", K));
    const q = /* @__PURE__ */ W(""), Z = /* @__PURE__ */ W("");
    function re() {
      const _ = /* @__PURE__ */ new Date();
      q.value = _.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), Z.value = _.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let ye;
    return En(() => {
      re(), ye = setInterval(re, 1e3);
    }), Mn(() => {
      for (const [_] of u) we(_);
      clearInterval(ye);
    }), (_, w) => (k(), A("div", null, [
      !o.value && !e.panelMode ? (k(), Le(Cu, {
        key: 0,
        onToken: Qe
      })) : (k(), A("div", Md, [
        p("header", Id, [
          p("div", Ad, [
            Te(Pf, { token: l.value }, null, 8, ["token"]),
            Te(Qf, { token: l.value }, null, 8, ["token"]),
            Te(md, { token: l.value }, null, 8, ["token"]),
            Te(Ed, { token: l.value }, null, 8, ["token"])
          ]),
          p("div", Ld, [
            p("div", Pd, [
              p("span", Od, J(q.value), 1),
              p("span", Rd, J(Z.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: Gt,
          class: "dashboard-main"
        }, [
          (k(!0), A(le, null, We(O.value, ($) => {
            var te, ne, _e;
            return k(), A(le, {
              key: $.id
            }, [
              $.type === "heading" ? (k(), Le(Cf, {
                key: 0,
                "data-card-id": $.id,
                style: Lt(B($)),
                class: ke({ "card-dragging": d.value === $.id }),
                label: $.label || "Überschrift",
                cols: $.cols,
                rows: $.rows,
                onUpdateLabel: (fe) => Jt($.id, fe),
                onRemove: (fe) => Ue($.id),
                onResize: (fe, Ie) => st($.id, fe, Ie),
                onMousedown: (fe) => D(fe, $.id),
                onTouchstart: (fe) => D(fe, $.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : (k(), Le(_f, {
                key: 1,
                "data-card-id": $.id,
                style: Lt(B($)),
                class: ke({ "card-dragging": d.value === $.id }),
                "entity-id": $.entityId,
                token: l.value,
                cols: $.cols,
                rows: $.rows,
                state: ((te = c[$.id]) == null ? void 0 : te.state) ?? null,
                loading: ((ne = c[$.id]) == null ? void 0 : ne.loading) ?? !0,
                error: ((_e = c[$.id]) == null ? void 0 : _e.error) ?? null,
                onChangeEntity: (fe) => De($.id, fe),
                onRemove: (fe) => Ue($.id),
                onResize: (fe, Ie) => st($.id, fe, Ie),
                onMousedown: (fe) => D(fe, $.id),
                onTouchstart: (fe) => D(fe, $.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          d.value ? (k(), A("div", {
            key: 0,
            class: "drop-placeholder",
            style: Lt(H.value)
          }, null, 4)) : ie("", !0)
        ], 512),
        p("nav", Nd, [
          p("div", Dd, [
            (k(!0), A(le, null, We(y.value, ($, te) => (k(), A("button", {
              key: $.id,
              class: ke(["page-tab", { active: N.value === $.id }]),
              onClick: (ne) => C($.id),
              onDblclick: (ne) => de($.id),
              onTouchstartPassive: (ne) => f($.id),
              onTouchend: x,
              onTouchmove: x
            }, [
              j.value === $.id ? dt((k(), A("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: ue,
                "onUpdate:modelValue": w[0] || (w[0] = (ne) => Y.value = ne),
                class: "page-tab-input",
                onBlur: ge,
                onKeydown: [
                  Ce(ge, ["enter"]),
                  Ce(U, ["escape"])
                ],
                onClick: w[1] || (w[1] = oe(() => {
                }, ["stop"]))
              }, null, 544)), [
                [ht, Y.value]
              ]) : (k(), A("span", Hd, J($.name), 1))
            ], 42, Fd))), 128))
          ])
        ]),
        (k(), Le(xt, { to: "body" }, [
          V.value ? (k(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: w[5] || (w[5] = oe(($) => V.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: w[4] || (w[4] = oe(() => {
              }, ["stop"]))
            }, [
              p("div", Bd, [
                w[19] || (w[19] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: w[2] || (w[2] = ($) => V.value = null)
                }, "✕")
              ]),
              p("p", jd, " „" + J(ee.value) + '" mit ' + J(ae.value) + " Karte" + J(ae.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", Kd, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: w[3] || (w[3] = ($) => V.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: R
                }, "Löschen")
              ])
            ])
          ])) : ie("", !0)
        ])),
        p("div", Vd, [
          p("button", {
            class: "burger-btn",
            onClick: w[6] || (w[6] = oe(($) => z.value = !z.value, ["stop"]))
          }, [...w[20] || (w[20] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          Te(Va, { name: "burger-pop" }, {
            default: Wi(() => [
              z.value ? (k(), A("div", {
                key: 0,
                class: "burger-menu",
                onClick: w[18] || (w[18] = oe(() => {
                }, ["stop"]))
              }, [
                p("button", {
                  class: "burger-item",
                  onClick: w[7] || (w[7] = ($) => {
                    zt(), z.value = !1;
                  })
                }, [...w[21] || (w[21] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  wt(" Karte hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[8] || (w[8] = ($) => {
                    rn(), z.value = !1;
                  })
                }, [...w[22] || (w[22] = [
                  p("span", { class: "burger-item-icon" }, "H", -1),
                  wt(" Überschrift hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[9] || (w[9] = ($) => {
                    P(), z.value = !1;
                  })
                }, [...w[23] || (w[23] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  wt(" Neue Seite ", -1)
                ])]),
                y.value.length > 1 ? (k(), A("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: w[10] || (w[10] = ($) => {
                    ce(N.value), z.value = !1;
                  })
                }, [...w[24] || (w[24] = [
                  p("span", { class: "burger-item-icon" }, "✕", -1),
                  wt(" Seite löschen ", -1)
                ])])) : ie("", !0),
                w[27] || (w[27] = p("div", { class: "burger-divider" }, null, -1)),
                p("button", {
                  class: "burger-item burger-item-muted",
                  onClick: w[11] || (w[11] = ($) => a.value = !a.value)
                }, [
                  w[25] || (w[25] = p("span", { class: "burger-item-icon" }, "🔑", -1)),
                  wt(" Auth Key " + J(Ae(i) ? "✓" : ""), 1)
                ]),
                a.value ? (k(), A("div", {
                  key: 1,
                  class: "burger-auth-key",
                  onClick: w[16] || (w[16] = oe(() => {
                  }, ["stop"]))
                }, [
                  dt(p("input", {
                    "onUpdate:modelValue": w[12] || (w[12] = ($) => r.value = $),
                    class: "burger-auth-input",
                    type: "password",
                    placeholder: "Long-Lived Access Token",
                    onKeydown: w[13] || (w[13] = Ce(($) => I(), ["enter"]))
                  }, null, 544), [
                    [ht, r.value]
                  ]),
                  p("div", Wd, [
                    p("button", {
                      class: "burger-auth-save",
                      onClick: w[14] || (w[14] = ($) => I())
                    }, "Speichern"),
                    Ae(i) ? (k(), A("button", {
                      key: 0,
                      class: "burger-auth-clear",
                      onClick: w[15] || (w[15] = ($) => {
                        r.value = "", Ae(Fs)(null);
                      })
                    }, "Löschen")) : ie("", !0)
                  ])
                ])) : ie("", !0),
                e.panelMode ? ie("", !0) : (k(), A(le, { key: 2 }, [
                  w[26] || (w[26] = p("div", { class: "burger-divider" }, null, -1)),
                  p("button", {
                    class: "burger-item burger-item-muted",
                    onClick: w[17] || (w[17] = ($) => {
                      pt(), z.value = !1;
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
}), Gd = /* @__PURE__ */ Xe(Jd, [["__scopeId", "data-v-f2d0a479"]]);
class Yd extends HTMLElement {
  constructor() {
    super(...arguments);
    $o(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && Eu(s), !this._app && s) {
      Ml(!0);
      const l = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const c = document.createElement("style");
          c.textContent = a.textContent, l.appendChild(c);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", l.appendChild(r), this._app = vu(Gd, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", Yd);
