module.exports = {
  domain: 'Computer Vision',
  ideas: `
# Recognition and attendance
Face Recognition Attendance System | I | 7 | Marks classroom attendance automatically by recognising student faces from a camera. | Python, OpenCV, face_recognition, Flask | Face enrolment; Live recognition; Attendance records; Spoof check
Mask and Helmet Detection | I | 6 | Detects people without helmets or masks from CCTV footage. | Python, YOLOv8, OpenCV | Dataset labelling; Object detection training; Video inference; Violation snapshots
Automatic Number Plate Recognition | A | 8 | Detects vehicle number plates and reads the characters for parking or toll systems. | Python, YOLOv8, EasyOCR, OpenCV | Plate detection; Character recognition; Indian plate formats; Entry log
Emotion Recognition from Facial Expressions | I | 6 | Classifies facial expressions into emotions from a webcam feed. | Python, TensorFlow, OpenCV | FER dataset training; Face detection; Real-time inference; Emotion timeline
Age and Gender Estimation | I | 5 | Estimates age range and gender from face images for demographic analytics. | Python, OpenCV DNN, Flask | Pretrained models; Face detection; Batch analysis; Privacy notice
Driver Drowsiness Detection | I | 6 | Detects eye closure and yawning to warn sleepy drivers. | Python, OpenCV, dlib | Facial landmarks; Eye aspect ratio; Yawn detection; Audio alarm
Sign Language Recognition | A | 9 | Recognises Indian Sign Language gestures from video and converts them to text. | Python, MediaPipe, TensorFlow | Hand landmark extraction; Gesture dataset; Sequence model; Live captioning
Hand Gesture Controlled Presentation | I | 5 | Control slides with hand gestures in front of a webcam. | Python, MediaPipe, OpenCV | Hand tracking; Gesture mapping; Slide control; Calibration
Handwritten Text Recognition | A | 9 | Converts handwritten notes into editable text using a CRNN model. | Python, PyTorch, IAM dataset | Line segmentation; CRNN with CTC loss; Evaluation; Web demo
Signature Verification System | I | 7 | Verifies whether a signature is genuine or forged using a Siamese network. | Python, TensorFlow | Signature dataset; Siamese network; Threshold tuning; Verification UI
Celebrity Look-alike Finder | B | 4 | Finds which celebrity a user's face most resembles using face embeddings. | Python, face_recognition, Streamlit | Embedding database; Similarity search; Upload UI; Top matches
Person Re-identification Across Cameras | A | 10 | Tracks the same person across multiple non-overlapping CCTV cameras. | Python, PyTorch, OpenCV | Detection; Appearance embeddings; Cross-camera matching; Evaluation

# Health and science
Pneumonia Detection from Chest X-rays | I | 7 | Classifies chest X-rays as normal or pneumonia and highlights affected regions. | Python, PyTorch, Grad-CAM | Transfer learning; Class imbalance handling; Grad-CAM heatmaps; Evaluation report
Skin Lesion Classification | A | 8 | Classifies skin lesion images to flag possible melanoma for further checking. | Python, TensorFlow, HAM10000 | Data augmentation; CNN training; Calibration; Disclaimer-aware demo
Diabetic Retinopathy Grading | A | 9 | Grades retina images for diabetic retinopathy severity. | Python, PyTorch, EfficientNet | Image preprocessing; Ordinal classification; Kappa evaluation; Web demo
Brain Tumour Segmentation from MRI | A | 10 | Segments tumour regions in MRI scans using a U-Net. | Python, PyTorch, U-Net | MRI preprocessing; U-Net training; Dice evaluation; 3D slice viewer
Blood Cell Counting from Microscope Images | I | 6 | Detects and counts red and white blood cells from microscope images. | Python, YOLOv8, OpenCV | Annotation; Detection model; Cell counting; Report export
Bone Fracture Detection in X-rays | A | 8 | Detects and localises fractures in X-ray images. | Python, YOLOv8 | Dataset preparation; Detection training; Localisation boxes; Evaluation
Dental X-ray Cavity Detection | A | 8 | Detects possible cavities in dental X-rays to assist dentists. | Python, PyTorch | Annotation; Detection model; Confidence display; Evaluation
Yoga Pose Correction | I | 6 | Detects yoga poses from a webcam and suggests corrections for alignment. | Python, MediaPipe, Streamlit | Pose estimation; Pose classification; Angle-based feedback; Session summary
Exercise Rep Counter | B | 5 | Counts push-ups and squats from a webcam using body keypoints. | Python, MediaPipe, OpenCV | Pose landmarks; Rep counting logic; Form warnings; Workout log
Wildlife Species Identification from Camera Traps | A | 8 | Identifies animal species in camera trap images for conservation studies. | Python, PyTorch, Megadetector | Empty image filtering; Species classification; Batch processing; Count reports

# Agriculture and environment
Weed Detection in Crop Fields | I | 7 | Detects weeds among crops in field images to enable targeted spraying. | Python, YOLOv8 | Field image dataset; Detection model; Density map; Spray recommendation
Fruit Ripeness Classifier | B | 5 | Classifies fruits as unripe, ripe or overripe from photos. | Python, TensorFlow, Flask | Dataset collection; CNN training; Upload UI; Shelf-life hint
Fruit and Vegetable Quality Grading | I | 6 | Grades produce by size, colour and defects for sorting. | Python, OpenCV, scikit-learn | Image capture setup; Feature extraction; Grade classification; Sorting report
Fish Species Recognition for Markets | I | 6 | Identifies common fish species from photos for buyers and fisheries. | Python, TensorFlow Lite, Flutter | Dataset; Classification model; Mobile app; Price lookup
Satellite Image Land Use Classification | A | 8 | Classifies satellite image tiles into land use types like farmland, forest and urban. | Python, PyTorch, EuroSAT | Tile preparation; CNN training; Map overlay; Change analysis
Flood Mapping from Satellite Images | A | 9 | Maps flooded areas from Sentinel satellite images. | Python, Sentinel Hub, U-Net | Image acquisition; Water segmentation; Before and after comparison; Map output
Garbage Classification for Recycling | B | 5 | Classifies waste images into plastic, paper, metal and organic. | Python, TensorFlow, Streamlit | Dataset; Transfer learning; Web upload; Disposal guidance
Plastic Litter Detection on Beaches | I | 7 | Detects plastic litter in drone or phone images of beaches. | Python, YOLOv8 | Image collection; Annotation; Detection; Litter density map
Tree Counting from Drone Images | I | 7 | Counts trees in plantations from aerial images. | Python, OpenCV, YOLOv8 | Orthomosaic tiling; Tree detection; Counting; Report
Cattle Identification by Muzzle Pattern | A | 9 | Identifies individual cattle from muzzle print images like a fingerprint. | Python, PyTorch | Muzzle dataset; Metric learning; Identification; Registration app

# Traffic, safety and industry
Vehicle Counting and Classification | I | 6 | Counts cars, bikes, buses and trucks passing a road from video. | Python, YOLOv8, DeepSORT | Detection; Tracking; Line crossing counts; Traffic report
Traffic Rule Violation Detection | A | 9 | Detects red light jumping and wrong-side driving from traffic cameras. | Python, YOLOv8, OpenCV | Vehicle detection; Signal state; Violation rules; Evidence capture
Pothole Detection from Dashcam Video | I | 7 | Detects potholes from dashcam footage and tags them with GPS. | Python, YOLOv8, OpenCV | Dataset; Detection model; GPS tagging; Pothole map
Crowd Counting and Density Estimation | A | 8 | Estimates the number of people in crowded scenes for event safety. | Python, PyTorch, CSRNet | Density map model; Training; Count accuracy; Overcrowding alerts
Fire and Smoke Detection from CCTV | I | 6 | Detects early signs of fire and smoke in camera feeds. | Python, YOLOv8, OpenCV | Dataset; Detection model; Video inference; Alert notification
Weapon Detection in Surveillance Video | A | 8 | Detects visible weapons in CCTV footage and raises alerts. | Python, YOLOv8 | Dataset curation; Detection; False alarm reduction; Alert dashboard
PCB Defect Detection | A | 8 | Detects soldering and component defects on printed circuit boards. | Python, PyTorch, OpenCV | Defect dataset; Detection model; Inspection station mock-up; Report
Fabric Defect Detection | I | 7 | Finds holes, stains and weaving defects in textile images. | Python, OpenCV, TensorFlow | Image capture; Anomaly detection; Defect localisation; Quality report
Social Distancing Monitor | I | 5 | Detects people and measures distance between them in video. | Python, YOLOv8, OpenCV | Person detection; Bird's-eye calibration; Distance calculation; Violation log
Parking Lot Occupancy from Camera | I | 6 | Detects free and occupied spaces in a parking lot from a single camera. | Python, OpenCV, PyTorch | Slot marking; Occupancy classifier; Live view; Availability API
Shelf Stock Monitoring for Retail | A | 8 | Detects empty shelf spaces and misplaced products in store images. | Python, YOLOv8 | Product detection; Gap detection; Planogram comparison; Restock alerts
Construction Site Safety Gear Detection | I | 7 | Checks that workers wear helmets and vests in site camera footage. | Python, YOLOv8 | PPE dataset; Detection; Compliance score; Daily report

# Documents and imaging
Document Layout Analysis | A | 8 | Detects titles, paragraphs, tables and figures in scanned documents. | Python, LayoutParser, PyTorch | Page detection; Layout model; Structured output; Evaluation
Table Extraction from Scanned PDFs | A | 8 | Extracts tables from scanned documents into Excel. | Python, OpenCV, Tesseract | Table detection; Cell segmentation; OCR; Excel export
ID Card Information Extraction | I | 6 | Extracts name, number and date of birth from ID card images with masking of sensitive fields. | Python, OpenCV, EasyOCR | Card detection; Field OCR; Validation rules; Masking
Invoice Data Extraction | I | 7 | Extracts vendor, date, totals and line items from invoice images. | Python, Donut or LayoutLM, FastAPI | Dataset; Field extraction; JSON output; Review UI
Old Photo Restoration | I | 6 | Removes scratches and colourises old black-and-white photos. | Python, OpenCV, Pretrained colourisation model | Scratch detection; Inpainting; Colourisation; Before and after view
Image Super-Resolution | A | 8 | Upscales low-resolution images using a deep learning model. | Python, PyTorch, ESRGAN | Training data; Model training; PSNR and SSIM evaluation; Web demo
Background Removal Tool | I | 5 | Removes the background from portraits and product photos. | Python, U2-Net, Streamlit | Segmentation model; Edge refinement; Background replacement; Batch mode
Image Forgery Detection | A | 8 | Detects copy-move and splicing manipulations in images. | Python, OpenCV, PyTorch | Error level analysis; Copy-move detection; Deep model; Heatmap output
Deepfake Video Detection | A | 10 | Classifies face videos as real or deepfake using frame and temporal features. | Python, PyTorch, FaceForensics++ | Face extraction; Frame classifier; Temporal model; Evaluation
Visual Search for Products | A | 8 | Upload a photo of a product and find visually similar items in a catalogue. | Python, CLIP, FAISS, FastAPI | Catalogue embeddings; Vector index; Image query API; Results page
Lane Detection for Driving Videos | I | 6 | Detects road lane lines and estimates lane curvature from video. | Python, OpenCV | Perspective transform; Edge and colour thresholds; Curve fitting; Overlay video
Panorama Image Stitching | I | 5 | Stitches overlapping photos into a panorama using feature matching. | Python, OpenCV | Feature detection; Homography estimation; Blending; Comparison with built-in stitcher
3D Reconstruction from Photos | A | 10 | Builds a 3D point cloud of an object from multiple photos using structure from motion. | Python, OpenCV, COLMAP, Open3D | Image capture; Feature matching; Sparse reconstruction; Point cloud viewer
Barcode and QR Code Reader | B | 3 | Reads barcodes and QR codes from images and webcam. | Python, OpenCV, pyzbar | Image input; Decoding; Webcam mode; History
Image Caption Accessibility Plugin | I | 6 | A browser extension that adds AI-generated alt text to images without descriptions. | JavaScript, Chrome Extension API, Vision API | Image detection on page; Caption generation; Alt text injection; User settings
Sudoku Solver from Camera | I | 5 | Reads a Sudoku puzzle from a photo, solves it and overlays the answer. | Python, OpenCV, TensorFlow | Grid detection; Digit recognition; Backtracking solver; Answer overlay
Cartoonify Photo App | B | 3 | Converts photos into cartoon-style images using image processing. | Python, OpenCV, Streamlit | Edge detection; Colour quantisation; Smoothing; Download
Object Measurement with a Reference Card | B | 4 | Measures the size of objects in a photo using a reference object of known size. | Python, OpenCV | Contour detection; Reference calibration; Dimension calculation; Annotated output
Gaze Tracking with a Webcam | A | 8 | Estimates where on the screen a user is looking using only a webcam. | Python, MediaPipe, OpenCV | Eye landmark tracking; Calibration; Gaze mapping; Heatmap of attention
Online Exam Proctoring with Webcam | A | 9 | Flags suspicious behaviour like multiple faces or looking away during online exams. | Python, OpenCV, MediaPipe, Flask | Face presence check; Head pose estimation; Event logging; Proctor review dashboard
`,
};
