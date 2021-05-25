import { useState, useRef, useEffect } from "react";

import "./App.css";

function Dialog({ children }) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (dialogRef && dialogRef.current) {
      dialogRef.current.focus();
    }
  }, []);

  return (
    <div ref={dialogRef} tabIndex="-1" data-testid="dialog">
      {children}
    </div>
  );
}

function App() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setShowDialog(!showDialog)}>Without Portal</button>

      {showDialog && (
        <Dialog>
          <input type="text" />
        </Dialog>
      )}
    </div>
  );
}

export default App;
