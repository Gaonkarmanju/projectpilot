module.exports = {
  domain: 'AR/VR',
  ideas: `
# Education and training
AR Anatomy Learning App | I | 7 | Point a phone at a marker to see a 3D human body and explore organs layer by layer. | Unity, AR Foundation, C# | 3D organ models; Marker tracking; Layer toggles; Quiz mode
AR Solar System Explorer | B | 5 | Places a scaled solar system in the room with facts about each planet. | Unity, AR Foundation | Plane detection; Planet models; Orbit animation; Info cards
VR Chemistry Lab | A | 9 | A virtual lab where students perform experiments safely with realistic reactions. | Unity, XR Interaction Toolkit | Lab equipment; Reaction logic; Safety guidance; Experiment log
AR Circuit Builder | I | 7 | Build virtual electronic circuits on a table and see current flow. | Unity, AR Foundation | Component placement; Circuit simulation; Current visualisation; Lessons
VR Historical Monument Tour | I | 8 | A guided virtual tour of a historical monument with audio narration. | Unity, XR Interaction Toolkit, Blender | 3D monument model; Teleport navigation; Audio guide; Information points
AR Textbook Companion | I | 6 | Scan textbook diagrams to see them come alive as 3D animations. | Unity, Vuforia | Image targets; 3D animations; Narration; Multiple chapters
VR Fire Safety Training | I | 8 | Trainees practise using fire extinguishers and evacuation in VR. | Unity, XR Interaction Toolkit | Fire simulation; Extinguisher types; Evacuation route; Scoring
VR Public Speaking Practice | I | 7 | Practise presentations in front of a virtual audience that reacts to your delivery. | Unity, XR Interaction Toolkit, Speech recognition | Virtual audience; Slide display; Pace and filler word feedback; Session report
AR Geometry Learning Tool | B | 5 | Visualise 3D shapes, cross-sections and volumes in augmented reality. | Unity, AR Foundation | Shape library; Cross-section slicing; Measurements; Exercises
VR Driving Test Practice | A | 9 | Practise driving in a virtual city with traffic rules and a test mode. | Unity, XR Interaction Toolkit | City environment; Car controls; Traffic AI; Test scoring
AR Sign Language Tutor | A | 8 | An AR avatar demonstrates signs and checks the learner's hand shapes. | Unity, MediaPipe, AR Foundation | Avatar animations; Hand tracking; Feedback; Lessons
VR Surgery Procedure Walkthrough | A | 10 | A step-by-step VR walkthrough of a basic surgical procedure for students. | Unity, XR Interaction Toolkit | Procedure steps; Tool interactions; Mistake feedback; Assessment
AR Machine Maintenance Guide | I | 7 | Overlays step-by-step maintenance instructions on a real machine. | Unity, Vuforia | Model targets; Step overlays; Progress checklist; Voice instructions
VR Lab for Physics Experiments | I | 8 | Perform pendulum, projectile and optics experiments in VR. | Unity, XR Interaction Toolkit | Experiment setups; Measurements; Graphs; Worksheets

# Shopping, design and navigation
AR Furniture Placement App | I | 6 | Place true-to-scale furniture in your room before buying. | Unity, AR Foundation | Plane detection; Furniture catalogue; Scale and rotate; Screenshots
AR Virtual Try-on for Glasses | I | 7 | Try on glasses using face tracking on the front camera. | Unity, AR Foundation, ARKit/ARCore face tracking | Face tracking; Frame models; Size fitting; Share photo
AR Indoor Navigation for Campus | A | 9 | Arrows on the camera view guide users to rooms inside buildings. | Unity, AR Foundation, Cloud anchors | Indoor mapping; Anchors; Pathfinding; Arrow overlay
AR Measuring Tape | B | 4 | Measure distances and areas using the phone camera. | Kotlin, ARCore | Point placement; Distance calculation; Area mode; Export
AR Interior Wall Colour Preview | I | 6 | See how different paint colours look on your walls in real time. | Unity, AR Foundation, OpenCV | Wall segmentation; Colour overlay; Lighting adjustment; Palette
AR Restaurant Menu | B | 5 | View 3D models of dishes on the table before ordering. | Unity, AR Foundation, Blender | 3D dish models; QR menu; Placement; Nutrition info
VR Real Estate Walkthrough | I | 7 | Walk through an apartment in VR before it is built. | Unity, XR Interaction Toolkit, Blender | 3D apartment model; Teleport movement; Material options; Measurements
AR Car Showroom | I | 7 | Place a full-size car in your driveway and explore its interior. | Unity, AR Foundation | Car model; Colour options; Interior view; Feature hotspots
AR Plant Care Assistant | I | 6 | Identify plants with the camera and show care tips as AR labels. | Unity, AR Foundation, Plant ID API | Plant recognition; AR labels; Watering reminders; Care guides
AR Tourist Guide | I | 7 | Point at landmarks to see their names, history and reviews. | Unity, AR Foundation, GPS | Location anchors; Landmark info; Photos and reviews; Offline mode
AR Book Information Overlay | B | 5 | Point at a book cover to see ratings and summaries. | Unity, Vuforia, Google Books API | Cover recognition; Rating overlay; Summary; Save to list

# Games and social
AR Treasure Hunt Game | I | 6 | Hide virtual treasures around campus for friends to find with clues. | Unity, AR Foundation, Firebase | Treasure placement; Clues; Location check; Leaderboard
VR Escape Room | I | 8 | Solve puzzles with hand interactions to escape a VR room. | Unity, XR Interaction Toolkit | Puzzles; Hand interactions; Hints; Timer
VR Rhythm Game | I | 7 | Slice blocks in time with music in VR. | Unity, XR Interaction Toolkit | Beat maps; Slicing mechanics; Scoring; Song selection
AR Board Game | I | 7 | A board game that appears on a real table and supports two players. | Unity, AR Foundation, Netcode | Board placement; Game rules; Shared session; Turns
VR Meditation Environment | B | 5 | Calming VR environments with guided breathing. | Unity, XR Interaction Toolkit | Environments; Breathing guide; Ambient audio; Session timer
Social VR Classroom | A | 10 | Students meet as avatars in a VR classroom with voice chat and a shared whiteboard. | Unity, Photon, XR Interaction Toolkit | Avatars; Voice chat; Shared whiteboard; Room management
AR Pet Simulator | I | 6 | A virtual pet that lives in your room and reacts to you. | Unity, AR Foundation | Pet behaviour; Feeding and play; Growth; Persistence
VR Archery Game | B | 5 | Archery with realistic bow physics and targets. | Unity, XR Interaction Toolkit | Bow mechanics; Targets; Scoring; Difficulty levels
AR Cricket Practice Game | I | 7 | Bat against virtual deliveries in augmented reality. | Unity, AR Foundation | Ball physics; Swing detection; Scoring; Bowling variations

# Health, accessibility and tools
VR Phobia Exposure Therapy Prototype | A | 9 | Gradual exposure scenes for fear of heights or public spaces, designed with clinician input. | Unity, XR Interaction Toolkit | Graded scenarios; Comfort controls; Session logging; Clinician settings
VR Physiotherapy Exercises | I | 8 | Gamified rehabilitation exercises that track range of motion. | Unity, XR Interaction Toolkit | Exercise games; Motion tracking; Progress reports; Therapist view
AR Navigation Aid for Low-vision Users | A | 9 | Highlights obstacles and paths with high-contrast overlays and audio. | Unity, AR Foundation, Depth API | Depth sensing; Obstacle highlights; Audio cues; Settings
WebXR Product Viewer | I | 5 | View 3D product models in AR directly from a browser without an app. | Three.js, WebXR, model-viewer | 3D models; AR mode; Annotations; Embedding
AR Business Card | B | 4 | Point at a business card to see a video intro and contact buttons. | Unity, Vuforia | Image target; Video overlay; Contact buttons; Analytics
Photogrammetry to AR Pipeline | A | 8 | Scan real objects with a phone and display them in AR. | Meshroom, Blender, Unity | Photo capture; Mesh reconstruction; Optimisation; AR display
VR Data Visualisation | A | 8 | Explore 3D data visualisations like scatter plots and graphs in VR. | Unity, XR Interaction Toolkit | Data import; 3D charts; Interaction and filtering; Annotations
Gesture-controlled AR Interface | A | 8 | Control AR content with hand gestures instead of touch. | Unity, MediaPipe, AR Foundation | Hand tracking; Gesture recognition; AR interactions; Usability test
AR Remote Assistance | A | 9 | An expert sees a technician's camera view and draws annotations that stay anchored in AR. | Unity, AR Foundation, WebRTC | Video streaming; Remote annotations; Anchoring; Session recording
VR Museum Builder | I | 7 | Teachers build a virtual museum by uploading images and descriptions. | Unity, WebXR | Room templates; Image upload; Labels; Share link
AR Lab Safety Signs | B | 4 | Scan lab equipment to see safety instructions and hazard information. | Unity, Vuforia | Image targets; Hazard info; Video demos; Quiz
`,
};
