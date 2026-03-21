(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-2114e986]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-2114e986]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-2114e986]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-2114e986]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-2114e986]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-2114e986]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-2114e986]{opacity:1}.edit-ctrl-btn[data-v-2114e986]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-2114e986]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-2114e986]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-2114e986]{width:2px;height:2px}.dot[data-v-2114e986]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-2114e986]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-2114e986]{justify-content:center;padding:16px 0}.state.error[data-v-2114e986]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-2114e986]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-2114e986 .8s linear infinite}@keyframes spin-2114e986{to{transform:rotate(360deg)}}.card.narrow[data-v-2114e986]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-2114e986]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-2114e986]{width:18px;height:18px;border-width:2px}.card.small[data-v-2114e986]:after{bottom:-12px;height:18px}.card.short[data-v-2114e986]{padding:14px 16px 12px}.card.short .label[data-v-2114e986]{font-size:.6rem}.resize-handle[data-v-2114e986]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-2114e986]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-2114e986]{opacity:1}.ha-toggle-row[data-v-2114e986]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-2114e986]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-2114e986]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-2114e986]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-2114e986]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-2114e986]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-7a388668]{display:flex;align-items:flex-end;padding:0 2px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-7a388668]{align-items:flex-end}.heading-content[data-v-7a388668]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;gap:4px}.heading-text[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-7a388668]{font-size:1rem}.heading-line[data-v-7a388668]{border:none;height:2px;background:#d2d8e0;margin:0;width:100%;border-radius:1px}.heading-input[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-7a388668]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-7a388668]{opacity:1}.heading-edit-btn[data-v-7a388668]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-7a388668]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-7a388668]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-7a388668]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7a388668]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-7a388668]{opacity:1}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-eccc96cb]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-eccc96cb]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-eccc96cb]{display:flex;align-items:center;gap:10px}.app-name[data-v-eccc96cb]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-eccc96cb]{display:flex;align-items:center}.clock[data-v-eccc96cb]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-eccc96cb]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-eccc96cb]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-eccc96cb]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-eccc96cb] .card{width:auto;min-height:unset}.dashboard-main[data-v-eccc96cb] .heading{max-height:50px;align-self:end}.page-tabs[data-v-eccc96cb]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-eccc96cb]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-eccc96cb]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-eccc96cb]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-eccc96cb]:not(.active):hover{color:#718096}.page-tab-label[data-v-eccc96cb]{white-space:nowrap}.page-tab-input[data-v-eccc96cb]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-eccc96cb]{max-width:340px}.page-delete-text[data-v-eccc96cb]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-eccc96cb]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-eccc96cb],.page-delete-confirm[data-v-eccc96cb]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-eccc96cb]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-eccc96cb]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-eccc96cb]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-eccc96cb]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-eccc96cb]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-eccc96cb]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-eccc96cb]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-eccc96cb]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-eccc96cb]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-eccc96cb]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-eccc96cb]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-eccc96cb],.burger-pop-leave-to[data-v-eccc96cb]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-eccc96cb]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-eccc96cb]:hover{background:#0000000a}.burger-item-icon[data-v-eccc96cb]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-eccc96cb],.burger-item-danger .burger-item-icon[data-v-eccc96cb]{color:#e53e3e}.burger-item-muted[data-v-eccc96cb]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-eccc96cb]{height:1px;background:#d2d8e0;margin:4px 14px}.burger-auth-key[data-v-eccc96cb]{padding:6px 14px 10px}.burger-auth-input[data-v-eccc96cb]{width:100%;padding:6px 10px;border:none;border-radius:8px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.75rem;color:#2d3748;outline:none;box-sizing:border-box}.burger-auth-actions[data-v-eccc96cb]{display:flex;gap:6px;margin-top:6px}.burger-auth-save[data-v-eccc96cb],.burger-auth-clear[data-v-eccc96cb]{padding:4px 12px;border:none;border-radius:8px;font-size:.72rem;font-weight:600;cursor:pointer;background:#e8ecf1;color:#2d3748;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.burger-auth-save[data-v-eccc96cb]:active,.burger-auth-clear[data-v-eccc96cb]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.burger-auth-clear[data-v-eccc96cb]{color:#e53e3e}.card-dragging[data-v-eccc96cb]{opacity:.25}.drop-placeholder[data-v-eccc96cb]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Ol = Object.defineProperty;
var Nl = (e, t, n) => t in e ? Ol(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var _o = (e, t, n) => Nl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Qs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const be = {}, Zt = [], ct = () => {
}, hi = () => !1, is = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Zs = (e) => e.startsWith("onUpdate:"), Me = Object.assign, eo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Dl = Object.prototype.hasOwnProperty, me = (e, t) => Dl.call(e, t), Q = Array.isArray, en = (e) => Pn(e) === "[object Map]", pi = (e) => Pn(e) === "[object Set]", wo = (e) => Pn(e) === "[object Date]", ne = (e) => typeof e == "function", xe = (e) => typeof e == "string", ft = (e) => typeof e == "symbol", ge = (e) => e !== null && typeof e == "object", vi = (e) => (ge(e) || ne(e)) && ne(e.then) && ne(e.catch), gi = Object.prototype.toString, Pn = (e) => gi.call(e), Fl = (e) => Pn(e).slice(8, -1), mi = (e) => Pn(e) === "[object Object]", ls = (e) => xe(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, pn = /* @__PURE__ */ Qs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), rs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Hl = /-\w/g, Ze = rs(
  (e) => e.replace(Hl, (t) => t.slice(1).toUpperCase())
), Bl = /\B([A-Z])/g, Rt = rs(
  (e) => e.replace(Bl, "-$1").toLowerCase()
), yi = rs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Cs = rs(
  (e) => e ? `on${yi(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Vn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, to = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Kl = (e) => {
  const t = xe(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let $o;
const as = () => $o || ($o = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Lt(e) {
  if (Q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = xe(s) ? Ul(s) : Lt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (xe(e) || ge(e))
    return e;
}
const jl = /;(?![^(]*\))/g, Vl = /:([^]+)/, Wl = /\/\*[^]*?\*\//g;
function Ul(e) {
  const t = {};
  return e.replace(Wl, "").split(jl).forEach((n) => {
    if (n) {
      const s = n.split(Vl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function $e(e) {
  let t = "";
  if (xe(e))
    t = e;
  else if (Q(e))
    for (let n = 0; n < e.length; n++) {
      const s = $e(e[n]);
      s && (t += s + " ");
    }
  else if (ge(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const zl = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Jl = /* @__PURE__ */ Qs(zl);
function _i(e) {
  return !!e || e === "";
}
function Gl(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = no(e[s], t[s]);
  return n;
}
function no(e, t) {
  if (e === t) return !0;
  let n = wo(e), s = wo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = ft(e), s = ft(t), n || s)
    return e === t;
  if (n = Q(e), s = Q(t), n || s)
    return n && s ? Gl(e, t) : !1;
  if (n = ge(e), s = ge(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !no(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const wi = (e) => !!(e && e.__v_isRef === !0), J = (e) => xe(e) ? e : e == null ? "" : Q(e) || ge(e) && (e.toString === gi || !ne(e.toString)) ? wi(e) ? J(e.value) : JSON.stringify(e, $i, 2) : String(e), $i = (e, t) => wi(t) ? $i(e, t.value) : en(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[Ss(s, i) + " =>"] = o, n),
    {}
  )
} : pi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ss(n))
} : ft(t) ? Ss(t) : ge(t) && !Q(t) && !mi(t) ? String(t) : t, Ss = (e, t = "") => {
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
class Yl {
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
function ql() {
  return Ve;
}
let we;
const Ts = /* @__PURE__ */ new WeakSet();
class ki {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ve && Ve.active && Ve.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Ts.has(this) && (Ts.delete(this), this.trigger()));
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
    this.flags |= 2, ko(this), Si(this);
    const t = we, n = et;
    we = this, et = !0;
    try {
      return this.fn();
    } finally {
      Ti(this), we = t, et = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        io(t);
      this.deps = this.depsTail = void 0, ko(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Ts.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Fs(this) && this.run();
  }
  get dirty() {
    return Fs(this);
  }
}
let xi = 0, vn, gn;
function Ci(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = gn, gn = e;
    return;
  }
  e.next = vn, vn = e;
}
function so() {
  xi++;
}
function oo() {
  if (--xi > 0)
    return;
  if (gn) {
    let t = gn;
    for (gn = void 0; t; ) {
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
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ti(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), io(s), Xl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Fs(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ei(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ei(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === kn) || (e.globalVersion = kn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Fs(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = we, s = et;
  we = e, et = !0;
  try {
    Si(e);
    const o = e.fn(e._value);
    (t.version === 0 || ut(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    we = n, et = s, Ti(e), e.flags &= -3;
  }
}
function io(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      io(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Xl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let et = !0;
const Mi = [];
function $t() {
  Mi.push(et), et = !1;
}
function kt() {
  const e = Mi.pop();
  et = e === void 0 ? !0 : e;
}
function ko(e) {
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
let kn = 0;
class Ql {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class lo {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!we || !et || we === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== we)
      n = this.activeLink = new Ql(we, this), we.deps ? (n.prevDep = we.depsTail, we.depsTail.nextDep = n, we.depsTail = n) : we.deps = we.depsTail = n, Ai(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = we.depsTail, n.nextDep = void 0, we.depsTail.nextDep = n, we.depsTail = n, we.deps === n && (we.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, kn++, this.notify(t);
  }
  notify(t) {
    so();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      oo();
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
const Yn = /* @__PURE__ */ new WeakMap(), jt = /* @__PURE__ */ Symbol(
  ""
), Hs = /* @__PURE__ */ Symbol(
  ""
), xn = /* @__PURE__ */ Symbol(
  ""
);
function Re(e, t, n) {
  if (et && we) {
    let s = Yn.get(e);
    s || Yn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new lo()), o.map = s, o.key = n), o.track();
  }
}
function bt(e, t, n, s, o, i) {
  const l = Yn.get(e);
  if (!l) {
    kn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (so(), t === "clear")
    l.forEach(r);
  else {
    const a = Q(e), c = a && ls(n);
    if (a && n === "length") {
      const u = Number(s);
      l.forEach((h, m) => {
        (m === "length" || m === xn || !ft(m) && m >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), c && r(l.get(xn)), t) {
        case "add":
          a ? c && r(l.get("length")) : (r(l.get(jt)), en(e) && r(l.get(Hs)));
          break;
        case "delete":
          a || (r(l.get(jt)), en(e) && r(l.get(Hs)));
          break;
        case "set":
          en(e) && r(l.get(jt));
          break;
      }
  }
  oo();
}
function Zl(e, t) {
  const n = Yn.get(e);
  return n && n.get(t);
}
function qt(e) {
  const t = /* @__PURE__ */ pe(e);
  return t === e ? t : (Re(t, "iterate", xn), /* @__PURE__ */ Je(e) ? t : t.map(tt));
}
function us(e) {
  return Re(e = /* @__PURE__ */ pe(e), "iterate", xn), e;
}
function rt(e, t) {
  return /* @__PURE__ */ xt(e) ? on(/* @__PURE__ */ Vt(e) ? tt(t) : t) : tt(t);
}
const er = {
  __proto__: null,
  [Symbol.iterator]() {
    return Es(this, Symbol.iterator, (e) => rt(this, e));
  },
  concat(...e) {
    return qt(this).concat(
      ...e.map((t) => Q(t) ? qt(t) : t)
    );
  },
  entries() {
    return Es(this, "entries", (e) => (e[1] = rt(this, e[1]), e));
  },
  every(e, t) {
    return vt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return vt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => rt(this, s)),
      arguments
    );
  },
  find(e, t) {
    return vt(
      this,
      "find",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return vt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return vt(
      this,
      "findLast",
      e,
      t,
      (n) => rt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return vt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return vt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ms(this, "includes", e);
  },
  indexOf(...e) {
    return Ms(this, "indexOf", e);
  },
  join(e) {
    return qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ms(this, "lastIndexOf", e);
  },
  map(e, t) {
    return vt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return un(this, "pop");
  },
  push(...e) {
    return un(this, "push", e);
  },
  reduce(e, ...t) {
    return xo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return xo(this, "reduceRight", e, t);
  },
  shift() {
    return un(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return vt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return un(this, "splice", e);
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
    return un(this, "unshift", e);
  },
  values() {
    return Es(this, "values", (e) => rt(this, e));
  }
};
function Es(e, t, n) {
  const s = us(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Je(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const tr = Array.prototype;
function vt(e, t, n, s, o, i) {
  const l = us(e), r = l !== e && !/* @__PURE__ */ Je(e), a = l[t];
  if (a !== tr[t]) {
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
function xo(e, t, n, s) {
  const o = us(e), i = o !== e && !/* @__PURE__ */ Je(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(c, u, h) {
    return r && (r = !1, c = rt(e, c)), n.call(this, c, rt(e, u), h, e);
  }) : n.length > 3 && (l = function(c, u, h) {
    return n.call(this, c, u, h, e);
  }));
  const a = o[t](l, ...s);
  return r ? rt(e, a) : a;
}
function Ms(e, t, n) {
  const s = /* @__PURE__ */ pe(e);
  Re(s, "iterate", xn);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ fs(n[0]) ? (n[0] = /* @__PURE__ */ pe(n[0]), s[t](...n)) : o;
}
function un(e, t, n = []) {
  $t(), so();
  const s = (/* @__PURE__ */ pe(e))[t].apply(e, n);
  return oo(), kt(), s;
}
const nr = /* @__PURE__ */ Qs("__proto__,__v_isRef,__isVue"), Ii = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ft)
);
function sr(e) {
  ft(e) || (e = String(e));
  const t = /* @__PURE__ */ pe(this);
  return Re(t, "has", e), t.hasOwnProperty(e);
}
class Li {
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
      return s === (o ? i ? hr : Ni : i ? Oi : Ri).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = Q(t);
    if (!o) {
      let a;
      if (l && (a = er[n]))
        return a;
      if (n === "hasOwnProperty")
        return sr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ee(t) ? t : s
    );
    if ((ft(n) ? Ii.has(n) : nr(n)) || (o || Re(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ Ee(r)) {
      const a = l && ls(n) ? r : r.value;
      return o && ge(a) ? /* @__PURE__ */ Ks(a) : a;
    }
    return ge(r) ? o ? /* @__PURE__ */ Ks(r) : /* @__PURE__ */ cs(r) : r;
  }
}
class Pi extends Li {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = Q(t) && ls(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ xt(i);
      if (!/* @__PURE__ */ Je(s) && !/* @__PURE__ */ xt(s) && (i = /* @__PURE__ */ pe(i), s = /* @__PURE__ */ pe(s)), !l && /* @__PURE__ */ Ee(i) && !/* @__PURE__ */ Ee(s))
        return c || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : me(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ee(t) ? t : o
    );
    return t === /* @__PURE__ */ pe(o) && (r ? ut(s, i) && bt(t, "set", n, s) : bt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = me(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && bt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!ft(n) || !Ii.has(n)) && Re(t, "has", n), s;
  }
  ownKeys(t) {
    return Re(
      t,
      "iterate",
      Q(t) ? "length" : jt
    ), Reflect.ownKeys(t);
  }
}
class or extends Li {
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
const ir = /* @__PURE__ */ new Pi(), lr = /* @__PURE__ */ new or(), rr = /* @__PURE__ */ new Pi(!0);
const Bs = (e) => e, Hn = (e) => Reflect.getPrototypeOf(e);
function ar(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ pe(o), l = en(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, c = o[e](...s), u = n ? Bs : t ? on : tt;
    return !t && Re(
      i,
      "iterate",
      a ? Hs : jt
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
function Bn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ur(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), r = /* @__PURE__ */ pe(o);
      e || (ut(o, r) && Re(l, "get", o), Re(l, "get", r));
      const { has: a } = Hn(l), c = t ? Bs : e ? on : tt;
      if (a.call(l, o))
        return c(i.get(o));
      if (a.call(l, r))
        return c(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Re(/* @__PURE__ */ pe(o), "iterate", jt), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ pe(i), r = /* @__PURE__ */ pe(o);
      return e || (ut(o, r) && Re(l, "has", o), Re(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ pe(r), c = t ? Bs : e ? on : tt;
      return !e && Re(a, "iterate", jt), r.forEach((u, h) => o.call(i, c(u), c(h), l));
    }
  };
  return Me(
    n,
    e ? {
      add: Bn("add"),
      set: Bn("set"),
      delete: Bn("delete"),
      clear: Bn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ pe(this), l = Hn(i), r = /* @__PURE__ */ pe(o), a = !t && !/* @__PURE__ */ Je(o) && !/* @__PURE__ */ xt(o) ? r : o;
        return l.has.call(i, a) || ut(o, a) && l.has.call(i, o) || ut(r, a) && l.has.call(i, r) || (i.add(a), bt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ Je(i) && !/* @__PURE__ */ xt(i) && (i = /* @__PURE__ */ pe(i));
        const l = /* @__PURE__ */ pe(this), { has: r, get: a } = Hn(l);
        let c = r.call(l, o);
        c || (o = /* @__PURE__ */ pe(o), c = r.call(l, o));
        const u = a.call(l, o);
        return l.set(o, i), c ? ut(i, u) && bt(l, "set", o, i) : bt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ pe(this), { has: l, get: r } = Hn(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ pe(o), a = l.call(i, o)), r && r.call(i, o);
        const c = i.delete(o);
        return a && bt(i, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ pe(this), i = o.size !== 0, l = o.clear();
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
    n[o] = ar(o, e, t);
  }), n;
}
function ro(e, t) {
  const n = ur(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    me(n, o) && o in s ? n : s,
    o,
    i
  );
}
const cr = {
  get: /* @__PURE__ */ ro(!1, !1)
}, fr = {
  get: /* @__PURE__ */ ro(!1, !0)
}, dr = {
  get: /* @__PURE__ */ ro(!0, !1)
};
const Ri = /* @__PURE__ */ new WeakMap(), Oi = /* @__PURE__ */ new WeakMap(), Ni = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap();
function pr(e) {
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
function vr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : pr(Fl(e));
}
// @__NO_SIDE_EFFECTS__
function cs(e) {
  return /* @__PURE__ */ xt(e) ? e : ao(
    e,
    !1,
    ir,
    cr,
    Ri
  );
}
// @__NO_SIDE_EFFECTS__
function gr(e) {
  return ao(
    e,
    !1,
    rr,
    fr,
    Oi
  );
}
// @__NO_SIDE_EFFECTS__
function Ks(e) {
  return ao(
    e,
    !0,
    lr,
    dr,
    Ni
  );
}
function ao(e, t, n, s, o) {
  if (!ge(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = vr(e);
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
  return /* @__PURE__ */ xt(e) ? /* @__PURE__ */ Vt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function xt(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Je(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function fs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function pe(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ pe(t) : e;
}
function mr(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && bi(e, "__v_skip", !0), e;
}
const tt = (e) => ge(e) ? /* @__PURE__ */ cs(e) : e, on = (e) => ge(e) ? /* @__PURE__ */ Ks(e) : e;
// @__NO_SIDE_EFFECTS__
function Ee(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function W(e) {
  return yr(e, !1);
}
function yr(e, t) {
  return /* @__PURE__ */ Ee(e) ? e : new br(e, t);
}
class br {
  constructor(t, n) {
    this.dep = new lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ pe(t), this._value = n ? t : tt(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Je(t) || /* @__PURE__ */ xt(t);
    t = s ? t : /* @__PURE__ */ pe(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : tt(t), this.dep.trigger());
  }
}
function Ie(e) {
  return /* @__PURE__ */ Ee(e) ? e.value : e;
}
const _r = {
  get: (e, t, n) => t === "__v_raw" ? e : Ie(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Ee(o) && !/* @__PURE__ */ Ee(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Di(e) {
  return /* @__PURE__ */ Vt(e) ? e : new Proxy(e, _r);
}
class wr {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ pe(t);
    let o = !0, i = t;
    if (!Q(t) || !ls(String(n)))
      do
        o = !/* @__PURE__ */ fs(i) || /* @__PURE__ */ Je(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ie(t)), this._value = t === void 0 ? this._defaultValue : t;
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
    return Zl(this._raw, this._key);
  }
}
class $r {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function uo(e, t, n) {
  return /* @__PURE__ */ Ee(e) ? e : ne(e) ? new $r(e) : ge(e) && arguments.length > 1 ? kr(e, t, n) : /* @__PURE__ */ W(e);
}
function kr(e, t, n) {
  return new wr(e, t, n);
}
class xr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = kn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    we !== this)
      return Ci(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ei(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Cr(e, t, n = !1) {
  let s, o;
  return ne(e) ? s = e : (s = e.get, o = e.set), new xr(s, o, n);
}
const Kn = {}, qn = /* @__PURE__ */ new WeakMap();
let Ht;
function Sr(e, t = !1, n = Ht) {
  if (n) {
    let s = qn.get(n);
    s || qn.set(n, s = []), s.push(e);
  }
}
function Tr(e, t, n = be) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, c = (P) => o ? P : /* @__PURE__ */ Je(P) || o === !1 || o === 0 ? _t(P, 1) : _t(P);
  let u, h, m, y, N = !1, T = !1;
  if (/* @__PURE__ */ Ee(e) ? (h = () => e.value, N = /* @__PURE__ */ Je(e)) : /* @__PURE__ */ Vt(e) ? (h = () => c(e), N = !0) : Q(e) ? (T = !0, N = e.some((P) => /* @__PURE__ */ Vt(P) || /* @__PURE__ */ Je(P)), h = () => e.map((P) => {
    if (/* @__PURE__ */ Ee(P))
      return P.value;
    if (/* @__PURE__ */ Vt(P))
      return c(P);
    if (ne(P))
      return a ? a(P, 2) : P();
  })) : ne(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (m) {
      $t();
      try {
        m();
      } finally {
        kt();
      }
    }
    const P = Ht;
    Ht = u;
    try {
      return a ? a(e, 3, [y]) : e(y);
    } finally {
      Ht = P;
    }
  } : h = ct, t && o) {
    const P = h, V = o === !0 ? 1 / 0 : o;
    h = () => _t(P(), V);
  }
  const R = ql(), x = () => {
    u.stop(), R && R.active && eo(R.effects, u);
  };
  if (i && t) {
    const P = t;
    t = (...V) => {
      P(...V), x();
    };
  }
  let g = T ? new Array(e.length).fill(Kn) : Kn;
  const S = (P) => {
    if (!(!(u.flags & 1) || !u.dirty && !P))
      if (t) {
        const V = u.run();
        if (o || N || (T ? V.some((ee, ae) => ut(ee, g[ae])) : ut(V, g))) {
          m && m();
          const ee = Ht;
          Ht = u;
          try {
            const ae = [
              V,
              // pass undefined as the old value when it's changed for the first time
              g === Kn ? void 0 : T && g[0] === Kn ? [] : g,
              y
            ];
            g = V, a ? a(t, 3, ae) : (
              // @ts-expect-error
              t(...ae)
            );
          } finally {
            Ht = ee;
          }
        }
      } else
        u.run();
  };
  return r && r(S), u = new ki(h), u.scheduler = l ? () => l(S, !1) : S, y = (P) => Sr(P, !1, u), m = u.onStop = () => {
    const P = qn.get(u);
    if (P) {
      if (a)
        a(P, 4);
      else
        for (const V of P) V();
      qn.delete(u);
    }
  }, t ? s ? S(!0) : g = u.run() : l ? l(S.bind(null, !0), !0) : u.run(), x.pause = u.pause.bind(u), x.resume = u.resume.bind(u), x.stop = x, x;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !ge(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ee(e))
    _t(e.value, t, n);
  else if (Q(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (pi(e) || en(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (mi(e)) {
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
function Rn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    ds(o, t, n);
  }
}
function nt(e, t, n, s) {
  if (ne(e)) {
    const o = Rn(e, t, n, s);
    return o && vi(o) && o.catch((i) => {
      ds(i, t, n);
    }), o;
  }
  if (Q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(nt(e[i], t, n, s));
    return o;
  }
}
function ds(e, t, n, s = !0) {
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
  Er(e, n, o, s, l);
}
function Er(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const He = [];
let it = -1;
const tn = [];
let Mt = null, Xt = 0;
const Fi = /* @__PURE__ */ Promise.resolve();
let Xn = null;
function hs(e) {
  const t = Xn || Fi;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Mr(e) {
  let t = it + 1, n = He.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = He[s], i = Cn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function co(e) {
  if (!(e.flags & 1)) {
    const t = Cn(e), n = He[He.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Cn(n) ? He.push(e) : He.splice(Mr(t), 0, e), e.flags |= 1, Hi();
  }
}
function Hi() {
  Xn || (Xn = Fi.then(Ki));
}
function Ar(e) {
  Q(e) ? tn.push(...e) : Mt && e.id === -1 ? Mt.splice(Xt + 1, 0, e) : e.flags & 1 || (tn.push(e), e.flags |= 1), Hi();
}
function Co(e, t, n = it + 1) {
  for (; n < He.length; n++) {
    const s = He[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      He.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Bi(e) {
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
    it = -1, He.length = 0, Bi(), Xn = null, (He.length || tn.length) && Ki();
  }
}
let Ye = null, ji = null;
function Qn(e) {
  const t = Ye;
  return Ye = e, ji = e && e.type.__scopeId || null, t;
}
function Vi(e, t = Ye, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && ts(-1);
    const i = Qn(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Qn(i), s._d && ts(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function dt(e, t) {
  if (Ye === null)
    return e;
  const n = ys(Ye), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = be] = t[o];
    i && (ne(i) && (i = {
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
function Ot(e, t, n, s) {
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
function Ir(e, t) {
  if (Ke) {
    let n = Ke.provides;
    const s = Ke.parent && Ke.parent.provides;
    s === n && (n = Ke.provides = Object.create(s)), n[e] = t;
  }
}
function Wn(e, t, n = !1) {
  const s = $l();
  if (s || nn) {
    let o = nn ? nn._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && ne(t) ? t.call(s && s.proxy) : t;
  }
}
const Lr = /* @__PURE__ */ Symbol.for("v-scx"), Pr = () => Wn(Lr);
function At(e, t, n) {
  return Wi(e, t, n);
}
function Wi(e, t, n = be) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = Me({}, n), a = t && s || !t && i !== "post";
  let c;
  if (An) {
    if (i === "sync") {
      const y = Pr();
      c = y.__watcherHandles || (y.__watcherHandles = []);
    } else if (!a) {
      const y = () => {
      };
      return y.stop = ct, y.resume = ct, y.pause = ct, y;
    }
  }
  const u = Ke;
  r.call = (y, N, T) => nt(y, u, N, T);
  let h = !1;
  i === "post" ? r.scheduler = (y) => {
    Pe(y, u && u.suspense);
  } : i !== "sync" && (h = !0, r.scheduler = (y, N) => {
    N ? y() : co(y);
  }), r.augmentJob = (y) => {
    t && (y.flags |= 4), h && (y.flags |= 2, u && (y.id = u.uid, y.i = u));
  };
  const m = Tr(e, t, r);
  return An && (c ? c.push(m) : a && m()), m;
}
function Rr(e, t, n) {
  const s = this.proxy, o = xe(e) ? e.includes(".") ? Ui(s, e) : () => s[e] : e.bind(s, s);
  let i;
  ne(t) ? i = t : (i = t.handler, n = t);
  const l = On(this), r = Wi(o, i.bind(s), n);
  return l(), r;
}
function Ui(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const zi = /* @__PURE__ */ Symbol("_vte"), Ji = (e) => e.__isTeleport, mn = (e) => e && (e.disabled || e.disabled === ""), So = (e) => e && (e.defer || e.defer === ""), To = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Eo = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, js = (e, t) => {
  const n = e && e.to;
  return xe(n) ? t ? t(n) : null : n;
}, Gi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, c) {
    const {
      mc: u,
      pc: h,
      pbc: m,
      o: { insert: y, querySelector: N, createText: T, createComment: R }
    } = c, x = mn(t.props);
    let { shapeFlag: g, children: S, dynamicChildren: P } = t;
    if (e == null) {
      const V = t.el = T(""), ee = t.anchor = T("");
      y(V, n, s), y(ee, n, s);
      const ae = (O, F) => {
        g & 16 && u(
          S,
          O,
          F,
          o,
          i,
          l,
          r,
          a
        );
      }, ce = () => {
        const O = t.target = js(t.props, N), F = Vs(O, t, T, y);
        O && (l !== "svg" && To(O) ? l = "svg" : l !== "mathml" && Eo(O) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(O), x || (ae(O, F), Un(t, !1)));
      };
      x && (ae(n, ee), Un(t, !0)), So(t.props) ? (t.el.__isMounted = !1, Pe(() => {
        ce(), delete t.el.__isMounted;
      }, i)) : ce();
    } else {
      if (So(t.props) && e.el.__isMounted === !1) {
        Pe(() => {
          Gi.process(
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
      const V = t.anchor = e.anchor, ee = t.target = e.target, ae = t.targetAnchor = e.targetAnchor, ce = mn(e.props), O = ce ? n : ee, F = ce ? V : ae;
      if (l === "svg" || To(ee) ? l = "svg" : (l === "mathml" || Eo(ee)) && (l = "mathml"), P ? (m(
        e.dynamicChildren,
        P,
        O,
        o,
        i,
        l,
        r
      ), po(e, t, !0)) : a || h(
        e,
        t,
        O,
        F,
        o,
        i,
        l,
        r,
        !1
      ), x)
        ce ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : jn(
          t,
          n,
          V,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const f = t.target = js(
          t.props,
          N
        );
        f && jn(
          t,
          f,
          null,
          c,
          0
        );
      } else ce && jn(
        t,
        ee,
        ae,
        c,
        1
      );
      Un(t, x);
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
      const y = i || !mn(m);
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
  move: jn,
  hydrate: Or
};
function jn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: c, props: u } = e, h = i === 2;
  if (h && s(l, t, n), (!h || mn(u)) && a & 16)
    for (let m = 0; m < c.length; m++)
      o(
        c[m],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function Or(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: c, createText: u }
}, h) {
  function m(R, x) {
    let g = x;
    for (; g; ) {
      if (g && g.nodeType === 8) {
        if (g.data === "teleport start anchor")
          t.targetStart = g;
        else if (g.data === "teleport anchor") {
          t.targetAnchor = g, R._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      g = l(g);
    }
  }
  function y(R, x) {
    x.anchor = h(
      l(R),
      x,
      r(R),
      n,
      s,
      o,
      i
    );
  }
  const N = t.target = js(
    t.props,
    a
  ), T = mn(t.props);
  if (N) {
    const R = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (T ? (y(e, t), m(N, R), t.targetAnchor || Vs(
      N,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === N ? e : null
    )) : (t.anchor = l(e), m(N, R), t.targetAnchor || Vs(N, t, u, c), h(
      R && l(R),
      t,
      N,
      n,
      s,
      o,
      i
    ))), Un(t, T);
  } else T && t.shapeFlag & 16 && (y(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Ct = Gi;
function Un(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Vs(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[zi] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const lt = /* @__PURE__ */ Symbol("_leaveCb"), cn = /* @__PURE__ */ Symbol("_enterCb");
function Nr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return Tn(() => {
    e.isMounted = !0;
  }), nl(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ge = [Function, Array], Yi = {
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
}, qi = (e) => {
  const t = e.subTree;
  return t.component ? qi(t.component) : t;
}, Dr = {
  name: "BaseTransition",
  props: Yi,
  setup(e, { slots: t }) {
    const n = $l(), s = Nr();
    return () => {
      const o = t.default && Zi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Xi(o), l = /* @__PURE__ */ pe(e), { mode: r } = l;
      if (s.isLeaving)
        return As(i);
      const a = Mo(i);
      if (!a)
        return As(i);
      let c = Ws(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      a.type !== Be && Sn(a, c);
      let u = n.subTree && Mo(n.subTree);
      if (u && u.type !== Be && !Bt(u, a) && qi(n).type !== Be) {
        let h = Ws(
          u,
          l,
          s,
          n
        );
        if (Sn(u, h), r === "out-in" && a.type !== Be)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, As(i);
        r === "in-out" && a.type !== Be ? h.delayLeave = (m, y, N) => {
          const T = Qi(
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
function Xi(e) {
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
const Fr = Dr;
function Qi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ws(e, t, n, s, o) {
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
    onBeforeAppear: R,
    onAppear: x,
    onAfterAppear: g,
    onAppearCancelled: S
  } = t, P = String(e.key), V = Qi(n, e), ee = (O, F) => {
    O && nt(
      O,
      s,
      9,
      F
    );
  }, ae = (O, F) => {
    const f = F[1];
    ee(O, F), Q(O) ? O.every((C) => C.length <= 1) && f() : O.length <= 1 && f();
  }, ce = {
    mode: l,
    persisted: r,
    beforeEnter(O) {
      let F = a;
      if (!n.isMounted)
        if (i)
          F = R || a;
        else
          return;
      O[lt] && O[lt](
        !0
        /* cancelled */
      );
      const f = V[P];
      f && Bt(e, f) && f.el[lt] && f.el[lt](), ee(F, [O]);
    },
    enter(O) {
      if (V[P] === e) return;
      let F = c, f = u, C = h;
      if (!n.isMounted)
        if (i)
          F = x || c, f = g || u, C = S || h;
        else
          return;
      let K = !1;
      O[cn] = (ue) => {
        K || (K = !0, ue ? ee(C, [O]) : ee(f, [O]), ce.delayedLeave && ce.delayedLeave(), O[cn] = void 0);
      };
      const Y = O[cn].bind(null, !1);
      F ? ae(F, [O, Y]) : Y();
    },
    leave(O, F) {
      const f = String(e.key);
      if (O[cn] && O[cn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return F();
      ee(m, [O]);
      let C = !1;
      O[lt] = (Y) => {
        C || (C = !0, F(), Y ? ee(T, [O]) : ee(N, [O]), O[lt] = void 0, V[f] === e && delete V[f]);
      };
      const K = O[lt].bind(null, !1);
      V[f] = e, y ? ae(y, [O, K]) : K();
    },
    clone(O) {
      const F = Ws(
        O,
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
  if (ps(e))
    return e = Pt(e), e.children = null, e;
}
function Mo(e) {
  if (!ps(e))
    return Ji(e.type) && e.children ? Xi(e.children) : e;
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
function Sn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Sn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Zi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === le ? (l.patchFlag & 128 && o++, s = s.concat(
      Zi(l.children, t, r)
    )) : (t || l.type !== Be) && s.push(r != null ? Pt(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function qe(e, t) {
  return ne(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Me({ name: e.name }, t, { setup: e })
  ) : e;
}
function el(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ao(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const Zn = /* @__PURE__ */ new WeakMap();
function yn(e, t, n, s, o = !1) {
  if (Q(e)) {
    e.forEach(
      (T, R) => yn(
        T,
        t && (Q(t) ? t[R] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (bn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && yn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? ys(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, c = t && t.r, u = r.refs === be ? r.refs = {} : r.refs, h = r.setupState, m = /* @__PURE__ */ pe(h), y = h === be ? hi : (T) => Ao(u, T) ? !1 : me(m, T), N = (T, R) => !(R && Ao(u, R));
  if (c != null && c !== a) {
    if (Io(t), xe(c))
      u[c] = null, y(c) && (h[c] = null);
    else if (/* @__PURE__ */ Ee(c)) {
      const T = t;
      N(c, T.k) && (c.value = null), T.k && (u[T.k] = null);
    }
  }
  if (ne(a))
    Rn(a, r, 12, [l, u]);
  else {
    const T = xe(a), R = /* @__PURE__ */ Ee(a);
    if (T || R) {
      const x = () => {
        if (e.f) {
          const g = T ? y(a) ? h[a] : u[a] : N() || !e.k ? a.value : u[e.k];
          if (o)
            Q(g) && eo(g, i);
          else if (Q(g))
            g.includes(i) || g.push(i);
          else if (T)
            u[a] = [i], y(a) && (h[a] = u[a]);
          else {
            const S = [i];
            N(a, e.k) && (a.value = S), e.k && (u[e.k] = S);
          }
        } else T ? (u[a] = l, y(a) && (h[a] = l)) : R && (N(a, e.k) && (a.value = l), e.k && (u[e.k] = l));
      };
      if (l) {
        const g = () => {
          x(), Zn.delete(e);
        };
        g.id = -1, Zn.set(e, g), Pe(g, n);
      } else
        Io(e), x();
    }
  }
}
function Io(e) {
  const t = Zn.get(e);
  t && (t.flags |= 8, Zn.delete(e));
}
as().requestIdleCallback;
as().cancelIdleCallback;
const bn = (e) => !!e.type.__asyncLoader, ps = (e) => e.type.__isKeepAlive;
function Hr(e, t) {
  tl(e, "a", t);
}
function Br(e, t) {
  tl(e, "da", t);
}
function tl(e, t, n = Ke) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (vs(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ps(o.parent.vnode) && Kr(s, t, n, o), o = o.parent;
  }
}
function Kr(e, t, n, s) {
  const o = vs(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  En(() => {
    eo(s[t], o);
  }, n);
}
function vs(e, t, n = Ke, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      $t();
      const r = On(n), a = nt(t, n, e, l);
      return r(), kt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const St = (e) => (t, n = Ke) => {
  (!An || e === "sp") && vs(e, (...s) => t(...s), n);
}, jr = St("bm"), Tn = St("m"), Vr = St(
  "bu"
), Wr = St("u"), nl = St(
  "bum"
), En = St("um"), Ur = St(
  "sp"
), zr = St("rtg"), Jr = St("rtc");
function Gr(e, t = Ke) {
  vs("ec", e, t);
}
const Yr = /* @__PURE__ */ Symbol.for("v-ndc");
function We(e, t, n, s) {
  let o;
  const i = n, l = Q(e);
  if (l || xe(e)) {
    const r = l && /* @__PURE__ */ Vt(e);
    let a = !1, c = !1;
    r && (a = !/* @__PURE__ */ Je(e), c = /* @__PURE__ */ xt(e), e = us(e)), o = new Array(e.length);
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
  } else if (ge(e))
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
const Us = (e) => e ? kl(e) ? ys(e) : Us(e.parent) : null, _n = (
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
    $parent: (e) => Us(e.parent),
    $root: (e) => Us(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ol(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      co(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = hs.bind(e.proxy)),
    $watch: (e) => Rr.bind(e)
  })
), Is = (e, t) => e !== be && !e.__isScriptSetup && me(e, t), qr = {
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
        if (Is(s, t))
          return l[t] = 1, s[t];
        if (o !== be && me(o, t))
          return l[t] = 2, o[t];
        if (me(i, t))
          return l[t] = 3, i[t];
        if (n !== be && me(n, t))
          return l[t] = 4, n[t];
        zs && (l[t] = 0);
      }
    }
    const c = _n[t];
    let u, h;
    if (c)
      return t === "$attrs" && Re(e.attrs, "get", ""), c(e);
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
    return Is(o, t) ? (o[t] = n, !0) : s !== be && me(s, t) ? (s[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== be && r[0] !== "$" && me(e, r) || Is(t, r) || me(i, r) || me(s, r) || me(_n, r) || me(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Lo(e) {
  return Q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let zs = !0;
function Xr(e) {
  const t = ol(e), n = e.proxy, s = e.ctx;
  zs = !1, t.beforeCreate && Po(t.beforeCreate, e, "bc");
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
    deactivated: R,
    beforeDestroy: x,
    beforeUnmount: g,
    destroyed: S,
    unmounted: P,
    render: V,
    renderTracked: ee,
    renderTriggered: ae,
    errorCaptured: ce,
    serverPrefetch: O,
    // public API
    expose: F,
    inheritAttrs: f,
    // assets
    components: C,
    directives: K,
    filters: Y
  } = t;
  if (c && Qr(c, s, null), l)
    for (const ve in l) {
      const U = l[ve];
      ne(U) && (s[ve] = U.bind(n));
    }
  if (o) {
    const ve = o.call(n, n);
    ge(ve) && (e.data = /* @__PURE__ */ cs(ve));
  }
  if (zs = !0, i)
    for (const ve in i) {
      const U = i[ve], G = ne(U) ? U.bind(n, n) : ne(U.get) ? U.get.bind(n, n) : ct, _e = !ne(U) && ne(U.set) ? U.set.bind(n) : ct, Oe = X({
        get: G,
        set: _e
      });
      Object.defineProperty(s, ve, {
        enumerable: !0,
        configurable: !0,
        get: () => Oe.value,
        set: (Ne) => Oe.value = Ne
      });
    }
  if (r)
    for (const ve in r)
      sl(r[ve], s, n, ve);
  if (a) {
    const ve = ne(a) ? a.call(n) : a;
    Reflect.ownKeys(ve).forEach((U) => {
      Ir(U, ve[U]);
    });
  }
  u && Po(u, e, "c");
  function de(ve, U) {
    Q(U) ? U.forEach((G) => ve(G.bind(n))) : U && ve(U.bind(n));
  }
  if (de(jr, h), de(Tn, m), de(Vr, y), de(Wr, N), de(Hr, T), de(Br, R), de(Gr, ce), de(Jr, ee), de(zr, ae), de(nl, g), de(En, P), de(Ur, O), Q(F))
    if (F.length) {
      const ve = e.exposed || (e.exposed = {});
      F.forEach((U) => {
        Object.defineProperty(ve, U, {
          get: () => n[U],
          set: (G) => n[U] = G,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === ct && (e.render = V), f != null && (e.inheritAttrs = f), C && (e.components = C), K && (e.directives = K), O && el(e);
}
function Qr(e, t, n = ct) {
  Q(e) && (e = Js(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ge(o) ? "default" in o ? i = Wn(
      o.from || s,
      o.default,
      !0
    ) : i = Wn(o.from || s) : i = Wn(o), /* @__PURE__ */ Ee(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function Po(e, t, n) {
  nt(
    Q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function sl(e, t, n, s) {
  let o = s.includes(".") ? Ui(n, s) : () => n[s];
  if (xe(e)) {
    const i = t[e];
    ne(i) && At(o, i);
  } else if (ne(e))
    At(o, e.bind(n));
  else if (ge(e))
    if (Q(e))
      e.forEach((i) => sl(i, t, n, s));
    else {
      const i = ne(e.handler) ? e.handler.bind(n) : t[e.handler];
      ne(i) && At(o, i, e);
    }
}
function ol(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => es(a, c, l, !0)
  ), es(a, t, l)), ge(t) && i.set(t, a), a;
}
function es(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && es(e, i, n, !0), o && o.forEach(
    (l) => es(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = Zr[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const Zr = {
  data: Ro,
  props: Oo,
  emits: Oo,
  // objects
  methods: dn,
  computed: dn,
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
  components: dn,
  directives: dn,
  // watch
  watch: ta,
  // provide / inject
  provide: Ro,
  inject: ea
};
function Ro(e, t) {
  return t ? e ? function() {
    return Me(
      ne(e) ? e.call(this, this) : e,
      ne(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function ea(e, t) {
  return dn(Js(e), Js(t));
}
function Js(e) {
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
function dn(e, t) {
  return e ? Me(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Oo(e, t) {
  return e ? Q(e) && Q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Me(
    /* @__PURE__ */ Object.create(null),
    Lo(e),
    Lo(t ?? {})
  ) : t;
}
function ta(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Me(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Fe(e[s], t[s]);
  return n;
}
function il() {
  return {
    app: null,
    config: {
      isNativeTag: hi,
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
let na = 0;
function sa(e, t) {
  return function(s, o = null) {
    ne(s) || (s = Me({}, s)), o != null && !ge(o) && (o = null);
    const i = il(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const c = i.app = {
      _uid: na++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: Oa,
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
      mount(u, h, m) {
        if (!a) {
          const y = c._ceVNode || Te(s, o);
          return y.appContext = i, m === !0 ? m = "svg" : m === !1 && (m = void 0), e(y, u, m), a = !0, c._container = u, u.__vue_app__ = c, ys(y.component);
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
const oa = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ze(t)}Modifiers`] || e[`${Rt(t)}Modifiers`];
function ia(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || be;
  let o = n;
  const i = t.startsWith("update:"), l = i && oa(s, t.slice(7));
  l && (l.trim && (o = n.map((u) => xe(u) ? u.trim() : u)), l.number && (o = n.map(to)));
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
const la = /* @__PURE__ */ new WeakMap();
function ll(e, t, n = !1) {
  const s = n ? la : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!ne(e)) {
    const a = (c) => {
      const u = ll(c, t, !0);
      u && (r = !0, Me(l, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (ge(e) && s.set(e, null), null) : (Q(i) ? i.forEach((a) => l[a] = null) : Me(l, i), ge(e) && s.set(e, l), l);
}
function gs(e, t) {
  return !e || !is(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Rt(t)) || me(e, t));
}
function No(e) {
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
  } = e, R = Qn(e);
  let x, g;
  try {
    if (n.shapeFlag & 4) {
      const P = o || s, V = P;
      x = at(
        c.call(
          V,
          P,
          u,
          h,
          y,
          m,
          N
        )
      ), g = r;
    } else {
      const P = t;
      x = at(
        P.length > 1 ? P(
          h,
          { attrs: r, slots: l, emit: a }
        ) : P(
          h,
          null
        )
      ), g = t.props ? r : ra(r);
    }
  } catch (P) {
    wn.length = 0, ds(P, e, 1), x = Te(Be);
  }
  let S = x;
  if (g && T !== !1) {
    const P = Object.keys(g), { shapeFlag: V } = S;
    P.length && V & 7 && (i && P.some(Zs) && (g = aa(
      g,
      i
    )), S = Pt(S, g, !1, !0));
  }
  return n.dirs && (S = Pt(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && Sn(S, n.transition), x = S, Qn(R), x;
}
const ra = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || is(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, aa = (e, t) => {
  const n = {};
  for (const s in e)
    (!Zs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ua(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, c = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Do(s, l, c) : !!l;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const m = u[h];
        if (rl(l, s, m) && !gs(c, m))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? Do(s, l, c) : !0 : !!l;
  return !1;
}
function Do(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (rl(t, e, i) && !gs(n, i))
      return !0;
  }
  return !1;
}
function rl(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ge(s) && ge(o) ? !no(s, o) : s !== o;
}
function ca({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const al = {}, ul = () => Object.create(al), cl = (e) => Object.getPrototypeOf(e) === al;
function fa(e, t, n, s = !1) {
  const o = {}, i = ul();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), fl(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ gr(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function da(e, t, n, s) {
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
        if (gs(e.emitsOptions, m))
          continue;
        const y = t[m];
        if (a)
          if (me(i, m))
            y !== i[m] && (i[m] = y, c = !0);
          else {
            const N = Ze(m);
            o[N] = Gs(
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
    fl(e, t, o, i) && (c = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !me(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Rt(h)) === h || !me(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[h] = Gs(
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
  c && bt(e.attrs, "set", "");
}
function fl(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (pn(a))
        continue;
      const c = t[a];
      let u;
      o && me(o, u = Ze(a)) ? !i || !i.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : gs(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ pe(n), c = r || be;
    for (let u = 0; u < i.length; u++) {
      const h = i[u];
      n[h] = Gs(
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
function Gs(e, t, n, s, o, i) {
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
          const u = On(o);
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
const ha = /* @__PURE__ */ new WeakMap();
function dl(e, t, n = !1) {
  const s = n ? ha : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!ne(e)) {
    const u = (h) => {
      a = !0;
      const [m, y] = dl(h, t, !0);
      Me(l, m), y && r.push(...y);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!i && !a)
    return ge(e) && s.set(e, Zt), Zt;
  if (Q(i))
    for (let u = 0; u < i.length; u++) {
      const h = Ze(i[u]);
      Fo(h) && (l[h] = be);
    }
  else if (i)
    for (const u in i) {
      const h = Ze(u);
      if (Fo(h)) {
        const m = i[u], y = l[h] = Q(m) || ne(m) ? { type: m } : Me({}, m), N = y.type;
        let T = !1, R = !0;
        if (Q(N))
          for (let x = 0; x < N.length; ++x) {
            const g = N[x], S = ne(g) && g.name;
            if (S === "Boolean") {
              T = !0;
              break;
            } else S === "String" && (R = !1);
          }
        else
          T = ne(N) && N.name === "Boolean";
        y[
          0
          /* shouldCast */
        ] = T, y[
          1
          /* shouldCastTrue */
        ] = R, (T || me(y, "default")) && r.push(h);
      }
    }
  const c = [l, r];
  return ge(e) && s.set(e, c), c;
}
function Fo(e) {
  return e[0] !== "$" && !pn(e);
}
const fo = (e) => e === "_" || e === "_ctx" || e === "$stable", ho = (e) => Q(e) ? e.map(at) : [at(e)], pa = (e, t, n) => {
  if (t._n)
    return t;
  const s = Vi((...o) => ho(t(...o)), n);
  return s._c = !1, s;
}, hl = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (fo(o)) continue;
    const i = e[o];
    if (ne(i))
      t[o] = pa(o, i, s);
    else if (i != null) {
      const l = ho(i);
      t[o] = () => l;
    }
  }
}, pl = (e, t) => {
  const n = ho(t);
  e.slots.default = () => n;
}, vl = (e, t, n) => {
  for (const s in t)
    (n || !fo(s)) && (e[s] = t[s]);
}, va = (e, t, n) => {
  const s = e.slots = ul();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (vl(s, t, n), n && bi(s, "_", o, !0)) : hl(t, s);
  } else t && pl(e, t);
}, ga = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = be;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : vl(o, t, n) : (i = !t.$stable, hl(t, o)), l = t;
  } else t && (pl(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !fo(r) && l[r] == null && delete o[r];
}, Pe = wa;
function ma(e) {
  return ya(e);
}
function ya(e, t) {
  const n = as();
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
  } = e, T = (d, v, b, L = null, E = null, M = null, B = void 0, H = null, D = !!v.dynamicChildren) => {
    if (d === v)
      return;
    d && !Bt(d, v) && (L = Qe(d), Ne(d, E, M, !0), d = null), v.patchFlag === -2 && (D = !1, v.dynamicChildren = null);
    const { type: A, ref: z, shapeFlag: j } = v;
    switch (A) {
      case ms:
        R(d, v, b, L);
        break;
      case Be:
        x(d, v, b, L);
        break;
      case zn:
        d == null && g(v, b, L, B);
        break;
      case le:
        C(
          d,
          v,
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
        j & 1 ? V(
          d,
          v,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        ) : j & 6 ? K(
          d,
          v,
          b,
          L,
          E,
          M,
          B,
          H,
          D
        ) : (j & 64 || j & 128) && A.process(
          d,
          v,
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
    z != null && E ? yn(z, d && d.ref, M, v || d, !v) : z == null && d && d.ref != null && yn(d.ref, null, M, d, !0);
  }, R = (d, v, b, L) => {
    if (d == null)
      s(
        v.el = r(v.children),
        b,
        L
      );
    else {
      const E = v.el = d.el;
      v.children !== d.children && c(E, v.children);
    }
  }, x = (d, v, b, L) => {
    d == null ? s(
      v.el = a(v.children || ""),
      b,
      L
    ) : v.el = d.el;
  }, g = (d, v, b, L) => {
    [d.el, d.anchor] = N(
      d.children,
      v,
      b,
      L,
      d.el,
      d.anchor
    );
  }, S = ({ el: d, anchor: v }, b, L) => {
    let E;
    for (; d && d !== v; )
      E = m(d), s(d, b, L), d = E;
    s(v, b, L);
  }, P = ({ el: d, anchor: v }) => {
    let b;
    for (; d && d !== v; )
      b = m(d), o(d), d = b;
    o(v);
  }, V = (d, v, b, L, E, M, B, H, D) => {
    if (v.type === "svg" ? B = "svg" : v.type === "math" && (B = "mathml"), d == null)
      ee(
        v,
        b,
        L,
        E,
        M,
        B,
        H,
        D
      );
    else {
      const A = d.el && d.el._isVueCE ? d.el : null;
      try {
        A && A._beginPatch(), O(
          d,
          v,
          E,
          M,
          B,
          H,
          D
        );
      } finally {
        A && A._endPatch();
      }
    }
  }, ee = (d, v, b, L, E, M, B, H) => {
    let D, A;
    const { props: z, shapeFlag: j, transition: q, dirs: Z } = d;
    if (D = d.el = l(
      d.type,
      M,
      z && z.is,
      z
    ), j & 8 ? u(D, d.children) : j & 16 && ce(
      d.children,
      D,
      null,
      L,
      E,
      Ls(d, M),
      B,
      H
    ), Z && Ot(d, null, L, "created"), ae(D, d, d.scopeId, B, L), z) {
      for (const ye in z)
        ye !== "value" && !pn(ye) && i(D, ye, null, z[ye], M, L);
      "value" in z && i(D, "value", null, z.value, M), (A = z.onVnodeBeforeMount) && ot(A, L, d);
    }
    Z && Ot(d, null, L, "beforeMount");
    const re = ba(E, q);
    re && q.beforeEnter(D), s(D, v, b), ((A = z && z.onVnodeMounted) || re || Z) && Pe(() => {
      A && ot(A, L, d), re && q.enter(D), Z && Ot(d, null, L, "mounted");
    }, E);
  }, ae = (d, v, b, L, E) => {
    if (b && y(d, b), L)
      for (let M = 0; M < L.length; M++)
        y(d, L[M]);
    if (E) {
      let M = E.subTree;
      if (v === M || yl(M.type) && (M.ssContent === v || M.ssFallback === v)) {
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
  }, ce = (d, v, b, L, E, M, B, H, D = 0) => {
    for (let A = D; A < d.length; A++) {
      const z = d[A] = H ? yt(d[A]) : at(d[A]);
      T(
        null,
        z,
        v,
        b,
        L,
        E,
        M,
        B,
        H
      );
    }
  }, O = (d, v, b, L, E, M, B) => {
    const H = v.el = d.el;
    let { patchFlag: D, dynamicChildren: A, dirs: z } = v;
    D |= d.patchFlag & 16;
    const j = d.props || be, q = v.props || be;
    let Z;
    if (b && Nt(b, !1), (Z = q.onVnodeBeforeUpdate) && ot(Z, b, v, d), z && Ot(v, d, b, "beforeUpdate"), b && Nt(b, !0), (j.innerHTML && q.innerHTML == null || j.textContent && q.textContent == null) && u(H, ""), A ? F(
      d.dynamicChildren,
      A,
      H,
      b,
      L,
      Ls(v, E),
      M
    ) : B || U(
      d,
      v,
      H,
      null,
      b,
      L,
      Ls(v, E),
      M,
      !1
    ), D > 0) {
      if (D & 16)
        f(H, j, q, b, E);
      else if (D & 2 && j.class !== q.class && i(H, "class", null, q.class, E), D & 4 && i(H, "style", j.style, q.style, E), D & 8) {
        const re = v.dynamicProps;
        for (let ye = 0; ye < re.length; ye++) {
          const he = re[ye], _ = j[he], w = q[he];
          (w !== _ || he === "value") && i(H, he, _, w, E, b);
        }
      }
      D & 1 && d.children !== v.children && u(H, v.children);
    } else !B && A == null && f(H, j, q, b, E);
    ((Z = q.onVnodeUpdated) || z) && Pe(() => {
      Z && ot(Z, b, v, d), z && Ot(v, d, b, "updated");
    }, L);
  }, F = (d, v, b, L, E, M, B) => {
    for (let H = 0; H < v.length; H++) {
      const D = d[H], A = v[H], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        D.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (D.type === le || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Bt(D, A) || // - In the case of a component, it could contain anything.
        D.shapeFlag & 198) ? h(D.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      T(
        D,
        A,
        z,
        null,
        L,
        E,
        M,
        B,
        !0
      );
    }
  }, f = (d, v, b, L, E) => {
    if (v !== b) {
      if (v !== be)
        for (const M in v)
          !pn(M) && !(M in b) && i(
            d,
            M,
            v[M],
            null,
            E,
            L
          );
      for (const M in b) {
        if (pn(M)) continue;
        const B = b[M], H = v[M];
        B !== H && M !== "value" && i(d, M, H, B, E, L);
      }
      "value" in b && i(d, "value", v.value, b.value, E);
    }
  }, C = (d, v, b, L, E, M, B, H, D) => {
    const A = v.el = d ? d.el : r(""), z = v.anchor = d ? d.anchor : r("");
    let { patchFlag: j, dynamicChildren: q, slotScopeIds: Z } = v;
    Z && (H = H ? H.concat(Z) : Z), d == null ? (s(A, b, L), s(z, b, L), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      b,
      z,
      E,
      M,
      B,
      H,
      D
    )) : j > 0 && j & 64 && q && // #2715 the previous fragment could've been a BAILed one as a result
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
    (v.key != null || E && v === E.subTree) && po(
      d,
      v,
      !0
      /* shallow */
    )) : U(
      d,
      v,
      b,
      z,
      E,
      M,
      B,
      H,
      D
    );
  }, K = (d, v, b, L, E, M, B, H, D) => {
    v.slotScopeIds = H, d == null ? v.shapeFlag & 512 ? E.ctx.activate(
      v,
      b,
      L,
      B,
      D
    ) : Y(
      v,
      b,
      L,
      E,
      M,
      B,
      D
    ) : ue(d, v, D);
  }, Y = (d, v, b, L, E, M, B) => {
    const H = d.component = Ea(
      d,
      L,
      E
    );
    if (ps(d) && (H.ctx.renderer = pt), Ma(H, !1, B), H.asyncDep) {
      if (E && E.registerDep(H, de, B), !d.el) {
        const D = H.subTree = Te(Be);
        x(null, D, v, b), d.placeholder = D.el;
      }
    } else
      de(
        H,
        d,
        v,
        b,
        E,
        M,
        B
      );
  }, ue = (d, v, b) => {
    const L = v.component = d.component;
    if (ua(d, v, b))
      if (L.asyncDep && !L.asyncResolved) {
        ve(L, v, b);
        return;
      } else
        L.next = v, L.update();
    else
      v.el = d.el, L.vnode = v;
  }, de = (d, v, b, L, E, M, B) => {
    const H = () => {
      if (d.isMounted) {
        let { next: j, bu: q, u: Z, parent: re, vnode: ye } = d;
        {
          const te = gl(d);
          if (te) {
            j && (j.el = ye.el, ve(d, j, B)), te.asyncDep.then(() => {
              Pe(() => {
                d.isUnmounted || A();
              }, E);
            });
            return;
          }
        }
        let he = j, _;
        Nt(d, !1), j ? (j.el = ye.el, ve(d, j, B)) : j = ye, q && Vn(q), (_ = j.props && j.props.onVnodeBeforeUpdate) && ot(_, re, j, ye), Nt(d, !0);
        const w = No(d), $ = d.subTree;
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
        ), j.el = w.el, he === null && ca(d, w.el), Z && Pe(Z, E), (_ = j.props && j.props.onVnodeUpdated) && Pe(
          () => ot(_, re, j, ye),
          E
        );
      } else {
        let j;
        const { el: q, props: Z } = v, { bm: re, m: ye, parent: he, root: _, type: w } = d, $ = bn(v);
        Nt(d, !1), re && Vn(re), !$ && (j = Z && Z.onVnodeBeforeMount) && ot(j, he, v), Nt(d, !0);
        {
          _.ce && _.ce._hasShadowRoot() && _.ce._injectChildStyle(
            w,
            d.parent ? d.parent.type : void 0
          );
          const te = d.subTree = No(d);
          T(
            null,
            te,
            b,
            L,
            d,
            E,
            M
          ), v.el = te.el;
        }
        if (ye && Pe(ye, E), !$ && (j = Z && Z.onVnodeMounted)) {
          const te = v;
          Pe(
            () => ot(j, he, te),
            E
          );
        }
        (v.shapeFlag & 256 || he && bn(he.vnode) && he.vnode.shapeFlag & 256) && d.a && Pe(d.a, E), d.isMounted = !0, v = b = L = null;
      }
    };
    d.scope.on();
    const D = d.effect = new ki(H);
    d.scope.off();
    const A = d.update = D.run.bind(D), z = d.job = D.runIfDirty.bind(D);
    z.i = d, z.id = d.uid, D.scheduler = () => co(z), Nt(d, !0), A();
  }, ve = (d, v, b) => {
    v.component = d;
    const L = d.vnode.props;
    d.vnode = v, d.next = null, da(d, v.props, L, b), ga(d, v.children, b), $t(), Co(d), kt();
  }, U = (d, v, b, L, E, M, B, H, D = !1) => {
    const A = d && d.children, z = d ? d.shapeFlag : 0, j = v.children, { patchFlag: q, shapeFlag: Z } = v;
    if (q > 0) {
      if (q & 128) {
        _e(
          A,
          j,
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
          A,
          j,
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
    Z & 8 ? (z & 16 && Ue(A, E, M), j !== A && u(b, j)) : z & 16 ? Z & 16 ? _e(
      A,
      j,
      b,
      L,
      E,
      M,
      B,
      H,
      D
    ) : Ue(A, E, M, !0) : (z & 8 && u(b, ""), Z & 16 && ce(
      j,
      b,
      L,
      E,
      M,
      B,
      H,
      D
    ));
  }, G = (d, v, b, L, E, M, B, H, D) => {
    d = d || Zt, v = v || Zt;
    const A = d.length, z = v.length, j = Math.min(A, z);
    let q;
    for (q = 0; q < j; q++) {
      const Z = v[q] = D ? yt(v[q]) : at(v[q]);
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
    A > z ? Ue(
      d,
      E,
      M,
      !0,
      !1,
      j
    ) : ce(
      v,
      b,
      L,
      E,
      M,
      B,
      H,
      D,
      j
    );
  }, _e = (d, v, b, L, E, M, B, H, D) => {
    let A = 0;
    const z = v.length;
    let j = d.length - 1, q = z - 1;
    for (; A <= j && A <= q; ) {
      const Z = d[A], re = v[A] = D ? yt(v[A]) : at(v[A]);
      if (Bt(Z, re))
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
      A++;
    }
    for (; A <= j && A <= q; ) {
      const Z = d[j], re = v[q] = D ? yt(v[q]) : at(v[q]);
      if (Bt(Z, re))
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
      j--, q--;
    }
    if (A > j) {
      if (A <= q) {
        const Z = q + 1, re = Z < z ? v[Z].el : L;
        for (; A <= q; )
          T(
            null,
            v[A] = D ? yt(v[A]) : at(v[A]),
            b,
            re,
            E,
            M,
            B,
            H,
            D
          ), A++;
      }
    } else if (A > q)
      for (; A <= j; )
        Ne(d[A], E, M, !0), A++;
    else {
      const Z = A, re = A, ye = /* @__PURE__ */ new Map();
      for (A = re; A <= q; A++) {
        const fe = v[A] = D ? yt(v[A]) : at(v[A]);
        fe.key != null && ye.set(fe.key, A);
      }
      let he, _ = 0;
      const w = q - re + 1;
      let $ = !1, te = 0;
      const se = new Array(w);
      for (A = 0; A < w; A++) se[A] = 0;
      for (A = Z; A <= j; A++) {
        const fe = d[A];
        if (_ >= w) {
          Ne(fe, E, M, !0);
          continue;
        }
        let Ae;
        if (fe.key != null)
          Ae = ye.get(fe.key);
        else
          for (he = re; he <= q; he++)
            if (se[he - re] === 0 && Bt(fe, v[he])) {
              Ae = he;
              break;
            }
        Ae === void 0 ? Ne(fe, E, M, !0) : (se[Ae - re] = A + 1, Ae >= te ? te = Ae : $ = !0, T(
          fe,
          v[Ae],
          b,
          null,
          E,
          M,
          B,
          H,
          D
        ), _++);
      }
      const Ce = $ ? _a(se) : Zt;
      for (he = Ce.length - 1, A = w - 1; A >= 0; A--) {
        const fe = re + A, Ae = v[fe], rn = v[fe + 1], Yt = fe + 1 < z ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          rn.el || ml(rn)
        ) : L;
        se[A] === 0 ? T(
          null,
          Ae,
          b,
          Yt,
          E,
          M,
          B,
          H,
          D
        ) : $ && (he < 0 || A !== Ce[he] ? Oe(Ae, b, Yt, 2) : he--);
      }
    }
  }, Oe = (d, v, b, L, E = null) => {
    const { el: M, type: B, transition: H, children: D, shapeFlag: A } = d;
    if (A & 6) {
      Oe(d.component.subTree, v, b, L);
      return;
    }
    if (A & 128) {
      d.suspense.move(v, b, L);
      return;
    }
    if (A & 64) {
      B.move(d, v, b, pt);
      return;
    }
    if (B === le) {
      s(M, v, b);
      for (let j = 0; j < D.length; j++)
        Oe(D[j], v, b, L);
      s(d.anchor, v, b);
      return;
    }
    if (B === zn) {
      S(d, v, b);
      return;
    }
    if (L !== 2 && A & 1 && H)
      if (L === 0)
        H.beforeEnter(M), s(M, v, b), Pe(() => H.enter(M), E);
      else {
        const { leave: j, delayLeave: q, afterLeave: Z } = H, re = () => {
          d.ctx.isUnmounted ? o(M) : s(M, v, b);
        }, ye = () => {
          M._isLeaving && M[lt](
            !0
            /* cancelled */
          ), j(M, () => {
            re(), Z && Z();
          });
        };
        q ? q(M, re, ye) : ye();
      }
    else
      s(M, v, b);
  }, Ne = (d, v, b, L = !1, E = !1) => {
    const {
      type: M,
      props: B,
      ref: H,
      children: D,
      dynamicChildren: A,
      shapeFlag: z,
      patchFlag: j,
      dirs: q,
      cacheIndex: Z
    } = d;
    if (j === -2 && (E = !1), H != null && ($t(), yn(H, null, b, d, !0), kt()), Z != null && (v.renderCache[Z] = void 0), z & 256) {
      v.ctx.deactivate(d);
      return;
    }
    const re = z & 1 && q, ye = !bn(d);
    let he;
    if (ye && (he = B && B.onVnodeBeforeUnmount) && ot(he, v, d), z & 6)
      Jt(d.component, b, L);
    else {
      if (z & 128) {
        d.suspense.unmount(b, L);
        return;
      }
      re && Ot(d, null, v, "beforeUnmount"), z & 64 ? d.type.remove(
        d,
        v,
        b,
        pt,
        L
      ) : A && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !A.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (M !== le || j > 0 && j & 64) ? Ue(
        A,
        v,
        b,
        !1,
        !0
      ) : (M === le && j & 384 || !E && z & 16) && Ue(D, v, b), L && zt(d);
    }
    (ye && (he = B && B.onVnodeUnmounted) || re) && Pe(() => {
      he && ot(he, v, d), re && Ot(d, null, v, "unmounted");
    }, b);
  }, zt = (d) => {
    const { type: v, el: b, anchor: L, transition: E } = d;
    if (v === le) {
      ln(b, L);
      return;
    }
    if (v === zn) {
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
  }, ln = (d, v) => {
    let b;
    for (; d !== v; )
      b = m(d), o(d), d = b;
    o(v);
  }, Jt = (d, v, b) => {
    const { bum: L, scope: E, job: M, subTree: B, um: H, m: D, a: A } = d;
    Ho(D), Ho(A), L && Vn(L), E.stop(), M && (M.flags |= 8, Ne(B, d, v, b)), H && Pe(H, v), Pe(() => {
      d.isUnmounted = !0;
    }, v);
  }, Ue = (d, v, b, L = !1, E = !1, M = 0) => {
    for (let B = M; B < d.length; B++)
      Ne(d[B], v, b, L, E);
  }, Qe = (d) => {
    if (d.shapeFlag & 6)
      return Qe(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const v = m(d.anchor || d.el), b = v && v[zi];
    return b ? m(b) : v;
  };
  let De = !1;
  const st = (d, v, b) => {
    let L;
    d == null ? v._vnode && (Ne(v._vnode, null, null, !0), L = v._vnode.component) : T(
      v._vnode || null,
      d,
      v,
      null,
      null,
      null,
      b
    ), v._vnode = d, De || (De = !0, Co(L), Bi(), De = !1);
  }, pt = {
    p: T,
    um: Ne,
    m: Oe,
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
    createApp: sa(st)
  };
}
function Ls({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ba(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function po(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Q(s) && Q(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = yt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && po(l, r)), r.type === ms && (r.patchFlag === -1 && (r = o[i] = yt(r)), r.el = l.el), r.type === Be && !r.el && (r.el = l.el);
    }
}
function _a(e) {
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
function gl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : gl(t);
}
function Ho(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ml(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ml(t.subTree) : null;
}
const yl = (e) => e.__isSuspense;
function wa(e, t) {
  t && t.pendingBranch ? Q(e) ? t.effects.push(...e) : t.effects.push(e) : Ar(e);
}
const le = /* @__PURE__ */ Symbol.for("v-fgt"), ms = /* @__PURE__ */ Symbol.for("v-txt"), Be = /* @__PURE__ */ Symbol.for("v-cmt"), zn = /* @__PURE__ */ Symbol.for("v-stc"), wn = [];
let ze = null;
function k(e = !1) {
  wn.push(ze = e ? null : []);
}
function $a() {
  wn.pop(), ze = wn[wn.length - 1] || null;
}
let Mn = 1;
function ts(e, t = !1) {
  Mn += e, e < 0 && ze && t && (ze.hasOnce = !0);
}
function bl(e) {
  return e.dynamicChildren = Mn > 0 ? ze || Zt : null, $a(), Mn > 0 && ze && ze.push(e), e;
}
function I(e, t, n, s, o, i) {
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
function ns(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Bt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const _l = ({ key: e }) => e ?? null, Jn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? xe(e) || /* @__PURE__ */ Ee(e) || ne(e) ? { i: Ye, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === le ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && _l(t),
    ref: t && Jn(t),
    scopeId: ji,
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
  return r ? (vo(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= xe(n) ? 8 : 16), Mn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  ze && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && ze.push(a), a;
}
const Te = ka;
function ka(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Yr) && (e = Be), ns(e)) {
    const r = Pt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && vo(r, n), Mn > 0 && !i && ze && (r.shapeFlag & 6 ? ze[ze.indexOf(e)] = r : ze.push(r)), r.patchFlag = -2, r;
  }
  if (Pa(e) && (e = e.__vccOpts), t) {
    t = xa(t);
    let { class: r, style: a } = t;
    r && !xe(r) && (t.class = $e(r)), ge(a) && (/* @__PURE__ */ fs(a) && !Q(a) && (a = Me({}, a)), t.style = Lt(a));
  }
  const l = xe(e) ? 1 : yl(e) ? 128 : Ji(e) ? 64 : ge(e) ? 4 : ne(e) ? 2 : 0;
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
function xa(e) {
  return e ? /* @__PURE__ */ fs(e) || cl(e) ? Me({}, e) : e : null;
}
function Pt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, c = t ? Ca(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && _l(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? Q(i) ? i.concat(Jn(t)) : [i, Jn(t)] : Jn(t)
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
    ssContent: e.ssContent && Pt(e.ssContent),
    ssFallback: e.ssFallback && Pt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Sn(
    u,
    a.clone(u)
  ), u;
}
function wt(e = " ", t = 0) {
  return Te(ms, null, e, t);
}
function wl(e, t) {
  const n = Te(zn, null, e);
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
  ) : ns(e) ? yt(e) : Te(ms, null, String(e));
}
function yt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Pt(e);
}
function vo(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), vo(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !cl(t) ? t._ctx = Ye : o === 3 && Ye && (Ye.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else ne(t) ? (t = { default: t, _ctx: Ye }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [wt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ca(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = $e([t.class, s.class]));
      else if (o === "style")
        t.style = Lt([t.style, s.style]);
      else if (is(o)) {
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
const Sa = il();
let Ta = 0;
function Ea(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Sa, i = {
    uid: Ta++,
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
    scope: new Yl(
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
    propsOptions: dl(s, o),
    emitsOptions: ll(s, o),
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = ia.bind(null, i), e.ce && e.ce(i), i;
}
let Ke = null;
const $l = () => Ke || Ye;
let ss, Ys;
{
  const e = as(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  ss = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ke = n
  ), Ys = t(
    "__VUE_SSR_SETTERS__",
    (n) => An = n
  );
}
const On = (e) => {
  const t = Ke;
  return ss(e), e.scope.on(), () => {
    e.scope.off(), ss(t);
  };
}, Bo = () => {
  Ke && Ke.scope.off(), ss(null);
};
function kl(e) {
  return e.vnode.shapeFlag & 4;
}
let An = !1;
function Ma(e, t = !1, n = !1) {
  t && Ys(t);
  const { props: s, children: o } = e.vnode, i = kl(e);
  fa(e, s, i, t), va(e, o, n || t);
  const l = i ? Aa(e, t) : void 0;
  return t && Ys(!1), l;
}
function Aa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, qr);
  const { setup: s } = n;
  if (s) {
    $t();
    const o = e.setupContext = s.length > 1 ? La(e) : null, i = On(e), l = Rn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = vi(l);
    if (kt(), i(), (r || e.sp) && !bn(e) && el(e), r) {
      if (l.then(Bo, Bo), t)
        return l.then((a) => {
          Ko(e, a);
        }).catch((a) => {
          ds(a, e, 0);
        });
      e.asyncDep = l;
    } else
      Ko(e, l);
  } else
    xl(e);
}
function Ko(e, t, n) {
  ne(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ge(t) && (e.setupState = Di(t)), xl(e);
}
function xl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ct);
  {
    const o = On(e);
    $t();
    try {
      Xr(e);
    } finally {
      kt(), o();
    }
  }
}
const Ia = {
  get(e, t) {
    return Re(e, "get", ""), e[t];
  }
};
function La(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Ia),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function ys(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Di(mr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in _n)
        return _n[n](e);
    },
    has(t, n) {
      return n in t || n in _n;
    }
  })) : e.proxy;
}
function Pa(e) {
  return ne(e) && "__vccOpts" in e;
}
const X = (e, t) => /* @__PURE__ */ Cr(e, t, An);
function Ra(e, t, n) {
  try {
    ts(-1);
    const s = arguments.length;
    return s === 2 ? ge(t) && !Q(t) ? ns(t) ? Te(e, null, [t]) : Te(e, t) : Te(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && ns(n) && (n = [n]), Te(e, t, n));
  } finally {
    ts(1);
  }
}
const Oa = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let qs;
const jo = typeof window < "u" && window.trustedTypes;
if (jo)
  try {
    qs = /* @__PURE__ */ jo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Cl = qs ? (e) => qs.createHTML(e) : (e) => e, Na = "http://www.w3.org/2000/svg", Da = "http://www.w3.org/1998/Math/MathML", mt = typeof document < "u" ? document : null, Vo = mt && /* @__PURE__ */ mt.createElement("template"), Fa = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? mt.createElementNS(Na, e) : t === "mathml" ? mt.createElementNS(Da, e) : n ? mt.createElement(e, { is: n }) : mt.createElement(e);
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
      Vo.innerHTML = Cl(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Vo.content;
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
}, Et = "transition", fn = "animation", In = /* @__PURE__ */ Symbol("_vtc"), Sl = {
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
}, Ha = /* @__PURE__ */ Me(
  {},
  Yi,
  Sl
), Ba = (e) => (e.displayName = "Transition", e.props = Ha, e), Ka = /* @__PURE__ */ Ba(
  (e, { slots: t }) => Ra(Fr, ja(e), t)
), Dt = (e, t = []) => {
  Q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Wo = (e) => e ? Q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function ja(e) {
  const t = {};
  for (const C in e)
    C in Sl || (t[C] = e[C]);
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
  } = e, N = Va(o), T = N && N[0], R = N && N[1], {
    onBeforeEnter: x,
    onEnter: g,
    onEnterCancelled: S,
    onLeave: P,
    onLeaveCancelled: V,
    onBeforeAppear: ee = x,
    onAppear: ae = g,
    onAppearCancelled: ce = S
  } = t, O = (C, K, Y, ue) => {
    C._enterCancelled = ue, Ft(C, K ? u : r), Ft(C, K ? c : l), Y && Y();
  }, F = (C, K) => {
    C._isLeaving = !1, Ft(C, h), Ft(C, y), Ft(C, m), K && K();
  }, f = (C) => (K, Y) => {
    const ue = C ? ae : g, de = () => O(K, C, Y);
    Dt(ue, [K, de]), Uo(() => {
      Ft(K, C ? a : i), gt(K, C ? u : r), Wo(ue) || zo(K, s, T, de);
    });
  };
  return Me(t, {
    onBeforeEnter(C) {
      Dt(x, [C]), gt(C, i), gt(C, l);
    },
    onBeforeAppear(C) {
      Dt(ee, [C]), gt(C, a), gt(C, c);
    },
    onEnter: f(!1),
    onAppear: f(!0),
    onLeave(C, K) {
      C._isLeaving = !0;
      const Y = () => F(C, K);
      gt(C, h), C._enterCancelled ? (gt(C, m), Yo(C)) : (Yo(C), gt(C, m)), Uo(() => {
        C._isLeaving && (Ft(C, h), gt(C, y), Wo(P) || zo(C, s, R, Y));
      }), Dt(P, [C, Y]);
    },
    onEnterCancelled(C) {
      O(C, !1, void 0, !0), Dt(S, [C]);
    },
    onAppearCancelled(C) {
      O(C, !0, void 0, !0), Dt(ce, [C]);
    },
    onLeaveCancelled(C) {
      F(C), Dt(V, [C]);
    }
  });
}
function Va(e) {
  if (e == null)
    return null;
  if (ge(e))
    return [Ps(e.enter), Ps(e.leave)];
  {
    const t = Ps(e);
    return [t, t];
  }
}
function Ps(e) {
  return Kl(e);
}
function gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[In] || (e[In] = /* @__PURE__ */ new Set())).add(t);
}
function Ft(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[In];
  n && (n.delete(t), n.size || (e[In] = void 0));
}
function Uo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Wa = 0;
function zo(e, t, n, s) {
  const o = e._endId = ++Wa, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Ua(e, t);
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
function Ua(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${Et}Delay`), i = s(`${Et}Duration`), l = Jo(o, i), r = s(`${fn}Delay`), a = s(`${fn}Duration`), c = Jo(r, a);
  let u = null, h = 0, m = 0;
  t === Et ? l > 0 && (u = Et, h = l, m = i.length) : t === fn ? c > 0 && (u = fn, h = c, m = a.length) : (h = Math.max(l, c), u = h > 0 ? l > c ? Et : fn : null, m = u ? u === Et ? i.length : a.length : 0);
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
function Jo(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Go(n) + Go(e[s])));
}
function Go(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Yo(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function za(e, t, n) {
  const s = e[In];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const qo = /* @__PURE__ */ Symbol("_vod"), Ja = /* @__PURE__ */ Symbol("_vsh"), Ga = /* @__PURE__ */ Symbol(""), Ya = /(?:^|;)\s*display\s*:/;
function qa(e, t, n) {
  const s = e.style, o = xe(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (xe(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && Gn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && Gn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), Gn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[Ga];
      l && (n += ";" + l), s.cssText = n, i = Ya.test(n);
    }
  } else t && e.removeAttribute("style");
  qo in e && (e[qo] = i ? s.display : "", e[Ja] && (s.display = "none"));
}
const Xo = /\s*!important$/;
function Gn(e, t, n) {
  if (Q(n))
    n.forEach((s) => Gn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Xa(e, t);
    Xo.test(n) ? e.setProperty(
      Rt(s),
      n.replace(Xo, ""),
      "important"
    ) : e[s] = n;
  }
}
const Qo = ["Webkit", "Moz", "ms"], Rs = {};
function Xa(e, t) {
  const n = Rs[t];
  if (n)
    return n;
  let s = Ze(t);
  if (s !== "filter" && s in e)
    return Rs[t] = s;
  s = yi(s);
  for (let o = 0; o < Qo.length; o++) {
    const i = Qo[o] + s;
    if (i in e)
      return Rs[t] = i;
  }
  return t;
}
const Zo = "http://www.w3.org/1999/xlink";
function ei(e, t, n, s, o, i = Jl(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Zo, t.slice(6, t.length)) : e.setAttributeNS(Zo, t, n) : n == null || i && !_i(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : ft(n) ? String(n) : n
  );
}
function ti(e, t, n, s, o) {
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
    r === "boolean" ? n = _i(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
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
function Qa(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ni = /* @__PURE__ */ Symbol("_vei");
function Za(e, t, n, s, o = null) {
  const i = e[ni] || (e[ni] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = eu(t);
    if (s) {
      const c = i[t] = su(
        s,
        o
      );
      Qt(e, r, c, a);
    } else l && (Qa(e, r, l, a), i[t] = void 0);
  }
}
const si = /(?:Once|Passive|Capture)$/;
function eu(e) {
  let t;
  if (si.test(e)) {
    t = {};
    let s;
    for (; s = e.match(si); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Rt(e.slice(2)), t];
}
let Os = 0;
const tu = /* @__PURE__ */ Promise.resolve(), nu = () => Os || (tu.then(() => Os = 0), Os = Date.now());
function su(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    nt(
      ou(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = nu(), n;
}
function ou(e, t) {
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
const oi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, iu = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? za(e, s, l) : t === "style" ? qa(e, n, s) : is(t) ? Zs(t) || Za(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : lu(e, t, s, l)) ? (ti(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && ei(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (ru(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !xe(s))) ? ti(e, Ze(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), ei(e, t, s, l));
};
function lu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && oi(t) && ne(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return oi(t) && xe(n) ? !1 : t in e;
}
function ru(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ze(t);
  return Array.isArray(n) ? n.some((o) => Ze(o) === s) : Object.keys(n).some((o) => Ze(o) === s);
}
const ii = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Q(t) ? (n) => Vn(t, n) : t;
};
function au(e) {
  e.target.composing = !0;
}
function li(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ns = /* @__PURE__ */ Symbol("_assign");
function ri(e, t, n) {
  return t && (e = e.trim()), n && (e = to(e)), e;
}
const ht = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Ns] = ii(o);
    const i = s || o.props && o.props.type === "number";
    Qt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[Ns](ri(e.value, n, i));
    }), (n || i) && Qt(e, "change", () => {
      e.value = ri(e.value, n, i);
    }), t || (Qt(e, "compositionstart", au), Qt(e, "compositionend", li), Qt(e, "change", li));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[Ns] = ii(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? to(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, uu = ["ctrl", "shift", "alt", "meta"], cu = {
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
  exact: (e, t) => uu.some((n) => e[`${n}Key`] && !t.includes(n))
}, oe = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = cu[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, fu = {
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
    const i = Rt(o.key);
    if (t.some(
      (l) => l === i || fu[l] === i
    ))
      return e(o);
  });
}, du = /* @__PURE__ */ Me({ patchProp: iu }, Fa);
let ai;
function hu() {
  return ai || (ai = ma(du));
}
const pu = (...e) => {
  const t = hu().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = gu(s);
    if (!o) return;
    const i = t._component;
    !ne(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, vu(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function vu(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function gu(e) {
  return xe(e) ? document.querySelector(e) : e;
}
const mu = { class: "setup" }, yu = { class: "setup-card" }, bu = { class: "field-group" }, _u = { class: "field-group" }, wu = ["disabled"], $u = {
  key: 0,
  class: "error"
}, ku = /* @__PURE__ */ qe({
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
    return (c, u) => (k(), I("div", mu, [
      p("div", yu, [
        u[5] || (u[5] = p("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = p("p", null, [
          wt(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          wt(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", bu, [
          u[3] || (u[3] = p("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          dt(p("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: u[1] || (u[1] = Se((h) => {
              var m;
              return (m = l.value) == null ? void 0 : m.focus();
            }, ["enter"]))
          }, null, 544), [
            [ht, s.value]
          ])
        ]),
        p("div", _u, [
          u[4] || (u[4] = p("label", { class: "field-label" }, "Access Token", -1)),
          dt(p("input", {
            ref_key: "tokenRef",
            ref: l,
            "onUpdate:modelValue": u[2] || (u[2] = (h) => o.value = h),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Se(a, ["enter"])
          }, null, 544), [
            [ht, o.value]
          ])
        ]),
        p("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, wu),
        i.value ? (k(), I("p", $u, J(i.value), 1)) : ie("", !0)
      ])
    ]));
  }
}), Xe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, xu = /* @__PURE__ */ Xe(ku, [["__scopeId", "data-v-97d10609"]]);
let go = !1;
const Tl = /* @__PURE__ */ W(null);
function El(e) {
  go = e;
}
function Cu() {
  return go;
}
function Su(e) {
  Tl.value = e;
}
function Tu() {
  return Tl;
}
const bs = /* @__PURE__ */ W(localStorage.getItem("ha_auth_key"));
function Eu() {
  return bs;
}
function Ds(e) {
  bs.value = e, e ? localStorage.setItem("ha_auth_key", e) : localStorage.removeItem("ha_auth_key");
}
function Mu(e) {
  return bs.value || e || "";
}
function Ml() {
  var e;
  return go ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function Al() {
  const e = Ml();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function _s(e) {
  const t = Ml();
  return t ? `${t}${e}` : e;
}
async function Kt(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(_s(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function Au(e) {
  const t = await fetch(_s("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
const Il = "homeboard", os = /* @__PURE__ */ W(!1), ws = /* @__PURE__ */ W(null), hn = [];
function Iu(e) {
  os.value ? e(ws.value) : hn.push(e);
}
let ke = null, $n = 1, sn = null;
const Wt = /* @__PURE__ */ new Map(), Ln = /* @__PURE__ */ new Map(), Xs = /* @__PURE__ */ W(0);
let Ut = !1, ui = [];
const It = /* @__PURE__ */ new Map();
function Lu() {
  return Al();
}
function Ll(e) {
  ke && (ke.readyState === WebSocket.OPEN || ke.readyState === WebSocket.CONNECTING) || (Ut = !1, ke = new WebSocket(Lu()), ke.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      ke.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      Ut = !0;
      const i = $n++;
      ke.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = $n++;
      ke.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      const r = $n++;
      It.set(r, {
        resolve: (a) => {
          const c = (a == null ? void 0 : a.value) ?? null;
          ws.value = c, os.value = !0, c != null && c.authKey && (bs.value = c.authKey, localStorage.setItem("ha_auth_key", c.authKey));
          for (const u of hn) u(c);
          hn.length = 0;
        },
        reject: () => {
          os.value = !0;
          for (const a of hn) a(null);
          hn.length = 0;
        }
      }), ke.send(JSON.stringify({ id: r, type: "frontend/get_user_data", key: Il }));
      for (const a of ui) a();
      ui = [];
      return;
    }
    if (n.type === "auth_invalid") {
      console.error("HA WebSocket auth failed");
      return;
    }
    if (n.type === "result" && It.has(n.id)) {
      const { resolve: i, reject: l } = It.get(n.id);
      It.delete(n.id), n.success ? i(n.result) : l(new Error(((s = n.error) == null ? void 0 : s.message) ?? "Service call failed"));
      return;
    }
    if (n.type === "result" && n.success && Array.isArray(n.result)) {
      for (const i of n.result)
        Ln.set(i.entity_id, i), ci(i.entity_id, i);
      Xs.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (Ln.set(i.entity_id, i), Xs.value++, ci(i.entity_id, i));
    }
  }, ke.onclose = () => {
    Ut = !1, sn && clearTimeout(sn), sn = setTimeout(() => {
      ke = null, Ll(e);
    }, 5e3);
  }, ke.onerror = () => {
    ke == null || ke.close();
  });
}
function ci(e, t) {
  const n = Wt.get(e);
  if (n)
    for (const s of n) s(t);
}
function Pu(e, t) {
  Wt.has(e) || Wt.set(e, /* @__PURE__ */ new Set()), Wt.get(e).add(t);
  const n = Ln.get(e);
  n && t(n);
}
function Ru(e, t) {
  const n = Wt.get(e);
  n && (n.delete(t), n.size === 0 && Wt.delete(e));
}
function Ou() {
  sn && (clearTimeout(sn), sn = null), ke && (ke.close(), ke = null), Ut = !1, Ln.clear(), Wt.clear(), os.value = !1, ws.value = null;
}
async function fi(e) {
  if (ws.value = e, !ke || !Ut) return;
  const t = $n++;
  return new Promise((n, s) => {
    It.set(t, {
      resolve: () => n(),
      reject: (o) => s(o)
    }), ke.send(JSON.stringify({ id: t, type: "frontend/set_user_data", key: Il, value: e }));
  });
}
async function Nu(e, t, n, s) {
  if (!ke || !Ut) throw new Error("WebSocket not connected");
  const o = $n++;
  return new Promise((i, l) => {
    It.set(o, { resolve: i, reject: l }), ke.send(JSON.stringify({
      id: o,
      type: "call_service",
      domain: t,
      service: n,
      service_data: s ?? {},
      target: { entity_id: e },
      return_response: !0
    })), setTimeout(() => {
      It.has(o) && (It.delete(o), l(new Error("Timeout")));
    }, 1e4);
  });
}
function Du(e) {
  let t = e;
  const n = /* @__PURE__ */ W(null), s = /* @__PURE__ */ W(null), o = /* @__PURE__ */ W(!0);
  let i = null;
  function l(c) {
    n.value = c, s.value = null, o.value = !1;
  }
  function r(c, u) {
    a(), u && (t = u), o.value = !0, s.value = null, Ll(c), i = l, Pu(t, i), Ut || fetch(_s(`/api/states/${t}`), {
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
    i && (Ru(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function mo() {
  return { cache: Ln, version: Xs };
}
const Fu = { class: "weather-layout" }, Hu = { class: "weather-left" }, Bu = { class: "weather-temp" }, Ku = { class: "weather-condition" }, ju = {
  key: 0,
  class: "weather-meta"
}, Vu = {
  key: 0,
  class: "weather-meta-item"
}, Wu = {
  key: 1,
  class: "weather-meta-item"
}, Uu = { class: "weather-right" }, zu = ["innerHTML"], Ju = { class: "ha-modal-header-row" }, Gu = { class: "ha-modal-title" }, Yu = { class: "wf-current" }, qu = { class: "wf-current-left" }, Xu = ["innerHTML"], Qu = { class: "wf-current-info" }, Zu = { class: "wf-current-condition" }, ec = { class: "wf-current-ago" }, tc = { class: "wf-current-right" }, nc = { class: "wf-current-temp" }, sc = {
  key: 0,
  class: "wf-current-hilo"
}, oc = { class: "wf-details" }, ic = {
  key: 0,
  class: "wf-detail-row"
}, lc = { class: "wf-detail-value" }, rc = {
  key: 1,
  class: "wf-detail-row"
}, ac = { class: "wf-detail-value" }, uc = {
  key: 2,
  class: "wf-detail-row"
}, cc = { class: "wf-detail-value" }, fc = { class: "wf-tabs" }, dc = {
  key: 0,
  class: "weather-forecast-row"
}, hc = { class: "wf-date" }, pc = ["innerHTML"], vc = { class: "wf-temps" }, gc = { class: "wf-temps-low" }, mc = {
  key: 1,
  class: "ha-modal-empty"
}, yc = {
  key: 0,
  class: "wf-hourly-scroll"
}, bc = { class: "wf-hourly-day-label" }, _c = { class: "weather-forecast-row" }, wc = { class: "wf-date" }, $c = ["innerHTML"], kc = { class: "wf-temps" }, xc = {
  key: 1,
  class: "ha-modal-empty"
}, Cc = /* @__PURE__ */ qe({
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
    function o(O, F = 100) {
      const f = F, C = `<path d="M${f * 0.17} ${f * 0.63}a${f * 0.17} ${f * 0.17} 0 0 1 0-${f * 0.33}h${f * 0.04}a${f * 0.23} ${f * 0.23} 0 0 1 ${f * 0.44}-${f * 0.1}a${f * 0.19} ${f * 0.19} 0 0 1 ${f * 0.19} ${f * 0.1}h${f * 0.02}a${f * 0.17} ${f * 0.17} 0 0 1 0 ${f * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linejoin="round"/>`, K = `<svg viewBox="0 0 ${f} ${f}" width="${f}" height="${f}" xmlns="http://www.w3.org/2000/svg">`, Y = "</svg>";
      switch (O) {
        case "sunny":
          return `${K}
        <circle cx="${f / 2}" cy="${f / 2}" r="${f * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((ue) => {
            const de = ue * Math.PI / 180, ve = f / 2 + Math.cos(de) * f * 0.25, U = f / 2 + Math.sin(de) * f * 0.25, G = f / 2 + Math.cos(de) * f * 0.35, _e = f / 2 + Math.sin(de) * f * 0.35;
            return `<line x1="${ve}" y1="${U}" x2="${G}" y2="${_e}" stroke="#f6ad35" stroke-width="${f * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${Y}`;
        case "clear-night":
          return `${K}<path d="M${f * 0.58} ${f * 0.15}a${f * 0.33} ${f * 0.33} 0 1 0 ${f * 0.27} ${f * 0.42} ${f * 0.25} ${f * 0.25} 0 0 1-${f * 0.27}-${f * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${f * 0.03}"/>${Y}`;
        case "partlycloudy":
          return `${K}
        <circle cx="${f * 0.62}" cy="${f * 0.3}" r="${f * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((ue) => {
            const de = ue * Math.PI / 180;
            return `<line x1="${f * 0.62 + Math.cos(de) * f * 0.19}" y1="${f * 0.3 + Math.sin(de) * f * 0.19}" x2="${f * 0.62 + Math.cos(de) * f * 0.25}" y2="${f * 0.3 + Math.sin(de) * f * 0.25}" stroke="#f6ad35" stroke-width="${f * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${C}
      ${Y}`;
        case "cloudy":
          return `${K}${C}${Y}`;
        case "rainy":
        case "pouring":
          return `${K}${C}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.5}" y1="${f * 0.71}" x2="${f * 0.45}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.7}" y1="${f * 0.71}" x2="${f * 0.65}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${Y}`;
        case "snowy":
          return `${K}${C}
        <line x1="${f * 0.35}" y1="${f * 0.73}" x2="${f * 0.35}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.28}" y1="${f * 0.805}" x2="${f * 0.42}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.58}" y1="${f * 0.805}" x2="${f * 0.72}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${Y}`;
        case "snowy-rainy":
          return `${K}${C}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.86}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.59}" y1="${f * 0.795}" x2="${f * 0.71}" y2="${f * 0.795}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${Y}`;
        case "fog":
          return `${K}
        <line x1="${f * 0.2}" y1="${f * 0.35}" x2="${f * 0.8}" y2="${f * 0.35}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.15}" y1="${f * 0.5}" x2="${f * 0.85}" y2="${f * 0.5}" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.2}" y1="${f * 0.65}" x2="${f * 0.8}" y2="${f * 0.65}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${Y}`;
        case "lightning":
          return `${K}${C}
        <polygon points="${f * 0.45},${f * 0.62} ${f * 0.52},${f * 0.75} ${f * 0.47},${f * 0.75} ${f * 0.55},${f * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
      ${Y}`;
        case "lightning-rainy":
          return `${K}${C}
        <polygon points="${f * 0.42},${f * 0.62} ${f * 0.48},${f * 0.75} ${f * 0.44},${f * 0.75} ${f * 0.5},${f * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.71}" x2="${f * 0.6}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${Y}`;
        case "windy":
        case "windy-variant":
          return `${K}
        <path d="M${f * 0.15} ${f * 0.4} Q${f * 0.4} ${f * 0.3} ${f * 0.65} ${f * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.2} ${f * 0.55} Q${f * 0.5} ${f * 0.45} ${f * 0.8} ${f * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.15} ${f * 0.7} Q${f * 0.35} ${f * 0.6} ${f * 0.55} ${f * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${Y}`;
        case "hail":
          return `${K}${C}
        <circle cx="${f * 0.3}" cy="${f * 0.8}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.5}" cy="${f * 0.82}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.7}" cy="${f * 0.78}" r="${f * 0.035}" fill="#5bbbf5"/>
      ${Y}`;
        default:
          return `${K}${C}${Y}`;
      }
    }
    const i = X(() => t.state ? o(t.state.state) : o("cloudy")), l = X(() => {
      var O;
      return t.state ? ((O = s[t.state.state]) == null ? void 0 : O.label) ?? t.state.state : "";
    }), r = X(() => {
      if (!t.state) return "--";
      const O = t.state.attributes.temperature;
      return O != null ? Math.round(O) : "--";
    }), a = X(() => t.state ? t.state.attributes.humidity ?? null : null), c = X(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = X(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ W([]), m = /* @__PURE__ */ W([]), y = /* @__PURE__ */ W("daily"), N = X(() => {
      const O = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], F = [];
      let f = null;
      for (const C of m.value) {
        const K = new Date(C.datetime), Y = O[K.getDay()];
        (!f || f.day !== Y) && (f = { day: Y, hours: [] }, F.push(f)), f.hours.push(C);
      }
      return F;
    }), T = X(() => {
      if (!t.state) return "";
      const O = new Date(t.state.last_updated), f = Math.round(((/* @__PURE__ */ new Date()).getTime() - O.getTime()) / 6e4);
      if (f < 1) return "Gerade eben";
      if (f < 60) return `Vor ${f} Min.`;
      const C = Math.round(f / 60);
      return C < 24 ? `Vor ${C} Stunde${C > 1 ? "n" : ""}` : `Vor ${Math.round(C / 24)} Tag${Math.round(C / 24) > 1 ? "en" : ""}`;
    }), R = X(() => t.state && h.value.length ? h.value[0].tempHigh : null), x = X(() => t.state && h.value.length ? h.value[0].tempLow : null), g = X(() => {
      if (!t.state) return "";
      const O = t.state.attributes.wind_bearing;
      return O == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(O / 22.5) % 16];
    });
    function S(O) {
      return O.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function P() {
      n.value = !0, y.value = "daily", await ee("daily");
    }
    async function V(O) {
      y.value = O, O === "hourly" && m.value.length === 0 && await ee("hourly");
    }
    async function ee(O) {
      var F, f;
      if (O === "daily") {
        const C = (F = t.state) == null ? void 0 : F.attributes.forecast;
        if (C && C.length) {
          h.value = ae(C);
          return;
        }
      }
      try {
        const C = await Nu(t.entityId, "weather", "get_forecasts", { type: O }), K = (C == null ? void 0 : C.response) ?? C, Y = (K == null ? void 0 : K[t.entityId]) ?? (K ? Object.values(K)[0] : null), ue = (Y == null ? void 0 : Y.forecast) ?? [];
        if (ue.length) {
          O === "daily" ? h.value = ae(ue) : m.value = ce(ue);
          return;
        }
      } catch {
        try {
          const C = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: O })
          });
          if (C.ok) {
            const K = await C.json();
            let Y = [];
            if (K != null && K[t.entityId]) Y = K[t.entityId].forecast ?? [];
            else if (Array.isArray(K)) Y = ((f = K[0]) == null ? void 0 : f.forecast) ?? [];
            else {
              const ue = Object.values(K)[0];
              Y = (ue == null ? void 0 : ue.forecast) ?? (K == null ? void 0 : K.forecast) ?? [];
            }
            if (Y.length) {
              O === "daily" ? h.value = ae(Y) : m.value = ce(Y);
              return;
            }
          }
        } catch {
        }
      }
      O === "daily" ? h.value = [] : m.value = [];
    }
    function ae(O) {
      const F = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return O.slice(0, 6).map((f) => {
        const C = new Date(f.datetime);
        return {
          date: f.datetime,
          weekday: F[C.getDay()],
          condition: f.condition ?? "cloudy",
          tempHigh: Math.round(f.temperature ?? f.templow ?? 0),
          tempLow: Math.round(f.templow ?? f.temperature ?? 0),
          precipitation: f.precipitation_probability ?? f.precipitation ?? null
        };
      });
    }
    function ce(O) {
      return O.slice(0, 24).map((F) => {
        const f = new Date(F.datetime);
        return {
          datetime: F.datetime,
          time: f.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: F.condition ?? "cloudy",
          temp: Math.round(F.temperature ?? 0)
        };
      });
    }
    return (O, F) => {
      var f;
      return k(), I(le, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: oe(P, ["stop"]),
          title: "Vorhersage"
        }, [...F[5] || (F[5] = [
          wl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: $e(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", Fu, [
            p("div", Hu, [
              p("span", Bu, J(r.value) + "°", 1),
              p("span", Ku, J(l.value), 1),
              e.isCompact ? ie("", !0) : (k(), I("div", ju, [
                a.value !== null ? (k(), I("span", Vu, "💧 " + J(a.value) + "%", 1)) : ie("", !0),
                c.value !== null ? (k(), I("span", Wu, "💨 " + J(Math.round(c.value)) + " km/h", 1)) : ie("", !0)
              ]))
            ]),
            p("div", Uu, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, zu)
            ])
          ])
        ], 2),
        (k(), Le(Ct, { to: "body" }, [
          n.value ? (k(), I("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: F[4] || (F[4] = oe((C) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: F[3] || (F[3] = oe(() => {
              }, ["stop"]))
            }, [
              p("div", Ju, [
                p("h3", Gu, J(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: F[0] || (F[0] = (C) => n.value = !1)
                }, "✕")
              ]),
              p("div", Yu, [
                p("div", qu, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((f = e.state) == null ? void 0 : f.state) ?? "cloudy", 52)
                  }, null, 8, Xu),
                  p("div", Qu, [
                    p("span", Zu, J(l.value), 1),
                    p("span", ec, J(T.value), 1)
                  ])
                ]),
                p("div", tc, [
                  p("span", nc, J(r.value) + "°C", 1),
                  R.value !== null && x.value !== null ? (k(), I("span", sc, J(R.value) + "°C / " + J(x.value) + "°C", 1)) : ie("", !0)
                ])
              ]),
              p("div", oc, [
                u.value !== null ? (k(), I("div", ic, [
                  F[6] || (F[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", lc, J(S(u.value)) + " hPa", 1)
                ])) : ie("", !0),
                a.value !== null ? (k(), I("div", rc, [
                  F[7] || (F[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", ac, J(a.value) + " %", 1)
                ])) : ie("", !0),
                c.value !== null ? (k(), I("div", uc, [
                  F[8] || (F[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", cc, J(S(c.value)) + " km/h" + J(g.value ? ` (${g.value})` : ""), 1)
                ])) : ie("", !0)
              ]),
              p("div", fc, [
                p("button", {
                  class: $e(["wf-tab", { active: y.value === "daily" }]),
                  onClick: F[1] || (F[1] = (C) => V("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: $e(["wf-tab", { active: y.value === "hourly" }]),
                  onClick: F[2] || (F[2] = (C) => V("hourly"))
                }, "Stündlich", 2)
              ]),
              y.value === "daily" ? (k(), I(le, { key: 0 }, [
                h.value.length ? (k(), I("div", dc, [
                  (k(!0), I(le, null, We(h.value, (C) => (k(), I("div", {
                    key: C.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", hc, J(C.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(C.condition, 36)
                    }, null, 8, pc),
                    p("span", vc, J(C.tempHigh) + "°", 1),
                    p("span", gc, J(C.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (k(), I("div", mc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : ie("", !0),
              y.value === "hourly" ? (k(), I(le, { key: 1 }, [
                m.value.length ? (k(), I("div", yc, [
                  (k(!0), I(le, null, We(N.value, (C) => (k(), I("div", {
                    key: C.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", bc, J(C.day), 1),
                    p("div", _c, [
                      (k(!0), I(le, null, We(C.hours, (K) => (k(), I("div", {
                        key: K.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", wc, J(K.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(K.condition, 32)
                        }, null, 8, $c),
                        p("span", kc, J(K.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (k(), I("div", xc, "Keine stündlichen Daten verfügbar"))
              ], 64)) : ie("", !0)
            ])
          ])) : ie("", !0)
        ]))
      ], 64);
    };
  }
}), Sc = /* @__PURE__ */ Xe(Cc, [["__scopeId", "data-v-a3030d6f"]]), Tc = { class: "center-wrap" }, Ec = ["title"], Mc = {
  key: 0,
  class: "updated"
}, Ac = { class: "ha-modal-header-row" }, Ic = { class: "ha-light-section" }, Lc = { class: "ha-light-slider-wrap" }, Pc = ["value"], Rc = { class: "ha-light-slider-value" }, Oc = {
  key: 0,
  class: "ha-light-section"
}, Nc = { class: "ha-light-slider-wrap" }, Dc = ["value"], Fc = {
  key: 1,
  class: "ha-light-section"
}, Hc = { class: "ha-light-slider-wrap" }, Bc = ["value"], Kc = { class: "ha-light-slider-value" }, jc = /* @__PURE__ */ qe({
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
      const x = t.state.state;
      if (x === "on" || x === "home" || x === "open" || x === "unlocked") return !0;
      const g = parseFloat(x);
      return !isNaN(g) && g > 0;
    }), s = /* @__PURE__ */ W(!1);
    async function o() {
      t.state && await Kt(t.token, t.entityId, "toggle");
    }
    const i = X(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ W(!1), r = X(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = X(() => {
      if (!t.state) return !1;
      const x = t.state.attributes.supported_color_modes;
      return (x == null ? void 0 : x.some((g) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(g))) ?? !1;
    }), c = X(() => {
      if (!t.state) return 0;
      const x = t.state.attributes.hs_color;
      return Math.round((x == null ? void 0 : x[0]) ?? 0);
    }), u = X(() => {
      if (!t.state) return 100;
      const x = t.state.attributes.hs_color;
      return Math.round((x == null ? void 0 : x[1]) ?? 100);
    }), h = X(() => ({
      "--sat-color": `hsl(${c.value}, 100%, 50%)`
    }));
    let m = null, y = null;
    function N(x) {
      const g = parseInt(x.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        g === 0 ? Kt(t.token, t.entityId, "turn_off") : Kt(t.token, t.entityId, "turn_on", { brightness: g });
      }, 150);
    }
    function T(x) {
      const g = parseInt(x.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [g, u.value]
        });
      }, 150);
    }
    function R(x) {
      const g = parseInt(x.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        Kt(t.token, t.entityId, "turn_on", {
          hs_color: [c.value, g]
        });
      }, 150);
    }
    return (x, g) => (k(), I(le, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: g[0] || (g[0] = oe((S) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...g[9] || (g[9] = [
        wl('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: $e(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", Tc, [
          p("button", {
            class: $e(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: g[1] || (g[1] = (S) => s.value = !0),
            onMouseup: g[2] || (g[2] = (S) => s.value = !1),
            onMouseleave: g[3] || (g[3] = (S) => s.value = !1),
            onTouchstartPassive: g[4] || (g[4] = (S) => s.value = !0),
            onTouchend: g[5] || (g[5] = (S) => s.value = !1),
            onClick: o,
            title: n.value ? "Ausschalten" : "Einschalten"
          }, [...g[10] || (g[10] = [
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
          ])], 42, Ec)
        ]),
        i.value ? (k(), I("div", Mc, " Aktualisiert: " + J(i.value), 1)) : ie("", !0)
      ], 2),
      (k(), Le(Ct, { to: "body" }, [
        l.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: g[8] || (g[8] = oe((S) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: g[7] || (g[7] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Ac, [
              g[11] || (g[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: g[6] || (g[6] = (S) => l.value = !1)
              }, "✕")
            ]),
            p("div", Ic, [
              g[12] || (g[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", Lc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: N
                }, null, 40, Pc),
                p("span", Rc, J(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (k(), I("div", Oc, [
              g[13] || (g[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", Nc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: T
                }, null, 40, Dc),
                p("span", {
                  class: "ha-light-color-preview",
                  style: Lt({ background: `hsl(${c.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : ie("", !0),
            a.value ? (k(), I("div", Fc, [
              g[14] || (g[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", Hc, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: Lt(h.value),
                  onInput: R
                }, null, 44, Bc),
                p("span", Kc, J(u.value) + "%", 1)
              ])
            ])) : ie("", !0)
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Vc = /* @__PURE__ */ Xe(jc, [["__scopeId", "data-v-c1ca61d1"]]), Wc = { class: "center-wrap" }, Uc = ["title"], zc = {
  key: 0,
  class: "updated"
}, Jc = /* @__PURE__ */ qe({
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
    return (l, r) => (k(), I("div", {
      class: $e(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Wc, [
        p("button", {
          class: $e(["power-btn", { on: n.value, pressing: s.value }]),
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
        ])], 42, Uc)
      ]),
      i.value ? (k(), I("div", zc, " Aktualisiert: " + J(i.value), 1)) : ie("", !0)
    ], 2));
  }
}), Gc = /* @__PURE__ */ Xe(Jc, [["__scopeId", "data-v-495ed0f0"]]), Yc = { class: "state value center-wrap" }, qc = { class: "number" }, Xc = { class: "unit" }, Qc = {
  key: 0,
  class: "updated"
}, Zc = /* @__PURE__ */ qe({
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
    return (i, l) => (k(), I("div", {
      class: $e(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Yc, [
        p("span", qc, J(n.value), 1),
        p("span", Xc, J(s.value), 1)
      ]),
      o.value && !e.isCompact ? (k(), I("div", Qc, " Aktualisiert: " + J(o.value), 1)) : ie("", !0)
    ], 2));
  }
}), ef = /* @__PURE__ */ Xe(Zc, [["__scopeId", "data-v-336a5298"]]), tf = {
  key: 0,
  class: "card-header"
}, nf = { class: "label" }, sf = { class: "ha-modal-fields" }, of = { class: "ha-modal-input-wrap" }, lf = ["onKeydown"], rf = {
  key: 0,
  class: "ha-modal-suggestions"
}, af = ["onMousedown"], uf = { class: "ha-modal-s-entity" }, cf = { class: "ha-modal-s-name" }, ff = ["onKeydown"], df = { class: "ha-toggle-row" }, hf = {
  key: 1,
  class: "state loading"
}, pf = {
  key: 2,
  class: "state error"
}, vf = /* @__PURE__ */ qe({
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
    At(() => n.entityId, (U) => {
      m.value = localStorage.getItem(`ha_title_${U}`) ?? "", y.value = localStorage.getItem(`ha_showtitle_${U}`) !== "false";
    });
    const N = X(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), T = /* @__PURE__ */ W(!1), R = /* @__PURE__ */ W(""), x = /* @__PURE__ */ W(""), g = /* @__PURE__ */ W(!0), S = /* @__PURE__ */ W(null), P = /* @__PURE__ */ W([]), V = /* @__PURE__ */ W([]), ee = /* @__PURE__ */ W(-1);
    async function ae() {
      try {
        P.value = await Au(n.token);
      } catch {
      }
    }
    function ce() {
      ee.value = -1;
      const U = R.value.trim().toLowerCase();
      if (!U) {
        V.value = [];
        return;
      }
      V.value = P.value.filter(
        (G) => G.entity_id.toLowerCase().includes(U) || (G.attributes.friendly_name ?? "").toLowerCase().includes(U)
      ).slice(0, 8);
    }
    function O() {
      V.value.length && (ee.value = (ee.value + 1) % V.value.length);
    }
    function F() {
      V.value.length && (ee.value = (ee.value - 1 + V.value.length) % V.value.length);
    }
    function f(U) {
      R.value = U, V.value = [], ee.value = -1;
    }
    function C() {
      ee.value >= 0 && V.value[ee.value] ? f(V.value[ee.value].entity_id) : Y();
    }
    function K() {
      R.value = n.entityId, x.value = m.value, g.value = y.value, V.value = [], ee.value = -1, T.value = !0, ae(), hs(() => {
        var U;
        return (U = S.value) == null ? void 0 : U.select();
      });
    }
    function Y() {
      const U = R.value.trim();
      if (U) {
        const G = x.value.trim();
        localStorage.setItem(`ha_title_${U}`, G), localStorage.setItem(`ha_showtitle_${U}`, String(g.value)), U === n.entityId && (m.value = G, y.value = g.value), s("change-entity", U);
      }
      V.value = [], T.value = !1;
    }
    function ue() {
      V.value = [], T.value = !1;
    }
    function de() {
      T.value = !1, s("remove");
    }
    function ve(U) {
      const G = U.target.closest(".card");
      if (!G) return;
      const _e = G.getBoundingClientRect(), Oe = "touches" in U ? U.touches[0].clientX : U.clientX, Ne = "touches" in U ? U.touches[0].clientY : U.clientY, zt = _e.width, ln = _e.height, Jt = 120;
      document.body.style.userSelect = "none";
      function Ue(De) {
        const st = "touches" in De ? De.touches[0].clientX : De.clientX, pt = "touches" in De ? De.touches[0].clientY : De.clientY, Gt = zt + (st - Oe), d = ln + (pt - Ne), v = Math.max(1, Math.min(6, Math.round((Gt + 20) / Jt))), b = Math.max(1, Math.min(6, Math.round((d + 20) / Jt)));
        G.style.gridColumn = `span ${v}`, G.style.gridRow = `span ${b}`, G.dataset.previewCols = String(v), G.dataset.previewRows = String(b);
      }
      function Qe() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", Ue), document.removeEventListener("mouseup", Qe), document.removeEventListener("touchmove", Ue), document.removeEventListener("touchend", Qe);
        const De = parseInt(G.dataset.previewCols || String(n.cols)), st = parseInt(G.dataset.previewRows || String(n.rows));
        delete G.dataset.previewCols, delete G.dataset.previewRows, (De !== n.cols || st !== n.rows) && s("resize", De, st);
      }
      document.addEventListener("mousemove", Ue), document.addEventListener("mouseup", Qe), document.addEventListener("touchmove", Ue), document.addEventListener("touchend", Qe);
    }
    return (U, G) => (k(), I("div", {
      class: $e(["card", { active: h.value, small: o.value, short: i.value, narrow: l.value }])
    }, [
      p("button", {
        class: "edit-ctrl-btn",
        onClick: oe(K, ["stop"]),
        title: "Bearbeiten"
      }, [...G[4] || (G[4] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      y.value ? (k(), I("div", tf, [
        p("span", nf, J(m.value || N.value), 1)
      ])) : ie("", !0),
      (k(), Le(Ct, { to: "body" }, [
        T.value ? (k(), I("div", {
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
            p("div", sf, [
              p("div", of, [
                dt(p("input", {
                  ref_key: "inputRef",
                  ref: S,
                  "onUpdate:modelValue": G[0] || (G[0] = (_e) => R.value = _e),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: ce,
                  onKeydown: [
                    Se(oe(C, ["prevent"]), ["enter"]),
                    Se(ue, ["escape"]),
                    Se(oe(O, ["prevent"]), ["arrow-down"]),
                    Se(oe(F, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, lf), [
                  [ht, R.value]
                ]),
                V.value.length ? (k(), I("ul", rf, [
                  (k(!0), I(le, null, We(V.value, (_e, Oe) => (k(), I("li", {
                    key: _e.entity_id,
                    class: $e(["ha-modal-suggestion-item", { active: Oe === ee.value }]),
                    onMousedown: oe((Ne) => f(_e.entity_id), ["prevent"])
                  }, [
                    p("span", uf, J(_e.entity_id), 1),
                    p("span", cf, J(_e.attributes.friendly_name ?? ""), 1)
                  ], 42, af))), 128))
                ])) : ie("", !0)
              ]),
              dt(p("input", {
                "onUpdate:modelValue": G[1] || (G[1] = (_e) => x.value = _e),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Se(oe(Y, ["prevent"]), ["enter"]),
                  Se(ue, ["escape"])
                ]
              }, null, 40, ff), [
                [ht, x.value]
              ])
            ]),
            p("div", df, [
              G[6] || (G[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: $e(["ha-toggle", { on: g.value }]),
                onClick: G[2] || (G[2] = (_e) => g.value = !g.value),
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
      e.loading ? (k(), I("div", hf, [...G[9] || (G[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (k(), I("div", pf, [
        G[10] || (G[10] = p("span", null, "⚠️", -1)),
        wt(" " + J(e.error), 1)
      ])) : r.value ? (k(), Le(Sc, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: m.value || N.value,
        "custom-title": m.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (k(), Le(Vc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? (k(), Le(Gc, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (k(), Le(ef, {
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
        onMousedown: oe(ve, ["prevent"]),
        onTouchstart: oe(ve, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), gf = /* @__PURE__ */ Xe(vf, [["__scopeId", "data-v-2114e986"]]), mf = { class: "heading-content" }, yf = { class: "ha-modal-header-row" }, bf = { class: "ha-modal-fields" }, _f = ["onKeydown"], wf = { class: "ha-modal-actions" }, $f = /* @__PURE__ */ qe({
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
      i.value = n.label, o.value = !0, hs(() => {
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
      const R = T.target.closest(".heading");
      if (!R) return;
      const x = R.getBoundingClientRect(), g = "touches" in T ? T.touches[0].clientX : T.clientX, S = "touches" in T ? T.touches[0].clientY : T.clientY, P = x.width, V = x.height, ee = 120;
      document.body.style.userSelect = "none";
      function ae(O) {
        const F = "touches" in O ? O.touches[0].clientX : O.clientX, f = "touches" in O ? O.touches[0].clientY : O.clientY, C = P + (F - g), K = V + (f - S), Y = Math.max(1, Math.min(12, Math.round((C + 20) / ee))), ue = Math.max(1, Math.min(4, Math.round((K + 20) / ee)));
        R.style.gridColumn = `span ${Y}`, R.style.gridRow = `span ${ue}`, R.dataset.previewCols = String(Y), R.dataset.previewRows = String(ue);
      }
      function ce() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", ae), document.removeEventListener("mouseup", ce), document.removeEventListener("touchmove", ae), document.removeEventListener("touchend", ce);
        const O = parseInt(R.dataset.previewCols ?? "") || n.cols, F = parseInt(R.dataset.previewRows ?? "") || n.rows;
        delete R.dataset.previewCols, delete R.dataset.previewRows, R.style.gridColumn = "", R.style.gridRow = "", s("resize", O, F);
      }
      document.addEventListener("mousemove", ae), document.addEventListener("mouseup", ce), document.addEventListener("touchmove", ae, { passive: !1 }), document.addEventListener("touchend", ce);
    }
    return (T, R) => (k(), I("div", {
      class: $e(["heading", { short: e.rows === 1 }])
    }, [
      p("div", mf, [
        o.value ? dt((k(), I("input", {
          key: 1,
          ref_key: "inputRef",
          ref: l,
          "onUpdate:modelValue": R[0] || (R[0] = (x) => i.value = x),
          class: "heading-input",
          onBlur: a,
          onKeydown: [
            Se(a, ["enter"]),
            Se(c, ["escape"])
          ]
        }, null, 544)), [
          [ht, i.value]
        ]) : (k(), I("h2", {
          key: 0,
          class: "heading-text",
          onDblclick: r
        }, J(e.label), 33)),
        R[8] || (R[8] = p("hr", { class: "heading-line" }, null, -1))
      ]),
      p("button", {
        class: "heading-edit-btn",
        onClick: oe(m, ["stop"]),
        title: "Bearbeiten"
      }, [...R[9] || (R[9] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      (k(), Le(Ct, { to: "body" }, [
        u.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: R[7] || (R[7] = oe((x) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: R[6] || (R[6] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", yf, [
              R[10] || (R[10] = p("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: R[1] || (R[1] = (x) => u.value = !1)
              }, "✕")
            ]),
            p("div", bf, [
              dt(p("input", {
                "onUpdate:modelValue": R[2] || (R[2] = (x) => h.value = x),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Se(oe(y, ["prevent"]), ["enter"]),
                  R[3] || (R[3] = Se((x) => u.value = !1, ["escape"]))
                ]
              }, null, 40, _f), [
                [ht, h.value]
              ])
            ]),
            p("div", wf, [
              p("button", {
                class: "ha-modal-btn confirm",
                onClick: y
              }, "✓ Übernehmen"),
              p("button", {
                class: "ha-modal-btn cancel",
                onClick: R[4] || (R[4] = (x) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: R[5] || (R[5] = (x) => {
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
}), kf = /* @__PURE__ */ Xe($f, [["__scopeId", "data-v-7a388668"]]);
function yo(e) {
  const { cache: t, version: n } = mo();
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
const xf = { class: "pill-label" }, Cf = { class: "ha-modal-header-row" }, Sf = {
  key: 0,
  class: "ha-modal-empty"
}, Tf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Ef = { class: "ha-modal-entity-name" }, Mf = /* @__PURE__ */ qe({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = yo({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ uo(() => t.token)
    }), s = X(() => n.entities.value.filter((r) => r.state === "on")), o = X(() => s.value.length > 0), i = X(() => s.value.length), l = /* @__PURE__ */ W(!1);
    return (r, a) => (k(), I(le, null, [
      p("button", {
        class: $e(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (c) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", xf, J(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      (k(), Le(Ct, { to: "body" }, [
        l.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = oe((c) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Cf, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (c) => l.value = !1)
              }, "✕")
            ]),
            Ie(n).entities.value.length ? (k(), I("ul", Tf, [
              (k(!0), I(le, null, We(Ie(n).entities.value, (c) => (k(), I("li", {
                key: c.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", Ef, J(c.attributes.friendly_name ?? c.entity_id), 1),
                p("span", {
                  class: $e(["ha-modal-entity-badge", c.state === "on" ? "open" : "closed"])
                }, J(c.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (k(), I("div", Sf, " Keine Sensoren gefunden "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Af = /* @__PURE__ */ Xe(Mf, [["__scopeId", "data-v-4c919921"]]), If = { class: "pill-label" }, Lf = { class: "ha-modal-header-row" }, Pf = { class: "ha-modal-header-actions" }, Rf = {
  key: 0,
  class: "ha-modal-empty"
}, Of = {
  key: 1,
  class: "ha-modal-entity-list"
}, Nf = { class: "ha-modal-entity-name" }, Df = ["onClick"], Ff = { class: "ha-modal-input-wrap" }, Hf = ["onKeydown"], Bf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Kf = ["onMousedown"], jf = { class: "ha-modal-s-entity" }, Vf = { class: "ha-modal-s-name" }, Wf = { class: "ha-modal-entity-list" }, Uf = { class: "ha-modal-entity-name" }, zf = ["onClick"], Jf = {
  key: 0,
  class: "ha-modal-empty"
}, Gf = /* @__PURE__ */ qe({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = yo({
      key: "lights",
      autoDetect: (g) => g.entity_id.startsWith("light."),
      token: /* @__PURE__ */ uo(() => t.token)
    }), { cache: s, version: o } = mo(), i = X(() => n.entities.value.filter((g) => g.state === "on")), l = X(() => i.value.length > 0), r = X(() => i.value.length), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(""), h = /* @__PURE__ */ W([]);
    function m() {
      c.value = !c.value, u.value = "", h.value = [];
    }
    function y(g) {
      o.value;
      const S = s.get(g);
      return (S == null ? void 0 : S.attributes.friendly_name) ?? g;
    }
    function N() {
      const g = u.value.trim().toLowerCase();
      if (!g) {
        h.value = [];
        return;
      }
      const S = new Set(n.entityIds.value), P = [];
      o.value;
      for (const [, V] of s)
        if (!S.has(V.entity_id) && (V.entity_id.toLowerCase().includes(g) || (V.attributes.friendly_name ?? "").toLowerCase().includes(g)) && (P.push(V), P.length >= 8))
          break;
      h.value = P;
    }
    function T(g) {
      n.addEntity(g), u.value = "", h.value = [];
    }
    function R() {
      h.value.length && T(h.value[0].entity_id);
    }
    async function x(g) {
      await Kt(t.token, g, "toggle");
    }
    return (g, S) => (k(), I(le, null, [
      p("button", {
        class: $e(["pill", { active: l.value }]),
        onClick: S[0] || (S[0] = (P) => a.value = !0)
      }, [
        S[6] || (S[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", If, J(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (k(), Le(Ct, { to: "body" }, [
        a.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: S[5] || (S[5] = oe((P) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: S[4] || (S[4] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Lf, [
              S[8] || (S[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", Pf, [
                p("button", {
                  class: $e(["ha-modal-icon-btn", { active: c.value }]),
                  onClick: m,
                  title: "Bearbeiten"
                }, [...S[7] || (S[7] = [
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
                  onClick: S[1] || (S[1] = (P) => {
                    a.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? (k(), I(le, { key: 1 }, [
              p("div", Ff, [
                dt(p("input", {
                  "onUpdate:modelValue": S[2] || (S[2] = (P) => u.value = P),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Se(oe(R, ["prevent"]), ["enter"]),
                    S[3] || (S[3] = Se((P) => {
                      u.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Hf), [
                  [ht, u.value]
                ]),
                h.value.length ? (k(), I("ul", Bf, [
                  (k(!0), I(le, null, We(h.value, (P) => (k(), I("li", {
                    key: P.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: oe((V) => T(P.entity_id), ["prevent"])
                  }, [
                    p("span", jf, J(P.entity_id), 1),
                    p("span", Vf, J(P.attributes.friendly_name ?? ""), 1)
                  ], 40, Kf))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", Wf, [
                (k(!0), I(le, null, We(Ie(n).entityIds.value, (P) => (k(), I("li", {
                  key: P,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Uf, J(y(P)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (V) => Ie(n).removeEntity(P),
                    title: "Entfernen"
                  }, "✕", 8, zf)
                ]))), 128))
              ]),
              Ie(n).entityIds.value.length ? ie("", !0) : (k(), I("div", Jf, " Keine Lichter ausgewählt "))
            ], 64)) : (k(), I(le, { key: 0 }, [
              Ie(n).entities.value.length ? (k(), I("ul", Of, [
                (k(!0), I(le, null, We(Ie(n).entities.value, (P) => (k(), I("li", {
                  key: P.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Nf, J(P.attributes.friendly_name ?? P.entity_id), 1),
                  p("button", {
                    class: $e(["ha-modal-toggle-btn", P.state === "on" ? "on" : "off"]),
                    onClick: (V) => x(P.entity_id)
                  }, J(P.state === "on" ? "An" : "Aus"), 11, Df)
                ]))), 128))
              ])) : (k(), I("div", Rf, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Yf = /* @__PURE__ */ Xe(Gf, [["__scopeId", "data-v-10807199"]]), qf = { class: "pill-label" }, Xf = { class: "ha-modal-header-row" }, Qf = { class: "ha-modal-header-actions" }, Zf = {
  key: 0,
  class: "ha-modal-empty"
}, ed = {
  key: 1,
  class: "ha-modal-entity-list"
}, td = { class: "ha-modal-entity-name" }, nd = { class: "ha-modal-entity-value" }, sd = { class: "ha-modal-input-wrap" }, od = ["onKeydown"], id = {
  key: 0,
  class: "ha-modal-suggestions"
}, ld = ["onMousedown"], rd = { class: "ha-modal-s-entity" }, ad = { class: "ha-modal-s-name" }, ud = { class: "ha-modal-entity-list" }, cd = { class: "ha-modal-entity-name" }, fd = ["onClick"], dd = {
  key: 0,
  class: "ha-modal-empty"
}, hd = /* @__PURE__ */ qe({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = yo({
      key: "climate",
      autoDetect: (x) => x.entity_id.startsWith("climate.") || x.entity_id.startsWith("sensor.") && x.attributes.device_class === "temperature",
      token: /* @__PURE__ */ uo(() => t.token)
    }), { cache: s, version: o } = mo();
    function i(x) {
      if (x.entity_id.startsWith("climate.")) {
        const S = x.attributes.current_temperature;
        return typeof S == "number" ? S : null;
      }
      const g = parseFloat(x.state);
      return isNaN(g) ? null : g;
    }
    function l(x) {
      const g = i(x);
      if (g === null) return x.state;
      const S = x.attributes.unit_of_measurement ?? "°C";
      return `${g.toFixed(1)} ${S}`;
    }
    const r = X(() => {
      const x = n.entities.value.map(i).filter((P) => P !== null);
      if (!x.length) return "-- °C";
      const g = Math.min(...x), S = Math.max(...x);
      return g === S ? `${g.toFixed(1)} °C` : `${g.toFixed(1)}–${S.toFixed(1)} °C`;
    });
    function a(x) {
      o.value;
      const g = s.get(x);
      return (g == null ? void 0 : g.attributes.friendly_name) ?? x;
    }
    const c = /* @__PURE__ */ W(!1), u = /* @__PURE__ */ W(!1), h = /* @__PURE__ */ W(""), m = /* @__PURE__ */ W([]);
    function y() {
      u.value = !u.value, h.value = "", m.value = [];
    }
    function N() {
      const x = h.value.trim().toLowerCase();
      if (!x) {
        m.value = [];
        return;
      }
      const g = new Set(n.entityIds.value), S = [];
      o.value;
      for (const [, P] of s)
        if (!g.has(P.entity_id) && (P.entity_id.toLowerCase().includes(x) || (P.attributes.friendly_name ?? "").toLowerCase().includes(x)) && (S.push(P), S.length >= 8))
          break;
      m.value = S;
    }
    function T(x) {
      n.addEntity(x), h.value = "", m.value = [];
    }
    function R() {
      m.value.length && T(m.value[0].entity_id);
    }
    return (x, g) => (k(), I(le, null, [
      p("button", {
        class: "pill",
        onClick: g[0] || (g[0] = (S) => c.value = !0)
      }, [
        g[6] || (g[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", qf, J(r.value), 1)
      ]),
      (k(), Le(Ct, { to: "body" }, [
        c.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: g[5] || (g[5] = oe((S) => c.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: g[4] || (g[4] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", Xf, [
              g[8] || (g[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", Qf, [
                p("button", {
                  class: $e(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: y,
                  title: "Bearbeiten"
                }, [...g[7] || (g[7] = [
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
                  onClick: g[1] || (g[1] = (S) => {
                    c.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? (k(), I(le, { key: 1 }, [
              p("div", sd, [
                dt(p("input", {
                  "onUpdate:modelValue": g[2] || (g[2] = (S) => h.value = S),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Se(oe(R, ["prevent"]), ["enter"]),
                    g[3] || (g[3] = Se((S) => {
                      h.value = "", m.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, od), [
                  [ht, h.value]
                ]),
                m.value.length ? (k(), I("ul", id, [
                  (k(!0), I(le, null, We(m.value, (S) => (k(), I("li", {
                    key: S.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: oe((P) => T(S.entity_id), ["prevent"])
                  }, [
                    p("span", rd, J(S.entity_id), 1),
                    p("span", ad, J(S.attributes.friendly_name ?? ""), 1)
                  ], 40, ld))), 128))
                ])) : ie("", !0)
              ]),
              p("ul", ud, [
                (k(!0), I(le, null, We(Ie(n).entityIds.value, (S) => (k(), I("li", {
                  key: S,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", cd, J(a(S)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (P) => Ie(n).removeEntity(S),
                    title: "Entfernen"
                  }, "✕", 8, fd)
                ]))), 128))
              ]),
              Ie(n).entityIds.value.length ? ie("", !0) : (k(), I("div", dd, " Keine Sensoren ausgewählt "))
            ], 64)) : (k(), I(le, { key: 0 }, [
              Ie(n).entities.value.length ? (k(), I("ul", ed, [
                (k(!0), I(le, null, We(Ie(n).entities.value, (S) => (k(), I("li", {
                  key: S.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", td, J(S.attributes.friendly_name ?? S.entity_id), 1),
                  p("span", nd, J(l(S)), 1)
                ]))), 128))
              ])) : (k(), I("div", Zf, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), pd = /* @__PURE__ */ Xe(hd, [["__scopeId", "data-v-2665ddcd"]]), vd = { class: "pill-label" }, gd = { class: "ha-modal-header-row" }, md = {
  key: 0,
  class: "ha-modal-empty"
}, yd = {
  key: 1,
  class: "ha-modal-entity-list"
}, bd = { class: "notif-header" }, _d = { class: "notif-title" }, wd = { class: "notif-time" }, $d = {
  key: 0,
  class: "notif-message"
}, kd = ["onClick"], xd = /* @__PURE__ */ qe({
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
        await fetch(_s("/api/services/persistent_notification/dismiss"), {
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
    return Tn(() => {
      i(), o = setInterval(i, 3e4);
    }), En(() => {
      o && clearInterval(o);
    }), (a, c) => (k(), I(le, null, [
      n.value.length ? (k(), I("button", {
        key: 0,
        class: "pill",
        onClick: c[0] || (c[0] = (u) => s.value = !0)
      }, [
        c[4] || (c[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", vd, J(n.value.length), 1)
      ])) : ie("", !0),
      (k(), Le(Ct, { to: "body" }, [
        s.value ? (k(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: c[3] || (c[3] = oe((u) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: c[2] || (c[2] = oe(() => {
            }, ["stop"]))
          }, [
            p("div", gd, [
              c[5] || (c[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: c[1] || (c[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (k(), I("ul", yd, [
              (k(!0), I(le, null, We(n.value, (u) => (k(), I("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                p("div", bd, [
                  p("span", _d, J(u.title || u.message), 1),
                  p("span", wd, J(r(u.created_at)), 1)
                ]),
                u.title && u.message ? (k(), I("p", $d, J(u.message), 1)) : ie("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (h) => l(u.notification_id)
                }, "Löschen", 8, kd)
              ]))), 128))
            ])) : (k(), I("div", md, " Keine Benachrichtigungen "))
          ])
        ])) : ie("", !0)
      ]))
    ], 64));
  }
}), Cd = /* @__PURE__ */ Xe(xd, [["__scopeId", "data-v-a643a4ed"]]), Sd = {
  key: 1,
  class: "dashboard"
}, Td = { class: "dashboard-header" }, Ed = { class: "header-left" }, Md = { class: "header-right" }, Ad = { class: "clock" }, Id = { class: "clock-time" }, Ld = { class: "clock-date" }, Pd = { class: "page-tabs" }, Rd = { class: "page-tabs-inner" }, Od = ["onClick", "onDblclick", "onTouchstartPassive"], Nd = {
  key: 1,
  class: "page-tab-label"
}, Dd = { class: "ha-modal-header-row" }, Fd = { class: "page-delete-text" }, Hd = { class: "page-delete-actions" }, Bd = { class: "burger-wrap" }, Kd = { class: "burger-auth-actions" }, di = 120, jd = 36, Vd = 32, Wd = /* @__PURE__ */ qe({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var he;
    e.panelMode && El(!0);
    const n = /* @__PURE__ */ W(localStorage.getItem("ha_token")), s = Tu(), o = X(() => Cu() ? s.value : n.value), i = Eu(), l = X(() => Mu(o.value ?? void 0)), r = /* @__PURE__ */ W(i.value ?? ""), a = /* @__PURE__ */ W(!1), c = /* @__PURE__ */ cs({}), u = /* @__PURE__ */ new Map();
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
    const y = /* @__PURE__ */ W([]), N = /* @__PURE__ */ W(""), T = X(() => y.value.find((_) => _.id === N.value) ?? y.value[0]), R = X(() => {
      var _;
      return ((_ = T.value) == null ? void 0 : _.cards) ?? [];
    });
    function x() {
      return {
        pages: y.value,
        authKey: i.value ?? null,
        activePage: N.value
      };
    }
    function g() {
      localStorage.setItem("ha_pages", JSON.stringify(y.value)), localStorage.setItem("ha_active_page", N.value), fi(x());
    }
    function S(_) {
      if (N.value !== _) {
        for (const w of R.value) _e(w.id);
        N.value = _, localStorage.setItem("ha_active_page", _);
        for (const w of R.value)
          w.type !== "heading" && G(w.id, w.entityId);
      }
    }
    function P() {
      const _ = h(), w = y.value.length + 1;
      y.value = [...y.value, { id: _, name: `Seite ${w}`, cards: [] }], g(), S(_);
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
    function O() {
      const _ = V.value;
      if (V.value = null, !_ || y.value.length <= 1) return;
      const w = y.value.find(($) => $.id === _);
      if (w)
        for (const $ of w.cards) _e($.id);
      if (y.value = y.value.filter(($) => $.id !== _), N.value === _) {
        N.value = y.value[0].id, localStorage.setItem("ha_active_page", N.value);
        for (const $ of R.value)
          $.type !== "heading" && G($.id, $.entityId);
      }
      g();
    }
    let F = null;
    function f(_) {
      F = setTimeout(() => {
        F = null, de(_);
      }, 600);
    }
    function C() {
      F && (clearTimeout(F), F = null);
    }
    const K = /* @__PURE__ */ W(null), Y = /* @__PURE__ */ W(""), ue = /* @__PURE__ */ W(null);
    function de(_) {
      const w = y.value.find(($) => $.id === _);
      w && (K.value = _, Y.value = w.name, hs(() => {
        ue.value && ue.value.length && (ue.value[0].focus(), ue.value[0].select());
      }));
    }
    function ve() {
      if (!K.value) return;
      const _ = y.value.find((w) => w.id === K.value);
      _ && Y.value.trim() && (_.name = Y.value.trim(), y.value = [...y.value], g()), K.value = null;
    }
    function U() {
      K.value = null;
    }
    function G(_, w) {
      if (u.has(_)) return;
      const $ = Du(w);
      u.set(_, $), c[_] = { state: null, loading: !0, error: null }, At($.state, (te) => {
        c[_] && (c[_].state = te);
      }), At($.loading, (te) => {
        c[_] && (c[_].loading = te);
      }), At($.error, (te) => {
        c[_] && (c[_].error = te);
      }), o.value && $.start(o.value);
    }
    function _e(_) {
      const w = u.get(_);
      w && (w.stop(), u.delete(_)), delete c[_];
    }
    const Oe = m();
    y.value = Oe;
    const Ne = localStorage.getItem("ha_active_page");
    N.value = ((he = Oe.find((_) => _.id === Ne)) == null ? void 0 : he.id) ?? Oe[0].id;
    for (const _ of R.value)
      _.type !== "heading" && G(_.id, _.entityId);
    At(o, (_, w) => {
      if (_ && !w)
        for (const [, $] of u) $.start(_);
    }), Iu((_) => {
      var $, te;
      if (!(($ = _ == null ? void 0 : _.pages) != null && $.length)) return;
      for (const se of R.value) _e(se.id);
      y.value = _.pages.map((se) => ({
        id: se.id,
        name: se.name || "Seite",
        cards: (se.cards || []).map((Ce) => ({
          id: Ce.id,
          type: Ce.type ?? "card",
          entityId: Ce.entityId ?? "",
          label: Ce.label,
          cols: Ce.cols ?? 2,
          rows: Ce.rows ?? 2,
          gridCol: Ce.gridCol,
          gridRow: Ce.gridRow
        }))
      }));
      const w = _.activePage ?? localStorage.getItem("ha_active_page");
      N.value = ((te = y.value.find((se) => se.id === w)) == null ? void 0 : te.id) ?? y.value[0].id, localStorage.setItem("ha_pages", JSON.stringify(y.value)), localStorage.setItem("ha_active_page", N.value);
      for (const se of R.value)
        se.type !== "heading" && G(se.id, se.entityId);
      _.authKey && (r.value = _.authKey);
    });
    function zt() {
      const _ = h(), w = "sensor.wohnzimmer_soll_temperatur", $ = T.value;
      $ && ($.cards = [...$.cards, { id: _, type: "card", entityId: w, cols: 2, rows: 2 }], y.value = [...y.value], G(_, w), g());
    }
    function ln() {
      const _ = h(), w = T.value;
      w && (w.cards = [...w.cards, { id: _, type: "heading", entityId: "", label: "Überschrift", cols: 4, rows: 1 }], y.value = [...y.value], g());
    }
    function Jt(_, w) {
      const $ = T.value;
      if (!$) return;
      const te = $.cards.find((se) => se.id === _);
      te && (te.label = w, y.value = [...y.value], g());
    }
    function Ue(_) {
      _e(_);
      const w = T.value;
      w && (w.cards = w.cards.filter(($) => $.id !== _), y.value = [...y.value], g());
    }
    function Qe(_) {
      n.value = _;
      for (const [, w] of u) w.start(_);
    }
    function De(_, w) {
      const $ = T.value;
      if (!$) return;
      const te = $.cards.find((Ce) => Ce.id === _);
      if (!te) return;
      te.entityId = w;
      const se = u.get(_);
      se && o.value && se.start(o.value, w), y.value = [...y.value], g();
    }
    function st(_, w, $) {
      const te = T.value;
      if (!te) return;
      const se = te.cards.find((Ce) => Ce.id === _);
      se && (se.cols = w, se.rows = $, y.value = [...y.value], g());
    }
    function pt() {
      for (const [_] of u) _e(_);
      y.value = [{ id: h(), name: "Home", cards: [] }], N.value = y.value[0].id, Ou(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), localStorage.removeItem("ha_auth_key"), Ds(null), r.value = "", n.value = null;
    }
    const Gt = /* @__PURE__ */ W(null), d = /* @__PURE__ */ W(null), v = /* @__PURE__ */ W(null), b = /* @__PURE__ */ W(1), L = /* @__PURE__ */ W(1), E = /* @__PURE__ */ W(2), M = /* @__PURE__ */ W(2);
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
      const te = $.closest("[data-card-id]") ?? $, se = te.getBoundingClientRect(), Ce = "touches" in _ ? _.touches[0].clientX : _.clientX, fe = "touches" in _ ? _.touches[0].clientY : _.clientY, Ae = Ce - se.left, rn = fe - se.top;
      let Yt = !1;
      const bo = R.value.find((Tt) => Tt.id === w);
      if (!bo) return;
      const an = bo;
      function Nn(Tt) {
        const $s = "touches" in Tt ? Tt.touches[0].clientX : Tt.clientX, ks = "touches" in Tt ? Tt.touches[0].clientY : Tt.clientY;
        if (!Yt) {
          const Fn = $s - Ce, xs = ks - fe;
          if (Math.abs(Fn) < 5 && Math.abs(xs) < 5) return;
          Yt = !0, d.value = w, E.value = an.cols, M.value = an.rows;
          const je = te.cloneNode(!0);
          je.classList.add("drag-ghost"), je.style.position = "fixed", je.style.width = se.width + "px", je.style.height = se.height + "px", je.style.zIndex = "1000", je.style.pointerEvents = "none", je.style.opacity = "0.85", je.style.transform = "scale(1.04)", je.style.transition = "none", je.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(je), v.value = je, te.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (v.value && (v.value.style.left = $s - Ae + "px", v.value.style.top = ks - rn + "px"), Gt.value) {
          const Fn = Gt.value.getBoundingClientRect(), xs = $s - Ae - Fn.left - Vd + se.width / 2, je = ks - rn - Fn.top - jd + se.height / 2, Pl = Math.max(1, Math.round(xs / di)), Rl = Math.max(1, Math.round(je / di));
          b.value = Pl, L.value = Rl;
        }
      }
      function Dn() {
        document.removeEventListener("mousemove", Nn), document.removeEventListener("mouseup", Dn), document.removeEventListener("touchmove", Nn), document.removeEventListener("touchend", Dn), document.body.style.userSelect = "", Yt && (v.value && (v.value.remove(), v.value = null), te.style.opacity = "", an && (an.gridCol = b.value, an.gridRow = L.value, y.value = [...y.value], g()), d.value = null);
      }
      document.addEventListener("mousemove", Nn), document.addEventListener("mouseup", Dn), document.addEventListener("touchmove", Nn, { passive: !1 }), document.addEventListener("touchend", Dn);
    }
    function A() {
      const _ = r.value.trim();
      Ds(_ || null), a.value = !1, fi(x());
    }
    const z = /* @__PURE__ */ W(!1);
    function j(_) {
      z.value && (z.value = !1);
    }
    Tn(() => document.addEventListener("click", j)), En(() => document.removeEventListener("click", j));
    const q = /* @__PURE__ */ W(""), Z = /* @__PURE__ */ W("");
    function re() {
      const _ = /* @__PURE__ */ new Date();
      q.value = _.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), Z.value = _.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let ye;
    return Tn(() => {
      re(), ye = setInterval(re, 1e3);
    }), En(() => {
      for (const [_] of u) _e(_);
      clearInterval(ye);
    }), (_, w) => (k(), I("div", null, [
      !o.value && !e.panelMode ? (k(), Le(xu, {
        key: 0,
        onToken: Qe
      })) : (k(), I("div", Sd, [
        p("header", Td, [
          p("div", Ed, [
            Te(Af, { token: l.value }, null, 8, ["token"]),
            Te(Yf, { token: l.value }, null, 8, ["token"]),
            Te(pd, { token: l.value }, null, 8, ["token"]),
            Te(Cd, { token: l.value }, null, 8, ["token"])
          ]),
          p("div", Md, [
            p("div", Ad, [
              p("span", Id, J(q.value), 1),
              p("span", Ld, J(Z.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: Gt,
          class: "dashboard-main"
        }, [
          (k(!0), I(le, null, We(R.value, ($) => {
            var te, se, Ce;
            return k(), I(le, {
              key: $.id
            }, [
              $.type === "heading" ? (k(), Le(kf, {
                key: 0,
                "data-card-id": $.id,
                style: Lt(B($)),
                class: $e({ "card-dragging": d.value === $.id }),
                label: $.label || "Überschrift",
                cols: $.cols,
                rows: $.rows,
                onUpdateLabel: (fe) => Jt($.id, fe),
                onRemove: (fe) => Ue($.id),
                onResize: (fe, Ae) => st($.id, fe, Ae),
                onMousedown: (fe) => D(fe, $.id),
                onTouchstart: (fe) => D(fe, $.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : (k(), Le(gf, {
                key: 1,
                "data-card-id": $.id,
                style: Lt(B($)),
                class: $e({ "card-dragging": d.value === $.id }),
                "entity-id": $.entityId,
                token: l.value,
                cols: $.cols,
                rows: $.rows,
                state: ((te = c[$.id]) == null ? void 0 : te.state) ?? null,
                loading: ((se = c[$.id]) == null ? void 0 : se.loading) ?? !0,
                error: ((Ce = c[$.id]) == null ? void 0 : Ce.error) ?? null,
                onChangeEntity: (fe) => De($.id, fe),
                onRemove: (fe) => Ue($.id),
                onResize: (fe, Ae) => st($.id, fe, Ae),
                onMousedown: (fe) => D(fe, $.id),
                onTouchstart: (fe) => D(fe, $.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          d.value ? (k(), I("div", {
            key: 0,
            class: "drop-placeholder",
            style: Lt(H.value)
          }, null, 4)) : ie("", !0)
        ], 512),
        p("nav", Pd, [
          p("div", Rd, [
            (k(!0), I(le, null, We(y.value, ($, te) => (k(), I("button", {
              key: $.id,
              class: $e(["page-tab", { active: N.value === $.id }]),
              onClick: (se) => S($.id),
              onDblclick: (se) => de($.id),
              onTouchstartPassive: (se) => f($.id),
              onTouchend: C,
              onTouchmove: C
            }, [
              K.value === $.id ? dt((k(), I("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: ue,
                "onUpdate:modelValue": w[0] || (w[0] = (se) => Y.value = se),
                class: "page-tab-input",
                onBlur: ve,
                onKeydown: [
                  Se(ve, ["enter"]),
                  Se(U, ["escape"])
                ],
                onClick: w[1] || (w[1] = oe(() => {
                }, ["stop"]))
              }, null, 544)), [
                [ht, Y.value]
              ]) : (k(), I("span", Nd, J($.name), 1))
            ], 42, Od))), 128))
          ])
        ]),
        (k(), Le(Ct, { to: "body" }, [
          V.value ? (k(), I("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: w[5] || (w[5] = oe(($) => V.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: w[4] || (w[4] = oe(() => {
              }, ["stop"]))
            }, [
              p("div", Dd, [
                w[19] || (w[19] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: w[2] || (w[2] = ($) => V.value = null)
                }, "✕")
              ]),
              p("p", Fd, " „" + J(ee.value) + '" mit ' + J(ae.value) + " Karte" + J(ae.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", Hd, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: w[3] || (w[3] = ($) => V.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: O
                }, "Löschen")
              ])
            ])
          ])) : ie("", !0)
        ])),
        p("div", Bd, [
          p("button", {
            class: "burger-btn",
            onClick: w[6] || (w[6] = oe(($) => z.value = !z.value, ["stop"]))
          }, [...w[20] || (w[20] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          Te(Ka, { name: "burger-pop" }, {
            default: Vi(() => [
              z.value ? (k(), I("div", {
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
                    ln(), z.value = !1;
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
                y.value.length > 1 ? (k(), I("button", {
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
                  wt(" Auth Key " + J(Ie(i) ? "✓" : ""), 1)
                ]),
                a.value ? (k(), I("div", {
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
                    onKeydown: w[13] || (w[13] = Se(($) => A(), ["enter"]))
                  }, null, 544), [
                    [ht, r.value]
                  ]),
                  p("div", Kd, [
                    p("button", {
                      class: "burger-auth-save",
                      onClick: w[14] || (w[14] = ($) => A())
                    }, "Speichern"),
                    Ie(i) ? (k(), I("button", {
                      key: 0,
                      class: "burger-auth-clear",
                      onClick: w[15] || (w[15] = ($) => {
                        r.value = "", Ie(Ds)(null);
                      })
                    }, "Löschen")) : ie("", !0)
                  ])
                ])) : ie("", !0),
                e.panelMode ? ie("", !0) : (k(), I(le, { key: 2 }, [
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
}), Ud = /* @__PURE__ */ Xe(Wd, [["__scopeId", "data-v-eccc96cb"]]);
class zd extends HTMLElement {
  constructor() {
    super(...arguments);
    _o(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && Su(s), !this._app && s) {
      El(!0);
      const l = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const c = document.createElement("style");
          c.textContent = a.textContent, l.appendChild(c);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", l.appendChild(r), this._app = pu(Ud, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", zd);
