

const departments = [
    {
      id: 1,
      name: 'COMPUTER SOFTWARE APPLICATION (CSA)',
      subjects: [
        { id: 1, name: 'Soft Skill', pdf: 'soft-skill.pdf', video: 'soft-skill-video.mp4' },
        { id: 2, name: 'Trade Technology', pdf: 'trade-tech.pdf', video: 'trade-tech-video.mp4' },
        { id: 3, name: 'Training Methodology', pdf: 'training-methodology.pdf', video: 'training-methodology-video.mp4' },
        // Add more subjects for CSA as needed
      ],
    },
    {
      id: 2,
      name: 'COMPUTER HARDWARE AND NETWORK MANAGEMENT (CHNM)',
      subjects: [
        { id: 4, name: 'Subject A', pdf: 'subject-a.pdf', video: 'subject-a-video.mp4' },
        { id: 5, name: 'Subject B', pdf: 'subject-b.pdf', video: 'subject-b-video.mp4' },
        // Add more subjects for CHNM as needed
      ],
    },
    {
      id: 3,
      name: 'SOLAR TECHNICIAN',
      subjects: [
        { id: 6, name: 'Subject X', pdf: 'subject-x.pdf', video: 'subject-x-video.mp4' },
        { id: 7, name: 'Subject Y', pdf: 'subject-y.pdf', video: 'subject-y-video.mp4' },
        // Add more subjects for Solar Technician as needed
      ],
    },
    {
      id: 4,
      name: 'ELECTRICIAN',
      subjects: [
        { id: 8, name: 'Subject P', pdf: 'subject-p.pdf', video: 'subject-p-video.mp4' },
        { id: 9, name: 'Subject Q', pdf: 'subject-q.pdf', video: 'subject-q-video.mp4' },
        // Add more subjects for Electrician as needed
      ],
    },
    {
      id: 5,
      name: 'ELECTRONIC MECHANICS (EM)',
      subjects: [
        { id: 10, name: 'Subject M', pdf: 'subject-m.pdf', video: 'subject-m-video.mp4' },
        { id: 11, name: 'Subject N', pdf: 'subject-n.pdf', video: 'subject-n-video.mp4' },
        // Add more subjects for Electronic Mechanics (EM) as needed
      ],
    },
    // Add more departments as needed
  ];


document.addEventListener('DOMContentLoaded', function () {
    const subjectsContainer = document.getElementById('subjects-container');

    // Retrieve departmentId and selected from the URL
    const urlParams = new URLSearchParams(window.location.search);
    console.log(window.location.search); // Add this line to log the URL parameters
    const departmentId = urlParams.get('departmentId');
    const isSelected = urlParams.get('selected') === 'true';

    if (departmentId) {
        // Retrieve the selected department and display subjects
        const selectedDepartment = departments.find(department => department.id === parseInt(departmentId));
        displaySubjects(selectedDepartment, subjectsContainer);
    } else {
        console.error('Department ID not found in the URL.');
    }
});

function displaySubjects(selectedDepartment, container) {
    if (selectedDepartment) {
        selectedDepartment.subjects.forEach(subject => {
            const subjectHtml = `
                <div class="col-md-6 mb-4">
                    <div class="card">
                        <div class="card-body">
                            <h5 class="card-title">${subject.name}</h5>
                            <div class="mb-2">
                                <a href="/${selectedDepartment.name.toLowerCase()}/${subject.pdf}" class="btn btn-danger mr-2" target="_blank" rel="noopener noreferrer">PDF</a>
                                <a href="/${selectedDepartment.name.toLowerCase()}/${subject.video}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">Video</a>
                            </div>
                        </div>
                    </div>
                </div>
            `;

            container.innerHTML += subjectHtml;
        });
    }
}
