import { usePeriodicTable } from "./presentation/hooks/usePeriodicTable";
import { ElementCard } from "./presentation/components/ElementCard";

function App() {
  const { elements, loading, error } = usePeriodicTable();

  if (loading) return <div style={{color: 'white', padding: 20}}>Cargando laboratorio... 🧪</div>;
  if (error) return <div style={{color: 'red', padding: 20}}>Error: {error}</div>;

  return (
    <div style={{ 
        backgroundColor: '#0f0f0f', 
        minHeight: '100vh', 
        padding: '30px',
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        fontFamily: "'Segoe UI', Roboto, sans-serif" 
    }}>
      <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(18, 64px)',
          gridTemplateRows: 'repeat(10, 70px)',
          gap: '8px',
          overflowX: 'auto',
          padding: '20px',
          backgroundImage: `
            linear-gradient(to right, #333 2px, transparent 2px),
            linear-gradient(to right, #333 2px, transparent 2px)
          `,
          backgroundSize: '20px 100%',
          backgroundPosition: '130px 450px, 130px 525px',
          backgroundRepeat: 'no-repeat'
      }}>
          {elements.map(element => (
              <ElementCard key={element.atomicNumber} element={element} />
          ))}
      </div>
    </div>
  );
}

export default App;