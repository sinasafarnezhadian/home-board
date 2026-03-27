(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode('.setup[data-v-97d10609]{display:flex;align-items:center;justify-content:center;min-height:100vh}.setup-card[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:28px;padding:40px;max-width:420px;width:calc(100% - 48px);display:flex;flex-direction:column;gap:20px;box-shadow:12px 12px 24px #c8cdd5,-12px -12px 24px #fff}h2[data-v-97d10609]{font-size:1.25rem;font-weight:700;color:#2d3748;letter-spacing:-.01em}p[data-v-97d10609]{font-size:.83rem;color:#a0aec0;line-height:1.7}p strong[data-v-97d10609]{color:#718096;font-weight:600}.field-group[data-v-97d10609]{display:flex;flex-direction:column;gap:6px}.field-label[data-v-97d10609]{font-size:.72rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}input[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;padding:12px 16px;width:100%;outline:none;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;transition:box-shadow .2s}input[data-v-97d10609]:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}input[data-v-97d10609]::placeholder{color:#c0c7d0}button[data-v-97d10609]{background:#e8ecf1;border:none;border-radius:12px;color:#2563eb;cursor:pointer;font-size:.92rem;font-weight:700;padding:13px;width:100%;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;letter-spacing:.01em}button[data-v-97d10609]:disabled{color:#c0c7d0;cursor:not-allowed;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}button[data-v-97d10609]:hover:not(:disabled){box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}button[data-v-97d10609]:active:not(:disabled){box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.error[data-v-97d10609]{color:#e53e3e;font-size:.82rem;background:#e53e3e0f;border-radius:10px;padding:10px 14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.weather-body[data-v-c8484bb4]{justify-content:center}.weather-layout[data-v-c8484bb4]{display:flex;align-items:center;justify-content:space-between;width:100%;gap:8px;flex:1}.weather-left[data-v-c8484bb4]{display:flex;flex-direction:column;gap:2px;min-width:0}.weather-temp[data-v-c8484bb4]{font-size:2.6rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.weather-condition[data-v-c8484bb4]{font-size:.72rem;color:#a0aec0;font-weight:600;text-transform:uppercase;letter-spacing:.04em}.weather-meta[data-v-c8484bb4]{display:flex;flex-direction:column;gap:1px;margin-top:4px}.weather-meta-item[data-v-c8484bb4]{font-size:.68rem;color:#a0aec0;font-weight:500}.weather-right[data-v-c8484bb4]{flex-shrink:0}.weather-svg-icon[data-v-c8484bb4]{display:flex;align-items:center;justify-content:center}.weather-body.short .weather-temp[data-v-c8484bb4]{font-size:1.4rem}.weather-body.short .weather-meta[data-v-c8484bb4]{display:none}.weather-body.short .weather-svg-icon[data-v-c8484bb4] svg{width:40px;height:40px}.weather-body.narrow .weather-temp[data-v-c8484bb4]{font-size:1.8rem}.weather-body.narrow .weather-condition[data-v-c8484bb4]{font-size:.6rem}.weather-body.compact .weather-temp[data-v-c8484bb4]{font-size:1.5rem}.weather-body.compact .weather-condition[data-v-c8484bb4]{font-size:.55rem}.weather-body.compact .weather-meta[data-v-c8484bb4]{display:none}.weather-body.compact .weather-svg-icon[data-v-c8484bb4] svg{width:28px;height:28px}.light-ctrl-btn[data-v-c8484bb4]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover,.card:hover .light-ctrl-btn[data-v-c8484bb4]{opacity:1}.light-ctrl-btn[data-v-c8484bb4]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-c8484bb4]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.body-center[data-v-c8484bb4]{flex:1;display:flex;flex-direction:column;align-items:center}.light-ctrl-btn[data-v-7bb31e14]{position:absolute;top:8px;left:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px;display:flex;align-items:center;justify-content:center;color:#d69e2e;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover,.card:hover .light-ctrl-btn[data-v-7bb31e14]{opacity:1}.light-ctrl-btn[data-v-7bb31e14]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.light-ctrl-btn[data-v-7bb31e14]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .light-ctrl-btn{padding:4px;border-radius:8px;top:5px;left:5px}.card.small .light-ctrl-btn{width:12px;height:12px}.body-center[data-v-7bb31e14]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-7bb31e14]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-7bb31e14]{margin-top:auto;padding-top:12px}.bulb-btn[data-v-7bb31e14]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.bulb-btn svg[data-v-7bb31e14]{width:32px;height:32px;transition:color .2s,filter .2s}.bulb-btn[data-v-7bb31e14]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.bulb-btn.on[data-v-7bb31e14]:not(.pressing){color:#eab308;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 18px #eab30866,0 0 5px #eab30840 inset}.bulb-btn.on svg[data-v-7bb31e14]{fill:#eab30826;filter:drop-shadow(0 0 6px rgba(234,179,8,.6))}.bulb-btn.pressing[data-v-7bb31e14]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .bulb-btn[data-v-7bb31e14]{width:48px;height:48px}.body-center.short .bulb-btn svg[data-v-7bb31e14]{width:24px;height:24px}.body-center.short .updated[data-v-7bb31e14]{display:none}.body-center.compact .bulb-btn[data-v-7bb31e14]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .bulb-btn svg[data-v-7bb31e14]{width:20px;height:20px}.body-center.compact .bulb-btn.on[data-v-7bb31e14]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #eab30859,0 0 3px #eab30833 inset}.body-center.compact .bulb-btn.pressing[data-v-7bb31e14]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.updated[data-v-7bb31e14]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.compact .updated[data-v-7bb31e14]{display:none}.body-center[data-v-495ed0f0]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-495ed0f0]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-495ed0f0]{margin-top:auto;padding-top:12px}.updated[data-v-495ed0f0]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.power-btn[data-v-495ed0f0]{background:#e8ecf1;border:none;border-radius:50%;cursor:pointer;width:72px;height:72px;display:flex;align-items:center;justify-content:center;color:#b0bac6;box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff;transition:box-shadow .15s,color .15s;outline:none;-webkit-tap-highlight-color:transparent}.power-btn svg[data-v-495ed0f0]{width:28px;height:28px;transition:color .2s,filter .2s}.power-btn[data-v-495ed0f0]:not(.on):not(.pressing){box-shadow:6px 6px 12px #c8cdd5,-6px -6px 12px #fff}.power-btn.on[data-v-495ed0f0]:not(.pressing){color:#22c55e;box-shadow:3px 3px 7px #c8cdd5,-3px -3px 7px #fff,0 0 16px #22c55e59,0 0 4px #22c55e33 inset}.power-btn.on svg[data-v-495ed0f0]{filter:drop-shadow(0 0 5px rgba(34,197,94,.6))}.power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff;color:#718096}.body-center.short .power-btn[data-v-495ed0f0]{width:48px;height:48px}.body-center.short .power-btn svg[data-v-495ed0f0]{width:22px;height:22px}.body-center.short .updated[data-v-495ed0f0]{display:none}.body-center.compact .power-btn[data-v-495ed0f0]{width:40px;height:40px;box-shadow:4px 4px 8px #c8cdd5,-4px -4px 8px #fff}.body-center.compact .power-btn svg[data-v-495ed0f0]{width:18px;height:18px}.body-center.compact .power-btn.on[data-v-495ed0f0]:not(.pressing){box-shadow:2px 2px 5px #c8cdd5,-2px -2px 5px #fff,0 0 10px #22c55e59,0 0 3px #22c55e33 inset}.body-center.compact .power-btn.pressing[data-v-495ed0f0]{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.body-center.compact .updated[data-v-495ed0f0]{display:none}.body-center[data-v-336a5298]{flex:1;display:flex;flex-direction:column;align-items:center}.body-center .center-wrap[data-v-336a5298]{flex:1;display:flex;align-items:center;justify-content:center}.body-center .updated[data-v-336a5298]{margin-top:auto;padding-top:12px}.state[data-v-336a5298]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.value[data-v-336a5298]{padding:8px 0 4px}.number[data-v-336a5298]{font-size:3.4rem;font-weight:700;color:#2d3748;line-height:1;letter-spacing:-.03em}.unit[data-v-336a5298]{font-size:1.3rem;color:#a0aec0;font-weight:400}.updated[data-v-336a5298]{font-size:.7rem;color:#c0c7d0;letter-spacing:.02em;text-align:center}.body-center.short .number[data-v-336a5298]{font-size:1.4rem}.body-center.short .unit[data-v-336a5298]{font-size:.72rem}.body-center.short .updated[data-v-336a5298]{display:none}.body-center.compact .number[data-v-336a5298]{font-size:1.6rem}.body-center.compact .unit[data-v-336a5298]{font-size:.65rem}.body-center.narrow .number[data-v-336a5298]{font-size:1.8rem}.body-center.narrow .unit[data-v-336a5298]{font-size:.8rem}.card[data-v-26419e66]{background:#e8ecf1;border:none;border-radius:20px;padding:24px 20px 20px;width:100%;height:100%;display:flex;flex-direction:column;gap:0px;position:relative;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;transition:box-shadow .4s,transform .4s;overflow:hidden}.card[data-v-26419e66]:after{content:"";position:absolute;bottom:-18px;left:15%;right:15%;height:28px;border-radius:50%;background:radial-gradient(ellipse at center,rgba(255,160,60,0) 0%,transparent 100%);filter:blur(10px);transition:background .5s,opacity .5s;pointer-events:none;z-index:-1}.card.active[data-v-26419e66]:after{background:radial-gradient(ellipse at center,rgba(255,155,40,.65) 0%,rgba(255,120,20,.2) 60%,transparent 100%)}.card.active[data-v-26419e66]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 18px 32px -8px #ff8c1e40}.card-header[data-v-26419e66]{display:flex;align-items:center;justify-content:center;min-height:24px}.label[data-v-26419e66]{font-size:.72rem;color:#a0aec0;font-weight:600;letter-spacing:.06em;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;text-transform:uppercase;text-align:center;max-width:100%}.edit-ctrl-btn[data-v-26419e66]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.card:hover .edit-ctrl-btn[data-v-26419e66],.card:hover .light-ctrl-btn[data-v-26419e66]{opacity:1}.edit-ctrl-btn[data-v-26419e66]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-26419e66]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.card.small .edit-ctrl-btn[data-v-26419e66]{padding:4px 5px;border-radius:8px;top:5px;right:5px;gap:2px}.card.small .edit-ctrl-btn .dot[data-v-26419e66]{width:2px;height:2px}.dot[data-v-26419e66]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.state[data-v-26419e66]{display:flex;align-items:baseline;justify-content:center;gap:6px}.state.loading[data-v-26419e66]{justify-content:center;padding:16px 0}.state.error[data-v-26419e66]{color:#e53e3e;font-size:.875rem;gap:8px;align-items:center;justify-content:center}.spinner[data-v-26419e66]{display:inline-block;width:26px;height:26px;border:3px solid #d8dde5;border-top-color:#2563eb;border-radius:50%;animation:spin-26419e66 .8s linear infinite}@keyframes spin-26419e66{to{transform:rotate(360deg)}}.card.narrow[data-v-26419e66]{padding:16px 10px 12px;border-radius:16px}.card.narrow .label[data-v-26419e66]{font-size:.55rem;letter-spacing:.04em}.card.small[data-v-26419e66]{padding:12px 10px 10px;border-radius:14px;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff}.card.small.active[data-v-26419e66]{box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff,0 12px 20px -6px #ff8c1e40}.card.small .label[data-v-26419e66]{font-size:.55rem;letter-spacing:.04em}.card.small .spinner[data-v-26419e66]{width:18px;height:18px;border-width:2px}.card.small[data-v-26419e66]:after{bottom:-12px;height:18px}.card.short[data-v-26419e66]{padding:14px 16px 12px}.card.short .label[data-v-26419e66]{font-size:.6rem}.resize-handle[data-v-26419e66]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-26419e66]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.card:hover .resize-handle[data-v-26419e66]{opacity:1}.ha-toggle-row[data-v-26419e66]{display:flex;align-items:center;justify-content:space-between;padding:10px 0 4px}.ha-toggle-label[data-v-26419e66]{font-size:.85rem;color:#4a5568;font-weight:500}.ha-toggle[data-v-26419e66]{position:relative;width:44px;height:24px;border:none;border-radius:12px;cursor:pointer;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;transition:box-shadow .25s,background .25s;padding:0}.ha-toggle.on[data-v-26419e66]{box-shadow:inset 2px 2px 4px #22c55e40,inset -2px -2px 4px #fff9,0 0 8px #22c55e4d}.ha-toggle-knob[data-v-26419e66]{position:absolute;top:3px;left:3px;width:18px;height:18px;border-radius:50%;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-1px -1px 3px #fff;transition:transform .2s,background .2s,box-shadow .2s}.ha-toggle.on .ha-toggle-knob[data-v-26419e66]{transform:translate(20px);background:#22c55e;box-shadow:1px 1px 3px #00000026,0 0 6px #22c55e66}.heading[data-v-7a388668]{display:flex;align-items:flex-end;padding:0 2px;position:relative;overflow:hidden;-webkit-user-select:none;user-select:none}.heading.short[data-v-7a388668]{align-items:flex-end}.heading-content[data-v-7a388668]{width:100%;display:flex;flex-direction:column;justify-content:flex-end;gap:4px}.heading-text[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;margin:0;cursor:default;word-break:break-word}.heading.short .heading-text[data-v-7a388668]{font-size:1rem}.heading-line[data-v-7a388668]{border:none;height:2px;background:#d2d8e0;margin:0;width:100%;border-radius:1px}.heading-input[data-v-7a388668]{font-size:1.3rem;font-weight:800;color:#2d3748;letter-spacing:-.02em;line-height:1;background:transparent;border:none;border-bottom:2px solid #2563eb;outline:none;width:100%;padding:0}.heading-edit-btn[data-v-7a388668]{position:absolute;top:4px;right:4px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.heading:hover .heading-edit-btn[data-v-7a388668]{opacity:1}.heading-edit-btn[data-v-7a388668]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.heading-edit-btn[data-v-7a388668]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-7a388668]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-7a388668]{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-7a388668]:before{content:"";position:absolute;bottom:4px;right:4px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.heading:hover .resize-handle[data-v-7a388668]{opacity:1}.template-card[data-v-1d42c254]{background:#e8ecf1;border-radius:20px;padding:20px;width:100%;display:flex;flex-direction:column;box-shadow:8px 8px 16px #c8cdd5,-8px -8px 16px #fff;overflow:hidden;position:relative}.template-card.small[data-v-1d42c254]{padding:10px;border-radius:14px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff}.template-card.short[data-v-1d42c254]{padding:14px 18px}.template-content[data-v-1d42c254]{flex:1;overflow:hidden;font-size:.85rem;color:#2d3748;line-height:1.5;word-break:break-word}.template-content[data-v-1d42c254] h1,.template-content[data-v-1d42c254] h2,.template-content[data-v-1d42c254] h3{margin:0 0 4px;font-weight:700;color:#2d3748}.template-content[data-v-1d42c254] h1{font-size:1.4rem}.template-content[data-v-1d42c254] h2{font-size:1.1rem}.template-content[data-v-1d42c254] h3{font-size:.95rem}.template-content[data-v-1d42c254] p{margin:0 0 4px}.template-content[data-v-1d42c254] ul,.template-content[data-v-1d42c254] ol{margin:0;padding-left:16px}.template-content[data-v-1d42c254] span,.template-content[data-v-1d42c254] div{color:inherit}.edit-ctrl-btn[data-v-1d42c254]{position:absolute;top:8px;right:8px;z-index:15;background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;padding:6px 7px;display:flex;flex-direction:column;gap:3px;align-items:center;justify-content:center;color:#a0aec0;opacity:0;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:opacity .2s,box-shadow .15s}.template-card:hover .edit-ctrl-btn[data-v-1d42c254]{opacity:1}.edit-ctrl-btn[data-v-1d42c254]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.edit-ctrl-btn[data-v-1d42c254]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.dot[data-v-1d42c254]{display:block;width:3px;height:3px;border-radius:50%;background:#a0aec0}.resize-handle[data-v-1d42c254]{position:absolute;bottom:0;right:0;width:18px;height:18px;cursor:nwse-resize;opacity:0;transition:opacity .2s;z-index:5}.resize-handle[data-v-1d42c254]:before{content:"";position:absolute;bottom:5px;right:5px;width:8px;height:8px;border-right:2px solid #b0bac6;border-bottom:2px solid #b0bac6;border-radius:0 0 3px}.template-card:hover .resize-handle[data-v-1d42c254]{opacity:1}.template-modal[data-v-1d42c254]{max-width:600px;width:90vw}.template-editor-wrap[data-v-1d42c254]{margin-bottom:12px}.template-editor[data-v-1d42c254]{width:100%;min-height:160px;max-height:400px;padding:12px;border:none;border-radius:12px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;font-family:SF Mono,Menlo,Consolas,monospace;font-size:.78rem;color:#2d3748;line-height:1.6;resize:vertical;outline:none;box-sizing:border-box;-moz-tab-size:2;tab-size:2}.template-preview-label[data-v-1d42c254]{font-size:.72rem;font-weight:600;color:#718096;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px}.template-preview[data-v-1d42c254]{padding:12px;border-radius:12px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.85rem;color:#2d3748;line-height:1.5;min-height:40px;max-height:200px;overflow-y:auto;margin-bottom:12px;word-break:break-word}.template-hint[data-v-1d42c254]{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px}.template-hint code[data-v-1d42c254]{font-size:.65rem;background:#0000000a;padding:2px 6px;border-radius:4px;color:#718096;font-family:SF Mono,Menlo,Consolas,monospace}.pill[data-v-4c919921]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#38a169;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill.active[data-v-4c919921]{color:#e53e3e;background:#f1e8e8fc;box-shadow:3px 3px 6px #dbd5d5,-3px -3px 6px #fff7f8}.pill[data-v-4c919921]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-4c919921]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-4c919921]{font-size:.85rem}.pill-label[data-v-4c919921]{white-space:nowrap}.pill[data-v-10807199]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#a0aec0;box-shadow:3px 3px 6px #e2d2abab,-3px -3px 6px #fffdf6;transition:box-shadow .15s,color .15s}.pill.active[data-v-10807199]{color:#d69e2e;box-shadow:3px 3px 6px #dacdac,-3px -3px 6px #fffdf6}.pill[data-v-10807199]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-10807199]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-10807199]{font-size:.85rem}.pill-label[data-v-10807199]{white-space:nowrap}.pill[data-v-2665ddcd]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-2665ddcd]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-2665ddcd]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-icon[data-v-2665ddcd]{font-size:.85rem}.pill-label[data-v-2665ddcd]{white-space:nowrap}.pill[data-v-a643a4ed]{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;height:32px;border-radius:20px;border:none;background:#e8ecf1;cursor:pointer;font-size:.75rem;font-weight:600;color:#2563eb;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.pill[data-v-a643a4ed]:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.pill[data-v-a643a4ed]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.pill-dot[data-v-a643a4ed]{width:8px;height:8px;border-radius:50%;background:#c125eb;animation:blink-a643a4ed 1.5s ease-in-out infinite;flex-shrink:0}@keyframes blink-a643a4ed{0%,to{opacity:1}50%{opacity:.25}}.pill-label[data-v-a643a4ed]{white-space:nowrap}.notif-item[data-v-a643a4ed]{display:flex;flex-direction:column;gap:4px;padding:12px 14px;border-radius:12px;transition:background .1s}.notif-item[data-v-a643a4ed]:hover{background:#00000008}.notif-header[data-v-a643a4ed]{display:flex;align-items:center;justify-content:space-between;gap:8px}.notif-title[data-v-a643a4ed]{font-size:.82rem;color:#2d3748;font-weight:600}.notif-time[data-v-a643a4ed]{font-size:.68rem;color:#a0aec0;font-weight:500;white-space:nowrap}.notif-message[data-v-a643a4ed]{font-size:.78rem;color:#4a5568;font-weight:400;line-height:1.4;margin:0}.notif-dismiss[data-v-a643a4ed]{align-self:flex-end;background:none;border:none;color:#2563eb;cursor:pointer;font-size:.72rem;font-weight:500;padding:2px 0;transition:color .15s}.notif-dismiss[data-v-a643a4ed]:hover{color:#e53e3e}.dashboard[data-v-3052c30b]{min-height:100vh;display:flex;flex-direction:column}.dashboard-header[data-v-3052c30b]{display:flex;align-items:center;justify-content:space-between;padding:20px 32px;background:#e8ecf1;position:relative;z-index:10;box-shadow:0 4px 12px -2px #c8cdd5}.header-left[data-v-3052c30b]{display:flex;align-items:center;gap:10px}.app-name[data-v-3052c30b]{font-size:1.1rem;font-weight:700;color:#2d3748;letter-spacing:-.02em;margin-right:6px}.header-right[data-v-3052c30b]{display:flex;align-items:center}.clock[data-v-3052c30b]{display:flex;flex-direction:column;gap:2px;text-align:right}.clock-time[data-v-3052c30b]{font-size:1.9rem;font-weight:700;color:#2d3748;letter-spacing:-.03em;line-height:1}.clock-date[data-v-3052c30b]{font-size:.78rem;color:#a0aec0;font-weight:500;letter-spacing:.01em}.dashboard-main[data-v-3052c30b]{flex:1;display:grid;grid-template-columns:repeat(auto-fill,100px);grid-auto-rows:100px;grid-auto-flow:dense;gap:20px;padding:36px 32px;align-content:start}.dashboard-main[data-v-3052c30b] .card{width:auto;min-height:unset}.dashboard-main[data-v-3052c30b] .heading{max-height:50px;align-self:end}.page-tabs[data-v-3052c30b]{display:flex;justify-content:center;padding:0 32px;margin-bottom:20px}.page-tabs-inner[data-v-3052c30b]{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:16px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-tab[data-v-3052c30b]{position:relative;display:inline-flex;align-items:center;gap:4px;padding:6px 16px;border-radius:12px;border:none;background:transparent;cursor:pointer;font-size:.78rem;font-weight:500;color:#a0aec0;transition:all .2s}.page-tab.active[data-v-3052c30b]{background:#e8ecf1;color:#2d3748;font-weight:600;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-tab[data-v-3052c30b]:not(.active):hover{color:#718096}.page-tab-label[data-v-3052c30b]{white-space:nowrap}.page-tab-input[data-v-3052c30b]{background:transparent;border:none;border-bottom:1.5px solid #2563eb;outline:none;font-size:.78rem;font-weight:600;color:#2d3748;width:80px;padding:0;text-align:center}.page-delete-modal[data-v-3052c30b]{max-width:340px}.page-delete-text[data-v-3052c30b]{font-size:.85rem;color:#4a5568;line-height:1.5;margin:0 0 20px;text-align:center}.page-delete-actions[data-v-3052c30b]{display:flex;gap:10px;justify-content:center}.page-delete-cancel[data-v-3052c30b],.page-delete-confirm[data-v-3052c30b]{padding:8px 20px;border-radius:10px;border:none;font-size:.8rem;font-weight:600;cursor:pointer;transition:box-shadow .15s,background .15s}.page-delete-cancel[data-v-3052c30b]{background:#e8ecf1;color:#718096;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-cancel[data-v-3052c30b]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.page-delete-confirm[data-v-3052c30b]{background:#e53e3e;color:#fff;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff}.page-delete-confirm[data-v-3052c30b]:active{box-shadow:inset 2px 2px 4px #0003}.burger-wrap[data-v-3052c30b]{position:fixed;bottom:28px;right:28px;z-index:60}.burger-btn[data-v-3052c30b]{width:48px;height:48px;border-radius:50%;background:#e8ecf1;border:none;cursor:pointer;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:5px;box-shadow:5px 5px 10px #c8cdd5,-5px -5px 10px #fff;transition:box-shadow .15s}.burger-btn[data-v-3052c30b]:active{box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.burger-line[data-v-3052c30b]{display:block;width:20px;height:2px;border-radius:1px;background:#718096}.burger-menu[data-v-3052c30b]{position:absolute;bottom:58px;right:0;min-width:190px;background:#e8ecf1;border-radius:14px;padding:8px 0;box-shadow:6px 6px 14px #c8cdd5,-6px -6px 14px #fff;transform-origin:bottom left}.burger-pop-enter-active[data-v-3052c30b]{transition:opacity .15s,transform .15s}.burger-pop-leave-active[data-v-3052c30b]{transition:opacity .1s,transform .1s}.burger-pop-enter-from[data-v-3052c30b],.burger-pop-leave-to[data-v-3052c30b]{opacity:0;transform:scale(.9) translateY(8px)}.burger-item[data-v-3052c30b]{display:flex;align-items:center;gap:8px;width:100%;padding:10px 18px;border:none;background:none;cursor:pointer;font-size:.82rem;font-weight:500;color:#2d3748;text-align:left;transition:background .1s}.burger-item[data-v-3052c30b]:hover{background:#0000000a}.burger-item-icon[data-v-3052c30b]{font-size:.9rem;font-weight:600;width:18px;text-align:center;color:#718096}.burger-item-danger[data-v-3052c30b],.burger-item-danger .burger-item-icon[data-v-3052c30b]{color:#e53e3e}.burger-item-muted[data-v-3052c30b]{color:#a0aec0;font-size:.76rem}.burger-divider[data-v-3052c30b]{height:1px;background:#d2d8e0;margin:4px 14px}.burger-auth-key[data-v-3052c30b]{padding:6px 14px 10px}.burger-auth-input[data-v-3052c30b]{width:100%;padding:6px 10px;border:none;border-radius:8px;background:#e8ecf1;box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff;font-size:.75rem;color:#2d3748;outline:none;box-sizing:border-box}.burger-auth-actions[data-v-3052c30b]{display:flex;gap:6px;margin-top:6px}.burger-auth-save[data-v-3052c30b],.burger-auth-clear[data-v-3052c30b]{padding:4px 12px;border:none;border-radius:8px;font-size:.72rem;font-weight:600;cursor:pointer;background:#e8ecf1;color:#2d3748;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.burger-auth-save[data-v-3052c30b]:active,.burger-auth-clear[data-v-3052c30b]:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.burger-auth-clear[data-v-3052c30b]{color:#e53e3e}.card-dragging[data-v-3052c30b]{opacity:.25}.drop-placeholder[data-v-3052c30b]{border-radius:20px;background:#2563eb0f;border:2px dashed rgba(37,99,235,.25);box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;pointer-events:none;transition:grid-column .15s,grid-row .15s}*,*:before,*:after{box-sizing:border-box;margin:0;padding:0}body{font-family:-apple-system,BlinkMacSystemFont,SF Pro Display,Segoe UI,Roboto,sans-serif;background:#e8ecf1;color:#2d3748;min-height:100vh;-webkit-font-smoothing:antialiased}#app{min-height:100vh}::-webkit-scrollbar{width:4px}::-webkit-scrollbar-track{background:transparent}::-webkit-scrollbar-thumb{background:#0000001f;border-radius:2px}.ha-modal-overlay{position:fixed;top:0;right:0;bottom:0;left:0;background:#00000040;display:flex;align-items:center;justify-content:center;z-index:100}.ha-modal-box{width:340px;max-height:80vh;background:#e8ecf1;border-radius:20px;padding:28px 24px 24px;box-shadow:0 0 20px #969698;display:flex;flex-direction:column;gap:16px;overflow-y:auto}.ha-modal-header-row{display:flex;align-items:center;justify-content:space-between}.ha-modal-title{font-size:.9rem;font-weight:700;color:#2d3748;letter-spacing:.04em;text-transform:uppercase;margin:0}.ha-modal-close{background:none;border:none;color:#a0aec0;cursor:pointer;font-size:1rem;padding:4px 8px;border-radius:8px;transition:color .15s}.ha-modal-close:hover{color:#e53e3e}.ha-modal-fields{display:flex;flex-direction:column;gap:12px}.ha-modal-input-wrap{position:relative;width:100%}.ha-modal-input{background:#e8ecf1;border:none;border-radius:12px;color:#2d3748;font-size:.9rem;outline:none;padding:11px 14px;width:100%;box-sizing:border-box;transition:box-shadow .2s;box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff}.ha-modal-input:focus{box-shadow:inset 4px 4px 8px #c8cdd5,inset -4px -4px 8px #fff,0 0 0 2px #2563eb4d}.ha-modal-input::placeholder{color:#c0c7d0}.ha-modal-suggestions{background:#e8ecf1;border:none;border-radius:14px;box-shadow:8px 8px 20px #c8cdd5,-4px -4px 12px #fff;left:0;list-style:none;margin:0;padding:0;max-height:240px;overflow-y:auto;position:absolute;top:calc(100% + 6px);width:100%;z-index:20}.ha-modal-suggestion-item{cursor:pointer;display:flex;flex-direction:column;gap:2px;padding:9px 14px;transition:background .1s}.ha-modal-suggestion-item:hover,.ha-modal-suggestion-item.active{background:#2563eb12}.ha-modal-s-entity{color:#4a5568;font-size:.8rem;font-weight:500}.ha-modal-s-name{color:#a0aec0;font-size:.71rem}.ha-modal-hint{font-size:.72rem;color:#b0bac6;letter-spacing:.01em}.ha-modal-actions{display:flex;gap:10px}.ha-modal-btn{background:#e8ecf1;border:none;border-radius:10px;cursor:pointer;font-size:.82rem;font-weight:600;padding:10px 16px;flex:1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;transition:box-shadow .15s,color .15s}.ha-modal-btn:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-modal-btn:active{box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.ha-modal-btn.confirm{color:#38a169}.ha-modal-btn.cancel{color:#e53e3e}.ha-modal-empty{text-align:center;color:#a0aec0;font-size:.85rem;padding:16px 0}.ha-modal-entity-list{list-style:none;display:flex;flex-direction:column;gap:2px}.ha-modal-entity-row{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;border-radius:12px;transition:background .1s}.ha-modal-entity-row:hover{background:#00000008}.ha-modal-entity-name{font-size:.82rem;color:#4a5568;font-weight:500}.ha-modal-entity-value{font-size:.82rem;color:#2d3748;font-weight:600}.ha-modal-entity-badge{font-size:.72rem;font-weight:600;padding:3px 10px;border-radius:12px}.ha-modal-entity-badge.closed{color:#38a169;background:#38a1691a}.ha-modal-entity-badge.open{color:#e53e3e;background:#e53e3e1a}.ha-modal-toggle-btn{font-size:.72rem;font-weight:600;padding:4px 12px;border-radius:10px;border:none;cursor:pointer;background:#e8ecf1;box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff;transition:box-shadow .15s,color .15s}.ha-modal-toggle-btn.on{color:#d69e2e}.ha-modal-toggle-btn.off{color:#a0aec0}.ha-modal-toggle-btn:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-modal-header-actions{display:flex;align-items:center;gap:4px}.ha-modal-icon-btn{background:none;border:none;color:#a0aec0;cursor:pointer;padding:4px 6px;border-radius:8px;display:flex;align-items:center;transition:color .15s}.ha-modal-icon-btn:hover{color:#718096}.ha-modal-icon-btn.active{color:#2563eb}.ha-modal-remove-btn{background:none;border:none;color:#c0c7d0;cursor:pointer;font-size:.85rem;padding:2px 6px;border-radius:6px;transition:color .15s}.ha-modal-remove-btn:hover{color:#e53e3e}.ha-modal-delete-btn{background:none;border:none;color:#e53e3e;cursor:pointer;font-size:.78rem;font-weight:500;padding:8px 0;text-align:center;transition:color .15s}.ha-modal-delete-btn:hover{color:#c53030}.ha-light-section{display:flex;flex-direction:column;gap:10px}.ha-light-label{font-size:.75rem;font-weight:600;color:#a0aec0;text-transform:uppercase;letter-spacing:.06em}.ha-light-slider-wrap{display:flex;align-items:center;gap:14px}.ha-light-slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;flex:1;height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff;outline:none;cursor:pointer}.ha-light-slider::-webkit-slider-thumb{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none;transition:box-shadow .15s}.ha-light-slider::-webkit-slider-thumb:hover{box-shadow:2px 2px 4px #c8cdd5,-2px -2px 4px #fff}.ha-light-slider::-webkit-slider-thumb:active{box-shadow:inset 2px 2px 4px #c8cdd5,inset -2px -2px 4px #fff}.ha-light-slider::-moz-range-thumb{width:26px;height:26px;border-radius:50%;background:#e8ecf1;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;cursor:pointer;border:none}.ha-light-slider::-moz-range-track{height:10px;border-radius:10px;background:#e8ecf1;box-shadow:inset 3px 3px 6px #c8cdd5,inset -3px -3px 6px #fff}.ha-light-slider-value{font-size:.85rem;font-weight:700;color:#2d3748;min-width:40px;text-align:right}.ha-light-slider--hue{background:linear-gradient(to right,red,#ff0,#0f0,#0ff,#00f,#f0f,red)!important;box-shadow:none!important;border-radius:10px}.ha-light-slider--sat{background:linear-gradient(to right,#e8ecf1,var(--sat-color, #ff0000))!important;box-shadow:none!important;border-radius:10px}.ha-modal-box--wide{width:480px}.wf-current{display:flex;align-items:center;justify-content:space-between;padding:12px 0}.wf-current-left{display:flex;align-items:center;gap:12px}.wf-current-icon{display:flex;align-items:center;justify-content:center;flex-shrink:0}.wf-current-info{display:flex;flex-direction:column;gap:2px}.wf-current-condition{font-size:1rem;font-weight:700;color:#2d3748}.wf-current-ago{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-current-right{display:flex;flex-direction:column;align-items:flex-end;gap:2px}.wf-current-temp{font-size:1.4rem;font-weight:700;color:#2d3748;line-height:1}.wf-current-hilo{font-size:.72rem;color:#a0aec0;font-weight:500}.wf-details{display:flex;flex-direction:column;gap:0;padding:4px 0;border-top:1px solid rgba(0,0,0,.06);border-bottom:1px solid rgba(0,0,0,.06)}.wf-detail-row{display:flex;align-items:center;justify-content:space-between;padding:8px 0}.wf-detail-label{font-size:.8rem;color:#4a5568;font-weight:500}.wf-detail-value{font-size:.8rem;color:#2d3748;font-weight:600}.wf-tabs{display:flex;gap:0;position:relative}.wf-tab{flex:1;background:none;border:none;border-bottom:2px solid transparent;cursor:pointer;font-size:.82rem;font-weight:600;color:#a0aec0;padding:8px 0;text-align:center;transition:color .15s,border-color .15s}.wf-tab.active{color:#2563eb;border-bottom-color:#2563eb}.wf-tab:hover:not(.active){color:#718096}.weather-forecast-row{display:flex;gap:6px;justify-content:space-between}.weather-forecast-day{flex:1;display:flex;flex-direction:column;align-items:center;gap:6px;padding:12px 4px;background:#e8ecf1;border-radius:14px;box-shadow:inset 2px 2px 5px #c8cdd5,inset -2px -2px 5px #fff}.wf-date{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-icon{display:flex;align-items:center;justify-content:center}.wf-temps{font-size:.78rem;font-weight:700;color:#2d3748}.wf-temps-low{font-size:.72rem;font-weight:500;color:#a0aec0}.wf-condition{font-size:.6rem;color:#a0aec0;font-weight:500;text-align:center;line-height:1.2}.wf-rain{font-size:.62rem;color:#5b9bd5;font-weight:500}.wf-hourly-scroll{display:flex;flex-direction:column;gap:12px;max-height:280px;overflow-y:auto}.wf-hourly-group{display:flex;flex-direction:column;gap:6px}.wf-hourly-day-label{font-size:.72rem;font-weight:700;color:#2d3748;text-transform:uppercase;letter-spacing:.04em}.wf-hourly-group .weather-forecast-row{overflow-x:auto;justify-content:flex-start;gap:6px;padding-bottom:4px}.wf-hourly-group .weather-forecast-day{flex:0 0 auto;min-width:50px;padding:8px 6px}.ha-light-color-preview{width:26px;height:26px;min-width:26px;border-radius:50%;box-shadow:3px 3px 6px #c8cdd5,-3px -3px 6px #fff;border:2px solid #fff}')),document.head.appendChild(e)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();
var Vi = Object.defineProperty;
var Wi = (e, t, n) => t in e ? Vi(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var To = (e, t, n) => Wi(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function io(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const we = {}, on = [], yt = () => {
}, bl = () => !1, hs = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), ro = (e) => e.startsWith("onUpdate:"), Ie = Object.assign, ao = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, Ui = Object.prototype.hasOwnProperty, me = (e, t) => Ui.call(e, t), Z = Array.isArray, ln = (e) => Fn(e) === "[object Map]", _l = (e) => Fn(e) === "[object Set]", Mo = (e) => Fn(e) === "[object Date]", oe = (e) => typeof e == "function", Ce = (e) => typeof e == "string", bt = (e) => typeof e == "symbol", ve = (e) => e !== null && typeof e == "object", wl = (e) => (ve(e) || oe(e)) && oe(e.then) && oe(e.catch), $l = Object.prototype.toString, Fn = (e) => $l.call(e), zi = (e) => Fn(e).slice(8, -1), kl = (e) => Fn(e) === "[object Object]", ps = (e) => Ce(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, $n = /* @__PURE__ */ io(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), gs = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Ji = /-\w/g, ot = gs(
  (e) => e.replace(Ji, (t) => t.slice(1).toUpperCase())
), Gi = /\B([A-Z])/g, Bt = gs(
  (e) => e.replace(Gi, "-$1").toLowerCase()
), Sl = gs((e) => e.charAt(0).toUpperCase() + e.slice(1)), Is = gs(
  (e) => e ? `on${Sl(e)}` : ""
), vt = (e, t) => !Object.is(e, t), qn = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, xl = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, uo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Yi = (e) => {
  const t = Ce(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Eo;
const vs = () => Eo || (Eo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function At(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = Ce(s) ? Zi(s) : At(s);
      if (o)
        for (const l in o)
          t[l] = o[l];
    }
    return t;
  } else if (Ce(e) || ve(e))
    return e;
}
const Xi = /;(?![^(]*\))/g, qi = /:([^]+)/, Qi = /\/\*[^]*?\*\//g;
function Zi(e) {
  const t = {};
  return e.replace(Qi, "").split(Xi).forEach((n) => {
    if (n) {
      const s = n.split(qi);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ke(e) {
  let t = "";
  if (Ce(e))
    t = e;
  else if (Z(e))
    for (let n = 0; n < e.length; n++) {
      const s = ke(e[n]);
      s && (t += s + " ");
    }
  else if (ve(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const er = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", tr = /* @__PURE__ */ io(er);
function Cl(e) {
  return !!e || e === "";
}
function nr(e, t) {
  if (e.length !== t.length) return !1;
  let n = !0;
  for (let s = 0; n && s < e.length; s++)
    n = co(e[s], t[s]);
  return n;
}
function co(e, t) {
  if (e === t) return !0;
  let n = Mo(e), s = Mo(t);
  if (n || s)
    return n && s ? e.getTime() === t.getTime() : !1;
  if (n = bt(e), s = bt(t), n || s)
    return e === t;
  if (n = Z(e), s = Z(t), n || s)
    return n && s ? nr(e, t) : !1;
  if (n = ve(e), s = ve(t), n || s) {
    if (!n || !s)
      return !1;
    const o = Object.keys(e).length, l = Object.keys(t).length;
    if (o !== l)
      return !1;
    for (const i in e) {
      const r = e.hasOwnProperty(i), a = t.hasOwnProperty(i);
      if (r && !a || !r && a || !co(e[i], t[i]))
        return !1;
    }
  }
  return String(e) === String(t);
}
const Tl = (e) => !!(e && e.__v_isRef === !0), X = (e) => Ce(e) ? e : e == null ? "" : Z(e) || ve(e) && (e.toString === $l || !oe(e.toString)) ? Tl(e) ? X(e.value) : JSON.stringify(e, Ml, 2) : String(e), Ml = (e, t) => Tl(t) ? Ml(e, t.value) : ln(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], l) => (n[Ls(s, l) + " =>"] = o, n),
    {}
  )
} : _l(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Ls(n))
} : bt(t) ? Ls(t) : ve(t) && !Z(t) && !kl(t) ? String(t) : t, Ls = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    bt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ze;
class sr {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.__v_skip = !0, this.parent = ze, !t && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(
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
      const n = ze;
      try {
        return ze = this, t();
      } finally {
        ze = n;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = ze, ze = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (ze = this.prevScope, this.prevScope = void 0);
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
function or() {
  return ze;
}
let $e;
const Rs = /* @__PURE__ */ new WeakSet();
class El {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, ze && ze.active && ze.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Rs.has(this) && (Rs.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Il(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ao(this), Ll(this);
    const t = $e, n = lt;
    $e = this, lt = !0;
    try {
      return this.fn();
    } finally {
      Rl(this), $e = t, lt = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        po(t);
      this.deps = this.depsTail = void 0, Ao(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Rs.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ws(this) && this.run();
  }
  get dirty() {
    return Ws(this);
  }
}
let Al = 0, kn, Sn;
function Il(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Sn, Sn = e;
    return;
  }
  e.next = kn, kn = e;
}
function fo() {
  Al++;
}
function ho() {
  if (--Al > 0)
    return;
  if (Sn) {
    let t = Sn;
    for (Sn = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kn; ) {
    let t = kn;
    for (kn = void 0; t; ) {
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
function Ll(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Rl(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), po(s), lr(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function Ws(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ol(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ol(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === An) || (e.globalVersion = An, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ws(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = $e, s = lt;
  $e = e, lt = !0;
  try {
    Ll(e);
    const o = e.fn(e._value);
    (t.version === 0 || vt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    $e = n, lt = s, Rl(e), e.flags &= -3;
  }
}
function po(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let l = n.computed.deps; l; l = l.nextDep)
      po(l, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function lr(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let lt = !0;
const Pl = [];
function Lt() {
  Pl.push(lt), lt = !1;
}
function Rt() {
  const e = Pl.pop();
  lt = e === void 0 ? !0 : e;
}
function Ao(e) {
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
let An = 0;
class ir {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class go {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(t) {
    if (!$e || !lt || $e === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== $e)
      n = this.activeLink = new ir($e, this), $e.deps ? (n.prevDep = $e.depsTail, $e.depsTail.nextDep = n, $e.depsTail = n) : $e.deps = $e.depsTail = n, Nl(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = $e.depsTail, n.nextDep = void 0, $e.depsTail.nextDep = n, $e.depsTail = n, $e.deps === n && ($e.deps = s);
    }
    return n;
  }
  trigger(t) {
    this.version++, An++, this.notify(t);
  }
  notify(t) {
    fo();
    try {
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ho();
    }
  }
}
function Nl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Nl(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subs = e;
  }
}
const ss = /* @__PURE__ */ new WeakMap(), Gt = /* @__PURE__ */ Symbol(
  ""
), Us = /* @__PURE__ */ Symbol(
  ""
), In = /* @__PURE__ */ Symbol(
  ""
);
function De(e, t, n) {
  if (lt && $e) {
    let s = ss.get(e);
    s || ss.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new go()), o.map = s, o.key = n), o.track();
  }
}
function Mt(e, t, n, s, o, l) {
  const i = ss.get(e);
  if (!i) {
    An++;
    return;
  }
  const r = (a) => {
    a && a.trigger();
  };
  if (fo(), t === "clear")
    i.forEach(r);
  else {
    const a = Z(e), c = a && ps(n);
    if (a && n === "length") {
      const u = Number(s);
      i.forEach((h, y) => {
        (y === "length" || y === In || !bt(y) && y >= u) && r(h);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && r(i.get(n)), c && r(i.get(In)), t) {
        case "add":
          a ? c && r(i.get("length")) : (r(i.get(Gt)), ln(e) && r(i.get(Us)));
          break;
        case "delete":
          a || (r(i.get(Gt)), ln(e) && r(i.get(Us)));
          break;
        case "set":
          ln(e) && r(i.get(Gt));
          break;
      }
  }
  ho();
}
function rr(e, t) {
  const n = ss.get(e);
  return n && n.get(t);
}
function tn(e) {
  const t = /* @__PURE__ */ ge(e);
  return t === e ? t : (De(t, "iterate", In), /* @__PURE__ */ Ye(e) ? t : t.map(it));
}
function ms(e) {
  return De(e = /* @__PURE__ */ ge(e), "iterate", In), e;
}
function ht(e, t) {
  return /* @__PURE__ */ Ot(e) ? fn(/* @__PURE__ */ Yt(e) ? it(t) : t) : it(t);
}
const ar = {
  __proto__: null,
  [Symbol.iterator]() {
    return Os(this, Symbol.iterator, (e) => ht(this, e));
  },
  concat(...e) {
    return tn(this).concat(
      ...e.map((t) => Z(t) ? tn(t) : t)
    );
  },
  entries() {
    return Os(this, "entries", (e) => (e[1] = ht(this, e[1]), e));
  },
  every(e, t) {
    return St(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return St(
      this,
      "filter",
      e,
      t,
      (n) => n.map((s) => ht(this, s)),
      arguments
    );
  },
  find(e, t) {
    return St(
      this,
      "find",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return St(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return St(
      this,
      "findLast",
      e,
      t,
      (n) => ht(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return St(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return St(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Ps(this, "includes", e);
  },
  indexOf(...e) {
    return Ps(this, "indexOf", e);
  },
  join(e) {
    return tn(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Ps(this, "lastIndexOf", e);
  },
  map(e, t) {
    return St(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return vn(this, "pop");
  },
  push(...e) {
    return vn(this, "push", e);
  },
  reduce(e, ...t) {
    return Io(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Io(this, "reduceRight", e, t);
  },
  shift() {
    return vn(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return St(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return vn(this, "splice", e);
  },
  toReversed() {
    return tn(this).toReversed();
  },
  toSorted(e) {
    return tn(this).toSorted(e);
  },
  toSpliced(...e) {
    return tn(this).toSpliced(...e);
  },
  unshift(...e) {
    return vn(this, "unshift", e);
  },
  values() {
    return Os(this, "values", (e) => ht(this, e));
  }
};
function Os(e, t, n) {
  const s = ms(e), o = s[t]();
  return s !== e && !/* @__PURE__ */ Ye(e) && (o._next = o.next, o.next = () => {
    const l = o._next();
    return l.done || (l.value = n(l.value)), l;
  }), o;
}
const ur = Array.prototype;
function St(e, t, n, s, o, l) {
  const i = ms(e), r = i !== e && !/* @__PURE__ */ Ye(e), a = i[t];
  if (a !== ur[t]) {
    const h = a.apply(e, l);
    return r ? it(h) : h;
  }
  let c = n;
  i !== e && (r ? c = function(h, y) {
    return n.call(this, ht(e, h), y, e);
  } : n.length > 2 && (c = function(h, y) {
    return n.call(this, h, y, e);
  }));
  const u = a.call(i, c, s);
  return r && o ? o(u) : u;
}
function Io(e, t, n, s) {
  const o = ms(e), l = o !== e && !/* @__PURE__ */ Ye(e);
  let i = n, r = !1;
  o !== e && (l ? (r = s.length === 0, i = function(c, u, h) {
    return r && (r = !1, c = ht(e, c)), n.call(this, c, ht(e, u), h, e);
  }) : n.length > 3 && (i = function(c, u, h) {
    return n.call(this, c, u, h, e);
  }));
  const a = o[t](i, ...s);
  return r ? ht(e, a) : a;
}
function Ps(e, t, n) {
  const s = /* @__PURE__ */ ge(e);
  De(s, "iterate", In);
  const o = s[t](...n);
  return (o === -1 || o === !1) && /* @__PURE__ */ bs(n[0]) ? (n[0] = /* @__PURE__ */ ge(n[0]), s[t](...n)) : o;
}
function vn(e, t, n = []) {
  Lt(), fo();
  const s = (/* @__PURE__ */ ge(e))[t].apply(e, n);
  return ho(), Rt(), s;
}
const cr = /* @__PURE__ */ io("__proto__,__v_isRef,__isVue"), Hl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(bt)
);
function fr(e) {
  bt(e) || (e = String(e));
  const t = /* @__PURE__ */ ge(this);
  return De(t, "has", e), t.hasOwnProperty(e);
}
class Dl {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, l = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return l;
    if (n === "__v_raw")
      return s === (o ? l ? wr : Kl : l ? jl : Bl).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = Z(t);
    if (!o) {
      let a;
      if (i && (a = ar[n]))
        return a;
      if (n === "hasOwnProperty")
        return fr;
    }
    const r = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ Ae(t) ? t : s
    );
    if ((bt(n) ? Hl.has(n) : cr(n)) || (o || De(t, "get", n), l))
      return r;
    if (/* @__PURE__ */ Ae(r)) {
      const a = i && ps(n) ? r : r.value;
      return o && ve(a) ? /* @__PURE__ */ Js(a) : a;
    }
    return ve(r) ? o ? /* @__PURE__ */ Js(r) : /* @__PURE__ */ ys(r) : r;
  }
}
class Fl extends Dl {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let l = t[n];
    const i = Z(t) && ps(n);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ot(l);
      if (!/* @__PURE__ */ Ye(s) && !/* @__PURE__ */ Ot(s) && (l = /* @__PURE__ */ ge(l), s = /* @__PURE__ */ ge(s)), !i && /* @__PURE__ */ Ae(l) && !/* @__PURE__ */ Ae(s))
        return c || (l.value = s), !0;
    }
    const r = i ? Number(n) < t.length : me(t, n), a = Reflect.set(
      t,
      n,
      s,
      /* @__PURE__ */ Ae(t) ? t : o
    );
    return t === /* @__PURE__ */ ge(o) && (r ? vt(s, l) && Mt(t, "set", n, s) : Mt(t, "add", n, s)), a;
  }
  deleteProperty(t, n) {
    const s = me(t, n);
    t[n];
    const o = Reflect.deleteProperty(t, n);
    return o && s && Mt(t, "delete", n, void 0), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!bt(n) || !Hl.has(n)) && De(t, "has", n), s;
  }
  ownKeys(t) {
    return De(
      t,
      "iterate",
      Z(t) ? "length" : Gt
    ), Reflect.ownKeys(t);
  }
}
class dr extends Dl {
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
const hr = /* @__PURE__ */ new Fl(), pr = /* @__PURE__ */ new dr(), gr = /* @__PURE__ */ new Fl(!0);
const zs = (e) => e, zn = (e) => Reflect.getPrototypeOf(e);
function vr(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, l = /* @__PURE__ */ ge(o), i = ln(l), r = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, c = o[e](...s), u = n ? zs : t ? fn : it;
    return !t && De(
      l,
      "iterate",
      a ? Us : Gt
    ), Ie(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: h, done: y } = c.next();
          return y ? { value: h, done: y } : {
            value: r ? [u(h[0]), u(h[1])] : u(h),
            done: y
          };
        }
      }
    );
  };
}
function Jn(e) {
  return function(...t) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function mr(e, t) {
  const n = {
    get(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ ge(l), r = /* @__PURE__ */ ge(o);
      e || (vt(o, r) && De(i, "get", o), De(i, "get", r));
      const { has: a } = zn(i), c = t ? zs : e ? fn : it;
      if (a.call(i, o))
        return c(l.get(o));
      if (a.call(i, r))
        return c(l.get(r));
      l !== i && l.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && De(/* @__PURE__ */ ge(o), "iterate", Gt), o.size;
    },
    has(o) {
      const l = this.__v_raw, i = /* @__PURE__ */ ge(l), r = /* @__PURE__ */ ge(o);
      return e || (vt(o, r) && De(i, "has", o), De(i, "has", r)), o === r ? l.has(o) : l.has(o) || l.has(r);
    },
    forEach(o, l) {
      const i = this, r = i.__v_raw, a = /* @__PURE__ */ ge(r), c = t ? zs : e ? fn : it;
      return !e && De(a, "iterate", Gt), r.forEach((u, h) => o.call(l, c(u), c(h), i));
    }
  };
  return Ie(
    n,
    e ? {
      add: Jn("add"),
      set: Jn("set"),
      delete: Jn("delete"),
      clear: Jn("clear")
    } : {
      add(o) {
        const l = /* @__PURE__ */ ge(this), i = zn(l), r = /* @__PURE__ */ ge(o), a = !t && !/* @__PURE__ */ Ye(o) && !/* @__PURE__ */ Ot(o) ? r : o;
        return i.has.call(l, a) || vt(o, a) && i.has.call(l, o) || vt(r, a) && i.has.call(l, r) || (l.add(a), Mt(l, "add", a, a)), this;
      },
      set(o, l) {
        !t && !/* @__PURE__ */ Ye(l) && !/* @__PURE__ */ Ot(l) && (l = /* @__PURE__ */ ge(l));
        const i = /* @__PURE__ */ ge(this), { has: r, get: a } = zn(i);
        let c = r.call(i, o);
        c || (o = /* @__PURE__ */ ge(o), c = r.call(i, o));
        const u = a.call(i, o);
        return i.set(o, l), c ? vt(l, u) && Mt(i, "set", o, l) : Mt(i, "add", o, l), this;
      },
      delete(o) {
        const l = /* @__PURE__ */ ge(this), { has: i, get: r } = zn(l);
        let a = i.call(l, o);
        a || (o = /* @__PURE__ */ ge(o), a = i.call(l, o)), r && r.call(l, o);
        const c = l.delete(o);
        return a && Mt(l, "delete", o, void 0), c;
      },
      clear() {
        const o = /* @__PURE__ */ ge(this), l = o.size !== 0, i = o.clear();
        return l && Mt(
          o,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = vr(o, e, t);
  }), n;
}
function vo(e, t) {
  const n = mr(e, t);
  return (s, o, l) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    me(n, o) && o in s ? n : s,
    o,
    l
  );
}
const yr = {
  get: /* @__PURE__ */ vo(!1, !1)
}, br = {
  get: /* @__PURE__ */ vo(!1, !0)
}, _r = {
  get: /* @__PURE__ */ vo(!0, !1)
};
const Bl = /* @__PURE__ */ new WeakMap(), jl = /* @__PURE__ */ new WeakMap(), Kl = /* @__PURE__ */ new WeakMap(), wr = /* @__PURE__ */ new WeakMap();
function $r(e) {
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
function kr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : $r(zi(e));
}
// @__NO_SIDE_EFFECTS__
function ys(e) {
  return /* @__PURE__ */ Ot(e) ? e : mo(
    e,
    !1,
    hr,
    yr,
    Bl
  );
}
// @__NO_SIDE_EFFECTS__
function Sr(e) {
  return mo(
    e,
    !1,
    gr,
    br,
    jl
  );
}
// @__NO_SIDE_EFFECTS__
function Js(e) {
  return mo(
    e,
    !0,
    pr,
    _r,
    Kl
  );
}
function mo(e, t, n, s, o) {
  if (!ve(e) || e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const l = kr(e);
  if (l === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const r = new Proxy(
    e,
    l === 2 ? s : n
  );
  return o.set(e, r), r;
}
// @__NO_SIDE_EFFECTS__
function Yt(e) {
  return /* @__PURE__ */ Ot(e) ? /* @__PURE__ */ Yt(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ot(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function ge(e) {
  const t = e && e.__v_raw;
  return t ? /* @__PURE__ */ ge(t) : e;
}
function xr(e) {
  return !me(e, "__v_skip") && Object.isExtensible(e) && xl(e, "__v_skip", !0), e;
}
const it = (e) => ve(e) ? /* @__PURE__ */ ys(e) : e, fn = (e) => ve(e) ? /* @__PURE__ */ Js(e) : e;
// @__NO_SIDE_EFFECTS__
function Ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
// @__NO_SIDE_EFFECTS__
function U(e) {
  return Cr(e, !1);
}
function Cr(e, t) {
  return /* @__PURE__ */ Ae(e) ? e : new Tr(e, t);
}
class Tr {
  constructor(t, n) {
    this.dep = new go(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : /* @__PURE__ */ ge(t), this._value = n ? t : it(t), this.__v_isShallow = n;
  }
  get value() {
    return this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || /* @__PURE__ */ Ye(t) || /* @__PURE__ */ Ot(t);
    t = s ? t : /* @__PURE__ */ ge(t), vt(t, n) && (this._rawValue = t, this._value = s ? t : it(t), this.dep.trigger());
  }
}
function Ne(e) {
  return /* @__PURE__ */ Ae(e) ? e.value : e;
}
const Mr = {
  get: (e, t, n) => t === "__v_raw" ? e : Ne(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return /* @__PURE__ */ Ae(o) && !/* @__PURE__ */ Ae(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Vl(e) {
  return /* @__PURE__ */ Yt(e) ? e : new Proxy(e, Mr);
}
class Er {
  constructor(t, n, s) {
    this._object = t, this._key = n, this._defaultValue = s, this.__v_isRef = !0, this._value = void 0, this._raw = /* @__PURE__ */ ge(t);
    let o = !0, l = t;
    if (!Z(t) || !ps(String(n)))
      do
        o = !/* @__PURE__ */ bs(l) || /* @__PURE__ */ Ye(l);
      while (o && (l = l.__v_raw));
    this._shallow = o;
  }
  get value() {
    let t = this._object[this._key];
    return this._shallow && (t = Ne(t)), this._value = t === void 0 ? this._defaultValue : t;
  }
  set value(t) {
    if (this._shallow && /* @__PURE__ */ Ae(this._raw[this._key])) {
      const n = this._object[this._key];
      if (/* @__PURE__ */ Ae(n)) {
        n.value = t;
        return;
      }
    }
    this._object[this._key] = t;
  }
  get dep() {
    return rr(this._raw, this._key);
  }
}
class Ar {
  constructor(t) {
    this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0, this._value = void 0;
  }
  get value() {
    return this._value = this._getter();
  }
}
// @__NO_SIDE_EFFECTS__
function yo(e, t, n) {
  return /* @__PURE__ */ Ae(e) ? e : oe(e) ? new Ar(e) : ve(e) && arguments.length > 1 ? Ir(e, t, n) : /* @__PURE__ */ U(e);
}
function Ir(e, t, n) {
  return new Er(e, t, n);
}
class Lr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new go(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = An - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    $e !== this)
      return Il(this, !0), !0;
  }
  get value() {
    const t = this.dep.track();
    return Ol(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter && this.setter(t);
  }
}
// @__NO_SIDE_EFFECTS__
function Rr(e, t, n = !1) {
  let s, o;
  return oe(e) ? s = e : (s = e.get, o = e.set), new Lr(s, o, n);
}
const Gn = {}, os = /* @__PURE__ */ new WeakMap();
let Ut;
function Or(e, t = !1, n = Ut) {
  if (n) {
    let s = os.get(n);
    s || os.set(n, s = []), s.push(e);
  }
}
function Pr(e, t, n = we) {
  const { immediate: s, deep: o, once: l, scheduler: i, augmentJob: r, call: a } = n, c = (L) => o ? L : /* @__PURE__ */ Ye(L) || o === !1 || o === 0 ? Et(L, 1) : Et(L);
  let u, h, y, m, N = !1, C = !1;
  if (/* @__PURE__ */ Ae(e) ? (h = () => e.value, N = /* @__PURE__ */ Ye(e)) : /* @__PURE__ */ Yt(e) ? (h = () => c(e), N = !0) : Z(e) ? (C = !0, N = e.some((L) => /* @__PURE__ */ Yt(L) || /* @__PURE__ */ Ye(L)), h = () => e.map((L) => {
    if (/* @__PURE__ */ Ae(L))
      return L.value;
    if (/* @__PURE__ */ Yt(L))
      return c(L);
    if (oe(L))
      return a ? a(L, 2) : L();
  })) : oe(e) ? t ? h = a ? () => a(e, 2) : e : h = () => {
    if (y) {
      Lt();
      try {
        y();
      } finally {
        Rt();
      }
    }
    const L = Ut;
    Ut = u;
    try {
      return a ? a(e, 3, [m]) : e(m);
    } finally {
      Ut = L;
    }
  } : h = yt, t && o) {
    const L = h, H = o === !0 ? 1 / 0 : o;
    h = () => Et(L(), H);
  }
  const O = or(), S = () => {
    u.stop(), O && O.active && ao(O.effects, u);
  };
  if (l && t) {
    const L = t;
    t = (...H) => {
      L(...H), S();
    };
  }
  let v = C ? new Array(e.length).fill(Gn) : Gn;
  const T = (L) => {
    if (!(!(u.flags & 1) || !u.dirty && !L))
      if (t) {
        const H = u.run();
        if (o || N || (C ? H.some((D, ne) => vt(D, v[ne])) : vt(H, v))) {
          y && y();
          const D = Ut;
          Ut = u;
          try {
            const ne = [
              H,
              // pass undefined as the old value when it's changed for the first time
              v === Gn ? void 0 : C && v[0] === Gn ? [] : v,
              m
            ];
            v = H, a ? a(t, 3, ne) : (
              // @ts-expect-error
              t(...ne)
            );
          } finally {
            Ut = D;
          }
        }
      } else
        u.run();
  };
  return r && r(T), u = new El(h), u.scheduler = i ? () => i(T, !1) : T, m = (L) => Or(L, !1, u), y = u.onStop = () => {
    const L = os.get(u);
    if (L) {
      if (a)
        a(L, 4);
      else
        for (const H of L) H();
      os.delete(u);
    }
  }, t ? s ? T(!0) : v = u.run() : i ? i(T.bind(null, !0), !0) : u.run(), S.pause = u.pause.bind(u), S.resume = u.resume.bind(u), S.stop = S, S;
}
function Et(e, t = 1 / 0, n) {
  if (t <= 0 || !ve(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, /* @__PURE__ */ Ae(e))
    Et(e.value, t, n);
  else if (Z(e))
    for (let s = 0; s < e.length; s++)
      Et(e[s], t, n);
  else if (_l(e) || ln(e))
    e.forEach((s) => {
      Et(s, t, n);
    });
  else if (kl(e)) {
    for (const s in e)
      Et(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Et(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Bn(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    _s(o, t, n);
  }
}
function rt(e, t, n, s) {
  if (oe(e)) {
    const o = Bn(e, t, n, s);
    return o && wl(o) && o.catch((l) => {
      _s(l, t, n);
    }), o;
  }
  if (Z(e)) {
    const o = [];
    for (let l = 0; l < e.length; l++)
      o.push(rt(e[l], t, n, s));
    return o;
  }
}
function _s(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: l, throwUnhandledErrorInProduction: i } = t && t.appContext.config || we;
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
    if (l) {
      Lt(), Bn(l, null, 10, [
        e,
        a,
        c
      ]), Rt();
      return;
    }
  }
  Nr(e, n, o, s, i);
}
function Nr(e, t, n, s = !0, o = !1) {
  if (o)
    throw e;
  console.error(e);
}
const je = [];
let ft = -1;
const rn = [];
let Dt = null, nn = 0;
const Wl = /* @__PURE__ */ Promise.resolve();
let ls = null;
function dn(e) {
  const t = ls || Wl;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Hr(e) {
  let t = ft + 1, n = je.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = je[s], l = Ln(o);
    l < e || l === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function bo(e) {
  if (!(e.flags & 1)) {
    const t = Ln(e), n = je[je.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ln(n) ? je.push(e) : je.splice(Hr(t), 0, e), e.flags |= 1, Ul();
  }
}
function Ul() {
  ls || (ls = Wl.then(Jl));
}
function Dr(e) {
  Z(e) ? rn.push(...e) : Dt && e.id === -1 ? Dt.splice(nn + 1, 0, e) : e.flags & 1 || (rn.push(e), e.flags |= 1), Ul();
}
function Lo(e, t, n = ft + 1) {
  for (; n < je.length; n++) {
    const s = je[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      je.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function zl(e) {
  if (rn.length) {
    const t = [...new Set(rn)].sort(
      (n, s) => Ln(n) - Ln(s)
    );
    if (rn.length = 0, Dt) {
      Dt.push(...t);
      return;
    }
    for (Dt = t, nn = 0; nn < Dt.length; nn++) {
      const n = Dt[nn];
      n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2;
    }
    Dt = null, nn = 0;
  }
}
const Ln = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Jl(e) {
  try {
    for (ft = 0; ft < je.length; ft++) {
      const t = je[ft];
      t && !(t.flags & 8) && (t.flags & 4 && (t.flags &= -2), Bn(
        t,
        t.i,
        t.i ? 15 : 14
      ), t.flags & 4 || (t.flags &= -2));
    }
  } finally {
    for (; ft < je.length; ft++) {
      const t = je[ft];
      t && (t.flags &= -2);
    }
    ft = -1, je.length = 0, zl(), ls = null, (je.length || rn.length) && Jl();
  }
}
let et = null, Gl = null;
function is(e) {
  const t = et;
  return et = e, Gl = e && e.type.__scopeId || null, t;
}
function Yl(e, t = et, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && us(-1);
    const l = is(t);
    let i;
    try {
      i = e(...o);
    } finally {
      is(l), s._d && us(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function at(e, t) {
  if (et === null)
    return e;
  const n = xs(et), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [l, i, r, a = we] = t[o];
    l && (oe(l) && (l = {
      mounted: l,
      updated: l
    }), l.deep && Et(i), s.push({
      dir: l,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: r,
      modifiers: a
    }));
  }
  return e;
}
function jt(e, t, n, s) {
  const o = e.dirs, l = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const r = o[i];
    l && (r.oldValue = l[i].value);
    let a = r.dir[s];
    a && (Lt(), rt(a, n, 8, [
      e.el,
      r,
      e,
      t
    ]), Rt());
  }
}
function Fr(e, t) {
  if (Ve) {
    let n = Ve.provides;
    const s = Ve.parent && Ve.parent.provides;
    s === n && (n = Ve.provides = Object.create(s)), n[e] = t;
  }
}
function Qn(e, t, n = !1) {
  const s = Mi();
  if (s || an) {
    let o = an ? an._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && oe(t) ? t.call(s && s.proxy) : t;
  }
}
const Br = /* @__PURE__ */ Symbol.for("v-scx"), jr = () => Qn(Br);
function mt(e, t, n) {
  return Xl(e, t, n);
}
function Xl(e, t, n = we) {
  const { immediate: s, deep: o, flush: l, once: i } = n, r = Ie({}, n), a = t && s || !t && l !== "post";
  let c;
  if (Nn) {
    if (l === "sync") {
      const m = jr();
      c = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!a) {
      const m = () => {
      };
      return m.stop = yt, m.resume = yt, m.pause = yt, m;
    }
  }
  const u = Ve;
  r.call = (m, N, C) => rt(m, u, N, C);
  let h = !1;
  l === "post" ? r.scheduler = (m) => {
    He(m, u && u.suspense);
  } : l !== "sync" && (h = !0, r.scheduler = (m, N) => {
    N ? m() : bo(m);
  }), r.augmentJob = (m) => {
    t && (m.flags |= 4), h && (m.flags |= 2, u && (m.id = u.uid, m.i = u));
  };
  const y = Pr(e, t, r);
  return Nn && (c ? c.push(y) : a && y()), y;
}
function Kr(e, t, n) {
  const s = this.proxy, o = Ce(e) ? e.includes(".") ? ql(s, e) : () => s[e] : e.bind(s, s);
  let l;
  oe(t) ? l = t : (l = t.handler, n = t);
  const i = jn(this), r = Xl(o, l.bind(s), n);
  return i(), r;
}
function ql(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const Ql = /* @__PURE__ */ Symbol("_vte"), Zl = (e) => e.__isTeleport, xn = (e) => e && (e.disabled || e.disabled === ""), Ro = (e) => e && (e.defer || e.defer === ""), Oo = (e) => typeof SVGElement < "u" && e instanceof SVGElement, Po = (e) => typeof MathMLElement == "function" && e instanceof MathMLElement, Gs = (e, t) => {
  const n = e && e.to;
  return Ce(n) ? t ? t(n) : null : n;
}, ei = {
  name: "Teleport",
  __isTeleport: !0,
  process(e, t, n, s, o, l, i, r, a, c) {
    const {
      mc: u,
      pc: h,
      pbc: y,
      o: { insert: m, querySelector: N, createText: C, createComment: O }
    } = c, S = xn(t.props);
    let { shapeFlag: v, children: T, dynamicChildren: L } = t;
    if (e == null) {
      const H = t.el = C(""), D = t.anchor = C("");
      m(H, n, s), m(D, n, s);
      const ne = (P, B) => {
        v & 16 && u(
          T,
          P,
          B,
          o,
          l,
          i,
          r,
          a
        );
      }, ae = () => {
        const P = t.target = Gs(t.props, N), B = Ys(P, t, C, m);
        P && (i !== "svg" && Oo(P) ? i = "svg" : i !== "mathml" && Po(P) && (i = "mathml"), o && o.isCE && (o.ce._teleportTargets || (o.ce._teleportTargets = /* @__PURE__ */ new Set())).add(P), S || (ne(P, B), Zn(t, !1)));
      };
      S && (ne(n, D), Zn(t, !0)), Ro(t.props) ? (t.el.__isMounted = !1, He(() => {
        ae(), delete t.el.__isMounted;
      }, l)) : ae();
    } else {
      if (Ro(t.props) && e.el.__isMounted === !1) {
        He(() => {
          ei.process(
            e,
            t,
            n,
            s,
            o,
            l,
            i,
            r,
            a,
            c
          );
        }, l);
        return;
      }
      t.el = e.el, t.targetStart = e.targetStart;
      const H = t.anchor = e.anchor, D = t.target = e.target, ne = t.targetAnchor = e.targetAnchor, ae = xn(e.props), P = ae ? n : D, B = ae ? H : ne;
      if (i === "svg" || Oo(D) ? i = "svg" : (i === "mathml" || Po(D)) && (i = "mathml"), L ? (y(
        e.dynamicChildren,
        L,
        P,
        o,
        l,
        i,
        r
      ), $o(e, t, !0)) : a || h(
        e,
        t,
        P,
        B,
        o,
        l,
        i,
        r,
        !1
      ), S)
        ae ? t.props && e.props && t.props.to !== e.props.to && (t.props.to = e.props.to) : Yn(
          t,
          n,
          H,
          c,
          1
        );
      else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
        const d = t.target = Gs(
          t.props,
          N
        );
        d && Yn(
          t,
          d,
          null,
          c,
          0
        );
      } else ae && Yn(
        t,
        D,
        ne,
        c,
        1
      );
      Zn(t, S);
    }
  },
  remove(e, t, n, { um: s, o: { remove: o } }, l) {
    const {
      shapeFlag: i,
      children: r,
      anchor: a,
      targetStart: c,
      targetAnchor: u,
      target: h,
      props: y
    } = e;
    if (h && (o(c), o(u)), l && o(a), i & 16) {
      const m = l || !xn(y);
      for (let N = 0; N < r.length; N++) {
        const C = r[N];
        s(
          C,
          t,
          n,
          m,
          !!C.dynamicChildren
        );
      }
    }
  },
  move: Yn,
  hydrate: Vr
};
function Yn(e, t, n, { o: { insert: s }, m: o }, l = 2) {
  l === 0 && s(e.targetAnchor, t, n);
  const { el: i, anchor: r, shapeFlag: a, children: c, props: u } = e, h = l === 2;
  if (h && s(i, t, n), (!h || xn(u)) && a & 16)
    for (let y = 0; y < c.length; y++)
      o(
        c[y],
        t,
        n,
        2
      );
  h && s(r, t, n);
}
function Vr(e, t, n, s, o, l, {
  o: { nextSibling: i, parentNode: r, querySelector: a, insert: c, createText: u }
}, h) {
  function y(O, S) {
    let v = S;
    for (; v; ) {
      if (v && v.nodeType === 8) {
        if (v.data === "teleport start anchor")
          t.targetStart = v;
        else if (v.data === "teleport anchor") {
          t.targetAnchor = v, O._lpa = t.targetAnchor && i(t.targetAnchor);
          break;
        }
      }
      v = i(v);
    }
  }
  function m(O, S) {
    S.anchor = h(
      i(O),
      S,
      r(O),
      n,
      s,
      o,
      l
    );
  }
  const N = t.target = Gs(
    t.props,
    a
  ), C = xn(t.props);
  if (N) {
    const O = N._lpa || N.firstChild;
    t.shapeFlag & 16 && (C ? (m(e, t), y(N, O), t.targetAnchor || Ys(
      N,
      t,
      u,
      c,
      // if target is the same as the main view, insert anchors before current node
      // to avoid hydrating mismatch
      r(e) === N ? e : null
    )) : (t.anchor = i(e), y(N, O), t.targetAnchor || Ys(N, t, u, c), h(
      O && i(O),
      t,
      N,
      n,
      s,
      o,
      l
    ))), Zn(t, C);
  } else C && t.shapeFlag & 16 && (m(e, t), t.targetStart = e, t.targetAnchor = i(e));
  return t.anchor && i(t.anchor);
}
const _t = ei;
function Zn(e, t) {
  const n = e.ctx;
  if (n && n.ut) {
    let s, o;
    for (t ? (s = e.el, o = e.anchor) : (s = e.targetStart, o = e.targetAnchor); s && s !== o; )
      s.nodeType === 1 && s.setAttribute("data-v-owner", n.uid), s = s.nextSibling;
    n.ut();
  }
}
function Ys(e, t, n, s, o = null) {
  const l = t.targetStart = n(""), i = t.targetAnchor = n("");
  return l[Ql] = i, e && (s(l, e, o), s(i, e, o)), i;
}
const dt = /* @__PURE__ */ Symbol("_leaveCb"), mn = /* @__PURE__ */ Symbol("_enterCb");
function Wr() {
  const e = {
    isMounted: !1,
    isLeaving: !1,
    isUnmounting: !1,
    leavingVNodes: /* @__PURE__ */ new Map()
  };
  return On(() => {
    e.isMounted = !0;
  }), ai(() => {
    e.isUnmounting = !0;
  }), e;
}
const Ze = [Function, Array], ti = {
  mode: String,
  appear: Boolean,
  persisted: Boolean,
  // enter
  onBeforeEnter: Ze,
  onEnter: Ze,
  onAfterEnter: Ze,
  onEnterCancelled: Ze,
  // leave
  onBeforeLeave: Ze,
  onLeave: Ze,
  onAfterLeave: Ze,
  onLeaveCancelled: Ze,
  // appear
  onBeforeAppear: Ze,
  onAppear: Ze,
  onAfterAppear: Ze,
  onAppearCancelled: Ze
}, ni = (e) => {
  const t = e.subTree;
  return t.component ? ni(t.component) : t;
}, Ur = {
  name: "BaseTransition",
  props: ti,
  setup(e, { slots: t }) {
    const n = Mi(), s = Wr();
    return () => {
      const o = t.default && li(t.default(), !0);
      if (!o || !o.length)
        return;
      const l = si(o), i = /* @__PURE__ */ ge(e), { mode: r } = i;
      if (s.isLeaving)
        return Ns(l);
      const a = No(l);
      if (!a)
        return Ns(l);
      let c = Xs(
        a,
        i,
        s,
        n,
        // #11061, ensure enterHooks is fresh after clone
        (h) => c = h
      );
      a.type !== Ke && Rn(a, c);
      let u = n.subTree && No(n.subTree);
      if (u && u.type !== Ke && !zt(u, a) && ni(n).type !== Ke) {
        let h = Xs(
          u,
          i,
          s,
          n
        );
        if (Rn(u, h), r === "out-in" && a.type !== Ke)
          return s.isLeaving = !0, h.afterLeave = () => {
            s.isLeaving = !1, n.job.flags & 8 || n.update(), delete h.afterLeave, u = void 0;
          }, Ns(l);
        r === "in-out" && a.type !== Ke ? h.delayLeave = (y, m, N) => {
          const C = oi(
            s,
            u
          );
          C[String(u.key)] = u, y[dt] = () => {
            m(), y[dt] = void 0, delete c.delayedLeave, u = void 0;
          }, c.delayedLeave = () => {
            N(), delete c.delayedLeave, u = void 0;
          };
        } : u = void 0;
      } else u && (u = void 0);
      return l;
    };
  }
};
function si(e) {
  let t = e[0];
  if (e.length > 1) {
    for (const n of e)
      if (n.type !== Ke) {
        t = n;
        break;
      }
  }
  return t;
}
const zr = Ur;
function oi(e, t) {
  const { leavingVNodes: n } = e;
  let s = n.get(t.type);
  return s || (s = /* @__PURE__ */ Object.create(null), n.set(t.type, s)), s;
}
function Xs(e, t, n, s, o) {
  const {
    appear: l,
    mode: i,
    persisted: r = !1,
    onBeforeEnter: a,
    onEnter: c,
    onAfterEnter: u,
    onEnterCancelled: h,
    onBeforeLeave: y,
    onLeave: m,
    onAfterLeave: N,
    onLeaveCancelled: C,
    onBeforeAppear: O,
    onAppear: S,
    onAfterAppear: v,
    onAppearCancelled: T
  } = t, L = String(e.key), H = oi(n, e), D = (P, B) => {
    P && rt(
      P,
      s,
      9,
      B
    );
  }, ne = (P, B) => {
    const d = B[1];
    D(P, B), Z(P) ? P.every((x) => x.length <= 1) && d() : P.length <= 1 && d();
  }, ae = {
    mode: i,
    persisted: r,
    beforeEnter(P) {
      let B = a;
      if (!n.isMounted)
        if (l)
          B = O || a;
        else
          return;
      P[dt] && P[dt](
        !0
        /* cancelled */
      );
      const d = H[L];
      d && zt(e, d) && d.el[dt] && d.el[dt](), D(B, [P]);
    },
    enter(P) {
      if (H[L] === e) return;
      let B = c, d = u, x = h;
      if (!n.isMounted)
        if (l)
          B = S || c, d = v || u, x = T || h;
        else
          return;
      let K = !1;
      P[mn] = (se) => {
        K || (K = !0, se ? D(x, [P]) : D(d, [P]), ae.delayedLeave && ae.delayedLeave(), P[mn] = void 0);
      };
      const G = P[mn].bind(null, !1);
      B ? ne(B, [P, G]) : G();
    },
    leave(P, B) {
      const d = String(e.key);
      if (P[mn] && P[mn](
        !0
        /* cancelled */
      ), n.isUnmounting)
        return B();
      D(y, [P]);
      let x = !1;
      P[dt] = (G) => {
        x || (x = !0, B(), G ? D(C, [P]) : D(N, [P]), P[dt] = void 0, H[d] === e && delete H[d]);
      };
      const K = P[dt].bind(null, !1);
      H[d] = e, m ? ne(m, [P, K]) : K();
    },
    clone(P) {
      const B = Xs(
        P,
        t,
        n,
        s,
        o
      );
      return o && o(B), B;
    }
  };
  return ae;
}
function Ns(e) {
  if (ws(e))
    return e = Ft(e), e.children = null, e;
}
function No(e) {
  if (!ws(e))
    return Zl(e.type) && e.children ? si(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: t, children: n } = e;
  if (n) {
    if (t & 16)
      return n[0];
    if (t & 32 && oe(n.default))
      return n.default();
  }
}
function Rn(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Rn(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
function li(e, t = !1, n) {
  let s = [], o = 0;
  for (let l = 0; l < e.length; l++) {
    let i = e[l];
    const r = n == null ? i.key : String(n) + String(i.key != null ? i.key : l);
    i.type === ue ? (i.patchFlag & 128 && o++, s = s.concat(
      li(i.children, t, r)
    )) : (t || i.type !== Ke) && s.push(r != null ? Ft(i, { key: r }) : i);
  }
  if (o > 1)
    for (let l = 0; l < s.length; l++)
      s[l].patchFlag = -2;
  return s;
}
// @__NO_SIDE_EFFECTS__
function Xe(e, t) {
  return oe(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    Ie({ name: e.name }, t, { setup: e })
  ) : e;
}
function ii(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function Ho(e, t) {
  let n;
  return !!((n = Object.getOwnPropertyDescriptor(e, t)) && !n.configurable);
}
const rs = /* @__PURE__ */ new WeakMap();
function Cn(e, t, n, s, o = !1) {
  if (Z(e)) {
    e.forEach(
      (C, O) => Cn(
        C,
        t && (Z(t) ? t[O] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Tn(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Cn(e, t, n, s.component.subTree);
    return;
  }
  const l = s.shapeFlag & 4 ? xs(s.component) : s.el, i = o ? null : l, { i: r, r: a } = e, c = t && t.r, u = r.refs === we ? r.refs = {} : r.refs, h = r.setupState, y = /* @__PURE__ */ ge(h), m = h === we ? bl : (C) => Ho(u, C) ? !1 : me(y, C), N = (C, O) => !(O && Ho(u, O));
  if (c != null && c !== a) {
    if (Do(t), Ce(c))
      u[c] = null, m(c) && (h[c] = null);
    else if (/* @__PURE__ */ Ae(c)) {
      const C = t;
      N(c, C.k) && (c.value = null), C.k && (u[C.k] = null);
    }
  }
  if (oe(a))
    Bn(a, r, 12, [i, u]);
  else {
    const C = Ce(a), O = /* @__PURE__ */ Ae(a);
    if (C || O) {
      const S = () => {
        if (e.f) {
          const v = C ? m(a) ? h[a] : u[a] : N() || !e.k ? a.value : u[e.k];
          if (o)
            Z(v) && ao(v, l);
          else if (Z(v))
            v.includes(l) || v.push(l);
          else if (C)
            u[a] = [l], m(a) && (h[a] = u[a]);
          else {
            const T = [l];
            N(a, e.k) && (a.value = T), e.k && (u[e.k] = T);
          }
        } else C ? (u[a] = i, m(a) && (h[a] = i)) : O && (N(a, e.k) && (a.value = i), e.k && (u[e.k] = i));
      };
      if (i) {
        const v = () => {
          S(), rs.delete(e);
        };
        v.id = -1, rs.set(e, v), He(v, n);
      } else
        Do(e), S();
    }
  }
}
function Do(e) {
  const t = rs.get(e);
  t && (t.flags |= 8, rs.delete(e));
}
vs().requestIdleCallback;
vs().cancelIdleCallback;
const Tn = (e) => !!e.type.__asyncLoader, ws = (e) => e.type.__isKeepAlive;
function Jr(e, t) {
  ri(e, "a", t);
}
function Gr(e, t) {
  ri(e, "da", t);
}
function ri(e, t, n = Ve) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if ($s(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      ws(o.parent.vnode) && Yr(s, t, n, o), o = o.parent;
  }
}
function Yr(e, t, n, s) {
  const o = $s(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  hn(() => {
    ao(s[t], o);
  }, n);
}
function $s(e, t, n = Ve, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), l = t.__weh || (t.__weh = (...i) => {
      Lt();
      const r = jn(n), a = rt(t, n, e, i);
      return r(), Rt(), a;
    });
    return s ? o.unshift(l) : o.push(l), l;
  }
}
const Pt = (e) => (t, n = Ve) => {
  (!Nn || e === "sp") && $s(e, (...s) => t(...s), n);
}, Xr = Pt("bm"), On = Pt("m"), qr = Pt(
  "bu"
), Qr = Pt("u"), ai = Pt(
  "bum"
), hn = Pt("um"), Zr = Pt(
  "sp"
), ea = Pt("rtg"), ta = Pt("rtc");
function na(e, t = Ve) {
  $s("ec", e, t);
}
const sa = /* @__PURE__ */ Symbol.for("v-ndc");
function Je(e, t, n, s) {
  let o;
  const l = n, i = Z(e);
  if (i || Ce(e)) {
    const r = i && /* @__PURE__ */ Yt(e);
    let a = !1, c = !1;
    r && (a = !/* @__PURE__ */ Ye(e), c = /* @__PURE__ */ Ot(e), e = ms(e)), o = new Array(e.length);
    for (let u = 0, h = e.length; u < h; u++)
      o[u] = t(
        a ? c ? fn(it(e[u])) : it(e[u]) : e[u],
        u,
        void 0,
        l
      );
  } else if (typeof e == "number") {
    o = new Array(e);
    for (let r = 0; r < e; r++)
      o[r] = t(r + 1, r, void 0, l);
  } else if (ve(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (r, a) => t(r, a, void 0, l)
      );
    else {
      const r = Object.keys(e);
      o = new Array(r.length);
      for (let a = 0, c = r.length; a < c; a++) {
        const u = r[a];
        o[a] = t(e[u], u, a, l);
      }
    }
  else
    o = [];
  return o;
}
const qs = (e) => e ? Ei(e) ? xs(e) : qs(e.parent) : null, Mn = (
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
    $parent: (e) => qs(e.parent),
    $root: (e) => qs(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => ci(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      bo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = dn.bind(e.proxy)),
    $watch: (e) => Kr.bind(e)
  })
), Hs = (e, t) => e !== we && !e.__isScriptSetup && me(e, t), oa = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: l, accessCache: i, type: r, appContext: a } = e;
    if (t[0] !== "$") {
      const y = i[t];
      if (y !== void 0)
        switch (y) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return l[t];
        }
      else {
        if (Hs(s, t))
          return i[t] = 1, s[t];
        if (o !== we && me(o, t))
          return i[t] = 2, o[t];
        if (me(l, t))
          return i[t] = 3, l[t];
        if (n !== we && me(n, t))
          return i[t] = 4, n[t];
        Qs && (i[t] = 0);
      }
    }
    const c = Mn[t];
    let u, h;
    if (c)
      return t === "$attrs" && De(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = r.__cssModules) && (u = u[t])
    )
      return u;
    if (n !== we && me(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      h = a.config.globalProperties, me(h, t)
    )
      return h[t];
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: l } = e;
    return Hs(o, t) ? (o[t] = n, !0) : s !== we && me(s, t) ? (s[t] = n, !0) : me(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (l[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, props: l, type: i }
  }, r) {
    let a;
    return !!(n[r] || e !== we && r[0] !== "$" && me(e, r) || Hs(t, r) || me(l, r) || me(s, r) || me(Mn, r) || me(o.config.globalProperties, r) || (a = i.__cssModules) && a[r]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : me(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
function Fo(e) {
  return Z(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
let Qs = !0;
function la(e) {
  const t = ci(e), n = e.proxy, s = e.ctx;
  Qs = !1, t.beforeCreate && Bo(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: l,
    methods: i,
    watch: r,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: h,
    mounted: y,
    beforeUpdate: m,
    updated: N,
    activated: C,
    deactivated: O,
    beforeDestroy: S,
    beforeUnmount: v,
    destroyed: T,
    unmounted: L,
    render: H,
    renderTracked: D,
    renderTriggered: ne,
    errorCaptured: ae,
    serverPrefetch: P,
    // public API
    expose: B,
    inheritAttrs: d,
    // assets
    components: x,
    directives: K,
    filters: G
  } = t;
  if (c && ia(c, s, null), i)
    for (const he in i) {
      const z = i[he];
      oe(z) && (s[he] = z.bind(n));
    }
  if (o) {
    const he = o.call(n, n);
    ve(he) && (e.data = /* @__PURE__ */ ys(he));
  }
  if (Qs = !0, l)
    for (const he in l) {
      const z = l[he], Y = oe(z) ? z.bind(n, n) : oe(z.get) ? z.get.bind(n, n) : yt, ye = !oe(z) && oe(z.set) ? z.set.bind(n) : yt, Le = Q({
        get: Y,
        set: ye
      });
      Object.defineProperty(s, he, {
        enumerable: !0,
        configurable: !0,
        get: () => Le.value,
        set: (Fe) => Le.value = Fe
      });
    }
  if (r)
    for (const he in r)
      ui(r[he], s, n, he);
  if (a) {
    const he = oe(a) ? a.call(n) : a;
    Reflect.ownKeys(he).forEach((z) => {
      Fr(z, he[z]);
    });
  }
  u && Bo(u, e, "c");
  function ce(he, z) {
    Z(z) ? z.forEach((Y) => he(Y.bind(n))) : z && he(z.bind(n));
  }
  if (ce(Xr, h), ce(On, y), ce(qr, m), ce(Qr, N), ce(Jr, C), ce(Gr, O), ce(na, ae), ce(ta, D), ce(ea, ne), ce(ai, v), ce(hn, L), ce(Zr, P), Z(B))
    if (B.length) {
      const he = e.exposed || (e.exposed = {});
      B.forEach((z) => {
        Object.defineProperty(he, z, {
          get: () => n[z],
          set: (Y) => n[z] = Y,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  H && e.render === yt && (e.render = H), d != null && (e.inheritAttrs = d), x && (e.components = x), K && (e.directives = K), P && ii(e);
}
function ia(e, t, n = yt) {
  Z(e) && (e = Zs(e));
  for (const s in e) {
    const o = e[s];
    let l;
    ve(o) ? "default" in o ? l = Qn(
      o.from || s,
      o.default,
      !0
    ) : l = Qn(o.from || s) : l = Qn(o), /* @__PURE__ */ Ae(l) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => l.value,
      set: (i) => l.value = i
    }) : t[s] = l;
  }
}
function Bo(e, t, n) {
  rt(
    Z(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ui(e, t, n, s) {
  let o = s.includes(".") ? ql(n, s) : () => n[s];
  if (Ce(e)) {
    const l = t[e];
    oe(l) && mt(o, l);
  } else if (oe(e))
    mt(o, e.bind(n));
  else if (ve(e))
    if (Z(e))
      e.forEach((l) => ui(l, t, n, s));
    else {
      const l = oe(e.handler) ? e.handler.bind(n) : t[e.handler];
      oe(l) && mt(o, l, e);
    }
}
function ci(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: l,
    config: { optionMergeStrategies: i }
  } = e.appContext, r = l.get(t);
  let a;
  return r ? a = r : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (c) => as(a, c, i, !0)
  ), as(a, t, i)), ve(t) && l.set(t, a), a;
}
function as(e, t, n, s = !1) {
  const { mixins: o, extends: l } = t;
  l && as(e, l, n, !0), o && o.forEach(
    (i) => as(e, i, n, !0)
  );
  for (const i in t)
    if (!(s && i === "expose")) {
      const r = ra[i] || n && n[i];
      e[i] = r ? r(e[i], t[i]) : t[i];
    }
  return e;
}
const ra = {
  data: jo,
  props: Ko,
  emits: Ko,
  // objects
  methods: bn,
  computed: bn,
  // lifecycle
  beforeCreate: Be,
  created: Be,
  beforeMount: Be,
  mounted: Be,
  beforeUpdate: Be,
  updated: Be,
  beforeDestroy: Be,
  beforeUnmount: Be,
  destroyed: Be,
  unmounted: Be,
  activated: Be,
  deactivated: Be,
  errorCaptured: Be,
  serverPrefetch: Be,
  // assets
  components: bn,
  directives: bn,
  // watch
  watch: ua,
  // provide / inject
  provide: jo,
  inject: aa
};
function jo(e, t) {
  return t ? e ? function() {
    return Ie(
      oe(e) ? e.call(this, this) : e,
      oe(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function aa(e, t) {
  return bn(Zs(e), Zs(t));
}
function Zs(e) {
  if (Z(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function Be(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function bn(e, t) {
  return e ? Ie(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Ko(e, t) {
  return e ? Z(e) && Z(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : Ie(
    /* @__PURE__ */ Object.create(null),
    Fo(e),
    Fo(t ?? {})
  ) : t;
}
function ua(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = Ie(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = Be(e[s], t[s]);
  return n;
}
function fi() {
  return {
    app: null,
    config: {
      isNativeTag: bl,
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
let ca = 0;
function fa(e, t) {
  return function(s, o = null) {
    oe(s) || (s = Ie({}, s)), o != null && !ve(o) && (o = null);
    const l = fi(), i = /* @__PURE__ */ new WeakSet(), r = [];
    let a = !1;
    const c = l.app = {
      _uid: ca++,
      _component: s,
      _props: o,
      _container: null,
      _context: l,
      _instance: null,
      version: Va,
      get config() {
        return l.config;
      },
      set config(u) {
      },
      use(u, ...h) {
        return i.has(u) || (u && oe(u.install) ? (i.add(u), u.install(c, ...h)) : oe(u) && (i.add(u), u(c, ...h))), c;
      },
      mixin(u) {
        return l.mixins.includes(u) || l.mixins.push(u), c;
      },
      component(u, h) {
        return h ? (l.components[u] = h, c) : l.components[u];
      },
      directive(u, h) {
        return h ? (l.directives[u] = h, c) : l.directives[u];
      },
      mount(u, h, y) {
        if (!a) {
          const m = c._ceVNode || Ee(s, o);
          return m.appContext = l, y === !0 ? y = "svg" : y === !1 && (y = void 0), e(m, u, y), a = !0, c._container = u, u.__vue_app__ = c, xs(m.component);
        }
      },
      onUnmount(u) {
        r.push(u);
      },
      unmount() {
        a && (rt(
          r,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, h) {
        return l.provides[u] = h, c;
      },
      runWithContext(u) {
        const h = an;
        an = c;
        try {
          return u();
        } finally {
          an = h;
        }
      }
    };
    return c;
  };
}
let an = null;
const da = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ot(t)}Modifiers`] || e[`${Bt(t)}Modifiers`];
function ha(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || we;
  let o = n;
  const l = t.startsWith("update:"), i = l && da(s, t.slice(7));
  i && (i.trim && (o = n.map((u) => Ce(u) ? u.trim() : u)), i.number && (o = n.map(uo)));
  let r, a = s[r = Is(t)] || // also try camelCase event handler (#2249)
  s[r = Is(ot(t))];
  !a && l && (a = s[r = Is(Bt(t))]), a && rt(
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
    e.emitted[r] = !0, rt(
      c,
      e,
      6,
      o
    );
  }
}
const pa = /* @__PURE__ */ new WeakMap();
function di(e, t, n = !1) {
  const s = n ? pa : t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const l = e.emits;
  let i = {}, r = !1;
  if (!oe(e)) {
    const a = (c) => {
      const u = di(c, t, !0);
      u && (r = !0, Ie(i, u));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !l && !r ? (ve(e) && s.set(e, null), null) : (Z(l) ? l.forEach((a) => i[a] = null) : Ie(i, l), ve(e) && s.set(e, i), i);
}
function ks(e, t) {
  return !e || !hs(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), me(e, t[0].toLowerCase() + t.slice(1)) || me(e, Bt(t)) || me(e, t));
}
function Vo(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [l],
    slots: i,
    attrs: r,
    emit: a,
    render: c,
    renderCache: u,
    props: h,
    data: y,
    setupState: m,
    ctx: N,
    inheritAttrs: C
  } = e, O = is(e);
  let S, v;
  try {
    if (n.shapeFlag & 4) {
      const L = o || s, H = L;
      S = gt(
        c.call(
          H,
          L,
          u,
          h,
          m,
          y,
          N
        )
      ), v = r;
    } else {
      const L = t;
      S = gt(
        L.length > 1 ? L(
          h,
          { attrs: r, slots: i, emit: a }
        ) : L(
          h,
          null
        )
      ), v = t.props ? r : ga(r);
    }
  } catch (L) {
    En.length = 0, _s(L, e, 1), S = Ee(Ke);
  }
  let T = S;
  if (v && C !== !1) {
    const L = Object.keys(v), { shapeFlag: H } = T;
    L.length && H & 7 && (l && L.some(ro) && (v = va(
      v,
      l
    )), T = Ft(T, v, !1, !0));
  }
  return n.dirs && (T = Ft(T, null, !1, !0), T.dirs = T.dirs ? T.dirs.concat(n.dirs) : n.dirs), n.transition && Rn(T, n.transition), S = T, is(O), S;
}
const ga = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || hs(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, va = (e, t) => {
  const n = {};
  for (const s in e)
    (!ro(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
};
function ma(e, t, n) {
  const { props: s, children: o, component: l } = e, { props: i, children: r, patchFlag: a } = t, c = l.emitsOptions;
  if (t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Wo(s, i, c) : !!i;
    if (a & 8) {
      const u = t.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        const y = u[h];
        if (hi(i, s, y) && !ks(c, y))
          return !0;
      }
    }
  } else
    return (o || r) && (!r || !r.$stable) ? !0 : s === i ? !1 : s ? i ? Wo(s, i, c) : !0 : !!i;
  return !1;
}
function Wo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const l = s[o];
    if (hi(t, e, l) && !ks(n, l))
      return !0;
  }
  return !1;
}
function hi(e, t, n) {
  const s = e[n], o = t[n];
  return n === "style" && ve(s) && ve(o) ? !co(s, o) : s !== o;
}
function ya({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const pi = {}, gi = () => Object.create(pi), vi = (e) => Object.getPrototypeOf(e) === pi;
function ba(e, t, n, s = !1) {
  const o = {}, l = gi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), mi(e, t, o, l);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  n ? e.props = s ? o : /* @__PURE__ */ Sr(o) : e.type.props ? e.props = o : e.props = l, e.attrs = l;
}
function _a(e, t, n, s) {
  const {
    props: o,
    attrs: l,
    vnode: { patchFlag: i }
  } = e, r = /* @__PURE__ */ ge(o), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const u = e.vnode.dynamicProps;
      for (let h = 0; h < u.length; h++) {
        let y = u[h];
        if (ks(e.emitsOptions, y))
          continue;
        const m = t[y];
        if (a)
          if (me(l, y))
            m !== l[y] && (l[y] = m, c = !0);
          else {
            const N = ot(y);
            o[N] = eo(
              a,
              r,
              N,
              m,
              e,
              !1
            );
          }
        else
          m !== l[y] && (l[y] = m, c = !0);
      }
    }
  } else {
    mi(e, t, o, l) && (c = !0);
    let u;
    for (const h in r)
      (!t || // for camelCase
      !me(t, h) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = Bt(h)) === h || !me(t, u))) && (a ? n && // for camelCase
      (n[h] !== void 0 || // for kebab-case
      n[u] !== void 0) && (o[h] = eo(
        a,
        r,
        h,
        void 0,
        e,
        !0
      )) : delete o[h]);
    if (l !== r)
      for (const h in l)
        (!t || !me(t, h)) && (delete l[h], c = !0);
  }
  c && Mt(e.attrs, "set", "");
}
function mi(e, t, n, s) {
  const [o, l] = e.propsOptions;
  let i = !1, r;
  if (t)
    for (let a in t) {
      if ($n(a))
        continue;
      const c = t[a];
      let u;
      o && me(o, u = ot(a)) ? !l || !l.includes(u) ? n[u] = c : (r || (r = {}))[u] = c : ks(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, i = !0);
    }
  if (l) {
    const a = /* @__PURE__ */ ge(n), c = r || we;
    for (let u = 0; u < l.length; u++) {
      const h = l[u];
      n[h] = eo(
        o,
        a,
        h,
        c[h],
        e,
        !me(c, h)
      );
    }
  }
  return i;
}
function eo(e, t, n, s, o, l) {
  const i = e[n];
  if (i != null) {
    const r = me(i, "default");
    if (r && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && oe(a)) {
        const { propsDefaults: c } = o;
        if (n in c)
          s = c[n];
        else {
          const u = jn(o);
          s = c[n] = a.call(
            null,
            t
          ), u();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (l && !r ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Bt(n)) && (s = !0));
  }
  return s;
}
const wa = /* @__PURE__ */ new WeakMap();
function yi(e, t, n = !1) {
  const s = n ? wa : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const l = e.props, i = {}, r = [];
  let a = !1;
  if (!oe(e)) {
    const u = (h) => {
      a = !0;
      const [y, m] = yi(h, t, !0);
      Ie(i, y), m && r.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!l && !a)
    return ve(e) && s.set(e, on), on;
  if (Z(l))
    for (let u = 0; u < l.length; u++) {
      const h = ot(l[u]);
      Uo(h) && (i[h] = we);
    }
  else if (l)
    for (const u in l) {
      const h = ot(u);
      if (Uo(h)) {
        const y = l[u], m = i[h] = Z(y) || oe(y) ? { type: y } : Ie({}, y), N = m.type;
        let C = !1, O = !0;
        if (Z(N))
          for (let S = 0; S < N.length; ++S) {
            const v = N[S], T = oe(v) && v.name;
            if (T === "Boolean") {
              C = !0;
              break;
            } else T === "String" && (O = !1);
          }
        else
          C = oe(N) && N.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = C, m[
          1
          /* shouldCastTrue */
        ] = O, (C || me(m, "default")) && r.push(h);
      }
    }
  const c = [i, r];
  return ve(e) && s.set(e, c), c;
}
function Uo(e) {
  return e[0] !== "$" && !$n(e);
}
const _o = (e) => e === "_" || e === "_ctx" || e === "$stable", wo = (e) => Z(e) ? e.map(gt) : [gt(e)], $a = (e, t, n) => {
  if (t._n)
    return t;
  const s = Yl((...o) => wo(t(...o)), n);
  return s._c = !1, s;
}, bi = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (_o(o)) continue;
    const l = e[o];
    if (oe(l))
      t[o] = $a(o, l, s);
    else if (l != null) {
      const i = wo(l);
      t[o] = () => i;
    }
  }
}, _i = (e, t) => {
  const n = wo(t);
  e.slots.default = () => n;
}, wi = (e, t, n) => {
  for (const s in t)
    (n || !_o(s)) && (e[s] = t[s]);
}, ka = (e, t, n) => {
  const s = e.slots = gi();
  if (e.vnode.shapeFlag & 32) {
    const o = t._;
    o ? (wi(s, t, n), n && xl(s, "_", o, !0)) : bi(t, s);
  } else t && _i(e, t);
}, Sa = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let l = !0, i = we;
  if (s.shapeFlag & 32) {
    const r = t._;
    r ? n && r === 1 ? l = !1 : wi(o, t, n) : (l = !t.$stable, bi(t, o)), i = t;
  } else t && (_i(e, t), i = { default: 1 });
  if (l)
    for (const r in o)
      !_o(r) && i[r] == null && delete o[r];
}, He = Ea;
function xa(e) {
  return Ca(e);
}
function Ca(e, t) {
  const n = vs();
  n.__VUE__ = !0;
  const {
    insert: s,
    remove: o,
    patchProp: l,
    createElement: i,
    createText: r,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: h,
    nextSibling: y,
    setScopeId: m = yt,
    insertStaticContent: N
  } = e, C = (p, g, w, E = null, M = null, I = null, V = void 0, j = null, F = !!g.dynamicChildren) => {
    if (p === g)
      return;
    p && !zt(p, g) && (E = nt(p), Fe(p, M, I, !0), p = null), g.patchFlag === -2 && (F = !1, g.dynamicChildren = null);
    const { type: R, ref: q, shapeFlag: W } = g;
    switch (R) {
      case Ss:
        O(p, g, w, E);
        break;
      case Ke:
        S(p, g, w, E);
        break;
      case es:
        p == null && v(g, w, E, V);
        break;
      case ue:
        x(
          p,
          g,
          w,
          E,
          M,
          I,
          V,
          j,
          F
        );
        break;
      default:
        W & 1 ? H(
          p,
          g,
          w,
          E,
          M,
          I,
          V,
          j,
          F
        ) : W & 6 ? K(
          p,
          g,
          w,
          E,
          M,
          I,
          V,
          j,
          F
        ) : (W & 64 || W & 128) && R.process(
          p,
          g,
          w,
          E,
          M,
          I,
          V,
          j,
          F,
          $t
        );
    }
    q != null && M ? Cn(q, p && p.ref, I, g || p, !g) : q == null && p && p.ref != null && Cn(p.ref, null, I, p, !0);
  }, O = (p, g, w, E) => {
    if (p == null)
      s(
        g.el = r(g.children),
        w,
        E
      );
    else {
      const M = g.el = p.el;
      g.children !== p.children && c(M, g.children);
    }
  }, S = (p, g, w, E) => {
    p == null ? s(
      g.el = a(g.children || ""),
      w,
      E
    ) : g.el = p.el;
  }, v = (p, g, w, E) => {
    [p.el, p.anchor] = N(
      p.children,
      g,
      w,
      E,
      p.el,
      p.anchor
    );
  }, T = ({ el: p, anchor: g }, w, E) => {
    let M;
    for (; p && p !== g; )
      M = y(p), s(p, w, E), p = M;
    s(g, w, E);
  }, L = ({ el: p, anchor: g }) => {
    let w;
    for (; p && p !== g; )
      w = y(p), o(p), p = w;
    o(g);
  }, H = (p, g, w, E, M, I, V, j, F) => {
    if (g.type === "svg" ? V = "svg" : g.type === "math" && (V = "mathml"), p == null)
      D(
        g,
        w,
        E,
        M,
        I,
        V,
        j,
        F
      );
    else {
      const R = p.el && p.el._isVueCE ? p.el : null;
      try {
        R && R._beginPatch(), P(
          p,
          g,
          M,
          I,
          V,
          j,
          F
        );
      } finally {
        R && R._endPatch();
      }
    }
  }, D = (p, g, w, E, M, I, V, j) => {
    let F, R;
    const { props: q, shapeFlag: W, transition: J, dirs: ee } = p;
    if (F = p.el = i(
      p.type,
      I,
      q && q.is,
      q
    ), W & 8 ? u(F, p.children) : W & 16 && ae(
      p.children,
      F,
      null,
      E,
      M,
      Ds(p, I),
      V,
      j
    ), ee && jt(p, null, E, "created"), ne(F, p, p.scopeId, V, E), q) {
      for (const be in q)
        be !== "value" && !$n(be) && l(F, be, null, q[be], I, E);
      "value" in q && l(F, "value", null, q.value, I), (R = q.onVnodeBeforeMount) && ct(R, E, p);
    }
    ee && jt(p, null, E, "beforeMount");
    const fe = Ta(M, J);
    fe && J.beforeEnter(F), s(F, g, w), ((R = q && q.onVnodeMounted) || fe || ee) && He(() => {
      R && ct(R, E, p), fe && J.enter(F), ee && jt(p, null, E, "mounted");
    }, M);
  }, ne = (p, g, w, E, M) => {
    if (w && m(p, w), E)
      for (let I = 0; I < E.length; I++)
        m(p, E[I]);
    if (M) {
      let I = M.subTree;
      if (g === I || Si(I.type) && (I.ssContent === g || I.ssFallback === g)) {
        const V = M.vnode;
        ne(
          p,
          V,
          V.scopeId,
          V.slotScopeIds,
          M.parent
        );
      }
    }
  }, ae = (p, g, w, E, M, I, V, j, F = 0) => {
    for (let R = F; R < p.length; R++) {
      const q = p[R] = j ? Tt(p[R]) : gt(p[R]);
      C(
        null,
        q,
        g,
        w,
        E,
        M,
        I,
        V,
        j
      );
    }
  }, P = (p, g, w, E, M, I, V) => {
    const j = g.el = p.el;
    let { patchFlag: F, dynamicChildren: R, dirs: q } = g;
    F |= p.patchFlag & 16;
    const W = p.props || we, J = g.props || we;
    let ee;
    if (w && Kt(w, !1), (ee = J.onVnodeBeforeUpdate) && ct(ee, w, g, p), q && jt(g, p, w, "beforeUpdate"), w && Kt(w, !0), (W.innerHTML && J.innerHTML == null || W.textContent && J.textContent == null) && u(j, ""), R ? B(
      p.dynamicChildren,
      R,
      j,
      w,
      E,
      Ds(g, M),
      I
    ) : V || z(
      p,
      g,
      j,
      null,
      w,
      E,
      Ds(g, M),
      I,
      !1
    ), F > 0) {
      if (F & 16)
        d(j, W, J, w, M);
      else if (F & 2 && W.class !== J.class && l(j, "class", null, J.class, M), F & 4 && l(j, "style", W.style, J.style, M), F & 8) {
        const fe = g.dynamicProps;
        for (let be = 0; be < fe.length; be++) {
          const pe = fe[be], Oe = W[pe], Pe = J[pe];
          (Pe !== Oe || pe === "value") && l(j, pe, Oe, Pe, M, w);
        }
      }
      F & 1 && p.children !== g.children && u(j, g.children);
    } else !V && R == null && d(j, W, J, w, M);
    ((ee = J.onVnodeUpdated) || q) && He(() => {
      ee && ct(ee, w, g, p), q && jt(g, p, w, "updated");
    }, E);
  }, B = (p, g, w, E, M, I, V) => {
    for (let j = 0; j < g.length; j++) {
      const F = p[j], R = g[j], q = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        F.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (F.type === ue || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !zt(F, R) || // - In the case of a component, it could contain anything.
        F.shapeFlag & 198) ? h(F.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          w
        )
      );
      C(
        F,
        R,
        q,
        null,
        E,
        M,
        I,
        V,
        !0
      );
    }
  }, d = (p, g, w, E, M) => {
    if (g !== w) {
      if (g !== we)
        for (const I in g)
          !$n(I) && !(I in w) && l(
            p,
            I,
            g[I],
            null,
            M,
            E
          );
      for (const I in w) {
        if ($n(I)) continue;
        const V = w[I], j = g[I];
        V !== j && I !== "value" && l(p, I, j, V, M, E);
      }
      "value" in w && l(p, "value", g.value, w.value, M);
    }
  }, x = (p, g, w, E, M, I, V, j, F) => {
    const R = g.el = p ? p.el : r(""), q = g.anchor = p ? p.anchor : r("");
    let { patchFlag: W, dynamicChildren: J, slotScopeIds: ee } = g;
    ee && (j = j ? j.concat(ee) : ee), p == null ? (s(R, w, E), s(q, w, E), ae(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      w,
      q,
      M,
      I,
      V,
      j,
      F
    )) : W > 0 && W & 64 && J && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    p.dynamicChildren && p.dynamicChildren.length === J.length ? (B(
      p.dynamicChildren,
      J,
      w,
      M,
      I,
      V,
      j
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || M && g === M.subTree) && $o(
      p,
      g,
      !0
      /* shallow */
    )) : z(
      p,
      g,
      w,
      q,
      M,
      I,
      V,
      j,
      F
    );
  }, K = (p, g, w, E, M, I, V, j, F) => {
    g.slotScopeIds = j, p == null ? g.shapeFlag & 512 ? M.ctx.activate(
      g,
      w,
      E,
      V,
      F
    ) : G(
      g,
      w,
      E,
      M,
      I,
      V,
      F
    ) : se(p, g, F);
  }, G = (p, g, w, E, M, I, V) => {
    const j = p.component = Na(
      p,
      E,
      M
    );
    if (ws(p) && (j.ctx.renderer = $t), Ha(j, !1, V), j.asyncDep) {
      if (M && M.registerDep(j, ce, V), !p.el) {
        const F = j.subTree = Ee(Ke);
        S(null, F, g, w), p.placeholder = F.el;
      }
    } else
      ce(
        j,
        p,
        g,
        w,
        M,
        I,
        V
      );
  }, se = (p, g, w) => {
    const E = g.component = p.component;
    if (ma(p, g, w))
      if (E.asyncDep && !E.asyncResolved) {
        he(E, g, w);
        return;
      } else
        E.next = g, E.update();
    else
      g.el = p.el, E.vnode = g;
  }, ce = (p, g, w, E, M, I, V) => {
    const j = () => {
      if (p.isMounted) {
        let { next: W, bu: J, u: ee, parent: fe, vnode: be } = p;
        {
          const _ = $i(p);
          if (_) {
            W && (W.el = be.el, he(p, W, V)), _.asyncDep.then(() => {
              He(() => {
                p.isUnmounted || R();
              }, M);
            });
            return;
          }
        }
        let pe = W, Oe;
        Kt(p, !1), W ? (W.el = be.el, he(p, W, V)) : W = be, J && qn(J), (Oe = W.props && W.props.onVnodeBeforeUpdate) && ct(Oe, fe, W, be), Kt(p, !0);
        const Pe = Vo(p), b = p.subTree;
        p.subTree = Pe, C(
          b,
          Pe,
          // parent may have changed if it's in a teleport
          h(b.el),
          // anchor may have changed if it's in a fragment
          nt(b),
          p,
          M,
          I
        ), W.el = Pe.el, pe === null && ya(p, Pe.el), ee && He(ee, M), (Oe = W.props && W.props.onVnodeUpdated) && He(
          () => ct(Oe, fe, W, be),
          M
        );
      } else {
        let W;
        const { el: J, props: ee } = g, { bm: fe, m: be, parent: pe, root: Oe, type: Pe } = p, b = Tn(g);
        Kt(p, !1), fe && qn(fe), !b && (W = ee && ee.onVnodeBeforeMount) && ct(W, pe, g), Kt(p, !0);
        {
          Oe.ce && Oe.ce._hasShadowRoot() && Oe.ce._injectChildStyle(
            Pe,
            p.parent ? p.parent.type : void 0
          );
          const _ = p.subTree = Vo(p);
          C(
            null,
            _,
            w,
            E,
            p,
            M,
            I
          ), g.el = _.el;
        }
        if (be && He(be, M), !b && (W = ee && ee.onVnodeMounted)) {
          const _ = g;
          He(
            () => ct(W, pe, _),
            M
          );
        }
        (g.shapeFlag & 256 || pe && Tn(pe.vnode) && pe.vnode.shapeFlag & 256) && p.a && He(p.a, M), p.isMounted = !0, g = w = E = null;
      }
    };
    p.scope.on();
    const F = p.effect = new El(j);
    p.scope.off();
    const R = p.update = F.run.bind(F), q = p.job = F.runIfDirty.bind(F);
    q.i = p, q.id = p.uid, F.scheduler = () => bo(q), Kt(p, !0), R();
  }, he = (p, g, w) => {
    g.component = p;
    const E = p.vnode.props;
    p.vnode = g, p.next = null, _a(p, g.props, E, w), Sa(p, g.children, w), Lt(), Lo(p), Rt();
  }, z = (p, g, w, E, M, I, V, j, F = !1) => {
    const R = p && p.children, q = p ? p.shapeFlag : 0, W = g.children, { patchFlag: J, shapeFlag: ee } = g;
    if (J > 0) {
      if (J & 128) {
        ye(
          R,
          W,
          w,
          E,
          M,
          I,
          V,
          j,
          F
        );
        return;
      } else if (J & 256) {
        Y(
          R,
          W,
          w,
          E,
          M,
          I,
          V,
          j,
          F
        );
        return;
      }
    }
    ee & 8 ? (q & 16 && Qe(R, M, I), W !== R && u(w, W)) : q & 16 ? ee & 16 ? ye(
      R,
      W,
      w,
      E,
      M,
      I,
      V,
      j,
      F
    ) : Qe(R, M, I, !0) : (q & 8 && u(w, ""), ee & 16 && ae(
      W,
      w,
      E,
      M,
      I,
      V,
      j,
      F
    ));
  }, Y = (p, g, w, E, M, I, V, j, F) => {
    p = p || on, g = g || on;
    const R = p.length, q = g.length, W = Math.min(R, q);
    let J;
    for (J = 0; J < W; J++) {
      const ee = g[J] = F ? Tt(g[J]) : gt(g[J]);
      C(
        p[J],
        ee,
        w,
        null,
        M,
        I,
        V,
        j,
        F
      );
    }
    R > q ? Qe(
      p,
      M,
      I,
      !0,
      !1,
      W
    ) : ae(
      g,
      w,
      E,
      M,
      I,
      V,
      j,
      F,
      W
    );
  }, ye = (p, g, w, E, M, I, V, j, F) => {
    let R = 0;
    const q = g.length;
    let W = p.length - 1, J = q - 1;
    for (; R <= W && R <= J; ) {
      const ee = p[R], fe = g[R] = F ? Tt(g[R]) : gt(g[R]);
      if (zt(ee, fe))
        C(
          ee,
          fe,
          w,
          null,
          M,
          I,
          V,
          j,
          F
        );
      else
        break;
      R++;
    }
    for (; R <= W && R <= J; ) {
      const ee = p[W], fe = g[J] = F ? Tt(g[J]) : gt(g[J]);
      if (zt(ee, fe))
        C(
          ee,
          fe,
          w,
          null,
          M,
          I,
          V,
          j,
          F
        );
      else
        break;
      W--, J--;
    }
    if (R > W) {
      if (R <= J) {
        const ee = J + 1, fe = ee < q ? g[ee].el : E;
        for (; R <= J; )
          C(
            null,
            g[R] = F ? Tt(g[R]) : gt(g[R]),
            w,
            fe,
            M,
            I,
            V,
            j,
            F
          ), R++;
      }
    } else if (R > J)
      for (; R <= W; )
        Fe(p[R], M, I, !0), R++;
    else {
      const ee = R, fe = R, be = /* @__PURE__ */ new Map();
      for (R = fe; R <= J; R++) {
        const ie = g[R] = F ? Tt(g[R]) : gt(g[R]);
        ie.key != null && be.set(ie.key, R);
      }
      let pe, Oe = 0;
      const Pe = J - fe + 1;
      let b = !1, _ = 0;
      const $ = new Array(Pe);
      for (R = 0; R < Pe; R++) $[R] = 0;
      for (R = ee; R <= W; R++) {
        const ie = p[R];
        if (Oe >= Pe) {
          Fe(ie, M, I, !0);
          continue;
        }
        let Se;
        if (ie.key != null)
          Se = be.get(ie.key);
        else
          for (pe = fe; pe <= J; pe++)
            if ($[pe - fe] === 0 && zt(ie, g[pe])) {
              Se = pe;
              break;
            }
        Se === void 0 ? Fe(ie, M, I, !0) : ($[Se - fe] = R + 1, Se >= _ ? _ = Se : b = !0, C(
          ie,
          g[Se],
          w,
          null,
          M,
          I,
          V,
          j,
          F
        ), Oe++);
      }
      const le = b ? Ma($) : on;
      for (pe = le.length - 1, R = Pe - 1; R >= 0; R--) {
        const ie = fe + R, Se = g[ie], de = g[ie + 1], We = ie + 1 < q ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          de.el || ki(de)
        ) : E;
        $[R] === 0 ? C(
          null,
          Se,
          w,
          We,
          M,
          I,
          V,
          j,
          F
        ) : b && (pe < 0 || R !== le[pe] ? Le(Se, w, We, 2) : pe--);
      }
    }
  }, Le = (p, g, w, E, M = null) => {
    const { el: I, type: V, transition: j, children: F, shapeFlag: R } = p;
    if (R & 6) {
      Le(p.component.subTree, g, w, E);
      return;
    }
    if (R & 128) {
      p.suspense.move(g, w, E);
      return;
    }
    if (R & 64) {
      V.move(p, g, w, $t);
      return;
    }
    if (V === ue) {
      s(I, g, w);
      for (let W = 0; W < F.length; W++)
        Le(F[W], g, w, E);
      s(p.anchor, g, w);
      return;
    }
    if (V === es) {
      T(p, g, w);
      return;
    }
    if (E !== 2 && R & 1 && j)
      if (E === 0)
        j.beforeEnter(I), s(I, g, w), He(() => j.enter(I), M);
      else {
        const { leave: W, delayLeave: J, afterLeave: ee } = j, fe = () => {
          p.ctx.isUnmounted ? o(I) : s(I, g, w);
        }, be = () => {
          I._isLeaving && I[dt](
            !0
            /* cancelled */
          ), W(I, () => {
            fe(), ee && ee();
          });
        };
        J ? J(I, fe, be) : be();
      }
    else
      s(I, g, w);
  }, Fe = (p, g, w, E = !1, M = !1) => {
    const {
      type: I,
      props: V,
      ref: j,
      children: F,
      dynamicChildren: R,
      shapeFlag: q,
      patchFlag: W,
      dirs: J,
      cacheIndex: ee
    } = p;
    if (W === -2 && (M = !1), j != null && (Lt(), Cn(j, null, w, p, !0), Rt()), ee != null && (g.renderCache[ee] = void 0), q & 256) {
      g.ctx.deactivate(p);
      return;
    }
    const fe = q & 1 && J, be = !Tn(p);
    let pe;
    if (be && (pe = V && V.onVnodeBeforeUnmount) && ct(pe, g, p), q & 6)
      Zt(p.component, w, E);
    else {
      if (q & 128) {
        p.suspense.unmount(w, E);
        return;
      }
      fe && jt(p, null, g, "beforeUnmount"), q & 64 ? p.type.remove(
        p,
        g,
        w,
        $t,
        E
      ) : R && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !R.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== ue || W > 0 && W & 64) ? Qe(
        R,
        g,
        w,
        !1,
        !0
      ) : (I === ue && W & 384 || !M && q & 16) && Qe(F, g, w), E && Qt(p);
    }
    (be && (pe = V && V.onVnodeUnmounted) || fe) && He(() => {
      pe && ct(pe, g, p), fe && jt(p, null, g, "unmounted");
    }, w);
  }, Qt = (p) => {
    const { type: g, el: w, anchor: E, transition: M } = p;
    if (g === ue) {
      pn(w, E);
      return;
    }
    if (g === es) {
      L(p);
      return;
    }
    const I = () => {
      o(w), M && !M.persisted && M.afterLeave && M.afterLeave();
    };
    if (p.shapeFlag & 1 && M && !M.persisted) {
      const { leave: V, delayLeave: j } = M, F = () => V(w, I);
      j ? j(p.el, I, F) : F();
    } else
      I();
  }, pn = (p, g) => {
    let w;
    for (; p !== g; )
      w = y(p), o(p), p = w;
    o(g);
  }, Zt = (p, g, w) => {
    const { bum: E, scope: M, job: I, subTree: V, um: j, m: F, a: R } = p;
    zo(F), zo(R), E && qn(E), M.stop(), I && (I.flags |= 8, Fe(V, p, g, w)), j && He(j, g), He(() => {
      p.isUnmounted = !0;
    }, g);
  }, Qe = (p, g, w, E = !1, M = !1, I = 0) => {
    for (let V = I; V < p.length; V++)
      Fe(p[V], g, w, E, M);
  }, nt = (p) => {
    if (p.shapeFlag & 6)
      return nt(p.component.subTree);
    if (p.shapeFlag & 128)
      return p.suspense.next();
    const g = y(p.anchor || p.el), w = g && g[Ql];
    return w ? y(w) : g;
  };
  let Re = !1;
  const wt = (p, g, w) => {
    let E;
    p == null ? g._vnode && (Fe(g._vnode, null, null, !0), E = g._vnode.component) : C(
      g._vnode || null,
      p,
      g,
      null,
      null,
      null,
      w
    ), g._vnode = p, Re || (Re = !0, Lo(E), zl(), Re = !1);
  }, $t = {
    p: C,
    um: Fe,
    m: Le,
    r: Qt,
    mt: G,
    mc: ae,
    pc: z,
    pbc: B,
    n: nt,
    o: e
  };
  return {
    render: wt,
    hydrate: void 0,
    createApp: fa(wt)
  };
}
function Ds({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function Kt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Ta(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function $o(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (Z(s) && Z(o))
    for (let l = 0; l < s.length; l++) {
      const i = s[l];
      let r = o[l];
      r.shapeFlag & 1 && !r.dynamicChildren && ((r.patchFlag <= 0 || r.patchFlag === 32) && (r = o[l] = Tt(o[l]), r.el = i.el), !n && r.patchFlag !== -2 && $o(i, r)), r.type === Ss && (r.patchFlag === -1 && (r = o[l] = Tt(r)), r.el = i.el), r.type === Ke && !r.el && (r.el = i.el);
    }
}
function Ma(e) {
  const t = e.slice(), n = [0];
  let s, o, l, i, r;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const c = e[s];
    if (c !== 0) {
      if (o = n[n.length - 1], e[o] < c) {
        t[s] = o, n.push(s);
        continue;
      }
      for (l = 0, i = n.length - 1; l < i; )
        r = l + i >> 1, e[n[r]] < c ? l = r + 1 : i = r;
      c < e[n[l]] && (l > 0 && (t[s] = n[l - 1]), n[l] = s);
    }
  }
  for (l = n.length, i = n[l - 1]; l-- > 0; )
    n[l] = i, i = t[i];
  return n;
}
function $i(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : $i(t);
}
function zo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function ki(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? ki(t.subTree) : null;
}
const Si = (e) => e.__isSuspense;
function Ea(e, t) {
  t && t.pendingBranch ? Z(e) ? t.effects.push(...e) : t.effects.push(e) : Dr(e);
}
const ue = /* @__PURE__ */ Symbol.for("v-fgt"), Ss = /* @__PURE__ */ Symbol.for("v-txt"), Ke = /* @__PURE__ */ Symbol.for("v-cmt"), es = /* @__PURE__ */ Symbol.for("v-stc"), En = [];
let Ge = null;
function k(e = !1) {
  En.push(Ge = e ? null : []);
}
function Aa() {
  En.pop(), Ge = En[En.length - 1] || null;
}
let Pn = 1;
function us(e, t = !1) {
  Pn += e, e < 0 && Ge && t && (Ge.hasOnce = !0);
}
function xi(e) {
  return e.dynamicChildren = Pn > 0 ? Ge || on : null, Aa(), Pn > 0 && Ge && Ge.push(e), e;
}
function A(e, t, n, s, o, l) {
  return xi(
    f(
      e,
      t,
      n,
      s,
      o,
      l,
      !0
    )
  );
}
function Me(e, t, n, s, o) {
  return xi(
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
function cs(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function zt(e, t) {
  return e.type === t.type && e.key === t.key;
}
const Ci = ({ key: e }) => e ?? null, ts = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Ce(e) || /* @__PURE__ */ Ae(e) || oe(e) ? { i: et, r: e, k: t, f: !!n } : e : null);
function f(e, t = null, n = null, s = 0, o = null, l = e === ue ? 0 : 1, i = !1, r = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ci(t),
    ref: t && ts(t),
    scopeId: Gl,
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
    shapeFlag: l,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: et
  };
  return r ? (ko(a, n), l & 128 && e.normalize(a)) : n && (a.shapeFlag |= Ce(n) ? 8 : 16), Pn > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  Ge && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || l & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Ge.push(a), a;
}
const Ee = Ia;
function Ia(e, t = null, n = null, s = 0, o = null, l = !1) {
  if ((!e || e === sa) && (e = Ke), cs(e)) {
    const r = Ft(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ko(r, n), Pn > 0 && !l && Ge && (r.shapeFlag & 6 ? Ge[Ge.indexOf(e)] = r : Ge.push(r)), r.patchFlag = -2, r;
  }
  if (ja(e) && (e = e.__vccOpts), t) {
    t = La(t);
    let { class: r, style: a } = t;
    r && !Ce(r) && (t.class = ke(r)), ve(a) && (/* @__PURE__ */ bs(a) && !Z(a) && (a = Ie({}, a)), t.style = At(a));
  }
  const i = Ce(e) ? 1 : Si(e) ? 128 : Zl(e) ? 64 : ve(e) ? 4 : oe(e) ? 2 : 0;
  return f(
    e,
    t,
    n,
    s,
    o,
    i,
    l,
    !0
  );
}
function La(e) {
  return e ? /* @__PURE__ */ bs(e) || vi(e) ? Ie({}, e) : e : null;
}
function Ft(e, t, n = !1, s = !1) {
  const { props: o, ref: l, patchFlag: i, children: r, transition: a } = e, c = t ? Ra(o || {}, t) : o, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && Ci(c),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && l ? Z(l) ? l.concat(ts(t)) : [l, ts(t)] : ts(t)
    ) : l,
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
    patchFlag: t && e.type !== ue ? i === -1 ? 16 : i | 16 : i,
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
    ssContent: e.ssContent && Ft(e.ssContent),
    ssFallback: e.ssFallback && Ft(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Rn(
    u,
    a.clone(u)
  ), u;
}
function pt(e = " ", t = 0) {
  return Ee(Ss, null, e, t);
}
function Ti(e, t) {
  const n = Ee(es, null, e);
  return n.staticCount = t, n;
}
function re(e = "", t = !1) {
  return t ? (k(), Me(Ke, null, e)) : Ee(Ke, null, e);
}
function gt(e) {
  return e == null || typeof e == "boolean" ? Ee(Ke) : Z(e) ? Ee(
    ue,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : cs(e) ? Tt(e) : Ee(Ss, null, String(e));
}
function Tt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Ft(e);
}
function ko(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (Z(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ko(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !vi(t) ? t._ctx = et : o === 3 && et && (et.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else oe(t) ? (t = { default: t, _ctx: et }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [pt(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function Ra(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ke([t.class, s.class]));
      else if (o === "style")
        t.style = At([t.style, s.style]);
      else if (hs(o)) {
        const l = t[o], i = s[o];
        i && l !== i && !(Z(l) && l.includes(i)) && (t[o] = l ? [].concat(l, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function ct(e, t, n, s = null) {
  rt(e, t, 7, [
    n,
    s
  ]);
}
const Oa = fi();
let Pa = 0;
function Na(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || Oa, l = {
    uid: Pa++,
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
    scope: new sr(
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
    propsOptions: yi(s, o),
    emitsOptions: di(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: we,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: we,
    data: we,
    props: we,
    attrs: we,
    slots: we,
    refs: we,
    setupState: we,
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
  return l.ctx = { _: l }, l.root = t ? t.root : l, l.emit = ha.bind(null, l), e.ce && e.ce(l), l;
}
let Ve = null;
const Mi = () => Ve || et;
let fs, to;
{
  const e = vs(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (l) => {
      o.length > 1 ? o.forEach((i) => i(l)) : o[0](l);
    };
  };
  fs = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Ve = n
  ), to = t(
    "__VUE_SSR_SETTERS__",
    (n) => Nn = n
  );
}
const jn = (e) => {
  const t = Ve;
  return fs(e), e.scope.on(), () => {
    e.scope.off(), fs(t);
  };
}, Jo = () => {
  Ve && Ve.scope.off(), fs(null);
};
function Ei(e) {
  return e.vnode.shapeFlag & 4;
}
let Nn = !1;
function Ha(e, t = !1, n = !1) {
  t && to(t);
  const { props: s, children: o } = e.vnode, l = Ei(e);
  ba(e, s, l, t), ka(e, o, n || t);
  const i = l ? Da(e, t) : void 0;
  return t && to(!1), i;
}
function Da(e, t) {
  const n = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, oa);
  const { setup: s } = n;
  if (s) {
    Lt();
    const o = e.setupContext = s.length > 1 ? Ba(e) : null, l = jn(e), i = Bn(
      s,
      e,
      0,
      [
        e.props,
        o
      ]
    ), r = wl(i);
    if (Rt(), l(), (r || e.sp) && !Tn(e) && ii(e), r) {
      if (i.then(Jo, Jo), t)
        return i.then((a) => {
          Go(e, a);
        }).catch((a) => {
          _s(a, e, 0);
        });
      e.asyncDep = i;
    } else
      Go(e, i);
  } else
    Ai(e);
}
function Go(e, t, n) {
  oe(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : ve(t) && (e.setupState = Vl(t)), Ai(e);
}
function Ai(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || yt);
  {
    const o = jn(e);
    Lt();
    try {
      la(e);
    } finally {
      Rt(), o();
    }
  }
}
const Fa = {
  get(e, t) {
    return De(e, "get", ""), e[t];
  }
};
function Ba(e) {
  const t = (n) => {
    e.exposed = n || {};
  };
  return {
    attrs: new Proxy(e.attrs, Fa),
    slots: e.slots,
    emit: e.emit,
    expose: t
  };
}
function xs(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vl(xr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in Mn)
        return Mn[n](e);
    },
    has(t, n) {
      return n in t || n in Mn;
    }
  })) : e.proxy;
}
function ja(e) {
  return oe(e) && "__vccOpts" in e;
}
const Q = (e, t) => /* @__PURE__ */ Rr(e, t, Nn);
function Ka(e, t, n) {
  try {
    us(-1);
    const s = arguments.length;
    return s === 2 ? ve(t) && !Z(t) ? cs(t) ? Ee(e, null, [t]) : Ee(e, t) : Ee(e, null, t) : (s > 3 ? n = Array.prototype.slice.call(arguments, 2) : s === 3 && cs(n) && (n = [n]), Ee(e, t, n));
  } finally {
    us(1);
  }
}
const Va = "3.5.30";
/**
* @vue/runtime-dom v3.5.30
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let no;
const Yo = typeof window < "u" && window.trustedTypes;
if (Yo)
  try {
    no = /* @__PURE__ */ Yo.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const Ii = no ? (e) => no.createHTML(e) : (e) => e, Wa = "http://www.w3.org/2000/svg", Ua = "http://www.w3.org/1998/Math/MathML", Ct = typeof document < "u" ? document : null, Xo = Ct && /* @__PURE__ */ Ct.createElement("template"), za = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? Ct.createElementNS(Wa, e) : t === "mathml" ? Ct.createElementNS(Ua, e) : n ? Ct.createElement(e, { is: n }) : Ct.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => Ct.createTextNode(e),
  createComment: (e) => Ct.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ct.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, l) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === l || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === l || !(o = o.nextSibling)); )
        ;
    else {
      Xo.innerHTML = Ii(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const r = Xo.content;
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
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Ht = "transition", yn = "animation", Hn = /* @__PURE__ */ Symbol("_vtc"), Li = {
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
}, Ja = /* @__PURE__ */ Ie(
  {},
  ti,
  Li
), Ga = (e) => (e.displayName = "Transition", e.props = Ja, e), Ya = /* @__PURE__ */ Ga(
  (e, { slots: t }) => Ka(zr, Xa(e), t)
), Vt = (e, t = []) => {
  Z(e) ? e.forEach((n) => n(...t)) : e && e(...t);
}, qo = (e) => e ? Z(e) ? e.some((t) => t.length > 1) : e.length > 1 : !1;
function Xa(e) {
  const t = {};
  for (const x in e)
    x in Li || (t[x] = e[x]);
  if (e.css === !1)
    return t;
  const {
    name: n = "v",
    type: s,
    duration: o,
    enterFromClass: l = `${n}-enter-from`,
    enterActiveClass: i = `${n}-enter-active`,
    enterToClass: r = `${n}-enter-to`,
    appearFromClass: a = l,
    appearActiveClass: c = i,
    appearToClass: u = r,
    leaveFromClass: h = `${n}-leave-from`,
    leaveActiveClass: y = `${n}-leave-active`,
    leaveToClass: m = `${n}-leave-to`
  } = e, N = qa(o), C = N && N[0], O = N && N[1], {
    onBeforeEnter: S,
    onEnter: v,
    onEnterCancelled: T,
    onLeave: L,
    onLeaveCancelled: H,
    onBeforeAppear: D = S,
    onAppear: ne = v,
    onAppearCancelled: ae = T
  } = t, P = (x, K, G, se) => {
    x._enterCancelled = se, Wt(x, K ? u : r), Wt(x, K ? c : i), G && G();
  }, B = (x, K) => {
    x._isLeaving = !1, Wt(x, h), Wt(x, m), Wt(x, y), K && K();
  }, d = (x) => (K, G) => {
    const se = x ? ne : v, ce = () => P(K, x, G);
    Vt(se, [K, ce]), Qo(() => {
      Wt(K, x ? a : l), xt(K, x ? u : r), qo(se) || Zo(K, s, C, ce);
    });
  };
  return Ie(t, {
    onBeforeEnter(x) {
      Vt(S, [x]), xt(x, l), xt(x, i);
    },
    onBeforeAppear(x) {
      Vt(D, [x]), xt(x, a), xt(x, c);
    },
    onEnter: d(!1),
    onAppear: d(!0),
    onLeave(x, K) {
      x._isLeaving = !0;
      const G = () => B(x, K);
      xt(x, h), x._enterCancelled ? (xt(x, y), nl(x)) : (nl(x), xt(x, y)), Qo(() => {
        x._isLeaving && (Wt(x, h), xt(x, m), qo(L) || Zo(x, s, O, G));
      }), Vt(L, [x, G]);
    },
    onEnterCancelled(x) {
      P(x, !1, void 0, !0), Vt(T, [x]);
    },
    onAppearCancelled(x) {
      P(x, !0, void 0, !0), Vt(ae, [x]);
    },
    onLeaveCancelled(x) {
      B(x), Vt(H, [x]);
    }
  });
}
function qa(e) {
  if (e == null)
    return null;
  if (ve(e))
    return [Fs(e.enter), Fs(e.leave)];
  {
    const t = Fs(e);
    return [t, t];
  }
}
function Fs(e) {
  return Yi(e);
}
function xt(e, t) {
  t.split(/\s+/).forEach((n) => n && e.classList.add(n)), (e[Hn] || (e[Hn] = /* @__PURE__ */ new Set())).add(t);
}
function Wt(e, t) {
  t.split(/\s+/).forEach((s) => s && e.classList.remove(s));
  const n = e[Hn];
  n && (n.delete(t), n.size || (e[Hn] = void 0));
}
function Qo(e) {
  requestAnimationFrame(() => {
    requestAnimationFrame(e);
  });
}
let Qa = 0;
function Zo(e, t, n, s) {
  const o = e._endId = ++Qa, l = () => {
    o === e._endId && s();
  };
  if (n != null)
    return setTimeout(l, n);
  const { type: i, timeout: r, propCount: a } = Za(e, t);
  if (!i)
    return s();
  const c = i + "end";
  let u = 0;
  const h = () => {
    e.removeEventListener(c, y), l();
  }, y = (m) => {
    m.target === e && ++u >= a && h();
  };
  setTimeout(() => {
    u < a && h();
  }, r + 1), e.addEventListener(c, y);
}
function Za(e, t) {
  const n = window.getComputedStyle(e), s = (N) => (n[N] || "").split(", "), o = s(`${Ht}Delay`), l = s(`${Ht}Duration`), i = el(o, l), r = s(`${yn}Delay`), a = s(`${yn}Duration`), c = el(r, a);
  let u = null, h = 0, y = 0;
  t === Ht ? i > 0 && (u = Ht, h = i, y = l.length) : t === yn ? c > 0 && (u = yn, h = c, y = a.length) : (h = Math.max(i, c), u = h > 0 ? i > c ? Ht : yn : null, y = u ? u === Ht ? l.length : a.length : 0);
  const m = u === Ht && /\b(?:transform|all)(?:,|$)/.test(
    s(`${Ht}Property`).toString()
  );
  return {
    type: u,
    timeout: h,
    propCount: y,
    hasTransform: m
  };
}
function el(e, t) {
  for (; e.length < t.length; )
    e = e.concat(e);
  return Math.max(...t.map((n, s) => tl(n) + tl(e[s])));
}
function tl(e) {
  return e === "auto" ? 0 : Number(e.slice(0, -1).replace(",", ".")) * 1e3;
}
function nl(e) {
  return (e ? e.ownerDocument : document).body.offsetHeight;
}
function eu(e, t, n) {
  const s = e[Hn];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const sl = /* @__PURE__ */ Symbol("_vod"), tu = /* @__PURE__ */ Symbol("_vsh"), nu = /* @__PURE__ */ Symbol(""), su = /(?:^|;)\s*display\s*:/;
function ou(e, t, n) {
  const s = e.style, o = Ce(n);
  let l = !1;
  if (n && !o) {
    if (t)
      if (Ce(t))
        for (const i of t.split(";")) {
          const r = i.slice(0, i.indexOf(":")).trim();
          n[r] == null && ns(s, r, "");
        }
      else
        for (const i in t)
          n[i] == null && ns(s, i, "");
    for (const i in n)
      i === "display" && (l = !0), ns(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[nu];
      i && (n += ";" + i), s.cssText = n, l = su.test(n);
    }
  } else t && e.removeAttribute("style");
  sl in e && (e[sl] = l ? s.display : "", e[tu] && (s.display = "none"));
}
const ol = /\s*!important$/;
function ns(e, t, n) {
  if (Z(n))
    n.forEach((s) => ns(e, t, s));
  else if (n == null && (n = ""), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = lu(e, t);
    ol.test(n) ? e.setProperty(
      Bt(s),
      n.replace(ol, ""),
      "important"
    ) : e[s] = n;
  }
}
const ll = ["Webkit", "Moz", "ms"], Bs = {};
function lu(e, t) {
  const n = Bs[t];
  if (n)
    return n;
  let s = ot(t);
  if (s !== "filter" && s in e)
    return Bs[t] = s;
  s = Sl(s);
  for (let o = 0; o < ll.length; o++) {
    const l = ll[o] + s;
    if (l in e)
      return Bs[t] = l;
  }
  return t;
}
const il = "http://www.w3.org/1999/xlink";
function rl(e, t, n, s, o, l = tr(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(il, t.slice(6, t.length)) : e.setAttributeNS(il, t, n) : n == null || l && !Cl(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    l ? "" : bt(n) ? String(n) : n
  );
}
function al(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? Ii(n) : n);
    return;
  }
  const l = e.tagName;
  if (t === "value" && l !== "PROGRESS" && // custom elements may use _value internally
  !l.includes("-")) {
    const r = l === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (r !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const r = typeof e[t];
    r === "boolean" ? n = Cl(n) : n == null && r === "string" ? (n = "", i = !0) : r === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch {
  }
  i && e.removeAttribute(o || t);
}
function sn(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function iu(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const ul = /* @__PURE__ */ Symbol("_vei");
function ru(e, t, n, s, o = null) {
  const l = e[ul] || (e[ul] = {}), i = l[t];
  if (s && i)
    i.value = s;
  else {
    const [r, a] = au(t);
    if (s) {
      const c = l[t] = fu(
        s,
        o
      );
      sn(e, r, c, a);
    } else i && (iu(e, r, i, a), l[t] = void 0);
  }
}
const cl = /(?:Once|Passive|Capture)$/;
function au(e) {
  let t;
  if (cl.test(e)) {
    t = {};
    let s;
    for (; s = e.match(cl); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Bt(e.slice(2)), t];
}
let js = 0;
const uu = /* @__PURE__ */ Promise.resolve(), cu = () => js || (uu.then(() => js = 0), js = Date.now());
function fu(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    rt(
      du(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = cu(), n;
}
function du(e, t) {
  if (Z(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const fl = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, hu = (e, t, n, s, o, l) => {
  const i = o === "svg";
  t === "class" ? eu(e, s, i) : t === "style" ? ou(e, n, s) : hs(t) ? ro(t) || ru(e, t, n, s, l) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : pu(e, t, s, i)) ? (al(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && rl(e, t, s, i, l, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (gu(e, t) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(t) || !Ce(s))) ? al(e, ot(t), s, l, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), rl(e, t, s, i));
};
function pu(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && fl(t) && oe(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return fl(t) && Ce(n) ? !1 : t in e;
}
function gu(e, t) {
  const n = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!n)
    return !1;
  const s = ot(t);
  return Array.isArray(n) ? n.some((o) => ot(o) === s) : Object.keys(n).some((o) => ot(o) === s);
}
const dl = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return Z(t) ? (n) => qn(t, n) : t;
};
function vu(e) {
  e.target.composing = !0;
}
function hl(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ks = /* @__PURE__ */ Symbol("_assign");
function pl(e, t, n) {
  return t && (e = e.trim()), n && (e = uo(e)), e;
}
const ut = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[Ks] = dl(o);
    const l = s || o.props && o.props.type === "number";
    sn(e, t ? "change" : "input", (i) => {
      i.target.composing || e[Ks](pl(e.value, n, l));
    }), (n || l) && sn(e, "change", () => {
      e.value = pl(e.value, n, l);
    }), t || (sn(e, "compositionstart", vu), sn(e, "compositionend", hl), sn(e, "change", hl));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: l } }, i) {
    if (e[Ks] = dl(i), e.composing) return;
    const r = (l || e.type === "number") && !/^0\d/.test(e.value) ? uo(e.value) : e.value, a = t ?? "";
    r !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, mu = ["ctrl", "shift", "alt", "meta"], yu = {
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
  exact: (e, t) => mu.some((n) => e[`${n}Key`] && !t.includes(n))
}, te = (e, t) => {
  if (!e) return e;
  const n = e._withMods || (e._withMods = {}), s = t.join(".");
  return n[s] || (n[s] = (o, ...l) => {
    for (let i = 0; i < t.length; i++) {
      const r = yu[t[i]];
      if (r && r(o, t)) return;
    }
    return e(o, ...l);
  });
}, bu = {
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
    const l = Bt(o.key);
    if (t.some(
      (i) => i === l || bu[i] === l
    ))
      return e(o);
  });
}, _u = /* @__PURE__ */ Ie({ patchProp: hu }, za);
let gl;
function wu() {
  return gl || (gl = xa(_u));
}
const $u = (...e) => {
  const t = wu().createApp(...e), { mount: n } = t;
  return t.mount = (s) => {
    const o = Su(s);
    if (!o) return;
    const l = t._component;
    !oe(l) && !l.render && !l.template && (l.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, ku(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function ku(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Su(e) {
  return Ce(e) ? document.querySelector(e) : e;
}
const xu = { class: "setup" }, Cu = { class: "setup-card" }, Tu = { class: "field-group" }, Mu = { class: "field-group" }, Eu = ["disabled"], Au = {
  key: 0,
  class: "error"
}, Iu = /* @__PURE__ */ Xe({
  __name: "TokenSetup",
  emits: ["token"],
  setup(e, { emit: t }) {
    const n = t, s = /* @__PURE__ */ U(localStorage.getItem("ha_url") ?? "http://homeassistant.local:8123"), o = /* @__PURE__ */ U(""), l = /* @__PURE__ */ U(""), i = /* @__PURE__ */ U(null), r = Q(() => s.value.trim() && o.value.trim());
    async function a() {
      const c = s.value.trim().replace(/\/$/, ""), u = o.value.trim();
      if (!(!c || !u)) {
        l.value = "", localStorage.setItem("ha_url", c);
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
            l.value = "Token ungültig oder Verbindung fehlgeschlagen.", localStorage.removeItem("ha_url");
            return;
          }
          localStorage.setItem("ha_token", u), n("token", u);
        } catch {
          localStorage.removeItem("ha_url"), l.value = "Home Assistant nicht erreichbar. URL und Netzwerk prüfen.";
        }
      }
    }
    return (c, u) => (k(), A("div", xu, [
      f("div", Cu, [
        u[5] || (u[5] = f("h2", null, "Home Assistant", -1)),
        u[6] || (u[6] = f("p", null, [
          pt(" IP-Adresse deiner Home Assistant Instanz und ein"),
          f("br"),
          pt(" Long-Lived Access Token aus"),
          f("br"),
          f("strong", null, "Profil → Sicherheit → Long-lived access tokens")
        ], -1)),
        f("div", Tu, [
          u[3] || (u[3] = f("label", { class: "field-label" }, "URL / IP-Adresse", -1)),
          at(f("input", {
            "onUpdate:modelValue": u[0] || (u[0] = (h) => s.value = h),
            type: "text",
            placeholder: "http://192.168.1.x:8123",
            autocomplete: "off",
            spellcheck: "false",
            onKeydown: u[1] || (u[1] = Te((h) => {
              var y;
              return (y = i.value) == null ? void 0 : y.focus();
            }, ["enter"]))
          }, null, 544), [
            [ut, s.value]
          ])
        ]),
        f("div", Mu, [
          u[4] || (u[4] = f("label", { class: "field-label" }, "Access Token", -1)),
          at(f("input", {
            ref_key: "tokenRef",
            ref: i,
            "onUpdate:modelValue": u[2] || (u[2] = (h) => o.value = h),
            type: "password",
            placeholder: "Token einfügen...",
            onKeydown: Te(a, ["enter"])
          }, null, 544), [
            [ut, o.value]
          ])
        ]),
        f("button", {
          onClick: a,
          disabled: !r.value
        }, "Verbinden", 8, Eu),
        l.value ? (k(), A("p", Au, X(l.value), 1)) : re("", !0)
      ])
    ]));
  }
}), qe = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Lu = /* @__PURE__ */ qe(Iu, [["__scopeId", "data-v-97d10609"]]);
let So = !1;
const Ri = /* @__PURE__ */ U(null);
function Oi(e) {
  So = e;
}
function Ru() {
  return So;
}
function Ou(e) {
  Ri.value = e;
}
function Pu() {
  return Ri;
}
const Cs = /* @__PURE__ */ U(localStorage.getItem("ha_auth_key"));
function Nu() {
  return Cs;
}
function Vs(e) {
  Cs.value = e, e ? localStorage.setItem("ha_auth_key", e) : localStorage.removeItem("ha_auth_key");
}
function Hu(e) {
  return Cs.value || e || "";
}
function Pi() {
  var e;
  return So ? "" : ((e = localStorage.getItem("ha_url")) == null ? void 0 : e.replace(/\/$/, "")) ?? "";
}
function Ni() {
  const e = Pi();
  if (e)
    try {
      const n = new URL(e);
      return `${n.protocol === "https:" ? "wss:" : "ws:"}//${n.host}/api/websocket`;
    } catch {
    }
  return `${location.protocol === "https:" ? "wss:" : "ws:"}//${location.host}/api/websocket`;
}
function Ts(e) {
  const t = Pi();
  return t ? `${t}${e}` : e;
}
async function Jt(e, t, n, s) {
  const o = t.split(".")[0];
  await fetch(Ts(`/api/services/${o}/${n}`), {
    method: "POST",
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" },
    body: JSON.stringify({ entity_id: t, ...s })
  });
}
async function Du(e) {
  const t = await fetch(Ts("/api/states"), {
    headers: { Authorization: `Bearer ${e}`, "Content-Type": "application/json" }
  });
  if (!t.ok) throw new Error(`HTTP ${t.status}`);
  return t.json();
}
const Hi = "homeboard", ds = /* @__PURE__ */ U(!1), Kn = /* @__PURE__ */ U(null), _n = [];
function Fu(e) {
  ds.value ? e(Kn.value) : _n.push(e);
}
let _e = null, Xt = 1, un = null;
const qt = /* @__PURE__ */ new Map(), Dn = /* @__PURE__ */ new Map(), so = /* @__PURE__ */ U(0);
let tt = !1, oo = [];
const It = /* @__PURE__ */ new Map();
function Bu() {
  return Ni();
}
function Di(e) {
  _e && (_e.readyState === WebSocket.OPEN || _e.readyState === WebSocket.CONNECTING) || (tt = !1, _e = new WebSocket(Bu()), _e.onmessage = (t) => {
    var s, o;
    const n = JSON.parse(t.data);
    if (n.type === "auth_required") {
      _e.send(JSON.stringify({ type: "auth", access_token: e }));
      return;
    }
    if (n.type === "auth_ok") {
      tt = !0;
      const l = Xt++;
      _e.send(JSON.stringify({ id: l, type: "get_states" }));
      const i = Xt++;
      _e.send(JSON.stringify({ id: i, type: "subscribe_events", event_type: "state_changed" }));
      const r = Xt++;
      It.set(r, {
        resolve: (a) => {
          var u;
          const c = (a == null ? void 0 : a.value) ?? null;
          console.log("[HomeBoard] HA user data loaded:", c ? { hasPages: !!((u = c.pages) != null && u.length), hasGroups: !!c.groups && Object.keys(c.groups).length, hasAuthKey: !!c.authKey, groupKeys: c.groups ? Object.keys(c.groups) : [] } : "null/empty"), Kn.value = c, ds.value = !0, c != null && c.authKey && (Cs.value = c.authKey, localStorage.setItem("ha_auth_key", c.authKey));
          for (const h of _n) h(c);
          _n.length = 0;
        },
        reject: (a) => {
          console.error("[HomeBoard] Failed to load HA user data:", a), ds.value = !0;
          for (const c of _n) c(null);
          _n.length = 0;
        }
      }), _e.send(JSON.stringify({ id: r, type: "frontend/get_user_data", key: Hi }));
      for (const a of oo) a();
      oo = [];
      return;
    }
    if (n.type === "auth_invalid") {
      console.error("HA WebSocket auth failed");
      return;
    }
    if (n.type === "result" && It.has(n.id)) {
      const { resolve: l, reject: i } = It.get(n.id);
      It.delete(n.id), n.success ? l(n.result) : i(new Error(((s = n.error) == null ? void 0 : s.message) ?? "Service call failed"));
      return;
    }
    if (n.type === "result" && n.success && Array.isArray(n.result)) {
      for (const l of n.result)
        Dn.set(l.entity_id, l), vl(l.entity_id, l);
      so.value++;
      return;
    }
    if (n.type === "event" && cn.has(n.id)) {
      cn.get(n.id)(n.event);
      return;
    }
    if (n.type === "event" && ((o = n.event) == null ? void 0 : o.event_type) === "state_changed") {
      const l = n.event.data.new_state;
      l && (Dn.set(l.entity_id, l), so.value++, vl(l.entity_id, l));
    }
  }, _e.onclose = () => {
    tt = !1, un && clearTimeout(un), un = setTimeout(() => {
      _e = null, Di(e);
    }, 5e3);
  }, _e.onerror = () => {
    _e == null || _e.close();
  });
}
function vl(e, t) {
  const n = qt.get(e);
  if (n)
    for (const s of n) s(t);
}
function ju(e, t) {
  qt.has(e) || qt.set(e, /* @__PURE__ */ new Set()), qt.get(e).add(t);
  const n = Dn.get(e);
  n && t(n);
}
function Ku(e, t) {
  const n = qt.get(e);
  n && (n.delete(t), n.size === 0 && qt.delete(e));
}
function Vu() {
  un && (clearTimeout(un), un = null), _e && (_e.close(), _e = null), tt = !1, Dn.clear(), qt.clear(), cn.clear(), ds.value = !1, Kn.value = null;
}
async function wn(e) {
  var n;
  if (Kn.value = e, !_e || !tt) {
    console.warn("[HomeBoard] Cannot save to HA: WS not connected", { ws: !!_e, authenticated: tt });
    return;
  }
  console.log("[HomeBoard] Saving to HA:", { hasPages: !!((n = e.pages) != null && n.length), hasGroups: !!e.groups && Object.keys(e.groups).length, groupKeys: e.groups ? Object.keys(e.groups) : [] });
  const t = Xt++;
  return new Promise((s, o) => {
    It.set(t, {
      resolve: () => {
        console.log("[HomeBoard] Save to HA successful"), s();
      },
      reject: (l) => {
        console.error("[HomeBoard] Save to HA failed:", l), o(l);
      }
    }), _e.send(JSON.stringify({ id: t, type: "frontend/set_user_data", key: Hi, value: e }));
  });
}
let Xn = null;
function lo() {
  const e = {}, t = {};
  for (let n = 0; n < localStorage.length; n++) {
    const s = localStorage.key(n);
    if (s) {
      if (s.startsWith("ha_group_")) {
        const o = s.slice(9);
        try {
          const l = JSON.parse(localStorage.getItem(s));
          e[o] = {
            included: Array.isArray(l.included) ? l.included : [],
            excluded: Array.isArray(l.excluded) ? l.excluded : []
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
function Fi() {
  Xn && clearTimeout(Xn), Xn = setTimeout(() => {
    if (Xn = null, !_e || !tt) {
      console.warn("[HomeBoard] scheduleSettingsSync skipped: WS not ready", { ws: !!_e, authenticated: tt });
      return;
    }
    const e = lo();
    console.log("[HomeBoard] scheduleSettingsSync firing:", { groupKeys: e.groups ? Object.keys(e.groups) : [] });
    const t = { ...Kn.value ?? {}, ...e };
    wn(t);
  }, 500);
}
async function Wu(e, t, n, s) {
  if (!_e || !tt) throw new Error("WebSocket not connected");
  const o = Xt++;
  return new Promise((l, i) => {
    It.set(o, { resolve: l, reject: i }), _e.send(JSON.stringify({
      id: o,
      type: "call_service",
      domain: t,
      service: n,
      service_data: s ?? {},
      target: { entity_id: e },
      return_response: !0
    })), setTimeout(() => {
      It.has(o) && (It.delete(o), i(new Error("Timeout")));
    }, 1e4);
  });
}
const cn = /* @__PURE__ */ new Map();
function ml(e, t, n) {
  let s = null;
  function o() {
    if (!_e || !tt) {
      oo.push(o);
      return;
    }
    const l = Xt++;
    s = l, cn.set(l, (i) => {
      const r = i == null ? void 0 : i.result;
      typeof r == "string" && t(r);
    }), It.set(l, {
      resolve: () => {
      },
      reject: (i) => {
        cn.delete(l), n == null || n(i.message), s = null;
      }
    }), _e.send(JSON.stringify({ id: l, type: "render_template", template: e }));
  }
  return o(), {
    unsubscribe: () => {
      if (s !== null && (cn.delete(s), _e && tt)) {
        const l = Xt++;
        _e.send(JSON.stringify({ id: l, type: "unsubscribe_events", subscription: s }));
      }
      s = null;
    }
  };
}
function Uu(e) {
  let t = e;
  const n = /* @__PURE__ */ U(null), s = /* @__PURE__ */ U(null), o = /* @__PURE__ */ U(!0);
  let l = null;
  function i(c) {
    n.value = c, s.value = null, o.value = !1;
  }
  function r(c, u) {
    a(), u && (t = u), o.value = !0, s.value = null, Di(c), l = i, ju(t, l), tt || fetch(Ts(`/api/states/${t}`), {
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
    l && (Ku(t, l), l = null);
  }
  return { state: n, error: s, loading: o, start: r, stop: a };
}
function xo() {
  return { cache: Dn, version: so };
}
const zu = { class: "weather-layout" }, Ju = { class: "weather-left" }, Gu = { class: "weather-temp" }, Yu = { class: "weather-condition" }, Xu = {
  key: 0,
  class: "weather-meta"
}, qu = {
  key: 0,
  class: "weather-meta-item"
}, Qu = {
  key: 1,
  class: "weather-meta-item"
}, Zu = { class: "weather-right" }, ec = ["innerHTML"], tc = { class: "ha-modal-header-row" }, nc = { class: "ha-modal-title" }, sc = { class: "wf-current" }, oc = { class: "wf-current-left" }, lc = ["innerHTML"], ic = { class: "wf-current-info" }, rc = { class: "wf-current-condition" }, ac = { class: "wf-current-ago" }, uc = { class: "wf-current-right" }, cc = { class: "wf-current-temp" }, fc = {
  key: 0,
  class: "wf-current-hilo"
}, dc = { class: "wf-details" }, hc = {
  key: 0,
  class: "wf-detail-row"
}, pc = { class: "wf-detail-value" }, gc = {
  key: 1,
  class: "wf-detail-row"
}, vc = { class: "wf-detail-value" }, mc = {
  key: 2,
  class: "wf-detail-row"
}, yc = { class: "wf-detail-value" }, bc = { class: "wf-tabs" }, _c = {
  key: 0,
  class: "weather-forecast-row"
}, wc = { class: "wf-date" }, $c = ["innerHTML"], kc = { class: "wf-temps" }, Sc = { class: "wf-temps-low" }, xc = {
  key: 1,
  class: "ha-modal-empty"
}, Cc = {
  key: 0,
  class: "wf-hourly-scroll"
}, Tc = { class: "wf-hourly-day-label" }, Mc = { class: "weather-forecast-row" }, Ec = { class: "wf-date" }, Ac = ["innerHTML"], Ic = { class: "wf-temps" }, Lc = {
  key: 1,
  class: "ha-modal-empty"
}, Rc = /* @__PURE__ */ Xe({
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
    function o(P, B = 100) {
      const d = B, x = `<path d="M${d * 0.17} ${d * 0.63}a${d * 0.17} ${d * 0.17} 0 0 1 0-${d * 0.33}h${d * 0.04}a${d * 0.23} ${d * 0.23} 0 0 1 ${d * 0.44}-${d * 0.1}a${d * 0.19} ${d * 0.19} 0 0 1 ${d * 0.19} ${d * 0.1}h${d * 0.02}a${d * 0.17} ${d * 0.17} 0 0 1 0 ${d * 0.33}z" fill="none" stroke="#cfd8e3" stroke-width="${d * 0.04}" stroke-linejoin="round"/>`, K = `<svg viewBox="0 0 ${d} ${d}" width="${d}" height="${d}" xmlns="http://www.w3.org/2000/svg">`, G = "</svg>";
      switch (P) {
        case "sunny":
          return `${K}
        <circle cx="${d / 2}" cy="${d / 2}" r="${d * 0.16}" fill="#f6ad35" stroke="#e8961e" stroke-width="${d * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((se) => {
            const ce = se * Math.PI / 180, he = d / 2 + Math.cos(ce) * d * 0.25, z = d / 2 + Math.sin(ce) * d * 0.25, Y = d / 2 + Math.cos(ce) * d * 0.35, ye = d / 2 + Math.sin(ce) * d * 0.35;
            return `<line x1="${he}" y1="${z}" x2="${Y}" y2="${ye}" stroke="#f6ad35" stroke-width="${d * 0.04}" stroke-linecap="round"/>`;
          }).join("")}
      ${G}`;
        case "clear-night":
          return `${K}<path d="M${d * 0.58} ${d * 0.15}a${d * 0.33} ${d * 0.33} 0 1 0 ${d * 0.27} ${d * 0.42} ${d * 0.25} ${d * 0.25} 0 0 1-${d * 0.27}-${d * 0.42}z" fill="#cfd8e3" stroke="#a0aec0" stroke-width="${d * 0.03}"/>${G}`;
        case "partlycloudy":
          return `${K}
        <circle cx="${d * 0.62}" cy="${d * 0.3}" r="${d * 0.13}" fill="#f6ad35" stroke="#e8961e" stroke-width="${d * 0.03}"/>
        ${[0, 45, 90, 135, 180, 225, 270, 315].map((se) => {
            const ce = se * Math.PI / 180;
            return `<line x1="${d * 0.62 + Math.cos(ce) * d * 0.19}" y1="${d * 0.3 + Math.sin(ce) * d * 0.19}" x2="${d * 0.62 + Math.cos(ce) * d * 0.25}" y2="${d * 0.3 + Math.sin(ce) * d * 0.25}" stroke="#f6ad35" stroke-width="${d * 0.03}" stroke-linecap="round"/>`;
          }).join("")}
        ${x}
      ${G}`;
        case "cloudy":
          return `${K}${x}${G}`;
        case "rainy":
        case "pouring":
          return `${K}${x}
        <line x1="${d * 0.3}" y1="${d * 0.71}" x2="${d * 0.25}" y2="${d * 0.85}" stroke="#5b9bd5" stroke-width="${d * 0.035}" stroke-linecap="round"/>
        <line x1="${d * 0.5}" y1="${d * 0.71}" x2="${d * 0.45}" y2="${d * 0.85}" stroke="#5b9bd5" stroke-width="${d * 0.035}" stroke-linecap="round"/>
        <line x1="${d * 0.7}" y1="${d * 0.71}" x2="${d * 0.65}" y2="${d * 0.85}" stroke="#5b9bd5" stroke-width="${d * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "snowy":
          return `${K}${x}
        <line x1="${d * 0.35}" y1="${d * 0.73}" x2="${d * 0.35}" y2="${d * 0.88}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
        <line x1="${d * 0.28}" y1="${d * 0.805}" x2="${d * 0.42}" y2="${d * 0.805}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
        <line x1="${d * 0.65}" y1="${d * 0.73}" x2="${d * 0.65}" y2="${d * 0.88}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
        <line x1="${d * 0.58}" y1="${d * 0.805}" x2="${d * 0.72}" y2="${d * 0.805}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "snowy-rainy":
          return `${K}${x}
        <line x1="${d * 0.3}" y1="${d * 0.71}" x2="${d * 0.25}" y2="${d * 0.85}" stroke="#5b9bd5" stroke-width="${d * 0.035}" stroke-linecap="round"/>
        <line x1="${d * 0.65}" y1="${d * 0.73}" x2="${d * 0.65}" y2="${d * 0.86}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
        <line x1="${d * 0.59}" y1="${d * 0.795}" x2="${d * 0.71}" y2="${d * 0.795}" stroke="#5bbbf5" stroke-width="${d * 0.03}" stroke-linecap="round"/>
      ${G}`;
        case "fog":
          return `${K}
        <line x1="${d * 0.2}" y1="${d * 0.35}" x2="${d * 0.8}" y2="${d * 0.35}" stroke="#a0aec0" stroke-width="${d * 0.04}" stroke-linecap="round"/>
        <line x1="${d * 0.15}" y1="${d * 0.5}" x2="${d * 0.85}" y2="${d * 0.5}" stroke="#cfd8e3" stroke-width="${d * 0.04}" stroke-linecap="round"/>
        <line x1="${d * 0.2}" y1="${d * 0.65}" x2="${d * 0.8}" y2="${d * 0.65}" stroke="#a0aec0" stroke-width="${d * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "lightning":
          return `${K}${x}
        <polygon points="${d * 0.45},${d * 0.62} ${d * 0.52},${d * 0.75} ${d * 0.47},${d * 0.75} ${d * 0.55},${d * 0.92}" fill="#f6ad35" stroke="#e8961e" stroke-width="${d * 0.015}" stroke-linejoin="round"/>
      ${G}`;
        case "lightning-rainy":
          return `${K}${x}
        <polygon points="${d * 0.42},${d * 0.62} ${d * 0.48},${d * 0.75} ${d * 0.44},${d * 0.75} ${d * 0.5},${d * 0.9}" fill="#f6ad35" stroke="#e8961e" stroke-width="${d * 0.015}" stroke-linejoin="round"/>
        <line x1="${d * 0.65}" y1="${d * 0.71}" x2="${d * 0.6}" y2="${d * 0.85}" stroke="#5b9bd5" stroke-width="${d * 0.035}" stroke-linecap="round"/>
      ${G}`;
        case "windy":
        case "windy-variant":
          return `${K}
        <path d="M${d * 0.15} ${d * 0.4} Q${d * 0.4} ${d * 0.3} ${d * 0.65} ${d * 0.4}" fill="none" stroke="#a0aec0" stroke-width="${d * 0.04}" stroke-linecap="round"/>
        <path d="M${d * 0.2} ${d * 0.55} Q${d * 0.5} ${d * 0.45} ${d * 0.8} ${d * 0.55}" fill="none" stroke="#cfd8e3" stroke-width="${d * 0.04}" stroke-linecap="round"/>
        <path d="M${d * 0.15} ${d * 0.7} Q${d * 0.35} ${d * 0.6} ${d * 0.55} ${d * 0.7}" fill="none" stroke="#a0aec0" stroke-width="${d * 0.04}" stroke-linecap="round"/>
      ${G}`;
        case "hail":
          return `${K}${x}
        <circle cx="${d * 0.3}" cy="${d * 0.8}" r="${d * 0.035}" fill="#5bbbf5"/>
        <circle cx="${d * 0.5}" cy="${d * 0.82}" r="${d * 0.035}" fill="#5bbbf5"/>
        <circle cx="${d * 0.7}" cy="${d * 0.78}" r="${d * 0.035}" fill="#5bbbf5"/>
      ${G}`;
        default:
          return `${K}${x}${G}`;
      }
    }
    const l = Q(() => t.state ? o(t.state.state) : o("cloudy")), i = Q(() => {
      var P;
      return t.state ? ((P = s[t.state.state]) == null ? void 0 : P.label) ?? t.state.state : "";
    }), r = Q(() => {
      if (!t.state) return "--";
      const P = t.state.attributes.temperature;
      return P != null ? Math.round(P) : "--";
    }), a = Q(() => t.state ? t.state.attributes.humidity ?? null : null), c = Q(() => t.state ? t.state.attributes.wind_speed ?? null : null), u = Q(() => t.state ? t.state.attributes.pressure ?? null : null), h = /* @__PURE__ */ U([]), y = /* @__PURE__ */ U([]), m = /* @__PURE__ */ U("daily"), N = Q(() => {
      const P = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"], B = [];
      let d = null;
      for (const x of y.value) {
        const K = new Date(x.datetime), G = P[K.getDay()];
        (!d || d.day !== G) && (d = { day: G, hours: [] }, B.push(d)), d.hours.push(x);
      }
      return B;
    }), C = Q(() => {
      if (!t.state) return "";
      const P = new Date(t.state.last_updated), d = Math.round(((/* @__PURE__ */ new Date()).getTime() - P.getTime()) / 6e4);
      if (d < 1) return "Gerade eben";
      if (d < 60) return `Vor ${d} Min.`;
      const x = Math.round(d / 60);
      return x < 24 ? `Vor ${x} Stunde${x > 1 ? "n" : ""}` : `Vor ${Math.round(x / 24)} Tag${Math.round(x / 24) > 1 ? "en" : ""}`;
    }), O = Q(() => t.state && h.value.length ? h.value[0].tempHigh : null), S = Q(() => t.state && h.value.length ? h.value[0].tempLow : null), v = Q(() => {
      if (!t.state) return "";
      const P = t.state.attributes.wind_bearing;
      return P == null ? "" : ["N", "NNO", "NO", "ONO", "O", "OSO", "SO", "SSO", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"][Math.round(P / 22.5) % 16];
    });
    function T(P) {
      return P.toLocaleString("de-DE", { minimumFractionDigits: 1, maximumFractionDigits: 1 });
    }
    async function L() {
      n.value = !0, m.value = "daily", await D("daily");
    }
    async function H(P) {
      m.value = P, P === "hourly" && y.value.length === 0 && await D("hourly");
    }
    async function D(P) {
      var B, d;
      if (P === "daily") {
        const x = (B = t.state) == null ? void 0 : B.attributes.forecast;
        if (x && x.length) {
          h.value = ne(x);
          return;
        }
      }
      try {
        const x = await Wu(t.entityId, "weather", "get_forecasts", { type: P }), K = (x == null ? void 0 : x.response) ?? x, G = (K == null ? void 0 : K[t.entityId]) ?? (K ? Object.values(K)[0] : null), se = (G == null ? void 0 : G.forecast) ?? [];
        if (se.length) {
          P === "daily" ? h.value = ne(se) : y.value = ae(se);
          return;
        }
      } catch {
        try {
          const x = await fetch("/api/services/weather/get_forecasts", {
            method: "POST",
            headers: { Authorization: `Bearer ${t.token}`, "Content-Type": "application/json" },
            body: JSON.stringify({ entity_id: t.entityId, type: P })
          });
          if (x.ok) {
            const K = await x.json();
            let G = [];
            if (K != null && K[t.entityId]) G = K[t.entityId].forecast ?? [];
            else if (Array.isArray(K)) G = ((d = K[0]) == null ? void 0 : d.forecast) ?? [];
            else {
              const se = Object.values(K)[0];
              G = (se == null ? void 0 : se.forecast) ?? (K == null ? void 0 : K.forecast) ?? [];
            }
            if (G.length) {
              P === "daily" ? h.value = ne(G) : y.value = ae(G);
              return;
            }
          }
        } catch {
        }
      }
      P === "daily" ? h.value = [] : y.value = [];
    }
    function ne(P) {
      const B = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
      return P.slice(0, 6).map((d) => {
        const x = new Date(d.datetime);
        return {
          date: d.datetime,
          weekday: B[x.getDay()],
          condition: d.condition ?? "cloudy",
          tempHigh: Math.round(d.temperature ?? d.templow ?? 0),
          tempLow: Math.round(d.templow ?? d.temperature ?? 0),
          precipitation: d.precipitation_probability ?? d.precipitation ?? null
        };
      });
    }
    function ae(P) {
      return P.slice(0, 24).map((B) => {
        const d = new Date(B.datetime);
        return {
          datetime: B.datetime,
          time: d.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          condition: B.condition ?? "cloudy",
          temp: Math.round(B.temperature ?? 0)
        };
      });
    }
    return (P, B) => {
      var d;
      return k(), A(ue, null, [
        f("button", {
          class: "light-ctrl-btn",
          onClick: te(L, ["stop"]),
          title: "Vorhersage"
        }, [...B[5] || (B[5] = [
          Ti('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c8484bb4><line x1="8" y1="6" x2="21" y2="6" data-v-c8484bb4></line><line x1="8" y1="12" x2="21" y2="12" data-v-c8484bb4></line><line x1="8" y1="18" x2="21" y2="18" data-v-c8484bb4></line><line x1="3" y1="6" x2="3.01" y2="6" data-v-c8484bb4></line><line x1="3" y1="12" x2="3.01" y2="12" data-v-c8484bb4></line><line x1="3" y1="18" x2="3.01" y2="18" data-v-c8484bb4></line></svg>', 1)
        ])]),
        f("div", {
          class: ke(["body-center weather-body", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
        }, [
          f("div", zu, [
            f("div", Ju, [
              f("span", Gu, X(r.value) + "°", 1),
              f("span", Yu, X(i.value), 1),
              e.isCompact ? re("", !0) : (k(), A("div", Xu, [
                a.value !== null ? (k(), A("span", qu, "💧 " + X(a.value) + "%", 1)) : re("", !0),
                c.value !== null ? (k(), A("span", Qu, "💨 " + X(Math.round(c.value)) + " km/h", 1)) : re("", !0)
              ]))
            ]),
            f("div", Zu, [
              f("div", {
                class: "weather-svg-icon",
                innerHTML: l.value
              }, null, 8, ec)
            ])
          ])
        ], 2),
        (k(), Me(_t, { to: "body" }, [
          n.value ? (k(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: B[4] || (B[4] = te((x) => n.value = !1, ["self"]))
          }, [
            f("div", {
              class: "ha-modal-box ha-modal-box--wide",
              onClick: B[3] || (B[3] = te(() => {
              }, ["stop"]))
            }, [
              f("div", tc, [
                f("h3", nc, X(e.customTitle || e.label), 1),
                f("button", {
                  class: "ha-modal-close",
                  onClick: B[0] || (B[0] = (x) => n.value = !1)
                }, "✕")
              ]),
              f("div", sc, [
                f("div", oc, [
                  f("div", {
                    class: "wf-current-icon",
                    innerHTML: o(((d = e.state) == null ? void 0 : d.state) ?? "cloudy", 52)
                  }, null, 8, lc),
                  f("div", ic, [
                    f("span", rc, X(i.value), 1),
                    f("span", ac, X(C.value), 1)
                  ])
                ]),
                f("div", uc, [
                  f("span", cc, X(r.value) + "°C", 1),
                  O.value !== null && S.value !== null ? (k(), A("span", fc, X(O.value) + "°C / " + X(S.value) + "°C", 1)) : re("", !0)
                ])
              ]),
              f("div", dc, [
                u.value !== null ? (k(), A("div", hc, [
                  B[6] || (B[6] = f("span", { class: "wf-detail-label" }, "Luftdruck", -1)),
                  f("span", pc, X(T(u.value)) + " hPa", 1)
                ])) : re("", !0),
                a.value !== null ? (k(), A("div", gc, [
                  B[7] || (B[7] = f("span", { class: "wf-detail-label" }, "Luftfeuchtigkeit", -1)),
                  f("span", vc, X(a.value) + " %", 1)
                ])) : re("", !0),
                c.value !== null ? (k(), A("div", mc, [
                  B[8] || (B[8] = f("span", { class: "wf-detail-label" }, "Windgeschwindigkeit", -1)),
                  f("span", yc, X(T(c.value)) + " km/h" + X(v.value ? ` (${v.value})` : ""), 1)
                ])) : re("", !0)
              ]),
              f("div", bc, [
                f("button", {
                  class: ke(["wf-tab", { active: m.value === "daily" }]),
                  onClick: B[1] || (B[1] = (x) => H("daily"))
                }, "Täglich", 2),
                f("button", {
                  class: ke(["wf-tab", { active: m.value === "hourly" }]),
                  onClick: B[2] || (B[2] = (x) => H("hourly"))
                }, "Stündlich", 2)
              ]),
              m.value === "daily" ? (k(), A(ue, { key: 0 }, [
                h.value.length ? (k(), A("div", _c, [
                  (k(!0), A(ue, null, Je(h.value, (x) => (k(), A("div", {
                    key: x.date,
                    class: "weather-forecast-day"
                  }, [
                    f("span", wc, X(x.weekday), 1),
                    f("div", {
                      class: "wf-icon",
                      innerHTML: o(x.condition, 36)
                    }, null, 8, $c),
                    f("span", kc, X(x.tempHigh) + "°", 1),
                    f("span", Sc, X(x.tempLow) + "°", 1)
                  ]))), 128))
                ])) : (k(), A("div", xc, "Keine Vorhersagedaten verfügbar"))
              ], 64)) : re("", !0),
              m.value === "hourly" ? (k(), A(ue, { key: 1 }, [
                y.value.length ? (k(), A("div", Cc, [
                  (k(!0), A(ue, null, Je(N.value, (x) => (k(), A("div", {
                    key: x.day,
                    class: "wf-hourly-group"
                  }, [
                    f("span", Tc, X(x.day), 1),
                    f("div", Mc, [
                      (k(!0), A(ue, null, Je(x.hours, (K) => (k(), A("div", {
                        key: K.time,
                        class: "weather-forecast-day"
                      }, [
                        f("span", Ec, X(K.time), 1),
                        f("div", {
                          class: "wf-icon",
                          innerHTML: o(K.condition, 32)
                        }, null, 8, Ac),
                        f("span", Ic, X(K.temp) + "°", 1)
                      ]))), 128))
                    ])
                  ]))), 128))
                ])) : (k(), A("div", Lc, "Keine stündlichen Daten verfügbar"))
              ], 64)) : re("", !0)
            ])
          ])) : re("", !0)
        ]))
      ], 64);
    };
  }
}), Oc = /* @__PURE__ */ qe(Rc, [["__scopeId", "data-v-c8484bb4"]]), Pc = { class: "center-wrap" }, Nc = ["title"], Hc = {
  key: 0,
  class: "updated"
}, Dc = { class: "ha-modal-header-row" }, Fc = { class: "ha-light-section" }, Bc = { class: "ha-light-slider-wrap" }, jc = ["value"], Kc = { class: "ha-light-slider-value" }, Vc = {
  key: 0,
  class: "ha-light-section"
}, Wc = { class: "ha-light-slider-wrap" }, Uc = ["value"], zc = {
  key: 1,
  class: "ha-light-section"
}, Jc = { class: "ha-light-slider-wrap" }, Gc = ["value"], Yc = { class: "ha-light-slider-value" }, Xc = /* @__PURE__ */ Xe({
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
      const S = t.state.state;
      if (S === "on" || S === "home" || S === "open" || S === "unlocked") return !0;
      const v = parseFloat(S);
      return !isNaN(v) && v > 0;
    }), s = /* @__PURE__ */ U(!1);
    async function o() {
      t.state && await Jt(t.token, t.entityId, "toggle");
    }
    const l = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null), i = /* @__PURE__ */ U(!1), r = Q(() => t.state ? t.state.attributes.brightness ?? 0 : 0), a = Q(() => {
      if (!t.state) return !1;
      const S = t.state.attributes.supported_color_modes;
      return (S == null ? void 0 : S.some((v) => ["rgb", "rgbw", "rgbww", "hs", "xy"].includes(v))) ?? !1;
    }), c = Q(() => {
      if (!t.state) return 0;
      const S = t.state.attributes.hs_color;
      return Math.round((S == null ? void 0 : S[0]) ?? 0);
    }), u = Q(() => {
      if (!t.state) return 100;
      const S = t.state.attributes.hs_color;
      return Math.round((S == null ? void 0 : S[1]) ?? 100);
    }), h = Q(() => ({
      "--sat-color": `hsl(${c.value}, 100%, 50%)`
    }));
    let y = null, m = null;
    function N(S) {
      const v = parseInt(S.target.value);
      y && clearTimeout(y), y = setTimeout(() => {
        v === 0 ? Jt(t.token, t.entityId, "turn_off") : Jt(t.token, t.entityId, "turn_on", { brightness: v });
      }, 150);
    }
    function C(S) {
      const v = parseInt(S.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        Jt(t.token, t.entityId, "turn_on", {
          hs_color: [v, u.value]
        });
      }, 150);
    }
    function O(S) {
      const v = parseInt(S.target.value);
      m && clearTimeout(m), m = setTimeout(() => {
        Jt(t.token, t.entityId, "turn_on", {
          hs_color: [c.value, v]
        });
      }, 150);
    }
    return (S, v) => (k(), A(ue, null, [
      f("button", {
        class: "light-ctrl-btn",
        onClick: v[0] || (v[0] = te((T) => i.value = !0, ["stop"])),
        title: "Helligkeit & Farbe"
      }, [...v[9] || (v[9] = [
        Ti('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-7bb31e14><circle cx="12" cy="12" r="5" data-v-7bb31e14></circle><line x1="12" y1="1" x2="12" y2="3" data-v-7bb31e14></line><line x1="12" y1="21" x2="12" y2="23" data-v-7bb31e14></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" data-v-7bb31e14></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" data-v-7bb31e14></line><line x1="1" y1="12" x2="3" y2="12" data-v-7bb31e14></line><line x1="21" y1="12" x2="23" y2="12" data-v-7bb31e14></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" data-v-7bb31e14></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" data-v-7bb31e14></line></svg>', 1)
      ])]),
      f("div", {
        class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
      }, [
        f("div", Pc, [
          f("button", {
            class: ke(["bulb-btn", { on: n.value, pressing: s.value }]),
            onMousedown: v[1] || (v[1] = (T) => s.value = !0),
            onMouseup: v[2] || (v[2] = (T) => s.value = !1),
            onMouseleave: v[3] || (v[3] = (T) => s.value = !1),
            onTouchstartPassive: v[4] || (v[4] = (T) => s.value = !0),
            onTouchend: v[5] || (v[5] = (T) => s.value = !1),
            onClick: o,
            title: n.value ? "Ausschalten" : "Einschalten"
          }, [...v[10] || (v[10] = [
            f("svg", {
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2",
              "stroke-linecap": "round",
              "stroke-linejoin": "round"
            }, [
              f("path", { d: "M9 18h6" }),
              f("path", { d: "M10 22h4" }),
              f("path", { d: "M12 2a7 7 0 0 0-4 12.7V17h8v-2.3A7 7 0 0 0 12 2z" })
            ], -1)
          ])], 42, Nc)
        ]),
        l.value ? (k(), A("div", Hc, " Aktualisiert: " + X(l.value), 1)) : re("", !0)
      ], 2),
      (k(), Me(_t, { to: "body" }, [
        i.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[8] || (v[8] = te((T) => i.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: v[7] || (v[7] = te(() => {
            }, ["stop"]))
          }, [
            f("div", Dc, [
              v[11] || (v[11] = f("h3", { class: "ha-modal-title" }, "Lichtsteuerung", -1)),
              f("button", {
                class: "ha-modal-close",
                onClick: v[6] || (v[6] = (T) => i.value = !1)
              }, "✕")
            ]),
            f("div", Fc, [
              v[12] || (v[12] = f("label", { class: "ha-light-label" }, "Helligkeit", -1)),
              f("div", Bc, [
                f("input", {
                  type: "range",
                  min: "0",
                  max: "255",
                  value: r.value,
                  class: "ha-light-slider",
                  onInput: N
                }, null, 40, jc),
                f("span", Kc, X(Math.round(r.value / 255 * 100)) + "%", 1)
              ])
            ]),
            a.value ? (k(), A("div", Vc, [
              v[13] || (v[13] = f("label", { class: "ha-light-label" }, "Farbe", -1)),
              f("div", Wc, [
                f("input", {
                  type: "range",
                  min: "0",
                  max: "360",
                  value: c.value,
                  class: "ha-light-slider ha-light-slider--hue",
                  onInput: C
                }, null, 40, Uc),
                f("span", {
                  class: "ha-light-color-preview",
                  style: At({ background: `hsl(${c.value}, 100%, 50%)` })
                }, null, 4)
              ])
            ])) : re("", !0),
            a.value ? (k(), A("div", zc, [
              v[14] || (v[14] = f("label", { class: "ha-light-label" }, "Sättigung", -1)),
              f("div", Jc, [
                f("input", {
                  type: "range",
                  min: "0",
                  max: "100",
                  value: u.value,
                  class: "ha-light-slider ha-light-slider--sat",
                  style: At(h.value),
                  onInput: O
                }, null, 44, Gc),
                f("span", Yc, X(u.value) + "%", 1)
              ])
            ])) : re("", !0)
          ])
        ])) : re("", !0)
      ]))
    ], 64));
  }
}), qc = /* @__PURE__ */ qe(Xc, [["__scopeId", "data-v-7bb31e14"]]), Qc = { class: "center-wrap" }, Zc = ["title"], ef = {
  key: 0,
  class: "updated"
}, tf = /* @__PURE__ */ Xe({
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
      const i = t.state.state;
      if (i === "on" || i === "home" || i === "open" || i === "unlocked") return !0;
      const r = parseFloat(i);
      return !isNaN(r) && r > 0;
    }), s = /* @__PURE__ */ U(!1);
    async function o() {
      t.state && await Jt(t.token, t.entityId, "toggle");
    }
    const l = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (i, r) => (k(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      f("div", Qc, [
        f("button", {
          class: ke(["power-btn", { on: n.value, pressing: s.value }]),
          onMousedown: r[0] || (r[0] = (a) => s.value = !0),
          onMouseup: r[1] || (r[1] = (a) => s.value = !1),
          onMouseleave: r[2] || (r[2] = (a) => s.value = !1),
          onTouchstartPassive: r[3] || (r[3] = (a) => s.value = !0),
          onTouchend: r[4] || (r[4] = (a) => s.value = !1),
          onClick: o,
          title: n.value ? "Ausschalten" : "Einschalten"
        }, [...r[5] || (r[5] = [
          f("svg", {
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            "stroke-width": "2",
            "stroke-linecap": "round",
            "stroke-linejoin": "round"
          }, [
            f("path", { d: "M18.36 6.64a9 9 0 1 1-12.73 0" }),
            f("line", {
              x1: "12",
              y1: "2",
              x2: "12",
              y2: "12"
            })
          ], -1)
        ])], 42, Zc)
      ]),
      l.value ? (k(), A("div", ef, " Aktualisiert: " + X(l.value), 1)) : re("", !0)
    ], 2));
  }
}), nf = /* @__PURE__ */ qe(tf, [["__scopeId", "data-v-495ed0f0"]]), sf = { class: "state value center-wrap" }, of = { class: "number" }, lf = { class: "unit" }, rf = {
  key: 0,
  class: "updated"
}, af = /* @__PURE__ */ Xe({
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
      const l = parseFloat(t.state.state);
      return isNaN(l) ? t.state.state : l.toFixed(1);
    }), s = Q(() => {
      var l;
      return ((l = t.state) == null ? void 0 : l.attributes.unit_of_measurement) ?? "";
    }), o = Q(() => t.state ? new Date(t.state.last_updated).toLocaleTimeString("de-DE") : null);
    return (l, i) => (k(), A("div", {
      class: ke(["body-center", { compact: e.isCompact, short: e.isShort, narrow: e.isNarrow }])
    }, [
      f("div", sf, [
        f("span", of, X(n.value), 1),
        f("span", lf, X(s.value), 1)
      ]),
      o.value && !e.isCompact ? (k(), A("div", rf, " Aktualisiert: " + X(o.value), 1)) : re("", !0)
    ], 2));
  }
}), uf = /* @__PURE__ */ qe(af, [["__scopeId", "data-v-336a5298"]]), cf = {
  key: 0,
  class: "card-header"
}, ff = { class: "label" }, df = { class: "ha-modal-fields" }, hf = { class: "ha-modal-input-wrap" }, pf = ["onKeydown"], gf = {
  key: 0,
  class: "ha-modal-suggestions"
}, vf = ["onMousedown"], mf = { class: "ha-modal-s-entity" }, yf = { class: "ha-modal-s-name" }, bf = ["onKeydown"], _f = { class: "ha-toggle-row" }, wf = {
  key: 1,
  class: "state loading"
}, $f = {
  key: 2,
  class: "state error"
}, kf = /* @__PURE__ */ Xe({
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
    const n = e, s = t, o = Q(() => n.cols === 1 && n.rows === 1), l = Q(() => n.rows === 1 && n.cols > 1), i = Q(() => n.cols === 1 && n.rows > 1), r = Q(() => n.entityId.startsWith("weather.")), a = Q(() => n.entityId.startsWith("light.")), c = /* @__PURE__ */ new Set(["on", "off", "open", "closed", "locked", "unlocked", "home", "away"]), u = Q(() => !n.state || a.value || r.value ? !1 : c.has(n.state.state)), h = Q(() => {
      if (!n.state) return !1;
      const z = n.state.state;
      if (z === "on" || z === "home" || z === "open" || z === "unlocked") return !0;
      const Y = parseFloat(z);
      return !isNaN(Y) && Y > 0;
    }), y = /* @__PURE__ */ U(localStorage.getItem(`ha_title_${n.entityId}`) ?? ""), m = /* @__PURE__ */ U(localStorage.getItem(`ha_showtitle_${n.entityId}`) !== "false");
    mt(() => n.entityId, (z) => {
      y.value = localStorage.getItem(`ha_title_${z}`) ?? "", m.value = localStorage.getItem(`ha_showtitle_${z}`) !== "false";
    });
    const N = Q(() => n.state ? n.state.attributes.friendly_name ?? n.state.entity_id : n.entityId), C = /* @__PURE__ */ U(!1), O = /* @__PURE__ */ U(""), S = /* @__PURE__ */ U(""), v = /* @__PURE__ */ U(!0), T = /* @__PURE__ */ U(null), L = /* @__PURE__ */ U([]), H = /* @__PURE__ */ U([]), D = /* @__PURE__ */ U(-1);
    async function ne() {
      try {
        L.value = await Du(n.token);
      } catch {
      }
    }
    function ae() {
      D.value = -1;
      const z = O.value.trim().toLowerCase();
      if (!z) {
        H.value = [];
        return;
      }
      H.value = L.value.filter(
        (Y) => Y.entity_id.toLowerCase().includes(z) || (Y.attributes.friendly_name ?? "").toLowerCase().includes(z)
      ).slice(0, 8);
    }
    function P() {
      H.value.length && (D.value = (D.value + 1) % H.value.length);
    }
    function B() {
      H.value.length && (D.value = (D.value - 1 + H.value.length) % H.value.length);
    }
    function d(z) {
      O.value = z, H.value = [], D.value = -1;
    }
    function x() {
      D.value >= 0 && H.value[D.value] ? d(H.value[D.value].entity_id) : G();
    }
    function K() {
      O.value = n.entityId, S.value = y.value, v.value = m.value, H.value = [], D.value = -1, C.value = !0, ne(), dn(() => {
        var z;
        return (z = T.value) == null ? void 0 : z.select();
      });
    }
    function G() {
      const z = O.value.trim();
      if (z) {
        const Y = S.value.trim();
        localStorage.setItem(`ha_title_${z}`, Y), localStorage.setItem(`ha_showtitle_${z}`, String(v.value)), Fi(), z === n.entityId && (y.value = Y, m.value = v.value), s("change-entity", z);
      }
      H.value = [], C.value = !1;
    }
    function se() {
      H.value = [], C.value = !1;
    }
    function ce() {
      C.value = !1, s("remove");
    }
    function he(z) {
      const Y = z.target.closest(".card");
      if (!Y) return;
      const ye = Y.getBoundingClientRect(), Le = "touches" in z ? z.touches[0].clientX : z.clientX, Fe = "touches" in z ? z.touches[0].clientY : z.clientY, Qt = ye.width, pn = ye.height, Zt = 120;
      document.body.style.userSelect = "none";
      function Qe(Re) {
        const wt = "touches" in Re ? Re.touches[0].clientX : Re.clientX, $t = "touches" in Re ? Re.touches[0].clientY : Re.clientY, en = Qt + (wt - Le), p = pn + ($t - Fe), g = Math.max(1, Math.min(6, Math.round((en + 20) / Zt))), w = Math.max(1, Math.min(6, Math.round((p + 20) / Zt)));
        Y.style.gridColumn = `span ${g}`, Y.style.gridRow = `span ${w}`, Y.dataset.previewCols = String(g), Y.dataset.previewRows = String(w);
      }
      function nt() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", Qe), document.removeEventListener("mouseup", nt), document.removeEventListener("touchmove", Qe), document.removeEventListener("touchend", nt);
        const Re = parseInt(Y.dataset.previewCols || String(n.cols)), wt = parseInt(Y.dataset.previewRows || String(n.rows));
        delete Y.dataset.previewCols, delete Y.dataset.previewRows, (Re !== n.cols || wt !== n.rows) && s("resize", Re, wt);
      }
      document.addEventListener("mousemove", Qe), document.addEventListener("mouseup", nt), document.addEventListener("touchmove", Qe), document.addEventListener("touchend", nt);
    }
    return (z, Y) => (k(), A("div", {
      class: ke(["card", { active: h.value, small: o.value, short: l.value, narrow: i.value }])
    }, [
      f("button", {
        class: "edit-ctrl-btn",
        onClick: te(K, ["stop"]),
        title: "Bearbeiten"
      }, [...Y[4] || (Y[4] = [
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1)
      ])]),
      m.value ? (k(), A("div", cf, [
        f("span", ff, X(y.value || N.value), 1)
      ])) : re("", !0),
      (k(), Me(_t, { to: "body" }, [
        C.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: te(se, ["self"])
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: Y[3] || (Y[3] = te(() => {
            }, ["stop"]))
          }, [
            Y[7] || (Y[7] = f("h3", { class: "ha-modal-title" }, "Sensor ändern", -1)),
            f("div", df, [
              f("div", hf, [
                at(f("input", {
                  ref_key: "inputRef",
                  ref: T,
                  "onUpdate:modelValue": Y[0] || (Y[0] = (ye) => O.value = ye),
                  class: "ha-modal-input",
                  placeholder: "sensor.mein_sensor",
                  autocomplete: "off",
                  onInput: ae,
                  onKeydown: [
                    Te(te(x, ["prevent"]), ["enter"]),
                    Te(se, ["escape"]),
                    Te(te(P, ["prevent"]), ["arrow-down"]),
                    Te(te(B, ["prevent"]), ["arrow-up"])
                  ]
                }, null, 40, pf), [
                  [ut, O.value]
                ]),
                H.value.length ? (k(), A("ul", gf, [
                  (k(!0), A(ue, null, Je(H.value, (ye, Le) => (k(), A("li", {
                    key: ye.entity_id,
                    class: ke(["ha-modal-suggestion-item", { active: Le === D.value }]),
                    onMousedown: te((Fe) => d(ye.entity_id), ["prevent"])
                  }, [
                    f("span", mf, X(ye.entity_id), 1),
                    f("span", yf, X(ye.attributes.friendly_name ?? ""), 1)
                  ], 42, vf))), 128))
                ])) : re("", !0)
              ]),
              at(f("input", {
                "onUpdate:modelValue": Y[1] || (Y[1] = (ye) => S.value = ye),
                class: "ha-modal-input",
                placeholder: "Alternativer Titel (optional)",
                autocomplete: "off",
                onKeydown: [
                  Te(te(G, ["prevent"]), ["enter"]),
                  Te(se, ["escape"])
                ]
              }, null, 40, bf), [
                [ut, S.value]
              ])
            ]),
            f("div", _f, [
              Y[6] || (Y[6] = f("span", { class: "ha-toggle-label" }, "Titel anzeigen", -1)),
              f("button", {
                class: ke(["ha-toggle", { on: v.value }]),
                onClick: Y[2] || (Y[2] = (ye) => v.value = !v.value),
                type: "button"
              }, [...Y[5] || (Y[5] = [
                f("span", { class: "ha-toggle-knob" }, null, -1)
              ])], 2)
            ]),
            Y[8] || (Y[8] = f("div", { class: "ha-modal-hint" }, " Entity-ID eingeben · ↑↓ navigieren · Enter übernehmen ", -1)),
            f("div", { class: "ha-modal-actions" }, [
              f("button", {
                class: "ha-modal-btn confirm",
                title: "Übernehmen",
                onClick: G
              }, "✓ Übernehmen"),
              f("button", {
                class: "ha-modal-btn cancel",
                title: "Abbrechen",
                onClick: se
              }, "✕ Abbrechen")
            ]),
            f("button", {
              class: "ha-modal-delete-btn",
              onClick: ce
            }, "Card entfernen")
          ])
        ])) : re("", !0)
      ])),
      e.loading ? (k(), A("div", wf, [...Y[9] || (Y[9] = [
        f("span", { class: "spinner" }, null, -1)
      ])])) : e.error ? (k(), A("div", $f, [
        Y[10] || (Y[10] = f("span", null, "⚠️", -1)),
        pt(" " + X(e.error), 1)
      ])) : r.value ? (k(), Me(Oc, {
        key: 3,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": l.value,
        "is-narrow": i.value,
        label: y.value || N.value,
        "custom-title": y.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow", "label", "custom-title"])) : a.value ? (k(), Me(qc, {
        key: 4,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": l.value,
        "is-narrow": i.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : u.value ? (k(), Me(nf, {
        key: 5,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": l.value,
        "is-narrow": i.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])) : (k(), Me(uf, {
        key: 6,
        "entity-id": e.entityId,
        token: e.token,
        state: e.state,
        "is-compact": o.value,
        "is-short": l.value,
        "is-narrow": i.value
      }, null, 8, ["entity-id", "token", "state", "is-compact", "is-short", "is-narrow"])),
      f("div", {
        class: "resize-handle",
        onMousedown: te(he, ["prevent"]),
        onTouchstart: te(he, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Sf = /* @__PURE__ */ qe(kf, [["__scopeId", "data-v-26419e66"]]), xf = { class: "heading-content" }, Cf = { class: "ha-modal-header-row" }, Tf = { class: "ha-modal-fields" }, Mf = ["onKeydown"], Ef = { class: "ha-modal-actions" }, Af = /* @__PURE__ */ Xe({
  __name: "HeadingCard",
  props: {
    label: {},
    cols: { default: 3 },
    rows: { default: 1 }
  },
  emits: ["update-label", "remove", "resize"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = /* @__PURE__ */ U(!1), l = /* @__PURE__ */ U(""), i = /* @__PURE__ */ U(null);
    function r() {
      l.value = n.label, o.value = !0, dn(() => {
        var C;
        return (C = i.value) == null ? void 0 : C.select();
      });
    }
    function a() {
      o.value = !1;
      const C = l.value.trim();
      C && C !== n.label && s("update-label", C);
    }
    function c() {
      o.value = !1;
    }
    const u = /* @__PURE__ */ U(!1), h = /* @__PURE__ */ U("");
    function y() {
      h.value = n.label, u.value = !0;
    }
    function m() {
      const C = h.value.trim();
      C && C !== n.label && s("update-label", C), u.value = !1;
    }
    function N(C) {
      const O = C.target.closest(".heading");
      if (!O) return;
      const S = O.getBoundingClientRect(), v = "touches" in C ? C.touches[0].clientX : C.clientX, T = "touches" in C ? C.touches[0].clientY : C.clientY, L = S.width, H = S.height, D = 120;
      document.body.style.userSelect = "none";
      function ne(P) {
        const B = "touches" in P ? P.touches[0].clientX : P.clientX, d = "touches" in P ? P.touches[0].clientY : P.clientY, x = L + (B - v), K = H + (d - T), G = Math.max(1, Math.min(12, Math.round((x + 20) / D))), se = Math.max(1, Math.min(4, Math.round((K + 20) / D)));
        O.style.gridColumn = `span ${G}`, O.style.gridRow = `span ${se}`, O.dataset.previewCols = String(G), O.dataset.previewRows = String(se);
      }
      function ae() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", ne), document.removeEventListener("mouseup", ae), document.removeEventListener("touchmove", ne), document.removeEventListener("touchend", ae);
        const P = parseInt(O.dataset.previewCols ?? "") || n.cols, B = parseInt(O.dataset.previewRows ?? "") || n.rows;
        delete O.dataset.previewCols, delete O.dataset.previewRows, O.style.gridColumn = "", O.style.gridRow = "", s("resize", P, B);
      }
      document.addEventListener("mousemove", ne), document.addEventListener("mouseup", ae), document.addEventListener("touchmove", ne, { passive: !1 }), document.addEventListener("touchend", ae);
    }
    return (C, O) => (k(), A("div", {
      class: ke(["heading", { short: e.rows === 1 }])
    }, [
      f("div", xf, [
        o.value ? at((k(), A("input", {
          key: 1,
          ref_key: "inputRef",
          ref: i,
          "onUpdate:modelValue": O[0] || (O[0] = (S) => l.value = S),
          class: "heading-input",
          onBlur: a,
          onKeydown: [
            Te(a, ["enter"]),
            Te(c, ["escape"])
          ]
        }, null, 544)), [
          [ut, l.value]
        ]) : (k(), A("h2", {
          key: 0,
          class: "heading-text",
          onDblclick: r
        }, X(e.label), 33)),
        O[8] || (O[8] = f("hr", { class: "heading-line" }, null, -1))
      ]),
      f("button", {
        class: "heading-edit-btn",
        onClick: te(y, ["stop"]),
        title: "Bearbeiten"
      }, [...O[9] || (O[9] = [
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1)
      ])]),
      (k(), Me(_t, { to: "body" }, [
        u.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: O[7] || (O[7] = te((S) => u.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: O[6] || (O[6] = te(() => {
            }, ["stop"]))
          }, [
            f("div", Cf, [
              O[10] || (O[10] = f("h3", { class: "ha-modal-title" }, "Überschrift", -1)),
              f("button", {
                class: "ha-modal-close",
                onClick: O[1] || (O[1] = (S) => u.value = !1)
              }, "✕")
            ]),
            f("div", Tf, [
              at(f("input", {
                "onUpdate:modelValue": O[2] || (O[2] = (S) => h.value = S),
                class: "ha-modal-input",
                placeholder: "Überschrift...",
                onKeydown: [
                  Te(te(m, ["prevent"]), ["enter"]),
                  O[3] || (O[3] = Te((S) => u.value = !1, ["escape"]))
                ]
              }, null, 40, Mf), [
                [ut, h.value]
              ])
            ]),
            f("div", Ef, [
              f("button", {
                class: "ha-modal-btn confirm",
                onClick: m
              }, "✓ Übernehmen"),
              f("button", {
                class: "ha-modal-btn cancel",
                onClick: O[4] || (O[4] = (S) => u.value = !1)
              }, "✕ Abbrechen")
            ]),
            f("button", {
              class: "ha-modal-delete-btn",
              onClick: O[5] || (O[5] = (S) => {
                C.$emit("remove"), u.value = !1;
              })
            }, " Überschrift entfernen ")
          ])
        ])) : re("", !0)
      ])),
      f("div", {
        class: "resize-handle",
        onMousedown: te(N, ["prevent"]),
        onTouchstart: te(N, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), If = /* @__PURE__ */ qe(Af, [["__scopeId", "data-v-7a388668"]]), Lf = ["innerHTML"], Rf = { class: "template-editor-wrap" }, Of = ["onKeydown"], Pf = ["innerHTML"], Nf = "{{ states('sensor.xxx') }}", Hf = "{% if is_state('light.xxx', 'on') %}An{% endif %}", Df = /* @__PURE__ */ Xe({
  __name: "TemplateCard",
  props: {
    template: {},
    cols: { default: 2 },
    rows: { default: 2 }
  },
  emits: ["update-template", "remove", "resize"],
  setup(e, { emit: t }) {
    const n = e, s = t, o = Q(() => n.cols <= 1 && n.rows <= 1), l = Q(() => n.rows <= 1 && n.cols > 1), i = /* @__PURE__ */ U('<span style="color:#a0aec0">Lade...</span>');
    let r = null;
    function a(H) {
      if (r == null || r.unsubscribe(), r = null, !H.trim()) {
        i.value = '<span style="color:#a0aec0">Template leer</span>';
        return;
      }
      r = ml(
        H,
        (D) => {
          i.value = D;
        },
        (D) => {
          i.value = `<span style="color:#e53e3e">${D}</span>`;
        }
      );
    }
    a(n.template), mt(() => n.template, (H) => {
      a(H);
    }), hn(() => {
      r == null || r.unsubscribe();
    });
    const c = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(""), h = /* @__PURE__ */ U(null), y = /* @__PURE__ */ U("");
    let m = null, N = null;
    function C() {
      u.value = n.template, c.value = !0, y.value = i.value, dn(() => {
        var H;
        return (H = h.value) == null ? void 0 : H.focus();
      }), O(u.value);
    }
    function O(H) {
      if (m == null || m.unsubscribe(), m = null, !H.trim()) {
        y.value = '<span style="color:#a0aec0">Template leer</span>';
        return;
      }
      m = ml(
        H,
        (D) => {
          y.value = D;
        },
        (D) => {
          y.value = `<span style="color:#e53e3e">${D}</span>`;
        }
      );
    }
    mt(u, (H) => {
      N && clearTimeout(N), N = setTimeout(() => O(H), 400);
    });
    function S() {
      m == null || m.unsubscribe(), m = null, c.value = !1, u.value !== n.template && s("update-template", u.value);
    }
    function v() {
      m == null || m.unsubscribe(), m = null, c.value = !1;
    }
    function T(H) {
      const D = h.value;
      if (!D) return;
      const ne = D.selectionStart, ae = D.selectionEnd;
      u.value = u.value.substring(0, ne) + "  " + u.value.substring(ae), dn(() => {
        D.selectionStart = D.selectionEnd = ne + 2;
      });
    }
    function L(H) {
      const D = H.target.closest(".card");
      if (!D) return;
      const ne = D.getBoundingClientRect(), ae = "touches" in H ? H.touches[0].clientX : H.clientX, P = "touches" in H ? H.touches[0].clientY : H.clientY, B = ne.width, d = ne.height, x = 120;
      document.body.style.userSelect = "none";
      function K(se) {
        const ce = "touches" in se ? se.touches[0].clientX : se.clientX, he = "touches" in se ? se.touches[0].clientY : se.clientY, z = B + (ce - ae), Y = d + (he - P), ye = Math.max(1, Math.min(12, Math.round((z + 20) / x))), Le = Math.max(1, Math.min(6, Math.round((Y + 20) / x)));
        D.style.gridColumn = `span ${ye}`, D.style.gridRow = `span ${Le}`, D.dataset.previewCols = String(ye), D.dataset.previewRows = String(Le);
      }
      function G() {
        document.body.style.userSelect = "", document.removeEventListener("mousemove", K), document.removeEventListener("mouseup", G), document.removeEventListener("touchmove", K), document.removeEventListener("touchend", G);
        const se = parseInt(D.dataset.previewCols ?? "") || n.cols, ce = parseInt(D.dataset.previewRows ?? "") || n.rows;
        delete D.dataset.previewCols, delete D.dataset.previewRows, D.style.gridColumn = "", D.style.gridRow = "", s("resize", se, ce);
      }
      document.addEventListener("mousemove", K), document.addEventListener("mouseup", G), document.addEventListener("touchmove", K, { passive: !1 }), document.addEventListener("touchend", G);
    }
    return (H, D) => (k(), A("div", {
      class: ke(["card template-card", { small: o.value, short: l.value }])
    }, [
      f("button", {
        class: "edit-ctrl-btn",
        onClick: te(C, ["stop"]),
        title: "Bearbeiten"
      }, [...D[3] || (D[3] = [
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1),
        f("span", { class: "dot" }, null, -1)
      ])]),
      f("div", {
        class: "template-content",
        innerHTML: i.value
      }, null, 8, Lf),
      (k(), Me(_t, { to: "body" }, [
        c.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: te(v, ["self"])
        }, [
          f("div", {
            class: "ha-modal-box template-modal",
            onClick: D[2] || (D[2] = te(() => {
            }, ["stop"]))
          }, [
            f("div", { class: "ha-modal-header-row" }, [
              D[4] || (D[4] = f("h3", { class: "ha-modal-title" }, "Template bearbeiten", -1)),
              f("button", {
                class: "ha-modal-close",
                onClick: v
              }, "✕")
            ]),
            f("div", Rf, [
              at(f("textarea", {
                ref_key: "editorRef",
                ref: h,
                "onUpdate:modelValue": D[0] || (D[0] = (ne) => u.value = ne),
                class: "template-editor",
                placeholder: "Jinja2 / HTML Template...",
                spellcheck: "false",
                onKeydown: Te(te(T, ["prevent"]), ["tab"])
              }, null, 40, Of), [
                [ut, u.value]
              ])
            ]),
            D[5] || (D[5] = f("div", { class: "template-preview-label" }, "Vorschau:", -1)),
            f("div", {
              class: "template-preview",
              innerHTML: y.value
            }, null, 8, Pf),
            f("div", { class: "template-hint" }, [
              f("code", { textContent: Nf }),
              f("code", { textContent: Hf })
            ]),
            f("div", { class: "ha-modal-actions" }, [
              f("button", {
                class: "ha-modal-btn confirm",
                onClick: S
              }, "✓ Speichern"),
              f("button", {
                class: "ha-modal-btn cancel",
                onClick: v
              }, "✕ Abbrechen")
            ]),
            f("button", {
              class: "ha-modal-delete-btn",
              onClick: D[1] || (D[1] = (ne) => {
                H.$emit("remove"), c.value = !1;
              })
            }, " Card entfernen ")
          ])
        ])) : re("", !0)
      ])),
      f("div", {
        class: "resize-handle",
        onMousedown: te(L, ["prevent"]),
        onTouchstart: te(L, ["prevent"])
      }, null, 32)
    ], 2));
  }
}), Ff = /* @__PURE__ */ qe(Df, [["__scopeId", "data-v-1d42c254"]]), Bi = /* @__PURE__ */ new Map();
function Bf() {
  for (const [, e] of Bi)
    e.reload();
}
function Co(e) {
  const { cache: t, version: n } = xo();
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
  const o = /* @__PURE__ */ U(s());
  function l() {
    localStorage.setItem(`ha_group_${e.key}`, JSON.stringify(o.value)), Fi();
  }
  Bi.set(e.key, {
    reload: () => {
      o.value = s();
    }
  });
  const i = Q(() => {
    n.value;
    const h = [];
    for (const [, y] of t)
      e.autoDetect(y) && h.push(y.entity_id);
    return h.sort();
  }), r = Q(() => {
    const h = new Set(o.value.excluded), y = /* @__PURE__ */ new Set();
    for (const m of i.value)
      h.has(m) || y.add(m);
    for (const m of o.value.included)
      y.add(m);
    return [...y].sort();
  }), a = Q(() => (n.value, r.value.map((h) => t.get(h)).filter((h) => h != null)));
  function c(h) {
    o.value.included.includes(h) || o.value.included.push(h), o.value.excluded = o.value.excluded.filter((y) => y !== h), l();
  }
  function u(h) {
    o.value.included = o.value.included.filter((y) => y !== h), i.value.includes(h) && !o.value.excluded.includes(h) && o.value.excluded.push(h), l();
  }
  return {
    entities: a,
    entityIds: r,
    autoDetectedIds: i,
    config: o,
    addEntity: c,
    removeEntity: u
  };
}
const jf = { class: "pill-label" }, Kf = { class: "ha-modal-header-row" }, Vf = {
  key: 0,
  class: "ha-modal-empty"
}, Wf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Uf = { class: "ha-modal-entity-name" }, zf = /* @__PURE__ */ Xe({
  __name: "SecurityPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = Co({
      key: "security",
      autoDetect: (r) => r.entity_id.startsWith("binary_sensor.") && ["door", "window", "garage_door", "opening"].includes(r.attributes.device_class),
      token: /* @__PURE__ */ yo(() => t.token)
    }), s = Q(() => n.entities.value.filter((r) => r.state === "on")), o = Q(() => s.value.length > 0), l = Q(() => s.value.length), i = /* @__PURE__ */ U(!1);
    return (r, a) => (k(), A(ue, null, [
      f("button", {
        class: ke(["pill", { active: o.value }]),
        onClick: a[0] || (a[0] = (c) => i.value = !0)
      }, [
        a[4] || (a[4] = f("span", { class: "pill-icon" }, "🔒", -1)),
        f("span", jf, X(o.value ? `${l.value} offen` : "Gesichert"), 1)
      ], 2),
      (k(), Me(_t, { to: "body" }, [
        i.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: a[3] || (a[3] = te((c) => i.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: a[2] || (a[2] = te(() => {
            }, ["stop"]))
          }, [
            f("div", Kf, [
              a[5] || (a[5] = f("h3", { class: "ha-modal-title" }, "Fenster & Türen", -1)),
              f("button", {
                class: "ha-modal-close",
                onClick: a[1] || (a[1] = (c) => i.value = !1)
              }, "✕")
            ]),
            Ne(n).entities.value.length ? (k(), A("ul", Wf, [
              (k(!0), A(ue, null, Je(Ne(n).entities.value, (c) => (k(), A("li", {
                key: c.entity_id,
                class: "ha-modal-entity-row"
              }, [
                f("span", Uf, X(c.attributes.friendly_name ?? c.entity_id), 1),
                f("span", {
                  class: ke(["ha-modal-entity-badge", c.state === "on" ? "open" : "closed"])
                }, X(c.state === "on" ? "Offen" : "Zu"), 3)
              ]))), 128))
            ])) : (k(), A("div", Vf, " Keine Sensoren gefunden "))
          ])
        ])) : re("", !0)
      ]))
    ], 64));
  }
}), Jf = /* @__PURE__ */ qe(zf, [["__scopeId", "data-v-4c919921"]]), Gf = { class: "pill-label" }, Yf = { class: "ha-modal-header-row" }, Xf = { class: "ha-modal-header-actions" }, qf = {
  key: 0,
  class: "ha-modal-empty"
}, Qf = {
  key: 1,
  class: "ha-modal-entity-list"
}, Zf = { class: "ha-modal-entity-name" }, ed = ["onClick"], td = { class: "ha-modal-input-wrap" }, nd = ["onKeydown"], sd = {
  key: 0,
  class: "ha-modal-suggestions"
}, od = ["onMousedown"], ld = { class: "ha-modal-s-entity" }, id = { class: "ha-modal-s-name" }, rd = { class: "ha-modal-entity-list" }, ad = { class: "ha-modal-entity-name" }, ud = ["onClick"], cd = {
  key: 0,
  class: "ha-modal-empty"
}, fd = /* @__PURE__ */ Xe({
  __name: "LightsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = Co({
      key: "lights",
      autoDetect: (v) => v.entity_id.startsWith("light."),
      token: /* @__PURE__ */ yo(() => t.token)
    }), { cache: s, version: o } = xo(), l = Q(() => n.entities.value.filter((v) => v.state === "on")), i = Q(() => l.value.length > 0), r = Q(() => l.value.length), a = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(""), h = /* @__PURE__ */ U([]);
    function y() {
      c.value = !c.value, u.value = "", h.value = [];
    }
    function m(v) {
      o.value;
      const T = s.get(v);
      return (T == null ? void 0 : T.attributes.friendly_name) ?? v;
    }
    function N() {
      const v = u.value.trim().toLowerCase();
      if (!v) {
        h.value = [];
        return;
      }
      const T = new Set(n.entityIds.value), L = [];
      o.value;
      for (const [, H] of s)
        if (!T.has(H.entity_id) && (H.entity_id.toLowerCase().includes(v) || (H.attributes.friendly_name ?? "").toLowerCase().includes(v)) && (L.push(H), L.length >= 8))
          break;
      h.value = L;
    }
    function C(v) {
      n.addEntity(v), u.value = "", h.value = [];
    }
    function O() {
      h.value.length && C(h.value[0].entity_id);
    }
    async function S(v) {
      await Jt(t.token, v, "toggle");
    }
    return (v, T) => (k(), A(ue, null, [
      f("button", {
        class: ke(["pill", { active: i.value }]),
        onClick: T[0] || (T[0] = (L) => a.value = !0)
      }, [
        T[6] || (T[6] = f("span", { class: "pill-icon" }, "💡", -1)),
        f("span", Gf, X(i.value ? `${r.value} an` : "Lichter aus"), 1)
      ], 2),
      (k(), Me(_t, { to: "body" }, [
        a.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: T[5] || (T[5] = te((L) => a.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: T[4] || (T[4] = te(() => {
            }, ["stop"]))
          }, [
            f("div", Yf, [
              T[8] || (T[8] = f("h3", { class: "ha-modal-title" }, "Lichter", -1)),
              f("div", Xf, [
                f("button", {
                  class: ke(["ha-modal-icon-btn", { active: c.value }]),
                  onClick: y,
                  title: "Bearbeiten"
                }, [...T[7] || (T[7] = [
                  f("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    f("path", { d: "M12 20h9" }),
                    f("path", { d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1)
                ])], 2),
                f("button", {
                  class: "ha-modal-close",
                  onClick: T[1] || (T[1] = (L) => {
                    a.value = !1, c.value = !1;
                  })
                }, "✕")
              ])
            ]),
            c.value ? (k(), A(ue, { key: 1 }, [
              f("div", td, [
                at(f("input", {
                  "onUpdate:modelValue": T[2] || (T[2] = (L) => u.value = L),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Te(te(O, ["prevent"]), ["enter"]),
                    T[3] || (T[3] = Te((L) => {
                      u.value = "", h.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, nd), [
                  [ut, u.value]
                ]),
                h.value.length ? (k(), A("ul", sd, [
                  (k(!0), A(ue, null, Je(h.value, (L) => (k(), A("li", {
                    key: L.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: te((H) => C(L.entity_id), ["prevent"])
                  }, [
                    f("span", ld, X(L.entity_id), 1),
                    f("span", id, X(L.attributes.friendly_name ?? ""), 1)
                  ], 40, od))), 128))
                ])) : re("", !0)
              ]),
              f("ul", rd, [
                (k(!0), A(ue, null, Je(Ne(n).entityIds.value, (L) => (k(), A("li", {
                  key: L,
                  class: "ha-modal-entity-row"
                }, [
                  f("span", ad, X(m(L)), 1),
                  f("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (H) => Ne(n).removeEntity(L),
                    title: "Entfernen"
                  }, "✕", 8, ud)
                ]))), 128))
              ]),
              Ne(n).entityIds.value.length ? re("", !0) : (k(), A("div", cd, " Keine Lichter ausgewählt "))
            ], 64)) : (k(), A(ue, { key: 0 }, [
              Ne(n).entities.value.length ? (k(), A("ul", Qf, [
                (k(!0), A(ue, null, Je(Ne(n).entities.value, (L) => (k(), A("li", {
                  key: L.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  f("span", Zf, X(L.attributes.friendly_name ?? L.entity_id), 1),
                  f("button", {
                    class: ke(["ha-modal-toggle-btn", L.state === "on" ? "on" : "off"]),
                    onClick: (H) => S(L.entity_id)
                  }, X(L.state === "on" ? "An" : "Aus"), 11, ed)
                ]))), 128))
              ])) : (k(), A("div", qf, " Keine Lichter gefunden "))
            ], 64))
          ])
        ])) : re("", !0)
      ]))
    ], 64));
  }
}), dd = /* @__PURE__ */ qe(fd, [["__scopeId", "data-v-10807199"]]), hd = { class: "pill-label" }, pd = { class: "ha-modal-header-row" }, gd = { class: "ha-modal-header-actions" }, vd = {
  key: 0,
  class: "ha-modal-empty"
}, md = {
  key: 1,
  class: "ha-modal-entity-list"
}, yd = { class: "ha-modal-entity-name" }, bd = { class: "ha-modal-entity-value" }, _d = { class: "ha-modal-input-wrap" }, wd = ["onKeydown"], $d = {
  key: 0,
  class: "ha-modal-suggestions"
}, kd = ["onMousedown"], Sd = { class: "ha-modal-s-entity" }, xd = { class: "ha-modal-s-name" }, Cd = { class: "ha-modal-entity-list" }, Td = { class: "ha-modal-entity-name" }, Md = ["onClick"], Ed = {
  key: 0,
  class: "ha-modal-empty"
}, Ad = /* @__PURE__ */ Xe({
  __name: "ClimatePill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = Co({
      key: "climate",
      autoDetect: (S) => S.entity_id.startsWith("climate.") || S.entity_id.startsWith("sensor.") && S.attributes.device_class === "temperature",
      token: /* @__PURE__ */ yo(() => t.token)
    }), { cache: s, version: o } = xo();
    function l(S) {
      if (S.entity_id.startsWith("climate.")) {
        const T = S.attributes.current_temperature;
        return typeof T == "number" ? T : null;
      }
      const v = parseFloat(S.state);
      return isNaN(v) ? null : v;
    }
    function i(S) {
      const v = l(S);
      if (v === null) return S.state;
      const T = S.attributes.unit_of_measurement ?? "°C";
      return `${v.toFixed(1)} ${T}`;
    }
    const r = Q(() => {
      const S = n.entities.value.map(l).filter((L) => L !== null);
      if (!S.length) return "-- °C";
      const v = Math.min(...S), T = Math.max(...S);
      return v === T ? `${v.toFixed(1)} °C` : `${v.toFixed(1)}–${T.toFixed(1)} °C`;
    });
    function a(S) {
      o.value;
      const v = s.get(S);
      return (v == null ? void 0 : v.attributes.friendly_name) ?? S;
    }
    const c = /* @__PURE__ */ U(!1), u = /* @__PURE__ */ U(!1), h = /* @__PURE__ */ U(""), y = /* @__PURE__ */ U([]);
    function m() {
      u.value = !u.value, h.value = "", y.value = [];
    }
    function N() {
      const S = h.value.trim().toLowerCase();
      if (!S) {
        y.value = [];
        return;
      }
      const v = new Set(n.entityIds.value), T = [];
      o.value;
      for (const [, L] of s)
        if (!v.has(L.entity_id) && (L.entity_id.toLowerCase().includes(S) || (L.attributes.friendly_name ?? "").toLowerCase().includes(S)) && (T.push(L), T.length >= 8))
          break;
      y.value = T;
    }
    function C(S) {
      n.addEntity(S), h.value = "", y.value = [];
    }
    function O() {
      y.value.length && C(y.value[0].entity_id);
    }
    return (S, v) => (k(), A(ue, null, [
      f("button", {
        class: "pill",
        onClick: v[0] || (v[0] = (T) => c.value = !0)
      }, [
        v[6] || (v[6] = f("span", { class: "pill-icon" }, "🌡", -1)),
        f("span", hd, X(r.value), 1)
      ]),
      (k(), Me(_t, { to: "body" }, [
        c.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: v[5] || (v[5] = te((T) => c.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: v[4] || (v[4] = te(() => {
            }, ["stop"]))
          }, [
            f("div", pd, [
              v[8] || (v[8] = f("h3", { class: "ha-modal-title" }, "Klima", -1)),
              f("div", gd, [
                f("button", {
                  class: ke(["ha-modal-icon-btn", { active: u.value }]),
                  onClick: m,
                  title: "Bearbeiten"
                }, [...v[7] || (v[7] = [
                  f("svg", {
                    width: "16",
                    height: "16",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    "stroke-width": "2",
                    "stroke-linecap": "round",
                    "stroke-linejoin": "round"
                  }, [
                    f("path", { d: "M12 20h9" }),
                    f("path", { d: "M16.5 3.5a2.121 2.121 0 1 1 3 3L7 19l-4 1 1-4L16.5 3.5z" })
                  ], -1)
                ])], 2),
                f("button", {
                  class: "ha-modal-close",
                  onClick: v[1] || (v[1] = (T) => {
                    c.value = !1, u.value = !1;
                  })
                }, "✕")
              ])
            ]),
            u.value ? (k(), A(ue, { key: 1 }, [
              f("div", _d, [
                at(f("input", {
                  "onUpdate:modelValue": v[2] || (v[2] = (T) => h.value = T),
                  class: "ha-modal-input",
                  placeholder: "Entity suchen und hinzufügen...",
                  autocomplete: "off",
                  onInput: N,
                  onKeydown: [
                    Te(te(O, ["prevent"]), ["enter"]),
                    v[3] || (v[3] = Te((T) => {
                      h.value = "", y.value = [];
                    }, ["escape"]))
                  ]
                }, null, 40, wd), [
                  [ut, h.value]
                ]),
                y.value.length ? (k(), A("ul", $d, [
                  (k(!0), A(ue, null, Je(y.value, (T) => (k(), A("li", {
                    key: T.entity_id,
                    class: "ha-modal-suggestion-item",
                    onMousedown: te((L) => C(T.entity_id), ["prevent"])
                  }, [
                    f("span", Sd, X(T.entity_id), 1),
                    f("span", xd, X(T.attributes.friendly_name ?? ""), 1)
                  ], 40, kd))), 128))
                ])) : re("", !0)
              ]),
              f("ul", Cd, [
                (k(!0), A(ue, null, Je(Ne(n).entityIds.value, (T) => (k(), A("li", {
                  key: T,
                  class: "ha-modal-entity-row"
                }, [
                  f("span", Td, X(a(T)), 1),
                  f("button", {
                    class: "ha-modal-remove-btn",
                    onClick: (L) => Ne(n).removeEntity(T),
                    title: "Entfernen"
                  }, "✕", 8, Md)
                ]))), 128))
              ]),
              Ne(n).entityIds.value.length ? re("", !0) : (k(), A("div", Ed, " Keine Sensoren ausgewählt "))
            ], 64)) : (k(), A(ue, { key: 0 }, [
              Ne(n).entities.value.length ? (k(), A("ul", md, [
                (k(!0), A(ue, null, Je(Ne(n).entities.value, (T) => (k(), A("li", {
                  key: T.entity_id,
                  class: "ha-modal-entity-row"
                }, [
                  f("span", yd, X(T.attributes.friendly_name ?? T.entity_id), 1),
                  f("span", bd, X(i(T)), 1)
                ]))), 128))
              ])) : (k(), A("div", vd, " Keine Klimasensoren gefunden "))
            ], 64))
          ])
        ])) : re("", !0)
      ]))
    ], 64));
  }
}), Id = /* @__PURE__ */ qe(Ad, [["__scopeId", "data-v-2665ddcd"]]), Ld = { class: "pill-label" }, Rd = { class: "ha-modal-header-row" }, Od = {
  key: 0,
  class: "ha-modal-empty"
}, Pd = {
  key: 1,
  class: "ha-modal-entity-list"
}, Nd = { class: "notif-header" }, Hd = { class: "notif-title" }, Dd = { class: "notif-time" }, Fd = {
  key: 0,
  class: "notif-message"
}, Bd = ["onClick"], jd = /* @__PURE__ */ Xe({
  __name: "NotificationsPill",
  props: {
    token: {}
  },
  setup(e) {
    const t = e, n = /* @__PURE__ */ U([]), s = /* @__PURE__ */ U(!1);
    let o = null;
    async function l() {
      try {
        const a = new WebSocket(Ni()), c = await new Promise((u, h) => {
          let y = 1;
          a.onmessage = (m) => {
            const N = JSON.parse(m.data);
            if (N.type === "auth_required") {
              a.send(JSON.stringify({ type: "auth", access_token: t.token }));
              return;
            }
            if (N.type === "auth_ok") {
              const C = y++;
              a.send(JSON.stringify({ id: C, type: "persistent_notification/get" }));
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
    async function i(a) {
      try {
        await fetch(Ts("/api/services/persistent_notification/dismiss"), {
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
      const y = Math.round(h / 60);
      return y < 24 ? `Vor ${y} Stunde${y > 1 ? "n" : ""}` : `Vor ${Math.round(y / 24)} Tag${Math.round(y / 24) > 1 ? "en" : ""}`;
    }
    return On(() => {
      l(), o = setInterval(l, 3e4);
    }), hn(() => {
      o && clearInterval(o);
    }), (a, c) => (k(), A(ue, null, [
      n.value.length ? (k(), A("button", {
        key: 0,
        class: "pill",
        onClick: c[0] || (c[0] = (u) => s.value = !0)
      }, [
        c[4] || (c[4] = f("span", { class: "pill-dot" }, null, -1)),
        f("span", Ld, X(n.value.length), 1)
      ])) : re("", !0),
      (k(), Me(_t, { to: "body" }, [
        s.value ? (k(), A("div", {
          key: 0,
          class: "ha-modal-overlay",
          onClick: c[3] || (c[3] = te((u) => s.value = !1, ["self"]))
        }, [
          f("div", {
            class: "ha-modal-box",
            onClick: c[2] || (c[2] = te(() => {
            }, ["stop"]))
          }, [
            f("div", Rd, [
              c[5] || (c[5] = f("h3", { class: "ha-modal-title" }, "Benachrichtigungen", -1)),
              f("button", {
                class: "ha-modal-close",
                onClick: c[1] || (c[1] = (u) => s.value = !1)
              }, "✕")
            ]),
            n.value.length ? (k(), A("ul", Pd, [
              (k(!0), A(ue, null, Je(n.value, (u) => (k(), A("li", {
                key: u.notification_id,
                class: "notif-item"
              }, [
                f("div", Nd, [
                  f("span", Hd, X(u.title || u.message), 1),
                  f("span", Dd, X(r(u.created_at)), 1)
                ]),
                u.title && u.message ? (k(), A("p", Fd, X(u.message), 1)) : re("", !0),
                f("button", {
                  class: "notif-dismiss",
                  onClick: (h) => i(u.notification_id)
                }, "Löschen", 8, Bd)
              ]))), 128))
            ])) : (k(), A("div", Od, " Keine Benachrichtigungen "))
          ])
        ])) : re("", !0)
      ]))
    ], 64));
  }
}), Kd = /* @__PURE__ */ qe(jd, [["__scopeId", "data-v-a643a4ed"]]), Vd = {
  key: 1,
  class: "dashboard"
}, Wd = { class: "dashboard-header" }, Ud = { class: "header-left" }, zd = { class: "header-right" }, Jd = { class: "clock" }, Gd = { class: "clock-time" }, Yd = { class: "clock-date" }, Xd = { class: "page-tabs" }, qd = { class: "page-tabs-inner" }, Qd = ["onClick", "onDblclick", "onTouchstartPassive"], Zd = {
  key: 1,
  class: "page-tab-label"
}, eh = { class: "ha-modal-header-row" }, th = { class: "page-delete-text" }, nh = { class: "page-delete-actions" }, sh = { class: "burger-wrap" }, oh = { class: "burger-auth-actions" }, yl = 120, lh = 36, ih = 32, rh = /* @__PURE__ */ Xe({
  __name: "App",
  props: {
    panelMode: { type: Boolean, default: !1 }
  },
  setup(e) {
    var Pe;
    e.panelMode && Oi(!0);
    const n = /* @__PURE__ */ U(localStorage.getItem("ha_token")), s = Pu(), o = Q(() => Ru() ? s.value : n.value), l = Nu(), i = Q(() => Hu(o.value ?? void 0)), r = /* @__PURE__ */ U(l.value ?? ""), a = /* @__PURE__ */ U(!1), c = /* @__PURE__ */ ys({}), u = /* @__PURE__ */ new Map();
    function h() {
      return Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
    }
    function y() {
      try {
        const b = localStorage.getItem("ha_pages");
        if (b) {
          const _ = JSON.parse(b);
          if (Array.isArray(_) && _.length)
            return _.map(($) => ({
              id: $.id,
              name: $.name || "Seite",
              cards: ($.cards || []).map((le) => ({
                id: le.id,
                type: le.type ?? "card",
                entityId: le.entityId ?? "",
                label: le.label,
                template: le.template,
                cols: le.cols ?? 2,
                rows: le.rows ?? 2,
                gridCol: le.gridCol,
                gridRow: le.gridRow
              }))
            }));
        }
      } catch {
      }
      try {
        const b = localStorage.getItem("ha_cards");
        if (b) {
          const _ = JSON.parse(b).map(($) => ({
            id: $.id,
            entityId: $.entityId,
            cols: $.cols ?? ($.size === "small" ? 1 : 2),
            rows: $.rows ?? ($.size === "small" ? 1 : 2)
          }));
          return [{ id: h(), name: "Home", cards: _ }];
        }
      } catch {
      }
      return [{ id: h(), name: "Home", cards: [{ id: h(), entityId: "sensor.wohnzimmer_soll_temperatur", cols: 2, rows: 2 }] }];
    }
    const m = /* @__PURE__ */ U([]), N = /* @__PURE__ */ U(""), C = Q(() => m.value.find((b) => b.id === N.value) ?? m.value[0]), O = Q(() => {
      var b;
      return ((b = C.value) == null ? void 0 : b.cards) ?? [];
    });
    function S() {
      return {
        pages: m.value,
        authKey: l.value ?? null,
        activePage: N.value,
        ...lo()
      };
    }
    function v() {
      localStorage.setItem("ha_pages", JSON.stringify(m.value)), localStorage.setItem("ha_active_page", N.value), wn(S());
    }
    function T(b) {
      if (N.value !== b) {
        for (const _ of O.value) ye(_.id);
        N.value = b, localStorage.setItem("ha_active_page", b), wn(S());
        for (const _ of O.value)
          (_.type === "card" || _.type === void 0) && Y(_.id, _.entityId);
      }
    }
    function L() {
      const b = h(), _ = m.value.length + 1;
      m.value = [...m.value, { id: b, name: `Seite ${_}`, cards: [] }], v(), T(b);
    }
    const H = /* @__PURE__ */ U(null), D = Q(() => {
      const b = m.value.find((_) => _.id === H.value);
      return (b == null ? void 0 : b.name) ?? "";
    }), ne = Q(() => {
      const b = m.value.find((_) => _.id === H.value);
      return (b == null ? void 0 : b.cards.length) ?? 0;
    });
    function ae(b) {
      m.value.length <= 1 || (H.value = b);
    }
    function P() {
      const b = H.value;
      if (H.value = null, !b || m.value.length <= 1) return;
      const _ = m.value.find(($) => $.id === b);
      if (_)
        for (const $ of _.cards) ye($.id);
      if (m.value = m.value.filter(($) => $.id !== b), N.value === b) {
        N.value = m.value[0].id, localStorage.setItem("ha_active_page", N.value);
        for (const $ of O.value)
          ($.type === "card" || $.type === void 0) && Y($.id, $.entityId);
      }
      v();
    }
    let B = null;
    function d(b) {
      B = setTimeout(() => {
        B = null, ce(b);
      }, 600);
    }
    function x() {
      B && (clearTimeout(B), B = null);
    }
    const K = /* @__PURE__ */ U(null), G = /* @__PURE__ */ U(""), se = /* @__PURE__ */ U(null);
    function ce(b) {
      const _ = m.value.find(($) => $.id === b);
      _ && (K.value = b, G.value = _.name, dn(() => {
        se.value && se.value.length && (se.value[0].focus(), se.value[0].select());
      }));
    }
    function he() {
      if (!K.value) return;
      const b = m.value.find((_) => _.id === K.value);
      b && G.value.trim() && (b.name = G.value.trim(), m.value = [...m.value], v()), K.value = null;
    }
    function z() {
      K.value = null;
    }
    function Y(b, _) {
      if (u.has(b)) return;
      const $ = Uu(_);
      u.set(b, $), c[b] = { state: null, loading: !0, error: null }, mt($.state, (le) => {
        c[b] && (c[b].state = le);
      }), mt($.loading, (le) => {
        c[b] && (c[b].loading = le);
      }), mt($.error, (le) => {
        c[b] && (c[b].error = le);
      }), o.value && $.start(o.value);
    }
    function ye(b) {
      const _ = u.get(b);
      _ && (_.stop(), u.delete(b)), delete c[b];
    }
    const Le = y();
    m.value = Le;
    const Fe = localStorage.getItem("ha_active_page");
    N.value = ((Pe = Le.find((b) => b.id === Fe)) == null ? void 0 : Pe.id) ?? Le[0].id;
    for (const b of O.value)
      (b.type === "card" || b.type === void 0) && Y(b.id, b.entityId);
    mt(o, (b, _) => {
      if (b && !_)
        for (const [, $] of u) $.start(b);
    }), Fu((b) => {
      var de, We;
      if ((de = b == null ? void 0 : b.pages) != null && de.length) {
        for (const xe of O.value) ye(xe.id);
        m.value = b.pages.map((xe) => ({
          id: xe.id,
          name: xe.name || "Seite",
          cards: (xe.cards || []).map((st) => ({
            id: st.id,
            type: st.type ?? "card",
            entityId: st.entityId ?? "",
            label: st.label,
            cols: st.cols ?? 2,
            rows: st.rows ?? 2,
            gridCol: st.gridCol,
            gridRow: st.gridRow
          }))
        }));
        const kt = b.activePage ?? localStorage.getItem("ha_active_page");
        N.value = ((We = m.value.find((xe) => xe.id === kt)) == null ? void 0 : We.id) ?? m.value[0].id, localStorage.setItem("ha_pages", JSON.stringify(m.value)), localStorage.setItem("ha_active_page", N.value);
        for (const xe of O.value)
          (xe.type === "card" || xe.type === void 0) && Y(xe.id, xe.entityId);
      }
      if (b != null && b.authKey && (r.value = b.authKey), b != null && b.groups && Object.keys(b.groups).length) {
        for (const [kt, xe] of Object.entries(b.groups))
          localStorage.setItem(`ha_group_${kt}`, JSON.stringify(xe));
        Bf();
      }
      if (b != null && b.cardSettings && Object.keys(b.cardSettings).length)
        for (const [kt, xe] of Object.entries(b.cardSettings))
          xe.title !== void 0 && localStorage.setItem(`ha_title_${kt}`, xe.title), xe.showTitle !== void 0 && localStorage.setItem(`ha_showtitle_${kt}`, String(xe.showTitle));
      const _ = lo(), $ = (b == null ? void 0 : b.groups) && Object.keys(b.groups).length > 0, le = _.groups && Object.keys(_.groups).length > 0, ie = (b == null ? void 0 : b.pages) && b.pages.length > 0, Se = m.value.length > 0;
      console.log("[HomeBoard] onUserDataReady sync check:", { haHasGroups: $, localHasGroups: le, haHasPages: ie, localHasPages: Se, localGroupKeys: _.groups ? Object.keys(_.groups) : [] }), (!$ && le || !ie && Se) && (console.log("[HomeBoard] Pushing local settings to HA (HA missing data)"), wn(S()));
    });
    function Qt() {
      const b = h(), _ = "sensor.wohnzimmer_soll_temperatur", $ = C.value;
      $ && ($.cards = [...$.cards, { id: b, type: "card", entityId: _, cols: 2, rows: 2 }], m.value = [...m.value], Y(b, _), v());
    }
    function pn() {
      const b = h(), _ = C.value;
      _ && (_.cards = [..._.cards, { id: b, type: "heading", entityId: "", label: "Überschrift", cols: 4, rows: 1 }], m.value = [...m.value], v());
    }
    function Zt() {
      const b = h(), _ = C.value;
      if (!_) return;
      const $ = `<h3>Mein Template</h3>
{{ states('sensor.wohnzimmer_soll_temperatur') }} °C`;
      _.cards = [..._.cards, { id: b, type: "template", entityId: "", template: $, cols: 2, rows: 2 }], m.value = [...m.value], v();
    }
    function Qe(b, _) {
      const $ = C.value;
      if (!$) return;
      const le = $.cards.find((ie) => ie.id === b);
      le && (le.template = _, m.value = [...m.value], v());
    }
    function nt(b, _) {
      const $ = C.value;
      if (!$) return;
      const le = $.cards.find((ie) => ie.id === b);
      le && (le.label = _, m.value = [...m.value], v());
    }
    function Re(b) {
      ye(b);
      const _ = C.value;
      _ && (_.cards = _.cards.filter(($) => $.id !== b), m.value = [...m.value], v());
    }
    function wt(b) {
      n.value = b;
      for (const [, _] of u) _.start(b);
    }
    function $t(b, _) {
      const $ = C.value;
      if (!$) return;
      const le = $.cards.find((Se) => Se.id === b);
      if (!le) return;
      le.entityId = _;
      const ie = u.get(b);
      ie && o.value && ie.start(o.value, _), m.value = [...m.value], v();
    }
    function en(b, _, $) {
      const le = C.value;
      if (!le) return;
      const ie = le.cards.find((Se) => Se.id === b);
      ie && (ie.cols = _, ie.rows = $, m.value = [...m.value], v());
    }
    function p() {
      for (const [b] of u) ye(b);
      m.value = [{ id: h(), name: "Home", cards: [] }], N.value = m.value[0].id, Vu(), localStorage.removeItem("ha_token"), localStorage.removeItem("ha_pages"), localStorage.removeItem("ha_active_page"), localStorage.removeItem("ha_auth_key"), Vs(null), r.value = "", n.value = null;
    }
    const g = /* @__PURE__ */ U(null), w = /* @__PURE__ */ U(null), E = /* @__PURE__ */ U(null), M = /* @__PURE__ */ U(1), I = /* @__PURE__ */ U(1), V = /* @__PURE__ */ U(2), j = /* @__PURE__ */ U(2);
    function F(b) {
      const _ = b.gridCol ? `${b.gridCol} / span ${b.cols}` : `span ${b.cols}`, $ = b.gridRow ? `${b.gridRow} / span ${b.rows}` : `span ${b.rows}`;
      return { gridColumn: _, gridRow: $ };
    }
    const R = Q(() => ({
      gridColumn: `${M.value} / span ${V.value}`,
      gridRow: `${I.value} / span ${j.value}`
    }));
    function q(b, _) {
      const $ = b.target;
      if ($.closest(".edit-ctrl-btn") || $.closest(".resize-handle") || $.closest("button") || $.closest("input")) return;
      const le = $.closest("[data-card-id]") ?? $, ie = le.getBoundingClientRect(), Se = "touches" in b ? b.touches[0].clientX : b.clientX, de = "touches" in b ? b.touches[0].clientY : b.clientY, We = Se - ie.left, kt = de - ie.top;
      let xe = !1;
      const st = O.value.find((Nt) => Nt.id === _);
      if (!st) return;
      const gn = st;
      function Vn(Nt) {
        const Ms = "touches" in Nt ? Nt.touches[0].clientX : Nt.clientX, Es = "touches" in Nt ? Nt.touches[0].clientY : Nt.clientY;
        if (!xe) {
          const Un = Ms - Se, As = Es - de;
          if (Math.abs(Un) < 5 && Math.abs(As) < 5) return;
          xe = !0, w.value = _, V.value = gn.cols, j.value = gn.rows;
          const Ue = le.cloneNode(!0);
          Ue.classList.add("drag-ghost"), Ue.style.position = "fixed", Ue.style.width = ie.width + "px", Ue.style.height = ie.height + "px", Ue.style.zIndex = "1000", Ue.style.pointerEvents = "none", Ue.style.opacity = "0.85", Ue.style.transform = "scale(1.04)", Ue.style.transition = "none", Ue.style.boxShadow = "12px 12px 24px #c8cdd5, -12px -12px 24px #ffffff", document.body.appendChild(Ue), E.value = Ue, le.style.opacity = "0.25", document.body.style.userSelect = "none";
        }
        if (E.value && (E.value.style.left = Ms - We + "px", E.value.style.top = Es - kt + "px"), g.value) {
          const Un = g.value.getBoundingClientRect(), As = Ms - We - Un.left - ih + ie.width / 2, Ue = Es - kt - Un.top - lh + ie.height / 2, ji = Math.max(1, Math.round(As / yl)), Ki = Math.max(1, Math.round(Ue / yl));
          M.value = ji, I.value = Ki;
        }
      }
      function Wn() {
        document.removeEventListener("mousemove", Vn), document.removeEventListener("mouseup", Wn), document.removeEventListener("touchmove", Vn), document.removeEventListener("touchend", Wn), document.body.style.userSelect = "", xe && (E.value && (E.value.remove(), E.value = null), le.style.opacity = "", gn && (gn.gridCol = M.value, gn.gridRow = I.value, m.value = [...m.value], v()), w.value = null);
      }
      document.addEventListener("mousemove", Vn), document.addEventListener("mouseup", Wn), document.addEventListener("touchmove", Vn, { passive: !1 }), document.addEventListener("touchend", Wn);
    }
    function W() {
      const b = r.value.trim();
      Vs(b || null), a.value = !1, wn(S());
    }
    const J = /* @__PURE__ */ U(!1);
    function ee(b) {
      J.value && (J.value = !1);
    }
    On(() => document.addEventListener("click", ee)), hn(() => document.removeEventListener("click", ee));
    const fe = /* @__PURE__ */ U(""), be = /* @__PURE__ */ U("");
    function pe() {
      const b = /* @__PURE__ */ new Date();
      fe.value = b.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }), be.value = b.toLocaleDateString("de-DE", { weekday: "long", day: "numeric", month: "long" });
    }
    let Oe;
    return On(() => {
      pe(), Oe = setInterval(pe, 1e3);
    }), hn(() => {
      for (const [b] of u) ye(b);
      clearInterval(Oe);
    }), (b, _) => (k(), A("div", null, [
      !o.value && !e.panelMode ? (k(), Me(Lu, {
        key: 0,
        onToken: wt
      })) : (k(), A("div", Vd, [
        f("header", Wd, [
          f("div", Ud, [
            Ee(Jf, { token: i.value }, null, 8, ["token"]),
            Ee(dd, { token: i.value }, null, 8, ["token"]),
            Ee(Id, { token: i.value }, null, 8, ["token"]),
            Ee(Kd, { token: i.value }, null, 8, ["token"])
          ]),
          f("div", zd, [
            f("div", Jd, [
              f("span", Gd, X(fe.value), 1),
              f("span", Yd, X(be.value), 1)
            ])
          ])
        ]),
        f("main", {
          ref_key: "gridRef",
          ref: g,
          class: "dashboard-main"
        }, [
          (k(!0), A(ue, null, Je(O.value, ($) => {
            var le, ie, Se;
            return k(), A(ue, {
              key: $.id
            }, [
              $.type === "heading" ? (k(), Me(If, {
                key: 0,
                "data-card-id": $.id,
                style: At(F($)),
                class: ke({ "card-dragging": w.value === $.id }),
                label: $.label || "Überschrift",
                cols: $.cols,
                rows: $.rows,
                onUpdateLabel: (de) => nt($.id, de),
                onRemove: (de) => Re($.id),
                onResize: (de, We) => en($.id, de, We),
                onMousedown: (de) => q(de, $.id),
                onTouchstart: (de) => q(de, $.id)
              }, null, 8, ["data-card-id", "style", "class", "label", "cols", "rows", "onUpdateLabel", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : $.type === "template" ? (k(), Me(Ff, {
                key: 1,
                "data-card-id": $.id,
                style: At(F($)),
                class: ke({ "card-dragging": w.value === $.id }),
                template: $.template || "",
                cols: $.cols,
                rows: $.rows,
                onUpdateTemplate: (de) => Qe($.id, de),
                onRemove: (de) => Re($.id),
                onResize: (de, We) => en($.id, de, We),
                onMousedown: (de) => q(de, $.id),
                onTouchstart: (de) => q(de, $.id)
              }, null, 8, ["data-card-id", "style", "class", "template", "cols", "rows", "onUpdateTemplate", "onRemove", "onResize", "onMousedown", "onTouchstart"])) : (k(), Me(Sf, {
                key: 2,
                "data-card-id": $.id,
                style: At(F($)),
                class: ke({ "card-dragging": w.value === $.id }),
                "entity-id": $.entityId,
                token: i.value,
                cols: $.cols,
                rows: $.rows,
                state: ((le = c[$.id]) == null ? void 0 : le.state) ?? null,
                loading: ((ie = c[$.id]) == null ? void 0 : ie.loading) ?? !0,
                error: ((Se = c[$.id]) == null ? void 0 : Se.error) ?? null,
                onChangeEntity: (de) => $t($.id, de),
                onRemove: (de) => Re($.id),
                onResize: (de, We) => en($.id, de, We),
                onMousedown: (de) => q(de, $.id),
                onTouchstart: (de) => q(de, $.id)
              }, null, 8, ["data-card-id", "style", "class", "entity-id", "token", "cols", "rows", "state", "loading", "error", "onChangeEntity", "onRemove", "onResize", "onMousedown", "onTouchstart"]))
            ], 64);
          }), 128)),
          w.value ? (k(), A("div", {
            key: 0,
            class: "drop-placeholder",
            style: At(R.value)
          }, null, 4)) : re("", !0)
        ], 512),
        f("nav", Xd, [
          f("div", qd, [
            (k(!0), A(ue, null, Je(m.value, ($, le) => (k(), A("button", {
              key: $.id,
              class: ke(["page-tab", { active: N.value === $.id }]),
              onClick: (ie) => T($.id),
              onDblclick: (ie) => ce($.id),
              onTouchstartPassive: (ie) => d($.id),
              onTouchend: x,
              onTouchmove: x
            }, [
              K.value === $.id ? at((k(), A("input", {
                key: 0,
                ref_for: !0,
                ref_key: "renameInputRef",
                ref: se,
                "onUpdate:modelValue": _[0] || (_[0] = (ie) => G.value = ie),
                class: "page-tab-input",
                onBlur: he,
                onKeydown: [
                  Te(he, ["enter"]),
                  Te(z, ["escape"])
                ],
                onClick: _[1] || (_[1] = te(() => {
                }, ["stop"]))
              }, null, 544)), [
                [ut, G.value]
              ]) : (k(), A("span", Zd, X($.name), 1))
            ], 42, Qd))), 128))
          ])
        ]),
        (k(), Me(_t, { to: "body" }, [
          H.value ? (k(), A("div", {
            key: 0,
            class: "ha-modal-overlay",
            onClick: _[5] || (_[5] = te(($) => H.value = null, ["self"]))
          }, [
            f("div", {
              class: "ha-modal-box page-delete-modal",
              onClick: _[4] || (_[4] = te(() => {
              }, ["stop"]))
            }, [
              f("div", eh, [
                _[20] || (_[20] = f("h3", { class: "ha-modal-title" }, "Seite löschen", -1)),
                f("button", {
                  class: "ha-modal-close",
                  onClick: _[2] || (_[2] = ($) => H.value = null)
                }, "✕")
              ]),
              f("p", th, " „" + X(D.value) + '" mit ' + X(ne.value) + " Karte" + X(ne.value !== 1 ? "n" : "") + " wirklich löschen? ", 1),
              f("div", nh, [
                f("button", {
                  class: "page-delete-cancel",
                  onClick: _[3] || (_[3] = ($) => H.value = null)
                }, "Abbrechen"),
                f("button", {
                  class: "page-delete-confirm",
                  onClick: P
                }, "Löschen")
              ])
            ])
          ])) : re("", !0)
        ])),
        f("div", sh, [
          f("button", {
            class: "burger-btn",
            onClick: _[6] || (_[6] = te(($) => J.value = !J.value, ["stop"]))
          }, [..._[21] || (_[21] = [
            f("span", { class: "burger-line" }, null, -1),
            f("span", { class: "burger-line" }, null, -1),
            f("span", { class: "burger-line" }, null, -1)
          ])]),
          Ee(Ya, { name: "burger-pop" }, {
            default: Yl(() => [
              J.value ? (k(), A("div", {
                key: 0,
                class: "burger-menu",
                onClick: _[19] || (_[19] = te(() => {
                }, ["stop"]))
              }, [
                f("button", {
                  class: "burger-item",
                  onClick: _[7] || (_[7] = ($) => {
                    Qt(), J.value = !1;
                  })
                }, [..._[22] || (_[22] = [
                  f("span", { class: "burger-item-icon" }, "+", -1),
                  pt(" Karte hinzufügen ", -1)
                ])]),
                f("button", {
                  class: "burger-item",
                  onClick: _[8] || (_[8] = ($) => {
                    pn(), J.value = !1;
                  })
                }, [..._[23] || (_[23] = [
                  f("span", { class: "burger-item-icon" }, "H", -1),
                  pt(" Überschrift hinzufügen ", -1)
                ])]),
                f("button", {
                  class: "burger-item",
                  onClick: _[9] || (_[9] = ($) => {
                    Zt(), J.value = !1;
                  })
                }, [..._[24] || (_[24] = [
                  f("span", { class: "burger-item-icon" }, "{}", -1),
                  pt(" Template Card ", -1)
                ])]),
                f("button", {
                  class: "burger-item",
                  onClick: _[10] || (_[10] = ($) => {
                    L(), J.value = !1;
                  })
                }, [..._[25] || (_[25] = [
                  f("span", { class: "burger-item-icon" }, "+", -1),
                  pt(" Neue Seite ", -1)
                ])]),
                m.value.length > 1 ? (k(), A("button", {
                  key: 0,
                  class: "burger-item burger-item-danger",
                  onClick: _[11] || (_[11] = ($) => {
                    ae(N.value), J.value = !1;
                  })
                }, [..._[26] || (_[26] = [
                  f("span", { class: "burger-item-icon" }, "✕", -1),
                  pt(" Seite löschen ", -1)
                ])])) : re("", !0),
                _[29] || (_[29] = f("div", { class: "burger-divider" }, null, -1)),
                f("button", {
                  class: "burger-item burger-item-muted",
                  onClick: _[12] || (_[12] = ($) => a.value = !a.value)
                }, [
                  _[27] || (_[27] = f("span", { class: "burger-item-icon" }, "🔑", -1)),
                  pt(" Auth Key " + X(Ne(l) ? "✓" : ""), 1)
                ]),
                a.value ? (k(), A("div", {
                  key: 1,
                  class: "burger-auth-key",
                  onClick: _[17] || (_[17] = te(() => {
                  }, ["stop"]))
                }, [
                  at(f("input", {
                    "onUpdate:modelValue": _[13] || (_[13] = ($) => r.value = $),
                    class: "burger-auth-input",
                    type: "password",
                    placeholder: "Long-Lived Access Token",
                    onKeydown: _[14] || (_[14] = Te(($) => W(), ["enter"]))
                  }, null, 544), [
                    [ut, r.value]
                  ]),
                  f("div", oh, [
                    f("button", {
                      class: "burger-auth-save",
                      onClick: _[15] || (_[15] = ($) => W())
                    }, "Speichern"),
                    Ne(l) ? (k(), A("button", {
                      key: 0,
                      class: "burger-auth-clear",
                      onClick: _[16] || (_[16] = ($) => {
                        r.value = "", Ne(Vs)(null);
                      })
                    }, "Löschen")) : re("", !0)
                  ])
                ])) : re("", !0),
                e.panelMode ? re("", !0) : (k(), A(ue, { key: 2 }, [
                  _[28] || (_[28] = f("div", { class: "burger-divider" }, null, -1)),
                  f("button", {
                    class: "burger-item burger-item-muted",
                    onClick: _[18] || (_[18] = ($) => {
                      p(), J.value = !1;
                    })
                  }, " Abmelden ")
                ], 64))
              ])) : re("", !0)
            ]),
            _: 1
          })
        ])
      ]))
    ]));
  }
}), ah = /* @__PURE__ */ qe(rh, [["__scopeId", "data-v-3052c30b"]]);
class uh extends HTMLElement {
  constructor() {
    super(...arguments);
    To(this, "_app", null);
  }
  set hass(n) {
    var o, l;
    const s = ((l = (o = n == null ? void 0 : n.auth) == null ? void 0 : o.data) == null ? void 0 : l.access_token) ?? null;
    if (s && Ou(s), !this._app && s) {
      Oi(!0);
      const i = this.attachShadow({ mode: "open" });
      document.head.querySelectorAll("style").forEach((a) => {
        if (a.textContent && a.textContent.includes(".dashboard")) {
          const c = document.createElement("style");
          c.textContent = a.textContent, i.appendChild(c);
        }
      });
      const r = document.createElement("div");
      r.style.height = "100%", i.appendChild(r), this._app = $u(ah, { panelMode: !0 }), this._app.mount(r);
    }
  }
}
customElements.define("homeboard-panel", uh);
