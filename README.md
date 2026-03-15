# HomeBoard

A custom Home Assistant dashboard panel with a neumorphic design. Install via HACS or manually.

## Features

- Drag-and-drop cards with grid snapping
- Multi-page layout with rename/delete
- Sensor, weather, light, and binary sensor cards
- Card resize via drag handle
- Security, lights, climate, and notification status pills
- Persistent layout via localStorage

## Installation

### HACS (recommended)

1. Open HACS in Home Assistant
2. Click the three dots menu (top right) → **Custom repositories**
3. Add `https://github.com/sinasafarnezhadian/home-board` with category **Integration**
4. Search for "HomeBoard" and click **Download**
5. Add to your `configuration.yaml`:
   ```yaml
   homeboard:
   ```
6. Restart Home Assistant
7. "HomeBoard" appears in the sidebar

### Manual installation

1. Copy the `custom_components/homeboard` folder to your Home Assistant `config/custom_components/` directory
2. Add to your `configuration.yaml`:
   ```yaml
   homeboard:
   ```
3. Restart Home Assistant

## Development

```bash
# Install dependencies
npm install

# Start dev server (standalone mode with manual token input)
npm run dev

# Build the HA panel (outputs to custom_components/homeboard/frontend/)
npm run build:panel
```

### Environment variables

Set `HA_URL` in a `.env` file to configure the dev proxy target:

```
HA_URL=http://homeassistant.local:8123
```

## Building from source

If you want to build the panel JS yourself instead of using the pre-built release:

```bash
npm install
npm run build:panel
```

This generates `custom_components/homeboard/frontend/homeboard-panel.js`.
