(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-a3030d6f]{justify-content:center}.weather-layout[data-v-a3030d6f]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-a3030d6f]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-a3030d6f]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-a3030d6f]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-a3030d6f]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-a3030d6f]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-a3030d6f]{flex-shrink:0}.weather-svg-icon[data-v-a3030d6f]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-a3030d6f]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-a3030d6f]{display:none}.weather-body.short .weather-svg-icon[data-v-a3030d6f] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-a3030d6f]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-a3030d6f]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-a3030d6f]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-a3030d6f]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-a3030d6f]{display:none}.weather-body.compact .weather-svg-icon[data-v-a3030d6f] svg{width:28px;height:28px}.light-ctrl-btn[data-v-a3030d6f]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.light-ctrl-btn[data-v-a3030d6f]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-a3030d6f]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-a3030d6f]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-c1ca61d1]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover{opacity:1}.light-ctrl-btn[data-v-c1ca61d1]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c1ca61d1]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-c1ca61d1]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-c1ca61d1]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-c1ca61d1]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-c1ca61d1]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-c1ca61d1]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-c1ca61d1]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-c1ca61d1]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-c1ca61d1]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-c1ca61d1]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-c1ca61d1]{width:24px;height:24px}.body-center.short .updated[data-v-c1ca61d1]{display:none}.body-center.compact .bulb-btn[data-v-c1ca61d1]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-c1ca61d1]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-c1ca61d1]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-c1ca61d1]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-c1ca61d1]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-c1ca61d1]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-2114e986]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-2114e986]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-2114e986]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-2114e986]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-2114e986]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-2114e986]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-2114e986]{opacity:1}.edit-ctrl-btn[data-v-2114e986]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-2114e986]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-2114e986]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-2114e986]{width:2px;height:2px}.dot[data-v-2114e986]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-2114e986]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-2114e986]{justify-content:center;padding:16px 0}.state.error[data-v-2114e986]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-2114e986]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-2114e986 .8s linear infinite}@keyframes spin-2114e986{to{transform:rotate(360deg)}}.card.narrow[data-v-2114e986]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-2114e986]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-2114e986]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-2114e986]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-2114e986]{width:18px;height:18px;border-width:2px}.card.small[data-v-2114e986]:after{bottom:-12px;height:18px}.card.short[data-v-2114e986]{padding:14px 16px 12px}.card.short .label[data-v-2114e986]{font-size:.6rem}.resize-handle[data-v-2114e986]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-2114e986]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-2114e986]{opacity:1}.ha-toggle-row[data-v-2114e986]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-2114e986]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-2114e986]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-2114e986]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-2114e986]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-2114e986]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-95ac6cdb]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-95ac6cdb]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-95ac6cdb]{display:flex;align-items:center;gap:10px}.app-name[data-v-95ac6cdb]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-95ac6cdb]{display:flex;align-items:center}.clock[data-v-95ac6cdb]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-95ac6cdb]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-95ac6cdb]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-95ac6cdb]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-95ac6cdb] .card{width:auto;min-height:unset}.page-tabs[data-v-95ac6cdb]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-95ac6cdb]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-95ac6cdb]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-95ac6cdb]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-95ac6cdb]:not(.active):hover{color:#718096}.page-tab-label[data-v-95ac6cdb]{white-space:nowrap}.page-tab-input[data-v-95ac6cdb]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-95ac6cdb]{max-width:340px}.page-delete-text[data-v-95ac6cdb]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-95ac6cdb]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-95ac6cdb],.page-delete-confirm[data-v-95ac6cdb]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-95ac6cdb]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-95ac6cdb]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-95ac6cdb]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-95ac6cdb]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-95ac6cdb]{position:fixed;bottom:28px;left:28px;z-index:60}.burger-btn[data-v-95ac6cdb]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-95ac6cdb]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-95ac6cdb]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-95ac6cdb]{position:absolute;bottom:58px;left:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-95ac6cdb]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-95ac6cdb]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-95ac6cdb],.burger-pop-leave-to[data-v-95ac6cdb]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-95ac6cdb]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-95ac6cdb]:hover{background:#0000000a}.burger-item-icon[data-v-95ac6cdb]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-95ac6cdb],.burger-item-danger .burger-item-icon[data-v-95ac6cdb]{color:#e53e3e}.burger-item-muted[data-v-95ac6cdb]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-95ac6cdb]{height:1px;background:#d2d8e0;margin:4px 14px}.card-dragging[data-v-95ac6cdb]{opacity:.25}.drop-placeholder[data-v-95ac6cdb]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var _l = Object.defineProperty;
var bl = (e, t, n) => t in e ? _l(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var io = (e, t, n) => bl(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Fs(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const he = {}, Xt = [], ft = () => {
}, Qo = () => !1, Xn = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Hs = (e) => e.startsWith("onUpdate:"), we = Object.assign, Bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, wl = Object.prototype.hasOwnProperty, de = (e, t) => wl.call(e, t), q = Array.isArray, Qt = (e) => En(e) === "[object Map]", Zo = (e) => En(e) === "[object Set]", lo = (e) => En(e) === "[object Date]", Q = (e) => typeof e == "function", ve = (e) => typeof e == "string", dt = (e) => typeof e == "symbol", ce = (e) => e !== null && typeof e == "object", ei = (e) => (ce(e) || Q(e)) && Q(e.then) && Q(e.catch), ti = Object.prototype.toString, En = (e) => ti.call(e), $l = (e) => En(e).slice(8, -1), ni = (e) => En(e) === "[object Object]", Qn = (e) => ve(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, un = /* @__PURE__ */ Fs(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Zn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, kl = /-\w/g, Ye = Zn(
  (e) => e.replace(kl, (t) => t.slice(1).toUpperCase())
), xl = /\B([A-Z])/g, Et = Zn(
  (e) => e.replace(xl, "-$1").toLowerCase()
), si = Zn((e) => e.charAt(0).toUpperCase() + e.slice(1)), fs = Zn(
  (e) => e ? `on${si(e)}` : ""
), ut = (e, t) => !Object.is(e, t), Nn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, oi = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, js = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Sl = (e) => {
  const t = ve(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let ro;
const es = () => ro || (ro = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Kt(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = ve(s) ? Ml(s) : Kt(s);
      if (o)
        for (const i in o)
          t[i] = o[i];
    }
    return t;
  } else if (ve(e) || ce(e))
    return e;
}
const Cl = /;(?![^(]*\))/g, Tl = /:([^]+)/, El = /\/\*[^]*?\*\//g;
function Ml(e) {
  const t = {};
  return e.replace(El, "").split(Cl).forEach((n) => {
    if (n) {
      const s = n.split(Tl);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ge(e) {
  let t = "";
  if (ve(e))
    t = e;
  else if (q(e))
    for (let n = 0; n < e.length; n++) {
      const s = ge(e[n]);
      s && (t += s + " ");
    }
  else if (ce(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Al = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Il = /* @__PURE__ */ Fs(Al);
function ii(e) {
  return !!e || e === "";
}
function Ll(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = Vs(e[s], t[s]);
  return n;
}
function Vs(e, t) {
  if (e === t) return !0;
  let n = lo(e), s = lo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = dt(e), s = dt(t), n || s)
    return e === t;
  if (n = q(e), s = q(t), n || s)
    return n && s ? Ll(e, t) : !1;
  if (n = ce(e), s = ce(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, i = Object.keys(t).length;
    if (o !== i)
      return !1;
    for (const l in e) {
      const r = e.hasOwnProperty(l), a = t.hasOwnProperty(l);
      if (r && !a || !r && a || !Vs(e[l], t[l]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const li = (e) => !!(e && e.__v_isRef === !0), U = (e) => ve(e) ? e : e == null ? "" : q(e) || ce(e) && (e.toString === ti || !Q(e.toString)) ? li(e) ? U(e.value) : JSON.stringify(e, ri, 2) : String(e), ri = (e, t) => li(t) ? ri(e, t.value) : Qt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], i) => (n[ds(s, i) + " =>"] = o, n),
    {}
  )
} : Zo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => ds(n))
} : dt(t) ? ds(t) : ce(t) && !q(t) && !ni(t) ? String(t) : t, ds = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    dt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let He;
class Pl {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = He, !t && He && (this.index = (He.scopes || (He.scopes = [])).push(
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
      const n = He;
      try {
        return He = this, t();
      } finally {
        He = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = He, He = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (He = this.prevScope, this.prevScope = void 0);
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
function Ol() {
  return He;
}
let pe;
const hs = /* @__PURE__ */ new WeakSet();
class ai {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, He && He.active && He.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, hs.has(this) && (hs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ui(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ao(this), fi(this);
    const t = pe, n = Xe;
    pe = this, Xe = !0;
    try {
      return this.fn();
    } finally {
      di(this), pe = t, Xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Us(t);
      this.deps = this.depsTail = void 0, ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? hs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    ks(this) && this.run();
  }
  get dirty() {
    return ks(this);
  }
}
let ci = 0, fn, dn;
function ui(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = dn, dn = e;
    return;
  }
  e.next = fn, fn = e;
}
function Ks() {
  ci++;
}
function Ws() {
  if (--ci > 0)
    return;
  if (dn) {
    let t = dn;
    for (dn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; fn; ) {
    let t = fn;
    for (fn = void 0; t; ) {
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
function fi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function di(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Us(s), Rl(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function ks(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (hi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function hi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === yn) || (e.globalVersion = yn, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !ks(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = pe, s = Xe;
  pe = e, Xe = !0;
  try {
    fi(e);
    const o = e.fn(e._value);
    (t.version === 0 || ut(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    pe = n, Xe = s, di(e), e.flags &= -3;
  }
}
function Us(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let i = n.computed.deps; i; i = i.nextDep)
      Us(i, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function Rl(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Xe = !0;
const pi = [];
function bt() {
  pi.push(Xe), Xe = !1;
}
function wt() {
  const e = pi.pop();
  Xe = e === void 0 ? !0 : e;
}
function ao(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = pe;
    pe = void 0;
    try {
      t();
    } finally {
      pe = n;
    }
  }
}
let yn = 0;
class Nl {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class zs {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!pe || !Xe || pe === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== pe)
      n = this.activeLink = new Nl(pe, this), pe.deps ? (n.prevDep = pe.depsTail, pe.depsTail.nextDep = n, pe.depsTail = n) : pe.deps = pe.depsTail = n, gi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = pe.depsTail, n.nextDep = void 0, pe.depsTail.nextDep = n, pe.depsTail = n, pe.deps === n && (pe.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, yn++, this.notify(t);
  }
  notify(t) {
    Ks();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Ws();
    }
  }
}
function gi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        gi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const Vn = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
), _n = /* @__PURE__ */ Symbol(
  ""
);
function Me(e, t, n) {
  if (Xe && pe) {
    let s = Vn.get(e);
    s || Vn.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new zs()), o.map = s, o.key = n), o.track();
  }
}
function yt(e, t, n, s, o, i) {
  const l = Vn.get(e);
  if (!l) {
    yn++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (Ks(), t === "clear")
    l.forEach(r);
  else {
    const a = q(e), u = a && Qn(n);
    if (a && n === "length") {
      const c = Number(s);
      l.forEach((h, y) => {
        (y === "length" || y === _n || !dt(y) && y >= c) && r(h);
      });
    } else
      switch ((n !== void 0 || l.has(void 0)) && r(l.get(n)), u && r(l.get(_n)), t) {
        case "add":
          a ? u && r(l.get("length")) : (r(l.get(Ht)), Qt(e) && r(l.get(xs)));
          break;
        case "delete":
          a || (r(l.get(Ht)), Qt(e) && r(l.get(xs)));
          break;
        case "set":
          Qt(e) && r(l.get(Ht));
          break;
      }
  }
  Ws();
}
function Dl(e, t) {
  const n = Vn.get(e);
  return n && n.get(t);
}
function Gt(e) {
  const t = /* @__PURE__ */ ae(e);
  return t === e ? t : (Me(t, "iterate", _n), /* @__PURE__ */ ze(e) ? t : t.map(Qe));
}
function ts(e) {
  return Me(e = /* @__PURE__ */ ae(e), "iterate", _n), e;
}
function at(e, t) {
  return /* @__PURE__ */ $t(e) ? on(/* @__PURE__ */ Bt(e) ? Qe(t) : t) : Qe(t);
}
const Fl = {
  __proto__: null,
  [Symbol.iterator]() {
    return ps(this, Symbol.iterator, (e) => at(this, e));
  },
  concat(...e) {
    return Gt(this).concat(
      ...e.map((t) => q(t) ? Gt(t) : t)
    );
  },
  entries() {
    return ps(this, "entries", (e) => (e[1] = at(this, e[1]), e));
  },
  every(e, t) {
    return pt(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return pt(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => at(this, s)),
      arguments
    );
  },
  find(e, t) {
    return pt(
      this,
      "find",
      e,
      t,
      (n) => at(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return pt(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return pt(
      this,
      "findLast",
      e,
      t,
      (n) => at(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return pt(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return pt(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return gs(this, "includes", e);
  },
  indexOf(...e) {
    return gs(this, "indexOf", e);
  },
  join(e) {
    return Gt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return gs(this, "lastIndexOf", e);
  },
  map(e, t) {
    return pt(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return ln(this, "pop");
  },
  push(...e) {
    return ln(this, "push", e);
  },
  reduce(e, ...t) {
    return co(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return co(this, "reduceRight", e, t);
  },
  shift() {
    return ln(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return pt(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return ln(this, "splice", e);
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
    return ln(this, "unshift", e);
  },
  values() {
    return ps(this, "values", (e) => at(this, e));
  }
};
function ps(e, t, n) {
  const s = ts(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ ze(e) && (o._next = o.next, o.next = () => {
    const i = o._next();
    return i.done || (i.value = n(i.value)), i;
  }), o;
}
const Hl = Array.prototype;
function pt(e, t, n, s, o, i) {
  const l = ts(e), r = l !== e && !/* @__PURE__ */ ze(e), a = l[t];
  if (a !== Hl[t]) {
    const h = a.apply(e, i);
    return r ? Qe(h) : h;
  }
  let u = n;
  l !== e && (r ? u = function(h, y) {
    return n.call(this, at(e, h), y, e);
  } : n.length > 2 && (u = function(h, y) {
    return n.call(this, h, y, e);
  }));
  const c = a.call(l, u, s);
  return r && o ? o(c) : c;
}
function co(e, t, n, s) {
  const o = ts(e), i = o !== e && !/* @__PURE__ */ ze(e);
  let l = n, r = !1;
  o !== e && (i ? (r = s.length === 0, l = function(u, c, h) {
    return r && (r = !1, u = at(e, u)), n.call(this, u, at(e, c), h, e);
  }) : n.length > 3 && (l = function(u, c, h) {
    return n.call(this, u, c, h, e);
  }));
  const a = o[t](l, ...s);
  return r ? at(e, a) : a;
}
function gs(e, t, n) {
  const s = /* @__PURE__ */ ae(e);
  Me(s, "iterate", _n);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ ss(n[0]) ? (n[0] = /* @__PURE__ */ ae(n[0]), s[t](...n)) : o;
}
function ln(e, t, n = []) {
  bt(), Ks();
  const s = (/* @__PURE__ */ ae(e))[t].apply(e, n);
  return Ws(), wt(), s;
}
const Bl = /* @__PURE__ */ Fs("__proto__,__v_isRef,__isVue"), vi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(dt)
);
function jl(e) {
  dt(e) || (e = String(e));
  const t = /* @__PURE__ */ ae(this);
  return Me(t, "has", e), t.hasOwnProperty(e);
}
class mi {
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
      return s === (o ? i ? Xl : wi : i ? bi : _i).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const l = q(t);
    if (!o) {
      let a;
      if (l && (a = Fl[n]))
        return a;
      if (n === "hasOwnProperty")
        return jl;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ be(t) ? t : s
    );
    if ((dt(n) ? vi.has(n) : Bl(n)) || (o || Me(t, "get", n), i))
      return r;
    if (/* @__PURE__ */ be(r)) {
      const a = l && Qn(n) ? r : r.value;
      return o && ce(a) ? /* @__PURE__ */ Cs(a) : a;
    }
    return ce(r) ? o ? /* @__PURE__ */ Cs(r) : /* @__PURE__ */ ns(r) : r;
  }
}
class yi extends mi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let i = t[n];
    const l = q(t) && Qn(n);
    if (!this._isShallow) {
      const u = /* @__PURE__ */ $t(i);
      if (!/* @__PURE__ */ ze(s) && !/* @__PURE__ */ $t(s) && (i = /* @__PURE__ */ ae(i), s = /* @__PURE__ */ ae(s)), !l && /* @__PURE__ */ be(i) && !/* @__PURE__ */ be(s))
        return u || (i.value = s), !0;
    }
    const r = l ? Number(n) < t.length : de(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ be(t) ? t : o
    );
    return t === /* @__PURE__ */ ae(o) && (r ? ut(s, i) && yt(t, "set", n, s) : yt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = de(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && yt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!dt(n) || !vi.has(n)) && Me(t, "has", n), s;
  }
  ownKeys(t) {
    return Me(
      t,
      "iterate",
      q(t) ? "length" : Ht
    ), Reflect.ownKeys(t);
  }
}
class Vl extends mi {
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
const Kl = /* @__PURE__ */ new yi(), Wl = /* @__PURE__ */ new Vl(), Ul = /* @__PURE__ */ new yi(!0);
const Ss = (e) => e, Ln = (e) => Reflect.getPrototypeOf(e);
function zl(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, i = /* @__PURE__ */ ae(o), l = Qt(i), r = e === "entries" || e === Symbol.iterator && l, a = e === "keys" && l, u = o[e](...s), c = n ? Ss : t ? on : Qe;
    return !t && Me(
      i,
      "iterate",
      a ? xs : Ht
    ), we(
      // inheriting all iterator properties
      Object.create(u),
      {
        // iterator protocol
        next() {
          const { value: h, done: y } = u.next();
          return y ? { value: h, done: y } : {
            value: r ? [c(h[0]), c(h[1])] : c(h),
            done: y
          };
        }
      }
    );
  };
}
function Pn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Jl(e, t) {
  const n = {
    get(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ ae(i), r = /* @__PURE__ */ ae(o);
      e || (ut(o, r) && Me(l, "get", o), Me(l, "get", r));
      const { has: a } = Ln(l), u = t ? Ss : e ? on : Qe;
      if (a.call(l, o))
        return u(i.get(o));
      if (a.call(l, r))
        return u(i.get(r));
      i !== l && i.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && Me(/* @__PURE__ */ ae(o), "iterate", Ht), o.size;
    },
    has(o) {
      const i = this.__v_raw, l = /* @__PURE__ */ ae(i), r = /* @__PURE__ */ ae(o);
      return e || (ut(o, r) && Me(l, "has", o), Me(l, "has", r)), o === r ? i.has(o) : i.has(o) || i.has(r);
    },
    forEach(o, i) {
      const l = this, r = l.__v_raw, a = /* @__PURE__ */ ae(r), u = t ? Ss : e ? on : Qe;
      return !e && Me(a, "iterate", Ht), r.forEach((c, h) => o.call(i, u(c), u(h), l));
    }
  };
  return we(
    n,
    e ? {
      add: Pn("add"),
      set: Pn("set"),
      delete: Pn("delete"),
      clear: Pn("clear")
    } : {
      add(o) {
        const i = /* @__PURE__ */ ae(this), l = Ln(i), r = /* @__PURE__ */ ae(o), a = !t && !/* @__PURE__ */ ze(o) && !/* @__PURE__ */ $t(o) ? r : o;
        return l.has.call(i, a) || ut(o, a) && l.has.call(i, o) || ut(r, a) && l.has.call(i, r) || (i.add(a), yt(i, "add", a, a)), this;
      },
      set(o, i) {
        !t && !/* @__PURE__ */ ze(i) && !/* @__PURE__ */ $t(i) && (i = /* @__PURE__ */ ae(i));
        const l = /* @__PURE__ */ ae(this), { has: r, get: a } = Ln(l);
        let u = r.call(l, o);
        u || (o = /* @__PURE__ */ ae(o), u = r.call(l, o));
        const c = a.call(l, o);
        return l.set(o, i), u ? ut(i, c) && yt(l, "set", o, i) : yt(l, "add", o, i), this;
      },
      delete(o) {
        const i = /* @__PURE__ */ ae(this), { has: l, get: r } = Ln(i);
        let a = l.call(i, o);
        a || (o = /* @__PURE__ */ ae(o), a = l.call(i, o)), r && r.call(i, o);
        const u = i.delete(o);
        return a && yt(i, "delete", o, void 0), u;
      },
      clear() {
        const o = /* @__PURE__ */ ae(this), i = o.size !== 0, l = o.clear();
        return i && yt(
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
    n[o] = zl(o, e, t);
  }), n;
}
function Js(e, t) {
  const n = Jl(e, t);
  return (s, o, i) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    de(n, o) && o in s ? n : s,
    o,
    i
  );
}
const Gl = {
  get: /* @__PURE__ */ Js(!1, !1)
}, ql = {
  get: /* @__PURE__ */ Js(!1, !0)
}, Yl = {
  get: /* @__PURE__ */ Js(!0, !1)
};
const _i = /* @__PURE__ */ new WeakMap(), bi = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), Xl = /* @__PURE__ */ new WeakMap();
function Ql(e) {
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
function Zl(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ql($l(e));
}
// @__NO_SIDE_EFFECTS__
function ns(e) {
  return /* @__PURE__ */ $t(e) ? e : Gs(
    e,
    !1,
    Kl,
    Gl,
    _i
  );
}
// @__NO_SIDE_EFFECTS__
function er(e) {
  return Gs(
    e,
    !1,
    Ul,
    ql,
    bi
  );
}
// @__NO_SIDE_EFFECTS__
function Cs(e) {
  return Gs(
    e,
    !0,
    Wl,
    Yl,
    wi
  );
}
function Gs(e, t, n, s, o) {
  if (!ce(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = Zl(e);
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
function Bt(e) {
  return /* @__PURE__ */ $t(e) ? /* @__PURE__ */ Bt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function $t(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ze(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function ss(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ae(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ae(t) : e;
}
function tr(e) {
  return !de(e, "__v_skip") && Object.isExtensible(e) && oi(e, "__v_skip", !0), e;
}
const Qe = (e) => ce(e) ? /* @__PURE__ */ ns(e) : e, on = (e) => ce(e) ? /* @__PURE__ */ Cs(e) : e;
// @__NO_SIDE_EFFECTS__
function be(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function z(e) {
  return nr(e, !1);
}
function nr(e, t) {
  return /* @__PURE__ */ be(e) ? e : new sr(e, t);
}
class sr {
  constructor(t, n) {
    this.dep = new zs(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ae(t), this._value = n ? t : Qe(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ ze(t) || /* @__PURE__ */ $t(t);
    t = s ? t : /* @__PURE__ */ ae(t), ut(t, n) && (this._rawValue = t, this._value = s ? t : Qe(t), this.dep.trigger());
  }
}
function je(e) {
  return /* @__PURE__ */ be(e) ? e.value : e;
}
const or = {
  get: (e, t, n) => t === "__v_raw" ? e : je(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ be(o) && !/* @__PURE__ */ be(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function $i(e) {
  return /* @__PURE__ */ Bt(e) ? e : new Proxy(e, or);
}
class ir {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ ae(t);
    let o = !0, i = t;
    if (!q(t) || !Qn(String(n)))
      do
        o = !/* @__PURE__ */ ss(i) || /* @__PURE__ */ ze(i);
      while (o && (i = i.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = je(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ be(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ be(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return Dl(this._raw, this._key);
  }
}
class lr {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function qs(e, t, n) {
  return /* @__PURE__ */ be(e) ? e : Q(e) ? new lr(e) : ce(e) && arguments.length > 1 ? rr(e, t, n) : /* @__PURE__ */ z(e);
}
function rr(e, t, n) {
  return new ir(e, t, n);
}
class ar {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new zs(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = yn - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    pe !== this)
      return ui(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return hi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function cr(e, t, n = !1) {
  let s, o;
  return Q(e) ? s = e : (s = e.get, o = e.set), new ar(s, o, n);
}
const On = {}, Kn = /* @__PURE__ */ new WeakMap();
let Nt;
function ur(e, t = !1, n = Nt) {
  if (n) {
    let s = Kn.get(n);
    s || Kn.set(n, s = []), s.push(e);
  }
}
function fr(e, t, n = he) {
  const { immediate: s, deep: o, once: i, scheduler: l, augmentJob: r, call: a } = n, u = (A) => o ? A : /* @__PURE__ */ ze(A) || o === !1 || o === 0 ? _t(A, 1) : _t(A);
  let c, h, y, $, F = !1, R = !1;
  if (/* @__PURE__ */ be(e) ? (h = () => e.value, F = /* @__PURE__ */ ze(e)) : /* @__PURE__ */ Bt(e) ? (h = () => u(e), F = !0) : q(e) ? (R = !0, F = e.some((A) => /* @__PURE__ */ Bt(A) || /* @__PURE__ */ ze(A)), h = () => e.map((A) => {
    if (/* @__PURE__ */ be(A))
      return A.value;
    if (/* @__PURE__ */ Bt(A))
      return u(A);
    if (Q(A))
      return a ? a(A, 2) : A();
  })) : Q(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (y) {
      bt();
      try {
        y();
      } finally {
        wt();
      }
    }
    const A = Nt;
    Nt = c;
    try {
      return a ? a(e, 3, [$]) : e($);
    } finally {
      Nt = A;
    }
  } : h = ft, t && o) {
    const A = h, V = o === !0 ? 1 / 0 : o;
    h = () => _t(A(), V);
  }
  const W = Ol(), C = () => {
    c.stop(), W && W.active && Bs(W.effects, c);
  };
  if (i && t) {
    const A = t;
    t = (...V) => {
      A(...V), C();
    };
  }
  let m = R ? new Array(e.length).fill(On) : On;
  const S = (A) => {
    if (!(!(c.flags & 1) || !c.dirty && !A))
      if (t) {
        const V = c.run();
        if (o || F || (R ? V.some((Z, ue) => ut(Z, m[ue])) : ut(V, m))) {
          y && y();
          const Z = Nt;
          Nt = c;
          try {
            const ue = [
              V,
              // pass undefined as the old value when it's changed for the first time
              m === On ? void 0 : R && m[0] === On ? [] : m,
              $
            ];
            m = V, a ? a(t, 3, ue) : (
              // @ts-expect-error
              t(...ue)
            );
          } finally {
            Nt = Z;
          }
        }
      } else
        c.run();
  };
  return r && r(S), c = new ai(h), c.scheduler = l ? () => l(S, !1) : S, $ = (A) => ur(A, !1, c), y = c.onStop = () => {
    const A = Kn.get(c);
    if (A) {
      if (a)
        a(A, 4);
      else
        for (const V of A) V();
      Kn.delete(c);
    }
  }, t ? s ? S(!0) : m = c.run() : l ? l(S.bind(null, !0), !0) : c.run(), C.pause = c.pause.bind(c), C.resume = c.resume.bind(c), C.stop = C, C;
}
function _t(e, t = 1 / 0, n) {
  if (t <= 0 || !ce(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ be(e))
    _t(e.value, t, n);
  else if (q(e))
    for (let s = 0; s < e.length; s++)
      _t(e[s], t, n);
  else if (Zo(e) || Qt(e))
    e.forEach((s) => {
      _t(s, t, n);
    });
  else if (ni(e)) {
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
function Mn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    os(o, t, n);
  }
}
function Ze(e, t, n, s) {
  if (Q(e)) {
    const o = Mn(e, t, n, s);
    return o && ei(o) && o.catch((i) => {
      os(i, t, n);
    }), o;
  }
  if (q(e)) {
    const o = [];
    for (let i = 0; i < e.length; i++)
      o.push(Ze(e[i], t, n, s));
    return o;
  }
}
function os(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: l } = t && t.appContext.config || he;
  if (t) {
    let r = t.parent;
    const a = t.proxy, u = `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; r; ) {
      const c = r.ec;
      if (c) {
        for (let h = 0; h < c.length; h++)
          if (c[h](e, a, u) === !1)
            return;
      }
      r = r.parent;
    }
    if (i) {
      bt(), Mn(i, null, 10, [
        e,
        a,
        u
      ]), wt();
      return;
    }
  }
  dr(e, n, o, s, l);
}
function dr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const Pe = [];
let lt = -1;
const Zt = [];
let St = null, qt = 0;
const ki = /* @__PURE__ */ Promise.resolve();
let Wn = null;
function Ys(e) {
  const t = Wn || ki;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function hr(e) {
  let t = lt + 1, n = Pe.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = Pe[s], i = bn(o);
    i < e || i === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Xs(e) {
  if (!(e.flags & 1)) {
    const t = bn(e), n = Pe[Pe.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= bn(n) ? Pe.push(e) : Pe.splice(hr(t), 0, e), e.flags |= 1, xi();
  }
}
function xi() {
  Wn || (Wn = ki.then(Ci));
}
function pr(e) {
  q(e) ? Zt.push(...e) : St && e.id === -1 ? St.splice(qt + 1, 0, e) : e.flags & 1 || (Zt.push(e), e.flags |= 1), xi();
}
function uo(e, t, n = lt + 1) {
  for (; n < Pe.length; n++) {
    const s = Pe[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      Pe.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Si(e) {
  if (Zt.length) {
    const t = [...new Set(Zt)].sort(
      (n, s) => bn(n) - bn(s)
    );
    if (Zt.length = 0, St) {
      St.push(...t);
      return;
    }
    for (St = t, qt = 0; qt < St.length; qt++) {
      const n = St[qt];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    St = null, qt = 0;
  }
}
const bn = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ci(e) {
  try {
    for (lt = 0; lt < Pe.length; lt++) {
      const t = Pe[lt];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Mn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; lt < Pe.length; lt++) {
      const t = Pe[lt];
      t && (t.flags &= -2);
    }
    lt = -1, Pe.length = 0, Si(), Wn = null, (Pe.length || Zt.length) && Ci();
  }
}
let Ge = null, Ti = null;
function Un(e) {
  const t = Ge;
  return Ge = e, Ti = e && e.type.__scopeId || null, t;
}
function Ei(e, t = Ge, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && Gn(-1);
    const i = Un(t);
    let l;
    try {
      l = e(...o);
    } finally {
      Un(i), s._d && Gn(1);
    }
    return l;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Wt(e, t) {
  if (Ge === null)
    return e;
  const n = cs(Ge), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [i, l, r, a = he] = t[o];
    i && (Q(i) && (i = {
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
function Lt(e, t, n, s) {
  const o = e.dirs, i = t && t.dirs;
  for (let l = 0; l < o.length; l++) {
    const r = o[l];
    i && (r.oldValue = i[l].value);
    let a = r.dir[s];
    a && (bt(), Ze(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), wt());
  }
}
function gr(e, t) {
  if (Ne) {
    let n = Ne.provides;
    const s = Ne.parent && Ne.parent.provides;
    s === n && (n = Ne.provides = Object.create(s)), n[e] = t;
  }
}
function Dn(e, t, n = !1) {
  const s = rl();
  if (s || en) {
    let o = en ? en._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && Q(t) ? t.call(s && s.proxy) : t;
  }
}
const vr = /* @__PURE__ */ Symbol.for("v-scx"), mr = () => Dn(vr);
function Ct(e, t, n) {
  return Mi(e, t, n);
}
function Mi(e, t, n = he) {
  const { immediate: s, deep: o, flush: i, once: l } = n, r = we({}, n), a = t && s || !t && i !== "post";
  let u;
  if (Sn) {
    if (i === "sync") {
      const $ = mr();
      u = $.__watcherHandles || ($.__watcherHandles = []);
    } else if (!a) {
      const $ = () => {
      };
      return $.stop = ft, $.resume = ft, $.pause = ft, $;
    }
  }
  const c = Ne;
  r.call = ($, F, R) => Ze($, c, F, R);
  let h = !1;
  i === "post" ? r.scheduler = ($) => {
    Ee($, c && c.suspense);
  } : i !== "sync" && (h = !0, r.scheduler = ($, F) => {
    F ? $() : Xs($);
  }), r.augmentJob = ($) => {
    t && ($.flags |= 4), h && ($.flags |= 2, c && ($.id = c.uid, $.i = c));
  };
  const y = fr(e, t, r);
  return Sn && (u ? u.push(y) : a && y()), y;
}
function yr(e, t, n) {
  const s = this.proxy, o = ve(e) ? e.includes(".") ? Ai(s, e) : () => s[e] : e.bind(s, s);
  let i;
  Q(t) ? i = t : (i = t.handler, n = t);
  const l = An(this), r = Mi(o, i.bind(s), n);
  return l(), r;
}
function Ai(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ii = /* @__PURE__ */ Symbol("_vte"), Li = (e) => e.__isTeleport, hn = (e) => e && (e.disabled || e.disabled === ""), fo = (e) => e && (e.defer || e.defer === ""), ho = (e) => typeof SVGElement < "u" && e instanceof SVGElement, po = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Ts = (e, t) => {
  const n = e && e.to;
  return ve(n) ? t ? t(n) : null : n;
}, Pi = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, i, l, r, a, u) {
    const {
      mc: c,
      pc: h,
      pbc: y,
      o: { insert: $, querySelector: F, createText: R, createComment: W }
    } = u, C = hn(t.props);
    let { shapeFlag: m, children: S, dynamicChildren: A } = t;
    if (e == null) {
      const V = t.el = R(""), Z = t.anchor = R("");
      $(V, n, s), $(Z, n, s);
      const ue = (L, D) => {
        m & 16 && c(
          S,
          L,
          D,
          o,
          i,
          l,
          r,
          a
        );
      }, se = () => {
        const L = t.target = Ts(t.props, F), D = Es(L, t, R, $);
        L && (l !== "svg" && ho(L) ? l = "svg" : l !== "mathml" && po(L) && (l = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(L), C || (ue(L, D), Fn(t, !1)));
      };
      C && (ue(n, Z), Fn(t, !0)), fo(t.props) ? (t.el.__isMounted = !1, Ee(() => {
        se(), delete t.el.__isMounted;
      }, i)) : se();
    } else {
      if (fo(t.props) && e.el.__isMounted === !1) {
        Ee(() => {
          Pi.process(
            e,
            t,
            n,
            s,
            o,
            i,
            l,
            r,
            a,
            u
          );
        }, i);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const V = t.anchor = e.anchor, Z = t.target = e.target, ue = t.targetAnchor = e.targetAnchor, se = hn(e.props), L = se ? n : Z, D = se ? V : ue;
      if (l === "svg" || ho(Z) ? l = "svg" : (l === "mathml" || po(Z)) && (l = "mathml"), A ? (y(
        e.dynamicChildren,
        A,
        L,
        o,
        i,
        l,
        r
      ), eo(e, t, !0)) : a || h(
        e,
        t,
        L,
        D,
        o,
        i,
        l,
        r,
        !1
      ), C)
        se ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Rn(
          t,
          n,
          V,
          u,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const f = t.target = Ts(
          t.props,
          F
        );
        f && Rn(
          t,
          f,
          null,
          u,
          0
        );
      } else se && Rn(
        t,
        Z,
        ue,
        u,
        1
      );
      Fn(t, C);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, i) {
    const {
      shapeFlag: l,
      children: r,
      anchor: a,
      targetStart: u,
      targetAnchor: c,
      target: h,
      props: y
    } = e;
    if (h && (o(u), o(c)), i && o(a), l & 16) {
      const $ = i || !hn(y);
      for (let F = 0; F < r.length; F++) {
        const R = r[F];
        s(
          R,
          t,
          n,
          $,
          !!R.dynamicChildren
        );
      }
    }
  },
  move: Rn,
  hydrate: _r
};
function Rn(e, t, n, { o: { insert: s }, m: o }, i = 2) {
  i === 0 && s(e.targetAnchor, t, n);
  const { el: l, anchor: r, shapeFlag: a, children: u, props: c } = e, h = i === 2;
  if (h && s(l, t, n), (!h || hn(c)) && a & 16)
    for (let y = 0; y < u.length; y++)
      o(
        u[y],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function _r(e, t, n, s, o, i, {
  o: { nextSibling: l, parentNode: r, querySelector: a, insert: u, createText: c }
}, h) {
  function y(W, C) {
    let m = C;
    for (; m; ) {
      if (m && m.nodeType === 8) {
        if (m.data === "teleport start anchor")
          t.targetStart = m;
        else if (m.data === "teleport anchor") {
          t.targetAnchor = m, W._lpa = t.targetAnchor && l(t.targetAnchor);
          break;
        }
      }
      m = l(m);
    }
  }
  function $(W, C) {
    C.anchor = h(
      l(W),
      C,
      r(W),
      n,
      s,
      o,
      i
    );
  }
  const F = t.target = Ts(
    t.props,
    a
  ), R = hn(t.props);
  if (F) {
    const W = F._lpa || F.firstChild;
    t.shapeFlag & 16 && (R ? ($(e, t), y(F, W), t.targetAnchor || Es(
      F,
      t,
      c,
      u,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === F ? e : null
    )) : (t.anchor = l(e), y(F, W), t.targetAnchor || Es(F, t, c, u), h(
      W && l(W),
      t,
      F,
      n,
      s,
      o,
      i
    ))), Fn(t, R);
  } else R && t.shapeFlag & 16 && ($(e, t), t.targetStart = e, t.targetAnchor = l(e));
  return t.anchor && l(t.anchor);
}
const Mt = Pi;
function Fn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Es(e, t, n, s, o = null) {
  const i = t.targetStart = n(""), l = t.targetAnchor = n("");
  return i[Ii] = l, e && (s(i, e, o), s(l, e, o)), l;
}
const rt = /* @__PURE__ */ Symbol("_leaveCb"), rn = /* @__PURE__ */ Symbol("_enterCb");
function br() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return $n(() => {
    e.isMounted = !0;
  }), ji(() => {
    e.isUnmounting = !0;
  }), e;
}
const Je = [Function, Array], Oi = {
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
}, Ri = (e) => {
  const t = e.subTree;
  return t.component ? Ri(t.component) : t;
}, wr = {
  name: "BaseTransition",
  props: Oi,
  setup(e, { slots: t }) {
    const n = rl(), s = br();
    return () => {
      const o = t.default && Fi(t.default(), !0);
      if (!o || !o.length)
        return;
      const i = Ni(o), l = /* @__PURE__ */ ae(e), { mode: r } = l;
      if (s.isLeaving)
        return vs(i);
      const a = go(i);
      if (!a)
        return vs(i);
      let u = Ms(
        a,
        l,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => u = h
      );
      a.type !== Oe && wn(a, u);
      let c = n.subTree && go(n.subTree);
      if (c && c.type !== Oe && !Dt(c, a) && Ri(n).type !== Oe) {
        let h = Ms(
          c,
          l,
          s,
          n
        );
        if (wn(c, h), r === "out-in" && a.type !== Oe)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, c = void 0;
          }, vs(i);
        r === "in-out" && a.type !== Oe ? h.delayLeave = (y, $, F) => {
          const R = Di(
            s,
            c
          );
          R[String(c.key)] = c, y[rt] = () => {
            $(), y[rt] = void 0, delete u.delayedLeave, c = void 0;
          }, u.delayedLeave = () => {
            F(), delete u.delayedLeave, c = void 0;
          };
        } : c = void 0;
      } else c && (c = void 0);
      return i;
    };
  }
};
function Ni(e) {
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
const $r = wr;
function Di(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Ms(e, t, n, s, o) {
  const {
    appear: i,
    mode: l,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: u,
    onAfterEnter: c,
    onEnterCancelled: h,
    onBeforeLeave: y,
    onLeave: $,
    onAfterLeave: F,
    onLeaveCancelled: R,
    onBeforeAppear: W,
    onAppear: C,
    onAfterAppear: m,
    onAppearCancelled: S
  } = t, A = String(e.key), V = Di(n, e), Z = (L, D) => {
    L && Ze(
      L,
      s,
      9,
      D
    );
  }, ue = (L, D) => {
    const f = D[1];
    Z(L, D), q(L) ? L.every((k) => k.length <= 1) && f() : L.length <= 1 && f();
  }, se = {
    mode: l,
    persisted: r,
    beforeEnter(L) {
      let D = a;
      if (!n.isMounted)
        if (i)
          D = W || a;
        else
          return;
      L[rt] && L[rt](
        !0
        /* cancelled */
      );
      const f = V[A];
      f && Dt(e, f) && f.el[rt] && f.el[rt](), Z(D, [L]);
    },
    enter(L) {
      if (V[A] === e) return;
      let D = u, f = c, k = h;
      if (!n.isMounted)
        if (i)
          D = C || u, f = m || c, k = S || h;
        else
          return;
      let j = !1;
      L[rn] = (re) => {
        j || (j = !0, re ? Z(k, [L]) : Z(f, [L]), se.delayedLeave && se.delayedLeave(), L[rn] = void 0);
      };
      const G = L[rn].bind(null, !1);
      D ? ue(D, [L, G]) : G();
    },
    leave(L, D) {
      const f = String(e.key);
      if (L[rn] && L[rn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return D();
      Z(y, [L]);
      let k = !1;
      L[rt] = (G) => {
        k || (k = !0, D(), G ? Z(R, [L]) : Z(F, [L]), L[rt] = void 0, V[f] === e && delete V[f]);
      };
      const j = L[rt].bind(null, !1);
      V[f] = e, $ ? ue($, [L, j]) : j();
    },
    clone(L) {
      const D = Ms(
        L,
        t,
        n,
        s,
        o
      );
      return o && o(D), D;
    }
  };
  return se;
}
function vs(e) {
  if (is(e))
    return e = Tt(e), e.children = null, e;
}
function go(e) {
  if (!is(e))
    return Li(e.type) && e.children ? Ni(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && Q(n.default))
      return n.default();
  }
}
function wn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, wn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function Fi(e, t = !1, n) {
  let s = [], o = 0;
  for (let i = 0; i < e.length; i++) {
    let l = e[i];
    const r = n == null ? l.key : String(n) + String(l.key != null ? l.key : i);
    l.type === te ? (l.patchFlag & 128 && o++, s = s.concat(
      Fi(l.children, t, r)
    )) : (t || l.type !== Oe) && s.push(r != null ? Tt(l, { key: r }) : l);
  }
  if (o > 1)
    for (let i = 0; i < s.length; i++)
      s[i].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function et(e, t) {
  return Q(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    we({ name: e.name }, t, { setup: e })
  ) : e;
}
function Hi(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function vo(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const zn = /* @__PURE__ */ new WeakMap();
function pn(e, t, n, s, o = !1) {
  if (q(e)) {
    e.forEach(
      (R, W) => pn(
        R,
        t && (q(t) ? t[W] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (gn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && pn(e, t, n, s.component.subTree);
    return;
  }
  const i = s.shapeFlag & 4 ? cs(s.component) : s.el, l = o ? null : i, { i: r, r: a } = e, u = t && t.r, c = r.refs === he ? r.refs = {} : r.refs, h = r.setupState, y = /* @__PURE__ */ ae(h), $ = h === he ? Qo : (R) => vo(c, R) ? !1 : de(y, R), F = (R, W) => !(W && vo(c, W));
  if (u != null && u !== a) {
    if (mo(t), ve(u))
      c[u] = null, $(u) && (h[u] = null);
    else if (/* @__PURE__ */ be(u)) {
      const R = t;
      F(u, R.k) && (u.value = null), R.k && (c[R.k] = null);
    }
  }
  if (Q(a))
    Mn(a, r, 12, [l, c]);
  else {
    const R = ve(a), W = /* @__PURE__ */ be(a);
    if (R || W) {
      const C = () => {
        if (e.f) {
          const m = R ? $(a) ? h[a] : c[a] : F() || !e.k ? a.value : c[e.k];
          if (o)
            q(m) && Bs(m, i);
          else if (q(m))
            m.includes(i) || m.push(i);
          else if (R)
            c[a] = [i], $(a) && (h[a] = c[a]);
          else {
            const S = [i];
            F(a, e.k) && (a.value = S), e.k && (c[e.k] = S);
          }
        } else R ? (c[a] = l, $(a) && (h[a] = l)) : W && (F(a, e.k) && (a.value = l), e.k && (c[e.k] = l));
      };
      if (l) {
        const m = () => {
          C(), zn.delete(e);
        };
        m.id = -1, zn.set(e, m), Ee(m, n);
      } else
        mo(e), C();
    }
  }
}
function mo(e) {
  const t = zn.get(e);
  t && (t.flags |= 8, zn.delete(e));
}
es().requestIdleCallback;
es().cancelIdleCallback;
const gn = (e) => !!e.type.__asyncLoader, is = (e) => e.type.__isKeepAlive;
function kr(e, t) {
  Bi(e, "a", t);
}
function xr(e, t) {
  Bi(e, "da", t);
}
function Bi(e, t, n = Ne) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (ls(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      is(o.parent.vnode) && Sr(s, t, n, o), o = o.parent;
  }
}
function Sr(e, t, n, s) {
  const o = ls(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  kn(() => {
    Bs(s[t], o);
  }, n);
}
function ls(e, t, n = Ne, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), i = t.__weh || (t.__weh = (...l) => {
      bt();
      const r = An(n), a = Ze(t, n, e, l);
      return r(), wt(), a;
    });
    return s ? o.unshift(i) : o.push(i), i;
  }
}
const kt = (e) => (t, n = Ne) => {
  (!Sn || e === "sp") && ls(e, (...s) => t(...s), n);
}, Cr = kt("bm"), $n = kt("m"), Tr = kt(
  "bu"
), Er = kt("u"), ji = kt(
  "bum"
), kn = kt("um"), Mr = kt(
  "sp"
), Ar = kt("rtg"), Ir = kt("rtc");
function Lr(e, t = Ne) {
  ls("ec", e, t);
}
const Pr = /* @__PURE__ */ Symbol.for("v-ndc");
function Ve(e, t, n, s) {
  let o;
  const i = n, l = q(e);
  if (l || ve(e)) {
    const r = l && /* @__PURE__ */ Bt(e);
    let a = !1, u = !1;
    r && (a = !/* @__PURE__ */ ze(e), u = /* @__PURE__ */ $t(e), e = ts(e)), o = new Array(e.length);
    for (let c = 0, h = e.length; c < h; c++)
      o[c] = t(
        a ? u ? on(Qe(e[c])) : Qe(e[c]) : e[c],
        c,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, i);
  } else if (ce(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (r, a) => t(r, a, void 0, i)
      );
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let a = 0, u = r.length; a < u; a++) {
        const c = r[a];
        o[a] = t(e[c], c, a, i);
      }
    }
  else
    o = [];
  return o;
}
const As = (e) => e ? al(e) ? cs(e) : As(e.parent) : null, vn = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ we(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => As(e.parent),
    $root: (e) => As(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ki(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Xs(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ys.bind(e.proxy)),
    $watch: (e) => yr.bind(e)
  })
), ms = (e, t) => e !== he && !e.__isScriptSetup && de(e, t), Or = {
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
        if (ms(s, t))
          return l[t] = 1, s[t];
        if (o !== he && de(o, t))
          return l[t] = 2, o[t];
        if (de(i, t))
          return l[t] = 3, i[t];
        if (n !== he && de(n, t))
          return l[t] = 4, n[t];
        Is && (l[t] = 0);
      }
    }
    const u = vn[t];
    let c, h;
    if (u)
      return t === "$attrs" && Me(e.attrs, "get", ""), u(e);
    if (
      // css module (injected by vue-loader)
      (c = r.__cssModules) && (c = c[t])
    )
      return c;
    if (n !== he && de(n, t))
      return l[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, de(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: i } = e;
    return ms(o, t) ? (o[t] = n, !0) : s !== he && de(s, t) ? (s[t] = n, !0) : de(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (i[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: i, type: l }
  }, r) {
    let a;
    return !!(n[r] || e !== he && r[0] !== "$" && de(e, r) || ms(t, r) || de(i, r) || de(s, r) || de(vn, r) || de(o.config.globalProperties, r) || (a = l.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : de(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function yo(e) {
  return q(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Is = !0;
function Rr(e) {
  const t = Ki(e), n = e.proxy, s = e.ctx;
  Is = !1, t.beforeCreate && _o(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: i,
    methods: l,
    watch: r,
    provide: a,
    inject: u,
    // lifecycle
    created: c,
    beforeMount: h,
    mounted: y,
    beforeUpdate: $,
    updated: F,
    activated: R,
    deactivated: W,
    beforeDestroy: C,
    beforeUnmount: m,
    destroyed: S,
    unmounted: A,
    render: V,
    renderTracked: Z,
    renderTriggered: ue,
    errorCaptured: se,
    serverPrefetch: L,
    // public API
    expose: D,
    inheritAttrs: f,
    // assets
    components: k,
    directives: j,
    filters: G
  } = t;
  if (u && Nr(u, s, null), l)
    for (const fe in l) {
      const K = l[fe];
      Q(K) && (s[fe] = K.bind(n));
    }
  if (o) {
    const fe = o.call(n, n);
    ce(fe) && (e.data = /* @__PURE__ */ ns(fe));
  }
  if (Is = !0, i)
    for (const fe in i) {
      const K = i[fe], J = Q(K) ? K.bind(n, n) : Q(K.get) ? K.get.bind(n, n) : ft, me = !Q(K) && Q(K.set) ? K.set.bind(n) : ft, Ke = Y({
        get: J,
        set: me
      });
      Object.defineProperty(s, fe, {
        enumerable: !0,
        configurable: !0,
        get: () => Ke.value,
        set: (Ae) => Ke.value = Ae
      });
    }
  if (r)
    for (const fe in r)
      Vi(r[fe], s, n, fe);
  if (a) {
    const fe = Q(a) ? a.call(n) : a;
    Reflect.ownKeys(fe).forEach((K) => {
      gr(K, fe[K]);
    });
  }
  c && _o(c, e, "c");
  function oe(fe, K) {
    q(K) ? K.forEach((J) => fe(J.bind(n))) : K && fe(K.bind(n));
  }
  if (oe(Cr, h), oe($n, y), oe(Tr, $), oe(Er, F), oe(kr, R), oe(xr, W), oe(Lr, se), oe(Ir, Z), oe(Ar, ue), oe(ji, m), oe(kn, A), oe(Mr, L), q(D))
    if (D.length) {
      const fe = e.exposed || (e.exposed = {});
      D.forEach((K) => {
        Object.defineProperty(fe, K, {
          get: () => n[K],
          set: (J) => n[K] = J,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === ft && (e.render = V), f != null && (e.inheritAttrs = f), k && (e.components = k), j && (e.directives = j), L && Hi(e);
}
function Nr(e, t, n = ft) {
  q(e) && (e = Ls(e));
  for (const s in e) {
    const o = e[s];
    let i;
    ce(o) ? "default" in o ? i = Dn(
      o.from || s,
      o.default,
      !0
    ) : i = Dn(o.from || s) : i = Dn(o), /* @__PURE__ */ be(i) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (l) => i.value = l
    }) : t[s] = i;
  }
}
function _o(e, t, n) {
  Ze(
    q(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function Vi(e, t, n, s) {
  let o = s.includes(".") ? Ai(n, s) : () => n[s];
  if (ve(e)) {
    const i = t[e];
    Q(i) && Ct(o, i);
  } else if (Q(e))
    Ct(o, e.bind(n));
  else if (ce(e))
    if (q(e))
      e.forEach((i) => Vi(i, t, n, s));
    else {
      const i = Q(e.handler) ? e.handler.bind(n) : t[e.handler];
      Q(i) && Ct(o, i, e);
    }
}
function Ki(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: i,
    config: { optionMergeStrategies: l }
  } = e.appContext, r = i.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (u) => Jn(a, u, l, !0)
  ), Jn(a, t, l)), ce(t) && i.set(t, a), a;
}
function Jn(e, t, n, s = !1) {
  const { mixins: o, extends: i } = t;
  i && Jn(e, i, n, !0), o && o.forEach(
    (l) => Jn(e, l, n, !0)
  );
  for (const l in t)
    if (!(s && l === "expose")) {
      const r = Dr[l] || n && n[l];
      e[l] = r ? r(e[l], t[l]) : t[l];
    }
  return e;
}
const Dr = {
  data: bo,
  props: wo,
  emits: wo,
  // objects
  methods: cn,
  computed: cn,
  // lifecycle
  beforeCreate: Le,
  created: Le,
  beforeMount: Le,
  mounted: Le,
  beforeUpdate: Le,
  updated: Le,
  beforeDestroy: Le,
  beforeUnmount: Le,
  destroyed: Le,
  unmounted: Le,
  activated: Le,
  deactivated: Le,
  errorCaptured: Le,
  serverPrefetch: Le,
  // assets
  components: cn,
  directives: cn,
  // watch
  watch: Hr,
  // provide / inject
  provide: bo,
  inject: Fr
};
function bo(e, t) {
  return t ? e ? function() {
    return we(
      Q(e) ? e.call(this, this) : e,
      Q(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fr(e, t) {
  return cn(Ls(e), Ls(t));
}
function Ls(e) {
  if (q(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Le(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function cn(e, t) {
  return e ? we(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function wo(e, t) {
  return e ? q(e) && q(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : we(
    /* @__PURE__ */ Object.create(null),
    yo(e),
    yo(t ?? {})
  ) : t;
}
function Hr(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = we(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Le(e[s], t[s]);
  return n;
}
function Wi() {
  return {
    app: null,
    config: {
      isNativeTag: Qo,
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
let Br = 0;
function jr(e, t) {
  return function(s, o = null) {
    Q(s) || (s = we({}, s)), o != null && !ce(o) && (o = null);
    const i = Wi(), l = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const u = i.app = {
      _uid: Br++,
      _component: s,
      _props: o,
      _container: null,
      _context: i,
      _instance: null,
      version: _a,
      get config() {
        return i.config;
      },
      set config(c) {
      },
      use(c, ...h) {
        return l.has(c) || (c && Q(c.install) ? (l.add(c), c.install(u, ...h)) : Q(c) && (l.add(c), c(u, ...h))), u;
      },
      mixin(c) {
        return i.mixins.includes(c) || i.mixins.push(c), u;
      },
      component(c, h) {
        return h ? (i.components[c] = h, u) : i.components[c];
      },
      directive(c, h) {
        return h ? (i.directives[c] = h, u) : i.directives[c];
      },
      mount(c, h, y) {
        if (!a) {
          const $ = u._ceVNode || _e(s, o);
          return $.appContext = i, y === !0 ? y = "svg" : y === !1 && (y = void 0), e($, c, y), a = !0, u._container = c, c.__vue_app__ = u, cs($.component);
        }
      },
      onUnmount(c) {
        r.push(c);
      },
      unmount() {
        a && (Ze(
          r,
          u._instance,
          16
        ), e(null, u._container), delete u._container.__vue_app__);
      },
      provide(c, h) {
        return i.provides[c] = h, u;
      },
      runWithContext(c) {
        const h = en;
        en = u;
        try {
          return c();
        } finally {
          en = h;
        }
      }
    };
    return u;
  };
}
let en = null;
const Vr = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ye(t)}Modifiers`] || e[`${Et(t)}Modifiers`];
function Kr(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || he;
  let o = n;
  const i = t.startsWith("update:"), l = i && Vr(s, t.slice(7));
  l && (l.trim && (o = n.map((c) => ve(c) ? c.trim() : c)), l.number && (o = n.map(js)));
  let r, a = s[r = fs(t)] || // also try camelCase event handler (#2249)
  s[r = fs(Ye(t))];
  !a && i && (a = s[r = fs(Et(t))]), a && Ze(
    a,
    e,
    6,
    o
  );
  const u = s[r + "Once"];
  if (u) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[r])
      return;
    e.emitted[r] = !0, Ze(
      u,
      e,
      6,
      o
    );
  }
}
const Wr = /* @__PURE__ */ new WeakMap();
function Ui(e, t, n = !1) {
  const s = n ? Wr : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const i = e.emits;
  let l = {}, r = !1;
  if (!Q(e)) {
    const a = (u) => {
      const c = Ui(u, t, !0);
      c && (r = !0, we(l, c));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !r ? (ce(e) && s.set(e, null), null) : (q(i) ? i.forEach((a) => l[a] = null) : we(l, i), ce(e) && s.set(e, l), l);
}
function rs(e, t) {
  return !e || !Xn(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), de(e, t[0].toLowerCase() + t.slice(1)) || de(e, Et(t)) || de(e, t));
}
function $o(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [i],
    slots: l,
    attrs: r,
    emit: a,
    render: u,
    renderCache: c,
    props: h,
    data: y,
    setupState: $,
    ctx: F,
    inheritAttrs: R
  } = e, W = Un(e);
  let C, m;
  try {
    if (n.shapeFlag & 4) {
      const A = o || s, V = A;
      C = ct(
        u.call(
          V,
          A,
          c,
          h,
          $,
          y,
          F
        )
      ), m = r;
    } else {
      const A = t;
      C = ct(
        A.length > 1 ? A(
          h,
          { attrs: r, slots: l, emit: a }
        ) : A(
          h,
          null
        )
      ), m = t.props ? r : Ur(r);
    }
  } catch (A) {
    mn.length = 0, os(A, e, 1), C = _e(Oe);
  }
  let S = C;
  if (m && R !== !1) {
    const A = Object.keys(m), { shapeFlag: V } = S;
    A.length && V & 7 && (i && A.some(Hs) && (m = zr(
      m,
      i
    )), S = Tt(S, m, !1, !0));
  }
  return n.dirs && (S = Tt(S, null, !1, !0), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && wn(S, n.transition), C = S, Un(W), C;
}
const Ur = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xn(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, zr = (e, t) => {
  const n = {};
  for (const s in e)
    (!Hs(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function Jr(e, t, n) {
  const { props: s, children: o, component: i } = e, { props: l, children: r, patchFlag: a } = t, u = i.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? ko(s, l, u) : !!l;
    if (a & 8) {
      const c = t.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        const y = c[h];
        if (zi(l, s, y) && !rs(u, y))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === l ? !1 : s ? l ? ko(s, l, u) : !0 : !!l;
  return !1;
}
function ko(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const i = s[o];
    if (zi(t, e, i) && !rs(n, i))
      return !0;
  }
  return !1;
}
function zi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ce(s) && ce(o) ? !Vs(s, o) : s !== o;
}
function Gr({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Ji = {}, Gi = () => Object.create(Ji), qi = (e) => Object.getPrototypeOf(e) === Ji;
function qr(e, t, n, s = !1) {
  const o = {}, i = Gi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Yi(e, t, o, i);
  for (const l in e.propsOptions[0])
    l in o || (o[l] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ er(o) : e.type.props ? e.props = o : e.props = i, e.attrs = i;
}
function Yr(e, t, n, s) {
  const {
    props: o,
    attrs: i,
    vnode: { patchFlag: l }
  } = e, r = /* @__PURE__ */ ae(o), [a] = e.propsOptions;
  let u = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || l > 0) && !(l & 16)
  ) {
    if (l & 8) {
      const c = e.vnode.dynamicProps;
      for (let h = 0; h < c.length; h++) {
        let y = c[h];
        if (rs(e.emitsOptions, y))
          continue;
        const $ = t[y];
        if (a)
          if (de(i, y))
            $ !== i[y] && (i[y] = $, u = !0);
          else {
            const F = Ye(y);
            o[F] = Ps(
              a,
              r,
              F,
              $,
              e,
              !1
            );
          }
        else
          $ !== i[y] && (i[y] = $, u = !0);
      }
    }
  } else {
    Yi(e, t, o, i) && (u = !0);
    let c;
    for (const h in r)
      (!t || // for camelCase
      !de(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((c = Et(h)) === h || !de(t, c))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[c] !== void 0) && (o[h] = Ps(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (i !== r)
      for (const h in i)
        (!t || !de(t, h)) && (delete i[h], u = !0);
  }
  u && yt(e.attrs, "set", "");
}
function Yi(e, t, n, s) {
  const [o, i] = e.propsOptions;
  let l = !1, r;
  if (t)
    for (let a in t) {
      if (un(a))
        continue;
      const u = t[a];
      let c;
      o && de(o, c = Ye(a)) ? !i || !i.includes(c) ? n[c] = u : (r || (r = {}))[c] = u : rs(e.emitsOptions, a) || (!(a in s) || u !== s[a]) && (s[a] = u, l = !0);
    }
  if (i) {
    const a = /* @__PURE__ */ ae(n), u = r || he;
    for (let c = 0; c < i.length; c++) {
      const h = i[c];
      n[h] = Ps(
        o,
        a,
        h,
        u[h],
        e,
        !de(u, h)
      );
    }
  }
  return l;
}
function Ps(e, t, n, s, o, i) {
  const l = e[n];
  if (l != null) {
    const r = de(l, "default");
    if (r && s === void 0) {
      const a = l.default;
      if (l.type !== Function && !l.skipFactory && Q(a)) {
        const { propsDefaults: u } = o;
        if (n in u)
          s = u[n];
        else {
          const c = An(o);
          s = u[n] = a.call(
            null,
            t
          ), c();
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
    ] && (s === "" || s === Et(n)) && (s = !0));
  }
  return s;
}
const Xr = /* @__PURE__ */ new WeakMap();
function Xi(e, t, n = !1) {
  const s = n ? Xr : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const i = e.props, l = {}, r = [];
  let a = !1;
  if (!Q(e)) {
    const c = (h) => {
      a = !0;
      const [y, $] = Xi(h, t, !0);
      we(l, y), $ && r.push(...$);
    };
    !n && t.mixins.length && t.mixins.forEach(c), e.extends && c(e.extends), e.mixins && e.mixins.forEach(c);
  }
  if (!i && !a)
    return ce(e) && s.set(e, Xt), Xt;
  if (q(i))
    for (let c = 0; c < i.length; c++) {
      const h = Ye(i[c]);
      xo(h) && (l[h] = he);
    }
  else if (i)
    for (const c in i) {
      const h = Ye(c);
      if (xo(h)) {
        const y = i[c], $ = l[h] = q(y) || Q(y) ? { type: y } : we({}, y), F = $.type;
        let R = !1, W = !0;
        if (q(F))
          for (let C = 0; C < F.length; ++C) {
            const m = F[C], S = Q(m) && m.name;
            if (S === "Boolean") {
              R = !0;
              break;
            } else S === "String" && (W = !1);
          }
        else
          R = Q(F) && F.name === "Boolean";
        $[
          0
          /* shouldCast */
        ] = R, $[
          1
          /* shouldCastTrue */
        ] = W, (R || de($, "default")) && r.push(h);
      }
    }
  const u = [l, r];
  return ce(e) && s.set(e, u), u;
}
function xo(e) {
  return e[0] !== "$" && !un(e);
}
const Qs = (e) => e === "_" || e === "_ctx" || e === "$stable", Zs = (e) => q(e) ? e.map(ct) : [ct(e)], Qr = (e, t, n) => {
  if (t._n)
    return t;
  const s = Ei((...o) => Zs(t(...o)), n);
  return s._c = !1, s;
}, Qi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (Qs(o)) continue;
    const i = e[o];
    if (Q(i))
      t[o] = Qr(o, i, s);
    else if (i != null) {
      const l = Zs(i);
      t[o] = () => l;
    }
  }
}, Zi = (e, t) => {
  const n = Zs(t);
  e.slots.default = () => n;
}, el = (e, t, n) => {
  for (const s in t)
    (n || !Qs(s)) && (e[s] = t[s]);
}, Zr = (e, t, n) => {
  const s = e.slots = Gi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (el(s, t, n), n && oi(s, "_", o, !0)) : Qi(t, s);
  } else t && Zi(e, t);
}, ea = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let i = !0, l = he;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? i = !1 : el(o, t, n) : (i = !t.$stable, Qi(t, o)), l = t;
  } else t && (Zi(e, t), l = { default: 1 });
  if (i)
    for (const r in o)
      !Qs(r) && l[r] == null && delete o[r];
}, Ee = ia;
function ta(e) {
  return na(e);
}
function na(e, t) {
  const n = es();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: i,
    createElement: l,
    createText: r,
    createComment: a,
    setText: u,
    setElementText: c,
    parentNode: h,
    nextSibling: y,
    setScopeId: $ = ft,
    insertStaticContent: F
  } = e, R = (d, v, b, M = null, T = null, E = null, H = void 0, N = null, P = !!v.dynamicChildren) => {
    if (d === v)
      return;
    d && !Dt(d, v) && (M = We(d), Ae(d, T, E, !0), d = null), v.patchFlag === -2 && (P = !1, v.dynamicChildren = null);
    const { type: g, ref: w, shapeFlag: _ } = v;
    switch (g) {
      case as:
        W(d, v, b, M);
        break;
      case Oe:
        C(d, v, b, M);
        break;
      case Hn:
        d == null && m(v, b, M, H);
        break;
      case te:
        k(
          d,
          v,
          b,
          M,
          T,
          E,
          H,
          N,
          P
        );
        break;
      default:
        _ & 1 ? V(
          d,
          v,
          b,
          M,
          T,
          E,
          H,
          N,
          P
        ) : _ & 6 ? j(
          d,
          v,
          b,
          M,
          T,
          E,
          H,
          N,
          P
        ) : (_ & 64 || _ & 128) && g.process(
          d,
          v,
          b,
          M,
          T,
          E,
          H,
          N,
          P,
          st
        );
    }
    w != null && T ? pn(w, d && d.ref, E, v || d, !v) : w == null && d && d.ref != null && pn(d.ref, null, E, d, !0);
  }, W = (d, v, b, M) => {
    if (d == null)
      s(
        v.el = r(v.children),
        b,
        M
      );
    else {
      const T = v.el = d.el;
      v.children !== d.children && u(T, v.children);
    }
  }, C = (d, v, b, M) => {
    d == null ? s(
      v.el = a(v.children || ""),
      b,
      M
    ) : v.el = d.el;
  }, m = (d, v, b, M) => {
    [d.el, d.anchor] = F(
      d.children,
      v,
      b,
      M,
      d.el,
      d.anchor
    );
  }, S = ({ el: d, anchor: v }, b, M) => {
    let T;
    for (; d && d !== v; )
      T = y(d), s(d, b, M), d = T;
    s(v, b, M);
  }, A = ({ el: d, anchor: v }) => {
    let b;
    for (; d && d !== v; )
      b = y(d), o(d), d = b;
    o(v);
  }, V = (d, v, b, M, T, E, H, N, P) => {
    if (v.type === "svg" ? H = "svg" : v.type === "math" && (H = "mathml"), d == null)
      Z(
        v,
        b,
        M,
        T,
        E,
        H,
        N,
        P
      );
    else {
      const g = d.el && d.el._isVueCE ? d.el : null;
      try {
        g && g._beginPatch(), L(
          d,
          v,
          T,
          E,
          H,
          N,
          P
        );
      } finally {
        g && g._endPatch();
      }
    }
  }, Z = (d, v, b, M, T, E, H, N) => {
    let P, g;
    const { props: w, shapeFlag: _, transition: O, dirs: B } = d;
    if (P = d.el = l(
      d.type,
      E,
      w && w.is,
      w
    ), _ & 8 ? c(P, d.children) : _ & 16 && se(
      d.children,
      P,
      null,
      M,
      T,
      ys(d, E),
      H,
      N
    ), B && Lt(d, null, M, "created"), ue(P, d, d.scopeId, H, M), w) {
      for (const ee in w)
        ee !== "value" && !un(ee) && i(P, ee, null, w[ee], E, M);
      "value" in w && i(P, "value", null, w.value, E), (g = w.onVnodeBeforeMount) && it(g, M, d);
    }
    B && Lt(d, null, M, "beforeMount");
    const X = sa(T, O);
    X && O.beforeEnter(P), s(P, v, b), ((g = w && w.onVnodeMounted) || X || B) && Ee(() => {
      g && it(g, M, d), X && O.enter(P), B && Lt(d, null, M, "mounted");
    }, T);
  }, ue = (d, v, b, M, T) => {
    if (b && $(d, b), M)
      for (let E = 0; E < M.length; E++)
        $(d, M[E]);
    if (T) {
      let E = T.subTree;
      if (v === E || sl(E.type) && (E.ssContent === v || E.ssFallback === v)) {
        const H = T.vnode;
        ue(
          d,
          H,
          H.scopeId,
          H.slotScopeIds,
          T.parent
        );
      }
    }
  }, se = (d, v, b, M, T, E, H, N, P = 0) => {
    for (let g = P; g < d.length; g++) {
      const w = d[g] = N ? mt(d[g]) : ct(d[g]);
      R(
        null,
        w,
        v,
        b,
        M,
        T,
        E,
        H,
        N
      );
    }
  }, L = (d, v, b, M, T, E, H) => {
    const N = v.el = d.el;
    let { patchFlag: P, dynamicChildren: g, dirs: w } = v;
    P |= d.patchFlag & 16;
    const _ = d.props || he, O = v.props || he;
    let B;
    if (b && Pt(b, !1), (B = O.onVnodeBeforeUpdate) && it(B, b, v, d), w && Lt(v, d, b, "beforeUpdate"), b && Pt(b, !0), (_.innerHTML && O.innerHTML == null || _.textContent && O.textContent == null) && c(N, ""), g ? D(
      d.dynamicChildren,
      g,
      N,
      b,
      M,
      ys(v, T),
      E
    ) : H || K(
      d,
      v,
      N,
      null,
      b,
      M,
      ys(v, T),
      E,
      !1
    ), P > 0) {
      if (P & 16)
        f(N, _, O, b, T);
      else if (P & 2 && _.class !== O.class && i(N, "class", null, O.class, T), P & 4 && i(N, "style", _.style, O.style, T), P & 8) {
        const X = v.dynamicProps;
        for (let ee = 0; ee < X.length; ee++) {
          const ie = X[ee], Se = _[ie], ke = O[ie];
          (ke !== Se || ie === "value") && i(N, ie, Se, ke, T, b);
        }
      }
      P & 1 && d.children !== v.children && c(N, v.children);
    } else !H && g == null && f(N, _, O, b, T);
    ((B = O.onVnodeUpdated) || w) && Ee(() => {
      B && it(B, b, v, d), w && Lt(v, d, b, "updated");
    }, M);
  }, D = (d, v, b, M, T, E, H) => {
    for (let N = 0; N < v.length; N++) {
      const P = d[N], g = v[N], w = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        P.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (P.type === te || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Dt(P, g) || // - In the case of a component, it could contain anything.
        P.shapeFlag & 198) ? h(P.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          b
        )
      );
      R(
        P,
        g,
        w,
        null,
        M,
        T,
        E,
        H,
        !0
      );
    }
  }, f = (d, v, b, M, T) => {
    if (v !== b) {
      if (v !== he)
        for (const E in v)
          !un(E) && !(E in b) && i(
            d,
            E,
            v[E],
            null,
            T,
            M
          );
      for (const E in b) {
        if (un(E)) continue;
        const H = b[E], N = v[E];
        H !== N && E !== "value" && i(d, E, N, H, T, M);
      }
      "value" in b && i(d, "value", v.value, b.value, T);
    }
  }, k = (d, v, b, M, T, E, H, N, P) => {
    const g = v.el = d ? d.el : r(""), w = v.anchor = d ? d.anchor : r("");
    let { patchFlag: _, dynamicChildren: O, slotScopeIds: B } = v;
    B && (N = N ? N.concat(B) : B), d == null ? (s(g, b, M), s(w, b, M), se(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      v.children || [],
      b,
      w,
      T,
      E,
      H,
      N,
      P
    )) : _ > 0 && _ & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === O.length ? (D(
      d.dynamicChildren,
      O,
      b,
      T,
      E,
      H,
      N
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (v.key != null || T && v === T.subTree) && eo(
      d,
      v,
      !0
      /* shallow */
    )) : K(
      d,
      v,
      b,
      w,
      T,
      E,
      H,
      N,
      P
    );
  }, j = (d, v, b, M, T, E, H, N, P) => {
    v.slotScopeIds = N, d == null ? v.shapeFlag & 512 ? T.ctx.activate(
      v,
      b,
      M,
      H,
      P
    ) : G(
      v,
      b,
      M,
      T,
      E,
      H,
      P
    ) : re(d, v, P);
  }, G = (d, v, b, M, T, E, H) => {
    const N = d.component = da(
      d,
      M,
      T
    );
    if (is(d) && (N.ctx.renderer = st), ha(N, !1, H), N.asyncDep) {
      if (T && T.registerDep(N, oe, H), !d.el) {
        const P = N.subTree = _e(Oe);
        C(null, P, v, b), d.placeholder = P.el;
      }
    } else
      oe(
        N,
        d,
        v,
        b,
        T,
        E,
        H
      );
  }, re = (d, v, b) => {
    const M = v.component = d.component;
    if (Jr(d, v, b))
      if (M.asyncDep && !M.asyncResolved) {
        fe(M, v, b);
        return;
      } else
        M.next = v, M.update();
    else
      v.el = d.el, M.vnode = v;
  }, oe = (d, v, b, M, T, E, H) => {
    const N = () => {
      if (d.isMounted) {
        let { next: _, bu: O, u: B, parent: X, vnode: ee } = d;
        {
          const Ie = tl(d);
          if (Ie) {
            _ && (_.el = ee.el, fe(d, _, H)), Ie.asyncDep.then(() => {
              Ee(() => {
                d.isUnmounted || g();
              }, T);
            });
            return;
          }
        }
        let ie = _, Se;
        Pt(d, !1), _ ? (_.el = ee.el, fe(d, _, H)) : _ = ee, O && Nn(O), (Se = _.props && _.props.onVnodeBeforeUpdate) && it(Se, X, _, ee), Pt(d, !0);
        const ke = $o(d), Ce = d.subTree;
        d.subTree = ke, R(
          Ce,
          ke,
          // parent may have changed if it's in a teleport
          h(Ce.el),
          // anchor may have changed if it's in a fragment
          We(Ce),
          d,
          T,
          E
        ), _.el = ke.el, ie === null && Gr(d, ke.el), B && Ee(B, T), (Se = _.props && _.props.onVnodeUpdated) && Ee(
          () => it(Se, X, _, ee),
          T
        );
      } else {
        let _;
        const { el: O, props: B } = v, { bm: X, m: ee, parent: ie, root: Se, type: ke } = d, Ce = gn(v);
        Pt(d, !1), X && Nn(X), !Ce && (_ = B && B.onVnodeBeforeMount) && it(_, ie, v), Pt(d, !0);
        {
          Se.ce && Se.ce._hasShadowRoot() && Se.ce._injectChildStyle(
            ke,
            d.parent ? d.parent.type : void 0
          );
          const Ie = d.subTree = $o(d);
          R(
            null,
            Ie,
            b,
            M,
            d,
            T,
            E
          ), v.el = Ie.el;
        }
        if (ee && Ee(ee, T), !Ce && (_ = B && B.onVnodeMounted)) {
          const Ie = v;
          Ee(
            () => it(_, ie, Ie),
            T
          );
        }
        (v.shapeFlag & 256 || ie && gn(ie.vnode) && ie.vnode.shapeFlag & 256) && d.a && Ee(d.a, T), d.isMounted = !0, v = b = M = null;
      }
    };
    d.scope.on();
    const P = d.effect = new ai(N);
    d.scope.off();
    const g = d.update = P.run.bind(P), w = d.job = P.runIfDirty.bind(P);
    w.i = d, w.id = d.uid, P.scheduler = () => Xs(w), Pt(d, !0), g();
  }, fe = (d, v, b) => {
    v.component = d;
    const M = d.vnode.props;
    d.vnode = v, d.next = null, Yr(d, v.props, M, b), ea(d, v.children, b), bt(), uo(d), wt();
  }, K = (d, v, b, M, T, E, H, N, P = !1) => {
    const g = d && d.children, w = d ? d.shapeFlag : 0, _ = v.children, { patchFlag: O, shapeFlag: B } = v;
    if (O > 0) {
      if (O & 128) {
        me(
          g,
          _,
          b,
          M,
          T,
          E,
          H,
          N,
          P
        );
        return;
      } else if (O & 256) {
        J(
          g,
          _,
          b,
          M,
          T,
          E,
          H,
          N,
          P
        );
        return;
      }
    }
    B & 8 ? (w & 16 && $e(g, T, E), _ !== g && c(b, _)) : w & 16 ? B & 16 ? me(
      g,
      _,
      b,
      M,
      T,
      E,
      H,
      N,
      P
    ) : $e(g, T, E, !0) : (w & 8 && c(b, ""), B & 16 && se(
      _,
      b,
      M,
      T,
      E,
      H,
      N,
      P
    ));
  }, J = (d, v, b, M, T, E, H, N, P) => {
    d = d || Xt, v = v || Xt;
    const g = d.length, w = v.length, _ = Math.min(g, w);
    let O;
    for (O = 0; O < _; O++) {
      const B = v[O] = P ? mt(v[O]) : ct(v[O]);
      R(
        d[O],
        B,
        b,
        null,
        T,
        E,
        H,
        N,
        P
      );
    }
    g > w ? $e(
      d,
      T,
      E,
      !0,
      !1,
      _
    ) : se(
      v,
      b,
      M,
      T,
      E,
      H,
      N,
      P,
      _
    );
  }, me = (d, v, b, M, T, E, H, N, P) => {
    let g = 0;
    const w = v.length;
    let _ = d.length - 1, O = w - 1;
    for (; g <= _ && g <= O; ) {
      const B = d[g], X = v[g] = P ? mt(v[g]) : ct(v[g]);
      if (Dt(B, X))
        R(
          B,
          X,
          b,
          null,
          T,
          E,
          H,
          N,
          P
        );
      else
        break;
      g++;
    }
    for (; g <= _ && g <= O; ) {
      const B = d[_], X = v[O] = P ? mt(v[O]) : ct(v[O]);
      if (Dt(B, X))
        R(
          B,
          X,
          b,
          null,
          T,
          E,
          H,
          N,
          P
        );
      else
        break;
      _--, O--;
    }
    if (g > _) {
      if (g <= O) {
        const B = O + 1, X = B < w ? v[B].el : M;
        for (; g <= O; )
          R(
            null,
            v[g] = P ? mt(v[g]) : ct(v[g]),
            b,
            X,
            T,
            E,
            H,
            N,
            P
          ), g++;
      }
    } else if (g > O)
      for (; g <= _; )
        Ae(d[g], T, E, !0), g++;
    else {
      const B = g, X = g, ee = /* @__PURE__ */ new Map();
      for (g = X; g <= O; g++) {
        const Te = v[g] = P ? mt(v[g]) : ct(v[g]);
        Te.key != null && ee.set(Te.key, g);
      }
      let ie, Se = 0;
      const ke = O - X + 1;
      let Ce = !1, Ie = 0;
      const ot = new Array(ke);
      for (g = 0; g < ke; g++) ot[g] = 0;
      for (g = B; g <= _; g++) {
        const Te = d[g];
        if (Se >= ke) {
          Ae(Te, T, E, !0);
          continue;
        }
        let De;
        if (Te.key != null)
          De = ee.get(Te.key);
        else
          for (ie = X; ie <= O; ie++)
            if (ot[ie - X] === 0 && Dt(Te, v[ie])) {
              De = ie;
              break;
            }
        De === void 0 ? Ae(Te, T, E, !0) : (ot[De - X] = g + 1, De >= Ie ? Ie = De : Ce = !0, R(
          Te,
          v[De],
          b,
          null,
          T,
          E,
          H,
          N,
          P
        ), Se++);
      }
      const qe = Ce ? oa(ot) : Xt;
      for (ie = qe.length - 1, g = ke - 1; g >= 0; g--) {
        const Te = X + g, De = v[Te], It = v[Te + 1], Jt = Te + 1 < w ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          It.el || nl(It)
        ) : M;
        ot[g] === 0 ? R(
          null,
          De,
          b,
          Jt,
          T,
          E,
          H,
          N,
          P
        ) : Ce && (ie < 0 || g !== qe[ie] ? Ke(De, b, Jt, 2) : ie--);
      }
    }
  }, Ke = (d, v, b, M, T = null) => {
    const { el: E, type: H, transition: N, children: P, shapeFlag: g } = d;
    if (g & 6) {
      Ke(d.component.subTree, v, b, M);
      return;
    }
    if (g & 128) {
      d.suspense.move(v, b, M);
      return;
    }
    if (g & 64) {
      H.move(d, v, b, st);
      return;
    }
    if (H === te) {
      s(E, v, b);
      for (let _ = 0; _ < P.length; _++)
        Ke(P[_], v, b, M);
      s(d.anchor, v, b);
      return;
    }
    if (H === Hn) {
      S(d, v, b);
      return;
    }
    if (M !== 2 && g & 1 && N)
      if (M === 0)
        N.beforeEnter(E), s(E, v, b), Ee(() => N.enter(E), T);
      else {
        const { leave: _, delayLeave: O, afterLeave: B } = N, X = () => {
          d.ctx.isUnmounted ? o(E) : s(E, v, b);
        }, ee = () => {
          E._isLeaving && E[rt](
            !0
            /* cancelled */
          ), _(E, () => {
            X(), B && B();
          });
        };
        O ? O(E, X, ee) : ee();
      }
    else
      s(E, v, b);
  }, Ae = (d, v, b, M = !1, T = !1) => {
    const {
      type: E,
      props: H,
      ref: N,
      children: P,
      dynamicChildren: g,
      shapeFlag: w,
      patchFlag: _,
      dirs: O,
      cacheIndex: B
    } = d;
    if (_ === -2 && (T = !1), N != null && (bt(), pn(N, null, b, d, !0), wt()), B != null && (v.renderCache[B] = void 0), w & 256) {
      v.ctx.deactivate(d);
      return;
    }
    const X = w & 1 && O, ee = !gn(d);
    let ie;
    if (ee && (ie = H && H.onVnodeBeforeUnmount) && it(ie, v, d), w & 6)
      ht(d.component, b, M);
    else {
      if (w & 128) {
        d.suspense.unmount(b, M);
        return;
      }
      X && Lt(d, null, v, "beforeUnmount"), w & 64 ? d.type.remove(
        d,
        v,
        b,
        st,
        M
      ) : g && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !g.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== te || _ > 0 && _ & 64) ? $e(
        g,
        v,
        b,
        !1,
        !0
      ) : (E === te && _ & 384 || !T && w & 16) && $e(P, v, b), M && zt(d);
    }
    (ee && (ie = H && H.onVnodeUnmounted) || X) && Ee(() => {
      ie && it(ie, v, d), X && Lt(d, null, v, "unmounted");
    }, b);
  }, zt = (d) => {
    const { type: v, el: b, anchor: M, transition: T } = d;
    if (v === te) {
      At(b, M);
      return;
    }
    if (v === Hn) {
      A(d);
      return;
    }
    const E = () => {
      o(b), T && !T.persisted && T.afterLeave && T.afterLeave();
    };
    if (d.shapeFlag & 1 && T && !T.persisted) {
      const { leave: H, delayLeave: N } = T, P = () => H(b, E);
      N ? N(d.el, E, P) : P();
    } else
      E();
  }, At = (d, v) => {
    let b;
    for (; d !== v; )
      b = y(d), o(d), d = b;
    o(v);
  }, ht = (d, v, b) => {
    const { bum: M, scope: T, job: E, subTree: H, um: N, m: P, a: g } = d;
    So(P), So(g), M && Nn(M), T.stop(), E && (E.flags |= 8, Ae(H, d, v, b)), N && Ee(N, v), Ee(() => {
      d.isUnmounted = !0;
    }, v);
  }, $e = (d, v, b, M = !1, T = !1, E = 0) => {
    for (let H = E; H < d.length; H++)
      Ae(d[H], v, b, M, T);
  }, We = (d) => {
    if (d.shapeFlag & 6)
      return We(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const v = y(d.anchor || d.el), b = v && v[Ii];
    return b ? y(b) : v;
  };
  let xe = !1;
  const nt = (d, v, b) => {
    let M;
    d == null ? v._vnode && (Ae(v._vnode, null, null, !0), M = v._vnode.component) : R(
      v._vnode || null,
      d,
      v,
      null,
      null,
      null,
      b
    ), v._vnode = d, xe || (xe = !0, uo(M), Si(), xe = !1);
  }, st = {
    p: R,
    um: Ae,
    m: Ke,
    r: zt,
    mt: G,
    mc: se,
    pc: K,
    pbc: D,
    n: We,
    o: e
  };
  return {
    render: nt,
    hydrate: void 0,
    createApp: jr(nt)
  };
}
function ys({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Pt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function sa(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function eo(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (q(s) && q(o))
    for (let i = 0; i < s.length; i++) {
      const l = s[i];
      let r = o[i];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[i] = mt(o[i]), r.el = l.el), !n && r.patchFlag !== -2 && eo(l, r)), r.type === as && (r.patchFlag === -1 && (r = o[i] = mt(r)), r.el = l.el), r.type === Oe && !r.el && (r.el = l.el);
    }
}
function oa(e) {
  const t = e.slice(), n = [0];
  let s, o, i, l, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const u = e[s];
    if (u !== 0) {
      if (o = n[n.length - 1], e[o] < u) {
        t[s] = o, n.push(s);
        continue;
      }
      for (i = 0, l = n.length - 1; i < l; )
        r = i + l >> 1, e[n[r]] < u ? i = r + 1 : l = r;
      u < e[n[i]] && (i > 0 && (t[s] = n[i - 1]), n[i] = s);
    }
  }
  for (i = n.length, l = n[i - 1]; i-- > 0; )
    n[i] = l, l = t[l];
  return n;
}
function tl(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : tl(t);
}
function So(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function nl(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? nl(t.subTree) : null;
}
const sl = (e) => e.__isSuspense;
function ia(e, t) {
  t && t.pendingBranch ? q(e) ? t.effects.push(...e) : t.effects.push(e) : pr(e);
}
const te = /* @__PURE__ */ Symbol.for("v-fgt"), as = /* @__PURE__ */ Symbol.for("v-txt"), Oe = /* @__PURE__ */ Symbol.for("v-cmt"), Hn = /* @__PURE__ */ Symbol.for("v-stc"), mn = [];
let Ue = null;
function x(e = !1) {
  mn.push(Ue = e ? null : []);
}
function la() {
  mn.pop(), Ue = mn[mn.length - 1] || null;
}
let xn = 1;
function Gn(e, t = !1) {
  xn += e, e < 0 && Ue && t && (Ue.hasOnce = !0);
}
function ol(e) {
  return e.dynamicChildren = xn > 0 ? Ue || Xt : null, la(), xn > 0 && Ue && Ue.push(e), e;
}
function I(e, t, n, s, o, i) {
  return ol(
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
function Re(e, t, n, s, o) {
  return ol(
    _e(
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
function Dt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const il = ({ key: e }) => e ?? null, Bn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? ve(e) || /* @__PURE__ */ be(e) || Q(e) ? { i: Ge, r: e, k: t, f: !!n } : e : null);
function p(e, t = null, n = null, s = 0, o = null, i = e === te ? 0 : 1, l = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && il(t),
    ref: t && Bn(t),
    scopeId: Ti,
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
  return r ? (to(a, n), i & 128 && e.normalize(a)) : n && (a.shapeFlag |= ve(n) ? 8 : 16), xn > 0 && // avoid a block node from tracking itself
  !l && // has current parent block
  Ue && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ue.push(a), a;
}
const _e = ra;
function ra(e, t = null, n = null, s = 0, o = null, i = !1) {
  if ((!e || e === Pr) && (e = Oe), qn(e)) {
    const r = Tt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && to(r, n), xn > 0 && !i && Ue && (r.shapeFlag & 6 ? Ue[Ue.indexOf(e)] = r : Ue.push(r)), r.patchFlag = -2, r;
  }
  if (ma(e) && (e = e.__vccOpts), t) {
    t = aa(t);
    let { class: r, style: a } = t;
    r && !ve(r) && (t.class = ge(r)), ce(a) && (/* @__PURE__ */ ss(a) && !q(a) && (a = we({}, a)), t.style = Kt(a));
  }
  const l = ve(e) ? 1 : sl(e) ? 128 : Li(e) ? 64 : ce(e) ? 4 : Q(e) ? 2 : 0;
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
function aa(e) {
  return e ? /* @__PURE__ */ ss(e) || qi(e) ? we({}, e) : e : null;
}
function Tt(e, t, n = !1, s = !1) {
  const { props: o, ref: i, patchFlag: l, children: r, transition: a } = e, u = t ? ca(o || {}, t) : o, c = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: u,
    key: u && il(u),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && i ? q(i) ? i.concat(Bn(t)) : [i, Bn(t)] : Bn(t)
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
    patchFlag: t && e.type !== te ? l === -1 ? 16 : l | 16 : l,
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
    ssContent: e.ssContent && Tt(e.ssContent),
    ssFallback: e.ssFallback && Tt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && wn(
    c,
    a.clone(c)
  ), c;
}
function jt(e = " ", t = 0) {
  return _e(as, null, e, t);
}
function ll(e, t) {
  const n = _e(Hn, null, e);
  return n.staticCount = t, n;
}
function ne(e = "", t = !1) {
  return t ? (x(), Re(Oe, null, e)) : _e(Oe, null, e);
}
function ct(e) {
  return e == null || typeof e == "boolean" ? _e(Oe) : q(e) ? _e(
    te,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : qn(e) ? mt(e) : _e(as, null, String(e));
}
function mt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e);
}
function to(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (q(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), to(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !qi(t) ? t._ctx = Ge : o === 3 && Ge && (Ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else Q(t) ? (t = { default: t, _ctx: Ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [jt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function ca(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ge([t.class, s.class]));
      else if (o === "style")
        t.style = Kt([t.style, s.style]);
      else if (Xn(o)) {
        const i = t[o], l = s[o];
        l && i !== l && !(q(i) && i.includes(l)) && (t[o] = i ? [].concat(i, l) : l);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function it(e, t, n, s = null) {
  Ze(e, t, 7, [
    n,
    s
  ]);
}
const ua = Wi();
let fa = 0;
function da(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || ua, i = {
    uid: fa++,
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
    scope: new Pl(
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
    propsOptions: Xi(s, o),
    emitsOptions: Ui(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: he,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: he,
    data: he,
    props: he,
    attrs: he,
    slots: he,
    refs: he,
    setupState: he,
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
  return i.ctx = { _: i }, i.root = t ? t.root : i, i.emit = Kr.bind(null, i), e.ce && e.ce(i), i;
}
let Ne = null;
const rl = () => Ne || Ge;
let Yn, Os;
{
  const e = es(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (i) => {
      o.length > 1 ? o.forEach((l) => l(i)) : o[0](i);
    };
  };
  Yn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ne = n
  ), Os = t(
    "__VUE_SSR_SETTERS__",
    (n) => Sn = n
  );
}
const An = (e) => {
  const t = Ne;
  return Yn(e), e.scope.on(), () => {
    e.scope.off(), Yn(t);
  };
}, Co = () => {
  Ne && Ne.scope.off(), Yn(null);
};
function al(e) {
  return e.vnode.shapeFlag & 4;
}
let Sn = !1;
function ha(e, t = !1, n = !1) {
  t && Os(t);
  const { props: s, children: o } = e.vnode, i = al(e);
  qr(e, s, i, t), Zr(e, o, n || t);
  const l = i ? pa(e, t) : void 0;
  return t && Os(!1), l;
}
function pa(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Or);
  const { setup: s } = n;
  if (s) {
    bt();
    const o = e.setupContext = s.length > 1 ? va(e) : null, i = An(e), l = Mn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = ei(l);
    if (wt(), i(), (r || e.sp) && !gn(e) && Hi(e), r) {
      if (l.then(Co, Co), t)
        return l.then((a) => {
          To(e, a);
        }).catch((a) => {
          os(a, e, 0);
        });
      e.asyncDep = l;
    } else
      To(e, l);
  } else
    cl(e);
}
function To(e, t, n) {
  Q(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ce(t) && (e.setupState = $i(t)), cl(e);
}
function cl(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || ft);
  {
    const o = An(e);
    bt();
    try {
      Rr(e);
    } finally {
      wt(), o();
    }
  }
}
const ga = {
  get(e, t) {
    return Me(e, "get", ""), e[t];
  }
};
function va(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, ga),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function cs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy($i(tr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in vn)
        return vn[n](e);
    },
    has(t, n) {
      return n in t || n in vn;
    }
  })) : e.proxy;
}
function ma(e) {
  return Q(e) && "__vccOpts" in e;
}
const Y = (e, t) => /* @__PURE__ */ cr(e, t, Sn);
function ya(e, t, n) {
  try {
    Gn(-1);
    const s = arguments.length;
    return s === 2 ? ce(t) && !q(t) ? qn(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && qn(n) && (n = [n]), _e(e, t, n));
  } finally {
    Gn(1);
  }
}
const _a = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Rs;
const Eo = typeof window < "u" && window.trustedTypes;
if (Eo)
  try {
    Rs = /* @__PURE__ */ Eo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ul = Rs ? (e) => Rs.createHTML(e) : (e) => e, ba = "http://www.w3.org/2000/svg", wa = "http://www.w3.org/1998/Math/MathML", vt = typeof document < "u" ? document : null, Mo = vt && /* @__PURE__ */ vt.createElement("template"), $a = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? vt.createElementNS(ba, e) : t === "mathml" ? vt.createElementNS(wa, e) : n ? vt.createElement(e, { is: n }) : vt.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => vt.createTextNode(e),
  createComment: (e) => vt.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => vt.querySelector(e),
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
      Mo.innerHTML = ul(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Mo.content;
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
}, xt = "transition", an = "animation", Cn = /* @__PURE__ */ Symbol("_vtc"), fl = {
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
}, ka = /* @__PURE__ */ we(
  {},
  Oi,
  fl
), xa = (e) => (e.displayName = "Transition", e.props = ka, e), Sa = /* @__PURE__ */ xa(
  (e, { slots: t }) => ya($r, Ca(e), t)
), Ot = (e, t = []) => {
  q(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, Ao = (e) => e ? q(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Ca(e) {
  const t = {};
  for (const k in e)
    k in fl || (t[k] = e[k]);
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
    appearActiveClass: u = l,
    appearToClass: c = r,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: $ = `${n}-leave-to`
  } = e, F = Ta(o), R = F && F[0], W = F && F[1], {
    onBeforeEnter: C,
    onEnter: m,
    onEnterCancelled: S,
    onLeave: A,
    onLeaveCancelled: V,
    onBeforeAppear: Z = C,
    onAppear: ue = m,
    onAppearCancelled: se = S
  } = t, L = (k, j, G, re) => {
    k._enterCancelled = re, Rt(k, j ? c : r), Rt(k, j ? u : l), G && G();
  }, D = (k, j) => {
    k._isLeaving = !1, Rt(k, h), Rt(k, $), Rt(k, y), j && j();
  }, f = (k) => (j, G) => {
    const re = k ? ue : m, oe = () => L(j, k, G);
    Ot(re, [j, oe]), Io(() => {
      Rt(j, k ? a : i), gt(j, k ? c : r), Ao(re) || Lo(j, s, R, oe);
    });
  };
  return we(t, {
    onBeforeEnter(k) {
      Ot(C, [k]), gt(k, i), gt(k, l);
    },
    onBeforeAppear(k) {
      Ot(Z, [k]), gt(k, a), gt(k, u);
    },
    onEnter: f(!1),
    onAppear: f(!0),
    onLeave(k, j) {
      k._isLeaving = !0;
      const G = () => D(k, j);
      gt(k, h), k._enterCancelled ? (gt(k, y), Ro(k)) : (Ro(k), gt(k, y)), Io(() => {
        k._isLeaving && (Rt(k, h), gt(k, $), Ao(A) || Lo(k, s, W, G));
      }), Ot(A, [k, G]);
    },
    onEnterCancelled(k) {
      L(k, !1, void 0, !0), Ot(S, [k]);
    },
    onAppearCancelled(k) {
      L(k, !0, void 0, !0), Ot(se, [k]);
    },
    onLeaveCancelled(k) {
      D(k), Ot(V, [k]);
    }
  });
}
function Ta(e) {
  if (e == null)
    return null;
  if (ce(e))
    return [_s(e.enter), _s(e.leave)];
  {
    const t = _s(e);
    return [t, t];
  }
}
function _s(e) {
  return Sl(e);
}
function gt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Cn] || (e[Cn] = /* @__PURE__ */ new Set())).add(t);
}
function Rt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Cn];
  n && (n.delete(t), n.size || (e[Cn] = void 0));
}
function Io(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Ea = 0;
function Lo(e, t, n, s) {
  const o = e._endId = ++Ea, i = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(i, n);
  const { type: l, timeout: r, propCount: a } = Ma(e, t);
  if (!l)
    return s();
  const u = l + "end";
  let c = 0;
  const h = () => {
    e.removeEventListener(u, y), i();
  }, y = ($) => {
    $.target === e && ++c >= a && h();
  };
  setTimeout(() => {
    c < a && h();
  }, r + 1), e.addEventListener(u, y);
}
function Ma(e, t) {
  const n = window.getComputedStyle(e), s = (F) => (n[F] || "").split(", "), o = s(`${xt}Delay`), i = s(`${xt}Duration`), l = Po(o, i), r = s(`${an}Delay`), a = s(`${an}Duration`), u = Po(r, a);
  let c = null, h = 0, y = 0;
  t === xt ? l > 0 && (c = xt, h = l, y = i.length) : t === an ? u > 0 && (c = an, h = u, y = a.length) : (h = Math.max(l, u), c = h > 0 ? l > u ? xt : an : null, y = c ? c === xt ? i.length : a.length : 0);
  const $ = c === xt && /\b(?:transform|all)(?:,|$)/.test(
    s(`${xt}Property`).toString()
  );
  return {
    type: c,
    timeout: h,
    propCount: y,
    hasTransform: $
  };
}
function Po(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => Oo(n) + Oo(e[s])));
}
function Oo(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function Ro(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function Aa(e, t, n) {
  const s = e[Cn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const No = /* @__PURE__ */ Symbol("_vod"), Ia = /* @__PURE__ */ Symbol("_vsh"), La = /* @__PURE__ */ Symbol(""), Pa = /(?:^|;)\s*display\s*:/;
function Oa(e, t, n) {
  const s = e.style, o = ve(n);
  let i = !1;
  if (n && !o) {
    if (t)
      if (ve(t))
        for (const l of t.split(";")) {
          const r = l.slice(0, l.indexOf(":")).trim();
          n[r] == null && jn(s, r, "");
        }
      else
        for (const l in t)
          n[l] == null && jn(s, l, "");
    for (const l in n)
      l === "display" && (i = !0), jn(s, l, n[l]);
  } else if (o) {
    if (t !== n) {
      const l = s[La];
      l && (n += ";" + l), s.cssText = n, i = Pa.test(n);
    }
  } else t && e.removeAttribute("style");
  No in e && (e[No] = i ? s.display : "", e[Ia] && (s.display = "none"));
}
const Do = /\s*!important$/;
function jn(e, t, n) {
  if (q(n))
    n.forEach((s) => jn(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ra(e, t);
    Do.test(n) ? e.setProperty(
      Et(s),
      n.replace(Do, ""),
      "important"
    ) : e[s] = n;
  }
}
const Fo = ["Webkit", "Moz", "ms"], bs = {};
function Ra(e, t) {
  const n = bs[t];
  if (n)
    return n;
  let s = Ye(t);
  if (s !== "filter" && s in e)
    return bs[t] = s;
  s = si(s);
  for (let o = 0; o < Fo.length; o++) {
    const i = Fo[o] + s;
    if (i in e)
      return bs[t] = i;
  }
  return t;
}
const Ho = "http://www.w3.org/1999/xlink";
function Bo(e, t, n, s, o, i = Il(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(Ho, t.slice(6, t.length)) : e.setAttributeNS(Ho, t, n) : n == null || i && !ii(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : dt(n) ? String(n) : n
  );
}
function jo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? ul(n) : n);
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
    r === "boolean" ? n = ii(n) : n == null && r === "string" ? (n = "", l = !0) : r === "number" && (n = 0, l = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  l && e.removeAttribute(o || t);
}
function Yt(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Na(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const Vo = /* @__PURE__ */ Symbol("_vei");
function Da(e, t, n, s, o = null) {
  const i = e[Vo] || (e[Vo] = {}), l = i[t];
  if (s && l)
    l.value = s;
  else {
    const [r, a] = Fa(t);
    if (s) {
      const u = i[t] = ja(
        s,
        o
      );
      Yt(e, r, u, a);
    } else l && (Na(e, r, l, a), i[t] = void 0);
  }
}
const Ko = /(?:Once|Passive|Capture)$/;
function Fa(e) {
  let t;
  if (Ko.test(e)) {
    t = {};
    let s;
    for (; s = e.match(Ko); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Et(e.slice(2)), t];
}
let ws = 0;
const Ha = /* @__PURE__ */ Promise.resolve(), Ba = () => ws || (Ha.then(() => ws = 0), ws = Date.now());
function ja(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Ze(
      Va(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Ba(), n;
}
function Va(e, t) {
  if (q(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Wo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Ka = (e, t, n, s, o, i) => {
  const l = o === "svg";
  t === "class" ? Aa(e, s, l) : t === "style" ? Oa(e, n, s) : Xn(t) ? Hs(t) || Da(e, t, n, s, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Wa(e, t, s, l)) ? (jo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Bo(e, t, s, l, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Ua(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !ve(s))) ? jo(e, Ye(t), s, i, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), Bo(e, t, s, l));
};
function Wa(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Wo(t) && Q(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Wo(t) && ve(n) ? !1 : t in e;
}
function Ua(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = Ye(t);
  return Array.isArray(n) ? n.some((o) => Ye(o) === s) : Object.keys(n).some((o) => Ye(o) === s);
}
const Uo = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return q(t) ? (n) => Nn(t, n) : t;
};
function za(e) {
  e.target.composing = !0;
}
function zo(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const $s = /* @__PURE__ */ Symbol("_assign");
function Jo(e, t, n) {
  return t && (e = e.trim()), n && (e = js(e)), e;
}
const Ut = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[$s] = Uo(o);
    const i = s || o.props && o.props.type === "number";
    Yt(e, t ? "change" : "input", (l) => {
      l.target.composing || e[$s](Jo(e.value, n, i));
    }), (n || i) && Yt(e, "change", () => {
      e.value = Jo(e.value, n, i);
    }), t || (Yt(e, "compositionstart", za), Yt(e, "compositionend", zo), Yt(e, "change", zo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: i } }, l) {
    if (e[$s] = Uo(l), e.composing) return;
    const r = (i || e.type === "number") && !/^0\d/.test(e.value) ? js(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Ja = ["ctrl", "shift", "alt", "meta"], Ga = {
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
  exact: (e, t) => Ja.some((n) => e[`${n}Key`] && !t.includes(n))
}, le = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...i) => {
    for (let l = 0; l < t.length; l++) {
      const r = Ga[t[l]];
      if (r && r(o, t)) return;
    }
    return e(o, ...i);
  });
}, qa = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Be = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const i = Et(o.key);
    if (t.some(
      (l) => l === i || qa[l] === i
    ))
      return e(o);
  });
}, Ya = /* @__PURE__ */ we({ patchProp: Ka }, $a);
let Go;
function Xa() {
  return Go || (Go = ta(Ya));
}
const Qa = (...e) => {
  const t = Xa().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = ec(s);
    if (!o) return;
    const i = t._component;
    !Q(i) && !i.render && !i.template && (i.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const l = n(o, !1, Za(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), l;
  }, t;
};
function Za(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ec(e) {
  return ve(e) ? document.querySelector(e) : e;
}
const tc = { class: "setup" }, nc = { class: "setup-card" }, sc = { class: "field-group" }, oc = { class: "field-group" }, ic = ["disabled"], lc = {
  key: 0,
  class: "error"
}, rc = /* @__PURE__ */ et({
  __name: "TokenSetup",
  emits: ["token"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ z(localStorage.getItem("ha_url") ?? "http://homeassistant.local:8123"), o = /* @__PURE__ */ z(""), i = /* @__PURE__ */ z(""), l = /* @__PURE__ */ z(null), r = Y(() => s.value.trim() && o.value.trim());
    async function a() {
      const u = s.value.trim().replace(/\/$/, ""), c = o.value.trim();
      if (!(!u || !c)) {
        i.value = "", localStorage.setItem("ha_url", u);
        try {
          let h = null;
          try {
            h = await fetch(`${u}/api/`, {
              headers: { Authorization: `Bearer ${c}` }
            });
          } catch {
            h = await fetch("/api/", {
              headers: { Authorization: `Bearer ${c}` }
            });
          }
          if (!h.ok) {
            i.value = "Token ungültig oder Verbindung fehlgeschlagen.", localStorage.removeItem("ha_url");
            return;
          }
          localStorage.setItem("ha_token", c), n("token", c);
        } catch {
          localStorage.removeItem("ha_url"), i.value = "Home Assistant nicht erreichbar. URL und Netzwerk prüfen.";
        }
      }
    }
    return (u, c) => (x(), I("div", tc, [
      p("div", nc, [
        c[5] || (c[5] = p("h2", null, "Home Assistant", -1)),
        c[6] || (c[6] = p("p", null, [
          jt(" IP-Adresse deiner Home Assistant Instanz und ein"),
          p("br"),
          jt(" Long-Lived Access Token aus"),
          p("br"),
          p("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        p("div", sc, [
          c[3] || (c[3] = p("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          Wt(p("input", {
            "onUpdate:modelValue": c[0] || (c[0] = (h) => s.value = h),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: c[1] || (c[1] = Be((h) => {
              var y;
              return (y = l.value) == null ? void 0 : y.focus();
            }, ["enter"]))
          }, null, 544), [
            [Ut, s.value]
          ])
        ]),
        p("div", oc, [
          c[4] || (c[4] = p("label", { class: "field-label" }, "Access Token", -1)),
          Wt(p("input", {
            ref_key: "tokenRef",
            ref: l,
            "onUpdate:modelValue": c[2] || (c[2] = (h) => o.value = h),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Be(a, ["enter"])
          }, null, 544), [
            [Ut, o.value]
          ])
        ]),
        p("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, ic),
        i.value ? (x(), I("p", lc, U(i.value), 1)) : ne("", !0)
      ])
    ]));
  }
}), tt = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, ac = /* @__PURE__ */ tt(rc, [["__scopeId", "data-v-97d10609"]]);
let no = !1;
const dl = /* @__PURE__ */ z(null);
function hl(e) {
  no = e;
}
function cc() {
  return no;
}
function uc(e) {
  dl.value = e;
}
function fc() {
  return dl;
}
function pl() {
  var e;
  return no ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function gl() {
  const e = pl();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function us(e) {
  const t = pl();
  return t ? `${t}${e}` : e;
}
async function Ft(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(us(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function dc(e) {
  const t = await fetch(us("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
let ye = null, Ns = 1, tn = null;
const Vt = /* @__PURE__ */ new Map(), Tn = /* @__PURE__ */ new Map(), Ds = /* @__PURE__ */ z(0);
let nn = !1, qo = [];
const sn = /* @__PURE__ */ new Map();
function hc() {
  return gl();
}
function vl(e) {
  ye && (ye.readyState === WebSocket.OPEN || ye.readyState === WebSocket.CONNECTING) || (nn = !1, ye = new WebSocket(hc()), ye.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      ye.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      nn = !0;
      const i = Ns++;
      ye.send(JSON.stringify({ id: i, type: "get_states" }));
      const l = Ns++;
      ye.send(JSON.stringify({ id: l, type: "subscribe_events", event_type: "state_changed" }));
      for (const r of qo) r();
      qo = [];
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
        Tn.set(i.entity_id, i), Yo(i.entity_id, i);
      Ds.value++;
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const i = n.event.data.new_state;
      i && (Tn.set(i.entity_id, i), Ds.value++, Yo(i.entity_id, i));
    }
  }, ye.onclose = () => {
    nn = !1, tn && clearTimeout(tn), tn = setTimeout(() => {
      ye = null, vl(e);
    }, 5e3);
  }, ye.onerror = () => {
    ye == null || ye.close();
  });
}
function Yo(e, t) {
  const n = Vt.get(e);
  if (n)
    for (const s of n) s(t);
}
function pc(e, t) {
  Vt.has(e) || Vt.set(e, /* @__PURE__ */ new Set()), Vt.get(e).add(t);
  const n = Tn.get(e);
  n && t(n);
}
function gc(e, t) {
  const n = Vt.get(e);
  n && (n.delete(t), n.size === 0 && Vt.delete(e));
}
function vc() {
  tn && (clearTimeout(tn), tn = null), ye && (ye.close(), ye = null), nn = !1, Tn.clear(), Vt.clear();
}
async function mc(e, t, n, s) {
  if (!ye || !nn) throw new Error("WebSocket not connected");
  const o = Ns++;
  return new Promise((i, l) => {
    sn.set(o, { resolve: i, reject: l }), ye.send(JSON.stringify({
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
function yc(e) {
  let t = e;
  const n = /* @__PURE__ */ z(null), s = /* @__PURE__ */ z(null), o = /* @__PURE__ */ z(!0);
  let i = null;
  function l(u) {
    n.value = u, s.value = null, o.value = !1;
  }
  function r(u, c) {
    a(), c && (t = c), o.value = !0, s.value = null, vl(u), i = l, pc(t, i), nn || fetch(us(`/api/states/${t}`), {
      headers: { Authorization: `Bearer ${u}`, "Content-Type": "application/json" }
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
    i && (gc(t, i), i = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function so() {
  return { cache: Tn, version: Ds };
}
const _c = { class: "weather-layout" }, bc = { class: "weather-left" }, wc = { class: "weather-temp" }, $c = { class: "weather-condition" }, kc = {
  key: 0,
  class: "weather-meta"
}, xc = {
  key: 0,
  class: "weather-meta-item"
}, Sc = {
  key: 1,
  class: "weather-meta-item"
}, Cc = { class: "weather-right" }, Tc = ["innerHTML"], Ec = { class: "ha-modal-header-row" }, Mc = { class: "ha-modal-title" }, Ac = { class: "wf-current" }, Ic = { class: "wf-current-left" }, Lc = ["innerHTML"], Pc = { class: "wf-current-info" }, Oc = { class: "wf-current-condition" }, Rc = { class: "wf-current-ago" }, Nc = { class: "wf-current-right" }, Dc = { class: "wf-current-temp" }, Fc = {
  key: 0,
  class: "wf-current-hilo"
}, Hc = { class: "wf-details" }, Bc = {
  key: 0,
  class: "wf-detail-row"
}, jc = { class: "wf-detail-value" }, Vc = {
  key: 1,
  class: "wf-detail-row"
}, Kc = { class: "wf-detail-value" }, Wc = {
  key: 2,
  class: "wf-detail-row"
}, Uc = { class: "wf-detail-value" }, zc = { class: "wf-tabs" }, Jc = {
  key: 0,
  class: "weather-forecast-row"
}, Gc = { class: "wf-date" }, qc = ["innerHTML"], Yc = { class: "wf-temps" }, Xc = { class: "wf-temps-low" }, Qc = {
  key: 1,
  class: "ha-modal-empty"
}, Zc = {
  key: 0,
  class: "wf-hourly-scroll"
}, eu = { class: "wf-hourly-day-label" }, tu = { class: "weather-forecast-row" }, nu = { class: "wf-date" }, su = ["innerHTML"], ou = { class: "wf-temps" }, iu = {
  key: 1,
  class: "ha-modal-empty"
}, lu = /* @__PURE__ */ et({
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
    const t = e, n = /* @__PURE__ */ z(!1), s = {
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
    function o(L, D = 100) {
      const f = D, k = `<path d="M${f * 0.17} ${f * 0.63}a${f * 0.17} ${f * 0.17} 0 0 1 0-${f * 0.33}h${f * 0.04}a${f * 0.23} ${f * 0.23} 0 0 1 ${f * 0.44}-${f * 0.1}a${f * 0.19} ${f * 0.19} 0 0 1 ${f * 0.19} ${f * 0.1}h${f * 0.02}a${f * 0.17} ${f * 0.17} 0 0 1 0 ${f * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linejoin="round"/>`, j = `<svg viewBox="0 0 ${f} ${f}" width="${f}" height="${f}" xmlns="http://www.w3.org/2000/svg">`, G = "</svg>";
      switch (L) {
        case "sunny":
          return `${j}
        <circle cx="${f / 2}" cy="${f / 2}" r="${f * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((re) => {
            const oe = re * Math.PI / 180, fe = f / 2 + Math.cos(oe) * f * 0.25, K = f / 2 + Math.sin(oe) * f * 0.25, J = f / 2 + Math.cos(oe) * f * 0.35, me = f / 2 + Math.sin(oe) * f * 0.35;
            return `<line x1="${fe}" y1="${K}" x2="${J}" y2="${me}" stroke="#f6ad35" stroke-width="${f * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${G}`;
        case "clear-night":
          return `${j}<path d="M${f * 0.58} ${f * 0.15}a${f * 0.33} ${f * 0.33} 0 1 0 ${f * 0.27} ${f * 0.42} ${f * 0.25} ${f * 0.25} 0 0 1-${f * 0.27}-${f * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${f * 0.03}"/>${G}`;
        case "partlycloudy":
          return `${j}
        <circle cx="${f * 0.62}" cy="${f * 0.3}" r="${f * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((re) => {
            const oe = re * Math.PI / 180;
            return `<line x1="${f * 0.62 + Math.cos(oe) * f * 0.19}" y1="${f * 0.3 + Math.sin(oe) * f * 0.19}" x2="${f * 0.62 + Math.cos(oe) * f * 0.25}" y2="${f * 0.3 + Math.sin(oe) * f * 0.25}" stroke="#f6ad35" stroke-width="${f * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${k}
      ${G}`;
        case "cloudy":
          return `${j}${k}${G}`;
        case "rainy":
        case "pouring":
          return `${j}${k}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.5}" y1="${f * 0.71}" x2="${f * 0.45}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.7}" y1="${f * 0.71}" x2="${f * 0.65}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "snowy":
          return `${j}${k}
        <line x1="${f * 0.35}" y1="${f * 0.73}" x2="${f * 0.35}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.28}" y1="${f * 0.805}" x2="${f * 0.42}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.88}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.58}" y1="${f * 0.805}" x2="${f * 0.72}" y2="${f * 0.805}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "snowy-rainy":
          return `${j}${k}
        <line x1="${f * 0.3}" y1="${f * 0.71}" x2="${f * 0.25}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.73}" x2="${f * 0.65}" y2="${f * 0.86}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
        <line x1="${f * 0.59}" y1="${f * 0.795}" x2="${f * 0.71}" y2="${f * 0.795}" stroke="#5bbbf5" stroke-width="${f * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "fog":
          return `${j}
        <line x1="${f * 0.2}" y1="${f * 0.35}" x2="${f * 0.8}" y2="${f * 0.35}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.15}" y1="${f * 0.5}" x2="${f * 0.85}" y2="${f * 0.5}" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <line x1="${f * 0.2}" y1="${f * 0.65}" x2="${f * 0.8}" y2="${f * 0.65}" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "lightning":
          return `${j}${k}
        <polygon points="${f * 0.45},${f * 0.62} ${f * 0.52},${f * 0.75} ${f * 0.47},${f * 0.75} ${f * 0.55},${f * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
      ${G}`;
        case "lightning-rainy":
          return `${j}${k}
        <polygon points="${f * 0.42},${f * 0.62} ${f * 0.48},${f * 0.75} ${f * 0.44},${f * 0.75} ${f * 0.5},${f * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${f * 0.015}" stroke-linejoin="round"/>
        <line x1="${f * 0.65}" y1="${f * 0.71}" x2="${f * 0.6}" y2="${f * 0.85}" stroke="#5b9bd5" stroke-width="${f * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "windy":
        case "windy-variant":
          return `${j}
        <path d="M${f * 0.15} ${f * 0.4} Q${f * 0.4} ${f * 0.3} ${f * 0.65} ${f * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.2} ${f * 0.55} Q${f * 0.5} ${f * 0.45} ${f * 0.8} ${f * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${f * 0.04}" stroke-linecap="round"/>
        <path d="M${f * 0.15} ${f * 0.7} Q${f * 0.35} ${f * 0.6} ${f * 0.55} ${f * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${f * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "hail":
          return `${j}${k}
        <circle cx="${f * 0.3}" cy="${f * 0.8}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.5}" cy="${f * 0.82}" r="${f * 0.035}" fill="#5bbbf5"/>
        <circle cx="${f * 0.7}" cy="${f * 0.78}" r="${f * 0.035}" fill="#5bbbf5"/>
      ${G}`;
        default:
          return `${j}${k}${G}`;
      }
    }
    const i = Y(() => t.state ? o(t.state.state) : o("cloudy")), l = Y(() => {
      var L;
      return t.state ? ((L = s[t.state.state]) == null ? void 0 : L.label) ?? t.state.state : "";
    }), r = Y(() => {
      if (!t.state) return "--";
      const L = t.state.attributes.temperature;
      return L != null ? Math.round(L) : "--";
    }), a = Y(() => t.state ? t.state.attributes.humidity ?? null : null), u = Y(() => t.state ? t.state.attributes.wind_speed ?? null : null), c = Y(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ z([]), y = /* @__PURE__ */ z([]), $ = /* @__PURE__ */ z("daily"), F = Y(() => {
      const L = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], D = [];
      let f = null;
      for (const k of y.value) {
        const j = new Date(k.datetime), G = L[j.getDay()];
        (!f || f.day !== G) && (f = { day: G, hours: [] }, D.push(f)), f.hours.push(k);
      }
      return D;
    }), R = Y(() => {
      if (!t.state) return "";
      const L = new Date(t.state.last_updated), f = Math.round(((/* @__PURE__ */ new Date()).getTime() - L.getTime()) / 6e4);
      if (f < 1) return "Gerade eben";
      if (f < 60) return `Vor ${f} Min.`;
      const k = Math.round(f / 60);
      return k < 24 ? `Vor ${k} Stunde${k > 1 ? "n" : ""}` : `Vor ${Math.round(k / 24)} Tag${Math.round(k / 24) > 1 ? "en" : ""}`;
    }), W = Y(() => t.state && h.value.length ? h.value[0].tempHigh : null), C = Y(() => t.state && h.value.length ? h.value[0].tempLow : null), m = Y(() => {
      if (!t.state) return "";
      const L = t.state.attributes.wind_bearing;
      return L == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(L / 22.5) % 16];
    });
    function S(L) {
      return L.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function A() {
      n.value = !0, $.value = "daily", await Z("daily");
    }
    async function V(L) {
      $.value = L, L === "hourly" && y.value.length === 0 && await Z("hourly");
    }
    async function Z(L) {
      var D, f;
      if (L === "daily") {
        const k = (D = t.state) == null ? void 0 : D.attributes.forecast;
        if (k && k.length) {
          h.value = ue(k);
          return;
        }
      }
      try {
        const k = await mc(t.entityId, "weather", "get_forecasts", { type: L }), j = (k == null ? void 0 : k.response) ?? k, G = (j == null ? void 0 : j[t.entityId]) ?? (j ? Object.values(j)[0] : null), re = (G == null ? void 0 : G.forecast) ?? [];
        if (re.length) {
          L === "daily" ? h.value = ue(re) : y.value = se(re);
          return;
        }
      } catch {
        try {
          const k = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: L })
          });
          if (k.ok) {
            const j = await k.json();
            let G = [];
            if (j != null && j[t.entityId]) G = j[t.entityId].forecast ?? [];
            else if (Array.isArray(j)) G = ((f = j[0]) == null ? void 0 : f.forecast) ?? [];
            else {
              const re = Object.values(j)[0];
              G = (re == null ? void 0 : re.forecast) ?? (j == null ? void 0 : j.forecast) ?? [];
            }
            if (G.length) {
              L === "daily" ? h.value = ue(G) : y.value = se(G);
              return;
            }
          }
        } catch {
        }
      }
      L === "daily" ? h.value = [] : y.value = [];
    }
    function ue(L) {
      const D = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return L.slice(0, 6).map((f) => {
        const k = new Date(f.datetime);
        return {
          date: f.datetime,
          weekday: D[k.getDay()],
          condition: f.condition ?? "cloudy",
          tempHigh: Math.round(f.temperature ?? f.templow ?? 0),
          tempLow: Math.round(f.templow ?? f.temperature ?? 0),
          precipitation: f.precipitation_probability ?? f.precipitation ?? null
        };
      });
    }
    function se(L) {
      return L.slice(0, 24).map((D) => {
        const f = new Date(D.datetime);
        return {
          datetime: D.datetime,
          time: f.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: D.condition ?? "cloudy",
          temp: Math.round(D.temperature ?? 0)
        };
      });
    }
    return (L, D) => {
      var f;
      return x(), I(te, null, [
        p("button", {
          class: "light-ctrl-btn",
          onClick: le(A, ["stop"]),
          title: "Vorhersage"
        }, [...D[5] || (D[5] = [
          ll('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-a3030d6f><line x1="8" y1="6" x2="21" y2="6" data-v-a3030d6f></line><line x1="8" y1="12" x2="21" y2="12" data-v-a3030d6f></line><line x1="8" y1="18" x2="21" y2="18" data-v-a3030d6f></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-a3030d6f></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-a3030d6f></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-a3030d6f></line></svg>', 1)
        ])]),
        p("div", {
          class: ge(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          p("div", _c, [
            p("div", bc, [
              p("span", wc, U(r.value) + "°", 1),
              p("span", $c, U(l.value), 1),
              e.isCompact ? ne("", !0) : (x(), I("div", kc, [
                a.value !== null ? (x(), I("span", xc, "💧 " + U(a.value) + "%", 1)) : ne("", !0),
                u.value !== null ? (x(), I("span", Sc, "💨 " + U(Math.round(u.value)) + " km/h", 1)) : ne("", !0)
              ]))
            ]),
            p("div", Cc, [
              p("div", {
                class: "weather-svg-icon",
                innerHTML: i.value
              }, null, 8, Tc)
            ])
          ])
        ], 2),
        (x(), Re(Mt, { to: "body" }, [
          n.value ? (x(), I("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: D[4] || (D[4] = le((k) => n.value = !1, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: D[3] || (D[3] = le(() => {
              }, ["stop"]))
            }, [
              p("div", Ec, [
                p("h3", Mc, U(e.customTitle || e.label), 1),
                p("button", {
                  class: "ha-modal-close",
                  onClick: D[0] || (D[0] = (k) => n.value = !1)
                }, "✕")
              ]),
              p("div", Ac, [
                p("div", Ic, [
                  p("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((f = e.state) == null ? void 0 : f.state) ?? "cloudy", 52)
                  }, null, 8, Lc),
                  p("div", Pc, [
                    p("span", Oc, U(l.value), 1),
                    p("span", Rc, U(R.value), 1)
                  ])
                ]),
                p("div", Nc, [
                  p("span", Dc, U(r.value) + "°C", 1),
                  W.value !== null && C.value !== null ? (x(), I("span", Fc, U(W.value) + "°C / " + U(C.value) + "°C", 1)) : ne("", !0)
                ])
              ]),
              p("div", Hc, [
                c.value !== null ? (x(), I("div", Bc, [
                  D[6] || (D[6] = p("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  p("span", jc, U(S(c.value)) + " hPa", 1)
                ])) : ne("", !0),
                a.value !== null ? (x(), I("div", Vc, [
                  D[7] || (D[7] = p("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  p("span", Kc, U(a.value) + " %", 1)
                ])) : ne("", !0),
                u.value !== null ? (x(), I("div", Wc, [
                  D[8] || (D[8] = p("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  p("span", Uc, U(S(u.value)) + " km/h" + U(m.value ? ` (${m.value})` : ""), 1)
                ])) : ne("", !0)
              ]),
              p("div", zc, [
                p("button", {
                  class: ge(["wf-tab", { active: $.value === "daily" }]),
                  onClick: D[1] || (D[1] = (k) => V("daily"))
                }, "Täglich", 2),
                p("button", {
                  class: ge(["wf-tab", { active: $.value === "hourly" }]),
                  onClick: D[2] || (D[2] = (k) => V("hourly"))
                }, "Stündlich", 2)
              ]),
              $.value === "daily" ? (x(), I(te, { key: 0 }, [
                h.value.length ? (x(), I("div", Jc, [
                  (x(!0), I(te, null, Ve(h.value, (k) => (x(), I("div", {
                    key: k.date,
                    class: "weather-forecast-day"
                  }, [
                    p("span", Gc, U(k.weekday), 1),
                    p("div", {
                      class: "wf-icon",
                      innerHTML: o(k.condition, 36)
                    }, null, 8, qc),
                    p("span", Yc, U(k.tempHigh) + "°", 1),
                    p("span", Xc, U(k.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (x(), I("div", Qc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : ne("", !0),
              $.value === "hourly" ? (x(), I(te, { key: 1 }, [
                y.value.length ? (x(), I("div", Zc, [
                  (x(!0), I(te, null, Ve(F.value, (k) => (x(), I("div", {
                    key: k.day,
                    class: "wf-hourly-group"
                  }, [
                    p("span", eu, U(k.day), 1),
                    p("div", tu, [
                      (x(!0), I(te, null, Ve(k.hours, (j) => (x(), I("div", {
                        key: j.time,
                        class: "weather-forecast-day"
                      }, [
                        p("span", nu, U(j.time), 1),
                        p("div", {
                          class: "wf-icon",
                          innerHTML: o(j.condition, 32)
                        }, null, 8, su),
                        p("span", ou, U(j.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (x(), I("div", iu, "Keine stündlichen Daten verfügbar"))
              ], 64)) : ne("", !0)
            ])
          ])) : ne("", !0)
        ]))
      ], 64);
    };
  }
}), ru = /* @__PURE__ */ tt(lu, [["__scopeId", "data-v-a3030d6f"]]), au = { class: "center-wrap" }, cu = ["title"], uu = {
  key: 0,
  class: "updated"
}, fu = { class: "ha-modal-header-row" }, du = { class: "ha-light-section" }, hu = { class: "ha-light-slider-wrap" }, pu = ["value"], gu = { class: "ha-light-slider-value" }, vu = {
  key: 0,
  class: "ha-light-section"
}, mu = { class: "ha-light-slider-wrap" }, yu = ["value"], _u = {
  key: 1,
  class: "ha-light-section"
}, bu = { class: "ha-light-slider-wrap" }, wu = ["value"], $u = { class: "ha-light-slider-value" }, ku = /* @__PURE__ */ et({
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
    const t = e, n = Y(() => {
      if (!t.state) return !1;
      const C = t.state.state;
      if (C === "on" || C === "home" || C === "open" || C === "unlocked") return !0;
      const m = parseFloat(C);
      return !isNaN(m) && m > 0;
    }), s = /* @__PURE__ */ z(!1);
    async function o() {
      t.state && await Ft(t.token, t.entityId, "toggle");
    }
    const i = Y(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), l = /* @__PURE__ */ z(!1), r = Y(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = Y(() => {
      if (!t.state) return !1;
      const C = t.state.attributes.supported_color_modes;
      return (C == null ? void 0 : C.some((m) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(m))) ?? !1;
    }), u = Y(() => {
      if (!t.state) return 0;
      const C = t.state.attributes.hs_color;
      return Math.round((C == null ? void 0 : C[0]) ?? 0);
    }), c = Y(() => {
      if (!t.state) return 100;
      const C = t.state.attributes.hs_color;
      return Math.round((C == null ? void 0 : C[1]) ?? 100);
    }), h = Y(() => ({
      "--sat-color": `hsl(${u.value}, 100%, 50%)`
    }));
    let y = null, $ = null;
    function F(C) {
      const m = parseInt(C.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        m === 0 ? Ft(t.token, t.entityId, "turn_off") : Ft(t.token, t.entityId, "turn_on", { brightness: m });
      }, 150);
    }
    function R(C) {
      const m = parseInt(C.target.value);
      $ && clearTimeout($), $ = setTimeout(() => {
        Ft(t.token, t.entityId, "turn_on", {
          hs_color: [m, c.value]
        });
      }, 150);
    }
    function W(C) {
      const m = parseInt(C.target.value);
      $ && clearTimeout($), $ = setTimeout(() => {
        Ft(t.token, t.entityId, "turn_on", {
          hs_color: [u.value, m]
        });
      }, 150);
    }
    return (C, m) => (x(), I(te, null, [
      p("button", {
        class: "light-ctrl-btn",
        onClick: m[0] || (m[0] = le((S) => l.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...m[9] || (m[9] = [
        ll('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c1ca61d1><circle cx="12" cy="12" r="5" data-v-c1ca61d1></circle><line x1="12" y1="1" x2="12" y2="3" data-v-c1ca61d1></line><line x1="12" y1="21" x2="12" y2="23" data-v-c1ca61d1></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-c1ca61d1></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-c1ca61d1></line><line x1="1" y1="12" x2="3" y2="12" data-v-c1ca61d1></line><line x1="21" y1="12" x2="23" y2="12" data-v-c1ca61d1></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-c1ca61d1></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-c1ca61d1></line></svg>', 1)
      ])]),
      p("div", {
        class: ge(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        p("div", au, [
          p("button", {
            class: ge(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: m[1] || (m[1] = (S) => s.value = !0),
            onMouseup: m[2] || (m[2] = (S) => s.value = !1),
            onMouseleave: m[3] || (m[3] = (S) => s.value = !1),
            onTouchstartPassive: m[4] || (m[4] = (S) => s.value = !0),
            onTouchend: m[5] || (m[5] = (S) => s.value = !1),
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
          ])], 42, cu)
        ]),
        i.value ? (x(), I("div", uu, " Aktualisiert: " + U(i.value), 1)) : ne("", !0)
      ], 2),
      (x(), Re(Mt, { to: "body" }, [
        l.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: m[8] || (m[8] = le((S) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: m[7] || (m[7] = le(() => {
            }, ["stop"]))
          }, [
            p("div", fu, [
              m[11] || (m[11] = p("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: m[6] || (m[6] = (S) => l.value = !1)
              }, "✕")
            ]),
            p("div", du, [
              m[12] || (m[12] = p("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              p("div", hu, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: F
                }, null, 40, pu),
                p("span", gu, U(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (x(), I("div", vu, [
              m[13] || (m[13] = p("label", { class: "ha-light-label" }, "Farbe", -1)),
              p("div", mu, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: R
                }, null, 40, yu),
                p("span", {
                  class: "ha-light-color-preview",
                  style: Kt({ background: `hsl(${u.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : ne("", !0),
            a.value ? (x(), I("div", _u, [
              m[14] || (m[14] = p("label", { class: "ha-light-label" }, "Sättigung", -1)),
              p("div", bu, [
                p("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: Kt(h.value),
                  onInput: W
                }, null, 44, wu),
                p("span", $u, U(c.value) + "%", 1)
              ])
            ])) : ne("", !0)
          ])
        ])) : ne("", !0)
      ]))
    ], 64));
  }
}), xu = /* @__PURE__ */ tt(ku, [["__scopeId", "data-v-c1ca61d1"]]), Su = { class: "center-wrap" }, Cu = ["title"], Tu = {
  key: 0,
  class: "updated"
}, Eu = /* @__PURE__ */ et({
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
    const t = e, n = Y(() => {
      if (!t.state) return !1;
      const l = t.state.state;
      if (l === "on" || l === "home" || l === "open" || l === "unlocked") return !0;
      const r = parseFloat(l);
      return !isNaN(r) && r > 0;
    }), s = /* @__PURE__ */ z(!1);
    async function o() {
      t.state && await Ft(t.token, t.entityId, "toggle");
    }
    const i = Y(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (l, r) => (x(), I("div", {
      class: ge(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Su, [
        p("button", {
          class: ge(["power-btn", { on: n.value, pressing: s.value }]),
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
        ])], 42, Cu)
      ]),
      i.value ? (x(), I("div", Tu, " Aktualisiert: " + U(i.value), 1)) : ne("", !0)
    ], 2));
  }
}), Mu = /* @__PURE__ */ tt(Eu, [["__scopeId", "data-v-495ed0f0"]]), Au = { class: "state value center-wrap" }, Iu = { class: "number" }, Lu = { class: "unit" }, Pu = {
  key: 0,
  class: "updated"
}, Ou = /* @__PURE__ */ et({
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
    const t = e, n = Y(() => {
      if (!t.state) return "--";
      const i = parseFloat(t.state.state);
      return isNaN(i) ? t.state.state : i.toFixed(1);
    }), s = Y(() => {
      var i;
      return ((i = t.state) == null ? void 0 : i.attributes.unit_of_measurement) ?? "";
    }), o = Y(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (i, l) => (x(), I("div", {
      class: ge(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      p("div", Au, [
        p("span", Iu, U(n.value), 1),
        p("span", Lu, U(s.value), 1)
      ]),
      o.value && !e.isCompact ? (x(), I("div", Pu, " Aktualisiert: " + U(o.value), 1)) : ne("", !0)
    ], 2));
  }
}), Ru = /* @__PURE__ */ tt(Ou, [["__scopeId", "data-v-336a5298"]]), Nu = {
  key: 0,
  class: "card-header"
}, Du = { class: "label" }, Fu = { class: "ha-modal-fields" }, Hu = { class: "ha-modal-input-wrap" }, Bu = ["onKeydown"], ju = {
  key: 0,
  class: "ha-modal-suggestions"
}, Vu = ["onMousedown"], Ku = { class: "ha-modal-s-entity" }, Wu = { class: "ha-modal-s-name" }, Uu = ["onKeydown"], zu = { class: "ha-toggle-row" }, Ju = {
  key: 1,
  class: "state loading"
}, Gu = {
  key: 2,
  class: "state error"
}, qu = /* @__PURE__ */ et({
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
    const n = e, s = t, o = Y(() => n.cols === 1 && n.rows === 1), i = Y(() => n.rows === 1 && n.cols > 1), l = Y(() => n.cols === 1 && n.rows > 1), r = Y(() => n.entityId.startsWith("weather.")), a = Y(() => n.entityId.startsWith("light.")), u = /* @__PURE__ */ new Set(["on", "off", "open", "closed", "locked", "unlocked", "home", "away"]), c = Y(() => !n.state || a.value || r.value ? !1 : u.has(n.state.state)), h = Y(() => {
      if (!n.state) return !1;
      const K = n.state.state;
      if (K === "on" || K === "home" || K === "open" || K === "unlocked") return !0;
      const J = parseFloat(K);
      return !isNaN(J) && J > 0;
    }), y = /* @__PURE__ */ z(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), $ = /* @__PURE__ */ z(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    Ct(() => n.entityId, (K) => {
      y.value = localStorage.getItem(`ha_title_${K}`) ?? "", $.value = localStorage.getItem(`ha_showtitle_${K}`) !== "false";
    });
    const F = Y(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), R = /* @__PURE__ */ z(!1), W = /* @__PURE__ */ z(""), C = /* @__PURE__ */ z(""), m = /* @__PURE__ */ z(!0), S = /* @__PURE__ */ z(null), A = /* @__PURE__ */ z([]), V = /* @__PURE__ */ z([]), Z = /* @__PURE__ */ z(-1);
    async function ue() {
      try {
        A.value = await dc(n.token);
      } catch {
      }
    }
    function se() {
      Z.value = -1;
      const K = W.value.trim().toLowerCase();
      if (!K) {
        V.value = [];
        return;
      }
      V.value = A.value.filter(
        (J) => J.entity_id.toLowerCase().includes(K) || (J.attributes.friendly_name ?? "").toLowerCase().includes(K)
      ).slice(0, 8);
    }
    function L() {
      V.value.length && (Z.value = (Z.value + 1) % V.value.length);
    }
    function D() {
      V.value.length && (Z.value = (Z.value - 1 + V.value.length) % V.value.length);
    }
    function f(K) {
      W.value = K, V.value = [], Z.value = -1;
    }
    function k() {
      Z.value >= 0 && V.value[Z.value] ? f(V.value[Z.value].entity_id) : G();
    }
    function j() {
      W.value = n.entityId, C.value = y.value, m.value = $.value, V.value = [], Z.value = -1, R.value = !0, ue(), Ys(() => {
        var K;
        return (K = S.value) == null ? void 0 : K.select();
      });
    }
    function G() {
      const K = W.value.trim();
      if (K) {
        const J = C.value.trim();
        localStorage.setItem(`ha_title_${K}`, J), localStorage.setItem(`ha_showtitle_${K}`, String(m.value)), K === n.entityId && (y.value = J, $.value = m.value), s("change-entity", K);
      }
      V.value = [], R.value = !1;
    }
    function re() {
      V.value = [], R.value = !1;
    }
    function oe() {
      R.value = !1, s("remove");
    }
    function fe(K) {
      const J = K.target.closest(".card");
      if (!J) return;
      const me = J.getBoundingClientRect(), Ke = "touches" in K ? K.touches[0].clientX : K.clientX, Ae = "touches" in K ? K.touches[0].clientY : K.clientY, zt = me.width, At = me.height, ht = 120;
      document.body.style.userSelect = "none";
      function $e(xe) {
        const nt = "touches" in xe ? xe.touches[0].clientX : xe.clientX, st = "touches" in xe ? xe.touches[0].clientY : xe.clientY, In = zt + (nt - Ke), d = At + (st - Ae), v = Math.max(1, Math.min(6, Math.round((In + 20) / ht))), b = Math.max(1, Math.min(6, Math.round((d + 20) / ht)));
        J.style.gridColumn = `span ${v}`, J.style.gridRow = `span ${b}`, J.dataset.previewCols = String(v), J.dataset.previewRows = String(b);
      }
      function We() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", $e), document.removeEventListener("mouseup", We), document.removeEventListener("touchmove", $e), document.removeEventListener("touchend", We);
        const xe = parseInt(J.dataset.previewCols || String(n.cols)), nt = parseInt(J.dataset.previewRows || String(n.rows));
        delete J.dataset.previewCols, delete J.dataset.previewRows, (xe !== n.cols || nt !== n.rows) && s("resize", xe, nt);
      }
      document.addEventListener("mousemove", $e), document.addEventListener("mouseup", We), document.addEventListener("touchmove", $e), document.addEventListener("touchend", We);
    }
    return (K, J) => (x(), I("div", {
      class: ge(["card", { active: h.value, small: o.value, short: i.value, narrow: l.value }])
    }, [
      p("button", {
        class: "edit-ctrl-btn",
        onClick: le(j, ["stop"]),
        title: "Bearbeiten"
      }, [...J[4] || (J[4] = [
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1),
        p("span", { class: "dot" }, null, -1)
      ])]),
      $.value ? (x(), I("div", Nu, [
        p("span", Du, U(y.value || F.value), 1)
      ])) : ne("", !0),
      (x(), Re(Mt, { to: "body" }, [
        R.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: le(re, ["self"])
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: J[3] || (J[3] = le(() => {
            }, ["stop"]))
          }, [
            J[7] || (J[7] = p("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            p("div", Fu, [
              p("div", Hu, [
                Wt(p("input", {
                  ref_key: "inputRef",
                  ref: S,
                  "onUpdate:modelValue": J[0] || (J[0] = (me) => W.value = me),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: se,
                  onKeydown: [
                    Be(le(k, ["prevent"]), ["enter"]),
                    Be(re, ["escape"]),
                    Be(le(L, ["prevent"]), ["arrow-down"]),
                    Be(le(D, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, Bu), [
                  [Ut, W.value]
                ]),
                V.value.length ? (x(), I("ul", ju, [
                  (x(!0), I(te, null, Ve(V.value, (me, Ke) => (x(), I("li", {
                    key: me.entity_id,
                    class: ge(["ha-modal-suggestion-item", { active: Ke === Z.value }]),
                    onMousedown: le((Ae) => f(me.entity_id), ["prevent"])
                  }, [
                    p("span", Ku, U(me.entity_id), 1),
                    p("span", Wu, U(me.attributes.friendly_name ?? ""), 1)
                  ], 42, Vu))), 128))
                ])) : ne("", !0)
              ]),
              Wt(p("input", {
                "onUpdate:modelValue": J[1] || (J[1] = (me) => C.value = me),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Be(le(G, ["prevent"]), ["enter"]),
                  Be(re, ["escape"])
                ]
              }, null, 40, Uu), [
                [Ut, C.value]
              ])
            ]),
            p("div", zu, [
              J[6] || (J[6] = p("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              p("button", {
                class: ge(["ha-toggle", { on: m.value }]),
                onClick: J[2] || (J[2] = (me) => m.value = !m.value),
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
                onClick: re
              }, "✕ Abbrechen")
            ]),
            p("button", {
              class: "ha-modal-delete-btn",
              onClick: oe
            }, "Card entfernen")
          ])
        ])) : ne("", !0)
      ])),
      e.loading ? (x(), I("div", Ju, [...J[9] || (J[9] = [
        p("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (x(), I("div", Gu, [
        J[10] || (J[10] = p("span", null, "⚠️", -1)),
        jt(" " + U(e.error), 1)
      ])) : r.value ? (x(), Re(ru, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value,
        label: y.value || F.value,
        "custom-title": y.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (x(), Re(xu, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : c.value ? (x(), Re(Mu, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": i.value,
        "is-narrow": l.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (x(), Re(Ru, {
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
        onMousedown: le(fe, ["prevent"]),
        onTouchstart: le(fe, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Yu = /* @__PURE__ */ tt(qu, [["__scopeId", "data-v-2114e986"]]);
function oo(e) {
  const { cache: t, version: n } = so();
  function s() {
    try {
      const h = localStorage.getItem(`ha_group_${e.key}`);
      if (h) {
        const y = JSON.parse(h);
        return {
          included: Array.isArray(y.included) ? y.included : [],
          excluded: Array.isArray(y.excluded) ? y.excluded : []
        };
      }
    } catch {
    }
    return { included: [], excluded: [] };
  }
  const o = /* @__PURE__ */ z(s());
  function i() {
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value));
  }
  const l = Y(() => {
    n.value;
    const h = [];
    for (const [, y] of t)
      e.autoDetect(y) && h.push(y.entity_id);
    return h.sort();
  }), r = Y(() => {
    const h = new Set(o.value.excluded), y = /* @__PURE__ */ new Set();
    for (const $ of l.value)
      h.has($) || y.add($);
    for (const $ of o.value.included)
      y.add($);
    return [...y].sort();
  }), a = Y(() => (n.value, r.value.map((h) => t.get(h)).filter((h) => h != null)));
  function u(h) {
    o.value.included.includes(h) || o.value.included.push(h), o.value.excluded = o.value.excluded.filter((y) => y !== h), i();
  }
  function c(h) {
    o.value.included = o.value.included.filter((y) => y !== h), l.value.includes(h) && !o.value.excluded.includes(h) && o.value.excluded.push(h), i();
  }
  return {
    entities: a,
    entityIds: r,
    autoDetectedIds: l,
    config: o,
    addEntity: u,
    removeEntity: c
  };
}
const Xu = { class: "pill-label" }, Qu = { class: "ha-modal-header-row" }, Zu = {
  key: 0,
  class: "ha-modal-empty"
}, ef = {
  key: 1,
  class: "ha-modal-entity-list"
}, tf = { class: "ha-modal-entity-name" }, nf = /* @__PURE__ */ et({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = oo({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ qs(() => t.token)
    }), s = Y(() => n.entities.value.filter((r) => r.state === "on")), o = Y(() => s.value.length > 0), i = Y(() => s.value.length), l = /* @__PURE__ */ z(!1);
    return (r, a) => (x(), I(te, null, [
      p("button", {
        class: ge(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (u) => l.value = !0)
      }, [
        a[4] || (a[4] = p("span", { class: "pill-icon" }, "🔒", -1)),
        p("span", Xu, U(o.value ? `${i.value} offen` : "Gesichert"), 1)
      ], 2),
      (x(), Re(Mt, { to: "body" }, [
        l.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = le((u) => l.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = le(() => {
            }, ["stop"]))
          }, [
            p("div", Qu, [
              a[5] || (a[5] = p("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (u) => l.value = !1)
              }, "✕")
            ]),
            je(n).entities.value.length ? (x(), I("ul", ef, [
              (x(!0), I(te, null, Ve(je(n).entities.value, (u) => (x(), I("li", {
                key: u.entity_id,
                class: "ha-modal-entity-row"
              }, [
                p("span", tf, U(u.attributes.friendly_name ?? u.entity_id), 1),
                p("span", {
                  class: ge(["ha-modal-entity-badge", u.state === "on" ? "open" : "closed"])
                }, U(u.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (x(), I("div", Zu, " Keine Sensoren gefunden "))
          ])
        ])) : ne("", !0)
      ]))
    ], 64));
  }
}), sf = /* @__PURE__ */ tt(nf, [["__scopeId", "data-v-4c919921"]]), of = { class: "pill-label" }, lf = { class: "ha-modal-header-row" }, rf = { class: "ha-modal-header-actions" }, af = {
  key: 0,
  class: "ha-modal-empty"
}, cf = {
  key: 1,
  class: "ha-modal-entity-list"
}, uf = { class: "ha-modal-entity-name" }, ff = ["onClick"], df = { class: "ha-modal-input-wrap" }, hf = ["onKeydown"], pf = {
  key: 0,
  class: "ha-modal-suggestions"
}, gf = ["onMousedown"], vf = { class: "ha-modal-s-entity" }, mf = { class: "ha-modal-s-name" }, yf = { class: "ha-modal-entity-list" }, _f = { class: "ha-modal-entity-name" }, bf = ["onClick"], wf = {
  key: 0,
  class: "ha-modal-empty"
}, $f = /* @__PURE__ */ et({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = oo({
      key: "lights",
      autoDetect: (m) => m.entity_id.startsWith("light."),
      token: /* @__PURE__ */ qs(() => t.token)
    }), { cache: s, version: o } = so(), i = Y(() => n.entities.value.filter((m) => m.state === "on")), l = Y(() => i.value.length > 0), r = Y(() => i.value.length), a = /* @__PURE__ */ z(!1), u = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z(""), h = /* @__PURE__ */ z([]);
    function y() {
      u.value = !u.value, c.value = "", h.value = [];
    }
    function $(m) {
      o.value;
      const S = s.get(m);
      return (S == null ? void 0 : S.attributes.friendly_name) ?? m;
    }
    function F() {
      const m = c.value.trim().toLowerCase();
      if (!m) {
        h.value = [];
        return;
      }
      const S = new Set(n.entityIds.value), A = [];
      o.value;
      for (const [, V] of s)
        if (!S.has(V.entity_id) && (V.entity_id.toLowerCase().includes(m) || (V.attributes.friendly_name ?? "").toLowerCase().includes(m)) && (A.push(V), A.length >= 8))
          break;
      h.value = A;
    }
    function R(m) {
      n.addEntity(m), c.value = "", h.value = [];
    }
    function W() {
      h.value.length && R(h.value[0].entity_id);
    }
    async function C(m) {
      await Ft(t.token, m, "toggle");
    }
    return (m, S) => (x(), I(te, null, [
      p("button", {
        class: ge(["pill", { active: l.value }]),
        onClick: S[0] || (S[0] = (A) => a.value = !0)
      }, [
        S[6] || (S[6] = p("span", { class: "pill-icon" }, "💡", -1)),
        p("span", of, U(l.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (x(), Re(Mt, { to: "body" }, [
        a.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: S[5] || (S[5] = le((A) => a.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: S[4] || (S[4] = le(() => {
            }, ["stop"]))
          }, [
            p("div", lf, [
              S[8] || (S[8] = p("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              p("div", rf, [
                p("button", {
                  class: ge(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: y,
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
                  onClick: S[1] || (S[1] = (A) => {
                    a.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? (x(), I(te, { key: 1 }, [
              p("div", df, [
                Wt(p("input", {
                  "onUpdate:modelValue": S[2] || (S[2] = (A) => c.value = A),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: F,
                  onKeydown: [
                    Be(le(W, ["prevent"]), ["enter"]),
                    S[3] || (S[3] = Be((A) => {
                      c.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, hf), [
                  [Ut, c.value]
                ]),
                h.value.length ? (x(), I("ul", pf, [
                  (x(!0), I(te, null, Ve(h.value, (A) => (x(), I("li", {
                    key: A.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: le((V) => R(A.entity_id), ["prevent"])
                  }, [
                    p("span", vf, U(A.entity_id), 1),
                    p("span", mf, U(A.attributes.friendly_name ?? ""), 1)
                  ], 40, gf))), 128))
                ])) : ne("", !0)
              ]),
              p("ul", yf, [
                (x(!0), I(te, null, Ve(je(n).entityIds.value, (A) => (x(), I("li", {
                  key: A,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", _f, U($(A)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (V) => je(n).removeEntity(A),
                    title: "Entfernen"
                  }, "✕", 8, bf)
                ]))), 128))
              ]),
              je(n).entityIds.value.length ? ne("", !0) : (x(), I("div", wf, " Keine Lichter ausgewählt "))
            ], 64)) : (x(), I(te, { key: 0 }, [
              je(n).entities.value.length ? (x(), I("ul", cf, [
                (x(!0), I(te, null, Ve(je(n).entities.value, (A) => (x(), I("li", {
                  key: A.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", uf, U(A.attributes.friendly_name ?? A.entity_id), 1),
                  p("button", {
                    class: ge(["ha-modal-toggle-btn", A.state === "on" ? "on" : "off"]),
                    onClick: (V) => C(A.entity_id)
                  }, U(A.state === "on" ? "An" : "Aus"), 11, ff)
                ]))), 128))
              ])) : (x(), I("div", af, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : ne("", !0)
      ]))
    ], 64));
  }
}), kf = /* @__PURE__ */ tt($f, [["__scopeId", "data-v-10807199"]]), xf = { class: "pill-label" }, Sf = { class: "ha-modal-header-row" }, Cf = { class: "ha-modal-header-actions" }, Tf = {
  key: 0,
  class: "ha-modal-empty"
}, Ef = {
  key: 1,
  class: "ha-modal-entity-list"
}, Mf = { class: "ha-modal-entity-name" }, Af = { class: "ha-modal-entity-value" }, If = { class: "ha-modal-input-wrap" }, Lf = ["onKeydown"], Pf = {
  key: 0,
  class: "ha-modal-suggestions"
}, Of = ["onMousedown"], Rf = { class: "ha-modal-s-entity" }, Nf = { class: "ha-modal-s-name" }, Df = { class: "ha-modal-entity-list" }, Ff = { class: "ha-modal-entity-name" }, Hf = ["onClick"], Bf = {
  key: 0,
  class: "ha-modal-empty"
}, jf = /* @__PURE__ */ et({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = oo({
      key: "climate",
      autoDetect: (C) => C.entity_id.startsWith("climate.") || C.entity_id.startsWith("sensor.") && C.attributes.device_class === "temperature",
      token: /* @__PURE__ */ qs(() => t.token)
    }), { cache: s, version: o } = so();
    function i(C) {
      if (C.entity_id.startsWith("climate.")) {
        const S = C.attributes.current_temperature;
        return typeof S == "number" ? S : null;
      }
      const m = parseFloat(C.state);
      return isNaN(m) ? null : m;
    }
    function l(C) {
      const m = i(C);
      if (m === null) return C.state;
      const S = C.attributes.unit_of_measurement ?? "°C";
      return `${m.toFixed(1)} ${S}`;
    }
    const r = Y(() => {
      const C = n.entities.value.map(i).filter((A) => A !== null);
      if (!C.length) return "-- °C";
      const m = Math.min(...C), S = Math.max(...C);
      return m === S ? `${m.toFixed(1)} °C` : `${m.toFixed(1)}–${S.toFixed(1)} °C`;
    });
    function a(C) {
      o.value;
      const m = s.get(C);
      return (m == null ? void 0 : m.attributes.friendly_name) ?? C;
    }
    const u = /* @__PURE__ */ z(!1), c = /* @__PURE__ */ z(!1), h = /* @__PURE__ */ z(""), y = /* @__PURE__ */ z([]);
    function $() {
      c.value = !c.value, h.value = "", y.value = [];
    }
    function F() {
      const C = h.value.trim().toLowerCase();
      if (!C) {
        y.value = [];
        return;
      }
      const m = new Set(n.entityIds.value), S = [];
      o.value;
      for (const [, A] of s)
        if (!m.has(A.entity_id) && (A.entity_id.toLowerCase().includes(C) || (A.attributes.friendly_name ?? "").toLowerCase().includes(C)) && (S.push(A), S.length >= 8))
          break;
      y.value = S;
    }
    function R(C) {
      n.addEntity(C), h.value = "", y.value = [];
    }
    function W() {
      y.value.length && R(y.value[0].entity_id);
    }
    return (C, m) => (x(), I(te, null, [
      p("button", {
        class: "pill",
        onClick: m[0] || (m[0] = (S) => u.value = !0)
      }, [
        m[6] || (m[6] = p("span", { class: "pill-icon" }, "🌡", -1)),
        p("span", xf, U(r.value), 1)
      ]),
      (x(), Re(Mt, { to: "body" }, [
        u.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: m[5] || (m[5] = le((S) => u.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: m[4] || (m[4] = le(() => {
            }, ["stop"]))
          }, [
            p("div", Sf, [
              m[8] || (m[8] = p("h3", { class: "ha-modal-title" }, "Klima", -1)),
              p("div", Cf, [
                p("button", {
                  class: ge(["ha-modal-icon-btn", { active: c.value }]),
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
                  onClick: m[1] || (m[1] = (S) => {
                    u.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? (x(), I(te, { key: 1 }, [
              p("div", If, [
                Wt(p("input", {
                  "onUpdate:modelValue": m[2] || (m[2] = (S) => h.value = S),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: F,
                  onKeydown: [
                    Be(le(W, ["prevent"]), ["enter"]),
                    m[3] || (m[3] = Be((S) => {
                      h.value = "", y.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, Lf), [
                  [Ut, h.value]
                ]),
                y.value.length ? (x(), I("ul", Pf, [
                  (x(!0), I(te, null, Ve(y.value, (S) => (x(), I("li", {
                    key: S.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: le((A) => R(S.entity_id), ["prevent"])
                  }, [
                    p("span", Rf, U(S.entity_id), 1),
                    p("span", Nf, U(S.attributes.friendly_name ?? ""), 1)
                  ], 40, Of))), 128))
                ])) : ne("", !0)
              ]),
              p("ul", Df, [
                (x(!0), I(te, null, Ve(je(n).entityIds.value, (S) => (x(), I("li", {
                  key: S,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Ff, U(a(S)), 1),
                  p("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (A) => je(n).removeEntity(S),
                    title: "Entfernen"
                  }, "✕", 8, Hf)
                ]))), 128))
              ]),
              je(n).entityIds.value.length ? ne("", !0) : (x(), I("div", Bf, " Keine Sensoren ausgewählt "))
            ], 64)) : (x(), I(te, { key: 0 }, [
              je(n).entities.value.length ? (x(), I("ul", Ef, [
                (x(!0), I(te, null, Ve(je(n).entities.value, (S) => (x(), I("li", {
                  key: S.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  p("span", Mf, U(S.attributes.friendly_name ?? S.entity_id), 1),
                  p("span", Af, U(l(S)), 1)
                ]))), 128))
              ])) : (x(), I("div", Tf, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : ne("", !0)
      ]))
    ], 64));
  }
}), Vf = /* @__PURE__ */ tt(jf, [["__scopeId", "data-v-2665ddcd"]]), Kf = { class: "pill-label" }, Wf = { class: "ha-modal-header-row" }, Uf = {
  key: 0,
  class: "ha-modal-empty"
}, zf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Jf = { class: "notif-header" }, Gf = { class: "notif-title" }, qf = { class: "notif-time" }, Yf = {
  key: 0,
  class: "notif-message"
}, Xf = ["onClick"], Qf = /* @__PURE__ */ et({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ z([]), s = /* @__PURE__ */ z(!1);
    let o = null;
    async function i() {
      try {
        const a = new WebSocket(gl()), u = await new Promise((c, h) => {
          let y = 1;
          a.onmessage = ($) => {
            const F = JSON.parse($.data);
            if (F.type === "auth_required") {
              a.send(JSON.stringify({ type: "auth", access_token: t.token }));
              return;
            }
            if (F.type === "auth_ok") {
              const R = y++;
              a.send(JSON.stringify({ id: R, type: "persistent_notification/get" }));
              return;
            }
            F.type === "result" && (a.close(), F.success && Array.isArray(F.result) ? c(F.result) : c([]));
          }, a.onerror = () => {
            a.close(), c([]);
          }, setTimeout(() => {
            a.close(), c([]);
          }, 5e3);
        });
        n.value = u.sort(
          (c, h) => new Date(h.created_at).getTime() - new Date(c.created_at).getTime()
        );
      } catch {
        n.value = [];
      }
    }
    async function l(a) {
      try {
        await fetch(us("/api/services/persistent_notification/dismiss"), {
          method: "POST",
          headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
          body: JSON.stringify({ notification_id: a })
        }), n.value = n.value.filter((u) => u.notification_id !== a), n.value.length === 0 && (s.value = !1);
      } catch {
      }
    }
    function r(a) {
      const u = new Date(a), h = Math.round(((/* @__PURE__ */ new Date()).getTime() - u.getTime()) / 6e4);
      if (h < 1) return "Gerade eben";
      if (h < 60) return `Vor ${h} Min.`;
      const y = Math.round(h / 60);
      return y < 24 ? `Vor ${y} Stunde${y > 1 ? "n" : ""}` : `Vor ${Math.round(y / 24)} Tag${Math.round(y / 24) > 1 ? "en" : ""}`;
    }
    return $n(() => {
      i(), o = setInterval(i, 3e4);
    }), kn(() => {
      o && clearInterval(o);
    }), (a, u) => (x(), I(te, null, [
      n.value.length ? (x(), I("button", {
        key: 0,
        class: "pill",
        onClick: u[0] || (u[0] = (c) => s.value = !0)
      }, [
        u[4] || (u[4] = p("span", { class: "pill-dot" }, null, -1)),
        p("span", Kf, U(n.value.length), 1)
      ])) : ne("", !0),
      (x(), Re(Mt, { to: "body" }, [
        s.value ? (x(), I("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: u[3] || (u[3] = le((c) => s.value = !1, ["self"]))
        }, [
          p("div", {
            class: "ha-modal-box",
            onClick: u[2] || (u[2] = le(() => {
            }, ["stop"]))
          }, [
            p("div", Wf, [
              u[5] || (u[5] = p("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              p("button", {
                class: "ha-modal-close",
                onClick: u[1] || (u[1] = (c) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (x(), I("ul", zf, [
              (x(!0), I(te, null, Ve(n.value, (c) => (x(), I("li", {
                key: c.notification_id,
                class: "notif-item"
              }, [
                p("div", Jf, [
                  p("span", Gf, U(c.title || c.message), 1),
                  p("span", qf, U(r(c.created_at)), 1)
                ]),
                c.title && c.message ? (x(), I("p", Yf, U(c.message), 1)) : ne("", !0),
                p("button", {
                  class: "notif-dismiss",
                  onClick: (h) => l(c.notification_id)
                }, "Löschen", 8, Xf)
              ]))), 128))
            ])) : (x(), I("div", Uf, " Keine Benachrichtigungen "))
          ])
        ])) : ne("", !0)
      ]))
    ], 64));
  }
}), Zf = /* @__PURE__ */ tt(Qf, [["__scopeId", "data-v-a643a4ed"]]), ed = {
  key: 1,
  class: "dashboard"
}, td = { class: "dashboard-header" }, nd = { class: "header-left" }, sd = { class: "header-right" }, od = { class: "clock" }, id = { class: "clock-time" }, ld = { class: "clock-date" }, rd = { class: "page-tabs" }, ad = { class: "page-tabs-inner" }, cd = ["onClick", "onDblclick", "onTouchstartPassive"], ud = {
  key: 1,
  class: "page-tab-label"
}, fd = { class: "ha-modal-header-row" }, dd = { class: "page-delete-text" }, hd = { class: "page-delete-actions" }, pd = { class: "burger-wrap" }, Xo = 120, gd = 36, vd = 32, md = /* @__PURE__ */ et({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var P;
    e.panelMode && hl(!0);
    const n = /* @__PURE__ */ z(localStorage.getItem("ha_token")), s = fc(), o = Y(() => cc() ? s.value : n.value), i = /* @__PURE__ */ ns({}), l = /* @__PURE__ */ new Map();
    function r() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function a() {
      try {
        const g = localStorage.getItem("ha_pages");
        if (g) {
          const w = JSON.parse(g);
          if (Array.isArray(w) && w.length)
            return w.map((_) => ({
              id: _.id,
              name: _.name || "Seite",
              cards: (_.cards || []).map((O) => ({
                id: O.id,
                entityId: O.entityId,
                cols: O.cols ?? 2,
                rows: O.rows ?? 2,
                gridCol: O.gridCol,
                gridRow: O.gridRow
              }))
            }));
        }
      } catch {
      }
      try {
        const g = localStorage.getItem("ha_cards");
        if (g) {
          const w = JSON.parse(g).map((_) => ({
            id: _.id,
            entityId: _.entityId,
            cols: _.cols ?? (_.size === "small" ? 1 : 2),
            rows: _.rows ?? (_.size === "small" ? 1 : 2)
          }));
          return [{ id: r(), name: "Home", cards: w }];
        }
      } catch {
      }
      return [{ id: r(), name: "Home", cards: [{ id: r(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const u = /* @__PURE__ */ z([]), c = /* @__PURE__ */ z(""), h = Y(() => u.value.find((g) => g.id === c.value) ?? u.value[0]), y = Y(() => {
      var g;
      return ((g = h.value) == null ? void 0 : g.cards) ?? [];
    });
    function $() {
      localStorage.setItem("ha_pages", JSON.stringify(u.value));
    }
    function F(g) {
      if (c.value !== g) {
        for (const w of y.value) re(w.id);
        c.value = g, localStorage.setItem("ha_active_page", g);
        for (const w of y.value) G(w.id, w.entityId);
      }
    }
    function R() {
      const g = r(), w = u.value.length + 1;
      u.value = [...u.value, { id: g, name: `Seite ${w}`, cards: [] }], $(), F(g);
    }
    const W = /* @__PURE__ */ z(null), C = Y(() => {
      const g = u.value.find((w) => w.id === W.value);
      return (g == null ? void 0 : g.name) ?? "";
    }), m = Y(() => {
      const g = u.value.find((w) => w.id === W.value);
      return (g == null ? void 0 : g.cards.length) ?? 0;
    });
    function S(g) {
      u.value.length <= 1 || (W.value = g);
    }
    function A() {
      const g = W.value;
      if (W.value = null, !g || u.value.length <= 1) return;
      const w = u.value.find((_) => _.id === g);
      if (w)
        for (const _ of w.cards) re(_.id);
      if (u.value = u.value.filter((_) => _.id !== g), c.value === g) {
        c.value = u.value[0].id, localStorage.setItem("ha_active_page", c.value);
        for (const _ of y.value) G(_.id, _.entityId);
      }
      $();
    }
    let V = null;
    function Z(g) {
      V = setTimeout(() => {
        V = null, f(g);
      }, 600);
    }
    function ue() {
      V && (clearTimeout(V), V = null);
    }
    const se = /* @__PURE__ */ z(null), L = /* @__PURE__ */ z(""), D = /* @__PURE__ */ z(null);
    function f(g) {
      const w = u.value.find((_) => _.id === g);
      w && (se.value = g, L.value = w.name, Ys(() => {
        D.value && D.value.length && (D.value[0].focus(), D.value[0].select());
      }));
    }
    function k() {
      if (!se.value) return;
      const g = u.value.find((w) => w.id === se.value);
      g && L.value.trim() && (g.name = L.value.trim(), u.value = [...u.value], $()), se.value = null;
    }
    function j() {
      se.value = null;
    }
    function G(g, w) {
      if (l.has(g)) return;
      const _ = yc(w);
      l.set(g, _), i[g] = { state: null, loading: !0, error: null }, Ct(_.state, (O) => {
        i[g] && (i[g].state = O);
      }), Ct(_.loading, (O) => {
        i[g] && (i[g].loading = O);
      }), Ct(_.error, (O) => {
        i[g] && (i[g].error = O);
      }), o.value && _.start(o.value);
    }
    function re(g) {
      const w = l.get(g);
      w && (w.stop(), l.delete(g)), delete i[g];
    }
    const oe = a();
    u.value = oe;
    const fe = localStorage.getItem("ha_active_page");
    c.value = ((P = oe.find((g) => g.id === fe)) == null ? void 0 : P.id) ?? oe[0].id;
    for (const g of y.value) G(g.id, g.entityId);
    Ct(o, (g, w) => {
      if (g && !w)
        for (const [, _] of l) _.start(g);
    });
    function K() {
      const g = r(), w = "sensor.wohnzimmer_soll_temperatur", _ = h.value;
      _ && (_.cards = [..._.cards, { id: g, entityId: w, cols: 2, rows: 2 }], u.value = [...u.value], G(g, w), $());
    }
    function J(g) {
      re(g);
      const w = h.value;
      w && (w.cards = w.cards.filter((_) => _.id !== g), u.value = [...u.value], $());
    }
    function me(g) {
      n.value = g;
      for (const [, w] of l) w.start(g);
    }
    function Ke(g, w) {
      const _ = h.value;
      if (!_) return;
      const O = _.cards.find((X) => X.id === g);
      if (!O) return;
      O.entityId = w;
      const B = l.get(g);
      B && o.value && B.start(o.value, w), u.value = [...u.value], $();
    }
    function Ae(g, w, _) {
      const O = h.value;
      if (!O) return;
      const B = O.cards.find((X) => X.id === g);
      B && (B.cols = w, B.rows = _, u.value = [...u.value], $());
    }
    function zt() {
      for (const [g] of l) re(g);
      u.value = [{ id: r(), name: "Home", cards: [] }], c.value = u.value[0].id, vc(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), n.value = null;
    }
    const At = /* @__PURE__ */ z(null), ht = /* @__PURE__ */ z(null), $e = /* @__PURE__ */ z(null), We = /* @__PURE__ */ z(1), xe = /* @__PURE__ */ z(1), nt = /* @__PURE__ */ z(2), st = /* @__PURE__ */ z(2);
    function In(g) {
      const w = g.gridCol ? `${g.gridCol} / span ${g.cols}` : `span ${g.cols}`, _ = g.gridRow ? `${g.gridRow} / span ${g.rows}` : `span ${g.rows}`;
      return { gridColumn: w, gridRow: _ };
    }
    const d = Y(() => ({
      gridColumn: `${We.value} / span ${nt.value}`,
      gridRow: `${xe.value} / span ${st.value}`
    }));
    function v(g, w) {
      const _ = g.target;
      if (_.closest(".edit-ctrl-btn") || _.closest(".resize-handle") || _.closest("button") || _.closest("input")) return;
      const O = _.closest("[data-card-id]") ?? _, B = O.getBoundingClientRect(), X = "touches" in g ? g.touches[0].clientX : g.clientX, ee = "touches" in g ? g.touches[0].clientY : g.clientY, ie = X - B.left, Se = ee - B.top;
      let ke = !1;
      const Ce = y.value.find((qe) => qe.id === w);
      if (!Ce) return;
      function Ie(qe) {
        const Te = "touches" in qe ? qe.touches[0].clientX : qe.clientX, De = "touches" in qe ? qe.touches[0].clientY : qe.clientY;
        if (!ke) {
          const It = Te - X, Jt = De - ee;
          if (Math.abs(It) < 5 && Math.abs(Jt) < 5) return;
          ke = !0, ht.value = w, nt.value = Ce.cols, st.value = Ce.rows;
          const Fe = O.cloneNode(!0);
          Fe.classList.add("drag-ghost"), Fe.style.position = "fixed", Fe.style.width = B.width + "px", Fe.style.height = B.height + "px", Fe.style.zIndex = "1000", Fe.style.pointerEvents = "none", Fe.style.opacity = "0.85", Fe.style.transform = "scale(1.04)", Fe.style.transition = "none", Fe.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Fe), $e.value = Fe, O.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if ($e.value && ($e.value.style.left = Te - ie + "px", $e.value.style.top = De - Se + "px"), At.value) {
          const It = At.value.getBoundingClientRect(), Jt = Te - ie - It.left - vd + B.width / 2, Fe = De - Se - It.top - gd + B.height / 2, ml = Math.max(1, Math.round(Jt / Xo)), yl = Math.max(1, Math.round(Fe / Xo));
          We.value = ml, xe.value = yl;
        }
      }
      function ot() {
        document.removeEventListener("mousemove", Ie), document.removeEventListener("mouseup", ot), document.removeEventListener("touchmove", Ie), document.removeEventListener("touchend", ot), document.body.style.userSelect = "", ke && ($e.value && ($e.value.remove(), $e.value = null), O.style.opacity = "", Ce && (Ce.gridCol = We.value, Ce.gridRow = xe.value, u.value = [...u.value], $()), ht.value = null);
      }
      document.addEventListener("mousemove", Ie), document.addEventListener("mouseup", ot), document.addEventListener("touchmove", Ie, { passive: !1 }), document.addEventListener("touchend", ot);
    }
    const b = /* @__PURE__ */ z(!1);
    function M(g) {
      b.value && (b.value = !1);
    }
    $n(() => document.addEventListener("click", M)), kn(() => document.removeEventListener("click", M));
    const T = /* @__PURE__ */ z(""), E = /* @__PURE__ */ z("");
    function H() {
      const g = /* @__PURE__ */ new Date();
      T.value = g.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), E.value = g.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let N;
    return $n(() => {
      H(), N = setInterval(H, 1e3);
    }), kn(() => {
      for (const [g] of l) re(g);
      clearInterval(N);
    }), (g, w) => (x(), I("div", null, [
      !o.value && !e.panelMode ? (x(), Re(ac, {
        key: 0,
        onToken: me
      })) : (x(), I("div", ed, [
        p("header", td, [
          p("div", nd, [
            _e(sf, {
              token: o.value
            }, null, 8, ["token"]),
            _e(kf, {
              token: o.value
            }, null, 8, ["token"]),
            _e(Vf, {
              token: o.value
            }, null, 8, ["token"]),
            _e(Zf, {
              token: o.value
            }, null, 8, ["token"])
          ]),
          p("div", sd, [
            p("div", od, [
              p("span", id, U(T.value), 1),
              p("span", ld, U(E.value), 1)
            ])
          ])
        ]),
        p("main", {
          ref_key: "gridRef",
          ref: At,
          class: "dashboard-main"
        }, [
          (x(!0), I(te, null, Ve(y.value, (_) => {
            var O, B, X;
            return x(), Re(Yu, {
              key: _.id,
              "data-card-id": _.id,
              style: Kt(In(_)),
              class: ge({ "card-dragging": ht.value === _.id }),
              "entity-id": _.entityId,
              token: o.value,
              cols: _.cols,
              rows: _.rows,
              state: ((O = i[_.id]) == null ? void 0 : O.state) ?? null,
              loading: ((B = i[_.id]) == null ? void 0 : B.loading) ?? !0,
              error: ((X = i[_.id]) == null ? void 0 : X.error) ?? null,
              onChangeEntity: (ee) => Ke(_.id, ee),
              onRemove: (ee) => J(_.id),
              onResize: (ee, ie) => Ae(_.id, ee, ie),
              onMousedown: (ee) => v(ee, _.id),
              onTouchstart: (ee) => v(ee, _.id)
            }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]);
          }), 128)),
          ht.value ? (x(), I("div", {
            key: 0,
            class: "drop-placeholder",
            style: Kt(d.value)
          }, null, 4)) : ne("", !0)
        ], 512),
        p("nav", rd, [
          p("div", ad, [
            (x(!0), I(te, null, Ve(u.value, (_, O) => (x(), I("button", {
              key: _.id,
              class: ge(["page-tab", { active: c.value === _.id }]),
              onClick: (B) => F(_.id),
              onDblclick: (B) => f(_.id),
              onTouchstartPassive: (B) => Z(_.id),
              onTouchend: ue,
              onTouchmove: ue
            }, [
              se.value === _.id ? Wt((x(), I("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: D,
                "onUpdate:modelValue": w[0] || (w[0] = (B) => L.value = B),
                class: "page-tab-input",
                onBlur: k,
                onKeydown: [
                  Be(k, ["enter"]),
                  Be(j, ["escape"])
                ],
                onClick: w[1] || (w[1] = le(() => {
                }, ["stop"]))
              }, null, 544)), [
                [Ut, L.value]
              ]) : (x(), I("span", ud, U(_.name), 1))
            ], 42, cd))), 128))
          ])
        ]),
        (x(), Re(Mt, { to: "body" }, [
          W.value ? (x(), I("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: w[5] || (w[5] = le((_) => W.value = null, ["self"]))
          }, [
            p("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: w[4] || (w[4] = le(() => {
              }, ["stop"]))
            }, [
              p("div", fd, [
                w[12] || (w[12] = p("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                p("button", {
                  class: "ha-modal-close",
                  onClick: w[2] || (w[2] = (_) => W.value = null)
                }, "✕")
              ]),
              p("p", dd, " „" + U(C.value) + '" mit ' + U(m.value) + " Karte" + U(m.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              p("div", hd, [
                p("button", {
                  class: "page-delete-cancel",
                  onClick: w[3] || (w[3] = (_) => W.value = null)
                }, "Abbrechen"),
                p("button", {
                  class: "page-delete-confirm",
                  onClick: A
                }, "Löschen")
              ])
            ])
          ])) : ne("", !0)
        ])),
        p("div", pd, [
          p("button", {
            class: "burger-btn",
            onClick: w[6] || (w[6] = le((_) => b.value = !b.value, ["stop"]))
          }, [...w[13] || (w[13] = [
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1),
            p("span", { class: "burger-line" }, null, -1)
          ])]),
          _e(Sa, { name: "burger-pop" }, {
            default: Ei(() => [
              b.value ? (x(), I("div", {
                key: 0,
                class: "burger-menu",
                onClick: w[11] || (w[11] = le(() => {
                }, ["stop"]))
              }, [
                p("button", {
                  class: "burger-item",
                  onClick: w[7] || (w[7] = (_) => {
                    K(), b.value = !1;
                  })
                }, [...w[14] || (w[14] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  jt(" Karte hinzufügen ", -1)
                ])]),
                p("button", {
                  class: "burger-item",
                  onClick: w[8] || (w[8] = (_) => {
                    R(), b.value = !1;
                  })
                }, [...w[15] || (w[15] = [
                  p("span", { class: "burger-item-icon" }, "+", -1),
                  jt(" Neue Seite ", -1)
                ])]),
                u.value.length > 1 ? (x(), I("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: w[9] || (w[9] = (_) => {
                    S(c.value), b.value = !1;
                  })
                }, [...w[16] || (w[16] = [
                  p("span", { class: "burger-item-icon" }, "✕", -1),
                  jt(" Seite löschen ", -1)
                ])])) : ne("", !0),
                e.panelMode ? ne("", !0) : (x(), I(te, { key: 1 }, [
                  w[17] || (w[17] = p("div", { class: "burger-divider" }, null, -1)),
                  p("button", {
                    class: "burger-item burger-item-muted",
                    onClick: w[10] || (w[10] = (_) => {
                      zt(), b.value = !1;
                    })
                  }, " Abmelden ")
                ], 64))
              ])) : ne("", !0)
            ]),
            _: 1
          })
        ])
      ]))
    ]));
  }
}), yd = /* @__PURE__ */ tt(md, [["__scopeId", "data-v-95ac6cdb"]]);
class _d extends HTMLElement {
  constructor() {
    super(...arguments);
    io(this, "_app", null);
  }
  set hass(n) {
    var o, i;
    const s = ((i = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : i.access_token) ?? null;
    if (s && uc(s), !this._app && s) {
      hl(!0);
      const l = document.createElement("div");
      l.style.height = "100%", this.appendChild(l), this._app = Qa(yd, { panelMode: !0 }), this._app.mount(l);
    }
  }
}
customElements.define("homeboard-panel", _d);
