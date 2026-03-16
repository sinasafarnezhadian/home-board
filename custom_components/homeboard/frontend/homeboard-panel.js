(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-2114e986]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-2114e986]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-2114e986]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-2114e986]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-2114e986]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-2114e986]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-2114e986]{opacity:1}.edit-ctrl-btn[data-v-2114e986]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-2114e986]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-2114e986]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-2114e986]{width:2px;height:2px}.dot[data-v-2114e986]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-2114e986]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-2114e986]{justify-content:center;padding:16px 0}.state.error[data-v-2114e986]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-2114e986]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-2114e986 .8s linear infinite}@keyframes spin-2114e986{to{transform:rotate(360deg)}}.card.narrow[data-v-2114e986]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-2114e986]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-2114e986]{width:18px;height:18px;border-width:2px}.card.small[data-v-2114e986]:after{bottom:-12px;height:18px}.card.short[data-v-2114e986]{padding:14px 16px 12px}.card.short .label[data-v-2114e986]{font-size:.6rem}.resize-handle[data-v-2114e986]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-2114e986]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-2114e986]{opacity:1}.ha-toggle-row[data-v-2114e986]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-2114e986]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-2114e986]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-2114e986]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-2114e986]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-2114e986]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-7a388668]{display:flex;align-items:flex-end;padding:0 2px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-7a388668]{align-items:flex-end}.heading-content[data-v-7a388668]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;gap:4px}.heading-text[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-7a388668]{font-size:1rem}.heading-line[data-v-7a388668]{border:none;height:2px;background:#d2d8e0;margin:0;width:100%;border-radius:1px}.heading-input[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-7a388668]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-7a388668]{opacity:1}.heading-edit-btn[data-v-7a388668]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-7a388668]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-7a388668]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-7a388668]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7a388668]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-7a388668]{opacity:1}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-5701493c]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-5701493c]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-5701493c]{display:flex;align-items:center;gap:10px}.app-name[data-v-5701493c]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-5701493c]{display:flex;align-items:center}.clock[data-v-5701493c]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-5701493c]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-5701493c]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-5701493c]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-5701493c] .card{width:auto;min-height:unset}.dashboard-main[data-v-5701493c] .heading{max-height:50px;align-self:end}.page-tabs[data-v-5701493c]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-5701493c]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-5701493c]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-5701493c]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-5701493c]:not(.active):hover{color:#718096}.page-tab-label[data-v-5701493c]{white-space:nowrap}.page-tab-input[data-v-5701493c]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-5701493c]{max-width:340px}.page-delete-text[data-v-5701493c]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-5701493c]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-5701493c],.page-delete-confirm[data-v-5701493c]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-5701493c]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-5701493c]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-5701493c]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-5701493c]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-5701493c]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-5701493c]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-5701493c]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-5701493c]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-5701493c]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-5701493c]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-5701493c]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-5701493c],.burger-pop-leave-to[data-v-5701493c]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-5701493c]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-5701493c]:hover{background:#0000000a}.burger-item-icon[data-v-5701493c]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-5701493c],.burger-item-danger .burger-item-icon[data-v-5701493c]{color:#e53e3e}.burger-item-muted[data-v-5701493c]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-5701493c]{height:1px;background:#d2d8e0;margin:4px 14px}.burger-auth-key[data-v-5701493c]{padding:6px 14px 10px}.burger-auth-input[data-v-5701493c]{width:100%;padding:6px 10px;border:none;border-radius:8px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.75rem;color:#2d3748;outline:none;box-sizing:border-box}.burger-auth-actions[data-v-5701493c]{display:flex;gap:6px;margin-top:6px}.burger-auth-save[data-v-5701493c],.burger-auth-clear[data-v-5701493c]{padding:4px 12px;border:none;border-radius:8px;font-size:.72rem;font-weight:600;cursor:pointer;background:#e8ecf1;color:#2d3748;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.burger-auth-save[data-v-5701493c]:active,.burger-auth-clear[data-v-5701493c]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.burger-auth-clear[data-v-5701493c]{color:#e53e3e}.card-dragging[data-v-5701493c]{opacity:.25}.drop-placeholder[data-v-5701493c]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ml = Object.defineProperty;
var Al = (e, t, n) => t in e ? Ml(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var go = (e, t, n) => Al(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Js(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const me = {}, Xt = [], ct = () => {
}, ai = () => !1, ns = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Gs = (e) => e.startsWith("onUpdate:"), Ee = Object.assign, Ys = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Il = Object.prototype.hasOwnProperty, ge = (e, t) => Il.call(e, t), Q = Array.isArray, Qt = (e) => In(e) === "[object Map]", ui = (e) => In(e) === "[object Set]", vo = (e) => In(e) === "[object Date]", te = (e) => typeof e == "function", $e = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", he = (e) => e !== null && typeof e == "object", ci = (e) => (he(e) || te(e)) && te(e.then) && te(e.catch), fi = Object.prototype.toString, In = (e) => fi.call(e), Ll = (e) => In(e).slice(8, -1), di = (e) => In(e) === "[object Object]", ss = (e) => $e(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, hn = /* @__PURE__ */ Js(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), os = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Pl = /-\w/g, et = os(
  (e) => e.replace(Pl, (t) => t.slice(1).toUpperCase())
), Rl = /\B([A-Z])/g, Rt = os(
  (e) => e.replace(Rl, "-$1").toLowerCase()
), hi = os((e) => e.charAt(0).toUpperCase() + e.slice(1)), _s = os(
  (e) => e ? `on${hi(e)}` : ""
), ut = (e, t) => !Object.is(e, t), jn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, pi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, qs = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Ol = (e) => {
  const t = $e(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let mo;
const is = () => mo || (mo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lt(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = $e(s) ? Hl(s) : Lt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if ($e(e) || he(e))
    return e;
}
const Nl = /;(?![^(]*\))/g, Dl = /:([^]+)/, Fl = /\/\*[^]*?\*\//g;
function Hl(e) {
  const t = {};
  return e.replace(Fl, "").split(Nl).forEach((n) => {
    if (n) {
      const s = n.split(Dl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function be(e) {
  let t = "";
  if ($e(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = be(e[n]);
      s && (t += s + " ");
    }
  else if (he(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Bl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", jl = /* @__PURE__ */ Js(Bl);
function gi(e) {
  return !!e || e === "";
}
function Kl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Xs(e[s], t[s]);
  return n;
}
function Xs(e, t) {
  if (e === t) return !0;
  let n = vo(e), s = vo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), s = ft(t), n || s)
    return e === t;
  if (n = Q(e), s = Q(t), n || s)
    return n && s ? Kl(e, t) : !1;
  if (n = he(e), s = he(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !Xs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const vi = (e) => !!(e && e.__v_isRef === !0), z = (e) => $e(e) ? e : e == null ? "" : Q(e) || he(e) && (e.toString === fi || !te(e.toString)) ? vi(e) ? z(e.value) : JSON.stringify(e, mi, 2) : String(e), mi = (e, t) => vi(t) ? mi(e, t.value) : Qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[ws(s, i) + " =>"] = o, n),
    {}
  )
} : ui(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ws(n))
} : ft(t) ? ws(t) : he(t) && !Q(t) && !di(t) ? String(t) : t, ws = (e, t = "") => {
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
class Vl {
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
function Wl() {
  return je;
}
let ye;
const $s = /* @__PURE__ */ new WeakSet();
class yi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, je && je.active && je.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, $s.has(this) && ($s.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || _i(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, yo(this), wi(this);
    const t = ye, n = tt;
    ye = this, tt = !0;
    try {
      return this.fn();
    } finally {
      $i(this), ye = t, tt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        eo(t);
      this.deps = this.depsTail = void 0, yo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? $s.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ls(this) && this.run();
  }
  get dirty() {
    return Ls(this);
  }
}
let bi = 0, pn, gn;
function _i(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gn, gn = e;
    return;
  }
  e.next = pn, pn = e;
}
function Qs() {
  bi++;
}
function Zs() {
  if (--bi > 0)
    return;
  if (gn) {
    let t = gn;
    for (gn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; pn; ) {
    let t = pn;
    for (pn = void 0; t; ) {
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
function wi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function $i(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), eo(s), Ul(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ls(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ki(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ki(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === wn) || (e.globalVersion = wn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ls(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = ye, s = tt;
  ye = e, tt = !0;
  try {
    wi(e);
    const o = e.fn(e._value);
    (t.version === 0 || ut(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    ye = n, tt = s, $i(e), e.flags &= -3;
  }
}
function eo(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      eo(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Ul(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let tt = !0;
const xi = [];
function $t() {
  xi.push(tt), tt = !1;
}
function kt() {
  const e = xi.pop();
  tt = e === void 0 ? !0 : e;
}
function yo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = ye;
    ye = void 0;
    try {
      t();
    } finally {
      ye = n;
    }
  }
}
let wn = 0;
class zl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class to {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!ye || !tt || ye === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== ye)
      n = this.activeLink = new zl(ye, this), ye.deps ? (n.prevDep = ye.depsTail, ye.depsTail.nextDep = n, ye.depsTail = n) : ye.deps = ye.depsTail = n, Ci(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = ye.depsTail, n.nextDep = void 0, ye.depsTail.nextDep = n, ye.depsTail = n, ye.deps === n && (ye.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, wn++, this.notify(t);
  }
  notify(t) {
    Qs();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Zs();
    }
  }
}
function Ci(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Ci(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Jn = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ Symbol(
  ""
), Ps = /* @__PURE__ */ Symbol(
  ""
), $n = /* @__PURE__ */ Symbol(
  ""
);
function Pe(e, t, n) {
  if (tt && ye) {
    let s = Jn.get(e);
    s || Jn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new to()), o.map = s, o.key = n), o.track();
  }
}
function bt(e, t, n, s, o, i) {
  const l = Jn.get(e);
  if (!l) {
    wn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Qs(), t === "clear")
    l.forEach(r);
  else {
    const a = Q(e), f = a && ss(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((h, m) => {
        (m === "length" || m === $n || !ft(m) && m >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), f && r(l.get($n)), t) {
        case "add":
          a ? f && r(l.get("length")) : (r(l.get(Vt)), Qt(e) && r(l.get(Ps)));
          break;
        case "delete":
          a || (r(l.get(Vt)), Qt(e) && r(l.get(Ps)));
          break;
        case "set":
          Qt(e) && r(l.get(Vt));
          break;
      }
  }
  Zs();
}
function Jl(e, t) {
  const n = Jn.get(e);
  return n && n.get(t);
}
function Gt(e) {
  const t = /* @__PURE__ */ de(e);
  return t === e ? t : (Pe(t, "iterate", $n), /* @__PURE__ */ ze(e) ? t : t.map(nt));
}
function ls(e) {
  return Pe(e = /* @__PURE__ */ de(e), "iterate", $n), e;
}
function rt(e, t) {
  return /* @__PURE__ */ xt(e) ? on(/* @__PURE__ */ Wt(e) ? nt(t) : t) : nt(t);
}
const Gl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ks(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return Gt(this).concat(
      ...e.map((t) => Q(t) ? Gt(t) : t)
    );
  },
  entries() {
    return ks(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
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
    return xs(this, "includes", e);
  },
  indexOf(...e) {
    return xs(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return xs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return gt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return un(this, "pop");
  },
  push(...e) {
    return un(this, "push", e);
  },
  reduce(e, ...t) {
    return bo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return bo(this, "reduceRight", e, t);
  },
  shift() {
    return un(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return gt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return un(this, "splice", e);
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
    return un(this, "unshift", e);
  },
  values() {
    return ks(this, "values", (e) => rt(this, e));
  }
};
function ks(e, t, n) {
  const s = ls(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ ze(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Yl = Array.prototype;
function gt(e, t, n, s, o, i) {
  const l = ls(e), r = l !== e && !/* @__PURE__ */ ze(e), a = l[t];
  if (a !== Yl[t]) {
    const h = a.apply(e, i);
    return r ? nt(h) : h;
  }
  let f = n;
  l !== e && (r ? f = function(h, m) {
    return n.call(this, rt(e, h), m, e);
  } : n.length > 2 && (f = function(h, m) {
    return n.call(this, h, m, e);
  }));
  const u = a.call(l, f, s);
  return r && o ? o(u) : u;
}
function bo(e, t, n, s) {
  const o = ls(e), i = o !== e && !/* @__PURE__ */ ze(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(f, u, h) {
    return r && (r = !1, f = rt(e, f)), n.call(this, f, rt(e, u), h, e);
  }) : n.length > 3 && (l = function(f, u, h) {
    return n.call(this, f, u, h, e);
  }));
  const a = o[t](l, ...s);
  return r ? rt(e, a) : a;
}
function xs(e, t, n) {
  const s = /* @__PURE__ */ de(e);
  Pe(s, "iterate", $n);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ as(n[0]) ? (n[0] = /* @__PURE__ */ de(n[0]), s[t](...n)) : o;
}
function un(e, t, n = []) {
  $t(), Qs();
  const s = (/* @__PURE__ */ de(e))[t].apply(e, n);
  return Zs(), kt(), s;
}
const ql = /* @__PURE__ */ Js("__proto__,__v_isRef,__isVue"), Si = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function Xl(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ de(this);
  return Pe(t, "has", e), t.hasOwnProperty(e);
}
class Ti {
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
      return s === (o ? i ? rr : Ii : i ? Ai : Mi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = Q(t);
    if (!o) {
      let a;
      if (l && (a = Gl[n]))
        return a;
      if (n === "hasOwnProperty")
        return Xl;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Te(t) ? t : s
    );
    if ((ft(n) ? Si.has(n) : ql(n)) || (o || Pe(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ Te(r)) {
      const a = l && ss(n) ? r : r.value;
      return o && he(a) ? /* @__PURE__ */ Os(a) : a;
    }
    return he(r) ? o ? /* @__PURE__ */ Os(r) : /* @__PURE__ */ rs(r) : r;
  }
}
class Ei extends Ti {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = Q(t) && ss(n);
    if (!this._isShallow) {
      const f = /* @__PURE__ */ xt(i);
      if (!/* @__PURE__ */ ze(s) && !/* @__PURE__ */ xt(s) && (i = /* @__PURE__ */ de(i), s = /* @__PURE__ */ de(s)), !l && /* @__PURE__ */ Te(i) && !/* @__PURE__ */ Te(s))
        return f || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : ge(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Te(t) ? t : o
    );
    return t === /* @__PURE__ */ de(o) && (r ? ut(s, i) && bt(t, "set", n, s) : bt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = ge(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && bt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ft(n) || !Si.has(n)) && Pe(t, "has", n), s;
  }
  ownKeys(t) {
    return Pe(
      t,
      "iterate",
      Q(t) ? "length" : Vt
    ), Reflect.ownKeys(t);
  }
}
class Ql extends Ti {
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
const Zl = /* @__PURE__ */ new Ei(), er = /* @__PURE__ */ new Ql(), tr = /* @__PURE__ */ new Ei(!0);
const Rs = (e) => e, Dn = (e) => Reflect.getPrototypeOf(e);
function nr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ de(o), l = Qt(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, f = o[e](...s), u = n ? Rs : t ? on : nt;
    return !t && Pe(
      i,
      "iterate",
      a ? Ps : Vt
    ), Ee(
      // inheriting all iterator properties
      Object.create(f),
      {
        // iterator protocol
        next() {
          const { value: h, done: m } = f.next();
          return m ? { value: h, done: m } : {
            value: r ? [u(h[0]), u(h[1])] : u(h),
            done: m
          };
        }
      }
    );
  };
}
function Fn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sr(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ de(i), r = /* @__PURE__ */ de(o);
      e || (ut(o, r) && Pe(l, "get", o), Pe(l, "get", r));
      const { has: a } = Dn(l), f = t ? Rs : e ? on : nt;
      if (a.call(l, o))
        return f(i.get(o));
      if (a.call(l, r))
        return f(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Pe(/* @__PURE__ */ de(o), "iterate", Vt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ de(i), r = /* @__PURE__ */ de(o);
      return e || (ut(o, r) && Pe(l, "has", o), Pe(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ de(r), f = t ? Rs : e ? on : nt;
      return !e && Pe(a, "iterate", Vt), r.forEach((u, h) => o.call(i, f(u), f(h), l));
    }
  };
  return Ee(
    n,
    e ? {
      add: Fn("add"),
      set: Fn("set"),
      delete: Fn("delete"),
      clear: Fn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ de(this), l = Dn(i), r = /* @__PURE__ */ de(o), a = !t && !/* @__PURE__ */ ze(o) && !/* @__PURE__ */ xt(o) ? r : o;
        return l.has.call(i, a) || ut(o, a) && l.has.call(i, o) || ut(r, a) && l.has.call(i, r) || (i.add(a), bt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ ze(i) && !/* @__PURE__ */ xt(i) && (i = /* @__PURE__ */ de(i));
        const l = /* @__PURE__ */ de(this), { has: r, get: a } = Dn(l);
        let f = r.call(l, o);
        f || (o = /* @__PURE__ */ de(o), f = r.call(l, o));
        const u = a.call(l, o);
        return l.set(o, i), f ? ut(i, u) && bt(l, "set", o, i) : bt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ de(this), { has: l, get: r } = Dn(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ de(o), a = l.call(i, o)), r && r.call(i, o);
        const f = i.delete(o);
        return a && bt(i, "delete", o, void 0), f;
      },
      clear() {
        const o = /* @__PURE__ */ de(this), i = o.size !== 0, l = o.clear();
        return i && bt(
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
    n[o] = nr(o, e, t);
  }), n;
}
function no(e, t) {
  const n = sr(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    ge(n, o) && o in s ? n : s,
    o,
    i
  );
}
const or = {
  get: /* @__PURE__ */ no(!1, !1)
}, ir = {
  get: /* @__PURE__ */ no(!1, !0)
}, lr = {
  get: /* @__PURE__ */ no(!0, !1)
};
const Mi = /* @__PURE__ */ new WeakMap(), Ai = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap();
function ar(e) {
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
function ur(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : ar(Ll(e));
}
// @__NO_SIDE_EFFECTS__
function rs(e) {
  return /* @__PURE__ */ xt(e) ? e : so(
    e,
    !1,
    Zl,
    or,
    Mi
  );
}
// @__NO_SIDE_EFFECTS__
function cr(e) {
  return so(
    e,
    !1,
    tr,
    ir,
    Ai
  );
}
// @__NO_SIDE_EFFECTS__
function Os(e) {
  return so(
    e,
    !0,
    er,
    lr,
    Ii
  );
}
function so(e, t, n, s, o) {
  if (!he(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = ur(e);
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
  return /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Wt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function as(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function de(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ de(t) : e;
}
function fr(e) {
  return !ge(e, "__v_skip") && Object.isExtensible(e) && pi(e, "__v_skip", !0), e;
}
const nt = (e) => he(e) ? /* @__PURE__ */ rs(e) : e, on = (e) => he(e) ? /* @__PURE__ */ Os(e) : e;
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  return dr(e, !1);
}
function dr(e, t) {
  return /* @__PURE__ */ Te(e) ? e : new hr(e, t);
}
class hr {
  constructor(t, n) {
    this.dep = new to(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ de(t), this._value = n ? t : nt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ze(t) || /* @__PURE__ */ xt(t);
    t = s ? t : /* @__PURE__ */ de(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : nt(t), this.dep.trigger());
  }
}
function Me(e) {
  return /* @__PURE__ */ Te(e) ? e.value : e;
}
const pr = {
  get: (e, t, n) => t === "__v_raw" ? e : Me(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Te(o) && !/* @__PURE__ */ Te(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Li(e) {
  return /* @__PURE__ */ Wt(e) ? e : new Proxy(e, pr);
}
class gr {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ de(t);
    let o = !0, i = t;
    if (!Q(t) || !ss(String(n)))
      do
        o = !/* @__PURE__ */ as(i) || /* @__PURE__ */ ze(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Me(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Te(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Te(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Jl(this._raw, this._key);
  }
}
class vr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function oo(e, t, n) {
  return /* @__PURE__ */ Te(e) ? e : te(e) ? new vr(e) : he(e) && arguments.length > 1 ? mr(e, t, n) : /* @__PURE__ */ W(e);
}
function mr(e, t, n) {
  return new gr(e, t, n);
}
class yr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new to(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = wn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ye !== this)
      return _i(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return ki(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function br(e, t, n = !1) {
  let s, o;
  return te(e) ? s = e : (s = e.get, o = e.set), new yr(s, o, n);
}
const Hn = {}, Gn = /* @__PURE__ */ new WeakMap();
let Bt;
function _r(e, t = !1, n = Bt) {
  if (n) {
    let s = Gn.get(n);
    s || Gn.set(n, s = []), s.push(e);
  }
}
function wr(e, t, n = me) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, f = (M) => o ? M : /* @__PURE__ */ ze(M) || o === !1 || o === 0 ? _t(M, 1) : _t(M);
  let u, h, m, y, N = !1, T = !1;
  if (/* @__PURE__ */ Te(e) ? (h = () => e.value, N = /* @__PURE__ */ ze(e)) : /* @__PURE__ */ Wt(e) ? (h = () => f(e), N = !0) : Q(e) ? (T = !0, N = e.some((M) => /* @__PURE__ */ Wt(M) || /* @__PURE__ */ ze(M)), h = () => e.map((M) => {
    if (/* @__PURE__ */ Te(M))
      return M.value;
    if (/* @__PURE__ */ Wt(M))
      return f(M);
    if (te(M))
      return a ? a(M, 2) : M();
  })) : te(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      $t();
      try {
        m();
      } finally {
        kt();
      }
    }
    const M = Bt;
    Bt = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Bt = M;
    }
  } : h = ct, t && o) {
    const M = h, U = o === !0 ? 1 / 0 : o;
    h = () => _t(M(), U);
  }
  const O = Wl(), $ = () => {
    u.stop(), O && O.active && Ys(O.effects, u);
  };
  if (i && t) {
    const M = t;
    t = (...U) => {
      M(...U), $();
    };
  }
  let v = T ? new Array(e.length).fill(Hn) : Hn;
  const E = (M) => {
    if (!(!(u.flags & 1) || !u.dirty && !M))
      if (t) {
        const U = u.run();
        if (o || N || (T ? U.some((ee, re) => ut(ee, v[re])) : ut(U, v))) {
          m && m();
          const ee = Bt;
          Bt = u;
          try {
            const re = [
              U,
              // pass undefined as the old value when it's changed for the first time
              v === Hn ? void 0 : T && v[0] === Hn ? [] : v,
              y
            ];
            v = U, a ? a(t, 3, re) : (
              // @ts-expect-error
              t(...re)
            );
          } finally {
            Bt = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(E), u = new yi(h), u.scheduler = l ? () => l(E, !1) : E, y = (M) => _r(M, !1, u), m = u.onStop = () => {
    const M = Gn.get(u);
    if (M) {
      if (a)
        a(M, 4);
      else
        for (const U of M) U();
      Gn.delete(u);
    }
  }, t ? s ? E(!0) : v = u.run() : l ? l(E.bind(null, !0), !0) : u.run(), $.pause = u.pause.bind(u), $.resume = u.resume.bind(u), $.stop = $, $;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !he(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Te(e))
    _t(e.value, t, n);
  else if (Q(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (ui(e) || Qt(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (di(e)) {
    for (const s in e)
      _t(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && _t(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ln(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    us(o, t, n);
  }
}
function st(e, t, n, s) {
  if (te(e)) {
    const o = Ln(e, t, n, s);
    return o && ci(o) && o.catch((i) => {
      us(i, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(st(e[i], t, n, s));
    return o;
  }
}
function us(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || me;
  if (t) {
    let r = t.parent;
    const a = t.proxy, f = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const u = r.ec;
      if (u) {
        for (let h = 0; h < u.length; h++)
          if (u[h](e, a, f) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      $t(), Ln(i, null, 10, [
        e,
        a,
        f
      ]), kt();
      return;
    }
  }
  $r(e, n, o, s, l);
}
function $r(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const De = [];
let it = -1;
const Zt = [];
let At = null, Yt = 0;
const Pi = /* @__PURE__ */ Promise.resolve();
let Yn = null;
function cs(e) {
  const t = Yn || Pi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function kr(e) {
  let t = it + 1, n = De.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = De[s], i = kn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function io(e) {
  if (!(e.flags & 1)) {
    const t = kn(e), n = De[De.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= kn(n) ? De.push(e) : De.splice(kr(t), 0, e), e.flags |= 1, Ri();
  }
}
function Ri() {
  Yn || (Yn = Pi.then(Ni));
}
function xr(e) {
  Q(e) ? Zt.push(...e) : At && e.id === -1 ? At.splice(Yt + 1, 0, e) : e.flags & 1 || (Zt.push(e), e.flags |= 1), Ri();
}
function _o(e, t, n = it + 1) {
  for (; n < De.length; n++) {
    const s = De[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      De.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Oi(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort(
      (n, s) => kn(n) - kn(s)
    );
    if (Zt.length = 0, At) {
      At.push(...t);
      return;
    }
    for (At = t, Yt = 0; Yt < At.length; Yt++) {
      const n = At[Yt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    At = null, Yt = 0;
  }
}
const kn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ni(e) {
  try {
    for (it = 0; it < De.length; it++) {
      const t = De[it];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Ln(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; it < De.length; it++) {
      const t = De[it];
      t && (t.flags &= -2);
    }
    it = -1, De.length = 0, Oi(), Yn = null, (De.length || Zt.length) && Ni();
  }
}
let Ye = null, Di = null;
function qn(e) {
  const t = Ye;
  return Ye = e, Di = e && e.type.__scopeId || null, t;
}
function Fi(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Zn(-1);
    const i = qn(t);
    let l;
    try {
      l = e(...o);
    } finally {
      qn(i), s._d && Zn(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function dt(e, t) {
  if (Ye === null)
    return e;
  const n = gs(Ye), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = me] = t[o];
    i && (te(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && _t(l), s.push({
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
    a && ($t(), st(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), kt());
  }
}
function Cr(e, t) {
  if (He) {
    let n = He.provides;
    const s = He.parent && He.parent.provides;
    s === n && (n = He.provides = Object.create(s)), n[e] = t;
  }
}
function Kn(e, t, n = !1) {
  const s = ml();
  if (s || en) {
    let o = en ? en._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && te(t) ? t.call(s && s.proxy) : t;
  }
}
const Sr = /* @__PURE__ */ Symbol.for("v-scx"), Tr = () => Kn(Sr);
function It(e, t, n) {
  return Hi(e, t, n);
}
function Hi(e, t, n = me) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = Ee({}, n), a = t && s || !t && i !== "post";
  let f;
  if (En) {
    if (i === "sync") {
      const y = Tr();
      f = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = ct, y.resume = ct, y.pause = ct, y;
    }
  }
  const u = He;
  r.call = (y, N, T) => st(y, u, N, T);
  let h = !1;
  i === "post" ? r.scheduler = (y) => {
    Le(y, u && u.suspense);
  } : i !== "sync" && (h = !0, r.scheduler = (y, N) => {
    N ? y() : io(y);
  }), r.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const m = wr(e, t, r);
  return En && (f ? f.push(m) : a && m()), m;
}
function Er(e, t, n) {
  const s = this.proxy, o = $e(e) ? e.includes(".") ? Bi(s, e) : () => s[e] : e.bind(s, s);
  let i;
  te(t) ? i = t : (i = t.handler, n = t);
  const l = Pn(this), r = Hi(o, i.bind(s), n);
  return l(), r;
}
function Bi(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const ji = /* @__PURE__ */ Symbol("_vte"), Ki = (e) => e.__isTeleport, vn = (e) => e && (e.disabled || e.disabled === ""), wo = (e) => e && (e.defer || e.defer === ""), $o = (e) => typeof SVGElement < "u" && e instanceof SVGElement, ko = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ns = (e, t) => {
  const n = e && e.to;
  return $e(n) ? t ? t(n) : null : n;
}, Vi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, f) {
    const {
      mc: u,
      pc: h,
      pbc: m,
      o: { insert: y, querySelector: N, createText: T, createComment: O }
    } = f, $ = vn(t.props);
    let { shapeFlag: v, children: E, dynamicChildren: M } = t;
    if (e == null) {
      const U = t.el = T(""), ee = t.anchor = T("");
      y(U, n, s), y(ee, n, s);
      const re = (P, H) => {
        v & 16 && u(
          E,
          P,
          H,
          o,
          i,
          l,
          r,
          a
        );
      }, ae = () => {
        const P = t.target = Ns(t.props, N), H = Ds(P, t, T, y);
        P && (l !== "svg" && $o(P) ? l = "svg" : l !== "mathml" && ko(P) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), $ || (re(P, H), Vn(t, !1)));
      };
      $ && (re(n, ee), Vn(t, !0)), wo(t.props) ? (t.el.__isMounted = !1, Le(() => {
        ae(), delete t.el.__isMounted;
      }, i)) : ae();
    } else {
      if (wo(t.props) && e.el.__isMounted === !1) {
        Le(() => {
          Vi.process(
            e,
            t,
            n,
            s,
            o,
            i,
            l,
            r,
            a,
            f
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const U = t.anchor = e.anchor, ee = t.target = e.target, re = t.targetAnchor = e.targetAnchor, ae = vn(e.props), P = ae ? n : ee, H = ae ? U : re;
      if (l === "svg" || $o(ee) ? l = "svg" : (l === "mathml" || ko(ee)) && (l = "mathml"), M ? (m(
        e.dynamicChildren,
        M,
        P,
        o,
        i,
        l,
        r
      ), ao(e, t, !0)) : a || h(
        e,
        t,
        P,
        H,
        o,
        i,
        l,
        r,
        !1
      ), $)
        ae ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Bn(
          t,
          n,
          U,
          f,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const c = t.target = Ns(
          t.props,
          N
        );
        c && Bn(
          t,
          c,
          null,
          f,
          0
        );
      } else ae && Bn(
        t,
        ee,
        re,
        f,
        1
      );
      Vn(t, $);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: r,
      anchor: a,
      targetStart: f,
      targetAnchor: u,
      target: h,
      props: m
    } = e;
    if (h && (o(f), o(u)), i && o(a), l & 16) {
      const y = i || !vn(m);
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
  move: Bn,
  hydrate: Mr
};
function Bn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: f, props: u } = e, h = i === 2;
  if (h && s(l, t, n), (!h || vn(u)) && a & 16)
    for (let m = 0; m < f.length; m++)
      o(
        f[m],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function Mr(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: f, createText: u }
}, h) {
  function m(O, $) {
    let v = $;
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
  function y(O, $) {
    $.anchor = h(
      l(O),
      $,
      r(O),
      n,
      s,
      o,
      i
    );
  }
  const N = t.target = Ns(
    t.props,
    a
  ), T = vn(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (T ? (y(e, t), m(N, O), t.targetAnchor || Ds(
      N,
      t,
      u,
      f,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === N ? e : null
    )) : (t.anchor = l(e), m(N, O), t.targetAnchor || Ds(N, t, u, f), h(
      O && l(O),
      t,
      N,
      n,
      s,
      o,
      i
    ))), Vn(t, T);
  } else T && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Ct = Vi;
function Vn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ds(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[ji] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), cn = /* @__PURE__ */ Symbol("_enterCb");
function Ar() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Cn(() => {
    e.isMounted = !0;
  }), Xi(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ge = [Function, Array], Wi = {
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
}, Ui = (e) => {
  const t = e.subTree;
  return t.component ? Ui(t.component) : t;
}, Ir = {
  name: "BaseTransition",
  props: Wi,
  setup(e, { slots: t }) {
    const n = ml(), s = Ar();
    return () => {
      const o = t.default && Gi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = zi(o), l = /* @__PURE__ */ de(e), { mode: r } = l;
      if (s.isLeaving)
        return Cs(i);
      const a = xo(i);
      if (!a)
        return Cs(i);
      let f = Fs(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => f = h
      );
      a.type !== Fe && xn(a, f);
      let u = n.subTree && xo(n.subTree);
      if (u && u.type !== Fe && !jt(u, a) && Ui(n).type !== Fe) {
        let h = Fs(
          u,
          l,
          s,
          n
        );
        if (xn(u, h), r === "out-in" && a.type !== Fe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Cs(i);
        r === "in-out" && a.type !== Fe ? h.delayLeave = (m, y, N) => {
          const T = Ji(
            s,
            u
          );
          T[String(u.key)] = u, m[lt] = () => {
            y(), m[lt] = void 0, delete f.delayedLeave, u = void 0;
          }, f.delayedLeave = () => {
            N(), delete f.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return i;
    };
  }
};
function zi(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Fe) {
        t = n;
        break;
      }
  }
  return t;
}
const Lr = Ir;
function Ji(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Fs(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: f,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: m,
    onLeave: y,
    onAfterLeave: N,
    onLeaveCancelled: T,
    onBeforeAppear: O,
    onAppear: $,
    onAfterAppear: v,
    onAppearCancelled: E
  } = t, M = String(e.key), U = Ji(n, e), ee = (P, H) => {
    P && st(
      P,
      s,
      9,
      H
    );
  }, re = (P, H) => {
    const c = H[1];
    ee(P, H), Q(P) ? P.every((k) => k.length <= 1) && c() : P.length <= 1 && c();
  }, ae = {
    mode: l,
    persisted: r,
    beforeEnter(P) {
      let H = a;
      if (!n.isMounted)
        if (i)
          H = O || a;
        else
          return;
      P[lt] && P[lt](
        !0
        /* cancelled */
      );
      const c = U[M];
      c && jt(e, c) && c.el[lt] && c.el[lt](), ee(H, [P]);
    },
    enter(P) {
      if (U[M] === e) return;
      let H = f, c = u, k = h;
      if (!n.isMounted)
        if (i)
          H = $ || f, c = v || u, k = E || h;
        else
          return;
      let j = !1;
      P[cn] = (fe) => {
        j || (j = !0, fe ? ee(k, [P]) : ee(c, [P]), ae.delayedLeave && ae.delayedLeave(), P[cn] = void 0);
      };
      const G = P[cn].bind(null, !1);
      H ? re(H, [P, G]) : G();
    },
    leave(P, H) {
      const c = String(e.key);
      if (P[cn] && P[cn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return H();
      ee(m, [P]);
      let k = !1;
      P[lt] = (G) => {
        k || (k = !0, H(), G ? ee(T, [P]) : ee(N, [P]), P[lt] = void 0, U[c] === e && delete U[c]);
      };
      const j = P[lt].bind(null, !1);
      U[c] = e, y ? re(y, [P, j]) : j();
    },
    clone(P) {
      const H = Fs(
        P,
        t,
        n,
        s,
        o
      );
      return o && o(H), H;
    }
  };
  return ae;
}
function Cs(e) {
  if (fs(e))
    return e = Pt(e), e.children = null, e;
}
function xo(e) {
  if (!fs(e))
    return Ki(e.type) && e.children ? zi(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && te(n.default))
      return n.default();
  }
}
function xn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, xn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Gi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === ie ? (l.patchFlag & 128 && o++, s = s.concat(
      Gi(l.children, t, r)
    )) : (t || l.type !== Fe) && s.push(r != null ? Pt(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function qe(e, t) {
  return te(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function Yi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Co(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Xn = /* @__PURE__ */ new WeakMap();
function mn(e, t, n, s, o = !1) {
  if (Q(e)) {
    e.forEach(
      (T, O) => mn(
        T,
        t && (Q(t) ? t[O] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (yn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && mn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? gs(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, f = t && t.r, u = r.refs === me ? r.refs = {} : r.refs, h = r.setupState, m = /* @__PURE__ */ de(h), y = h === me ? ai : (T) => Co(u, T) ? !1 : ge(m, T), N = (T, O) => !(O && Co(u, O));
  if (f != null && f !== a) {
    if (So(t), $e(f))
      u[f] = null, y(f) && (h[f] = null);
    else if (/* @__PURE__ */ Te(f)) {
      const T = t;
      N(f, T.k) && (f.value = null), T.k && (u[T.k] = null);
    }
  }
  if (te(a))
    Ln(a, r, 12, [l, u]);
  else {
    const T = $e(a), O = /* @__PURE__ */ Te(a);
    if (T || O) {
      const $ = () => {
        if (e.f) {
          const v = T ? y(a) ? h[a] : u[a] : N() || !e.k ? a.value : u[e.k];
          if (o)
            Q(v) && Ys(v, i);
          else if (Q(v))
            v.includes(i) || v.push(i);
          else if (T)
            u[a] = [i], y(a) && (h[a] = u[a]);
          else {
            const E = [i];
            N(a, e.k) && (a.value = E), e.k && (u[e.k] = E);
          }
        } else T ? (u[a] = l, y(a) && (h[a] = l)) : O && (N(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const v = () => {
          $(), Xn.delete(e);
        };
        v.id = -1, Xn.set(e, v), Le(v, n);
      } else
        So(e), $();
    }
  }
}
function So(e) {
  const t = Xn.get(e);
  t && (t.flags |= 8, Xn.delete(e));
}
is().requestIdleCallback;
is().cancelIdleCallback;
const yn = (e) => !!e.type.__asyncLoader, fs = (e) => e.type.__isKeepAlive;
function Pr(e, t) {
  qi(e, "a", t);
}
function Rr(e, t) {
  qi(e, "da", t);
}
function qi(e, t, n = He) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ds(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      fs(o.parent.vnode) && Or(s, t, n, o), o = o.parent;
  }
}
function Or(e, t, n, s) {
  const o = ds(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Sn(() => {
    Ys(s[t], o);
  }, n);
}
function ds(e, t, n = He, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      $t();
      const r = Pn(n), a = st(t, n, e, l);
      return r(), kt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const St = (e) => (t, n = He) => {
  (!En || e === "sp") && ds(e, (...s) => t(...s), n);
}, Nr = St("bm"), Cn = St("m"), Dr = St(
  "bu"
), Fr = St("u"), Xi = St(
  "bum"
), Sn = St("um"), Hr = St(
  "sp"
), Br = St("rtg"), jr = St("rtc");
function Kr(e, t = He) {
  ds("ec", e, t);
}
const Vr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ke(e, t, n, s) {
  let o;
  const i = n, l = Q(e);
  if (l || $e(e)) {
    const r = l && /* @__PURE__ */ Wt(e);
    let a = !1, f = !1;
    r && (a = !/* @__PURE__ */ ze(e), f = /* @__PURE__ */ xt(e), e = ls(e)), o = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      o[u] = t(
        a ? f ? on(nt(e[u])) : nt(e[u]) : e[u],
        u,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i);
  } else if (he(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (r, a) => t(r, a, void 0, i)
      );
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let a = 0, f = r.length; a < f; a++) {
        const u = r[a];
        o[a] = t(e[u], u, a, i);
      }
    }
  else
    o = [];
  return o;
}
const Hs = (e) => e ? yl(e) ? gs(e) : Hs(e.parent) : null, bn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ Ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => Hs(e.parent),
    $root: (e) => Hs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Zi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      io(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cs.bind(e.proxy)),
    $watch: (e) => Er.bind(e)
  })
), Ss = (e, t) => e !== me && !e.__isScriptSetup && ge(e, t), Wr = {
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
        if (Ss(s, t))
          return l[t] = 1, s[t];
        if (o !== me && ge(o, t))
          return l[t] = 2, o[t];
        if (ge(i, t))
          return l[t] = 3, i[t];
        if (n !== me && ge(n, t))
          return l[t] = 4, n[t];
        Bs && (l[t] = 0);
      }
    }
    const f = bn[t];
    let u, h;
    if (f)
      return t === "$attrs" && Pe(e.attrs, "get", ""), f(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== me && ge(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, ge(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return Ss(o, t) ? (o[t] = n, !0) : s !== me && ge(s, t) ? (s[t] = n, !0) : ge(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== me && r[0] !== "$" && ge(e, r) || Ss(t, r) || ge(i, r) || ge(s, r) || ge(bn, r) || ge(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : ge(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function To(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Bs = !0;
function Ur(e) {
  const t = Zi(e), n = e.proxy, s = e.ctx;
  Bs = !1, t.beforeCreate && Eo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: l,
    watch: r,
    provide: a,
    inject: f,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: m,
    beforeUpdate: y,
    updated: N,
    activated: T,
    deactivated: O,
    beforeDestroy: $,
    beforeUnmount: v,
    destroyed: E,
    unmounted: M,
    render: U,
    renderTracked: ee,
    renderTriggered: re,
    errorCaptured: ae,
    serverPrefetch: P,
    // public API
    expose: H,
    inheritAttrs: c,
    // assets
    components: k,
    directives: j,
    filters: G
  } = t;
  if (f && zr(f, s, null), l)
    for (const pe in l) {
      const V = l[pe];
      te(V) && (s[pe] = V.bind(n));
    }
  if (o) {
    const pe = o.call(n, n);
    he(pe) && (e.data = /* @__PURE__ */ rs(pe));
  }
  if (Bs = !0, i)
    for (const pe in i) {
      const V = i[pe], J = te(V) ? V.bind(n, n) : te(V.get) ? V.get.bind(n, n) : ct, _e = !te(V) && te(V.set) ? V.set.bind(n) : ct, Ve = X({
        get: J,
        set: _e
      });
      Object.defineProperty(s, pe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ve.value,
        set: (Re) => Ve.value = Re
      });
    }
  if (r)
    for (const pe in r)
      Qi(r[pe], s, n, pe);
  if (a) {
    const pe = te(a) ? a.call(n) : a;
    Reflect.ownKeys(pe).forEach((V) => {
      Cr(V, pe[V]);
    });
  }
  u && Eo(u, e, "c");
  function ce(pe, V) {
    Q(V) ? V.forEach((J) => pe(J.bind(n))) : V && pe(V.bind(n));
  }
  if (ce(Nr, h), ce(Cn, m), ce(Dr, y), ce(Fr, N), ce(Pr, T), ce(Rr, O), ce(Kr, ae), ce(jr, ee), ce(Br, re), ce(Xi, v), ce(Sn, M), ce(Hr, P), Q(H))
    if (H.length) {
      const pe = e.exposed || (e.exposed = {});
      H.forEach((V) => {
        Object.defineProperty(pe, V, {
          get: () => n[V],
          set: (J) => n[V] = J,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  U && e.render === ct && (e.render = U), c != null && (e.inheritAttrs = c), k && (e.components = k), j && (e.directives = j), P && Yi(e);
}
function zr(e, t, n = ct) {
  Q(e) && (e = js(e));
  for (const s in e) {
    const o = e[s];
    let i;
    he(o) ? "default" in o ? i = Kn(
      o.from || s,
      o.default,
      !0
    ) : i = Kn(o.from || s) : i = Kn(o), /* @__PURE__ */ Te(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Eo(e, t, n) {
  st(
    Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Qi(e, t, n, s) {
  let o = s.includes(".") ? Bi(n, s) : () => n[s];
  if ($e(e)) {
    const i = t[e];
    te(i) && It(o, i);
  } else if (te(e))
    It(o, e.bind(n));
  else if (he(e))
    if (Q(e))
      e.forEach((i) => Qi(i, t, n, s));
    else {
      const i = te(e.handler) ? e.handler.bind(n) : t[e.handler];
      te(i) && It(o, i, e);
    }
}
function Zi(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (f) => Qn(a, f, l, !0)
  ), Qn(a, t, l)), he(t) && i.set(t, a), a;
}
function Qn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Qn(e, i, n, !0), o && o.forEach(
    (l) => Qn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = Jr[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const Jr = {
  data: Mo,
  props: Ao,
  emits: Ao,
  // objects
  methods: dn,
  computed: dn,
  // lifecycle
  beforeCreate: Ne,
  created: Ne,
  beforeMount: Ne,
  mounted: Ne,
  beforeUpdate: Ne,
  updated: Ne,
  beforeDestroy: Ne,
  beforeUnmount: Ne,
  destroyed: Ne,
  unmounted: Ne,
  activated: Ne,
  deactivated: Ne,
  errorCaptured: Ne,
  serverPrefetch: Ne,
  // assets
  components: dn,
  directives: dn,
  // watch
  watch: Yr,
  // provide / inject
  provide: Mo,
  inject: Gr
};
function Mo(e, t) {
  return t ? e ? function() {
    return Ee(
      te(e) ? e.call(this, this) : e,
      te(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gr(e, t) {
  return dn(js(e), js(t));
}
function js(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Ne(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function dn(e, t) {
  return e ? Ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ao(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ee(
    /* @__PURE__ */ Object.create(null),
    To(e),
    To(t ?? {})
  ) : t;
}
function Yr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ee(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Ne(e[s], t[s]);
  return n;
}
function el() {
  return {
    app: null,
    config: {
      isNativeTag: ai,
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
let qr = 0;
function Xr(e, t) {
  return function(s, o = null) {
    te(s) || (s = Ee({}, s)), o != null && !he(o) && (o = null);
    const i = el(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const f = i.app = {
      _uid: qr++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Ma,
      get config() {
        return i.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return l.has(u) || (u && te(u.install) ? (l.add(u), u.install(f, ...h)) : te(u) && (l.add(u), u(f, ...h))), f;
      },
      mixin(u) {
        return i.mixins.includes(u) || i.mixins.push(u), f;
      },
      component(u, h) {
        return h ? (i.components[u] = h, f) : i.components[u];
      },
      directive(u, h) {
        return h ? (i.directives[u] = h, f) : i.directives[u];
      },
      mount(u, h, m) {
        if (!a) {
          const y = f._ceVNode || Se(s, o);
          return y.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(y, u, m), a = !0, f._container = u, u.__vue_app__ = f, gs(y.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (st(
          r,
          f._instance,
          16
        ), e(null, f._container), delete f._container.__vue_app__);
      },
      provide(u, h) {
        return i.provides[u] = h, f;
      },
      runWithContext(u) {
        const h = en;
        en = f;
        try {
          return u();
        } finally {
          en = h;
        }
      }
    };
    return f;
  };
}
let en = null;
const Qr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${et(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function Zr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || me;
  let o = n;
  const i = t.startsWith("update:"), l = i && Qr(s, t.slice(7));
  l && (l.trim && (o = n.map((u) => $e(u) ? u.trim() : u)), l.number && (o = n.map(qs)));
  let r, a = s[r = _s(t)] || // also try camelCase event handler (#2249)
  s[r = _s(et(t))];
  !a && i && (a = s[r = _s(Rt(t))]), a && st(
    a,
    e,
    6,
    o
  );
  const f = s[r + "Once"];
  if (f) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, st(
      f,
      e,
      6,
      o
    );
  }
}
const ea = /* @__PURE__ */ new WeakMap();
function tl(e, t, n = !1) {
  const s = n ? ea : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!te(e)) {
    const a = (f) => {
      const u = tl(f, t, !0);
      u && (r = !0, Ee(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (he(e) && s.set(e, null), null) : (Q(i) ? i.forEach((a) => l[a] = null) : Ee(l, i), he(e) && s.set(e, l), l);
}
function hs(e, t) {
  return !e || !ns(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), ge(e, t[0].toLowerCase() + t.slice(1)) || ge(e, Rt(t)) || ge(e, t));
}
function Io(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: l,
    attrs: r,
    emit: a,
    render: f,
    renderCache: u,
    props: h,
    data: m,
    setupState: y,
    ctx: N,
    inheritAttrs: T
  } = e, O = qn(e);
  let $, v;
  try {
    if (n.shapeFlag & 4) {
      const M = o || s, U = M;
      $ = at(
        f.call(
          U,
          M,
          u,
          h,
          y,
          m,
          N
        )
      ), v = r;
    } else {
      const M = t;
      $ = at(
        M.length > 1 ? M(
          h,
          { attrs: r, slots: l, emit: a }
        ) : M(
          h,
          null
        )
      ), v = t.props ? r : ta(r);
    }
  } catch (M) {
    _n.length = 0, us(M, e, 1), $ = Se(Fe);
  }
  let E = $;
  if (v && T !== !1) {
    const M = Object.keys(v), { shapeFlag: U } = E;
    M.length && U & 7 && (i && M.some(Gs) && (v = na(
      v,
      i
    )), E = Pt(E, v, !1, !0));
  }
  return n.dirs && (E = Pt(E, null, !1, !0), E.dirs = E.dirs ? E.dirs.concat(n.dirs) : n.dirs), n.transition && xn(E, n.transition), $ = E, qn(O), $;
}
const ta = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || ns(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, na = (e, t) => {
  const n = {};
  for (const s in e)
    (!Gs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function sa(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, f = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Lo(s, l, f) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const m = u[h];
        if (nl(l, s, m) && !hs(f, m))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? Lo(s, l, f) : !0 : !!l;
  return !1;
}
function Lo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (nl(t, e, i) && !hs(n, i))
      return !0;
  }
  return !1;
}
function nl(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && he(s) && he(o) ? !Xs(s, o) : s !== o;
}
function oa({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const sl = {}, ol = () => Object.create(sl), il = (e) => Object.getPrototypeOf(e) === sl;
function ia(e, t, n, s = !1) {
  const o = {}, i = ol();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ll(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ cr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function la(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ de(o), [a] = e.propsOptions;
  let f = !1;
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
        if (hs(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (a)
          if (ge(i, m))
            y !== i[m] && (i[m] = y, f = !0);
          else {
            const N = et(m);
            o[N] = Ks(
              a,
              r,
              N,
              y,
              e,
              !1
            );
          }
        else
          y !== i[m] && (i[m] = y, f = !0);
      }
    }
  } else {
    ll(e, t, o, i) && (f = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !ge(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Rt(h)) === h || !ge(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[h] = Ks(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== r)
      for (const h in i)
        (!t || !ge(t, h)) && (delete i[h], f = !0);
  }
  f && bt(e.attrs, "set", "");
}
function ll(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (hn(a))
        continue;
      const f = t[a];
      let u;
      o && ge(o, u = et(a)) ? !i || !i.includes(u) ? n[u] = f : (r || (r = {}))[u] = f : hs(e.emitsOptions, a) || (!(a in s) || f !== s[a]) && (s[a] = f, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ de(n), f = r || me;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = Ks(
        o,
        a,
        h,
        f[h],
        e,
        !ge(f, h)
      );
    }
  }
  return l;
}
function Ks(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = ge(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && te(a)) {
        const { propsDefaults: f } = o;
        if (n in f)
          s = f[n];
        else {
          const u = Pn(o);
          s = f[n] = a.call(
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
const ra = /* @__PURE__ */ new WeakMap();
function rl(e, t, n = !1) {
  const s = n ? ra : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!te(e)) {
    const u = (h) => {
      a = !0;
      const [m, y] = rl(h, t, !0);
      Ee(l, m), y && r.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return he(e) && s.set(e, Xt), Xt;
  if (Q(i))
    for (let u = 0; u < i.length; u++) {
      const h = et(i[u]);
      Po(h) && (l[h] = me);
    }
  else if (i)
    for (const u in i) {
      const h = et(u);
      if (Po(h)) {
        const m = i[u], y = l[h] = Q(m) || te(m) ? { type: m } : Ee({}, m), N = y.type;
        let T = !1, O = !0;
        if (Q(N))
          for (let $ = 0; $ < N.length; ++$) {
            const v = N[$], E = te(v) && v.name;
            if (E === "Boolean") {
              T = !0;
              break;
            } else E === "String" && (O = !1);
          }
        else
          T = te(N) && N.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = T, y[
          1
          /* shouldCastTrue */
        ] = O, (T || ge(y, "default")) && r.push(h);
      }
    }
  const f = [l, r];
  return he(e) && s.set(e, f), f;
}
function Po(e) {
  return e[0] !== "$" && !hn(e);
}
const lo = (e) => e === "_" || e === "_ctx" || e === "$stable", ro = (e) => Q(e) ? e.map(at) : [at(e)], aa = (e, t, n) => {
  if (t._n)
    return t;
  const s = Fi((...o) => ro(t(...o)), n);
  return s._c = !1, s;
}, al = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (lo(o)) continue;
    const i = e[o];
    if (te(i))
      t[o] = aa(o, i, s);
    else if (i != null) {
      const l = ro(i);
      t[o] = () => l;
    }
  }
}, ul = (e, t) => {
  const n = ro(t);
  e.slots.default = () => n;
}, cl = (e, t, n) => {
  for (const s in t)
    (n || !lo(s)) && (e[s] = t[s]);
}, ua = (e, t, n) => {
  const s = e.slots = ol();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (cl(s, t, n), n && pi(s, "_", o, !0)) : al(t, s);
  } else t && ul(e, t);
}, ca = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = me;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : cl(o, t, n) : (i = !t.$stable, al(t, o)), l = t;
  } else t && (ul(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !lo(r) && l[r] == null && delete o[r];
}, Le = ga;
function fa(e) {
  return da(e);
}
function da(e, t) {
  const n = is();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: l,
    createText: r,
    createComment: a,
    setText: f,
    setElementText: u,
    parentNode: h,
    nextSibling: m,
    setScopeId: y = ct,
    insertStaticContent: N
  } = e, T = (d, g, _, R = null, A = null, I = null, B = void 0, F = null, D = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !jt(d, g) && (R = Qe(d), Re(d, A, I, !0), d = null), g.patchFlag === -2 && (D = !1, g.dynamicChildren = null);
    const { type: S, ref: q, shapeFlag: K } = g;
    switch (S) {
      case ps:
        O(d, g, _, R);
        break;
      case Fe:
        $(d, g, _, R);
        break;
      case Wn:
        d == null && v(g, _, R, B);
        break;
      case ie:
        k(
          d,
          g,
          _,
          R,
          A,
          I,
          B,
          F,
          D
        );
        break;
      default:
        K & 1 ? U(
          d,
          g,
          _,
          R,
          A,
          I,
          B,
          F,
          D
        ) : K & 6 ? j(
          d,
          g,
          _,
          R,
          A,
          I,
          B,
          F,
          D
        ) : (K & 64 || K & 128) && S.process(
          d,
          g,
          _,
          R,
          A,
          I,
          B,
          F,
          D,
          Ze
        );
    }
    q != null && A ? mn(q, d && d.ref, I, g || d, !g) : q == null && d && d.ref != null && mn(d.ref, null, I, d, !0);
  }, O = (d, g, _, R) => {
    if (d == null)
      s(
        g.el = r(g.children),
        _,
        R
      );
    else {
      const A = g.el = d.el;
      g.children !== d.children && f(A, g.children);
    }
  }, $ = (d, g, _, R) => {
    d == null ? s(
      g.el = a(g.children || ""),
      _,
      R
    ) : g.el = d.el;
  }, v = (d, g, _, R) => {
    [d.el, d.anchor] = N(
      d.children,
      g,
      _,
      R,
      d.el,
      d.anchor
    );
  }, E = ({ el: d, anchor: g }, _, R) => {
    let A;
    for (; d && d !== g; )
      A = m(d), s(d, _, R), d = A;
    s(g, _, R);
  }, M = ({ el: d, anchor: g }) => {
    let _;
    for (; d && d !== g; )
      _ = m(d), o(d), d = _;
    o(g);
  }, U = (d, g, _, R, A, I, B, F, D) => {
    if (g.type === "svg" ? B = "svg" : g.type === "math" && (B = "mathml"), d == null)
      ee(
        g,
        _,
        R,
        A,
        I,
        B,
        F,
        D
      );
    else {
      const S = d.el && d.el._isVueCE ? d.el : null;
      try {
        S && S._beginPatch(), P(
          d,
          g,
          A,
          I,
          B,
          F,
          D
        );
      } finally {
        S && S._endPatch();
      }
    }
  }, ee = (d, g, _, R, A, I, B, F) => {
    let D, S;
    const { props: q, shapeFlag: K, transition: Y, dirs: Z } = d;
    if (D = d.el = l(
      d.type,
      I,
      q && q.is,
      q
    ), K & 8 ? u(D, d.children) : K & 16 && ae(
      d.children,
      D,
      null,
      R,
      A,
      Ts(d, I),
      B,
      F
    ), Z && Nt(d, null, R, "created"), re(D, d, d.scopeId, B, R), q) {
      for (const ve in q)
        ve !== "value" && !hn(ve) && i(D, ve, null, q[ve], I, R);
      "value" in q && i(D, "value", null, q.value, I), (S = q.onVnodeBeforeMount) && ot(S, R, d);
    }
    Z && Nt(d, null, R, "beforeMount");
    const le = ha(A, Y);
    le && Y.beforeEnter(D), s(D, g, _), ((S = q && q.onVnodeMounted) || le || Z) && Le(() => {
      S && ot(S, R, d), le && Y.enter(D), Z && Nt(d, null, R, "mounted");
    }, A);
  }, re = (d, g, _, R, A) => {
    if (_ && y(d, _), R)
      for (let I = 0; I < R.length; I++)
        y(d, R[I]);
    if (A) {
      let I = A.subTree;
      if (g === I || hl(I.type) && (I.ssContent === g || I.ssFallback === g)) {
        const B = A.vnode;
        re(
          d,
          B,
          B.scopeId,
          B.slotScopeIds,
          A.parent
        );
      }
    }
  }, ae = (d, g, _, R, A, I, B, F, D = 0) => {
    for (let S = D; S < d.length; S++) {
      const q = d[S] = F ? yt(d[S]) : at(d[S]);
      T(
        null,
        q,
        g,
        _,
        R,
        A,
        I,
        B,
        F
      );
    }
  }, P = (d, g, _, R, A, I, B) => {
    const F = g.el = d.el;
    let { patchFlag: D, dynamicChildren: S, dirs: q } = g;
    D |= d.patchFlag & 16;
    const K = d.props || me, Y = g.props || me;
    let Z;
    if (_ && Dt(_, !1), (Z = Y.onVnodeBeforeUpdate) && ot(Z, _, g, d), q && Nt(g, d, _, "beforeUpdate"), _ && Dt(_, !0), (K.innerHTML && Y.innerHTML == null || K.textContent && Y.textContent == null) && u(F, ""), S ? H(
      d.dynamicChildren,
      S,
      F,
      _,
      R,
      Ts(g, A),
      I
    ) : B || V(
      d,
      g,
      F,
      null,
      _,
      R,
      Ts(g, A),
      I,
      !1
    ), D > 0) {
      if (D & 16)
        c(F, K, Y, _, A);
      else if (D & 2 && K.class !== Y.class && i(F, "class", null, Y.class, A), D & 4 && i(F, "style", K.style, Y.style, A), D & 8) {
        const le = g.dynamicProps;
        for (let ve = 0; ve < le.length; ve++) {
          const b = le[ve], w = K[b], x = Y[b];
          (x !== w || b === "value") && i(F, b, w, x, A, _);
        }
      }
      D & 1 && d.children !== g.children && u(F, g.children);
    } else !B && S == null && c(F, K, Y, _, A);
    ((Z = Y.onVnodeUpdated) || q) && Le(() => {
      Z && ot(Z, _, g, d), q && Nt(g, d, _, "updated");
    }, R);
  }, H = (d, g, _, R, A, I, B) => {
    for (let F = 0; F < g.length; F++) {
      const D = d[F], S = g[F], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === ie || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !jt(D, S) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? h(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      T(
        D,
        S,
        q,
        null,
        R,
        A,
        I,
        B,
        !0
      );
    }
  }, c = (d, g, _, R, A) => {
    if (g !== _) {
      if (g !== me)
        for (const I in g)
          !hn(I) && !(I in _) && i(
            d,
            I,
            g[I],
            null,
            A,
            R
          );
      for (const I in _) {
        if (hn(I)) continue;
        const B = _[I], F = g[I];
        B !== F && I !== "value" && i(d, I, F, B, A, R);
      }
      "value" in _ && i(d, "value", g.value, _.value, A);
    }
  }, k = (d, g, _, R, A, I, B, F, D) => {
    const S = g.el = d ? d.el : r(""), q = g.anchor = d ? d.anchor : r("");
    let { patchFlag: K, dynamicChildren: Y, slotScopeIds: Z } = g;
    Z && (F = F ? F.concat(Z) : Z), d == null ? (s(S, _, R), s(q, _, R), ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      _,
      q,
      A,
      I,
      B,
      F,
      D
    )) : K > 0 && K & 64 && Y && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === Y.length ? (H(
      d.dynamicChildren,
      Y,
      _,
      A,
      I,
      B,
      F
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || A && g === A.subTree) && ao(
      d,
      g,
      !0
      /* shallow */
    )) : V(
      d,
      g,
      _,
      q,
      A,
      I,
      B,
      F,
      D
    );
  }, j = (d, g, _, R, A, I, B, F, D) => {
    g.slotScopeIds = F, d == null ? g.shapeFlag & 512 ? A.ctx.activate(
      g,
      _,
      R,
      B,
      D
    ) : G(
      g,
      _,
      R,
      A,
      I,
      B,
      D
    ) : fe(d, g, D);
  }, G = (d, g, _, R, A, I, B) => {
    const F = d.component = $a(
      d,
      R,
      A
    );
    if (fs(d) && (F.ctx.renderer = Ze), ka(F, !1, B), F.asyncDep) {
      if (A && A.registerDep(F, ce, B), !d.el) {
        const D = F.subTree = Se(Fe);
        $(null, D, g, _), d.placeholder = D.el;
      }
    } else
      ce(
        F,
        d,
        g,
        _,
        A,
        I,
        B
      );
  }, fe = (d, g, _) => {
    const R = g.component = d.component;
    if (sa(d, g, _))
      if (R.asyncDep && !R.asyncResolved) {
        pe(R, g, _);
        return;
      } else
        R.next = g, R.update();
    else
      g.el = d.el, R.vnode = g;
  }, ce = (d, g, _, R, A, I, B) => {
    const F = () => {
      if (d.isMounted) {
        let { next: K, bu: Y, u: Z, parent: le, vnode: ve } = d;
        {
          const ue = fl(d);
          if (ue) {
            K && (K.el = ve.el, pe(d, K, B)), ue.asyncDep.then(() => {
              Le(() => {
                d.isUnmounted || S();
              }, A);
            });
            return;
          }
        }
        let b = K, w;
        Dt(d, !1), K ? (K.el = ve.el, pe(d, K, B)) : K = ve, Y && jn(Y), (w = K.props && K.props.onVnodeBeforeUpdate) && ot(w, le, K, ve), Dt(d, !0);
        const x = Io(d), ne = d.subTree;
        d.subTree = x, T(
          ne,
          x,
          // parent may have changed if it's in a teleport
          h(ne.el),
          // anchor may have changed if it's in a fragment
          Qe(ne),
          d,
          A,
          I
        ), K.el = x.el, b === null && oa(d, x.el), Z && Le(Z, A), (w = K.props && K.props.onVnodeUpdated) && Le(
          () => ot(w, le, K, ve),
          A
        );
      } else {
        let K;
        const { el: Y, props: Z } = g, { bm: le, m: ve, parent: b, root: w, type: x } = d, ne = yn(g);
        Dt(d, !1), le && jn(le), !ne && (K = Z && Z.onVnodeBeforeMount) && ot(K, b, g), Dt(d, !0);
        {
          w.ce && w.ce._hasShadowRoot() && w.ce._injectChildStyle(
            x,
            d.parent ? d.parent.type : void 0
          );
          const ue = d.subTree = Io(d);
          T(
            null,
            ue,
            _,
            R,
            d,
            A,
            I
          ), g.el = ue.el;
        }
        if (ve && Le(ve, A), !ne && (K = Z && Z.onVnodeMounted)) {
          const ue = g;
          Le(
            () => ot(K, b, ue),
            A
          );
        }
        (g.shapeFlag & 256 || b && yn(b.vnode) && b.vnode.shapeFlag & 256) && d.a && Le(d.a, A), d.isMounted = !0, g = _ = R = null;
      }
    };
    d.scope.on();
    const D = d.effect = new yi(F);
    d.scope.off();
    const S = d.update = D.run.bind(D), q = d.job = D.runIfDirty.bind(D);
    q.i = d, q.id = d.uid, D.scheduler = () => io(q), Dt(d, !0), S();
  }, pe = (d, g, _) => {
    g.component = d;
    const R = d.vnode.props;
    d.vnode = g, d.next = null, la(d, g.props, R, _), ca(d, g.children, _), $t(), _o(d), kt();
  }, V = (d, g, _, R, A, I, B, F, D = !1) => {
    const S = d && d.children, q = d ? d.shapeFlag : 0, K = g.children, { patchFlag: Y, shapeFlag: Z } = g;
    if (Y > 0) {
      if (Y & 128) {
        _e(
          S,
          K,
          _,
          R,
          A,
          I,
          B,
          F,
          D
        );
        return;
      } else if (Y & 256) {
        J(
          S,
          K,
          _,
          R,
          A,
          I,
          B,
          F,
          D
        );
        return;
      }
    }
    Z & 8 ? (q & 16 && Je(S, A, I), K !== S && u(_, K)) : q & 16 ? Z & 16 ? _e(
      S,
      K,
      _,
      R,
      A,
      I,
      B,
      F,
      D
    ) : Je(S, A, I, !0) : (q & 8 && u(_, ""), Z & 16 && ae(
      K,
      _,
      R,
      A,
      I,
      B,
      F,
      D
    ));
  }, J = (d, g, _, R, A, I, B, F, D) => {
    d = d || Xt, g = g || Xt;
    const S = d.length, q = g.length, K = Math.min(S, q);
    let Y;
    for (Y = 0; Y < K; Y++) {
      const Z = g[Y] = D ? yt(g[Y]) : at(g[Y]);
      T(
        d[Y],
        Z,
        _,
        null,
        A,
        I,
        B,
        F,
        D
      );
    }
    S > q ? Je(
      d,
      A,
      I,
      !0,
      !1,
      K
    ) : ae(
      g,
      _,
      R,
      A,
      I,
      B,
      F,
      D,
      K
    );
  }, _e = (d, g, _, R, A, I, B, F, D) => {
    let S = 0;
    const q = g.length;
    let K = d.length - 1, Y = q - 1;
    for (; S <= K && S <= Y; ) {
      const Z = d[S], le = g[S] = D ? yt(g[S]) : at(g[S]);
      if (jt(Z, le))
        T(
          Z,
          le,
          _,
          null,
          A,
          I,
          B,
          F,
          D
        );
      else
        break;
      S++;
    }
    for (; S <= K && S <= Y; ) {
      const Z = d[K], le = g[Y] = D ? yt(g[Y]) : at(g[Y]);
      if (jt(Z, le))
        T(
          Z,
          le,
          _,
          null,
          A,
          I,
          B,
          F,
          D
        );
      else
        break;
      K--, Y--;
    }
    if (S > K) {
      if (S <= Y) {
        const Z = Y + 1, le = Z < q ? g[Z].el : R;
        for (; S <= Y; )
          T(
            null,
            g[S] = D ? yt(g[S]) : at(g[S]),
            _,
            le,
            A,
            I,
            B,
            F,
            D
          ), S++;
      }
    } else if (S > Y)
      for (; S <= K; )
        Re(d[S], A, I, !0), S++;
    else {
      const Z = S, le = S, ve = /* @__PURE__ */ new Map();
      for (S = le; S <= Y; S++) {
        const ke = g[S] = D ? yt(g[S]) : at(g[S]);
        ke.key != null && ve.set(ke.key, S);
      }
      let b, w = 0;
      const x = Y - le + 1;
      let ne = !1, ue = 0;
      const Oe = new Array(x);
      for (S = 0; S < x; S++) Oe[S] = 0;
      for (S = Z; S <= K; S++) {
        const ke = d[S];
        if (w >= x) {
          Re(ke, A, I, !0);
          continue;
        }
        let We;
        if (ke.key != null)
          We = ve.get(ke.key);
        else
          for (b = le; b <= Y; b++)
            if (Oe[b - le] === 0 && jt(ke, g[b])) {
              We = b;
              break;
            }
        We === void 0 ? Re(ke, A, I, !0) : (Oe[We - le] = S + 1, We >= ue ? ue = We : ne = !0, T(
          ke,
          g[We],
          _,
          null,
          A,
          I,
          B,
          F,
          D
        ), w++);
      }
      const we = ne ? pa(Oe) : Xt;
      for (b = we.length - 1, S = x - 1; S >= 0; S--) {
        const ke = le + S, We = g[ke], Jt = g[ke + 1], rn = ke + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Jt.el || dl(Jt)
        ) : R;
        Oe[S] === 0 ? T(
          null,
          We,
          _,
          rn,
          A,
          I,
          B,
          F,
          D
        ) : ne && (b < 0 || S !== we[b] ? Ve(We, _, rn, 2) : b--);
      }
    }
  }, Ve = (d, g, _, R, A = null) => {
    const { el: I, type: B, transition: F, children: D, shapeFlag: S } = d;
    if (S & 6) {
      Ve(d.component.subTree, g, _, R);
      return;
    }
    if (S & 128) {
      d.suspense.move(g, _, R);
      return;
    }
    if (S & 64) {
      B.move(d, g, _, Ze);
      return;
    }
    if (B === ie) {
      s(I, g, _);
      for (let K = 0; K < D.length; K++)
        Ve(D[K], g, _, R);
      s(d.anchor, g, _);
      return;
    }
    if (B === Wn) {
      E(d, g, _);
      return;
    }
    if (R !== 2 && S & 1 && F)
      if (R === 0)
        F.beforeEnter(I), s(I, g, _), Le(() => F.enter(I), A);
      else {
        const { leave: K, delayLeave: Y, afterLeave: Z } = F, le = () => {
          d.ctx.isUnmounted ? o(I) : s(I, g, _);
        }, ve = () => {
          I._isLeaving && I[lt](
            !0
            /* cancelled */
          ), K(I, () => {
            le(), Z && Z();
          });
        };
        Y ? Y(I, le, ve) : ve();
      }
    else
      s(I, g, _);
  }, Re = (d, g, _, R = !1, A = !1) => {
    const {
      type: I,
      props: B,
      ref: F,
      children: D,
      dynamicChildren: S,
      shapeFlag: q,
      patchFlag: K,
      dirs: Y,
      cacheIndex: Z
    } = d;
    if (K === -2 && (A = !1), F != null && ($t(), mn(F, null, _, d, !0), kt()), Z != null && (g.renderCache[Z] = void 0), q & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const le = q & 1 && Y, ve = !yn(d);
    let b;
    if (ve && (b = B && B.onVnodeBeforeUnmount) && ot(b, g, d), q & 6)
      Ot(d.component, _, R);
    else {
      if (q & 128) {
        d.suspense.unmount(_, R);
        return;
      }
      le && Nt(d, null, g, "beforeUnmount"), q & 64 ? d.type.remove(
        d,
        g,
        _,
        Ze,
        R
      ) : S && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !S.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== ie || K > 0 && K & 64) ? Je(
        S,
        g,
        _,
        !1,
        !0
      ) : (I === ie && K & 384 || !A && q & 16) && Je(D, g, _), R && zt(d);
    }
    (ve && (b = B && B.onVnodeUnmounted) || le) && Le(() => {
      b && ot(b, g, d), le && Nt(d, null, g, "unmounted");
    }, _);
  }, zt = (d) => {
    const { type: g, el: _, anchor: R, transition: A } = d;
    if (g === ie) {
      ln(_, R);
      return;
    }
    if (g === Wn) {
      M(d);
      return;
    }
    const I = () => {
      o(_), A && !A.persisted && A.afterLeave && A.afterLeave();
    };
    if (d.shapeFlag & 1 && A && !A.persisted) {
      const { leave: B, delayLeave: F } = A, D = () => B(_, I);
      F ? F(d.el, I, D) : D();
    } else
      I();
  }, ln = (d, g) => {
    let _;
    for (; d !== g; )
      _ = m(d), o(d), d = _;
    o(g);
  }, Ot = (d, g, _) => {
    const { bum: R, scope: A, job: I, subTree: B, um: F, m: D, a: S } = d;
    Ro(D), Ro(S), R && jn(R), A.stop(), I && (I.flags |= 8, Re(B, d, g, _)), F && Le(F, g), Le(() => {
      d.isUnmounted = !0;
    }, g);
  }, Je = (d, g, _, R = !1, A = !1, I = 0) => {
    for (let B = I; B < d.length; B++)
      Re(d[B], g, _, R, A);
  }, Qe = (d) => {
    if (d.shapeFlag & 6)
      return Qe(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const g = m(d.anchor || d.el), _ = g && g[ji];
    return _ ? m(_) : g;
  };
  let Ie = !1;
  const pt = (d, g, _) => {
    let R;
    d == null ? g._vnode && (Re(g._vnode, null, null, !0), R = g._vnode.component) : T(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      _
    ), g._vnode = d, Ie || (Ie = !0, _o(R), Oi(), Ie = !1);
  }, Ze = {
    p: T,
    um: Re,
    m: Ve,
    r: zt,
    mt: G,
    mc: ae,
    pc: V,
    pbc: H,
    n: Qe,
    o: e
  };
  return {
    render: pt,
    hydrate: void 0,
    createApp: Xr(pt)
  };
}
function Ts({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Dt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ha(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function ao(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Q(s) && Q(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = yt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && ao(l, r)), r.type === ps && (r.patchFlag === -1 && (r = o[i] = yt(r)), r.el = l.el), r.type === Fe && !r.el && (r.el = l.el);
    }
}
function pa(e) {
  const t = e.slice(), n = [0];
  let s, o, i, l, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const f = e[s];
    if (f !== 0) {
      if (o = n[n.length - 1], e[o] < f) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        r = i + l >> 1, e[n[r]] < f ? i = r + 1 : l = r;
      f < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function fl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : fl(t);
}
function Ro(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function dl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? dl(t.subTree) : null;
}
const hl = (e) => e.__isSuspense;
function ga(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : xr(e);
}
const ie = /* @__PURE__ */ Symbol.for("v-fgt"), ps = /* @__PURE__ */ Symbol.for("v-txt"), Fe = /* @__PURE__ */ Symbol.for("v-cmt"), Wn = /* @__PURE__ */ Symbol.for("v-stc"), _n = [];
let Ue = null;
function C(e = !1) {
  _n.push(Ue = e ? null : []);
}
function va() {
  _n.pop(), Ue = _n[_n.length - 1] || null;
}
let Tn = 1;
function Zn(e, t = !1) {
  Tn += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function pl(e) {
  return e.dynamicChildren = Tn > 0 ? Ue || Xt : null, va(), Tn > 0 && Ue && Ue.push(e), e;
}
function L(e, t, n, s, o, i) {
  return pl(
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
function Ae(e, t, n, s, o) {
  return pl(
    Se(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function es(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function jt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const gl = ({ key: e }) => e ?? null, Un = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? $e(e) || /* @__PURE__ */ Te(e) || te(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === ie ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && gl(t),
    ref: t && Un(t),
    scopeId: Di,
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
  return r ? (uo(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= $e(n) ? 8 : 16), Tn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const Se = ma;
function ma(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Vr) && (e = Fe), es(e)) {
    const r = Pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && uo(r, n), Tn > 0 && !i && Ue && (r.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = r : Ue.push(r)), r.patchFlag = -2, r;
  }
  if (Ta(e) && (e = e.__vccOpts), t) {
    t = ya(t);
    let { class: r, style: a } = t;
    r && !$e(r) && (t.class = be(r)), he(a) && (/* @__PURE__ */ as(a) && !Q(a) && (a = Ee({}, a)), t.style = Lt(a));
  }
  const l = $e(e) ? 1 : hl(e) ? 128 : Ki(e) ? 64 : he(e) ? 4 : te(e) ? 2 : 0;
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
function ya(e) {
  return e ? /* @__PURE__ */ as(e) || il(e) ? Ee({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, f = t ? ba(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: f,
    key: f && gl(f),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(Un(t)) : [i, Un(t)] : Un(t)
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
    ssContent: e.ssContent && Pt(e.ssContent),
    ssFallback: e.ssFallback && Pt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && xn(
    u,
    a.clone(u)
  ), u;
}
function wt(e = " ", t = 0) {
  return Se(ps, null, e, t);
}
function vl(e, t) {
  const n = Se(Wn, null, e);
  return n.staticCount = t, n;
}
function oe(e = "", t = !1) {
  return t ? (C(), Ae(Fe, null, e)) : Se(Fe, null, e);
}
function at(e) {
  return e == null || typeof e == "boolean" ? Se(Fe) : Q(e) ? Se(
    ie,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : es(e) ? yt(e) : Se(ps, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pt(e);
}
function uo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), uo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !il(t) ? t._ctx = Ye : o === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else te(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [wt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ba(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = be([t.class, s.class]));
      else if (o === "style")
        t.style = Lt([t.style, s.style]);
      else if (ns(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(Q(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
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
const _a = el();
let wa = 0;
function $a(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || _a, i = {
    uid: wa++,
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
    scope: new Vl(
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
    propsOptions: rl(s, o),
    emitsOptions: tl(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: me,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: me,
    data: me,
    props: me,
    attrs: me,
    slots: me,
    refs: me,
    setupState: me,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Zr.bind(null, i), e.ce && e.ce(i), i;
}
let He = null;
const ml = () => He || Ye;
let ts, Vs;
{
  const e = is(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  ts = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => He = n
  ), Vs = t(
    "__VUE_SSR_SETTERS__",
    (n) => En = n
  );
}
const Pn = (e) => {
  const t = He;
  return ts(e), e.scope.on(), () => {
    e.scope.off(), ts(t);
  };
}, Oo = () => {
  He && He.scope.off(), ts(null);
};
function yl(e) {
  return e.vnode.shapeFlag & 4;
}
let En = !1;
function ka(e, t = !1, n = !1) {
  t && Vs(t);
  const { props: s, children: o } = e.vnode, i = yl(e);
  ia(e, s, i, t), ua(e, o, n || t);
  const l = i ? xa(e, t) : void 0;
  return t && Vs(!1), l;
}
function xa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Wr);
  const { setup: s } = n;
  if (s) {
    $t();
    const o = e.setupContext = s.length > 1 ? Sa(e) : null, i = Pn(e), l = Ln(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = ci(l);
    if (kt(), i(), (r || e.sp) && !yn(e) && Yi(e), r) {
      if (l.then(Oo, Oo), t)
        return l.then((a) => {
          No(e, a);
        }).catch((a) => {
          us(a, e, 0);
        });
      e.asyncDep = l;
    } else
      No(e, l);
  } else
    bl(e);
}
function No(e, t, n) {
  te(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : he(t) && (e.setupState = Li(t)), bl(e);
}
function bl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = Pn(e);
    $t();
    try {
      Ur(e);
    } finally {
      kt(), o();
    }
  }
}
const Ca = {
  get(e, t) {
    return Pe(e, "get", ""), e[t];
  }
};
function Sa(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ca),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function gs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Li(fr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in bn)
        return bn[n](e);
    },
    has(t, n) {
      return n in t || n in bn;
    }
  })) : e.proxy;
}
function Ta(e) {
  return te(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ br(e, t, En);
function Ea(e, t, n) {
  try {
    Zn(-1);
    const s = arguments.length;
    return s === 2 ? he(t) && !Q(t) ? es(t) ? Se(e, null, [t]) : Se(e, t) : Se(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && es(n) && (n = [n]), Se(e, t, n));
  } finally {
    Zn(1);
  }
}
const Ma = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Ws;
const Do = typeof window < "u" && window.trustedTypes;
if (Do)
  try {
    Ws = /* @__PURE__ */ Do.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const _l = Ws ? (e) => Ws.createHTML(e) : (e) => e, Aa = "http://www.w3.org/2000/svg", Ia = "http://www.w3.org/1998/Math/MathML", mt = typeof document < "u" ? document : null, Fo = mt && /* @__PURE__ */ mt.createElement("template"), La = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? mt.createElementNS(Aa, e) : t === "mathml" ? mt.createElementNS(Ia, e) : n ? mt.createElement(e, { is: n }) : mt.createElement(e);
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
      Fo.innerHTML = _l(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Fo.content;
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
}, Mt = "transition", fn = "animation", Mn = /* @__PURE__ */ Symbol("_vtc"), wl = {
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
}, Pa = /* @__PURE__ */ Ee(
  {},
  Wi,
  wl
), Ra = (e) => (e.displayName = "Transition", e.props = Pa, e), Oa = /* @__PURE__ */ Ra(
  (e, { slots: t }) => Ea(Lr, Na(e), t)
), Ft = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ho = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Na(e) {
  const t = {};
  for (const k in e)
    k in wl || (t[k] = e[k]);
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
    appearActiveClass: f = l,
    appearToClass: u = r,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: m = `${n}-leave-active`,
    leaveToClass: y = `${n}-leave-to`
  } = e, N = Da(o), T = N && N[0], O = N && N[1], {
    onBeforeEnter: $,
    onEnter: v,
    onEnterCancelled: E,
    onLeave: M,
    onLeaveCancelled: U,
    onBeforeAppear: ee = $,
    onAppear: re = v,
    onAppearCancelled: ae = E
  } = t, P = (k, j, G, fe) => {
    k._enterCancelled = fe, Ht(k, j ? u : r), Ht(k, j ? f : l), G && G();
  }, H = (k, j) => {
    k._isLeaving = !1, Ht(k, h), Ht(k, y), Ht(k, m), j && j();
  }, c = (k) => (j, G) => {
    const fe = k ? re : v, ce = () => P(j, k, G);
    Ft(fe, [j, ce]), Bo(() => {
      Ht(j, k ? a : i), vt(j, k ? u : r), Ho(fe) || jo(j, s, T, ce);
    });
  };
  return Ee(t, {
    onBeforeEnter(k) {
      Ft($, [k]), vt(k, i), vt(k, l);
    },
    onBeforeAppear(k) {
      Ft(ee, [k]), vt(k, a), vt(k, f);
    },
    onEnter: c(!1),
    onAppear: c(!0),
    onLeave(k, j) {
      k._isLeaving = !0;
      const G = () => H(k, j);
      vt(k, h), k._enterCancelled ? (vt(k, m), Wo(k)) : (Wo(k), vt(k, m)), Bo(() => {
        k._isLeaving && (Ht(k, h), vt(k, y), Ho(M) || jo(k, s, O, G));
      }), Ft(M, [k, G]);
    },
    onEnterCancelled(k) {
      P(k, !1, void 0, !0), Ft(E, [k]);
    },
    onAppearCancelled(k) {
      P(k, !0, void 0, !0), Ft(ae, [k]);
    },
    onLeaveCancelled(k) {
      H(k), Ft(U, [k]);
    }
  });
}
function Da(e) {
  if (e == null)
    return null;
  if (he(e))
    return [Es(e.enter), Es(e.leave)];
  {
    const t = Es(e);
    return [t, t];
  }
}
function Es(e) {
  return Ol(e);
}
function vt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Mn] || (e[Mn] = /* @__PURE__ */ new Set())).add(t);
}
function Ht(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Mn];
  n && (n.delete(t), n.size || (e[Mn] = void 0));
}
function Bo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Fa = 0;
function jo(e, t, n, s) {
  const o = e._endId = ++Fa, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Ha(e, t);
  if (!l)
    return s();
  const f = l + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(f, m), i();
  }, m = (y) => {
    y.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, r + 1), e.addEventListener(f, m);
}
function Ha(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${Mt}Delay`), i = s(`${Mt}Duration`), l = Ko(o, i), r = s(`${fn}Delay`), a = s(`${fn}Duration`), f = Ko(r, a);
  let u = null, h = 0, m = 0;
  t === Mt ? l > 0 && (u = Mt, h = l, m = i.length) : t === fn ? f > 0 && (u = fn, h = f, m = a.length) : (h = Math.max(l, f), u = h > 0 ? l > f ? Mt : fn : null, m = u ? u === Mt ? i.length : a.length : 0);
  const y = u === Mt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Mt}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: m,
    hasTransform: y
  };
}
function Ko(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Vo(n) + Vo(e[s])));
}
function Vo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Wo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Ba(e, t, n) {
  const s = e[Mn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const Uo = /* @__PURE__ */ Symbol("_vod"), ja = /* @__PURE__ */ Symbol("_vsh"), Ka = /* @__PURE__ */ Symbol(""), Va = /(?:^|;)\s*display\s*:/;
function Wa(e, t, n) {
  const s = e.style, o = $e(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if ($e(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && zn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && zn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), zn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[Ka];
      l && (n += ";" + l), s.cssText = n, i = Va.test(n);
    }
  } else t && e.removeAttribute("style");
  Uo in e && (e[Uo] = i ? s.display : "", e[ja] && (s.display = "none"));
}
const zo = /\s*!important$/;
function zn(e, t, n) {
  if (Q(n))
    n.forEach((s) => zn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ua(e, t);
    zo.test(n) ? e.setProperty(
      Rt(s),
      n.replace(zo, ""),
      "important"
    ) : e[s] = n;
  }
}
const Jo = ["Webkit", "Moz", "ms"], Ms = {};
function Ua(e, t) {
  const n = Ms[t];
  if (n)
    return n;
  let s = et(t);
  if (s !== "filter" && s in e)
    return Ms[t] = s;
  s = hi(s);
  for (let o = 0; o < Jo.length; o++) {
    const i = Jo[o] + s;
    if (i in e)
      return Ms[t] = i;
  }
  return t;
}
const Go = "http://www.w3.org/1999/xlink";
function Yo(e, t, n, s, o, i = jl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Go, t.slice(6, t.length)) : e.setAttributeNS(Go, t, n) : n == null || i && !gi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
  );
}
function qo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? _l(n) : n);
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
    r === "boolean" ? n = gi(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
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
function za(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Xo = /* @__PURE__ */ Symbol("_vei");
function Ja(e, t, n, s, o = null) {
  const i = e[Xo] || (e[Xo] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = Ga(t);
    if (s) {
      const f = i[t] = Xa(
        s,
        o
      );
      qt(e, r, f, a);
    } else l && (za(e, r, l, a), i[t] = void 0);
  }
}
const Qo = /(?:Once|Passive|Capture)$/;
function Ga(e) {
  let t;
  if (Qo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Qo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let As = 0;
const Ya = /* @__PURE__ */ Promise.resolve(), qa = () => As || (Ya.then(() => As = 0), As = Date.now());
function Xa(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    st(
      Qa(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = qa(), n;
}
function Qa(e, t) {
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
const Zo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Za = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? Ba(e, s, l) : t === "style" ? Wa(e, n, s) : ns(t) ? Gs(t) || Ja(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : eu(e, t, s, l)) ? (qo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Yo(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (tu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !$e(s))) ? qo(e, et(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Yo(e, t, s, l));
};
function eu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Zo(t) && te(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Zo(t) && $e(n) ? !1 : t in e;
}
function tu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = et(t);
  return Array.isArray(n) ? n.some((o) => et(o) === s) : Object.keys(n).some((o) => et(o) === s);
}
const ei = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => jn(t, n) : t;
};
function nu(e) {
  e.target.composing = !0;
}
function ti(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Is = /* @__PURE__ */ Symbol("_assign");
function ni(e, t, n) {
  return t && (e = e.trim()), n && (e = qs(e)), e;
}
const ht = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Is] = ei(o);
    const i = s || o.props && o.props.type === "number";
    qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Is](ni(e.value, n, i));
    }), (n || i) && qt(e, "change", () => {
      e.value = ni(e.value, n, i);
    }), t || (qt(e, "compositionstart", nu), qt(e, "compositionend", ti), qt(e, "change", ti));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[Is] = ei(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? qs(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, su = ["ctrl", "shift", "alt", "meta"], ou = {
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
  exact: (e, t) => su.some((n) => e[`${n}Key`] && !t.includes(n))
}, se = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = ou[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, iu = {
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
      (l) => l === i || iu[l] === i
    ))
      return e(o);
  });
}, lu = /* @__PURE__ */ Ee({ patchProp: Za }, La);
let si;
function ru() {
  return si || (si = fa(lu));
}
const au = (...e) => {
  const t = ru().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = cu(s);
    if (!o) return;
    const i = t._component;
    !te(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, uu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function uu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cu(e) {
  return $e(e) ? document.querySelector(e) : e;
}
const fu = { class: "setup" }, du = { class: "setup-card" }, hu = { class: "field-group" }, pu = { class: "field-group" }, gu = ["disabled"], vu = {
  key: 0,
  class: "error"
}, mu = /* @__PURE__ */ qe({
  __name: "TokenSetup",
  emits: ["token"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ W(localStorage.getItem("ha_url") ?? "http://homeassistant.local:8123"), o = /* @__PURE__ */ W(""), i = /* @__PURE__ */ W(""), l = /* @__PURE__ */ W(null), r = X(() => s.value.trim() && o.value.trim());
    async function a() {
      const f = s.value.trim().replace(/\/$/, ""), u = o.value.trim();
      if (!(!f || !u)) {
        i.value = "", localStorage.setItem("ha_url", f);
        try {
          let h = null;
          try {
            h = await fetch(`${f}/api/`, {
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
    return (f, u) => (C(), L("div", fu, [
      p("div", du, [
        u[5] || (u[5] = p("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = p("p", null, [
          wt(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          wt(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", hu, [
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
        p("div", pu, [
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
        }, "Verbinden", 8, gu),
        i.value ? (C(), L("p", vu, z(i.value), 1)) : oe("", !0)
      ])
    ]));
  }
}), Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, yu = /* @__PURE__ */ Xe(mu, [["__scopeId", "data-v-97d10609"]]);
let co = !1;
const $l = /* @__PURE__ */ W(null);
function kl(e) {
  co = e;
}
function bu() {
  return co;
}
function _u(e) {
  $l.value = e;
}
function wu() {
  return $l;
}
const fo = /* @__PURE__ */ W(localStorage.getItem("ha_auth_key"));
function $u() {
  return fo;
}
function oi(e) {
  fo.value = e, e ? localStorage.setItem("ha_auth_key", e) : localStorage.removeItem("ha_auth_key");
}
function ku(e) {
  return fo.value || e || "";
}
function xl() {
  var e;
  return co ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function Cl() {
  const e = xl();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function vs(e) {
  const t = xl();
  return t ? `${t}${e}` : e;
}
async function Kt(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(vs(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function xu(e) {
  const t = await fetch(vs("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
let xe = null, Us = 1, tn = null;
const Ut = /* @__PURE__ */ new Map(), An = /* @__PURE__ */ new Map(), zs = /* @__PURE__ */ W(0);
let nn = !1, ii = [];
const sn = /* @__PURE__ */ new Map();
function Cu() {
  return Cl();
}
function Sl(e) {
  xe && (xe.readyState === WebSocket.OPEN || xe.readyState === WebSocket.CONNECTING) || (nn = !1, xe = new WebSocket(Cu()), xe.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      xe.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      nn = !0;
      const i = Us++;
      xe.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = Us++;
      xe.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      for (const r of ii) r();
      ii = [];
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
        An.set(i.entity_id, i), li(i.entity_id, i);
      zs.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (An.set(i.entity_id, i), zs.value++, li(i.entity_id, i));
    }
  }, xe.onclose = () => {
    nn = !1, tn && clearTimeout(tn), tn = setTimeout(() => {
      xe = null, Sl(e);
    }, 5e3);
  }, xe.onerror = () => {
    xe == null || xe.close();
  });
}
function li(e, t) {
  const n = Ut.get(e);
  if (n)
    for (const s of n) s(t);
}
function Su(e, t) {
  Ut.has(e) || Ut.set(e, /* @__PURE__ */ new Set()), Ut.get(e).add(t);
  const n = An.get(e);
  n && t(n);
}
function Tu(e, t) {
  const n = Ut.get(e);
  n && (n.delete(t), n.size === 0 && Ut.delete(e));
}
function Eu() {
  tn && (clearTimeout(tn), tn = null), xe && (xe.close(), xe = null), nn = !1, An.clear(), Ut.clear();
}
async function Mu(e, t, n, s) {
  if (!xe || !nn) throw new Error("WebSocket not connected");
  const o = Us++;
  return new Promise((i, l) => {
    sn.set(o, { resolve: i, reject: l }), xe.send(JSON.stringify({
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
function Au(e) {
  let t = e;
  const n = /* @__PURE__ */ W(null), s = /* @__PURE__ */ W(null), o = /* @__PURE__ */ W(!0);
  let i = null;
  function l(f) {
    n.value = f, s.value = null, o.value = !1;
  }
  function r(f, u) {
    a(), u && (t = u), o.value = !0, s.value = null, Sl(f), i = l, Su(t, i), nn || fetch(vs(`/api/states/${t}`), {
      headers: { Authorization: `Bearer ${f}`, "Content-Type": "application/json" }
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
    i && (Tu(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function ho() {
  return { cache: An, version: zs };
}
const Iu = { class: "weather-layout" }, Lu = { class: "weather-left" }, Pu = { class: "weather-temp" }, Ru = { class: "weather-condition" }, Ou = {
  key: 0,
  class: "weather-meta"
}, Nu = {
  key: 0,
  class: "weather-meta-item"
}, Du = {
  key: 1,
  class: "weather-meta-item"
}, Fu = { class: "weather-right" }, Hu = ["innerHTML"], Bu = { class: "ha-modal-header-row" }, ju = { class: "ha-modal-title" }, Ku = { class: "wf-current" }, Vu = { class: "wf-current-left" }, Wu = ["innerHTML"], Uu = { class: "wf-current-info" }, zu = { class: "wf-current-condition" }, Ju = { class: "wf-current-ago" }, Gu = { class: "wf-current-right" }, Yu = { class: "wf-current-temp" }, qu = {
  key: 0,
  class: "wf-current-hilo"
}, Xu = { class: "wf-details" }, Qu = {
  key: 0,
  class: "wf-detail-row"
}, Zu = { class: "wf-detail-value" }, ec = {
  key: 1,
  class: "wf-detail-row"
}, tc = { class: "wf-detail-value" }, nc = {
  key: 2,
  class: "wf-detail-row"
}, sc = { class: "wf-detail-value" }, oc = { class: "wf-tabs" }, ic = {
  key: 0,
  class: "weather-forecast-row"
}, lc = { class: "wf-date" }, rc = ["innerHTML"], ac = { class: "wf-temps" }, uc = { class: "wf-temps-low" }, cc = {
  key: 1,
  class: "ha-modal-empty"
}, fc = {
  key: 0,
  class: "wf-hourly-scroll"
}, dc = { class: "wf-hourly-day-label" }, hc = { class: "weather-forecast-row" }, pc = { class: "wf-date" }, gc = ["innerHTML"], vc = { class: "wf-temps" }, mc = {
  key: 1,
  class: "ha-modal-empty"
}, yc = /* @__PURE__ */ qe({
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
    function o(P, H = 100) {
      const c = H, k = `<path d="M${c * 0.17} ${c * 0.63}a${c * 0.17} ${c * 0.17} 0 0 1 0-${c * 0.33}h${c * 0.04}a${c * 0.23} ${c * 0.23} 0 0 1 ${c * 0.44}-${c * 0.1}a${c * 0.19} ${c * 0.19} 0 0 1 ${c * 0.19} ${c * 0.1}h${c * 0.02}a${c * 0.17} ${c * 0.17} 0 0 1 0 ${c * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${c * 0.04}" stroke-linejoin="round"/>`, j = `<svg viewBox="0 0 ${c} ${c}" width="${c}" height="${c}" xmlns="http://www.w3.org/2000/svg">`, G = "</svg>";
      switch (P) {
        case "sunny":
          return `${j}
        <circle cx="${c / 2}" cy="${c / 2}" r="${c * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${c * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((fe) => {
            const ce = fe * Math.PI / 180, pe = c / 2 + Math.cos(ce) * c * 0.25, V = c / 2 + Math.sin(ce) * c * 0.25, J = c / 2 + Math.cos(ce) * c * 0.35, _e = c / 2 + Math.sin(ce) * c * 0.35;
            return `<line x1="${pe}" y1="${V}" x2="${J}" y2="${_e}" stroke="#f6ad35" stroke-width="${c * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${G}`;
        case "clear-night":
          return `${j}<path d="M${c * 0.58} ${c * 0.15}a${c * 0.33} ${c * 0.33} 0 1 0 ${c * 0.27} ${c * 0.42} ${c * 0.25} ${c * 0.25} 0 0 1-${c * 0.27}-${c * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${c * 0.03}"/>${G}`;
        case "partlycloudy":
          return `${j}
        <circle cx="${c * 0.62}" cy="${c * 0.3}" r="${c * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${c * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((fe) => {
            const ce = fe * Math.PI / 180;
            return `<line x1="${c * 0.62 + Math.cos(ce) * c * 0.19}" y1="${c * 0.3 + Math.sin(ce) * c * 0.19}" x2="${c * 0.62 + Math.cos(ce) * c * 0.25}" y2="${c * 0.3 + Math.sin(ce) * c * 0.25}" stroke="#f6ad35" stroke-width="${c * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${k}
      ${G}`;
        case "cloudy":
          return `${j}${k}${G}`;
        case "rainy":
        case "pouring":
          return `${j}${k}
        <line x1="${c * 0.3}" y1="${c * 0.71}" x2="${c * 0.25}" y2="${c * 0.85}" stroke="#5b9bd5" stroke-width="${c * 0.035}" stroke-linecap="round"/>
        <line x1="${c * 0.5}" y1="${c * 0.71}" x2="${c * 0.45}" y2="${c * 0.85}" stroke="#5b9bd5" stroke-width="${c * 0.035}" stroke-linecap="round"/>
        <line x1="${c * 0.7}" y1="${c * 0.71}" x2="${c * 0.65}" y2="${c * 0.85}" stroke="#5b9bd5" stroke-width="${c * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "snowy":
          return `${j}${k}
        <line x1="${c * 0.35}" y1="${c * 0.73}" x2="${c * 0.35}" y2="${c * 0.88}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
        <line x1="${c * 0.28}" y1="${c * 0.805}" x2="${c * 0.42}" y2="${c * 0.805}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
        <line x1="${c * 0.65}" y1="${c * 0.73}" x2="${c * 0.65}" y2="${c * 0.88}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
        <line x1="${c * 0.58}" y1="${c * 0.805}" x2="${c * 0.72}" y2="${c * 0.805}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "snowy-rainy":
          return `${j}${k}
        <line x1="${c * 0.3}" y1="${c * 0.71}" x2="${c * 0.25}" y2="${c * 0.85}" stroke="#5b9bd5" stroke-width="${c * 0.035}" stroke-linecap="round"/>
        <line x1="${c * 0.65}" y1="${c * 0.73}" x2="${c * 0.65}" y2="${c * 0.86}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
        <line x1="${c * 0.59}" y1="${c * 0.795}" x2="${c * 0.71}" y2="${c * 0.795}" stroke="#5bbbf5" stroke-width="${c * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "fog":
          return `${j}
        <line x1="${c * 0.2}" y1="${c * 0.35}" x2="${c * 0.8}" y2="${c * 0.35}" stroke="#a0aec0" stroke-width="${c * 0.04}" stroke-linecap="round"/>
        <line x1="${c * 0.15}" y1="${c * 0.5}" x2="${c * 0.85}" y2="${c * 0.5}" stroke="#cfd8e3" stroke-width="${c * 0.04}" stroke-linecap="round"/>
        <line x1="${c * 0.2}" y1="${c * 0.65}" x2="${c * 0.8}" y2="${c * 0.65}" stroke="#a0aec0" stroke-width="${c * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "lightning":
          return `${j}${k}
        <polygon points="${c * 0.45},${c * 0.62} ${c * 0.52},${c * 0.75} ${c * 0.47},${c * 0.75} ${c * 0.55},${c * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${c * 0.015}" stroke-linejoin="round"/>
      ${G}`;
        case "lightning-rainy":
          return `${j}${k}
        <polygon points="${c * 0.42},${c * 0.62} ${c * 0.48},${c * 0.75} ${c * 0.44},${c * 0.75} ${c * 0.5},${c * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${c * 0.015}" stroke-linejoin="round"/>
        <line x1="${c * 0.65}" y1="${c * 0.71}" x2="${c * 0.6}" y2="${c * 0.85}" stroke="#5b9bd5" stroke-width="${c * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "windy":
        case "windy-variant":
          return `${j}
        <path d="M${c * 0.15} ${c * 0.4} Q${c * 0.4} ${c * 0.3} ${c * 0.65} ${c * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${c * 0.04}" stroke-linecap="round"/>
        <path d="M${c * 0.2} ${c * 0.55} Q${c * 0.5} ${c * 0.45} ${c * 0.8} ${c * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${c * 0.04}" stroke-linecap="round"/>
        <path d="M${c * 0.15} ${c * 0.7} Q${c * 0.35} ${c * 0.6} ${c * 0.55} ${c * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${c * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "hail":
          return `${j}${k}
        <circle cx="${c * 0.3}" cy="${c * 0.8}" r="${c * 0.035}" fill="#5bbbf5"/>
        <circle cx="${c * 0.5}" cy="${c * 0.82}" r="${c * 0.035}" fill="#5bbbf5"/>
        <circle cx="${c * 0.7}" cy="${c * 0.78}" r="${c * 0.035}" fill="#5bbbf5"/>
      ${G}`;
        default:
          return `${j}${k}${G}`;
      }
    }
    const i = X(() => t.state ? o(t.state.state) : o("cloudy")), l = X(() => {
      var P;
      return t.state ? ((P = s[t.state.state]) == null ? void 0 : P.label) ?? t.state.state : "";
    }), r = X(() => {
      if (!t.state) return "--";
      const P = t.state.attributes.temperature;
      return P != null ? Math.round(P) : "--";
    }), a = X(() => t.state ? t.state.attributes.humidity ?? null : null), f = X(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = X(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ W([]), m = /* @__PURE__ */ W([]), y = /* @__PURE__ */ W("daily"), N = X(() => {
      const P = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], H = [];
      let c = null;
      for (const k of m.value) {
        const j = new Date(k.datetime), G = P[j.getDay()];
        (!c || c.day !== G) && (c = { day: G, hours: [] }, H.push(c)), c.hours.push(k);
      }
      return H;
    }), T = X(() => {
      if (!t.state) return "";
      const P = new Date(t.state.last_updated), c = Math.round(((/* @__PURE__ */ new Date()).getTime() - P.getTime()) / 6e4);
      if (c < 1) return "Gerade eben";
      if (c < 60) return `Vor ${c} Min.`;
      const k = Math.round(c / 60);
      return k < 24 ? `Vor ${k} Stunde${k > 1 ? "n" : ""}` : `Vor ${Math.round(k / 24)} Tag${Math.round(k / 24) > 1 ? "en" : ""}`;
    }), O = X(() => t.state && h.value.length ? h.value[0].tempHigh : null), $ = X(() => t.state && h.value.length ? h.value[0].tempLow : null), v = X(() => {
      if (!t.state) return "";
      const P = t.state.attributes.wind_bearing;
      return P == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(P / 22.5) % 16];
    });
    function E(P) {
      return P.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function M() {
      n.value = !0, y.value = "daily", await ee("daily");
    }
    async function U(P) {
      y.value = P, P === "hourly" && m.value.length === 0 && await ee("hourly");
    }
    async function ee(P) {
      var H, c;
      if (P === "daily") {
        const k = (H = t.state) == null ? void 0 : H.attributes.forecast;
        if (k && k.length) {
          h.value = re(k);
          return;
        }
      }
      try {
        const k = await Mu(t.entityId, "weather", "get_forecasts", { type: P }), j = (k == null ? void 0 : k.response) ?? k, G = (j == null ? void 0 : j[t.entityId]) ?? (j ? Object.values(j)[0] : null), fe = (G == null ? void 0 : G.forecast) ?? [];
        if (fe.length) {
          P === "daily" ? h.value = re(fe) : m.value = ae(fe);
          return;
        }
      } catch {
        try {
          const k = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: P })
          });
          if (k.ok) {
            const j = await k.json();
            let G = [];
            if (j != null && j[t.entityId]) G = j[t.entityId].forecast ?? [];
            else if (Array.isArray(j)) G = ((c = j[0]) == null ? void 0 : c.forecast) ?? [];
            else {
              const fe = Object.values(j)[0];
              G = (fe == null ? void 0 : fe.forecast) ?? (j == null ? void 0 : j.forecast) ?? [];
            }
            if (G.length) {
              P === "daily" ? h.value = re(G) : m.value = ae(G);
              return;
            }
          }
        } catch {
        }
      }
      P === "daily" ? h.value = [] : m.value = [];
    }
    function re(P) {
      const H = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return P.slice(0, 6).map((c) => {
        const k = new Date(c.datetime);
        return {
          date: c.datetime,
          weekday: H[k.getDay()],
          condition: c.condition ?? "cloudy",
          tempHigh: Math.round(c.temperature ?? c.templow ?? 0),
          tempLow: Math.round(c.templow ?? c.temperature ?? 0),
          precipitation: c.precipitation_probability ?? c.precipitation ?? null
        };
      });
    }
    function ae(P) {
      return P.slice(0, 24).map((H) => {
        const c = new Date(H.datetime);
        return {
          datetime: H.datetime,
          time: c.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: H.condition ?? "cloudy",
          temp: Math.round(H.temperature ?? 0)
        };
      });
    }
    return (P, H) => {
      var c;
      return C(), L(ie, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: se(M, ["stop"]),
          title: "Vorhersage"
        }, [...H[5] || (H[5] = [
          vl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: be(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", Iu, [
            p("div", Lu, [
              p("span", Pu, z(r.value) + "°", 1),
              p("span", Ru, z(l.value), 1),
              e.isCompact ? oe("", !0) : (C(), L("div", Ou, [
                a.value !== null ? (C(), L("span", Nu, "💧 " + z(a.value) + "%", 1)) : oe("", !0),
                f.value !== null ? (C(), L("span", Du, "💨 " + z(Math.round(f.value)) + " km/h", 1)) : oe("", !0)
              ]))
            ]),
            p("div", Fu, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, Hu)
            ])
          ])
        ], 2),
        (C(), Ae(Ct, { to: "body" }, [
          n.value ? (C(), L("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: H[4] || (H[4] = se((k) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: H[3] || (H[3] = se(() => {
              }, ["stop"]))
            }, [
              p("div", Bu, [
                p("h3", ju, z(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: H[0] || (H[0] = (k) => n.value = !1)
                }, "✕")
              ]),
              p("div", Ku, [
                p("div", Vu, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((c = e.state) == null ? void 0 : c.state) ?? "cloudy", 52)
                  }, null, 8, Wu),
                  p("div", Uu, [
                    p("span", zu, z(l.value), 1),
                    p("span", Ju, z(T.value), 1)
                  ])
                ]),
                p("div", Gu, [
                  p("span", Yu, z(r.value) + "°C", 1),
                  O.value !== null && $.value !== null ? (C(), L("span", qu, z(O.value) + "°C / " + z($.value) + "°C", 1)) : oe("", !0)
                ])
              ]),
              p("div", Xu, [
                u.value !== null ? (C(), L("div", Qu, [
                  H[6] || (H[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", Zu, z(E(u.value)) + " hPa", 1)
                ])) : oe("", !0),
                a.value !== null ? (C(), L("div", ec, [
                  H[7] || (H[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", tc, z(a.value) + " %", 1)
                ])) : oe("", !0),
                f.value !== null ? (C(), L("div", nc, [
                  H[8] || (H[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", sc, z(E(f.value)) + " km/h" + z(v.value ? ` (${v.value})` : ""), 1)
                ])) : oe("", !0)
              ]),
              p("div", oc, [
                p("button", {
                  class: be(["wf-tab", { active: y.value === "daily" }]),
                  onClick: H[1] || (H[1] = (k) => U("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: be(["wf-tab", { active: y.value === "hourly" }]),
                  onClick: H[2] || (H[2] = (k) => U("hourly"))
                }, "Stündlich", 2)
              ]),
              y.value === "daily" ? (C(), L(ie, { key: 0 }, [
                h.value.length ? (C(), L("div", ic, [
                  (C(!0), L(ie, null, Ke(h.value, (k) => (C(), L("div", {
                    key: k.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", lc, z(k.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(k.condition, 36)
                    }, null, 8, rc),
                    p("span", ac, z(k.tempHigh) + "°", 1),
                    p("span", uc, z(k.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (C(), L("div", cc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : oe("", !0),
              y.value === "hourly" ? (C(), L(ie, { key: 1 }, [
                m.value.length ? (C(), L("div", fc, [
                  (C(!0), L(ie, null, Ke(N.value, (k) => (C(), L("div", {
                    key: k.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", dc, z(k.day), 1),
                    p("div", hc, [
                      (C(!0), L(ie, null, Ke(k.hours, (j) => (C(), L("div", {
                        key: j.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", pc, z(j.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(j.condition, 32)
                        }, null, 8, gc),
                        p("span", vc, z(j.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (C(), L("div", mc, "Keine stündlichen Daten verfügbar"))
              ], 64)) : oe("", !0)
            ])
          ])) : oe("", !0)
        ]))
      ], 64);
    };
  }
}), bc = /* @__PURE__ */ Xe(yc, [["__scopeId", "data-v-a3030d6f"]]), _c = { class: "center-wrap" }, wc = ["title"], $c = {
  key: 0,
  class: "updated"
}, kc = { class: "ha-modal-header-row" }, xc = { class: "ha-light-section" }, Cc = { class: "ha-light-slider-wrap" }, Sc = ["value"], Tc = { class: "ha-light-slider-value" }, Ec = {
  key: 0,
  class: "ha-light-section"
}, Mc = { class: "ha-light-slider-wrap" }, Ac = ["value"], Ic = {
  key: 1,
  class: "ha-light-section"
}, Lc = { class: "ha-light-slider-wrap" }, Pc = ["value"], Rc = { class: "ha-light-slider-value" }, Oc = /* @__PURE__ */ qe({
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
      const $ = t.state.state;
      if ($ === "on" || $ === "home" || $ === "open" || $ === "unlocked") return !0;
      const v = parseFloat($);
      return !isNaN(v) && v > 0;
    }), s = /* @__PURE__ */ W(!1);
    async function o() {
      t.state && await Kt(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ W(!1), r = X(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = X(() => {
      if (!t.state) return !1;
      const $ = t.state.attributes.supported_color_modes;
      return ($ == null ? void 0 : $.some((v) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(v))) ?? !1;
    }), f = X(() => {
      if (!t.state) return 0;
      const $ = t.state.attributes.hs_color;
      return Math.round(($ == null ? void 0 : $[0]) ?? 0);
    }), u = X(() => {
      if (!t.state) return 100;
      const $ = t.state.attributes.hs_color;
      return Math.round(($ == null ? void 0 : $[1]) ?? 100);
    }), h = X(() => ({
      "--sat-color": `hsl(${f.value}, 100%, 50%)`
    }));
    let m = null, y = null;
    function N($) {
      const v = parseInt($.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        v === 0 ? Kt(t.token, t.entityId, "turn_off") : Kt(t.token, t.entityId, "turn_on", { brightness: v });
      }, 150);
    }
    function T($) {
      const v = parseInt($.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [v, u.value]
        });
      }, 150);
    }
    function O($) {
      const v = parseInt($.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [f.value, v]
        });
      }, 150);
    }
    return ($, v) => (C(), L(ie, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: v[0] || (v[0] = se((E) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...v[9] || (v[9] = [
        vl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: be(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", _c, [
          p("button", {
            class: be(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: v[1] || (v[1] = (E) => s.value = !0),
            onMouseup: v[2] || (v[2] = (E) => s.value = !1),
            onMouseleave: v[3] || (v[3] = (E) => s.value = !1),
            onTouchstartPassive: v[4] || (v[4] = (E) => s.value = !0),
            onTouchend: v[5] || (v[5] = (E) => s.value = !1),
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
          ])], 42, wc)
        ]),
        i.value ? (C(), L("div", $c, " Aktualisiert: " + z(i.value), 1)) : oe("", !0)
      ], 2),
      (C(), Ae(Ct, { to: "body" }, [
        l.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[8] || (v[8] = se((E) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[7] || (v[7] = se(() => {
            }, ["stop"]))
          }, [
            p("div", kc, [
              v[11] || (v[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: v[6] || (v[6] = (E) => l.value = !1)
              }, "✕")
            ]),
            p("div", xc, [
              v[12] || (v[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", Cc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: N
                }, null, 40, Sc),
                p("span", Tc, z(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (C(), L("div", Ec, [
              v[13] || (v[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", Mc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: f.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: T
                }, null, 40, Ac),
                p("span", {
                  class: "ha-light-color-preview",
                  style: Lt({ background: `hsl(${f.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : oe("", !0),
            a.value ? (C(), L("div", Ic, [
              v[14] || (v[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", Lc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: Lt(h.value),
                  onInput: O
                }, null, 44, Pc),
                p("span", Rc, z(u.value) + "%", 1)
              ])
            ])) : oe("", !0)
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), Nc = /* @__PURE__ */ Xe(Oc, [["__scopeId", "data-v-c1ca61d1"]]), Dc = { class: "center-wrap" }, Fc = ["title"], Hc = {
  key: 0,
  class: "updated"
}, Bc = /* @__PURE__ */ qe({
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
    return (l, r) => (C(), L("div", {
      class: be(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Dc, [
        p("button", {
          class: be(["power-btn", { on: n.value, pressing: s.value }]),
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
        ])], 42, Fc)
      ]),
      i.value ? (C(), L("div", Hc, " Aktualisiert: " + z(i.value), 1)) : oe("", !0)
    ], 2));
  }
}), jc = /* @__PURE__ */ Xe(Bc, [["__scopeId", "data-v-495ed0f0"]]), Kc = { class: "state value center-wrap" }, Vc = { class: "number" }, Wc = { class: "unit" }, Uc = {
  key: 0,
  class: "updated"
}, zc = /* @__PURE__ */ qe({
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
    return (i, l) => (C(), L("div", {
      class: be(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Kc, [
        p("span", Vc, z(n.value), 1),
        p("span", Wc, z(s.value), 1)
      ]),
      o.value && !e.isCompact ? (C(), L("div", Uc, " Aktualisiert: " + z(o.value), 1)) : oe("", !0)
    ], 2));
  }
}), Jc = /* @__PURE__ */ Xe(zc, [["__scopeId", "data-v-336a5298"]]), Gc = {
  key: 0,
  class: "card-header"
}, Yc = { class: "label" }, qc = { class: "ha-modal-fields" }, Xc = { class: "ha-modal-input-wrap" }, Qc = ["onKeydown"], Zc = {
  key: 0,
  class: "ha-modal-suggestions"
}, ef = ["onMousedown"], tf = { class: "ha-modal-s-entity" }, nf = { class: "ha-modal-s-name" }, sf = ["onKeydown"], of = { class: "ha-toggle-row" }, lf = {
  key: 1,
  class: "state loading"
}, rf = {
  key: 2,
  class: "state error"
}, af = /* @__PURE__ */ qe({
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
    const n = e, s = t, o = X(() => n.cols === 1 && n.rows === 1), i = X(() => n.rows === 1 && n.cols > 1), l = X(() => n.cols === 1 && n.rows > 1), r = X(() => n.entityId.startsWith("weather.")), a = X(() => n.entityId.startsWith("light.")), f = /* @__PURE__ */ new Set(["on", "off", "open", "closed", "locked", "unlocked", "home", "away"]), u = X(() => !n.state || a.value || r.value ? !1 : f.has(n.state.state)), h = X(() => {
      if (!n.state) return !1;
      const V = n.state.state;
      if (V === "on" || V === "home" || V === "open" || V === "unlocked") return !0;
      const J = parseFloat(V);
      return !isNaN(J) && J > 0;
    }), m = /* @__PURE__ */ W(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), y = /* @__PURE__ */ W(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    It(() => n.entityId, (V) => {
      m.value = localStorage.getItem(`ha_title_${V}`) ?? "", y.value = localStorage.getItem(`ha_showtitle_${V}`) !== "false";
    });
    const N = X(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), T = /* @__PURE__ */ W(!1), O = /* @__PURE__ */ W(""), $ = /* @__PURE__ */ W(""), v = /* @__PURE__ */ W(!0), E = /* @__PURE__ */ W(null), M = /* @__PURE__ */ W([]), U = /* @__PURE__ */ W([]), ee = /* @__PURE__ */ W(-1);
    async function re() {
      try {
        M.value = await xu(n.token);
      } catch {
      }
    }
    function ae() {
      ee.value = -1;
      const V = O.value.trim().toLowerCase();
      if (!V) {
        U.value = [];
        return;
      }
      U.value = M.value.filter(
        (J) => J.entity_id.toLowerCase().includes(V) || (J.attributes.friendly_name ?? "").toLowerCase().includes(V)
      ).slice(0, 8);
    }
    function P() {
      U.value.length && (ee.value = (ee.value + 1) % U.value.length);
    }
    function H() {
      U.value.length && (ee.value = (ee.value - 1 + U.value.length) % U.value.length);
    }
    function c(V) {
      O.value = V, U.value = [], ee.value = -1;
    }
    function k() {
      ee.value >= 0 && U.value[ee.value] ? c(U.value[ee.value].entity_id) : G();
    }
    function j() {
      O.value = n.entityId, $.value = m.value, v.value = y.value, U.value = [], ee.value = -1, T.value = !0, re(), cs(() => {
        var V;
        return (V = E.value) == null ? void 0 : V.select();
      });
    }
    function G() {
      const V = O.value.trim();
      if (V) {
        const J = $.value.trim();
        localStorage.setItem(`ha_title_${V}`, J), localStorage.setItem(`ha_showtitle_${V}`, String(v.value)), V === n.entityId && (m.value = J, y.value = v.value), s("change-entity", V);
      }
      U.value = [], T.value = !1;
    }
    function fe() {
      U.value = [], T.value = !1;
    }
    function ce() {
      T.value = !1, s("remove");
    }
    function pe(V) {
      const J = V.target.closest(".card");
      if (!J) return;
      const _e = J.getBoundingClientRect(), Ve = "touches" in V ? V.touches[0].clientX : V.clientX, Re = "touches" in V ? V.touches[0].clientY : V.clientY, zt = _e.width, ln = _e.height, Ot = 120;
      document.body.style.userSelect = "none";
      function Je(Ie) {
        const pt = "touches" in Ie ? Ie.touches[0].clientX : Ie.clientX, Ze = "touches" in Ie ? Ie.touches[0].clientY : Ie.clientY, Tt = zt + (pt - Ve), d = ln + (Ze - Re), g = Math.max(1, Math.min(6, Math.round((Tt + 20) / Ot))), _ = Math.max(1, Math.min(6, Math.round((d + 20) / Ot)));
        J.style.gridColumn = `span ${g}`, J.style.gridRow = `span ${_}`, J.dataset.previewCols = String(g), J.dataset.previewRows = String(_);
      }
      function Qe() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", Je), document.removeEventListener("mouseup", Qe), document.removeEventListener("touchmove", Je), document.removeEventListener("touchend", Qe);
        const Ie = parseInt(J.dataset.previewCols || String(n.cols)), pt = parseInt(J.dataset.previewRows || String(n.rows));
        delete J.dataset.previewCols, delete J.dataset.previewRows, (Ie !== n.cols || pt !== n.rows) && s("resize", Ie, pt);
      }
      document.addEventListener("mousemove", Je), document.addEventListener("mouseup", Qe), document.addEventListener("touchmove", Je), document.addEventListener("touchend", Qe);
    }
    return (V, J) => (C(), L("div", {
      class: be(["card", { active: h.value, small: o.value, short: i.value, narrow: l.value }])
    }, [
      p("button", {
        class: "edit-ctrl-btn",
        onClick: se(j, ["stop"]),
        title: "Bearbeiten"
      }, [...J[4] || (J[4] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      y.value ? (C(), L("div", Gc, [
        p("span", Yc, z(m.value || N.value), 1)
      ])) : oe("", !0),
      (C(), Ae(Ct, { to: "body" }, [
        T.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: se(fe, ["self"])
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: J[3] || (J[3] = se(() => {
            }, ["stop"]))
          }, [
            J[7] || (J[7] = p("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            p("div", qc, [
              p("div", Xc, [
                dt(p("input", {
                  ref_key: "inputRef",
                  ref: E,
                  "onUpdate:modelValue": J[0] || (J[0] = (_e) => O.value = _e),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: ae,
                  onKeydown: [
                    Ce(se(k, ["prevent"]), ["enter"]),
                    Ce(fe, ["escape"]),
                    Ce(se(P, ["prevent"]), ["arrow-down"]),
                    Ce(se(H, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, Qc), [
                  [ht, O.value]
                ]),
                U.value.length ? (C(), L("ul", Zc, [
                  (C(!0), L(ie, null, Ke(U.value, (_e, Ve) => (C(), L("li", {
                    key: _e.entity_id,
                    class: be(["ha-modal-suggestion-item", { active: Ve === ee.value }]),
                    onMousedown: se((Re) => c(_e.entity_id), ["prevent"])
                  }, [
                    p("span", tf, z(_e.entity_id), 1),
                    p("span", nf, z(_e.attributes.friendly_name ?? ""), 1)
                  ], 42, ef))), 128))
                ])) : oe("", !0)
              ]),
              dt(p("input", {
                "onUpdate:modelValue": J[1] || (J[1] = (_e) => $.value = _e),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Ce(se(G, ["prevent"]), ["enter"]),
                  Ce(fe, ["escape"])
                ]
              }, null, 40, sf), [
                [ht, $.value]
              ])
            ]),
            p("div", of, [
              J[6] || (J[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: be(["ha-toggle", { on: v.value }]),
                onClick: J[2] || (J[2] = (_e) => v.value = !v.value),
                type: "button"
              }, [...J[5] || (J[5] = [
                p("span", { class: "ha-toggle-knob" }, null, -1)
              ])], 2)
            ]),
            J[8] || (J[8] = p("div", { class: "ha-modal-hint" }, " Entity-ID eingeben · ↑↓ navigieren · Enter übernehmen ", -1)),
            p("div", { class: "ha-modal-actions" }, [
              p("button", {
                class: "ha-modal-btn confirm",
                title: "Übernehmen",
                onClick: G
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                title: "Abbrechen",
                onClick: fe
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: ce
            }, "Card entfernen")
          ])
        ])) : oe("", !0)
      ])),
      e.loading ? (C(), L("div", lf, [...J[9] || (J[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (C(), L("div", rf, [
        J[10] || (J[10] = p("span", null, "⚠️", -1)),
        wt(" " + z(e.error), 1)
      ])) : r.value ? (C(), Ae(bc, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: m.value || N.value,
        "custom-title": m.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (C(), Ae(Nc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? (C(), Ae(jc, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (C(), Ae(Jc, {
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
}), uf = /* @__PURE__ */ Xe(af, [["__scopeId", "data-v-2114e986"]]), cf = { class: "heading-content" }, ff = { class: "ha-modal-header-row" }, df = { class: "ha-modal-fields" }, hf = ["onKeydown"], pf = { class: "ha-modal-actions" }, gf = /* @__PURE__ */ qe({
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
      i.value = n.label, o.value = !0, cs(() => {
        var T;
        return (T = l.value) == null ? void 0 : T.select();
      });
    }
    function a() {
      o.value = !1;
      const T = i.value.trim();
      T && T !== n.label && s("update-label", T);
    }
    function f() {
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
      const $ = O.getBoundingClientRect(), v = "touches" in T ? T.touches[0].clientX : T.clientX, E = "touches" in T ? T.touches[0].clientY : T.clientY, M = $.width, U = $.height, ee = 120;
      document.body.style.userSelect = "none";
      function re(P) {
        const H = "touches" in P ? P.touches[0].clientX : P.clientX, c = "touches" in P ? P.touches[0].clientY : P.clientY, k = M + (H - v), j = U + (c - E), G = Math.max(1, Math.min(12, Math.round((k + 20) / ee))), fe = Math.max(1, Math.min(4, Math.round((j + 20) / ee)));
        O.style.gridColumn = `span ${G}`, O.style.gridRow = `span ${fe}`, O.dataset.previewCols = String(G), O.dataset.previewRows = String(fe);
      }
      function ae() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", re), document.removeEventListener("mouseup", ae), document.removeEventListener("touchmove", re), document.removeEventListener("touchend", ae);
        const P = parseInt(O.dataset.previewCols ?? "") || n.cols, H = parseInt(O.dataset.previewRows ?? "") || n.rows;
        delete O.dataset.previewCols, delete O.dataset.previewRows, O.style.gridColumn = "", O.style.gridRow = "", s("resize", P, H);
      }
      document.addEventListener("mousemove", re), document.addEventListener("mouseup", ae), document.addEventListener("touchmove", re, { passive: !1 }), document.addEventListener("touchend", ae);
    }
    return (T, O) => (C(), L("div", {
      class: be(["heading", { short: e.rows === 1 }])
    }, [
      p("div", cf, [
        o.value ? dt((C(), L("input", {
          key: 1,
          ref_key: "inputRef",
          ref: l,
          "onUpdate:modelValue": O[0] || (O[0] = ($) => i.value = $),
          class: "heading-input",
          onBlur: a,
          onKeydown: [
            Ce(a, ["enter"]),
            Ce(f, ["escape"])
          ]
        }, null, 544)), [
          [ht, i.value]
        ]) : (C(), L("h2", {
          key: 0,
          class: "heading-text",
          onDblclick: r
        }, z(e.label), 33)),
        O[8] || (O[8] = p("hr", { class: "heading-line" }, null, -1))
      ]),
      p("button", {
        class: "heading-edit-btn",
        onClick: se(m, ["stop"]),
        title: "Bearbeiten"
      }, [...O[9] || (O[9] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      (C(), Ae(Ct, { to: "body" }, [
        u.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: O[7] || (O[7] = se(($) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: O[6] || (O[6] = se(() => {
            }, ["stop"]))
          }, [
            p("div", ff, [
              O[10] || (O[10] = p("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: O[1] || (O[1] = ($) => u.value = !1)
              }, "✕")
            ]),
            p("div", df, [
              dt(p("input", {
                "onUpdate:modelValue": O[2] || (O[2] = ($) => h.value = $),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Ce(se(y, ["prevent"]), ["enter"]),
                  O[3] || (O[3] = Ce(($) => u.value = !1, ["escape"]))
                ]
              }, null, 40, hf), [
                [ht, h.value]
              ])
            ]),
            p("div", pf, [
              p("button", {
                class: "ha-modal-btn confirm",
                onClick: y
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                onClick: O[4] || (O[4] = ($) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: O[5] || (O[5] = ($) => {
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
}), vf = /* @__PURE__ */ Xe(gf, [["__scopeId", "data-v-7a388668"]]);
function po(e) {
  const { cache: t, version: n } = ho();
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
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value));
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
  function f(h) {
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
    addEntity: f,
    removeEntity: u
  };
}
const mf = { class: "pill-label" }, yf = { class: "ha-modal-header-row" }, bf = {
  key: 0,
  class: "ha-modal-empty"
}, _f = {
  key: 1,
  class: "ha-modal-entity-list"
}, wf = { class: "ha-modal-entity-name" }, $f = /* @__PURE__ */ qe({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = po({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ oo(() => t.token)
    }), s = X(() => n.entities.value.filter((r) => r.state === "on")), o = X(() => s.value.length > 0), i = X(() => s.value.length), l = /* @__PURE__ */ W(!1);
    return (r, a) => (C(), L(ie, null, [
      p("button", {
        class: be(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (f) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", mf, z(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      (C(), Ae(Ct, { to: "body" }, [
        l.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = se((f) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", yf, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (f) => l.value = !1)
              }, "✕")
            ]),
            Me(n).entities.value.length ? (C(), L("ul", _f, [
              (C(!0), L(ie, null, Ke(Me(n).entities.value, (f) => (C(), L("li", {
                key: f.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", wf, z(f.attributes.friendly_name ?? f.entity_id), 1),
                p("span", {
                  class: be(["ha-modal-entity-badge", f.state === "on" ? "open" : "closed"])
                }, z(f.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (C(), L("div", bf, " Keine Sensoren gefunden "))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), kf = /* @__PURE__ */ Xe($f, [["__scopeId", "data-v-4c919921"]]), xf = { class: "pill-label" }, Cf = { class: "ha-modal-header-row" }, Sf = { class: "ha-modal-header-actions" }, Tf = {
  key: 0,
  class: "ha-modal-empty"
}, Ef = {
  key: 1,
  class: "ha-modal-entity-list"
}, Mf = { class: "ha-modal-entity-name" }, Af = ["onClick"], If = { class: "ha-modal-input-wrap" }, Lf = ["onKeydown"], Pf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Rf = ["onMousedown"], Of = { class: "ha-modal-s-entity" }, Nf = { class: "ha-modal-s-name" }, Df = { class: "ha-modal-entity-list" }, Ff = { class: "ha-modal-entity-name" }, Hf = ["onClick"], Bf = {
  key: 0,
  class: "ha-modal-empty"
}, jf = /* @__PURE__ */ qe({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = po({
      key: "lights",
      autoDetect: (v) => v.entity_id.startsWith("light."),
      token: /* @__PURE__ */ oo(() => t.token)
    }), { cache: s, version: o } = ho(), i = X(() => n.entities.value.filter((v) => v.state === "on")), l = X(() => i.value.length > 0), r = X(() => i.value.length), a = /* @__PURE__ */ W(!1), f = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(""), h = /* @__PURE__ */ W([]);
    function m() {
      f.value = !f.value, u.value = "", h.value = [];
    }
    function y(v) {
      o.value;
      const E = s.get(v);
      return (E == null ? void 0 : E.attributes.friendly_name) ?? v;
    }
    function N() {
      const v = u.value.trim().toLowerCase();
      if (!v) {
        h.value = [];
        return;
      }
      const E = new Set(n.entityIds.value), M = [];
      o.value;
      for (const [, U] of s)
        if (!E.has(U.entity_id) && (U.entity_id.toLowerCase().includes(v) || (U.attributes.friendly_name ?? "").toLowerCase().includes(v)) && (M.push(U), M.length >= 8))
          break;
      h.value = M;
    }
    function T(v) {
      n.addEntity(v), u.value = "", h.value = [];
    }
    function O() {
      h.value.length && T(h.value[0].entity_id);
    }
    async function $(v) {
      await Kt(t.token, v, "toggle");
    }
    return (v, E) => (C(), L(ie, null, [
      p("button", {
        class: be(["pill", { active: l.value }]),
        onClick: E[0] || (E[0] = (M) => a.value = !0)
      }, [
        E[6] || (E[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", xf, z(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (C(), Ae(Ct, { to: "body" }, [
        a.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: E[5] || (E[5] = se((M) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: E[4] || (E[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Cf, [
              E[8] || (E[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", Sf, [
                p("button", {
                  class: be(["ha-modal-icon-btn", { active: f.value }]),
                  onClick: m,
                  title: "Bearbeiten"
                }, [...E[7] || (E[7] = [
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
                  onClick: E[1] || (E[1] = (M) => {
                    a.value = !1, f.value = !1;
                  })
                }, "✕")
              ])
            ]),
            f.value ? (C(), L(ie, { key: 1 }, [
              p("div", If, [
                dt(p("input", {
                  "onUpdate:modelValue": E[2] || (E[2] = (M) => u.value = M),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Ce(se(O, ["prevent"]), ["enter"]),
                    E[3] || (E[3] = Ce((M) => {
                      u.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Lf), [
                  [ht, u.value]
                ]),
                h.value.length ? (C(), L("ul", Pf, [
                  (C(!0), L(ie, null, Ke(h.value, (M) => (C(), L("li", {
                    key: M.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((U) => T(M.entity_id), ["prevent"])
                  }, [
                    p("span", Of, z(M.entity_id), 1),
                    p("span", Nf, z(M.attributes.friendly_name ?? ""), 1)
                  ], 40, Rf))), 128))
                ])) : oe("", !0)
              ]),
              p("ul", Df, [
                (C(!0), L(ie, null, Ke(Me(n).entityIds.value, (M) => (C(), L("li", {
                  key: M,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Ff, z(y(M)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (U) => Me(n).removeEntity(M),
                    title: "Entfernen"
                  }, "✕", 8, Hf)
                ]))), 128))
              ]),
              Me(n).entityIds.value.length ? oe("", !0) : (C(), L("div", Bf, " Keine Lichter ausgewählt "))
            ], 64)) : (C(), L(ie, { key: 0 }, [
              Me(n).entities.value.length ? (C(), L("ul", Ef, [
                (C(!0), L(ie, null, Ke(Me(n).entities.value, (M) => (C(), L("li", {
                  key: M.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Mf, z(M.attributes.friendly_name ?? M.entity_id), 1),
                  p("button", {
                    class: be(["ha-modal-toggle-btn", M.state === "on" ? "on" : "off"]),
                    onClick: (U) => $(M.entity_id)
                  }, z(M.state === "on" ? "An" : "Aus"), 11, Af)
                ]))), 128))
              ])) : (C(), L("div", Tf, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), Kf = /* @__PURE__ */ Xe(jf, [["__scopeId", "data-v-10807199"]]), Vf = { class: "pill-label" }, Wf = { class: "ha-modal-header-row" }, Uf = { class: "ha-modal-header-actions" }, zf = {
  key: 0,
  class: "ha-modal-empty"
}, Jf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Gf = { class: "ha-modal-entity-name" }, Yf = { class: "ha-modal-entity-value" }, qf = { class: "ha-modal-input-wrap" }, Xf = ["onKeydown"], Qf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Zf = ["onMousedown"], ed = { class: "ha-modal-s-entity" }, td = { class: "ha-modal-s-name" }, nd = { class: "ha-modal-entity-list" }, sd = { class: "ha-modal-entity-name" }, od = ["onClick"], id = {
  key: 0,
  class: "ha-modal-empty"
}, ld = /* @__PURE__ */ qe({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = po({
      key: "climate",
      autoDetect: ($) => $.entity_id.startsWith("climate.") || $.entity_id.startsWith("sensor.") && $.attributes.device_class === "temperature",
      token: /* @__PURE__ */ oo(() => t.token)
    }), { cache: s, version: o } = ho();
    function i($) {
      if ($.entity_id.startsWith("climate.")) {
        const E = $.attributes.current_temperature;
        return typeof E == "number" ? E : null;
      }
      const v = parseFloat($.state);
      return isNaN(v) ? null : v;
    }
    function l($) {
      const v = i($);
      if (v === null) return $.state;
      const E = $.attributes.unit_of_measurement ?? "°C";
      return `${v.toFixed(1)} ${E}`;
    }
    const r = X(() => {
      const $ = n.entities.value.map(i).filter((M) => M !== null);
      if (!$.length) return "-- °C";
      const v = Math.min(...$), E = Math.max(...$);
      return v === E ? `${v.toFixed(1)} °C` : `${v.toFixed(1)}–${E.toFixed(1)} °C`;
    });
    function a($) {
      o.value;
      const v = s.get($);
      return (v == null ? void 0 : v.attributes.friendly_name) ?? $;
    }
    const f = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(!1), h = /* @__PURE__ */ W(""), m = /* @__PURE__ */ W([]);
    function y() {
      u.value = !u.value, h.value = "", m.value = [];
    }
    function N() {
      const $ = h.value.trim().toLowerCase();
      if (!$) {
        m.value = [];
        return;
      }
      const v = new Set(n.entityIds.value), E = [];
      o.value;
      for (const [, M] of s)
        if (!v.has(M.entity_id) && (M.entity_id.toLowerCase().includes($) || (M.attributes.friendly_name ?? "").toLowerCase().includes($)) && (E.push(M), E.length >= 8))
          break;
      m.value = E;
    }
    function T($) {
      n.addEntity($), h.value = "", m.value = [];
    }
    function O() {
      m.value.length && T(m.value[0].entity_id);
    }
    return ($, v) => (C(), L(ie, null, [
      p("button", {
        class: "pill",
        onClick: v[0] || (v[0] = (E) => f.value = !0)
      }, [
        v[6] || (v[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", Vf, z(r.value), 1)
      ]),
      (C(), Ae(Ct, { to: "body" }, [
        f.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[5] || (v[5] = se((E) => f.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: v[4] || (v[4] = se(() => {
            }, ["stop"]))
          }, [
            p("div", Wf, [
              v[8] || (v[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", Uf, [
                p("button", {
                  class: be(["ha-modal-icon-btn", { active: u.value }]),
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
                  onClick: v[1] || (v[1] = (E) => {
                    f.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? (C(), L(ie, { key: 1 }, [
              p("div", qf, [
                dt(p("input", {
                  "onUpdate:modelValue": v[2] || (v[2] = (E) => h.value = E),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Ce(se(O, ["prevent"]), ["enter"]),
                    v[3] || (v[3] = Ce((E) => {
                      h.value = "", m.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Xf), [
                  [ht, h.value]
                ]),
                m.value.length ? (C(), L("ul", Qf, [
                  (C(!0), L(ie, null, Ke(m.value, (E) => (C(), L("li", {
                    key: E.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: se((M) => T(E.entity_id), ["prevent"])
                  }, [
                    p("span", ed, z(E.entity_id), 1),
                    p("span", td, z(E.attributes.friendly_name ?? ""), 1)
                  ], 40, Zf))), 128))
                ])) : oe("", !0)
              ]),
              p("ul", nd, [
                (C(!0), L(ie, null, Ke(Me(n).entityIds.value, (E) => (C(), L("li", {
                  key: E,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", sd, z(a(E)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (M) => Me(n).removeEntity(E),
                    title: "Entfernen"
                  }, "✕", 8, od)
                ]))), 128))
              ]),
              Me(n).entityIds.value.length ? oe("", !0) : (C(), L("div", id, " Keine Sensoren ausgewählt "))
            ], 64)) : (C(), L(ie, { key: 0 }, [
              Me(n).entities.value.length ? (C(), L("ul", Jf, [
                (C(!0), L(ie, null, Ke(Me(n).entities.value, (E) => (C(), L("li", {
                  key: E.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Gf, z(E.attributes.friendly_name ?? E.entity_id), 1),
                  p("span", Yf, z(l(E)), 1)
                ]))), 128))
              ])) : (C(), L("div", zf, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), rd = /* @__PURE__ */ Xe(ld, [["__scopeId", "data-v-2665ddcd"]]), ad = { class: "pill-label" }, ud = { class: "ha-modal-header-row" }, cd = {
  key: 0,
  class: "ha-modal-empty"
}, fd = {
  key: 1,
  class: "ha-modal-entity-list"
}, dd = { class: "notif-header" }, hd = { class: "notif-title" }, pd = { class: "notif-time" }, gd = {
  key: 0,
  class: "notif-message"
}, vd = ["onClick"], md = /* @__PURE__ */ qe({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ W([]), s = /* @__PURE__ */ W(!1);
    let o = null;
    async function i() {
      try {
        const a = new WebSocket(Cl()), f = await new Promise((u, h) => {
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
        n.value = f.sort(
          (u, h) => new Date(h.created_at).getTime() - new Date(u.created_at).getTime()
        );
      } catch {
        n.value = [];
      }
    }
    async function l(a) {
      try {
        await fetch(vs("/api/services/persistent_notification/dismiss"), {
          method: "POST",
          headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ notification_id: a })
        }), n.value = n.value.filter((f) => f.notification_id !== a), n.value.length === 0 && (s.value = !1);
      } catch {
      }
    }
    function r(a) {
      const f = new Date(a), h = Math.round(((/* @__PURE__ */ new Date()).getTime() - f.getTime()) / 6e4);
      if (h < 1) return "Gerade eben";
      if (h < 60) return `Vor ${h} Min.`;
      const m = Math.round(h / 60);
      return m < 24 ? `Vor ${m} Stunde${m > 1 ? "n" : ""}` : `Vor ${Math.round(m / 24)} Tag${Math.round(m / 24) > 1 ? "en" : ""}`;
    }
    return Cn(() => {
      i(), o = setInterval(i, 3e4);
    }), Sn(() => {
      o && clearInterval(o);
    }), (a, f) => (C(), L(ie, null, [
      n.value.length ? (C(), L("button", {
        key: 0,
        class: "pill",
        onClick: f[0] || (f[0] = (u) => s.value = !0)
      }, [
        f[4] || (f[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", ad, z(n.value.length), 1)
      ])) : oe("", !0),
      (C(), Ae(Ct, { to: "body" }, [
        s.value ? (C(), L("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: f[3] || (f[3] = se((u) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: f[2] || (f[2] = se(() => {
            }, ["stop"]))
          }, [
            p("div", ud, [
              f[5] || (f[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: f[1] || (f[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (C(), L("ul", fd, [
              (C(!0), L(ie, null, Ke(n.value, (u) => (C(), L("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                p("div", dd, [
                  p("span", hd, z(u.title || u.message), 1),
                  p("span", pd, z(r(u.created_at)), 1)
                ]),
                u.title && u.message ? (C(), L("p", gd, z(u.message), 1)) : oe("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (h) => l(u.notification_id)
                }, "Löschen", 8, vd)
              ]))), 128))
            ])) : (C(), L("div", cd, " Keine Benachrichtigungen "))
          ])
        ])) : oe("", !0)
      ]))
    ], 64));
  }
}), yd = /* @__PURE__ */ Xe(md, [["__scopeId", "data-v-a643a4ed"]]), bd = {
  key: 1,
  class: "dashboard"
}, _d = { class: "dashboard-header" }, wd = { class: "header-left" }, $d = { class: "header-right" }, kd = { class: "clock" }, xd = { class: "clock-time" }, Cd = { class: "clock-date" }, Sd = { class: "page-tabs" }, Td = { class: "page-tabs-inner" }, Ed = ["onClick", "onDblclick", "onTouchstartPassive"], Md = {
  key: 1,
  class: "page-tab-label"
}, Ad = { class: "ha-modal-header-row" }, Id = { class: "page-delete-text" }, Ld = { class: "page-delete-actions" }, Pd = { class: "burger-wrap" }, Rd = { class: "burger-auth-actions" }, ri = 120, Od = 36, Nd = 32, Dd = /* @__PURE__ */ qe({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var ve;
    e.panelMode && kl(!0);
    const n = /* @__PURE__ */ W(localStorage.getItem("ha_token")), s = wu(), o = X(() => bu() ? s.value : n.value), i = $u(), l = X(() => ku(o.value ?? void 0)), r = /* @__PURE__ */ W(i.value ?? ""), a = /* @__PURE__ */ W(!1), f = /* @__PURE__ */ rs({}), u = /* @__PURE__ */ new Map();
    function h() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function m() {
      try {
        const b = localStorage.getItem("ha_pages");
        if (b) {
          const w = JSON.parse(b);
          if (Array.isArray(w) && w.length)
            return w.map((x) => ({
              id: x.id,
              name: x.name || "Seite",
              cards: (x.cards || []).map((ne) => ({
                id: ne.id,
                type: ne.type ?? "card",
                entityId: ne.entityId ?? "",
                label: ne.label,
                cols: ne.cols ?? 2,
                rows: ne.rows ?? 2,
                gridCol: ne.gridCol,
                gridRow: ne.gridRow
              }))
            }));
        }
      } catch {
      }
      try {
        const b = localStorage.getItem("ha_cards");
        if (b) {
          const w = JSON.parse(b).map((x) => ({
            id: x.id,
            entityId: x.entityId,
            cols: x.cols ?? (x.size === "small" ? 1 : 2),
            rows: x.rows ?? (x.size === "small" ? 1 : 2)
          }));
          return [{ id: h(), name: "Home", cards: w }];
        }
      } catch {
      }
      return [{ id: h(), name: "Home", cards: [{ id: h(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const y = /* @__PURE__ */ W([]), N = /* @__PURE__ */ W(""), T = X(() => y.value.find((b) => b.id === N.value) ?? y.value[0]), O = X(() => {
      var b;
      return ((b = T.value) == null ? void 0 : b.cards) ?? [];
    });
    function $() {
      localStorage.setItem("ha_pages", JSON.stringify(y.value));
    }
    function v(b) {
      if (N.value !== b) {
        for (const w of O.value) J(w.id);
        N.value = b, localStorage.setItem("ha_active_page", b);
        for (const w of O.value)
          w.type !== "heading" && V(w.id, w.entityId);
      }
    }
    function E() {
      const b = h(), w = y.value.length + 1;
      y.value = [...y.value, { id: b, name: `Seite ${w}`, cards: [] }], $(), v(b);
    }
    const M = /* @__PURE__ */ W(null), U = X(() => {
      const b = y.value.find((w) => w.id === M.value);
      return (b == null ? void 0 : b.name) ?? "";
    }), ee = X(() => {
      const b = y.value.find((w) => w.id === M.value);
      return (b == null ? void 0 : b.cards.length) ?? 0;
    });
    function re(b) {
      y.value.length <= 1 || (M.value = b);
    }
    function ae() {
      const b = M.value;
      if (M.value = null, !b || y.value.length <= 1) return;
      const w = y.value.find((x) => x.id === b);
      if (w)
        for (const x of w.cards) J(x.id);
      if (y.value = y.value.filter((x) => x.id !== b), N.value === b) {
        N.value = y.value[0].id, localStorage.setItem("ha_active_page", N.value);
        for (const x of O.value)
          x.type !== "heading" && V(x.id, x.entityId);
      }
      $();
    }
    let P = null;
    function H(b) {
      P = setTimeout(() => {
        P = null, fe(b);
      }, 600);
    }
    function c() {
      P && (clearTimeout(P), P = null);
    }
    const k = /* @__PURE__ */ W(null), j = /* @__PURE__ */ W(""), G = /* @__PURE__ */ W(null);
    function fe(b) {
      const w = y.value.find((x) => x.id === b);
      w && (k.value = b, j.value = w.name, cs(() => {
        G.value && G.value.length && (G.value[0].focus(), G.value[0].select());
      }));
    }
    function ce() {
      if (!k.value) return;
      const b = y.value.find((w) => w.id === k.value);
      b && j.value.trim() && (b.name = j.value.trim(), y.value = [...y.value], $()), k.value = null;
    }
    function pe() {
      k.value = null;
    }
    function V(b, w) {
      if (u.has(b)) return;
      const x = Au(w);
      u.set(b, x), f[b] = { state: null, loading: !0, error: null }, It(x.state, (ne) => {
        f[b] && (f[b].state = ne);
      }), It(x.loading, (ne) => {
        f[b] && (f[b].loading = ne);
      }), It(x.error, (ne) => {
        f[b] && (f[b].error = ne);
      }), o.value && x.start(o.value);
    }
    function J(b) {
      const w = u.get(b);
      w && (w.stop(), u.delete(b)), delete f[b];
    }
    const _e = m();
    y.value = _e;
    const Ve = localStorage.getItem("ha_active_page");
    N.value = ((ve = _e.find((b) => b.id === Ve)) == null ? void 0 : ve.id) ?? _e[0].id;
    for (const b of O.value)
      b.type !== "heading" && V(b.id, b.entityId);
    It(o, (b, w) => {
      if (b && !w)
        for (const [, x] of u) x.start(b);
    });
    function Re() {
      const b = h(), w = "sensor.wohnzimmer_soll_temperatur", x = T.value;
      x && (x.cards = [...x.cards, { id: b, type: "card", entityId: w, cols: 2, rows: 2 }], y.value = [...y.value], V(b, w), $());
    }
    function zt() {
      const b = h(), w = T.value;
      w && (w.cards = [...w.cards, { id: b, type: "heading", entityId: "", label: "Überschrift", cols: 4, rows: 1 }], y.value = [...y.value], $());
    }
    function ln(b, w) {
      const x = T.value;
      if (!x) return;
      const ne = x.cards.find((ue) => ue.id === b);
      ne && (ne.label = w, y.value = [...y.value], $());
    }
    function Ot(b) {
      J(b);
      const w = T.value;
      w && (w.cards = w.cards.filter((x) => x.id !== b), y.value = [...y.value], $());
    }
    function Je(b) {
      n.value = b;
      for (const [, w] of u) w.start(b);
    }
    function Qe(b, w) {
      const x = T.value;
      if (!x) return;
      const ne = x.cards.find((Oe) => Oe.id === b);
      if (!ne) return;
      ne.entityId = w;
      const ue = u.get(b);
      ue && o.value && ue.start(o.value, w), y.value = [...y.value], $();
    }
    function Ie(b, w, x) {
      const ne = T.value;
      if (!ne) return;
      const ue = ne.cards.find((Oe) => Oe.id === b);
      ue && (ue.cols = w, ue.rows = x, y.value = [...y.value], $());
    }
    function pt() {
      for (const [b] of u) J(b);
      y.value = [{ id: h(), name: "Home", cards: [] }], N.value = y.value[0].id, Eu(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), n.value = null;
    }
    const Ze = /* @__PURE__ */ W(null), Tt = /* @__PURE__ */ W(null), d = /* @__PURE__ */ W(null), g = /* @__PURE__ */ W(1), _ = /* @__PURE__ */ W(1), R = /* @__PURE__ */ W(2), A = /* @__PURE__ */ W(2);
    function I(b) {
      const w = b.gridCol ? `${b.gridCol} / span ${b.cols}` : `span ${b.cols}`, x = b.gridRow ? `${b.gridRow} / span ${b.rows}` : `span ${b.rows}`;
      return { gridColumn: w, gridRow: x };
    }
    const B = X(() => ({
      gridColumn: `${g.value} / span ${R.value}`,
      gridRow: `${_.value} / span ${A.value}`
    }));
    function F(b, w) {
      const x = b.target;
      if (x.closest(".edit-ctrl-btn") || x.closest(".resize-handle") || x.closest("button") || x.closest("input")) return;
      const ne = x.closest("[data-card-id]") ?? x, ue = ne.getBoundingClientRect(), Oe = "touches" in b ? b.touches[0].clientX : b.clientX, we = "touches" in b ? b.touches[0].clientY : b.clientY, ke = Oe - ue.left, We = we - ue.top;
      let Jt = !1;
      const rn = O.value.find((Et) => Et.id === w);
      if (!rn) return;
      const an = rn;
      function Rn(Et) {
        const ms = "touches" in Et ? Et.touches[0].clientX : Et.clientX, ys = "touches" in Et ? Et.touches[0].clientY : Et.clientY;
        if (!Jt) {
          const Nn = ms - Oe, bs = ys - we;
          if (Math.abs(Nn) < 5 && Math.abs(bs) < 5) return;
          Jt = !0, Tt.value = w, R.value = an.cols, A.value = an.rows;
          const Be = ne.cloneNode(!0);
          Be.classList.add("drag-ghost"), Be.style.position = "fixed", Be.style.width = ue.width + "px", Be.style.height = ue.height + "px", Be.style.zIndex = "1000", Be.style.pointerEvents = "none", Be.style.opacity = "0.85", Be.style.transform = "scale(1.04)", Be.style.transition = "none", Be.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Be), d.value = Be, ne.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (d.value && (d.value.style.left = ms - ke + "px", d.value.style.top = ys - We + "px"), Ze.value) {
          const Nn = Ze.value.getBoundingClientRect(), bs = ms - ke - Nn.left - Nd + ue.width / 2, Be = ys - We - Nn.top - Od + ue.height / 2, Tl = Math.max(1, Math.round(bs / ri)), El = Math.max(1, Math.round(Be / ri));
          g.value = Tl, _.value = El;
        }
      }
      function On() {
        document.removeEventListener("mousemove", Rn), document.removeEventListener("mouseup", On), document.removeEventListener("touchmove", Rn), document.removeEventListener("touchend", On), document.body.style.userSelect = "", Jt && (d.value && (d.value.remove(), d.value = null), ne.style.opacity = "", an && (an.gridCol = g.value, an.gridRow = _.value, y.value = [...y.value], $()), Tt.value = null);
      }
      document.addEventListener("mousemove", Rn), document.addEventListener("mouseup", On), document.addEventListener("touchmove", Rn, { passive: !1 }), document.addEventListener("touchend", On);
    }
    function D() {
      const b = r.value.trim();
      oi(b || null), a.value = !1;
    }
    const S = /* @__PURE__ */ W(!1);
    function q(b) {
      S.value && (S.value = !1);
    }
    Cn(() => document.addEventListener("click", q)), Sn(() => document.removeEventListener("click", q));
    const K = /* @__PURE__ */ W(""), Y = /* @__PURE__ */ W("");
    function Z() {
      const b = /* @__PURE__ */ new Date();
      K.value = b.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), Y.value = b.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let le;
    return Cn(() => {
      Z(), le = setInterval(Z, 1e3);
    }), Sn(() => {
      for (const [b] of u) J(b);
      clearInterval(le);
    }), (b, w) => (C(), L("div", null, [
      !o.value && !e.panelMode ? (C(), Ae(yu, {
        key: 0,
        onToken: Je
      })) : (C(), L("div", bd, [
        p("header", _d, [
          p("div", wd, [
            Se(kf, { token: l.value }, null, 8, ["token"]),
            Se(Kf, { token: l.value }, null, 8, ["token"]),
            Se(rd, { token: l.value }, null, 8, ["token"]),
            Se(yd, { token: l.value }, null, 8, ["token"])
          ]),
          p("div", $d, [
            p("div", kd, [
              p("span", xd, z(K.value), 1),
              p("span", Cd, z(Y.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: Ze,
          class: "dashboard-main"
        }, [
          (C(!0), L(ie, null, Ke(O.value, (x) => {
            var ne, ue, Oe;
            return C(), L(ie, {
              key: x.id
            }, [
              x.type === "heading" ? (C(), Ae(vf, {
                key: 0,
                "data-card-id": x.id,
                style: Lt(I(x)),
                class: be({ "card-dragging": Tt.value === x.id }),
                label: x.label || "Überschrift",
                cols: x.cols,
                rows: x.rows,
                onUpdateLabel: (we) => ln(x.id, we),
                onRemove: (we) => Ot(x.id),
                onResize: (we, ke) => Ie(x.id, we, ke),
                onMousedown: (we) => F(we, x.id),
                onTouchstart: (we) => F(we, x.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : (C(), Ae(uf, {
                key: 1,
                "data-card-id": x.id,
                style: Lt(I(x)),
                class: be({ "card-dragging": Tt.value === x.id }),
                "entity-id": x.entityId,
                token: l.value,
                cols: x.cols,
                rows: x.rows,
                state: ((ne = f[x.id]) == null ? void 0 : ne.state) ?? null,
                loading: ((ue = f[x.id]) == null ? void 0 : ue.loading) ?? !0,
                error: ((Oe = f[x.id]) == null ? void 0 : Oe.error) ?? null,
                onChangeEntity: (we) => Qe(x.id, we),
                onRemove: (we) => Ot(x.id),
                onResize: (we, ke) => Ie(x.id, we, ke),
                onMousedown: (we) => F(we, x.id),
                onTouchstart: (we) => F(we, x.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          Tt.value ? (C(), L("div", {
            key: 0,
            class: "drop-placeholder",
            style: Lt(B.value)
          }, null, 4)) : oe("", !0)
        ], 512),
        p("nav", Sd, [
          p("div", Td, [
            (C(!0), L(ie, null, Ke(y.value, (x, ne) => (C(), L("button", {
              key: x.id,
              class: be(["page-tab", { active: N.value === x.id }]),
              onClick: (ue) => v(x.id),
              onDblclick: (ue) => fe(x.id),
              onTouchstartPassive: (ue) => H(x.id),
              onTouchend: c,
              onTouchmove: c
            }, [
              k.value === x.id ? dt((C(), L("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: G,
                "onUpdate:modelValue": w[0] || (w[0] = (ue) => j.value = ue),
                class: "page-tab-input",
                onBlur: ce,
                onKeydown: [
                  Ce(ce, ["enter"]),
                  Ce(pe, ["escape"])
                ],
                onClick: w[1] || (w[1] = se(() => {
                }, ["stop"]))
              }, null, 544)), [
                [ht, j.value]
              ]) : (C(), L("span", Md, z(x.name), 1))
            ], 42, Ed))), 128))
          ])
        ]),
        (C(), Ae(Ct, { to: "body" }, [
          M.value ? (C(), L("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: w[5] || (w[5] = se((x) => M.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: w[4] || (w[4] = se(() => {
              }, ["stop"]))
            }, [
              p("div", Ad, [
                w[19] || (w[19] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: w[2] || (w[2] = (x) => M.value = null)
                }, "✕")
              ]),
              p("p", Id, " „" + z(U.value) + '" mit ' + z(ee.value) + " Karte" + z(ee.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", Ld, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: w[3] || (w[3] = (x) => M.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: ae
                }, "Löschen")
              ])
            ])
          ])) : oe("", !0)
        ])),
        p("div", Pd, [
          p("button", {
            class: "burger-btn",
            onClick: w[6] || (w[6] = se((x) => S.value = !S.value, ["stop"]))
          }, [...w[20] || (w[20] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          Se(Oa, { name: "burger-pop" }, {
            default: Fi(() => [
              S.value ? (C(), L("div", {
                key: 0,
                class: "burger-menu",
                onClick: w[18] || (w[18] = se(() => {
                }, ["stop"]))
              }, [
                p("button", {
                  class: "burger-item",
                  onClick: w[7] || (w[7] = (x) => {
                    Re(), S.value = !1;
                  })
                }, [...w[21] || (w[21] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  wt(" Karte hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[8] || (w[8] = (x) => {
                    zt(), S.value = !1;
                  })
                }, [...w[22] || (w[22] = [
                  p("span", { class: "burger-item-icon" }, "H", -1),
                  wt(" Überschrift hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[9] || (w[9] = (x) => {
                    E(), S.value = !1;
                  })
                }, [...w[23] || (w[23] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  wt(" Neue Seite ", -1)
                ])]),
                y.value.length > 1 ? (C(), L("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: w[10] || (w[10] = (x) => {
                    re(N.value), S.value = !1;
                  })
                }, [...w[24] || (w[24] = [
                  p("span", { class: "burger-item-icon" }, "✕", -1),
                  wt(" Seite löschen ", -1)
                ])])) : oe("", !0),
                w[27] || (w[27] = p("div", { class: "burger-divider" }, null, -1)),
                p("button", {
                  class: "burger-item burger-item-muted",
                  onClick: w[11] || (w[11] = (x) => a.value = !a.value)
                }, [
                  w[25] || (w[25] = p("span", { class: "burger-item-icon" }, "🔑", -1)),
                  wt(" Auth Key " + z(Me(i) ? "✓" : ""), 1)
                ]),
                a.value ? (C(), L("div", {
                  key: 1,
                  class: "burger-auth-key",
                  onClick: w[16] || (w[16] = se(() => {
                  }, ["stop"]))
                }, [
                  dt(p("input", {
                    "onUpdate:modelValue": w[12] || (w[12] = (x) => r.value = x),
                    class: "burger-auth-input",
                    type: "password",
                    placeholder: "Long-Lived Access Token",
                    onKeydown: w[13] || (w[13] = Ce((x) => D(), ["enter"]))
                  }, null, 544), [
                    [ht, r.value]
                  ]),
                  p("div", Rd, [
                    p("button", {
                      class: "burger-auth-save",
                      onClick: w[14] || (w[14] = (x) => D())
                    }, "Speichern"),
                    Me(i) ? (C(), L("button", {
                      key: 0,
                      class: "burger-auth-clear",
                      onClick: w[15] || (w[15] = (x) => {
                        r.value = "", Me(oi)(null);
                      })
                    }, "Löschen")) : oe("", !0)
                  ])
                ])) : oe("", !0),
                e.panelMode ? oe("", !0) : (C(), L(ie, { key: 2 }, [
                  w[26] || (w[26] = p("div", { class: "burger-divider" }, null, -1)),
                  p("button", {
                    class: "burger-item burger-item-muted",
                    onClick: w[17] || (w[17] = (x) => {
                      pt(), S.value = !1;
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
}), Fd = /* @__PURE__ */ Xe(Dd, [["__scopeId", "data-v-5701493c"]]);
class Hd extends HTMLElement {
  constructor() {
    super(...arguments);
    go(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && _u(s), !this._app && s) {
      kl(!0);
      const l = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const f = document.createElement("style");
          f.textContent = a.textContent, l.appendChild(f);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", l.appendChild(r), this._app = au(Fd, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", Hd);
