import "bootstrap/dist/css/bootstrap.min.css";
import NotesList from "./components/NotesList";
import notes from "./notes.json";
import { Note } from "./schemas";



function App() {

  const notesList: Note[] = notes.notes;

  return (
    <div className="container p-3">

      <NotesList  items={notesList} heading="Weekly Notes" />
    </div>
  );
}

export default App;
