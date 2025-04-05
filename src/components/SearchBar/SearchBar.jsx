import { useState } from "react"
import { useSearchParams } from 'react-router-dom';


export function SearchBar() {
  const [fieldValue, setFieldValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const handleFieldValue = (value) => {
    if (!value) return;
    setFieldValue(value)
  }

  const handleSearch = () => {
    setSearchParams({ q: fieldValue });
  }

  const handleClean = () => {
    setFieldValue('')
  }

  return (
    <div className="input-group">
      <input type="text" className="form-control" placeholder="Buscar en Gaspi" aria-label="Buscar en Gaspi" aria-describedby="button-addon2" onChange={e => handleFieldValue(e.target.value)} value={fieldValue} />
        <button className="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSearch}>Buscar</button>
<button className="btn btn-outline-secondary" type="button" onClick={handleClean}>Limpiar</button>
    </div>

  )
}
