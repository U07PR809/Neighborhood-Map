export function createScript() {
  const KEY = "AIzaSyDnZHCNVuYH8lZSMZtuHzJ4677eUi6AE8w";

  const mapScript = document.createElement("script");
  mapScript.src = `https://maps.google.com/maps/api/js?key=${KEY}`;
  mapScript.async = true;
  mapScript.defer = true;
  mapScript.onerror = () => { console.log( "Error loading the script! Please refresh the page." ) };

  return mapScript;
}

export function initMap() {
  const options = {
      center: { lat: 12.9716, lng: 77.5946 },
      zoom: 18,
      scrollwheel: true
    },
    map = new window.google.maps.Map(document.querySelector("#map"), options);

  window.map = map;
}

export function renderMap() {
  if (!window.google) {
    const mapScript = createScript();
    document.body.appendChild(mapScript);

    mapScript.addEventListener("load", event => initMap());
  } else initMap();
}

