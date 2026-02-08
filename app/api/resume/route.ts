export async function GET() {
  const resumeContent = `
N. SASIDHARAN
Subedar Major (Airframe) | Indian Army Aviation Professional

CONTACT INFORMATION
Phone: +91 60062 91957
Email: nsasidharan0357@gmail.com
Address: Bangalore, Karnataka, India
Website: www.reallygreatsite.com

═════════════════════════════════════════════════════════════════════

PROFESSIONAL OBJECTIVE

Seeking positions in airport authority operations, MRO companies, PSU/Government technical roles, and aviation operations leadership. Bringing 30 years of disciplined service, technical expertise, and operational excellence in aircraft maintenance and aviation safety.

═════════════════════════════════════════════════════════════════════

PROFESSIONAL EXPERIENCE

INDIAN ARMY – AVIATION UNITS
Subedar Major (Airframe)
1996 – Present (30 Years)

Key Responsibilities & Achievements:
• Supervised airframe inspection, maintenance, and repair operations
• Conducted Non-Destructive Testing (NDT) including A-Scan ultrasonic testing
• Performed composite structure inspection and repair with aviation standards
• Managed tarmac operations and aircraft ground handling procedures
• Led technical teams ensuring aviation safety compliance
• Maintained technical logs and maintenance documentation
• Managed aviation stores, tools, and inventory control
• Performed liaison duties with senior officers and external agencies
• Organised Flying Accident Mishap Enquiries (FAMEs) and operational events

═════════════════════════════════════════════════════════════════════

CORE COMPETENCIES

Technical: Airframe Maintenance | Composite Repair | NDT (A-Scan) | Aircraft Ground Handling | Tarmac Management
Leadership: Team Leadership | Man Management | Technical Documentation | Inventory Control | Safety Compliance

═════════════════════════════════════════════════════════════════════

TRAINING & QUALIFICATIONS

• Airframe Trade Technical Training – Indian Army
• Non-Destructive Testing (A-Scan) – Indian Army Aviation
• Composite Repair Training – Indian Army Aviation
• Aviation Safety & Quality Assurance Courses – Indian Army

═════════════════════════════════════════════════════════════════════

SERVICE HIGHLIGHTS

✓ 30 years of disciplined and blemish-free service
✓ Leadership of large aviation technical teams
✓ Execution of mission-critical aviation operations
✓ Strong safety and compliance record

═════════════════════════════════════════════════════════════════════

References and additional documentation available upon request.
`

  return new Response(resumeContent, {
    headers: {
      'Content-Type': 'text/plain',
      'Content-Disposition': 'attachment; filename="N_Sasidharan_Resume.txt"',
    },
  })
}
