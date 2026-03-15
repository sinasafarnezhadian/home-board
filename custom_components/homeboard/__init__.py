"""HomeBoard custom panel for Home Assistant."""
from pathlib import Path
from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig

DOMAIN = "homeboard"


async def async_setup(hass, config):
    """Set up the HomeBoard panel."""
    await hass.http.async_register_static_paths([
        StaticPathConfig(
            "/homeboard/frontend",
            str(Path(__file__).parent / "frontend"),
            cache_headers=False,
        )
    ])
    async_register_built_in_panel(
        hass,
        component_name="custom",
        sidebar_title="HomeBoard",
        sidebar_icon="mdi:view-dashboard",
        frontend_url_path=DOMAIN,
        config={
            "_panel_custom": {
                "name": "homeboard-panel",
                "module_url": "/homeboard/frontend/homeboard-panel.js",
                "embed_iframe": False,
            }
        },
    )
    return True
