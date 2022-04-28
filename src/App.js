import LocationFinder from "./components/LocationFinder";
import LocationsContext from "./store/locations-context";
const DUMMY_LOCATIONS = [
  { id: "1", name: "Munich" },
  { id: "2", name: "Zurich" },
  { id: "3", name: "Barcelona" },
];
function App() {
  const locationsContext = {
    locations: DUMMY_LOCATIONS,
  };
  return (
    <LocationsContext.Provider value={locationsContext}>
      <LocationFinder />
    </LocationsContext.Provider>
  );
}
export default App;
