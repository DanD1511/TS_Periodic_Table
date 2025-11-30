import { usePeriodicTable } from "./presentation/hooks/usePeriodicTable";
import { ElementCard } from "./presentation/components/ElementCard";
import { CategorySidebar } from "./presentation/components/CategoryLegend";

function App() {
  const { 
      elements, loading, 
      selectedGroup, selectedPeriod, selectedCategory, searchAtomicNumber,
      isElementDimmed, 
      toggleGroup, togglePeriod, toggleCategory, searchByNumber, resetFilters 
  } = usePeriodicTable();

  if (loading) return <div style={{color: 'white', padding: 50}}>Cargando...</div>;

  return (
    <div style={{ 
        background: 'radial-gradient(circle at 70% 50%, #1a1b26 0%, #050505 100%)',
        minHeight: '100vh', 
        padding: '20px',
        color: 'white',
        fontFamily: "'Segoe UI', Roboto, sans-serif",
        display: 'flex', 
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '100px'
    }}>
      
      <div style={{ marginTop: '20px', width: '220px', flexShrink: 0 }}>
          <h1 style={{ margin: '0 0 5px 0', fontSize: '24px', letterSpacing: '-1px' }}>
              PERIODIC<span style={{color: '#33ffcc'}}>.TS</span>
          </h1>
          <p style={{ margin: '0 0 30px 0', color: '#555', fontSize: '10px' }}>Clean Architecture Project</p>

          <div style={{ marginBottom: '30px' }}>
               <input 
                type="number" 
                value={searchAtomicNumber}
                onChange={(e) => searchByNumber(e.target.value)}
                placeholder="Search by Nº..."
                style={{
                    background: '#111', border: '1px solid #333', color: 'white',
                    padding: '10px', borderRadius: '4px', width: '100%',
                    fontSize: '14px', outline: 'none'
                }}
              />
          </div>

          <CategorySidebar 
            selectedCategory={selectedCategory} 
            onSelectCategory={toggleCategory} 
          />

          <button 
            onClick={resetFilters}
            style={{
                marginTop: '20px', width: '100%', padding: '10px',
                background: '#333', color: 'white', border: 'none',
                cursor: 'pointer', fontSize: '11px', fontWeight: 'bold'
            }}
          >
              RESET FILTERS
          </button>
      </div>


      <div style={{
          display: 'grid',
          gridTemplateColumns: '20px repeat(18, 48px)', 
          gridTemplateRows: '20px repeat(10, 54px)',
          gap: '20px',
          padding: '20px',
          border: '1px solid #222',
          borderRadius: '12px',
          background: 'rgba(0,0,0,0.3)',
          backdropFilter: 'blur(5px)',
      }}>
          
          {Array.from({ length: 18 }, (_, i) => i + 1).map(g => (
              <div 
                key={`group-${g}`}
                onClick={() => toggleGroup(g)}
                style={{
                    gridColumn: g + 1, gridRow: 1,
                    display: 'flex', alignItems: 'end', justifyContent: 'center',
                    cursor: 'pointer', fontSize: '10px', color: selectedGroup === g ? '#33ffcc' : '#444',
                    paddingBottom: '5px'
                }}
              >
                  {g}
              </div>
          ))}

          {Array.from({ length: 7 }, (_, i) => i + 1).map(p => (
              <div 
                key={`period-${p}`}
                onClick={() => togglePeriod(p)}
                style={{
                    gridColumn: 1, gridRow: p + 1,
                    display: 'flex', alignItems: 'center', justifyContent: 'end',
                    cursor: 'pointer', fontSize: '10px', color: selectedPeriod === p ? '#33ffcc' : '#444',
                    paddingRight: '5px'
                }}
              >
                  {p}
              </div>
          ))}

          {/* ELEMENTOS */}
          {elements.map(element => (
              <ElementCard 
                key={element.atomicNumber} 
                element={element} 
                isDimmed={isElementDimmed(element)}
              />
          ))}
      </div>

    </div>
  );
}

export default App;