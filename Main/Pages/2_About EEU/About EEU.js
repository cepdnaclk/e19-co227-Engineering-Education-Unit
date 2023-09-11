import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="imge"><img alt="Uop" src="../uop.jpg"/></div>
       
    <p>The Engineering Education Unit was established in the Faculty of Engineering in 1985 primarily with the view to coordinate activities in the following areas: </p>
    <ul>
    <li>Staff development</li>
    <li>Curriculum development</li>
    <li>Provision of audio-visual facilities for educational purposes</li>
    <li>Freshmen orientation</li>
    </ul>
    <p> In 2015 the Faculty Board assigned the responsibility of doing the overall coordination of all General Elective subjects. The coordination of subjects are done by different Departments.The responsibility of EEU includes, facilitating the appointment of visiting lectures, liaison with the visiting lecturers and the subject coordinators of the Departments, checking and recommending the payments for lecturers.</p>
    <p> The management and development of the EEU is the responsibility of a committee consisting of the Dean, the EEU Director and members of the permanent academic staff elected by the Faculty Board.</p>
    <p> The EEU has a professional audio-visual studio equipped with a advanced non-liner video production system. Members of the teaching staff of the Faculty have utilized these facilities to produce educational videos for use in their teaching.</p>
    <p>Three seminar rooms and conference room equipped with large screen multimedia projection facility, digital white boards, overhead projectors, are also maintained by the EEU.</p>
    <p>Audio Visual Systems of the EOE Pereira Theater, Lecture Rooms and Sound Proof Studio of the Faculty are also functions under the authority of EEU.</p>
      </header>
    </div>
  );
}

export default App;


.App {
  text-align: center;
}

.App-logo {
  height: 40vmin;
  pointer-events: none;
}

@media (prefers-reduced-motion: no-preference) {
  .App-logo {
    animation: App-logo-spin infinite 20s linear;
  }
}

.App-header {
  background-color: #f1f5fd;
  min-height: 100vh;
  display: block;
  flex-direction: column;
  font-size: calc(10px + 2vmin);
  color: black;
}
.imge {
  height: 12rem;
  width: 50rem;
  border: 8px solid rgba(255,255,255,0.12);
}

.App-link {
  color: #61dafb;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}



*{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
