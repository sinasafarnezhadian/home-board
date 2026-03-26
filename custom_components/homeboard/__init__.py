"""HomeBoard custom panel for Home Assistant."""
import hashlib
from pathlib import Path
from homeassistant.components.frontend import async_register_built_in_panel
from homeassistant.components.http import StaticPathConfig

DOMAIN = "homeboard"


def _file_hash(path: str) -> str:
    """Return short hash of a file for cache busting."""
    try:
        data = Path(path).read_bytes()
        return hashlib.md5(data).hexdigest()[:8]
    except Exception:
        return "0"


async def async_setup(hass, config):
    """Set up the HomeBoard panel."""
    js_path = str(Path(__file__).parent / "frontend" / "homeboard-panel.js")
    version_hash = _file_hash(js_path)

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
                "module_url": f"/homeboard/frontend/homeboard-panel.js?v={version_hash}",
                "embed_iframe": False,
            }
        },
    )
    return True
